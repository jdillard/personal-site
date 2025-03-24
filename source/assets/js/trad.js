import * as d3 from 'd3';
import u from 'umbrellajs';
import axios from 'axios';

function create_timeline(domElement, min, max, totalItems, totalBrands, metric=true) {

    //--------------------------------------------------------------------------
    // chart

    // chart geometry
    const margin = {top: 10, right: 10, bottom: 10, left: 10},
        outerWidth = 750,
        outerHeight = totalItems*10 + totalBrands*14,
        width = outerWidth - margin.left - margin.right,
        height = outerHeight - margin.top - margin.bottom,
        units = metric ? "mm" : "in";

    // global timeline variables
    const timeline = {};   // The timeline
    const data = {};       // Container for the data
    const components = []; // All the components of the timeline for redrawing
    const bandGap = 3;    // Gap between to consecutive bands
    const bands = {};      // Registry for all the bands in the timeline
    let bandY = 0;       // Y-Position of the next band
    let bandNum = 0;     // Count of bands for ids

    // Create svg element
    const svg = d3.select(domElement).append("svg")
        .attr("class", "svg")
        .attr("id", "svg")
        .attr("width", outerWidth)
        .attr("height", outerHeight)
        .append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top +  ")");

    svg.append("clipPath")
        .attr("id", "chart-area")
        .append("rect")
        .attr("width", width)
        .attr("height", height);

    const chart = svg.append("g")
            .attr("class", "chart")
            .attr("clip-path", "url(#chart-area)" );

    const tooltip = d3.select("body")
        .append("div")
        .attr("class", "tooltip")
        .style("visibility", "visible");

    function convertToInches(length, metric=true) {
        if(metric)  {
            return +length;
        } else {
            return (+length / 25.4).toFixed(2);
        }
    }

    //--------------------------------------------------------------------------
    // data

    timeline.data = function(items) {

        const tracks = [];

        data.items = items;

        // function showItems(n) {
        //     let count = 0, n = n || 10;
        //     console.log("\n");
        //     items.forEach(function (d) {
        //         count++;
        //         if (count > n) return;
        //         //console.log(+d.start + " - " + +d.end + ": " + d.model);
        //     });
        // }

        function compareAscending(item1, item2) {
            let result = +item1.start - +item2.start;
            // earlier first
            if (result < 0) { return -1; }
            if (result > 0) { return 1; }
            // longer first
            result = +item2.end - +item1.end;
            if (result < 0) { return -1; }
            if (result > 0) { return 1; }
            return 0;
        }

        function calculateTracks(items) {
            let track = 0;

            function sortForward() {
                items.forEach(function (item) {
                    item.track = track;
                    tracks[track] = +item.end;
                    track++;
                });
            }

            data.items.sort(compareAscending);
            sortForward();
        }

        calculateTracks(data.items);
        data.nTracks = tracks.length;
        data.minItem = d3.min(data.items, function (d) { return convertToInches(d.start, metric); });
        data.maxItem = d3.max(data.items, function (d) { return convertToInches(d.end, metric); });

        return timeline;
    };

    //----------------------------------------------------------------------
    // band


    timeline.band = function (bandNames) {

        let filtered = data.items;

        bandNames.forEach(function(bandName) {
            if(bandNames.length > 1) {
                filtered = data.items.filter(function(d){
                    return d.manufacturer === bandName;
                });
            }
            const band = {};
            band.id = "band" + bandNum;
            band.x = 0;
            band.y = bandY;
            band.w = width;
            band.h = filtered.length * 10 + 6;
            band.trackOffset = 4;
            band.trackHeight = 10;
            band.itemHeight = band.trackHeight * 0.8,
            band.parts = [],
            band.xScale = d3.scaleLinear()
                .domain([convertToInches(min, metric), convertToInches(max, metric)])
                .range([0, band.w]);
            band.yScale = function (track) {
                return band.trackOffset + track * band.trackHeight;
            };

            band.g = chart.append("g")
                .attr("id", band.id)
                .attr("transform", "translate(0," + band.y +  ")");

            // Items
            const items = band.g.selectAll("g")
                .data(filtered)
                .join("svg")
                .attr("y", function (d, i) { return band.yScale(i); })
                .attr("height", band.itemHeight)
                .attr("class", function (d, i) { return "part interval " + d.color + " item" + i;});

            const intervals = d3.select("#band" + bandNum).selectAll(".interval");
            intervals.append("rect")
                .attr("width", "100%")
                .attr("height", "100%");
            intervals.append("text")
                .attr("class", "intervalLabel")
                .attr("x", 1)
                .attr("y", 10);

            // Gridline
            const gridlines = d3.axisTop()
                .tickFormat("")
                .tickSize(band.h)
                .scale(band.xScale)
                .ticks(40);


            band.g.append("g").lower()
                .attr("class", "gridlines")
                .attr("transform", "translate(0," + (band.h)  + ")")
                .call(gridlines);

            band.addActions = function(actions) {
                // actions - array: [[trigger, function], ...]
                actions.forEach(function (action) {
                    items.on(action[0], action[1]);
                });
            };

            band.redraw = function () {
                items
                    .attr("x", function (d) { return band.xScale(convertToInches(d.start, metric));})
                    .attr("width", function (d) {
                        return band.xScale(convertToInches(d.end, metric)) - band.xScale(convertToInches(d.start, metric)); });
                band.parts.forEach(function(part) { part.redraw(); });
            };

            bands[bandName] = band;
            components.push(band);
            // Adjust values for next band
            bandY += band.h + bandGap;
            bandNum += 1;
        });

        return timeline;
    };

    //----------------------------------------------------------------------
    // labels

    timeline.labels = function (bandName) {

        const band = bands[bandName],
            labelWidth = 46,
            labelHeight = 20,
            labelTop = band.y + band.h - 10,
            y = band.y + band.h + 1,
            yText = 15;

        const labelDefs = [
                ["start", "bandMinMaxLabel", 0, 4,
                    function(min, max) { return min.toFixed(2) + units; },
                    "Start of the selected interval", band.x + 30, labelTop],
                ["end", "bandMinMaxLabel", band.w - labelWidth, band.w - 4,
                    function(min, max) { return max.toFixed(2) + units; },
                    "End of the selected interval", band.x + band.w - 152, labelTop]
            ];

        const bandLabels = chart.append("g")
            .attr("id", bandName + "Labels")
            .attr("transform", "translate(0," + (band.y + band.h + 1) +  ")")
            .selectAll("#" + bandName + "Labels")
            .data(labelDefs)
            .enter().append("g")
            .on("mouseover", function(event, d) {
                tooltip.html(d[5])
                    .style("top", d[7] + "px")
                    .style("left", d[6] + "px")
                    .style("visibility", "visible");
                })
            .on("mouseout", function(event, d){
                tooltip.style("visibility", "hidden");
            });

        bandLabels.append("rect")
            .attr("class", "bandLabel")
            .attr("x", function(d) { return d[2];})
            .attr("width", labelWidth)
            .attr("height", labelHeight)
            .style("opacity", 1);

        const labels = bandLabels.append("text")
            .attr("class", d => d[1])
            .attr("id", d => d[0])
            .attr("x", d => d[3])
            .attr("y", yText)
            .attr("text-anchor", d => d[0]);

        labels.redraw = function () {
            const min = band.xScale.domain()[0],
                max = band.xScale.domain()[1];

            labels.text(function (d) { return d[4](min, max); });
        };

        band.parts.push(labels);
        components.push(labels);

        return timeline;
    };

    //----------------------------------------------------------------------
    // tooltips

    timeline.tooltips = function (bandNames) {

        /* manufacturer label */

        bandNames.forEach(function(bandName) {

            const band = bands[bandName],
                labelWidth = 46,
                labelHeight = 20,
                labelTop = band.y + band.h - 10,
                y = band.y + band.h + 1,
                yText = -10;

            const labelDefs = [
                    [bandName+"Title", "bandTitle", 0, 10,
                        function(min, max) { return bandName; },
                        bandName, band.x + 30, labelTop]
                ];

            const bandLabels = chart.append("g")
                .attr("id", bandName.replace(/\s+/g, '') + "Labels")
                .attr("transform", "translate(0," + (band.y + band.h + 1) +  ")")
                .selectAll("#" + bandName.replace(/\s+/g, '') + "Labels")
                .data(labelDefs)
                .enter().append("g")
                .on("mouseover", function(event, d) {
                    tooltip.html(d[5])
                        .style("top", d[7] + "px")
                        .style("left", d[6] + "px")
                        .style("visibility", "visible");
                    })
                .on("mouseout", function(event, d){
                    tooltip.style("visibility", "hidden");
                });

            const labels = bandLabels.append("text")
                .attr("class", d => d[1])
                .attr("id", d => d[0])
                .attr("x", d => d[3])
                .attr("y", yText)
                .attr("text-anchor", d => d[0]);

            labels.redraw = function () {
                const min = band.xScale.domain()[0],
                    max = band.xScale.domain()[1];

                labels.text(function (d) { return d[4](min, max); });
            };

            band.parts.push(labels);
            components.push(labels);

            /* tooltips */

            band.addActions([
                // trigger, function
                ["mouseover", showTooltip],
                ["mouseout", hideTooltip]
            ]);

            // And update the definition of addActions
            band.addActions = function(actions) {
                // actions - array: [[trigger, function], ...]
                actions.forEach(function (action) {
                    items.on(action[0], action[1]);
                });
            };

            function getHtml(element, d) {
                return element.manufacturer + '<br>' + element.model + ' #' + element.size + "<br>" + convertToInches(element.start, metric) + units + " - " + convertToInches(element.end, metric) + units;
            }

            function showTooltip (event, d) {
                const x = event.pageX < band.x + band.w / 2
                        ? event.pageX + 10
                        : event.pageX - 110,
                    y = event.pageY < band.y + band.h / 2
                        ? event.pageY + 30
                        : event.pageY - 30;
                tooltip
                    .html(getHtml(d3.select(this).datum(), d))
                    .style("top", y + "px")
                    .style("left", x + "px")
                    .style("visibility", "visible");
            }

            function hideTooltip (event, d) {
                tooltip.style("visibility", "hidden");
            }
        });

        return timeline;
    };

    //----------------------------------------------------------------------
    // xAxis

    timeline.xAxis = function (bandName) {

        const band = bands[bandName];

        const axis = d3.axisBottom(band.xScale)
            .tickSizeInner(6)
            .tickSizeOuter(0)
            .tickFormat(function (d) { return d; })
            .ticks(20);

        const xAxis = chart.append("g")
            .attr("class", "axis")
            .attr("transform", "translate(0," + (band.y + band.h)  + ")");

        xAxis.redraw = function () {
            xAxis.call(axis);
        };

        band.parts.push(xAxis); // for brush.redraw
        components.push(xAxis); // for timeline.redraw

        return timeline;
    };

    //----------------------------------------------------------------------
    // brush

    timeline.brush = function (bandName, targetNames) {

        const band = bands[bandName];

        const brush = d3.brushX()
            .extent([[0, 0], [band.w, band.h]])
            .on("brush", function(event, d) {
                const domain = event.selection === null
                    ? band.xScale.domain()
                    : event.selection.map(band.xScale.invert);
                targetNames.forEach(function(targetName) {
                    bands[targetName].xScale.domain(domain);
                    bands[targetName].redraw();
                });
            });

        const xBrush = band.g.append("svg")
            .attr("class", "x brush")
            .call(brush);

        xBrush.selectAll("rect")
            .attr("y", 4)
            .attr("height", band.h - 4);

        return timeline;
    };

    //----------------------------------------------------------------------
    // redraw

    timeline.redraw = function () {
        components.forEach(function (component) {
            component.redraw();
        });
    };

    return timeline;
}

function getIssues() {
    axios.get('https://api.github.com/repos/jdillard/personal-site/issues?labels=trad&state=open')
      .then(function (response) {
        for (let c in response.data) {
          let temp_html = '<div class="mv2"><a class="no-underline relative f6 black-70 hover-light-red" href="'+response.data[c].html_url+'">'+response.data[c].title+'</a></div>';
          document.getElementById("issues").insertAdjacentHTML("beforeend", temp_html);
        }
      })
      .catch(function (error) {
        console.log(error);
    });
  }

/***
A timeline can have the following components:

    // Defines an area for timeline items. Multiple bands are
    // allowed.
    .band(bandName)
        bandName - string; the name of the band for references.

    // Defines an xAxis for a band.
    .xAxis(bandName)
        bandName - string; the name of the band the xAxis will  be
            attached to.

    // Shows the start and end of the range of the band.
    .labels(bandName)
        bandName - string; the name of the band the labels will be
            attached to.

    // Shows tooltips for the selected interval of the band.
    .tooltips(bandName)
        bandName - string; the name of the band the labels will be
            attached to.

    // Controls the time interval of the targetBand.
    .brush(parentBand, targetBands]
        parentBand - string; the band that the brush will be
            attached to.
        targetBands - array; the bands that are controlled by the
            brush.
***/

d3.csv("/assets/csv/cams-by-size.csv")
    .then(function(dataset) {
        //const brands = [...new Set(dataset.map(item => item.manufacturer))];
        //const brandIds = brands.map(item => item.replace(/\s+/g, ''));
        //TODO if grouping is true use brands, else use one large band
        const max = dataset.reduce((max, p) => +p.end > max ? +p.end : max, +dataset[0].end);
        const filteredData = dataset.filter(function(d){
            return d.start >= 0 && d.end <= max;
        });
        const filteredBrands = [...new Set(filteredData.map(item => item.manufacturer))];
        const filteredMax = filteredData.reduce((max, p) => +p.end > max ? +p.end : max, +filteredData[0].end);

        create_timeline("#timeline", 0, filteredMax, filteredData.length, filteredBrands.length)
            .data(filteredData)
            .band(filteredBrands, 1)
            .tooltips(filteredBrands)
            .xAxis(filteredBrands[filteredBrands.length - 1])
            //.labels(filteredBrands[filteredBrands.length - 1])
            .redraw();
    });

u("#issues-toggle").on('click', function(event, d) {
    if(u("#issues").hasClass('open')) {
        u("#issues").removeClass('open');
        u("#issues-toggle").text('Show Known Issues');
        document.getElementById("issues").innerHTML = "";
    } else {
        u("#issues").addClass('open');
        u("#issues-toggle").text('Hide Known Issues');
        getIssues();
    }
    });
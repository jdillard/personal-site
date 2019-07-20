import * as d3 from 'd3';

function create_timeline(domElement) {

    //--------------------------------------------------------------------------
    // chart

    // chart geometry
    var margin = {top: 20, right: 20, bottom: 20, left: 20},
        outerWidth = 750,
        outerHeight = 1375,
        width = outerWidth - margin.left - margin.right,
        height = outerHeight - margin.top - margin.bottom;

    // global timeline variables
    var timeline = {},   // The timeline
        data = {},       // Container for the data
        components = [], // All the components of the timeline for redrawing
        bandGap = 3,    // Gap between to consecutive bands
        bands = {},      // Registry for all the bands in the timeline
        bandY = 0,       // Y-Position of the next band
        bandNum = 0;     // Count of bands for ids

    // Create svg element
    var svg = d3.select(domElement).append("svg")
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

    var chart = svg.append("g")
            .attr("class", "chart")
            .attr("clip-path", "url(#chart-area)" );

    var tooltip = d3.select("body")
        .append("div")
        .attr("class", "tooltip")
        .style("visibility", "visible");

    //--------------------------------------------------------------------------
    // data

    timeline.data = function(items) {

        var tracks = [];

        data.items = items;

        // items.forEach(function (d) {
        //     console.log(+d.start + " - " + +d.end + ": " + d.model);
        // })

        function showItems(n) {
            var count = 0, n = n || 10;
            console.log("\n");
            items.forEach(function (d) {
                count++;
                if (count > n) return;
                //console.log(+d.start + " - " + +d.end + ": " + d.model);
            });
        }

        function compareAscending(item1, item2) {
            var result = +item1.start - +item2.start;
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
            var track = 0;

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
        data.minItem = d3.min(data.items, function (d) { return +d.start; });
        data.maxItem = d3.max(data.items, function (d) { return +d.end; });

        return timeline;
    };

    //----------------------------------------------------------------------
    // band


    timeline.band = function (bandNames, sizeFactor) {

        let filtered = data.items;

        bandNames.forEach(function(bandName) {
            if(bandNames.length > 1) {
                filtered = data.items.filter(function(d){return d.manufacturer === bandName;});
            }
            var band = {};
            band.id = "band" + bandNum;
            band.x = 0;
            band.y = bandY;
            band.w = width;
            band.h = filtered.length * 11;
            band.trackOffset = 4;
            band.trackHeight = 10;
            band.itemHeight = band.trackHeight * 0.8,
            band.parts = [],
            band.xScale = d3.scaleLinear()
                .domain([d3.min(filtered, function (d) { return +d.start; }), d3.max(filtered, function (d) { return +d.end; })])
                .range([0, band.w]);
            band.yScale = function (track) {
                return band.trackOffset + track * band.trackHeight;
            };

            band.g = chart.append("g")
                .attr("id", band.id)
                .attr("transform", "translate(0," + band.y +  ")");

            band.g.append("rect")
                .attr("class", "band")
                .attr("width", band.w)
                .attr("height", band.h);

            // Items
            var items = band.g.selectAll("g")
                .data(filtered)
                .enter().append("svg")
                .attr("y", function (d, i) { return band.yScale(i); })
                .attr("height", band.itemHeight)
                .attr("class", function (d, i) { return "part interval " + d.color + " item" + i;});

            var intervals = d3.select("#band" + bandNum).selectAll(".interval");
            intervals.append("rect")
                .attr("width", "100%")
                .attr("height", "100%");
            intervals.append("text")
                .attr("class", "intervalLabel")
                .attr("x", 1)
                .attr("y", 10);

            band.addActions = function(actions) {
                // actions - array: [[trigger, function], ...]
                actions.forEach(function (action) {
                    items.on(action[0], action[1]);
                });
            };

            band.redraw = function () {
                items
                    .attr("x", function (d) { return band.xScale(+d.start);})
                    .attr("width", function (d) {
                        return band.xScale(+d.end) - band.xScale(+d.start); });
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

        var band = bands[bandName],
            labelWidth = 46,
            labelHeight = 20,
            labelTop = band.y + band.h - 10,
            y = band.y + band.h + 1,
            yText = 15;

        var labelDefs = [
                ["start", "bandMinMaxLabel", 0, 4,
                    function(min, max) { return min.toFixed(2) + 'mm'; },
                    "Start of the selected interval", band.x + 30, labelTop],
                ["end", "bandMinMaxLabel", band.w - labelWidth, band.w - 4,
                    function(min, max) { return max.toFixed(2) + 'mm'; },
                    "End of the selected interval", band.x + band.w - 152, labelTop]
            ];

        var bandLabels = chart.append("g")
            .attr("id", bandName + "Labels")
            .attr("transform", "translate(0," + (band.y + band.h + 1) +  ")")
            .selectAll("#" + bandName + "Labels")
            .data(labelDefs)
            .enter().append("g")
            .on("mouseover", function(d) {
                tooltip.html(d[5])
                    .style("top", d[7] + "px")
                    .style("left", d[6] + "px")
                    .style("visibility", "visible");
                })
            .on("mouseout", function(){
                tooltip.style("visibility", "hidden");
            });

        bandLabels.append("rect")
            .attr("class", "bandLabel")
            .attr("x", function(d) { return d[2];})
            .attr("width", labelWidth)
            .attr("height", labelHeight)
            .style("opacity", 1);

        var labels = bandLabels.append("text")
            .attr("class", function(d) { return d[1];})
            .attr("id", function(d) { return d[0];})
            .attr("x", function(d) { return d[3];})
            .attr("y", yText)
            .attr("text-anchor", function(d) { return d[0];});

        labels.redraw = function () {
            var min = band.xScale.domain()[0],
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

            var band = bands[bandName],
                labelWidth = 46,
                labelHeight = 20,
                labelTop = band.y + band.h - 10,
                y = band.y + band.h + 1,
                yText = -10;

            var labelDefs = [
                    [bandName+"Title", "bandTitle", 0, 10,
                        function(min, max) { return bandName; },
                        bandName, band.x + 30, labelTop]
                ];

            var bandLabels = chart.append("g")
                .attr("id", bandName.replace(/\s+/g, '') + "Labels")
                .attr("transform", "translate(0," + (band.y + band.h + 1) +  ")")
                .selectAll("#" + bandName.replace(/\s+/g, '') + "Labels")
                .data(labelDefs)
                .enter().append("g")
                .on("mouseover", function(d) {
                    tooltip.html(d[5])
                        .style("top", d[7] + "px")
                        .style("left", d[6] + "px")
                        .style("visibility", "visible");
                    })
                .on("mouseout", function(){
                    tooltip.style("visibility", "hidden");
                });

            var labels = bandLabels.append("text")
                .attr("class", function(d) { return d[1];})
                .attr("id", function(d) { return d[0];})
                .attr("x", function(d) { return d[3];})
                .attr("y", yText)
                .attr("text-anchor", function(d) { return d[0];});

            labels.redraw = function () {
                var min = band.xScale.domain()[0],
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

            function getHtml(element, d) {
                return d.manufacturer + ' ' + d.model + ' #' + d.size + "<br>" + +d.start + "mm - " + +d.end + 'mm';
            }

            function showTooltip (d) {

                var x = event.pageX < band.x + band.w / 2
                        ? event.pageX + 10
                        : event.pageX - 110,
                    y = event.pageY < band.y + band.h / 2
                        ? event.pageY + 30
                        : event.pageY - 30;

                tooltip
                    .html(getHtml(d3.select(this), d))
                    .style("top", y + "px")
                    .style("left", x + "px")
                    .style("visibility", "visible");
            }

            function hideTooltip () {
                tooltip.style("visibility", "hidden");
            }

        });

        return timeline;
    };

    //----------------------------------------------------------------------
    // xAxis

    timeline.xAxis = function (bandName) {

        var band = bands[bandName];

        var axis = d3.axisBottom(band.xScale)
            .tickSize(6, 0)
            .tickFormat(function (d) { return d; })
            .ticks(30);

        var xAxis = chart.append("g")
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

        var band = bands[bandName];

        var brush = d3.svg.brush()
            .x(band.xScale.range([0, band.w]))
            .on("brush", function() {
                var domain = brush.empty()
                    ? band.xScale.domain()
                    : brush.extent();
                targetNames.forEach(function(d) {
                    bands[d].xScale.domain(domain);
                    bands[d].redraw();
                });
            });

        var xBrush = band.g.append("svg")
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

/***
TODOS:
    - Add Manufacturer label to left side of bands
    - Add Model label to right side of tracks
    - Dynamically calculate bands based on unique manufacturers
    - Dynamically calulate height of chart
    - Toggle band/manufacturer
    - Toggle each model/track
    - Toggle between mm or in
    - Fix how tooltip shows up on page load
    - Make responsive
    - Add vertical gridlines
        - https://bl.ocks.org/d3noob/c506ac45617cf9ed39337f99f8511218

A timeline can have the following components:

    // Defines an area for timeline items. Multiple bands are
    // allowed.
    .band(bandName, sizeFactor)
        bandName - string; the name of the band for references.
        sizeFactor - percentage; height of the band relation to the
            total height.

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
        const brands = [...new Set(dataset.map(item => item.manufacturer))];
        //const brandIds = brands.map(item => item.replace(/\s+/g, ''));
        //brands.length = 2;
        //TODO if grouping is true use brands, else use one large band
        create_timeline("#timeline")
            .data(dataset)
            .band(brands, 1)
            .tooltips(brands)
            .xAxis(brands[brands.length - 1])
            .labels(brands[brands.length - 1])
            .redraw();
    })
    .catch(function(error){
        console.log(error);
     });
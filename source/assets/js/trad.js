import * as d3 from 'd3';
import u from 'umbrellajs';
import axios from 'axios';

// currently selected piece, persisted across resize rebuilds
let selectedKey = null;
// protection types with visible rows: 'active' (cams), 'passive' (nuts, hexes, tricams)
const visibleTypes = new Set(['active', 'passive']);
// brands whose rows are hidden
const hiddenBrands = new Set();
// x axis scale: logarithmic (default) or linear
let logScale = true;
// units: metric (mm) or imperial (in)
let metricUnits = true;

function itemKey(d) {
    return d.manufacturer + '|' + d.model + '|' + d.size;
}

// minimum share of the selected range a piece must cover to count as an equivalent
const MIN_COVERAGE = 0.6;
// width ratio beyond which a piece is flagged as wider / narrower
const WIDTH_FLAG = 1.5;

function overlap(a, b) {
    if (a.type !== b.type) { return 0; }
    return Math.max(0, Math.min(+a.end, +b.end) - Math.max(+a.start, +b.start));
}

// share of the selected range that piece b covers (0 - 1)
function coverage(selected, b) {
    return overlap(selected, b) / (+selected.end - +selected.start);
}

// how close two ranges are in size and position: intersection / union (0 - 1)
function closeness(a, b) {
    const inter = overlap(a, b);
    if (inter <= 0) { return 0; }
    const union = Math.max(+a.end, +b.end) - Math.min(+a.start, +b.start);
    return inter / union;
}

// e.g. "2.5× wider", or "" when the widths are similar
function widthNote(selected, b) {
    const ratio = (+b.end - +b.start) / (+selected.end - +selected.start);
    if (ratio >= WIDTH_FLAG) { return ratio.toFixed(1) + '× wider'; }
    if (ratio <= 1 / WIDTH_FLAG) { return (1 / ratio).toFixed(1) + '× narrower'; }
    return '';
}


// "nice" tick values for a log scale (1, 2, 5, 10, 20, 50, ...) within the domain,
// thinned out to at most maxTicks
function logTicks(domain, maxTicks) {
    const [lo, hi] = domain.map(Number);
    for (const steps of [[1, 2, 3, 5, 7], [1, 2, 5], [1, 3], [1]]) {
        const ticks = [];
        for (let p = Math.pow(10, Math.floor(Math.log10(lo))); p <= hi; p *= 10) {
            steps.forEach(m => {
                const v = +(m * p).toPrecision(6); // avoid float noise like 0.30000000000000004
                // skip values hugging the edges so labels aren't clipped
                const pos = Math.log(v / lo) / Math.log(hi / lo);
                if (pos >= 0.02 && pos <= 0.96) { ticks.push(v); }
            });
        }
        if (ticks.length <= Math.max(2, maxTicks) || steps.length === 1) { return ticks; }
    }
}

// tick values for either scale type
function scaleTicks(scale, maxTicks) {
    if (logScale) { return logTicks(scale.domain(), maxTicks); }
    return scale.ticks(Math.max(2, Math.floor(maxTicks)));
}

function create_timeline(domElement, min, max, brandInfo, metric=true) {

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

    //--------------------------------------------------------------------------
    // chart

    // chart geometry
    const margin = {top: 10, right: 10, bottom: 10, left: 10};
    const containerWidth = d3.select(domElement).node().getBoundingClientRect().width;
    const outerWidth = Math.min(containerWidth, 750); // Use container width but cap at 750px
    const axisHeight = 22;   // room for an x axis (top and bottom)
    const headerHeight = 21; // brand header above each band
    const trackHeight = 10;  // one row per piece
    const bandGap = 3;       // Gap between to consecutive bands
    // height of a band: header, plus its rows unless the brand is hidden
    const bandHeight = b => headerHeight + (b.hidden ? 0 : b.count * trackHeight + 6);
    const outerHeight = d3.sum(brandInfo, b => bandHeight(b) + bandGap) +
        2*axisHeight + margin.top + margin.bottom;
    const width = outerWidth - margin.left - margin.right;
    const height = outerHeight - margin.top - margin.bottom;
    const units = metric ? "mm" : "in";

    // global timeline variables
    const timeline = {};   // The timeline
    const data = {};       // Container for the data
    const components = []; // All the components of the timeline for redrawing
    const bands = {};      // Registry for all the bands in the timeline
    let bandY = axisHeight; // Y-Position of the next band (below the top axis)
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

    let tooltip = d3.select("body").select("div.tooltip");
    if (tooltip.empty()) {
        tooltip = d3.select("body")
            .append("div")
            .attr("class", "tooltip");
    }
    tooltip.style("visibility", "hidden");

    // mm (as stored in the csv) -> display units, as a number
    function convertToInches(length, metric=true) {
        return metric ? +length : +length / 25.4;
    }

    // a length as display text without units, e.g. "13.6" or "0.54"
    function fmtLength(length) {
        const v = convertToInches(length, metric);
        return metric ? String(+v.toFixed(1)) : v.toFixed(2);
    }

    // a piece's range as display text, e.g. "13.6–22.5mm"
    function fmtRange(d) {
        return fmtLength(d.start) + '–' + fmtLength(d.end) + units;
    }

    //--------------------------------------------------------------------------
    // data

    timeline.data = function(items) {

        const tracks = [];

        data.items = items;

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

    timeline.band = function (brands) {
        // brands - array of {name, count, hidden}

        brands.forEach(function(info) {
            const bandName = info.name;
            const filtered = info.hidden ? [] : data.items.filter(d => d.manufacturer === bandName);

            const band = {};
            band.id = "band" + bandNum;
            band.x = 0;
            band.y = bandY;
            band.w = width;
            band.h = bandHeight(info);
            band.trackOffset = headerHeight + 3;
            band.trackHeight = trackHeight;
            band.itemHeight = band.trackHeight * 0.8;
            band.parts = [];
            band.xScale = (logScale ? d3.scaleLog() : d3.scaleLinear())
                .domain([convertToInches(min, metric), convertToInches(max, metric)])
                .range([0, band.w]);
            band.yScale = function (track) {
                return band.trackOffset + track * band.trackHeight;
            };

            band.g = chart.append("g")
                .attr("id", band.id)
                .attr("transform", "translate(0," + band.y +  ")");

            // Header: click to show / hide the brand
            const header = band.g.append("g")
                .attr("class", "bandHeader" + (info.hidden ? " collapsed" : ""))
                .attr("role", "button")
                .attr("aria-expanded", !info.hidden)
                .on("click", (event) => {
                    event.stopPropagation(); // don't clear the selection
                    toggleBrand(bandName, domElement);
                });
            header.append("title")
                .text((info.hidden ? "Show " : "Hide ") + bandName);
            header.append("rect")
                .attr("class", "bandHeaderBg")
                .attr("width", band.w)
                .attr("height", headerHeight);
            header.append("line")
                .attr("x1", 0)
                .attr("x2", band.w)
                .attr("y1", 0.5)
                .attr("y2", 0.5);
            const headerText = header.append("text")
                .attr("x", 0)
                .attr("y", 15);
            headerText.append("tspan")
                .attr("class", "bandCaret")
                .text(info.hidden ? "▸ " : "▾ ");
            headerText.append("tspan")
                .attr("class", "bandName")
                .text(bandName);
            headerText.append("tspan")
                .attr("class", "bandCount")
                .text(" · " + info.count + (info.hidden ? " hidden" : ""));

            // Items
            const items = band.g.selectAll("svg.interval")
                .data(filtered)
                .join("svg")
                .attr("y", function (d, i) { return band.yScale(i); })
                .attr("height", band.itemHeight)
                .attr("class", function (d, i) { return "part interval " + d.color + " item" + i;});

            items.append("rect")
                .attr("width", "100%")
                .attr("height", "100%");

            // Gridlines, behind the rows only
            if (!info.hidden) {
                const gridlines = d3.axisTop()
                    .tickFormat("")
                    .tickSize(band.h - headerHeight)
                    .scale(band.xScale)
                    .tickValues(scaleTicks(band.xScale, band.w / 50));

                band.g.append("g").lower()
                    .attr("class", "gridlines")
                    .attr("transform", "translate(0," + (band.h)  + ")")
                    .call(gridlines);
            }

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
                const [mx, my] = d3.pointer(event, document.body);
                tooltip.html(d[5])
                    .style("top", `${my}px`)
                    .style("left", `${mx}px`)
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

        bandNames.forEach(function(bandName) {
            const band = bands[bandName];

            /* tooltips */
            band.addActions([
                // trigger, function
                ["mouseover", showTooltip],
                ["mouseout", hideTooltip]
            ]);

            function getHtml(element, d) {
                let html = element.manufacturer + '<br>' + element.model + ' #' + element.size + "<br>" + fmtRange(element);
                const selected = timeline.selected();
                if (selected && itemKey(selected) !== itemKey(element)) {
                    const note = widthNote(selected, element);
                    html += "<br><strong>" + Math.round(coverage(selected, element) * 100) + "% coverage</strong>" +
                        (note ? " · " + note : "");
                }
                return html;
            }

            function showTooltip (event, d) {
                const [mx, my] = d3.pointer(event, document.body);

                tooltip
                    .html(getHtml(d, d))
                    .style("top", `${my + 15}px`)
                    .style("left", `${mx + 15}px`)
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

        // same ticks above the first band and below the last one
        [[d3.axisTop, axisHeight], [d3.axisBottom, band.y + band.h]].forEach(([makeAxis, y]) => {
            const axis = makeAxis(band.xScale)
                .tickSize(6)
                .tickSizeOuter(0)
                .tickFormat(d => d3.format("~g")(d) + units)
                .tickValues(scaleTicks(band.xScale, band.w / 100));

            const xAxis = chart.append("g")
                .attr("class", "axis")
                .attr("transform", "translate(0," + y + ")");

            xAxis.redraw = () => xAxis.call(axis);

            band.parts.push(xAxis); // for brush.redraw
            components.push(xAxis); // for timeline.redraw
        });

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
    // compare: click a piece to highlight its range and find equivalents

    timeline.selected = function () {
        if (selectedKey === null) { return null; }
        return data.items.find(d => itemKey(d) === selectedKey) || null;
    };

    timeline.compare = function (resultsElement) {

        const anyBand = Object.values(bands)[0];
        const intervals = chart.selectAll("svg.interval");
        const results = d3.select(resultsElement);

        // highlighted range, drawn beneath everything
        const highlight = chart.insert("rect", ":first-child")
            .attr("class", "compareHighlight")
            .attr("y", 0)
            .attr("height", height)
            .style("display", "none");

        function select(key) {
            selectedKey = (key === selectedKey) ? null : key;
            update();
        }

        intervals.on("click", function (event, d) {
            event.stopPropagation();
            select(itemKey(d));
        });

        // click empty space or press escape to clear
        d3.select(domElement).select("svg").on("click", () => {
            if (selectedKey !== null) { selectedKey = null; update(); }
        });
        d3.select(document).on("keydown.compare", (event) => {
            if (event.key === "Escape" && selectedKey !== null) { selectedKey = null; update(); }
        });

        function update() {
            const selected = timeline.selected();

            if (!selected) {
                highlight.style("display", "none");
                intervals.classed("selected", false).style("opacity", null);
                results.html('<p class="tc black-60 i">Click a piece in the chart to find its equivalents.</p>');
                return;
            }

            const x0 = anyBand.xScale(convertToInches(selected.start, metric));
            const x1 = anyBand.xScale(convertToInches(selected.end, metric));
            highlight
                .attr("x", x0)
                .attr("width", x1 - x0)
                .style("display", null);

            intervals
                .classed("selected", d => itemKey(d) === selectedKey)
                .style("opacity", d => {
                    if (itemKey(d) === selectedKey) { return 1; }
                    const c = coverage(selected, d);
                    return c >= MIN_COVERAGE ? 0.4 + 0.6 * c : 0.1;
                });

            // per model (excluding the selected piece's own model), the closest-sized
            // piece that covers enough of the selected range
            const best = {};
            data.items.forEach(d => {
                if (d.manufacturer === selected.manufacturer && d.model === selected.model) { return; }
                const cov = coverage(selected, d);
                if (cov < MIN_COVERAGE) { return; }
                const close = closeness(selected, d);
                const model = d.manufacturer + ' ' + d.model;
                if (!best[model] || close > best[model].closeness) {
                    best[model] = {item: d, coverage: cov, closeness: close, note: widthNote(selected, d)};
                }
            });
            // closest in size first
            const rows = Object.values(best).sort((a, b) => b.closeness - a.closeness);

            const fmt = fmtRange;

            results.html("");
            results.append("p")
                .attr("class", "tc mb2")
                .html('Closest equivalents to <strong>' + selected.manufacturer + ' ' + selected.model +
                      ' #' + selected.size + '</strong> (' + fmt(selected) + ')' +
                      ' <a href="#" class="clear-compare no-underline light-red f6 ml2">clear</a>');
            results.select(".clear-compare").on("click", (event) => {
                event.preventDefault();
                selectedKey = null;
                update();
            });

            if (rows.length === 0) {
                results.append("p").attr("class", "tc black-60 i")
                    .text("No pieces from other brands or models cover at least " + (MIN_COVERAGE * 100) + "% of this range.");
                return;
            }

            const table = results.append("table")
                .attr("class", "compare-table center f6 collapse");
            table.append("thead").append("tr")
                .attr("class", "black-50 f7")
                .selectAll("th")
                .data(["", "", "Range", "Coverage", ""])
                .join("th")
                .attr("class", (d, i) => "normal pv1 ph2 " + (i === 3 ? "tr" : "tl"))
                .text(d => d);
            const row = table.append("tbody")
                .selectAll("tr")
                .data(rows)
                .join("tr")
                .attr("class", "pointer hover-bg-near-white")
                .on("click", (event, r) => select(itemKey(r.item)));

            row.append("td").attr("class", "pv1 ph2")
                .html(r => '<span class="swatch ' + r.item.color + '"></span>');
            row.append("td").attr("class", "pv1 ph2")
                .text(r => r.item.manufacturer + ' ' + r.item.model + ' #' + r.item.size);
            row.append("td").attr("class", "pv1 ph2 black-60 nowrap")
                .text(r => fmt(r.item));
            row.append("td").attr("class", "pv1 ph2 tr b")
                .attr("title", "share of the selected range this piece covers")
                .text(r => Math.round(r.coverage * 100) + '%');
            row.append("td").attr("class", "pv1 ph2 black-50 i nowrap")
                .text(r => r.note);
        }

        update();

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

// redraw the chart when window is resized
function setupResizeHandler(domElement) {
    let resizeTimer;
    window.addEventListener('resize', function() {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(function() {
            // Clear the existing timeline
            d3.select(domElement).selectAll("*").remove();

            // Re-fetch data and rebuild timeline
            loadTimelineData(domElement);
        }, 250); // Debounce resize events
    });
}

// load data and initialize timeline
function loadTimelineData(domElement) {
    d3.csv("/assets/csv/cams-by-size.csv")
        .then(function(dataset) {
            allBrands = [...new Set(dataset.map(d => d.manufacturer))];
            syncBrandAll();

            const typeData = dataset.filter(d => visibleTypes.has(d.type) && +d.start >= 0);
            if (typeData.length === 0) {
                selectedKey = null;
                d3.select(domElement).html('<p class="tc black-60 i">No pieces match the selected filters.</p>');
                d3.select("#compare-results").html("");
                return;
            }

            // every brand with pieces of the visible types gets a band; hidden ones collapse to a header
            const brandInfo = [...new Set(typeData.map(d => d.manufacturer))].map(name => ({
                name: name,
                count: typeData.filter(d => d.manufacturer === name).length,
                hidden: hiddenBrands.has(name)
            }));
            const filteredData = typeData.filter(d => !hiddenBrands.has(d.manufacturer));

            // drop the selection if its row was hidden
            if (selectedKey !== null && !filteredData.some(d => itemKey(d) === selectedKey)) {
                selectedKey = null;
            }

            // fit the axis to the visible pieces (or everything, if all brands are hidden)
            const domainData = filteredData.length ? filteredData : typeData;
            const filteredMax = d3.max(domainData, d => +d.end);
            const filteredMin = d3.min(domainData, d => +d.start);

            // log scale: pad a little on each side, can't start at 0
            const domainMin = logScale ? filteredMin * 0.9 : 0;
            const domainMax = logScale ? filteredMax * 1.1 : filteredMax;
            create_timeline(domElement, domainMin, domainMax, brandInfo, metricUnits)
                .data(filteredData)
                .band(brandInfo)
                .tooltips(brandInfo.map(b => b.name))
                .xAxis(brandInfo[brandInfo.length - 1].name)
                .compare("#compare-results")
                .redraw();
        });
}

// rebuild the chart with the current filters
function rebuildTimeline(domElement) {
    d3.select(domElement).selectAll("*").remove();
    loadTimelineData(domElement);
}

// every brand in the csv, for "show all" / "hide all"
let allBrands = [];

// "Show all" / "Hide all" look selected only when every brand is shown / hidden
function syncBrandAll() {
    const hidden = allBrands.filter(b => hiddenBrands.has(b)).length;
    document.querySelectorAll('.brand-all').forEach(b => {
        const on = b.dataset.show === 'true' ? hidden === 0 : hidden === allBrands.length;
        b.classList.toggle('selected', on);
        b.setAttribute('aria-pressed', on);
    });
}

function toggleBrand(brand, domElement) {
    if (hiddenBrands.has(brand)) {
        hiddenBrands.delete(brand);
    } else {
        hiddenBrands.add(brand);
    }
    rebuildTimeline(domElement);
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

// initialize timeline and set up resize handling
document.addEventListener('DOMContentLoaded', function() {
    const timelineElement = "#timeline";
    loadTimelineData(timelineElement);
    setupResizeHandler(timelineElement);

    // show all / hide all brands
    u(".brand-all").on('click', function(event) {
        event.preventDefault();
        const show = event.currentTarget.dataset.show === "true";
        allBrands.forEach(b => show ? hiddenBrands.delete(b) : hiddenBrands.add(b));
        rebuildTimeline(timelineElement);
    });

    // metric / imperial units
    u(".units-toggle").on('click', function(event) {
        const metric = event.currentTarget.dataset.units === 'metric';
        if (metric === metricUnits) { return; }
        metricUnits = metric;
        document.querySelectorAll('.units-toggle').forEach(b => {
            const on = (b.dataset.units === 'metric') === metricUnits;
            b.classList.toggle('selected', on);
            b.setAttribute('aria-pressed', on);
        });
        rebuildTimeline(timelineElement);
    });

    // log / linear scale
    u(".scale-toggle").on('click', function(event) {
        const log = event.currentTarget.dataset.scale === 'log';
        if (log === logScale) { return; }
        logScale = log;
        document.querySelectorAll('.scale-toggle').forEach(b => {
            const on = (b.dataset.scale === 'log') === logScale;
            b.classList.toggle('selected', on);
            b.setAttribute('aria-pressed', on);
        });
        rebuildTimeline(timelineElement);
    });

    // show / hide rows by protection type
    u(".type-toggle[data-type]").on('click', function(event) {
        const button = event.currentTarget;
        const type = button.dataset.type;
        if (visibleTypes.has(type)) {
            if (visibleTypes.size === 1) { return; } // keep at least one type visible
            visibleTypes.delete(type);
        } else {
            visibleTypes.add(type);
        }
        button.classList.toggle('selected', visibleTypes.has(type));
        button.setAttribute('aria-pressed', visibleTypes.has(type));
        rebuildTimeline(timelineElement);
    });

    // Setup issues toggle
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
});

import * as d3 from 'd3';
import u from 'umbrellajs';

const template_logbook = require("./templates/logbook.hbs");

function getTicks(email) {
  axios.get(`/.netlify/functions/get-mp-ticks?email=${email}`)
  .then(response => {
    document.getElementById("log-owner").innerHTML = response.data.name + "'s Ticks";
    localStorage.setItem('logbook-routes', JSON.stringify(response.data.routes));
    localStorage.setItem('logbook-status', Date.now());
    filterRoutes(response.data.routes);
  })
  .catch(error => {
    if (error.response) {
      alert(error.response.data.error)
    } else if (error.request) {
      console.log('Error', error.request);
    } else {
      console.log('Error', error.message);
    }
  });
}

function filterRoutes(selectedroutes, selectedType='', selectedStyles=[], selectedYears=[]) {
    const routeTypes = groupBy(selectedroutes.filter(route => route.hasOwnProperty("rating")), 'type');
    // Generate radio buttons based on the different route types
    let index = 0;
    document.getElementById("route-types").innerHTML = "";
    for (let type in routeTypes) {
      if (routeTypes.hasOwnProperty(type) && type != '' && type != 'TR') {
        let checked = '';
        if(selectedType === '' && index === 0) {
          checked = "checked";
          selectedType = type;
        }
        if(selectedType != '' && type === selectedType) { checked = "checked"; }
        let temp_html = `<input type="radio" id="${type}" name="routeType" value="${type}" ${checked}></input><label class="lh-copy ml1 mr3" for="${type}"><strong>${type}</strong> <small>(${routeTypes[type].length})</small></label>`;
        document.getElementById("route-types").insertAdjacentHTML("beforeend", temp_html);
        index++;
      }
    }
    // Generate checkboxes based on the different route styles
    const routeStyles = groupBy(selectedroutes.filter(route => route.hasOwnProperty("rating")), 'style', selectedType);
    document.getElementById("route-styles").innerHTML = "";
    let empty = false;
    if(selectedStyles.length === 0) { empty = true; }
    for (let style in routeStyles) {
      if (routeStyles.hasOwnProperty(style) && style != '') {
        let checked = '';
        if(empty) {
          selectedStyles.push(style);
          checked = "checked";
        }
        if(selectedStyles.includes(style)) { checked = "checked"; }
        let temp_html = `<input type="checkbox" id="${style}" name="routeStyles[]" value="${style}" ${checked}></input><label class="lh-copy ml1 mr3" for="${style}"><strong>${style}</strong> <small>(${routeStyles[style].length})</small></label>`;
        document.getElementById("route-styles").insertAdjacentHTML("beforeend", temp_html);
        index++;
      }
    }
    // Generate checkboxes based on the different route years
    const routeYears = groupBy(selectedroutes.filter(route => route.hasOwnProperty("rating")), 'date', selectedType);
    document.getElementById("route-years").innerHTML = "";
    empty = false;
    if(selectedYears.length === 0) { empty = true; }
    for (let year in routeYears) {
      if (routeYears.hasOwnProperty(year) && year != '') {
        let checked = '';
        if(empty) {
          selectedYears.push(year);
          checked = "checked";
        }
        if(selectedYears.includes(year)) { checked = "checked"; }
        let temp_html = `<input type="checkbox" id="${year}" name="routeYears[]" value="${year}" ${checked}></input><label class="lh-copy ml1 mr3" for="${year}"><strong>${year}</strong> <small>(${routeYears[year].length})</small></label>`;
        let position = (year.includes(" and before")) ? "beforeend" : "afterbegin";
        document.getElementById("route-years").insertAdjacentHTML(position, temp_html);
        index++;
      }
    }

    const formattedTicks = [];
    let routeRatings = groupBy(routeTypes[selectedType].filter(route => selectedStyles.includes(route.style) && isSelectedYear(route.date.substring(0, 4), selectedYears) && route.hasOwnProperty("rating")), 'rating');
    for(var key in routeRatings) {
      if(routeRatings.hasOwnProperty(key)) {
        let chartData = {};
        for(const route of routeRatings[key]) {
            if(route.style in chartData) {
              chartData[route.style] += 1;
            } else {
              chartData[route.style] = 1;
            }
        }
        chartData.rating = key;
        chartData.total = routeRatings[key].length;
        formattedTicks.push(chartData);
      }
    }
    formattedTicks.sort((a, b) => ratingOrder.indexOf(a.rating) - ratingOrder.indexOf(b.rating));
    createGraph({ticks: formattedTicks, keys: Object.keys(groupBy(selectedroutes, 'style')).filter(function(e){return e;})});
    const logbook = document.getElementById("logbook");
    logbook.innerHTML = template_logbook(routeRatings);
}

function getIssues() {
  axios.get('https://api.github.com/repos/jdillard/personal-site/issues?labels=logbook&state=open')
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

function isSelectedYear(year, selectedYears) {
  if(selectedYears.includes(year)) {
    return true;
  } else {
    if(selectedYears[selectedYears.length-1].includes("before")) {
      if(parseInt(selectedYears[selectedYears.length-1].substring(0, 4)) >= parseInt(year)) {
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  }
}

// If a route has multiple types, it is added to all of its types
const groupBy = function(xs, key, firstType='') {
  return xs.sort((a, b) => new Date(b.date) - new Date(a.date)).reduce(function(rv, x) {
    if(key === "type") {
      const types = x.type.split(', ');
      types.forEach(function (type) {
        (rv[type] = rv[type] || []).push(x);
      });
    } else if(key === "style") {
      if(x.type.includes(firstType)) {
        (rv[x[key]] = rv[x[key]] || []).push(x);
      }
    } else if(key == "date") {
      let year = x[key].substring(0, 4);
      if(Object.keys(rv).length > 2) {
        if(Object.keys(rv)[Object.keys(rv).length-1].includes("before")) {
          year = Object.keys(rv)[Object.keys(rv).length-1];
        } else if(Object.keys(rv)[0].includes(year)) {
          year = Object.keys(rv)[0];
        } else {
          year = x[key].substring(0, 4)+" and before";
        }
      }
      if(x.type.includes(firstType)) {
        (rv[year.toString()] = rv[year.toString()] || []).push(x);
      }
    }
    else {
      (rv[x[key]] = rv[x[key]] || []).push(x);
    }
    return rv;
  }, {});
};

function createGraph(logData) {
  document.getElementById("log-chart").innerHTML = "";

  // margin.middle is distance from center line to each y-axis
  var margin = {
    top: 20,
    right: 20,
    bottom: 50,
    left: 20,
    middle: 28
  };

  var width = document.getElementById("log-chart").clientWidth - margin.left - margin.right,
      height = 70 + 30 * logData.ticks.length - margin.top - margin.bottom;

  // the width of each side of the chart
  var regionWidth = width/2 - margin.middle;

  // these are the x-coordinates of the y-axes
  var pointA = regionWidth,
      pointB = width - regionWidth;

  var svg = d3.select("#log-chart")
    .attr('width', margin.left + width + margin.right)
    .attr('height', margin.top + height + margin.bottom),
    g = svg.append('g') // for the space within the margins
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

  var maxValue = Math.max(
    d3.max(logData.ticks, function(d) { return d.total; })
  );

  // SET UP SCALES

  var xScale = d3.scaleLinear()
    .domain([0, maxValue])
    .range([0, regionWidth])
    .nice();

  var yScale = d3.scaleBand()
    .domain(logData.ticks.map(function(d) { return d.rating; }))
    .range([height,0], 0.1);

  var z = d3.scaleOrdinal()
    .range(["#555555", "#FF6300", "#FF725C", "#FFB700", "#999999", "#9EEBCF", "#FF80CC"]);

  z.domain(logData.keys);

  // DRAW AXES

  var yAxisLeft = d3.axisRight(yScale)
    .tickSize(4,0)
    .tickPadding(margin.middle-4);

  var yAxisRight = d3.axisLeft(yScale)
    .tickSize(4,0)
    .tickFormat('');

  var xAxisRight = d3.axisBottom(xScale)
    .ticks(maxValue,"d");

  // reverse the x-axis scale on the left side by reversing the range
  var xAxisLeft = d3.axisBottom(xScale.copy().range([pointA, 0]))
    .ticks(maxValue,"d");

  g.append('g')
    .attr('class', 'axis y left')
    .attr('transform', translation(pointA, 0))
    .call(yAxisLeft)
    .selectAll('text')
    .style('text-anchor', 'middle');

  g.append('g')
    .attr('class', 'axis y right')
    .attr('transform', translation(pointB, 0))
    .call(yAxisRight);

  g.append('g')
    .attr('class', 'axis x left')
    .attr('transform', translation(0, height))
    .call(xAxisLeft);

  g.append('g')
    .attr('class', 'axis x right')
    .attr('transform', translation(pointB, height))
    .call(xAxisRight);

  // DRAW GROUPS FOR EACH SIDE OF CHART

  // scale(-1,1) is used to reverse the left side so the bars grow left instead of right
  var leftBarGroup = g.append('g')
    .attr('transform', translation(pointA, 0) + 'scale(-1,1)');
  var rightBarGroup = g.append('g')
    .attr('transform', translation(pointB, 0));

  leftBarGroup.selectAll('.bar.left')
    .data(d3.stack().keys(logData.keys)(logData.ticks))
    .enter().append("g")
      .attr("fill", function(d) { return z(d.key); })
    .selectAll("rect")
    .data(function(d) { return d; })
    .enter().append("rect")
      .attr("y", function(d) { return yScale(d.data.rating); })
      .attr("x", function(d) { return xScale(d[0]); })
      .attr("width", function(d) { return xScale(d[1]) - xScale(d[0]); })
      .attr("height", yScale.bandwidth());

  rightBarGroup.selectAll('.bar.left')
    .data(d3.stack().keys(logData.keys)(logData.ticks))
    .enter().append("g")
      .attr("fill", function(d) { return z(d.key); })
    .selectAll("rect")
    .data(function(d) { return d; })
    .enter().append("rect")
      .attr("y", function(d) { return yScale(d.data.rating); })
      .attr("x", function(d) { return xScale(d[0]); })
      .attr("width", function(d) { return xScale(d[1]) - xScale(d[0]); })
      .attr("height", yScale.bandwidth());

  // DRAW LEGEND

  var legend = svg.append("g")
      .attr("font-family", "sans-serif")
      .attr("font-size", 10)
      .attr("text-anchor", "end")
    .selectAll("g")
    .data(logData.keys.slice().reverse())
    .enter().append("g")
    .attr("transform", function(d, i) { return "translate(" + (-i * 70) + "," + (height+margin.bottom) + ")"; });

  legend.append("rect")
      .attr("x", width - 19)
      .attr("width", 19)
      .attr("height", 19)
      .attr("fill", z)
      .on("click", function(d){
        console.log(d);
      });

  legend.append("text")
      .attr("x", width - 24)
      .attr("y", 9.5)
      .attr("dy", "0.32em")
      .text(function(d) { return d; });

  function translation(x,y) {
    return 'translate(' + x + ',' + y + ')';
  }
}

const ratingOrder = ["V1", "V2", "V3", "V4", "V5", "V6", "V7", "5.6", "5.7", "5.8", "5.9", "5.10a", "5.10b", "5.10c", "5.10d", "5.11a", "5.11b"];

u("#mp-submit").on('click', function(){
  const email = document.getElementById("mp-email").value;

  if(email && /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
    getTicks(email);
  } else {
    alert("Please enter a valid e-mail address.");
  }
});

//TODO figure out how to use reDrawGraph
u('#route-types').on('change', function() {
  const selectedType = document.querySelector("input[name='routeType']:checked").value;
  filterRoutes(JSON.parse(localStorage.getItem("logbook-routes")), selectedType);
});

function reDrawGraph(firstLoad = false) {
  if(!firstLoad && localStorage.getItem("logbook-routes")) {
    let selectedType =  '';
    let selectedStyles = [];
    let selectedYears = [];
    if(document.querySelector("input[name='routeType']:checked")) {
      selectedType = document.querySelector("input[name='routeType']:checked").value;
    }
    if(document.querySelector("input[name='routeStyles[]']:checked")) {
      u("input[name='routeStyles[]']:checked").each(function(el){
        selectedStyles.push(el.value);
      });
    }
    if(document.querySelector("input[name='routeYears[]']:checked")) {
      u("input[name='routeYears[]']:checked").each(function(el){
        selectedYears.push(el.value);
      });
    }
    filterRoutes(JSON.parse(localStorage.getItem("logbook-routes")), selectedType, selectedStyles, selectedYears);
  } else {
    axios.get('/assets/json/ticks.json')
      .then(function (response) {
        localStorage.setItem('logbook-routes', JSON.stringify(response.data));
        filterRoutes(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }
}

reDrawGraph(true);

u('#route-styles').on('change', function() {
  reDrawGraph();
});

u('#route-years').on('change', function() {
  reDrawGraph();
});

u("#settings-toggle").on('click', function() {
  if(u("#settings").hasClass('open')) {
    u("#settings").removeClass('open');
    u("#settings-toggle").text('Show Instructions');
    document.getElementById("settings").style.display = "none";
  } else {
    u("#settings").addClass('open');
    u("#settings-toggle").text('Hide Instructions');
    document.getElementById("settings").style.display = "block";
  }
});

document.getElementById("clear-cache").addEventListener("click", function(event){
  localStorage.clear();
  //TODO reload graph
});

u("#issues-toggle").on('click', function() {
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

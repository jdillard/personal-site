import * as d3 from 'd3';

function getTicks(email, mpKey) {
  Promise.all([
    axios.get(`https://www.mountainproject.com/data/get-ticks?email=${email}&key=${mpKey}`),
    axios.get(`https://www.mountainproject.com/data/get-user?email=${email}&key=${mpKey}`)
  ]).then(([ticksResponse, userResponse]) => {
    document.getElementById("mp-key").value = '';
    document.getElementById("log-owner").innerHTML = userResponse.data.name + "'s Ticks";
    getRoutes(ticksResponse.data.ticks,mpKey);
  }, (error) => {
    //TODO return 403 (etc?) back to the UI
    console.log(error.message);
  });
}

function getRoutes(ticks, mpKey) {
  axios.get(`https://www.mountainproject.com/data/get-routes?routeIds=${ticks.map(e => e.routeId).join(',')}&key=${mpKey}`)
  .then(function (response) {
    const routes = response.data.routes.map(i => {
      if(!simpleRating[i.rating]) { console.log(i.rating); }
      if(i.type === '') { console.log(`${i.name} doesn't have a route type set.`); }
      if(getStyle(i.id, "routeId", ticks) === '') { console.log(`${i.name} doesn't have a route style set.`); }
      return {
        'type': i.type,
        'rating': simpleRating[i.rating],
        'style': getStyle(i.id, "routeId", ticks)
      };
    });
    localStorage.setItem('logbook-routes', JSON.stringify(routes));
    localStorage.setItem('logbook-status', Date.now());
    filterRoutes(routes);
  })
  .catch(function (error) {
    console.log(error);
  });
}

function filterRoutes(routes, selectedType='', selectedStyles=[]) {
    const routeTypes = groupBy(routes, 'type');
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
    const routeStyles = groupBy(routes, 'style', selectedType);
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

    const formattedTicks = [];
    let routeRatings = groupBy(routeTypes[selectedType].filter(route => selectedStyles.includes(route.style)), 'rating');
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
        chartData.rating = simpleRating[key];
        chartData.total = routeRatings[key].length;
        formattedTicks.push(chartData);
      }
    }
    formattedTicks.sort((a, b) => ratingOrder.indexOf(a.rating) - ratingOrder.indexOf(b.rating));
    createGraph({ticks: formattedTicks, keys: selectedStyles});
}

function getStyle(nameKey, prop, myArray){
  for (var i=0; i < myArray.length; i++) {
    if (myArray[i][prop]=== nameKey) {
      return (myArray[i].leadStyle) ? myArray[i].leadStyle : myArray[i].style;
    }
  }
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

// If a route has multiple types, it is added to all of its types
const groupBy = function(xs, key, firstType='') {
  return xs.reduce(function(rv, x) {
    if(key === "type") {
      const types = x.type.split(', ');
      types.forEach(function (type) {
        (rv[type] = rv[type] || []).push(x);
      });
    } else if(key === "style") {
      if(x.type.includes(firstType)) {
        (rv[x[key]] = rv[x[key]] || []).push(x);
      }
    } else {
      (rv[x[key]] = rv[x[key]] || []).push(x);
    }
    return rv;
  }, {});
};

function createGraph(logData) {
  document.getElementById("log-chart").innerHTML = "";

  var width = document.getElementById("log-chart").clientWidth,
      height = 30 * logData.ticks.length;

  // margin.middle is distance from center line to each y-axis
  var margin = {
    top: 20,
    right: 20,
    bottom: 24,
    left: 20,
    middle: 28
  };

  // the width of each side of the chart
  var regionWidth = width/2 - margin.middle;

  // these are the x-coordinates of the y-axes
  var pointA = regionWidth,
      pointB = width - regionWidth;

  var svg = d3.select("#log-chart")
    .attr('width', margin.left + width + margin.right)
    .attr('height', margin.top + height + margin.bottom),
    g = svg.append('g'); // for the space within the margins
     // .attr('transform', translation(margin.left, margin.top));

  var maxValue = Math.max(
    d3.max(logData.ticks, function(d) { return d.total; })
  );

  // SET UP SCALES

  // the xScale goes from 0 to the width of a region and is reversed for the
  // left x-axis
  var xScale = d3.scaleLinear()
    .domain([0, maxValue])
    .range([0, regionWidth])
    .nice();

  var yScale = d3.scaleBand()
    .domain(logData.ticks.map(function(d) { return d.rating; }))
    .range([height,0], 0.1);

  var z = d3.scaleOrdinal()
    .range(["#98abc5", "#8a89a6", "#7b6888", "#6b486b", "#a05d56", "#d0743c", "#ff8c00"]);

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

  var legend = g.append("g")
      .attr("font-family", "sans-serif")
      .attr("font-size", 10)
      .attr("text-anchor", "end")
    .selectAll("g")
    .data(logData.keys.slice().reverse())
    .enter().append("g")
    .attr("transform", function(d, i) { return "translate(0," + (i * 20) + ")"; });

  legend.append("rect")
      .attr("x", width - 19)
      .attr("width", 19)
      .attr("height", 19)
      .attr("fill", z);

  legend.append("text")
      .attr("x", width - 24)
      .attr("y", 9.5)
      .attr("dy", "0.32em")
      .text(function(d) { return d; });

  function translation(x,y) {
    return 'translate(' + x + ',' + y + ')';
  }
}

const simpleRating = {
  "5.6": "5.6",
  "5.7": "5.7",
  "5.8": "5.8",
  "5.8 R": "5.8",
  "5.8+": "5.8",
  "5.8+ R": "5.8",
  "5.9-": "5.9",
  "5.9": "5.9",
  "5.9 R": "5.9",
  "5.9+": "5.9",
  "5.10-": "5.10a",
  "5.10": "5.10b",
  "5.10a": "5.10a",
  "5.10a/b": "5.10b",
  "5.10b": "5.10b",
  "5.10b PG13": "5.10b",
  "5.10b R": "5.10b",
  "5.10c": "5.10c",
  "5.10b/c": "5.10c",
  "5.10+": "5.10d",
  "5.10d": "5.10d",
  "5.11a": "5.11a",
  "5.11b": "5.11b",
  "V1": "V1",
  "V1+": "V1",
  "V1+ PG13": "V1",
  "V2": "V2",
  "V2+": "V2",
  "V3": "V3",
  "V3+": "V3",
  "V4": "V4",
  "V4+": "V4",
  "V5": "V5",
  "V5+": "V5",
  "V6": "V6",
  "V6+": "V6",
  "V7": "V7",
  "V7+": "V7"
};

const ratingOrder = ["V1", "V2", "V3", "V4", "V5", "V6", "V7", "5.6", "5.7", "5.8", "5.9", "5.10a", "5.10b", "5.10c", "5.10d", "5.11a", "5.11b"];

$("#mp-submit").click(function() {
  const email = document.getElementById("mp-email").value;
  const mpKey = document.getElementById("mp-key").value;

  if(email && mpKey) {
    getTicks(email, mpKey);
  } else {
    alert("There was an error");
  }
});

//TODO figure out how to use reDrawGraph
$('#route-types').on('change', function() {
  const selectedType = $("input[name='routeType']:checked").val();
  filterRoutes(JSON.parse(localStorage.getItem("logbook-routes")), selectedType);
});

window.addEventListener('resize', reDrawGraph());

function reDrawGraph() {
  if(localStorage.getItem("logbook-routes")) {
    const selectedType = $("input[name='routeType']:checked").val();
    let selectedStyles = [];
    $.each($("input[name='routeStyles[]']:checked"), function() {
      selectedStyles.push($(this).val());
    });
    filterRoutes(JSON.parse(localStorage.getItem("logbook-routes")), selectedType, selectedStyles);
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

$('#route-styles').on('change', function() {
  reDrawGraph();
 });

$("#issues-toggle").click(function() {
  if($("#issues").hasClass('open')) {
    $("#issues").removeClass('open');
    $("#issues-toggle").text('Show Known Issues');
    $("#issues").height(0);
    document.getElementById("issues").innerHTML = "";
  } else {
    $("#issues").addClass('open');
    $("#issues-toggle").text('Hide Known Issues');
    getIssues();
    $("#issues").height('auto');
  }
});

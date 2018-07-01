import * as d3 from 'd3';

function getTicks(type, mpEmail, mpKey) {
  axios.get('https://www.mountainproject.com/data/get-ticks?'+type+'='+mpEmail+'&key='+mpKey)
  .then(function (response) {
    ticks = response.data.ticks;
    const routes = ticks.map(e => e.routeId).join(',');
    getRoutes(routes, mpKey);
  })
  .catch(function (error) {
    console.log(error);
  });
}

function getRoutes(mpRoutes, mpKey) {
  axios.get('https://www.mountainproject.com/data/get-routes?routeIds='+mpRoutes+'&key='+mpKey)
  .then(function (response) {
    routes = response.data.routes.map(i => {
      return {
        'type': i.type,
        'rating': simpleRating[i.rating],
        'style': getStyle(i.id, "routeId", ticks)
      };
    });
    const routeTypes = groupBy(routes, 'type');
    for (var key in routeTypes) {
      if (routeTypes.hasOwnProperty(key) && key == "Sport") {
        let routeRatings = groupBy(routeTypes[key], 'rating');
        const exampleData = [];
        console.log(routeRatings);
        for(var key in routeRatings) {
          if(routeRatings.hasOwnProperty(key)) {
            exampleData.push({rating: simpleRating[key], sport: routeRatings[key].length});
          }
        }
        exampleData.sort((a, b) => ratingOrder.indexOf(a.rating) - ratingOrder.indexOf(b.rating))
        createGraph(exampleData);
      }
    }
  })
  .catch(function (error) {
    console.log(error);
  });
}

let ticks = [];
let routes = [];

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
        let temp_html = '<div class="tc mv3"><a class="no-underline relative black-70 hover-light-red" href="'+response.data[c].html_url+'">'+response.data[c].title+'</a></div>';
        document.getElementById("issues").insertAdjacentHTML("beforeend", temp_html);
      }
    })
    .catch(function (error) {
      console.log(error);
  });
}

$( "#mp-submit" ).click(function() {
  const email = document.getElementById("mp-email").value;
  const key = document.getElementById("mp-key").value;

  if(email && key) {
    var type = (email.includes('@')) ? 'email' : 'id' ;
    getTicks(type, email, key);
  } else {
    alert("There was an error");
  }
});

const groupBy = function(xs, key) {
  return xs.reduce(function(rv, x) {
    (rv[x[key]] = rv[x[key]] || []).push(x);
    return rv;
  }, {});
};

const simpleRating = {
  "5.7": "5.7",
  "5.8": "5.8",
  "5.8 R": "5.8",
  "5.8+": "5.8",
  "5.9": "5.9",
  "5.9+": "5.9",
  "5.10-": "5.10a",
  "5.10": "5.10b",
  "5.10a": "5.10a",
  "5.10a/b": "5.10b",
  "5.10b": "5.10b",
  "5.10b R": "5.10b",
  "5.10c": "5.10c",
  "5.10b/c": "5.10c",
  "5.10+": "5.10d",
  "5.10d": "5.10d",
  "5.11a": "5.11a",
  "5.11b": "5.11b",
};

const ratingOrder = ["5.7", "5.8", "5.9", "5.10a", "5.10b", "5.10c", "5.10d", "5.11a", "5.11b"];

function createGraph(exampleData) {

  var w = 500,
      h = 300;

  // margin.middle is distance from center line to each y-axis
  var margin = {
    top: 20,
    right: 20,
    bottom: 24,
    left: 20,
    middle: 28
  };

  // the width of each side of the chart
  var regionWidth = w/2 - margin.middle;

  // these are the x-coordinates of the y-axes
  var pointA = regionWidth,
      pointB = w - regionWidth;

  // GET THE TOTAL POPULATION SIZE AND CREATE A FUNCTION FOR RETURNING THE PERCENTAGE
  var totalPopulation = d3.sum(exampleData, function(d) { return d.sport; });

  var svg = d3.select("#log-chart")
    .attr('width', margin.left + w + margin.right)
    .attr('height', margin.top + h + margin.bottom)
    // ADD A GROUP FOR THE SPACE WITHIN THE MARGINS
    .append('g')
      .attr('transform', translation(margin.left, margin.top));

  var maxValue = Math.max(
    d3.max(exampleData, function(d) { return d.sport; })
  );

  // SET UP SCALES

  // the xScale goes from 0 to the width of a region
  //  it will be reversed for the left x-axis
  var xScale = d3.scaleLinear()
    .domain([0, maxValue])
    .range([0, regionWidth])
    .nice();

  var xScaleLeft = d3.scaleLinear()
    .domain([0, maxValue])
    .range([regionWidth, 0]);

  var xScaleRight = d3.scaleLinear()
    .domain([0, maxValue])
    .range([0, regionWidth]);

  var yScale = d3.scaleBand()
    .domain(exampleData.map(function(d) { return d.rating; }))
    .range([h,0], 0.1);

  // SET UP AXES
  var yAxisLeft = d3.axisRight(yScale)
    .tickSize(4,0)
    .tickPadding(margin.middle-4);

  var yAxisRight = d3.axisLeft(yScale)
    .tickSize(4,0)
    .tickFormat('');

  var xAxisRight = d3.axisBottom(xScale)
    .ticks(6,"d");

  // REVERSE THE X-AXIS SCALE ON THE LEFT SIDE BY REVERSING THE RANGE
  var xAxisLeft = d3.axisBottom(xScale.copy().range([pointA, 0]))
    .ticks(6,"d");

  // MAKE GROUPS FOR EACH SIDE OF CHART
  // scale(-1,1) is used to reverse the left side so the bars grow left instead of right
  var leftBarGroup = svg.append('g')
    .attr('transform', translation(pointA, 0) + 'scale(-1,1)');
  var rightBarGroup = svg.append('g')
    .attr('transform', translation(pointB, 0));

  // DRAW AXES
  svg.append('g')
    .attr('class', 'axis y left')
    .attr('transform', translation(pointA, 0))
    .call(yAxisLeft)
    .selectAll('text')
    .style('text-anchor', 'middle');

  svg.append('g')
    .attr('class', 'axis y right')
    .attr('transform', translation(pointB, 0))
    .call(yAxisRight);

  svg.append('g')
    .attr('class', 'axis x left')
    .attr('transform', translation(0, h))
    .call(xAxisLeft);

  svg.append('g')
    .attr('class', 'axis x right')
    .attr('transform', translation(pointB, h))
    .call(xAxisRight);

  // DRAW BARS
  leftBarGroup.selectAll('.bar.left')
    .data(exampleData)
    .enter().append('rect')
      .attr('class', 'bar left')
      .attr('x', 0)
      .attr('y', function(d) { return yScale(d.rating); })
      .attr('width', function(d) { return xScale(d.sport); })
      .attr('height', yScale.bandwidth());

  rightBarGroup.selectAll('.bar.right')
    .data(exampleData)
    .enter().append('rect')
      .attr('class', 'bar right')
      .attr('x', 0)
      .attr('y', function(d) { return yScale(d.rating); })
      .attr('width', function(d) { return xScale(d.sport); })
      .attr('height', yScale.bandwidth());

  function translation(x,y) {
    return 'translate(' + x + ',' + y + ')';
  }

}

$("#issues-toggle").click(function() {
  if($("#issues").hasClass('open')) {
    $("#issues").removeClass('open');
    $("#issues-toggle").text('Show Known Issues');
    $("#issues").height(0);
  } else {
    $("#issues").addClass('open');
    $("#issues-toggle").text('Hide Known Issues');
    getIssues();
    $("#issues").height('auto');
  }
});

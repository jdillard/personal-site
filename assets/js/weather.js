//import 'babel-polyfill';

const template_weather = require("./templates/weather.hbs");

const crags_json = '[{"name": "The Greenbelt", "station": "KATT", "coordinates": [-97.801,30.244]},' +
    '{"name": "Continental Ranch", "station": "KDRT", "coordinates": [-101.44,29.803]},' +
    '{"name": "Reimer\'s Ranch", "station": "KRYW", "coordinates": [-98.122,30.334]},' +
    '{"name": "Cochise Stronghold", "station": "KFHU", "coordinates": [-109.987,31.921]},' +
    '{"name": "Enchanted Rock", "station": "KT82", "coordinates": [-98.821,30.503]},' +
    '{"name": "Horseshoe Canyon Ranch", "station": "KHRO", "coordinates": [-93.292,36.012]},' +
    '{"name": "Last Chance Canyon", "station": "KGDP", "coordinates": [-104.754,32.234]},' +
    '{"name": "McKinney Falls", "station": "KAUS", "coordinates": [-97.722,30.181]},' +
    '{"name": "Georgetown", "station": "KGTU", "coordinates": [-97.69,30.627]}]';

const crags = JSON.parse(crags_json);

for (let c in crags) {
  axios.get('https://api.weather.gov/stations/' + crags[c].station + '/observations')
    .then(function (response) {
      projects(c, crags[c].name, crags[c].coordinates , response.data.features);
    })
    .catch(function (error) {
      console.log(error);
    });
}

function deg2rad(deg) {
  return deg * (Math.PI/180)
}

function getDistanceFromLatLonInMi(lat1,lon1,lat2,lon2) {
  const R = 6371; // Radius of the earth in km
  const dLat = deg2rad(lat2-lat1);
  const dLon = deg2rad(lon2-lon1);
  const a =
    Math.sin(dLat/2) * Math.sin(dLat/2) +
    Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) *
    Math.sin(dLon/2) * Math.sin(dLon/2)
    ;
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
  const d = R * c * 0.621371; // Distance in miles
  return d;
}

function calcPoint(input) {
  const j = input % 8;
  input = (input / 8)|0 % 4;
  const cardinal = ['north', 'east', 'south', 'west'];
  const pointDesc = ['1', '1 by 2', '1-C', 'C by 1', 'C', 'C by 2', '2-C', '2 by 1'];

  const str1 = cardinal[input];
  const str2 = cardinal[(input + 1) % 4];
  const strC = (str1 == cardinal[0] | str1 == cardinal[2]) ? str1 + str2 : str2 + str1;

  return pointDesc[j].r(1, str1).r(2, str2).r('C', strC);
}

function degreeToDirection(degree) {
  let s = String;
  s.prototype.r = s.prototype.replace;

  let input = degree / 11.25;
  input = input+.5|0;

  let direction = calcPoint(input);
  direction = direction[0].toUpperCase() + direction.slice(1);

  return direction;
}

function projects(crag_index, crag_name, crag_location, observations_data = []) {
  const observations_element = document.getElementById("weather");
  let observations = new Array();

  observations.name = crag_name;
  observations.crag_index = crag_index;
  observations.distance = getDistanceFromLatLonInMi(crag_location[1], crag_location[0], observations_data[0].geometry.coordinates[1], observations_data[0].geometry.coordinates[0]).toFixed(2);
  observations.curr_timestamp = moment(observations_data[0].properties.timestamp).format('MM/DD hh:mm a');
  observations.curr_temp = (observations_data[0].properties.temperature.value*(9/5)+32).toFixed(0);
  observations.curr_heat_index = (observations_data[0].properties.heatIndex.value && observations.curr_temp != (observations_data[0].properties.heatIndex.value*(9/5)+32).toFixed(0)) ? (observations_data[0].properties.heatIndex.value*(9/5)+32).toFixed(0) : null;
  observations.curr_wind = (observations_data[0].properties.windSpeed.value > 0) ? (observations_data[0].properties.windSpeed.value * 2.23694).toFixed(2)+"mph "+degreeToDirection(observations_data[0].properties.windDirection.value) : "Calm";
  observations.curr_wind_chill = (observations_data[0].properties.windChill.value) ? (observations_data[0].properties.windChill.value*(9/5)+32).toFixed(0) : null;
  observations.curr_humidity = observations_data[0].properties.relativeHumidity.value.toFixed(0);

  let inches = 0;

  const precips = observations_data.slice(0, 48)
  .map(i => {
    inches += +i.properties.precipitationLastHour.value;
    return {
      'precip': +i.properties.precipitationLastHour.value,
      'date': moment(i.properties.timestamp).format('YY-MM-DD HH:mm')
    };
  });

  if(observations_data[0].properties.precipitationLastHour.value > 0) {
    observations.color = 'light-red';
  } else if(inches > 0) {
    observations.color = 'yellow';
  } else {
    observations.color = 'green';
  }

  observations_element.innerHTML += template_weather(observations);
  graph_precip(crag_index, precips);
}

function graph_precip(crag_index, data) {
  var svg = d3.select("#precip-"+crag_index);
  const margin = {top: 20, right: 5, bottom: 20, left: 5};
  var width = +svg.attr("width") - margin.left - margin.right;
  var height = +svg.attr("height") - margin.top - margin.bottom;
  let g = svg.append("g").attr("transform", "translate(" + margin.left + "," + margin.top + ")");

  var parseTime = d3.timeParse("%y-%m-%d %H:%M");

  var x = d3.scaleTime()
      .rangeRound([0, width]);

  var y = d3.scaleLinear()
      .rangeRound([height, 0]);

  var line = d3.line()
      .x(function(d) { return x(d.date); })
      .y(function(d) { return y(d.precip); });

    data = data
      .map(i => {
        i.date = parseTime(i.date);
        return i;
      });

    x.domain(d3.extent(data, function(d) { return d.date; }));
    y.domain(d3.extent(data, function(d) { return d.precip; }));

    // Setup the moving average calculation.
    // Currently is a hacky way of doing it by manually storing and using the
    // previous 3 values for averaging.
    var prevPrevVal = 0;
    var prevVal = 0;
    var curVal = 0
    var movingAverageLine = d3.line()
        .x(function(d,i) { return x(d.key); })
        .y(function(d,i) {
            if (i == 0) {
                prevPrevVal  = y(d.value);
                prevVal = y(d.value);
                curVal =  y(d.value);
            } else if (i == 1) {
                prevPrevVal = prevVal;
                prevVal = curVal;
                curVal = (prevVal + y(d.value)) / 2.0;
            } else {
                prevPrevVal = prevVal;
                prevVal = curVal;
                curVal = (prevPrevVal + prevVal + y(d.value)) / 3.0;
            }
            return curVal;
        });
        //.interpolate("basis");

    g.append("g")
      .attr("class", "precip-axis")
      .attr("transform", "translate(0," + height + ")")
      .call(d3.axisBottom(x).ticks(5))
      .select(".domain")
      .remove();

    g.append("path")
      .datum(data)
      .attr("class", "line")
      .attr("fill", "none")
      .attr("stroke", "#555555")
      .attr("stroke-linejoin", "round")
      .attr("stroke-linecap", "round")
      .attr("stroke-width", 1.5)
      .attr("d", line);
}
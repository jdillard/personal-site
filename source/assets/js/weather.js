import * as d3 from 'd3';
import moment from 'moment-timezone';
import u from 'umbrellajs';
import axios from 'axios';
import SunCalc from 'suncalc';
import tzlookup from 'tz-lookup';

const template_crag_boilerplate = require("./templates/crag_boilerplate.hbs");
const template_weather_observations = require("./templates/weather-observations.hbs");
const template_weather_forecasts = require("./templates/weather-forecasts.hbs");
const template_weather_hourly = require("./templates/weather-hourly.hbs");

const CONSTANTS = {
  DAYS: ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"],
  PRECIPITATION_TYPES: ["rain", "sleet", "snow", "thunderstorms"],
  // STORAGE_PREFIX: "crag-" // Local storage
};

const DOM = {
  weatherSection: document.getElementById("weather"),
  stateSel: document.getElementById("stateSel"),
  citySel: document.getElementById("citySel"),
  selectMetro: document.getElementById("selectMetro"),
  issuesContainer: document.getElementById("issues")
};

let crags = [];
let storageKeys = Object.keys(localStorage).filter(word => word.startsWith("crag-"));

/**
 * Get list of active crags
 * @param {String} location
 */
function getCrags(location) {
  crags = [];
  u('#menu .menu-item').remove();
  while (DOM.weatherSection.firstChild) {
    DOM.weatherSection.removeChild(DOM.weatherSection.firstChild);
  }
  for(let key in localStorage) {
    localStorage.removeItem(key);
  }

  localStorage.setItem('region-selector', location);
  for (let c in crags_config) {
    crags_config[c].active = true;
    localStorage.setItem("crag-"+slugify(crags_config[c].name), JSON.stringify(crags_config[c]));
    crags.push(crags_config[c]);
  }
  storageKeys = Object.keys(localStorage).filter(word => word.startsWith("crag-"));
  populate(crags);
}

function getIssues() {
  axios.get('https://api.github.com/repos/jdillard/personal-site/issues?labels=crags&state=open')
    .then(function (response) {
      for (let c in response.data) {
        let temp_html = '<div class="mv2"><a class="no-underline relative black-70 hover-light-red" href="'+response.data[c].html_url+'">'+response.data[c].title+'</a></div>';
        DOM.issuesContainer.insertAdjacentHTML("beforeend", temp_html);
      }
    })
    .catch(function (error) {
      console.log(error);
  });
}


/**
 * Populates forecast and observations for each crag in array
 * @param {Array}   crags
 * @param {Boolean} menu
 * @param {String}  element
 * @param {String}  adjacent
 */
function populate(crags, menu = true, element = 'weather', adjacent = 'beforeend') {
  let temp_html = '';
  for (let c in crags) {
    crags[c].number = (crags[c].number) ? crags[c].number : c;
    crags[c].slug = slugify(crags[c].name);

    // populate top menu
    //TODO only run on page load?
    if(menu && document.getElementById("menu")) {
      let status = (crags[c].active) ? 'green' : 'mid-gray';
      temp_html = '<div id="menu-item-'+crags[c].number+'" class="menu-item f7 ba b--light-gray hover-bg-near-white mv1 mw5 center pointer"><div id="crag-status-'+crags[c].number+'" data-crag="'+crags[c].number+'" data-slug="'+crags[c].slug+'" data-active="'+crags[c].active+'" class="crag-status fl w-100 ph2 pv1 bl bw2 b--'+status+'">'+crags[c].name+'</div><span class="crag-delete fr light-red nr3 pv1 pointer" data-name="' + crags[c].name + '" data-crag="' + crags[c].number + '">&#215</span><div class="cf"></div></div>';
      document.getElementById("menu").insertAdjacentHTML("beforeend", temp_html);
    }

    if(crags[c].active) {
      document.getElementById(element).insertAdjacentHTML(adjacent, template_crag_boilerplate(crags[c]));

      axios.get('https://api.weather.gov/stations/' + crags[c].station + '/observations')
        .then(function (response) {
          populateObservations(crags[c], response.data.features);
        })
        .catch(function (error) {
          console.log(error);
        });

      if (eval('weekly_'+crags[c].office.replace(/\//g, '_').replace(/,/g, '_'))) {
        populateForecasts(crags[c], eval('weekly_'+crags[c].office.replace(/\//g, '_').replace(/,/g, '_')));
      } else {
        console.warn('Daily forecast not available for ' + crags[c].office);
        document.getElementById("forecast-"+crags[c].number).innerHTML = '<div class="ba b--light-gray ph3 pv4 tc gray f5">Daily forecast not available at this time.</div>';
      }

    }
  }

  if(menu) {
    //temp_html = '<div class="f7 ba b--light-gray ph2 pv1 mv1 mw5 center light-silver">Add A Crag <span class="crag-add fr green nr4 pointer">&#43;</span></div>';
    //document.getElementById("menu").insertAdjacentHTML("beforeend", temp_html);
  }
}

function slugify(text) {
  return text.toString().toLowerCase().trim()
    .replace(/&/g, '-and-')      // Replace & with 'and'
    .replace(/[\s\W-]+/g, '-')   // Replace spaces, non-word characters and dashes with a single dash (-)
    .replace(/-$/, '');          // Remove last floating dash if exists
}

// TODO make DRY, this is pulled from index.js
function timeSince(date, recentDate = new Date()) {
  var seconds = Math.floor((recentDate - date) / 1000);
  var interval = Math.floor(seconds / 31536000);

  if (interval > 1) {
    return interval + " years";
  }
  interval = Math.floor(seconds / 2592000);
  if (interval > 1) {
    return interval + " months";
  }
  interval = Math.floor(seconds / 86400);
  if (interval > 1) {
    return interval + " days";
  }
  interval = Math.floor(seconds / 3600);
  if (interval > 1) {
    return interval + " hours";
  }
  interval = Math.floor(seconds / 60);
  if (interval > 1) {
    return interval + " minutes";
  }
  return Math.floor(seconds) + " seconds";
}

// helper function for getDistanceFromLatLonInMi
function deg2rad(deg) {
  return deg * (Math.PI/180);
}

function getDistanceFromLatLonInMi(lat1,lon1,lat2,lon2) {
  const R = 6371; // Radius of the earth in km
  const dLat = deg2rad(lat2-lat1);
  const dLon = deg2rad(lon2-lon1);
  const a =
    Math.sin(dLat/2) * Math.sin(dLat/2) +
    Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) *
    Math.sin(dLon/2) * Math.sin(dLon/2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
  const d = R * c * 0.621371; // Distance in miles
  return d;
}

function getDirection(degree) {
  var directions = ['North', 'NW', 'West', 'SW', 'South', 'SE', 'East', 'NE'];
  return directions[Math.round(((degree %= 360) < 0 ? degree + 360 : degree) / 45) % 8];
}

function iconToSVG(time, icon) {
  switch(icon) {
    case "hot":
    case "cold":
    case "skc":
    case "wind_skc":
      return time + "_clear";
    case "fog":
    case "haze":
    case "smoke":
      return time + "_fog";
    case "few":
    case "wind_few":
    case "sct":
    case "wind_sct":
      return time + "_cloudy";
    case "bkn":
    case "wind_bkn":
    case "ovc":
    case "wind_ovc":
      return time + "_overcast";
    case "rain":
    case "rain_showers":
      return time + "_rain";
    case "rain_fzra":
    case "rain_snow":
    case "sleet":
      return time + "_sleet";
    case "tsra":
    case "tsra_hi":
    case "tsra_sct":
      return time + "_thunderstorms";
    case "snow":
    case "snow_fzra":
      return time + "_snow";
    default:
      console.log(time, icon);
      return time + "_na";
  }
}

function populateForecasts(crag, data = []) {
  let forecasts = [];
  let half_day = false;
  let clear_forecast = true;
  let start_date = '';
  let end_date = '';

  forecasts.name = crag.name;
  forecasts.crag_index = crag.number;
  forecasts.updated = moment(data.updated).format('MM/DD hh:mm a');
  forecasts.periods = data.periods
    .reduce(function(a, b, i) {
      let day_icons = [];
      let night_icons = b.icon.substring(35,b.icon.length-12).split("/");
      if (i === 1) {
        day_icons = a.icon.substring(35,a.icon.length-12).split("/");
        let arr = [];
        // The first period is a half day
        if(CONSTANTS.DAYS.indexOf(b.name.toLowerCase()) >= 0) {
          half_day = true;
          arr.push(b);
          return arr;
        } else {
          start_date = moment(a.startTime).format('MMM DD, YYYY');
          a.name = moment(a.startTime).format('dddd');
          a.date = moment(a.startTime).format('YYYY-MM-DD');
          a.night_temperature = b.temperature;
          a.night_shortForecast = b.shortForecast;
          a.icon_split = (day_icons.length-1 > 1) ? true: false;
          a.icon_left = iconToSVG(day_icons[0], day_icons[1].split(",")[0]);
          a.icon_left_text = (day_icons[1].split(",")[1]) ? day_icons[1].split(",")[1]+'%' : '';
          a.icon_right = (day_icons.length-1 > 1) ? iconToSVG(day_icons[0],day_icons[2].split(",")[0]) :  null;
          a.icon_right_text = (a.icon_right && day_icons[2].split(",")[1]) ? day_icons[2].split(",")[1]+'%' : '';
          a.night_icon_split = (night_icons.length-1 > 1) ? true: false;
          a.night_icon_left = iconToSVG(night_icons[0], night_icons[1].split(",")[0]);
          a.night_icon_left_text = (night_icons[1].split(",")[1]) ? night_icons[1].split(",")[1]+'%' : '';
          a.night_icon_right = (night_icons.length-1 > 1) ? iconToSVG(night_icons[0],night_icons[2].split(",")[0]) :  null;
          a.night_icon_right_text = (a.night_icon_right && night_icons[2].split(",")[1]) ? night_icons[2].split(",")[1]+'%' : '';
          a.icon_text = (a.night_icon_left_text || a.night_icon_right_text) ? a.icon_left_text + " &rarr; " + a.icon_right_text : '&nbsp;';
          a.night_icon_text = (a.night_icon_left_text || a.night_icon_right_text) ?  a.night_icon_left_text + " &rarr; " + a.night_icon_right_text : '&nbsp;';
          // two icons, but they are the same
          a.icon_split = (a.icon_left === a.icon_right) ? false : a.icon_split;
          a.night_icon_split = (a.night_icon_left === a.night_icon_right) ? false : a.night_icon_split;
          delete a.number;
          delete a.isDaytime;
          delete a.temperatureUnit;
          delete a.temperatureTrend;
          if(new RegExp(CONSTANTS.PRECIPITATION_TYPES.join("|")).test(a.icon_left) || new RegExp(CONSTANTS.PRECIPITATION_TYPES.join("|")).test(a.night_icon_left)) {
            clear_forecast = false;
          }
          arr.push(a);
          return arr;
        }
      } else {
        day_icons = a[a.length-1].icon.substring(35,a[a.length-1].icon.length-12).split("/");
        if((!half_day && i % 2 === 0) || (half_day && i % 2 != 0)) {
          if(half_day && i === data.periods.length-1) {
            end_date = moment(b.endTime).format('MMM DD, YYYY');
            b.date = moment(b.startTime).format('YYYY-MM-DD');
            b.name = moment(b.startTime).format('dddd');
            b.night_temperature = null;
            b.night_shortForecast = null;
            b.icon_split = (day_icons.length-1 > 1) ? true: false;
            b.icon_left = iconToSVG(day_icons[0], day_icons[1].split(",")[0]);
            b.icon_left_text = (day_icons[1].split(",")[1]) ? day_icons[1].split(",")[1]+'%' : '';
            b.icon_right = (day_icons.length-1 > 1) ? iconToSVG(day_icons[0],day_icons[2].split(",")[0]) :  null;
            b.icon_right_text = (b.icon_right && day_icons[2].split(",")[1]) ? day_icons[2].split(",")[1]+'%' : '';
            b.night_icon_split = (night_icons.length-1 > 1) ? true: false;
            b.night_icon_left = iconToSVG(night_icons[0], night_icons[1].split(",")[0]);
            b.night_icon_left_text = (night_icons[1].split(",")[1]) ? night_icons[1].split(",")[1]+'%' : '';
            b.night_icon_right = (night_icons.length-1 > 1) ? iconToSVG(night_icons[0],night_icons[2].split(",")[0]) :  null;
            b.night_icon_right_text = (b.night_icon_right && night_icons[2].split(",")[1]) ? night_icons[2].split(",")[1]+'%' : '';
            b.icon_text = (b.icon_left_text || b.icon_right_text) ? b.icon_left_text + " &rarr; " + b.icon_right_text : '&nbsp;';
            b.night_icon_text = (b.night_icon_left_text || b.night_icon_right_text) ? b.night_icon_left_text + " &rarr; " + b.night_icon_right_text : '&nbsp;';
            // two icons, but they are the same
            b.icon_split = (b.icon_left === b.icon_right) ? false : b.icon_split;
            b.night_icon_split = (b.night_icon_left === b.night_icon_right) ? false : b.night_icon_split;
            delete b.number;
            delete b.isDaytime;
            delete b.temperatureUnit;
            delete b.temperatureTrend;
            if(new RegExp(CONSTANTS.PRECIPITATION_TYPES.join("|")).test(b.icon_left) || new RegExp(CONSTANTS.PRECIPITATION_TYPES.join("|")).test(b.night_icon_left)) {
              clear_forecast = false;
            }
            a.push(b);
          } else {
            a.push(b);
          }
          return a;
        } else {
          start_date = (start_date) ? start_date : moment(b.startTime).format('MMM DD, YYYY');
          end_date = moment(a[a.length-1].endTime).format('MMM DD, YYYY');
          a[a.length-1].date = moment(a[a.length-1].startTime).format('YYYY-MM-DD');
          a[a.length-1].name = moment(a[a.length-1].startTime).format('dddd');
          a[a.length-1].night_temperature = b.temperature;
          a[a.length-1].night_shortForecast = b.shortForecast;
          a[a.length-1].icon_split = (day_icons.length-1 > 1) ? true: false;
          a[a.length-1].icon_left = iconToSVG(day_icons[0], day_icons[1].split(",")[0]);
          a[a.length-1].icon_left_text = (day_icons[1].split(",")[1]) ? day_icons[1].split(",")[1]+'%' : '';
          a[a.length-1].icon_right = (day_icons.length-1 > 1) ? iconToSVG(day_icons[0],day_icons[2].split(",")[0]) :  null;
          a[a.length-1].icon_right_text = (a.icon_right && day_icons[2].split(",")[1]) ? day_icons[2].split(",")[1]+'%' : '';
          a[a.length-1].night_icon_split = (night_icons.length-1 > 1) ? true: false;
          a[a.length-1].night_icon_left = iconToSVG(night_icons[0], night_icons[1].split(",")[0]);
          a[a.length-1].night_icon_left_text = (night_icons[1].split(",")[1]) ? night_icons[1].split(",")[1]+'%' : '';
          a[a.length-1].night_icon_right = (night_icons.length-1 > 1) ? iconToSVG(night_icons[0],night_icons[2].split(",")[0]) :  null;
          a[a.length-1].night_icon_right_text = (a[a.length-1].night_icon_right && night_icons[2].split(",")[1]) ? night_icons[2].split(",")[1]+'%' : '';
          a[a.length-1].icon_text = (a[a.length-1].icon_left_text || a[a.length-1].icon_right_text) ? a[a.length-1].icon_left_text+' &rarr; '+a[a.length-1].icon_right_text : '&nbsp;';
          a[a.length-1].night_icon_text = (a[a.length-1].night_icon_left_text || a[a.length-1].night_icon_right_text) ? a[a.length-1].night_icon_left_text+' &rarr; '+a[a.length-1].night_icon_right_text : '&nbsp;';
          // two icons, but they are the same
          a[a.length-1].icon_split = (a[a.length-1].icon_left === a[a.length-1].icon_right) ? false : a[a.length-1].icon_split;
          a[a.length-1].night_icon_split = (a[a.length-1].night_icon_left === a[a.length-1].night_icon_right) ? false : a[a.length-1].night_icon_split;
          delete a[a.length-1].number;
          delete a[a.length-1].isDaytime;
          delete a[a.length-1].temperatureUnit;
          delete a[a.length-1].temperatureTrend;
          if(new RegExp(CONSTANTS.PRECIPITATION_TYPES.join("|")).test(a[a.length-1].icon_left) || new RegExp(CONSTANTS.PRECIPITATION_TYPES.join("|")).test(a[a.length-1].night_icon_left)) {
            clear_forecast = false;
          }
          return a;
        }
      }
    });
  forecasts.color = (clear_forecast) ? 'green' : 'yellow';

  document.getElementById("last-forecast-"+crag.number).innerHTML = "updated " + timeSince(new Date(data.updated)) + " ago";
  document.getElementById("forecast-start-"+crag.number).innerHTML = start_date;
  document.getElementById("forecast-end-"+crag.number).innerHTML = end_date;
  document.getElementById("forecast-"+crag.number).innerHTML = template_weather_forecasts(forecasts);

  u('#forecast-'+crag.number+' .forecast-day').on( "mouseenter", function(el) {
    el.srcElement.innerHTML = moment(el.srcElement.dataset.date).format('MMM DD');
  });
  u('#forecast-'+crag.number+' .forecast-day').on( "mouseleave", function(el) {
    el.srcElement.innerHTML = moment(el.srcElement.dataset.date).format('dddd');
  });

  //TODO show error in UI
  if (eval('hourly_'+crag.office.replace(/\//g, '_').replace(/,/g, '_'))) {
    populateHourlyForecasts(crag.number, forecasts.periods[0].startTime, eval('hourly_'+crag.office.replace(/\//g, '_').replace(/,/g, '_')));
  } else {
    console.warn('Hourly forecast not available for ' + crag.office)
  }
}

/**
 * Populates hourly forecast information
 * @param {Number} crag_index
 * @param {Time}   week_start_time
 * @param {Object} data
 */
function populateHourlyForecasts(crag_index, week_start_time, data) {
  let hourly = [];
  //TODO make pretty
  let arr = [];
      arr[0] = [];
      arr[1] = [];
      arr[2] = [];
      arr[3] = [];
      arr[4] = [];
      arr[5] = [];
      arr[6] = [];

  const lat = data.geometry.coordinates[0][0][1];
  const long = data.geometry.coordinates[0][0][0];
  let times = SunCalc.getTimes(new Date(), lat, long);
  const sunrise = moment(times.sunrise).tz(tzlookup(lat, long)).format('k');
  const sunset = moment(times.sunset).tz(tzlookup(lat, long)).format('k');
  let svgTime = '';

  hourly.days = data.properties.periods
    .reduce(function(a, b, i) {
      let left_icons = [];
      let right_icons = b.icon.substring(35,b.icon.length-11).split("/");
      if (i === 1) {
        left_icons = a.icon.substring(35,a.icon.length-11).split("/");
        delete a.number;
        delete a.detailedForecast;
        delete a.name;
        delete a.endTime;
        delete a.temperatureTrend;
        a.hour = moment(a.startTime).format('HH');
        a.isDaytime = (+a.hour < sunrise || +a.hour > sunset) ? false : true;
        svgTime = (a.isDaytime) ? 'day' : 'night';
        a.svg = iconToSVG(svgTime, left_icons[1].split(",")[0]);
        a.color = (new RegExp(CONSTANTS.PRECIPITATION_TYPES.join("|")).test(a.svg)) ? 'yellow' : 'green';
        if(moment(a.startTime).isSameOrAfter(moment(week_start_time), 'day') && moment(a.startTime).isBefore(moment(week_start_time).add(1, 'week'), 'day')) {
          arr[CONSTANTS.DAYS.indexOf(moment(a.startTime).format('dddd').toLowerCase())].push(a);
        }
        delete b.number;
        delete b.detailedForecast;
        delete b.name;
        delete b.endTime;
        delete b.temperatureTrend;
        b.hour = moment(b.startTime).format('HH');
        b.isDaytime = (+b.hour < sunrise || +b.hour > sunset) ? false : true;
        svgTime = (b.isDaytime) ? 'day' : 'night';
        b.svg = iconToSVG(svgTime, right_icons[1].split(",")[0]);
        b.color = (new RegExp(CONSTANTS.PRECIPITATION_TYPES.join("|")).test(b.svg)) ? 'yellow' : 'green';
        if(moment(b.startTime).isSameOrAfter(moment(week_start_time), 'day') && moment(b.startTime).isBefore(moment(week_start_time).add(1, 'week'), 'day')) {
          arr[CONSTANTS.DAYS.indexOf(moment(b.startTime).format('dddd').toLowerCase())].push(b);
        }
        return arr;
      } else {
        delete b.number;
        delete b.detailedForecast;
        delete b.name;
        delete b.endTime;
        delete b.temperatureTrend;
        b.hour = moment(b.startTime).format('HH');
        b.isDaytime = (+b.hour < sunrise || +b.hour > sunset) ? false : true;
        svgTime = (b.isDaytime) ? 'day' : 'night';
        b.svg = iconToSVG(svgTime, right_icons[1].split(",")[0]);
        b.color = (new RegExp(CONSTANTS.PRECIPITATION_TYPES.join("|")).test(b.svg)) ? 'yellow' : 'green';
        if(moment(b.startTime).isSameOrAfter(moment(week_start_time), 'day') && moment(b.startTime).isBefore(moment(week_start_time).add(1, 'week'), 'day')) {
          a[CONSTANTS.DAYS.indexOf(moment(b.startTime).format('dddd').toLowerCase())].push(b);
        }
        return a;
      }
    });

  // if less than 24, fill in the blanks with na.svg and delete the one that
  // don't matter
  for (const [i, value] of hourly.days.entries()) {
    if(value.length < 24) {
      value.sort(function(a, b) { return +a.hour - +b.hour; });
      const last_hour = +value[value.length-1].hour;
      const first_hour = +value[0].hour;
      if(first_hour > 0) {
        for (let i=first_hour-1; i > 0; i--) {
          let isDaytime = (i < sunrise || i > sunset) ? false : true;
          let svg = (i < sunrise || i > sunset) ? 'night_na' : 'day_na';
          value.unshift({
            'hour': i.toString().padStart(2, 0),
            'svg': svg,
            'isDaytime': isDaytime,
            'shortForecast': 'Not Available',
            'temperature': null,
            'color': 'light-gray'
          });
        }
      } else {
        for (let i=last_hour+1; i < 24; i++) {
          let isDaytime = (i < sunrise || i > sunset) ? false : true;
          let svg = (i < sunrise || i > sunset) ? 'night_na' : 'day_na';
          value.push({
            'hour': i.toString().padStart(2, 0),
            'svg': svg,
            'isDaytime': isDaytime,
            'shortForecast': 'Not Available',
            'temperature': null,
            'color': 'light-gray'
          });
        }
      }
    }
  }

  const crag = JSON.parse(localStorage.getItem(storageKeys[crag_index]));
  crag.hourly = hourly.days;
  localStorage.setItem(storageKeys[crag_index], JSON.stringify(crag));
}

function populateObservations(crag, data = []) {
  let observations = [];

  observations.name = crag.name;
  observations.crag_index = crag.number;
  observations.distance = getDistanceFromLatLonInMi(crag.coordinates[1], crag.coordinates[0], data[0].geometry.coordinates[1], data[0].geometry.coordinates[0]).toFixed(2);
  observations.curr_timestamp = timeSince(new Date(data[0].properties.timestamp));
  observations.curr_temp = (data[0].properties.temperature.value*(9/5)+32).toFixed(0);
  observations.curr_heat_index = (data[0].properties.heatIndex.value && observations.curr_temp != (data[0].properties.heatIndex.value*(9/5)+32).toFixed(0)) ? (data[0].properties.heatIndex.value*(9/5)+32).toFixed(0) : null;
  observations.curr_wind = (data[0].properties.windSpeed.value) ? (data[0].properties.windSpeed.value * 2.23694).toFixed(0) + "mph " + getDirection(data[0].properties.windDirection.value) : null;
  observations.curr_wind_chill = (data[0].properties.windChill.value) ? (data[0].properties.windChill.value*(9/5)+32).toFixed(0) : null;
  observations.curr_humidity = (data[0].properties.relativeHumidity.value) ? data[0].properties.relativeHumidity.value.toFixed(0) : null;

  let times = SunCalc.getTimes(new Date(), crag.coordinates[1], crag.coordinates[0]);
  observations.sunrise = moment(times.sunrise).tz(tzlookup(crag.coordinates[1], crag.coordinates[0])).format('h:mma');
  observations.sunset = moment(times.sunset).tz(tzlookup(crag.coordinates[1], crag.coordinates[0])).format('h:mma');

  let total_inches = 0;
  let precipitationLastHour = 0;

  const precips = data.filter(
    period => moment(period.properties.timestamp).isSameOrAfter(moment(data[0].properties.timestamp).subtract(2, "days"))
  )
  .map(i => {
    if(i.properties.precipitationLastHour) {
      precipitationLastHour = +i.properties.precipitationLastHour.value*39.3701;
    } else {
      precipitationLastHour += 0;
    }
    total_inches += precipitationLastHour;
    return {
      'precip': precipitationLastHour,
      'date': moment(i.properties.timestamp).format('YYYY-MM-DD HH:mm')
    };
  });

  if(data[0].properties.precipitationLastHour && data[0].properties.precipitationLastHour.value > 0) {
    observations.color = 'light-red';
  } else if(total_inches > 0) {
    observations.color = 'yellow';
  } else {
    observations.color = 'green';
  }

  document.getElementById("overview-"+crag.number).classList.add("b--" + observations.color);
  document.getElementById("precip-total-"+crag.number).innerHTML = (total_inches < 0.005 && total_inches > 0) ? "< 0.005 inches" : total_inches.toFixed(2) + " inches";
  document.getElementById("precip-period-"+crag.number).innerHTML = "last " + timeSince(new Date(moment(precips[precips.length-1].date)),new Date(moment(precips[0].date)));
  document.getElementById("observation-"+crag.number).insertAdjacentHTML("afterbegin", template_weather_observations(observations));
  graph_precip(crag.number, precips);
}

function graph_precip(crag_index, data) {
  const svg = d3.select("#precip-"+crag_index);
  const margin = {top: 20, right: 15, bottom: 20, left: 15};
  const width = +svg.attr("width") - margin.left - margin.right;
  const height = +svg.attr("height") - margin.top - margin.bottom;
  let g = svg.append("g").attr("transform", "translate(" + margin.left + "," + margin.top + ")");

  const parseTime = d3.timeParse("%Y-%m-%d %H:%M");

  const x = d3.scaleTime()
    .rangeRound([0, width]);

  const y = d3.scaleLinear()
    .rangeRound([height, 0]);

  const line = d3.line()
    .x(function(d) { return x(d.date); })
    .y(function(d) { return y(d.precip); });

  data = data
    .map(i => {
      i.date = parseTime(i.date);
      return i;
    });

  x.domain(d3.extent(data, function(d) { return d.date; }));
  y.domain(d3.extent(data, function(d) { return d.precip; }));

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

function normalizePage() {
  u('.hourly-forecast').each(function(el){
    el.classList.remove('flex');
    el.classList.add('dn');
  });
  u('.forecast-day').each(function(el){
    el.dataset.active = false;
    el.classList.remove('bg-light-gray');
  });
  u('.daytime').each(function(el){
    el.classList.remove('bg-near-white');
    el.classList.add('bg-white');
  });
  u('.nighttime').each(function(el){
    el.classList.remove('bg-gray');
    el.classList.add('bg-mid-gray');
  });
}

if (document.body.contains(DOM.weatherSection)) {
  if ((storageKeys.length == 0) || (DOM.weatherSection.dataset.crag != localStorage.getItem('region-selector'))) {
    getCrags(DOM.weatherSection.dataset.crag);
  } else {
    for (let i=0; i < storageKeys.length; i++) {
      crags.push(JSON.parse(localStorage[storageKeys[i]]));
    }
    populate(crags);
  }

  DOM.stateSel.onchange = function () {
    DOM.citySel.length = 0;
    states[this.value].split("|").forEach(city => DOM.citySel.options[DOM.citySel.options.length] = new Option(city, city));
    DOM.selectMetro.href = '/crags/' + slugify(states[this.value].split("|")[0].toLowerCase()) + '-' + slugify(this.value.toLowerCase()) + '-weather.html';
  }

  DOM.citySel.onchange = function () {
    DOM.selectMetro.href = '/crags/' + slugify(this.value) + '-' + slugify(DOM.stateSel.value.toLowerCase()) + '-weather.html';
  }

  document.getElementById("clear-cache").addEventListener("click", function(event){
    localStorage.clear();
    getCrags('austin-tx');
    event.preventDefault();
  });
}

// load the hourly forecast for a particular day
u('[id^=forecast-]').on("click", ".forecast-day", function(el) {
  const crag_index = el.srcElement.dataset.crag;
  const day_index = el.srcElement.dataset.day;
  const date = moment(el.srcElement.dataset.date).format('dddd').toLowerCase();
  const is_active = (el.srcElement.dataset.active == 'true');

  let hourly_forecast = (window.outerWidth > 480) ?
    document.getElementById('hourly-forecast-'+crag_index) :
    document.getElementById('hourly-forecast-'+crag_index+'-'+day_index);
  let daytime = document.getElementById(crag_index+'-daytime-'+day_index);
  let nighttime = document.getElementById(crag_index+'-nighttime-'+day_index);
  if(is_active) {
    hourly_forecast.classList.remove('flex');
    hourly_forecast.classList.add('dn');
    u(el.srcElement).removeClass('bg-light-gray');
    el.srcElement.dataset.active = false;
    daytime.classList.add('bg-white');
    daytime.classList.remove('bg-near-white');
    nighttime.classList.add('bg-mid-gray');
    nighttime.classList.remove('bg-gray');
  } else {
    u('#forecast-'+crag_index+' .forecast-day').each(function(el) {
      el.dataset.active = false;
      u(el).removeClass('bg-light-gray');
    });
    u(el.srcElement).addClass('bg-light-gray');
    el.srcElement.dataset.active = true;
    hourly_forecast.classList.remove('dn');
    hourly_forecast.classList.add('flex');
    u('#forecast-'+crag_index+' .daytime').each(function(el) {
      u(el).removeClass('bg-near-white');
      u(el).addClass('bg-white');
    });
    daytime.classList.remove('bg-white');
    daytime.classList.add('bg-near-white');
    u('#forecast-'+crag_index+' .nighttime').each(function(el) {
      u(el).removeClass('bg-gray');
      u(el).addClass('bg-mid-gray');
    });
    nighttime.classList.remove('bg-mid-gray');
    nighttime.classList.add('bg-gray');
  }

  const crag = JSON.parse(localStorage.getItem([storageKeys[crag_index]]));
  hourly_forecast.innerHTML = template_weather_hourly(crag.hourly[CONSTANTS.DAYS.indexOf(date)]);
});


// delete crag from localStorage and from weather section
u('.crag-delete').on( "click", function(el) {
  const crag_index = el.srcElement.dataset.crag;
  const crag_name = el.srcElement.dataset.name;
  const remove = window.confirm("Are you sure you want to remove " + crag_name + "?");

  if(remove) {
    document.getElementById("menu-item-"+crag_index).remove();
    document.getElementById("crag-"+crag_index).remove();
    document.getElementById("hr-"+crag_index).remove();
    localStorage.removeItem("crag-"+slugify(crag_name));
  }
});

// change active status
u('.crag-status').on( "click", function(el) {
  const crag_index = el.srcElement.dataset.crag;
  const crag_active = el.srcElement.dataset.active;
  const crag_slug = el.srcElement.dataset.slug;
  const crag = JSON.parse(localStorage.getItem("crag-"+crag_slug));
  crag.number = +crag_index;
  const crags = [];

  if(crag_active === "true") {
    document.getElementById("crag-status-"+crag_index).dataset.active = false;
    document.getElementById("crag-status-"+crag_index).classList.remove('b--green');
    document.getElementById("crag-status-"+crag_index).classList.add('b--mid-gray');
    document.getElementById("crag-"+crag_index).remove();
    document.getElementById("hr-"+crag_index).remove();
    crag.active = false;
    localStorage.setItem("crag-"+crag_slug, JSON.stringify(crag));
  } else {
    document.getElementById("crag-status-"+crag_index).dataset.active = true;
    document.getElementById("crag-status-"+crag_index).classList.remove('b--mid-gray');
    document.getElementById("crag-status-"+crag_index).classList.add('b--green');
    crag.active = true;
    localStorage.setItem("crag-"+crag_slug, JSON.stringify(crag));
    crags.push(crag);
    // add to weather section in the correct ordering
    if(+crag_index === 0) {
      populate(crags, false, "weather", 'afterbegin');
    } else if(+crag_index === localStorage.length-1) {
      populate(crags, false);
    } else {
      let active_crags = [];
      u(".crag-weather").each(function(el) {
        active_crags.push(+el.srcElement.dataset.crag);
      });
      active_crags.push(crag.number);
      active_crags.sort();
      populate(crags, false, "crag-"+(active_crags[active_crags.indexOf(crag.number)+1]), 'beforebegin');
    }
  }
});

u("#settings-toggle").on( "click", function() {
  if(u("#settings").hasClass('open')) {
    u("#settings").removeClass('open');
    const toggled_text = u("#settings-toggle").text().replace("Hide", "Show");
    u("#settings-toggle").text(toggled_text);
    document.getElementById("settings").style.display = "none";
  } else {
    u("#settings").addClass('open');
    const toggled_text = u("#settings-toggle").text().replace("Show", "Hide");
    u("#settings-toggle").text(toggled_text);
    document.getElementById("settings").style.display = "block";
  }
});

u("#issues-toggle").on( "click", function() {
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

// normalize all crags hourly settings on window resize
window.addEventListener("resize", normalizePage);

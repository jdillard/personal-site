---
### THIS FILE IS AUTO-GENERATED - DO NOT EDIT ###
layout: page
title: City of Rocks, Idaho Climbing Weather - Current, Past, and Forecasted Report
title_override: City of Rocks<br /><small>Climbing Weather</small>
description: A lightweight weather report for City of Rocks, Idaho. Optimized for slow internet connections.
js_includes:
  - weather.js
---

<section class="measure center lh-copy f5-ns f6 ph2 mv4" style="text-align: justify;">
<strong>"Is it dry?"</strong>, an oft-repeated, age-old question. Here are real-time,
precipitation-focused reports of current, past, and forecasted climbing weather for City of Rocks, Idaho.
</section>

<p id="settings-toggle" class="mw5 b center tc hover-light-red black-70 pointer">Show Instructions</p>
<section id="settings" class="overflow-hidden" style="display:none;">
    <div class="mv2 ph2 center">
        <div class="fn f6 tc pv2">
            <p class="measure lh-copy center"><strong>Show/hide hourly forecasts</strong> by clicking the desired day.</p>
            <hr class="mw5 p0 mv2 o-60 b0 bt b--light-red light-red bg-light-red">
            <p class="measure lh-copy center"><strong>Current and Past conditions</strong> are measured by the nearest weather station. <strong>Forecast conditions</strong> are calculated and polled separately.</p>
            <hr class="mw5 p0 mv2 o-60 b0 bt b--light-red light-red bg-light-red">
            <p class="measure lh-copy center"><strong>Having issues?</strong> Try <a id="clear-cache" class="no-underline relative fancy-link light-red hover-light-red" href="#">clearing the local cache</a>.</p>
            <hr class="mw5 p0 mv2 o-60 b0 bt b--light-red light-red bg-light-red">
            <p class="measure lh-copy center">Weather data sourced from <a class="no-underline fancy-link relative light-red" target="_blank" href="https://www.weather.gov/documentation/services-web-api">weather.gov</a>.</p>
        </div>
    </div>
</section>
<section id="weather" data-crag="city-of-rocks-idaho" class="mv4-ns mv3 ph2 center"></section>
<section id="nearby" class="tc lh-copy">
  <h3>Nearby Crags</h3>
<a class="nowrap no-underline fancy-link relative light-red mh3" href="/crags/moab-utah-weather.html">Moab</a>
<a class="nowrap no-underline fancy-link relative light-red mh3" href="/crags/little-cottonwood-canyon-utah-weather.html">Little Cottonwood Canyon</a>
</section>
<section id="nearby" class="tc lh-copy">
  <h3>Other Metros</h3>
  <select class="ma1 bg-near-white pa2" id="stateSel">
    <option value="Texas">Texas</option>
    <option value="Washington">Washington</option>
    <option value="Colorado">Colorado</option>
    <option value="Tennessee">Tennessee</option>
    <option value="Utah" selected>Utah</option>
    <option value="California">California</option>
  </select>
  <select class="ma1 bg-near-white pa2" id="citySel">
    <option value="Salt Lake City" selected>Salt Lake City</option>
  </select>
  <a id="selectMetro" class="f6 link dim ph3 pv2 ma1 dib white bg-light-red" href="/crags/salt-lake-city-utah-weather.html">Select Metro</a>
  <script>
    var states = [];
    states["Texas"] = "Austin"
    states["Washington"] = "Seattle"
    states["Colorado"] = "Denver"
    states["Tennessee"] = "Nashville"
    states["Utah"] = "Salt Lake City"
    states["California"] = "San Francisco|Los Angeles"
  </script>
</section>
{% include feedback.html %}
<p id="issues-toggle" class="mw5 b center tc hover-light-red black-70 pointer">Show Known Issues</p>
<section id="issues" class="overflow-hidden tc f6">
</section>

<script>
  var weekly_PIH_50_16 = {"updated":"2022-11-12T03:38:10+00:00","units":"us","forecastGenerator":"BaselineForecastGenerator","generatedAt":"2022-11-12T08:40:09+00:00","updateTime":"2022-11-12T03:38:10+00:00","validTimes":"2022-11-11T21:00:00+00:00/P7DT15H","elevation":{"unitCode":"wmoUnit:m","value":1958.9496},"periods":[{"number":1,"name":"Overnight","startTime":"2022-11-12T01:00:00-07:00","endTime":"2022-11-12T06:00:00-07:00","isDaytime":false,"temperature":12,"temperatureUnit":"F","temperatureTrend":"rising","windSpeed":"10 mph","windDirection":"SSW","icon":"https://api.weather.gov/icons/land/night/bkn?size=medium","shortForecast":"Mostly Cloudy","detailedForecast":"Mostly cloudy. Low around 12, with temperatures rising to around 17 overnight. South southwest wind around 10 mph."},{"number":2,"name":"Saturday","startTime":"2022-11-12T06:00:00-07:00","endTime":"2022-11-12T18:00:00-07:00","isDaytime":true,"temperature":29,"temperatureUnit":"F","temperatureTrend":"falling","windSpeed":"6 to 10 mph","windDirection":"SSW","icon":"https://api.weather.gov/icons/land/day/bkn?size=medium","shortForecast":"Mostly Cloudy","detailedForecast":"Mostly cloudy. High near 29, with temperatures falling to around 25 in the afternoon. South southwest wind 6 to 10 mph."},{"number":3,"name":"Saturday Night","startTime":"2022-11-12T18:00:00-07:00","endTime":"2022-11-13T06:00:00-07:00","isDaytime":false,"temperature":13,"temperatureUnit":"F","temperatureTrend":"rising","windSpeed":"3 to 8 mph","windDirection":"WNW","icon":"https://api.weather.gov/icons/land/night/bkn?size=medium","shortForecast":"Mostly Cloudy","detailedForecast":"Mostly cloudy. Low around 13, with temperatures rising to around 15 overnight. West northwest wind 3 to 8 mph."},{"number":4,"name":"Sunday","startTime":"2022-11-13T06:00:00-07:00","endTime":"2022-11-13T18:00:00-07:00","isDaytime":true,"temperature":25,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"6 to 12 mph","windDirection":"NW","icon":"https://api.weather.gov/icons/land/day/sct?size=medium","shortForecast":"Mostly Sunny","detailedForecast":"Mostly sunny, with a high near 25. Northwest wind 6 to 12 mph, with gusts as high as 18 mph."},{"number":5,"name":"Sunday Night","startTime":"2022-11-13T18:00:00-07:00","endTime":"2022-11-14T06:00:00-07:00","isDaytime":false,"temperature":11,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"7 to 10 mph","windDirection":"NNW","icon":"https://api.weather.gov/icons/land/night/sct?size=medium","shortForecast":"Partly Cloudy","detailedForecast":"Partly cloudy, with a low around 11. North northwest wind 7 to 10 mph, with gusts as high as 18 mph."},{"number":6,"name":"Monday","startTime":"2022-11-14T06:00:00-07:00","endTime":"2022-11-14T18:00:00-07:00","isDaytime":true,"temperature":26,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"8 mph","windDirection":"N","icon":"https://api.weather.gov/icons/land/day/sct?size=medium","shortForecast":"Mostly Sunny","detailedForecast":"Mostly sunny, with a high near 26."},{"number":7,"name":"Monday Night","startTime":"2022-11-14T18:00:00-07:00","endTime":"2022-11-15T06:00:00-07:00","isDaytime":false,"temperature":12,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"7 mph","windDirection":"NNE","icon":"https://api.weather.gov/icons/land/night/sct?size=medium","shortForecast":"Partly Cloudy","detailedForecast":"Partly cloudy, with a low around 12."},{"number":8,"name":"Tuesday","startTime":"2022-11-15T06:00:00-07:00","endTime":"2022-11-15T18:00:00-07:00","isDaytime":true,"temperature":27,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"6 to 9 mph","windDirection":"N","icon":"https://api.weather.gov/icons/land/day/few?size=medium","shortForecast":"Sunny","detailedForecast":"Sunny, with a high near 27."},{"number":9,"name":"Tuesday Night","startTime":"2022-11-15T18:00:00-07:00","endTime":"2022-11-16T06:00:00-07:00","isDaytime":false,"temperature":12,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"6 to 9 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/night/few?size=medium","shortForecast":"Mostly Clear","detailedForecast":"Mostly clear, with a low around 12."},{"number":10,"name":"Wednesday","startTime":"2022-11-16T06:00:00-07:00","endTime":"2022-11-16T18:00:00-07:00","isDaytime":true,"temperature":30,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"8 mph","windDirection":"WSW","icon":"https://api.weather.gov/icons/land/day/few?size=medium","shortForecast":"Sunny","detailedForecast":"Sunny, with a high near 30."},{"number":11,"name":"Wednesday Night","startTime":"2022-11-16T18:00:00-07:00","endTime":"2022-11-17T06:00:00-07:00","isDaytime":false,"temperature":15,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"9 mph","windDirection":"SW","icon":"https://api.weather.gov/icons/land/night/sct?size=medium","shortForecast":"Partly Cloudy","detailedForecast":"Partly cloudy, with a low around 15."},{"number":12,"name":"Thursday","startTime":"2022-11-17T06:00:00-07:00","endTime":"2022-11-17T18:00:00-07:00","isDaytime":true,"temperature":31,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"7 to 12 mph","windDirection":"WSW","icon":"https://api.weather.gov/icons/land/day/bkn?size=medium","shortForecast":"Partly Sunny","detailedForecast":"Partly sunny, with a high near 31."},{"number":13,"name":"Thursday Night","startTime":"2022-11-17T18:00:00-07:00","endTime":"2022-11-18T06:00:00-07:00","isDaytime":false,"temperature":14,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"6 to 9 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/night/bkn?size=medium","shortForecast":"Mostly Cloudy","detailedForecast":"Mostly cloudy, with a low around 14."},{"number":14,"name":"Friday","startTime":"2022-11-18T06:00:00-07:00","endTime":"2022-11-18T18:00:00-07:00","isDaytime":true,"temperature":25,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"6 to 9 mph","windDirection":"NW","icon":"https://api.weather.gov/icons/land/day/snow,20?size=medium","shortForecast":"Slight Chance Light Snow","detailedForecast":"A slight chance of snow after 11am. Partly sunny, with a high near 25. Chance of precipitation is 20%."}]}
  var hourly_PIH_50_16 = false
  var crags_config = [
  {
    "name": "City of Rocks",
    "note": "Varnished and pocketed granite",
    "mountainProject": "https://www.mountainproject.com/area/105739322/city-of-rocks",
    "station": "RCKI1",
    "office": "PIH/50,16",
    "coordinates": [
      -113.7215,
      42.0760
    ]
  }
]</script>

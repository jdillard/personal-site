---
### THIS FILE IS AUTO-GENERATED - DO NOT EDIT ###
layout: page
title: Moab, Utah Climbing Weather - Current, Past, and Forecasted Report
title_override: Moab<br /><small>Climbing Weather</small>
description: A lightweight weather report for Moab, Utah. Optimized for slow internet connections.
js_includes:
  - weather.js
---

<section class="measure center lh-copy f5-ns f6 ph2 mv4" style="text-align: justify;">
<strong>"Is it dry?"</strong>, an oft-repeated, age-old question. Here are real-time,
precipitation-focused reports of current, past, and forecasted climbing weather for Moab, Utah.
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
<section id="weather" data-crag="moab-utah" class="mv4-ns mv3 ph2 center"></section>
<section id="nearby" class="tc lh-copy">
  <h3>Nearby Crags</h3>
<a class="nowrap no-underline fancy-link relative light-red mh3" href="/crags/clear-creek-canyon-colorado-weather.html">Clear Creek Canyon</a>
<a class="nowrap no-underline fancy-link relative light-red mh3" href="/crags/staunton-state-park-colorado-weather.html">Staunton State Park</a>
<a class="nowrap no-underline fancy-link relative light-red mh3" href="/crags/lime-park-lime-creek-colorado-weather.html">Lime Park (Lime Creek)</a>
<a class="nowrap no-underline fancy-link relative light-red mh3" href="/crags/independence-pass-colorado-weather.html">Independence Pass</a>
<a class="nowrap no-underline fancy-link relative light-red mh3" href="/crags/estes-park-valley-colorado-weather.html">Estes Park Valley</a>
<a class="nowrap no-underline fancy-link relative light-red mh3" href="/crags/gunnison-colorado-weather.html">Gunnison</a>
<a class="nowrap no-underline fancy-link relative light-red mh3" href="/crags/little-cottonwood-canyon-utah-weather.html">Little Cottonwood Canyon</a>
<a class="nowrap no-underline fancy-link relative light-red mh3" href="/crags/city-of-rocks-idaho-weather.html">City of Rocks</a>
</section>
<section id="nearby" class="tc lh-copy">
  <h3>Other Metros</h3>
  <select class="ma1 bg-near-white pa2" id="stateSel">
    <option value="Texas">Texas</option>
    <option value="Washington">Washington</option>
    <option value="Colorado" selected>Colorado</option>
    <option value="Tennessee">Tennessee</option>
    <option value="Utah">Utah</option>
    <option value="California">California</option>
  </select>
  <select class="ma1 bg-near-white pa2" id="citySel">
    <option value="Denver" selected>Denver</option>
  </select>
  <a id="selectMetro" class="f6 link dim ph3 pv2 ma1 dib white bg-light-red" href="/crags/denver-colorado-weather.html">Select Metro</a>
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
  var weekly_GJT_60_82 = {"updated":"2022-10-04T07:35:56+00:00","units":"us","forecastGenerator":"BaselineForecastGenerator","generatedAt":"2022-10-04T08:44:44+00:00","updateTime":"2022-10-04T07:35:56+00:00","validTimes":"2022-10-04T01:00:00+00:00/P7D","elevation":{"unitCode":"wmoUnit:m","value":1560.8808},"periods":[{"number":1,"name":"Overnight","startTime":"2022-10-04T02:00:00-06:00","endTime":"2022-10-04T06:00:00-06:00","isDaytime":false,"temperature":50,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"5 mph","windDirection":"SE","icon":"https://api.weather.gov/icons/land/night/few?size=medium","shortForecast":"Mostly Clear","detailedForecast":"Mostly clear, with a low around 50. Southeast wind around 5 mph."},{"number":2,"name":"Tuesday","startTime":"2022-10-04T06:00:00-06:00","endTime":"2022-10-04T18:00:00-06:00","isDaytime":true,"temperature":72,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"0 to 10 mph","windDirection":"NE","icon":"https://api.weather.gov/icons/land/day/few?size=medium","shortForecast":"Sunny","detailedForecast":"Sunny, with a high near 72. Northeast wind 0 to 10 mph."},{"number":3,"name":"Tuesday Night","startTime":"2022-10-04T18:00:00-06:00","endTime":"2022-10-05T06:00:00-06:00","isDaytime":false,"temperature":49,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"5 to 10 mph","windDirection":"ENE","icon":"https://api.weather.gov/icons/land/night/few?size=medium","shortForecast":"Mostly Clear","detailedForecast":"Mostly clear, with a low around 49. East northeast wind 5 to 10 mph."},{"number":4,"name":"Wednesday","startTime":"2022-10-05T06:00:00-06:00","endTime":"2022-10-05T18:00:00-06:00","isDaytime":true,"temperature":72,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"5 to 10 mph","windDirection":"NE","icon":"https://api.weather.gov/icons/land/day/few?size=medium","shortForecast":"Sunny","detailedForecast":"Sunny, with a high near 72. Northeast wind 5 to 10 mph."},{"number":5,"name":"Wednesday Night","startTime":"2022-10-05T18:00:00-06:00","endTime":"2022-10-06T06:00:00-06:00","isDaytime":false,"temperature":48,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"5 to 10 mph","windDirection":"ENE","icon":"https://api.weather.gov/icons/land/night/few?size=medium","shortForecast":"Mostly Clear","detailedForecast":"Mostly clear, with a low around 48. East northeast wind 5 to 10 mph."},{"number":6,"name":"Thursday","startTime":"2022-10-06T06:00:00-06:00","endTime":"2022-10-06T18:00:00-06:00","isDaytime":true,"temperature":72,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"5 mph","windDirection":"N","icon":"https://api.weather.gov/icons/land/day/few?size=medium","shortForecast":"Sunny","detailedForecast":"Sunny, with a high near 72."},{"number":7,"name":"Thursday Night","startTime":"2022-10-06T18:00:00-06:00","endTime":"2022-10-07T06:00:00-06:00","isDaytime":false,"temperature":49,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"5 mph","windDirection":"ENE","icon":"https://api.weather.gov/icons/land/night/few?size=medium","shortForecast":"Mostly Clear","detailedForecast":"Mostly clear, with a low around 49."},{"number":8,"name":"Friday","startTime":"2022-10-07T06:00:00-06:00","endTime":"2022-10-07T18:00:00-06:00","isDaytime":true,"temperature":73,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"5 mph","windDirection":"SSW","icon":"https://api.weather.gov/icons/land/day/few?size=medium","shortForecast":"Sunny","detailedForecast":"Sunny, with a high near 73."},{"number":9,"name":"Friday Night","startTime":"2022-10-07T18:00:00-06:00","endTime":"2022-10-08T06:00:00-06:00","isDaytime":false,"temperature":49,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"5 mph","windDirection":"S","icon":"https://api.weather.gov/icons/land/night/few?size=medium","shortForecast":"Mostly Clear","detailedForecast":"Mostly clear, with a low around 49."},{"number":10,"name":"Saturday","startTime":"2022-10-08T06:00:00-06:00","endTime":"2022-10-08T18:00:00-06:00","isDaytime":true,"temperature":74,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"5 mph","windDirection":"SW","icon":"https://api.weather.gov/icons/land/day/few?size=medium","shortForecast":"Sunny","detailedForecast":"Sunny, with a high near 74."},{"number":11,"name":"Saturday Night","startTime":"2022-10-08T18:00:00-06:00","endTime":"2022-10-09T06:00:00-06:00","isDaytime":false,"temperature":50,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"5 mph","windDirection":"SSE","icon":"https://api.weather.gov/icons/land/night/few?size=medium","shortForecast":"Mostly Clear","detailedForecast":"Mostly clear, with a low around 50."},{"number":12,"name":"Sunday","startTime":"2022-10-09T06:00:00-06:00","endTime":"2022-10-09T18:00:00-06:00","isDaytime":true,"temperature":73,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"5 mph","windDirection":"SW","icon":"https://api.weather.gov/icons/land/day/few?size=medium","shortForecast":"Sunny","detailedForecast":"Sunny, with a high near 73."},{"number":13,"name":"Sunday Night","startTime":"2022-10-09T18:00:00-06:00","endTime":"2022-10-10T06:00:00-06:00","isDaytime":false,"temperature":50,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"5 mph","windDirection":"S","icon":"https://api.weather.gov/icons/land/night/sct?size=medium","shortForecast":"Partly Cloudy","detailedForecast":"Partly cloudy, with a low around 50."},{"number":14,"name":"Columbus Day","startTime":"2022-10-10T06:00:00-06:00","endTime":"2022-10-10T18:00:00-06:00","isDaytime":true,"temperature":72,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"5 to 10 mph","windDirection":"SSW","icon":"https://api.weather.gov/icons/land/day/sct?size=medium","shortForecast":"Mostly Sunny","detailedForecast":"Mostly sunny, with a high near 72."}]}
  var hourly_GJT_60_82 = {"correlationId":"bceebe8","title":"Unexpected Problem","type":"https://api.weather.gov/problems/UnexpectedProblem","status":500,"detail":"An unexpected problem has occurred.","instance":"https://api.weather.gov/requests/bceebe8"}
  var crags_config = [
  {
    "name": "Moab",
    "note": "Soft sandstone in a desert environment.",
    "mountainProject": "https://www.mountainproject.com/area/105716711/moab-area",
    "station": "MOAB",
    "office": "GJT/60,82",
    "coordinates": [
      -109.550,
      38.573
    ]
  }
]</script>

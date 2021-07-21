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
  var weekly_PIH_50_16 = {"updated":"2021-07-21T03:07:40+00:00","units":"us","forecastGenerator":"BaselineForecastGenerator","generatedAt":"2021-07-21T08:44:58+00:00","updateTime":"2021-07-21T03:07:40+00:00","validTimes":"2021-07-20T21:00:00+00:00/P6DT16H","elevation":{"value":1958.9496,"unitCode":"unit:m"},"periods":[{"number":1,"name":"Overnight","startTime":"2021-07-21T02:00:00-06:00","endTime":"2021-07-21T06:00:00-06:00","isDaytime":false,"temperature":61,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"5 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/night/few?size=medium","shortForecast":"Mostly Clear","detailedForecast":"Mostly clear, with a low around 61. West wind around 5 mph."},{"number":2,"name":"Wednesday","startTime":"2021-07-21T06:00:00-06:00","endTime":"2021-07-21T18:00:00-06:00","isDaytime":true,"temperature":86,"temperatureUnit":"F","temperatureTrend":"falling","windSpeed":"3 to 12 mph","windDirection":"SSW","icon":"https://api.weather.gov/icons/land/day/sct/tsra_hi,30?size=medium","shortForecast":"Mostly Sunny then Areas Of Smoke","detailedForecast":"Areas of smoke and a chance of showers and thunderstorms after noon. Mostly sunny. High near 86, with temperatures falling to around 83 in the afternoon. South southwest wind 3 to 12 mph, with gusts as high as 22 mph. Chance of precipitation is 30%."},{"number":3,"name":"Wednesday Night","startTime":"2021-07-21T18:00:00-06:00","endTime":"2021-07-22T06:00:00-06:00","isDaytime":false,"temperature":64,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"6 to 9 mph","windDirection":"SSW","icon":"https://api.weather.gov/icons/land/night/tsra_hi,20/bkn?size=medium","shortForecast":"Slight Chance Showers And Thunderstorms then Mostly Cloudy","detailedForecast":"A slight chance of showers and thunderstorms before midnight. Mostly cloudy, with a low around 64. South southwest wind 6 to 9 mph, with gusts as high as 21 mph. Chance of precipitation is 20%."},{"number":4,"name":"Thursday","startTime":"2021-07-22T06:00:00-06:00","endTime":"2021-07-22T18:00:00-06:00","isDaytime":true,"temperature":85,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"6 to 12 mph","windDirection":"SW","icon":"https://api.weather.gov/icons/land/day/sct/tsra_hi,30?size=medium","shortForecast":"Mostly Sunny then Chance Showers And Thunderstorms","detailedForecast":"A chance of showers and thunderstorms after noon. Mostly sunny, with a high near 85. Southwest wind 6 to 12 mph. Chance of precipitation is 30%."},{"number":5,"name":"Thursday Night","startTime":"2021-07-22T18:00:00-06:00","endTime":"2021-07-23T06:00:00-06:00","isDaytime":false,"temperature":61,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"6 to 12 mph","windDirection":"WNW","icon":"https://api.weather.gov/icons/land/night/sct?size=medium","shortForecast":"Partly Cloudy","detailedForecast":"Partly cloudy, with a low around 61. West northwest wind 6 to 12 mph."},{"number":6,"name":"Friday","startTime":"2021-07-23T06:00:00-06:00","endTime":"2021-07-23T18:00:00-06:00","isDaytime":true,"temperature":86,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"6 to 10 mph","windDirection":"NW","icon":"https://api.weather.gov/icons/land/day/sct?size=medium","shortForecast":"Mostly Sunny","detailedForecast":"Mostly sunny, with a high near 86."},{"number":7,"name":"Friday Night","startTime":"2021-07-23T18:00:00-06:00","endTime":"2021-07-24T06:00:00-06:00","isDaytime":false,"temperature":61,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"6 to 12 mph","windDirection":"NW","icon":"https://api.weather.gov/icons/land/night/sct?size=medium","shortForecast":"Partly Cloudy","detailedForecast":"Partly cloudy, with a low around 61."},{"number":8,"name":"Saturday","startTime":"2021-07-24T06:00:00-06:00","endTime":"2021-07-24T18:00:00-06:00","isDaytime":true,"temperature":86,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"6 to 12 mph","windDirection":"NNW","icon":"https://api.weather.gov/icons/land/day/few?size=medium","shortForecast":"Sunny","detailedForecast":"Sunny, with a high near 86."},{"number":9,"name":"Saturday Night","startTime":"2021-07-24T18:00:00-06:00","endTime":"2021-07-25T06:00:00-06:00","isDaytime":false,"temperature":61,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"6 to 13 mph","windDirection":"WNW","icon":"https://api.weather.gov/icons/land/night/sct?size=medium","shortForecast":"Partly Cloudy","detailedForecast":"Partly cloudy, with a low around 61."},{"number":10,"name":"Sunday","startTime":"2021-07-25T06:00:00-06:00","endTime":"2021-07-25T18:00:00-06:00","isDaytime":true,"temperature":87,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"6 to 10 mph","windDirection":"NNW","icon":"https://api.weather.gov/icons/land/day/few?size=medium","shortForecast":"Sunny","detailedForecast":"Sunny, with a high near 87."},{"number":11,"name":"Sunday Night","startTime":"2021-07-25T18:00:00-06:00","endTime":"2021-07-26T06:00:00-06:00","isDaytime":false,"temperature":61,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"6 to 12 mph","windDirection":"SW","icon":"https://api.weather.gov/icons/land/night/sct?size=medium","shortForecast":"Partly Cloudy","detailedForecast":"Partly cloudy, with a low around 61."},{"number":12,"name":"Monday","startTime":"2021-07-26T06:00:00-06:00","endTime":"2021-07-26T18:00:00-06:00","isDaytime":true,"temperature":85,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"6 to 9 mph","windDirection":"S","icon":"https://api.weather.gov/icons/land/day/sct?size=medium","shortForecast":"Mostly Sunny","detailedForecast":"Mostly sunny, with a high near 85."},{"number":13,"name":"Monday Night","startTime":"2021-07-26T18:00:00-06:00","endTime":"2021-07-27T06:00:00-06:00","isDaytime":false,"temperature":62,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"6 to 9 mph","windDirection":"SSW","icon":"https://api.weather.gov/icons/land/night/bkn?size=medium","shortForecast":"Mostly Cloudy","detailedForecast":"Mostly cloudy, with a low around 62."},{"number":14,"name":"Tuesday","startTime":"2021-07-27T06:00:00-06:00","endTime":"2021-07-27T18:00:00-06:00","isDaytime":true,"temperature":83,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"6 to 12 mph","windDirection":"S","icon":"https://api.weather.gov/icons/land/day/bkn/tsra_hi,20?size=medium","shortForecast":"Partly Sunny then Slight Chance Showers And Thunderstorms","detailedForecast":"A slight chance of showers and thunderstorms after noon. Partly sunny, with a high near 83. Chance of precipitation is 20%."}]}
  var hourly_PIH_50_16 = {"correlationId":"bd4663b","title":"Forecast Grid Invalid","type":"https://api.weather.gov/problems/ForecastMissingData","status":503,"detail":"The forecast grid is missing data for time 2021-07-27T07:00:00-06:00.","instance":"https://api.weather.gov/requests/bd4663b"}
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

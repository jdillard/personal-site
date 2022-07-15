---
### THIS FILE IS AUTO-GENERATED - DO NOT EDIT ###
layout: page
title: Hueco Tanks, Texas Climbing Weather - Current, Past, and Forecasted Report
title_override: Hueco Tanks<br /><small>Climbing Weather</small>
description: A lightweight weather report for Hueco Tanks, Texas. Optimized for slow internet connections.
js_includes:
  - weather.js
---

<section class="measure center lh-copy f5-ns f6 ph2 mv4" style="text-align: justify;">
<strong>"Is it dry?"</strong>, an oft-repeated, age-old question. Here are real-time,
precipitation-focused reports of current, past, and forecasted climbing weather for Hueco Tanks, Texas.
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
<section id="weather" data-crag="hueco-tanks-texas" class="mv4-ns mv3 ph2 center"></section>
<section id="nearby" class="tc lh-copy">
  <h3>Nearby Crags</h3>
<a class="nowrap no-underline fancy-link relative light-red mh3" href="/crags/the-greenbelt-texas-weather.html">The Greenbelt</a>
<a class="nowrap no-underline fancy-link relative light-red mh3" href="/crags/continental-ranch-texas-weather.html">Continental Ranch</a>
<a class="nowrap no-underline fancy-link relative light-red mh3" href="/crags/pace-bend-park-texas-weather.html">Pace Bend Park</a>
<a class="nowrap no-underline fancy-link relative light-red mh3" href="/crags/reimers-ranch-texas-weather.html">Reimer's Ranch</a>
<a class="nowrap no-underline fancy-link relative light-red mh3" href="/crags/cochise-stronghold-arizona-weather.html">Cochise Stronghold</a>
<a class="nowrap no-underline fancy-link relative light-red mh3" href="/crags/enchanted-rock-texas-weather.html">Enchanted Rock</a>
<a class="nowrap no-underline fancy-link relative light-red mh3" href="/crags/horseshoe-canyon-ranch-arkansas-weather.html">Horseshoe Canyon Ranch</a>
<a class="nowrap no-underline fancy-link relative light-red mh3" href="/crags/last-chance-canyon-new-mexico-weather.html">Last Chance Canyon</a>
<a class="nowrap no-underline fancy-link relative light-red mh3" href="/crags/georgetown-texas-weather.html">Georgetown</a>
<a class="nowrap no-underline fancy-link relative light-red mh3" href="/crags/mckinney-falls-texas-weather.html">McKinney Falls</a>
</section>
<section id="nearby" class="tc lh-copy">
  <h3>Other Metros</h3>
  <select class="ma1 bg-near-white pa2" id="stateSel">
    <option value="Texas" selected>Texas</option>
    <option value="Washington">Washington</option>
    <option value="Colorado">Colorado</option>
    <option value="Tennessee">Tennessee</option>
    <option value="Utah">Utah</option>
    <option value="California">California</option>
  </select>
  <select class="ma1 bg-near-white pa2" id="citySel">
    <option value="Austin" selected>Austin</option>
  </select>
  <a id="selectMetro" class="f6 link dim ph3 pv2 ma1 dib white bg-light-red" href="/crags/austin-texas-weather.html">Select Metro</a>
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
  var weekly_EPZ_116_60 = {"updated":"2022-07-15T07:41:04+00:00","units":"us","forecastGenerator":"BaselineForecastGenerator","generatedAt":"2022-07-15T08:39:56+00:00","updateTime":"2022-07-15T07:41:04+00:00","validTimes":"2022-07-15T01:00:00+00:00/P8DT6H","elevation":{"unitCode":"wmoUnit:m","value":1449.9336},"periods":[{"number":1,"name":"Overnight","startTime":"2022-07-15T02:00:00-06:00","endTime":"2022-07-15T06:00:00-06:00","isDaytime":false,"temperature":73,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"10 mph","windDirection":"SE","icon":"https://api.weather.gov/icons/land/night/sct?size=medium","shortForecast":"Partly Cloudy","detailedForecast":"Partly cloudy, with a low around 73. Southeast wind around 10 mph."},{"number":2,"name":"Friday","startTime":"2022-07-15T06:00:00-06:00","endTime":"2022-07-15T18:00:00-06:00","isDaytime":true,"temperature":96,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"6 to 14 mph","windDirection":"SE","icon":"https://api.weather.gov/icons/land/day/sct?size=medium","shortForecast":"Mostly Sunny","detailedForecast":"Mostly sunny, with a high near 96. Southeast wind 6 to 14 mph, with gusts as high as 20 mph."},{"number":3,"name":"Friday Night","startTime":"2022-07-15T18:00:00-06:00","endTime":"2022-07-16T06:00:00-06:00","isDaytime":false,"temperature":72,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"10 to 15 mph","windDirection":"SE","icon":"https://api.weather.gov/icons/land/night/few?size=medium","shortForecast":"Mostly Clear","detailedForecast":"Mostly clear, with a low around 72. Southeast wind 10 to 15 mph, with gusts as high as 22 mph."},{"number":4,"name":"Saturday","startTime":"2022-07-16T06:00:00-06:00","endTime":"2022-07-16T18:00:00-06:00","isDaytime":true,"temperature":96,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"7 to 12 mph","windDirection":"SSE","icon":"https://api.weather.gov/icons/land/day/few?size=medium","shortForecast":"Sunny","detailedForecast":"Sunny, with a high near 96. South southeast wind 7 to 12 mph."},{"number":5,"name":"Saturday Night","startTime":"2022-07-16T18:00:00-06:00","endTime":"2022-07-17T06:00:00-06:00","isDaytime":false,"temperature":73,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"12 to 15 mph","windDirection":"ESE","icon":"https://api.weather.gov/icons/land/night/few?size=medium","shortForecast":"Mostly Clear","detailedForecast":"Mostly clear, with a low around 73. East southeast wind 12 to 15 mph, with gusts as high as 21 mph."},{"number":6,"name":"Sunday","startTime":"2022-07-17T06:00:00-06:00","endTime":"2022-07-17T18:00:00-06:00","isDaytime":true,"temperature":97,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"9 to 15 mph","windDirection":"ESE","icon":"https://api.weather.gov/icons/land/day/few?size=medium","shortForecast":"Sunny","detailedForecast":"Sunny, with a high near 97. East southeast wind 9 to 15 mph, with gusts as high as 21 mph."},{"number":7,"name":"Sunday Night","startTime":"2022-07-17T18:00:00-06:00","endTime":"2022-07-18T06:00:00-06:00","isDaytime":false,"temperature":75,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"13 to 17 mph","windDirection":"ESE","icon":"https://api.weather.gov/icons/land/night/sct?size=medium","shortForecast":"Partly Cloudy","detailedForecast":"Partly cloudy, with a low around 75. East southeast wind 13 to 17 mph, with gusts as high as 24 mph."},{"number":8,"name":"Monday","startTime":"2022-07-18T06:00:00-06:00","endTime":"2022-07-18T18:00:00-06:00","isDaytime":true,"temperature":98,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"8 to 13 mph","windDirection":"ESE","icon":"https://api.weather.gov/icons/land/day/sct?size=medium","shortForecast":"Mostly Sunny","detailedForecast":"Mostly sunny, with a high near 98. East southeast wind 8 to 13 mph."},{"number":9,"name":"Monday Night","startTime":"2022-07-18T18:00:00-06:00","endTime":"2022-07-19T06:00:00-06:00","isDaytime":false,"temperature":76,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"12 to 16 mph","windDirection":"ESE","icon":"https://api.weather.gov/icons/land/night/sct?size=medium","shortForecast":"Partly Cloudy","detailedForecast":"Partly cloudy, with a low around 76. East southeast wind 12 to 16 mph, with gusts as high as 23 mph."},{"number":10,"name":"Tuesday","startTime":"2022-07-19T06:00:00-06:00","endTime":"2022-07-19T18:00:00-06:00","isDaytime":true,"temperature":97,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"12 mph","windDirection":"SSE","icon":"https://api.weather.gov/icons/land/day/few?size=medium","shortForecast":"Sunny","detailedForecast":"Sunny, with a high near 97."},{"number":11,"name":"Tuesday Night","startTime":"2022-07-19T18:00:00-06:00","endTime":"2022-07-20T06:00:00-06:00","isDaytime":false,"temperature":73,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"10 to 18 mph","windDirection":"SSE","icon":"https://api.weather.gov/icons/land/night/tsra_hi,30/sct?size=medium","shortForecast":"Chance Showers And Thunderstorms then Partly Cloudy","detailedForecast":"A chance of showers and thunderstorms before midnight. Partly cloudy, with a low around 73. Chance of precipitation is 30%."},{"number":12,"name":"Wednesday","startTime":"2022-07-20T06:00:00-06:00","endTime":"2022-07-20T18:00:00-06:00","isDaytime":true,"temperature":95,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"8 to 12 mph","windDirection":"S","icon":"https://api.weather.gov/icons/land/day/sct/tsra_hi,20?size=medium","shortForecast":"Mostly Sunny then Slight Chance Showers And Thunderstorms","detailedForecast":"A slight chance of showers and thunderstorms after noon. Mostly sunny, with a high near 95. Chance of precipitation is 20%."},{"number":13,"name":"Wednesday Night","startTime":"2022-07-20T18:00:00-06:00","endTime":"2022-07-21T06:00:00-06:00","isDaytime":false,"temperature":72,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"12 to 15 mph","windDirection":"SSE","icon":"https://api.weather.gov/icons/land/night/tsra_hi,20/sct?size=medium","shortForecast":"Slight Chance Showers And Thunderstorms then Partly Cloudy","detailedForecast":"A slight chance of showers and thunderstorms before midnight. Partly cloudy, with a low around 72. Chance of precipitation is 20%."},{"number":14,"name":"Thursday","startTime":"2022-07-21T06:00:00-06:00","endTime":"2022-07-21T18:00:00-06:00","isDaytime":true,"temperature":94,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"9 to 14 mph","windDirection":"SE","icon":"https://api.weather.gov/icons/land/day/sct/tsra_hi,20?size=medium","shortForecast":"Mostly Sunny then Slight Chance Showers And Thunderstorms","detailedForecast":"A slight chance of showers and thunderstorms after noon. Mostly sunny, with a high near 94. Chance of precipitation is 20%."}]}
  var hourly_EPZ_116_60 = {"correlationId":"fcfc6612","title":"Unexpected Problem","type":"https://api.weather.gov/problems/UnexpectedProblem","status":500,"detail":"An unexpected problem has occurred.","instance":"https://api.weather.gov/requests/fcfc6612"}
  var crags_config = [
  {
    "name": "Hueco Tanks",
    "note": "Reservations required.",
    "mountainProject": "https://www.mountainproject.com/area/105810691/hueco-tanks",
    "station": "KELP",
    "office": "EPZ/116,60",
    "coordinates": [
      -106.043,
      31.917
    ]
  }
]</script>

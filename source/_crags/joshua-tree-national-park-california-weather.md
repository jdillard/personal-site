---
### THIS FILE IS AUTO-GENERATED - DO NOT EDIT ###
layout: page
title: Joshua Tree National Park, California Climbing Weather - Current, Past, and Forecasted Report
title_override: Joshua Tree National Park<br /><small>Climbing Weather</small>
description: A lightweight weather report for Joshua Tree National Park, California. Optimized for slow internet connections.
js_includes:
  - weather.js
---

<section class="measure center lh-copy f5-ns f6 ph2 mv4" style="text-align: justify;">
<strong>"Is it dry?"</strong>, an oft-repeated, age-old question. Here are real-time,
precipitation-focused reports of current, past, and forecasted climbing weather for Joshua Tree National Park, California.
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
<section id="weather" data-crag="joshua-tree-national-park-california" class="mv4-ns mv3 ph2 center"></section>
<section id="nearby" class="tc lh-copy">
  <h3>Nearby Crags</h3>
<a class="nowrap no-underline fancy-link relative light-red mh3" href="/crags/yosemite-national-park-california-weather.html">Yosemite National Park</a>
<a class="nowrap no-underline fancy-link relative light-red mh3" href="/crags/bishop-california-weather.html">Bishop</a>
<a class="nowrap no-underline fancy-link relative light-red mh3" href="/crags/mammoth-lakes-california-weather.html">Mammoth Lakes</a>
<a class="nowrap no-underline fancy-link relative light-red mh3" href="/crags/red-rock-nevada-weather.html">Red Rock</a>
</section>
<section id="nearby" class="tc lh-copy">
  <h3>Other Metros</h3>
  <select class="ma1 bg-near-white pa2" id="stateSel">
    <option value="Texas">Texas</option>
    <option value="Washington">Washington</option>
    <option value="Colorado">Colorado</option>
    <option value="Tennessee">Tennessee</option>
    <option value="Utah">Utah</option>
    <option value="California" selected>California</option>
  </select>
  <select class="ma1 bg-near-white pa2" id="citySel">
    <option value="San Francisco" selected>San Francisco</option>
    <option value="Los Angeles">Los Angeles</option>
  </select>
  <a id="selectMetro" class="f6 link dim ph3 pv2 ma1 dib white bg-light-red" href="/crags/san-francisco-california-weather.html">Select Metro</a>
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
  var weekly_PSR_12_103 = {"updated":"2022-06-18T08:18:39+00:00","units":"us","forecastGenerator":"BaselineForecastGenerator","generatedAt":"2022-06-18T08:38:38+00:00","updateTime":"2022-06-18T08:18:39+00:00","validTimes":"2022-06-18T02:00:00+00:00/P7DT23H","elevation":{"unitCode":"wmoUnit:m","value":1279.8552},"periods":[{"number":1,"name":"Overnight","startTime":"2022-06-18T01:00:00-07:00","endTime":"2022-06-18T06:00:00-07:00","isDaytime":false,"temperature":52,"temperatureUnit":"F","temperatureTrend":"rising","windSpeed":"10 to 15 mph","windDirection":"WSW","icon":"https://api.weather.gov/icons/land/night/few?size=medium","shortForecast":"Mostly Clear","detailedForecast":"Mostly clear. Low around 52, with temperatures rising to around 55 overnight. West southwest wind 10 to 15 mph, with gusts as high as 20 mph."},{"number":2,"name":"Saturday","startTime":"2022-06-18T06:00:00-07:00","endTime":"2022-06-18T18:00:00-07:00","isDaytime":true,"temperature":79,"temperatureUnit":"F","temperatureTrend":"falling","windSpeed":"5 to 20 mph","windDirection":"SW","icon":"https://api.weather.gov/icons/land/day/few?size=medium","shortForecast":"Sunny","detailedForecast":"Sunny. High near 79, with temperatures falling to around 76 in the afternoon. Southwest wind 5 to 20 mph, with gusts as high as 30 mph."},{"number":3,"name":"Saturday Night","startTime":"2022-06-18T18:00:00-07:00","endTime":"2022-06-19T06:00:00-07:00","isDaytime":false,"temperature":47,"temperatureUnit":"F","temperatureTrend":"rising","windSpeed":"5 to 20 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/night/skc?size=medium","shortForecast":"Clear","detailedForecast":"Clear. Low around 47, with temperatures rising to around 49 overnight. West wind 5 to 20 mph, with gusts as high as 35 mph."},{"number":4,"name":"Sunday","startTime":"2022-06-19T06:00:00-07:00","endTime":"2022-06-19T18:00:00-07:00","isDaytime":true,"temperature":82,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"5 to 10 mph","windDirection":"NW","icon":"https://api.weather.gov/icons/land/day/skc?size=medium","shortForecast":"Sunny","detailedForecast":"Sunny, with a high near 82. Northwest wind 5 to 10 mph."},{"number":5,"name":"Sunday Night","startTime":"2022-06-19T18:00:00-07:00","endTime":"2022-06-20T06:00:00-07:00","isDaytime":false,"temperature":56,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"5 mph","windDirection":"WNW","icon":"https://api.weather.gov/icons/land/night/skc?size=medium","shortForecast":"Clear","detailedForecast":"Clear, with a low around 56. West northwest wind around 5 mph."},{"number":6,"name":"Monday","startTime":"2022-06-20T06:00:00-07:00","endTime":"2022-06-20T18:00:00-07:00","isDaytime":true,"temperature":88,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"5 to 10 mph","windDirection":"NE","icon":"https://api.weather.gov/icons/land/day/skc?size=medium","shortForecast":"Sunny","detailedForecast":"Sunny, with a high near 88. Northeast wind 5 to 10 mph."},{"number":7,"name":"Monday Night","startTime":"2022-06-20T18:00:00-07:00","endTime":"2022-06-21T06:00:00-07:00","isDaytime":false,"temperature":61,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"0 to 5 mph","windDirection":"WSW","icon":"https://api.weather.gov/icons/land/night/skc?size=medium","shortForecast":"Clear","detailedForecast":"Clear, with a low around 61. West southwest wind 0 to 5 mph."},{"number":8,"name":"Tuesday","startTime":"2022-06-21T06:00:00-07:00","endTime":"2022-06-21T18:00:00-07:00","isDaytime":true,"temperature":92,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"5 to 10 mph","windDirection":"SE","icon":"https://api.weather.gov/icons/land/day/skc?size=medium","shortForecast":"Sunny","detailedForecast":"Sunny, with a high near 92. Southeast wind 5 to 10 mph, with gusts as high as 25 mph."},{"number":9,"name":"Tuesday Night","startTime":"2022-06-21T18:00:00-07:00","endTime":"2022-06-22T06:00:00-07:00","isDaytime":false,"temperature":65,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"0 to 10 mph","windDirection":"WSW","icon":"https://api.weather.gov/icons/land/night/few?size=medium","shortForecast":"Mostly Clear","detailedForecast":"Mostly clear, with a low around 65. West southwest wind 0 to 10 mph, with gusts as high as 20 mph."},{"number":10,"name":"Wednesday","startTime":"2022-06-22T06:00:00-07:00","endTime":"2022-06-22T18:00:00-07:00","isDaytime":true,"temperature":94,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"5 to 10 mph","windDirection":"SE","icon":"https://api.weather.gov/icons/land/day/few?size=medium","shortForecast":"Sunny","detailedForecast":"Sunny, with a high near 94. Southeast wind 5 to 10 mph. New rainfall amounts less than a tenth of an inch possible."},{"number":11,"name":"Wednesday Night","startTime":"2022-06-22T18:00:00-07:00","endTime":"2022-06-23T06:00:00-07:00","isDaytime":false,"temperature":67,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"0 to 5 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/night/few?size=medium","shortForecast":"Mostly Clear","detailedForecast":"Mostly clear, with a low around 67. West wind 0 to 5 mph."},{"number":12,"name":"Thursday","startTime":"2022-06-23T06:00:00-07:00","endTime":"2022-06-23T18:00:00-07:00","isDaytime":true,"temperature":97,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"0 to 10 mph","windDirection":"SSW","icon":"https://api.weather.gov/icons/land/day/few?size=medium","shortForecast":"Sunny","detailedForecast":"Sunny, with a high near 97. South southwest wind 0 to 10 mph."},{"number":13,"name":"Thursday Night","startTime":"2022-06-23T18:00:00-07:00","endTime":"2022-06-24T06:00:00-07:00","isDaytime":false,"temperature":67,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"0 to 10 mph","windDirection":"WSW","icon":"https://api.weather.gov/icons/land/night/few?size=medium","shortForecast":"Mostly Clear","detailedForecast":"Mostly clear, with a low around 67. West southwest wind 0 to 10 mph."},{"number":14,"name":"Friday","startTime":"2022-06-24T06:00:00-07:00","endTime":"2022-06-24T18:00:00-07:00","isDaytime":true,"temperature":97,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"5 to 10 mph","windDirection":"SW","icon":"https://api.weather.gov/icons/land/day/few?size=medium","shortForecast":"Sunny","detailedForecast":"Sunny, with a high near 97. Southwest wind 5 to 10 mph, with gusts as high as 20 mph."}]}
  var hourly_PSR_12_103 = {"correlationId":"a3507b75","title":"Unexpected Problem","type":"https://api.weather.gov/problems/UnexpectedProblem","status":500,"detail":"An unexpected problem has occurred.","instance":"https://api.weather.gov/requests/a3507b75"}
  var crags_config = [
  {
    "name": "Joshua Tree National Park",
    "note": "Quartz monzonite.",
    "mountainProject": "https://www.mountainproject.com/area/105720495/joshua-tree-national-park",
    "station": "LTHC1",
    "office": "PSR/12,103",
    "coordinates": [
      -116.168,
      34.012
    ]
  }
]</script>

---
### THIS FILE IS AUTO-GENERATED - DO NOT EDIT ###
layout: page
title: Mount Erie, Washington Climbing Weather - Current, Past, and Forecasted Report
title_override: Mount Erie<br /><small>Climbing Weather</small>
description: A lightweight weather report for Mount Erie, Washington. Optimized for slow internet connections.
js_includes:
  - weather.js
---

<section class="measure center lh-copy f5-ns f6 ph2 mv4" style="text-align: justify;">
<strong>"Is it dry?"</strong>, an oft-repeated, age-old question. Here are real-time,
precipitation-focused reports of current, past, and forecasted climbing weather for Mount Erie, Washington.
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
<section id="weather" data-crag="mount-erie-washington" class="mv4-ns mv3 ph2 center"></section>
<section id="nearby" class="tc lh-copy">
  <h3>Nearby Crags</h3>
<a class="nowrap no-underline fancy-link relative light-red mh3" href="/crags/icicle-creek-washington-weather.html">Icicle Creek</a>
<a class="nowrap no-underline fancy-link relative light-red mh3" href="/crags/tieton-river-rock-washington-weather.html">Tieton River Rock</a>
<a class="nowrap no-underline fancy-link relative light-red mh3" href="/crags/vantage-washington-weather.html">Vantage</a>
<a class="nowrap no-underline fancy-link relative light-red mh3" href="/crags/index-washington-weather.html">Index</a>
<a class="nowrap no-underline fancy-link relative light-red mh3" href="/crags/darrington-washington-weather.html">Darrington</a>
<a class="nowrap no-underline fancy-link relative light-red mh3" href="/crags/smith-rock-oregon-weather.html">Smith Rock</a>
<a class="nowrap no-underline fancy-link relative light-red mh3" href="/crags/trout-creek-oregon-weather.html">Trout Creek</a>
</section>
<section id="nearby" class="tc lh-copy">
  <h3>Other Metros</h3>
  <select class="ma1 bg-near-white pa2" id="stateSel">
    <option value="Texas">Texas</option>
    <option value="Washington" selected>Washington</option>
    <option value="Colorado">Colorado</option>
    <option value="Tennessee">Tennessee</option>
    <option value="Utah">Utah</option>
    <option value="California">California</option>
  </select>
  <select class="ma1 bg-near-white pa2" id="citySel">
    <option value="Seattle" selected>Seattle</option>
  </select>
  <a id="selectMetro" class="f6 link dim ph3 pv2 ma1 dib white bg-light-red" href="/crags/seattle-washington-weather.html">Select Metro</a>
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
  var weekly_SEW_123_109 = {"updated":"2022-07-23T04:40:25+00:00","units":"us","forecastGenerator":"BaselineForecastGenerator","generatedAt":"2022-07-23T08:39:37+00:00","updateTime":"2022-07-23T04:40:25+00:00","validTimes":"2022-07-22T22:00:00+00:00/P7DT6H","elevation":{"unitCode":"wmoUnit:m","value":238.9632},"periods":[{"number":1,"name":"Overnight","startTime":"2022-07-23T01:00:00-07:00","endTime":"2022-07-23T06:00:00-07:00","isDaytime":false,"temperature":54,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"5 to 8 mph","windDirection":"SSW","icon":"https://api.weather.gov/icons/land/night/sct?size=medium","shortForecast":"Partly Cloudy","detailedForecast":"Partly cloudy, with a low around 54. South southwest wind 5 to 8 mph."},{"number":2,"name":"Saturday","startTime":"2022-07-23T06:00:00-07:00","endTime":"2022-07-23T18:00:00-07:00","isDaytime":true,"temperature":70,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"3 to 7 mph","windDirection":"WSW","icon":"https://api.weather.gov/icons/land/day/sct?size=medium","shortForecast":"Mostly Sunny","detailedForecast":"Mostly sunny, with a high near 70. West southwest wind 3 to 7 mph."},{"number":3,"name":"Saturday Night","startTime":"2022-07-23T18:00:00-07:00","endTime":"2022-07-24T06:00:00-07:00","isDaytime":false,"temperature":54,"temperatureUnit":"F","temperatureTrend":"rising","windSpeed":"2 to 7 mph","windDirection":"WSW","icon":"https://api.weather.gov/icons/land/night/few?size=medium","shortForecast":"Mostly Clear","detailedForecast":"Mostly clear. Low around 54, with temperatures rising to around 56 overnight. West southwest wind 2 to 7 mph."},{"number":4,"name":"Sunday","startTime":"2022-07-24T06:00:00-07:00","endTime":"2022-07-24T18:00:00-07:00","isDaytime":true,"temperature":73,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"6 mph","windDirection":"NW","icon":"https://api.weather.gov/icons/land/day/sct?size=medium","shortForecast":"Mostly Sunny","detailedForecast":"Mostly sunny, with a high near 73. Northwest wind around 6 mph."},{"number":5,"name":"Sunday Night","startTime":"2022-07-24T18:00:00-07:00","endTime":"2022-07-25T06:00:00-07:00","isDaytime":false,"temperature":56,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"6 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/night/bkn?size=medium","shortForecast":"Mostly Cloudy","detailedForecast":"Mostly cloudy, with a low around 56. West wind around 6 mph."},{"number":6,"name":"Monday","startTime":"2022-07-25T06:00:00-07:00","endTime":"2022-07-25T18:00:00-07:00","isDaytime":true,"temperature":75,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"6 mph","windDirection":"NW","icon":"https://api.weather.gov/icons/land/day/sct?size=medium","shortForecast":"Mostly Sunny","detailedForecast":"Mostly sunny, with a high near 75."},{"number":7,"name":"Monday Night","startTime":"2022-07-25T18:00:00-07:00","endTime":"2022-07-26T06:00:00-07:00","isDaytime":false,"temperature":58,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"0 to 5 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/night/few?size=medium","shortForecast":"Mostly Clear","detailedForecast":"Mostly clear, with a low around 58."},{"number":8,"name":"Tuesday","startTime":"2022-07-26T06:00:00-07:00","endTime":"2022-07-26T18:00:00-07:00","isDaytime":true,"temperature":78,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"1 to 8 mph","windDirection":"WNW","icon":"https://api.weather.gov/icons/land/day/few?size=medium","shortForecast":"Sunny","detailedForecast":"Sunny, with a high near 78."},{"number":9,"name":"Tuesday Night","startTime":"2022-07-26T18:00:00-07:00","endTime":"2022-07-27T06:00:00-07:00","isDaytime":false,"temperature":60,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"5 to 8 mph","windDirection":"SSW","icon":"https://api.weather.gov/icons/land/night/few?size=medium","shortForecast":"Mostly Clear","detailedForecast":"Mostly clear, with a low around 60."},{"number":10,"name":"Wednesday","startTime":"2022-07-27T06:00:00-07:00","endTime":"2022-07-27T18:00:00-07:00","isDaytime":true,"temperature":79,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"5 to 8 mph","windDirection":"SSW","icon":"https://api.weather.gov/icons/land/day/few?size=medium","shortForecast":"Sunny","detailedForecast":"Sunny, with a high near 79."},{"number":11,"name":"Wednesday Night","startTime":"2022-07-27T18:00:00-07:00","endTime":"2022-07-28T06:00:00-07:00","isDaytime":false,"temperature":60,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"5 to 8 mph","windDirection":"SSW","icon":"https://api.weather.gov/icons/land/night/few?size=medium","shortForecast":"Mostly Clear","detailedForecast":"Mostly clear, with a low around 60."},{"number":12,"name":"Thursday","startTime":"2022-07-28T06:00:00-07:00","endTime":"2022-07-28T18:00:00-07:00","isDaytime":true,"temperature":78,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"5 to 8 mph","windDirection":"SW","icon":"https://api.weather.gov/icons/land/day/few?size=medium","shortForecast":"Sunny","detailedForecast":"Sunny, with a high near 78."},{"number":13,"name":"Thursday Night","startTime":"2022-07-28T18:00:00-07:00","endTime":"2022-07-29T06:00:00-07:00","isDaytime":false,"temperature":59,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"5 to 8 mph","windDirection":"SSW","icon":"https://api.weather.gov/icons/land/night/few?size=medium","shortForecast":"Mostly Clear","detailedForecast":"Mostly clear, with a low around 59."},{"number":14,"name":"Friday","startTime":"2022-07-29T06:00:00-07:00","endTime":"2022-07-29T18:00:00-07:00","isDaytime":true,"temperature":78,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"7 mph","windDirection":"SSW","icon":"https://api.weather.gov/icons/land/day/few?size=medium","shortForecast":"Sunny","detailedForecast":"Sunny, with a high near 78."}]}
  var hourly_SEW_123_109 = {"correlationId":"188828a4","title":"Unexpected Problem","type":"https://api.weather.gov/problems/UnexpectedProblem","status":500,"detail":"An unexpected problem has occurred.","instance":"https://api.weather.gov/requests/188828a4"}
  var crags_config = [
  {
    "name": "Mount Erie",
    "note": "Highly textured and featured diorite.",
    "mountainProject": "https://www.mountainproject.com/area/106413714/mount-erie",
    "station": "KNUW",
    "office": "SEW/123,109",
    "coordinates": [
      -122.627,
      48.453
    ]
  }
]</script>

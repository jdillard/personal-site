---
### THIS FILE IS AUTO-GENERATED - DO NOT EDIT ###
layout: page
title: Icicle Creek, Washington Climbing Weather - Current, Past, and Forecasted Report
title_override: Icicle Creek<br /><small>Climbing Weather</small>
description: A lightweight weather report for Icicle Creek, Washington. Optimized for slow internet connections.
js_includes:
  - weather.js
---

<section class="measure center lh-copy f5-ns f6 ph2 mv4" style="text-align: justify;">
<strong>"Is it dry?"</strong>, an oft-repeated, age-old question. Here are real-time,
precipitation-focused reports of current, past, and forecasted climbing weather for Icicle Creek, Washington.
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
<section id="weather" data-crag="icicle-creek-washington" class="mv4-ns mv3 ph2 center"></section>
<section id="nearby" class="tc lh-copy">
  <h3>Nearby Crags</h3>
<a class="nowrap no-underline fancy-link relative light-red mh3" href="/crags/tieton-river-rock-washington-weather.html">Tieton River Rock</a>
<a class="nowrap no-underline fancy-link relative light-red mh3" href="/crags/vantage-washington-weather.html">Vantage</a>
<a class="nowrap no-underline fancy-link relative light-red mh3" href="/crags/mount-erie-washington-weather.html">Mount Erie</a>
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
  var weekly_OTX_35_103 = {"updated":"2022-10-10T08:07:05+00:00","units":"us","forecastGenerator":"BaselineForecastGenerator","generatedAt":"2022-10-10T08:45:08+00:00","updateTime":"2022-10-10T08:07:05+00:00","validTimes":"2022-10-10T02:00:00+00:00/P7DT23H","elevation":{"unitCode":"wmoUnit:m","value":627.888},"periods":[{"number":1,"name":"Overnight","startTime":"2022-10-10T01:00:00-07:00","endTime":"2022-10-10T06:00:00-07:00","isDaytime":false,"temperature":59,"temperatureUnit":"F","temperatureTrend":"rising","windSpeed":"5 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/night/smoke?size=medium","shortForecast":"Haze","detailedForecast":"Haze and areas of smoke. Mostly clear. Low around 59, with temperatures rising to around 61 overnight. West wind around 5 mph."},{"number":2,"name":"Columbus Day","startTime":"2022-10-10T06:00:00-07:00","endTime":"2022-10-10T18:00:00-07:00","isDaytime":true,"temperature":72,"temperatureUnit":"F","temperatureTrend":"falling","windSpeed":"6 to 20 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/day/smoke?size=medium","shortForecast":"Haze","detailedForecast":"Haze and areas of smoke before 5pm. Mostly sunny. High near 72, with temperatures falling to around 64 in the afternoon. West wind 6 to 20 mph, with gusts as high as 37 mph."},{"number":3,"name":"Monday Night","startTime":"2022-10-10T18:00:00-07:00","endTime":"2022-10-11T06:00:00-07:00","isDaytime":false,"temperature":51,"temperatureUnit":"F","temperatureTrend":"rising","windSpeed":"6 to 20 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/night/sct?size=medium","shortForecast":"Partly Cloudy","detailedForecast":"Partly cloudy. Low around 51, with temperatures rising to around 53 overnight. West wind 6 to 20 mph, with gusts as high as 38 mph."},{"number":4,"name":"Tuesday","startTime":"2022-10-11T06:00:00-07:00","endTime":"2022-10-11T18:00:00-07:00","isDaytime":true,"temperature":71,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"2 to 6 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/day/few?size=medium","shortForecast":"Sunny","detailedForecast":"Sunny, with a high near 71. West wind 2 to 6 mph."},{"number":5,"name":"Tuesday Night","startTime":"2022-10-11T18:00:00-07:00","endTime":"2022-10-12T06:00:00-07:00","isDaytime":false,"temperature":54,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"3 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/night/skc?size=medium","shortForecast":"Clear","detailedForecast":"Clear, with a low around 54. West wind around 3 mph."},{"number":6,"name":"Wednesday","startTime":"2022-10-12T06:00:00-07:00","endTime":"2022-10-12T18:00:00-07:00","isDaytime":true,"temperature":72,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"2 to 6 mph","windDirection":"NE","icon":"https://api.weather.gov/icons/land/day/few?size=medium","shortForecast":"Sunny","detailedForecast":"Sunny, with a high near 72."},{"number":7,"name":"Wednesday Night","startTime":"2022-10-12T18:00:00-07:00","endTime":"2022-10-13T06:00:00-07:00","isDaytime":false,"temperature":56,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"2 to 6 mph","windDirection":"SE","icon":"https://api.weather.gov/icons/land/night/few?size=medium","shortForecast":"Mostly Clear","detailedForecast":"Mostly clear, with a low around 56."},{"number":8,"name":"Thursday","startTime":"2022-10-13T06:00:00-07:00","endTime":"2022-10-13T18:00:00-07:00","isDaytime":true,"temperature":75,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"5 mph","windDirection":"SW","icon":"https://api.weather.gov/icons/land/day/skc/smoke?size=medium","shortForecast":"Sunny then Areas Of Smoke","detailedForecast":"Areas of smoke after 2pm. Sunny, with a high near 75."},{"number":9,"name":"Thursday Night","startTime":"2022-10-13T18:00:00-07:00","endTime":"2022-10-14T06:00:00-07:00","isDaytime":false,"temperature":57,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"5 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/night/smoke/few?size=medium","shortForecast":"Areas Of Smoke then Mostly Clear","detailedForecast":"Areas of smoke before 11pm. Mostly clear, with a low around 57."},{"number":10,"name":"Friday","startTime":"2022-10-14T06:00:00-07:00","endTime":"2022-10-14T18:00:00-07:00","isDaytime":true,"temperature":73,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"6 mph","windDirection":"NW","icon":"https://api.weather.gov/icons/land/day/few?size=medium","shortForecast":"Sunny","detailedForecast":"Sunny, with a high near 73."},{"number":11,"name":"Friday Night","startTime":"2022-10-14T18:00:00-07:00","endTime":"2022-10-15T06:00:00-07:00","isDaytime":false,"temperature":56,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"5 mph","windDirection":"NW","icon":"https://api.weather.gov/icons/land/night/smoke?size=medium","shortForecast":"Areas Of Smoke","detailedForecast":"Areas of smoke after 7pm. Mostly clear, with a low around 56."},{"number":12,"name":"Saturday","startTime":"2022-10-15T06:00:00-07:00","endTime":"2022-10-15T18:00:00-07:00","isDaytime":true,"temperature":72,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"6 mph","windDirection":"N","icon":"https://api.weather.gov/icons/land/day/smoke?size=medium","shortForecast":"Areas Of Smoke","detailedForecast":"Areas of smoke. Sunny, with a high near 72."},{"number":13,"name":"Saturday Night","startTime":"2022-10-15T18:00:00-07:00","endTime":"2022-10-16T06:00:00-07:00","isDaytime":false,"temperature":54,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"6 mph","windDirection":"NE","icon":"https://api.weather.gov/icons/land/night/smoke?size=medium","shortForecast":"Areas Of Smoke","detailedForecast":"Areas of smoke before 5am. Mostly clear, with a low around 54."},{"number":14,"name":"Sunday","startTime":"2022-10-16T06:00:00-07:00","endTime":"2022-10-16T18:00:00-07:00","isDaytime":true,"temperature":71,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"6 mph","windDirection":"NE","icon":"https://api.weather.gov/icons/land/day/few?size=medium","shortForecast":"Sunny","detailedForecast":"Sunny, with a high near 71."}]}
  var hourly_OTX_35_103 = {"correlationId":"1c1142e4","title":"Unexpected Problem","type":"https://api.weather.gov/problems/UnexpectedProblem","status":500,"detail":"An unexpected problem has occurred.","instance":"https://api.weather.gov/requests/1c1142e4"}
  var crags_config = [
  {
    "name": "Icicle Creek",
    "note": "Granite, so exposed areas dry fast.",
    "mountainProject": "https://www.mountainproject.com/area/105790237/icicle-creek",
    "station": "KEAT",
    "office": "OTX/35,103",
    "coordinates": [
      -120.711,
      47.543
    ]
  }
]</script>

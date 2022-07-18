---
### THIS FILE IS AUTO-GENERATED - DO NOT EDIT ###
layout: page
title: Vantage, Washington Climbing Weather - Current, Past, and Forecasted Report
title_override: Vantage<br /><small>Climbing Weather</small>
description: A lightweight weather report for Vantage, Washington. Optimized for slow internet connections.
js_includes:
  - weather.js
---

<section class="measure center lh-copy f5-ns f6 ph2 mv4" style="text-align: justify;">
<strong>"Is it dry?"</strong>, an oft-repeated, age-old question. Here are real-time,
precipitation-focused reports of current, past, and forecasted climbing weather for Vantage, Washington.
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
<section id="weather" data-crag="vantage-washington" class="mv4-ns mv3 ph2 center"></section>
<section id="nearby" class="tc lh-copy">
  <h3>Nearby Crags</h3>
<a class="nowrap no-underline fancy-link relative light-red mh3" href="/crags/icicle-creek-washington-weather.html">Icicle Creek</a>
<a class="nowrap no-underline fancy-link relative light-red mh3" href="/crags/tieton-river-rock-washington-weather.html">Tieton River Rock</a>
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
  var weekly_OTX_54_74 = {"updated":"2022-07-18T04:41:52+00:00","units":"us","forecastGenerator":"BaselineForecastGenerator","generatedAt":"2022-07-18T08:40:20+00:00","updateTime":"2022-07-18T04:41:52+00:00","validTimes":"2022-07-17T22:00:00+00:00/P7DT15H","elevation":{"unitCode":"wmoUnit:m","value":374.904},"periods":[{"number":1,"name":"Overnight","startTime":"2022-07-18T01:00:00-07:00","endTime":"2022-07-18T06:00:00-07:00","isDaytime":false,"temperature":57,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"8 to 14 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/night/skc?size=medium","shortForecast":"Clear","detailedForecast":"Clear, with a low around 57. West wind 8 to 14 mph, with gusts as high as 22 mph."},{"number":2,"name":"Monday","startTime":"2022-07-18T06:00:00-07:00","endTime":"2022-07-18T18:00:00-07:00","isDaytime":true,"temperature":86,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"8 to 12 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/day/skc?size=medium","shortForecast":"Sunny","detailedForecast":"Sunny, with a high near 86. West wind 8 to 12 mph."},{"number":3,"name":"Monday Night","startTime":"2022-07-18T18:00:00-07:00","endTime":"2022-07-19T06:00:00-07:00","isDaytime":false,"temperature":60,"temperatureUnit":"F","temperatureTrend":"rising","windSpeed":"2 to 12 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/night/skc?size=medium","shortForecast":"Clear","detailedForecast":"Clear. Low around 60, with temperatures rising to around 62 overnight. West wind 2 to 12 mph."},{"number":4,"name":"Tuesday","startTime":"2022-07-19T06:00:00-07:00","endTime":"2022-07-19T18:00:00-07:00","isDaytime":true,"temperature":93,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"2 to 10 mph","windDirection":"SW","icon":"https://api.weather.gov/icons/land/day/skc?size=medium","shortForecast":"Sunny","detailedForecast":"Sunny, with a high near 93. Southwest wind 2 to 10 mph."},{"number":5,"name":"Tuesday Night","startTime":"2022-07-19T18:00:00-07:00","endTime":"2022-07-20T06:00:00-07:00","isDaytime":false,"temperature":65,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"3 to 10 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/night/skc?size=medium","shortForecast":"Clear","detailedForecast":"Clear, with a low around 65. West wind 3 to 10 mph."},{"number":6,"name":"Wednesday","startTime":"2022-07-20T06:00:00-07:00","endTime":"2022-07-20T18:00:00-07:00","isDaytime":true,"temperature":97,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"3 to 14 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/day/hot?size=medium","shortForecast":"Sunny","detailedForecast":"Sunny, with a high near 97."},{"number":7,"name":"Wednesday Night","startTime":"2022-07-20T18:00:00-07:00","endTime":"2022-07-21T06:00:00-07:00","isDaytime":false,"temperature":65,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"6 to 14 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/night/skc?size=medium","shortForecast":"Clear","detailedForecast":"Clear, with a low around 65."},{"number":8,"name":"Thursday","startTime":"2022-07-21T06:00:00-07:00","endTime":"2022-07-21T18:00:00-07:00","isDaytime":true,"temperature":92,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"6 to 16 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/day/few?size=medium","shortForecast":"Sunny","detailedForecast":"Sunny, with a high near 92."},{"number":9,"name":"Thursday Night","startTime":"2022-07-21T18:00:00-07:00","endTime":"2022-07-22T06:00:00-07:00","isDaytime":false,"temperature":61,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"6 to 16 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/night/few?size=medium","shortForecast":"Mostly Clear","detailedForecast":"Mostly clear, with a low around 61."},{"number":10,"name":"Friday","startTime":"2022-07-22T06:00:00-07:00","endTime":"2022-07-22T18:00:00-07:00","isDaytime":true,"temperature":91,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"6 to 13 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/day/skc?size=medium","shortForecast":"Sunny","detailedForecast":"Sunny, with a high near 91."},{"number":11,"name":"Friday Night","startTime":"2022-07-22T18:00:00-07:00","endTime":"2022-07-23T06:00:00-07:00","isDaytime":false,"temperature":63,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"5 to 13 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/night/skc?size=medium","shortForecast":"Clear","detailedForecast":"Clear, with a low around 63."},{"number":12,"name":"Saturday","startTime":"2022-07-23T06:00:00-07:00","endTime":"2022-07-23T18:00:00-07:00","isDaytime":true,"temperature":93,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"7 mph","windDirection":"SW","icon":"https://api.weather.gov/icons/land/day/skc?size=medium","shortForecast":"Sunny","detailedForecast":"Sunny, with a high near 93."},{"number":13,"name":"Saturday Night","startTime":"2022-07-23T18:00:00-07:00","endTime":"2022-07-24T06:00:00-07:00","isDaytime":false,"temperature":63,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"7 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/night/skc?size=medium","shortForecast":"Clear","detailedForecast":"Clear, with a low around 63."},{"number":14,"name":"Sunday","startTime":"2022-07-24T06:00:00-07:00","endTime":"2022-07-24T18:00:00-07:00","isDaytime":true,"temperature":94,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"6 to 9 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/day/few?size=medium","shortForecast":"Sunny","detailedForecast":"Sunny, with a high near 94."}]}
  var hourly_OTX_54_74 = {"correlationId":"161a8fb2","title":"Unexpected Problem","type":"https://api.weather.gov/problems/UnexpectedProblem","status":500,"detail":"An unexpected problem has occurred.","instance":"https://api.weather.gov/requests/161a8fb2"}
  var crags_config = [
  {
    "name": "Vantage",
    "note": "The rocks are basalt.",
    "mountainProject": "https://www.mountainproject.com/map/105792231/vantage-frenchman-coulee",
    "station": "KEAT",
    "office": "OTX/54,74",
    "coordinates": [
      -119.969,
      47.025
    ]
  }
]</script>

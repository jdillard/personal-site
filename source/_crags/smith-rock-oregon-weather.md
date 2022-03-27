---
### THIS FILE IS AUTO-GENERATED - DO NOT EDIT ###
layout: page
title: Smith Rock, Oregon Climbing Weather - Current, Past, and Forecasted Report
title_override: Smith Rock<br /><small>Climbing Weather</small>
description: A lightweight weather report for Smith Rock, Oregon. Optimized for slow internet connections.
js_includes:
  - weather.js
---

<section class="measure center lh-copy f5-ns f6 ph2 mv4" style="text-align: justify;">
<strong>"Is it dry?"</strong>, an oft-repeated, age-old question. Here are real-time,
precipitation-focused reports of current, past, and forecasted climbing weather for Smith Rock, Oregon.
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
<section id="weather" data-crag="smith-rock-oregon" class="mv4-ns mv3 ph2 center"></section>
<section id="nearby" class="tc lh-copy">
  <h3>Nearby Crags</h3>
<a class="nowrap no-underline fancy-link relative light-red mh3" href="/crags/icicle-creek-washington-weather.html">Icicle Creek</a>
<a class="nowrap no-underline fancy-link relative light-red mh3" href="/crags/tieton-river-rock-washington-weather.html">Tieton River Rock</a>
<a class="nowrap no-underline fancy-link relative light-red mh3" href="/crags/vantage-washington-weather.html">Vantage</a>
<a class="nowrap no-underline fancy-link relative light-red mh3" href="/crags/mount-erie-washington-weather.html">Mount Erie</a>
<a class="nowrap no-underline fancy-link relative light-red mh3" href="/crags/index-washington-weather.html">Index</a>
<a class="nowrap no-underline fancy-link relative light-red mh3" href="/crags/darrington-washington-weather.html">Darrington</a>
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
  var weekly_PDT_43_53 = {"updated":"2022-03-27T05:37:27+00:00","units":"us","forecastGenerator":"BaselineForecastGenerator","generatedAt":"2022-03-27T08:37:06+00:00","updateTime":"2022-03-27T05:37:27+00:00","validTimes":"2022-03-26T23:00:00+00:00/P7DT14H","elevation":{"unitCode":"wmoUnit:m","value":791.8704},"periods":[{"number":1,"name":"Overnight","startTime":"2022-03-27T01:00:00-07:00","endTime":"2022-03-27T06:00:00-07:00","isDaytime":false,"temperature":41,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"5 mph","windDirection":"NE","icon":"https://api.weather.gov/icons/land/night/bkn?size=medium","shortForecast":"Mostly Cloudy","detailedForecast":"Mostly cloudy, with a low around 41. Northeast wind around 5 mph."},{"number":2,"name":"Sunday","startTime":"2022-03-27T06:00:00-07:00","endTime":"2022-03-27T18:00:00-07:00","isDaytime":true,"temperature":70,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"5 to 9 mph","windDirection":"S","icon":"https://api.weather.gov/icons/land/day/bkn?size=medium","shortForecast":"Mostly Cloudy","detailedForecast":"Mostly cloudy, with a high near 70. South wind 5 to 9 mph."},{"number":3,"name":"Sunday Night","startTime":"2022-03-27T18:00:00-07:00","endTime":"2022-03-28T06:00:00-07:00","isDaytime":false,"temperature":44,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"2 to 9 mph","windDirection":"NW","icon":"https://api.weather.gov/icons/land/night/bkn/bkn,20?size=medium","shortForecast":"Mostly Cloudy","detailedForecast":"Mostly cloudy, with a low around 44. Northwest wind 2 to 9 mph. Chance of precipitation is 20%. New rainfall amounts less than a tenth of an inch possible."},{"number":4,"name":"Monday","startTime":"2022-03-28T06:00:00-07:00","endTime":"2022-03-28T18:00:00-07:00","isDaytime":true,"temperature":61,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"2 to 14 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/day/rain_showers,30?size=medium","shortForecast":"Chance Rain Showers","detailedForecast":"A chance of rain showers between 8am and 5pm. Mostly cloudy, with a high near 61. West wind 2 to 14 mph, with gusts as high as 23 mph. Chance of precipitation is 30%. New rainfall amounts between a tenth and quarter of an inch possible."},{"number":5,"name":"Monday Night","startTime":"2022-03-28T18:00:00-07:00","endTime":"2022-03-29T06:00:00-07:00","isDaytime":false,"temperature":35,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"5 to 14 mph","windDirection":"NW","icon":"https://api.weather.gov/icons/land/night/sct?size=medium","shortForecast":"Partly Cloudy","detailedForecast":"Partly cloudy, with a low around 35. Northwest wind 5 to 14 mph, with gusts as high as 23 mph."},{"number":6,"name":"Tuesday","startTime":"2022-03-29T06:00:00-07:00","endTime":"2022-03-29T18:00:00-07:00","isDaytime":true,"temperature":64,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"5 to 10 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/day/sct?size=medium","shortForecast":"Mostly Sunny","detailedForecast":"Mostly sunny, with a high near 64."},{"number":7,"name":"Tuesday Night","startTime":"2022-03-29T18:00:00-07:00","endTime":"2022-03-30T06:00:00-07:00","isDaytime":false,"temperature":35,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"3 to 10 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/night/sct?size=medium","shortForecast":"Partly Cloudy","detailedForecast":"Partly cloudy, with a low around 35."},{"number":8,"name":"Wednesday","startTime":"2022-03-30T06:00:00-07:00","endTime":"2022-03-30T18:00:00-07:00","isDaytime":true,"temperature":53,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"5 to 17 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/day/sct?size=medium","shortForecast":"Mostly Sunny","detailedForecast":"Mostly sunny, with a high near 53."},{"number":9,"name":"Wednesday Night","startTime":"2022-03-30T18:00:00-07:00","endTime":"2022-03-31T06:00:00-07:00","isDaytime":false,"temperature":28,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"5 to 17 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/night/sct?size=medium","shortForecast":"Partly Cloudy","detailedForecast":"Partly cloudy, with a low around 28."},{"number":10,"name":"Thursday","startTime":"2022-03-31T06:00:00-07:00","endTime":"2022-03-31T18:00:00-07:00","isDaytime":true,"temperature":52,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"5 to 13 mph","windDirection":"NW","icon":"https://api.weather.gov/icons/land/day/sct?size=medium","shortForecast":"Mostly Sunny","detailedForecast":"Mostly sunny, with a high near 52."},{"number":11,"name":"Thursday Night","startTime":"2022-03-31T18:00:00-07:00","endTime":"2022-04-01T06:00:00-07:00","isDaytime":false,"temperature":29,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"2 to 13 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/night/few?size=medium","shortForecast":"Mostly Clear","detailedForecast":"Mostly clear, with a low around 29."},{"number":12,"name":"Friday","startTime":"2022-04-01T06:00:00-07:00","endTime":"2022-04-01T18:00:00-07:00","isDaytime":true,"temperature":61,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"2 to 12 mph","windDirection":"NW","icon":"https://api.weather.gov/icons/land/day/few?size=medium","shortForecast":"Sunny","detailedForecast":"Sunny, with a high near 61."},{"number":13,"name":"Friday Night","startTime":"2022-04-01T18:00:00-07:00","endTime":"2022-04-02T06:00:00-07:00","isDaytime":false,"temperature":31,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"3 to 12 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/night/few?size=medium","shortForecast":"Mostly Clear","detailedForecast":"Mostly clear, with a low around 31."},{"number":14,"name":"Saturday","startTime":"2022-04-02T06:00:00-07:00","endTime":"2022-04-02T18:00:00-07:00","isDaytime":true,"temperature":65,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"3 to 12 mph","windDirection":"SW","icon":"https://api.weather.gov/icons/land/day/sct?size=medium","shortForecast":"Mostly Sunny","detailedForecast":"Mostly sunny, with a high near 65."}]}
  var hourly_PDT_43_53 = {"correlationId":"5f2f1d94","title":"Unexpected Problem","type":"https://api.weather.gov/problems/UnexpectedProblem","status":500,"detail":"An unexpected problem has occurred.","instance":"https://api.weather.gov/requests/5f2f1d94"}
  var crags_config = [
  {
    "name": "Smith Rock",
    "note": "Volcanic welded tuff with surrounding bands of columnar basalt.",
    "mountainProject": "https://www.mountainproject.com/area/105788989/smith-rock",
    "station": "KRDM",
    "office": "PDT/43,53",
    "coordinates": [
      -121.143,
      44.366
    ]
  }
]</script>

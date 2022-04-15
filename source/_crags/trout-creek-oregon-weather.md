---
### THIS FILE IS AUTO-GENERATED - DO NOT EDIT ###
layout: page
title: Trout Creek, Oregon Climbing Weather - Current, Past, and Forecasted Report
title_override: Trout Creek<br /><small>Climbing Weather</small>
description: A lightweight weather report for Trout Creek, Oregon. Optimized for slow internet connections.
js_includes:
  - weather.js
---

<section class="measure center lh-copy f5-ns f6 ph2 mv4" style="text-align: justify;">
<strong>"Is it dry?"</strong>, an oft-repeated, age-old question. Here are real-time,
precipitation-focused reports of current, past, and forecasted climbing weather for Trout Creek, Oregon.
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
<section id="weather" data-crag="trout-creek-oregon" class="mv4-ns mv3 ph2 center"></section>
<section id="nearby" class="tc lh-copy">
  <h3>Nearby Crags</h3>
<a class="nowrap no-underline fancy-link relative light-red mh3" href="/crags/icicle-creek-washington-weather.html">Icicle Creek</a>
<a class="nowrap no-underline fancy-link relative light-red mh3" href="/crags/tieton-river-rock-washington-weather.html">Tieton River Rock</a>
<a class="nowrap no-underline fancy-link relative light-red mh3" href="/crags/vantage-washington-weather.html">Vantage</a>
<a class="nowrap no-underline fancy-link relative light-red mh3" href="/crags/mount-erie-washington-weather.html">Mount Erie</a>
<a class="nowrap no-underline fancy-link relative light-red mh3" href="/crags/index-washington-weather.html">Index</a>
<a class="nowrap no-underline fancy-link relative light-red mh3" href="/crags/darrington-washington-weather.html">Darrington</a>
<a class="nowrap no-underline fancy-link relative light-red mh3" href="/crags/smith-rock-oregon-weather.html">Smith Rock</a>
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
  var weekly_PDT_48_73 = {"updated":"2022-04-15T05:49:35+00:00","units":"us","forecastGenerator":"BaselineForecastGenerator","generatedAt":"2022-04-15T08:39:28+00:00","updateTime":"2022-04-15T05:49:35+00:00","validTimes":"2022-04-14T23:00:00+00:00/P7DT14H","elevation":{"unitCode":"wmoUnit:m","value":494.9952},"periods":[{"number":1,"name":"Overnight","startTime":"2022-04-15T01:00:00-07:00","endTime":"2022-04-15T06:00:00-07:00","isDaytime":false,"temperature":24,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"3 mph","windDirection":"SW","icon":"https://api.weather.gov/icons/land/night/sct?size=medium","shortForecast":"Partly Cloudy","detailedForecast":"Partly cloudy, with a low around 24. Southwest wind around 3 mph."},{"number":2,"name":"Friday","startTime":"2022-04-15T06:00:00-07:00","endTime":"2022-04-15T18:00:00-07:00","isDaytime":true,"temperature":51,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"2 to 7 mph","windDirection":"NE","icon":"https://api.weather.gov/icons/land/day/sct?size=medium","shortForecast":"Mostly Sunny","detailedForecast":"Mostly sunny, with a high near 51. Northeast wind 2 to 7 mph."},{"number":3,"name":"Friday Night","startTime":"2022-04-15T18:00:00-07:00","endTime":"2022-04-16T06:00:00-07:00","isDaytime":false,"temperature":32,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"3 to 7 mph","windDirection":"N","icon":"https://api.weather.gov/icons/land/night/rain,40/snow,80?size=medium","shortForecast":"Chance Light Rain then Rain And Snow","detailedForecast":"A chance of rain between 11pm and 2am, then rain and snow. Mostly cloudy, with a low around 32. North wind 3 to 7 mph. Chance of precipitation is 80%. New snow accumulation of 1 to 2 inches possible."},{"number":4,"name":"Saturday","startTime":"2022-04-16T06:00:00-07:00","endTime":"2022-04-16T18:00:00-07:00","isDaytime":true,"temperature":48,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"6 to 18 mph","windDirection":"NW","icon":"https://api.weather.gov/icons/land/day/snow,80/rain,50?size=medium","shortForecast":"Light Snow then Chance Light Rain","detailedForecast":"Snow before 11am, then a chance of rain between 11am and 5pm. Partly sunny, with a high near 48. Northwest wind 6 to 18 mph, with gusts as high as 25 mph. Chance of precipitation is 80%. New snow accumulation of around one inch possible."},{"number":5,"name":"Saturday Night","startTime":"2022-04-16T18:00:00-07:00","endTime":"2022-04-17T06:00:00-07:00","isDaytime":false,"temperature":26,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"3 to 18 mph","windDirection":"SW","icon":"https://api.weather.gov/icons/land/night/sct?size=medium","shortForecast":"Partly Cloudy","detailedForecast":"Partly cloudy, with a low around 26. Southwest wind 3 to 18 mph, with gusts as high as 25 mph."},{"number":6,"name":"Sunday","startTime":"2022-04-17T06:00:00-07:00","endTime":"2022-04-17T18:00:00-07:00","isDaytime":true,"temperature":56,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"2 to 8 mph","windDirection":"SE","icon":"https://api.weather.gov/icons/land/day/bkn?size=medium","shortForecast":"Partly Sunny","detailedForecast":"Partly sunny, with a high near 56."},{"number":7,"name":"Sunday Night","startTime":"2022-04-17T18:00:00-07:00","endTime":"2022-04-18T06:00:00-07:00","isDaytime":false,"temperature":36,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"3 to 8 mph","windDirection":"E","icon":"https://api.weather.gov/icons/land/night/bkn?size=medium","shortForecast":"Mostly Cloudy","detailedForecast":"Mostly cloudy, with a low around 36."},{"number":8,"name":"Monday","startTime":"2022-04-18T06:00:00-07:00","endTime":"2022-04-18T18:00:00-07:00","isDaytime":true,"temperature":60,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"3 to 10 mph","windDirection":"SW","icon":"https://api.weather.gov/icons/land/day/rain,40/rain,80?size=medium","shortForecast":"Light Rain","detailedForecast":"Rain after 11am. Mostly cloudy, with a high near 60. Chance of precipitation is 80%."},{"number":9,"name":"Monday Night","startTime":"2022-04-18T18:00:00-07:00","endTime":"2022-04-19T06:00:00-07:00","isDaytime":false,"temperature":35,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"7 to 10 mph","windDirection":"SW","icon":"https://api.weather.gov/icons/land/night/rain,80/snow,50?size=medium","shortForecast":"Light Rain then Chance Rain And Snow","detailedForecast":"Rain before 5am, then a chance of rain and snow. Mostly cloudy, with a low around 35. Chance of precipitation is 80%."},{"number":10,"name":"Tuesday","startTime":"2022-04-19T06:00:00-07:00","endTime":"2022-04-19T18:00:00-07:00","isDaytime":true,"temperature":57,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"7 to 15 mph","windDirection":"SW","icon":"https://api.weather.gov/icons/land/day/snow?size=medium","shortForecast":"Chance Rain And Snow","detailedForecast":"A chance of rain and snow. Partly sunny, with a high near 57."},{"number":11,"name":"Tuesday Night","startTime":"2022-04-19T18:00:00-07:00","endTime":"2022-04-20T06:00:00-07:00","isDaytime":false,"temperature":37,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"5 to 14 mph","windDirection":"S","icon":"https://api.weather.gov/icons/land/night/rain?size=medium","shortForecast":"Chance Light Rain","detailedForecast":"A chance of rain. Mostly cloudy, with a low around 37."},{"number":12,"name":"Wednesday","startTime":"2022-04-20T06:00:00-07:00","endTime":"2022-04-20T18:00:00-07:00","isDaytime":true,"temperature":65,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"6 to 13 mph","windDirection":"SW","icon":"https://api.weather.gov/icons/land/day/rain?size=medium","shortForecast":"Chance Light Rain","detailedForecast":"A chance of rain. Partly sunny, with a high near 65."},{"number":13,"name":"Wednesday Night","startTime":"2022-04-20T18:00:00-07:00","endTime":"2022-04-21T06:00:00-07:00","isDaytime":false,"temperature":41,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"5 to 13 mph","windDirection":"SW","icon":"https://api.weather.gov/icons/land/night/rain?size=medium","shortForecast":"Chance Light Rain","detailedForecast":"A chance of rain. Mostly cloudy, with a low around 41."},{"number":14,"name":"Thursday","startTime":"2022-04-21T06:00:00-07:00","endTime":"2022-04-21T18:00:00-07:00","isDaytime":true,"temperature":64,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"6 to 10 mph","windDirection":"SW","icon":"https://api.weather.gov/icons/land/day/rain?size=medium","shortForecast":"Chance Light Rain","detailedForecast":"A chance of rain. Mostly cloudy, with a high near 64."}]}
  var hourly_PDT_48_73 = {"correlationId":"4a0feb8d","title":"Unexpected Problem","type":"https://api.weather.gov/problems/UnexpectedProblem","status":500,"detail":"An unexpected problem has occurred.","instance":"https://api.weather.gov/requests/4a0feb8d"}
  var crags_config = [
  {
    "name": "Trout Creek",
    "note": "Large basalt columns.",
    "mountainProject": "https://www.mountainproject.com/area/106505473/trout-creek",
    "station": "KS33",
    "office": "PDT/48,73",
    "coordinates": [
      -121.095,
      44.816
    ]
  }
]</script>

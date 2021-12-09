---
### THIS FILE IS AUTO-GENERATED - DO NOT EDIT ###
layout: page
title: Index, Washington Climbing Weather - Current, Past, and Forecasted Report
title_override: Index<br /><small>Climbing Weather</small>
description: A lightweight weather report for Index, Washington. Optimized for slow internet connections.
js_includes:
  - weather.js
---

<section class="measure center lh-copy f5-ns f6 ph2 mv4" style="text-align: justify;">
<strong>"Is it dry?"</strong>, an oft-repeated, age-old question. Here are real-time,
precipitation-focused reports of current, past, and forecasted climbing weather for Index, Washington.
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
<section id="weather" data-crag="index-washington" class="mv4-ns mv3 ph2 center"></section>
<section id="nearby" class="tc lh-copy">
  <h3>Nearby Crags</h3>
<a class="nowrap no-underline fancy-link relative light-red mh3" href="/crags/icicle-creek-washington-weather.html">Icicle Creek</a>
<a class="nowrap no-underline fancy-link relative light-red mh3" href="/crags/tieton-river-rock-washington-weather.html">Tieton River Rock</a>
<a class="nowrap no-underline fancy-link relative light-red mh3" href="/crags/vantage-washington-weather.html">Vantage</a>
<a class="nowrap no-underline fancy-link relative light-red mh3" href="/crags/mount-erie-washington-weather.html">Mount Erie</a>
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
  var weekly_SEW_150_72 = {"updated":"2021-12-08T23:12:45+00:00","units":"us","forecastGenerator":"BaselineForecastGenerator","generatedAt":"2021-12-09T08:46:03+00:00","updateTime":"2021-12-08T23:12:45+00:00","validTimes":"2021-12-08T17:00:00+00:00/P7DT8H","elevation":{"unitCode":"wmoUnit:m","value":148.1328},"periods":[{"number":1,"name":"Overnight","startTime":"2021-12-09T00:00:00-08:00","endTime":"2021-12-09T06:00:00-08:00","isDaytime":false,"temperature":33,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"3 mph","windDirection":"WSW","icon":"https://api.weather.gov/icons/land/night/rain,100?size=medium","shortForecast":"Light Rain","detailedForecast":"Rain and patchy fog. Cloudy, with a low around 33. West southwest wind around 3 mph. Chance of precipitation is 100%. New rainfall amounts between a quarter and half of an inch possible."},{"number":2,"name":"Thursday","startTime":"2021-12-09T06:00:00-08:00","endTime":"2021-12-09T18:00:00-08:00","isDaytime":true,"temperature":36,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"3 to 8 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/day/snow,100?size=medium","shortForecast":"Rain And Snow","detailedForecast":"Rain before 7am, then rain and snow. Cloudy, with a high near 36. West wind 3 to 8 mph. Chance of precipitation is 100%. New rainfall amounts between a quarter and half of an inch possible."},{"number":3,"name":"Thursday Night","startTime":"2021-12-09T18:00:00-08:00","endTime":"2021-12-10T06:00:00-08:00","isDaytime":false,"temperature":32,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"1 to 7 mph","windDirection":"SW","icon":"https://api.weather.gov/icons/land/night/rain,80/snow,70?size=medium","shortForecast":"Light Rain then Chance Rain And Snow","detailedForecast":"Rain before 4am, then a chance of rain and snow. Mostly cloudy, with a low around 32. Southwest wind 1 to 7 mph. Chance of precipitation is 80%. New rainfall amounts between a tenth and quarter of an inch possible."},{"number":4,"name":"Friday","startTime":"2021-12-10T06:00:00-08:00","endTime":"2021-12-10T18:00:00-08:00","isDaytime":true,"temperature":39,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"1 to 5 mph","windDirection":"SSW","icon":"https://api.weather.gov/icons/land/day/snow,80/snow,90?size=medium","shortForecast":"Rain And Snow","detailedForecast":"Rain and snow. Cloudy, with a high near 39. South southwest wind 1 to 5 mph. Chance of precipitation is 90%. New rainfall amounts between a quarter and half of an inch possible."},{"number":5,"name":"Friday Night","startTime":"2021-12-10T18:00:00-08:00","endTime":"2021-12-11T06:00:00-08:00","isDaytime":false,"temperature":36,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"5 to 10 mph","windDirection":"S","icon":"https://api.weather.gov/icons/land/night/rain,90/rain,100?size=medium","shortForecast":"Rain","detailedForecast":"Rain. Cloudy, with a low around 36. South wind 5 to 10 mph, with gusts as high as 21 mph. Chance of precipitation is 100%. New rainfall amounts between 1 and 2 inches possible."},{"number":6,"name":"Saturday","startTime":"2021-12-11T06:00:00-08:00","endTime":"2021-12-11T18:00:00-08:00","isDaytime":true,"temperature":42,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"6 to 10 mph","windDirection":"SSW","icon":"https://api.weather.gov/icons/land/day/rain,100?size=medium","shortForecast":"Rain","detailedForecast":"Rain. Cloudy, with a high near 42. Chance of precipitation is 100%. New rainfall amounts between 1 and 2 inches possible."},{"number":7,"name":"Saturday Night","startTime":"2021-12-11T18:00:00-08:00","endTime":"2021-12-12T06:00:00-08:00","isDaytime":false,"temperature":33,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"6 to 13 mph","windDirection":"S","icon":"https://api.weather.gov/icons/land/night/snow,100/snow,90?size=medium","shortForecast":"Rain And Snow","detailedForecast":"Rain before 10pm, then rain and snow. Cloudy, with a low around 33. Chance of precipitation is 100%. New snow accumulation of less than half an inch possible."},{"number":8,"name":"Sunday","startTime":"2021-12-12T06:00:00-08:00","endTime":"2021-12-12T18:00:00-08:00","isDaytime":true,"temperature":38,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"8 mph","windDirection":"SSE","icon":"https://api.weather.gov/icons/land/day/snow?size=medium","shortForecast":"Rain And Snow","detailedForecast":"Rain and snow. Cloudy, with a high near 38. New snow accumulation of less than half an inch possible."},{"number":9,"name":"Sunday Night","startTime":"2021-12-12T18:00:00-08:00","endTime":"2021-12-13T06:00:00-08:00","isDaytime":false,"temperature":30,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"8 mph","windDirection":"SE","icon":"https://api.weather.gov/icons/land/night/rain/snow?size=medium","shortForecast":"Light Rain then Rain And Snow Likely","detailedForecast":"Rain before 1am, then rain and snow likely. Mostly cloudy, with a low around 30."},{"number":10,"name":"Monday","startTime":"2021-12-13T06:00:00-08:00","endTime":"2021-12-13T18:00:00-08:00","isDaytime":true,"temperature":39,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"9 mph","windDirection":"ESE","icon":"https://api.weather.gov/icons/land/day/snow?size=medium","shortForecast":"Rain And Snow","detailedForecast":"Rain and snow. Mostly cloudy, with a high near 39."},{"number":11,"name":"Monday Night","startTime":"2021-12-13T18:00:00-08:00","endTime":"2021-12-14T06:00:00-08:00","isDaytime":false,"temperature":31,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"8 mph","windDirection":"ESE","icon":"https://api.weather.gov/icons/land/night/rain/snow?size=medium","shortForecast":"Light Rain Likely then Chance Rain And Snow","detailedForecast":"Rain likely before 1am, then a chance of rain and snow. Mostly cloudy, with a low around 31."},{"number":12,"name":"Tuesday","startTime":"2021-12-14T06:00:00-08:00","endTime":"2021-12-14T18:00:00-08:00","isDaytime":true,"temperature":38,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"7 mph","windDirection":"S","icon":"https://api.weather.gov/icons/land/day/snow?size=medium","shortForecast":"Chance Rain And Snow","detailedForecast":"A chance of rain before 7am, then a chance of rain and snow. Mostly cloudy, with a high near 38."},{"number":13,"name":"Tuesday Night","startTime":"2021-12-14T18:00:00-08:00","endTime":"2021-12-15T06:00:00-08:00","isDaytime":false,"temperature":30,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"6 mph","windDirection":"SSE","icon":"https://api.weather.gov/icons/land/night/snow?size=medium","shortForecast":"Chance Rain And Snow","detailedForecast":"A chance of rain before 7pm, then a chance of rain and snow. Mostly cloudy, with a low around 30."},{"number":14,"name":"Wednesday","startTime":"2021-12-15T06:00:00-08:00","endTime":"2021-12-15T18:00:00-08:00","isDaytime":true,"temperature":38,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"7 mph","windDirection":"SSE","icon":"https://api.weather.gov/icons/land/day/snow?size=medium","shortForecast":"Rain And Snow Likely","detailedForecast":"Rain and snow likely before 5pm. Mostly cloudy, with a high near 38."}]}
  var hourly_SEW_150_72 = {"correlationId":"c465e35d","title":"Unexpected Problem","type":"https://api.weather.gov/problems/UnexpectedProblem","status":500,"detail":"An unexpected problem has occurred.","instance":"https://api.weather.gov/requests/c465e35d"}
  var crags_config = [
  {
    "name": "Index",
    "note": "Fine-grained granite",
    "mountainProject": "https://www.mountainproject.com/area/105790635/index",
    "station": "TSTEV",
    "office": "SEW/150,72",
    "coordinates": [
      -121.556,
      47.82
    ]
  }
]</script>

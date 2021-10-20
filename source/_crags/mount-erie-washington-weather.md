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
  var weekly_SEW_123_109 = {"updated":"2021-10-20T03:41:50+00:00","units":"us","forecastGenerator":"BaselineForecastGenerator","generatedAt":"2021-10-20T08:44:12+00:00","updateTime":"2021-10-20T03:41:50+00:00","validTimes":"2021-10-19T21:00:00+00:00/P7DT4H","elevation":{"unitCode":"wmoUnit:m","value":238.9632},"periods":[{"number":1,"name":"Overnight","startTime":"2021-10-20T01:00:00-07:00","endTime":"2021-10-20T06:00:00-07:00","isDaytime":false,"temperature":49,"temperatureUnit":"F","temperatureTrend":"rising","windSpeed":"5 to 9 mph","windDirection":"SSE","icon":"https://api.weather.gov/icons/land/night/rain,60?size=medium","shortForecast":"Light Rain Likely","detailedForecast":"Rain likely after 5am. Mostly cloudy. Low around 49, with temperatures rising to around 51 overnight. South southeast wind 5 to 9 mph. Chance of precipitation is 60%. New rainfall amounts less than a tenth of an inch possible."},{"number":2,"name":"Wednesday","startTime":"2021-10-20T06:00:00-07:00","endTime":"2021-10-20T18:00:00-07:00","isDaytime":true,"temperature":59,"temperatureUnit":"F","temperatureTrend":"falling","windSpeed":"9 to 16 mph","windDirection":"SSE","icon":"https://api.weather.gov/icons/land/day/rain,60?size=medium","shortForecast":"Light Rain Likely","detailedForecast":"Rain likely. Mostly cloudy. High near 59, with temperatures falling to around 57 in the afternoon. South southeast wind 9 to 16 mph, with gusts as high as 23 mph. Chance of precipitation is 60%. New rainfall amounts less than a tenth of an inch possible."},{"number":3,"name":"Wednesday Night","startTime":"2021-10-20T18:00:00-07:00","endTime":"2021-10-21T06:00:00-07:00","isDaytime":false,"temperature":49,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"8 to 12 mph","windDirection":"SE","icon":"https://api.weather.gov/icons/land/night/rain,30/rain,20?size=medium","shortForecast":"Chance Light Rain","detailedForecast":"A chance of rain. Mostly cloudy, with a low around 49. Southeast wind 8 to 12 mph. Chance of precipitation is 30%. New rainfall amounts less than a tenth of an inch possible."},{"number":4,"name":"Thursday","startTime":"2021-10-21T06:00:00-07:00","endTime":"2021-10-21T18:00:00-07:00","isDaytime":true,"temperature":63,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"9 to 14 mph","windDirection":"SE","icon":"https://api.weather.gov/icons/land/day/rain,40/rain,80?size=medium","shortForecast":"Light Rain","detailedForecast":"Rain. Mostly cloudy, with a high near 63. Southeast wind 9 to 14 mph. Chance of precipitation is 80%. New rainfall amounts between a tenth and quarter of an inch possible."},{"number":5,"name":"Thursday Night","startTime":"2021-10-21T18:00:00-07:00","endTime":"2021-10-22T06:00:00-07:00","isDaytime":false,"temperature":49,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"10 to 15 mph","windDirection":"SSE","icon":"https://api.weather.gov/icons/land/night/rain,80?size=medium","shortForecast":"Light Rain","detailedForecast":"Rain. Cloudy, with a low around 49. South southeast wind 10 to 15 mph, with gusts as high as 21 mph. Chance of precipitation is 80%. New rainfall amounts between a quarter and half of an inch possible."},{"number":6,"name":"Friday","startTime":"2021-10-22T06:00:00-07:00","endTime":"2021-10-22T18:00:00-07:00","isDaytime":true,"temperature":57,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"10 mph","windDirection":"SSE","icon":"https://api.weather.gov/icons/land/day/rain,70?size=medium","shortForecast":"Light Rain Likely","detailedForecast":"Rain likely. Mostly cloudy, with a high near 57. Chance of precipitation is 70%. New rainfall amounts between a tenth and quarter of an inch possible."},{"number":7,"name":"Friday Night","startTime":"2021-10-22T18:00:00-07:00","endTime":"2021-10-23T06:00:00-07:00","isDaytime":false,"temperature":47,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"8 to 14 mph","windDirection":"SSE","icon":"https://api.weather.gov/icons/land/night/rain,90?size=medium","shortForecast":"Light Rain","detailedForecast":"Rain. Cloudy, with a low around 47. Chance of precipitation is 90%."},{"number":8,"name":"Saturday","startTime":"2021-10-23T06:00:00-07:00","endTime":"2021-10-23T18:00:00-07:00","isDaytime":true,"temperature":55,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"10 to 16 mph","windDirection":"SSE","icon":"https://api.weather.gov/icons/land/day/rain?size=medium","shortForecast":"Light Rain","detailedForecast":"Rain. Cloudy, with a high near 55."},{"number":9,"name":"Saturday Night","startTime":"2021-10-23T18:00:00-07:00","endTime":"2021-10-24T06:00:00-07:00","isDaytime":false,"temperature":44,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"12 mph","windDirection":"SE","icon":"https://api.weather.gov/icons/land/night/rain?size=medium","shortForecast":"Light Rain","detailedForecast":"Rain. Mostly cloudy, with a low around 44."},{"number":10,"name":"Sunday","startTime":"2021-10-24T06:00:00-07:00","endTime":"2021-10-24T18:00:00-07:00","isDaytime":true,"temperature":55,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"13 mph","windDirection":"SE","icon":"https://api.weather.gov/icons/land/day/rain?size=medium","shortForecast":"Light Rain","detailedForecast":"Rain. Cloudy, with a high near 55."},{"number":11,"name":"Sunday Night","startTime":"2021-10-24T18:00:00-07:00","endTime":"2021-10-25T06:00:00-07:00","isDaytime":false,"temperature":44,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"12 mph","windDirection":"SE","icon":"https://api.weather.gov/icons/land/night/rain?size=medium","shortForecast":"Light Rain","detailedForecast":"Rain. Cloudy, with a low around 44."},{"number":12,"name":"Monday","startTime":"2021-10-25T06:00:00-07:00","endTime":"2021-10-25T18:00:00-07:00","isDaytime":true,"temperature":54,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"12 mph","windDirection":"SSE","icon":"https://api.weather.gov/icons/land/day/rain?size=medium","shortForecast":"Light Rain","detailedForecast":"Rain. Cloudy, with a high near 54."},{"number":13,"name":"Monday Night","startTime":"2021-10-25T18:00:00-07:00","endTime":"2021-10-26T06:00:00-07:00","isDaytime":false,"temperature":43,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"9 to 13 mph","windDirection":"SSE","icon":"https://api.weather.gov/icons/land/night/rain?size=medium","shortForecast":"Light Rain","detailedForecast":"Rain. Cloudy, with a low around 43."},{"number":14,"name":"Tuesday","startTime":"2021-10-26T06:00:00-07:00","endTime":"2021-10-26T18:00:00-07:00","isDaytime":true,"temperature":54,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"13 to 16 mph","windDirection":"SE","icon":"https://api.weather.gov/icons/land/day/rain?size=medium","shortForecast":"Light Rain","detailedForecast":"Rain. Cloudy, with a high near 54."}]}
  var hourly_SEW_123_109 = {"correlationId":"7319a23","title":"Unexpected Problem","type":"https://api.weather.gov/problems/UnexpectedProblem","status":500,"detail":"An unexpected problem has occurred.","instance":"https://api.weather.gov/requests/7319a23"}
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

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
  var weekly_PDT_43_53 = {"updated":"2022-12-16T07:51:41+00:00","units":"us","forecastGenerator":"BaselineForecastGenerator","generatedAt":"2022-12-16T08:35:23+00:00","updateTime":"2022-12-16T07:51:41+00:00","validTimes":"2022-12-16T01:00:00+00:00/P7DT13H","elevation":{"unitCode":"wmoUnit:m","value":791.8704},"periods":[{"number":1,"name":"Overnight","startTime":"2022-12-16T00:00:00-08:00","endTime":"2022-12-16T06:00:00-08:00","isDaytime":false,"temperature":15,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"3 mph","windDirection":"E","icon":"https://api.weather.gov/icons/land/night/fog?size=medium","shortForecast":"Patchy Freezing Fog","detailedForecast":"Patchy freezing fog. Mostly cloudy, with a low around 15. East wind around 3 mph."},{"number":2,"name":"Friday","startTime":"2022-12-16T06:00:00-08:00","endTime":"2022-12-16T18:00:00-08:00","isDaytime":true,"temperature":29,"temperatureUnit":"F","temperatureTrend":"falling","windSpeed":"6 mph","windDirection":"SE","icon":"https://api.weather.gov/icons/land/day/fog?size=medium","shortForecast":"Patchy Freezing Fog","detailedForecast":"Patchy freezing fog before 4pm. Mostly sunny. High near 29, with temperatures falling to around 21 in the afternoon. Southeast wind around 6 mph."},{"number":3,"name":"Friday Night","startTime":"2022-12-16T18:00:00-08:00","endTime":"2022-12-17T06:00:00-08:00","isDaytime":false,"temperature":13,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"5 to 10 mph","windDirection":"SE","icon":"https://api.weather.gov/icons/land/night/few?size=medium","shortForecast":"Mostly Clear","detailedForecast":"Mostly clear, with a low around 13. Wind chill values as low as 0. Southeast wind 5 to 10 mph."},{"number":4,"name":"Saturday","startTime":"2022-12-17T06:00:00-08:00","endTime":"2022-12-17T18:00:00-08:00","isDaytime":true,"temperature":38,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"7 to 10 mph","windDirection":"SE","icon":"https://api.weather.gov/icons/land/day/few?size=medium","shortForecast":"Sunny","detailedForecast":"Sunny, with a high near 38. Southeast wind 7 to 10 mph."},{"number":5,"name":"Saturday Night","startTime":"2022-12-17T18:00:00-08:00","endTime":"2022-12-18T06:00:00-08:00","isDaytime":false,"temperature":15,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"7 mph","windDirection":"S","icon":"https://api.weather.gov/icons/land/night/sct?size=medium","shortForecast":"Partly Cloudy","detailedForecast":"Partly cloudy, with a low around 15. South wind around 7 mph."},{"number":6,"name":"Sunday","startTime":"2022-12-18T06:00:00-08:00","endTime":"2022-12-18T18:00:00-08:00","isDaytime":true,"temperature":36,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"7 mph","windDirection":"S","icon":"https://api.weather.gov/icons/land/day/sct?size=medium","shortForecast":"Mostly Sunny","detailedForecast":"Mostly sunny, with a high near 36."},{"number":7,"name":"Sunday Night","startTime":"2022-12-18T18:00:00-08:00","endTime":"2022-12-19T06:00:00-08:00","isDaytime":false,"temperature":20,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"7 mph","windDirection":"S","icon":"https://api.weather.gov/icons/land/night/bkn?size=medium","shortForecast":"Mostly Cloudy","detailedForecast":"Mostly cloudy, with a low around 20."},{"number":8,"name":"Monday","startTime":"2022-12-19T06:00:00-08:00","endTime":"2022-12-19T18:00:00-08:00","isDaytime":true,"temperature":36,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"7 mph","windDirection":"S","icon":"https://api.weather.gov/icons/land/day/bkn/snow,20?size=medium","shortForecast":"Mostly Cloudy then Slight Chance Light Snow","detailedForecast":"A slight chance of snow after 4pm. Mostly cloudy, with a high near 36. Chance of precipitation is 20%."},{"number":9,"name":"Monday Night","startTime":"2022-12-19T18:00:00-08:00","endTime":"2022-12-20T06:00:00-08:00","isDaytime":false,"temperature":22,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"6 mph","windDirection":"S","icon":"https://api.weather.gov/icons/land/night/snow,30/snow,40?size=medium","shortForecast":"Chance Light Snow","detailedForecast":"A chance of snow. Mostly cloudy, with a low around 22. Chance of precipitation is 40%."},{"number":10,"name":"Tuesday","startTime":"2022-12-20T06:00:00-08:00","endTime":"2022-12-20T18:00:00-08:00","isDaytime":true,"temperature":37,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"7 mph","windDirection":"S","icon":"https://api.weather.gov/icons/land/day/snow?size=medium","shortForecast":"Chance Light Snow","detailedForecast":"A chance of snow before 4pm, then a chance of rain and snow. Mostly cloudy, with a high near 37. New snow accumulation of less than half an inch possible."},{"number":11,"name":"Tuesday Night","startTime":"2022-12-20T18:00:00-08:00","endTime":"2022-12-21T06:00:00-08:00","isDaytime":false,"temperature":23,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"6 mph","windDirection":"SW","icon":"https://api.weather.gov/icons/land/night/snow?size=medium","shortForecast":"Chance Rain And Snow","detailedForecast":"A chance of rain and snow. Mostly cloudy, with a low around 23. Little or no snow accumulation expected."},{"number":12,"name":"Wednesday","startTime":"2022-12-21T06:00:00-08:00","endTime":"2022-12-21T18:00:00-08:00","isDaytime":true,"temperature":39,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"6 mph","windDirection":"S","icon":"https://api.weather.gov/icons/land/day/snow?size=medium","shortForecast":"Chance Rain And Snow","detailedForecast":"A chance of rain and snow. Mostly cloudy, with a high near 39."},{"number":13,"name":"Wednesday Night","startTime":"2022-12-21T18:00:00-08:00","endTime":"2022-12-22T06:00:00-08:00","isDaytime":false,"temperature":23,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"6 mph","windDirection":"E","icon":"https://api.weather.gov/icons/land/night/snow?size=medium","shortForecast":"Chance Rain And Snow","detailedForecast":"A chance of rain before 7pm, then a chance of rain and snow. Mostly cloudy, with a low around 23."},{"number":14,"name":"Thursday","startTime":"2022-12-22T06:00:00-08:00","endTime":"2022-12-22T18:00:00-08:00","isDaytime":true,"temperature":40,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"5 to 8 mph","windDirection":"SE","icon":"https://api.weather.gov/icons/land/day/snow?size=medium","shortForecast":"Chance Rain And Snow","detailedForecast":"A chance of rain and snow. Mostly cloudy, with a high near 40."}]}
  var hourly_PDT_43_53 = false
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

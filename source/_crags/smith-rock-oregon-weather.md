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
  var weekly_PDT_43_53 = {"updated":"2022-12-12T07:41:28+00:00","units":"us","forecastGenerator":"BaselineForecastGenerator","generatedAt":"2022-12-12T08:37:25+00:00","updateTime":"2022-12-12T07:41:28+00:00","validTimes":"2022-12-12T01:00:00+00:00/P7DT13H","elevation":{"unitCode":"wmoUnit:m","value":791.8704},"periods":[{"number":1,"name":"Overnight","startTime":"2022-12-12T00:00:00-08:00","endTime":"2022-12-12T06:00:00-08:00","isDaytime":false,"temperature":28,"temperatureUnit":"F","temperatureTrend":"rising","windSpeed":"5 mph","windDirection":"NW","icon":"https://api.weather.gov/icons/land/night/snow,20?size=medium","shortForecast":"Slight Chance Rain And Snow","detailedForecast":"A slight chance of rain and snow before 1am. Mostly cloudy. Low around 28, with temperatures rising to around 30 overnight. Northwest wind around 5 mph. Chance of precipitation is 20%. Little or no snow accumulation expected."},{"number":2,"name":"Monday","startTime":"2022-12-12T06:00:00-08:00","endTime":"2022-12-12T18:00:00-08:00","isDaytime":true,"temperature":36,"temperatureUnit":"F","temperatureTrend":"falling","windSpeed":"5 mph","windDirection":"N","icon":"https://api.weather.gov/icons/land/day/sct?size=medium","shortForecast":"Mostly Sunny","detailedForecast":"Mostly sunny. High near 36, with temperatures falling to around 30 in the afternoon. North wind around 5 mph."},{"number":3,"name":"Monday Night","startTime":"2022-12-12T18:00:00-08:00","endTime":"2022-12-13T06:00:00-08:00","isDaytime":false,"temperature":18,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"5 mph","windDirection":"E","icon":"https://api.weather.gov/icons/land/night/sct?size=medium","shortForecast":"Partly Cloudy","detailedForecast":"Partly cloudy, with a low around 18. East wind around 5 mph."},{"number":4,"name":"Tuesday","startTime":"2022-12-13T06:00:00-08:00","endTime":"2022-12-13T18:00:00-08:00","isDaytime":true,"temperature":32,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"6 mph","windDirection":"SE","icon":"https://api.weather.gov/icons/land/day/sct?size=medium","shortForecast":"Mostly Sunny","detailedForecast":"Mostly sunny, with a high near 32. Southeast wind around 6 mph."},{"number":5,"name":"Tuesday Night","startTime":"2022-12-13T18:00:00-08:00","endTime":"2022-12-14T06:00:00-08:00","isDaytime":false,"temperature":12,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"6 mph","windDirection":"SE","icon":"https://api.weather.gov/icons/land/night/sct?size=medium","shortForecast":"Partly Cloudy","detailedForecast":"Partly cloudy, with a low around 12. Southeast wind around 6 mph."},{"number":6,"name":"Wednesday","startTime":"2022-12-14T06:00:00-08:00","endTime":"2022-12-14T18:00:00-08:00","isDaytime":true,"temperature":28,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"6 mph","windDirection":"NE","icon":"https://api.weather.gov/icons/land/day/sct?size=medium","shortForecast":"Mostly Sunny","detailedForecast":"Mostly sunny, with a high near 28."},{"number":7,"name":"Wednesday Night","startTime":"2022-12-14T18:00:00-08:00","endTime":"2022-12-15T06:00:00-08:00","isDaytime":false,"temperature":12,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"2 to 6 mph","windDirection":"E","icon":"https://api.weather.gov/icons/land/night/sct?size=medium","shortForecast":"Partly Cloudy","detailedForecast":"Partly cloudy, with a low around 12."},{"number":8,"name":"Thursday","startTime":"2022-12-15T06:00:00-08:00","endTime":"2022-12-15T18:00:00-08:00","isDaytime":true,"temperature":26,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"2 to 6 mph","windDirection":"E","icon":"https://api.weather.gov/icons/land/day/sct?size=medium","shortForecast":"Mostly Sunny","detailedForecast":"Mostly sunny, with a high near 26."},{"number":9,"name":"Thursday Night","startTime":"2022-12-15T18:00:00-08:00","endTime":"2022-12-16T06:00:00-08:00","isDaytime":false,"temperature":9,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"6 mph","windDirection":"E","icon":"https://api.weather.gov/icons/land/night/cold?size=medium","shortForecast":"Partly Cloudy","detailedForecast":"Partly cloudy, with a low around 9."},{"number":10,"name":"Friday","startTime":"2022-12-16T06:00:00-08:00","endTime":"2022-12-16T18:00:00-08:00","isDaytime":true,"temperature":24,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"6 mph","windDirection":"E","icon":"https://api.weather.gov/icons/land/day/sct?size=medium","shortForecast":"Mostly Sunny","detailedForecast":"Mostly sunny, with a high near 24."},{"number":11,"name":"Friday Night","startTime":"2022-12-16T18:00:00-08:00","endTime":"2022-12-17T06:00:00-08:00","isDaytime":false,"temperature":7,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"6 mph","windDirection":"SE","icon":"https://api.weather.gov/icons/land/night/cold?size=medium","shortForecast":"Partly Cloudy","detailedForecast":"Partly cloudy, with a low around 7."},{"number":12,"name":"Saturday","startTime":"2022-12-17T06:00:00-08:00","endTime":"2022-12-17T18:00:00-08:00","isDaytime":true,"temperature":28,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"6 mph","windDirection":"E","icon":"https://api.weather.gov/icons/land/day/sct?size=medium","shortForecast":"Mostly Sunny","detailedForecast":"Mostly sunny, with a high near 28."},{"number":13,"name":"Saturday Night","startTime":"2022-12-17T18:00:00-08:00","endTime":"2022-12-18T06:00:00-08:00","isDaytime":false,"temperature":11,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"6 mph","windDirection":"SE","icon":"https://api.weather.gov/icons/land/night/sct?size=medium","shortForecast":"Partly Cloudy","detailedForecast":"Partly cloudy, with a low around 11."},{"number":14,"name":"Sunday","startTime":"2022-12-18T06:00:00-08:00","endTime":"2022-12-18T18:00:00-08:00","isDaytime":true,"temperature":30,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"6 mph","windDirection":"SE","icon":"https://api.weather.gov/icons/land/day/sct?size=medium","shortForecast":"Mostly Sunny","detailedForecast":"Mostly sunny, with a high near 30."}]}
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

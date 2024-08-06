---
### THIS FILE IS AUTO-GENERATED - DO NOT EDIT ###
layout: page
title: Trout Creek, Oregon Climbing Weather - Current, Past, and Forecasted
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
  var weekly_PDT_48_73 = {"units":"us","forecastGenerator":"BaselineForecastGenerator","generatedAt":"2024-08-06T08:33:56+00:00","updateTime":"2024-08-06T08:22:38+00:00","validTimes":"2024-08-06T02:00:00+00:00/P7DT11H","elevation":{"unitCode":"wmoUnit:m","value":487.0704},"periods":[{"number":1,"name":"Overnight","startTime":"2024-08-06T01:00:00-07:00","endTime":"2024-08-06T06:00:00-07:00","isDaytime":false,"temperature":58,"temperatureUnit":"F","temperatureTrend":"","probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"windSpeed":"6 mph","windDirection":"SW","icon":"https://api.weather.gov/icons/land/night/few?size=medium","shortForecast":"Mostly Clear","detailedForecast":"Mostly clear. Low around 58, with temperatures rising to around 60 overnight. Southwest wind around 6 mph."},{"number":2,"name":"Tuesday","startTime":"2024-08-06T06:00:00-07:00","endTime":"2024-08-06T18:00:00-07:00","isDaytime":true,"temperature":93,"temperatureUnit":"F","temperatureTrend":"","probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"windSpeed":"3 to 12 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/day/few?size=medium","shortForecast":"Sunny","detailedForecast":"Sunny. High near 93, with temperatures falling to around 91 in the afternoon. West wind 3 to 12 mph, with gusts as high as 23 mph."},{"number":3,"name":"Tuesday Night","startTime":"2024-08-06T18:00:00-07:00","endTime":"2024-08-07T06:00:00-07:00","isDaytime":false,"temperature":55,"temperatureUnit":"F","temperatureTrend":"","probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"windSpeed":"5 to 12 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/night/few?size=medium","shortForecast":"Mostly Clear","detailedForecast":"Mostly clear, with a low around 55. West wind 5 to 12 mph, with gusts as high as 23 mph."},{"number":4,"name":"Wednesday","startTime":"2024-08-07T06:00:00-07:00","endTime":"2024-08-07T18:00:00-07:00","isDaytime":true,"temperature":94,"temperatureUnit":"F","temperatureTrend":"","probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"windSpeed":"2 to 8 mph","windDirection":"N","icon":"https://api.weather.gov/icons/land/day/few?size=medium","shortForecast":"Sunny","detailedForecast":"Sunny, with a high near 94. North wind 2 to 8 mph."},{"number":5,"name":"Wednesday Night","startTime":"2024-08-07T18:00:00-07:00","endTime":"2024-08-08T06:00:00-07:00","isDaytime":false,"temperature":60,"temperatureUnit":"F","temperatureTrend":"","probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"windSpeed":"2 to 8 mph","windDirection":"N","icon":"https://api.weather.gov/icons/land/night/sct?size=medium","shortForecast":"Partly Cloudy","detailedForecast":"Partly cloudy, with a low around 60. North wind 2 to 8 mph."},{"number":6,"name":"Thursday","startTime":"2024-08-08T06:00:00-07:00","endTime":"2024-08-08T18:00:00-07:00","isDaytime":true,"temperature":95,"temperatureUnit":"F","temperatureTrend":"","probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"windSpeed":"2 to 10 mph","windDirection":"N","icon":"https://api.weather.gov/icons/land/day/sct?size=medium","shortForecast":"Mostly Sunny","detailedForecast":"Mostly sunny, with a high near 95."},{"number":7,"name":"Thursday Night","startTime":"2024-08-08T18:00:00-07:00","endTime":"2024-08-09T06:00:00-07:00","isDaytime":false,"temperature":61,"temperatureUnit":"F","temperatureTrend":"","probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"windSpeed":"3 to 10 mph","windDirection":"NW","icon":"https://api.weather.gov/icons/land/night/sct?size=medium","shortForecast":"Partly Cloudy","detailedForecast":"Partly cloudy, with a low around 61."},{"number":8,"name":"Friday","startTime":"2024-08-09T06:00:00-07:00","endTime":"2024-08-09T18:00:00-07:00","isDaytime":true,"temperature":94,"temperatureUnit":"F","temperatureTrend":"","probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"windSpeed":"3 to 10 mph","windDirection":"NW","icon":"https://api.weather.gov/icons/land/day/few?size=medium","shortForecast":"Sunny","detailedForecast":"Sunny, with a high near 94."},{"number":9,"name":"Friday Night","startTime":"2024-08-09T18:00:00-07:00","endTime":"2024-08-10T06:00:00-07:00","isDaytime":false,"temperature":60,"temperatureUnit":"F","temperatureTrend":"","probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"windSpeed":"3 to 10 mph","windDirection":"NW","icon":"https://api.weather.gov/icons/land/night/few?size=medium","shortForecast":"Mostly Clear","detailedForecast":"Mostly clear, with a low around 60."},{"number":10,"name":"Saturday","startTime":"2024-08-10T06:00:00-07:00","endTime":"2024-08-10T18:00:00-07:00","isDaytime":true,"temperature":95,"temperatureUnit":"F","temperatureTrend":"","probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"windSpeed":"3 to 12 mph","windDirection":"NW","icon":"https://api.weather.gov/icons/land/day/few?size=medium","shortForecast":"Sunny","detailedForecast":"Sunny, with a high near 95."},{"number":11,"name":"Saturday Night","startTime":"2024-08-10T18:00:00-07:00","endTime":"2024-08-11T06:00:00-07:00","isDaytime":false,"temperature":58,"temperatureUnit":"F","temperatureTrend":"","probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"windSpeed":"5 to 12 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/night/few?size=medium","shortForecast":"Mostly Clear","detailedForecast":"Mostly clear, with a low around 58."},{"number":12,"name":"Sunday","startTime":"2024-08-11T06:00:00-07:00","endTime":"2024-08-11T18:00:00-07:00","isDaytime":true,"temperature":94,"temperatureUnit":"F","temperatureTrend":"","probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"windSpeed":"3 to 10 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/day/few?size=medium","shortForecast":"Sunny","detailedForecast":"Sunny, with a high near 94."},{"number":13,"name":"Sunday Night","startTime":"2024-08-11T18:00:00-07:00","endTime":"2024-08-12T06:00:00-07:00","isDaytime":false,"temperature":58,"temperatureUnit":"F","temperatureTrend":"","probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"windSpeed":"5 to 10 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/night/few?size=medium","shortForecast":"Mostly Clear","detailedForecast":"Mostly clear, with a low around 58."},{"number":14,"name":"Monday","startTime":"2024-08-12T06:00:00-07:00","endTime":"2024-08-12T18:00:00-07:00","isDaytime":true,"temperature":93,"temperatureUnit":"F","temperatureTrend":"","probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"windSpeed":"3 to 12 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/day/few?size=medium","shortForecast":"Sunny","detailedForecast":"Sunny, with a high near 93."}]}
  var hourly_PDT_48_73 = false
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

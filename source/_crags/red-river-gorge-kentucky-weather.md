---
### THIS FILE IS AUTO-GENERATED - DO NOT EDIT ###
layout: page
title: Red River Gorge, Kentucky Climbing Weather - Current, Past, and Forecasted
title_override: Red River Gorge<br /><small>Climbing Weather</small>
description: A lightweight weather report for Red River Gorge, Kentucky. Optimized for slow internet connections.
js_includes:
  - weather.js
---

<section class="measure center lh-copy f5-ns f6 ph2 mv4" style="text-align: justify;">
<strong>"Is it dry?"</strong>, an oft-repeated, age-old question. Here are real-time,
precipitation-focused reports of current, past, and forecasted climbing weather for Red River Gorge, Kentucky.
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
<section id="weather" data-crag="red-river-gorge-kentucky" class="mv4-ns mv3 ph2 center"></section>
<section id="nearby" class="tc lh-copy">
  <h3>Nearby Crags</h3>
<a class="nowrap no-underline fancy-link relative light-red mh3" href="/crags/jackson-falls-illinois-weather.html">Jackson Falls</a>
<a class="nowrap no-underline fancy-link relative light-red mh3" href="/crags/foster-falls-tennessee-weather.html">Foster Falls</a>
<a class="nowrap no-underline fancy-link relative light-red mh3" href="/crags/seneca-rocks-west-virginia-weather.html">Seneca Rocks</a>
</section>
<section id="nearby" class="tc lh-copy">
  <h3>Other Metros</h3>
  <select class="ma1 bg-near-white pa2" id="stateSel">
    <option value="Texas">Texas</option>
    <option value="Washington">Washington</option>
    <option value="Colorado">Colorado</option>
    <option value="Tennessee" selected>Tennessee</option>
    <option value="Utah">Utah</option>
    <option value="California">California</option>
  </select>
  <select class="ma1 bg-near-white pa2" id="citySel">
    <option value="Nashville" selected>Nashville</option>
  </select>
  <a id="selectMetro" class="f6 link dim ph3 pv2 ma1 dib white bg-light-red" href="/crags/nashville-tennessee-weather.html">Select Metro</a>
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
  var weekly_JKL_47_57 = {"units":"us","forecastGenerator":"BaselineForecastGenerator","generatedAt":"2024-10-04T08:35:45+00:00","updateTime":"2024-10-04T07:28:41+00:00","validTimes":"2024-10-04T01:00:00+00:00/P8D","elevation":{"unitCode":"wmoUnit:m","value":365.1504},"periods":[{"number":1,"name":"Overnight","startTime":"2024-10-04T04:00:00-04:00","endTime":"2024-10-04T06:00:00-04:00","isDaytime":false,"temperature":58,"temperatureUnit":"F","temperatureTrend":"","probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"windSpeed":"2 mph","windDirection":"SE","icon":"https://api.weather.gov/icons/land/night/sct?size=medium","shortForecast":"Partly Cloudy","detailedForecast":"Partly cloudy. Low around 58, with temperatures rising to around 59 overnight. Southeast wind around 2 mph."},{"number":2,"name":"Friday","startTime":"2024-10-04T06:00:00-04:00","endTime":"2024-10-04T18:00:00-04:00","isDaytime":true,"temperature":81,"temperatureUnit":"F","temperatureTrend":"","probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"windSpeed":"2 to 6 mph","windDirection":"SSW","icon":"https://api.weather.gov/icons/land/day/sct?size=medium","shortForecast":"Mostly Sunny","detailedForecast":"Mostly sunny. High near 81, with temperatures falling to around 80 in the afternoon. South southwest wind 2 to 6 mph."},{"number":3,"name":"Friday Night","startTime":"2024-10-04T18:00:00-04:00","endTime":"2024-10-05T06:00:00-04:00","isDaytime":false,"temperature":54,"temperatureUnit":"F","temperatureTrend":"","probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"windSpeed":"5 mph","windDirection":"NNE","icon":"https://api.weather.gov/icons/land/night/few?size=medium","shortForecast":"Mostly Clear","detailedForecast":"Mostly clear. Low around 54, with temperatures rising to around 56 overnight. North northeast wind around 5 mph."},{"number":4,"name":"Saturday","startTime":"2024-10-05T06:00:00-04:00","endTime":"2024-10-05T18:00:00-04:00","isDaytime":true,"temperature":79,"temperatureUnit":"F","temperatureTrend":"","probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"windSpeed":"5 mph","windDirection":"ENE","icon":"https://api.weather.gov/icons/land/day/few?size=medium","shortForecast":"Sunny","detailedForecast":"Sunny. High near 79, with temperatures falling to around 78 in the afternoon. East northeast wind around 5 mph."},{"number":5,"name":"Saturday Night","startTime":"2024-10-05T18:00:00-04:00","endTime":"2024-10-06T06:00:00-04:00","isDaytime":false,"temperature":56,"temperatureUnit":"F","temperatureTrend":"","probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"windSpeed":"5 mph","windDirection":"ESE","icon":"https://api.weather.gov/icons/land/night/skc?size=medium","shortForecast":"Clear","detailedForecast":"Clear. Low around 56, with temperatures rising to around 58 overnight. East southeast wind around 5 mph."},{"number":6,"name":"Sunday","startTime":"2024-10-06T06:00:00-04:00","endTime":"2024-10-06T18:00:00-04:00","isDaytime":true,"temperature":82,"temperatureUnit":"F","temperatureTrend":"","probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"windSpeed":"2 to 8 mph","windDirection":"SSW","icon":"https://api.weather.gov/icons/land/day/few?size=medium","shortForecast":"Sunny","detailedForecast":"Sunny, with a high near 82."},{"number":7,"name":"Sunday Night","startTime":"2024-10-06T18:00:00-04:00","endTime":"2024-10-07T06:00:00-04:00","isDaytime":false,"temperature":51,"temperatureUnit":"F","temperatureTrend":"","probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":30},"windSpeed":"3 to 7 mph","windDirection":"WNW","icon":"https://api.weather.gov/icons/land/night/tsra_hi,30/tsra_hi,20?size=medium","shortForecast":"Slight Chance Showers And Thunderstorms then Chance Showers And Thunderstorms","detailedForecast":"A slight chance of showers and thunderstorms between 8pm and 10pm, then a chance of showers and thunderstorms between 10pm and 1am. Mostly clear, with a low around 51. Chance of precipitation is 30%."},{"number":8,"name":"Monday","startTime":"2024-10-07T06:00:00-04:00","endTime":"2024-10-07T18:00:00-04:00","isDaytime":true,"temperature":69,"temperatureUnit":"F","temperatureTrend":"","probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"windSpeed":"6 mph","windDirection":"NNW","icon":"https://api.weather.gov/icons/land/day/skc?size=medium","shortForecast":"Sunny","detailedForecast":"Sunny, with a high near 69."},{"number":9,"name":"Monday Night","startTime":"2024-10-07T18:00:00-04:00","endTime":"2024-10-08T06:00:00-04:00","isDaytime":false,"temperature":46,"temperatureUnit":"F","temperatureTrend":"","probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"windSpeed":"5 mph","windDirection":"N","icon":"https://api.weather.gov/icons/land/night/skc?size=medium","shortForecast":"Clear","detailedForecast":"Clear, with a low around 46."},{"number":10,"name":"Tuesday","startTime":"2024-10-08T06:00:00-04:00","endTime":"2024-10-08T18:00:00-04:00","isDaytime":true,"temperature":68,"temperatureUnit":"F","temperatureTrend":"","probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"windSpeed":"6 mph","windDirection":"N","icon":"https://api.weather.gov/icons/land/day/skc?size=medium","shortForecast":"Sunny","detailedForecast":"Sunny, with a high near 68."},{"number":11,"name":"Tuesday Night","startTime":"2024-10-08T18:00:00-04:00","endTime":"2024-10-09T06:00:00-04:00","isDaytime":false,"temperature":44,"temperatureUnit":"F","temperatureTrend":"","probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"windSpeed":"2 to 6 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/night/skc?size=medium","shortForecast":"Clear","detailedForecast":"Clear, with a low around 44."},{"number":12,"name":"Wednesday","startTime":"2024-10-09T06:00:00-04:00","endTime":"2024-10-09T18:00:00-04:00","isDaytime":true,"temperature":69,"temperatureUnit":"F","temperatureTrend":"","probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"windSpeed":"2 to 6 mph","windDirection":"NNW","icon":"https://api.weather.gov/icons/land/day/skc?size=medium","shortForecast":"Sunny","detailedForecast":"Sunny, with a high near 69."},{"number":13,"name":"Wednesday Night","startTime":"2024-10-09T18:00:00-04:00","endTime":"2024-10-10T06:00:00-04:00","isDaytime":false,"temperature":44,"temperatureUnit":"F","temperatureTrend":"","probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"windSpeed":"5 mph","windDirection":"N","icon":"https://api.weather.gov/icons/land/night/skc?size=medium","shortForecast":"Clear","detailedForecast":"Clear, with a low around 44."},{"number":14,"name":"Thursday","startTime":"2024-10-10T06:00:00-04:00","endTime":"2024-10-10T18:00:00-04:00","isDaytime":true,"temperature":69,"temperatureUnit":"F","temperatureTrend":"","probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"windSpeed":"6 mph","windDirection":"N","icon":"https://api.weather.gov/icons/land/day/skc?size=medium","shortForecast":"Sunny","detailedForecast":"Sunny, with a high near 69."}]}
  var hourly_JKL_47_57 = false
  var crags_config = [
  {
    "name": "Red River Gorge",
    "note": "Sandstone cliffs.",
    "mountainProject": "https://www.mountainproject.com/area/105841134/red-river-gorge",
    "station": "KIOB",
    "office": "JKL/47,57",
    "coordinates": [
      -83.683,
      37.783
    ]
  }
]</script>

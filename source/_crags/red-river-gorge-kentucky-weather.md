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
  var weekly_JKL_47_57 = {"units":"us","forecastGenerator":"BaselineForecastGenerator","generatedAt":"2024-09-08T08:33:46+00:00","updateTime":"2024-09-08T08:14:06+00:00","validTimes":"2024-09-08T02:00:00+00:00/P7DT23H","elevation":{"unitCode":"wmoUnit:m","value":365.1504},"periods":[{"number":1,"name":"Overnight","startTime":"2024-09-08T04:00:00-04:00","endTime":"2024-09-08T06:00:00-04:00","isDaytime":false,"temperature":40,"temperatureUnit":"F","temperatureTrend":"","probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"windSpeed":"1 mph","windDirection":"NNE","icon":"https://api.weather.gov/icons/land/night/skc?size=medium","shortForecast":"Clear","detailedForecast":"Clear. Low around 40, with temperatures rising to around 43 overnight. North northeast wind around 1 mph."},{"number":2,"name":"Sunday","startTime":"2024-09-08T06:00:00-04:00","endTime":"2024-09-08T18:00:00-04:00","isDaytime":true,"temperature":71,"temperatureUnit":"F","temperatureTrend":"","probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"windSpeed":"1 mph","windDirection":"NNE","icon":"https://api.weather.gov/icons/land/day/skc?size=medium","shortForecast":"Sunny","detailedForecast":"Sunny. High near 71, with temperatures falling to around 70 in the afternoon. North northeast wind around 1 mph."},{"number":3,"name":"Sunday Night","startTime":"2024-09-08T18:00:00-04:00","endTime":"2024-09-09T06:00:00-04:00","isDaytime":false,"temperature":48,"temperatureUnit":"F","temperatureTrend":"","probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"windSpeed":"1 mph","windDirection":"ENE","icon":"https://api.weather.gov/icons/land/night/skc?size=medium","shortForecast":"Clear","detailedForecast":"Clear, with a low around 48. East northeast wind around 1 mph."},{"number":4,"name":"Monday","startTime":"2024-09-09T06:00:00-04:00","endTime":"2024-09-09T18:00:00-04:00","isDaytime":true,"temperature":79,"temperatureUnit":"F","temperatureTrend":"","probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"windSpeed":"0 mph","windDirection":"","icon":"https://api.weather.gov/icons/land/day/skc?size=medium","shortForecast":"Sunny","detailedForecast":"Sunny. High near 79, with temperatures falling to around 78 in the afternoon. Wind around 0 mph."},{"number":5,"name":"Monday Night","startTime":"2024-09-09T18:00:00-04:00","endTime":"2024-09-10T06:00:00-04:00","isDaytime":false,"temperature":50,"temperatureUnit":"F","temperatureTrend":"","probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"windSpeed":"1 mph","windDirection":"NE","icon":"https://api.weather.gov/icons/land/night/skc?size=medium","shortForecast":"Clear","detailedForecast":"Clear. Low around 50, with temperatures rising to around 52 overnight. Northeast wind around 1 mph."},{"number":6,"name":"Tuesday","startTime":"2024-09-10T06:00:00-04:00","endTime":"2024-09-10T18:00:00-04:00","isDaytime":true,"temperature":84,"temperatureUnit":"F","temperatureTrend":"","probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"windSpeed":"2 mph","windDirection":"ESE","icon":"https://api.weather.gov/icons/land/day/skc?size=medium","shortForecast":"Sunny","detailedForecast":"Sunny, with a high near 84."},{"number":7,"name":"Tuesday Night","startTime":"2024-09-10T18:00:00-04:00","endTime":"2024-09-11T06:00:00-04:00","isDaytime":false,"temperature":59,"temperatureUnit":"F","temperatureTrend":"","probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"windSpeed":"2 mph","windDirection":"E","icon":"https://api.weather.gov/icons/land/night/few?size=medium","shortForecast":"Mostly Clear","detailedForecast":"Mostly clear, with a low around 59."},{"number":8,"name":"Wednesday","startTime":"2024-09-11T06:00:00-04:00","endTime":"2024-09-11T18:00:00-04:00","isDaytime":true,"temperature":87,"temperatureUnit":"F","temperatureTrend":"","probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"windSpeed":"2 mph","windDirection":"SE","icon":"https://api.weather.gov/icons/land/day/few?size=medium","shortForecast":"Sunny","detailedForecast":"Sunny, with a high near 87."},{"number":9,"name":"Wednesday Night","startTime":"2024-09-11T18:00:00-04:00","endTime":"2024-09-12T06:00:00-04:00","isDaytime":false,"temperature":60,"temperatureUnit":"F","temperatureTrend":"","probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"windSpeed":"2 mph","windDirection":"ESE","icon":"https://api.weather.gov/icons/land/night/sct?size=medium","shortForecast":"Partly Cloudy","detailedForecast":"Partly cloudy, with a low around 60."},{"number":10,"name":"Thursday","startTime":"2024-09-12T06:00:00-04:00","endTime":"2024-09-12T18:00:00-04:00","isDaytime":true,"temperature":83,"temperatureUnit":"F","temperatureTrend":"","probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"windSpeed":"3 mph","windDirection":"SE","icon":"https://api.weather.gov/icons/land/day/bkn?size=medium","shortForecast":"Partly Sunny","detailedForecast":"Partly sunny, with a high near 83."},{"number":11,"name":"Thursday Night","startTime":"2024-09-12T18:00:00-04:00","endTime":"2024-09-13T06:00:00-04:00","isDaytime":false,"temperature":61,"temperatureUnit":"F","temperatureTrend":"","probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":20},"windSpeed":"3 mph","windDirection":"ESE","icon":"https://api.weather.gov/icons/land/night/rain_showers,20?size=medium","shortForecast":"Slight Chance Rain Showers","detailedForecast":"A slight chance of rain showers after 10pm. Mostly cloudy, with a low around 61. Chance of precipitation is 20%."},{"number":12,"name":"Friday","startTime":"2024-09-13T06:00:00-04:00","endTime":"2024-09-13T18:00:00-04:00","isDaytime":true,"temperature":78,"temperatureUnit":"F","temperatureTrend":"","probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":30},"windSpeed":"5 mph","windDirection":"ESE","icon":"https://api.weather.gov/icons/land/day/rain_showers,30?size=medium","shortForecast":"Chance Rain Showers","detailedForecast":"A chance of rain showers. Partly sunny, with a high near 78. Chance of precipitation is 30%."},{"number":13,"name":"Friday Night","startTime":"2024-09-13T18:00:00-04:00","endTime":"2024-09-14T06:00:00-04:00","isDaytime":false,"temperature":61,"temperatureUnit":"F","temperatureTrend":"","probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":30},"windSpeed":"5 mph","windDirection":"ESE","icon":"https://api.weather.gov/icons/land/night/rain_showers,30?size=medium","shortForecast":"Chance Rain Showers","detailedForecast":"A chance of rain showers. Mostly cloudy, with a low around 61. Chance of precipitation is 30%."},{"number":14,"name":"Saturday","startTime":"2024-09-14T06:00:00-04:00","endTime":"2024-09-14T18:00:00-04:00","isDaytime":true,"temperature":78,"temperatureUnit":"F","temperatureTrend":"","probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":30},"windSpeed":"5 mph","windDirection":"SE","icon":"https://api.weather.gov/icons/land/day/rain_showers,30?size=medium","shortForecast":"Chance Rain Showers","detailedForecast":"A chance of rain showers. Mostly sunny, with a high near 78. Chance of precipitation is 30%."}]}
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

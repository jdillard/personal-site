---
### THIS FILE IS AUTO-GENERATED - DO NOT EDIT ###
layout: page
title: Red River Gorge, Kentucky Climbing Weather - Current, Past, and Forecasted Report
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
  var weekly_JKL_47_57 = {"updated":"2022-10-22T07:42:37+00:00","units":"us","forecastGenerator":"BaselineForecastGenerator","generatedAt":"2022-10-22T08:43:42+00:00","updateTime":"2022-10-22T07:42:37+00:00","validTimes":"2022-10-22T01:00:00+00:00/P8D","elevation":{"unitCode":"wmoUnit:m","value":270.0528},"periods":[{"number":1,"name":"Overnight","startTime":"2022-10-22T04:00:00-04:00","endTime":"2022-10-22T06:00:00-04:00","isDaytime":false,"temperature":45,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"5 mph","windDirection":"S","icon":"https://api.weather.gov/icons/land/night/few?size=medium","shortForecast":"Mostly Clear","detailedForecast":"Mostly clear, with a low around 45. South wind around 5 mph."},{"number":2,"name":"Saturday","startTime":"2022-10-22T06:00:00-04:00","endTime":"2022-10-22T18:00:00-04:00","isDaytime":true,"temperature":74,"temperatureUnit":"F","temperatureTrend":"falling","windSpeed":"7 mph","windDirection":"S","icon":"https://api.weather.gov/icons/land/day/sct?size=medium","shortForecast":"Mostly Sunny","detailedForecast":"Mostly sunny. High near 74, with temperatures falling to around 72 in the afternoon. South wind around 7 mph."},{"number":3,"name":"Saturday Night","startTime":"2022-10-22T18:00:00-04:00","endTime":"2022-10-23T06:00:00-04:00","isDaytime":false,"temperature":45,"temperatureUnit":"F","temperatureTrend":"rising","windSpeed":"2 to 6 mph","windDirection":"SSE","icon":"https://api.weather.gov/icons/land/night/sct?size=medium","shortForecast":"Partly Cloudy","detailedForecast":"Partly cloudy. Low around 45, with temperatures rising to around 48 overnight. South southeast wind 2 to 6 mph."},{"number":4,"name":"Sunday","startTime":"2022-10-23T06:00:00-04:00","endTime":"2022-10-23T18:00:00-04:00","isDaytime":true,"temperature":75,"temperatureUnit":"F","temperatureTrend":"falling","windSpeed":"3 mph","windDirection":"SSE","icon":"https://api.weather.gov/icons/land/day/few?size=medium","shortForecast":"Sunny","detailedForecast":"Sunny. High near 75, with temperatures falling to around 72 in the afternoon. South southeast wind around 3 mph."},{"number":5,"name":"Sunday Night","startTime":"2022-10-23T18:00:00-04:00","endTime":"2022-10-24T06:00:00-04:00","isDaytime":false,"temperature":46,"temperatureUnit":"F","temperatureTrend":"rising","windSpeed":"2 mph","windDirection":"SE","icon":"https://api.weather.gov/icons/land/night/few?size=medium","shortForecast":"Mostly Clear","detailedForecast":"Mostly clear. Low around 46, with temperatures rising to around 48 overnight. Southeast wind around 2 mph."},{"number":6,"name":"Monday","startTime":"2022-10-24T06:00:00-04:00","endTime":"2022-10-24T18:00:00-04:00","isDaytime":true,"temperature":76,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"2 mph","windDirection":"SSE","icon":"https://api.weather.gov/icons/land/day/few?size=medium","shortForecast":"Sunny","detailedForecast":"Sunny, with a high near 76."},{"number":7,"name":"Monday Night","startTime":"2022-10-24T18:00:00-04:00","endTime":"2022-10-25T06:00:00-04:00","isDaytime":false,"temperature":49,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"2 mph","windDirection":"SSE","icon":"https://api.weather.gov/icons/land/night/sct?size=medium","shortForecast":"Partly Cloudy","detailedForecast":"Partly cloudy, with a low around 49."},{"number":8,"name":"Tuesday","startTime":"2022-10-25T06:00:00-04:00","endTime":"2022-10-25T18:00:00-04:00","isDaytime":true,"temperature":75,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"5 mph","windDirection":"S","icon":"https://api.weather.gov/icons/land/day/sct/rain_showers?size=medium","shortForecast":"Mostly Sunny then Slight Chance Rain Showers","detailedForecast":"A slight chance of rain showers after 2pm. Mostly sunny, with a high near 75."},{"number":9,"name":"Tuesday Night","startTime":"2022-10-25T18:00:00-04:00","endTime":"2022-10-26T06:00:00-04:00","isDaytime":false,"temperature":54,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"5 mph","windDirection":"SSE","icon":"https://api.weather.gov/icons/land/night/rain_showers,20/rain_showers,30?size=medium","shortForecast":"Chance Rain Showers","detailedForecast":"A chance of rain showers. Mostly cloudy, with a low around 54. Chance of precipitation is 30%."},{"number":10,"name":"Wednesday","startTime":"2022-10-26T06:00:00-04:00","endTime":"2022-10-26T18:00:00-04:00","isDaytime":true,"temperature":70,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"7 mph","windDirection":"SSW","icon":"https://api.weather.gov/icons/land/day/rain_showers,30/rain_showers,20?size=medium","shortForecast":"Chance Rain Showers","detailedForecast":"A chance of rain showers. Partly sunny, with a high near 70. Chance of precipitation is 30%."},{"number":11,"name":"Wednesday Night","startTime":"2022-10-26T18:00:00-04:00","endTime":"2022-10-27T06:00:00-04:00","isDaytime":false,"temperature":47,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"3 mph","windDirection":"WSW","icon":"https://api.weather.gov/icons/land/night/sct?size=medium","shortForecast":"Partly Cloudy","detailedForecast":"Partly cloudy, with a low around 47."},{"number":12,"name":"Thursday","startTime":"2022-10-27T06:00:00-04:00","endTime":"2022-10-27T18:00:00-04:00","isDaytime":true,"temperature":67,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"1 to 5 mph","windDirection":"NE","icon":"https://api.weather.gov/icons/land/day/sct?size=medium","shortForecast":"Mostly Sunny","detailedForecast":"Mostly sunny, with a high near 67."},{"number":13,"name":"Thursday Night","startTime":"2022-10-27T18:00:00-04:00","endTime":"2022-10-28T06:00:00-04:00","isDaytime":false,"temperature":47,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"3 mph","windDirection":"ENE","icon":"https://api.weather.gov/icons/land/night/few?size=medium","shortForecast":"Mostly Clear","detailedForecast":"Mostly clear, with a low around 47."},{"number":14,"name":"Friday","startTime":"2022-10-28T06:00:00-04:00","endTime":"2022-10-28T18:00:00-04:00","isDaytime":true,"temperature":70,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"5 mph","windDirection":"SE","icon":"https://api.weather.gov/icons/land/day/rain_showers?size=medium","shortForecast":"Slight Chance Rain Showers","detailedForecast":"A slight chance of rain showers after 11am. Mostly sunny, with a high near 70."}]}
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

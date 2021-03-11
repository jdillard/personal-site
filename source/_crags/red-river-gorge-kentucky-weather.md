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
  var weekly_JKL_47_57 = {"updated":"2021-03-09T03:20:48+00:00","units":"us","forecastGenerator":"BaselineForecastGenerator","generatedAt":"2021-03-09T03:23:30+00:00","updateTime":"2021-03-09T03:20:48+00:00","validTimes":"2021-03-08T21:00:00+00:00/P7DT4H","elevation":{"value":270.0528,"unitCode":"unit:m"},"periods":[{"number":1,"name":"Tonight","startTime":"2021-03-08T22:00:00-05:00","endTime":"2021-03-09T06:00:00-05:00","isDaytime":false,"temperature":35,"temperatureUnit":"F","temperatureTrend":"rising","windSpeed":"1 to 5 mph","windDirection":"SSW","icon":"https://api.weather.gov/icons/land/night/few?size=medium","shortForecast":"Mostly Clear","detailedForecast":"Mostly clear. Low around 35, with temperatures rising to around 37 overnight. South southwest wind 1 to 5 mph."},{"number":2,"name":"Tuesday","startTime":"2021-03-09T06:00:00-05:00","endTime":"2021-03-09T18:00:00-05:00","isDaytime":true,"temperature":67,"temperatureUnit":"F","temperatureTrend":"falling","windSpeed":"7 mph","windDirection":"SSW","icon":"https://api.weather.gov/icons/land/day/few?size=medium","shortForecast":"Sunny","detailedForecast":"Sunny. High near 67, with temperatures falling to around 64 in the afternoon. South southwest wind around 7 mph."},{"number":3,"name":"Tuesday Night","startTime":"2021-03-09T18:00:00-05:00","endTime":"2021-03-10T06:00:00-05:00","isDaytime":false,"temperature":40,"temperatureUnit":"F","temperatureTrend":"rising","windSpeed":"6 mph","windDirection":"S","icon":"https://api.weather.gov/icons/land/night/few?size=medium","shortForecast":"Mostly Clear","detailedForecast":"Mostly clear. Low around 40, with temperatures rising to around 41 overnight. South wind around 6 mph."},{"number":4,"name":"Wednesday","startTime":"2021-03-10T06:00:00-05:00","endTime":"2021-03-10T18:00:00-05:00","isDaytime":true,"temperature":68,"temperatureUnit":"F","temperatureTrend":"falling","windSpeed":"5 to 9 mph","windDirection":"S","icon":"https://api.weather.gov/icons/land/day/sct?size=medium","shortForecast":"Mostly Sunny","detailedForecast":"Mostly sunny. High near 68, with temperatures falling to around 65 in the afternoon. South wind 5 to 9 mph, with gusts as high as 21 mph."},{"number":5,"name":"Wednesday Night","startTime":"2021-03-10T18:00:00-05:00","endTime":"2021-03-11T06:00:00-05:00","isDaytime":false,"temperature":48,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"7 mph","windDirection":"SSW","icon":"https://api.weather.gov/icons/land/night/bkn?size=medium","shortForecast":"Mostly Cloudy","detailedForecast":"Mostly cloudy, with a low around 48. South southwest wind around 7 mph, with gusts as high as 17 mph."},{"number":6,"name":"Thursday","startTime":"2021-03-11T06:00:00-05:00","endTime":"2021-03-11T18:00:00-05:00","isDaytime":true,"temperature":70,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"10 mph","windDirection":"SSW","icon":"https://api.weather.gov/icons/land/day/bkn?size=medium","shortForecast":"Mostly Cloudy","detailedForecast":"Mostly cloudy, with a high near 70."},{"number":7,"name":"Thursday Night","startTime":"2021-03-11T18:00:00-05:00","endTime":"2021-03-12T06:00:00-05:00","isDaytime":false,"temperature":54,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"6 to 9 mph","windDirection":"SSW","icon":"https://api.weather.gov/icons/land/night/rain_showers,20/rain_showers,40?size=medium","shortForecast":"Chance Rain Showers","detailedForecast":"A chance of rain showers after 10pm. Mostly cloudy, with a low around 54. Chance of precipitation is 40%."},{"number":8,"name":"Friday","startTime":"2021-03-12T06:00:00-05:00","endTime":"2021-03-12T18:00:00-05:00","isDaytime":true,"temperature":64,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"3 to 7 mph","windDirection":"SW","icon":"https://api.weather.gov/icons/land/day/rain_showers,60?size=medium","shortForecast":"Rain Showers Likely","detailedForecast":"Rain showers likely. Mostly cloudy, with a high near 64. Chance of precipitation is 60%."},{"number":9,"name":"Friday Night","startTime":"2021-03-12T18:00:00-05:00","endTime":"2021-03-13T06:00:00-05:00","isDaytime":false,"temperature":48,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"2 mph","windDirection":"SSW","icon":"https://api.weather.gov/icons/land/night/rain_showers,50/rain_showers,60?size=medium","shortForecast":"Rain Showers Likely","detailedForecast":"Rain showers likely. Mostly cloudy, with a low around 48. Chance of precipitation is 60%."},{"number":10,"name":"Saturday","startTime":"2021-03-13T06:00:00-05:00","endTime":"2021-03-13T18:00:00-05:00","isDaytime":true,"temperature":56,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"3 mph","windDirection":"NE","icon":"https://api.weather.gov/icons/land/day/rain_showers,60/rain_showers,50?size=medium","shortForecast":"Rain Showers Likely","detailedForecast":"Rain showers likely. Mostly cloudy, with a high near 56. Chance of precipitation is 60%."},{"number":11,"name":"Saturday Night","startTime":"2021-03-13T18:00:00-05:00","endTime":"2021-03-14T06:00:00-04:00","isDaytime":false,"temperature":40,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"3 mph","windDirection":"NE","icon":"https://api.weather.gov/icons/land/night/rain_showers,50?size=medium","shortForecast":"Chance Rain Showers","detailedForecast":"A chance of rain showers. Mostly cloudy, with a low around 40. Chance of precipitation is 50%."},{"number":12,"name":"Sunday","startTime":"2021-03-14T06:00:00-04:00","endTime":"2021-03-14T18:00:00-04:00","isDaytime":true,"temperature":52,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"3 mph","windDirection":"NE","icon":"https://api.weather.gov/icons/land/day/rain_showers,50?size=medium","shortForecast":"Chance Rain Showers","detailedForecast":"A chance of rain showers. Mostly cloudy, with a high near 52. Chance of precipitation is 50%."},{"number":13,"name":"Sunday Night","startTime":"2021-03-14T18:00:00-04:00","endTime":"2021-03-15T06:00:00-04:00","isDaytime":false,"temperature":38,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"3 mph","windDirection":"E","icon":"https://api.weather.gov/icons/land/night/rain_showers,40/rain_showers,50?size=medium","shortForecast":"Chance Rain Showers","detailedForecast":"A chance of rain showers. Mostly cloudy, with a low around 38. Chance of precipitation is 50%."},{"number":14,"name":"Monday","startTime":"2021-03-15T06:00:00-04:00","endTime":"2021-03-15T18:00:00-04:00","isDaytime":true,"temperature":55,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"6 mph","windDirection":"SSE","icon":"https://api.weather.gov/icons/land/day/rain_showers,50/rain_showers,40?size=medium","shortForecast":"Chance Rain Showers","detailedForecast":"A chance of rain showers. Mostly cloudy, with a high near 55. Chance of precipitation is 50%."}]}
  var hourly_JKL_47_57 = {"correlationId":"1dfaf4c","title":"Unexpected Problem","type":"https://api.weather.gov/problems/UnexpectedProblem","status":500,"detail":"An unexpected problem has occurred.","instance":"https://api.weather.gov/requests/1dfaf4c"}
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

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
  var weekly_JKL_47_57 = {"updated":"2022-12-12T08:33:15+00:00","units":"us","forecastGenerator":"BaselineForecastGenerator","generatedAt":"2022-12-12T08:37:32+00:00","updateTime":"2022-12-12T08:33:15+00:00","validTimes":"2022-12-12T02:00:00+00:00/P7DT23H","elevation":{"unitCode":"wmoUnit:m","value":270.0528},"periods":[{"number":1,"name":"Overnight","startTime":"2022-12-12T03:00:00-05:00","endTime":"2022-12-12T06:00:00-05:00","isDaytime":false,"temperature":33,"temperatureUnit":"F","temperatureTrend":"rising","windSpeed":"5 mph","windDirection":"N","icon":"https://api.weather.gov/icons/land/night/bkn?size=medium","shortForecast":"Mostly Cloudy","detailedForecast":"Mostly cloudy. Low around 33, with temperatures rising to around 35 overnight. North wind around 5 mph."},{"number":2,"name":"Monday","startTime":"2022-12-12T06:00:00-05:00","endTime":"2022-12-12T18:00:00-05:00","isDaytime":true,"temperature":45,"temperatureUnit":"F","temperatureTrend":"falling","windSpeed":"6 mph","windDirection":"NE","icon":"https://api.weather.gov/icons/land/day/sct?size=medium","shortForecast":"Mostly Sunny","detailedForecast":"Mostly sunny. High near 45, with temperatures falling to around 43 in the afternoon. Northeast wind around 6 mph."},{"number":3,"name":"Monday Night","startTime":"2022-12-12T18:00:00-05:00","endTime":"2022-12-13T06:00:00-05:00","isDaytime":false,"temperature":29,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"6 mph","windDirection":"ENE","icon":"https://api.weather.gov/icons/land/night/sct?size=medium","shortForecast":"Partly Cloudy","detailedForecast":"Partly cloudy, with a low around 29. East northeast wind around 6 mph."},{"number":4,"name":"Tuesday","startTime":"2022-12-13T06:00:00-05:00","endTime":"2022-12-13T18:00:00-05:00","isDaytime":true,"temperature":49,"temperatureUnit":"F","temperatureTrend":"falling","windSpeed":"6 mph","windDirection":"E","icon":"https://api.weather.gov/icons/land/day/bkn?size=medium","shortForecast":"Partly Sunny","detailedForecast":"Partly sunny. High near 49, with temperatures falling to around 47 in the afternoon. East wind around 6 mph."},{"number":5,"name":"Tuesday Night","startTime":"2022-12-13T18:00:00-05:00","endTime":"2022-12-14T06:00:00-05:00","isDaytime":false,"temperature":39,"temperatureUnit":"F","temperatureTrend":"rising","windSpeed":"6 mph","windDirection":"ESE","icon":"https://api.weather.gov/icons/land/night/bkn/rain_showers,50?size=medium","shortForecast":"Mostly Cloudy then Chance Rain Showers","detailedForecast":"A chance of rain showers after 2am. Mostly cloudy. Low around 39, with temperatures rising to around 40 overnight. East southeast wind around 6 mph. Chance of precipitation is 50%. New rainfall amounts less than a tenth of an inch possible."},{"number":6,"name":"Wednesday","startTime":"2022-12-14T06:00:00-05:00","endTime":"2022-12-14T18:00:00-05:00","isDaytime":true,"temperature":50,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"6 mph","windDirection":"SE","icon":"https://api.weather.gov/icons/land/day/rain_showers,90/rain_showers,80?size=medium","shortForecast":"Rain Showers","detailedForecast":"Rain showers. Cloudy, with a high near 50. Chance of precipitation is 90%."},{"number":7,"name":"Wednesday Night","startTime":"2022-12-14T18:00:00-05:00","endTime":"2022-12-15T06:00:00-05:00","isDaytime":false,"temperature":47,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"6 mph","windDirection":"S","icon":"https://api.weather.gov/icons/land/night/rain_showers,100/rain_showers,90?size=medium","shortForecast":"Rain Showers","detailedForecast":"Rain showers. Cloudy, with a low around 47. Chance of precipitation is 100%."},{"number":8,"name":"Thursday","startTime":"2022-12-15T06:00:00-05:00","endTime":"2022-12-15T18:00:00-05:00","isDaytime":true,"temperature":52,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"8 mph","windDirection":"SW","icon":"https://api.weather.gov/icons/land/day/rain_showers,50/rain_showers,20?size=medium","shortForecast":"Chance Rain Showers","detailedForecast":"A chance of rain showers before 1pm. Partly sunny, with a high near 52. Chance of precipitation is 50%."},{"number":9,"name":"Thursday Night","startTime":"2022-12-15T18:00:00-05:00","endTime":"2022-12-16T06:00:00-05:00","isDaytime":false,"temperature":33,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"7 mph","windDirection":"SW","icon":"https://api.weather.gov/icons/land/night/sct?size=medium","shortForecast":"Partly Cloudy","detailedForecast":"Partly cloudy, with a low around 33."},{"number":10,"name":"Friday","startTime":"2022-12-16T06:00:00-05:00","endTime":"2022-12-16T18:00:00-05:00","isDaytime":true,"temperature":42,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"6 to 10 mph","windDirection":"WSW","icon":"https://api.weather.gov/icons/land/day/bkn/rain_showers,20?size=medium","shortForecast":"Partly Sunny then Slight Chance Rain Showers","detailedForecast":"A slight chance of rain showers after 2pm. Partly sunny, with a high near 42. Chance of precipitation is 20%."},{"number":11,"name":"Friday Night","startTime":"2022-12-16T18:00:00-05:00","endTime":"2022-12-17T06:00:00-05:00","isDaytime":false,"temperature":28,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"8 mph","windDirection":"WSW","icon":"https://api.weather.gov/icons/land/night/snow,20?size=medium","shortForecast":"Slight Chance Rain And Snow Showers","detailedForecast":"A slight chance of rain and snow showers. Mostly cloudy, with a low around 28. Chance of precipitation is 20%."},{"number":12,"name":"Saturday","startTime":"2022-12-17T06:00:00-05:00","endTime":"2022-12-17T18:00:00-05:00","isDaytime":true,"temperature":36,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"8 to 12 mph","windDirection":"WSW","icon":"https://api.weather.gov/icons/land/day/bkn?size=medium","shortForecast":"Mostly Cloudy","detailedForecast":"Mostly cloudy, with a high near 36."},{"number":13,"name":"Saturday Night","startTime":"2022-12-17T18:00:00-05:00","endTime":"2022-12-18T06:00:00-05:00","isDaytime":false,"temperature":21,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"6 to 9 mph","windDirection":"WSW","icon":"https://api.weather.gov/icons/land/night/bkn?size=medium","shortForecast":"Mostly Cloudy","detailedForecast":"Mostly cloudy, with a low around 21."},{"number":14,"name":"Sunday","startTime":"2022-12-18T06:00:00-05:00","endTime":"2022-12-18T18:00:00-05:00","isDaytime":true,"temperature":37,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"7 mph","windDirection":"WSW","icon":"https://api.weather.gov/icons/land/day/sct?size=medium","shortForecast":"Mostly Sunny","detailedForecast":"Mostly sunny, with a high near 37."}]}
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

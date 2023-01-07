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
  var weekly_JKL_47_57 = {"updated":"2023-01-07T08:13:11+00:00","units":"us","forecastGenerator":"BaselineForecastGenerator","generatedAt":"2023-01-07T08:35:24+00:00","updateTime":"2023-01-07T08:13:11+00:00","validTimes":"2023-01-07T02:00:00+00:00/P7DT23H","elevation":{"unitCode":"wmoUnit:m","value":270.0528},"periods":[{"number":1,"name":"Overnight","startTime":"2023-01-07T03:00:00-05:00","endTime":"2023-01-07T06:00:00-05:00","isDaytime":false,"temperature":32,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"2 mph","windDirection":"WSW","icon":"https://api.weather.gov/icons/land/night/snow?size=medium","shortForecast":"Chance Snow Showers","detailedForecast":"A chance of snow showers after 4am. Mostly cloudy, with a low around 32. West southwest wind around 2 mph."},{"number":2,"name":"Saturday","startTime":"2023-01-07T06:00:00-05:00","endTime":"2023-01-07T18:00:00-05:00","isDaytime":true,"temperature":46,"temperatureUnit":"F","temperatureTrend":"falling","windSpeed":"2 mph","windDirection":"WSW","icon":"https://api.weather.gov/icons/land/day/snow/sct?size=medium","shortForecast":"Chance Snow Showers then Mostly Sunny","detailedForecast":"A chance of snow showers before 7am. Mostly sunny. High near 46, with temperatures falling to around 45 in the afternoon. West southwest wind around 2 mph."},{"number":3,"name":"Saturday Night","startTime":"2023-01-07T18:00:00-05:00","endTime":"2023-01-08T06:00:00-05:00","isDaytime":false,"temperature":34,"temperatureUnit":"F","temperatureTrend":"rising","windSpeed":"1 to 5 mph","windDirection":"E","icon":"https://api.weather.gov/icons/land/night/sct/rain_showers,40?size=medium","shortForecast":"Partly Cloudy then Chance Rain Showers","detailedForecast":"A chance of rain showers after 1am. Partly cloudy. Low around 34, with temperatures rising to around 35 overnight. East wind 1 to 5 mph. Chance of precipitation is 40%."},{"number":4,"name":"Sunday","startTime":"2023-01-08T06:00:00-05:00","endTime":"2023-01-08T18:00:00-05:00","isDaytime":true,"temperature":52,"temperatureUnit":"F","temperatureTrend":"falling","windSpeed":"7 mph","windDirection":"SSE","icon":"https://api.weather.gov/icons/land/day/rain_showers,60/rain_showers,80?size=medium","shortForecast":"Rain Showers","detailedForecast":"Rain showers. Cloudy. High near 52, with temperatures falling to around 40 in the afternoon. South southeast wind around 7 mph. Chance of precipitation is 80%. New rainfall amounts between a tenth and quarter of an inch possible."},{"number":5,"name":"Sunday Night","startTime":"2023-01-08T18:00:00-05:00","endTime":"2023-01-09T06:00:00-05:00","isDaytime":false,"temperature":36,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"7 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/night/rain_showers,60/ovc?size=medium","shortForecast":"Rain Showers Likely then Cloudy","detailedForecast":"Rain showers likely before 11pm. Cloudy, with a low around 36. West wind around 7 mph, with gusts as high as 16 mph. Chance of precipitation is 60%. New rainfall amounts between a tenth and quarter of an inch possible."},{"number":6,"name":"Monday","startTime":"2023-01-09T06:00:00-05:00","endTime":"2023-01-09T18:00:00-05:00","isDaytime":true,"temperature":46,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"6 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/day/bkn?size=medium","shortForecast":"Partly Sunny","detailedForecast":"Partly sunny, with a high near 46."},{"number":7,"name":"Monday Night","startTime":"2023-01-09T18:00:00-05:00","endTime":"2023-01-10T06:00:00-05:00","isDaytime":false,"temperature":29,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"3 mph","windDirection":"SW","icon":"https://api.weather.gov/icons/land/night/sct?size=medium","shortForecast":"Partly Cloudy","detailedForecast":"Partly cloudy, with a low around 29."},{"number":8,"name":"Tuesday","startTime":"2023-01-10T06:00:00-05:00","endTime":"2023-01-10T18:00:00-05:00","isDaytime":true,"temperature":52,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"3 mph","windDirection":"S","icon":"https://api.weather.gov/icons/land/day/bkn/rain_showers?size=medium","shortForecast":"Partly Sunny then Chance Rain Showers","detailedForecast":"A chance of rain showers after 3pm. Partly sunny, with a high near 52."},{"number":9,"name":"Tuesday Night","startTime":"2023-01-10T18:00:00-05:00","endTime":"2023-01-11T06:00:00-05:00","isDaytime":false,"temperature":32,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"2 mph","windDirection":"S","icon":"https://api.weather.gov/icons/land/night/rain_showers/bkn?size=medium","shortForecast":"Chance Rain Showers then Mostly Cloudy","detailedForecast":"A chance of rain showers before 7pm. Mostly cloudy, with a low around 32."},{"number":10,"name":"Wednesday","startTime":"2023-01-11T06:00:00-05:00","endTime":"2023-01-11T18:00:00-05:00","isDaytime":true,"temperature":53,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"3 mph","windDirection":"S","icon":"https://api.weather.gov/icons/land/day/bkn?size=medium","shortForecast":"Partly Sunny","detailedForecast":"Partly sunny, with a high near 53."},{"number":11,"name":"Wednesday Night","startTime":"2023-01-11T18:00:00-05:00","endTime":"2023-01-12T06:00:00-05:00","isDaytime":false,"temperature":35,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"3 mph","windDirection":"SE","icon":"https://api.weather.gov/icons/land/night/bkn?size=medium","shortForecast":"Mostly Cloudy","detailedForecast":"Mostly cloudy, with a low around 35."},{"number":12,"name":"Thursday","startTime":"2023-01-12T06:00:00-05:00","endTime":"2023-01-12T18:00:00-05:00","isDaytime":true,"temperature":54,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"5 mph","windDirection":"SSE","icon":"https://api.weather.gov/icons/land/day/bkn/rain,20?size=medium","shortForecast":"Mostly Cloudy then Slight Chance Light Rain","detailedForecast":"A slight chance of rain after 3pm. Mostly cloudy, with a high near 54. Chance of precipitation is 20%."},{"number":13,"name":"Thursday Night","startTime":"2023-01-12T18:00:00-05:00","endTime":"2023-01-13T06:00:00-05:00","isDaytime":false,"temperature":41,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"5 mph","windDirection":"SE","icon":"https://api.weather.gov/icons/land/night/rain,70?size=medium","shortForecast":"Light Rain Likely","detailedForecast":"Rain likely. Mostly cloudy, with a low around 41. Chance of precipitation is 70%."},{"number":14,"name":"Friday","startTime":"2023-01-13T06:00:00-05:00","endTime":"2023-01-13T18:00:00-05:00","isDaytime":true,"temperature":49,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"5 mph","windDirection":"ENE","icon":"https://api.weather.gov/icons/land/day/rain,60?size=medium","shortForecast":"Light Rain Likely","detailedForecast":"Rain likely. Mostly cloudy, with a high near 49. Chance of precipitation is 60%."}]}
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

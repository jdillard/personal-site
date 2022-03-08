---
### THIS FILE IS AUTO-GENERATED - DO NOT EDIT ###
layout: page
title: Jackson Falls, Illinois Climbing Weather - Current, Past, and Forecasted Report
title_override: Jackson Falls<br /><small>Climbing Weather</small>
description: A lightweight weather report for Jackson Falls, Illinois. Optimized for slow internet connections.
js_includes:
  - weather.js
---

<section class="measure center lh-copy f5-ns f6 ph2 mv4" style="text-align: justify;">
<strong>"Is it dry?"</strong>, an oft-repeated, age-old question. Here are real-time,
precipitation-focused reports of current, past, and forecasted climbing weather for Jackson Falls, Illinois.
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
<section id="weather" data-crag="jackson-falls-illinois" class="mv4-ns mv3 ph2 center"></section>
<section id="nearby" class="tc lh-copy">
  <h3>Nearby Crags</h3>
<a class="nowrap no-underline fancy-link relative light-red mh3" href="/crags/red-river-gorge-kentucky-weather.html">Red River Gorge</a>
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
  var weekly_PAH_116_58 = {"updated":"2022-03-08T08:15:48+00:00","units":"us","forecastGenerator":"BaselineForecastGenerator","generatedAt":"2022-03-08T08:38:01+00:00","updateTime":"2022-03-08T08:15:48+00:00","validTimes":"2022-03-08T02:00:00+00:00/P7DT11H","elevation":{"unitCode":"wmoUnit:m","value":99.9744},"periods":[{"number":1,"name":"Overnight","startTime":"2022-03-08T02:00:00-06:00","endTime":"2022-03-08T06:00:00-06:00","isDaytime":false,"temperature":32,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"5 mph","windDirection":"N","icon":"https://api.weather.gov/icons/land/night/bkn?size=medium","shortForecast":"Mostly Cloudy","detailedForecast":"Mostly cloudy, with a low around 32. North wind around 5 mph."},{"number":2,"name":"Tuesday","startTime":"2022-03-08T06:00:00-06:00","endTime":"2022-03-08T18:00:00-06:00","isDaytime":true,"temperature":49,"temperatureUnit":"F","temperatureTrend":"falling","windSpeed":"1 to 5 mph","windDirection":"ENE","icon":"https://api.weather.gov/icons/land/day/bkn?size=medium","shortForecast":"Mostly Cloudy","detailedForecast":"Mostly cloudy. High near 49, with temperatures falling to around 47 in the afternoon. East northeast wind 1 to 5 mph."},{"number":3,"name":"Tuesday Night","startTime":"2022-03-08T18:00:00-06:00","endTime":"2022-03-09T06:00:00-06:00","isDaytime":false,"temperature":36,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"2 mph","windDirection":"NNE","icon":"https://api.weather.gov/icons/land/night/bkn?size=medium","shortForecast":"Mostly Cloudy","detailedForecast":"Mostly cloudy, with a low around 36. North northeast wind around 2 mph."},{"number":4,"name":"Wednesday","startTime":"2022-03-09T06:00:00-06:00","endTime":"2022-03-09T18:00:00-06:00","isDaytime":true,"temperature":55,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"2 to 7 mph","windDirection":"NNE","icon":"https://api.weather.gov/icons/land/day/few?size=medium","shortForecast":"Sunny","detailedForecast":"Sunny, with a high near 55. North northeast wind 2 to 7 mph."},{"number":5,"name":"Wednesday Night","startTime":"2022-03-09T18:00:00-06:00","endTime":"2022-03-10T06:00:00-06:00","isDaytime":false,"temperature":35,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"3 mph","windDirection":"NE","icon":"https://api.weather.gov/icons/land/night/few?size=medium","shortForecast":"Mostly Clear","detailedForecast":"Mostly clear, with a low around 35. Northeast wind around 3 mph."},{"number":6,"name":"Thursday","startTime":"2022-03-10T06:00:00-06:00","endTime":"2022-03-10T18:00:00-06:00","isDaytime":true,"temperature":59,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"6 mph","windDirection":"E","icon":"https://api.weather.gov/icons/land/day/few?size=medium","shortForecast":"Sunny","detailedForecast":"Sunny, with a high near 59. East wind around 6 mph."},{"number":7,"name":"Thursday Night","startTime":"2022-03-10T18:00:00-06:00","endTime":"2022-03-11T06:00:00-06:00","isDaytime":false,"temperature":38,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"2 mph","windDirection":"ESE","icon":"https://api.weather.gov/icons/land/night/few?size=medium","shortForecast":"Mostly Clear","detailedForecast":"Mostly clear, with a low around 38. East southeast wind around 2 mph."},{"number":8,"name":"Friday","startTime":"2022-03-11T06:00:00-06:00","endTime":"2022-03-11T18:00:00-06:00","isDaytime":true,"temperature":52,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"3 to 15 mph","windDirection":"NNW","icon":"https://api.weather.gov/icons/land/day/bkn/rain?size=medium","shortForecast":"Partly Sunny then Light Rain Likely","detailedForecast":"Rain likely after noon. Partly sunny, with a high near 52. North northwest wind 3 to 15 mph, with gusts as high as 23 mph."},{"number":9,"name":"Friday Night","startTime":"2022-03-11T18:00:00-06:00","endTime":"2022-03-12T06:00:00-06:00","isDaytime":false,"temperature":20,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"14 mph","windDirection":"NW","icon":"https://api.weather.gov/icons/land/night/snow/bkn?size=medium","shortForecast":"Rain And Snow Likely then Mostly Cloudy","detailedForecast":"Rain likely before 7pm, then rain and snow likely between 7pm and midnight. Mostly cloudy, with a low around 20. Northwest wind around 14 mph, with gusts as high as 23 mph. New snow accumulation of less than one inch possible."},{"number":10,"name":"Saturday","startTime":"2022-03-12T06:00:00-06:00","endTime":"2022-03-12T18:00:00-06:00","isDaytime":true,"temperature":35,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"8 to 15 mph","windDirection":"NW","icon":"https://api.weather.gov/icons/land/day/few?size=medium","shortForecast":"Sunny","detailedForecast":"Sunny, with a high near 35. Northwest wind 8 to 15 mph, with gusts as high as 21 mph."},{"number":11,"name":"Saturday Night","startTime":"2022-03-12T18:00:00-06:00","endTime":"2022-03-13T06:00:00-05:00","isDaytime":false,"temperature":21,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"6 mph","windDirection":"WSW","icon":"https://api.weather.gov/icons/land/night/skc?size=medium","shortForecast":"Clear","detailedForecast":"Clear, with a low around 21. West southwest wind around 6 mph."},{"number":12,"name":"Sunday","startTime":"2022-03-13T06:00:00-05:00","endTime":"2022-03-13T18:00:00-05:00","isDaytime":true,"temperature":52,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"5 to 17 mph","windDirection":"SSW","icon":"https://api.weather.gov/icons/land/day/few?size=medium","shortForecast":"Sunny","detailedForecast":"Sunny, with a high near 52. South southwest wind 5 to 17 mph, with gusts as high as 21 mph."},{"number":13,"name":"Sunday Night","startTime":"2022-03-13T18:00:00-05:00","endTime":"2022-03-14T06:00:00-05:00","isDaytime":false,"temperature":38,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"13 mph","windDirection":"SSW","icon":"https://api.weather.gov/icons/land/night/few?size=medium","shortForecast":"Mostly Clear","detailedForecast":"Mostly clear, with a low around 38. South southwest wind around 13 mph, with gusts as high as 20 mph."},{"number":14,"name":"Monday","startTime":"2022-03-14T06:00:00-05:00","endTime":"2022-03-14T18:00:00-05:00","isDaytime":true,"temperature":60,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"10 to 14 mph","windDirection":"SSW","icon":"https://api.weather.gov/icons/land/day/sct?size=medium","shortForecast":"Mostly Sunny","detailedForecast":"Mostly sunny, with a high near 60. South southwest wind 10 to 14 mph, with gusts as high as 24 mph."}]}
  var hourly_PAH_116_58 = {"correlationId":"6b2e1f","title":"Unexpected Problem","type":"https://api.weather.gov/problems/UnexpectedProblem","status":500,"detail":"An unexpected problem has occurred.","instance":"https://api.weather.gov/requests/6b2e1f"}
  var crags_config = [
  {
    "name": "Jackson Falls",
    "note": "The walls offer slopers, various sized pockets, roofs, and slabs.",
    "mountainProject": "https://www.mountainproject.com/area/106017458/jackson-falls",
    "station": "KPAH",
    "office": "PAH/116,58",
    "coordinates": [
      -88.682,
      37.510
    ]
  }
]</script>

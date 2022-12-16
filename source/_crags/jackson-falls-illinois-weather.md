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
  var weekly_PAH_116_58 = {"updated":"2022-12-16T08:14:58+00:00","units":"us","forecastGenerator":"BaselineForecastGenerator","generatedAt":"2022-12-16T08:35:28+00:00","updateTime":"2022-12-16T08:14:58+00:00","validTimes":"2022-12-16T02:00:00+00:00/P7DT23H","elevation":{"unitCode":"wmoUnit:m","value":99.9744},"periods":[{"number":1,"name":"Overnight","startTime":"2022-12-16T02:00:00-06:00","endTime":"2022-12-16T06:00:00-06:00","isDaytime":false,"temperature":30,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"6 mph","windDirection":"SW","icon":"https://api.weather.gov/icons/land/night/skc?size=medium","shortForecast":"Clear","detailedForecast":"Clear, with a low around 30. Southwest wind around 6 mph."},{"number":2,"name":"Friday","startTime":"2022-12-16T06:00:00-06:00","endTime":"2022-12-16T18:00:00-06:00","isDaytime":true,"temperature":43,"temperatureUnit":"F","temperatureTrend":"falling","windSpeed":"7 to 17 mph","windDirection":"WSW","icon":"https://api.weather.gov/icons/land/day/few?size=medium","shortForecast":"Sunny","detailedForecast":"Sunny. High near 43, with temperatures falling to around 38 in the afternoon. West southwest wind 7 to 17 mph, with gusts as high as 28 mph."},{"number":3,"name":"Friday Night","startTime":"2022-12-16T18:00:00-06:00","endTime":"2022-12-17T06:00:00-06:00","isDaytime":false,"temperature":25,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"8 mph","windDirection":"WSW","icon":"https://api.weather.gov/icons/land/night/few?size=medium","shortForecast":"Mostly Clear","detailedForecast":"Mostly clear, with a low around 25. West southwest wind around 8 mph, with gusts as high as 22 mph."},{"number":4,"name":"Saturday","startTime":"2022-12-17T06:00:00-06:00","endTime":"2022-12-17T18:00:00-06:00","isDaytime":true,"temperature":37,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"7 to 13 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/day/sct?size=medium","shortForecast":"Mostly Sunny","detailedForecast":"Mostly sunny, with a high near 37. West wind 7 to 13 mph, with gusts as high as 20 mph."},{"number":5,"name":"Saturday Night","startTime":"2022-12-17T18:00:00-06:00","endTime":"2022-12-18T06:00:00-06:00","isDaytime":false,"temperature":21,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"5 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/night/few?size=medium","shortForecast":"Mostly Clear","detailedForecast":"Mostly clear, with a low around 21. West wind around 5 mph."},{"number":6,"name":"Sunday","startTime":"2022-12-18T06:00:00-06:00","endTime":"2022-12-18T18:00:00-06:00","isDaytime":true,"temperature":39,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"5 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/day/few?size=medium","shortForecast":"Sunny","detailedForecast":"Sunny, with a high near 39. West wind around 5 mph."},{"number":7,"name":"Sunday Night","startTime":"2022-12-18T18:00:00-06:00","endTime":"2022-12-19T06:00:00-06:00","isDaytime":false,"temperature":24,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"2 mph","windDirection":"SSE","icon":"https://api.weather.gov/icons/land/night/bkn?size=medium","shortForecast":"Mostly Cloudy","detailedForecast":"Mostly cloudy, with a low around 24. South southeast wind around 2 mph."},{"number":8,"name":"Monday","startTime":"2022-12-19T06:00:00-06:00","endTime":"2022-12-19T18:00:00-06:00","isDaytime":true,"temperature":40,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"3 mph","windDirection":"SE","icon":"https://api.weather.gov/icons/land/day/bkn/rain_showers?size=medium","shortForecast":"Mostly Cloudy then Chance Rain Showers","detailedForecast":"A chance of rain showers after noon. Mostly cloudy, with a high near 40. Southeast wind around 3 mph."},{"number":9,"name":"Monday Night","startTime":"2022-12-19T18:00:00-06:00","endTime":"2022-12-20T06:00:00-06:00","isDaytime":false,"temperature":29,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"1 mph","windDirection":"SSW","icon":"https://api.weather.gov/icons/land/night/bkn?size=medium","shortForecast":"Mostly Cloudy","detailedForecast":"Mostly cloudy, with a low around 29. South southwest wind around 1 mph."},{"number":10,"name":"Tuesday","startTime":"2022-12-20T06:00:00-06:00","endTime":"2022-12-20T18:00:00-06:00","isDaytime":true,"temperature":37,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"2 to 8 mph","windDirection":"NNW","icon":"https://api.weather.gov/icons/land/day/bkn?size=medium","shortForecast":"Partly Sunny","detailedForecast":"Partly sunny, with a high near 37. North northwest wind 2 to 8 mph."},{"number":11,"name":"Tuesday Night","startTime":"2022-12-20T18:00:00-06:00","endTime":"2022-12-21T06:00:00-06:00","isDaytime":false,"temperature":17,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"7 mph","windDirection":"N","icon":"https://api.weather.gov/icons/land/night/sct?size=medium","shortForecast":"Partly Cloudy","detailedForecast":"Partly cloudy, with a low around 17. North wind around 7 mph."},{"number":12,"name":"Wednesday","startTime":"2022-12-21T06:00:00-06:00","endTime":"2022-12-21T18:00:00-06:00","isDaytime":true,"temperature":28,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"5 to 8 mph","windDirection":"NNE","icon":"https://api.weather.gov/icons/land/day/bkn?size=medium","shortForecast":"Partly Sunny","detailedForecast":"Partly sunny, with a high near 28. North northeast wind 5 to 8 mph."},{"number":13,"name":"Wednesday Night","startTime":"2022-12-21T18:00:00-06:00","endTime":"2022-12-22T06:00:00-06:00","isDaytime":false,"temperature":14,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"5 mph","windDirection":"N","icon":"https://api.weather.gov/icons/land/night/snow?size=medium","shortForecast":"Chance Light Snow","detailedForecast":"A chance of snow. Mostly cloudy, with a low around 14. North wind around 5 mph."},{"number":14,"name":"Thursday","startTime":"2022-12-22T06:00:00-06:00","endTime":"2022-12-22T18:00:00-06:00","isDaytime":true,"temperature":24,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"6 to 12 mph","windDirection":"NNW","icon":"https://api.weather.gov/icons/land/day/snow?size=medium","shortForecast":"Chance Light Snow","detailedForecast":"A chance of snow. Partly sunny, with a high near 24. North northwest wind 6 to 12 mph, with gusts as high as 23 mph. New snow accumulation of less than half an inch possible."}]}
  var hourly_PAH_116_58 = false
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

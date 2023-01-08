---
### THIS FILE IS AUTO-GENERATED - DO NOT EDIT ###
layout: page
title: Mount Erie, Washington Climbing Weather - Current, Past, and Forecasted Report
title_override: Mount Erie<br /><small>Climbing Weather</small>
description: A lightweight weather report for Mount Erie, Washington. Optimized for slow internet connections.
js_includes:
  - weather.js
---

<section class="measure center lh-copy f5-ns f6 ph2 mv4" style="text-align: justify;">
<strong>"Is it dry?"</strong>, an oft-repeated, age-old question. Here are real-time,
precipitation-focused reports of current, past, and forecasted climbing weather for Mount Erie, Washington.
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
<section id="weather" data-crag="mount-erie-washington" class="mv4-ns mv3 ph2 center"></section>
<section id="nearby" class="tc lh-copy">
  <h3>Nearby Crags</h3>
<a class="nowrap no-underline fancy-link relative light-red mh3" href="/crags/icicle-creek-washington-weather.html">Icicle Creek</a>
<a class="nowrap no-underline fancy-link relative light-red mh3" href="/crags/tieton-river-rock-washington-weather.html">Tieton River Rock</a>
<a class="nowrap no-underline fancy-link relative light-red mh3" href="/crags/vantage-washington-weather.html">Vantage</a>
<a class="nowrap no-underline fancy-link relative light-red mh3" href="/crags/index-washington-weather.html">Index</a>
<a class="nowrap no-underline fancy-link relative light-red mh3" href="/crags/darrington-washington-weather.html">Darrington</a>
<a class="nowrap no-underline fancy-link relative light-red mh3" href="/crags/smith-rock-oregon-weather.html">Smith Rock</a>
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
  var weekly_SEW_123_109 = {"updated":"2023-01-08T07:48:15+00:00","units":"us","forecastGenerator":"BaselineForecastGenerator","generatedAt":"2023-01-08T08:35:10+00:00","updateTime":"2023-01-08T07:48:15+00:00","validTimes":"2023-01-08T01:00:00+00:00/P7D","elevation":{"unitCode":"wmoUnit:m","value":238.9632},"periods":[{"number":1,"name":"Overnight","startTime":"2023-01-08T00:00:00-08:00","endTime":"2023-01-08T06:00:00-08:00","isDaytime":false,"temperature":40,"temperatureUnit":"F","temperatureTrend":"rising","windSpeed":"8 mph","windDirection":"E","icon":"https://api.weather.gov/icons/land/night/rain,70?size=medium","shortForecast":"Light Rain Likely","detailedForecast":"A chance of rain showers before 4am, then rain likely. Mostly cloudy. Low around 40, with temperatures rising to around 42 overnight. East wind around 8 mph. Chance of precipitation is 70%. New rainfall amounts less than a tenth of an inch possible."},{"number":2,"name":"Sunday","startTime":"2023-01-08T06:00:00-08:00","endTime":"2023-01-08T18:00:00-08:00","isDaytime":true,"temperature":48,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"7 to 20 mph","windDirection":"ESE","icon":"https://api.weather.gov/icons/land/day/rain,80?size=medium","shortForecast":"Light Rain","detailedForecast":"Rain. Cloudy, with a high near 48. East southeast wind 7 to 20 mph, with gusts as high as 25 mph. Chance of precipitation is 80%. New rainfall amounts less than a tenth of an inch possible."},{"number":3,"name":"Sunday Night","startTime":"2023-01-08T18:00:00-08:00","endTime":"2023-01-09T06:00:00-08:00","isDaytime":false,"temperature":41,"temperatureUnit":"F","temperatureTrend":"rising","windSpeed":"12 to 22 mph","windDirection":"SE","icon":"https://api.weather.gov/icons/land/night/rain,50/rain,30?size=medium","shortForecast":"Chance Light Rain","detailedForecast":"A chance of rain. Mostly cloudy. Low around 41, with temperatures rising to around 43 overnight. Southeast wind 12 to 22 mph, with gusts as high as 29 mph. Chance of precipitation is 50%. New rainfall amounts less than a tenth of an inch possible."},{"number":4,"name":"Monday","startTime":"2023-01-09T06:00:00-08:00","endTime":"2023-01-09T18:00:00-08:00","isDaytime":true,"temperature":48,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"12 mph","windDirection":"ESE","icon":"https://api.weather.gov/icons/land/day/rain,60/rain,70?size=medium","shortForecast":"Light Rain Likely","detailedForecast":"Rain likely. Mostly cloudy, with a high near 48. East southeast wind around 12 mph. Chance of precipitation is 70%. New rainfall amounts less than a tenth of an inch possible."},{"number":5,"name":"Monday Night","startTime":"2023-01-09T18:00:00-08:00","endTime":"2023-01-10T06:00:00-08:00","isDaytime":false,"temperature":39,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"7 to 13 mph","windDirection":"SSE","icon":"https://api.weather.gov/icons/land/night/rain,70/rain,50?size=medium","shortForecast":"Light Rain Likely","detailedForecast":"Rain likely. Mostly cloudy, with a low around 39. South southeast wind 7 to 13 mph, with gusts as high as 22 mph. Chance of precipitation is 70%. New rainfall amounts less than a tenth of an inch possible."},{"number":6,"name":"Tuesday","startTime":"2023-01-10T06:00:00-08:00","endTime":"2023-01-10T18:00:00-08:00","isDaytime":true,"temperature":47,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"6 to 10 mph","windDirection":"SE","icon":"https://api.weather.gov/icons/land/day/rain,40?size=medium","shortForecast":"Chance Light Rain","detailedForecast":"A chance of rain. Mostly cloudy, with a high near 47. Chance of precipitation is 40%. New rainfall amounts less than a tenth of an inch possible."},{"number":7,"name":"Tuesday Night","startTime":"2023-01-10T18:00:00-08:00","endTime":"2023-01-11T06:00:00-08:00","isDaytime":false,"temperature":38,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"6 to 12 mph","windDirection":"SE","icon":"https://api.weather.gov/icons/land/night/rain,40/rain,30?size=medium","shortForecast":"Chance Light Rain","detailedForecast":"A chance of rain. Mostly cloudy, with a low around 38. Chance of precipitation is 40%."},{"number":8,"name":"Wednesday","startTime":"2023-01-11T06:00:00-08:00","endTime":"2023-01-11T18:00:00-08:00","isDaytime":true,"temperature":48,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"13 mph","windDirection":"SE","icon":"https://api.weather.gov/icons/land/day/rain?size=medium","shortForecast":"Light Rain","detailedForecast":"Rain. Mostly cloudy, with a high near 48."},{"number":9,"name":"Wednesday Night","startTime":"2023-01-11T18:00:00-08:00","endTime":"2023-01-12T06:00:00-08:00","isDaytime":false,"temperature":41,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"14 mph","windDirection":"SE","icon":"https://api.weather.gov/icons/land/night/rain?size=medium","shortForecast":"Light Rain","detailedForecast":"Rain. Cloudy, with a low around 41."},{"number":10,"name":"Thursday","startTime":"2023-01-12T06:00:00-08:00","endTime":"2023-01-12T18:00:00-08:00","isDaytime":true,"temperature":49,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"13 mph","windDirection":"ESE","icon":"https://api.weather.gov/icons/land/day/rain?size=medium","shortForecast":"Light Rain","detailedForecast":"Rain. Cloudy, with a high near 49."},{"number":11,"name":"Thursday Night","startTime":"2023-01-12T18:00:00-08:00","endTime":"2023-01-13T06:00:00-08:00","isDaytime":false,"temperature":42,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"14 mph","windDirection":"SE","icon":"https://api.weather.gov/icons/land/night/rain?size=medium","shortForecast":"Light Rain","detailedForecast":"Rain. Cloudy, with a low around 42."},{"number":12,"name":"Friday","startTime":"2023-01-13T06:00:00-08:00","endTime":"2023-01-13T18:00:00-08:00","isDaytime":true,"temperature":49,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"13 mph","windDirection":"SE","icon":"https://api.weather.gov/icons/land/day/rain?size=medium","shortForecast":"Light Rain","detailedForecast":"Rain. Cloudy, with a high near 49."},{"number":13,"name":"Friday Night","startTime":"2023-01-13T18:00:00-08:00","endTime":"2023-01-14T06:00:00-08:00","isDaytime":false,"temperature":41,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"12 mph","windDirection":"SE","icon":"https://api.weather.gov/icons/land/night/rain?size=medium","shortForecast":"Light Rain Likely","detailedForecast":"Rain likely. Mostly cloudy, with a low around 41."},{"number":14,"name":"Saturday","startTime":"2023-01-14T06:00:00-08:00","endTime":"2023-01-14T18:00:00-08:00","isDaytime":true,"temperature":49,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"9 mph","windDirection":"ESE","icon":"https://api.weather.gov/icons/land/day/rain?size=medium","shortForecast":"Chance Light Rain","detailedForecast":"A chance of rain. Mostly cloudy, with a high near 49."}]}
  var hourly_SEW_123_109 = false
  var crags_config = [
  {
    "name": "Mount Erie",
    "note": "Highly textured and featured diorite.",
    "mountainProject": "https://www.mountainproject.com/area/106413714/mount-erie",
    "station": "KNUW",
    "office": "SEW/123,109",
    "coordinates": [
      -122.627,
      48.453
    ]
  }
]</script>

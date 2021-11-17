---
### THIS FILE IS AUTO-GENERATED - DO NOT EDIT ###
layout: page
title: McKinney Falls, Texas Climbing Weather - Current, Past, and Forecasted Report
title_override: McKinney Falls<br /><small>Climbing Weather</small>
description: A lightweight weather report for McKinney Falls, Texas. Optimized for slow internet connections.
js_includes:
  - weather.js
---

<section class="measure center lh-copy f5-ns f6 ph2 mv4" style="text-align: justify;">
<strong>"Is it dry?"</strong>, an oft-repeated, age-old question. Here are real-time,
precipitation-focused reports of current, past, and forecasted climbing weather for McKinney Falls, Texas.
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
<section id="weather" data-crag="mckinney-falls-texas" class="mv4-ns mv3 ph2 center"></section>
<section id="nearby" class="tc lh-copy">
  <h3>Nearby Crags</h3>
<a class="nowrap no-underline fancy-link relative light-red mh3" href="/crags/the-greenbelt-texas-weather.html">The Greenbelt</a>
<a class="nowrap no-underline fancy-link relative light-red mh3" href="/crags/continental-ranch-texas-weather.html">Continental Ranch</a>
<a class="nowrap no-underline fancy-link relative light-red mh3" href="/crags/pace-bend-park-texas-weather.html">Pace Bend Park</a>
<a class="nowrap no-underline fancy-link relative light-red mh3" href="/crags/reimers-ranch-texas-weather.html">Reimer's Ranch</a>
<a class="nowrap no-underline fancy-link relative light-red mh3" href="/crags/cochise-stronghold-arizona-weather.html">Cochise Stronghold</a>
<a class="nowrap no-underline fancy-link relative light-red mh3" href="/crags/enchanted-rock-texas-weather.html">Enchanted Rock</a>
<a class="nowrap no-underline fancy-link relative light-red mh3" href="/crags/horseshoe-canyon-ranch-arkansas-weather.html">Horseshoe Canyon Ranch</a>
<a class="nowrap no-underline fancy-link relative light-red mh3" href="/crags/last-chance-canyon-new-mexico-weather.html">Last Chance Canyon</a>
<a class="nowrap no-underline fancy-link relative light-red mh3" href="/crags/georgetown-texas-weather.html">Georgetown</a>
<a class="nowrap no-underline fancy-link relative light-red mh3" href="/crags/hueco-tanks-texas-weather.html">Hueco Tanks</a>
</section>
<section id="nearby" class="tc lh-copy">
  <h3>Other Metros</h3>
  <select class="ma1 bg-near-white pa2" id="stateSel">
    <option value="Texas" selected>Texas</option>
    <option value="Washington">Washington</option>
    <option value="Colorado">Colorado</option>
    <option value="Tennessee">Tennessee</option>
    <option value="Utah">Utah</option>
    <option value="California">California</option>
  </select>
  <select class="ma1 bg-near-white pa2" id="citySel">
    <option value="Austin" selected>Austin</option>
  </select>
  <a id="selectMetro" class="f6 link dim ph3 pv2 ma1 dib white bg-light-red" href="/crags/austin-texas-weather.html">Select Metro</a>
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
  var weekly_EWX_156_86 = {"updated":"2021-11-17T07:20:57+00:00","units":"us","forecastGenerator":"BaselineForecastGenerator","generatedAt":"2021-11-17T08:44:41+00:00","updateTime":"2021-11-17T07:20:57+00:00","validTimes":"2021-11-17T01:00:00+00:00/P8DT6H","elevation":{"unitCode":"wmoUnit:m","value":156.972},"periods":[{"number":1,"name":"Overnight","startTime":"2021-11-17T02:00:00-06:00","endTime":"2021-11-17T06:00:00-06:00","isDaytime":false,"temperature":61,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"10 to 15 mph","windDirection":"S","icon":"https://api.weather.gov/icons/land/night/sct?size=medium","shortForecast":"Partly Cloudy","detailedForecast":"Partly cloudy, with a low around 61. South wind 10 to 15 mph, with gusts as high as 25 mph."},{"number":2,"name":"Wednesday","startTime":"2021-11-17T06:00:00-06:00","endTime":"2021-11-17T18:00:00-06:00","isDaytime":true,"temperature":82,"temperatureUnit":"F","temperatureTrend":"falling","windSpeed":"10 to 15 mph","windDirection":"S","icon":"https://api.weather.gov/icons/land/day/few?size=medium","shortForecast":"Sunny","detailedForecast":"Sunny. High near 82, with temperatures falling to around 78 in the afternoon. South wind 10 to 15 mph, with gusts as high as 25 mph."},{"number":3,"name":"Wednesday Night","startTime":"2021-11-17T18:00:00-06:00","endTime":"2021-11-18T06:00:00-06:00","isDaytime":false,"temperature":51,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"5 to 15 mph","windDirection":"ENE","icon":"https://api.weather.gov/icons/land/night/rain_showers,20?size=medium","shortForecast":"Slight Chance Rain Showers","detailedForecast":"A slight chance of rain showers after 9pm. Mostly cloudy, with a low around 51. East northeast wind 5 to 15 mph, with gusts as high as 25 mph. Chance of precipitation is 20%. New rainfall amounts less than a tenth of an inch possible."},{"number":4,"name":"Thursday","startTime":"2021-11-18T06:00:00-06:00","endTime":"2021-11-18T18:00:00-06:00","isDaytime":true,"temperature":63,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"15 to 20 mph","windDirection":"NNE","icon":"https://api.weather.gov/icons/land/day/bkn?size=medium","shortForecast":"Partly Sunny","detailedForecast":"Partly sunny, with a high near 63. North northeast wind 15 to 20 mph, with gusts as high as 30 mph."},{"number":5,"name":"Thursday Night","startTime":"2021-11-18T18:00:00-06:00","endTime":"2021-11-19T06:00:00-06:00","isDaytime":false,"temperature":40,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"5 to 15 mph","windDirection":"NNE","icon":"https://api.weather.gov/icons/land/night/sct?size=medium","shortForecast":"Partly Cloudy","detailedForecast":"Partly cloudy, with a low around 40. North northeast wind 5 to 15 mph, with gusts as high as 25 mph."},{"number":6,"name":"Friday","startTime":"2021-11-19T06:00:00-06:00","endTime":"2021-11-19T18:00:00-06:00","isDaytime":true,"temperature":65,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"5 mph","windDirection":"ENE","icon":"https://api.weather.gov/icons/land/day/few?size=medium","shortForecast":"Sunny","detailedForecast":"Sunny, with a high near 65. East northeast wind around 5 mph."},{"number":7,"name":"Friday Night","startTime":"2021-11-19T18:00:00-06:00","endTime":"2021-11-20T06:00:00-06:00","isDaytime":false,"temperature":44,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"5 mph","windDirection":"SSE","icon":"https://api.weather.gov/icons/land/night/few?size=medium","shortForecast":"Mostly Clear","detailedForecast":"Mostly clear, with a low around 44. South southeast wind around 5 mph."},{"number":8,"name":"Saturday","startTime":"2021-11-20T06:00:00-06:00","endTime":"2021-11-20T18:00:00-06:00","isDaytime":true,"temperature":74,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"5 to 15 mph","windDirection":"S","icon":"https://api.weather.gov/icons/land/day/sct?size=medium","shortForecast":"Mostly Sunny","detailedForecast":"Mostly sunny, with a high near 74. South wind 5 to 15 mph, with gusts as high as 25 mph."},{"number":9,"name":"Saturday Night","startTime":"2021-11-20T18:00:00-06:00","endTime":"2021-11-21T06:00:00-06:00","isDaytime":false,"temperature":57,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"5 to 10 mph","windDirection":"S","icon":"https://api.weather.gov/icons/land/night/sct?size=medium","shortForecast":"Partly Cloudy","detailedForecast":"Partly cloudy, with a low around 57. South wind 5 to 10 mph."},{"number":10,"name":"Sunday","startTime":"2021-11-21T06:00:00-06:00","endTime":"2021-11-21T18:00:00-06:00","isDaytime":true,"temperature":79,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"5 to 10 mph","windDirection":"S","icon":"https://api.weather.gov/icons/land/day/bkn?size=medium","shortForecast":"Partly Sunny","detailedForecast":"Partly sunny, with a high near 79."},{"number":11,"name":"Sunday Night","startTime":"2021-11-21T18:00:00-06:00","endTime":"2021-11-22T06:00:00-06:00","isDaytime":false,"temperature":53,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"0 to 5 mph","windDirection":"SSW","icon":"https://api.weather.gov/icons/land/night/bkn/rain_showers,20?size=medium","shortForecast":"Mostly Cloudy then Slight Chance Rain Showers","detailedForecast":"A slight chance of rain showers after midnight. Mostly cloudy, with a low around 53. Chance of precipitation is 20%."},{"number":12,"name":"Monday","startTime":"2021-11-22T06:00:00-06:00","endTime":"2021-11-22T18:00:00-06:00","isDaytime":true,"temperature":70,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"10 to 15 mph","windDirection":"N","icon":"https://api.weather.gov/icons/land/day/bkn?size=medium","shortForecast":"Partly Sunny","detailedForecast":"Partly sunny, with a high near 70."},{"number":13,"name":"Monday Night","startTime":"2021-11-22T18:00:00-06:00","endTime":"2021-11-23T06:00:00-06:00","isDaytime":false,"temperature":45,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"0 to 10 mph","windDirection":"NE","icon":"https://api.weather.gov/icons/land/night/sct?size=medium","shortForecast":"Partly Cloudy","detailedForecast":"Partly cloudy, with a low around 45."},{"number":14,"name":"Tuesday","startTime":"2021-11-23T06:00:00-06:00","endTime":"2021-11-23T18:00:00-06:00","isDaytime":true,"temperature":70,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"0 to 10 mph","windDirection":"SE","icon":"https://api.weather.gov/icons/land/day/sct?size=medium","shortForecast":"Mostly Sunny","detailedForecast":"Mostly sunny, with a high near 70."}]}
  var hourly_EWX_156_86 = {"correlationId":"56af5b28","title":"Unexpected Problem","type":"https://api.weather.gov/problems/UnexpectedProblem","status":500,"detail":"An unexpected problem has occurred.","instance":"https://api.weather.gov/requests/56af5b28"}
  var crags_config = [
  {
    "name": "McKinney Falls",
    "note": "Porous limestone that can take a couple days to dry out.",
    "mountainProject": "https://www.mountainproject.com/area/106265889/mckinney-falls-state-park",
    "station": "KAUS",
    "office": "EWX/156,86",
    "coordinates": [
      -97.722,
      30.181
    ]
  }
]</script>

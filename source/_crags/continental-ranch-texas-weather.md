---
### THIS FILE IS AUTO-GENERATED - DO NOT EDIT ###
layout: page
title: Continental Ranch, Texas Climbing Weather - Current, Past, and Forecasted
title_override: Continental Ranch<br /><small>Climbing Weather</small>
description: A lightweight weather report for Continental Ranch, Texas. Optimized for slow internet connections.
js_includes:
  - weather.js
---

<section class="measure center lh-copy f5-ns f6 ph2 mv4" style="text-align: justify;">
<strong>"Is it dry?"</strong>, an oft-repeated, age-old question. Here are real-time,
precipitation-focused reports of current, past, and forecasted climbing weather for Continental Ranch, Texas.
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
<section id="weather" data-crag="continental-ranch-texas" class="mv4-ns mv3 ph2 center"></section>
<section id="nearby" class="tc lh-copy">
  <h3>Nearby Crags</h3>
<a class="nowrap no-underline fancy-link relative light-red mh3" href="/crags/the-greenbelt-texas-weather.html">The Greenbelt</a>
<a class="nowrap no-underline fancy-link relative light-red mh3" href="/crags/pace-bend-park-texas-weather.html">Pace Bend Park</a>
<a class="nowrap no-underline fancy-link relative light-red mh3" href="/crags/reimers-ranch-texas-weather.html">Reimer's Ranch</a>
<a class="nowrap no-underline fancy-link relative light-red mh3" href="/crags/cochise-stronghold-arizona-weather.html">Cochise Stronghold</a>
<a class="nowrap no-underline fancy-link relative light-red mh3" href="/crags/enchanted-rock-texas-weather.html">Enchanted Rock</a>
<a class="nowrap no-underline fancy-link relative light-red mh3" href="/crags/horseshoe-canyon-ranch-arkansas-weather.html">Horseshoe Canyon Ranch</a>
<a class="nowrap no-underline fancy-link relative light-red mh3" href="/crags/last-chance-canyon-new-mexico-weather.html">Last Chance Canyon</a>
<a class="nowrap no-underline fancy-link relative light-red mh3" href="/crags/georgetown-texas-weather.html">Georgetown</a>
<a class="nowrap no-underline fancy-link relative light-red mh3" href="/crags/mckinney-falls-texas-weather.html">McKinney Falls</a>
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
  var weekly_EWX_14_74 = {"units":"us","forecastGenerator":"BaselineForecastGenerator","generatedAt":"2024-11-29T08:36:16+00:00","updateTime":"2024-11-29T07:22:36+00:00","validTimes":"2024-11-29T01:00:00+00:00/P8D","elevation":{"unitCode":"wmoUnit:m","value":380.0856},"periods":[{"number":1,"name":"Overnight","startTime":"2024-11-29T02:00:00-06:00","endTime":"2024-11-29T06:00:00-06:00","isDaytime":false,"temperature":39,"temperatureUnit":"F","temperatureTrend":"","probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"windSpeed":"5 mph","windDirection":"NNW","icon":"https://api.weather.gov/icons/land/night/sct?size=medium","shortForecast":"Partly Cloudy","detailedForecast":"Partly cloudy, with a low around 39. North northwest wind around 5 mph."},{"number":2,"name":"Friday","startTime":"2024-11-29T06:00:00-06:00","endTime":"2024-11-29T18:00:00-06:00","isDaytime":true,"temperature":60,"temperatureUnit":"F","temperatureTrend":"","probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"windSpeed":"0 to 5 mph","windDirection":"ENE","icon":"https://api.weather.gov/icons/land/day/sct?size=medium","shortForecast":"Mostly Sunny","detailedForecast":"Mostly sunny, with a high near 60. East northeast wind 0 to 5 mph."},{"number":3,"name":"Friday Night","startTime":"2024-11-29T18:00:00-06:00","endTime":"2024-11-30T06:00:00-06:00","isDaytime":false,"temperature":41,"temperatureUnit":"F","temperatureTrend":"","probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"windSpeed":"0 to 5 mph","windDirection":"SE","icon":"https://api.weather.gov/icons/land/night/sct?size=medium","shortForecast":"Partly Cloudy","detailedForecast":"Partly cloudy, with a low around 41. Southeast wind 0 to 5 mph."},{"number":4,"name":"Saturday","startTime":"2024-11-30T06:00:00-06:00","endTime":"2024-11-30T18:00:00-06:00","isDaytime":true,"temperature":66,"temperatureUnit":"F","temperatureTrend":"","probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"windSpeed":"5 mph","windDirection":"SE","icon":"https://api.weather.gov/icons/land/day/sct?size=medium","shortForecast":"Mostly Sunny","detailedForecast":"Mostly sunny, with a high near 66. Southeast wind around 5 mph."},{"number":5,"name":"Saturday Night","startTime":"2024-11-30T18:00:00-06:00","endTime":"2024-12-01T06:00:00-06:00","isDaytime":false,"temperature":43,"temperatureUnit":"F","temperatureTrend":"","probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"windSpeed":"0 mph","windDirection":"","icon":"https://api.weather.gov/icons/land/night/bkn?size=medium","shortForecast":"Mostly Cloudy","detailedForecast":"Mostly cloudy, with a low around 43. East southeast wind around 0 mph."},{"number":6,"name":"Sunday","startTime":"2024-12-01T06:00:00-06:00","endTime":"2024-12-01T18:00:00-06:00","isDaytime":true,"temperature":70,"temperatureUnit":"F","temperatureTrend":"","probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"windSpeed":"0 to 5 mph","windDirection":"ESE","icon":"https://api.weather.gov/icons/land/day/sct?size=medium","shortForecast":"Mostly Sunny","detailedForecast":"Mostly sunny, with a high near 70. East southeast wind 0 to 5 mph."},{"number":7,"name":"Sunday Night","startTime":"2024-12-01T18:00:00-06:00","endTime":"2024-12-02T06:00:00-06:00","isDaytime":false,"temperature":51,"temperatureUnit":"F","temperatureTrend":"","probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"windSpeed":"5 mph","windDirection":"ESE","icon":"https://api.weather.gov/icons/land/night/sct?size=medium","shortForecast":"Partly Cloudy","detailedForecast":"Partly cloudy, with a low around 51. East southeast wind around 5 mph."},{"number":8,"name":"Monday","startTime":"2024-12-02T06:00:00-06:00","endTime":"2024-12-02T18:00:00-06:00","isDaytime":true,"temperature":62,"temperatureUnit":"F","temperatureTrend":"","probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"windSpeed":"5 to 10 mph","windDirection":"ESE","icon":"https://api.weather.gov/icons/land/day/bkn?size=medium","shortForecast":"Mostly Cloudy","detailedForecast":"Mostly cloudy, with a high near 62. East southeast wind 5 to 10 mph."},{"number":9,"name":"Monday Night","startTime":"2024-12-02T18:00:00-06:00","endTime":"2024-12-03T06:00:00-06:00","isDaytime":false,"temperature":50,"temperatureUnit":"F","temperatureTrend":"","probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"windSpeed":"5 to 10 mph","windDirection":"SE","icon":"https://api.weather.gov/icons/land/night/bkn?size=medium","shortForecast":"Mostly Cloudy","detailedForecast":"Mostly cloudy, with a low around 50. Southeast wind 5 to 10 mph."},{"number":10,"name":"Tuesday","startTime":"2024-12-03T06:00:00-06:00","endTime":"2024-12-03T18:00:00-06:00","isDaytime":true,"temperature":60,"temperatureUnit":"F","temperatureTrend":"","probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"windSpeed":"5 to 10 mph","windDirection":"ESE","icon":"https://api.weather.gov/icons/land/day/bkn?size=medium","shortForecast":"Mostly Cloudy","detailedForecast":"Mostly cloudy, with a high near 60."},{"number":11,"name":"Tuesday Night","startTime":"2024-12-03T18:00:00-06:00","endTime":"2024-12-04T06:00:00-06:00","isDaytime":false,"temperature":52,"temperatureUnit":"F","temperatureTrend":"","probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"windSpeed":"0 to 5 mph","windDirection":"ESE","icon":"https://api.weather.gov/icons/land/night/bkn?size=medium","shortForecast":"Mostly Cloudy","detailedForecast":"Mostly cloudy, with a low around 52."},{"number":12,"name":"Wednesday","startTime":"2024-12-04T06:00:00-06:00","endTime":"2024-12-04T18:00:00-06:00","isDaytime":true,"temperature":68,"temperatureUnit":"F","temperatureTrend":"","probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"windSpeed":"0 to 5 mph","windDirection":"SE","icon":"https://api.weather.gov/icons/land/day/bkn?size=medium","shortForecast":"Mostly Cloudy","detailedForecast":"Mostly cloudy, with a high near 68."},{"number":13,"name":"Wednesday Night","startTime":"2024-12-04T18:00:00-06:00","endTime":"2024-12-05T06:00:00-06:00","isDaytime":false,"temperature":54,"temperatureUnit":"F","temperatureTrend":"","probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"windSpeed":"0 to 5 mph","windDirection":"ESE","icon":"https://api.weather.gov/icons/land/night/bkn?size=medium","shortForecast":"Mostly Cloudy","detailedForecast":"Mostly cloudy, with a low around 54."},{"number":14,"name":"Thursday","startTime":"2024-12-05T06:00:00-06:00","endTime":"2024-12-05T18:00:00-06:00","isDaytime":true,"temperature":72,"temperatureUnit":"F","temperatureTrend":"","probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"windSpeed":"0 to 5 mph","windDirection":"SE","icon":"https://api.weather.gov/icons/land/day/bkn?size=medium","shortForecast":"Mostly Cloudy","detailedForecast":"Mostly cloudy, with a high near 72."}]}
  var hourly_EWX_14_74 = false
  var crags_config = [
  {
    "name": "Continental Ranch",
    "note": "Hard limestone, so dries fairly fast. The ranch also seems to sit in a weather bubble with the rain passing around it.",
    "mountainProject": "https://www.mountainproject.com/area/106169626/continental-ranch",
    "station": "KDRT",
    "office": "EWX/14,74",
    "coordinates": [
      -101.44,
      29.803
    ]
  }
]</script>

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
  var weekly_EWX_156_86 = {"updated":"2022-01-27T07:23:49+00:00","units":"us","forecastGenerator":"BaselineForecastGenerator","generatedAt":"2022-01-27T08:43:46+00:00","updateTime":"2022-01-27T07:23:49+00:00","validTimes":"2022-01-27T01:00:00+00:00/P8DT6H","elevation":{"unitCode":"wmoUnit:m","value":156.972},"periods":[{"number":1,"name":"Overnight","startTime":"2022-01-27T02:00:00-06:00","endTime":"2022-01-27T06:00:00-06:00","isDaytime":false,"temperature":41,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"0 mph","windDirection":"NNW","icon":"https://api.weather.gov/icons/land/night/bkn?size=medium","shortForecast":"Mostly Cloudy","detailedForecast":"Mostly cloudy, with a low around 41. North northwest wind around 0 mph."},{"number":2,"name":"Thursday","startTime":"2022-01-27T06:00:00-06:00","endTime":"2022-01-27T18:00:00-06:00","isDaytime":true,"temperature":61,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"0 to 5 mph","windDirection":"NE","icon":"https://api.weather.gov/icons/land/day/bkn?size=medium","shortForecast":"Partly Sunny","detailedForecast":"Partly sunny, with a high near 61. Northeast wind 0 to 5 mph."},{"number":3,"name":"Thursday Night","startTime":"2022-01-27T18:00:00-06:00","endTime":"2022-01-28T06:00:00-06:00","isDaytime":false,"temperature":42,"temperatureUnit":"F","temperatureTrend":"rising","windSpeed":"5 to 15 mph","windDirection":"NE","icon":"https://api.weather.gov/icons/land/night/bkn/rain_showers,20?size=medium","shortForecast":"Mostly Cloudy then Slight Chance Rain Showers","detailedForecast":"A slight chance of rain showers after midnight. Mostly cloudy. Low around 42, with temperatures rising to around 47 overnight. Northeast wind 5 to 15 mph, with gusts as high as 25 mph. Chance of precipitation is 20%."},{"number":4,"name":"Friday","startTime":"2022-01-28T06:00:00-06:00","endTime":"2022-01-28T18:00:00-06:00","isDaytime":true,"temperature":55,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"10 to 20 mph","windDirection":"N","icon":"https://api.weather.gov/icons/land/day/sct?size=medium","shortForecast":"Mostly Sunny","detailedForecast":"Mostly sunny, with a high near 55. North wind 10 to 20 mph, with gusts as high as 25 mph."},{"number":5,"name":"Friday Night","startTime":"2022-01-28T18:00:00-06:00","endTime":"2022-01-29T06:00:00-06:00","isDaytime":false,"temperature":31,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"5 to 10 mph","windDirection":"NW","icon":"https://api.weather.gov/icons/land/night/few?size=medium","shortForecast":"Mostly Clear","detailedForecast":"Mostly clear, with a low around 31. Northwest wind 5 to 10 mph."},{"number":6,"name":"Saturday","startTime":"2022-01-29T06:00:00-06:00","endTime":"2022-01-29T18:00:00-06:00","isDaytime":true,"temperature":64,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"5 mph","windDirection":"SW","icon":"https://api.weather.gov/icons/land/day/skc?size=medium","shortForecast":"Sunny","detailedForecast":"Sunny, with a high near 64. Southwest wind around 5 mph."},{"number":7,"name":"Saturday Night","startTime":"2022-01-29T18:00:00-06:00","endTime":"2022-01-30T06:00:00-06:00","isDaytime":false,"temperature":36,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"5 mph","windDirection":"SW","icon":"https://api.weather.gov/icons/land/night/skc?size=medium","shortForecast":"Clear","detailedForecast":"Clear, with a low around 36. Southwest wind around 5 mph."},{"number":8,"name":"Sunday","startTime":"2022-01-30T06:00:00-06:00","endTime":"2022-01-30T18:00:00-06:00","isDaytime":true,"temperature":68,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"5 to 10 mph","windDirection":"SW","icon":"https://api.weather.gov/icons/land/day/few?size=medium","shortForecast":"Sunny","detailedForecast":"Sunny, with a high near 68. Southwest wind 5 to 10 mph."},{"number":9,"name":"Sunday Night","startTime":"2022-01-30T18:00:00-06:00","endTime":"2022-01-31T06:00:00-06:00","isDaytime":false,"temperature":46,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"5 to 10 mph","windDirection":"S","icon":"https://api.weather.gov/icons/land/night/sct/rain_showers,20?size=medium","shortForecast":"Partly Cloudy then Slight Chance Rain Showers","detailedForecast":"A slight chance of rain showers after midnight. Partly cloudy, with a low around 46. South wind 5 to 10 mph. Chance of precipitation is 20%."},{"number":10,"name":"Monday","startTime":"2022-01-31T06:00:00-06:00","endTime":"2022-01-31T18:00:00-06:00","isDaytime":true,"temperature":66,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"10 to 15 mph","windDirection":"S","icon":"https://api.weather.gov/icons/land/day/tsra_sct,70/tsra_sct,50?size=medium","shortForecast":"Showers And Thunderstorms Likely","detailedForecast":"Showers and thunderstorms likely. Mostly cloudy, with a high near 66. Chance of precipitation is 70%."},{"number":11,"name":"Monday Night","startTime":"2022-01-31T18:00:00-06:00","endTime":"2022-02-01T06:00:00-06:00","isDaytime":false,"temperature":48,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"5 to 10 mph","windDirection":"SSE","icon":"https://api.weather.gov/icons/land/night/sct?size=medium","shortForecast":"Partly Cloudy","detailedForecast":"Partly cloudy, with a low around 48."},{"number":12,"name":"Tuesday","startTime":"2022-02-01T06:00:00-06:00","endTime":"2022-02-01T18:00:00-06:00","isDaytime":true,"temperature":73,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"5 to 15 mph","windDirection":"S","icon":"https://api.weather.gov/icons/land/day/bkn?size=medium","shortForecast":"Partly Sunny","detailedForecast":"Partly sunny, with a high near 73."},{"number":13,"name":"Tuesday Night","startTime":"2022-02-01T18:00:00-06:00","endTime":"2022-02-02T06:00:00-06:00","isDaytime":false,"temperature":50,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"5 to 10 mph","windDirection":"S","icon":"https://api.weather.gov/icons/land/night/bkn/rain_showers,20?size=medium","shortForecast":"Mostly Cloudy then Slight Chance Rain Showers","detailedForecast":"A slight chance of rain showers after midnight. Mostly cloudy, with a low around 50. Chance of precipitation is 20%."},{"number":14,"name":"Wednesday","startTime":"2022-02-02T06:00:00-06:00","endTime":"2022-02-02T18:00:00-06:00","isDaytime":true,"temperature":64,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"5 to 15 mph","windDirection":"NW","icon":"https://api.weather.gov/icons/land/day/rain_showers,30?size=medium","shortForecast":"Chance Rain Showers","detailedForecast":"A chance of rain showers. Mostly cloudy, with a high near 64. Chance of precipitation is 30%."}]}
  var hourly_EWX_156_86 = {"correlationId":"cf8559","title":"Unexpected Problem","type":"https://api.weather.gov/problems/UnexpectedProblem","status":500,"detail":"An unexpected problem has occurred.","instance":"https://api.weather.gov/requests/cf8559"}
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

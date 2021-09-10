---
### THIS FILE IS AUTO-GENERATED - DO NOT EDIT ###
layout: page
title: The Greenbelt, Texas Climbing Weather - Current, Past, and Forecasted Report
title_override: The Greenbelt<br /><small>Climbing Weather</small>
description: A lightweight weather report for The Greenbelt, Texas. Optimized for slow internet connections.
js_includes:
  - weather.js
---

<section class="measure center lh-copy f5-ns f6 ph2 mv4" style="text-align: justify;">
<strong>"Is it dry?"</strong>, an oft-repeated, age-old question. Here are real-time,
precipitation-focused reports of current, past, and forecasted climbing weather for The Greenbelt, Texas.
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
<section id="weather" data-crag="the-greenbelt-texas" class="mv4-ns mv3 ph2 center"></section>
<section id="nearby" class="tc lh-copy">
  <h3>Nearby Crags</h3>
<a class="nowrap no-underline fancy-link relative light-red mh3" href="/crags/continental-ranch-texas-weather.html">Continental Ranch</a>
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
  var weekly_EWX_153_89 = {"updated":"2021-09-10T08:02:40+00:00","units":"us","forecastGenerator":"BaselineForecastGenerator","generatedAt":"2021-09-10T08:42:31+00:00","updateTime":"2021-09-10T08:02:40+00:00","validTimes":"2021-09-10T02:00:00+00:00/P8DT6H","elevation":{"value":181.9656,"unitCode":"unit:m"},"periods":[{"number":1,"name":"Overnight","startTime":"2021-09-10T03:00:00-05:00","endTime":"2021-09-10T06:00:00-05:00","isDaytime":false,"temperature":67,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"0 mph","windDirection":"NNE","icon":"https://api.weather.gov/icons/land/night/skc?size=medium","shortForecast":"Clear","detailedForecast":"Clear, with a low around 67. North northeast wind around 0 mph."},{"number":2,"name":"Friday","startTime":"2021-09-10T06:00:00-05:00","endTime":"2021-09-10T18:00:00-05:00","isDaytime":true,"temperature":96,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"0 to 10 mph","windDirection":"ENE","icon":"https://api.weather.gov/icons/land/day/skc?size=medium","shortForecast":"Sunny","detailedForecast":"Sunny, with a high near 96. East northeast wind 0 to 10 mph."},{"number":3,"name":"Friday Night","startTime":"2021-09-10T18:00:00-05:00","endTime":"2021-09-11T06:00:00-05:00","isDaytime":false,"temperature":66,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"0 to 5 mph","windDirection":"SE","icon":"https://api.weather.gov/icons/land/night/skc?size=medium","shortForecast":"Clear","detailedForecast":"Clear, with a low around 66. Southeast wind 0 to 5 mph."},{"number":4,"name":"Saturday","startTime":"2021-09-11T06:00:00-05:00","endTime":"2021-09-11T18:00:00-05:00","isDaytime":true,"temperature":96,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"0 to 5 mph","windDirection":"SSE","icon":"https://api.weather.gov/icons/land/day/skc?size=medium","shortForecast":"Sunny","detailedForecast":"Sunny, with a high near 96. South southeast wind 0 to 5 mph."},{"number":5,"name":"Saturday Night","startTime":"2021-09-11T18:00:00-05:00","endTime":"2021-09-12T06:00:00-05:00","isDaytime":false,"temperature":69,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"0 to 5 mph","windDirection":"SE","icon":"https://api.weather.gov/icons/land/night/few?size=medium","shortForecast":"Mostly Clear","detailedForecast":"Mostly clear, with a low around 69. Southeast wind 0 to 5 mph."},{"number":6,"name":"Sunday","startTime":"2021-09-12T06:00:00-05:00","endTime":"2021-09-12T18:00:00-05:00","isDaytime":true,"temperature":93,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"0 to 10 mph","windDirection":"ESE","icon":"https://api.weather.gov/icons/land/day/bkn/tsra_hi,20?size=medium","shortForecast":"Partly Sunny then Slight Chance Showers And Thunderstorms","detailedForecast":"A slight chance of showers and thunderstorms after 1pm. Partly sunny, with a high near 93. East southeast wind 0 to 10 mph. Chance of precipitation is 20%."},{"number":7,"name":"Sunday Night","startTime":"2021-09-12T18:00:00-05:00","endTime":"2021-09-13T06:00:00-05:00","isDaytime":false,"temperature":73,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"0 to 10 mph","windDirection":"ESE","icon":"https://api.weather.gov/icons/land/night/tsra_hi,20?size=medium","shortForecast":"Slight Chance Showers And Thunderstorms","detailedForecast":"A slight chance of showers and thunderstorms. Mostly cloudy, with a low around 73. East southeast wind 0 to 10 mph. Chance of precipitation is 20%."},{"number":8,"name":"Monday","startTime":"2021-09-13T06:00:00-05:00","endTime":"2021-09-13T18:00:00-05:00","isDaytime":true,"temperature":89,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"5 to 10 mph","windDirection":"E","icon":"https://api.weather.gov/icons/land/day/tsra_sct,30/tsra_sct,50?size=medium","shortForecast":"Chance Showers And Thunderstorms","detailedForecast":"A chance of showers and thunderstorms. Partly sunny, with a high near 89. East wind 5 to 10 mph. Chance of precipitation is 50%."},{"number":9,"name":"Monday Night","startTime":"2021-09-13T18:00:00-05:00","endTime":"2021-09-14T06:00:00-05:00","isDaytime":false,"temperature":73,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"5 mph","windDirection":"ESE","icon":"https://api.weather.gov/icons/land/night/tsra_hi,50/tsra_hi,30?size=medium","shortForecast":"Chance Showers And Thunderstorms","detailedForecast":"A chance of showers and thunderstorms. Mostly cloudy, with a low around 73. East southeast wind around 5 mph. Chance of precipitation is 50%."},{"number":10,"name":"Tuesday","startTime":"2021-09-14T06:00:00-05:00","endTime":"2021-09-14T18:00:00-05:00","isDaytime":true,"temperature":91,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"5 to 10 mph","windDirection":"E","icon":"https://api.weather.gov/icons/land/day/tsra_hi,30/tsra_hi,40?size=medium","shortForecast":"Chance Showers And Thunderstorms","detailedForecast":"A chance of showers and thunderstorms. Partly sunny, with a high near 91. Chance of precipitation is 40%."},{"number":11,"name":"Tuesday Night","startTime":"2021-09-14T18:00:00-05:00","endTime":"2021-09-15T06:00:00-05:00","isDaytime":false,"temperature":74,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"0 to 10 mph","windDirection":"SSE","icon":"https://api.weather.gov/icons/land/night/tsra_hi,40/tsra_hi,20?size=medium","shortForecast":"Chance Showers And Thunderstorms","detailedForecast":"A chance of showers and thunderstorms. Partly cloudy, with a low around 74. Chance of precipitation is 40%."},{"number":12,"name":"Wednesday","startTime":"2021-09-15T06:00:00-05:00","endTime":"2021-09-15T18:00:00-05:00","isDaytime":true,"temperature":92,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"0 to 10 mph","windDirection":"SE","icon":"https://api.weather.gov/icons/land/day/tsra_hi,20/tsra_hi,40?size=medium","shortForecast":"Chance Showers And Thunderstorms","detailedForecast":"A chance of showers and thunderstorms. Partly sunny, with a high near 92. Chance of precipitation is 40%."},{"number":13,"name":"Wednesday Night","startTime":"2021-09-15T18:00:00-05:00","endTime":"2021-09-16T06:00:00-05:00","isDaytime":false,"temperature":73,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"0 to 10 mph","windDirection":"SE","icon":"https://api.weather.gov/icons/land/night/tsra_hi,40/tsra_hi,20?size=medium","shortForecast":"Chance Showers And Thunderstorms","detailedForecast":"A chance of showers and thunderstorms. Partly cloudy, with a low around 73. Chance of precipitation is 40%."},{"number":14,"name":"Thursday","startTime":"2021-09-16T06:00:00-05:00","endTime":"2021-09-16T18:00:00-05:00","isDaytime":true,"temperature":92,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"5 mph","windDirection":"E","icon":"https://api.weather.gov/icons/land/day/tsra_hi,20/tsra_hi,30?size=medium","shortForecast":"Chance Showers And Thunderstorms","detailedForecast":"A chance of showers and thunderstorms. Mostly sunny, with a high near 92. Chance of precipitation is 30%."}]}
  var hourly_EWX_153_89 = {"correlationId":"2f619ac4","title":"Unexpected Problem","type":"https://api.weather.gov/problems/UnexpectedProblem","status":500,"detail":"An unexpected problem has occurred.","instance":"https://api.weather.gov/requests/2f619ac4"}
  var crags_config = [
  {
    "name": "The Greenbelt",
    "note": "Porous limestone that can take a couple days to dry out.",
    "mountainProject": "https://www.mountainproject.com/area/105905087/barton-creek-greenbelt",
    "station": "KATT",
    "office": "EWX/153,89",
    "coordinates": [
      -97.801,
      30.244
    ]
  }
]</script>

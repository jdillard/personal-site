---
### THIS FILE IS AUTO-GENERATED - DO NOT EDIT ###
layout: page
title: Hueco Tanks, Texas Climbing Weather - Current, Past, and Forecasted Report
title_override: Hueco Tanks<br /><small>Climbing Weather</small>
description: A lightweight weather report for Hueco Tanks, Texas. Optimized for slow internet connections.
js_includes:
  - weather.js
---

<section class="measure center lh-copy f5-ns f6 ph2 mv4" style="text-align: justify;">
<strong>"Is it dry?"</strong>, an oft-repeated, age-old question. Here are real-time,
precipitation-focused reports of current, past, and forecasted climbing weather for Hueco Tanks, Texas.
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
<section id="weather" data-crag="hueco-tanks-texas" class="mv4-ns mv3 ph2 center"></section>
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
<a class="nowrap no-underline fancy-link relative light-red mh3" href="/crags/mckinney-falls-texas-weather.html">McKinney Falls</a>
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
  var weekly_EPZ_116_60 = {"updated":"2022-09-11T07:40:48+00:00","units":"us","forecastGenerator":"BaselineForecastGenerator","generatedAt":"2022-09-11T08:40:18+00:00","updateTime":"2022-09-11T07:40:48+00:00","validTimes":"2022-09-11T01:00:00+00:00/P8DT6H","elevation":{"unitCode":"wmoUnit:m","value":1449.9336},"periods":[{"number":1,"name":"Overnight","startTime":"2022-09-11T02:00:00-06:00","endTime":"2022-09-11T06:00:00-06:00","isDaytime":false,"temperature":66,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"23 to 29 mph","windDirection":"E","icon":"https://api.weather.gov/icons/land/night/tsra_hi?size=medium","shortForecast":"Isolated Showers And Thunderstorms","detailedForecast":"Isolated showers and thunderstorms before 4am. Partly cloudy, with a low around 66. East wind 23 to 29 mph, with gusts as high as 44 mph."},{"number":2,"name":"Sunday","startTime":"2022-09-11T06:00:00-06:00","endTime":"2022-09-11T18:00:00-06:00","isDaytime":true,"temperature":79,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"15 to 30 mph","windDirection":"ESE","icon":"https://api.weather.gov/icons/land/day/wind_sct/tsra_hi?size=medium","shortForecast":"Mostly Sunny then Isolated Showers And Thunderstorms","detailedForecast":"Isolated showers and thunderstorms after 2pm. Mostly sunny, with a high near 79. East southeast wind 15 to 30 mph, with gusts as high as 45 mph."},{"number":3,"name":"Sunday Night","startTime":"2022-09-11T18:00:00-06:00","endTime":"2022-09-12T06:00:00-06:00","isDaytime":false,"temperature":63,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"10 to 20 mph","windDirection":"ESE","icon":"https://api.weather.gov/icons/land/night/tsra_hi/sct?size=medium","shortForecast":"Isolated Showers And Thunderstorms then Partly Cloudy","detailedForecast":"Isolated showers and thunderstorms before midnight. Partly cloudy, with a low around 63. East southeast wind 10 to 20 mph, with gusts as high as 29 mph."},{"number":4,"name":"Monday","startTime":"2022-09-12T06:00:00-06:00","endTime":"2022-09-12T18:00:00-06:00","isDaytime":true,"temperature":85,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"7 mph","windDirection":"S","icon":"https://api.weather.gov/icons/land/day/sct/tsra_hi?size=medium","shortForecast":"Mostly Sunny then Slight Chance Showers And Thunderstorms","detailedForecast":"A slight chance of showers and thunderstorms after noon. Mostly sunny, with a high near 85. South wind around 7 mph."},{"number":5,"name":"Monday Night","startTime":"2022-09-12T18:00:00-06:00","endTime":"2022-09-13T06:00:00-06:00","isDaytime":false,"temperature":66,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"8 mph","windDirection":"SE","icon":"https://api.weather.gov/icons/land/night/tsra_hi,20/bkn?size=medium","shortForecast":"Slight Chance Showers And Thunderstorms then Mostly Cloudy","detailedForecast":"A slight chance of showers and thunderstorms before midnight. Mostly cloudy, with a low around 66. Southeast wind around 8 mph. Chance of precipitation is 20%."},{"number":6,"name":"Tuesday","startTime":"2022-09-13T06:00:00-06:00","endTime":"2022-09-13T18:00:00-06:00","isDaytime":true,"temperature":85,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"8 mph","windDirection":"SSE","icon":"https://api.weather.gov/icons/land/day/bkn/tsra_hi,20?size=medium","shortForecast":"Partly Sunny then Slight Chance Showers And Thunderstorms","detailedForecast":"A slight chance of showers and thunderstorms after noon. Partly sunny, with a high near 85. South southeast wind around 8 mph. Chance of precipitation is 20%."},{"number":7,"name":"Tuesday Night","startTime":"2022-09-13T18:00:00-06:00","endTime":"2022-09-14T06:00:00-06:00","isDaytime":false,"temperature":63,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"8 mph","windDirection":"SE","icon":"https://api.weather.gov/icons/land/night/tsra_sct,50/tsra_sct,20?size=medium","shortForecast":"Chance Showers And Thunderstorms","detailedForecast":"A chance of showers and thunderstorms. Mostly cloudy, with a low around 63. Southeast wind around 8 mph. Chance of precipitation is 50%."},{"number":8,"name":"Wednesday","startTime":"2022-09-14T06:00:00-06:00","endTime":"2022-09-14T18:00:00-06:00","isDaytime":true,"temperature":84,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"7 mph","windDirection":"SSE","icon":"https://api.weather.gov/icons/land/day/sct/tsra_hi,20?size=medium","shortForecast":"Mostly Sunny then Slight Chance Showers And Thunderstorms","detailedForecast":"A slight chance of showers and thunderstorms after noon. Mostly sunny, with a high near 84. South southeast wind around 7 mph. Chance of precipitation is 20%."},{"number":9,"name":"Wednesday Night","startTime":"2022-09-14T18:00:00-06:00","endTime":"2022-09-15T06:00:00-06:00","isDaytime":false,"temperature":65,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"7 to 10 mph","windDirection":"SE","icon":"https://api.weather.gov/icons/land/night/tsra_hi,20/few?size=medium","shortForecast":"Slight Chance Showers And Thunderstorms then Mostly Clear","detailedForecast":"A slight chance of showers and thunderstorms before midnight. Mostly clear, with a low around 65. Southeast wind 7 to 10 mph. Chance of precipitation is 20%."},{"number":10,"name":"Thursday","startTime":"2022-09-15T06:00:00-06:00","endTime":"2022-09-15T18:00:00-06:00","isDaytime":true,"temperature":87,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"7 to 10 mph","windDirection":"SE","icon":"https://api.weather.gov/icons/land/day/few?size=medium","shortForecast":"Sunny","detailedForecast":"Sunny, with a high near 87."},{"number":11,"name":"Thursday Night","startTime":"2022-09-15T18:00:00-06:00","endTime":"2022-09-16T06:00:00-06:00","isDaytime":false,"temperature":65,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"7 to 12 mph","windDirection":"SE","icon":"https://api.weather.gov/icons/land/night/few?size=medium","shortForecast":"Mostly Clear","detailedForecast":"Mostly clear, with a low around 65."},{"number":12,"name":"Friday","startTime":"2022-09-16T06:00:00-06:00","endTime":"2022-09-16T18:00:00-06:00","isDaytime":true,"temperature":87,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"7 to 10 mph","windDirection":"SE","icon":"https://api.weather.gov/icons/land/day/few?size=medium","shortForecast":"Sunny","detailedForecast":"Sunny, with a high near 87."},{"number":13,"name":"Friday Night","startTime":"2022-09-16T18:00:00-06:00","endTime":"2022-09-17T06:00:00-06:00","isDaytime":false,"temperature":64,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"6 to 12 mph","windDirection":"ESE","icon":"https://api.weather.gov/icons/land/night/few?size=medium","shortForecast":"Mostly Clear","detailedForecast":"Mostly clear, with a low around 64."},{"number":14,"name":"Saturday","startTime":"2022-09-17T06:00:00-06:00","endTime":"2022-09-17T18:00:00-06:00","isDaytime":true,"temperature":88,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"6 to 9 mph","windDirection":"SE","icon":"https://api.weather.gov/icons/land/day/few?size=medium","shortForecast":"Sunny","detailedForecast":"Sunny, with a high near 88."}]}
  var hourly_EPZ_116_60 = {"correlationId":"8d910f4","title":"Unexpected Problem","type":"https://api.weather.gov/problems/UnexpectedProblem","status":500,"detail":"An unexpected problem has occurred.","instance":"https://api.weather.gov/requests/8d910f4"}
  var crags_config = [
  {
    "name": "Hueco Tanks",
    "note": "Reservations required.",
    "mountainProject": "https://www.mountainproject.com/area/105810691/hueco-tanks",
    "station": "KELP",
    "office": "EPZ/116,60",
    "coordinates": [
      -106.043,
      31.917
    ]
  }
]</script>

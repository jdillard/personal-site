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
  var weekly_EPZ_116_60 = {"updated":"2022-04-21T07:04:26+00:00","units":"us","forecastGenerator":"BaselineForecastGenerator","generatedAt":"2022-04-21T08:40:24+00:00","updateTime":"2022-04-21T07:04:26+00:00","validTimes":"2022-04-21T01:00:00+00:00/P8DT6H","elevation":{"unitCode":"wmoUnit:m","value":1449.9336},"periods":[{"number":1,"name":"Overnight","startTime":"2022-04-21T02:00:00-06:00","endTime":"2022-04-21T06:00:00-06:00","isDaytime":false,"temperature":58,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"9 mph","windDirection":"SW","icon":"https://api.weather.gov/icons/land/night/skc?size=medium","shortForecast":"Clear","detailedForecast":"Clear, with a low around 58. Southwest wind around 9 mph."},{"number":2,"name":"Thursday","startTime":"2022-04-21T06:00:00-06:00","endTime":"2022-04-21T18:00:00-06:00","isDaytime":true,"temperature":85,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"7 to 15 mph","windDirection":"SW","icon":"https://api.weather.gov/icons/land/day/skc?size=medium","shortForecast":"Sunny","detailedForecast":"Sunny, with a high near 85. Southwest wind 7 to 15 mph, with gusts as high as 21 mph."},{"number":3,"name":"Thursday Night","startTime":"2022-04-21T18:00:00-06:00","endTime":"2022-04-22T06:00:00-06:00","isDaytime":false,"temperature":60,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"7 to 15 mph","windDirection":"SSW","icon":"https://api.weather.gov/icons/land/night/few?size=medium","shortForecast":"Mostly Clear","detailedForecast":"Mostly clear, with a low around 60. South southwest wind 7 to 15 mph, with gusts as high as 21 mph."},{"number":4,"name":"Friday","startTime":"2022-04-22T06:00:00-06:00","endTime":"2022-04-22T18:00:00-06:00","isDaytime":true,"temperature":88,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"10 to 29 mph","windDirection":"SSW","icon":"https://api.weather.gov/icons/land/day/wind_few?size=medium","shortForecast":"Sunny then Blowing Dust","detailedForecast":"Blowing dust after noon. Sunny, with a high near 88. South southwest wind 10 to 29 mph, with gusts as high as 44 mph."},{"number":5,"name":"Friday Night","startTime":"2022-04-22T18:00:00-06:00","endTime":"2022-04-23T06:00:00-06:00","isDaytime":false,"temperature":52,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"15 to 29 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/night/wind_few?size=medium","shortForecast":"Areas Of Blowing Dust then Mostly Clear","detailedForecast":"Areas of blowing dust before 9pm. Mostly clear, with a low around 52. West wind 15 to 29 mph, with gusts as high as 44 mph."},{"number":6,"name":"Saturday","startTime":"2022-04-23T06:00:00-06:00","endTime":"2022-04-23T18:00:00-06:00","isDaytime":true,"temperature":73,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"15 to 21 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/day/wind_few?size=medium","shortForecast":"Sunny","detailedForecast":"Sunny, with a high near 73. West wind 15 to 21 mph."},{"number":7,"name":"Saturday Night","startTime":"2022-04-23T18:00:00-06:00","endTime":"2022-04-24T06:00:00-06:00","isDaytime":false,"temperature":49,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"10 to 20 mph","windDirection":"NW","icon":"https://api.weather.gov/icons/land/night/few?size=medium","shortForecast":"Mostly Clear","detailedForecast":"Mostly clear, with a low around 49. Northwest wind 10 to 20 mph."},{"number":8,"name":"Sunday","startTime":"2022-04-24T06:00:00-06:00","endTime":"2022-04-24T18:00:00-06:00","isDaytime":true,"temperature":77,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"8 to 13 mph","windDirection":"ESE","icon":"https://api.weather.gov/icons/land/day/skc?size=medium","shortForecast":"Sunny","detailedForecast":"Sunny, with a high near 77. East southeast wind 8 to 13 mph."},{"number":9,"name":"Sunday Night","startTime":"2022-04-24T18:00:00-06:00","endTime":"2022-04-25T06:00:00-06:00","isDaytime":false,"temperature":52,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"9 to 17 mph","windDirection":"SSE","icon":"https://api.weather.gov/icons/land/night/skc?size=medium","shortForecast":"Clear","detailedForecast":"Clear, with a low around 52. South southeast wind 9 to 17 mph."},{"number":10,"name":"Monday","startTime":"2022-04-25T06:00:00-06:00","endTime":"2022-04-25T18:00:00-06:00","isDaytime":true,"temperature":74,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"18 to 23 mph","windDirection":"E","icon":"https://api.weather.gov/icons/land/day/wind_few?size=medium","shortForecast":"Sunny","detailedForecast":"Sunny, with a high near 74."},{"number":11,"name":"Monday Night","startTime":"2022-04-25T18:00:00-06:00","endTime":"2022-04-26T06:00:00-06:00","isDaytime":false,"temperature":52,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"23 mph","windDirection":"E","icon":"https://api.weather.gov/icons/land/night/tsra_hi?size=medium","shortForecast":"Slight Chance Showers And Thunderstorms","detailedForecast":"A slight chance of showers and thunderstorms. Mostly clear, with a low around 52."},{"number":12,"name":"Tuesday","startTime":"2022-04-26T06:00:00-06:00","endTime":"2022-04-26T18:00:00-06:00","isDaytime":true,"temperature":78,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"22 mph","windDirection":"ESE","icon":"https://api.weather.gov/icons/land/day/tsra_hi/tsra_hi,20?size=medium","shortForecast":"Slight Chance Showers And Thunderstorms","detailedForecast":"A slight chance of showers and thunderstorms. Mostly sunny, with a high near 78. Chance of precipitation is 20%."},{"number":13,"name":"Tuesday Night","startTime":"2022-04-26T18:00:00-06:00","endTime":"2022-04-27T06:00:00-06:00","isDaytime":false,"temperature":57,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"15 to 20 mph","windDirection":"ESE","icon":"https://api.weather.gov/icons/land/night/tsra_hi,20/tsra_hi?size=medium","shortForecast":"Slight Chance Showers And Thunderstorms","detailedForecast":"A slight chance of showers and thunderstorms. Partly cloudy, with a low around 57. Chance of precipitation is 20%."},{"number":14,"name":"Wednesday","startTime":"2022-04-27T06:00:00-06:00","endTime":"2022-04-27T18:00:00-06:00","isDaytime":true,"temperature":85,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"16 mph","windDirection":"S","icon":"https://api.weather.gov/icons/land/day/few?size=medium","shortForecast":"Sunny","detailedForecast":"Sunny, with a high near 85."}]}
  var hourly_EPZ_116_60 = {"correlationId":"12a44cfc","title":"Unexpected Problem","type":"https://api.weather.gov/problems/UnexpectedProblem","status":500,"detail":"An unexpected problem has occurred.","instance":"https://api.weather.gov/requests/12a44cfc"}
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

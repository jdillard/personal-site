---
### THIS FILE IS AUTO-GENERATED - DO NOT EDIT ###
layout: page
title: Enchanted Rock, Texas Climbing Weather - Current, Past, and Forecasted Report
title_override: Enchanted Rock<br /><small>Climbing Weather</small>
description: A lightweight weather report for Enchanted Rock, Texas. Optimized for slow internet connections.
js_includes:
  - weather.js
---

<section class="measure center lh-copy f5-ns f6 ph2 mv4" style="text-align: justify;">
<strong>"Is it dry?"</strong>, an oft-repeated, age-old question. Here are real-time,
precipitation-focused reports of current, past, and forecasted climbing weather for Enchanted Rock, Texas.
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
<section id="weather" data-crag="enchanted-rock-texas" class="mv4-ns mv3 ph2 center"></section>
<section id="nearby" class="tc lh-copy">
  <h3>Nearby Crags</h3>
<a class="nowrap no-underline fancy-link relative light-red mh3" href="/crags/the-greenbelt-texas-weather.html">The Greenbelt</a>
<a class="nowrap no-underline fancy-link relative light-red mh3" href="/crags/continental-ranch-texas-weather.html">Continental Ranch</a>
<a class="nowrap no-underline fancy-link relative light-red mh3" href="/crags/pace-bend-park-texas-weather.html">Pace Bend Park</a>
<a class="nowrap no-underline fancy-link relative light-red mh3" href="/crags/reimers-ranch-texas-weather.html">Reimer's Ranch</a>
<a class="nowrap no-underline fancy-link relative light-red mh3" href="/crags/cochise-stronghold-arizona-weather.html">Cochise Stronghold</a>
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
  var weekly_EWX_114_101 = {"updated":"2021-11-03T07:20:41+00:00","units":"us","forecastGenerator":"BaselineForecastGenerator","generatedAt":"2021-11-03T08:44:13+00:00","updateTime":"2021-11-03T07:20:41+00:00","validTimes":"2021-11-03T01:00:00+00:00/P8DT6H","elevation":{"unitCode":"wmoUnit:m","value":456.8952},"periods":[{"number":1,"name":"Overnight","startTime":"2021-11-03T03:00:00-05:00","endTime":"2021-11-03T06:00:00-05:00","isDaytime":false,"temperature":57,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"10 mph","windDirection":"E","icon":"https://api.weather.gov/icons/land/night/tsra,40?size=medium","shortForecast":"Chance Showers And Thunderstorms","detailedForecast":"A chance of showers and thunderstorms. Cloudy, with a low around 57. East wind around 10 mph. Chance of precipitation is 40%. New rainfall amounts less than a tenth of an inch possible."},{"number":2,"name":"Wednesday","startTime":"2021-11-03T06:00:00-05:00","endTime":"2021-11-03T18:00:00-05:00","isDaytime":true,"temperature":58,"temperatureUnit":"F","temperatureTrend":"falling","windSpeed":"5 to 15 mph","windDirection":"NNE","icon":"https://api.weather.gov/icons/land/day/tsra,90?size=medium","shortForecast":"Chance Showers And Thunderstorms then Showers And Thunderstorms","detailedForecast":"A chance of showers and thunderstorms before 7am, then showers and thunderstorms. Cloudy. High near 58, with temperatures falling to around 53 in the afternoon. North northeast wind 5 to 15 mph, with gusts as high as 25 mph. Chance of precipitation is 90%. New rainfall amounts between 1 and 2 inches possible."},{"number":3,"name":"Wednesday Night","startTime":"2021-11-03T18:00:00-05:00","endTime":"2021-11-04T06:00:00-05:00","isDaytime":false,"temperature":45,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"10 to 15 mph","windDirection":"NNE","icon":"https://api.weather.gov/icons/land/night/tsra,70/tsra,60?size=medium","shortForecast":"Showers And Thunderstorms Likely","detailedForecast":"Showers and thunderstorms likely. Cloudy, with a low around 45. North northeast wind 10 to 15 mph, with gusts as high as 25 mph. Chance of precipitation is 70%. New rainfall amounts between a half and three quarters of an inch possible."},{"number":4,"name":"Thursday","startTime":"2021-11-04T06:00:00-05:00","endTime":"2021-11-04T18:00:00-05:00","isDaytime":true,"temperature":54,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"10 mph","windDirection":"NNE","icon":"https://api.weather.gov/icons/land/day/rain_showers,40/bkn?size=medium","shortForecast":"Chance Rain Showers then Mostly Cloudy","detailedForecast":"A chance of rain showers before 7am. Mostly cloudy, with a high near 54. North northeast wind around 10 mph, with gusts as high as 20 mph. Chance of precipitation is 40%."},{"number":5,"name":"Thursday Night","startTime":"2021-11-04T18:00:00-05:00","endTime":"2021-11-05T06:00:00-05:00","isDaytime":false,"temperature":45,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"5 mph","windDirection":"ENE","icon":"https://api.weather.gov/icons/land/night/bkn?size=medium","shortForecast":"Mostly Cloudy","detailedForecast":"Mostly cloudy, with a low around 45. East northeast wind around 5 mph."},{"number":6,"name":"Friday","startTime":"2021-11-05T06:00:00-05:00","endTime":"2021-11-05T18:00:00-05:00","isDaytime":true,"temperature":64,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"0 to 5 mph","windDirection":"SSE","icon":"https://api.weather.gov/icons/land/day/bkn?size=medium","shortForecast":"Partly Sunny","detailedForecast":"Partly sunny, with a high near 64. South southeast wind 0 to 5 mph."},{"number":7,"name":"Friday Night","startTime":"2021-11-05T18:00:00-05:00","endTime":"2021-11-06T06:00:00-05:00","isDaytime":false,"temperature":45,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"5 mph","windDirection":"SSE","icon":"https://api.weather.gov/icons/land/night/sct?size=medium","shortForecast":"Partly Cloudy","detailedForecast":"Partly cloudy, with a low around 45. South southeast wind around 5 mph."},{"number":8,"name":"Saturday","startTime":"2021-11-06T06:00:00-05:00","endTime":"2021-11-06T18:00:00-05:00","isDaytime":true,"temperature":71,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"5 to 10 mph","windDirection":"S","icon":"https://api.weather.gov/icons/land/day/few?size=medium","shortForecast":"Sunny","detailedForecast":"Sunny, with a high near 71. South wind 5 to 10 mph."},{"number":9,"name":"Saturday Night","startTime":"2021-11-06T18:00:00-05:00","endTime":"2021-11-07T06:00:00-06:00","isDaytime":false,"temperature":48,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"5 to 10 mph","windDirection":"SSE","icon":"https://api.weather.gov/icons/land/night/few?size=medium","shortForecast":"Mostly Clear","detailedForecast":"Mostly clear, with a low around 48. South southeast wind 5 to 10 mph."},{"number":10,"name":"Sunday","startTime":"2021-11-07T06:00:00-06:00","endTime":"2021-11-07T18:00:00-06:00","isDaytime":true,"temperature":73,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"5 to 15 mph","windDirection":"S","icon":"https://api.weather.gov/icons/land/day/few?size=medium","shortForecast":"Sunny","detailedForecast":"Sunny, with a high near 73."},{"number":11,"name":"Sunday Night","startTime":"2021-11-07T18:00:00-06:00","endTime":"2021-11-08T06:00:00-06:00","isDaytime":false,"temperature":52,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"5 to 15 mph","windDirection":"S","icon":"https://api.weather.gov/icons/land/night/few?size=medium","shortForecast":"Mostly Clear","detailedForecast":"Mostly clear, with a low around 52."},{"number":12,"name":"Monday","startTime":"2021-11-08T06:00:00-06:00","endTime":"2021-11-08T18:00:00-06:00","isDaytime":true,"temperature":76,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"10 to 15 mph","windDirection":"S","icon":"https://api.weather.gov/icons/land/day/few?size=medium","shortForecast":"Sunny","detailedForecast":"Sunny, with a high near 76."},{"number":13,"name":"Monday Night","startTime":"2021-11-08T18:00:00-06:00","endTime":"2021-11-09T06:00:00-06:00","isDaytime":false,"temperature":56,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"10 to 15 mph","windDirection":"S","icon":"https://api.weather.gov/icons/land/night/sct?size=medium","shortForecast":"Partly Cloudy","detailedForecast":"Partly cloudy, with a low around 56."},{"number":14,"name":"Tuesday","startTime":"2021-11-09T06:00:00-06:00","endTime":"2021-11-09T18:00:00-06:00","isDaytime":true,"temperature":77,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"10 to 15 mph","windDirection":"S","icon":"https://api.weather.gov/icons/land/day/sct?size=medium","shortForecast":"Mostly Sunny","detailedForecast":"Mostly sunny, with a high near 77."}]}
  var hourly_EWX_114_101 = {"correlationId":"9138ffda","title":"Unexpected Problem","type":"https://api.weather.gov/problems/UnexpectedProblem","status":500,"detail":"An unexpected problem has occurred.","instance":"https://api.weather.gov/requests/9138ffda"}
  var crags_config = [
  {
    "name": "Enchanted Rock",
    "note": "Granite, so the exposed areas dry fast.",
    "mountainProject": "https://www.mountainproject.com/area/105855196/enchanted-rock-state-natural-area",
    "station": "KT82",
    "office": "EWX/114,101",
    "coordinates": [
      -98.821,
      30.503
    ]
  }
]</script>

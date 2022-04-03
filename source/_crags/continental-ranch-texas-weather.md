---
### THIS FILE IS AUTO-GENERATED - DO NOT EDIT ###
layout: page
title: Continental Ranch, Texas Climbing Weather - Current, Past, and Forecasted Report
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
  var weekly_EWX_14_74 = {"updated":"2022-04-03T07:38:52+00:00","units":"us","forecastGenerator":"BaselineForecastGenerator","generatedAt":"2022-04-03T08:36:53+00:00","updateTime":"2022-04-03T07:38:52+00:00","validTimes":"2022-04-03T01:00:00+00:00/P8DT6H","elevation":{"unitCode":"wmoUnit:m","value":405.0792},"periods":[{"number":1,"name":"Overnight","startTime":"2022-04-03T03:00:00-05:00","endTime":"2022-04-03T06:00:00-05:00","isDaytime":false,"temperature":60,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"10 mph","windDirection":"ESE","icon":"https://api.weather.gov/icons/land/night/few?size=medium","shortForecast":"Mostly Clear","detailedForecast":"Mostly clear, with a low around 60. East southeast wind around 10 mph."},{"number":2,"name":"Sunday","startTime":"2022-04-03T06:00:00-05:00","endTime":"2022-04-03T18:00:00-05:00","isDaytime":true,"temperature":91,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"10 to 20 mph","windDirection":"SE","icon":"https://api.weather.gov/icons/land/day/few?size=medium","shortForecast":"Sunny","detailedForecast":"Sunny, with a high near 91. Southeast wind 10 to 20 mph, with gusts as high as 30 mph."},{"number":3,"name":"Sunday Night","startTime":"2022-04-03T18:00:00-05:00","endTime":"2022-04-04T06:00:00-05:00","isDaytime":false,"temperature":65,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"15 to 25 mph","windDirection":"SE","icon":"https://api.weather.gov/icons/land/night/wind_few?size=medium","shortForecast":"Mostly Clear","detailedForecast":"Mostly clear, with a low around 65. Southeast wind 15 to 25 mph, with gusts as high as 35 mph."},{"number":4,"name":"Monday","startTime":"2022-04-04T06:00:00-05:00","endTime":"2022-04-04T18:00:00-05:00","isDaytime":true,"temperature":89,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"10 to 15 mph","windDirection":"S","icon":"https://api.weather.gov/icons/land/day/sct/rain_showers,20?size=medium","shortForecast":"Mostly Sunny then Slight Chance Rain Showers","detailedForecast":"A slight chance of rain showers after 1pm. Mostly sunny, with a high near 89. South wind 10 to 15 mph, with gusts as high as 25 mph. Chance of precipitation is 20%."},{"number":5,"name":"Monday Night","startTime":"2022-04-04T18:00:00-05:00","endTime":"2022-04-05T06:00:00-05:00","isDaytime":false,"temperature":58,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"5 to 15 mph","windDirection":"NE","icon":"https://api.weather.gov/icons/land/night/tsra_hi,20?size=medium","shortForecast":"Slight Chance Showers And Thunderstorms","detailedForecast":"A slight chance of rain showers before 7pm, then a slight chance of showers and thunderstorms between 7pm and 1am. Mostly clear, with a low around 58. Northeast wind 5 to 15 mph, with gusts as high as 20 mph. Chance of precipitation is 20%."},{"number":6,"name":"Tuesday","startTime":"2022-04-05T06:00:00-05:00","endTime":"2022-04-05T18:00:00-05:00","isDaytime":true,"temperature":97,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"5 to 20 mph","windDirection":"WNW","icon":"https://api.weather.gov/icons/land/day/skc?size=medium","shortForecast":"Sunny","detailedForecast":"Sunny, with a high near 97. West northwest wind 5 to 20 mph, with gusts as high as 25 mph."},{"number":7,"name":"Tuesday Night","startTime":"2022-04-05T18:00:00-05:00","endTime":"2022-04-06T06:00:00-05:00","isDaytime":false,"temperature":59,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"0 to 20 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/night/skc?size=medium","shortForecast":"Clear","detailedForecast":"Clear, with a low around 59. West wind 0 to 20 mph, with gusts as high as 25 mph."},{"number":8,"name":"Wednesday","startTime":"2022-04-06T06:00:00-05:00","endTime":"2022-04-06T18:00:00-05:00","isDaytime":true,"temperature":88,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"10 to 20 mph","windDirection":"N","icon":"https://api.weather.gov/icons/land/day/skc?size=medium","shortForecast":"Sunny","detailedForecast":"Sunny, with a high near 88. North wind 10 to 20 mph, with gusts as high as 30 mph."},{"number":9,"name":"Wednesday Night","startTime":"2022-04-06T18:00:00-05:00","endTime":"2022-04-07T06:00:00-05:00","isDaytime":false,"temperature":54,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"10 to 15 mph","windDirection":"NE","icon":"https://api.weather.gov/icons/land/night/skc?size=medium","shortForecast":"Clear","detailedForecast":"Clear, with a low around 54. Northeast wind 10 to 15 mph, with gusts as high as 20 mph."},{"number":10,"name":"Thursday","startTime":"2022-04-07T06:00:00-05:00","endTime":"2022-04-07T18:00:00-05:00","isDaytime":true,"temperature":79,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"10 to 15 mph","windDirection":"NE","icon":"https://api.weather.gov/icons/land/day/few?size=medium","shortForecast":"Sunny","detailedForecast":"Sunny, with a high near 79."},{"number":11,"name":"Thursday Night","startTime":"2022-04-07T18:00:00-05:00","endTime":"2022-04-08T06:00:00-05:00","isDaytime":false,"temperature":46,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"5 to 15 mph","windDirection":"NE","icon":"https://api.weather.gov/icons/land/night/few?size=medium","shortForecast":"Mostly Clear","detailedForecast":"Mostly clear, with a low around 46."},{"number":12,"name":"Friday","startTime":"2022-04-08T06:00:00-05:00","endTime":"2022-04-08T18:00:00-05:00","isDaytime":true,"temperature":80,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"5 to 15 mph","windDirection":"ESE","icon":"https://api.weather.gov/icons/land/day/few?size=medium","shortForecast":"Sunny","detailedForecast":"Sunny, with a high near 80."},{"number":13,"name":"Friday Night","startTime":"2022-04-08T18:00:00-05:00","endTime":"2022-04-09T06:00:00-05:00","isDaytime":false,"temperature":50,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"10 to 15 mph","windDirection":"SE","icon":"https://api.weather.gov/icons/land/night/sct?size=medium","shortForecast":"Partly Cloudy","detailedForecast":"Partly cloudy, with a low around 50."},{"number":14,"name":"Saturday","startTime":"2022-04-09T06:00:00-05:00","endTime":"2022-04-09T18:00:00-05:00","isDaytime":true,"temperature":86,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"10 to 20 mph","windDirection":"SE","icon":"https://api.weather.gov/icons/land/day/sct?size=medium","shortForecast":"Mostly Sunny","detailedForecast":"Mostly sunny, with a high near 86."}]}
  var hourly_EWX_14_74 = {"correlationId":"a2b9f8d9","title":"Unexpected Problem","type":"https://api.weather.gov/problems/UnexpectedProblem","status":500,"detail":"An unexpected problem has occurred.","instance":"https://api.weather.gov/requests/a2b9f8d9"}
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

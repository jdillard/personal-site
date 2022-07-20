---
### THIS FILE IS AUTO-GENERATED - DO NOT EDIT ###
layout: page
title: Red River Gorge, Kentucky Climbing Weather - Current, Past, and Forecasted Report
title_override: Red River Gorge<br /><small>Climbing Weather</small>
description: A lightweight weather report for Red River Gorge, Kentucky. Optimized for slow internet connections.
js_includes:
  - weather.js
---

<section class="measure center lh-copy f5-ns f6 ph2 mv4" style="text-align: justify;">
<strong>"Is it dry?"</strong>, an oft-repeated, age-old question. Here are real-time,
precipitation-focused reports of current, past, and forecasted climbing weather for Red River Gorge, Kentucky.
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
<section id="weather" data-crag="red-river-gorge-kentucky" class="mv4-ns mv3 ph2 center"></section>
<section id="nearby" class="tc lh-copy">
  <h3>Nearby Crags</h3>
<a class="nowrap no-underline fancy-link relative light-red mh3" href="/crags/jackson-falls-illinois-weather.html">Jackson Falls</a>
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
  var weekly_JKL_47_57 = {"updated":"2022-07-20T07:28:19+00:00","units":"us","forecastGenerator":"BaselineForecastGenerator","generatedAt":"2022-07-20T08:40:34+00:00","updateTime":"2022-07-20T07:28:19+00:00","validTimes":"2022-07-20T01:00:00+00:00/P8D","elevation":{"unitCode":"wmoUnit:m","value":270.0528},"periods":[{"number":1,"name":"Overnight","startTime":"2022-07-20T04:00:00-04:00","endTime":"2022-07-20T06:00:00-04:00","isDaytime":false,"temperature":67,"temperatureUnit":"F","temperatureTrend":"rising","windSpeed":"2 mph","windDirection":"S","icon":"https://api.weather.gov/icons/land/night/sct?size=medium","shortForecast":"Partly Cloudy","detailedForecast":"Partly cloudy. Low around 67, with temperatures rising to around 68 overnight. South wind around 2 mph."},{"number":2,"name":"Wednesday","startTime":"2022-07-20T06:00:00-04:00","endTime":"2022-07-20T18:00:00-04:00","isDaytime":true,"temperature":90,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"2 to 8 mph","windDirection":"SSW","icon":"https://api.weather.gov/icons/land/day/hot?size=medium","shortForecast":"Mostly Sunny","detailedForecast":"Mostly sunny, with a high near 90. Heat index values as high as 99. South southwest wind 2 to 8 mph, with gusts as high as 18 mph."},{"number":3,"name":"Wednesday Night","startTime":"2022-07-20T18:00:00-04:00","endTime":"2022-07-21T06:00:00-04:00","isDaytime":false,"temperature":71,"temperatureUnit":"F","temperatureTrend":"rising","windSpeed":"3 to 8 mph","windDirection":"SW","icon":"https://api.weather.gov/icons/land/night/tsra_hi,50?size=medium","shortForecast":"Chance Showers And Thunderstorms","detailedForecast":"A chance of showers and thunderstorms between 8pm and 5am. Some of the storms could produce heavy rain. Partly cloudy. Low around 71, with temperatures rising to around 72 overnight. Heat index values as high as 98. Southwest wind 3 to 8 mph, with gusts as high as 21 mph. Chance of precipitation is 50%. New rainfall amounts between a half and three quarters of an inch possible."},{"number":4,"name":"Thursday","startTime":"2022-07-21T06:00:00-04:00","endTime":"2022-07-21T18:00:00-04:00","isDaytime":true,"temperature":89,"temperatureUnit":"F","temperatureTrend":"falling","windSpeed":"3 to 7 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/day/sct?size=medium","shortForecast":"Mostly Sunny","detailedForecast":"Mostly sunny. High near 89, with temperatures falling to around 88 in the afternoon. West wind 3 to 7 mph, with gusts as high as 17 mph."},{"number":5,"name":"Thursday Night","startTime":"2022-07-21T18:00:00-04:00","endTime":"2022-07-22T06:00:00-04:00","isDaytime":false,"temperature":67,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"2 to 6 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/night/few?size=medium","shortForecast":"Mostly Clear","detailedForecast":"Mostly clear, with a low around 67. West wind 2 to 6 mph."},{"number":6,"name":"Friday","startTime":"2022-07-22T06:00:00-04:00","endTime":"2022-07-22T18:00:00-04:00","isDaytime":true,"temperature":93,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"6 mph","windDirection":"SW","icon":"https://api.weather.gov/icons/land/day/hot?size=medium","shortForecast":"Sunny","detailedForecast":"Sunny, with a high near 93."},{"number":7,"name":"Friday Night","startTime":"2022-07-22T18:00:00-04:00","endTime":"2022-07-23T06:00:00-04:00","isDaytime":false,"temperature":68,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"5 mph","windDirection":"SW","icon":"https://api.weather.gov/icons/land/night/few?size=medium","shortForecast":"Mostly Clear","detailedForecast":"Mostly clear, with a low around 68."},{"number":8,"name":"Saturday","startTime":"2022-07-23T06:00:00-04:00","endTime":"2022-07-23T18:00:00-04:00","isDaytime":true,"temperature":94,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"3 to 7 mph","windDirection":"SW","icon":"https://api.weather.gov/icons/land/day/hot?size=medium","shortForecast":"Sunny","detailedForecast":"Sunny, with a high near 94."},{"number":9,"name":"Saturday Night","startTime":"2022-07-23T18:00:00-04:00","endTime":"2022-07-24T06:00:00-04:00","isDaytime":false,"temperature":72,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"6 mph","windDirection":"SW","icon":"https://api.weather.gov/icons/land/night/sct?size=medium","shortForecast":"Partly Cloudy","detailedForecast":"Partly cloudy, with a low around 72."},{"number":10,"name":"Sunday","startTime":"2022-07-24T06:00:00-04:00","endTime":"2022-07-24T18:00:00-04:00","isDaytime":true,"temperature":95,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"6 to 10 mph","windDirection":"SW","icon":"https://api.weather.gov/icons/land/day/hot?size=medium","shortForecast":"Mostly Sunny","detailedForecast":"Mostly sunny, with a high near 95."},{"number":11,"name":"Sunday Night","startTime":"2022-07-24T18:00:00-04:00","endTime":"2022-07-25T06:00:00-04:00","isDaytime":false,"temperature":73,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"5 to 8 mph","windDirection":"SW","icon":"https://api.weather.gov/icons/land/night/sct/tsra_hi,20?size=medium","shortForecast":"Partly Cloudy then Slight Chance Showers And Thunderstorms","detailedForecast":"A slight chance of showers and thunderstorms after 5am. Partly cloudy, with a low around 73. Chance of precipitation is 20%."},{"number":12,"name":"Monday","startTime":"2022-07-25T06:00:00-04:00","endTime":"2022-07-25T18:00:00-04:00","isDaytime":true,"temperature":90,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"7 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/day/tsra_hi,30/tsra_hi,40?size=medium","shortForecast":"Slight Chance Showers And Thunderstorms then Chance Showers And Thunderstorms","detailedForecast":"A slight chance of showers and thunderstorms before 8am, then a chance of showers and thunderstorms between 8am and 2pm, then a chance of showers and thunderstorms. Partly sunny, with a high near 90. Chance of precipitation is 40%."},{"number":13,"name":"Monday Night","startTime":"2022-07-25T18:00:00-04:00","endTime":"2022-07-26T06:00:00-04:00","isDaytime":false,"temperature":69,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"6 mph","windDirection":"NE","icon":"https://api.weather.gov/icons/land/night/tsra_sct,40?size=medium","shortForecast":"Chance Showers And Thunderstorms","detailedForecast":"A chance of showers and thunderstorms before 8pm, then a chance of showers and thunderstorms. Mostly cloudy, with a low around 69. Chance of precipitation is 40%."},{"number":14,"name":"Tuesday","startTime":"2022-07-26T06:00:00-04:00","endTime":"2022-07-26T18:00:00-04:00","isDaytime":true,"temperature":88,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"3 to 7 mph","windDirection":"SSW","icon":"https://api.weather.gov/icons/land/day/tsra_sct,30/tsra_sct,40?size=medium","shortForecast":"Chance Showers And Thunderstorms","detailedForecast":"A chance of showers and thunderstorms before 2pm, then a chance of showers and thunderstorms. Partly sunny, with a high near 88. Chance of precipitation is 40%."}]}
  var hourly_JKL_47_57 = {"correlationId":"1ddee7cc","title":"Unexpected Problem","type":"https://api.weather.gov/problems/UnexpectedProblem","status":500,"detail":"An unexpected problem has occurred.","instance":"https://api.weather.gov/requests/1ddee7cc"}
  var crags_config = [
  {
    "name": "Red River Gorge",
    "note": "Sandstone cliffs.",
    "mountainProject": "https://www.mountainproject.com/area/105841134/red-river-gorge",
    "station": "KIOB",
    "office": "JKL/47,57",
    "coordinates": [
      -83.683,
      37.783
    ]
  }
]</script>

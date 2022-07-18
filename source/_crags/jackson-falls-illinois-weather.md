---
### THIS FILE IS AUTO-GENERATED - DO NOT EDIT ###
layout: page
title: Jackson Falls, Illinois Climbing Weather - Current, Past, and Forecasted Report
title_override: Jackson Falls<br /><small>Climbing Weather</small>
description: A lightweight weather report for Jackson Falls, Illinois. Optimized for slow internet connections.
js_includes:
  - weather.js
---

<section class="measure center lh-copy f5-ns f6 ph2 mv4" style="text-align: justify;">
<strong>"Is it dry?"</strong>, an oft-repeated, age-old question. Here are real-time,
precipitation-focused reports of current, past, and forecasted climbing weather for Jackson Falls, Illinois.
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
<section id="weather" data-crag="jackson-falls-illinois" class="mv4-ns mv3 ph2 center"></section>
<section id="nearby" class="tc lh-copy">
  <h3>Nearby Crags</h3>
<a class="nowrap no-underline fancy-link relative light-red mh3" href="/crags/red-river-gorge-kentucky-weather.html">Red River Gorge</a>
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
  var weekly_PAH_116_58 = {"updated":"2022-07-18T08:18:36+00:00","units":"us","forecastGenerator":"BaselineForecastGenerator","generatedAt":"2022-07-18T08:40:33+00:00","updateTime":"2022-07-18T08:18:36+00:00","validTimes":"2022-07-18T02:00:00+00:00/P7DT23H","elevation":{"unitCode":"wmoUnit:m","value":99.9744},"periods":[{"number":1,"name":"Overnight","startTime":"2022-07-18T03:00:00-05:00","endTime":"2022-07-18T06:00:00-05:00","isDaytime":false,"temperature":70,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"3 mph","windDirection":"WSW","icon":"https://api.weather.gov/icons/land/night/tsra,30?size=medium","shortForecast":"Chance Showers And Thunderstorms","detailedForecast":"A chance of showers and thunderstorms. Cloudy, with a low around 70. West southwest wind around 3 mph. Chance of precipitation is 30%."},{"number":2,"name":"Monday","startTime":"2022-07-18T06:00:00-05:00","endTime":"2022-07-18T18:00:00-05:00","isDaytime":true,"temperature":86,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"6 mph","windDirection":"NW","icon":"https://api.weather.gov/icons/land/day/tsra_hi,20/bkn?size=medium","shortForecast":"Slight Chance Showers And Thunderstorms then Partly Sunny","detailedForecast":"A slight chance of showers and thunderstorms before 7am. Partly sunny, with a high near 86. Northwest wind around 6 mph. Chance of precipitation is 20%."},{"number":3,"name":"Monday Night","startTime":"2022-07-18T18:00:00-05:00","endTime":"2022-07-19T06:00:00-05:00","isDaytime":false,"temperature":68,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"0 to 5 mph","windDirection":"ESE","icon":"https://api.weather.gov/icons/land/night/few/fog?size=medium","shortForecast":"Mostly Clear then Patchy Fog","detailedForecast":"Patchy fog after 2am. Mostly clear, with a low around 68. East southeast wind 0 to 5 mph."},{"number":4,"name":"Tuesday","startTime":"2022-07-19T06:00:00-05:00","endTime":"2022-07-19T18:00:00-05:00","isDaytime":true,"temperature":93,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"1 to 7 mph","windDirection":"SSE","icon":"https://api.weather.gov/icons/land/day/fog/few?size=medium","shortForecast":"Patchy Fog then Sunny","detailedForecast":"Patchy fog before 8am. Sunny, with a high near 93. South southeast wind 1 to 7 mph."},{"number":5,"name":"Tuesday Night","startTime":"2022-07-19T18:00:00-05:00","endTime":"2022-07-20T06:00:00-05:00","isDaytime":false,"temperature":75,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"2 to 6 mph","windDirection":"S","icon":"https://api.weather.gov/icons/land/night/few?size=medium","shortForecast":"Mostly Clear","detailedForecast":"Mostly clear, with a low around 75. South wind 2 to 6 mph."},{"number":6,"name":"Wednesday","startTime":"2022-07-20T06:00:00-05:00","endTime":"2022-07-20T18:00:00-05:00","isDaytime":true,"temperature":98,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"6 to 12 mph","windDirection":"SW","icon":"https://api.weather.gov/icons/land/day/hot?size=medium","shortForecast":"Sunny","detailedForecast":"Sunny, with a high near 98. Southwest wind 6 to 12 mph, with gusts as high as 23 mph."},{"number":7,"name":"Wednesday Night","startTime":"2022-07-20T18:00:00-05:00","endTime":"2022-07-21T06:00:00-05:00","isDaytime":false,"temperature":70,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"2 to 9 mph","windDirection":"WNW","icon":"https://api.weather.gov/icons/land/night/skc?size=medium","shortForecast":"Clear","detailedForecast":"Clear, with a low around 70. West northwest wind 2 to 9 mph, with gusts as high as 18 mph."},{"number":8,"name":"Thursday","startTime":"2022-07-21T06:00:00-05:00","endTime":"2022-07-21T18:00:00-05:00","isDaytime":true,"temperature":94,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"2 to 7 mph","windDirection":"NNW","icon":"https://api.weather.gov/icons/land/day/skc?size=medium","shortForecast":"Sunny","detailedForecast":"Sunny, with a high near 94. North northwest wind 2 to 7 mph."},{"number":9,"name":"Thursday Night","startTime":"2022-07-21T18:00:00-05:00","endTime":"2022-07-22T06:00:00-05:00","isDaytime":false,"temperature":68,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"1 to 6 mph","windDirection":"E","icon":"https://api.weather.gov/icons/land/night/skc?size=medium","shortForecast":"Clear","detailedForecast":"Clear, with a low around 68. East wind 1 to 6 mph."},{"number":10,"name":"Friday","startTime":"2022-07-22T06:00:00-05:00","endTime":"2022-07-22T18:00:00-05:00","isDaytime":true,"temperature":98,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"2 to 7 mph","windDirection":"SSW","icon":"https://api.weather.gov/icons/land/day/hot?size=medium","shortForecast":"Sunny","detailedForecast":"Sunny, with a high near 98. South southwest wind 2 to 7 mph."},{"number":11,"name":"Friday Night","startTime":"2022-07-22T18:00:00-05:00","endTime":"2022-07-23T06:00:00-05:00","isDaytime":false,"temperature":73,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"5 mph","windDirection":"SSW","icon":"https://api.weather.gov/icons/land/night/few?size=medium","shortForecast":"Mostly Clear","detailedForecast":"Mostly clear, with a low around 73. South southwest wind around 5 mph."},{"number":12,"name":"Saturday","startTime":"2022-07-23T06:00:00-05:00","endTime":"2022-07-23T18:00:00-05:00","isDaytime":true,"temperature":98,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"2 to 9 mph","windDirection":"SSW","icon":"https://api.weather.gov/icons/land/day/hot?size=medium","shortForecast":"Sunny","detailedForecast":"Sunny, with a high near 98. South southwest wind 2 to 9 mph."},{"number":13,"name":"Saturday Night","startTime":"2022-07-23T18:00:00-05:00","endTime":"2022-07-24T06:00:00-05:00","isDaytime":false,"temperature":76,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"3 to 7 mph","windDirection":"SSW","icon":"https://api.weather.gov/icons/land/night/few?size=medium","shortForecast":"Mostly Clear","detailedForecast":"Mostly clear, with a low around 76. South southwest wind 3 to 7 mph."},{"number":14,"name":"Sunday","startTime":"2022-07-24T06:00:00-05:00","endTime":"2022-07-24T18:00:00-05:00","isDaytime":true,"temperature":101,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"6 to 10 mph","windDirection":"SW","icon":"https://api.weather.gov/icons/land/day/hot?size=medium","shortForecast":"Sunny","detailedForecast":"Sunny, with a high near 101. Southwest wind 6 to 10 mph, with gusts as high as 18 mph."}]}
  var hourly_PAH_116_58 = {"correlationId":"161eae69","title":"Unexpected Problem","type":"https://api.weather.gov/problems/UnexpectedProblem","status":500,"detail":"An unexpected problem has occurred.","instance":"https://api.weather.gov/requests/161eae69"}
  var crags_config = [
  {
    "name": "Jackson Falls",
    "note": "The walls offer slopers, various sized pockets, roofs, and slabs.",
    "mountainProject": "https://www.mountainproject.com/area/106017458/jackson-falls",
    "station": "KPAH",
    "office": "PAH/116,58",
    "coordinates": [
      -88.682,
      37.510
    ]
  }
]</script>

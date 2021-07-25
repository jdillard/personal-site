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
  var weekly_EWX_153_89 = {"updated":"2021-07-24T07:30:59+00:00","units":"us","forecastGenerator":"BaselineForecastGenerator","generatedAt":"2021-07-24T08:42:19+00:00","updateTime":"2021-07-24T07:30:59+00:00","validTimes":"2021-07-24T01:00:00+00:00/P8DT6H","elevation":{"value":181.9656,"unitCode":"unit:m"},"periods":[{"number":1,"name":"Overnight","startTime":"2021-07-24T03:00:00-05:00","endTime":"2021-07-24T06:00:00-05:00","isDaytime":false,"temperature":74,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"5 mph","windDirection":"S","icon":"https://api.weather.gov/icons/land/night/ovc?size=medium","shortForecast":"Cloudy","detailedForecast":"Cloudy, with a low around 74. South wind around 5 mph."},{"number":2,"name":"Saturday","startTime":"2021-07-24T06:00:00-05:00","endTime":"2021-07-24T18:00:00-05:00","isDaytime":true,"temperature":99,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"5 to 10 mph","windDirection":"S","icon":"https://api.weather.gov/icons/land/day/hot?size=medium","shortForecast":"Mostly Sunny","detailedForecast":"Mostly sunny, with a high near 99. Heat index values as high as 104. South wind 5 to 10 mph, with gusts as high as 25 mph."},{"number":3,"name":"Saturday Night","startTime":"2021-07-24T18:00:00-05:00","endTime":"2021-07-25T06:00:00-05:00","isDaytime":false,"temperature":73,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"5 to 10 mph","windDirection":"S","icon":"https://api.weather.gov/icons/land/night/sct?size=medium","shortForecast":"Partly Cloudy","detailedForecast":"Partly cloudy, with a low around 73. Heat index values as high as 103. South wind 5 to 10 mph."},{"number":4,"name":"Sunday","startTime":"2021-07-25T06:00:00-05:00","endTime":"2021-07-25T18:00:00-05:00","isDaytime":true,"temperature":97,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"5 mph","windDirection":"S","icon":"https://api.weather.gov/icons/land/day/few?size=medium","shortForecast":"Sunny","detailedForecast":"Sunny, with a high near 97. Heat index values as high as 102. South wind around 5 mph."},{"number":5,"name":"Sunday Night","startTime":"2021-07-25T18:00:00-05:00","endTime":"2021-07-26T06:00:00-05:00","isDaytime":false,"temperature":72,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"5 mph","windDirection":"S","icon":"https://api.weather.gov/icons/land/night/few?size=medium","shortForecast":"Mostly Clear","detailedForecast":"Mostly clear, with a low around 72. South wind around 5 mph."},{"number":6,"name":"Monday","startTime":"2021-07-26T06:00:00-05:00","endTime":"2021-07-26T18:00:00-05:00","isDaytime":true,"temperature":98,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"5 mph","windDirection":"SSW","icon":"https://api.weather.gov/icons/land/day/few?size=medium","shortForecast":"Sunny","detailedForecast":"Sunny, with a high near 98. South southwest wind around 5 mph."},{"number":7,"name":"Monday Night","startTime":"2021-07-26T18:00:00-05:00","endTime":"2021-07-27T06:00:00-05:00","isDaytime":false,"temperature":73,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"5 mph","windDirection":"S","icon":"https://api.weather.gov/icons/land/night/few?size=medium","shortForecast":"Mostly Clear","detailedForecast":"Mostly clear, with a low around 73. South wind around 5 mph."},{"number":8,"name":"Tuesday","startTime":"2021-07-27T06:00:00-05:00","endTime":"2021-07-27T18:00:00-05:00","isDaytime":true,"temperature":99,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"5 to 10 mph","windDirection":"S","icon":"https://api.weather.gov/icons/land/day/hot?size=medium","shortForecast":"Sunny","detailedForecast":"Sunny, with a high near 99. South wind 5 to 10 mph."},{"number":9,"name":"Tuesday Night","startTime":"2021-07-27T18:00:00-05:00","endTime":"2021-07-28T06:00:00-05:00","isDaytime":false,"temperature":76,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"5 to 10 mph","windDirection":"S","icon":"https://api.weather.gov/icons/land/night/sct?size=medium","shortForecast":"Partly Cloudy","detailedForecast":"Partly cloudy, with a low around 76. South wind 5 to 10 mph."},{"number":10,"name":"Wednesday","startTime":"2021-07-28T06:00:00-05:00","endTime":"2021-07-28T18:00:00-05:00","isDaytime":true,"temperature":96,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"5 to 10 mph","windDirection":"SSW","icon":"https://api.weather.gov/icons/land/day/sct/tsra_hi,30?size=medium","shortForecast":"Mostly Sunny then Chance Showers And Thunderstorms","detailedForecast":"A chance of showers and thunderstorms after 1pm. Mostly sunny, with a high near 96. Chance of precipitation is 30%."},{"number":11,"name":"Wednesday Night","startTime":"2021-07-28T18:00:00-05:00","endTime":"2021-07-29T06:00:00-05:00","isDaytime":false,"temperature":75,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"5 to 10 mph","windDirection":"SSE","icon":"https://api.weather.gov/icons/land/night/tsra_hi,30/sct?size=medium","shortForecast":"Chance Showers And Thunderstorms then Partly Cloudy","detailedForecast":"A chance of showers and thunderstorms before 7pm. Partly cloudy, with a low around 75. Chance of precipitation is 30%."},{"number":12,"name":"Thursday","startTime":"2021-07-29T06:00:00-05:00","endTime":"2021-07-29T18:00:00-05:00","isDaytime":true,"temperature":94,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"5 to 10 mph","windDirection":"S","icon":"https://api.weather.gov/icons/land/day/sct/tsra_hi,20?size=medium","shortForecast":"Mostly Sunny then Slight Chance Showers And Thunderstorms","detailedForecast":"A slight chance of showers and thunderstorms after 1pm. Mostly sunny, with a high near 94. Chance of precipitation is 20%."},{"number":13,"name":"Thursday Night","startTime":"2021-07-29T18:00:00-05:00","endTime":"2021-07-30T06:00:00-05:00","isDaytime":false,"temperature":75,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"5 to 10 mph","windDirection":"SSE","icon":"https://api.weather.gov/icons/land/night/tsra_hi,20/few?size=medium","shortForecast":"Slight Chance Showers And Thunderstorms then Mostly Clear","detailedForecast":"A slight chance of showers and thunderstorms before 7pm. Mostly clear, with a low around 75. Chance of precipitation is 20%."},{"number":14,"name":"Friday","startTime":"2021-07-30T06:00:00-05:00","endTime":"2021-07-30T18:00:00-05:00","isDaytime":true,"temperature":95,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"5 to 10 mph","windDirection":"S","icon":"https://api.weather.gov/icons/land/day/few/tsra_hi,20?size=medium","shortForecast":"Sunny then Slight Chance Showers And Thunderstorms","detailedForecast":"A slight chance of showers and thunderstorms after 1pm. Sunny, with a high near 95. Chance of precipitation is 20%."}]}
  var hourly_EWX_153_89 = {"correlationId":"13e8d1ea","title":"Unexpected Problem","type":"https://api.weather.gov/problems/UnexpectedProblem","status":500,"detail":"An unexpected problem has occurred.","instance":"https://api.weather.gov/requests/13e8d1ea"}
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

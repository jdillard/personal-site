---
### THIS FILE IS AUTO-GENERATED - DO NOT EDIT ###
layout: page
title: Reimer's Ranch, Texas Climbing Weather - Current, Past, and Forecasted Report
title_override: Reimer's Ranch<br /><small>Climbing Weather</small>
description: A lightweight weather report for Reimer's Ranch, Texas. Optimized for slow internet connections.
js_includes:
  - weather.js
---

<section class="measure center lh-copy f5-ns f6 ph2 mv4" style="text-align: justify;">
<strong>"Is it dry?"</strong>, an oft-repeated, age-old question. Here are real-time,
precipitation-focused reports of current, past, and forecasted climbing weather for Reimer's Ranch, Texas.
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
<section id="weather" data-crag="reimers-ranch-texas" class="mv4-ns mv3 ph2 center"></section>
<section id="nearby" class="tc lh-copy">
  <h3>Nearby Crags</h3>
<a class="nowrap no-underline fancy-link relative light-red mh3" href="/crags/the-greenbelt-texas-weather.html">The Greenbelt</a>
<a class="nowrap no-underline fancy-link relative light-red mh3" href="/crags/continental-ranch-texas-weather.html">Continental Ranch</a>
<a class="nowrap no-underline fancy-link relative light-red mh3" href="/crags/pace-bend-park-texas-weather.html">Pace Bend Park</a>
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
  var weekly_EWX_141_93 = {"updated":"2021-06-05T07:34:40+00:00","units":"us","forecastGenerator":"BaselineForecastGenerator","generatedAt":"2021-06-05T09:23:16+00:00","updateTime":"2021-06-05T07:34:40+00:00","validTimes":"2021-06-05T01:00:00+00:00/P8DT6H","elevation":{"value":288.9504,"unitCode":"unit:m"},"periods":[{"number":1,"name":"Overnight","startTime":"2021-06-05T04:00:00-05:00","endTime":"2021-06-05T06:00:00-05:00","isDaytime":false,"temperature":66,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"0 to 5 mph","windDirection":"ESE","icon":"https://api.weather.gov/icons/land/night/tsra,30?size=medium","shortForecast":"Chance Showers And Thunderstorms","detailedForecast":"A chance of showers and thunderstorms. Mostly cloudy, with a low around 66. East southeast wind 0 to 5 mph. Chance of precipitation is 30%. New rainfall amounts between a tenth and quarter of an inch possible."},{"number":2,"name":"Saturday","startTime":"2021-06-05T06:00:00-05:00","endTime":"2021-06-05T18:00:00-05:00","isDaytime":true,"temperature":82,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"0 to 10 mph","windDirection":"S","icon":"https://api.weather.gov/icons/land/day/tsra_hi,30/tsra_hi,50?size=medium","shortForecast":"Chance Showers And Thunderstorms","detailedForecast":"A chance of showers and thunderstorms. Partly sunny, with a high near 82. South wind 0 to 10 mph. Chance of precipitation is 50%. New rainfall amounts between a quarter and half of an inch possible."},{"number":3,"name":"Saturday Night","startTime":"2021-06-05T18:00:00-05:00","endTime":"2021-06-06T06:00:00-05:00","isDaytime":false,"temperature":68,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"5 to 10 mph","windDirection":"SSE","icon":"https://api.weather.gov/icons/land/night/tsra_hi,50/sct?size=medium","shortForecast":"Chance Showers And Thunderstorms then Partly Cloudy","detailedForecast":"A chance of showers and thunderstorms before 10pm. Partly cloudy, with a low around 68. South southeast wind 5 to 10 mph. Chance of precipitation is 50%. New rainfall amounts between a tenth and quarter of an inch possible."},{"number":4,"name":"Sunday","startTime":"2021-06-06T06:00:00-05:00","endTime":"2021-06-06T18:00:00-05:00","isDaytime":true,"temperature":88,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"5 to 15 mph","windDirection":"SSE","icon":"https://api.weather.gov/icons/land/day/bkn/tsra_hi,20?size=medium","shortForecast":"Partly Sunny then Slight Chance Showers And Thunderstorms","detailedForecast":"A slight chance of showers and thunderstorms after 1pm. Partly sunny, with a high near 88. South southeast wind 5 to 15 mph, with gusts as high as 20 mph. Chance of precipitation is 20%."},{"number":5,"name":"Sunday Night","startTime":"2021-06-06T18:00:00-05:00","endTime":"2021-06-07T06:00:00-05:00","isDaytime":false,"temperature":71,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"10 to 15 mph","windDirection":"SSE","icon":"https://api.weather.gov/icons/land/night/tsra_hi,20?size=medium","shortForecast":"Slight Chance Showers And Thunderstorms","detailedForecast":"A slight chance of showers and thunderstorms. Mostly cloudy, with a low around 71. South southeast wind 10 to 15 mph. Chance of precipitation is 20%."},{"number":6,"name":"Monday","startTime":"2021-06-07T06:00:00-05:00","endTime":"2021-06-07T18:00:00-05:00","isDaytime":true,"temperature":89,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"10 to 15 mph","windDirection":"SSE","icon":"https://api.weather.gov/icons/land/day/tsra_sct,20?size=medium","shortForecast":"Slight Chance Showers And Thunderstorms","detailedForecast":"A slight chance of showers and thunderstorms. Partly sunny, with a high near 89. South southeast wind 10 to 15 mph, with gusts as high as 20 mph. Chance of precipitation is 20%."},{"number":7,"name":"Monday Night","startTime":"2021-06-07T18:00:00-05:00","endTime":"2021-06-08T06:00:00-05:00","isDaytime":false,"temperature":72,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"10 mph","windDirection":"SSE","icon":"https://api.weather.gov/icons/land/night/tsra_hi,20?size=medium","shortForecast":"Slight Chance Showers And Thunderstorms","detailedForecast":"A slight chance of showers and thunderstorms before 1am. Mostly cloudy, with a low around 72. South southeast wind around 10 mph, with gusts as high as 20 mph. Chance of precipitation is 20%."},{"number":8,"name":"Tuesday","startTime":"2021-06-08T06:00:00-05:00","endTime":"2021-06-08T18:00:00-05:00","isDaytime":true,"temperature":90,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"5 to 15 mph","windDirection":"SSE","icon":"https://api.weather.gov/icons/land/day/bkn/tsra_hi,20?size=medium","shortForecast":"Partly Sunny then Slight Chance Showers And Thunderstorms","detailedForecast":"A slight chance of showers and thunderstorms after 1pm. Partly sunny, with a high near 90. South southeast wind 5 to 15 mph, with gusts as high as 25 mph. Chance of precipitation is 20%."},{"number":9,"name":"Tuesday Night","startTime":"2021-06-08T18:00:00-05:00","endTime":"2021-06-09T06:00:00-05:00","isDaytime":false,"temperature":73,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"10 to 15 mph","windDirection":"SSE","icon":"https://api.weather.gov/icons/land/night/tsra_hi,20/sct?size=medium","shortForecast":"Slight Chance Showers And Thunderstorms then Partly Cloudy","detailedForecast":"A slight chance of showers and thunderstorms before 7pm. Partly cloudy, with a low around 73. South southeast wind 10 to 15 mph, with gusts as high as 20 mph. Chance of precipitation is 20%."},{"number":10,"name":"Wednesday","startTime":"2021-06-09T06:00:00-05:00","endTime":"2021-06-09T18:00:00-05:00","isDaytime":true,"temperature":92,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"10 to 15 mph","windDirection":"S","icon":"https://api.weather.gov/icons/land/day/sct/tsra_hi,20?size=medium","shortForecast":"Mostly Sunny then Slight Chance Showers And Thunderstorms","detailedForecast":"A slight chance of showers and thunderstorms after 1pm. Mostly sunny, with a high near 92. Chance of precipitation is 20%."},{"number":11,"name":"Wednesday Night","startTime":"2021-06-09T18:00:00-05:00","endTime":"2021-06-10T06:00:00-05:00","isDaytime":false,"temperature":72,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"10 mph","windDirection":"S","icon":"https://api.weather.gov/icons/land/night/tsra_hi,20/sct?size=medium","shortForecast":"Slight Chance Showers And Thunderstorms then Partly Cloudy","detailedForecast":"A slight chance of showers and thunderstorms before 7pm. Partly cloudy, with a low around 72. Chance of precipitation is 20%."},{"number":12,"name":"Thursday","startTime":"2021-06-10T06:00:00-05:00","endTime":"2021-06-10T18:00:00-05:00","isDaytime":true,"temperature":89,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"5 to 10 mph","windDirection":"S","icon":"https://api.weather.gov/icons/land/day/sct?size=medium","shortForecast":"Mostly Sunny","detailedForecast":"Mostly sunny, with a high near 89."},{"number":13,"name":"Thursday Night","startTime":"2021-06-10T18:00:00-05:00","endTime":"2021-06-11T06:00:00-05:00","isDaytime":false,"temperature":71,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"5 to 10 mph","windDirection":"SSE","icon":"https://api.weather.gov/icons/land/night/sct?size=medium","shortForecast":"Partly Cloudy","detailedForecast":"Partly cloudy, with a low around 71."},{"number":14,"name":"Friday","startTime":"2021-06-11T06:00:00-05:00","endTime":"2021-06-11T18:00:00-05:00","isDaytime":true,"temperature":87,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"5 to 10 mph","windDirection":"S","icon":"https://api.weather.gov/icons/land/day/sct/tsra_hi,20?size=medium","shortForecast":"Mostly Sunny then Slight Chance Showers And Thunderstorms","detailedForecast":"A slight chance of showers and thunderstorms after 1pm. Mostly sunny, with a high near 87. Chance of precipitation is 20%."}]}
  var hourly_EWX_141_93 = {"correlationId":"2965aec5","title":"Unexpected Problem","type":"https://api.weather.gov/problems/UnexpectedProblem","status":500,"detail":"An unexpected problem has occurred.","instance":"https://api.weather.gov/requests/2965aec5"}
  var crags_config = [
  {
    "name": "Reimer's Ranch",
    "note": "Porous limestone that can take a couple days to dry out.",
    "mountainProject": "https://www.mountainproject.com/area/105837312/reimers-ranch",
    "station": "KRYW",
    "office": "EWX/141,93",
    "coordinates": [
      -98.122,
      30.334
    ]
  }
]</script>

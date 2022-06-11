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
  var weekly_JKL_47_57 = {"updated":"2022-06-11T08:14:09+00:00","units":"us","forecastGenerator":"BaselineForecastGenerator","generatedAt":"2022-06-11T08:37:47+00:00","updateTime":"2022-06-11T08:14:09+00:00","validTimes":"2022-06-11T02:00:00+00:00/P7DT23H","elevation":{"unitCode":"wmoUnit:m","value":270.0528},"periods":[{"number":1,"name":"Overnight","startTime":"2022-06-11T04:00:00-04:00","endTime":"2022-06-11T06:00:00-04:00","isDaytime":false,"temperature":58,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"1 mph","windDirection":"E","icon":"https://api.weather.gov/icons/land/night/ovc?size=medium","shortForecast":"Cloudy","detailedForecast":"Cloudy, with a low around 58. East wind around 1 mph."},{"number":2,"name":"Saturday","startTime":"2022-06-11T06:00:00-04:00","endTime":"2022-06-11T18:00:00-04:00","isDaytime":true,"temperature":79,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"2 mph","windDirection":"SSE","icon":"https://api.weather.gov/icons/land/day/fog/bkn?size=medium","shortForecast":"Patchy Fog then Partly Sunny","detailedForecast":"Patchy fog before 9am. Partly sunny, with a high near 79. South southeast wind around 2 mph."},{"number":3,"name":"Saturday Night","startTime":"2022-06-11T18:00:00-04:00","endTime":"2022-06-12T06:00:00-04:00","isDaytime":false,"temperature":62,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"2 mph","windDirection":"SSW","icon":"https://api.weather.gov/icons/land/night/sct?size=medium","shortForecast":"Partly Cloudy","detailedForecast":"Partly cloudy, with a low around 62. South southwest wind around 2 mph. New rainfall amounts less than a tenth of an inch possible."},{"number":4,"name":"Sunday","startTime":"2022-06-12T06:00:00-04:00","endTime":"2022-06-12T18:00:00-04:00","isDaytime":true,"temperature":87,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"2 to 7 mph","windDirection":"SW","icon":"https://api.weather.gov/icons/land/day/tsra_hi,20/bkn?size=medium","shortForecast":"Slight Chance Showers And Thunderstorms then Partly Sunny","detailedForecast":"A slight chance of showers and thunderstorms between 7am and 9am. Partly sunny, with a high near 87. Southwest wind 2 to 7 mph, with gusts as high as 16 mph. Chance of precipitation is 20%. New rainfall amounts less than a tenth of an inch possible."},{"number":5,"name":"Sunday Night","startTime":"2022-06-12T18:00:00-04:00","endTime":"2022-06-13T06:00:00-04:00","isDaytime":false,"temperature":68,"temperatureUnit":"F","temperatureTrend":"rising","windSpeed":"1 to 5 mph","windDirection":"SW","icon":"https://api.weather.gov/icons/land/night/tsra_hi,20/tsra_hi,30?size=medium","shortForecast":"Chance Showers And Thunderstorms","detailedForecast":"A chance of showers and thunderstorms between 10pm and 5am, then a chance of showers and thunderstorms. Partly cloudy. Low around 68, with temperatures rising to around 69 overnight. Southwest wind 1 to 5 mph. Chance of precipitation is 30%. New rainfall amounts between a tenth and quarter of an inch possible."},{"number":6,"name":"Monday","startTime":"2022-06-13T06:00:00-04:00","endTime":"2022-06-13T18:00:00-04:00","isDaytime":true,"temperature":91,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"2 to 6 mph","windDirection":"SW","icon":"https://api.weather.gov/icons/land/day/tsra_hi,30?size=medium","shortForecast":"Chance Showers And Thunderstorms","detailedForecast":"A chance of showers and thunderstorms before 7am, then a chance of showers and thunderstorms. Mostly sunny, with a high near 91. Chance of precipitation is 30%."},{"number":7,"name":"Monday Night","startTime":"2022-06-13T18:00:00-04:00","endTime":"2022-06-14T06:00:00-04:00","isDaytime":false,"temperature":70,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"5 mph","windDirection":"SSW","icon":"https://api.weather.gov/icons/land/night/tsra_hi,20/sct?size=medium","shortForecast":"Slight Chance Showers And Thunderstorms then Partly Cloudy","detailedForecast":"A slight chance of showers and thunderstorms before midnight. Partly cloudy, with a low around 70. Chance of precipitation is 20%."},{"number":8,"name":"Tuesday","startTime":"2022-06-14T06:00:00-04:00","endTime":"2022-06-14T18:00:00-04:00","isDaytime":true,"temperature":93,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"2 to 6 mph","windDirection":"SW","icon":"https://api.weather.gov/icons/land/day/hot?size=medium","shortForecast":"Mostly Sunny","detailedForecast":"Mostly sunny, with a high near 93."},{"number":9,"name":"Tuesday Night","startTime":"2022-06-14T18:00:00-04:00","endTime":"2022-06-15T06:00:00-04:00","isDaytime":false,"temperature":70,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"5 mph","windDirection":"SW","icon":"https://api.weather.gov/icons/land/night/few?size=medium","shortForecast":"Mostly Clear","detailedForecast":"Mostly clear, with a low around 70."},{"number":10,"name":"Wednesday","startTime":"2022-06-15T06:00:00-04:00","endTime":"2022-06-15T18:00:00-04:00","isDaytime":true,"temperature":93,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"2 to 6 mph","windDirection":"WSW","icon":"https://api.weather.gov/icons/land/day/hot/tsra_hi,20?size=medium","shortForecast":"Sunny then Slight Chance Showers And Thunderstorms","detailedForecast":"A slight chance of showers and thunderstorms after 5pm. Sunny, with a high near 93. Chance of precipitation is 20%."},{"number":11,"name":"Wednesday Night","startTime":"2022-06-15T18:00:00-04:00","endTime":"2022-06-16T06:00:00-04:00","isDaytime":false,"temperature":71,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"5 mph","windDirection":"SSW","icon":"https://api.weather.gov/icons/land/night/tsra_hi,20?size=medium","shortForecast":"Slight Chance Showers And Thunderstorms","detailedForecast":"A slight chance of showers and thunderstorms. Partly cloudy, with a low around 71. Chance of precipitation is 20%."},{"number":12,"name":"Thursday","startTime":"2022-06-16T06:00:00-04:00","endTime":"2022-06-16T18:00:00-04:00","isDaytime":true,"temperature":93,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"2 to 6 mph","windDirection":"SW","icon":"https://api.weather.gov/icons/land/day/tsra_hi,20/tsra_hi,40?size=medium","shortForecast":"Chance Showers And Thunderstorms","detailedForecast":"A slight chance of rain showers before 8am, then a chance of showers and thunderstorms. Mostly sunny, with a high near 93. Chance of precipitation is 40%."},{"number":13,"name":"Thursday Night","startTime":"2022-06-16T18:00:00-04:00","endTime":"2022-06-17T06:00:00-04:00","isDaytime":false,"temperature":68,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"5 mph","windDirection":"SSW","icon":"https://api.weather.gov/icons/land/night/tsra_hi,40/tsra_hi,20?size=medium","shortForecast":"Chance Showers And Thunderstorms","detailedForecast":"A chance of showers and thunderstorms before 3am. Partly cloudy, with a low around 68. Chance of precipitation is 40%."},{"number":14,"name":"Friday","startTime":"2022-06-17T06:00:00-04:00","endTime":"2022-06-17T18:00:00-04:00","isDaytime":true,"temperature":89,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"2 to 7 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/day/sct/tsra_hi,20?size=medium","shortForecast":"Mostly Sunny then Slight Chance Showers And Thunderstorms","detailedForecast":"A slight chance of showers and thunderstorms after 1pm. Mostly sunny, with a high near 89. Chance of precipitation is 20%."}]}
  var hourly_JKL_47_57 = {"correlationId":"45a0c10b","title":"Unexpected Problem","type":"https://api.weather.gov/problems/UnexpectedProblem","status":500,"detail":"An unexpected problem has occurred.","instance":"https://api.weather.gov/requests/45a0c10b"}
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

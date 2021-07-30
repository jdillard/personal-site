---
### THIS FILE IS AUTO-GENERATED - DO NOT EDIT ###
layout: page
title: Gunnison, Colorado Climbing Weather - Current, Past, and Forecasted Report
title_override: Gunnison<br /><small>Climbing Weather</small>
description: A lightweight weather report for Gunnison, Colorado. Optimized for slow internet connections.
js_includes:
  - weather.js
---

<section class="measure center lh-copy f5-ns f6 ph2 mv4" style="text-align: justify;">
<strong>"Is it dry?"</strong>, an oft-repeated, age-old question. Here are real-time,
precipitation-focused reports of current, past, and forecasted climbing weather for Gunnison, Colorado.
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
<section id="weather" data-crag="gunnison-colorado" class="mv4-ns mv3 ph2 center"></section>
<section id="nearby" class="tc lh-copy">
  <h3>Nearby Crags</h3>
<a class="nowrap no-underline fancy-link relative light-red mh3" href="/crags/clear-creek-canyon-colorado-weather.html">Clear Creek Canyon</a>
<a class="nowrap no-underline fancy-link relative light-red mh3" href="/crags/staunton-state-park-colorado-weather.html">Staunton State Park</a>
<a class="nowrap no-underline fancy-link relative light-red mh3" href="/crags/lime-park-lime-creek-colorado-weather.html">Lime Park (Lime Creek)</a>
<a class="nowrap no-underline fancy-link relative light-red mh3" href="/crags/independence-pass-colorado-weather.html">Independence Pass</a>
<a class="nowrap no-underline fancy-link relative light-red mh3" href="/crags/moab-utah-weather.html">Moab</a>
<a class="nowrap no-underline fancy-link relative light-red mh3" href="/crags/estes-park-valley-colorado-weather.html">Estes Park Valley</a>
</section>
<section id="nearby" class="tc lh-copy">
  <h3>Other Metros</h3>
  <select class="ma1 bg-near-white pa2" id="stateSel">
    <option value="Texas">Texas</option>
    <option value="Washington">Washington</option>
    <option value="Colorado" selected>Colorado</option>
    <option value="Tennessee">Tennessee</option>
    <option value="Utah">Utah</option>
    <option value="California">California</option>
  </select>
  <select class="ma1 bg-near-white pa2" id="citySel">
    <option value="Denver" selected>Denver</option>
  </select>
  <a id="selectMetro" class="f6 link dim ph3 pv2 ma1 dib white bg-light-red" href="/crags/denver-colorado-weather.html">Select Metro</a>
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
  var weekly_GJT_152_72 = {"updated":"2021-07-30T06:35:28+00:00","units":"us","forecastGenerator":"BaselineForecastGenerator","generatedAt":"2021-07-30T08:44:43+00:00","updateTime":"2021-07-30T06:35:28+00:00","validTimes":"2021-07-30T00:00:00+00:00/P7DT1H","elevation":{"value":2479.8528,"unitCode":"unit:m"},"periods":[{"number":1,"name":"Overnight","startTime":"2021-07-30T02:00:00-06:00","endTime":"2021-07-30T06:00:00-06:00","isDaytime":false,"temperature":52,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"5 mph","windDirection":"N","icon":"https://api.weather.gov/icons/land/night/sct?size=medium","shortForecast":"Partly Cloudy","detailedForecast":"Partly cloudy, with a low around 52. North wind around 5 mph."},{"number":2,"name":"Friday","startTime":"2021-07-30T06:00:00-06:00","endTime":"2021-07-30T18:00:00-06:00","isDaytime":true,"temperature":81,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"0 to 10 mph","windDirection":"WSW","icon":"https://api.weather.gov/icons/land/day/tsra_hi/tsra_hi,80?size=medium","shortForecast":"Chance Showers And Thunderstorms","detailedForecast":"A chance of showers and thunderstorms between 11am and 2pm, then showers and thunderstorms between 2pm and 5pm, then showers and thunderstorms likely. Partly sunny, with a high near 81. West southwest wind 0 to 10 mph. Chance of precipitation is 80%."},{"number":3,"name":"Friday Night","startTime":"2021-07-30T18:00:00-06:00","endTime":"2021-07-31T06:00:00-06:00","isDaytime":false,"temperature":51,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"0 to 10 mph","windDirection":"NE","icon":"https://api.weather.gov/icons/land/night/tsra_hi,70/tsra_hi,20?size=medium","shortForecast":"Showers And Thunderstorms Likely","detailedForecast":"Showers and thunderstorms likely before 9pm, then showers and thunderstorms likely between 9pm and midnight, then a slight chance of showers and thunderstorms. Mostly cloudy, with a low around 51. Northeast wind 0 to 10 mph. Chance of precipitation is 70%."},{"number":4,"name":"Saturday","startTime":"2021-07-31T06:00:00-06:00","endTime":"2021-07-31T18:00:00-06:00","isDaytime":true,"temperature":77,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"0 to 10 mph","windDirection":"SSW","icon":"https://api.weather.gov/icons/land/day/tsra,30/tsra,90?size=medium","shortForecast":"Chance Showers And Thunderstorms then Showers And Thunderstorms","detailedForecast":"A chance of rain showers before 9am, then a chance of showers and thunderstorms between 9am and noon, then showers and thunderstorms. Mostly cloudy, with a high near 77. South southwest wind 0 to 10 mph. Chance of precipitation is 90%."},{"number":5,"name":"Saturday Night","startTime":"2021-07-31T18:00:00-06:00","endTime":"2021-08-01T06:00:00-06:00","isDaytime":false,"temperature":51,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"5 to 10 mph","windDirection":"ESE","icon":"https://api.weather.gov/icons/land/night/tsra_sct,70/tsra_sct,20?size=medium","shortForecast":"Showers And Thunderstorms Likely","detailedForecast":"Showers and thunderstorms likely before 9pm, then showers and thunderstorms likely between 9pm and midnight, then a slight chance of showers and thunderstorms. Mostly cloudy, with a low around 51. East southeast wind 5 to 10 mph. Chance of precipitation is 70%."},{"number":6,"name":"Sunday","startTime":"2021-08-01T06:00:00-06:00","endTime":"2021-08-01T18:00:00-06:00","isDaytime":true,"temperature":73,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"5 to 10 mph","windDirection":"SE","icon":"https://api.weather.gov/icons/land/day/tsra_sct,30/tsra_sct,90?size=medium","shortForecast":"Chance Showers And Thunderstorms then Showers And Thunderstorms","detailedForecast":"A chance of rain showers before 9am, then a chance of showers and thunderstorms between 9am and noon, then showers and thunderstorms. Partly sunny, with a high near 73. Chance of precipitation is 90%."},{"number":7,"name":"Sunday Night","startTime":"2021-08-01T18:00:00-06:00","endTime":"2021-08-02T06:00:00-06:00","isDaytime":false,"temperature":51,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"5 to 10 mph","windDirection":"E","icon":"https://api.weather.gov/icons/land/night/tsra_sct,70/tsra_sct,20?size=medium","shortForecast":"Showers And Thunderstorms Likely","detailedForecast":"Showers and thunderstorms likely. Mostly cloudy, with a low around 51. Chance of precipitation is 70%."},{"number":8,"name":"Monday","startTime":"2021-08-02T06:00:00-06:00","endTime":"2021-08-02T18:00:00-06:00","isDaytime":true,"temperature":73,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"5 to 10 mph","windDirection":"WNW","icon":"https://api.weather.gov/icons/land/day/tsra_sct?size=medium","shortForecast":"Showers And Thunderstorms","detailedForecast":"Showers and thunderstorms. Mostly cloudy, with a high near 73."},{"number":9,"name":"Monday Night","startTime":"2021-08-02T18:00:00-06:00","endTime":"2021-08-03T06:00:00-06:00","isDaytime":false,"temperature":49,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"0 to 10 mph","windDirection":"WNW","icon":"https://api.weather.gov/icons/land/night/tsra_hi/bkn?size=medium","shortForecast":"Showers And Thunderstorms Likely then Mostly Cloudy","detailedForecast":"Showers and thunderstorms likely before midnight. Mostly cloudy, with a low around 49."},{"number":10,"name":"Tuesday","startTime":"2021-08-03T06:00:00-06:00","endTime":"2021-08-03T18:00:00-06:00","isDaytime":true,"temperature":75,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"0 to 15 mph","windDirection":"WNW","icon":"https://api.weather.gov/icons/land/day/rain_showers/tsra_sct?size=medium","shortForecast":"Showers And Thunderstorms Likely","detailedForecast":"A chance of rain showers before noon, then showers and thunderstorms likely. Partly sunny, with a high near 75."},{"number":11,"name":"Tuesday Night","startTime":"2021-08-03T18:00:00-06:00","endTime":"2021-08-04T06:00:00-06:00","isDaytime":false,"temperature":47,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"0 to 15 mph","windDirection":"N","icon":"https://api.weather.gov/icons/land/night/tsra_hi/sct?size=medium","shortForecast":"Chance Showers And Thunderstorms then Partly Cloudy","detailedForecast":"A chance of showers and thunderstorms before midnight. Partly cloudy, with a low around 47."},{"number":12,"name":"Wednesday","startTime":"2021-08-04T06:00:00-06:00","endTime":"2021-08-04T18:00:00-06:00","isDaytime":true,"temperature":78,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"0 to 10 mph","windDirection":"WNW","icon":"https://api.weather.gov/icons/land/day/sct/tsra_hi?size=medium","shortForecast":"Mostly Sunny then Chance Showers And Thunderstorms","detailedForecast":"A chance of showers and thunderstorms after noon. Mostly sunny, with a high near 78."},{"number":13,"name":"Wednesday Night","startTime":"2021-08-04T18:00:00-06:00","endTime":"2021-08-05T06:00:00-06:00","isDaytime":false,"temperature":48,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"0 to 10 mph","windDirection":"NE","icon":"https://api.weather.gov/icons/land/night/tsra_hi/few?size=medium","shortForecast":"Slight Chance Showers And Thunderstorms then Mostly Clear","detailedForecast":"A slight chance of showers and thunderstorms before midnight. Mostly clear, with a low around 48."},{"number":14,"name":"Thursday","startTime":"2021-08-05T06:00:00-06:00","endTime":"2021-08-05T18:00:00-06:00","isDaytime":true,"temperature":79,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"0 to 15 mph","windDirection":"SW","icon":"https://api.weather.gov/icons/land/day/few/tsra_hi?size=medium","shortForecast":"Sunny then Slight Chance Showers And Thunderstorms","detailedForecast":"A slight chance of showers and thunderstorms after noon. Sunny, with a high near 79."}]}
  var hourly_GJT_152_72 = {"correlationId":"3e15780","title":"Unexpected Problem","type":"https://api.weather.gov/problems/UnexpectedProblem","status":500,"detail":"An unexpected problem has occurred.","instance":"https://api.weather.gov/requests/3e15780"}
  var crags_config = [
  {
    "name": "Gunnison",
    "note": "Granite.",
    "mountainProject": "https://www.mountainproject.com/area/105802040/gunnison",
    "station": "KGUC",
    "office": "GJT/152,72",
    "coordinates": [
      -106.927,
      38.546
    ]
  }
]</script>

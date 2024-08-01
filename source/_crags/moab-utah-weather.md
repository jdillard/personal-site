---
### THIS FILE IS AUTO-GENERATED - DO NOT EDIT ###
layout: page
title: Moab, Utah Climbing Weather - Current, Past, and Forecasted
title_override: Moab<br /><small>Climbing Weather</small>
description: A lightweight weather report for Moab, Utah. Optimized for slow internet connections.
js_includes:
  - weather.js
---

<section class="measure center lh-copy f5-ns f6 ph2 mv4" style="text-align: justify;">
<strong>"Is it dry?"</strong>, an oft-repeated, age-old question. Here are real-time,
precipitation-focused reports of current, past, and forecasted climbing weather for Moab, Utah.
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
<section id="weather" data-crag="moab-utah" class="mv4-ns mv3 ph2 center"></section>
<section id="nearby" class="tc lh-copy">
  <h3>Nearby Crags</h3>
<a class="nowrap no-underline fancy-link relative light-red mh3" href="/crags/clear-creek-canyon-colorado-weather.html">Clear Creek Canyon</a>
<a class="nowrap no-underline fancy-link relative light-red mh3" href="/crags/staunton-state-park-colorado-weather.html">Staunton State Park</a>
<a class="nowrap no-underline fancy-link relative light-red mh3" href="/crags/lime-park-lime-creek-colorado-weather.html">Lime Park (Lime Creek)</a>
<a class="nowrap no-underline fancy-link relative light-red mh3" href="/crags/independence-pass-colorado-weather.html">Independence Pass</a>
<a class="nowrap no-underline fancy-link relative light-red mh3" href="/crags/estes-park-valley-colorado-weather.html">Estes Park Valley</a>
<a class="nowrap no-underline fancy-link relative light-red mh3" href="/crags/gunnison-colorado-weather.html">Gunnison</a>
<a class="nowrap no-underline fancy-link relative light-red mh3" href="/crags/little-cottonwood-canyon-utah-weather.html">Little Cottonwood Canyon</a>
<a class="nowrap no-underline fancy-link relative light-red mh3" href="/crags/city-of-rocks-idaho-weather.html">City of Rocks</a>
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
  var weekly_GJT_60_82 = {"units":"us","forecastGenerator":"BaselineForecastGenerator","generatedAt":"2024-08-01T08:34:01+00:00","updateTime":"2024-08-01T08:13:37+00:00","validTimes":"2024-08-01T02:00:00+00:00/P7DT23H","elevation":{"unitCode":"wmoUnit:m","value":1414.8816},"periods":[{"number":1,"name":"Overnight","startTime":"2024-08-01T02:00:00-06:00","endTime":"2024-08-01T06:00:00-06:00","isDaytime":false,"temperature":67,"temperatureUnit":"F","temperatureTrend":"","probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"windSpeed":"0 to 5 mph","windDirection":"ESE","icon":"https://api.weather.gov/icons/land/night/few?size=medium","shortForecast":"Mostly Clear","detailedForecast":"Mostly clear, with a low around 67. East southeast wind 0 to 5 mph."},{"number":2,"name":"Thursday","startTime":"2024-08-01T06:00:00-06:00","endTime":"2024-08-01T18:00:00-06:00","isDaytime":true,"temperature":104,"temperatureUnit":"F","temperatureTrend":"","probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"windSpeed":"0 to 5 mph","windDirection":"NNW","icon":"https://api.weather.gov/icons/land/day/hot?size=medium","shortForecast":"Sunny","detailedForecast":"Sunny, with a high near 104. North northwest wind 0 to 5 mph."},{"number":3,"name":"Thursday Night","startTime":"2024-08-01T18:00:00-06:00","endTime":"2024-08-02T06:00:00-06:00","isDaytime":false,"temperature":72,"temperatureUnit":"F","temperatureTrend":"","probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"windSpeed":"5 mph","windDirection":"E","icon":"https://api.weather.gov/icons/land/night/sct?size=medium","shortForecast":"Partly Cloudy","detailedForecast":"Partly cloudy, with a low around 72. East wind around 5 mph."},{"number":4,"name":"Friday","startTime":"2024-08-02T06:00:00-06:00","endTime":"2024-08-02T18:00:00-06:00","isDaytime":true,"temperature":104,"temperatureUnit":"F","temperatureTrend":"","probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"windSpeed":"5 mph","windDirection":"SSW","icon":"https://api.weather.gov/icons/land/day/hot?size=medium","shortForecast":"Mostly Sunny","detailedForecast":"Mostly sunny, with a high near 104. South southwest wind around 5 mph."},{"number":5,"name":"Friday Night","startTime":"2024-08-02T18:00:00-06:00","endTime":"2024-08-03T06:00:00-06:00","isDaytime":false,"temperature":73,"temperatureUnit":"F","temperatureTrend":"","probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"windSpeed":"5 mph","windDirection":"SSW","icon":"https://api.weather.gov/icons/land/night/sct?size=medium","shortForecast":"Partly Cloudy","detailedForecast":"Partly cloudy, with a low around 73. South southwest wind around 5 mph."},{"number":6,"name":"Saturday","startTime":"2024-08-03T06:00:00-06:00","endTime":"2024-08-03T18:00:00-06:00","isDaytime":true,"temperature":102,"temperatureUnit":"F","temperatureTrend":"","probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":20},"windSpeed":"5 mph","windDirection":"SSW","icon":"https://api.weather.gov/icons/land/day/hot/tsra_hi,20?size=medium","shortForecast":"Mostly Sunny then Slight Chance Showers And Thunderstorms","detailedForecast":"A slight chance of showers and thunderstorms after noon. Mostly sunny, with a high near 102. Chance of precipitation is 20%."},{"number":7,"name":"Saturday Night","startTime":"2024-08-03T18:00:00-06:00","endTime":"2024-08-04T06:00:00-06:00","isDaytime":false,"temperature":74,"temperatureUnit":"F","temperatureTrend":"","probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":30},"windSpeed":"5 mph","windDirection":"S","icon":"https://api.weather.gov/icons/land/night/tsra_sct,30/tsra_sct,20?size=medium","shortForecast":"Chance Showers And Thunderstorms","detailedForecast":"A chance of showers and thunderstorms. Mostly cloudy, with a low around 74. Chance of precipitation is 30%."},{"number":8,"name":"Sunday","startTime":"2024-08-04T06:00:00-06:00","endTime":"2024-08-04T18:00:00-06:00","isDaytime":true,"temperature":100,"temperatureUnit":"F","temperatureTrend":"","probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"windSpeed":"5 mph","windDirection":"SSW","icon":"https://api.weather.gov/icons/land/day/hot/tsra_hi?size=medium","shortForecast":"Partly Sunny then Chance Showers And Thunderstorms","detailedForecast":"A chance of showers and thunderstorms after noon. Partly sunny, with a high near 100."},{"number":9,"name":"Sunday Night","startTime":"2024-08-04T18:00:00-06:00","endTime":"2024-08-05T06:00:00-06:00","isDaytime":false,"temperature":73,"temperatureUnit":"F","temperatureTrend":"","probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"windSpeed":"5 mph","windDirection":"SE","icon":"https://api.weather.gov/icons/land/night/tsra_sct/bkn?size=medium","shortForecast":"Chance Showers And Thunderstorms then Mostly Cloudy","detailedForecast":"A chance of showers and thunderstorms before midnight. Mostly cloudy, with a low around 73."},{"number":10,"name":"Monday","startTime":"2024-08-05T06:00:00-06:00","endTime":"2024-08-05T18:00:00-06:00","isDaytime":true,"temperature":101,"temperatureUnit":"F","temperatureTrend":"","probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"windSpeed":"0 to 5 mph","windDirection":"N","icon":"https://api.weather.gov/icons/land/day/hot/tsra_hi?size=medium","shortForecast":"Mostly Sunny then Chance Showers And Thunderstorms","detailedForecast":"A chance of showers and thunderstorms after noon. Mostly sunny, with a high near 101."},{"number":11,"name":"Monday Night","startTime":"2024-08-05T18:00:00-06:00","endTime":"2024-08-06T06:00:00-06:00","isDaytime":false,"temperature":74,"temperatureUnit":"F","temperatureTrend":"","probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"windSpeed":"5 mph","windDirection":"NE","icon":"https://api.weather.gov/icons/land/night/tsra_hi?size=medium","shortForecast":"Chance Showers And Thunderstorms","detailedForecast":"A chance of showers and thunderstorms. Mostly cloudy, with a low around 74."},{"number":12,"name":"Tuesday","startTime":"2024-08-06T06:00:00-06:00","endTime":"2024-08-06T18:00:00-06:00","isDaytime":true,"temperature":102,"temperatureUnit":"F","temperatureTrend":"","probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"windSpeed":"5 mph","windDirection":"SSW","icon":"https://api.weather.gov/icons/land/day/hot/tsra_hi?size=medium","shortForecast":"Mostly Sunny then Chance Showers And Thunderstorms","detailedForecast":"A chance of showers and thunderstorms after noon. Mostly sunny, with a high near 102."},{"number":13,"name":"Tuesday Night","startTime":"2024-08-06T18:00:00-06:00","endTime":"2024-08-07T06:00:00-06:00","isDaytime":false,"temperature":73,"temperatureUnit":"F","temperatureTrend":"","probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"windSpeed":"5 mph","windDirection":"S","icon":"https://api.weather.gov/icons/land/night/tsra_sct?size=medium","shortForecast":"Chance Showers And Thunderstorms","detailedForecast":"A chance of showers and thunderstorms. Mostly cloudy, with a low around 73."},{"number":14,"name":"Wednesday","startTime":"2024-08-07T06:00:00-06:00","endTime":"2024-08-07T18:00:00-06:00","isDaytime":true,"temperature":100,"temperatureUnit":"F","temperatureTrend":"","probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"windSpeed":"0 to 5 mph","windDirection":"SW","icon":"https://api.weather.gov/icons/land/day/hot/tsra_hi?size=medium","shortForecast":"Mostly Sunny then Chance Showers And Thunderstorms","detailedForecast":"A chance of showers and thunderstorms after noon. Mostly sunny, with a high near 100."}]}
  var hourly_GJT_60_82 = false
  var crags_config = [
  {
    "name": "Moab",
    "note": "Soft sandstone in a desert environment.",
    "mountainProject": "https://www.mountainproject.com/area/105716711/moab-area",
    "station": "MOAB",
    "office": "GJT/60,82",
    "coordinates": [
      -109.550,
      38.573
    ]
  }
]</script>

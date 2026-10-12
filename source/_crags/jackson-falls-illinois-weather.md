---
### THIS FILE IS AUTO-GENERATED - DO NOT EDIT ###
layout: page
title: Jackson Falls, Illinois Climbing Weather - Current, Past, and Forecasted
title_override: Jackson Falls<br /><small class="f2">Climbing Weather</small>
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
  var weekly_PAH_116_58 = {"units":"us","forecastGenerator":"BaselineForecastGenerator","generatedAt":"2026-10-12T09:01:13+00:00","updateTime":"2026-10-12T06:26:20+00:00","validTimes":"2026-10-12T00:00:00+00:00/P8DT1H","elevation":{"unitCode":"wmoUnit:m","value":96.012},"periods":[{"number":1,"name":"Overnight","startTime":"2026-10-12T04:00:00-05:00","endTime":"2026-10-12T06:00:00-05:00","isDaytime":false,"temperature":60,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":0},"windSpeed":"2 mph","windDirection":"SSW","icon":"https://api.weather.gov/icons/land/night/fog?size=medium","shortForecast":"Patchy Fog","detailedForecast":"Patchy fog. Partly cloudy, with a low around 60. South southwest wind around 2 mph."},{"number":2,"name":"Columbus Day","startTime":"2026-10-12T06:00:00-05:00","endTime":"2026-10-12T18:00:00-05:00","isDaytime":true,"temperature":90,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":0},"windSpeed":"2 to 10 mph","windDirection":"SW","icon":"https://api.weather.gov/icons/land/day/few?size=medium","shortForecast":"Sunny","detailedForecast":"Sunny. High near 90, with temperatures falling to around 88 in the afternoon. Southwest wind 2 to 10 mph."},{"number":3,"name":"Monday Night","startTime":"2026-10-12T18:00:00-05:00","endTime":"2026-10-13T06:00:00-05:00","isDaytime":false,"temperature":63,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":0},"windSpeed":"6 mph","windDirection":"SSW","icon":"https://api.weather.gov/icons/land/night/few?size=medium","shortForecast":"Mostly Clear","detailedForecast":"Mostly clear, with a low around 63. South southwest wind around 6 mph."},{"number":4,"name":"Tuesday","startTime":"2026-10-13T06:00:00-05:00","endTime":"2026-10-13T18:00:00-05:00","isDaytime":true,"temperature":91,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":0},"windSpeed":"3 to 9 mph","windDirection":"SW","icon":"https://api.weather.gov/icons/land/day/few?size=medium","shortForecast":"Sunny","detailedForecast":"Sunny, with a high near 91. Southwest wind 3 to 9 mph."},{"number":5,"name":"Tuesday Night","startTime":"2026-10-13T18:00:00-05:00","endTime":"2026-10-14T06:00:00-05:00","isDaytime":false,"temperature":70,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":6},"windSpeed":"5 mph","windDirection":"SSW","icon":"https://api.weather.gov/icons/land/night/few?size=medium","shortForecast":"Mostly Clear","detailedForecast":"Mostly clear, with a low around 70. South southwest wind around 5 mph."},{"number":6,"name":"Wednesday","startTime":"2026-10-14T06:00:00-05:00","endTime":"2026-10-14T18:00:00-05:00","isDaytime":true,"temperature":88,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":72},"windSpeed":"6 mph","windDirection":"SW","icon":"https://api.weather.gov/icons/land/day/tsra_hi,50/tsra_hi,70?size=medium","shortForecast":"Showers And Thunderstorms Likely","detailedForecast":"Showers and thunderstorms likely after 7am. Mostly sunny, with a high near 88. Southwest wind around 6 mph. Chance of precipitation is 70%."},{"number":7,"name":"Wednesday Night","startTime":"2026-10-14T18:00:00-05:00","endTime":"2026-10-15T06:00:00-05:00","isDaytime":false,"temperature":67,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":72},"windSpeed":"2 mph","windDirection":"N","icon":"https://api.weather.gov/icons/land/night/tsra_sct,70/tsra_sct,60?size=medium","shortForecast":"Showers And Thunderstorms Likely","detailedForecast":"Showers and thunderstorms likely before 7pm, then a chance of showers and thunderstorms between 7pm and 10pm, then showers and thunderstorms likely. Mostly cloudy, with a low around 67. North wind around 2 mph."},{"number":8,"name":"Thursday","startTime":"2026-10-15T06:00:00-05:00","endTime":"2026-10-15T18:00:00-05:00","isDaytime":true,"temperature":87,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":60},"windSpeed":"1 to 8 mph","windDirection":"SSW","icon":"https://api.weather.gov/icons/land/day/tsra_hi,60/tsra_hi,40?size=medium","shortForecast":"Showers And Thunderstorms Likely","detailedForecast":"Showers and thunderstorms likely. Mostly sunny, with a high near 87. South southwest wind 1 to 8 mph."},{"number":9,"name":"Thursday Night","startTime":"2026-10-15T18:00:00-05:00","endTime":"2026-10-16T06:00:00-05:00","isDaytime":false,"temperature":57,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":35},"windSpeed":"3 to 10 mph","windDirection":"WNW","icon":"https://api.weather.gov/icons/land/night/tsra_hi,40/tsra_hi,30?size=medium","shortForecast":"Chance Showers And Thunderstorms","detailedForecast":"A chance of showers and thunderstorms. Partly cloudy, with a low around 57. West northwest wind 3 to 10 mph."},{"number":10,"name":"Friday","startTime":"2026-10-16T06:00:00-05:00","endTime":"2026-10-16T18:00:00-05:00","isDaytime":true,"temperature":69,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":26},"windSpeed":"13 to 17 mph","windDirection":"NNW","icon":"https://api.weather.gov/icons/land/day/tsra_hi,30/sct?size=medium","shortForecast":"Chance Showers And Thunderstorms then Mostly Sunny","detailedForecast":"A chance of showers and thunderstorms before 7am. Mostly sunny, with a high near 69. North northwest wind 13 to 17 mph, with gusts as high as 25 mph."},{"number":11,"name":"Friday Night","startTime":"2026-10-16T18:00:00-05:00","endTime":"2026-10-17T06:00:00-05:00","isDaytime":false,"temperature":41,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":0},"windSpeed":"8 to 15 mph","windDirection":"N","icon":"https://api.weather.gov/icons/land/night/few?size=medium","shortForecast":"Mostly Clear","detailedForecast":"Mostly clear, with a low around 41. North wind 8 to 15 mph, with gusts as high as 25 mph."},{"number":12,"name":"Saturday","startTime":"2026-10-17T06:00:00-05:00","endTime":"2026-10-17T18:00:00-05:00","isDaytime":true,"temperature":63,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":1},"windSpeed":"6 to 9 mph","windDirection":"NNE","icon":"https://api.weather.gov/icons/land/day/few?size=medium","shortForecast":"Sunny","detailedForecast":"Sunny, with a high near 63. North northeast wind 6 to 9 mph."},{"number":13,"name":"Saturday Night","startTime":"2026-10-17T18:00:00-05:00","endTime":"2026-10-18T06:00:00-05:00","isDaytime":false,"temperature":38,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":2},"windSpeed":"0 to 3 mph","windDirection":"ENE","icon":"https://api.weather.gov/icons/land/night/skc?size=medium","shortForecast":"Clear","detailedForecast":"Clear, with a low around 38. East northeast wind 0 to 3 mph."},{"number":14,"name":"Sunday","startTime":"2026-10-18T06:00:00-05:00","endTime":"2026-10-18T18:00:00-05:00","isDaytime":true,"temperature":71,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":2},"windSpeed":"1 to 5 mph","windDirection":"SSE","icon":"https://api.weather.gov/icons/land/day/few?size=medium","shortForecast":"Sunny","detailedForecast":"Sunny, with a high near 71. South southeast wind 1 to 5 mph."}]}
  var hourly_PAH_116_58 = false
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

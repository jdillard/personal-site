---
### THIS FILE IS AUTO-GENERATED - DO NOT EDIT ###
layout: page
title: City of Rocks, Idaho Climbing Weather - Current, Past, and Forecasted Report
title_override: City of Rocks<br /><small>Climbing Weather</small>
description: A lightweight weather report for City of Rocks, Idaho. Optimized for slow internet connections.
js_includes:
  - weather.js
---

<section class="measure center lh-copy f5-ns f6 ph2 mv4" style="text-align: justify;">
<strong>"Is it dry?"</strong>, an oft-repeated, age-old question. Here are real-time,
precipitation-focused reports of current, past, and forecasted climbing weather for City of Rocks, Idaho.
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
<section id="weather" data-crag="city-of-rocks-idaho" class="mv4-ns mv3 ph2 center"></section>
<section id="nearby" class="tc lh-copy">
  <h3>Nearby Crags</h3>
<a class="nowrap no-underline fancy-link relative light-red mh3" href="/crags/moab-utah-weather.html">Moab</a>
<a class="nowrap no-underline fancy-link relative light-red mh3" href="/crags/little-cottonwood-canyon-utah-weather.html">Little Cottonwood Canyon</a>
</section>
<section id="nearby" class="tc lh-copy">
  <h3>Other Metros</h3>
  <select class="ma1 bg-near-white pa2" id="stateSel">
    <option value="Texas">Texas</option>
    <option value="Washington">Washington</option>
    <option value="Colorado">Colorado</option>
    <option value="Tennessee">Tennessee</option>
    <option value="Utah" selected>Utah</option>
    <option value="California">California</option>
  </select>
  <select class="ma1 bg-near-white pa2" id="citySel">
    <option value="Salt Lake City" selected>Salt Lake City</option>
  </select>
  <a id="selectMetro" class="f6 link dim ph3 pv2 ma1 dib white bg-light-red" href="/crags/salt-lake-city-utah-weather.html">Select Metro</a>
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
  var weekly_PIH_50_16 = {"updated":"2022-07-25T20:14:08+00:00","units":"us","forecastGenerator":"BaselineForecastGenerator","generatedAt":"2022-07-26T08:39:49+00:00","updateTime":"2022-07-25T20:14:08+00:00","validTimes":"2022-07-25T14:00:00+00:00/P7DT22H","elevation":{"unitCode":"wmoUnit:m","value":1958.9496},"periods":[{"number":1,"name":"Overnight","startTime":"2022-07-26T02:00:00-06:00","endTime":"2022-07-26T06:00:00-06:00","isDaytime":false,"temperature":58,"temperatureUnit":"F","temperatureTrend":"rising","windSpeed":"10 mph","windDirection":"NW","icon":"https://api.weather.gov/icons/land/night/few?size=medium","shortForecast":"Mostly Clear","detailedForecast":"Mostly clear. Low around 58, with temperatures rising to around 60 overnight. Northwest wind around 10 mph."},{"number":2,"name":"Tuesday","startTime":"2022-07-26T06:00:00-06:00","endTime":"2022-07-26T18:00:00-06:00","isDaytime":true,"temperature":86,"temperatureUnit":"F","temperatureTrend":"falling","windSpeed":"8 to 15 mph","windDirection":"NW","icon":"https://api.weather.gov/icons/land/day/few?size=medium","shortForecast":"Sunny","detailedForecast":"Sunny. High near 86, with temperatures falling to around 83 in the afternoon. Northwest wind 8 to 15 mph, with gusts as high as 23 mph."},{"number":3,"name":"Tuesday Night","startTime":"2022-07-26T18:00:00-06:00","endTime":"2022-07-27T06:00:00-06:00","isDaytime":false,"temperature":61,"temperatureUnit":"F","temperatureTrend":"rising","windSpeed":"7 to 14 mph","windDirection":"WNW","icon":"https://api.weather.gov/icons/land/night/few?size=medium","shortForecast":"Mostly Clear","detailedForecast":"Mostly clear. Low around 61, with temperatures rising to around 63 overnight. West northwest wind 7 to 14 mph, with gusts as high as 22 mph."},{"number":4,"name":"Wednesday","startTime":"2022-07-27T06:00:00-06:00","endTime":"2022-07-27T18:00:00-06:00","isDaytime":true,"temperature":87,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"6 to 13 mph","windDirection":"WNW","icon":"https://api.weather.gov/icons/land/day/sct?size=medium","shortForecast":"Mostly Sunny","detailedForecast":"Mostly sunny, with a high near 87. West northwest wind 6 to 13 mph, with gusts as high as 21 mph."},{"number":5,"name":"Wednesday Night","startTime":"2022-07-27T18:00:00-06:00","endTime":"2022-07-28T06:00:00-06:00","isDaytime":false,"temperature":61,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"6 to 15 mph","windDirection":"WNW","icon":"https://api.weather.gov/icons/land/night/sct?size=medium","shortForecast":"Partly Cloudy","detailedForecast":"Partly cloudy, with a low around 61. West northwest wind 6 to 15 mph, with gusts as high as 22 mph."},{"number":6,"name":"Thursday","startTime":"2022-07-28T06:00:00-06:00","endTime":"2022-07-28T18:00:00-06:00","isDaytime":true,"temperature":88,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"6 to 12 mph","windDirection":"NW","icon":"https://api.weather.gov/icons/land/day/few?size=medium","shortForecast":"Sunny","detailedForecast":"Sunny, with a high near 88."},{"number":7,"name":"Thursday Night","startTime":"2022-07-28T18:00:00-06:00","endTime":"2022-07-29T06:00:00-06:00","isDaytime":false,"temperature":61,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"6 to 13 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/night/few?size=medium","shortForecast":"Mostly Clear","detailedForecast":"Mostly clear, with a low around 61."},{"number":8,"name":"Friday","startTime":"2022-07-29T06:00:00-06:00","endTime":"2022-07-29T18:00:00-06:00","isDaytime":true,"temperature":86,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"6 to 14 mph","windDirection":"NW","icon":"https://api.weather.gov/icons/land/day/few?size=medium","shortForecast":"Sunny","detailedForecast":"Sunny, with a high near 86."},{"number":9,"name":"Friday Night","startTime":"2022-07-29T18:00:00-06:00","endTime":"2022-07-30T06:00:00-06:00","isDaytime":false,"temperature":61,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"6 to 15 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/night/few?size=medium","shortForecast":"Mostly Clear","detailedForecast":"Mostly clear, with a low around 61."},{"number":10,"name":"Saturday","startTime":"2022-07-30T06:00:00-06:00","endTime":"2022-07-30T18:00:00-06:00","isDaytime":true,"temperature":88,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"5 to 13 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/day/few?size=medium","shortForecast":"Sunny","detailedForecast":"Sunny, with a high near 88."},{"number":11,"name":"Saturday Night","startTime":"2022-07-30T18:00:00-06:00","endTime":"2022-07-31T06:00:00-06:00","isDaytime":false,"temperature":63,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"6 to 13 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/night/few?size=medium","shortForecast":"Mostly Clear","detailedForecast":"Mostly clear, with a low around 63."},{"number":12,"name":"Sunday","startTime":"2022-07-31T06:00:00-06:00","endTime":"2022-07-31T18:00:00-06:00","isDaytime":true,"temperature":88,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"6 to 14 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/day/sct?size=medium","shortForecast":"Mostly Sunny","detailedForecast":"Mostly sunny, with a high near 88."},{"number":13,"name":"Sunday Night","startTime":"2022-07-31T18:00:00-06:00","endTime":"2022-08-01T06:00:00-06:00","isDaytime":false,"temperature":63,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"6 to 12 mph","windDirection":"WSW","icon":"https://api.weather.gov/icons/land/night/rain_showers,20/bkn?size=medium","shortForecast":"Slight Chance Rain Showers then Mostly Cloudy","detailedForecast":"A slight chance of rain showers before midnight. Mostly cloudy, with a low around 63. Chance of precipitation is 20%."},{"number":14,"name":"Monday","startTime":"2022-08-01T06:00:00-06:00","endTime":"2022-08-01T18:00:00-06:00","isDaytime":true,"temperature":86,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"5 to 14 mph","windDirection":"WSW","icon":"https://api.weather.gov/icons/land/day/sct/tsra_hi,20?size=medium","shortForecast":"Mostly Sunny then Slight Chance Showers And Thunderstorms","detailedForecast":"A slight chance of showers and thunderstorms after noon. Mostly sunny, with a high near 86. Chance of precipitation is 20%."}]}
  var hourly_PIH_50_16 = {"correlationId":"18fe7f1","title":"Unexpected Problem","type":"https://api.weather.gov/problems/UnexpectedProblem","status":500,"detail":"An unexpected problem has occurred.","instance":"https://api.weather.gov/requests/18fe7f1"}
  var crags_config = [
  {
    "name": "City of Rocks",
    "note": "Varnished and pocketed granite",
    "mountainProject": "https://www.mountainproject.com/area/105739322/city-of-rocks",
    "station": "RCKI1",
    "office": "PIH/50,16",
    "coordinates": [
      -113.7215,
      42.0760
    ]
  }
]</script>

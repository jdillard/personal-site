---
### THIS FILE IS AUTO-GENERATED - DO NOT EDIT ###
layout: page
title: Little Cottonwood Canyon, Utah Climbing Weather - Current, Past, and Forecasted Report
title_override: Little Cottonwood Canyon<br /><small>Climbing Weather</small>
description: A lightweight weather report for Little Cottonwood Canyon, Utah. Optimized for slow internet connections.
js_includes:
  - weather.js
---

<section class="measure center lh-copy f5-ns f6 ph2 mv4" style="text-align: justify;">
<strong>"Is it dry?"</strong>, an oft-repeated, age-old question. Here are real-time,
precipitation-focused reports of current, past, and forecasted climbing weather for Little Cottonwood Canyon, Utah.
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
<section id="weather" data-crag="little-cottonwood-canyon-utah" class="mv4-ns mv3 ph2 center"></section>
<section id="nearby" class="tc lh-copy">
  <h3>Nearby Crags</h3>
<a class="nowrap no-underline fancy-link relative light-red mh3" href="/crags/moab-utah-weather.html">Moab</a>
<a class="nowrap no-underline fancy-link relative light-red mh3" href="/crags/city-of-rocks-idaho-weather.html">City of Rocks</a>
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
  var weekly_SLC_102_165 = {"updated":"2022-09-08T04:00:18+00:00","units":"us","forecastGenerator":"BaselineForecastGenerator","generatedAt":"2022-09-08T08:41:51+00:00","updateTime":"2022-09-08T04:00:18+00:00","validTimes":"2022-09-07T21:00:00+00:00/P7DT7H","elevation":{"unitCode":"wmoUnit:m","value":1872.0816},"periods":[{"number":1,"name":"Overnight","startTime":"2022-09-08T02:00:00-06:00","endTime":"2022-09-08T06:00:00-06:00","isDaytime":false,"temperature":69,"temperatureUnit":"F","temperatureTrend":"rising","windSpeed":"6 mph","windDirection":"SE","icon":"https://api.weather.gov/icons/land/night/sct?size=medium","shortForecast":"Partly Cloudy","detailedForecast":"Partly cloudy. Low around 69, with temperatures rising to around 72 overnight. Southeast wind around 6 mph."},{"number":2,"name":"Thursday","startTime":"2022-09-08T06:00:00-06:00","endTime":"2022-09-08T18:00:00-06:00","isDaytime":true,"temperature":88,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"5 to 8 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/day/few/smoke?size=medium","shortForecast":"Sunny then Patchy Smoke","detailedForecast":"Patchy smoke after noon. Sunny, with a high near 88. West wind 5 to 8 mph."},{"number":3,"name":"Thursday Night","startTime":"2022-09-08T18:00:00-06:00","endTime":"2022-09-09T06:00:00-06:00","isDaytime":false,"temperature":61,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"9 mph","windDirection":"NNW","icon":"https://api.weather.gov/icons/land/night/smoke?size=medium","shortForecast":"Patchy Smoke","detailedForecast":"Patchy smoke. Mostly clear, with a low around 61. North northwest wind around 9 mph."},{"number":4,"name":"Friday","startTime":"2022-09-09T06:00:00-06:00","endTime":"2022-09-09T18:00:00-06:00","isDaytime":true,"temperature":79,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"6 to 10 mph","windDirection":"NNW","icon":"https://api.weather.gov/icons/land/day/skc?size=medium","shortForecast":"Sunny","detailedForecast":"Sunny, with a high near 79. North northwest wind 6 to 10 mph."},{"number":5,"name":"Friday Night","startTime":"2022-09-09T18:00:00-06:00","endTime":"2022-09-10T06:00:00-06:00","isDaytime":false,"temperature":56,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"6 to 9 mph","windDirection":"NNE","icon":"https://api.weather.gov/icons/land/night/skc?size=medium","shortForecast":"Clear","detailedForecast":"Clear, with a low around 56. North northeast wind 6 to 9 mph."},{"number":6,"name":"Saturday","startTime":"2022-09-10T06:00:00-06:00","endTime":"2022-09-10T18:00:00-06:00","isDaytime":true,"temperature":81,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"8 mph","windDirection":"NNW","icon":"https://api.weather.gov/icons/land/day/few?size=medium","shortForecast":"Sunny","detailedForecast":"Sunny, with a high near 81."},{"number":7,"name":"Saturday Night","startTime":"2022-09-10T18:00:00-06:00","endTime":"2022-09-11T06:00:00-06:00","isDaytime":false,"temperature":58,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"8 mph","windDirection":"ENE","icon":"https://api.weather.gov/icons/land/night/few?size=medium","shortForecast":"Mostly Clear","detailedForecast":"Mostly clear, with a low around 58."},{"number":8,"name":"Sunday","startTime":"2022-09-11T06:00:00-06:00","endTime":"2022-09-11T18:00:00-06:00","isDaytime":true,"temperature":82,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"8 mph","windDirection":"S","icon":"https://api.weather.gov/icons/land/day/sct?size=medium","shortForecast":"Mostly Sunny","detailedForecast":"Mostly sunny, with a high near 82."},{"number":9,"name":"Sunday Night","startTime":"2022-09-11T18:00:00-06:00","endTime":"2022-09-12T06:00:00-06:00","isDaytime":false,"temperature":62,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"8 mph","windDirection":"ESE","icon":"https://api.weather.gov/icons/land/night/sct?size=medium","shortForecast":"Partly Cloudy","detailedForecast":"Partly cloudy, with a low around 62."},{"number":10,"name":"Monday","startTime":"2022-09-12T06:00:00-06:00","endTime":"2022-09-12T18:00:00-06:00","isDaytime":true,"temperature":81,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"6 to 9 mph","windDirection":"S","icon":"https://api.weather.gov/icons/land/day/sct/tsra_hi?size=medium","shortForecast":"Mostly Sunny then Slight Chance Showers And Thunderstorms","detailedForecast":"A slight chance of showers and thunderstorms after noon. Mostly sunny, with a high near 81."},{"number":11,"name":"Monday Night","startTime":"2022-09-12T18:00:00-06:00","endTime":"2022-09-13T06:00:00-06:00","isDaytime":false,"temperature":62,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"7 mph","windDirection":"SSE","icon":"https://api.weather.gov/icons/land/night/rain_showers?size=medium","shortForecast":"Slight Chance Rain Showers","detailedForecast":"A slight chance of rain showers. Mostly cloudy, with a low around 62."},{"number":12,"name":"Tuesday","startTime":"2022-09-13T06:00:00-06:00","endTime":"2022-09-13T18:00:00-06:00","isDaytime":true,"temperature":76,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"8 mph","windDirection":"SSW","icon":"https://api.weather.gov/icons/land/day/rain_showers/tsra_sct?size=medium","shortForecast":"Chance Rain Showers","detailedForecast":"A chance of rain showers before noon, then a chance of showers and thunderstorms. Partly sunny, with a high near 76."},{"number":13,"name":"Tuesday Night","startTime":"2022-09-13T18:00:00-06:00","endTime":"2022-09-14T06:00:00-06:00","isDaytime":false,"temperature":58,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"8 mph","windDirection":"SSE","icon":"https://api.weather.gov/icons/land/night/tsra_sct?size=medium","shortForecast":"Chance Showers And Thunderstorms","detailedForecast":"A chance of showers and thunderstorms. Mostly cloudy, with a low around 58."},{"number":14,"name":"Wednesday","startTime":"2022-09-14T06:00:00-06:00","endTime":"2022-09-14T18:00:00-06:00","isDaytime":true,"temperature":73,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"6 to 9 mph","windDirection":"S","icon":"https://api.weather.gov/icons/land/day/rain_showers/tsra_sct?size=medium","shortForecast":"Showers And Thunderstorms Likely","detailedForecast":"A chance of rain showers before noon, then showers and thunderstorms likely. Partly sunny, with a high near 73."}]}
  var hourly_SLC_102_165 = {"correlationId":"3d8b543","title":"Unexpected Problem","type":"https://api.weather.gov/problems/UnexpectedProblem","status":500,"detail":"An unexpected problem has occurred.","instance":"https://api.weather.gov/requests/3d8b543"}
  var crags_config = [
  {
    "name": "Little Cottonwood Canyon",
    "note": "Primarily quartz monzonite (white granite, essentially)",
    "mountainProject": "https://www.mountainproject.com/area/105739277/little-cottonwood-canyon",
    "station": "KSLC",
    "office": "SLC/102,165",
    "coordinates": [
      -111.775,
      40.5727
    ]
  }
]</script>

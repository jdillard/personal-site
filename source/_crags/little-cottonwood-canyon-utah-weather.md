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
  var weekly_SLC_102_165 = {"updated":"2022-09-21T01:30:10+00:00","units":"us","forecastGenerator":"BaselineForecastGenerator","generatedAt":"2022-09-21T08:44:28+00:00","updateTime":"2022-09-21T01:30:10+00:00","validTimes":"2022-09-20T19:00:00+00:00/P7DT9H","elevation":{"unitCode":"wmoUnit:m","value":1872.0816},"periods":[{"number":1,"name":"Overnight","startTime":"2022-09-21T02:00:00-06:00","endTime":"2022-09-21T06:00:00-06:00","isDaytime":false,"temperature":59,"temperatureUnit":"F","temperatureTrend":"rising","windSpeed":"13 mph","windDirection":"SE","icon":"https://api.weather.gov/icons/land/night/few?size=medium","shortForecast":"Mostly Clear","detailedForecast":"Mostly clear. Low around 59, with temperatures rising to around 61 overnight. Southeast wind around 13 mph."},{"number":2,"name":"Wednesday","startTime":"2022-09-21T06:00:00-06:00","endTime":"2022-09-21T18:00:00-06:00","isDaytime":true,"temperature":75,"temperatureUnit":"F","temperatureTrend":"falling","windSpeed":"10 to 14 mph","windDirection":"SE","icon":"https://api.weather.gov/icons/land/day/tsra_sct,50/tsra_sct,60?size=medium","shortForecast":"Slight Chance Showers And Thunderstorms then Showers And Thunderstorms Likely","detailedForecast":"A slight chance of showers and thunderstorms before 9am, then showers and thunderstorms likely. Partly sunny. High near 75, with temperatures falling to around 68 in the afternoon. Southeast wind 10 to 14 mph. Chance of precipitation is 60%."},{"number":3,"name":"Wednesday Night","startTime":"2022-09-21T18:00:00-06:00","endTime":"2022-09-22T06:00:00-06:00","isDaytime":false,"temperature":54,"temperatureUnit":"F","temperatureTrend":"rising","windSpeed":"16 mph","windDirection":"SSE","icon":"https://api.weather.gov/icons/land/night/tsra_sct,70/tsra_sct,40?size=medium","shortForecast":"Showers And Thunderstorms Likely","detailedForecast":"Showers and thunderstorms likely. Mostly cloudy. Low around 54, with temperatures rising to around 56 overnight. South southeast wind around 16 mph. Chance of precipitation is 70%."},{"number":4,"name":"Thursday","startTime":"2022-09-22T06:00:00-06:00","endTime":"2022-09-22T18:00:00-06:00","isDaytime":true,"temperature":67,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"13 mph","windDirection":"SSW","icon":"https://api.weather.gov/icons/land/day/tsra_hi,30/tsra_hi,20?size=medium","shortForecast":"Chance Showers And Thunderstorms then Slight Chance Showers And Thunderstorms","detailedForecast":"A chance of showers and thunderstorms before noon, then a slight chance of showers and thunderstorms. Mostly sunny, with a high near 67. South southwest wind around 13 mph. Chance of precipitation is 30%."},{"number":5,"name":"Thursday Night","startTime":"2022-09-22T18:00:00-06:00","endTime":"2022-09-23T06:00:00-06:00","isDaytime":false,"temperature":49,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"9 mph","windDirection":"NNW","icon":"https://api.weather.gov/icons/land/night/skc?size=medium","shortForecast":"Clear","detailedForecast":"Clear, with a low around 49. North northwest wind around 9 mph."},{"number":6,"name":"Friday","startTime":"2022-09-23T06:00:00-06:00","endTime":"2022-09-23T18:00:00-06:00","isDaytime":true,"temperature":67,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"7 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/day/skc?size=medium","shortForecast":"Sunny","detailedForecast":"Sunny, with a high near 67."},{"number":7,"name":"Friday Night","startTime":"2022-09-23T18:00:00-06:00","endTime":"2022-09-24T06:00:00-06:00","isDaytime":false,"temperature":51,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"7 mph","windDirection":"NE","icon":"https://api.weather.gov/icons/land/night/skc?size=medium","shortForecast":"Clear","detailedForecast":"Clear, with a low around 51."},{"number":8,"name":"Saturday","startTime":"2022-09-24T06:00:00-06:00","endTime":"2022-09-24T18:00:00-06:00","isDaytime":true,"temperature":72,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"8 mph","windDirection":"SSW","icon":"https://api.weather.gov/icons/land/day/skc?size=medium","shortForecast":"Sunny","detailedForecast":"Sunny, with a high near 72."},{"number":9,"name":"Saturday Night","startTime":"2022-09-24T18:00:00-06:00","endTime":"2022-09-25T06:00:00-06:00","isDaytime":false,"temperature":52,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"7 mph","windDirection":"NE","icon":"https://api.weather.gov/icons/land/night/skc?size=medium","shortForecast":"Clear","detailedForecast":"Clear, with a low around 52."},{"number":10,"name":"Sunday","startTime":"2022-09-25T06:00:00-06:00","endTime":"2022-09-25T18:00:00-06:00","isDaytime":true,"temperature":74,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"6 mph","windDirection":"S","icon":"https://api.weather.gov/icons/land/day/skc?size=medium","shortForecast":"Sunny","detailedForecast":"Sunny, with a high near 74."},{"number":11,"name":"Sunday Night","startTime":"2022-09-25T18:00:00-06:00","endTime":"2022-09-26T06:00:00-06:00","isDaytime":false,"temperature":53,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"7 mph","windDirection":"NE","icon":"https://api.weather.gov/icons/land/night/skc?size=medium","shortForecast":"Clear","detailedForecast":"Clear, with a low around 53."},{"number":12,"name":"Monday","startTime":"2022-09-26T06:00:00-06:00","endTime":"2022-09-26T18:00:00-06:00","isDaytime":true,"temperature":76,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"7 mph","windDirection":"S","icon":"https://api.weather.gov/icons/land/day/skc?size=medium","shortForecast":"Sunny","detailedForecast":"Sunny, with a high near 76."},{"number":13,"name":"Monday Night","startTime":"2022-09-26T18:00:00-06:00","endTime":"2022-09-27T06:00:00-06:00","isDaytime":false,"temperature":55,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"7 mph","windDirection":"ENE","icon":"https://api.weather.gov/icons/land/night/skc?size=medium","shortForecast":"Clear","detailedForecast":"Clear, with a low around 55."},{"number":14,"name":"Tuesday","startTime":"2022-09-27T06:00:00-06:00","endTime":"2022-09-27T18:00:00-06:00","isDaytime":true,"temperature":76,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"7 mph","windDirection":"S","icon":"https://api.weather.gov/icons/land/day/few?size=medium","shortForecast":"Sunny","detailedForecast":"Sunny, with a high near 76."}]}
  var hourly_SLC_102_165 = {"correlationId":"3ce084e","title":"Unexpected Problem","type":"https://api.weather.gov/problems/UnexpectedProblem","status":500,"detail":"An unexpected problem has occurred.","instance":"https://api.weather.gov/requests/3ce084e"}
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

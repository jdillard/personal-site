---
### THIS FILE IS AUTO-GENERATED - DO NOT EDIT ###
layout: page
title: Red Rock, Nevada Climbing Weather - Current, Past, and Forecasted Report
title_override: Red Rock<br /><small>Climbing Weather</small>
description: A lightweight weather report for Red Rock, Nevada. Optimized for slow internet connections.
js_includes:
  - weather.js
---

<section class="measure center lh-copy f5-ns f6 ph2 mv4" style="text-align: justify;">
<strong>"Is it dry?"</strong>, an oft-repeated, age-old question. Here are real-time,
precipitation-focused reports of current, past, and forecasted climbing weather for Red Rock, Nevada.
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
<section id="weather" data-crag="red-rock-nevada" class="mv4-ns mv3 ph2 center"></section>
<section id="nearby" class="tc lh-copy">
  <h3>Nearby Crags</h3>
<a class="nowrap no-underline fancy-link relative light-red mh3" href="/crags/joshua-tree-national-park-california-weather.html">Joshua Tree National Park</a>
<a class="nowrap no-underline fancy-link relative light-red mh3" href="/crags/yosemite-national-park-california-weather.html">Yosemite National Park</a>
<a class="nowrap no-underline fancy-link relative light-red mh3" href="/crags/bishop-california-weather.html">Bishop</a>
<a class="nowrap no-underline fancy-link relative light-red mh3" href="/crags/mammoth-lakes-california-weather.html">Mammoth Lakes</a>
</section>
<section id="nearby" class="tc lh-copy">
  <h3>Other Metros</h3>
  <select class="ma1 bg-near-white pa2" id="stateSel">
    <option value="Texas">Texas</option>
    <option value="Washington">Washington</option>
    <option value="Colorado">Colorado</option>
    <option value="Tennessee">Tennessee</option>
    <option value="Utah">Utah</option>
    <option value="California" selected>California</option>
  </select>
  <select class="ma1 bg-near-white pa2" id="citySel">
    <option value="San Francisco" selected>San Francisco</option>
    <option value="Los Angeles">Los Angeles</option>
  </select>
  <a id="selectMetro" class="f6 link dim ph3 pv2 ma1 dib white bg-light-red" href="/crags/san-francisco-california-weather.html">Select Metro</a>
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
  var weekly_VEF_111_97 = {"updated":"2020-12-14T08:29:54+00:00","units":"us","forecastGenerator":"BaselineForecastGenerator","generatedAt":"2020-12-14T08:48:10+00:00","updateTime":"2020-12-14T08:29:54+00:00","validTimes":"2020-12-14T02:00:00+00:00/P8DT6H","elevation":{"value":1157.9352,"unitCode":"unit:m"},"periods":[{"number":1,"name":"Overnight","startTime":"2020-12-14T00:00:00-08:00","endTime":"2020-12-14T06:00:00-08:00","isDaytime":false,"temperature":29,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"7 mph","windDirection":"WNW","icon":"https://api.weather.gov/icons/land/night/snow,20?size=medium","shortForecast":"Slight Chance Rain And Snow Showers","detailedForecast":"A slight chance of rain and snow showers between 4am and 5am. Partly cloudy, with a low around 29. West northwest wind around 7 mph. Chance of precipitation is 20%."},{"number":2,"name":"Monday","startTime":"2020-12-14T06:00:00-08:00","endTime":"2020-12-14T18:00:00-08:00","isDaytime":true,"temperature":52,"temperatureUnit":"F","temperatureTrend":"falling","windSpeed":"5 to 10 mph","windDirection":"NNW","icon":"https://api.weather.gov/icons/land/day/few?size=medium","shortForecast":"Sunny","detailedForecast":"Sunny. High near 52, with temperatures falling to around 41 in the afternoon. North northwest wind 5 to 10 mph."},{"number":3,"name":"Monday Night","startTime":"2020-12-14T18:00:00-08:00","endTime":"2020-12-15T06:00:00-08:00","isDaytime":false,"temperature":27,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"12 mph","windDirection":"NNW","icon":"https://api.weather.gov/icons/land/night/few?size=medium","shortForecast":"Mostly Clear","detailedForecast":"Mostly clear, with a low around 27. North northwest wind around 12 mph."},{"number":4,"name":"Tuesday","startTime":"2020-12-15T06:00:00-08:00","endTime":"2020-12-15T18:00:00-08:00","isDaytime":true,"temperature":50,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"6 to 10 mph","windDirection":"NNE","icon":"https://api.weather.gov/icons/land/day/few?size=medium","shortForecast":"Sunny","detailedForecast":"Sunny, with a high near 50. North northeast wind 6 to 10 mph."},{"number":5,"name":"Tuesday Night","startTime":"2020-12-15T18:00:00-08:00","endTime":"2020-12-16T06:00:00-08:00","isDaytime":false,"temperature":27,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"6 mph","windDirection":"NNW","icon":"https://api.weather.gov/icons/land/night/few?size=medium","shortForecast":"Mostly Clear","detailedForecast":"Mostly clear, with a low around 27. North northwest wind around 6 mph."},{"number":6,"name":"Wednesday","startTime":"2020-12-16T06:00:00-08:00","endTime":"2020-12-16T18:00:00-08:00","isDaytime":true,"temperature":54,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"6 mph","windDirection":"ENE","icon":"https://api.weather.gov/icons/land/day/few?size=medium","shortForecast":"Sunny","detailedForecast":"Sunny, with a high near 54."},{"number":7,"name":"Wednesday Night","startTime":"2020-12-16T18:00:00-08:00","endTime":"2020-12-17T06:00:00-08:00","isDaytime":false,"temperature":33,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"6 to 25 mph","windDirection":"SW","icon":"https://api.weather.gov/icons/land/night/wind_bkn?size=medium","shortForecast":"Mostly Cloudy","detailedForecast":"Mostly cloudy, with a low around 33."},{"number":8,"name":"Thursday","startTime":"2020-12-17T06:00:00-08:00","endTime":"2020-12-17T18:00:00-08:00","isDaytime":true,"temperature":53,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"12 to 24 mph","windDirection":"WNW","icon":"https://api.weather.gov/icons/land/day/wind_sct?size=medium","shortForecast":"Mostly Sunny","detailedForecast":"Mostly sunny, with a high near 53."},{"number":9,"name":"Thursday Night","startTime":"2020-12-17T18:00:00-08:00","endTime":"2020-12-18T06:00:00-08:00","isDaytime":false,"temperature":32,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"10 to 21 mph","windDirection":"NW","icon":"https://api.weather.gov/icons/land/night/wind_few?size=medium","shortForecast":"Mostly Clear","detailedForecast":"Mostly clear, with a low around 32."},{"number":10,"name":"Friday","startTime":"2020-12-18T06:00:00-08:00","endTime":"2020-12-18T18:00:00-08:00","isDaytime":true,"temperature":51,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"10 mph","windDirection":"N","icon":"https://api.weather.gov/icons/land/day/few?size=medium","shortForecast":"Sunny","detailedForecast":"Sunny, with a high near 51."},{"number":11,"name":"Friday Night","startTime":"2020-12-18T18:00:00-08:00","endTime":"2020-12-19T06:00:00-08:00","isDaytime":false,"temperature":27,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"8 mph","windDirection":"NNW","icon":"https://api.weather.gov/icons/land/night/few?size=medium","shortForecast":"Mostly Clear","detailedForecast":"Mostly clear, with a low around 27."},{"number":12,"name":"Saturday","startTime":"2020-12-19T06:00:00-08:00","endTime":"2020-12-19T18:00:00-08:00","isDaytime":true,"temperature":53,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"7 mph","windDirection":"NNE","icon":"https://api.weather.gov/icons/land/day/few?size=medium","shortForecast":"Sunny","detailedForecast":"Sunny, with a high near 53."},{"number":13,"name":"Saturday Night","startTime":"2020-12-19T18:00:00-08:00","endTime":"2020-12-20T06:00:00-08:00","isDaytime":false,"temperature":28,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"6 mph","windDirection":"NNW","icon":"https://api.weather.gov/icons/land/night/few?size=medium","shortForecast":"Mostly Clear","detailedForecast":"Mostly clear, with a low around 28."},{"number":14,"name":"Sunday","startTime":"2020-12-20T06:00:00-08:00","endTime":"2020-12-20T18:00:00-08:00","isDaytime":true,"temperature":57,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"6 mph","windDirection":"NE","icon":"https://api.weather.gov/icons/land/day/few?size=medium","shortForecast":"Sunny","detailedForecast":"Sunny, with a high near 57."}]}
  var hourly_VEF_111_97 = {"correlationId":"55d7c4a","title":"Unexpected Problem","type":"https://api.weather.gov/problems/UnexpectedProblem","status":500,"detail":"An unexpected problem has occurred.","instance":"https://api.weather.gov/requests/55d7c4a"}
  var crags_config = [
  {
    "name": "Red Rock",
    "note": "Sandstone that can be fragile when wet.",
    "mountainProject": "https://www.mountainproject.com/area/105731932/red-rock",
    "station": "KYCN2",
    "office": "VEF/111,97",
    "coordinates": [
      -115.427,
      36.135
    ]
  }
]</script>

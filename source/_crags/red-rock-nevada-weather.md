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
  var weekly_VEF_111_97 = {"updated":"2021-12-19T20:59:49+00:00","units":"us","forecastGenerator":"BaselineForecastGenerator","generatedAt":"2021-12-20T08:48:10+00:00","updateTime":"2021-12-19T20:59:49+00:00","validTimes":"2021-12-19T14:00:00+00:00/P8DT6H","elevation":{"unitCode":"wmoUnit:m","value":1157.9352},"periods":[{"number":1,"name":"Overnight","startTime":"2021-12-20T00:00:00-08:00","endTime":"2021-12-20T06:00:00-08:00","isDaytime":false,"temperature":30,"temperatureUnit":"F","temperatureTrend":"rising","windSpeed":"2 mph","windDirection":"N","icon":"https://api.weather.gov/icons/land/night/few?size=medium","shortForecast":"Mostly Clear","detailedForecast":"Mostly clear. Low around 30, with temperatures rising to around 32 overnight. North wind around 2 mph."},{"number":2,"name":"Monday","startTime":"2021-12-20T06:00:00-08:00","endTime":"2021-12-20T18:00:00-08:00","isDaytime":true,"temperature":50,"temperatureUnit":"F","temperatureTrend":"falling","windSpeed":"3 mph","windDirection":"E","icon":"https://api.weather.gov/icons/land/day/sct?size=medium","shortForecast":"Mostly Sunny","detailedForecast":"Mostly sunny. High near 50, with temperatures falling to around 43 in the afternoon. East wind around 3 mph."},{"number":3,"name":"Monday Night","startTime":"2021-12-20T18:00:00-08:00","endTime":"2021-12-21T06:00:00-08:00","isDaytime":false,"temperature":34,"temperatureUnit":"F","temperatureTrend":"rising","windSpeed":"2 mph","windDirection":"NW","icon":"https://api.weather.gov/icons/land/night/bkn?size=medium","shortForecast":"Mostly Cloudy","detailedForecast":"Mostly cloudy. Low around 34, with temperatures rising to around 36 overnight. Northwest wind around 2 mph."},{"number":4,"name":"Tuesday","startTime":"2021-12-21T06:00:00-08:00","endTime":"2021-12-21T18:00:00-08:00","isDaytime":true,"temperature":54,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"5 mph","windDirection":"ESE","icon":"https://api.weather.gov/icons/land/day/sct?size=medium","shortForecast":"Mostly Sunny","detailedForecast":"Mostly sunny, with a high near 54. East southeast wind around 5 mph."},{"number":5,"name":"Tuesday Night","startTime":"2021-12-21T18:00:00-08:00","endTime":"2021-12-22T06:00:00-08:00","isDaytime":false,"temperature":36,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"6 mph","windDirection":"WSW","icon":"https://api.weather.gov/icons/land/night/bkn?size=medium","shortForecast":"Mostly Cloudy","detailedForecast":"Mostly cloudy, with a low around 36. West southwest wind around 6 mph."},{"number":6,"name":"Wednesday","startTime":"2021-12-22T06:00:00-08:00","endTime":"2021-12-22T18:00:00-08:00","isDaytime":true,"temperature":55,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"5 to 10 mph","windDirection":"SSW","icon":"https://api.weather.gov/icons/land/day/bkn/rain_showers,20?size=medium","shortForecast":"Partly Sunny then Slight Chance Rain Showers","detailedForecast":"A slight chance of rain showers after 4pm. Partly sunny, with a high near 55. Chance of precipitation is 20%."},{"number":7,"name":"Wednesday Night","startTime":"2021-12-22T18:00:00-08:00","endTime":"2021-12-23T06:00:00-08:00","isDaytime":false,"temperature":39,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"9 to 15 mph","windDirection":"SSW","icon":"https://api.weather.gov/icons/land/night/rain_showers,40/rain_showers,50?size=medium","shortForecast":"Chance Rain Showers","detailedForecast":"A chance of rain showers. Mostly cloudy, with a low around 39. Chance of precipitation is 50%."},{"number":8,"name":"Thursday","startTime":"2021-12-23T06:00:00-08:00","endTime":"2021-12-23T18:00:00-08:00","isDaytime":true,"temperature":52,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"14 to 18 mph","windDirection":"SSW","icon":"https://api.weather.gov/icons/land/day/rain_showers?size=medium","shortForecast":"Chance Rain Showers","detailedForecast":"A chance of rain showers. Mostly cloudy, with a high near 52."},{"number":9,"name":"Thursday Night","startTime":"2021-12-23T18:00:00-08:00","endTime":"2021-12-24T06:00:00-08:00","isDaytime":false,"temperature":34,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"20 to 38 mph","windDirection":"SW","icon":"https://api.weather.gov/icons/land/night/rain_showers/snow?size=medium","shortForecast":"Chance Rain Showers then Chance Rain And Snow Showers","detailedForecast":"A chance of rain showers before 3am, then a chance of rain and snow showers. Mostly cloudy, with a low around 34. Little or no snow accumulation expected."},{"number":10,"name":"Friday","startTime":"2021-12-24T06:00:00-08:00","endTime":"2021-12-24T18:00:00-08:00","isDaytime":true,"temperature":47,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"21 to 30 mph","windDirection":"SW","icon":"https://api.weather.gov/icons/land/day/snow/wind_sct?size=medium","shortForecast":"Chance Snow Showers then Mostly Sunny","detailedForecast":"A chance of snow showers before 10am. Mostly sunny, with a high near 47. Little or no snow accumulation expected."},{"number":11,"name":"Friday Night","startTime":"2021-12-24T18:00:00-08:00","endTime":"2021-12-25T06:00:00-08:00","isDaytime":false,"temperature":31,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"16 to 20 mph","windDirection":"SW","icon":"https://api.weather.gov/icons/land/night/sct?size=medium","shortForecast":"Partly Cloudy","detailedForecast":"Partly cloudy, with a low around 31."},{"number":12,"name":"Christmas Day","startTime":"2021-12-25T06:00:00-08:00","endTime":"2021-12-25T18:00:00-08:00","isDaytime":true,"temperature":48,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"20 mph","windDirection":"SW","icon":"https://api.weather.gov/icons/land/day/snow?size=medium","shortForecast":"Chance Rain And Snow Showers","detailedForecast":"A chance of rain and snow showers after 10am. Mostly sunny, with a high near 48."},{"number":13,"name":"Saturday Night","startTime":"2021-12-25T18:00:00-08:00","endTime":"2021-12-26T06:00:00-08:00","isDaytime":false,"temperature":33,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"17 mph","windDirection":"SW","icon":"https://api.weather.gov/icons/land/night/snow?size=medium","shortForecast":"Chance Rain And Snow Showers","detailedForecast":"A chance of rain showers before 9pm, then a chance of rain and snow showers. Partly cloudy, with a low around 33."},{"number":14,"name":"Sunday","startTime":"2021-12-26T06:00:00-08:00","endTime":"2021-12-26T18:00:00-08:00","isDaytime":true,"temperature":47,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"16 to 24 mph","windDirection":"SW","icon":"https://api.weather.gov/icons/land/day/snow?size=medium","shortForecast":"Slight Chance Rain And Snow Showers","detailedForecast":"A slight chance of rain and snow showers. Mostly sunny, with a high near 47."}]}
  var hourly_VEF_111_97 = {"correlationId":"1e8e8075","title":"Unexpected Problem","type":"https://api.weather.gov/problems/UnexpectedProblem","status":500,"detail":"An unexpected problem has occurred.","instance":"https://api.weather.gov/requests/1e8e8075"}
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

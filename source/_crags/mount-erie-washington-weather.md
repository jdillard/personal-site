---
### THIS FILE IS AUTO-GENERATED - DO NOT EDIT ###
layout: page
title: Mount Erie, Washington Climbing Weather - Current, Past, and Forecasted Report
title_override: Mount Erie<br /><small>Climbing Weather</small>
description: A lightweight weather report for Mount Erie, Washington. Optimized for slow internet connections.
js_includes:
  - weather.js
---

<section class="measure center lh-copy f5-ns f6 ph2 mv4" style="text-align: justify;">
<strong>"Is it dry?"</strong>, an oft-repeated, age-old question. Here are real-time,
precipitation-focused reports of current, past, and forecasted climbing weather for Mount Erie, Washington.
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
<section id="weather" data-crag="mount-erie-washington" class="mv4-ns mv3 ph2 center"></section>
<section id="nearby" class="tc lh-copy">
  <h3>Nearby Crags</h3>
<a class="nowrap no-underline fancy-link relative light-red mh3" href="/crags/icicle-creek-washington-weather.html">Icicle Creek</a>
<a class="nowrap no-underline fancy-link relative light-red mh3" href="/crags/tieton-river-rock-washington-weather.html">Tieton River Rock</a>
<a class="nowrap no-underline fancy-link relative light-red mh3" href="/crags/vantage-washington-weather.html">Vantage</a>
<a class="nowrap no-underline fancy-link relative light-red mh3" href="/crags/index-washington-weather.html">Index</a>
<a class="nowrap no-underline fancy-link relative light-red mh3" href="/crags/darrington-washington-weather.html">Darrington</a>
<a class="nowrap no-underline fancy-link relative light-red mh3" href="/crags/smith-rock-oregon-weather.html">Smith Rock</a>
<a class="nowrap no-underline fancy-link relative light-red mh3" href="/crags/trout-creek-oregon-weather.html">Trout Creek</a>
</section>
<section id="nearby" class="tc lh-copy">
  <h3>Other Metros</h3>
  <select class="ma1 bg-near-white pa2" id="stateSel">
    <option value="Texas">Texas</option>
    <option value="Washington" selected>Washington</option>
    <option value="Colorado">Colorado</option>
    <option value="Tennessee">Tennessee</option>
    <option value="Utah">Utah</option>
    <option value="California">California</option>
  </select>
  <select class="ma1 bg-near-white pa2" id="citySel">
    <option value="Seattle" selected>Seattle</option>
  </select>
  <a id="selectMetro" class="f6 link dim ph3 pv2 ma1 dib white bg-light-red" href="/crags/seattle-washington-weather.html">Select Metro</a>
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
  var weekly_SEW_123_109 = {"updated":"2022-06-28T04:41:05+00:00","units":"us","forecastGenerator":"BaselineForecastGenerator","generatedAt":"2022-06-28T08:41:21+00:00","updateTime":"2022-06-28T04:41:05+00:00","validTimes":"2022-06-27T22:00:00+00:00/P7DT3H","elevation":{"unitCode":"wmoUnit:m","value":238.9632},"periods":[{"number":1,"name":"Overnight","startTime":"2022-06-28T01:00:00-07:00","endTime":"2022-06-28T06:00:00-07:00","isDaytime":false,"temperature":57,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"7 to 14 mph","windDirection":"S","icon":"https://api.weather.gov/icons/land/night/tsra_hi,30?size=medium","shortForecast":"Scattered Showers And Thunderstorms","detailedForecast":"Scattered showers and thunderstorms. Partly cloudy, with a low around 57. South wind 7 to 14 mph. Chance of precipitation is 30%."},{"number":2,"name":"Tuesday","startTime":"2022-06-28T06:00:00-07:00","endTime":"2022-06-28T18:00:00-07:00","isDaytime":true,"temperature":70,"temperatureUnit":"F","temperatureTrend":"falling","windSpeed":"12 to 17 mph","windDirection":"SSE","icon":"https://api.weather.gov/icons/land/day/rain_showers,30/rain_showers,70?size=medium","shortForecast":"Rain Showers Likely","detailedForecast":"Rain showers likely. Mostly cloudy. High near 70, with temperatures falling to around 67 in the afternoon. South southeast wind 12 to 17 mph, with gusts as high as 21 mph. Chance of precipitation is 70%. New rainfall amounts less than a tenth of an inch possible."},{"number":3,"name":"Tuesday Night","startTime":"2022-06-28T18:00:00-07:00","endTime":"2022-06-29T06:00:00-07:00","isDaytime":false,"temperature":54,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"1 to 12 mph","windDirection":"S","icon":"https://api.weather.gov/icons/land/night/rain_showers,70/rain_showers,60?size=medium","shortForecast":"Rain Showers Likely","detailedForecast":"Rain showers likely. Mostly cloudy, with a low around 54. South wind 1 to 12 mph. Chance of precipitation is 70%. New rainfall amounts less than a tenth of an inch possible."},{"number":4,"name":"Wednesday","startTime":"2022-06-29T06:00:00-07:00","endTime":"2022-06-29T18:00:00-07:00","isDaytime":true,"temperature":66,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"6 mph","windDirection":"S","icon":"https://api.weather.gov/icons/land/day/rain_showers,50/rain_showers,30?size=medium","shortForecast":"Chance Rain Showers","detailedForecast":"A chance of rain showers before 5pm. Mostly cloudy, with a high near 66. South wind around 6 mph. Chance of precipitation is 50%. New rainfall amounts less than a tenth of an inch possible."},{"number":5,"name":"Wednesday Night","startTime":"2022-06-29T18:00:00-07:00","endTime":"2022-06-30T06:00:00-07:00","isDaytime":false,"temperature":52,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"3 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/night/sct?size=medium","shortForecast":"Partly Cloudy","detailedForecast":"Partly cloudy, with a low around 52. West wind around 3 mph."},{"number":6,"name":"Thursday","startTime":"2022-06-30T06:00:00-07:00","endTime":"2022-06-30T18:00:00-07:00","isDaytime":true,"temperature":70,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"2 to 8 mph","windDirection":"WNW","icon":"https://api.weather.gov/icons/land/day/sct?size=medium","shortForecast":"Mostly Sunny","detailedForecast":"Mostly sunny, with a high near 70."},{"number":7,"name":"Thursday Night","startTime":"2022-06-30T18:00:00-07:00","endTime":"2022-07-01T06:00:00-07:00","isDaytime":false,"temperature":54,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"9 mph","windDirection":"WSW","icon":"https://api.weather.gov/icons/land/night/few?size=medium","shortForecast":"Mostly Clear","detailedForecast":"Mostly clear, with a low around 54."},{"number":8,"name":"Friday","startTime":"2022-07-01T06:00:00-07:00","endTime":"2022-07-01T18:00:00-07:00","isDaytime":true,"temperature":71,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"7 to 10 mph","windDirection":"SW","icon":"https://api.weather.gov/icons/land/day/few?size=medium","shortForecast":"Sunny","detailedForecast":"Sunny, with a high near 71."},{"number":9,"name":"Friday Night","startTime":"2022-07-01T18:00:00-07:00","endTime":"2022-07-02T06:00:00-07:00","isDaytime":false,"temperature":54,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"6 to 10 mph","windDirection":"SW","icon":"https://api.weather.gov/icons/land/night/sct?size=medium","shortForecast":"Partly Cloudy","detailedForecast":"Partly cloudy, with a low around 54."},{"number":10,"name":"Saturday","startTime":"2022-07-02T06:00:00-07:00","endTime":"2022-07-02T18:00:00-07:00","isDaytime":true,"temperature":70,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"6 to 13 mph","windDirection":"SW","icon":"https://api.weather.gov/icons/land/day/sct?size=medium","shortForecast":"Mostly Sunny","detailedForecast":"Mostly sunny, with a high near 70."},{"number":11,"name":"Saturday Night","startTime":"2022-07-02T18:00:00-07:00","endTime":"2022-07-03T06:00:00-07:00","isDaytime":false,"temperature":55,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"7 to 14 mph","windDirection":"SW","icon":"https://api.weather.gov/icons/land/night/rain_showers?size=medium","shortForecast":"Chance Rain Showers","detailedForecast":"A chance of rain showers after 11pm. Mostly cloudy, with a low around 55."},{"number":12,"name":"Sunday","startTime":"2022-07-03T06:00:00-07:00","endTime":"2022-07-03T18:00:00-07:00","isDaytime":true,"temperature":67,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"7 to 14 mph","windDirection":"SSW","icon":"https://api.weather.gov/icons/land/day/rain_showers?size=medium","shortForecast":"Chance Rain Showers","detailedForecast":"A chance of rain showers. Mostly cloudy, with a high near 67."},{"number":13,"name":"Sunday Night","startTime":"2022-07-03T18:00:00-07:00","endTime":"2022-07-04T06:00:00-07:00","isDaytime":false,"temperature":54,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"3 to 17 mph","windDirection":"SSW","icon":"https://api.weather.gov/icons/land/night/rain_showers?size=medium","shortForecast":"Chance Rain Showers","detailedForecast":"A chance of rain showers. Mostly cloudy, with a low around 54."},{"number":14,"name":"Independence Day","startTime":"2022-07-04T06:00:00-07:00","endTime":"2022-07-04T18:00:00-07:00","isDaytime":true,"temperature":65,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"5 to 12 mph","windDirection":"S","icon":"https://api.weather.gov/icons/land/day/rain_showers?size=medium","shortForecast":"Chance Rain Showers","detailedForecast":"A chance of rain showers. Mostly cloudy, with a high near 65."}]}
  var hourly_SEW_123_109 = {"correlationId":"2cff5fae","title":"Unexpected Problem","type":"https://api.weather.gov/problems/UnexpectedProblem","status":500,"detail":"An unexpected problem has occurred.","instance":"https://api.weather.gov/requests/2cff5fae"}
  var crags_config = [
  {
    "name": "Mount Erie",
    "note": "Highly textured and featured diorite.",
    "mountainProject": "https://www.mountainproject.com/area/106413714/mount-erie",
    "station": "KNUW",
    "office": "SEW/123,109",
    "coordinates": [
      -122.627,
      48.453
    ]
  }
]</script>

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
  var weekly_VEF_111_97 = {"updated":"2021-09-30T02:09:09+00:00","units":"us","forecastGenerator":"BaselineForecastGenerator","generatedAt":"2021-09-30T08:44:09+00:00","updateTime":"2021-09-30T02:09:09+00:00","validTimes":"2021-09-29T20:00:00+00:00/P8DT6H","elevation":{"value":1157.9352,"unitCode":"unit:m"},"periods":[{"number":1,"name":"Overnight","startTime":"2021-09-30T01:00:00-07:00","endTime":"2021-09-30T06:00:00-07:00","isDaytime":false,"temperature":52,"temperatureUnit":"F","temperatureTrend":"rising","windSpeed":"8 to 12 mph","windDirection":"NNW","icon":"https://api.weather.gov/icons/land/night/skc?size=medium","shortForecast":"Clear","detailedForecast":"Clear. Low around 52, with temperatures rising to around 55 overnight. North northwest wind 8 to 12 mph."},{"number":2,"name":"Thursday","startTime":"2021-09-30T06:00:00-07:00","endTime":"2021-09-30T18:00:00-07:00","isDaytime":true,"temperature":77,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"9 to 13 mph","windDirection":"NNE","icon":"https://api.weather.gov/icons/land/day/skc?size=medium","shortForecast":"Sunny","detailedForecast":"Sunny, with a high near 77. North northeast wind 9 to 13 mph, with gusts as high as 20 mph."},{"number":3,"name":"Thursday Night","startTime":"2021-09-30T18:00:00-07:00","endTime":"2021-10-01T06:00:00-07:00","isDaytime":false,"temperature":54,"temperatureUnit":"F","temperatureTrend":"rising","windSpeed":"5 to 9 mph","windDirection":"NNW","icon":"https://api.weather.gov/icons/land/night/skc?size=medium","shortForecast":"Clear","detailedForecast":"Clear. Low around 54, with temperatures rising to around 58 overnight. North northwest wind 5 to 9 mph."},{"number":4,"name":"Friday","startTime":"2021-10-01T06:00:00-07:00","endTime":"2021-10-01T18:00:00-07:00","isDaytime":true,"temperature":79,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"5 to 8 mph","windDirection":"NE","icon":"https://api.weather.gov/icons/land/day/skc?size=medium","shortForecast":"Sunny","detailedForecast":"Sunny, with a high near 79. Northeast wind 5 to 8 mph."},{"number":5,"name":"Friday Night","startTime":"2021-10-01T18:00:00-07:00","endTime":"2021-10-02T06:00:00-07:00","isDaytime":false,"temperature":57,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"7 mph","windDirection":"NNW","icon":"https://api.weather.gov/icons/land/night/skc?size=medium","shortForecast":"Clear","detailedForecast":"Clear, with a low around 57. North northwest wind around 7 mph."},{"number":6,"name":"Saturday","startTime":"2021-10-02T06:00:00-07:00","endTime":"2021-10-02T18:00:00-07:00","isDaytime":true,"temperature":82,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"8 mph","windDirection":"NE","icon":"https://api.weather.gov/icons/land/day/few?size=medium","shortForecast":"Sunny","detailedForecast":"Sunny, with a high near 82."},{"number":7,"name":"Saturday Night","startTime":"2021-10-02T18:00:00-07:00","endTime":"2021-10-03T06:00:00-07:00","isDaytime":false,"temperature":59,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"7 mph","windDirection":"NNW","icon":"https://api.weather.gov/icons/land/night/few?size=medium","shortForecast":"Mostly Clear","detailedForecast":"Mostly clear, with a low around 59."},{"number":8,"name":"Sunday","startTime":"2021-10-03T06:00:00-07:00","endTime":"2021-10-03T18:00:00-07:00","isDaytime":true,"temperature":84,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"5 to 8 mph","windDirection":"NE","icon":"https://api.weather.gov/icons/land/day/few?size=medium","shortForecast":"Sunny","detailedForecast":"Sunny, with a high near 84."},{"number":9,"name":"Sunday Night","startTime":"2021-10-03T18:00:00-07:00","endTime":"2021-10-04T06:00:00-07:00","isDaytime":false,"temperature":61,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"7 mph","windDirection":"N","icon":"https://api.weather.gov/icons/land/night/few?size=medium","shortForecast":"Mostly Clear","detailedForecast":"Mostly clear, with a low around 61."},{"number":10,"name":"Monday","startTime":"2021-10-04T06:00:00-07:00","endTime":"2021-10-04T18:00:00-07:00","isDaytime":true,"temperature":85,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"5 to 10 mph","windDirection":"ENE","icon":"https://api.weather.gov/icons/land/day/sct?size=medium","shortForecast":"Mostly Sunny","detailedForecast":"Mostly sunny, with a high near 85."},{"number":11,"name":"Monday Night","startTime":"2021-10-04T18:00:00-07:00","endTime":"2021-10-05T06:00:00-07:00","isDaytime":false,"temperature":62,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"8 mph","windDirection":"WSW","icon":"https://api.weather.gov/icons/land/night/rain_showers?size=medium","shortForecast":"Isolated Rain Showers","detailedForecast":"Isolated rain showers after 11pm. Partly cloudy, with a low around 62."},{"number":12,"name":"Tuesday","startTime":"2021-10-05T06:00:00-07:00","endTime":"2021-10-05T18:00:00-07:00","isDaytime":true,"temperature":81,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"6 to 13 mph","windDirection":"ESE","icon":"https://api.weather.gov/icons/land/day/rain_showers?size=medium","shortForecast":"Isolated Rain Showers","detailedForecast":"Isolated rain showers before 5pm. Mostly sunny, with a high near 81."},{"number":13,"name":"Tuesday Night","startTime":"2021-10-05T18:00:00-07:00","endTime":"2021-10-06T06:00:00-07:00","isDaytime":false,"temperature":58,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"6 to 10 mph","windDirection":"WSW","icon":"https://api.weather.gov/icons/land/night/sct?size=medium","shortForecast":"Partly Cloudy","detailedForecast":"Partly cloudy, with a low around 58."},{"number":14,"name":"Wednesday","startTime":"2021-10-06T06:00:00-07:00","endTime":"2021-10-06T18:00:00-07:00","isDaytime":true,"temperature":80,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"6 to 10 mph","windDirection":"S","icon":"https://api.weather.gov/icons/land/day/sct?size=medium","shortForecast":"Mostly Sunny","detailedForecast":"Mostly sunny, with a high near 80."}]}
  var hourly_VEF_111_97 = {"correlationId":"c4ef3a9","title":"Unexpected Problem","type":"https://api.weather.gov/problems/UnexpectedProblem","status":500,"detail":"An unexpected problem has occurred.","instance":"https://api.weather.gov/requests/c4ef3a9"}
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

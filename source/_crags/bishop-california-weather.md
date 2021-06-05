---
### THIS FILE IS AUTO-GENERATED - DO NOT EDIT ###
layout: page
title: Bishop, California Climbing Weather - Current, Past, and Forecasted Report
title_override: Bishop<br /><small>Climbing Weather</small>
description: A lightweight weather report for Bishop, California. Optimized for slow internet connections.
js_includes:
  - weather.js
---

<section class="measure center lh-copy f5-ns f6 ph2 mv4" style="text-align: justify;">
<strong>"Is it dry?"</strong>, an oft-repeated, age-old question. Here are real-time,
precipitation-focused reports of current, past, and forecasted climbing weather for Bishop, California.
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
<section id="weather" data-crag="bishop-california" class="mv4-ns mv3 ph2 center"></section>
<section id="nearby" class="tc lh-copy">
  <h3>Nearby Crags</h3>
<a class="nowrap no-underline fancy-link relative light-red mh3" href="/crags/joshua-tree-national-park-california-weather.html">Joshua Tree National Park</a>
<a class="nowrap no-underline fancy-link relative light-red mh3" href="/crags/yosemite-national-park-california-weather.html">Yosemite National Park</a>
<a class="nowrap no-underline fancy-link relative light-red mh3" href="/crags/mammoth-lakes-california-weather.html">Mammoth Lakes</a>
<a class="nowrap no-underline fancy-link relative light-red mh3" href="/crags/red-rock-nevada-weather.html">Red Rock</a>
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
  var weekly_VEF_14_168 = {"updated":"2021-06-04T19:31:24+00:00","units":"us","forecastGenerator":"BaselineForecastGenerator","generatedAt":"2021-06-05T09:24:27+00:00","updateTime":"2021-06-04T19:31:24+00:00","validTimes":"2021-06-04T13:00:00+00:00/P8DT6H","elevation":{"value":1296.0096,"unitCode":"unit:m"},"periods":[{"number":1,"name":"Overnight","startTime":"2021-06-05T02:00:00-07:00","endTime":"2021-06-05T06:00:00-07:00","isDaytime":false,"temperature":63,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"6 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/night/few?size=medium","shortForecast":"Mostly Clear","detailedForecast":"Mostly clear, with a low around 63. West wind around 6 mph."},{"number":2,"name":"Saturday","startTime":"2021-06-05T06:00:00-07:00","endTime":"2021-06-05T18:00:00-07:00","isDaytime":true,"temperature":98,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"5 to 14 mph","windDirection":"NNE","icon":"https://api.weather.gov/icons/land/day/few?size=medium","shortForecast":"Sunny","detailedForecast":"Sunny, with a high near 98. North northeast wind 5 to 14 mph, with gusts as high as 20 mph."},{"number":3,"name":"Saturday Night","startTime":"2021-06-05T18:00:00-07:00","endTime":"2021-06-06T06:00:00-07:00","isDaytime":false,"temperature":62,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"6 to 17 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/night/few?size=medium","shortForecast":"Mostly Clear","detailedForecast":"Mostly clear, with a low around 62. West wind 6 to 17 mph, with gusts as high as 25 mph."},{"number":4,"name":"Sunday","startTime":"2021-06-06T06:00:00-07:00","endTime":"2021-06-06T18:00:00-07:00","isDaytime":true,"temperature":98,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"5 to 16 mph","windDirection":"SSW","icon":"https://api.weather.gov/icons/land/day/few?size=medium","shortForecast":"Sunny","detailedForecast":"Sunny, with a high near 98. South southwest wind 5 to 16 mph, with gusts as high as 24 mph."},{"number":5,"name":"Sunday Night","startTime":"2021-06-06T18:00:00-07:00","endTime":"2021-06-07T06:00:00-07:00","isDaytime":false,"temperature":60,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"7 to 16 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/night/few?size=medium","shortForecast":"Mostly Clear","detailedForecast":"Mostly clear, with a low around 60. West wind 7 to 16 mph, with gusts as high as 25 mph."},{"number":6,"name":"Monday","startTime":"2021-06-07T06:00:00-07:00","endTime":"2021-06-07T18:00:00-07:00","isDaytime":true,"temperature":93,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"6 to 17 mph","windDirection":"SSW","icon":"https://api.weather.gov/icons/land/day/sct?size=medium","shortForecast":"Mostly Sunny","detailedForecast":"Mostly sunny, with a high near 93."},{"number":7,"name":"Monday Night","startTime":"2021-06-07T18:00:00-07:00","endTime":"2021-06-08T06:00:00-07:00","isDaytime":false,"temperature":56,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"12 to 17 mph","windDirection":"SW","icon":"https://api.weather.gov/icons/land/night/sct?size=medium","shortForecast":"Partly Cloudy","detailedForecast":"Partly cloudy, with a low around 56."},{"number":8,"name":"Tuesday","startTime":"2021-06-08T06:00:00-07:00","endTime":"2021-06-08T18:00:00-07:00","isDaytime":true,"temperature":87,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"13 to 17 mph","windDirection":"SSW","icon":"https://api.weather.gov/icons/land/day/few?size=medium","shortForecast":"Sunny","detailedForecast":"Sunny, with a high near 87."},{"number":9,"name":"Tuesday Night","startTime":"2021-06-08T18:00:00-07:00","endTime":"2021-06-09T06:00:00-07:00","isDaytime":false,"temperature":52,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"12 to 17 mph","windDirection":"WSW","icon":"https://api.weather.gov/icons/land/night/skc?size=medium","shortForecast":"Clear","detailedForecast":"Clear, with a low around 52."},{"number":10,"name":"Wednesday","startTime":"2021-06-09T06:00:00-07:00","endTime":"2021-06-09T18:00:00-07:00","isDaytime":true,"temperature":85,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"12 to 17 mph","windDirection":"SW","icon":"https://api.weather.gov/icons/land/day/few?size=medium","shortForecast":"Sunny","detailedForecast":"Sunny, with a high near 85."},{"number":11,"name":"Wednesday Night","startTime":"2021-06-09T18:00:00-07:00","endTime":"2021-06-10T06:00:00-07:00","isDaytime":false,"temperature":51,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"10 to 17 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/night/skc?size=medium","shortForecast":"Clear","detailedForecast":"Clear, with a low around 51."},{"number":12,"name":"Thursday","startTime":"2021-06-10T06:00:00-07:00","endTime":"2021-06-10T18:00:00-07:00","isDaytime":true,"temperature":90,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"8 to 13 mph","windDirection":"S","icon":"https://api.weather.gov/icons/land/day/skc?size=medium","shortForecast":"Sunny","detailedForecast":"Sunny, with a high near 90."},{"number":13,"name":"Thursday Night","startTime":"2021-06-10T18:00:00-07:00","endTime":"2021-06-11T06:00:00-07:00","isDaytime":false,"temperature":55,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"9 to 13 mph","windDirection":"WSW","icon":"https://api.weather.gov/icons/land/night/skc?size=medium","shortForecast":"Clear","detailedForecast":"Clear, with a low around 55."},{"number":14,"name":"Friday","startTime":"2021-06-11T06:00:00-07:00","endTime":"2021-06-11T18:00:00-07:00","isDaytime":true,"temperature":93,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"7 to 13 mph","windDirection":"SSW","icon":"https://api.weather.gov/icons/land/day/skc?size=medium","shortForecast":"Sunny","detailedForecast":"Sunny, with a high near 93."}]}
  var hourly_VEF_14_168 = {"correlationId":"29675a51","title":"Unexpected Problem","type":"https://api.weather.gov/problems/UnexpectedProblem","status":500,"detail":"An unexpected problem has occurred.","instance":"https://api.weather.gov/requests/29675a51"}
  var crags_config = [
  {
    "name": "Bishop",
    "note": "Sharp, skin tearing quartz monzonite.",
    "mountainProject": "https://www.mountainproject.com/area/106064825/bishop-area",
    "station": "KBIH",
    "office": "VEF/14,168",
    "coordinates": [
      -118.435,
      37.361
    ]
  }
]</script>

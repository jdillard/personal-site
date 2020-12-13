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
  var weekly_VEF_14_168 = {"updated":"2020-12-13T00:09:29+00:00","units":"us","forecastGenerator":"BaselineForecastGenerator","generatedAt":"2020-12-13T08:46:35+00:00","updateTime":"2020-12-13T00:09:29+00:00","validTimes":"2020-12-12T18:00:00+00:00/P8DT6H","elevation":{"value":1296.0096,"unitCode":"unit:m"},"periods":[{"number":1,"name":"Overnight","startTime":"2020-12-13T00:00:00-08:00","endTime":"2020-12-13T06:00:00-08:00","isDaytime":false,"temperature":23,"temperatureUnit":"F","temperatureTrend":"rising","windSpeed":"6 mph","windDirection":"WNW","icon":"https://api.weather.gov/icons/land/night/sct?size=medium","shortForecast":"Partly Cloudy","detailedForecast":"Partly cloudy. Low around 23, with temperatures rising to around 26 overnight. West northwest wind around 6 mph."},{"number":2,"name":"Sunday","startTime":"2020-12-13T06:00:00-08:00","endTime":"2020-12-13T18:00:00-08:00","isDaytime":true,"temperature":55,"temperatureUnit":"F","temperatureTrend":"falling","windSpeed":"7 to 12 mph","windDirection":"SSW","icon":"https://api.weather.gov/icons/land/day/sct/rain_showers,30?size=medium","shortForecast":"Mostly Sunny then Chance Rain Showers","detailedForecast":"A chance of rain showers after 1pm. Mostly sunny. High near 55, with temperatures falling to around 49 in the afternoon. South southwest wind 7 to 12 mph. Chance of precipitation is 30%."},{"number":3,"name":"Sunday Night","startTime":"2020-12-13T18:00:00-08:00","endTime":"2020-12-14T06:00:00-08:00","isDaytime":false,"temperature":25,"temperatureUnit":"F","temperatureTrend":"rising","windSpeed":"9 mph","windDirection":"WNW","icon":"https://api.weather.gov/icons/land/night/rain_showers,30/sct?size=medium","shortForecast":"Chance Rain Showers then Partly Cloudy","detailedForecast":"A chance of rain showers before 10pm. Partly cloudy. Low around 25, with temperatures rising to around 27 overnight. West northwest wind around 9 mph. Chance of precipitation is 30%."},{"number":4,"name":"Monday","startTime":"2020-12-14T06:00:00-08:00","endTime":"2020-12-14T18:00:00-08:00","isDaytime":true,"temperature":48,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"8 to 14 mph","windDirection":"NNW","icon":"https://api.weather.gov/icons/land/day/sct?size=medium","shortForecast":"Mostly Sunny","detailedForecast":"Mostly sunny, with a high near 48. North northwest wind 8 to 14 mph, with gusts as high as 21 mph."},{"number":5,"name":"Monday Night","startTime":"2020-12-14T18:00:00-08:00","endTime":"2020-12-15T06:00:00-08:00","isDaytime":false,"temperature":21,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"6 to 10 mph","windDirection":"NW","icon":"https://api.weather.gov/icons/land/night/sct?size=medium","shortForecast":"Partly Cloudy","detailedForecast":"Partly cloudy, with a low around 21. Northwest wind 6 to 10 mph."},{"number":6,"name":"Tuesday","startTime":"2020-12-15T06:00:00-08:00","endTime":"2020-12-15T18:00:00-08:00","isDaytime":true,"temperature":54,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"8 mph","windDirection":"NNE","icon":"https://api.weather.gov/icons/land/day/sct?size=medium","shortForecast":"Mostly Sunny","detailedForecast":"Mostly sunny, with a high near 54."},{"number":7,"name":"Tuesday Night","startTime":"2020-12-15T18:00:00-08:00","endTime":"2020-12-16T06:00:00-08:00","isDaytime":false,"temperature":27,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"8 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/night/sct?size=medium","shortForecast":"Partly Cloudy","detailedForecast":"Partly cloudy, with a low around 27."},{"number":8,"name":"Wednesday","startTime":"2020-12-16T06:00:00-08:00","endTime":"2020-12-16T18:00:00-08:00","isDaytime":true,"temperature":59,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"7 mph","windDirection":"WSW","icon":"https://api.weather.gov/icons/land/day/sct?size=medium","shortForecast":"Mostly Sunny","detailedForecast":"Mostly sunny, with a high near 59."},{"number":9,"name":"Wednesday Night","startTime":"2020-12-16T18:00:00-08:00","endTime":"2020-12-17T06:00:00-08:00","isDaytime":false,"temperature":28,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"10 mph","windDirection":"SW","icon":"https://api.weather.gov/icons/land/night/bkn?size=medium","shortForecast":"Mostly Cloudy","detailedForecast":"Mostly cloudy, with a low around 28."},{"number":10,"name":"Thursday","startTime":"2020-12-17T06:00:00-08:00","endTime":"2020-12-17T18:00:00-08:00","isDaytime":true,"temperature":55,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"10 to 16 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/day/bkn?size=medium","shortForecast":"Partly Sunny","detailedForecast":"Partly sunny, with a high near 55."},{"number":11,"name":"Thursday Night","startTime":"2020-12-17T18:00:00-08:00","endTime":"2020-12-18T06:00:00-08:00","isDaytime":false,"temperature":25,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"7 to 14 mph","windDirection":"WNW","icon":"https://api.weather.gov/icons/land/night/sct?size=medium","shortForecast":"Partly Cloudy","detailedForecast":"Partly cloudy, with a low around 25."},{"number":12,"name":"Friday","startTime":"2020-12-18T06:00:00-08:00","endTime":"2020-12-18T18:00:00-08:00","isDaytime":true,"temperature":54,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"9 mph","windDirection":"NNW","icon":"https://api.weather.gov/icons/land/day/sct?size=medium","shortForecast":"Mostly Sunny","detailedForecast":"Mostly sunny, with a high near 54."},{"number":13,"name":"Friday Night","startTime":"2020-12-18T18:00:00-08:00","endTime":"2020-12-19T06:00:00-08:00","isDaytime":false,"temperature":24,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"7 mph","windDirection":"WNW","icon":"https://api.weather.gov/icons/land/night/sct?size=medium","shortForecast":"Partly Cloudy","detailedForecast":"Partly cloudy, with a low around 24."},{"number":14,"name":"Saturday","startTime":"2020-12-19T06:00:00-08:00","endTime":"2020-12-19T18:00:00-08:00","isDaytime":true,"temperature":56,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"8 mph","windDirection":"WSW","icon":"https://api.weather.gov/icons/land/day/bkn?size=medium","shortForecast":"Partly Sunny","detailedForecast":"Partly sunny, with a high near 56."}]}
  var hourly_VEF_14_168 = {"correlationId":"14058527","title":"Unexpected Problem","type":"https://api.weather.gov/problems/UnexpectedProblem","status":500,"detail":"An unexpected problem has occurred.","instance":"https://api.weather.gov/requests/14058527"}
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

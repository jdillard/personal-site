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
  var weekly_VEF_14_168 = {"updated":"2022-12-06T07:39:11+00:00","units":"us","forecastGenerator":"BaselineForecastGenerator","generatedAt":"2022-12-06T08:37:15+00:00","updateTime":"2022-12-06T07:39:11+00:00","validTimes":"2022-12-06T01:00:00+00:00/P8DT6H","elevation":{"unitCode":"wmoUnit:m","value":1296.0096},"periods":[{"number":1,"name":"Overnight","startTime":"2022-12-06T00:00:00-08:00","endTime":"2022-12-06T06:00:00-08:00","isDaytime":false,"temperature":22,"temperatureUnit":"F","temperatureTrend":"rising","windSpeed":"7 mph","windDirection":"WNW","icon":"https://api.weather.gov/icons/land/night/sct?size=medium","shortForecast":"Partly Cloudy","detailedForecast":"Partly cloudy. Low around 22, with temperatures rising to around 25 overnight. West northwest wind around 7 mph."},{"number":2,"name":"Tuesday","startTime":"2022-12-06T06:00:00-08:00","endTime":"2022-12-06T18:00:00-08:00","isDaytime":true,"temperature":46,"temperatureUnit":"F","temperatureTrend":"falling","windSpeed":"7 mph","windDirection":"NNW","icon":"https://api.weather.gov/icons/land/day/sct/snow,20?size=medium","shortForecast":"Mostly Sunny then Slight Chance Snow Showers","detailedForecast":"A slight chance of snow showers after 4pm. Mostly sunny. High near 46, with temperatures falling to around 43 in the afternoon. North northwest wind around 7 mph. Chance of precipitation is 20%."},{"number":3,"name":"Tuesday Night","startTime":"2022-12-06T18:00:00-08:00","endTime":"2022-12-07T06:00:00-08:00","isDaytime":false,"temperature":22,"temperatureUnit":"F","temperatureTrend":"rising","windSpeed":"7 mph","windDirection":"WNW","icon":"https://api.weather.gov/icons/land/night/snow,20/sct?size=medium","shortForecast":"Slight Chance Snow Showers then Partly Cloudy","detailedForecast":"A slight chance of snow showers before midnight. Partly cloudy. Low around 22, with temperatures rising to around 25 overnight. West northwest wind around 7 mph. Chance of precipitation is 20%."},{"number":4,"name":"Wednesday","startTime":"2022-12-07T06:00:00-08:00","endTime":"2022-12-07T18:00:00-08:00","isDaytime":true,"temperature":47,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"6 mph","windDirection":"NW","icon":"https://api.weather.gov/icons/land/day/few?size=medium","shortForecast":"Sunny","detailedForecast":"Sunny, with a high near 47. Northwest wind around 6 mph."},{"number":5,"name":"Wednesday Night","startTime":"2022-12-07T18:00:00-08:00","endTime":"2022-12-08T06:00:00-08:00","isDaytime":false,"temperature":18,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"7 mph","windDirection":"WSW","icon":"https://api.weather.gov/icons/land/night/few?size=medium","shortForecast":"Mostly Clear","detailedForecast":"Mostly clear, with a low around 18. West southwest wind around 7 mph."},{"number":6,"name":"Thursday","startTime":"2022-12-08T06:00:00-08:00","endTime":"2022-12-08T18:00:00-08:00","isDaytime":true,"temperature":48,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"5 to 8 mph","windDirection":"S","icon":"https://api.weather.gov/icons/land/day/sct?size=medium","shortForecast":"Mostly Sunny","detailedForecast":"Mostly sunny, with a high near 48."},{"number":7,"name":"Thursday Night","startTime":"2022-12-08T18:00:00-08:00","endTime":"2022-12-09T06:00:00-08:00","isDaytime":false,"temperature":22,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"9 mph","windDirection":"WSW","icon":"https://api.weather.gov/icons/land/night/sct?size=medium","shortForecast":"Partly Cloudy","detailedForecast":"Partly cloudy, with a low around 22."},{"number":8,"name":"Friday","startTime":"2022-12-09T06:00:00-08:00","endTime":"2022-12-09T18:00:00-08:00","isDaytime":true,"temperature":50,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"10 mph","windDirection":"SSW","icon":"https://api.weather.gov/icons/land/day/sct?size=medium","shortForecast":"Mostly Sunny","detailedForecast":"Mostly sunny, with a high near 50."},{"number":9,"name":"Friday Night","startTime":"2022-12-09T18:00:00-08:00","endTime":"2022-12-10T06:00:00-08:00","isDaytime":false,"temperature":25,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"10 mph","windDirection":"SW","icon":"https://api.weather.gov/icons/land/night/snow?size=medium","shortForecast":"Chance Snow Showers","detailedForecast":"A chance of snow showers after 10pm. Mostly cloudy, with a low around 25. New snow accumulation of less than half an inch possible."},{"number":10,"name":"Saturday","startTime":"2022-12-10T06:00:00-08:00","endTime":"2022-12-10T18:00:00-08:00","isDaytime":true,"temperature":50,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"10 to 15 mph","windDirection":"SW","icon":"https://api.weather.gov/icons/land/day/snow?size=medium","shortForecast":"Chance Snow Showers","detailedForecast":"A chance of snow showers before 10am, then a chance of rain and snow showers. Partly sunny, with a high near 50. New snow accumulation of less than half an inch possible."},{"number":11,"name":"Saturday Night","startTime":"2022-12-10T18:00:00-08:00","endTime":"2022-12-11T06:00:00-08:00","isDaytime":false,"temperature":24,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"10 to 14 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/night/snow?size=medium","shortForecast":"Chance Rain And Snow Showers","detailedForecast":"A chance of rain and snow showers. Mostly cloudy, with a low around 24. New snow accumulation of less than one inch possible."},{"number":12,"name":"Sunday","startTime":"2022-12-11T06:00:00-08:00","endTime":"2022-12-11T18:00:00-08:00","isDaytime":true,"temperature":44,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"13 mph","windDirection":"WNW","icon":"https://api.weather.gov/icons/land/day/snow?size=medium","shortForecast":"Chance Snow Showers","detailedForecast":"A chance of snow showers. Partly sunny, with a high near 44. New snow accumulation of less than one inch possible."},{"number":13,"name":"Sunday Night","startTime":"2022-12-11T18:00:00-08:00","endTime":"2022-12-12T06:00:00-08:00","isDaytime":false,"temperature":20,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"12 mph","windDirection":"WNW","icon":"https://api.weather.gov/icons/land/night/snow/sct?size=medium","shortForecast":"Slight Chance Snow Showers then Partly Cloudy","detailedForecast":"A slight chance of snow showers before 10pm. Partly cloudy, with a low around 20."},{"number":14,"name":"Monday","startTime":"2022-12-12T06:00:00-08:00","endTime":"2022-12-12T18:00:00-08:00","isDaytime":true,"temperature":44,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"12 mph","windDirection":"WNW","icon":"https://api.weather.gov/icons/land/day/sct?size=medium","shortForecast":"Mostly Sunny","detailedForecast":"Mostly sunny, with a high near 44."}]}
  var hourly_VEF_14_168 = false
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

---
### THIS FILE IS AUTO-GENERATED - DO NOT EDIT ###
layout: page
title: Moab, Utah Climbing Weather - Current, Past, and Forecasted Report
title_override: Moab<br /><small>Climbing Weather</small>
description: A lightweight weather report for Moab, Utah. Optimized for slow internet connections.
js_includes:
  - weather.js
---

<section class="measure center lh-copy f5-ns f6 ph2 mv4" style="text-align: justify;">
<strong>"Is it dry?"</strong>, an oft-repeated, age-old question. Here are real-time,
precipitation-focused reports of current, past, and forecasted climbing weather for Moab, Utah.
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
<section id="weather" data-crag="moab-utah" class="mv4-ns mv3 ph2 center"></section>
<section id="nearby" class="tc lh-copy">
  <h3>Nearby Crags</h3>
<a class="nowrap no-underline fancy-link relative light-red mh3" href="/crags/clear-creek-canyon-colorado-weather.html">Clear Creek Canyon</a>
<a class="nowrap no-underline fancy-link relative light-red mh3" href="/crags/staunton-state-park-colorado-weather.html">Staunton State Park</a>
<a class="nowrap no-underline fancy-link relative light-red mh3" href="/crags/lime-park-lime-creek-colorado-weather.html">Lime Park (Lime Creek)</a>
<a class="nowrap no-underline fancy-link relative light-red mh3" href="/crags/independence-pass-colorado-weather.html">Independence Pass</a>
<a class="nowrap no-underline fancy-link relative light-red mh3" href="/crags/estes-park-valley-colorado-weather.html">Estes Park Valley</a>
<a class="nowrap no-underline fancy-link relative light-red mh3" href="/crags/gunnison-colorado-weather.html">Gunnison</a>
<a class="nowrap no-underline fancy-link relative light-red mh3" href="/crags/little-cottonwood-canyon-utah-weather.html">Little Cottonwood Canyon</a>
<a class="nowrap no-underline fancy-link relative light-red mh3" href="/crags/city-of-rocks-idaho-weather.html">City of Rocks</a>
</section>
<section id="nearby" class="tc lh-copy">
  <h3>Other Metros</h3>
  <select class="ma1 bg-near-white pa2" id="stateSel">
    <option value="Texas">Texas</option>
    <option value="Washington">Washington</option>
    <option value="Colorado" selected>Colorado</option>
    <option value="Tennessee">Tennessee</option>
    <option value="Utah">Utah</option>
    <option value="California">California</option>
  </select>
  <select class="ma1 bg-near-white pa2" id="citySel">
    <option value="Denver" selected>Denver</option>
  </select>
  <a id="selectMetro" class="f6 link dim ph3 pv2 ma1 dib white bg-light-red" href="/crags/denver-colorado-weather.html">Select Metro</a>
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
  var weekly_GJT_60_82 = {"updated":"2021-03-13T06:51:51+00:00","units":"us","forecastGenerator":"BaselineForecastGenerator","generatedAt":"2021-03-13T08:49:01+00:00","updateTime":"2021-03-13T06:51:51+00:00","validTimes":"2021-03-13T00:00:00+00:00/P7DT1H","elevation":{"value":1560.8808,"unitCode":"unit:m"},"periods":[{"number":1,"name":"Overnight","startTime":"2021-03-13T01:00:00-07:00","endTime":"2021-03-13T06:00:00-07:00","isDaytime":false,"temperature":33,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"0 to 5 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/night/snow,50?size=medium","shortForecast":"Chance Snow Showers","detailedForecast":"A chance of snow showers. Cloudy, with a low around 33. West wind 0 to 5 mph. Chance of precipitation is 50%. New snow accumulation of less than half an inch possible."},{"number":2,"name":"Saturday","startTime":"2021-03-13T06:00:00-07:00","endTime":"2021-03-13T18:00:00-07:00","isDaytime":true,"temperature":46,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"5 to 10 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/day/snow,50?size=medium","shortForecast":"Chance Snow Showers","detailedForecast":"A chance of snow showers before 3pm, then a chance of rain showers between 3pm and 5pm, then a chance of snow showers. Mostly cloudy, with a high near 46. West wind 5 to 10 mph. Chance of precipitation is 50%. New snow accumulation of less than half an inch possible."},{"number":3,"name":"Saturday Night","startTime":"2021-03-13T18:00:00-07:00","endTime":"2021-03-14T06:00:00-06:00","isDaytime":false,"temperature":34,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"10 to 15 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/night/snow,40/snow,60?size=medium","shortForecast":"Rain And Snow Showers Likely","detailedForecast":"Rain and snow showers likely. Cloudy, with a low around 34. West wind 10 to 15 mph, with gusts as high as 25 mph. Chance of precipitation is 60%."},{"number":4,"name":"Sunday","startTime":"2021-03-14T06:00:00-06:00","endTime":"2021-03-14T18:00:00-06:00","isDaytime":true,"temperature":49,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"15 to 20 mph","windDirection":"NW","icon":"https://api.weather.gov/icons/land/day/snow,40/bkn?size=medium","shortForecast":"Chance Snow Showers then Mostly Cloudy","detailedForecast":"A chance of snow showers before noon. Mostly cloudy, with a high near 49. Northwest wind 15 to 20 mph. Chance of precipitation is 40%. New snow accumulation of less than half an inch possible."},{"number":5,"name":"Sunday Night","startTime":"2021-03-14T18:00:00-06:00","endTime":"2021-03-15T06:00:00-06:00","isDaytime":false,"temperature":31,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"5 to 10 mph","windDirection":"NE","icon":"https://api.weather.gov/icons/land/night/sct?size=medium","shortForecast":"Partly Cloudy","detailedForecast":"Partly cloudy, with a low around 31. Northeast wind 5 to 10 mph, with gusts as high as 25 mph."},{"number":6,"name":"Monday","startTime":"2021-03-15T06:00:00-06:00","endTime":"2021-03-15T18:00:00-06:00","isDaytime":true,"temperature":54,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"5 to 10 mph","windDirection":"SSE","icon":"https://api.weather.gov/icons/land/day/bkn?size=medium","shortForecast":"Partly Sunny","detailedForecast":"Partly sunny, with a high near 54."},{"number":7,"name":"Monday Night","startTime":"2021-03-15T18:00:00-06:00","endTime":"2021-03-16T06:00:00-06:00","isDaytime":false,"temperature":34,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"10 mph","windDirection":"SSE","icon":"https://api.weather.gov/icons/land/night/rain_showers,20/snow,30?size=medium","shortForecast":"Slight Chance Rain Showers then Chance Rain And Snow Showers","detailedForecast":"A slight chance of rain showers before midnight, then a chance of rain and snow showers. Mostly cloudy, with a low around 34. Chance of precipitation is 30%."},{"number":8,"name":"Tuesday","startTime":"2021-03-16T06:00:00-06:00","endTime":"2021-03-16T18:00:00-06:00","isDaytime":true,"temperature":48,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"5 to 10 mph","windDirection":"SSW","icon":"https://api.weather.gov/icons/land/day/snow/bkn?size=medium","shortForecast":"Chance Snow Showers then Partly Sunny","detailedForecast":"A chance of snow showers before noon. Partly sunny, with a high near 48. Little or no snow accumulation expected."},{"number":9,"name":"Tuesday Night","startTime":"2021-03-16T18:00:00-06:00","endTime":"2021-03-17T06:00:00-06:00","isDaytime":false,"temperature":29,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"5 mph","windDirection":"NE","icon":"https://api.weather.gov/icons/land/night/sct?size=medium","shortForecast":"Partly Cloudy","detailedForecast":"Partly cloudy, with a low around 29."},{"number":10,"name":"Wednesday","startTime":"2021-03-17T06:00:00-06:00","endTime":"2021-03-17T18:00:00-06:00","isDaytime":true,"temperature":54,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"5 mph","windDirection":"NE","icon":"https://api.weather.gov/icons/land/day/few?size=medium","shortForecast":"Sunny","detailedForecast":"Sunny, with a high near 54."},{"number":11,"name":"Wednesday Night","startTime":"2021-03-17T18:00:00-06:00","endTime":"2021-03-18T06:00:00-06:00","isDaytime":false,"temperature":31,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"5 mph","windDirection":"ENE","icon":"https://api.weather.gov/icons/land/night/few?size=medium","shortForecast":"Mostly Clear","detailedForecast":"Mostly clear, with a low around 31."},{"number":12,"name":"Thursday","startTime":"2021-03-18T06:00:00-06:00","endTime":"2021-03-18T18:00:00-06:00","isDaytime":true,"temperature":58,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"5 to 10 mph","windDirection":"S","icon":"https://api.weather.gov/icons/land/day/few?size=medium","shortForecast":"Sunny","detailedForecast":"Sunny, with a high near 58."},{"number":13,"name":"Thursday Night","startTime":"2021-03-18T18:00:00-06:00","endTime":"2021-03-19T06:00:00-06:00","isDaytime":false,"temperature":35,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"5 mph","windDirection":"S","icon":"https://api.weather.gov/icons/land/night/sct?size=medium","shortForecast":"Partly Cloudy","detailedForecast":"Partly cloudy, with a low around 35."},{"number":14,"name":"Friday","startTime":"2021-03-19T06:00:00-06:00","endTime":"2021-03-19T18:00:00-06:00","isDaytime":true,"temperature":61,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"5 mph","windDirection":"S","icon":"https://api.weather.gov/icons/land/day/sct?size=medium","shortForecast":"Mostly Sunny","detailedForecast":"Mostly sunny, with a high near 61."}]}
  var hourly_GJT_60_82 = {"correlationId":"3010b85","title":"Unexpected Problem","type":"https://api.weather.gov/problems/UnexpectedProblem","status":500,"detail":"An unexpected problem has occurred.","instance":"https://api.weather.gov/requests/3010b85"}
  var crags_config = [
  {
    "name": "Moab",
    "note": "Soft sandstone in a desert environment.",
    "mountainProject": "https://www.mountainproject.com/area/105716711/moab-area",
    "station": "MOAB",
    "office": "GJT/60,82",
    "coordinates": [
      -109.550,
      38.573
    ]
  }
]</script>

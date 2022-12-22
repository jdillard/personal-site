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
  var weekly_GJT_60_82 = {"updated":"2022-12-22T17:38:01+00:00","units":"us","forecastGenerator":"BaselineForecastGenerator","generatedAt":"2022-12-22T17:52:47+00:00","updateTime":"2022-12-22T17:38:01+00:00","validTimes":"2022-12-22T11:00:00+00:00/P7DT14H","elevation":{"unitCode":"wmoUnit:m","value":1560.8808},"periods":[{"number":1,"name":"Today","startTime":"2022-12-22T10:00:00-07:00","endTime":"2022-12-22T18:00:00-07:00","isDaytime":true,"temperature":31,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"5 to 10 mph","windDirection":"N","icon":"https://api.weather.gov/icons/land/day/sct?size=medium","shortForecast":"Mostly Sunny","detailedForecast":"Mostly sunny, with a high near 31. North wind 5 to 10 mph."},{"number":2,"name":"Tonight","startTime":"2022-12-22T18:00:00-07:00","endTime":"2022-12-23T06:00:00-07:00","isDaytime":false,"temperature":16,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"0 to 5 mph","windDirection":"NE","icon":"https://api.weather.gov/icons/land/night/ovc?size=medium","shortForecast":"Cloudy","detailedForecast":"Cloudy, with a low around 16. Northeast wind 0 to 5 mph."},{"number":3,"name":"Friday","startTime":"2022-12-23T06:00:00-07:00","endTime":"2022-12-23T18:00:00-07:00","isDaytime":true,"temperature":36,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"0 to 5 mph","windDirection":"N","icon":"https://api.weather.gov/icons/land/day/bkn?size=medium","shortForecast":"Partly Sunny","detailedForecast":"Partly sunny, with a high near 36. North wind 0 to 5 mph."},{"number":4,"name":"Friday Night","startTime":"2022-12-23T18:00:00-07:00","endTime":"2022-12-24T06:00:00-07:00","isDaytime":false,"temperature":24,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"0 mph","windDirection":"ENE","icon":"https://api.weather.gov/icons/land/night/sct?size=medium","shortForecast":"Partly Cloudy","detailedForecast":"Partly cloudy, with a low around 24. East northeast wind around 0 mph."},{"number":5,"name":"Saturday","startTime":"2022-12-24T06:00:00-07:00","endTime":"2022-12-24T18:00:00-07:00","isDaytime":true,"temperature":40,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"0 to 5 mph","windDirection":"NNE","icon":"https://api.weather.gov/icons/land/day/few?size=medium","shortForecast":"Sunny","detailedForecast":"Sunny, with a high near 40. North northeast wind 0 to 5 mph."},{"number":6,"name":"Saturday Night","startTime":"2022-12-24T18:00:00-07:00","endTime":"2022-12-25T06:00:00-07:00","isDaytime":false,"temperature":25,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"5 mph","windDirection":"ENE","icon":"https://api.weather.gov/icons/land/night/sct?size=medium","shortForecast":"Partly Cloudy","detailedForecast":"Partly cloudy, with a low around 25."},{"number":7,"name":"Christmas Day","startTime":"2022-12-25T06:00:00-07:00","endTime":"2022-12-25T18:00:00-07:00","isDaytime":true,"temperature":41,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"5 mph","windDirection":"N","icon":"https://api.weather.gov/icons/land/day/sct?size=medium","shortForecast":"Mostly Sunny","detailedForecast":"Mostly sunny, with a high near 41."},{"number":8,"name":"Sunday Night","startTime":"2022-12-25T18:00:00-07:00","endTime":"2022-12-26T06:00:00-07:00","isDaytime":false,"temperature":26,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"5 mph","windDirection":"NE","icon":"https://api.weather.gov/icons/land/night/sct?size=medium","shortForecast":"Partly Cloudy","detailedForecast":"Partly cloudy, with a low around 26."},{"number":9,"name":"Monday","startTime":"2022-12-26T06:00:00-07:00","endTime":"2022-12-26T18:00:00-07:00","isDaytime":true,"temperature":43,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"5 mph","windDirection":"NNE","icon":"https://api.weather.gov/icons/land/day/sct?size=medium","shortForecast":"Mostly Sunny","detailedForecast":"Mostly sunny, with a high near 43."},{"number":10,"name":"Monday Night","startTime":"2022-12-26T18:00:00-07:00","endTime":"2022-12-27T06:00:00-07:00","isDaytime":false,"temperature":29,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"5 mph","windDirection":"SE","icon":"https://api.weather.gov/icons/land/night/bkn?size=medium","shortForecast":"Mostly Cloudy","detailedForecast":"Mostly cloudy, with a low around 29."},{"number":11,"name":"Tuesday","startTime":"2022-12-27T06:00:00-07:00","endTime":"2022-12-27T18:00:00-07:00","isDaytime":true,"temperature":44,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"5 mph","windDirection":"S","icon":"https://api.weather.gov/icons/land/day/bkn/rain_showers?size=medium","shortForecast":"Partly Sunny then Chance Rain Showers","detailedForecast":"A chance of rain showers after 5pm. Partly sunny, with a high near 44."},{"number":12,"name":"Tuesday Night","startTime":"2022-12-27T18:00:00-07:00","endTime":"2022-12-28T06:00:00-07:00","isDaytime":false,"temperature":33,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"5 to 10 mph","windDirection":"SSE","icon":"https://api.weather.gov/icons/land/night/rain_showers?size=medium","shortForecast":"Chance Rain Showers","detailedForecast":"A chance of rain showers. Mostly cloudy, with a low around 33."},{"number":13,"name":"Wednesday","startTime":"2022-12-28T06:00:00-07:00","endTime":"2022-12-28T18:00:00-07:00","isDaytime":true,"temperature":43,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"5 to 10 mph","windDirection":"SSW","icon":"https://api.weather.gov/icons/land/day/snow?size=medium","shortForecast":"Chance Rain And Snow Showers","detailedForecast":"A chance of rain and snow showers. Mostly cloudy, with a high near 43."},{"number":14,"name":"Wednesday Night","startTime":"2022-12-28T18:00:00-07:00","endTime":"2022-12-29T06:00:00-07:00","isDaytime":false,"temperature":31,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"5 mph","windDirection":"S","icon":"https://api.weather.gov/icons/land/night/snow?size=medium","shortForecast":"Chance Rain And Snow Showers","detailedForecast":"A chance of rain showers before 8pm, then a chance of rain and snow showers. Mostly cloudy, with a low around 31."}]}
  var hourly_GJT_60_82 = false
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

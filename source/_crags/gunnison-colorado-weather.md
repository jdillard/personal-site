---
### THIS FILE IS AUTO-GENERATED - DO NOT EDIT ###
layout: page
title: Gunnison, Colorado Climbing Weather - Current, Past, and Forecasted Report
title_override: Gunnison<br /><small>Climbing Weather</small>
description: A lightweight weather report for Gunnison, Colorado. Optimized for slow internet connections.
js_includes:
  - weather.js
---

<section class="measure center lh-copy f5-ns f6 ph2 mv4" style="text-align: justify;">
<strong>"Is it dry?"</strong>, an oft-repeated, age-old question. Here are real-time,
precipitation-focused reports of current, past, and forecasted climbing weather for Gunnison, Colorado.
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
<section id="weather" data-crag="gunnison-colorado" class="mv4-ns mv3 ph2 center"></section>
<section id="nearby" class="tc lh-copy">
  <h3>Nearby Crags</h3>
<a class="nowrap no-underline fancy-link relative light-red mh3" href="/crags/clear-creek-canyon-colorado-weather.html">Clear Creek Canyon</a>
<a class="nowrap no-underline fancy-link relative light-red mh3" href="/crags/staunton-state-park-colorado-weather.html">Staunton State Park</a>
<a class="nowrap no-underline fancy-link relative light-red mh3" href="/crags/lime-park-lime-creek-colorado-weather.html">Lime Park (Lime Creek)</a>
<a class="nowrap no-underline fancy-link relative light-red mh3" href="/crags/independence-pass-colorado-weather.html">Independence Pass</a>
<a class="nowrap no-underline fancy-link relative light-red mh3" href="/crags/moab-utah-weather.html">Moab</a>
<a class="nowrap no-underline fancy-link relative light-red mh3" href="/crags/estes-park-valley-colorado-weather.html">Estes Park Valley</a>
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
  var weekly_GJT_152_72 = {"updated":"2022-12-17T08:22:41+00:00","units":"us","forecastGenerator":"BaselineForecastGenerator","generatedAt":"2022-12-17T08:35:48+00:00","updateTime":"2022-12-17T08:22:41+00:00","validTimes":"2022-12-17T02:00:00+00:00/P7DT23H","elevation":{"unitCode":"wmoUnit:m","value":2479.8528},"periods":[{"number":1,"name":"Overnight","startTime":"2022-12-17T01:00:00-07:00","endTime":"2022-12-17T06:00:00-07:00","isDaytime":false,"temperature":-14,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"5 mph","windDirection":"SE","icon":"https://api.weather.gov/icons/land/night/fog?size=medium","shortForecast":"Patchy Fog","detailedForecast":"Patchy fog after 3am. Mostly clear, with a low around -14. Wind chill values as low as -23. Southeast wind around 5 mph."},{"number":2,"name":"Saturday","startTime":"2022-12-17T06:00:00-07:00","endTime":"2022-12-17T18:00:00-07:00","isDaytime":true,"temperature":20,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"5 mph","windDirection":"S","icon":"https://api.weather.gov/icons/land/day/fog/few?size=medium","shortForecast":"Patchy Fog then Sunny","detailedForecast":"Patchy fog before 9am. Sunny, with a high near 20. Wind chill values as low as -26. South wind around 5 mph."},{"number":3,"name":"Saturday Night","startTime":"2022-12-17T18:00:00-07:00","endTime":"2022-12-18T06:00:00-07:00","isDaytime":false,"temperature":-8,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"5 mph","windDirection":"ENE","icon":"https://api.weather.gov/icons/land/night/cold/fog?size=medium","shortForecast":"Partly Cloudy then Patchy Fog","detailedForecast":"Patchy fog after 4am. Partly cloudy, with a low around -8. Wind chill values as low as -16. East northeast wind around 5 mph."},{"number":4,"name":"Sunday","startTime":"2022-12-18T06:00:00-07:00","endTime":"2022-12-18T18:00:00-07:00","isDaytime":true,"temperature":26,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"0 to 5 mph","windDirection":"NW","icon":"https://api.weather.gov/icons/land/day/fog/bkn?size=medium","shortForecast":"Patchy Fog then Partly Sunny","detailedForecast":"Patchy fog before 8am. Partly sunny, with a high near 26. Wind chill values as low as -16. Northwest wind 0 to 5 mph."},{"number":5,"name":"Sunday Night","startTime":"2022-12-18T18:00:00-07:00","endTime":"2022-12-19T06:00:00-07:00","isDaytime":false,"temperature":-5,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"5 mph","windDirection":"N","icon":"https://api.weather.gov/icons/land/night/cold?size=medium","shortForecast":"Partly Cloudy","detailedForecast":"Partly cloudy, with a low around -5. North wind around 5 mph."},{"number":6,"name":"Monday","startTime":"2022-12-19T06:00:00-07:00","endTime":"2022-12-19T18:00:00-07:00","isDaytime":true,"temperature":26,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"5 to 10 mph","windDirection":"NW","icon":"https://api.weather.gov/icons/land/day/few?size=medium","shortForecast":"Sunny","detailedForecast":"Sunny, with a high near 26."},{"number":7,"name":"Monday Night","startTime":"2022-12-19T18:00:00-07:00","endTime":"2022-12-20T06:00:00-07:00","isDaytime":false,"temperature":-2,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"5 mph","windDirection":"NNE","icon":"https://api.weather.gov/icons/land/night/cold?size=medium","shortForecast":"Partly Cloudy","detailedForecast":"Partly cloudy, with a low around -2."},{"number":8,"name":"Tuesday","startTime":"2022-12-20T06:00:00-07:00","endTime":"2022-12-20T18:00:00-07:00","isDaytime":true,"temperature":27,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"5 to 10 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/day/bkn?size=medium","shortForecast":"Partly Sunny","detailedForecast":"Partly sunny, with a high near 27."},{"number":9,"name":"Tuesday Night","startTime":"2022-12-20T18:00:00-07:00","endTime":"2022-12-21T06:00:00-07:00","isDaytime":false,"temperature":6,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"5 mph","windDirection":"WNW","icon":"https://api.weather.gov/icons/land/night/cold/snow?size=medium","shortForecast":"Mostly Cloudy then Slight Chance Snow Showers","detailedForecast":"A slight chance of snow showers after 5am. Mostly cloudy, with a low around 6. New snow accumulation of less than one inch possible."},{"number":10,"name":"Wednesday","startTime":"2022-12-21T06:00:00-07:00","endTime":"2022-12-21T18:00:00-07:00","isDaytime":true,"temperature":30,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"5 to 20 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/day/snow?size=medium","shortForecast":"Chance Snow Showers","detailedForecast":"A chance of snow showers. Partly sunny, with a high near 30. New snow accumulation of less than one inch possible."},{"number":11,"name":"Wednesday Night","startTime":"2022-12-21T18:00:00-07:00","endTime":"2022-12-22T06:00:00-07:00","isDaytime":false,"temperature":3,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"20 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/night/blizzard/cold?size=medium","shortForecast":"Patchy Blowing Snow then Partly Cloudy","detailedForecast":"A slight chance of snow showers before 8pm, then patchy blowing snow and a slight chance of snow showers between 8pm and 11pm. Partly cloudy, with a low around 3. New snow accumulation of less than half an inch possible."},{"number":12,"name":"Thursday","startTime":"2022-12-22T06:00:00-07:00","endTime":"2022-12-22T18:00:00-07:00","isDaytime":true,"temperature":26,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"10 to 20 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/day/sct?size=medium","shortForecast":"Mostly Sunny","detailedForecast":"Mostly sunny, with a high near 26."},{"number":13,"name":"Thursday Night","startTime":"2022-12-22T18:00:00-07:00","endTime":"2022-12-23T06:00:00-07:00","isDaytime":false,"temperature":3,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"5 to 10 mph","windDirection":"WNW","icon":"https://api.weather.gov/icons/land/night/cold/snow?size=medium","shortForecast":"Partly Cloudy then Slight Chance Snow Showers","detailedForecast":"A slight chance of snow showers after 5am. Partly cloudy, with a low around 3."},{"number":14,"name":"Friday","startTime":"2022-12-23T06:00:00-07:00","endTime":"2022-12-23T18:00:00-07:00","isDaytime":true,"temperature":30,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"5 to 10 mph","windDirection":"WNW","icon":"https://api.weather.gov/icons/land/day/snow?size=medium","shortForecast":"Slight Chance Snow Showers","detailedForecast":"A slight chance of snow showers. Partly sunny, with a high near 30."}]}
  var hourly_GJT_152_72 = false
  var crags_config = [
  {
    "name": "Gunnison",
    "note": "Granite.",
    "mountainProject": "https://www.mountainproject.com/area/105802040/gunnison",
    "station": "KGUC",
    "office": "GJT/152,72",
    "coordinates": [
      -106.927,
      38.546
    ]
  }
]</script>

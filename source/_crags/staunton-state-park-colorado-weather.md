---
### THIS FILE IS AUTO-GENERATED - DO NOT EDIT ###
layout: page
title: Staunton State Park, Colorado Climbing Weather - Current, Past, and Forecasted Report
title_override: Staunton State Park<br /><small>Climbing Weather</small>
description: A lightweight weather report for Staunton State Park, Colorado. Optimized for slow internet connections.
js_includes:
  - weather.js
---

<section class="measure center lh-copy f5-ns f6 ph2 mv4" style="text-align: justify;">
<strong>"Is it dry?"</strong>, an oft-repeated, age-old question. Here are real-time,
precipitation-focused reports of current, past, and forecasted climbing weather for Staunton State Park, Colorado.
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
<section id="weather" data-crag="staunton-state-park-colorado" class="mv4-ns mv3 ph2 center"></section>
<section id="nearby" class="tc lh-copy">
  <h3>Nearby Crags</h3>
<a class="nowrap no-underline fancy-link relative light-red mh3" href="/crags/clear-creek-canyon-colorado-weather.html">Clear Creek Canyon</a>
<a class="nowrap no-underline fancy-link relative light-red mh3" href="/crags/lime-park-lime-creek-colorado-weather.html">Lime Park (Lime Creek)</a>
<a class="nowrap no-underline fancy-link relative light-red mh3" href="/crags/independence-pass-colorado-weather.html">Independence Pass</a>
<a class="nowrap no-underline fancy-link relative light-red mh3" href="/crags/moab-utah-weather.html">Moab</a>
<a class="nowrap no-underline fancy-link relative light-red mh3" href="/crags/estes-park-valley-colorado-weather.html">Estes Park Valley</a>
<a class="nowrap no-underline fancy-link relative light-red mh3" href="/crags/gunnison-colorado-weather.html">Gunnison</a>
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
  var weekly_BOU_48_51 = {"updated":"2022-12-21T06:23:43+00:00","units":"us","forecastGenerator":"BaselineForecastGenerator","generatedAt":"2022-12-21T08:36:08+00:00","updateTime":"2022-12-21T06:23:43+00:00","validTimes":"2022-12-21T00:00:00+00:00/P7DT1H","elevation":{"unitCode":"wmoUnit:m","value":2628.9},"periods":[{"number":1,"name":"Overnight","startTime":"2022-12-21T01:00:00-07:00","endTime":"2022-12-21T06:00:00-07:00","isDaytime":false,"temperature":16,"temperatureUnit":"F","temperatureTrend":"rising","windSpeed":"10 to 14 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/night/few?size=medium","shortForecast":"Mostly Clear","detailedForecast":"Mostly clear. Low around 16, with temperatures rising to around 19 overnight. West wind 10 to 14 mph, with gusts as high as 22 mph."},{"number":2,"name":"Wednesday","startTime":"2022-12-21T06:00:00-07:00","endTime":"2022-12-21T18:00:00-07:00","isDaytime":true,"temperature":36,"temperatureUnit":"F","temperatureTrend":"falling","windSpeed":"22 to 29 mph","windDirection":"WSW","icon":"https://api.weather.gov/icons/land/day/snow,20/snow,90?size=medium","shortForecast":"Light Snow","detailedForecast":"Snow after 11am. Mostly sunny. High near 36, with temperatures falling to around 30 in the afternoon. West southwest wind 22 to 29 mph, with gusts as high as 40 mph. Chance of precipitation is 90%. New snow accumulation of 1 to 2 inches possible."},{"number":3,"name":"Wednesday Night","startTime":"2022-12-21T18:00:00-07:00","endTime":"2022-12-22T06:00:00-07:00","isDaytime":false,"temperature":-14,"temperatureUnit":"F","temperatureTrend":"rising","windSpeed":"9 to 29 mph","windDirection":"WNW","icon":"https://api.weather.gov/icons/land/night/snow,90/snow,70?size=medium","shortForecast":"Snow","detailedForecast":"Snow before 5am. Mostly cloudy. Low around -14, with temperatures rising to around -8 overnight. Wind chill values as low as -29. West northwest wind 9 to 29 mph, with gusts as high as 37 mph. Chance of precipitation is 90%. New snow accumulation of 2 to 4 inches possible."},{"number":4,"name":"Thursday","startTime":"2022-12-22T06:00:00-07:00","endTime":"2022-12-22T18:00:00-07:00","isDaytime":true,"temperature":4,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"12 to 17 mph","windDirection":"NW","icon":"https://api.weather.gov/icons/land/day/cold?size=medium","shortForecast":"Mostly Sunny","detailedForecast":"Mostly sunny, with a high near 4. Wind chill values as low as -36. Northwest wind 12 to 17 mph, with gusts as high as 30 mph. Little or no snow accumulation expected."},{"number":5,"name":"Thursday Night","startTime":"2022-12-22T18:00:00-07:00","endTime":"2022-12-23T06:00:00-07:00","isDaytime":false,"temperature":-10,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"10 to 14 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/night/cold?size=medium","shortForecast":"Partly Cloudy","detailedForecast":"Partly cloudy, with a low around -10. West wind 10 to 14 mph, with gusts as high as 21 mph."},{"number":6,"name":"Friday","startTime":"2022-12-23T06:00:00-07:00","endTime":"2022-12-23T18:00:00-07:00","isDaytime":true,"temperature":24,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"13 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/day/bkn?size=medium","shortForecast":"Partly Sunny","detailedForecast":"Partly sunny, with a high near 24."},{"number":7,"name":"Friday Night","startTime":"2022-12-23T18:00:00-07:00","endTime":"2022-12-24T06:00:00-07:00","isDaytime":false,"temperature":11,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"10 to 14 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/night/sct?size=medium","shortForecast":"Partly Cloudy","detailedForecast":"Partly cloudy, with a low around 11."},{"number":8,"name":"Saturday","startTime":"2022-12-24T06:00:00-07:00","endTime":"2022-12-24T18:00:00-07:00","isDaytime":true,"temperature":37,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"13 to 17 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/day/sct?size=medium","shortForecast":"Mostly Sunny","detailedForecast":"Mostly sunny, with a high near 37."},{"number":9,"name":"Saturday Night","startTime":"2022-12-24T18:00:00-07:00","endTime":"2022-12-25T06:00:00-07:00","isDaytime":false,"temperature":19,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"13 to 16 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/night/sct?size=medium","shortForecast":"Partly Cloudy","detailedForecast":"Partly cloudy, with a low around 19."},{"number":10,"name":"Christmas Day","startTime":"2022-12-25T06:00:00-07:00","endTime":"2022-12-25T18:00:00-07:00","isDaytime":true,"temperature":42,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"16 to 20 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/day/snow?size=medium","shortForecast":"Slight Chance Light Snow","detailedForecast":"A slight chance of snow between 11am and 5pm. Mostly sunny, with a high near 42."},{"number":11,"name":"Sunday Night","startTime":"2022-12-25T18:00:00-07:00","endTime":"2022-12-26T06:00:00-07:00","isDaytime":false,"temperature":19,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"16 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/night/sct?size=medium","shortForecast":"Partly Cloudy","detailedForecast":"Partly cloudy, with a low around 19."},{"number":12,"name":"Monday","startTime":"2022-12-26T06:00:00-07:00","endTime":"2022-12-26T18:00:00-07:00","isDaytime":true,"temperature":42,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"10 to 15 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/day/sct?size=medium","shortForecast":"Mostly Sunny","detailedForecast":"Mostly sunny, with a high near 42."},{"number":13,"name":"Monday Night","startTime":"2022-12-26T18:00:00-07:00","endTime":"2022-12-27T06:00:00-07:00","isDaytime":false,"temperature":22,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"13 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/night/sct?size=medium","shortForecast":"Partly Cloudy","detailedForecast":"Partly cloudy, with a low around 22."},{"number":14,"name":"Tuesday","startTime":"2022-12-27T06:00:00-07:00","endTime":"2022-12-27T18:00:00-07:00","isDaytime":true,"temperature":48,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"14 mph","windDirection":"WSW","icon":"https://api.weather.gov/icons/land/day/sct?size=medium","shortForecast":"Mostly Sunny","detailedForecast":"Mostly sunny, with a high near 48."}]}
  var hourly_BOU_48_51 = false
  var crags_config = [
  {
    "name": "Staunton State Park",
    "note": "Interesting and featured rock",
    "mountainProject": "https://www.mountainproject.com/area/107838839/staunton-state-park",
    "station": "KAPA",
    "office": "BOU/48,51",
    "coordinates": [
      -105.379,
      39.499
    ]
  }
]</script>

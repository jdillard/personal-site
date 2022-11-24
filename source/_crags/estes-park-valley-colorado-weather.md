---
### THIS FILE IS AUTO-GENERATED - DO NOT EDIT ###
layout: page
title: Estes Park Valley, Colorado Climbing Weather - Current, Past, and Forecasted Report
title_override: Estes Park Valley<br /><small>Climbing Weather</small>
description: A lightweight weather report for Estes Park Valley, Colorado. Optimized for slow internet connections.
js_includes:
  - weather.js
---

<section class="measure center lh-copy f5-ns f6 ph2 mv4" style="text-align: justify;">
<strong>"Is it dry?"</strong>, an oft-repeated, age-old question. Here are real-time,
precipitation-focused reports of current, past, and forecasted climbing weather for Estes Park Valley, Colorado.
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
<section id="weather" data-crag="estes-park-valley-colorado" class="mv4-ns mv3 ph2 center"></section>
<section id="nearby" class="tc lh-copy">
  <h3>Nearby Crags</h3>
<a class="nowrap no-underline fancy-link relative light-red mh3" href="/crags/clear-creek-canyon-colorado-weather.html">Clear Creek Canyon</a>
<a class="nowrap no-underline fancy-link relative light-red mh3" href="/crags/staunton-state-park-colorado-weather.html">Staunton State Park</a>
<a class="nowrap no-underline fancy-link relative light-red mh3" href="/crags/lime-park-lime-creek-colorado-weather.html">Lime Park (Lime Creek)</a>
<a class="nowrap no-underline fancy-link relative light-red mh3" href="/crags/independence-pass-colorado-weather.html">Independence Pass</a>
<a class="nowrap no-underline fancy-link relative light-red mh3" href="/crags/moab-utah-weather.html">Moab</a>
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
  var weekly_BOU_46_92 = {"updated":"2022-11-24T03:03:03+00:00","units":"us","forecastGenerator":"BaselineForecastGenerator","generatedAt":"2022-11-24T08:38:09+00:00","updateTime":"2022-11-24T03:03:03+00:00","validTimes":"2022-11-23T20:00:00+00:00/P7DT8H","elevation":{"unitCode":"wmoUnit:m","value":2542.9464},"periods":[{"number":1,"name":"Overnight","startTime":"2022-11-24T01:00:00-07:00","endTime":"2022-11-24T06:00:00-07:00","isDaytime":false,"temperature":17,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"7 to 13 mph","windDirection":"WNW","icon":"https://api.weather.gov/icons/land/night/snow,40?size=medium","shortForecast":"Chance Light Snow","detailedForecast":"A chance of snow. Mostly cloudy, with a low around 17. West northwest wind 7 to 13 mph, with gusts as high as 21 mph. Chance of precipitation is 40%. Little or no snow accumulation expected."},{"number":2,"name":"Thanksgiving Day","startTime":"2022-11-24T06:00:00-07:00","endTime":"2022-11-24T18:00:00-07:00","isDaytime":true,"temperature":30,"temperatureUnit":"F","temperatureTrend":"falling","windSpeed":"8 to 14 mph","windDirection":"N","icon":"https://api.weather.gov/icons/land/day/snow,40/sct?size=medium","shortForecast":"Chance Light Snow then Mostly Sunny","detailedForecast":"A chance of snow before 10am. Mostly sunny. High near 30, with temperatures falling to around 24 in the afternoon. North wind 8 to 14 mph, with gusts as high as 22 mph. Chance of precipitation is 40%."},{"number":3,"name":"Thursday Night","startTime":"2022-11-24T18:00:00-07:00","endTime":"2022-11-25T06:00:00-07:00","isDaytime":false,"temperature":13,"temperatureUnit":"F","temperatureTrend":"rising","windSpeed":"9 mph","windDirection":"WNW","icon":"https://api.weather.gov/icons/land/night/skc?size=medium","shortForecast":"Clear","detailedForecast":"Clear. Low around 13, with temperatures rising to around 22 overnight. West northwest wind around 9 mph."},{"number":4,"name":"Friday","startTime":"2022-11-25T06:00:00-07:00","endTime":"2022-11-25T18:00:00-07:00","isDaytime":true,"temperature":48,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"7 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/day/few?size=medium","shortForecast":"Sunny","detailedForecast":"Sunny, with a high near 48. West wind around 7 mph."},{"number":5,"name":"Friday Night","startTime":"2022-11-25T18:00:00-07:00","endTime":"2022-11-26T06:00:00-07:00","isDaytime":false,"temperature":25,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"7 to 14 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/night/few?size=medium","shortForecast":"Mostly Clear","detailedForecast":"Mostly clear, with a low around 25. West wind 7 to 14 mph, with gusts as high as 20 mph."},{"number":6,"name":"Saturday","startTime":"2022-11-26T06:00:00-07:00","endTime":"2022-11-26T18:00:00-07:00","isDaytime":true,"temperature":43,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"13 to 16 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/day/sct?size=medium","shortForecast":"Mostly Sunny","detailedForecast":"Mostly sunny, with a high near 43."},{"number":7,"name":"Saturday Night","startTime":"2022-11-26T18:00:00-07:00","endTime":"2022-11-27T06:00:00-07:00","isDaytime":false,"temperature":18,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"14 to 18 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/night/sct?size=medium","shortForecast":"Partly Cloudy","detailedForecast":"Partly cloudy, with a low around 18."},{"number":8,"name":"Sunday","startTime":"2022-11-27T06:00:00-07:00","endTime":"2022-11-27T18:00:00-07:00","isDaytime":true,"temperature":37,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"18 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/day/sct?size=medium","shortForecast":"Mostly Sunny","detailedForecast":"Mostly sunny, with a high near 37."},{"number":9,"name":"Sunday Night","startTime":"2022-11-27T18:00:00-07:00","endTime":"2022-11-28T06:00:00-07:00","isDaytime":false,"temperature":22,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"17 to 21 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/night/wind_sct?size=medium","shortForecast":"Partly Cloudy","detailedForecast":"Partly cloudy, with a low around 22."},{"number":10,"name":"Monday","startTime":"2022-11-28T06:00:00-07:00","endTime":"2022-11-28T18:00:00-07:00","isDaytime":true,"temperature":39,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"12 to 21 mph","windDirection":"WSW","icon":"https://api.weather.gov/icons/land/day/snow?size=medium","shortForecast":"Chance Light Snow","detailedForecast":"A chance of snow after 11am. Partly sunny, with a high near 39."},{"number":11,"name":"Monday Night","startTime":"2022-11-28T18:00:00-07:00","endTime":"2022-11-29T06:00:00-07:00","isDaytime":false,"temperature":14,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"12 mph","windDirection":"WSW","icon":"https://api.weather.gov/icons/land/night/snow?size=medium","shortForecast":"Light Snow Likely","detailedForecast":"Snow likely. Mostly cloudy, with a low around 14. New snow accumulation of less than one inch possible."},{"number":12,"name":"Tuesday","startTime":"2022-11-29T06:00:00-07:00","endTime":"2022-11-29T18:00:00-07:00","isDaytime":true,"temperature":24,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"14 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/day/snow?size=medium","shortForecast":"Light Snow Likely","detailedForecast":"Snow likely. Mostly cloudy, with a high near 24. New snow accumulation of less than one inch possible."},{"number":13,"name":"Tuesday Night","startTime":"2022-11-29T18:00:00-07:00","endTime":"2022-11-30T06:00:00-07:00","isDaytime":false,"temperature":6,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"13 to 22 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/night/snow/cold?size=medium","shortForecast":"Slight Chance Light Snow then Mostly Cloudy","detailedForecast":"A slight chance of snow before 11pm. Mostly cloudy, with a low around 6."},{"number":14,"name":"Wednesday","startTime":"2022-11-30T06:00:00-07:00","endTime":"2022-11-30T18:00:00-07:00","isDaytime":true,"temperature":27,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"17 to 22 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/day/wind_sct?size=medium","shortForecast":"Mostly Sunny","detailedForecast":"Mostly sunny, with a high near 27."}]}
  var hourly_BOU_46_92 = false
  var crags_config = [
  {
    "name": "Estes Park Valley",
    "note": "Good variety of granitic, gneiss, and schist crags.",
    "mountainProject": "https://www.mountainproject.com/area/105801865/estes-park-valley",
    "station": "KLMO",
    "office": "BOU/46,92",
    "coordinates": [
      -105.513,
      40.397
    ]
  }
]</script>

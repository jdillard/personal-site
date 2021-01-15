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
  var weekly_BOU_46_92 = {"updated":"2021-01-15T07:27:22+00:00","units":"us","forecastGenerator":"BaselineForecastGenerator","generatedAt":"2021-01-15T09:23:36+00:00","updateTime":"2021-01-15T07:27:22+00:00","validTimes":"2021-01-15T01:00:00+00:00/P7D","elevation":{"value":2542.9464,"unitCode":"unit:m"},"periods":[{"number":1,"name":"Overnight","startTime":"2021-01-15T02:00:00-07:00","endTime":"2021-01-15T06:00:00-07:00","isDaytime":false,"temperature":15,"temperatureUnit":"F","temperatureTrend":"rising","windSpeed":"32 mph","windDirection":"WNW","icon":"https://api.weather.gov/icons/land/night/wind_few?size=medium","shortForecast":"Mostly Clear","detailedForecast":"Mostly clear. Low around 15, with temperatures rising to around 17 overnight. Wind chill values as low as -4. West northwest wind around 32 mph, with gusts as high as 48 mph."},{"number":2,"name":"Friday","startTime":"2021-01-15T06:00:00-07:00","endTime":"2021-01-15T18:00:00-07:00","isDaytime":true,"temperature":38,"temperatureUnit":"F","temperatureTrend":"falling","windSpeed":"13 to 30 mph","windDirection":"WNW","icon":"https://api.weather.gov/icons/land/day/wind_few?size=medium","shortForecast":"Sunny","detailedForecast":"Sunny. High near 38, with temperatures falling to around 29 in the afternoon. Wind chill values as low as -1. West northwest wind 13 to 30 mph, with gusts as high as 45 mph."},{"number":3,"name":"Friday Night","startTime":"2021-01-15T18:00:00-07:00","endTime":"2021-01-16T06:00:00-07:00","isDaytime":false,"temperature":23,"temperatureUnit":"F","temperatureTrend":"rising","windSpeed":"13 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/night/sct/snow,20?size=medium","shortForecast":"Partly Cloudy then Slight Chance Light Snow","detailedForecast":"A slight chance of snow after 5am. Partly cloudy. Low around 23, with temperatures rising to around 30 overnight. West wind around 13 mph, with gusts as high as 26 mph. Chance of precipitation is 20%."},{"number":4,"name":"Saturday","startTime":"2021-01-16T06:00:00-07:00","endTime":"2021-01-16T18:00:00-07:00","isDaytime":true,"temperature":37,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"8 to 12 mph","windDirection":"WNW","icon":"https://api.weather.gov/icons/land/day/snow,20/bkn?size=medium","shortForecast":"Slight Chance Light Snow then Partly Sunny","detailedForecast":"A slight chance of snow before 11am. Partly sunny, with a high near 37. West northwest wind 8 to 12 mph, with gusts as high as 22 mph. Chance of precipitation is 20%."},{"number":5,"name":"Saturday Night","startTime":"2021-01-16T18:00:00-07:00","endTime":"2021-01-17T06:00:00-07:00","isDaytime":false,"temperature":21,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"10 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/night/sct?size=medium","shortForecast":"Partly Cloudy","detailedForecast":"Partly cloudy, with a low around 21. West wind around 10 mph, with gusts as high as 24 mph."},{"number":6,"name":"Sunday","startTime":"2021-01-17T06:00:00-07:00","endTime":"2021-01-17T18:00:00-07:00","isDaytime":true,"temperature":38,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"10 to 14 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/day/sct?size=medium","shortForecast":"Mostly Sunny","detailedForecast":"Mostly sunny, with a high near 38."},{"number":7,"name":"Sunday Night","startTime":"2021-01-17T18:00:00-07:00","endTime":"2021-01-18T06:00:00-07:00","isDaytime":false,"temperature":24,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"14 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/night/snow,20/snow,30?size=medium","shortForecast":"Chance Light Snow","detailedForecast":"A chance of snow after 11pm. Partly cloudy, with a low around 24. Chance of precipitation is 30%."},{"number":8,"name":"M.L. King Jr. Day","startTime":"2021-01-18T06:00:00-07:00","endTime":"2021-01-18T18:00:00-07:00","isDaytime":true,"temperature":33,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"8 to 12 mph","windDirection":"WNW","icon":"https://api.weather.gov/icons/land/day/snow?size=medium","shortForecast":"Chance Light Snow","detailedForecast":"A chance of snow. Partly sunny, with a high near 33. New snow accumulation of less than half an inch possible."},{"number":9,"name":"Monday Night","startTime":"2021-01-18T18:00:00-07:00","endTime":"2021-01-19T06:00:00-07:00","isDaytime":false,"temperature":13,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"8 mph","windDirection":"NNW","icon":"https://api.weather.gov/icons/land/night/snow?size=medium","shortForecast":"Chance Light Snow","detailedForecast":"A chance of snow. Mostly cloudy, with a low around 13. Little or no snow accumulation expected."},{"number":10,"name":"Tuesday","startTime":"2021-01-19T06:00:00-07:00","endTime":"2021-01-19T18:00:00-07:00","isDaytime":true,"temperature":25,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"9 mph","windDirection":"NNW","icon":"https://api.weather.gov/icons/land/day/snow/bkn?size=medium","shortForecast":"Slight Chance Light Snow then Partly Sunny","detailedForecast":"A slight chance of snow before 11am. Partly sunny, with a high near 25."},{"number":11,"name":"Tuesday Night","startTime":"2021-01-19T18:00:00-07:00","endTime":"2021-01-20T06:00:00-07:00","isDaytime":false,"temperature":11,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"7 to 14 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/night/sct?size=medium","shortForecast":"Partly Cloudy","detailedForecast":"Partly cloudy, with a low around 11."},{"number":12,"name":"Wednesday","startTime":"2021-01-20T06:00:00-07:00","endTime":"2021-01-20T18:00:00-07:00","isDaytime":true,"temperature":35,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"14 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/day/sct?size=medium","shortForecast":"Mostly Sunny","detailedForecast":"Mostly sunny, with a high near 35."},{"number":13,"name":"Wednesday Night","startTime":"2021-01-20T18:00:00-07:00","endTime":"2021-01-21T06:00:00-07:00","isDaytime":false,"temperature":17,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"12 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/night/sct?size=medium","shortForecast":"Partly Cloudy","detailedForecast":"Partly cloudy, with a low around 17."},{"number":14,"name":"Thursday","startTime":"2021-01-21T06:00:00-07:00","endTime":"2021-01-21T18:00:00-07:00","isDaytime":true,"temperature":34,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"8 to 12 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/day/sct?size=medium","shortForecast":"Mostly Sunny","detailedForecast":"Mostly sunny, with a high near 34."}]}
  var hourly_BOU_46_92 = {"correlationId":"98971910","title":"Unexpected Problem","type":"https://api.weather.gov/problems/UnexpectedProblem","status":500,"detail":"An unexpected problem has occurred.","instance":"https://api.weather.gov/requests/98971910"}
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

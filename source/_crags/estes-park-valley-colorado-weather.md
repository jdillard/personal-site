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
  var weekly_BOU_46_92 = {"updated":"2021-04-13T02:11:56+00:00","units":"us","forecastGenerator":"BaselineForecastGenerator","generatedAt":"2021-04-13T08:42:21+00:00","updateTime":"2021-04-13T02:11:56+00:00","validTimes":"2021-04-12T20:00:00+00:00/P7DT5H","elevation":{"value":2542.9464,"unitCode":"unit:m"},"periods":[{"number":1,"name":"Overnight","startTime":"2021-04-13T02:00:00-06:00","endTime":"2021-04-13T06:00:00-06:00","isDaytime":false,"temperature":18,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"5 mph","windDirection":"ESE","icon":"https://api.weather.gov/icons/land/night/snow,50?size=medium","shortForecast":"Chance Snow Showers","detailedForecast":"A chance of snow showers. Cloudy, with a low around 18. East southeast wind around 5 mph. Chance of precipitation is 50%. New snow accumulation of less than half an inch possible."},{"number":2,"name":"Tuesday","startTime":"2021-04-13T06:00:00-06:00","endTime":"2021-04-13T18:00:00-06:00","isDaytime":true,"temperature":35,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"6 to 9 mph","windDirection":"ESE","icon":"https://api.weather.gov/icons/land/day/snow,60/snow,70?size=medium","shortForecast":"Snow Showers Likely","detailedForecast":"Snow showers likely. Cloudy, with a high near 35. East southeast wind 6 to 9 mph. Chance of precipitation is 70%. New snow accumulation of 1 to 2 inches possible."},{"number":3,"name":"Tuesday Night","startTime":"2021-04-13T18:00:00-06:00","endTime":"2021-04-14T06:00:00-06:00","isDaytime":false,"temperature":25,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"7 mph","windDirection":"ESE","icon":"https://api.weather.gov/icons/land/night/snow,80?size=medium","shortForecast":"Heavy Snow","detailedForecast":"Snow. Cloudy, with a low around 25. East southeast wind around 7 mph. Chance of precipitation is 80%. New snow accumulation of 3 to 7 inches possible."},{"number":4,"name":"Wednesday","startTime":"2021-04-14T06:00:00-06:00","endTime":"2021-04-14T18:00:00-06:00","isDaytime":true,"temperature":39,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"7 to 10 mph","windDirection":"ESE","icon":"https://api.weather.gov/icons/land/day/snow,40/snow,50?size=medium","shortForecast":"Chance Light Snow","detailedForecast":"A chance of snow. Mostly cloudy, with a high near 39. East southeast wind 7 to 10 mph, with gusts as high as 16 mph. Chance of precipitation is 50%. New snow accumulation of less than half an inch possible."},{"number":5,"name":"Wednesday Night","startTime":"2021-04-14T18:00:00-06:00","endTime":"2021-04-15T06:00:00-06:00","isDaytime":false,"temperature":28,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"6 to 9 mph","windDirection":"SSE","icon":"https://api.weather.gov/icons/land/night/snow,50/snow,40?size=medium","shortForecast":"Chance Light Snow","detailedForecast":"A chance of snow and a slight chance of thunderstorms. Cloudy, with a low around 28. South southeast wind 6 to 9 mph. Chance of precipitation is 50%. New snow accumulation of 1 to 2 inches possible."},{"number":6,"name":"Thursday","startTime":"2021-04-15T06:00:00-06:00","endTime":"2021-04-15T18:00:00-06:00","isDaytime":true,"temperature":42,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"6 to 9 mph","windDirection":"SE","icon":"https://api.weather.gov/icons/land/day/snow,40/snow,80?size=medium","shortForecast":"Light Snow","detailedForecast":"A chance of snow before noon, then snow and a slight chance of thunderstorms. Mostly cloudy, with a high near 42. Chance of precipitation is 80%. New snow accumulation of less than half an inch possible."},{"number":7,"name":"Thursday Night","startTime":"2021-04-15T18:00:00-06:00","endTime":"2021-04-16T06:00:00-06:00","isDaytime":false,"temperature":25,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"7 mph","windDirection":"N","icon":"https://api.weather.gov/icons/land/night/snow,80/snow,60?size=medium","shortForecast":"Light Snow","detailedForecast":"Snow. Mostly cloudy, with a low around 25. Chance of precipitation is 80%. New snow accumulation of less than one inch possible."},{"number":8,"name":"Friday","startTime":"2021-04-16T06:00:00-06:00","endTime":"2021-04-16T18:00:00-06:00","isDaytime":true,"temperature":35,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"8 to 12 mph","windDirection":"NNE","icon":"https://api.weather.gov/icons/land/day/snow?size=medium","shortForecast":"Light Snow Likely","detailedForecast":"Snow likely before noon, then snow likely and a slight chance of thunderstorms. Mostly cloudy, with a high near 35. New snow accumulation of around one inch possible."},{"number":9,"name":"Friday Night","startTime":"2021-04-16T18:00:00-06:00","endTime":"2021-04-17T06:00:00-06:00","isDaytime":false,"temperature":20,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"8 mph","windDirection":"N","icon":"https://api.weather.gov/icons/land/night/snow?size=medium","shortForecast":"Chance Light Snow","detailedForecast":"A chance of snow. Mostly cloudy, with a low around 20. New snow accumulation of less than half an inch possible."},{"number":10,"name":"Saturday","startTime":"2021-04-17T06:00:00-06:00","endTime":"2021-04-17T18:00:00-06:00","isDaytime":true,"temperature":38,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"7 to 12 mph","windDirection":"NNE","icon":"https://api.weather.gov/icons/land/day/snow?size=medium","shortForecast":"Chance Light Snow","detailedForecast":"A chance of snow. Partly sunny, with a high near 38."},{"number":11,"name":"Saturday Night","startTime":"2021-04-17T18:00:00-06:00","endTime":"2021-04-18T06:00:00-06:00","isDaytime":false,"temperature":21,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"8 mph","windDirection":"NW","icon":"https://api.weather.gov/icons/land/night/snow/sct?size=medium","shortForecast":"Slight Chance Light Snow then Partly Cloudy","detailedForecast":"A slight chance of snow before midnight. Partly cloudy, with a low around 21."},{"number":12,"name":"Sunday","startTime":"2021-04-18T06:00:00-06:00","endTime":"2021-04-18T18:00:00-06:00","isDaytime":true,"temperature":46,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"10 mph","windDirection":"WNW","icon":"https://api.weather.gov/icons/land/day/sct/snow?size=medium","shortForecast":"Mostly Sunny then Slight Chance Light Snow","detailedForecast":"A slight chance of snow and a slight chance of thunderstorms after noon. Mostly sunny, with a high near 46."},{"number":13,"name":"Sunday Night","startTime":"2021-04-18T18:00:00-06:00","endTime":"2021-04-19T06:00:00-06:00","isDaytime":false,"temperature":28,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"9 mph","windDirection":"WNW","icon":"https://api.weather.gov/icons/land/night/few?size=medium","shortForecast":"Mostly Clear","detailedForecast":"Mostly clear, with a low around 28."},{"number":14,"name":"Monday","startTime":"2021-04-19T06:00:00-06:00","endTime":"2021-04-19T18:00:00-06:00","isDaytime":true,"temperature":47,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"10 mph","windDirection":"WNW","icon":"https://api.weather.gov/icons/land/day/snow?size=medium","shortForecast":"Chance Light Snow","detailedForecast":"A chance of snow. Mostly sunny, with a high near 47."}]}
  var hourly_BOU_46_92 = {"correlationId":"e30a454","title":"Unexpected Problem","type":"https://api.weather.gov/problems/UnexpectedProblem","status":500,"detail":"An unexpected problem has occurred.","instance":"https://api.weather.gov/requests/e30a454"}
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

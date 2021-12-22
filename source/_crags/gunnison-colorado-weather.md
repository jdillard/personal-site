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
  var weekly_GJT_152_72 = {"updated":"2021-12-22T06:40:11+00:00","units":"us","forecastGenerator":"BaselineForecastGenerator","generatedAt":"2021-12-22T08:48:03+00:00","updateTime":"2021-12-22T06:40:11+00:00","validTimes":"2021-12-22T00:00:00+00:00/P7DT1H","elevation":{"unitCode":"wmoUnit:m","value":2479.8528},"periods":[{"number":1,"name":"Overnight","startTime":"2021-12-22T01:00:00-07:00","endTime":"2021-12-22T06:00:00-07:00","isDaytime":false,"temperature":2,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"0 mph","windDirection":"ESE","icon":"https://api.weather.gov/icons/land/night/cold?size=medium","shortForecast":"Mostly Clear","detailedForecast":"Mostly clear, with a low around 2. East southeast wind around 0 mph."},{"number":2,"name":"Wednesday","startTime":"2021-12-22T06:00:00-07:00","endTime":"2021-12-22T18:00:00-07:00","isDaytime":true,"temperature":34,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"0 to 5 mph","windDirection":"SW","icon":"https://api.weather.gov/icons/land/day/few?size=medium","shortForecast":"Sunny","detailedForecast":"Sunny, with a high near 34. Southwest wind 0 to 5 mph."},{"number":3,"name":"Wednesday Night","startTime":"2021-12-22T18:00:00-07:00","endTime":"2021-12-23T06:00:00-07:00","isDaytime":false,"temperature":10,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"0 to 5 mph","windDirection":"ENE","icon":"https://api.weather.gov/icons/land/night/cold/snow,20?size=medium","shortForecast":"Partly Cloudy then Slight Chance Snow Showers","detailedForecast":"A slight chance of snow showers after 5am. Partly cloudy, with a low around 10. East northeast wind 0 to 5 mph. Chance of precipitation is 20%."},{"number":4,"name":"Thursday","startTime":"2021-12-23T06:00:00-07:00","endTime":"2021-12-23T18:00:00-07:00","isDaytime":true,"temperature":37,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"5 to 10 mph","windDirection":"SSE","icon":"https://api.weather.gov/icons/land/day/snow,50/snow,80?size=medium","shortForecast":"Snow Showers","detailedForecast":"Snow showers. Mostly cloudy, with a high near 37. South southeast wind 5 to 10 mph. Chance of precipitation is 80%. New snow accumulation of 1 to 2 inches possible."},{"number":5,"name":"Thursday Night","startTime":"2021-12-23T18:00:00-07:00","endTime":"2021-12-24T06:00:00-07:00","isDaytime":false,"temperature":25,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"10 to 20 mph","windDirection":"WSW","icon":"https://api.weather.gov/icons/land/night/snow,80?size=medium","shortForecast":"Snow Showers","detailedForecast":"Snow showers. Mostly cloudy, with a low around 25. West southwest wind 10 to 20 mph. Chance of precipitation is 80%. New snow accumulation of 1 to 3 inches possible."},{"number":6,"name":"Friday","startTime":"2021-12-24T06:00:00-07:00","endTime":"2021-12-24T18:00:00-07:00","isDaytime":true,"temperature":37,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"15 to 20 mph","windDirection":"WSW","icon":"https://api.weather.gov/icons/land/day/blizzard,80?size=medium","shortForecast":"Snow Showers And Patchy Blowing Snow","detailedForecast":"Snow showers before 9am, then snow showers and patchy blowing snow. Cloudy, with a high near 37. Chance of precipitation is 80%. New snow accumulation of 2 to 4 inches possible."},{"number":7,"name":"Friday Night","startTime":"2021-12-24T18:00:00-07:00","endTime":"2021-12-25T06:00:00-07:00","isDaytime":false,"temperature":18,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"10 to 20 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/night/snow,60/snow,50?size=medium","shortForecast":"Snow Showers Likely","detailedForecast":"Snow showers likely. Mostly cloudy, with a low around 18. Chance of precipitation is 60%. New snow accumulation of 1 to 3 inches possible."},{"number":8,"name":"Christmas Day","startTime":"2021-12-25T06:00:00-07:00","endTime":"2021-12-25T18:00:00-07:00","isDaytime":true,"temperature":34,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"5 to 10 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/day/snow?size=medium","shortForecast":"Chance Snow Showers","detailedForecast":"A chance of snow showers. Mostly cloudy, with a high near 34. New snow accumulation of around one inch possible."},{"number":9,"name":"Saturday Night","startTime":"2021-12-25T18:00:00-07:00","endTime":"2021-12-26T06:00:00-07:00","isDaytime":false,"temperature":14,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"10 mph","windDirection":"WSW","icon":"https://api.weather.gov/icons/land/night/snow?size=medium","shortForecast":"Chance Snow Showers","detailedForecast":"A chance of snow showers. Mostly cloudy, with a low around 14. New snow accumulation of less than one inch possible."},{"number":10,"name":"Sunday","startTime":"2021-12-26T06:00:00-07:00","endTime":"2021-12-26T18:00:00-07:00","isDaytime":true,"temperature":31,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"10 to 20 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/day/snow/blizzard?size=medium","shortForecast":"Chance Snow Showers","detailedForecast":"A chance of snow showers before noon, then a chance of snow showers and patchy blowing snow between noon and 5pm, then patchy blowing snow and a slight chance of snow showers. Partly sunny, with a high near 31. New snow accumulation of less than half an inch possible."},{"number":11,"name":"Sunday Night","startTime":"2021-12-26T18:00:00-07:00","endTime":"2021-12-27T06:00:00-07:00","isDaytime":false,"temperature":5,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"5 to 20 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/night/snow?size=medium","shortForecast":"Chance Snow Showers","detailedForecast":"A chance of snow showers. Partly cloudy, with a low around 5. Little or no snow accumulation expected."},{"number":12,"name":"Monday","startTime":"2021-12-27T06:00:00-07:00","endTime":"2021-12-27T18:00:00-07:00","isDaytime":true,"temperature":28,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"5 to 15 mph","windDirection":"WSW","icon":"https://api.weather.gov/icons/land/day/snow?size=medium","shortForecast":"Chance Snow Showers","detailedForecast":"A chance of snow showers. Partly sunny, with a high near 28. New snow accumulation of less than one inch possible."},{"number":13,"name":"Monday Night","startTime":"2021-12-27T18:00:00-07:00","endTime":"2021-12-28T06:00:00-07:00","isDaytime":false,"temperature":6,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"10 to 15 mph","windDirection":"WSW","icon":"https://api.weather.gov/icons/land/night/snow?size=medium","shortForecast":"Chance Snow Showers","detailedForecast":"A chance of snow showers. Mostly cloudy, with a low around 6. New snow accumulation of less than half an inch possible."},{"number":14,"name":"Tuesday","startTime":"2021-12-28T06:00:00-07:00","endTime":"2021-12-28T18:00:00-07:00","isDaytime":true,"temperature":27,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"10 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/day/snow?size=medium","shortForecast":"Chance Snow Showers","detailedForecast":"A chance of snow showers. Mostly cloudy, with a high near 27."}]}
  var hourly_GJT_152_72 = {"correlationId":"2a58f132","title":"Unexpected Problem","type":"https://api.weather.gov/problems/UnexpectedProblem","status":500,"detail":"An unexpected problem has occurred.","instance":"https://api.weather.gov/requests/2a58f132"}
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

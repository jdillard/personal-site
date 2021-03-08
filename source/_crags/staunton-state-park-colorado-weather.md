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
  var weekly_BOU_48_51 = {"updated":"2021-03-08T06:24:06+00:00","units":"us","forecastGenerator":"BaselineForecastGenerator","generatedAt":"2021-03-08T08:49:34+00:00","updateTime":"2021-03-08T06:24:06+00:00","validTimes":"2021-03-08T00:00:00+00:00/P7DT7H","elevation":{"value":2628.9,"unitCode":"unit:m"},"periods":[{"number":1,"name":"Overnight","startTime":"2021-03-08T01:00:00-07:00","endTime":"2021-03-08T06:00:00-07:00","isDaytime":false,"temperature":32,"temperatureUnit":"F","temperatureTrend":"rising","windSpeed":"10 mph","windDirection":"WSW","icon":"https://api.weather.gov/icons/land/night/bkn?size=medium","shortForecast":"Mostly Cloudy","detailedForecast":"Mostly cloudy. Low around 32, with temperatures rising to around 36 overnight. West southwest wind around 10 mph, with gusts as high as 16 mph."},{"number":2,"name":"Monday","startTime":"2021-03-08T06:00:00-07:00","endTime":"2021-03-08T18:00:00-07:00","isDaytime":true,"temperature":55,"temperatureUnit":"F","temperatureTrend":"falling","windSpeed":"7 to 13 mph","windDirection":"WSW","icon":"https://api.weather.gov/icons/land/day/bkn?size=medium","shortForecast":"Partly Sunny","detailedForecast":"Partly sunny. High near 55, with temperatures falling to around 49 in the afternoon. West southwest wind 7 to 13 mph, with gusts as high as 24 mph."},{"number":3,"name":"Monday Night","startTime":"2021-03-08T18:00:00-07:00","endTime":"2021-03-09T06:00:00-07:00","isDaytime":false,"temperature":29,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"8 to 16 mph","windDirection":"SW","icon":"https://api.weather.gov/icons/land/night/few?size=medium","shortForecast":"Mostly Clear","detailedForecast":"Mostly clear, with a low around 29. Southwest wind 8 to 16 mph, with gusts as high as 25 mph."},{"number":4,"name":"Tuesday","startTime":"2021-03-09T06:00:00-07:00","endTime":"2021-03-09T18:00:00-07:00","isDaytime":true,"temperature":52,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"6 to 10 mph","windDirection":"SW","icon":"https://api.weather.gov/icons/land/day/sct?size=medium","shortForecast":"Mostly Sunny","detailedForecast":"Mostly sunny, with a high near 52. Southwest wind 6 to 10 mph, with gusts as high as 16 mph."},{"number":5,"name":"Tuesday Night","startTime":"2021-03-09T18:00:00-07:00","endTime":"2021-03-10T06:00:00-07:00","isDaytime":false,"temperature":23,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"2 to 6 mph","windDirection":"WSW","icon":"https://api.weather.gov/icons/land/night/few?size=medium","shortForecast":"Mostly Clear","detailedForecast":"Mostly clear, with a low around 23. West southwest wind 2 to 6 mph, with gusts as high as 17 mph."},{"number":6,"name":"Wednesday","startTime":"2021-03-10T06:00:00-07:00","endTime":"2021-03-10T18:00:00-07:00","isDaytime":true,"temperature":42,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"6 to 13 mph","windDirection":"WSW","icon":"https://api.weather.gov/icons/land/day/snow,30?size=medium","shortForecast":"Chance Light Snow","detailedForecast":"A chance of snow after 11am. Mostly sunny, with a high near 42. Chance of precipitation is 30%. New snow accumulation of less than half an inch possible."},{"number":7,"name":"Wednesday Night","startTime":"2021-03-10T18:00:00-07:00","endTime":"2021-03-11T06:00:00-07:00","isDaytime":false,"temperature":16,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"2 to 8 mph","windDirection":"WSW","icon":"https://api.weather.gov/icons/land/night/snow,30/snow,40?size=medium","shortForecast":"Chance Light Snow","detailedForecast":"A chance of snow. Mostly cloudy, with a low around 16. Chance of precipitation is 40%. New snow accumulation of 1 to 3 inches possible."},{"number":8,"name":"Thursday","startTime":"2021-03-11T06:00:00-07:00","endTime":"2021-03-11T18:00:00-07:00","isDaytime":true,"temperature":37,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"2 to 7 mph","windDirection":"ESE","icon":"https://api.weather.gov/icons/land/day/snow?size=medium","shortForecast":"Snow Likely","detailedForecast":"Snow likely. Mostly cloudy, with a high near 37. New snow accumulation of 3 to 5 inches possible."},{"number":9,"name":"Thursday Night","startTime":"2021-03-11T18:00:00-07:00","endTime":"2021-03-12T06:00:00-07:00","isDaytime":false,"temperature":17,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"5 mph","windDirection":"NNE","icon":"https://api.weather.gov/icons/land/night/snow?size=medium","shortForecast":"Chance Snow","detailedForecast":"A chance of snow. Mostly cloudy, with a low around 17. New snow accumulation of 5 to 9 inches possible."},{"number":10,"name":"Friday","startTime":"2021-03-12T06:00:00-07:00","endTime":"2021-03-12T18:00:00-07:00","isDaytime":true,"temperature":33,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"2 to 8 mph","windDirection":"NE","icon":"https://api.weather.gov/icons/land/day/snow?size=medium","shortForecast":"Snow Likely","detailedForecast":"Snow likely. Mostly cloudy, with a high near 33. New snow accumulation of 4 to 8 inches possible."},{"number":11,"name":"Friday Night","startTime":"2021-03-12T18:00:00-07:00","endTime":"2021-03-13T06:00:00-07:00","isDaytime":false,"temperature":14,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"2 to 6 mph","windDirection":"N","icon":"https://api.weather.gov/icons/land/night/snow?size=medium","shortForecast":"Chance Snow","detailedForecast":"A chance of snow. Mostly cloudy, with a low around 14. New snow accumulation of 3 to 5 inches possible."},{"number":12,"name":"Saturday","startTime":"2021-03-13T06:00:00-07:00","endTime":"2021-03-13T18:00:00-07:00","isDaytime":true,"temperature":34,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"3 to 7 mph","windDirection":"N","icon":"https://api.weather.gov/icons/land/day/snow?size=medium","shortForecast":"Chance Light Snow","detailedForecast":"A chance of snow. Partly sunny, with a high near 34. New snow accumulation of 1 to 3 inches possible."},{"number":13,"name":"Saturday Night","startTime":"2021-03-13T18:00:00-07:00","endTime":"2021-03-14T06:00:00-06:00","isDaytime":false,"temperature":15,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"6 mph","windDirection":"NW","icon":"https://api.weather.gov/icons/land/night/snow/bkn?size=medium","shortForecast":"Chance Light Snow then Mostly Cloudy","detailedForecast":"A chance of snow before 11pm. Mostly cloudy, with a low around 15. New snow accumulation of less than half an inch possible."},{"number":14,"name":"Sunday","startTime":"2021-03-14T06:00:00-06:00","endTime":"2021-03-14T18:00:00-06:00","isDaytime":true,"temperature":41,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"7 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/day/sct/snow?size=medium","shortForecast":"Mostly Sunny then Slight Chance Light Snow","detailedForecast":"A slight chance of snow after noon. Mostly sunny, with a high near 41."}]}
  var hourly_BOU_48_51 = {"correlationId":"1c16ac2e","title":"Unexpected Problem","type":"https://api.weather.gov/problems/UnexpectedProblem","status":500,"detail":"An unexpected problem has occurred.","instance":"https://api.weather.gov/requests/1c16ac2e"}
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

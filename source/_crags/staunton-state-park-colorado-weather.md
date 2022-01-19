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
  var weekly_BOU_48_51 = {"updated":"2022-01-19T03:26:02+00:00","units":"us","forecastGenerator":"BaselineForecastGenerator","generatedAt":"2022-01-19T08:42:04+00:00","updateTime":"2022-01-19T03:26:02+00:00","validTimes":"2022-01-18T21:00:00+00:00/P7DT7H","elevation":{"unitCode":"wmoUnit:m","value":2628.9},"periods":[{"number":1,"name":"Overnight","startTime":"2022-01-19T01:00:00-07:00","endTime":"2022-01-19T06:00:00-07:00","isDaytime":false,"temperature":12,"temperatureUnit":"F","temperatureTrend":"rising","windSpeed":"7 mph","windDirection":"NW","icon":"https://api.weather.gov/icons/land/night/snow,30?size=medium","shortForecast":"Chance Light Snow","detailedForecast":"A chance of snow and patchy freezing drizzle after 5am. Mostly cloudy. Low around 12, with temperatures rising to around 16 overnight. Northwest wind around 7 mph. Chance of precipitation is 30%."},{"number":2,"name":"Wednesday","startTime":"2022-01-19T06:00:00-07:00","endTime":"2022-01-19T18:00:00-07:00","isDaytime":true,"temperature":26,"temperatureUnit":"F","temperatureTrend":"falling","windSpeed":"5 to 8 mph","windDirection":"NE","icon":"https://api.weather.gov/icons/land/day/snow,40?size=medium","shortForecast":"Chance Light Snow","detailedForecast":"A chance of snow and patchy freezing drizzle. Mostly cloudy. High near 26, with temperatures falling to around 20 in the afternoon. Northeast wind 5 to 8 mph. Chance of precipitation is 40%. New snow accumulation of less than one inch possible."},{"number":3,"name":"Wednesday Night","startTime":"2022-01-19T18:00:00-07:00","endTime":"2022-01-20T06:00:00-07:00","isDaytime":false,"temperature":8,"temperatureUnit":"F","temperatureTrend":"rising","windSpeed":"7 mph","windDirection":"SSW","icon":"https://api.weather.gov/icons/land/night/snow,40/cold?size=medium","shortForecast":"Chance Light Snow then Mostly Cloudy","detailedForecast":"A chance of snow before 11pm. Mostly cloudy. Low around 8, with temperatures rising to around 11 overnight. Wind chill values as low as 0. South southwest wind around 7 mph. Chance of precipitation is 40%. New snow accumulation of less than half an inch possible."},{"number":4,"name":"Thursday","startTime":"2022-01-20T06:00:00-07:00","endTime":"2022-01-20T18:00:00-07:00","isDaytime":true,"temperature":32,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"6 to 12 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/day/few?size=medium","shortForecast":"Sunny","detailedForecast":"Sunny, with a high near 32. Wind chill values as low as 0. West wind 6 to 12 mph, with gusts as high as 18 mph."},{"number":5,"name":"Thursday Night","startTime":"2022-01-20T18:00:00-07:00","endTime":"2022-01-21T06:00:00-07:00","isDaytime":false,"temperature":13,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"9 to 13 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/night/sct/snow,30?size=medium","shortForecast":"Partly Cloudy then Chance Light Snow","detailedForecast":"A chance of snow after 5am. Partly cloudy, with a low around 13. West wind 9 to 13 mph, with gusts as high as 21 mph. Chance of precipitation is 30%. Little or no snow accumulation expected."},{"number":6,"name":"Friday","startTime":"2022-01-21T06:00:00-07:00","endTime":"2022-01-21T18:00:00-07:00","isDaytime":true,"temperature":33,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"12 mph","windDirection":"NNW","icon":"https://api.weather.gov/icons/land/day/snow,60?size=medium","shortForecast":"Snow Likely","detailedForecast":"Snow likely. Mostly cloudy, with a high near 33. Chance of precipitation is 60%. New snow accumulation of 2 to 4 inches possible."},{"number":7,"name":"Friday Night","startTime":"2022-01-21T18:00:00-07:00","endTime":"2022-01-22T06:00:00-07:00","isDaytime":false,"temperature":8,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"7 to 10 mph","windDirection":"NNW","icon":"https://api.weather.gov/icons/land/night/snow,50/snow,20?size=medium","shortForecast":"Chance Snow","detailedForecast":"A chance of snow before 5am. Mostly cloudy, with a low around 8. Chance of precipitation is 50%. New snow accumulation of 1 to 2 inches possible."},{"number":8,"name":"Saturday","startTime":"2022-01-22T06:00:00-07:00","endTime":"2022-01-22T18:00:00-07:00","isDaytime":true,"temperature":31,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"7 to 10 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/day/few?size=medium","shortForecast":"Sunny","detailedForecast":"Sunny, with a high near 31."},{"number":9,"name":"Saturday Night","startTime":"2022-01-22T18:00:00-07:00","endTime":"2022-01-23T06:00:00-07:00","isDaytime":false,"temperature":12,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"12 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/night/few?size=medium","shortForecast":"Mostly Clear","detailedForecast":"Mostly clear, with a low around 12."},{"number":10,"name":"Sunday","startTime":"2022-01-23T06:00:00-07:00","endTime":"2022-01-23T18:00:00-07:00","isDaytime":true,"temperature":40,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"10 to 14 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/day/few?size=medium","shortForecast":"Sunny","detailedForecast":"Sunny, with a high near 40."},{"number":11,"name":"Sunday Night","startTime":"2022-01-23T18:00:00-07:00","endTime":"2022-01-24T06:00:00-07:00","isDaytime":false,"temperature":18,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"12 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/night/few?size=medium","shortForecast":"Mostly Clear","detailedForecast":"Mostly clear, with a low around 18."},{"number":12,"name":"Monday","startTime":"2022-01-24T06:00:00-07:00","endTime":"2022-01-24T18:00:00-07:00","isDaytime":true,"temperature":39,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"8 to 13 mph","windDirection":"WNW","icon":"https://api.weather.gov/icons/land/day/sct?size=medium","shortForecast":"Mostly Sunny","detailedForecast":"Mostly sunny, with a high near 39."},{"number":13,"name":"Monday Night","startTime":"2022-01-24T18:00:00-07:00","endTime":"2022-01-25T06:00:00-07:00","isDaytime":false,"temperature":14,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"8 mph","windDirection":"WNW","icon":"https://api.weather.gov/icons/land/night/snow?size=medium","shortForecast":"Slight Chance Light Snow","detailedForecast":"A slight chance of snow after 11pm. Partly cloudy, with a low around 14."},{"number":14,"name":"Tuesday","startTime":"2022-01-25T06:00:00-07:00","endTime":"2022-01-25T18:00:00-07:00","isDaytime":true,"temperature":31,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"8 to 12 mph","windDirection":"NW","icon":"https://api.weather.gov/icons/land/day/snow?size=medium","shortForecast":"Chance Light Snow","detailedForecast":"A chance of snow. Partly sunny, with a high near 31."}]}
  var hourly_BOU_48_51 = {"correlationId":"16f96bb8","title":"Unexpected Problem","type":"https://api.weather.gov/problems/UnexpectedProblem","status":500,"detail":"An unexpected problem has occurred.","instance":"https://api.weather.gov/requests/16f96bb8"}
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

---
### THIS FILE IS AUTO-GENERATED - DO NOT EDIT ###
layout: page
title: City of Rocks, Idaho Climbing Weather - Current, Past, and Forecasted Report
title_override: City of Rocks<br /><small>Climbing Weather</small>
description: A lightweight weather report for City of Rocks, Idaho. Optimized for slow internet connections.
js_includes:
  - weather.js
---

<section class="measure center lh-copy f5-ns f6 ph2 mv4" style="text-align: justify;">
<strong>"Is it dry?"</strong>, an oft-repeated, age-old question. Here are real-time,
precipitation-focused reports of current, past, and forecasted climbing weather for City of Rocks, Idaho.
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
<section id="weather" data-crag="city-of-rocks-idaho" class="mv4-ns mv3 ph2 center"></section>
<section id="nearby" class="tc lh-copy">
  <h3>Nearby Crags</h3>
<a class="nowrap no-underline fancy-link relative light-red mh3" href="/crags/moab-utah-weather.html">Moab</a>
<a class="nowrap no-underline fancy-link relative light-red mh3" href="/crags/little-cottonwood-canyon-utah-weather.html">Little Cottonwood Canyon</a>
</section>
<section id="nearby" class="tc lh-copy">
  <h3>Other Metros</h3>
  <select class="ma1 bg-near-white pa2" id="stateSel">
    <option value="Texas">Texas</option>
    <option value="Washington">Washington</option>
    <option value="Colorado">Colorado</option>
    <option value="Tennessee">Tennessee</option>
    <option value="Utah" selected>Utah</option>
    <option value="California">California</option>
  </select>
  <select class="ma1 bg-near-white pa2" id="citySel">
    <option value="Salt Lake City" selected>Salt Lake City</option>
  </select>
  <a id="selectMetro" class="f6 link dim ph3 pv2 ma1 dib white bg-light-red" href="/crags/salt-lake-city-utah-weather.html">Select Metro</a>
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
  var weekly_PIH_50_16 = {"updated":"2021-10-22T20:03:23+00:00","units":"us","forecastGenerator":"BaselineForecastGenerator","generatedAt":"2021-10-23T08:44:56+00:00","updateTime":"2021-10-22T20:03:23+00:00","validTimes":"2021-10-22T14:00:00+00:00/P7DT22H","elevation":{"unitCode":"wmoUnit:m","value":1958.9496},"periods":[{"number":1,"name":"Overnight","startTime":"2021-10-23T02:00:00-06:00","endTime":"2021-10-23T06:00:00-06:00","isDaytime":false,"temperature":34,"temperatureUnit":"F","temperatureTrend":"rising","windSpeed":"12 mph","windDirection":"NW","icon":"https://api.weather.gov/icons/land/night/snow,50?size=medium","shortForecast":"Chance Rain And Snow","detailedForecast":"A slight chance of rain before 3am, then a chance of rain and snow. Cloudy. Low around 34, with temperatures rising to around 36 overnight. Northwest wind around 12 mph. Chance of precipitation is 50%."},{"number":2,"name":"Saturday","startTime":"2021-10-23T06:00:00-06:00","endTime":"2021-10-23T18:00:00-06:00","isDaytime":true,"temperature":44,"temperatureUnit":"F","temperatureTrend":"falling","windSpeed":"5 to 12 mph","windDirection":"WNW","icon":"https://api.weather.gov/icons/land/day/snow,60/snow,40?size=medium","shortForecast":"Rain And Snow Likely","detailedForecast":"Rain and snow likely. Mostly cloudy. High near 44, with temperatures falling to around 42 in the afternoon. West northwest wind 5 to 12 mph. Chance of precipitation is 60%."},{"number":3,"name":"Saturday Night","startTime":"2021-10-23T18:00:00-06:00","endTime":"2021-10-24T06:00:00-06:00","isDaytime":false,"temperature":32,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"6 to 10 mph","windDirection":"WSW","icon":"https://api.weather.gov/icons/land/night/snow,40/bkn?size=medium","shortForecast":"Chance Rain And Snow then Mostly Cloudy","detailedForecast":"A chance of rain before 7pm, then a chance of rain and snow between 7pm and midnight. Mostly cloudy, with a low around 32. West southwest wind 6 to 10 mph. Chance of precipitation is 40%."},{"number":4,"name":"Sunday","startTime":"2021-10-24T06:00:00-06:00","endTime":"2021-10-24T18:00:00-06:00","isDaytime":true,"temperature":46,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"7 to 21 mph","windDirection":"S","icon":"https://api.weather.gov/icons/land/day/snow,30/snow,70?size=medium","shortForecast":"Rain And Snow Likely","detailedForecast":"Rain and snow likely. Mostly cloudy, with a high near 46. South wind 7 to 21 mph, with gusts as high as 32 mph. Chance of precipitation is 70%."},{"number":5,"name":"Sunday Night","startTime":"2021-10-24T18:00:00-06:00","endTime":"2021-10-25T06:00:00-06:00","isDaytime":false,"temperature":39,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"14 to 26 mph","windDirection":"S","icon":"https://api.weather.gov/icons/land/night/rain,80?size=medium","shortForecast":"Light Rain","detailedForecast":"Rain. Cloudy, with a low around 39. South wind 14 to 26 mph, with gusts as high as 40 mph. Chance of precipitation is 80%."},{"number":6,"name":"Monday","startTime":"2021-10-25T06:00:00-06:00","endTime":"2021-10-25T18:00:00-06:00","isDaytime":true,"temperature":45,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"14 to 20 mph","windDirection":"SW","icon":"https://api.weather.gov/icons/land/day/rain,80/rain,100?size=medium","shortForecast":"Rain","detailedForecast":"Rain. Cloudy, with a high near 45. Chance of precipitation is 100%."},{"number":7,"name":"Monday Night","startTime":"2021-10-25T18:00:00-06:00","endTime":"2021-10-26T06:00:00-06:00","isDaytime":false,"temperature":29,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"10 to 16 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/night/snow,70/snow,30?size=medium","shortForecast":"Rain And Snow Likely","detailedForecast":"Rain likely before 9pm, then rain and snow likely. Mostly cloudy, with a low around 29. Chance of precipitation is 70%."},{"number":8,"name":"Tuesday","startTime":"2021-10-26T06:00:00-06:00","endTime":"2021-10-26T18:00:00-06:00","isDaytime":true,"temperature":39,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"14 to 20 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/day/snow,20/snow,40?size=medium","shortForecast":"Chance Light Snow","detailedForecast":"A chance of snow. Mostly cloudy, with a high near 39. Chance of precipitation is 40%."},{"number":9,"name":"Tuesday Night","startTime":"2021-10-26T18:00:00-06:00","endTime":"2021-10-27T06:00:00-06:00","isDaytime":false,"temperature":32,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"10 to 15 mph","windDirection":"WSW","icon":"https://api.weather.gov/icons/land/night/snow,50/snow,30?size=medium","shortForecast":"Chance Rain And Snow","detailedForecast":"A chance of rain and snow. Mostly cloudy, with a low around 32. Chance of precipitation is 50%."},{"number":10,"name":"Wednesday","startTime":"2021-10-27T06:00:00-06:00","endTime":"2021-10-27T18:00:00-06:00","isDaytime":true,"temperature":43,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"12 to 17 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/day/snow,30/snow,20?size=medium","shortForecast":"Chance Light Snow","detailedForecast":"A chance of snow before noon, then a slight chance of rain and snow. Partly sunny, with a high near 43. Chance of precipitation is 30%."},{"number":11,"name":"Wednesday Night","startTime":"2021-10-27T18:00:00-06:00","endTime":"2021-10-28T06:00:00-06:00","isDaytime":false,"temperature":32,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"7 to 14 mph","windDirection":"WSW","icon":"https://api.weather.gov/icons/land/night/sct?size=medium","shortForecast":"Partly Cloudy","detailedForecast":"Partly cloudy, with a low around 32."},{"number":12,"name":"Thursday","startTime":"2021-10-28T06:00:00-06:00","endTime":"2021-10-28T18:00:00-06:00","isDaytime":true,"temperature":50,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"8 to 13 mph","windDirection":"WSW","icon":"https://api.weather.gov/icons/land/day/sct?size=medium","shortForecast":"Mostly Sunny","detailedForecast":"Mostly sunny, with a high near 50."},{"number":13,"name":"Thursday Night","startTime":"2021-10-28T18:00:00-06:00","endTime":"2021-10-29T06:00:00-06:00","isDaytime":false,"temperature":33,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"9 mph","windDirection":"SW","icon":"https://api.weather.gov/icons/land/night/sct?size=medium","shortForecast":"Partly Cloudy","detailedForecast":"Partly cloudy, with a low around 33."},{"number":14,"name":"Friday","startTime":"2021-10-29T06:00:00-06:00","endTime":"2021-10-29T18:00:00-06:00","isDaytime":true,"temperature":49,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"8 to 13 mph","windDirection":"SW","icon":"https://api.weather.gov/icons/land/day/sct?size=medium","shortForecast":"Mostly Sunny","detailedForecast":"Mostly sunny, with a high near 49."}]}
  var hourly_PIH_50_16 = {"correlationId":"170e960e","title":"Unexpected Problem","type":"https://api.weather.gov/problems/UnexpectedProblem","status":500,"detail":"An unexpected problem has occurred.","instance":"https://api.weather.gov/requests/170e960e"}
  var crags_config = [
  {
    "name": "City of Rocks",
    "note": "Varnished and pocketed granite",
    "mountainProject": "https://www.mountainproject.com/area/105739322/city-of-rocks",
    "station": "RCKI1",
    "office": "PIH/50,16",
    "coordinates": [
      -113.7215,
      42.0760
    ]
  }
]</script>

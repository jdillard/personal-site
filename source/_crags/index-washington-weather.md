---
### THIS FILE IS AUTO-GENERATED - DO NOT EDIT ###
layout: page
title: Index, Washington Climbing Weather - Current, Past, and Forecasted Report
title_override: Index<br /><small>Climbing Weather</small>
description: A lightweight weather report for Index, Washington. Optimized for slow internet connections.
js_includes:
  - weather.js
---

<section class="measure center lh-copy f5-ns f6 ph2 mv4" style="text-align: justify;">
<strong>"Is it dry?"</strong>, an oft-repeated, age-old question. Here are real-time,
precipitation-focused reports of current, past, and forecasted climbing weather for Index, Washington.
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
<section id="weather" data-crag="index-washington" class="mv4-ns mv3 ph2 center"></section>
<section id="nearby" class="tc lh-copy">
  <h3>Nearby Crags</h3>
<a class="nowrap no-underline fancy-link relative light-red mh3" href="/crags/icicle-creek-washington-weather.html">Icicle Creek</a>
<a class="nowrap no-underline fancy-link relative light-red mh3" href="/crags/tieton-river-rock-washington-weather.html">Tieton River Rock</a>
<a class="nowrap no-underline fancy-link relative light-red mh3" href="/crags/vantage-washington-weather.html">Vantage</a>
<a class="nowrap no-underline fancy-link relative light-red mh3" href="/crags/mount-erie-washington-weather.html">Mount Erie</a>
<a class="nowrap no-underline fancy-link relative light-red mh3" href="/crags/darrington-washington-weather.html">Darrington</a>
<a class="nowrap no-underline fancy-link relative light-red mh3" href="/crags/smith-rock-oregon-weather.html">Smith Rock</a>
<a class="nowrap no-underline fancy-link relative light-red mh3" href="/crags/trout-creek-oregon-weather.html">Trout Creek</a>
</section>
<section id="nearby" class="tc lh-copy">
  <h3>Other Metros</h3>
  <select class="ma1 bg-near-white pa2" id="stateSel">
    <option value="Texas">Texas</option>
    <option value="Washington" selected>Washington</option>
    <option value="Colorado">Colorado</option>
    <option value="Tennessee">Tennessee</option>
    <option value="Utah">Utah</option>
    <option value="California">California</option>
  </select>
  <select class="ma1 bg-near-white pa2" id="citySel">
    <option value="Seattle" selected>Seattle</option>
  </select>
  <a id="selectMetro" class="f6 link dim ph3 pv2 ma1 dib white bg-light-red" href="/crags/seattle-washington-weather.html">Select Metro</a>
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
  var weekly_SEW_150_72 = {"updated":"2022-03-21T21:50:45+00:00","units":"us","forecastGenerator":"BaselineForecastGenerator","generatedAt":"2022-03-22T08:37:15+00:00","updateTime":"2022-03-21T21:50:45+00:00","validTimes":"2022-03-21T15:00:00+00:00/P7DT16H","elevation":{"unitCode":"wmoUnit:m","value":148.1328},"periods":[{"number":1,"name":"Overnight","startTime":"2022-03-22T01:00:00-07:00","endTime":"2022-03-22T06:00:00-07:00","isDaytime":false,"temperature":44,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"5 mph","windDirection":"NE","icon":"https://api.weather.gov/icons/land/night/rain,50?size=medium","shortForecast":"Chance Light Rain","detailedForecast":"A chance of rain before 5am, then areas of drizzle and a chance of rain. Cloudy, with a low around 44. Northeast wind around 5 mph. Chance of precipitation is 50%. New rainfall amounts between a tenth and quarter of an inch possible."},{"number":2,"name":"Tuesday","startTime":"2022-03-22T06:00:00-07:00","endTime":"2022-03-22T18:00:00-07:00","isDaytime":true,"temperature":57,"temperatureUnit":"F","temperatureTrend":"falling","windSpeed":"3 to 7 mph","windDirection":"NE","icon":"https://api.weather.gov/icons/land/day/rain,40/bkn?size=medium","shortForecast":"Areas Of Drizzle then Mostly Cloudy","detailedForecast":"Areas of drizzle and a chance of rain before 11am. Mostly cloudy. High near 57, with temperatures falling to around 55 in the afternoon. Northeast wind 3 to 7 mph. Chance of precipitation is 40%. New rainfall amounts less than a tenth of an inch possible."},{"number":3,"name":"Tuesday Night","startTime":"2022-03-22T18:00:00-07:00","endTime":"2022-03-23T06:00:00-07:00","isDaytime":false,"temperature":43,"temperatureUnit":"F","temperatureTrend":"rising","windSpeed":"6 to 9 mph","windDirection":"NNE","icon":"https://api.weather.gov/icons/land/night/sct/rain,20?size=medium","shortForecast":"Partly Cloudy then Slight Chance Light Rain","detailedForecast":"A slight chance of rain after 5am. Partly cloudy. Low around 43, with temperatures rising to around 45 overnight. North northeast wind 6 to 9 mph. Chance of precipitation is 20%."},{"number":4,"name":"Wednesday","startTime":"2022-03-23T06:00:00-07:00","endTime":"2022-03-23T18:00:00-07:00","isDaytime":true,"temperature":51,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"5 to 8 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/day/rain,60?size=medium","shortForecast":"Light Rain Likely","detailedForecast":"Rain likely. Mostly cloudy, with a high near 51. West wind 5 to 8 mph. Chance of precipitation is 60%. New rainfall amounts between a tenth and quarter of an inch possible."},{"number":5,"name":"Wednesday Night","startTime":"2022-03-23T18:00:00-07:00","endTime":"2022-03-24T06:00:00-07:00","isDaytime":false,"temperature":36,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"5 mph","windDirection":"SW","icon":"https://api.weather.gov/icons/land/night/rain,30/bkn?size=medium","shortForecast":"Chance Light Rain then Mostly Cloudy","detailedForecast":"A chance of rain before 11pm. Mostly cloudy, with a low around 36. Southwest wind around 5 mph. Chance of precipitation is 30%. New rainfall amounts less than a tenth of an inch possible."},{"number":6,"name":"Thursday","startTime":"2022-03-24T06:00:00-07:00","endTime":"2022-03-24T18:00:00-07:00","isDaytime":true,"temperature":52,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"3 to 9 mph","windDirection":"ESE","icon":"https://api.weather.gov/icons/land/day/bkn?size=medium","shortForecast":"Partly Sunny","detailedForecast":"Partly sunny, with a high near 52."},{"number":7,"name":"Thursday Night","startTime":"2022-03-24T18:00:00-07:00","endTime":"2022-03-25T06:00:00-07:00","isDaytime":false,"temperature":38,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"6 to 9 mph","windDirection":"ESE","icon":"https://api.weather.gov/icons/land/night/bkn?size=medium","shortForecast":"Mostly Cloudy","detailedForecast":"Mostly cloudy, with a low around 38."},{"number":8,"name":"Friday","startTime":"2022-03-25T06:00:00-07:00","endTime":"2022-03-25T18:00:00-07:00","isDaytime":true,"temperature":54,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"6 mph","windDirection":"SSW","icon":"https://api.weather.gov/icons/land/day/bkn/rain?size=medium","shortForecast":"Mostly Cloudy then Slight Chance Light Rain","detailedForecast":"A slight chance of rain after 5pm. Mostly cloudy, with a high near 54."},{"number":9,"name":"Friday Night","startTime":"2022-03-25T18:00:00-07:00","endTime":"2022-03-26T06:00:00-07:00","isDaytime":false,"temperature":40,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"5 mph","windDirection":"ESE","icon":"https://api.weather.gov/icons/land/night/rain?size=medium","shortForecast":"Chance Light Rain","detailedForecast":"A chance of rain. Mostly cloudy, with a low around 40."},{"number":10,"name":"Saturday","startTime":"2022-03-26T06:00:00-07:00","endTime":"2022-03-26T18:00:00-07:00","isDaytime":true,"temperature":52,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"5 mph","windDirection":"SSE","icon":"https://api.weather.gov/icons/land/day/rain/rain_showers?size=medium","shortForecast":"Chance Light Rain then Chance Rain Showers","detailedForecast":"A chance of rain before 11am, then a chance of rain showers. Mostly cloudy, with a high near 52."},{"number":11,"name":"Saturday Night","startTime":"2022-03-26T18:00:00-07:00","endTime":"2022-03-27T06:00:00-07:00","isDaytime":false,"temperature":38,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"5 mph","windDirection":"S","icon":"https://api.weather.gov/icons/land/night/rain_showers?size=medium","shortForecast":"Chance Rain Showers","detailedForecast":"A chance of rain showers. Mostly cloudy, with a low around 38."},{"number":12,"name":"Sunday","startTime":"2022-03-27T06:00:00-07:00","endTime":"2022-03-27T18:00:00-07:00","isDaytime":true,"temperature":50,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"5 mph","windDirection":"SSW","icon":"https://api.weather.gov/icons/land/day/rain?size=medium","shortForecast":"Chance Light Rain","detailedForecast":"A chance of rain showers before 11am, then a chance of rain. Mostly cloudy, with a high near 50."},{"number":13,"name":"Sunday Night","startTime":"2022-03-27T18:00:00-07:00","endTime":"2022-03-28T06:00:00-07:00","isDaytime":false,"temperature":36,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"5 mph","windDirection":"SW","icon":"https://api.weather.gov/icons/land/night/rain?size=medium","shortForecast":"Chance Light Rain","detailedForecast":"A chance of rain. Mostly cloudy, with a low around 36."},{"number":14,"name":"Monday","startTime":"2022-03-28T06:00:00-07:00","endTime":"2022-03-28T18:00:00-07:00","isDaytime":true,"temperature":48,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"6 mph","windDirection":"SW","icon":"https://api.weather.gov/icons/land/day/rain?size=medium","shortForecast":"Chance Light Rain","detailedForecast":"A chance of rain. Partly sunny, with a high near 48."}]}
  var hourly_SEW_150_72 = {"correlationId":"32c368f3","title":"Unexpected Problem","type":"https://api.weather.gov/problems/UnexpectedProblem","status":500,"detail":"An unexpected problem has occurred.","instance":"https://api.weather.gov/requests/32c368f3"}
  var crags_config = [
  {
    "name": "Index",
    "note": "Fine-grained granite",
    "mountainProject": "https://www.mountainproject.com/area/105790635/index",
    "station": "TSTEV",
    "office": "SEW/150,72",
    "coordinates": [
      -121.556,
      47.82
    ]
  }
]</script>

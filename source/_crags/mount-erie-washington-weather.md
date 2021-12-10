---
### THIS FILE IS AUTO-GENERATED - DO NOT EDIT ###
layout: page
title: Mount Erie, Washington Climbing Weather - Current, Past, and Forecasted Report
title_override: Mount Erie<br /><small>Climbing Weather</small>
description: A lightweight weather report for Mount Erie, Washington. Optimized for slow internet connections.
js_includes:
  - weather.js
---

<section class="measure center lh-copy f5-ns f6 ph2 mv4" style="text-align: justify;">
<strong>"Is it dry?"</strong>, an oft-repeated, age-old question. Here are real-time,
precipitation-focused reports of current, past, and forecasted climbing weather for Mount Erie, Washington.
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
<section id="weather" data-crag="mount-erie-washington" class="mv4-ns mv3 ph2 center"></section>
<section id="nearby" class="tc lh-copy">
  <h3>Nearby Crags</h3>
<a class="nowrap no-underline fancy-link relative light-red mh3" href="/crags/icicle-creek-washington-weather.html">Icicle Creek</a>
<a class="nowrap no-underline fancy-link relative light-red mh3" href="/crags/tieton-river-rock-washington-weather.html">Tieton River Rock</a>
<a class="nowrap no-underline fancy-link relative light-red mh3" href="/crags/vantage-washington-weather.html">Vantage</a>
<a class="nowrap no-underline fancy-link relative light-red mh3" href="/crags/index-washington-weather.html">Index</a>
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
  var weekly_SEW_123_109 = {"updated":"2021-12-06T10:53:54+00:00","units":"us","forecastGenerator":"BaselineForecastGenerator","generatedAt":"2021-12-06T13:52:11+00:00","updateTime":"2021-12-06T10:53:54+00:00","validTimes":"2021-12-06T04:00:00+00:00/P7DT21H","elevation":{"unitCode":"wmoUnit:m","value":238.9632},"periods":[{"number":1,"name":"Overnight","startTime":"2021-12-06T05:00:00-08:00","endTime":"2021-12-06T06:00:00-08:00","isDaytime":false,"temperature":34,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"9 mph","windDirection":"E","icon":"https://api.weather.gov/icons/land/night/snow,80?size=medium","shortForecast":"Rain And Snow","detailedForecast":"Rain and snow. Cloudy, with a low around 34. East wind around 9 mph. Chance of precipitation is 80%. Little or no snow accumulation expected."},{"number":2,"name":"Monday","startTime":"2021-12-06T06:00:00-08:00","endTime":"2021-12-06T18:00:00-08:00","isDaytime":true,"temperature":43,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"6 to 12 mph","windDirection":"ESE","icon":"https://api.weather.gov/icons/land/day/snow,80/snow,40?size=medium","shortForecast":"Rain And Snow","detailedForecast":"Rain and snow. Cloudy, with a high near 43. East southeast wind 6 to 12 mph. Chance of precipitation is 80%. Little or no snow accumulation expected."},{"number":3,"name":"Monday Night","startTime":"2021-12-06T18:00:00-08:00","endTime":"2021-12-07T06:00:00-08:00","isDaytime":false,"temperature":39,"temperatureUnit":"F","temperatureTrend":"rising","windSpeed":"6 mph","windDirection":"SSE","icon":"https://api.weather.gov/icons/land/night/rain,20?size=medium","shortForecast":"Slight Chance Light Rain","detailedForecast":"A slight chance of rain. Cloudy. Low around 39, with temperatures rising to around 42 overnight. South southeast wind around 6 mph. Chance of precipitation is 20%. New rainfall amounts less than a tenth of an inch possible."},{"number":4,"name":"Tuesday","startTime":"2021-12-07T06:00:00-08:00","endTime":"2021-12-07T18:00:00-08:00","isDaytime":true,"temperature":48,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"5 to 8 mph","windDirection":"SSE","icon":"https://api.weather.gov/icons/land/day/rain,30/rain,70?size=medium","shortForecast":"Light Rain Likely","detailedForecast":"Rain likely. Cloudy, with a high near 48. South southeast wind 5 to 8 mph. Chance of precipitation is 70%. New rainfall amounts less than a tenth of an inch possible."},{"number":5,"name":"Tuesday Night","startTime":"2021-12-07T18:00:00-08:00","endTime":"2021-12-08T06:00:00-08:00","isDaytime":false,"temperature":41,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"8 to 16 mph","windDirection":"SSW","icon":"https://api.weather.gov/icons/land/night/rain,90?size=medium","shortForecast":"Light Rain","detailedForecast":"Rain. Cloudy, with a low around 41. South southwest wind 8 to 16 mph, with gusts as high as 29 mph. Chance of precipitation is 90%. New rainfall amounts less than a tenth of an inch possible."},{"number":6,"name":"Wednesday","startTime":"2021-12-08T06:00:00-08:00","endTime":"2021-12-08T18:00:00-08:00","isDaytime":true,"temperature":47,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"10 to 16 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/day/rain,70/rain,60?size=medium","shortForecast":"Light Rain Likely","detailedForecast":"Rain likely. Mostly cloudy, with a high near 47. Chance of precipitation is 70%. New rainfall amounts less than a tenth of an inch possible."},{"number":7,"name":"Wednesday Night","startTime":"2021-12-08T18:00:00-08:00","endTime":"2021-12-09T06:00:00-08:00","isDaytime":false,"temperature":37,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"9 to 15 mph","windDirection":"WSW","icon":"https://api.weather.gov/icons/land/night/rain,60?size=medium","shortForecast":"Light Rain Likely","detailedForecast":"Rain likely. Mostly cloudy, with a low around 37. Chance of precipitation is 60%."},{"number":8,"name":"Thursday","startTime":"2021-12-09T06:00:00-08:00","endTime":"2021-12-09T18:00:00-08:00","isDaytime":true,"temperature":43,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"6 to 9 mph","windDirection":"SSW","icon":"https://api.weather.gov/icons/land/day/rain?size=medium","shortForecast":"Light Rain Likely","detailedForecast":"Rain likely. Mostly cloudy, with a high near 43."},{"number":9,"name":"Thursday Night","startTime":"2021-12-09T18:00:00-08:00","endTime":"2021-12-10T06:00:00-08:00","isDaytime":false,"temperature":35,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"7 mph","windDirection":"SSE","icon":"https://api.weather.gov/icons/land/night/snow?size=medium","shortForecast":"Chance Rain And Snow","detailedForecast":"A chance of rain before 7pm, then a chance of rain and snow. Mostly cloudy, with a low around 35."},{"number":10,"name":"Friday","startTime":"2021-12-10T06:00:00-08:00","endTime":"2021-12-10T18:00:00-08:00","isDaytime":true,"temperature":44,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"7 to 12 mph","windDirection":"SSE","icon":"https://api.weather.gov/icons/land/day/snow?size=medium","shortForecast":"Rain And Snow Likely","detailedForecast":"Rain and snow likely. Mostly cloudy, with a high near 44."},{"number":11,"name":"Friday Night","startTime":"2021-12-10T18:00:00-08:00","endTime":"2021-12-11T06:00:00-08:00","isDaytime":false,"temperature":39,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"10 to 29 mph","windDirection":"SSE","icon":"https://api.weather.gov/icons/land/night/rain?size=medium","shortForecast":"Rain","detailedForecast":"Rain. Cloudy, with a low around 39."},{"number":12,"name":"Saturday","startTime":"2021-12-11T06:00:00-08:00","endTime":"2021-12-11T18:00:00-08:00","isDaytime":true,"temperature":46,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"15 to 36 mph","windDirection":"S","icon":"https://api.weather.gov/icons/land/day/rain?size=medium","shortForecast":"Rain","detailedForecast":"Rain. Cloudy, with a high near 46."},{"number":13,"name":"Saturday Night","startTime":"2021-12-11T18:00:00-08:00","endTime":"2021-12-12T06:00:00-08:00","isDaytime":false,"temperature":38,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"10 to 15 mph","windDirection":"SSW","icon":"https://api.weather.gov/icons/land/night/rain?size=medium","shortForecast":"Light Rain","detailedForecast":"Rain. Cloudy, with a low around 38."},{"number":14,"name":"Sunday","startTime":"2021-12-12T06:00:00-08:00","endTime":"2021-12-12T18:00:00-08:00","isDaytime":true,"temperature":44,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"12 mph","windDirection":"SSE","icon":"https://api.weather.gov/icons/land/day/rain?size=medium","shortForecast":"Light Rain","detailedForecast":"Rain. Cloudy, with a high near 44."}]}
  var hourly_SEW_123_109 = {"correlationId":"ce9141bf","title":"Unexpected Problem","type":"https://api.weather.gov/problems/UnexpectedProblem","status":500,"detail":"An unexpected problem has occurred.","instance":"https://api.weather.gov/requests/ce9141bf"}
  var crags_config = [
  {
    "name": "Mount Erie",
    "note": "Highly textured and featured diorite.",
    "mountainProject": "https://www.mountainproject.com/area/106413714/mount-erie",
    "station": "KNUW",
    "office": "SEW/123,109",
    "coordinates": [
      -122.627,
      48.453
    ]
  }
]</script>

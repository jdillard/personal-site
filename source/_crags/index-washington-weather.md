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
  var weekly_SEW_150_72 = {"updated":"2020-12-11T12:44:59+00:00","units":"us","forecastGenerator":"BaselineForecastGenerator","generatedAt":"2020-12-11T15:56:48+00:00","updateTime":"2020-12-11T12:44:59+00:00","validTimes":"2020-12-11T06:00:00+00:00/P7DT19H","elevation":{"value":148.1328,"unitCode":"unit:m"},"periods":[{"number":1,"name":"Today","startTime":"2020-12-11T07:00:00-08:00","endTime":"2020-12-11T18:00:00-08:00","isDaytime":true,"temperature":39,"temperatureUnit":"F","temperatureTrend":"falling","windSpeed":"1 to 5 mph","windDirection":"NE","icon":"https://api.weather.gov/icons/land/day/rain,70?size=medium","shortForecast":"Light Rain Likely","detailedForecast":"Rain likely before 4pm, then a slight chance of rain showers. Mostly cloudy. High near 39, with temperatures falling to around 36 in the afternoon. Northeast wind 1 to 5 mph. Chance of precipitation is 70%. New rainfall amounts between a tenth and quarter of an inch possible."},{"number":2,"name":"Tonight","startTime":"2020-12-11T18:00:00-08:00","endTime":"2020-12-12T06:00:00-08:00","isDaytime":false,"temperature":31,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"2 to 7 mph","windDirection":"E","icon":"https://api.weather.gov/icons/land/night/rain_showers,20/few?size=medium","shortForecast":"Slight Chance Rain Showers then Mostly Clear","detailedForecast":"A slight chance of rain showers before 9pm. Mostly clear, with a low around 31. East wind 2 to 7 mph. Chance of precipitation is 20%. New rainfall amounts less than a tenth of an inch possible."},{"number":3,"name":"Saturday","startTime":"2020-12-12T06:00:00-08:00","endTime":"2020-12-12T18:00:00-08:00","isDaytime":true,"temperature":42,"temperatureUnit":"F","temperatureTrend":"falling","windSpeed":"6 to 14 mph","windDirection":"E","icon":"https://api.weather.gov/icons/land/day/sct?size=medium","shortForecast":"Mostly Sunny","detailedForecast":"Mostly sunny. High near 42, with temperatures falling to around 37 in the afternoon. East wind 6 to 14 mph."},{"number":4,"name":"Saturday Night","startTime":"2020-12-12T18:00:00-08:00","endTime":"2020-12-13T06:00:00-08:00","isDaytime":false,"temperature":34,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"14 to 20 mph","windDirection":"E","icon":"https://api.weather.gov/icons/land/night/snow,70/snow,80?size=medium","shortForecast":"Rain And Snow","detailedForecast":"Rain and snow after 10pm. Mostly cloudy, with a low around 34. East wind 14 to 20 mph, with gusts as high as 26 mph. Chance of precipitation is 80%. New rainfall amounts between a quarter and half of an inch possible."},{"number":5,"name":"Sunday","startTime":"2020-12-13T06:00:00-08:00","endTime":"2020-12-13T18:00:00-08:00","isDaytime":true,"temperature":41,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"5 to 17 mph","windDirection":"SE","icon":"https://api.weather.gov/icons/land/day/snow,80/snow,70?size=medium","shortForecast":"Rain And Snow","detailedForecast":"Rain and snow. Cloudy, with a high near 41. Southeast wind 5 to 17 mph, with gusts as high as 24 mph. Chance of precipitation is 80%. New rainfall amounts between a half and three quarters of an inch possible."},{"number":6,"name":"Sunday Night","startTime":"2020-12-13T18:00:00-08:00","endTime":"2020-12-14T06:00:00-08:00","isDaytime":false,"temperature":39,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"6 mph","windDirection":"S","icon":"https://api.weather.gov/icons/land/night/rain,60/rain,50?size=medium","shortForecast":"Light Rain Likely","detailedForecast":"Rain likely. Cloudy, with a low around 39. Chance of precipitation is 60%. New rainfall amounts between a half and three quarters of an inch possible."},{"number":7,"name":"Monday","startTime":"2020-12-14T06:00:00-08:00","endTime":"2020-12-14T18:00:00-08:00","isDaytime":true,"temperature":41,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"3 to 7 mph","windDirection":"SSW","icon":"https://api.weather.gov/icons/land/day/rain,40?size=medium","shortForecast":"Chance Light Rain","detailedForecast":"A chance of rain. Cloudy, with a high near 41. Chance of precipitation is 40%."},{"number":8,"name":"Monday Night","startTime":"2020-12-14T18:00:00-08:00","endTime":"2020-12-15T06:00:00-08:00","isDaytime":false,"temperature":38,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"8 mph","windDirection":"SE","icon":"https://api.weather.gov/icons/land/night/rain?size=medium","shortForecast":"Rain","detailedForecast":"Rain. Mostly cloudy, with a low around 38."},{"number":9,"name":"Tuesday","startTime":"2020-12-15T06:00:00-08:00","endTime":"2020-12-15T18:00:00-08:00","isDaytime":true,"temperature":41,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"9 mph","windDirection":"SE","icon":"https://api.weather.gov/icons/land/day/rain?size=medium","shortForecast":"Rain","detailedForecast":"Rain. Cloudy, with a high near 41."},{"number":10,"name":"Tuesday Night","startTime":"2020-12-15T18:00:00-08:00","endTime":"2020-12-16T06:00:00-08:00","isDaytime":false,"temperature":40,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"9 mph","windDirection":"S","icon":"https://api.weather.gov/icons/land/night/rain?size=medium","shortForecast":"Rain Likely","detailedForecast":"Rain likely. Cloudy, with a low around 40."},{"number":11,"name":"Wednesday","startTime":"2020-12-16T06:00:00-08:00","endTime":"2020-12-16T18:00:00-08:00","isDaytime":true,"temperature":43,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"8 mph","windDirection":"S","icon":"https://api.weather.gov/icons/land/day/rain?size=medium","shortForecast":"Rain Likely","detailedForecast":"Rain likely. Cloudy, with a high near 43."},{"number":12,"name":"Wednesday Night","startTime":"2020-12-16T18:00:00-08:00","endTime":"2020-12-17T06:00:00-08:00","isDaytime":false,"temperature":41,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"7 mph","windDirection":"S","icon":"https://api.weather.gov/icons/land/night/rain?size=medium","shortForecast":"Rain Likely","detailedForecast":"Rain likely. Cloudy, with a low around 41."},{"number":13,"name":"Thursday","startTime":"2020-12-17T06:00:00-08:00","endTime":"2020-12-17T18:00:00-08:00","isDaytime":true,"temperature":43,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"8 mph","windDirection":"SSW","icon":"https://api.weather.gov/icons/land/day/rain?size=medium","shortForecast":"Rain Likely","detailedForecast":"Rain likely. Cloudy, with a high near 43."},{"number":14,"name":"Thursday Night","startTime":"2020-12-17T18:00:00-08:00","endTime":"2020-12-18T06:00:00-08:00","isDaytime":false,"temperature":40,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"9 mph","windDirection":"SSW","icon":"https://api.weather.gov/icons/land/night/rain?size=medium","shortForecast":"Chance Rain","detailedForecast":"A chance of rain. Mostly cloudy, with a low around 40."}]}
  var hourly_SEW_150_72 = {"correlationId":"2a437390","title":"Forecast Grid Expired","type":"https://api.weather.gov/problems/ForecastGridExpired","status":503,"detail":"The requested forecast grid was issued 2020-12-01T10:56:38+00:00 and has expired.","instance":"https://api.weather.gov/requests/2a437390"}
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

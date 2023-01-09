---
### THIS FILE IS AUTO-GENERATED - DO NOT EDIT ###
layout: page
title: Smith Rock, Oregon Climbing Weather - Current, Past, and Forecasted Report
title_override: Smith Rock<br /><small>Climbing Weather</small>
description: A lightweight weather report for Smith Rock, Oregon. Optimized for slow internet connections.
js_includes:
  - weather.js
---

<section class="measure center lh-copy f5-ns f6 ph2 mv4" style="text-align: justify;">
<strong>"Is it dry?"</strong>, an oft-repeated, age-old question. Here are real-time,
precipitation-focused reports of current, past, and forecasted climbing weather for Smith Rock, Oregon.
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
<section id="weather" data-crag="smith-rock-oregon" class="mv4-ns mv3 ph2 center"></section>
<section id="nearby" class="tc lh-copy">
  <h3>Nearby Crags</h3>
<a class="nowrap no-underline fancy-link relative light-red mh3" href="/crags/icicle-creek-washington-weather.html">Icicle Creek</a>
<a class="nowrap no-underline fancy-link relative light-red mh3" href="/crags/tieton-river-rock-washington-weather.html">Tieton River Rock</a>
<a class="nowrap no-underline fancy-link relative light-red mh3" href="/crags/vantage-washington-weather.html">Vantage</a>
<a class="nowrap no-underline fancy-link relative light-red mh3" href="/crags/mount-erie-washington-weather.html">Mount Erie</a>
<a class="nowrap no-underline fancy-link relative light-red mh3" href="/crags/index-washington-weather.html">Index</a>
<a class="nowrap no-underline fancy-link relative light-red mh3" href="/crags/darrington-washington-weather.html">Darrington</a>
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
  var weekly_PDT_43_53 = {"updated":"2023-01-09T07:42:05+00:00","units":"us","forecastGenerator":"BaselineForecastGenerator","generatedAt":"2023-01-09T08:36:59+00:00","updateTime":"2023-01-09T07:42:05+00:00","validTimes":"2023-01-09T01:00:00+00:00/P7DT13H","elevation":{"unitCode":"wmoUnit:m","value":791.8704},"periods":[{"number":1,"name":"Overnight","startTime":"2023-01-09T00:00:00-08:00","endTime":"2023-01-09T06:00:00-08:00","isDaytime":false,"temperature":36,"temperatureUnit":"F","temperatureTrend":"rising","windSpeed":"13 to 20 mph","windDirection":"SE","icon":"https://api.weather.gov/icons/land/night/snow,80?size=medium","shortForecast":"Rain And Snow","detailedForecast":"Rain and snow after 1am. Mostly cloudy. Low around 36, with temperatures rising to around 39 overnight. Southeast wind 13 to 20 mph, with gusts as high as 38 mph. Chance of precipitation is 80%. New rainfall amounts less than a tenth of an inch possible."},{"number":2,"name":"Monday","startTime":"2023-01-09T06:00:00-08:00","endTime":"2023-01-09T18:00:00-08:00","isDaytime":true,"temperature":47,"temperatureUnit":"F","temperatureTrend":"falling","windSpeed":"12 to 20 mph","windDirection":"S","icon":"https://api.weather.gov/icons/land/day/snow,80/snow,20?size=medium","shortForecast":"Rain And Snow","detailedForecast":"Rain and snow before 4pm. Mostly cloudy. High near 47, with temperatures falling to around 42 in the afternoon. South wind 12 to 20 mph, with gusts as high as 38 mph. Chance of precipitation is 80%. New rainfall amounts less than a tenth of an inch possible."},{"number":3,"name":"Monday Night","startTime":"2023-01-09T18:00:00-08:00","endTime":"2023-01-10T06:00:00-08:00","isDaytime":false,"temperature":32,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"9 to 14 mph","windDirection":"S","icon":"https://api.weather.gov/icons/land/night/sct?size=medium","shortForecast":"Partly Cloudy","detailedForecast":"Partly cloudy, with a low around 32. South wind 9 to 14 mph, with gusts as high as 21 mph."},{"number":4,"name":"Tuesday","startTime":"2023-01-10T06:00:00-08:00","endTime":"2023-01-10T18:00:00-08:00","isDaytime":true,"temperature":42,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"8 to 15 mph","windDirection":"SE","icon":"https://api.weather.gov/icons/land/day/snow,20?size=medium","shortForecast":"Slight Chance Light Snow","detailedForecast":"A slight chance of snow between 10am and 1pm, then a slight chance of rain between 1pm and 4pm. Mostly cloudy, with a high near 42. Southeast wind 8 to 15 mph, with gusts as high as 23 mph. Chance of precipitation is 20%."},{"number":5,"name":"Tuesday Night","startTime":"2023-01-10T18:00:00-08:00","endTime":"2023-01-11T06:00:00-08:00","isDaytime":false,"temperature":28,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"5 to 8 mph","windDirection":"SE","icon":"https://api.weather.gov/icons/land/night/bkn?size=medium","shortForecast":"Mostly Cloudy","detailedForecast":"Mostly cloudy, with a low around 28. Southeast wind 5 to 8 mph."},{"number":6,"name":"Wednesday","startTime":"2023-01-11T06:00:00-08:00","endTime":"2023-01-11T18:00:00-08:00","isDaytime":true,"temperature":45,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"7 to 13 mph","windDirection":"SE","icon":"https://api.weather.gov/icons/land/day/snow,50/snow,80?size=medium","shortForecast":"Rain And Snow","detailedForecast":"Rain and snow after 10am. Partly sunny, with a high near 45. Chance of precipitation is 80%."},{"number":7,"name":"Wednesday Night","startTime":"2023-01-11T18:00:00-08:00","endTime":"2023-01-12T06:00:00-08:00","isDaytime":false,"temperature":37,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"15 mph","windDirection":"SE","icon":"https://api.weather.gov/icons/land/night/rain,80?size=medium","shortForecast":"Light Rain","detailedForecast":"Rain. Mostly cloudy, with a low around 37. Chance of precipitation is 80%."},{"number":8,"name":"Thursday","startTime":"2023-01-12T06:00:00-08:00","endTime":"2023-01-12T18:00:00-08:00","isDaytime":true,"temperature":50,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"16 mph","windDirection":"SE","icon":"https://api.weather.gov/icons/land/day/rain,40/rain,20?size=medium","shortForecast":"Chance Light Rain","detailedForecast":"A chance of rain. Mostly cloudy, with a high near 50. Chance of precipitation is 40%."},{"number":9,"name":"Thursday Night","startTime":"2023-01-12T18:00:00-08:00","endTime":"2023-01-13T06:00:00-08:00","isDaytime":false,"temperature":38,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"12 to 15 mph","windDirection":"SE","icon":"https://api.weather.gov/icons/land/night/rain,20?size=medium","shortForecast":"Slight Chance Light Rain","detailedForecast":"A slight chance of rain. Mostly cloudy, with a low around 38. Chance of precipitation is 20%."},{"number":10,"name":"Friday","startTime":"2023-01-13T06:00:00-08:00","endTime":"2023-01-13T18:00:00-08:00","isDaytime":true,"temperature":51,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"10 to 14 mph","windDirection":"SE","icon":"https://api.weather.gov/icons/land/day/rain?size=medium","shortForecast":"Slight Chance Light Rain","detailedForecast":"A slight chance of rain. Mostly cloudy, with a high near 51."},{"number":11,"name":"Friday Night","startTime":"2023-01-13T18:00:00-08:00","endTime":"2023-01-14T06:00:00-08:00","isDaytime":false,"temperature":35,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"8 to 14 mph","windDirection":"SE","icon":"https://api.weather.gov/icons/land/night/rain?size=medium","shortForecast":"Slight Chance Light Rain","detailedForecast":"A slight chance of rain. Mostly cloudy, with a low around 35."},{"number":12,"name":"Saturday","startTime":"2023-01-14T06:00:00-08:00","endTime":"2023-01-14T18:00:00-08:00","isDaytime":true,"temperature":48,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"12 mph","windDirection":"SE","icon":"https://api.weather.gov/icons/land/day/rain?size=medium","shortForecast":"Chance Light Rain","detailedForecast":"A chance of rain. Mostly cloudy, with a high near 48."},{"number":13,"name":"Saturday Night","startTime":"2023-01-14T18:00:00-08:00","endTime":"2023-01-15T06:00:00-08:00","isDaytime":false,"temperature":32,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"6 to 9 mph","windDirection":"SE","icon":"https://api.weather.gov/icons/land/night/rain?size=medium","shortForecast":"Chance Light Rain","detailedForecast":"A chance of rain. Mostly cloudy, with a low around 32."},{"number":14,"name":"Sunday","startTime":"2023-01-15T06:00:00-08:00","endTime":"2023-01-15T18:00:00-08:00","isDaytime":true,"temperature":46,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"6 to 9 mph","windDirection":"S","icon":"https://api.weather.gov/icons/land/day/rain?size=medium","shortForecast":"Chance Light Rain","detailedForecast":"A chance of rain. Partly sunny, with a high near 46."}]}
  var hourly_PDT_43_53 = false
  var crags_config = [
  {
    "name": "Smith Rock",
    "note": "Volcanic welded tuff with surrounding bands of columnar basalt.",
    "mountainProject": "https://www.mountainproject.com/area/105788989/smith-rock",
    "station": "KRDM",
    "office": "PDT/43,53",
    "coordinates": [
      -121.143,
      44.366
    ]
  }
]</script>

---
### THIS FILE IS AUTO-GENERATED - DO NOT EDIT ###
layout: page
title: Icicle Creek, Washington Climbing Weather - Current, Past, and Forecasted Report
title_override: Icicle Creek<br /><small>Climbing Weather</small>
description: A lightweight weather report for Icicle Creek, Washington. Optimized for slow internet connections.
js_includes:
  - weather.js
---

<section class="measure center lh-copy f5-ns f6 ph2 mv4" style="text-align: justify;">
<strong>"Is it dry?"</strong>, an oft-repeated, age-old question. Here are real-time,
precipitation-focused reports of current, past, and forecasted climbing weather for Icicle Creek, Washington.
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
<section id="weather" data-crag="icicle-creek-washington" class="mv4-ns mv3 ph2 center"></section>
<section id="nearby" class="tc lh-copy">
  <h3>Nearby Crags</h3>
<a class="nowrap no-underline fancy-link relative light-red mh3" href="/crags/tieton-river-rock-washington-weather.html">Tieton River Rock</a>
<a class="nowrap no-underline fancy-link relative light-red mh3" href="/crags/vantage-washington-weather.html">Vantage</a>
<a class="nowrap no-underline fancy-link relative light-red mh3" href="/crags/mount-erie-washington-weather.html">Mount Erie</a>
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
  var weekly_OTX_35_103 = {"updated":"2022-12-20T06:04:37+00:00","units":"us","forecastGenerator":"BaselineForecastGenerator","generatedAt":"2022-12-20T08:36:04+00:00","updateTime":"2022-12-20T06:04:37+00:00","validTimes":"2022-12-20T00:00:00+00:00/P7DT4H","elevation":{"unitCode":"wmoUnit:m","value":627.888},"periods":[{"number":1,"name":"Overnight","startTime":"2022-12-20T00:00:00-08:00","endTime":"2022-12-20T06:00:00-08:00","isDaytime":false,"temperature":7,"temperatureUnit":"F","temperatureTrend":"rising","windSpeed":"5 mph","windDirection":"E","icon":"https://api.weather.gov/icons/land/night/snow,80?size=medium","shortForecast":"Snow","detailedForecast":"Snow. Mostly cloudy. Low around 7, with temperatures rising to around 10 overnight. East wind around 5 mph. Chance of precipitation is 80%. New snow accumulation of 2 to 4 inches possible."},{"number":2,"name":"Tuesday","startTime":"2022-12-20T06:00:00-08:00","endTime":"2022-12-20T18:00:00-08:00","isDaytime":true,"temperature":16,"temperatureUnit":"F","temperatureTrend":"falling","windSpeed":"6 mph","windDirection":"E","icon":"https://api.weather.gov/icons/land/day/snow,90?size=medium","shortForecast":"Heavy Snow","detailedForecast":"Snow. Cloudy. High near 16, with temperatures falling to around 13 in the afternoon. East wind around 6 mph. Chance of precipitation is 90%. New snow accumulation of 5 to 9 inches possible."},{"number":3,"name":"Tuesday Night","startTime":"2022-12-20T18:00:00-08:00","endTime":"2022-12-21T06:00:00-08:00","isDaytime":false,"temperature":3,"temperatureUnit":"F","temperatureTrend":"rising","windSpeed":"6 mph","windDirection":"N","icon":"https://api.weather.gov/icons/land/night/snow,50/snow,20?size=medium","shortForecast":"Chance Light Snow","detailedForecast":"A chance of snow before 4am. Mostly cloudy. Low around 3, with temperatures rising to around 5 overnight. Wind chill values as low as -2. North wind around 6 mph, with gusts as high as 18 mph. Chance of precipitation is 50%. New snow accumulation of around one inch possible."},{"number":4,"name":"Wednesday","startTime":"2022-12-21T06:00:00-08:00","endTime":"2022-12-21T18:00:00-08:00","isDaytime":true,"temperature":13,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"6 mph","windDirection":"NE","icon":"https://api.weather.gov/icons/land/day/bkn?size=medium","shortForecast":"Partly Sunny","detailedForecast":"Partly sunny, with a high near 13. Wind chill values as low as -8. Northeast wind around 6 mph."},{"number":5,"name":"Wednesday Night","startTime":"2022-12-21T18:00:00-08:00","endTime":"2022-12-22T06:00:00-08:00","isDaytime":false,"temperature":-10,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"5 mph","windDirection":"E","icon":"https://api.weather.gov/icons/land/night/cold?size=medium","shortForecast":"Partly Cloudy","detailedForecast":"Partly cloudy, with a low around -10. East wind around 5 mph."},{"number":6,"name":"Thursday","startTime":"2022-12-22T06:00:00-08:00","endTime":"2022-12-22T18:00:00-08:00","isDaytime":true,"temperature":3,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"7 mph","windDirection":"E","icon":"https://api.weather.gov/icons/land/day/cold/snow,20?size=medium","shortForecast":"Partly Sunny then Slight Chance Light Snow","detailedForecast":"A slight chance of snow after 4pm. Partly sunny, with a high near 3. Chance of precipitation is 20%."},{"number":7,"name":"Thursday Night","startTime":"2022-12-22T18:00:00-08:00","endTime":"2022-12-23T06:00:00-08:00","isDaytime":false,"temperature":-2,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"7 mph","windDirection":"E","icon":"https://api.weather.gov/icons/land/night/snow,30/snow,50?size=medium","shortForecast":"Chance Snow","detailedForecast":"A chance of snow. Mostly cloudy, with a low around -2. Chance of precipitation is 50%. New snow accumulation of 2 to 4 inches possible."},{"number":8,"name":"Friday","startTime":"2022-12-23T06:00:00-08:00","endTime":"2022-12-23T18:00:00-08:00","isDaytime":true,"temperature":14,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"7 mph","windDirection":"E","icon":"https://api.weather.gov/icons/land/day/snow,50?size=medium","shortForecast":"Chance Snow","detailedForecast":"A chance of snow. Mostly cloudy, with a high near 14. Chance of precipitation is 50%. New snow accumulation of 2 to 4 inches possible."},{"number":9,"name":"Friday Night","startTime":"2022-12-23T18:00:00-08:00","endTime":"2022-12-24T06:00:00-08:00","isDaytime":false,"temperature":10,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"7 mph","windDirection":"E","icon":"https://api.weather.gov/icons/land/night/snow,40/snow,50?size=medium","shortForecast":"Chance Snow","detailedForecast":"A chance of snow. Mostly cloudy, with a low around 10. Chance of precipitation is 50%. New snow accumulation of 3 to 5 inches possible."},{"number":10,"name":"Saturday","startTime":"2022-12-24T06:00:00-08:00","endTime":"2022-12-24T18:00:00-08:00","isDaytime":true,"temperature":31,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"6 mph","windDirection":"E","icon":"https://api.weather.gov/icons/land/day/snow,60?size=medium","shortForecast":"Heavy Snow Likely","detailedForecast":"Snow likely. Mostly cloudy, with a high near 31. Chance of precipitation is 60%. New snow accumulation of 8 to 12 inches possible."},{"number":11,"name":"Saturday Night","startTime":"2022-12-24T18:00:00-08:00","endTime":"2022-12-25T06:00:00-08:00","isDaytime":false,"temperature":22,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"8 mph","windDirection":"SW","icon":"https://api.weather.gov/icons/land/night/snow,60/snow_fzra,50?size=medium","shortForecast":"Heavy Snow Likely","detailedForecast":"Snow likely before 1am, then a chance of snow and a chance of freezing rain between 1am and 4am, then a chance of freezing rain and a slight chance of snow. Mostly cloudy, with a low around 22. Chance of precipitation is 60%. New snow accumulation of 6 to 10 inches possible. New ice accumulation of less than half an inch possible."},{"number":12,"name":"Christmas Day","startTime":"2022-12-25T06:00:00-08:00","endTime":"2022-12-25T18:00:00-08:00","isDaytime":true,"temperature":38,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"7 mph","windDirection":"SW","icon":"https://api.weather.gov/icons/land/day/snow_fzra,50/rain_fzra,60?size=medium","shortForecast":"Chance Freezing Rain then Rain Likely","detailedForecast":"A chance of freezing rain and a slight chance of snow before 10am, then a chance of rain between 10am and 4pm, then rain likely and a slight chance of freezing rain. Mostly cloudy, with a high near 38. Chance of precipitation is 60%. New snow accumulation of less than one inch possible. New ice accumulation of less than half an inch possible."},{"number":13,"name":"Sunday Night","startTime":"2022-12-25T18:00:00-08:00","endTime":"2022-12-26T06:00:00-08:00","isDaytime":false,"temperature":31,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"6 mph","windDirection":"S","icon":"https://api.weather.gov/icons/land/night/rain_fzra,60?size=medium","shortForecast":"Rain Likely","detailedForecast":"Rain likely and a chance of freezing rain. Mostly cloudy, with a low around 31. Chance of precipitation is 60%. Little or no ice accumulation expected."},{"number":14,"name":"Monday","startTime":"2022-12-26T06:00:00-08:00","endTime":"2022-12-26T18:00:00-08:00","isDaytime":true,"temperature":39,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"7 mph","windDirection":"SW","icon":"https://api.weather.gov/icons/land/day/rain,50?size=medium","shortForecast":"Chance Light Rain","detailedForecast":"A chance of rain before 5pm. Mostly cloudy, with a high near 39. Chance of precipitation is 50%. Little or no ice accumulation expected."}]}
  var hourly_OTX_35_103 = false
  var crags_config = [
  {
    "name": "Icicle Creek",
    "note": "Granite, so exposed areas dry fast.",
    "mountainProject": "https://www.mountainproject.com/area/105790237/icicle-creek",
    "station": "KEAT",
    "office": "OTX/35,103",
    "coordinates": [
      -120.711,
      47.543
    ]
  }
]</script>

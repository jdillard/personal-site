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
  var weekly_OTX_35_103 = {"updated":"2022-11-24T07:36:04+00:00","units":"us","forecastGenerator":"BaselineForecastGenerator","generatedAt":"2022-11-24T08:37:40+00:00","updateTime":"2022-11-24T07:36:04+00:00","validTimes":"2022-11-24T01:00:00+00:00/P7DT3H","elevation":{"unitCode":"wmoUnit:m","value":627.888},"periods":[{"number":1,"name":"Overnight","startTime":"2022-11-24T00:00:00-08:00","endTime":"2022-11-24T06:00:00-08:00","isDaytime":false,"temperature":27,"temperatureUnit":"F","temperatureTrend":"rising","windSpeed":"5 mph","windDirection":"NE","icon":"https://api.weather.gov/icons/land/night/fog?size=medium","shortForecast":"Areas Of Fog","detailedForecast":"Areas of fog. Mostly cloudy. Low around 27, with temperatures rising to around 29 overnight. Northeast wind around 5 mph."},{"number":2,"name":"Thanksgiving Day","startTime":"2022-11-24T06:00:00-08:00","endTime":"2022-11-24T18:00:00-08:00","isDaytime":true,"temperature":38,"temperatureUnit":"F","temperatureTrend":"falling","windSpeed":"6 mph","windDirection":"E","icon":"https://api.weather.gov/icons/land/day/fog?size=medium","shortForecast":"Areas Of Fog","detailedForecast":"Areas of fog. Partly sunny. High near 38, with temperatures falling to around 32 in the afternoon. East wind around 6 mph."},{"number":3,"name":"Thursday Night","startTime":"2022-11-24T18:00:00-08:00","endTime":"2022-11-25T06:00:00-08:00","isDaytime":false,"temperature":30,"temperatureUnit":"F","temperatureTrend":"rising","windSpeed":"6 mph","windDirection":"SW","icon":"https://api.weather.gov/icons/land/night/fog/rain,40?size=medium","shortForecast":"Areas Of Fog then Chance Light Rain","detailedForecast":"Areas of fog before 4am, then a chance of rain. Mostly cloudy. Low around 30, with temperatures rising to around 37 overnight. Southwest wind around 6 mph. Chance of precipitation is 40%."},{"number":4,"name":"Friday","startTime":"2022-11-25T06:00:00-08:00","endTime":"2022-11-25T18:00:00-08:00","isDaytime":true,"temperature":43,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"6 to 9 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/day/rain,40?size=medium","shortForecast":"Chance Light Rain","detailedForecast":"A chance of rain before 4pm. Mostly cloudy, with a high near 43. West wind 6 to 9 mph. Chance of precipitation is 40%. New rainfall amounts less than a tenth of an inch possible."},{"number":5,"name":"Friday Night","startTime":"2022-11-25T18:00:00-08:00","endTime":"2022-11-26T06:00:00-08:00","isDaytime":false,"temperature":31,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"8 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/night/sct?size=medium","shortForecast":"Partly Cloudy","detailedForecast":"Partly cloudy, with a low around 31. West wind around 8 mph."},{"number":6,"name":"Saturday","startTime":"2022-11-26T06:00:00-08:00","endTime":"2022-11-26T18:00:00-08:00","isDaytime":true,"temperature":39,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"8 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/day/snow,20/snow,40?size=medium","shortForecast":"Slight Chance Light Snow","detailedForecast":"A slight chance of snow between 10am and 1pm, then a chance of rain. Partly sunny, with a high near 39. Chance of precipitation is 40%."},{"number":7,"name":"Saturday Night","startTime":"2022-11-26T18:00:00-08:00","endTime":"2022-11-27T06:00:00-08:00","isDaytime":false,"temperature":34,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"7 to 21 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/night/snow,50/snow,60?size=medium","shortForecast":"Rain And Snow Likely","detailedForecast":"A chance of rain before 7pm, then rain and snow likely. Mostly cloudy, with a low around 34. Chance of precipitation is 60%. New snow accumulation of less than half an inch possible."},{"number":8,"name":"Sunday","startTime":"2022-11-27T06:00:00-08:00","endTime":"2022-11-27T18:00:00-08:00","isDaytime":true,"temperature":37,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"8 to 21 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/day/snow,60?size=medium","shortForecast":"Rain And Snow Likely","detailedForecast":"Rain and snow likely. Mostly cloudy, with a high near 37. Chance of precipitation is 60%. New snow accumulation of 1 to 2 inches possible."},{"number":9,"name":"Sunday Night","startTime":"2022-11-27T18:00:00-08:00","endTime":"2022-11-28T06:00:00-08:00","isDaytime":false,"temperature":24,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"8 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/night/snow,50/snow,40?size=medium","shortForecast":"Chance Light Snow","detailedForecast":"A chance of snow. Mostly cloudy, with a low around 24. Chance of precipitation is 50%. New snow accumulation of less than half an inch possible."},{"number":10,"name":"Monday","startTime":"2022-11-28T06:00:00-08:00","endTime":"2022-11-28T18:00:00-08:00","isDaytime":true,"temperature":31,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"2 to 8 mph","windDirection":"NW","icon":"https://api.weather.gov/icons/land/day/snow,20/bkn?size=medium","shortForecast":"Slight Chance Light Snow then Partly Sunny","detailedForecast":"A slight chance of snow before 10am. Partly sunny, with a high near 31. Chance of precipitation is 20%."},{"number":11,"name":"Monday Night","startTime":"2022-11-28T18:00:00-08:00","endTime":"2022-11-29T06:00:00-08:00","isDaytime":false,"temperature":19,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"6 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/night/snow,20?size=medium","shortForecast":"Slight Chance Light Snow","detailedForecast":"A slight chance of snow after 10pm. Mostly cloudy, with a low around 19. Chance of precipitation is 20%."},{"number":12,"name":"Tuesday","startTime":"2022-11-29T06:00:00-08:00","endTime":"2022-11-29T18:00:00-08:00","isDaytime":true,"temperature":28,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"6 mph","windDirection":"S","icon":"https://api.weather.gov/icons/land/day/snow,30/snow,50?size=medium","shortForecast":"Chance Light Snow","detailedForecast":"A chance of snow. Partly sunny, with a high near 28. Chance of precipitation is 50%."},{"number":13,"name":"Tuesday Night","startTime":"2022-11-29T18:00:00-08:00","endTime":"2022-11-30T06:00:00-08:00","isDaytime":false,"temperature":23,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"7 mph","windDirection":"SW","icon":"https://api.weather.gov/icons/land/night/snow,50?size=medium","shortForecast":"Chance Light Snow","detailedForecast":"A chance of snow. Mostly cloudy, with a low around 23. Chance of precipitation is 50%."},{"number":14,"name":"Wednesday","startTime":"2022-11-30T06:00:00-08:00","endTime":"2022-11-30T18:00:00-08:00","isDaytime":true,"temperature":32,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"9 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/day/snow,50/snow,40?size=medium","shortForecast":"Chance Light Snow","detailedForecast":"A chance of snow before 5pm. Mostly cloudy, with a high near 32. Chance of precipitation is 50%."}]}
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

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
  var weekly_OTX_35_103 = {"updated":"2021-12-20T05:46:34+00:00","units":"us","forecastGenerator":"BaselineForecastGenerator","generatedAt":"2021-12-20T08:05:29+00:00","updateTime":"2021-12-20T05:46:34+00:00","validTimes":"2021-12-19T23:00:00+00:00/P7DT15H","elevation":{"unitCode":"wmoUnit:m","value":627.888},"periods":[{"number":1,"name":"Overnight","startTime":"2021-12-20T00:00:00-08:00","endTime":"2021-12-20T06:00:00-08:00","isDaytime":false,"temperature":19,"temperatureUnit":"F","temperatureTrend":"rising","windSpeed":"3 mph","windDirection":"SE","icon":"https://api.weather.gov/icons/land/night/snow,50?size=medium","shortForecast":"Chance Light Snow","detailedForecast":"A chance of snow after 1am. Mostly cloudy. Low around 19, with temperatures rising to around 21 overnight. Southeast wind around 3 mph. Chance of precipitation is 50%. New snow accumulation of less than one inch possible."},{"number":2,"name":"Monday","startTime":"2021-12-20T06:00:00-08:00","endTime":"2021-12-20T18:00:00-08:00","isDaytime":true,"temperature":29,"temperatureUnit":"F","temperatureTrend":"falling","windSpeed":"3 mph","windDirection":"E","icon":"https://api.weather.gov/icons/land/day/snow,80/snow,70?size=medium","shortForecast":"Light Snow","detailedForecast":"Snow. Mostly cloudy. High near 29, with temperatures falling to around 26 in the afternoon. East wind around 3 mph. Chance of precipitation is 80%. New snow accumulation of 1 to 2 inches possible."},{"number":3,"name":"Monday Night","startTime":"2021-12-20T18:00:00-08:00","endTime":"2021-12-21T06:00:00-08:00","isDaytime":false,"temperature":21,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"3 mph","windDirection":"E","icon":"https://api.weather.gov/icons/land/night/snow,30/bkn?size=medium","shortForecast":"Chance Light Snow then Mostly Cloudy","detailedForecast":"A chance of snow before 10pm. Mostly cloudy, with a low around 21. East wind around 3 mph. Chance of precipitation is 30%. New snow accumulation of less than half an inch possible."},{"number":4,"name":"Tuesday","startTime":"2021-12-21T06:00:00-08:00","endTime":"2021-12-21T18:00:00-08:00","isDaytime":true,"temperature":36,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"3 mph","windDirection":"SW","icon":"https://api.weather.gov/icons/land/day/snow,20/snow,80?size=medium","shortForecast":"Slight Chance Light Snow","detailedForecast":"A slight chance of snow between 10am and 1pm, then rain and snow. Partly sunny, with a high near 36. Southwest wind around 3 mph. Chance of precipitation is 80%. New rainfall amounts less than a tenth of an inch possible."},{"number":5,"name":"Tuesday Night","startTime":"2021-12-21T18:00:00-08:00","endTime":"2021-12-22T06:00:00-08:00","isDaytime":false,"temperature":29,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"5 mph","windDirection":"SW","icon":"https://api.weather.gov/icons/land/night/snow,80?size=medium","shortForecast":"Rain And Snow","detailedForecast":"Rain and snow. Mostly cloudy, with a low around 29. Southwest wind around 5 mph. Chance of precipitation is 80%. New rainfall amounts between a tenth and quarter of an inch possible."},{"number":6,"name":"Wednesday","startTime":"2021-12-22T06:00:00-08:00","endTime":"2021-12-22T18:00:00-08:00","isDaytime":true,"temperature":37,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"5 mph","windDirection":"SW","icon":"https://api.weather.gov/icons/land/day/snow,80/snow,70?size=medium","shortForecast":"Rain And Snow","detailedForecast":"Rain and snow. Mostly cloudy, with a high near 37. Chance of precipitation is 80%. New snow accumulation of less than one inch possible."},{"number":7,"name":"Wednesday Night","startTime":"2021-12-22T18:00:00-08:00","endTime":"2021-12-23T06:00:00-08:00","isDaytime":false,"temperature":26,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"3 to 8 mph","windDirection":"SW","icon":"https://api.weather.gov/icons/land/night/snow,70/snow,60?size=medium","shortForecast":"Rain And Snow Likely","detailedForecast":"Rain and snow likely. Mostly cloudy, with a low around 26. Chance of precipitation is 70%. New snow accumulation of less than one inch possible."},{"number":8,"name":"Thursday","startTime":"2021-12-23T06:00:00-08:00","endTime":"2021-12-23T18:00:00-08:00","isDaytime":true,"temperature":34,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"8 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/day/snow,50?size=medium","shortForecast":"Chance Light Snow","detailedForecast":"A chance of snow. Partly sunny, with a high near 34. Chance of precipitation is 50%. New snow accumulation of less than half an inch possible."},{"number":9,"name":"Thursday Night","startTime":"2021-12-23T18:00:00-08:00","endTime":"2021-12-24T06:00:00-08:00","isDaytime":false,"temperature":24,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"8 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/night/snow,50?size=medium","shortForecast":"Chance Light Snow","detailedForecast":"A chance of snow. Mostly cloudy, with a low around 24. Chance of precipitation is 50%."},{"number":10,"name":"Friday","startTime":"2021-12-24T06:00:00-08:00","endTime":"2021-12-24T18:00:00-08:00","isDaytime":true,"temperature":32,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"8 mph","windDirection":"SW","icon":"https://api.weather.gov/icons/land/day/snow,60/snow,70?size=medium","shortForecast":"Light Snow Likely","detailedForecast":"Snow likely. Mostly cloudy, with a high near 32. Chance of precipitation is 70%."},{"number":11,"name":"Friday Night","startTime":"2021-12-24T18:00:00-08:00","endTime":"2021-12-25T06:00:00-08:00","isDaytime":false,"temperature":21,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"7 mph","windDirection":"SW","icon":"https://api.weather.gov/icons/land/night/snow,70?size=medium","shortForecast":"Light Snow Likely","detailedForecast":"Snow likely. Mostly cloudy, with a low around 21. Chance of precipitation is 70%."},{"number":12,"name":"Christmas Day","startTime":"2021-12-25T06:00:00-08:00","endTime":"2021-12-25T18:00:00-08:00","isDaytime":true,"temperature":28,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"8 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/day/snow,70/snow,60?size=medium","shortForecast":"Light Snow Likely","detailedForecast":"Snow likely. Mostly cloudy, with a high near 28. Chance of precipitation is 70%."},{"number":13,"name":"Saturday Night","startTime":"2021-12-25T18:00:00-08:00","endTime":"2021-12-26T06:00:00-08:00","isDaytime":false,"temperature":15,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"8 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/night/snow,60/snow,50?size=medium","shortForecast":"Light Snow Likely","detailedForecast":"Snow likely. Mostly cloudy, with a low around 15. Chance of precipitation is 60%."},{"number":14,"name":"Sunday","startTime":"2021-12-26T06:00:00-08:00","endTime":"2021-12-26T18:00:00-08:00","isDaytime":true,"temperature":24,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"7 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/day/snow,50?size=medium","shortForecast":"Chance Light Snow","detailedForecast":"A chance of snow before 5pm. Partly sunny, with a high near 24. Chance of precipitation is 50%."}]}
  var hourly_OTX_35_103 = {"correlationId":"1e8e6011","title":"Unexpected Problem","type":"https://api.weather.gov/problems/UnexpectedProblem","status":500,"detail":"An unexpected problem has occurred.","instance":"https://api.weather.gov/requests/1e8e6011"}
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

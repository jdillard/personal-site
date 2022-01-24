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
  var weekly_OTX_35_103 = {"updated":"2022-01-24T05:12:49+00:00","units":"us","forecastGenerator":"BaselineForecastGenerator","generatedAt":"2022-01-24T08:04:32+00:00","updateTime":"2022-01-24T05:12:49+00:00","validTimes":"2022-01-23T23:00:00+00:00/P7DT2H","elevation":{"unitCode":"wmoUnit:m","value":627.888},"periods":[{"number":1,"name":"Overnight","startTime":"2022-01-24T00:00:00-08:00","endTime":"2022-01-24T06:00:00-08:00","isDaytime":false,"temperature":32,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"7 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/night/fog?size=medium","shortForecast":"Patchy Fog","detailedForecast":"Patchy fog. Mostly cloudy, with a low around 32. West wind around 7 mph."},{"number":2,"name":"Monday","startTime":"2022-01-24T06:00:00-08:00","endTime":"2022-01-24T18:00:00-08:00","isDaytime":true,"temperature":43,"temperatureUnit":"F","temperatureTrend":"falling","windSpeed":"2 to 7 mph","windDirection":"NW","icon":"https://api.weather.gov/icons/land/day/fog?size=medium","shortForecast":"Patchy Fog","detailedForecast":"Patchy fog before 5pm. Mostly sunny. High near 43, with temperatures falling to around 33 in the afternoon. Northwest wind 2 to 7 mph."},{"number":3,"name":"Monday Night","startTime":"2022-01-24T18:00:00-08:00","endTime":"2022-01-25T06:00:00-08:00","isDaytime":false,"temperature":22,"temperatureUnit":"F","temperatureTrend":"rising","windSpeed":"3 mph","windDirection":"SW","icon":"https://api.weather.gov/icons/land/night/fog?size=medium","shortForecast":"Patchy Fog","detailedForecast":"Patchy fog after 7pm. Mostly clear. Low around 22, with temperatures rising to around 25 overnight. Southwest wind around 3 mph."},{"number":4,"name":"Tuesday","startTime":"2022-01-25T06:00:00-08:00","endTime":"2022-01-25T18:00:00-08:00","isDaytime":true,"temperature":39,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"2 mph","windDirection":"SE","icon":"https://api.weather.gov/icons/land/day/fog?size=medium","shortForecast":"Patchy Fog","detailedForecast":"Patchy fog. Mostly sunny, with a high near 39. Southeast wind around 2 mph."},{"number":5,"name":"Tuesday Night","startTime":"2022-01-25T18:00:00-08:00","endTime":"2022-01-26T06:00:00-08:00","isDaytime":false,"temperature":23,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"3 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/night/fog?size=medium","shortForecast":"Areas Of Fog","detailedForecast":"Areas of fog. Partly cloudy, with a low around 23. West wind around 3 mph."},{"number":6,"name":"Wednesday","startTime":"2022-01-26T06:00:00-08:00","endTime":"2022-01-26T18:00:00-08:00","isDaytime":true,"temperature":42,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"3 mph","windDirection":"N","icon":"https://api.weather.gov/icons/land/day/fog?size=medium","shortForecast":"Patchy Fog","detailedForecast":"Patchy fog. Sunny, with a high near 42."},{"number":7,"name":"Wednesday Night","startTime":"2022-01-26T18:00:00-08:00","endTime":"2022-01-27T06:00:00-08:00","isDaytime":false,"temperature":23,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"5 mph","windDirection":"SE","icon":"https://api.weather.gov/icons/land/night/fog?size=medium","shortForecast":"Patchy Fog","detailedForecast":"Patchy fog. Partly cloudy, with a low around 23."},{"number":8,"name":"Thursday","startTime":"2022-01-27T06:00:00-08:00","endTime":"2022-01-27T18:00:00-08:00","isDaytime":true,"temperature":37,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"6 mph","windDirection":"E","icon":"https://api.weather.gov/icons/land/day/fog?size=medium","shortForecast":"Patchy Fog","detailedForecast":"Patchy fog. Mostly sunny, with a high near 37."},{"number":9,"name":"Thursday Night","startTime":"2022-01-27T18:00:00-08:00","endTime":"2022-01-28T06:00:00-08:00","isDaytime":false,"temperature":22,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"6 mph","windDirection":"S","icon":"https://api.weather.gov/icons/land/night/fog?size=medium","shortForecast":"Patchy Fog","detailedForecast":"Patchy fog. Partly cloudy, with a low around 22."},{"number":10,"name":"Friday","startTime":"2022-01-28T06:00:00-08:00","endTime":"2022-01-28T18:00:00-08:00","isDaytime":true,"temperature":38,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"5 mph","windDirection":"S","icon":"https://api.weather.gov/icons/land/day/snow,20/snow,30?size=medium","shortForecast":"Slight Chance Light Snow then Patchy Fog","detailedForecast":"A slight chance of snow between 10am and noon, then patchy fog and a slight chance of snow between noon and 1pm, then patchy fog and a slight chance of rain and snow between 1pm and 4pm, then patchy fog and a chance of rain and snow. Mostly sunny, with a high near 38. Chance of precipitation is 30%."},{"number":11,"name":"Friday Night","startTime":"2022-01-28T18:00:00-08:00","endTime":"2022-01-29T06:00:00-08:00","isDaytime":false,"temperature":26,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"6 mph","windDirection":"SW","icon":"https://api.weather.gov/icons/land/night/snow,30?size=medium","shortForecast":"Patchy Fog","detailedForecast":"Patchy fog and a chance of rain and snow. Mostly cloudy, with a low around 26. Chance of precipitation is 30%."},{"number":12,"name":"Saturday","startTime":"2022-01-29T06:00:00-08:00","endTime":"2022-01-29T18:00:00-08:00","isDaytime":true,"temperature":40,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"6 mph","windDirection":"SW","icon":"https://api.weather.gov/icons/land/day/snow,30?size=medium","shortForecast":"Chance Light Snow then Patchy Fog","detailedForecast":"A chance of snow before 10am, then a chance of rain between 10am and noon, then a chance of rain and patchy fog between noon and 4pm, then patchy fog and a slight chance of rain and snow. Partly sunny, with a high near 40. Chance of precipitation is 30%."},{"number":13,"name":"Saturday Night","startTime":"2022-01-29T18:00:00-08:00","endTime":"2022-01-30T06:00:00-08:00","isDaytime":false,"temperature":29,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"6 mph","windDirection":"SW","icon":"https://api.weather.gov/icons/land/night/snow,40/snow,50?size=medium","shortForecast":"Patchy Fog then Chance Light Snow","detailedForecast":"Patchy fog and a slight chance of rain and snow before 10pm, then a chance of snow and patchy fog. Mostly cloudy, with a low around 29. Chance of precipitation is 50%."},{"number":14,"name":"Sunday","startTime":"2022-01-30T06:00:00-08:00","endTime":"2022-01-30T18:00:00-08:00","isDaytime":true,"temperature":41,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"7 mph","windDirection":"SW","icon":"https://api.weather.gov/icons/land/day/snow,50?size=medium","shortForecast":"Chance Light Snow","detailedForecast":"A chance of snow and patchy fog before 7am, then patchy fog and a chance of rain and snow. Partly sunny, with a high near 41. Chance of precipitation is 50%."}]}
  var hourly_OTX_35_103 = {"correlationId":"a87e94f","title":"Unexpected Problem","type":"https://api.weather.gov/problems/UnexpectedProblem","status":500,"detail":"An unexpected problem has occurred.","instance":"https://api.weather.gov/requests/a87e94f"}
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

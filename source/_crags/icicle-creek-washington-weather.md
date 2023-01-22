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
  var weekly_OTX_35_103 = {"updated":"2023-01-22T07:36:05+00:00","units":"us","forecastGenerator":"BaselineForecastGenerator","generatedAt":"2023-01-22T08:33:01+00:00","updateTime":"2023-01-22T07:36:05+00:00","validTimes":"2023-01-22T01:00:00+00:00/P7D","elevation":{"unitCode":"wmoUnit:m","value":627.888},"periods":[{"number":1,"name":"Overnight","startTime":"2023-01-22T00:00:00-08:00","endTime":"2023-01-22T06:00:00-08:00","isDaytime":false,"temperature":22,"temperatureUnit":"F","temperatureTrend":"rising","windSpeed":"15 to 23 mph","windDirection":"NW","icon":"https://api.weather.gov/icons/land/night/snow,30?size=medium","shortForecast":"Chance Light Snow","detailedForecast":"A chance of snow before 4am. Mostly cloudy. Low around 22, with temperatures rising to around 26 overnight. Northwest wind 15 to 23 mph, with gusts as high as 33 mph. Chance of precipitation is 30%. New snow accumulation of less than half an inch possible."},{"number":2,"name":"Sunday","startTime":"2023-01-22T06:00:00-08:00","endTime":"2023-01-22T18:00:00-08:00","isDaytime":true,"temperature":34,"temperatureUnit":"F","temperatureTrend":"falling","windSpeed":"9 to 16 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/day/bkn?size=medium","shortForecast":"Partly Sunny","detailedForecast":"Partly sunny. High near 34, with temperatures falling to around 27 in the afternoon. West wind 9 to 16 mph, with gusts as high as 25 mph."},{"number":3,"name":"Sunday Night","startTime":"2023-01-22T18:00:00-08:00","endTime":"2023-01-23T06:00:00-08:00","isDaytime":false,"temperature":22,"temperatureUnit":"F","temperatureTrend":"rising","windSpeed":"5 to 8 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/night/sct?size=medium","shortForecast":"Partly Cloudy","detailedForecast":"Partly cloudy. Low around 22, with temperatures rising to around 26 overnight. West wind 5 to 8 mph."},{"number":4,"name":"Monday","startTime":"2023-01-23T06:00:00-08:00","endTime":"2023-01-23T18:00:00-08:00","isDaytime":true,"temperature":37,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"6 to 9 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/day/bkn?size=medium","shortForecast":"Partly Sunny","detailedForecast":"Partly sunny, with a high near 37. West wind 6 to 9 mph."},{"number":5,"name":"Monday Night","startTime":"2023-01-23T18:00:00-08:00","endTime":"2023-01-24T06:00:00-08:00","isDaytime":false,"temperature":27,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"12 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/night/sct?size=medium","shortForecast":"Partly Cloudy","detailedForecast":"Partly cloudy, with a low around 27. West wind around 12 mph."},{"number":6,"name":"Tuesday","startTime":"2023-01-24T06:00:00-08:00","endTime":"2023-01-24T18:00:00-08:00","isDaytime":true,"temperature":39,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"12 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/day/bkn?size=medium","shortForecast":"Partly Sunny","detailedForecast":"Partly sunny, with a high near 39."},{"number":7,"name":"Tuesday Night","startTime":"2023-01-24T18:00:00-08:00","endTime":"2023-01-25T06:00:00-08:00","isDaytime":false,"temperature":28,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"10 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/night/sct?size=medium","shortForecast":"Partly Cloudy","detailedForecast":"Partly cloudy, with a low around 28."},{"number":8,"name":"Wednesday","startTime":"2023-01-25T06:00:00-08:00","endTime":"2023-01-25T18:00:00-08:00","isDaytime":true,"temperature":40,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"9 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/day/bkn?size=medium","shortForecast":"Partly Sunny","detailedForecast":"Partly sunny, with a high near 40."},{"number":9,"name":"Wednesday Night","startTime":"2023-01-25T18:00:00-08:00","endTime":"2023-01-26T06:00:00-08:00","isDaytime":false,"temperature":29,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"10 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/night/bkn?size=medium","shortForecast":"Mostly Cloudy","detailedForecast":"Mostly cloudy, with a low around 29."},{"number":10,"name":"Thursday","startTime":"2023-01-26T06:00:00-08:00","endTime":"2023-01-26T18:00:00-08:00","isDaytime":true,"temperature":41,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"10 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/day/bkn/rain,20?size=medium","shortForecast":"Partly Sunny then Slight Chance Light Rain","detailedForecast":"A slight chance of rain after 4pm. Partly sunny, with a high near 41. Chance of precipitation is 20%."},{"number":11,"name":"Thursday Night","startTime":"2023-01-26T18:00:00-08:00","endTime":"2023-01-27T06:00:00-08:00","isDaytime":false,"temperature":30,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"12 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/night/rain,30/snow,30?size=medium","shortForecast":"Chance Light Rain then Slight Chance Rain And Snow","detailedForecast":"A chance of rain before 4am, then a slight chance of rain and snow. Mostly cloudy, with a low around 30. Chance of precipitation is 30%."},{"number":12,"name":"Friday","startTime":"2023-01-27T06:00:00-08:00","endTime":"2023-01-27T18:00:00-08:00","isDaytime":true,"temperature":39,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"12 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/day/snow,20?size=medium","shortForecast":"Slight Chance Rain And Snow","detailedForecast":"A slight chance of rain and snow. Partly sunny, with a high near 39. Chance of precipitation is 20%."},{"number":13,"name":"Friday Night","startTime":"2023-01-27T18:00:00-08:00","endTime":"2023-01-28T06:00:00-08:00","isDaytime":false,"temperature":25,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"9 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/night/snow,20/bkn?size=medium","shortForecast":"Slight Chance Rain And Snow then Mostly Cloudy","detailedForecast":"A slight chance of rain before 7pm, then a slight chance of rain and snow between 7pm and 10pm. Mostly cloudy, with a low around 25. Chance of precipitation is 20%."},{"number":14,"name":"Saturday","startTime":"2023-01-28T06:00:00-08:00","endTime":"2023-01-28T18:00:00-08:00","isDaytime":true,"temperature":34,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"8 mph","windDirection":"N","icon":"https://api.weather.gov/icons/land/day/snow,20?size=medium","shortForecast":"Slight Chance Light Snow","detailedForecast":"A slight chance of snow between 10am and 4pm. Partly sunny, with a high near 34. Chance of precipitation is 20%."}]}
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

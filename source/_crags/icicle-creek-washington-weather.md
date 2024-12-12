---
### THIS FILE IS AUTO-GENERATED - DO NOT EDIT ###
layout: page
title: Icicle Creek, Washington Climbing Weather - Current, Past, and Forecasted
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
  var weekly_OTX_35_103 = {"units":"us","forecastGenerator":"BaselineForecastGenerator","generatedAt":"2024-12-12T08:36:47+00:00","updateTime":"2024-12-12T00:17:18+00:00","validTimes":"2024-12-11T18:00:00+00:00/P7DT10H","elevation":{"unitCode":"wmoUnit:m","value":627.888},"periods":[{"number":1,"name":"Overnight","startTime":"2024-12-12T00:00:00-08:00","endTime":"2024-12-12T06:00:00-08:00","isDaytime":false,"temperature":25,"temperatureUnit":"F","temperatureTrend":"","probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":30},"windSpeed":"2 mph","windDirection":"E","icon":"https://api.weather.gov/icons/land/night/snow,30?size=medium","shortForecast":"Chance Snow Showers","detailedForecast":"A chance of snow showers between 1am and 4am, then a chance of snow. Cloudy. Low around 25, with temperatures rising to around 28 overnight. East wind around 2 mph. Chance of precipitation is 30%. Little or no snow accumulation expected."},{"number":2,"name":"Thursday","startTime":"2024-12-12T06:00:00-08:00","endTime":"2024-12-12T18:00:00-08:00","isDaytime":true,"temperature":35,"temperatureUnit":"F","temperatureTrend":"","probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":40},"windSpeed":"2 mph","windDirection":"E","icon":"https://api.weather.gov/icons/land/day/snow,40/snow,30?size=medium","shortForecast":"Chance Light Snow","detailedForecast":"A chance of snow before 11am, then a chance of rain and snow. Mostly cloudy. High near 35, with temperatures falling to around 31 in the afternoon. East wind around 2 mph. Chance of precipitation is 40%. Little or no snow accumulation expected."},{"number":3,"name":"Thursday Night","startTime":"2024-12-12T18:00:00-08:00","endTime":"2024-12-13T06:00:00-08:00","isDaytime":false,"temperature":25,"temperatureUnit":"F","temperatureTrend":"","probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":30},"windSpeed":"2 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/night/snow,20/snow,30?size=medium","shortForecast":"Slight Chance Light Snow","detailedForecast":"A slight chance of rain before 7pm, then a slight chance of snow between 7pm and 1am, then a chance of rain and snow. Mostly cloudy. Low around 25, with temperatures rising to around 28 overnight. West wind around 2 mph. Chance of precipitation is 30%."},{"number":4,"name":"Friday","startTime":"2024-12-13T06:00:00-08:00","endTime":"2024-12-13T18:00:00-08:00","isDaytime":true,"temperature":33,"temperatureUnit":"F","temperatureTrend":"","probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":90},"windSpeed":"2 to 6 mph","windDirection":"SE","icon":"https://api.weather.gov/icons/land/day/snow,50/snow,90?size=medium","shortForecast":"Chance Light Snow","detailedForecast":"A chance of snow before 10am, then a chance of rain and snow between 10am and 1pm, then rain and snow. Mostly cloudy, with a high near 33. Southeast wind 2 to 6 mph. Chance of precipitation is 90%. New snow accumulation of 1 to 2 inches possible."},{"number":5,"name":"Friday Night","startTime":"2024-12-13T18:00:00-08:00","endTime":"2024-12-14T06:00:00-08:00","isDaytime":false,"temperature":27,"temperatureUnit":"F","temperatureTrend":"","probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":90},"windSpeed":"6 mph","windDirection":"SE","icon":"https://api.weather.gov/icons/land/night/snow,90?size=medium","shortForecast":"Snow","detailedForecast":"Snow. Cloudy, with a low around 27. Southeast wind around 6 mph. Chance of precipitation is 90%. New snow accumulation of 3 to 5 inches possible."},{"number":6,"name":"Saturday","startTime":"2024-12-14T06:00:00-08:00","endTime":"2024-12-14T18:00:00-08:00","isDaytime":true,"temperature":30,"temperatureUnit":"F","temperatureTrend":"","probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":80},"windSpeed":"6 mph","windDirection":"S","icon":"https://api.weather.gov/icons/land/day/snow,80/snow,60?size=medium","shortForecast":"Light Snow","detailedForecast":"Snow. Mostly cloudy, with a high near 30. Chance of precipitation is 80%. New snow accumulation of around one inch possible."},{"number":7,"name":"Saturday Night","startTime":"2024-12-14T18:00:00-08:00","endTime":"2024-12-15T06:00:00-08:00","isDaytime":false,"temperature":28,"temperatureUnit":"F","temperatureTrend":"","probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":60},"windSpeed":"8 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/night/snow,60/snow,40?size=medium","shortForecast":"Light Snow Likely","detailedForecast":"Snow likely. Mostly cloudy, with a low around 28. Chance of precipitation is 60%. New snow accumulation of less than half an inch possible."},{"number":8,"name":"Sunday","startTime":"2024-12-15T06:00:00-08:00","endTime":"2024-12-15T18:00:00-08:00","isDaytime":true,"temperature":31,"temperatureUnit":"F","temperatureTrend":"","probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":30},"windSpeed":"3 to 7 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/day/snow,30/bkn?size=medium","shortForecast":"Chance Light Snow then Partly Sunny","detailedForecast":"A chance of snow before 10am. Partly sunny, with a high near 31. Chance of precipitation is 30%."},{"number":9,"name":"Sunday Night","startTime":"2024-12-15T18:00:00-08:00","endTime":"2024-12-16T06:00:00-08:00","isDaytime":false,"temperature":22,"temperatureUnit":"F","temperatureTrend":"","probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":40},"windSpeed":"3 mph","windDirection":"NW","icon":"https://api.weather.gov/icons/land/night/snow,30/snow,40?size=medium","shortForecast":"Chance Light Snow","detailedForecast":"A chance of snow after 10pm. Mostly cloudy, with a low around 22. Chance of precipitation is 40%. New snow accumulation of less than one inch possible."},{"number":10,"name":"Monday","startTime":"2024-12-16T06:00:00-08:00","endTime":"2024-12-16T18:00:00-08:00","isDaytime":true,"temperature":30,"temperatureUnit":"F","temperatureTrend":"","probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":50},"windSpeed":"5 mph","windDirection":"E","icon":"https://api.weather.gov/icons/land/day/snow,50?size=medium","shortForecast":"Chance Light Snow","detailedForecast":"A chance of snow. Partly sunny, with a high near 30. Chance of precipitation is 50%. New snow accumulation of 1 to 2 inches possible."},{"number":11,"name":"Monday Night","startTime":"2024-12-16T18:00:00-08:00","endTime":"2024-12-17T06:00:00-08:00","isDaytime":false,"temperature":25,"temperatureUnit":"F","temperatureTrend":"","probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":40},"windSpeed":"3 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/night/snow,40/snow,30?size=medium","shortForecast":"Chance Light Snow","detailedForecast":"A chance of snow. Mostly cloudy, with a low around 25. Chance of precipitation is 40%. New snow accumulation of less than half an inch possible."},{"number":12,"name":"Tuesday","startTime":"2024-12-17T06:00:00-08:00","endTime":"2024-12-17T18:00:00-08:00","isDaytime":true,"temperature":35,"temperatureUnit":"F","temperatureTrend":"","probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":40},"windSpeed":"3 mph","windDirection":"SW","icon":"https://api.weather.gov/icons/land/day/snow,20/snow,40?size=medium","shortForecast":"Slight Chance Light Snow","detailedForecast":"A slight chance of snow before 1pm, then a chance of rain and snow. Partly sunny, with a high near 35. Chance of precipitation is 40%."},{"number":13,"name":"Tuesday Night","startTime":"2024-12-17T18:00:00-08:00","endTime":"2024-12-18T06:00:00-08:00","isDaytime":false,"temperature":25,"temperatureUnit":"F","temperatureTrend":"","probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":40},"windSpeed":"3 mph","windDirection":"S","icon":"https://api.weather.gov/icons/land/night/snow,40?size=medium","shortForecast":"Chance Light Snow","detailedForecast":"A chance of snow before 1am, then a chance of rain and snow. Mostly cloudy, with a low around 25. Chance of precipitation is 40%."},{"number":14,"name":"Wednesday","startTime":"2024-12-18T06:00:00-08:00","endTime":"2024-12-18T18:00:00-08:00","isDaytime":true,"temperature":34,"temperatureUnit":"F","temperatureTrend":"","probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":40},"windSpeed":"5 mph","windDirection":"SE","icon":"https://api.weather.gov/icons/land/day/snow,40/snow,30?size=medium","shortForecast":"Chance Rain And Snow","detailedForecast":"A chance of rain and snow before 5pm. Partly sunny, with a high near 34. Chance of precipitation is 40%."}]}
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

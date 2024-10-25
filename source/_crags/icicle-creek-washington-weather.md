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
  var weekly_OTX_35_103 = {"units":"us","forecastGenerator":"BaselineForecastGenerator","generatedAt":"2024-10-25T08:35:33+00:00","updateTime":"2024-10-25T04:24:05+00:00","validTimes":"2024-10-24T22:00:00+00:00/P7DT6H","elevation":{"unitCode":"wmoUnit:m","value":627.888},"periods":[{"number":1,"name":"Overnight","startTime":"2024-10-25T01:00:00-07:00","endTime":"2024-10-25T06:00:00-07:00","isDaytime":false,"temperature":35,"temperatureUnit":"F","temperatureTrend":"","probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"windSpeed":"2 mph","windDirection":"SE","icon":"https://api.weather.gov/icons/land/night/bkn?size=medium","shortForecast":"Mostly Cloudy","detailedForecast":"Mostly cloudy. Low around 35, with temperatures rising to around 37 overnight. Southeast wind around 2 mph."},{"number":2,"name":"Friday","startTime":"2024-10-25T06:00:00-07:00","endTime":"2024-10-25T18:00:00-07:00","isDaytime":true,"temperature":50,"temperatureUnit":"F","temperatureTrend":"","probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"windSpeed":"2 to 6 mph","windDirection":"SE","icon":"https://api.weather.gov/icons/land/day/sct?size=medium","shortForecast":"Mostly Sunny","detailedForecast":"Mostly sunny. High near 50, with temperatures falling to around 46 in the afternoon. Southeast wind 2 to 6 mph. New rainfall amounts less than a tenth of an inch possible."},{"number":3,"name":"Friday Night","startTime":"2024-10-25T18:00:00-07:00","endTime":"2024-10-26T06:00:00-07:00","isDaytime":false,"temperature":38,"temperatureUnit":"F","temperatureTrend":"","probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":90},"windSpeed":"5 mph","windDirection":"S","icon":"https://api.weather.gov/icons/land/night/rain,70/rain,90?size=medium","shortForecast":"Light Rain","detailedForecast":"Rain after 8pm. Mostly cloudy, with a low around 38. South wind around 5 mph. Chance of precipitation is 90%. New rainfall amounts between a tenth and quarter of an inch possible."},{"number":4,"name":"Saturday","startTime":"2024-10-26T06:00:00-07:00","endTime":"2024-10-26T18:00:00-07:00","isDaytime":true,"temperature":54,"temperatureUnit":"F","temperatureTrend":"","probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":90},"windSpeed":"3 mph","windDirection":"S","icon":"https://api.weather.gov/icons/land/day/rain,90/rain,60?size=medium","shortForecast":"Light Rain","detailedForecast":"Rain. Mostly cloudy, with a high near 54. South wind around 3 mph. Chance of precipitation is 90%. New rainfall amounts less than a tenth of an inch possible."},{"number":5,"name":"Saturday Night","startTime":"2024-10-26T18:00:00-07:00","endTime":"2024-10-27T06:00:00-07:00","isDaytime":false,"temperature":46,"temperatureUnit":"F","temperatureTrend":"","probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":100},"windSpeed":"2 mph","windDirection":"SW","icon":"https://api.weather.gov/icons/land/night/rain,90/rain,100?size=medium","shortForecast":"Light Rain","detailedForecast":"Rain. Cloudy, with a low around 46. Southwest wind around 2 mph. Chance of precipitation is 100%. New rainfall amounts between a quarter and half of an inch possible."},{"number":6,"name":"Sunday","startTime":"2024-10-27T06:00:00-07:00","endTime":"2024-10-27T18:00:00-07:00","isDaytime":true,"temperature":47,"temperatureUnit":"F","temperatureTrend":"","probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":100},"windSpeed":"2 to 8 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/day/rain,100/rain,90?size=medium","shortForecast":"Light Rain","detailedForecast":"Rain and patchy fog. Mostly cloudy, with a high near 47. Chance of precipitation is 100%."},{"number":7,"name":"Sunday Night","startTime":"2024-10-27T18:00:00-07:00","endTime":"2024-10-28T06:00:00-07:00","isDaytime":false,"temperature":36,"temperatureUnit":"F","temperatureTrend":"","probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":90},"windSpeed":"5 to 8 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/night/rain,90/rain,60?size=medium","shortForecast":"Light Rain","detailedForecast":"Rain. Mostly cloudy, with a low around 36. Chance of precipitation is 90%."},{"number":8,"name":"Monday","startTime":"2024-10-28T06:00:00-07:00","endTime":"2024-10-28T18:00:00-07:00","isDaytime":true,"temperature":43,"temperatureUnit":"F","temperatureTrend":"","probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":70},"windSpeed":"6 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/day/rain,70?size=medium","shortForecast":"Light Rain Likely","detailedForecast":"A chance of rain before 7am, then rain likely and patchy fog. Partly sunny, with a high near 43. Chance of precipitation is 70%."},{"number":9,"name":"Monday Night","startTime":"2024-10-28T18:00:00-07:00","endTime":"2024-10-29T06:00:00-07:00","isDaytime":false,"temperature":33,"temperatureUnit":"F","temperatureTrend":"","probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":70},"windSpeed":"5 mph","windDirection":"NW","icon":"https://api.weather.gov/icons/land/night/rain,70/rain,20?size=medium","shortForecast":"Light Rain Likely","detailedForecast":"Rain likely. Mostly cloudy, with a low around 33. Chance of precipitation is 70%."},{"number":10,"name":"Tuesday","startTime":"2024-10-29T06:00:00-07:00","endTime":"2024-10-29T18:00:00-07:00","isDaytime":true,"temperature":43,"temperatureUnit":"F","temperatureTrend":"","probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":20},"windSpeed":"6 mph","windDirection":"NW","icon":"https://api.weather.gov/icons/land/day/rain,20/few?size=medium","shortForecast":"Slight Chance Light Rain then Sunny","detailedForecast":"A slight chance of rain before 7am, then patchy fog and patchy freezing fog and a slight chance of rain between 7am and 11am. Sunny, with a high near 43. Chance of precipitation is 20%."},{"number":11,"name":"Tuesday Night","startTime":"2024-10-29T18:00:00-07:00","endTime":"2024-10-30T06:00:00-07:00","isDaytime":false,"temperature":33,"temperatureUnit":"F","temperatureTrend":"","probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":20},"windSpeed":"2 to 6 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/night/rain,20?size=medium","shortForecast":"Slight Chance Light Rain","detailedForecast":"A slight chance of rain after 11pm. Partly cloudy, with a low around 33. Chance of precipitation is 20%."},{"number":12,"name":"Wednesday","startTime":"2024-10-30T06:00:00-07:00","endTime":"2024-10-30T18:00:00-07:00","isDaytime":true,"temperature":39,"temperatureUnit":"F","temperatureTrend":"","probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":80},"windSpeed":"2 to 7 mph","windDirection":"SW","icon":"https://api.weather.gov/icons/land/day/rain,70/rain,80?size=medium","shortForecast":"Light Rain","detailedForecast":"A slight chance of rain before 8am, then rain and patchy freezing fog. Partly sunny, with a high near 39. Chance of precipitation is 80%."},{"number":13,"name":"Wednesday Night","startTime":"2024-10-30T18:00:00-07:00","endTime":"2024-10-31T06:00:00-07:00","isDaytime":false,"temperature":33,"temperatureUnit":"F","temperatureTrend":"","probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":80},"windSpeed":"9 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/night/rain,80/rain,60?size=medium","shortForecast":"Light Rain","detailedForecast":"Rain. Mostly cloudy, with a low around 33. Chance of precipitation is 80%."},{"number":14,"name":"Thursday","startTime":"2024-10-31T06:00:00-07:00","endTime":"2024-10-31T18:00:00-07:00","isDaytime":true,"temperature":39,"temperatureUnit":"F","temperatureTrend":"","probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":60},"windSpeed":"7 mph","windDirection":"NW","icon":"https://api.weather.gov/icons/land/day/rain,60/rain,40?size=medium","shortForecast":"Light Rain Likely","detailedForecast":"Rain likely before 8am, then rain likely and patchy freezing fog. Partly sunny, with a high near 39. Chance of precipitation is 60%."}]}
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

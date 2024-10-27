---
### THIS FILE IS AUTO-GENERATED - DO NOT EDIT ###
layout: page
title: Smith Rock, Oregon Climbing Weather - Current, Past, and Forecasted
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
  var weekly_PDT_43_53 = {"units":"us","forecastGenerator":"BaselineForecastGenerator","generatedAt":"2024-10-27T08:35:32+00:00","updateTime":"2024-10-27T05:10:54+00:00","validTimes":"2024-10-26T23:00:00+00:00/P7DT20H","elevation":{"unitCode":"wmoUnit:m","value":853.1352},"periods":[{"number":1,"name":"Overnight","startTime":"2024-10-27T01:00:00-07:00","endTime":"2024-10-27T06:00:00-07:00","isDaytime":false,"temperature":45,"temperatureUnit":"F","temperatureTrend":"","probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":70},"windSpeed":"14 mph","windDirection":"SW","icon":"https://api.weather.gov/icons/land/night/rain,70?size=medium","shortForecast":"Light Rain Likely","detailedForecast":"Rain likely after 2am. Mostly cloudy. Low around 45, with temperatures rising to around 51 overnight. Southwest wind around 14 mph, with gusts as high as 23 mph. Chance of precipitation is 70%. New rainfall amounts less than a tenth of an inch possible."},{"number":2,"name":"Sunday","startTime":"2024-10-27T06:00:00-07:00","endTime":"2024-10-27T18:00:00-07:00","isDaytime":true,"temperature":56,"temperatureUnit":"F","temperatureTrend":"","probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":70},"windSpeed":"12 to 15 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/day/rain,70/rain,50?size=medium","shortForecast":"Light Rain Likely","detailedForecast":"Rain likely. Partly sunny. High near 56, with temperatures falling to around 52 in the afternoon. West wind 12 to 15 mph, with gusts as high as 24 mph. Chance of precipitation is 70%. New rainfall amounts less than a tenth of an inch possible."},{"number":3,"name":"Sunday Night","startTime":"2024-10-27T18:00:00-07:00","endTime":"2024-10-28T06:00:00-07:00","isDaytime":false,"temperature":34,"temperatureUnit":"F","temperatureTrend":"","probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":70},"windSpeed":"7 to 12 mph","windDirection":"S","icon":"https://api.weather.gov/icons/land/night/rain,50/rain,70?size=medium","shortForecast":"Light Rain Likely","detailedForecast":"Rain likely. Mostly cloudy. Low around 34, with temperatures rising to around 37 overnight. South wind 7 to 12 mph, with gusts as high as 22 mph. Chance of precipitation is 70%. New rainfall amounts less than a tenth of an inch possible."},{"number":4,"name":"Monday","startTime":"2024-10-28T06:00:00-07:00","endTime":"2024-10-28T18:00:00-07:00","isDaytime":true,"temperature":51,"temperatureUnit":"F","temperatureTrend":"","probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":70},"windSpeed":"7 to 15 mph","windDirection":"SW","icon":"https://api.weather.gov/icons/land/day/rain,70?size=medium","shortForecast":"Light Rain Likely","detailedForecast":"Rain likely. Partly sunny, with a high near 51. Southwest wind 7 to 15 mph, with gusts as high as 23 mph. Chance of precipitation is 70%. New rainfall amounts less than a tenth of an inch possible."},{"number":5,"name":"Monday Night","startTime":"2024-10-28T18:00:00-07:00","endTime":"2024-10-29T06:00:00-07:00","isDaytime":false,"temperature":31,"temperatureUnit":"F","temperatureTrend":"","probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":70},"windSpeed":"5 to 12 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/night/rain,70/rain,50?size=medium","shortForecast":"Light Rain Likely","detailedForecast":"Rain likely. Mostly cloudy, with a low around 31. West wind 5 to 12 mph, with gusts as high as 21 mph. Chance of precipitation is 70%. New rainfall amounts less than a tenth of an inch possible."},{"number":6,"name":"Tuesday","startTime":"2024-10-29T06:00:00-07:00","endTime":"2024-10-29T18:00:00-07:00","isDaytime":true,"temperature":50,"temperatureUnit":"F","temperatureTrend":"","probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":50},"windSpeed":"6 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/day/rain,50/sct?size=medium","shortForecast":"Chance Light Rain then Mostly Sunny","detailedForecast":"A chance of rain before 11am. Mostly sunny, with a high near 50. Chance of precipitation is 50%."},{"number":7,"name":"Tuesday Night","startTime":"2024-10-29T18:00:00-07:00","endTime":"2024-10-30T06:00:00-07:00","isDaytime":false,"temperature":28,"temperatureUnit":"F","temperatureTrend":"","probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"windSpeed":"2 to 9 mph","windDirection":"SW","icon":"https://api.weather.gov/icons/land/night/sct?size=medium","shortForecast":"Partly Cloudy","detailedForecast":"Partly cloudy, with a low around 28."},{"number":8,"name":"Wednesday","startTime":"2024-10-30T06:00:00-07:00","endTime":"2024-10-30T18:00:00-07:00","isDaytime":true,"temperature":54,"temperatureUnit":"F","temperatureTrend":"","probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":90},"windSpeed":"9 to 14 mph","windDirection":"S","icon":"https://api.weather.gov/icons/land/day/rain,70/rain,90?size=medium","shortForecast":"Light Rain","detailedForecast":"Rain after 11am. Mostly cloudy, with a high near 54. Chance of precipitation is 90%."},{"number":9,"name":"Wednesday Night","startTime":"2024-10-30T18:00:00-07:00","endTime":"2024-10-31T06:00:00-07:00","isDaytime":false,"temperature":30,"temperatureUnit":"F","temperatureTrend":"","probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":90},"windSpeed":"6 to 9 mph","windDirection":"SW","icon":"https://api.weather.gov/icons/land/night/rain,90/rain,70?size=medium","shortForecast":"Light Rain","detailedForecast":"Rain. Mostly cloudy, with a low around 30. Chance of precipitation is 90%."},{"number":10,"name":"Thursday","startTime":"2024-10-31T06:00:00-07:00","endTime":"2024-10-31T18:00:00-07:00","isDaytime":true,"temperature":47,"temperatureUnit":"F","temperatureTrend":"","probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"windSpeed":"7 to 10 mph","windDirection":"SW","icon":"https://api.weather.gov/icons/land/day/rain?size=medium","shortForecast":"Light Rain","detailedForecast":"Rain. Mostly cloudy, with a high near 47."},{"number":11,"name":"Thursday Night","startTime":"2024-10-31T18:00:00-07:00","endTime":"2024-11-01T06:00:00-07:00","isDaytime":false,"temperature":32,"temperatureUnit":"F","temperatureTrend":"","probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"windSpeed":"5 to 8 mph","windDirection":"SW","icon":"https://api.weather.gov/icons/land/night/rain?size=medium","shortForecast":"Light Rain Likely","detailedForecast":"Rain likely. Mostly cloudy, with a low around 32."},{"number":12,"name":"Friday","startTime":"2024-11-01T06:00:00-07:00","endTime":"2024-11-01T18:00:00-07:00","isDaytime":true,"temperature":48,"temperatureUnit":"F","temperatureTrend":"","probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"windSpeed":"8 mph","windDirection":"S","icon":"https://api.weather.gov/icons/land/day/rain?size=medium","shortForecast":"Chance Light Rain","detailedForecast":"A chance of rain. Mostly cloudy, with a high near 48."},{"number":13,"name":"Friday Night","startTime":"2024-11-01T18:00:00-07:00","endTime":"2024-11-02T06:00:00-07:00","isDaytime":false,"temperature":30,"temperatureUnit":"F","temperatureTrend":"","probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"windSpeed":"8 mph","windDirection":"SW","icon":"https://api.weather.gov/icons/land/night/rain?size=medium","shortForecast":"Chance Light Rain","detailedForecast":"A chance of rain. Mostly cloudy, with a low around 30."},{"number":14,"name":"Saturday","startTime":"2024-11-02T06:00:00-07:00","endTime":"2024-11-02T18:00:00-07:00","isDaytime":true,"temperature":49,"temperatureUnit":"F","temperatureTrend":"","probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"windSpeed":"7 mph","windDirection":"NW","icon":"https://api.weather.gov/icons/land/day/rain?size=medium","shortForecast":"Chance Light Rain","detailedForecast":"A chance of rain. Partly sunny, with a high near 49."}]}
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

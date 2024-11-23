---
### THIS FILE IS AUTO-GENERATED - DO NOT EDIT ###
layout: page
title: Trout Creek, Oregon Climbing Weather - Current, Past, and Forecasted
title_override: Trout Creek<br /><small>Climbing Weather</small>
description: A lightweight weather report for Trout Creek, Oregon. Optimized for slow internet connections.
js_includes:
  - weather.js
---

<section class="measure center lh-copy f5-ns f6 ph2 mv4" style="text-align: justify;">
<strong>"Is it dry?"</strong>, an oft-repeated, age-old question. Here are real-time,
precipitation-focused reports of current, past, and forecasted climbing weather for Trout Creek, Oregon.
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
<section id="weather" data-crag="trout-creek-oregon" class="mv4-ns mv3 ph2 center"></section>
<section id="nearby" class="tc lh-copy">
  <h3>Nearby Crags</h3>
<a class="nowrap no-underline fancy-link relative light-red mh3" href="/crags/icicle-creek-washington-weather.html">Icicle Creek</a>
<a class="nowrap no-underline fancy-link relative light-red mh3" href="/crags/tieton-river-rock-washington-weather.html">Tieton River Rock</a>
<a class="nowrap no-underline fancy-link relative light-red mh3" href="/crags/vantage-washington-weather.html">Vantage</a>
<a class="nowrap no-underline fancy-link relative light-red mh3" href="/crags/mount-erie-washington-weather.html">Mount Erie</a>
<a class="nowrap no-underline fancy-link relative light-red mh3" href="/crags/index-washington-weather.html">Index</a>
<a class="nowrap no-underline fancy-link relative light-red mh3" href="/crags/darrington-washington-weather.html">Darrington</a>
<a class="nowrap no-underline fancy-link relative light-red mh3" href="/crags/smith-rock-oregon-weather.html">Smith Rock</a>
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
  var weekly_PDT_48_73 = {"units":"us","forecastGenerator":"BaselineForecastGenerator","generatedAt":"2024-11-23T08:35:21+00:00","updateTime":"2024-11-23T08:27:40+00:00","validTimes":"2024-11-23T02:00:00+00:00/P7DT23H","elevation":{"unitCode":"wmoUnit:m","value":487.0704},"periods":[{"number":1,"name":"Overnight","startTime":"2024-11-23T00:00:00-08:00","endTime":"2024-11-23T06:00:00-08:00","isDaytime":false,"temperature":36,"temperatureUnit":"F","temperatureTrend":"","probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":20},"windSpeed":"5 mph","windDirection":"S","icon":"https://api.weather.gov/icons/land/night/rain_showers,20?size=medium","shortForecast":"Slight Chance Rain Showers","detailedForecast":"A slight chance of rain showers. Mostly cloudy, with a low around 36. South wind around 5 mph. Chance of precipitation is 20%. New rainfall amounts less than a tenth of an inch possible."},{"number":2,"name":"Saturday","startTime":"2024-11-23T06:00:00-08:00","endTime":"2024-11-23T18:00:00-08:00","isDaytime":true,"temperature":49,"temperatureUnit":"F","temperatureTrend":"","probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":20},"windSpeed":"5 to 9 mph","windDirection":"SW","icon":"https://api.weather.gov/icons/land/day/rain_showers,20/bkn,20?size=medium","shortForecast":"Slight Chance Rain Showers then Partly Sunny","detailedForecast":"A slight chance of rain showers before 10am. Partly sunny. High near 49, with temperatures falling to around 44 in the afternoon. Southwest wind 5 to 9 mph, with gusts as high as 18 mph. Chance of precipitation is 20%. New rainfall amounts less than a tenth of an inch possible."},{"number":3,"name":"Saturday Night","startTime":"2024-11-23T18:00:00-08:00","endTime":"2024-11-24T06:00:00-08:00","isDaytime":false,"temperature":31,"temperatureUnit":"F","temperatureTrend":"","probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"windSpeed":"6 to 9 mph","windDirection":"S","icon":"https://api.weather.gov/icons/land/night/bkn?size=medium","shortForecast":"Mostly Cloudy","detailedForecast":"Mostly cloudy, with a low around 31. South wind 6 to 9 mph."},{"number":4,"name":"Sunday","startTime":"2024-11-24T06:00:00-08:00","endTime":"2024-11-24T18:00:00-08:00","isDaytime":true,"temperature":50,"temperatureUnit":"F","temperatureTrend":"","probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":30},"windSpeed":"7 to 10 mph","windDirection":"S","icon":"https://api.weather.gov/icons/land/day/bkn/rain_showers,30?size=medium","shortForecast":"Partly Sunny then Chance Rain Showers","detailedForecast":"A chance of rain showers after 4pm. Partly sunny, with a high near 50. South wind 7 to 10 mph, with gusts as high as 21 mph. Chance of precipitation is 30%. New rainfall amounts less than a tenth of an inch possible."},{"number":5,"name":"Sunday Night","startTime":"2024-11-24T18:00:00-08:00","endTime":"2024-11-25T06:00:00-08:00","isDaytime":false,"temperature":34,"temperatureUnit":"F","temperatureTrend":"","probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":30},"windSpeed":"6 to 9 mph","windDirection":"S","icon":"https://api.weather.gov/icons/land/night/rain_showers,30/rain,30?size=medium","shortForecast":"Chance Rain Showers then Chance Light Rain","detailedForecast":"A chance of rain showers before 4am, then a chance of rain. Mostly cloudy, with a low around 34. South wind 6 to 9 mph, with gusts as high as 18 mph. Chance of precipitation is 30%. New rainfall amounts less than a tenth of an inch possible."},{"number":6,"name":"Monday","startTime":"2024-11-25T06:00:00-08:00","endTime":"2024-11-25T18:00:00-08:00","isDaytime":true,"temperature":49,"temperatureUnit":"F","temperatureTrend":"","probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":40},"windSpeed":"2 to 6 mph","windDirection":"SE","icon":"https://api.weather.gov/icons/land/day/rain,40?size=medium","shortForecast":"Chance Light Rain","detailedForecast":"A chance of rain. Mostly cloudy, with a high near 49. Chance of precipitation is 40%."},{"number":7,"name":"Monday Night","startTime":"2024-11-25T18:00:00-08:00","endTime":"2024-11-26T06:00:00-08:00","isDaytime":false,"temperature":32,"temperatureUnit":"F","temperatureTrend":"","probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":30},"windSpeed":"2 mph","windDirection":"N","icon":"https://api.weather.gov/icons/land/night/rain,30/rain,20?size=medium","shortForecast":"Chance Light Rain","detailedForecast":"A chance of rain. Mostly cloudy, with a low around 32. Chance of precipitation is 30%."},{"number":8,"name":"Tuesday","startTime":"2024-11-26T06:00:00-08:00","endTime":"2024-11-26T18:00:00-08:00","isDaytime":true,"temperature":46,"temperatureUnit":"F","temperatureTrend":"","probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":20},"windSpeed":"2 mph","windDirection":"NW","icon":"https://api.weather.gov/icons/land/day/rain,20/bkn?size=medium","shortForecast":"Slight Chance Light Rain then Partly Sunny","detailedForecast":"A slight chance of rain before 10am. Partly sunny, with a high near 46. Chance of precipitation is 20%."},{"number":9,"name":"Tuesday Night","startTime":"2024-11-26T18:00:00-08:00","endTime":"2024-11-27T06:00:00-08:00","isDaytime":false,"temperature":27,"temperatureUnit":"F","temperatureTrend":"","probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"windSpeed":"5 mph","windDirection":"SW","icon":"https://api.weather.gov/icons/land/night/sct?size=medium","shortForecast":"Partly Cloudy","detailedForecast":"Partly cloudy, with a low around 27."},{"number":10,"name":"Wednesday","startTime":"2024-11-27T06:00:00-08:00","endTime":"2024-11-27T18:00:00-08:00","isDaytime":true,"temperature":45,"temperatureUnit":"F","temperatureTrend":"","probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"windSpeed":"5 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/day/sct?size=medium","shortForecast":"Mostly Sunny","detailedForecast":"Mostly sunny, with a high near 45."},{"number":11,"name":"Wednesday Night","startTime":"2024-11-27T18:00:00-08:00","endTime":"2024-11-28T06:00:00-08:00","isDaytime":false,"temperature":23,"temperatureUnit":"F","temperatureTrend":"","probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"windSpeed":"3 mph","windDirection":"E","icon":"https://api.weather.gov/icons/land/night/sct?size=medium","shortForecast":"Partly Cloudy","detailedForecast":"Partly cloudy, with a low around 23."},{"number":12,"name":"Thanksgiving Day","startTime":"2024-11-28T06:00:00-08:00","endTime":"2024-11-28T18:00:00-08:00","isDaytime":true,"temperature":43,"temperatureUnit":"F","temperatureTrend":"","probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"windSpeed":"3 mph","windDirection":"SE","icon":"https://api.weather.gov/icons/land/day/sct?size=medium","shortForecast":"Mostly Sunny","detailedForecast":"Mostly sunny, with a high near 43."},{"number":13,"name":"Thursday Night","startTime":"2024-11-28T18:00:00-08:00","endTime":"2024-11-29T06:00:00-08:00","isDaytime":false,"temperature":23,"temperatureUnit":"F","temperatureTrend":"","probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"windSpeed":"3 mph","windDirection":"SE","icon":"https://api.weather.gov/icons/land/night/sct?size=medium","shortForecast":"Partly Cloudy","detailedForecast":"Partly cloudy, with a low around 23."},{"number":14,"name":"Friday","startTime":"2024-11-29T06:00:00-08:00","endTime":"2024-11-29T18:00:00-08:00","isDaytime":true,"temperature":42,"temperatureUnit":"F","temperatureTrend":"","probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"windSpeed":"3 mph","windDirection":"E","icon":"https://api.weather.gov/icons/land/day/sct?size=medium","shortForecast":"Mostly Sunny","detailedForecast":"Mostly sunny, with a high near 42."}]}
  var hourly_PDT_48_73 = false
  var crags_config = [
  {
    "name": "Trout Creek",
    "note": "Large basalt columns.",
    "mountainProject": "https://www.mountainproject.com/area/106505473/trout-creek",
    "station": "KS33",
    "office": "PDT/48,73",
    "coordinates": [
      -121.095,
      44.816
    ]
  }
]</script>

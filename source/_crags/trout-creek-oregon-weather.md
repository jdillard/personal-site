---
### THIS FILE IS AUTO-GENERATED - DO NOT EDIT ###
layout: page
title: Trout Creek, Oregon Climbing Weather - Current, Past, and Forecasted Report
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
  var weekly_PDT_48_73 = {"updated":"2022-06-11T05:28:14+00:00","units":"us","forecastGenerator":"BaselineForecastGenerator","generatedAt":"2022-06-11T08:38:04+00:00","updateTime":"2022-06-11T05:28:14+00:00","validTimes":"2022-06-10T23:00:00+00:00/P7DT14H","elevation":{"unitCode":"wmoUnit:m","value":494.9952},"periods":[{"number":1,"name":"Overnight","startTime":"2022-06-11T01:00:00-07:00","endTime":"2022-06-11T06:00:00-07:00","isDaytime":false,"temperature":59,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"8 mph","windDirection":"S","icon":"https://api.weather.gov/icons/land/night/tsra,70?size=medium","shortForecast":"Showers And Thunderstorms Likely","detailedForecast":"Rain showers likely before 5am, then showers and thunderstorms likely. Cloudy, with a low around 59. South wind around 8 mph. Chance of precipitation is 70%. New rainfall amounts between a quarter and half of an inch possible."},{"number":2,"name":"Saturday","startTime":"2022-06-11T06:00:00-07:00","endTime":"2022-06-11T18:00:00-07:00","isDaytime":true,"temperature":75,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"5 to 14 mph","windDirection":"SW","icon":"https://api.weather.gov/icons/land/day/tsra_sct,70/tsra_sct,40?size=medium","shortForecast":"Showers And Thunderstorms Likely","detailedForecast":"Showers and thunderstorms likely. Mostly cloudy, with a high near 75. Southwest wind 5 to 14 mph, with gusts as high as 21 mph. Chance of precipitation is 70%. New rainfall amounts between a quarter and half of an inch possible."},{"number":3,"name":"Saturday Night","startTime":"2022-06-11T18:00:00-07:00","endTime":"2022-06-12T06:00:00-07:00","isDaytime":false,"temperature":53,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"3 to 14 mph","windDirection":"NW","icon":"https://api.weather.gov/icons/land/night/tsra_sct,40/tsra_sct,70?size=medium","shortForecast":"Showers And Thunderstorms Likely","detailedForecast":"Showers and thunderstorms likely. Mostly cloudy, with a low around 53. Northwest wind 3 to 14 mph, with gusts as high as 21 mph. Chance of precipitation is 70%. New rainfall amounts between a tenth and quarter of an inch possible."},{"number":4,"name":"Sunday","startTime":"2022-06-12T06:00:00-07:00","endTime":"2022-06-12T18:00:00-07:00","isDaytime":true,"temperature":64,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"3 to 17 mph","windDirection":"NW","icon":"https://api.weather.gov/icons/land/day/rain_showers,70/rain_showers,60?size=medium","shortForecast":"Rain Showers Likely","detailedForecast":"Rain showers likely. Mostly cloudy, with a high near 64. Northwest wind 3 to 17 mph, with gusts as high as 26 mph. Chance of precipitation is 70%. New rainfall amounts between a quarter and half of an inch possible."},{"number":5,"name":"Sunday Night","startTime":"2022-06-12T18:00:00-07:00","endTime":"2022-06-13T06:00:00-07:00","isDaytime":false,"temperature":42,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"7 to 17 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/night/rain_showers,40?size=medium","shortForecast":"Chance Rain Showers","detailedForecast":"A chance of rain showers. Mostly cloudy, with a low around 42. West wind 7 to 17 mph, with gusts as high as 26 mph. Chance of precipitation is 40%. New rainfall amounts less than a tenth of an inch possible."},{"number":6,"name":"Monday","startTime":"2022-06-13T06:00:00-07:00","endTime":"2022-06-13T18:00:00-07:00","isDaytime":true,"temperature":63,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"7 to 20 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/day/rain_showers,50?size=medium","shortForecast":"Chance Rain Showers","detailedForecast":"A chance of rain showers. Partly sunny, with a high near 63. Chance of precipitation is 50%."},{"number":7,"name":"Monday Night","startTime":"2022-06-13T18:00:00-07:00","endTime":"2022-06-14T06:00:00-07:00","isDaytime":false,"temperature":43,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"6 to 20 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/night/rain_showers,30/sct?size=medium","shortForecast":"Chance Rain Showers then Partly Cloudy","detailedForecast":"A chance of rain showers before 11pm. Partly cloudy, with a low around 43. Chance of precipitation is 30%."},{"number":8,"name":"Tuesday","startTime":"2022-06-14T06:00:00-07:00","endTime":"2022-06-14T18:00:00-07:00","isDaytime":true,"temperature":69,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"6 to 14 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/day/sct?size=medium","shortForecast":"Mostly Sunny","detailedForecast":"Mostly sunny, with a high near 69."},{"number":9,"name":"Tuesday Night","startTime":"2022-06-14T18:00:00-07:00","endTime":"2022-06-15T06:00:00-07:00","isDaytime":false,"temperature":42,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"2 to 14 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/night/few?size=medium","shortForecast":"Mostly Clear","detailedForecast":"Mostly clear, with a low around 42."},{"number":10,"name":"Wednesday","startTime":"2022-06-15T06:00:00-07:00","endTime":"2022-06-15T18:00:00-07:00","isDaytime":true,"temperature":79,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"2 to 9 mph","windDirection":"SW","icon":"https://api.weather.gov/icons/land/day/sct?size=medium","shortForecast":"Mostly Sunny","detailedForecast":"Mostly sunny, with a high near 79."},{"number":11,"name":"Wednesday Night","startTime":"2022-06-15T18:00:00-07:00","endTime":"2022-06-16T06:00:00-07:00","isDaytime":false,"temperature":48,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"3 to 9 mph","windDirection":"NW","icon":"https://api.weather.gov/icons/land/night/sct?size=medium","shortForecast":"Partly Cloudy","detailedForecast":"Partly cloudy, with a low around 48."},{"number":12,"name":"Thursday","startTime":"2022-06-16T06:00:00-07:00","endTime":"2022-06-16T18:00:00-07:00","isDaytime":true,"temperature":78,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"2 to 12 mph","windDirection":"NW","icon":"https://api.weather.gov/icons/land/day/sct?size=medium","shortForecast":"Mostly Sunny","detailedForecast":"Mostly sunny, with a high near 78."},{"number":13,"name":"Thursday Night","startTime":"2022-06-16T18:00:00-07:00","endTime":"2022-06-17T06:00:00-07:00","isDaytime":false,"temperature":49,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"3 to 12 mph","windDirection":"NW","icon":"https://api.weather.gov/icons/land/night/rain_showers?size=medium","shortForecast":"Slight Chance Rain Showers","detailedForecast":"A slight chance of rain showers between 11pm and 5am. Partly cloudy, with a low around 49."},{"number":14,"name":"Friday","startTime":"2022-06-17T06:00:00-07:00","endTime":"2022-06-17T18:00:00-07:00","isDaytime":true,"temperature":76,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"3 to 13 mph","windDirection":"NW","icon":"https://api.weather.gov/icons/land/day/rain_showers?size=medium","shortForecast":"Slight Chance Rain Showers","detailedForecast":"A slight chance of rain showers after 11am. Mostly sunny, with a high near 76."}]}
  var hourly_PDT_48_73 = {"correlationId":"3442c057","title":"Unexpected Problem","type":"https://api.weather.gov/problems/UnexpectedProblem","status":500,"detail":"An unexpected problem has occurred.","instance":"https://api.weather.gov/requests/3442c057"}
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

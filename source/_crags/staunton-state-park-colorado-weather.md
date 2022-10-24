---
### THIS FILE IS AUTO-GENERATED - DO NOT EDIT ###
layout: page
title: Staunton State Park, Colorado Climbing Weather - Current, Past, and Forecasted Report
title_override: Staunton State Park<br /><small>Climbing Weather</small>
description: A lightweight weather report for Staunton State Park, Colorado. Optimized for slow internet connections.
js_includes:
  - weather.js
---

<section class="measure center lh-copy f5-ns f6 ph2 mv4" style="text-align: justify;">
<strong>"Is it dry?"</strong>, an oft-repeated, age-old question. Here are real-time,
precipitation-focused reports of current, past, and forecasted climbing weather for Staunton State Park, Colorado.
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
<section id="weather" data-crag="staunton-state-park-colorado" class="mv4-ns mv3 ph2 center"></section>
<section id="nearby" class="tc lh-copy">
  <h3>Nearby Crags</h3>
<a class="nowrap no-underline fancy-link relative light-red mh3" href="/crags/clear-creek-canyon-colorado-weather.html">Clear Creek Canyon</a>
<a class="nowrap no-underline fancy-link relative light-red mh3" href="/crags/lime-park-lime-creek-colorado-weather.html">Lime Park (Lime Creek)</a>
<a class="nowrap no-underline fancy-link relative light-red mh3" href="/crags/independence-pass-colorado-weather.html">Independence Pass</a>
<a class="nowrap no-underline fancy-link relative light-red mh3" href="/crags/moab-utah-weather.html">Moab</a>
<a class="nowrap no-underline fancy-link relative light-red mh3" href="/crags/estes-park-valley-colorado-weather.html">Estes Park Valley</a>
<a class="nowrap no-underline fancy-link relative light-red mh3" href="/crags/gunnison-colorado-weather.html">Gunnison</a>
</section>
<section id="nearby" class="tc lh-copy">
  <h3>Other Metros</h3>
  <select class="ma1 bg-near-white pa2" id="stateSel">
    <option value="Texas">Texas</option>
    <option value="Washington">Washington</option>
    <option value="Colorado" selected>Colorado</option>
    <option value="Tennessee">Tennessee</option>
    <option value="Utah">Utah</option>
    <option value="California">California</option>
  </select>
  <select class="ma1 bg-near-white pa2" id="citySel">
    <option value="Denver" selected>Denver</option>
  </select>
  <a id="selectMetro" class="f6 link dim ph3 pv2 ma1 dib white bg-light-red" href="/crags/denver-colorado-weather.html">Select Metro</a>
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
  var weekly_BOU_48_51 = {"updated":"2022-10-23T20:34:42+00:00","units":"us","forecastGenerator":"BaselineForecastGenerator","generatedAt":"2022-10-24T08:47:30+00:00","updateTime":"2022-10-23T20:34:42+00:00","validTimes":"2022-10-23T14:00:00+00:00/P7DT11H","elevation":{"unitCode":"wmoUnit:m","value":2628.9},"periods":[{"number":1,"name":"Overnight","startTime":"2022-10-24T02:00:00-06:00","endTime":"2022-10-24T06:00:00-06:00","isDaytime":false,"temperature":14,"temperatureUnit":"F","temperatureTrend":"rising","windSpeed":"9 mph","windDirection":"WNW","icon":"https://api.weather.gov/icons/land/night/snow,30?size=medium","shortForecast":"Chance Snow Showers","detailedForecast":"A chance of snow showers. Mostly cloudy. Low around 14, with temperatures rising to around 16 overnight. West northwest wind around 9 mph, with gusts as high as 16 mph. Chance of precipitation is 30%."},{"number":2,"name":"Monday","startTime":"2022-10-24T06:00:00-06:00","endTime":"2022-10-24T18:00:00-06:00","isDaytime":true,"temperature":39,"temperatureUnit":"F","temperatureTrend":"falling","windSpeed":"8 to 12 mph","windDirection":"NW","icon":"https://api.weather.gov/icons/land/day/snow,20/sct?size=medium","shortForecast":"Slight Chance Snow Showers then Mostly Sunny","detailedForecast":"A slight chance of snow showers before noon. Mostly sunny. High near 39, with temperatures falling to around 34 in the afternoon. Northwest wind 8 to 12 mph, with gusts as high as 18 mph. Chance of precipitation is 20%."},{"number":3,"name":"Monday Night","startTime":"2022-10-24T18:00:00-06:00","endTime":"2022-10-25T06:00:00-06:00","isDaytime":false,"temperature":20,"temperatureUnit":"F","temperatureTrend":"rising","windSpeed":"12 to 16 mph","windDirection":"WNW","icon":"https://api.weather.gov/icons/land/night/few?size=medium","shortForecast":"Mostly Clear","detailedForecast":"Mostly clear. Low around 20, with temperatures rising to around 23 overnight. West northwest wind 12 to 16 mph, with gusts as high as 25 mph."},{"number":4,"name":"Tuesday","startTime":"2022-10-25T06:00:00-06:00","endTime":"2022-10-25T18:00:00-06:00","isDaytime":true,"temperature":48,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"10 to 15 mph","windDirection":"WNW","icon":"https://api.weather.gov/icons/land/day/sct?size=medium","shortForecast":"Mostly Sunny","detailedForecast":"Mostly sunny, with a high near 48. West northwest wind 10 to 15 mph, with gusts as high as 24 mph."},{"number":5,"name":"Tuesday Night","startTime":"2022-10-25T18:00:00-06:00","endTime":"2022-10-26T06:00:00-06:00","isDaytime":false,"temperature":21,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"5 to 10 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/night/bkn?size=medium","shortForecast":"Mostly Cloudy","detailedForecast":"Mostly cloudy, with a low around 21. West wind 5 to 10 mph."},{"number":6,"name":"Wednesday","startTime":"2022-10-26T06:00:00-06:00","endTime":"2022-10-26T18:00:00-06:00","isDaytime":true,"temperature":48,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"7 to 12 mph","windDirection":"WSW","icon":"https://api.weather.gov/icons/land/day/bkn/snow,20?size=medium","shortForecast":"Partly Sunny then Slight Chance Snow Showers","detailedForecast":"A slight chance of snow showers after noon. Partly sunny, with a high near 48. Chance of precipitation is 20%."},{"number":7,"name":"Wednesday Night","startTime":"2022-10-26T18:00:00-06:00","endTime":"2022-10-27T06:00:00-06:00","isDaytime":false,"temperature":20,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"8 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/night/snow,30/snow,40?size=medium","shortForecast":"Chance Snow Showers","detailedForecast":"A chance of snow showers. Mostly cloudy, with a low around 20. Chance of precipitation is 40%. Little or no snow accumulation expected."},{"number":8,"name":"Thursday","startTime":"2022-10-27T06:00:00-06:00","endTime":"2022-10-27T18:00:00-06:00","isDaytime":true,"temperature":36,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"12 mph","windDirection":"N","icon":"https://api.weather.gov/icons/land/day/snow?size=medium","shortForecast":"Snow Showers Likely","detailedForecast":"Snow showers likely. Mostly cloudy, with a high near 36. New snow accumulation of 1 to 2 inches possible."},{"number":9,"name":"Thursday Night","startTime":"2022-10-27T18:00:00-06:00","endTime":"2022-10-28T06:00:00-06:00","isDaytime":false,"temperature":13,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"7 mph","windDirection":"NW","icon":"https://api.weather.gov/icons/land/night/snow/sct?size=medium","shortForecast":"Slight Chance Snow Showers then Partly Cloudy","detailedForecast":"A slight chance of snow showers before midnight. Partly cloudy, with a low around 13. New snow accumulation of less than half an inch possible."},{"number":10,"name":"Friday","startTime":"2022-10-28T06:00:00-06:00","endTime":"2022-10-28T18:00:00-06:00","isDaytime":true,"temperature":46,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"9 mph","windDirection":"S","icon":"https://api.weather.gov/icons/land/day/few?size=medium","shortForecast":"Sunny","detailedForecast":"Sunny, with a high near 46."},{"number":11,"name":"Friday Night","startTime":"2022-10-28T18:00:00-06:00","endTime":"2022-10-29T06:00:00-06:00","isDaytime":false,"temperature":18,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"6 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/night/few?size=medium","shortForecast":"Mostly Clear","detailedForecast":"Mostly clear, with a low around 18."},{"number":12,"name":"Saturday","startTime":"2022-10-29T06:00:00-06:00","endTime":"2022-10-29T18:00:00-06:00","isDaytime":true,"temperature":50,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"9 mph","windDirection":"N","icon":"https://api.weather.gov/icons/land/day/sct?size=medium","shortForecast":"Mostly Sunny","detailedForecast":"Mostly sunny, with a high near 50."},{"number":13,"name":"Saturday Night","startTime":"2022-10-29T18:00:00-06:00","endTime":"2022-10-30T06:00:00-06:00","isDaytime":false,"temperature":20,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"7 mph","windDirection":"WNW","icon":"https://api.weather.gov/icons/land/night/sct?size=medium","shortForecast":"Partly Cloudy","detailedForecast":"Partly cloudy, with a low around 20."},{"number":14,"name":"Sunday","startTime":"2022-10-30T06:00:00-06:00","endTime":"2022-10-30T18:00:00-06:00","isDaytime":true,"temperature":49,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"9 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/day/sct?size=medium","shortForecast":"Mostly Sunny","detailedForecast":"Mostly sunny, with a high near 49."}]}
  var hourly_BOU_48_51 = false
  var crags_config = [
  {
    "name": "Staunton State Park",
    "note": "Interesting and featured rock",
    "mountainProject": "https://www.mountainproject.com/area/107838839/staunton-state-park",
    "station": "KAPA",
    "office": "BOU/48,51",
    "coordinates": [
      -105.379,
      39.499
    ]
  }
]</script>

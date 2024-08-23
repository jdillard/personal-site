---
### THIS FILE IS AUTO-GENERATED - DO NOT EDIT ###
layout: page
title: Georgetown, Texas Climbing Weather - Current, Past, and Forecasted
title_override: Georgetown<br /><small>Climbing Weather</small>
description: A lightweight weather report for Georgetown, Texas. Optimized for slow internet connections.
js_includes:
  - weather.js
---

<section class="measure center lh-copy f5-ns f6 ph2 mv4" style="text-align: justify;">
<strong>"Is it dry?"</strong>, an oft-repeated, age-old question. Here are real-time,
precipitation-focused reports of current, past, and forecasted climbing weather for Georgetown, Texas.
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
<section id="weather" data-crag="georgetown-texas" class="mv4-ns mv3 ph2 center"></section>
<section id="nearby" class="tc lh-copy">
  <h3>Nearby Crags</h3>
<a class="nowrap no-underline fancy-link relative light-red mh3" href="/crags/the-greenbelt-texas-weather.html">The Greenbelt</a>
<a class="nowrap no-underline fancy-link relative light-red mh3" href="/crags/continental-ranch-texas-weather.html">Continental Ranch</a>
<a class="nowrap no-underline fancy-link relative light-red mh3" href="/crags/pace-bend-park-texas-weather.html">Pace Bend Park</a>
<a class="nowrap no-underline fancy-link relative light-red mh3" href="/crags/reimers-ranch-texas-weather.html">Reimer's Ranch</a>
<a class="nowrap no-underline fancy-link relative light-red mh3" href="/crags/cochise-stronghold-arizona-weather.html">Cochise Stronghold</a>
<a class="nowrap no-underline fancy-link relative light-red mh3" href="/crags/enchanted-rock-texas-weather.html">Enchanted Rock</a>
<a class="nowrap no-underline fancy-link relative light-red mh3" href="/crags/horseshoe-canyon-ranch-arkansas-weather.html">Horseshoe Canyon Ranch</a>
<a class="nowrap no-underline fancy-link relative light-red mh3" href="/crags/last-chance-canyon-new-mexico-weather.html">Last Chance Canyon</a>
<a class="nowrap no-underline fancy-link relative light-red mh3" href="/crags/mckinney-falls-texas-weather.html">McKinney Falls</a>
<a class="nowrap no-underline fancy-link relative light-red mh3" href="/crags/hueco-tanks-texas-weather.html">Hueco Tanks</a>
</section>
<section id="nearby" class="tc lh-copy">
  <h3>Other Metros</h3>
  <select class="ma1 bg-near-white pa2" id="stateSel">
    <option value="Texas" selected>Texas</option>
    <option value="Washington">Washington</option>
    <option value="Colorado">Colorado</option>
    <option value="Tennessee">Tennessee</option>
    <option value="Utah">Utah</option>
    <option value="California">California</option>
  </select>
  <select class="ma1 bg-near-white pa2" id="citySel">
    <option value="Austin" selected>Austin</option>
  </select>
  <a id="selectMetro" class="f6 link dim ph3 pv2 ma1 dib white bg-light-red" href="/crags/austin-texas-weather.html">Select Metro</a>
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
  var weekly_EWX_157_106 = {"units":"us","forecastGenerator":"BaselineForecastGenerator","generatedAt":"2024-08-23T08:34:07+00:00","updateTime":"2024-08-23T07:42:30+00:00","validTimes":"2024-08-23T01:00:00+00:00/P8D","elevation":{"unitCode":"wmoUnit:m","value":242.9256},"periods":[{"number":1,"name":"Overnight","startTime":"2024-08-23T03:00:00-05:00","endTime":"2024-08-23T06:00:00-05:00","isDaytime":false,"temperature":79,"temperatureUnit":"F","temperatureTrend":"","probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"windSpeed":"10 mph","windDirection":"S","icon":"https://api.weather.gov/icons/land/night/few?size=medium","shortForecast":"Mostly Clear","detailedForecast":"Mostly clear, with a low around 79. South wind around 10 mph."},{"number":2,"name":"Friday","startTime":"2024-08-23T06:00:00-05:00","endTime":"2024-08-23T18:00:00-05:00","isDaytime":true,"temperature":99,"temperatureUnit":"F","temperatureTrend":"","probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":20},"windSpeed":"5 to 10 mph","windDirection":"SSE","icon":"https://api.weather.gov/icons/land/day/hot/tsra_hi,20?size=medium","shortForecast":"Sunny then Slight Chance Showers And Thunderstorms","detailedForecast":"A slight chance of showers and thunderstorms after 1pm. Sunny, with a high near 99. Heat index values as high as 107. South southeast wind 5 to 10 mph. Chance of precipitation is 20%. New rainfall amounts between a tenth and quarter of an inch possible."},{"number":3,"name":"Friday Night","startTime":"2024-08-23T18:00:00-05:00","endTime":"2024-08-24T06:00:00-05:00","isDaytime":false,"temperature":77,"temperatureUnit":"F","temperatureTrend":"","probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":20},"windSpeed":"5 to 10 mph","windDirection":"SSE","icon":"https://api.weather.gov/icons/land/night/tsra_hi,20/sct?size=medium","shortForecast":"Slight Chance Showers And Thunderstorms then Partly Cloudy","detailedForecast":"A slight chance of showers and thunderstorms before 7pm. Partly cloudy, with a low around 77. Heat index values as high as 104. South southeast wind 5 to 10 mph. Chance of precipitation is 20%. New rainfall amounts between a tenth and quarter of an inch possible."},{"number":4,"name":"Saturday","startTime":"2024-08-24T06:00:00-05:00","endTime":"2024-08-24T18:00:00-05:00","isDaytime":true,"temperature":98,"temperatureUnit":"F","temperatureTrend":"","probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"windSpeed":"5 to 10 mph","windDirection":"SSE","icon":"https://api.weather.gov/icons/land/day/few?size=medium","shortForecast":"Sunny","detailedForecast":"Sunny, with a high near 98. Heat index values as high as 104. South southeast wind 5 to 10 mph."},{"number":5,"name":"Saturday Night","startTime":"2024-08-24T18:00:00-05:00","endTime":"2024-08-25T06:00:00-05:00","isDaytime":false,"temperature":73,"temperatureUnit":"F","temperatureTrend":"","probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"windSpeed":"0 to 10 mph","windDirection":"SSE","icon":"https://api.weather.gov/icons/land/night/few?size=medium","shortForecast":"Mostly Clear","detailedForecast":"Mostly clear, with a low around 73. South southeast wind 0 to 10 mph."},{"number":6,"name":"Sunday","startTime":"2024-08-25T06:00:00-05:00","endTime":"2024-08-25T18:00:00-05:00","isDaytime":true,"temperature":97,"temperatureUnit":"F","temperatureTrend":"","probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"windSpeed":"0 to 10 mph","windDirection":"SE","icon":"https://api.weather.gov/icons/land/day/few?size=medium","shortForecast":"Sunny","detailedForecast":"Sunny, with a high near 97. Southeast wind 0 to 10 mph."},{"number":7,"name":"Sunday Night","startTime":"2024-08-25T18:00:00-05:00","endTime":"2024-08-26T06:00:00-05:00","isDaytime":false,"temperature":74,"temperatureUnit":"F","temperatureTrend":"","probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"windSpeed":"5 to 10 mph","windDirection":"SE","icon":"https://api.weather.gov/icons/land/night/few?size=medium","shortForecast":"Mostly Clear","detailedForecast":"Mostly clear, with a low around 74. Southeast wind 5 to 10 mph."},{"number":8,"name":"Monday","startTime":"2024-08-26T06:00:00-05:00","endTime":"2024-08-26T18:00:00-05:00","isDaytime":true,"temperature":96,"temperatureUnit":"F","temperatureTrend":"","probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"windSpeed":"0 to 10 mph","windDirection":"SE","icon":"https://api.weather.gov/icons/land/day/few?size=medium","shortForecast":"Sunny","detailedForecast":"Sunny, with a high near 96. Southeast wind 0 to 10 mph."},{"number":9,"name":"Monday Night","startTime":"2024-08-26T18:00:00-05:00","endTime":"2024-08-27T06:00:00-05:00","isDaytime":false,"temperature":73,"temperatureUnit":"F","temperatureTrend":"","probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"windSpeed":"0 to 10 mph","windDirection":"SE","icon":"https://api.weather.gov/icons/land/night/sct?size=medium","shortForecast":"Partly Cloudy","detailedForecast":"Partly cloudy, with a low around 73. Southeast wind 0 to 10 mph."},{"number":10,"name":"Tuesday","startTime":"2024-08-27T06:00:00-05:00","endTime":"2024-08-27T18:00:00-05:00","isDaytime":true,"temperature":96,"temperatureUnit":"F","temperatureTrend":"","probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":20},"windSpeed":"0 to 5 mph","windDirection":"SE","icon":"https://api.weather.gov/icons/land/day/sct/tsra_hi,20?size=medium","shortForecast":"Mostly Sunny then Slight Chance Showers And Thunderstorms","detailedForecast":"A slight chance of showers and thunderstorms after 1pm. Mostly sunny, with a high near 96. Chance of precipitation is 20%."},{"number":11,"name":"Tuesday Night","startTime":"2024-08-27T18:00:00-05:00","endTime":"2024-08-28T06:00:00-05:00","isDaytime":false,"temperature":74,"temperatureUnit":"F","temperatureTrend":"","probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":20},"windSpeed":"0 to 5 mph","windDirection":"SE","icon":"https://api.weather.gov/icons/land/night/tsra_hi,20/sct?size=medium","shortForecast":"Slight Chance Showers And Thunderstorms then Partly Cloudy","detailedForecast":"A slight chance of showers and thunderstorms before 7pm. Partly cloudy, with a low around 74. Chance of precipitation is 20%."},{"number":12,"name":"Wednesday","startTime":"2024-08-28T06:00:00-05:00","endTime":"2024-08-28T18:00:00-05:00","isDaytime":true,"temperature":95,"temperatureUnit":"F","temperatureTrend":"","probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"windSpeed":"0 to 5 mph","windDirection":"SE","icon":"https://api.weather.gov/icons/land/day/sct?size=medium","shortForecast":"Mostly Sunny","detailedForecast":"Mostly sunny, with a high near 95."},{"number":13,"name":"Wednesday Night","startTime":"2024-08-28T18:00:00-05:00","endTime":"2024-08-29T06:00:00-05:00","isDaytime":false,"temperature":74,"temperatureUnit":"F","temperatureTrend":"","probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"windSpeed":"5 mph","windDirection":"SE","icon":"https://api.weather.gov/icons/land/night/sct?size=medium","shortForecast":"Partly Cloudy","detailedForecast":"Partly cloudy, with a low around 74."},{"number":14,"name":"Thursday","startTime":"2024-08-29T06:00:00-05:00","endTime":"2024-08-29T18:00:00-05:00","isDaytime":true,"temperature":95,"temperatureUnit":"F","temperatureTrend":"","probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"windSpeed":"0 to 5 mph","windDirection":"SE","icon":"https://api.weather.gov/icons/land/day/sct?size=medium","shortForecast":"Mostly Sunny","detailedForecast":"Mostly sunny, with a high near 95."}]}
  var hourly_EWX_157_106 = false
  var crags_config = [
  {
    "name": "Georgetown",
    "note": "Porous limestone that can take a couple days to dry out.",
    "mountainProject": "https://www.mountainproject.com/area/106715082/georgetown-hospital",
    "station": "KGTU",
    "office": "EWX/157,106",
    "coordinates": [
      -97.69,
      30.627
    ]
  }
]</script>

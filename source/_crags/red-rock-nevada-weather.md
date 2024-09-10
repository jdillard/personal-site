---
### THIS FILE IS AUTO-GENERATED - DO NOT EDIT ###
layout: page
title: Red Rock, Nevada Climbing Weather - Current, Past, and Forecasted
title_override: Red Rock<br /><small>Climbing Weather</small>
description: A lightweight weather report for Red Rock, Nevada. Optimized for slow internet connections.
js_includes:
  - weather.js
---

<section class="measure center lh-copy f5-ns f6 ph2 mv4" style="text-align: justify;">
<strong>"Is it dry?"</strong>, an oft-repeated, age-old question. Here are real-time,
precipitation-focused reports of current, past, and forecasted climbing weather for Red Rock, Nevada.
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
<section id="weather" data-crag="red-rock-nevada" class="mv4-ns mv3 ph2 center"></section>
<section id="nearby" class="tc lh-copy">
  <h3>Nearby Crags</h3>
<a class="nowrap no-underline fancy-link relative light-red mh3" href="/crags/joshua-tree-national-park-california-weather.html">Joshua Tree National Park</a>
<a class="nowrap no-underline fancy-link relative light-red mh3" href="/crags/yosemite-national-park-california-weather.html">Yosemite National Park</a>
<a class="nowrap no-underline fancy-link relative light-red mh3" href="/crags/bishop-california-weather.html">Bishop</a>
<a class="nowrap no-underline fancy-link relative light-red mh3" href="/crags/mammoth-lakes-california-weather.html">Mammoth Lakes</a>
</section>
<section id="nearby" class="tc lh-copy">
  <h3>Other Metros</h3>
  <select class="ma1 bg-near-white pa2" id="stateSel">
    <option value="Texas">Texas</option>
    <option value="Washington">Washington</option>
    <option value="Colorado">Colorado</option>
    <option value="Tennessee">Tennessee</option>
    <option value="Utah">Utah</option>
    <option value="California" selected>California</option>
  </select>
  <select class="ma1 bg-near-white pa2" id="citySel">
    <option value="San Francisco" selected>San Francisco</option>
    <option value="Los Angeles">Los Angeles</option>
  </select>
  <a id="selectMetro" class="f6 link dim ph3 pv2 ma1 dib white bg-light-red" href="/crags/san-francisco-california-weather.html">Select Metro</a>
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
  var weekly_VEF_111_97 = {"units":"us","forecastGenerator":"BaselineForecastGenerator","generatedAt":"2024-09-10T08:35:18+00:00","updateTime":"2024-09-10T07:18:26+00:00","validTimes":"2024-09-10T01:00:00+00:00/P8DT6H","elevation":{"unitCode":"wmoUnit:m","value":1202.1312},"periods":[{"number":1,"name":"Overnight","startTime":"2024-09-10T01:00:00-07:00","endTime":"2024-09-10T06:00:00-07:00","isDaytime":false,"temperature":76,"temperatureUnit":"F","temperatureTrend":"","probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"windSpeed":"10 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/night/skc?size=medium","shortForecast":"Clear","detailedForecast":"Clear. Low around 76, with temperatures rising to around 78 overnight. West wind around 10 mph."},{"number":2,"name":"Tuesday","startTime":"2024-09-10T06:00:00-07:00","endTime":"2024-09-10T18:00:00-07:00","isDaytime":true,"temperature":96,"temperatureUnit":"F","temperatureTrend":"","probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"windSpeed":"10 to 18 mph","windDirection":"WSW","icon":"https://api.weather.gov/icons/land/day/few?size=medium","shortForecast":"Sunny","detailedForecast":"Sunny. High near 96, with temperatures falling to around 94 in the afternoon. West southwest wind 10 to 18 mph, with gusts as high as 29 mph."},{"number":3,"name":"Tuesday Night","startTime":"2024-09-10T18:00:00-07:00","endTime":"2024-09-11T06:00:00-07:00","isDaytime":false,"temperature":70,"temperatureUnit":"F","temperatureTrend":"","probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"windSpeed":"14 to 20 mph","windDirection":"WSW","icon":"https://api.weather.gov/icons/land/night/sct?size=medium","shortForecast":"Partly Cloudy","detailedForecast":"Partly cloudy. Low around 70, with temperatures rising to around 72 overnight. West southwest wind 14 to 20 mph, with gusts as high as 29 mph."},{"number":4,"name":"Wednesday","startTime":"2024-09-11T06:00:00-07:00","endTime":"2024-09-11T18:00:00-07:00","isDaytime":true,"temperature":92,"temperatureUnit":"F","temperatureTrend":"","probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"windSpeed":"13 to 18 mph","windDirection":"SW","icon":"https://api.weather.gov/icons/land/day/skc?size=medium","shortForecast":"Sunny","detailedForecast":"Sunny, with a high near 92. Southwest wind 13 to 18 mph, with gusts as high as 29 mph."},{"number":5,"name":"Wednesday Night","startTime":"2024-09-11T18:00:00-07:00","endTime":"2024-09-12T06:00:00-07:00","isDaytime":false,"temperature":63,"temperatureUnit":"F","temperatureTrend":"","probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"windSpeed":"15 to 20 mph","windDirection":"WSW","icon":"https://api.weather.gov/icons/land/night/skc?size=medium","shortForecast":"Clear","detailedForecast":"Clear, with a low around 63. West southwest wind 15 to 20 mph, with gusts as high as 31 mph."},{"number":6,"name":"Thursday","startTime":"2024-09-12T06:00:00-07:00","endTime":"2024-09-12T18:00:00-07:00","isDaytime":true,"temperature":87,"temperatureUnit":"F","temperatureTrend":"","probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"windSpeed":"7 to 14 mph","windDirection":"NNW","icon":"https://api.weather.gov/icons/land/day/skc?size=medium","shortForecast":"Sunny","detailedForecast":"Sunny, with a high near 87."},{"number":7,"name":"Thursday Night","startTime":"2024-09-12T18:00:00-07:00","endTime":"2024-09-13T06:00:00-07:00","isDaytime":false,"temperature":65,"temperatureUnit":"F","temperatureTrend":"","probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"windSpeed":"8 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/night/few?size=medium","shortForecast":"Mostly Clear","detailedForecast":"Mostly clear, with a low around 65."},{"number":8,"name":"Friday","startTime":"2024-09-13T06:00:00-07:00","endTime":"2024-09-13T18:00:00-07:00","isDaytime":true,"temperature":89,"temperatureUnit":"F","temperatureTrend":"","probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"windSpeed":"6 to 10 mph","windDirection":"ESE","icon":"https://api.weather.gov/icons/land/day/skc?size=medium","shortForecast":"Sunny","detailedForecast":"Sunny, with a high near 89."},{"number":9,"name":"Friday Night","startTime":"2024-09-13T18:00:00-07:00","endTime":"2024-09-14T06:00:00-07:00","isDaytime":false,"temperature":66,"temperatureUnit":"F","temperatureTrend":"","probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"windSpeed":"6 to 10 mph","windDirection":"S","icon":"https://api.weather.gov/icons/land/night/skc?size=medium","shortForecast":"Clear","detailedForecast":"Clear, with a low around 66."},{"number":10,"name":"Saturday","startTime":"2024-09-14T06:00:00-07:00","endTime":"2024-09-14T18:00:00-07:00","isDaytime":true,"temperature":89,"temperatureUnit":"F","temperatureTrend":"","probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"windSpeed":"7 to 13 mph","windDirection":"SE","icon":"https://api.weather.gov/icons/land/day/few?size=medium","shortForecast":"Sunny","detailedForecast":"Sunny, with a high near 89."},{"number":11,"name":"Saturday Night","startTime":"2024-09-14T18:00:00-07:00","endTime":"2024-09-15T06:00:00-07:00","isDaytime":false,"temperature":67,"temperatureUnit":"F","temperatureTrend":"","probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"windSpeed":"6 to 12 mph","windDirection":"SSW","icon":"https://api.weather.gov/icons/land/night/few?size=medium","shortForecast":"Mostly Clear","detailedForecast":"Mostly clear, with a low around 67."},{"number":12,"name":"Sunday","startTime":"2024-09-15T06:00:00-07:00","endTime":"2024-09-15T18:00:00-07:00","isDaytime":true,"temperature":90,"temperatureUnit":"F","temperatureTrend":"","probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"windSpeed":"6 to 14 mph","windDirection":"SSE","icon":"https://api.weather.gov/icons/land/day/skc?size=medium","shortForecast":"Sunny","detailedForecast":"Sunny, with a high near 90."},{"number":13,"name":"Sunday Night","startTime":"2024-09-15T18:00:00-07:00","endTime":"2024-09-16T06:00:00-07:00","isDaytime":false,"temperature":66,"temperatureUnit":"F","temperatureTrend":"","probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"windSpeed":"14 mph","windDirection":"SSW","icon":"https://api.weather.gov/icons/land/night/few?size=medium","shortForecast":"Mostly Clear","detailedForecast":"Mostly clear, with a low around 66."},{"number":14,"name":"Monday","startTime":"2024-09-16T06:00:00-07:00","endTime":"2024-09-16T18:00:00-07:00","isDaytime":true,"temperature":86,"temperatureUnit":"F","temperatureTrend":"","probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"windSpeed":"13 to 16 mph","windDirection":"SSW","icon":"https://api.weather.gov/icons/land/day/tsra_hi?size=medium","shortForecast":"Slight Chance Showers And Thunderstorms","detailedForecast":"A slight chance of showers and thunderstorms after 11am. Sunny, with a high near 86."}]}
  var hourly_VEF_111_97 = false
  var crags_config = [
  {
    "name": "Red Rock",
    "note": "Sandstone that can be fragile when wet.",
    "mountainProject": "https://www.mountainproject.com/area/105731932/red-rock",
    "station": "KYCN2",
    "office": "VEF/111,97",
    "coordinates": [
      -115.427,
      36.135
    ]
  }
]</script>

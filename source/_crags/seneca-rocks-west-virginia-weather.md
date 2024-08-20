---
### THIS FILE IS AUTO-GENERATED - DO NOT EDIT ###
layout: page
title: Seneca Rocks, West Virginia Climbing Weather - Current, Past, and Forecasted
title_override: Seneca Rocks<br /><small>Climbing Weather</small>
description: A lightweight weather report for Seneca Rocks, West Virginia. Optimized for slow internet connections.
js_includes:
  - weather.js
---

<section class="measure center lh-copy f5-ns f6 ph2 mv4" style="text-align: justify;">
<strong>"Is it dry?"</strong>, an oft-repeated, age-old question. Here are real-time,
precipitation-focused reports of current, past, and forecasted climbing weather for Seneca Rocks, West Virginia.
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
<section id="weather" data-crag="seneca-rocks-west-virginia" class="mv4-ns mv3 ph2 center"></section>
<section id="nearby" class="tc lh-copy">
  <h3>Nearby Crags</h3>
<a class="nowrap no-underline fancy-link relative light-red mh3" href="/crags/jackson-falls-illinois-weather.html">Jackson Falls</a>
<a class="nowrap no-underline fancy-link relative light-red mh3" href="/crags/red-river-gorge-kentucky-weather.html">Red River Gorge</a>
<a class="nowrap no-underline fancy-link relative light-red mh3" href="/crags/foster-falls-tennessee-weather.html">Foster Falls</a>
</section>
<section id="nearby" class="tc lh-copy">
  <h3>Other Metros</h3>
  <select class="ma1 bg-near-white pa2" id="stateSel">
    <option value="Texas">Texas</option>
    <option value="Washington">Washington</option>
    <option value="Colorado">Colorado</option>
    <option value="Tennessee" selected>Tennessee</option>
    <option value="Utah">Utah</option>
    <option value="California">California</option>
  </select>
  <select class="ma1 bg-near-white pa2" id="citySel">
    <option value="Nashville" selected>Nashville</option>
  </select>
  <a id="selectMetro" class="f6 link dim ph3 pv2 ma1 dib white bg-light-red" href="/crags/nashville-tennessee-weather.html">Select Metro</a>
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
  var weekly_LWX_14_57 = {"units":"us","forecastGenerator":"BaselineForecastGenerator","generatedAt":"2024-08-20T08:34:30+00:00","updateTime":"2024-08-20T08:30:08+00:00","validTimes":"2024-08-20T02:00:00+00:00/P7DT23H","elevation":{"unitCode":"wmoUnit:m","value":729.996},"periods":[{"number":1,"name":"Overnight","startTime":"2024-08-20T04:00:00-04:00","endTime":"2024-08-20T06:00:00-04:00","isDaytime":false,"temperature":56,"temperatureUnit":"F","temperatureTrend":"","probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":30},"windSpeed":"8 mph","windDirection":"NW","icon":"https://api.weather.gov/icons/land/night/rain_showers,30?size=medium","shortForecast":"Scattered Rain Showers","detailedForecast":"Scattered rain showers. Mostly cloudy, with a low around 56. Northwest wind around 8 mph. Chance of precipitation is 30%."},{"number":2,"name":"Tuesday","startTime":"2024-08-20T06:00:00-04:00","endTime":"2024-08-20T18:00:00-04:00","isDaytime":true,"temperature":71,"temperatureUnit":"F","temperatureTrend":"","probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":30},"windSpeed":"8 to 13 mph","windDirection":"NW","icon":"https://api.weather.gov/icons/land/day/rain_showers,30/bkn?size=medium","shortForecast":"Scattered Rain Showers then Partly Sunny","detailedForecast":"Scattered rain showers before 11am. Partly sunny, with a high near 71. Northwest wind 8 to 13 mph, with gusts as high as 20 mph. Chance of precipitation is 30%."},{"number":3,"name":"Tuesday Night","startTime":"2024-08-20T18:00:00-04:00","endTime":"2024-08-21T06:00:00-04:00","isDaytime":false,"temperature":46,"temperatureUnit":"F","temperatureTrend":"","probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"windSpeed":"3 to 12 mph","windDirection":"NW","icon":"https://api.weather.gov/icons/land/night/sct/fog?size=medium","shortForecast":"Partly Cloudy then Patchy Fog","detailedForecast":"Patchy fog after 3am. Partly cloudy, with a low around 46. Northwest wind 3 to 12 mph."},{"number":4,"name":"Wednesday","startTime":"2024-08-21T06:00:00-04:00","endTime":"2024-08-21T18:00:00-04:00","isDaytime":true,"temperature":75,"temperatureUnit":"F","temperatureTrend":"","probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"windSpeed":"3 to 10 mph","windDirection":"NW","icon":"https://api.weather.gov/icons/land/day/fog/few?size=medium","shortForecast":"Patchy Fog then Sunny","detailedForecast":"Patchy fog before 8am. Sunny, with a high near 75. Northwest wind 3 to 10 mph."},{"number":5,"name":"Wednesday Night","startTime":"2024-08-21T18:00:00-04:00","endTime":"2024-08-22T06:00:00-04:00","isDaytime":false,"temperature":46,"temperatureUnit":"F","temperatureTrend":"","probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"windSpeed":"2 to 8 mph","windDirection":"NW","icon":"https://api.weather.gov/icons/land/night/few?size=medium","shortForecast":"Mostly Clear","detailedForecast":"Mostly clear, with a low around 46. Northwest wind 2 to 8 mph."},{"number":6,"name":"Thursday","startTime":"2024-08-22T06:00:00-04:00","endTime":"2024-08-22T18:00:00-04:00","isDaytime":true,"temperature":76,"temperatureUnit":"F","temperatureTrend":"","probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"windSpeed":"1 to 5 mph","windDirection":"N","icon":"https://api.weather.gov/icons/land/day/few?size=medium","shortForecast":"Sunny","detailedForecast":"Sunny, with a high near 76."},{"number":7,"name":"Thursday Night","startTime":"2024-08-22T18:00:00-04:00","endTime":"2024-08-23T06:00:00-04:00","isDaytime":false,"temperature":50,"temperatureUnit":"F","temperatureTrend":"","probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"windSpeed":"3 mph","windDirection":"SE","icon":"https://api.weather.gov/icons/land/night/few?size=medium","shortForecast":"Mostly Clear","detailedForecast":"Mostly clear, with a low around 50."},{"number":8,"name":"Friday","startTime":"2024-08-23T06:00:00-04:00","endTime":"2024-08-23T18:00:00-04:00","isDaytime":true,"temperature":81,"temperatureUnit":"F","temperatureTrend":"","probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"windSpeed":"3 mph","windDirection":"S","icon":"https://api.weather.gov/icons/land/day/few?size=medium","shortForecast":"Sunny","detailedForecast":"Sunny, with a high near 81."},{"number":9,"name":"Friday Night","startTime":"2024-08-23T18:00:00-04:00","endTime":"2024-08-24T06:00:00-04:00","isDaytime":false,"temperature":56,"temperatureUnit":"F","temperatureTrend":"","probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"windSpeed":"3 mph","windDirection":"SW","icon":"https://api.weather.gov/icons/land/night/few?size=medium","shortForecast":"Mostly Clear","detailedForecast":"Mostly clear, with a low around 56."},{"number":10,"name":"Saturday","startTime":"2024-08-24T06:00:00-04:00","endTime":"2024-08-24T18:00:00-04:00","isDaytime":true,"temperature":83,"temperatureUnit":"F","temperatureTrend":"","probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"windSpeed":"5 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/day/few?size=medium","shortForecast":"Sunny","detailedForecast":"Sunny, with a high near 83."},{"number":11,"name":"Saturday Night","startTime":"2024-08-24T18:00:00-04:00","endTime":"2024-08-25T06:00:00-04:00","isDaytime":false,"temperature":59,"temperatureUnit":"F","temperatureTrend":"","probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"windSpeed":"3 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/night/few?size=medium","shortForecast":"Mostly Clear","detailedForecast":"Mostly clear, with a low around 59."},{"number":12,"name":"Sunday","startTime":"2024-08-25T06:00:00-04:00","endTime":"2024-08-25T18:00:00-04:00","isDaytime":true,"temperature":84,"temperatureUnit":"F","temperatureTrend":"","probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"windSpeed":"5 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/day/few?size=medium","shortForecast":"Sunny","detailedForecast":"Sunny, with a high near 84."},{"number":13,"name":"Sunday Night","startTime":"2024-08-25T18:00:00-04:00","endTime":"2024-08-26T06:00:00-04:00","isDaytime":false,"temperature":61,"temperatureUnit":"F","temperatureTrend":"","probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"windSpeed":"3 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/night/few?size=medium","shortForecast":"Mostly Clear","detailedForecast":"Mostly clear, with a low around 61."},{"number":14,"name":"Monday","startTime":"2024-08-26T06:00:00-04:00","endTime":"2024-08-26T18:00:00-04:00","isDaytime":true,"temperature":86,"temperatureUnit":"F","temperatureTrend":"","probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"windSpeed":"2 to 6 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/day/few?size=medium","shortForecast":"Sunny","detailedForecast":"Sunny, with a high near 86."}]}
  var hourly_LWX_14_57 = false
  var crags_config = [
  {
    "name": "Seneca Rocks",
    "note": "White Tuscarora quartzite, which feels much like sandstone.",
    "mountainProject": "https://www.mountainproject.com/area/105861910/seneca-rocks",
    "station": "KW99",
    "office": "LWX/14,57",
    "coordinates": [
      -79.373,
      38.835
    ]
  }
]</script>

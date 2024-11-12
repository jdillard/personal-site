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
  var weekly_LWX_14_57 = {"units":"us","forecastGenerator":"BaselineForecastGenerator","generatedAt":"2024-11-12T08:35:56+00:00","updateTime":"2024-11-12T08:30:11+00:00","validTimes":"2024-11-12T02:00:00+00:00/P7DT23H","elevation":{"unitCode":"wmoUnit:m","value":729.996},"periods":[{"number":1,"name":"Overnight","startTime":"2024-11-12T03:00:00-05:00","endTime":"2024-11-12T06:00:00-05:00","isDaytime":false,"temperature":37,"temperatureUnit":"F","temperatureTrend":"","probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"windSpeed":"9 mph","windDirection":"NW","icon":"https://api.weather.gov/icons/land/night/bkn?size=medium","shortForecast":"Mostly Cloudy","detailedForecast":"Mostly cloudy, with a low around 37. Northwest wind around 9 mph, with gusts as high as 26 mph."},{"number":2,"name":"Tuesday","startTime":"2024-11-12T06:00:00-05:00","endTime":"2024-11-12T18:00:00-05:00","isDaytime":true,"temperature":49,"temperatureUnit":"F","temperatureTrend":"","probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"windSpeed":"7 to 10 mph","windDirection":"NW","icon":"https://api.weather.gov/icons/land/day/few?size=medium","shortForecast":"Sunny","detailedForecast":"Sunny, with a high near 49. Northwest wind 7 to 10 mph, with gusts as high as 23 mph."},{"number":3,"name":"Tuesday Night","startTime":"2024-11-12T18:00:00-05:00","endTime":"2024-11-13T06:00:00-05:00","isDaytime":false,"temperature":24,"temperatureUnit":"F","temperatureTrend":"","probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"windSpeed":"2 to 6 mph","windDirection":"NE","icon":"https://api.weather.gov/icons/land/night/few?size=medium","shortForecast":"Mostly Clear","detailedForecast":"Mostly clear, with a low around 24. Northeast wind 2 to 6 mph."},{"number":4,"name":"Wednesday","startTime":"2024-11-13T06:00:00-05:00","endTime":"2024-11-13T18:00:00-05:00","isDaytime":true,"temperature":51,"temperatureUnit":"F","temperatureTrend":"","probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"windSpeed":"6 mph","windDirection":"SE","icon":"https://api.weather.gov/icons/land/day/sct?size=medium","shortForecast":"Mostly Sunny","detailedForecast":"Mostly sunny, with a high near 51. Southeast wind around 6 mph."},{"number":5,"name":"Wednesday Night","startTime":"2024-11-13T18:00:00-05:00","endTime":"2024-11-14T06:00:00-05:00","isDaytime":false,"temperature":32,"temperatureUnit":"F","temperatureTrend":"","probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":20},"windSpeed":"7 mph","windDirection":"SE","icon":"https://api.weather.gov/icons/land/night/bkn/snow,20?size=medium","shortForecast":"Mostly Cloudy then Slight Chance Snow Showers","detailedForecast":"A slight chance of snow showers after 1am. Mostly cloudy, with a low around 32. Southeast wind around 7 mph, with gusts as high as 20 mph. Chance of precipitation is 20%."},{"number":6,"name":"Thursday","startTime":"2024-11-14T06:00:00-05:00","endTime":"2024-11-14T18:00:00-05:00","isDaytime":true,"temperature":45,"temperatureUnit":"F","temperatureTrend":"","probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":80},"windSpeed":"8 mph","windDirection":"S","icon":"https://api.weather.gov/icons/land/day/snow,60/rain_showers,80?size=medium","shortForecast":"Slight Chance Snow Showers then Rain Showers","detailedForecast":"A slight chance of snow showers before 7am, then rain showers. Mostly cloudy, with a high near 45. Chance of precipitation is 80%."},{"number":7,"name":"Thursday Night","startTime":"2024-11-14T18:00:00-05:00","endTime":"2024-11-15T06:00:00-05:00","isDaytime":false,"temperature":38,"temperatureUnit":"F","temperatureTrend":"","probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":80},"windSpeed":"7 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/night/rain_showers,80/rain_showers,60?size=medium","shortForecast":"Rain Showers","detailedForecast":"Rain showers. Mostly cloudy, with a low around 38. Chance of precipitation is 80%."},{"number":8,"name":"Friday","startTime":"2024-11-15T06:00:00-05:00","endTime":"2024-11-15T18:00:00-05:00","isDaytime":true,"temperature":49,"temperatureUnit":"F","temperatureTrend":"","probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":40},"windSpeed":"7 to 10 mph","windDirection":"NW","icon":"https://api.weather.gov/icons/land/day/rain_showers,40/rain_showers?size=medium","shortForecast":"Chance Rain Showers","detailedForecast":"A chance of rain showers. Partly sunny, with a high near 49. Chance of precipitation is 40%."},{"number":9,"name":"Friday Night","startTime":"2024-11-15T18:00:00-05:00","endTime":"2024-11-16T06:00:00-05:00","isDaytime":false,"temperature":36,"temperatureUnit":"F","temperatureTrend":"","probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"windSpeed":"7 to 10 mph","windDirection":"NW","icon":"https://api.weather.gov/icons/land/night/rain_showers/bkn?size=medium","shortForecast":"Slight Chance Rain Showers then Mostly Cloudy","detailedForecast":"A slight chance of rain showers before 7pm. Mostly cloudy, with a low around 36."},{"number":10,"name":"Saturday","startTime":"2024-11-16T06:00:00-05:00","endTime":"2024-11-16T18:00:00-05:00","isDaytime":true,"temperature":53,"temperatureUnit":"F","temperatureTrend":"","probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"windSpeed":"7 mph","windDirection":"NW","icon":"https://api.weather.gov/icons/land/day/few?size=medium","shortForecast":"Sunny","detailedForecast":"Sunny, with a high near 53."},{"number":11,"name":"Saturday Night","startTime":"2024-11-16T18:00:00-05:00","endTime":"2024-11-17T06:00:00-05:00","isDaytime":false,"temperature":34,"temperatureUnit":"F","temperatureTrend":"","probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"windSpeed":"2 to 6 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/night/few?size=medium","shortForecast":"Mostly Clear","detailedForecast":"Mostly clear, with a low around 34."},{"number":12,"name":"Sunday","startTime":"2024-11-17T06:00:00-05:00","endTime":"2024-11-17T18:00:00-05:00","isDaytime":true,"temperature":61,"temperatureUnit":"F","temperatureTrend":"","probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"windSpeed":"2 to 6 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/day/sct?size=medium","shortForecast":"Mostly Sunny","detailedForecast":"Mostly sunny, with a high near 61."},{"number":13,"name":"Sunday Night","startTime":"2024-11-17T18:00:00-05:00","endTime":"2024-11-18T06:00:00-05:00","isDaytime":false,"temperature":42,"temperatureUnit":"F","temperatureTrend":"","probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"windSpeed":"6 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/night/bkn/rain_showers?size=medium","shortForecast":"Mostly Cloudy then Slight Chance Rain Showers","detailedForecast":"A slight chance of rain showers after 1am. Mostly cloudy, with a low around 42."},{"number":14,"name":"Monday","startTime":"2024-11-18T06:00:00-05:00","endTime":"2024-11-18T18:00:00-05:00","isDaytime":true,"temperature":58,"temperatureUnit":"F","temperatureTrend":"","probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"windSpeed":"8 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/day/rain_showers?size=medium","shortForecast":"Slight Chance Rain Showers","detailedForecast":"A slight chance of rain showers before 1pm. Partly sunny, with a high near 58."}]}
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

---
### THIS FILE IS AUTO-GENERATED - DO NOT EDIT ###
layout: page
title: Foster Falls, Tennessee Climbing Weather - Current, Past, and Forecasted
title_override: Foster Falls<br /><small>Climbing Weather</small>
description: A lightweight weather report for Foster Falls, Tennessee. Optimized for slow internet connections.
js_includes:
  - weather.js
---

<section class="measure center lh-copy f5-ns f6 ph2 mv4" style="text-align: justify;">
<strong>"Is it dry?"</strong>, an oft-repeated, age-old question. Here are real-time,
precipitation-focused reports of current, past, and forecasted climbing weather for Foster Falls, Tennessee.
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
<section id="weather" data-crag="foster-falls-tennessee" class="mv4-ns mv3 ph2 center"></section>
<section id="nearby" class="tc lh-copy">
  <h3>Nearby Crags</h3>
<a class="nowrap no-underline fancy-link relative light-red mh3" href="/crags/jackson-falls-illinois-weather.html">Jackson Falls</a>
<a class="nowrap no-underline fancy-link relative light-red mh3" href="/crags/red-river-gorge-kentucky-weather.html">Red River Gorge</a>
<a class="nowrap no-underline fancy-link relative light-red mh3" href="/crags/seneca-rocks-west-virginia-weather.html">Seneca Rocks</a>
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
  var weekly_MRX_19_12 = {"updated":"2023-12-10T07:09:45+00:00","units":"us","forecastGenerator":"BaselineForecastGenerator","generatedAt":"2023-12-10T08:32:04+00:00","updateTime":"2023-12-10T07:09:45+00:00","validTimes":"2023-12-10T01:00:00+00:00/P8D","elevation":{"unitCode":"wmoUnit:m","value":558.0888},"periods":[{"number":1,"name":"Overnight","startTime":"2023-12-10T02:00:00-06:00","endTime":"2023-12-10T06:00:00-06:00","isDaytime":false,"temperature":39,"temperatureUnit":"F","temperatureTrend":"rising","probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":80},"dewpoint":{"unitCode":"wmoUnit:degC","value":10.555555555555555},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":100},"windSpeed":"10 to 15 mph","windDirection":"N","icon":"https://api.weather.gov/icons/land/night/tsra,80?size=medium","shortForecast":"Patchy Fog","detailedForecast":"Patchy fog and showers and thunderstorms. Cloudy. Low around 39, with temperatures rising to around 46 overnight. North wind 10 to 15 mph, with gusts as high as 25 mph. Chance of precipitation is 80%. New rainfall amounts between a quarter and half of an inch possible."},{"number":2,"name":"Sunday","startTime":"2023-12-10T06:00:00-06:00","endTime":"2023-12-10T18:00:00-06:00","isDaytime":true,"temperature":46,"temperatureUnit":"F","temperatureTrend":"falling","probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":80},"dewpoint":{"unitCode":"wmoUnit:degC","value":6.666666666666667},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":96},"windSpeed":"10 to 15 mph","windDirection":"N","icon":"https://api.weather.gov/icons/land/day/tsra,80/bkn?size=medium","shortForecast":"Showers And Thunderstorms then Mostly Cloudy","detailedForecast":"Showers and thunderstorms before noon. Mostly cloudy. High near 46, with temperatures falling to around 36 in the afternoon. North wind 10 to 15 mph, with gusts as high as 25 mph. Chance of precipitation is 80%. New rainfall amounts less than a tenth of an inch possible."},{"number":3,"name":"Sunday Night","startTime":"2023-12-10T18:00:00-06:00","endTime":"2023-12-11T06:00:00-06:00","isDaytime":false,"temperature":28,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":-1.6666666666666667},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":85},"windSpeed":"10 to 20 mph","windDirection":"NW","icon":"https://api.weather.gov/icons/land/night/sct?size=medium","shortForecast":"Partly Cloudy","detailedForecast":"Partly cloudy, with a low around 28. Northwest wind 10 to 20 mph, with gusts as high as 30 mph."},{"number":4,"name":"Monday","startTime":"2023-12-11T06:00:00-06:00","endTime":"2023-12-11T18:00:00-06:00","isDaytime":true,"temperature":44,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":-3.888888888888889},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":88},"windSpeed":"5 to 10 mph","windDirection":"N","icon":"https://api.weather.gov/icons/land/day/skc?size=medium","shortForecast":"Sunny","detailedForecast":"Sunny, with a high near 44. North wind 5 to 10 mph."},{"number":5,"name":"Monday Night","startTime":"2023-12-11T18:00:00-06:00","endTime":"2023-12-12T06:00:00-06:00","isDaytime":false,"temperature":29,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":-3.888888888888889},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":78},"windSpeed":"0 to 5 mph","windDirection":"NE","icon":"https://api.weather.gov/icons/land/night/skc?size=medium","shortForecast":"Clear","detailedForecast":"Clear, with a low around 29. Northeast wind 0 to 5 mph."},{"number":6,"name":"Tuesday","startTime":"2023-12-12T06:00:00-06:00","endTime":"2023-12-12T18:00:00-06:00","isDaytime":true,"temperature":49,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":-1.1111111111111112},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":75},"windSpeed":"0 to 5 mph","windDirection":"SE","icon":"https://api.weather.gov/icons/land/day/few?size=medium","shortForecast":"Sunny","detailedForecast":"Sunny, with a high near 49. Southeast wind 0 to 5 mph."},{"number":7,"name":"Tuesday Night","startTime":"2023-12-12T18:00:00-06:00","endTime":"2023-12-13T06:00:00-06:00","isDaytime":false,"temperature":33,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":-1.1111111111111112},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":78},"windSpeed":"0 to 5 mph","windDirection":"E","icon":"https://api.weather.gov/icons/land/night/sct?size=medium","shortForecast":"Partly Cloudy","detailedForecast":"Partly cloudy, with a low around 33. East wind 0 to 5 mph."},{"number":8,"name":"Wednesday","startTime":"2023-12-13T06:00:00-06:00","endTime":"2023-12-13T18:00:00-06:00","isDaytime":true,"temperature":51,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":0.5555555555555556},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":78},"windSpeed":"5 to 10 mph","windDirection":"NE","icon":"https://api.weather.gov/icons/land/day/sct?size=medium","shortForecast":"Mostly Sunny","detailedForecast":"Mostly sunny, with a high near 51."},{"number":9,"name":"Wednesday Night","startTime":"2023-12-13T18:00:00-06:00","endTime":"2023-12-14T06:00:00-06:00","isDaytime":false,"temperature":34,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":-0.5555555555555556},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":72},"windSpeed":"10 mph","windDirection":"NE","icon":"https://api.weather.gov/icons/land/night/sct?size=medium","shortForecast":"Partly Cloudy","detailedForecast":"Partly cloudy, with a low around 34."},{"number":10,"name":"Thursday","startTime":"2023-12-14T06:00:00-06:00","endTime":"2023-12-14T18:00:00-06:00","isDaytime":true,"temperature":50,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":-0.5555555555555556},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":69},"windSpeed":"5 to 10 mph","windDirection":"NE","icon":"https://api.weather.gov/icons/land/day/few?size=medium","shortForecast":"Sunny","detailedForecast":"Sunny, with a high near 50."},{"number":11,"name":"Thursday Night","startTime":"2023-12-14T18:00:00-06:00","endTime":"2023-12-15T06:00:00-06:00","isDaytime":false,"temperature":33,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":-1.1111111111111112},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":78},"windSpeed":"5 mph","windDirection":"E","icon":"https://api.weather.gov/icons/land/night/sct?size=medium","shortForecast":"Partly Cloudy","detailedForecast":"Partly cloudy, with a low around 33."},{"number":12,"name":"Friday","startTime":"2023-12-15T06:00:00-06:00","endTime":"2023-12-15T18:00:00-06:00","isDaytime":true,"temperature":51,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":0.5555555555555556},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":78},"windSpeed":"5 mph","windDirection":"E","icon":"https://api.weather.gov/icons/land/day/sct?size=medium","shortForecast":"Mostly Sunny","detailedForecast":"Mostly sunny, with a high near 51."},{"number":13,"name":"Friday Night","startTime":"2023-12-15T18:00:00-06:00","endTime":"2023-12-16T06:00:00-06:00","isDaytime":false,"temperature":37,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":0.5555555555555556},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":82},"windSpeed":"5 to 10 mph","windDirection":"NE","icon":"https://api.weather.gov/icons/land/night/bkn?size=medium","shortForecast":"Mostly Cloudy","detailedForecast":"Mostly cloudy, with a low around 37."},{"number":14,"name":"Saturday","startTime":"2023-12-16T06:00:00-06:00","endTime":"2023-12-16T18:00:00-06:00","isDaytime":true,"temperature":51,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":30},"dewpoint":{"unitCode":"wmoUnit:degC","value":3.888888888888889},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":82},"windSpeed":"10 mph","windDirection":"E","icon":"https://api.weather.gov/icons/land/day/rain_showers,20/rain_showers,30?size=medium","shortForecast":"Chance Rain Showers","detailedForecast":"A chance of rain showers. Partly sunny, with a high near 51. Chance of precipitation is 30%."}]}
  var hourly_MRX_19_12 = false
  var crags_config = [
  {
    "name": "Foster Falls",
    "note": "High-quality sandstone.",
    "mountainProject": "https://www.mountainproject.com/area/105883248/foster-falls",
    "station": "KCHA",
    "office": "MRX/19,12",
    "coordinates": [
      -85.674,
      35.182
    ]
  }
]</script>

---
### THIS FILE IS AUTO-GENERATED - DO NOT EDIT ###
layout: page
title: Red River Gorge, Kentucky Climbing Weather - Current, Past, and Forecasted
title_override: Red River Gorge<br /><small>Climbing Weather</small>
description: A lightweight weather report for Red River Gorge, Kentucky. Optimized for slow internet connections.
js_includes:
  - weather.js
---

<section class="measure center lh-copy f5-ns f6 ph2 mv4" style="text-align: justify;">
<strong>"Is it dry?"</strong>, an oft-repeated, age-old question. Here are real-time,
precipitation-focused reports of current, past, and forecasted climbing weather for Red River Gorge, Kentucky.
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
<section id="weather" data-crag="red-river-gorge-kentucky" class="mv4-ns mv3 ph2 center"></section>
<section id="nearby" class="tc lh-copy">
  <h3>Nearby Crags</h3>
<a class="nowrap no-underline fancy-link relative light-red mh3" href="/crags/jackson-falls-illinois-weather.html">Jackson Falls</a>
<a class="nowrap no-underline fancy-link relative light-red mh3" href="/crags/foster-falls-tennessee-weather.html">Foster Falls</a>
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
  var weekly_JKL_47_57 = {"updated":"2023-11-10T08:13:11+00:00","units":"us","forecastGenerator":"BaselineForecastGenerator","generatedAt":"2023-11-10T08:31:53+00:00","updateTime":"2023-11-10T08:13:11+00:00","validTimes":"2023-11-10T02:00:00+00:00/P7DT23H","elevation":{"unitCode":"wmoUnit:m","value":365.1504},"periods":[{"number":1,"name":"Overnight","startTime":"2023-11-10T03:00:00-05:00","endTime":"2023-11-10T06:00:00-05:00","isDaytime":false,"temperature":45,"temperatureUnit":"F","temperatureTrend":"rising","probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":100},"dewpoint":{"unitCode":"wmoUnit:degC","value":5},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":79},"windSpeed":"5 mph","windDirection":"NE","icon":"https://api.weather.gov/icons/land/night/rain_showers,100?size=medium","shortForecast":"Rain Showers","detailedForecast":"Rain showers. Cloudy. Low around 45, with temperatures rising to around 47 overnight. Northeast wind around 5 mph. Chance of precipitation is 100%. New rainfall amounts less than a tenth of an inch possible."},{"number":2,"name":"Friday","startTime":"2023-11-10T06:00:00-05:00","endTime":"2023-11-10T18:00:00-05:00","isDaytime":true,"temperature":52,"temperatureUnit":"F","temperatureTrend":"falling","probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":100},"dewpoint":{"unitCode":"wmoUnit:degC","value":5.555555555555555},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":89},"windSpeed":"5 mph","windDirection":"SE","icon":"https://api.weather.gov/icons/land/day/rain_showers,100/bkn?size=medium","shortForecast":"Rain Showers then Partly Sunny","detailedForecast":"Rain showers before noon. Partly sunny. High near 52, with temperatures falling to around 50 in the afternoon. Southeast wind around 5 mph. Chance of precipitation is 100%. New rainfall amounts between a tenth and quarter of an inch possible."},{"number":3,"name":"Friday Night","startTime":"2023-11-10T18:00:00-05:00","endTime":"2023-11-11T06:00:00-05:00","isDaytime":false,"temperature":33,"temperatureUnit":"F","temperatureTrend":"rising","probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":3.3333333333333335},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":96},"windSpeed":"5 mph","windDirection":"WSW","icon":"https://api.weather.gov/icons/land/night/sct?size=medium","shortForecast":"Partly Cloudy","detailedForecast":"Partly cloudy. Low around 33, with temperatures rising to around 35 overnight. West southwest wind around 5 mph."},{"number":4,"name":"Veterans Day","startTime":"2023-11-11T06:00:00-05:00","endTime":"2023-11-11T18:00:00-05:00","isDaytime":true,"temperature":54,"temperatureUnit":"F","temperatureTrend":"falling","probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":0.5555555555555556},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":100},"windSpeed":"6 mph","windDirection":"NNE","icon":"https://api.weather.gov/icons/land/day/sct?size=medium","shortForecast":"Mostly Sunny","detailedForecast":"Mostly sunny. High near 54, with temperatures falling to around 50 in the afternoon. North northeast wind around 6 mph."},{"number":5,"name":"Saturday Night","startTime":"2023-11-11T18:00:00-05:00","endTime":"2023-11-12T06:00:00-05:00","isDaytime":false,"temperature":36,"temperatureUnit":"F","temperatureTrend":"rising","probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":-0.5555555555555556},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":79},"windSpeed":"6 mph","windDirection":"NE","icon":"https://api.weather.gov/icons/land/night/sct?size=medium","shortForecast":"Partly Cloudy","detailedForecast":"Partly cloudy. Low around 36, with temperatures rising to around 37 overnight. Northeast wind around 6 mph."},{"number":6,"name":"Sunday","startTime":"2023-11-12T06:00:00-05:00","endTime":"2023-11-12T18:00:00-05:00","isDaytime":true,"temperature":55,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":0},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":85},"windSpeed":"6 mph","windDirection":"ENE","icon":"https://api.weather.gov/icons/land/day/sct?size=medium","shortForecast":"Mostly Sunny","detailedForecast":"Mostly sunny, with a high near 55."},{"number":7,"name":"Sunday Night","startTime":"2023-11-12T18:00:00-05:00","endTime":"2023-11-13T06:00:00-05:00","isDaytime":false,"temperature":35,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":-0.5555555555555556},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":82},"windSpeed":"5 mph","windDirection":"E","icon":"https://api.weather.gov/icons/land/night/skc?size=medium","shortForecast":"Clear","detailedForecast":"Clear, with a low around 35."},{"number":8,"name":"Monday","startTime":"2023-11-13T06:00:00-05:00","endTime":"2023-11-13T18:00:00-05:00","isDaytime":true,"temperature":64,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":0},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":89},"windSpeed":"6 mph","windDirection":"SW","icon":"https://api.weather.gov/icons/land/day/skc?size=medium","shortForecast":"Sunny","detailedForecast":"Sunny, with a high near 64."},{"number":9,"name":"Monday Night","startTime":"2023-11-13T18:00:00-05:00","endTime":"2023-11-14T06:00:00-05:00","isDaytime":false,"temperature":35,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":0},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":82},"windSpeed":"5 mph","windDirection":"NNE","icon":"https://api.weather.gov/icons/land/night/few?size=medium","shortForecast":"Mostly Clear","detailedForecast":"Mostly clear, with a low around 35."},{"number":10,"name":"Tuesday","startTime":"2023-11-14T06:00:00-05:00","endTime":"2023-11-14T18:00:00-05:00","isDaytime":true,"temperature":62,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":0},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":89},"windSpeed":"7 mph","windDirection":"E","icon":"https://api.weather.gov/icons/land/day/sct?size=medium","shortForecast":"Mostly Sunny","detailedForecast":"Mostly sunny, with a high near 62."},{"number":11,"name":"Tuesday Night","startTime":"2023-11-14T18:00:00-05:00","endTime":"2023-11-15T06:00:00-05:00","isDaytime":false,"temperature":37,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":-1.1111111111111112},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":75},"windSpeed":"6 mph","windDirection":"ESE","icon":"https://api.weather.gov/icons/land/night/sct?size=medium","shortForecast":"Partly Cloudy","detailedForecast":"Partly cloudy, with a low around 37."},{"number":12,"name":"Wednesday","startTime":"2023-11-15T06:00:00-05:00","endTime":"2023-11-15T18:00:00-05:00","isDaytime":true,"temperature":64,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":0},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":79},"windSpeed":"3 to 7 mph","windDirection":"S","icon":"https://api.weather.gov/icons/land/day/sct?size=medium","shortForecast":"Mostly Sunny","detailedForecast":"Mostly sunny, with a high near 64."},{"number":13,"name":"Wednesday Night","startTime":"2023-11-15T18:00:00-05:00","endTime":"2023-11-16T06:00:00-05:00","isDaytime":false,"temperature":44,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":20},"dewpoint":{"unitCode":"wmoUnit:degC","value":2.7777777777777777},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":71},"windSpeed":"5 mph","windDirection":"S","icon":"https://api.weather.gov/icons/land/night/bkn/rain,20?size=medium","shortForecast":"Mostly Cloudy then Slight Chance Light Rain","detailedForecast":"A slight chance of rain after 4am. Mostly cloudy, with a low around 44. Chance of precipitation is 20%."},{"number":14,"name":"Thursday","startTime":"2023-11-16T06:00:00-05:00","endTime":"2023-11-16T18:00:00-05:00","isDaytime":true,"temperature":64,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":20},"dewpoint":{"unitCode":"wmoUnit:degC","value":7.777777777777778},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":79},"windSpeed":"5 to 9 mph","windDirection":"S","icon":"https://api.weather.gov/icons/land/day/rain,20?size=medium","shortForecast":"Slight Chance Light Rain","detailedForecast":"A slight chance of rain. Partly sunny, with a high near 64. Chance of precipitation is 20%."}]}
  var hourly_JKL_47_57 = false
  var crags_config = [
  {
    "name": "Red River Gorge",
    "note": "Sandstone cliffs.",
    "mountainProject": "https://www.mountainproject.com/area/105841134/red-river-gorge",
    "station": "KIOB",
    "office": "JKL/47,57",
    "coordinates": [
      -83.683,
      37.783
    ]
  }
]</script>

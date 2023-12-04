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
  var weekly_MRX_19_12 = {"updated":"2023-12-04T07:59:18+00:00","units":"us","forecastGenerator":"BaselineForecastGenerator","generatedAt":"2023-12-04T08:33:01+00:00","updateTime":"2023-12-04T07:59:18+00:00","validTimes":"2023-12-04T01:00:00+00:00/P7DT15H","elevation":{"unitCode":"wmoUnit:m","value":558.0888},"periods":[{"number":1,"name":"Overnight","startTime":"2023-12-04T02:00:00-06:00","endTime":"2023-12-04T06:00:00-06:00","isDaytime":false,"temperature":40,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":0.5555555555555556},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":73},"windSpeed":"5 mph","windDirection":"S","icon":"https://api.weather.gov/icons/land/night/sct?size=medium","shortForecast":"Partly Cloudy","detailedForecast":"Partly cloudy, with a low around 40. South wind around 5 mph."},{"number":2,"name":"Monday","startTime":"2023-12-04T06:00:00-06:00","endTime":"2023-12-04T18:00:00-06:00","isDaytime":true,"temperature":54,"temperatureUnit":"F","temperatureTrend":"falling","probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":5.555555555555555},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":79},"windSpeed":"5 to 15 mph","windDirection":"SW","icon":"https://api.weather.gov/icons/land/day/sct?size=medium","shortForecast":"Mostly Sunny","detailedForecast":"Mostly sunny. High near 54, with temperatures falling to around 46 in the afternoon. Southwest wind 5 to 15 mph, with gusts as high as 30 mph."},{"number":3,"name":"Monday Night","startTime":"2023-12-04T18:00:00-06:00","endTime":"2023-12-05T06:00:00-06:00","isDaytime":false,"temperature":34,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":2.7777777777777777},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":100},"windSpeed":"5 to 10 mph","windDirection":"NW","icon":"https://api.weather.gov/icons/land/night/sct?size=medium","shortForecast":"Partly Cloudy","detailedForecast":"Partly cloudy, with a low around 34. Northwest wind 5 to 10 mph."},{"number":4,"name":"Tuesday","startTime":"2023-12-05T06:00:00-06:00","endTime":"2023-12-05T18:00:00-06:00","isDaytime":true,"temperature":50,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":2.7777777777777777},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":100},"windSpeed":"5 to 10 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/day/sct?size=medium","shortForecast":"Mostly Sunny","detailedForecast":"Mostly sunny, with a high near 50. West wind 5 to 10 mph."},{"number":5,"name":"Tuesday Night","startTime":"2023-12-05T18:00:00-06:00","endTime":"2023-12-06T06:00:00-06:00","isDaytime":false,"temperature":36,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":20},"dewpoint":{"unitCode":"wmoUnit:degC","value":1.6666666666666667},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":82},"windSpeed":"10 to 15 mph","windDirection":"NW","icon":"https://api.weather.gov/icons/land/night/rain_showers,20/bkn?size=medium","shortForecast":"Slight Chance Rain Showers then Mostly Cloudy","detailedForecast":"A slight chance of rain showers before midnight. Mostly cloudy, with a low around 36. Northwest wind 10 to 15 mph, with gusts as high as 25 mph. Chance of precipitation is 20%."},{"number":6,"name":"Wednesday","startTime":"2023-12-06T06:00:00-06:00","endTime":"2023-12-06T18:00:00-06:00","isDaytime":true,"temperature":44,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":0},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":82},"windSpeed":"10 to 15 mph","windDirection":"NW","icon":"https://api.weather.gov/icons/land/day/sct?size=medium","shortForecast":"Mostly Sunny","detailedForecast":"Mostly sunny, with a high near 44. Northwest wind 10 to 15 mph, with gusts as high as 25 mph."},{"number":7,"name":"Wednesday Night","startTime":"2023-12-06T18:00:00-06:00","endTime":"2023-12-07T06:00:00-06:00","isDaytime":false,"temperature":30,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":-1.6666666666666667},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":88},"windSpeed":"5 to 10 mph","windDirection":"N","icon":"https://api.weather.gov/icons/land/night/few?size=medium","shortForecast":"Mostly Clear","detailedForecast":"Mostly clear, with a low around 30. North wind 5 to 10 mph."},{"number":8,"name":"Thursday","startTime":"2023-12-07T06:00:00-06:00","endTime":"2023-12-07T18:00:00-06:00","isDaytime":true,"temperature":52,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":-0.5555555555555556},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":85},"windSpeed":"5 to 10 mph","windDirection":"S","icon":"https://api.weather.gov/icons/land/day/skc?size=medium","shortForecast":"Sunny","detailedForecast":"Sunny, with a high near 52."},{"number":9,"name":"Thursday Night","startTime":"2023-12-07T18:00:00-06:00","endTime":"2023-12-08T06:00:00-06:00","isDaytime":false,"temperature":36,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":-1.1111111111111112},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":79},"windSpeed":"10 mph","windDirection":"S","icon":"https://api.weather.gov/icons/land/night/sct?size=medium","shortForecast":"Partly Cloudy","detailedForecast":"Partly cloudy, with a low around 36."},{"number":10,"name":"Friday","startTime":"2023-12-08T06:00:00-06:00","endTime":"2023-12-08T18:00:00-06:00","isDaytime":true,"temperature":56,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":3.3333333333333335},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":79},"windSpeed":"10 mph","windDirection":"S","icon":"https://api.weather.gov/icons/land/day/few?size=medium","shortForecast":"Sunny","detailedForecast":"Sunny, with a high near 56."},{"number":11,"name":"Friday Night","startTime":"2023-12-08T18:00:00-06:00","endTime":"2023-12-09T06:00:00-06:00","isDaytime":false,"temperature":44,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":6.666666666666667},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":93},"windSpeed":"10 mph","windDirection":"S","icon":"https://api.weather.gov/icons/land/night/sct?size=medium","shortForecast":"Partly Cloudy","detailedForecast":"Partly cloudy, with a low around 44."},{"number":12,"name":"Saturday","startTime":"2023-12-09T06:00:00-06:00","endTime":"2023-12-09T18:00:00-06:00","isDaytime":true,"temperature":58,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":40},"dewpoint":{"unitCode":"wmoUnit:degC","value":11.666666666666666},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":96},"windSpeed":"10 to 15 mph","windDirection":"S","icon":"https://api.weather.gov/icons/land/day/rain_showers,30/rain_showers,40?size=medium","shortForecast":"Chance Rain Showers","detailedForecast":"A chance of rain showers. Mostly cloudy, with a high near 58. Chance of precipitation is 40%."},{"number":13,"name":"Saturday Night","startTime":"2023-12-09T18:00:00-06:00","endTime":"2023-12-10T06:00:00-06:00","isDaytime":false,"temperature":42,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":70},"dewpoint":{"unitCode":"wmoUnit:degC","value":11.11111111111111},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":100},"windSpeed":"15 mph","windDirection":"SW","icon":"https://api.weather.gov/icons/land/night/rain_showers,70?size=medium","shortForecast":"Rain Showers Likely","detailedForecast":"Rain showers likely. Mostly cloudy, with a low around 42. Chance of precipitation is 70%."},{"number":14,"name":"Sunday","startTime":"2023-12-10T06:00:00-06:00","endTime":"2023-12-10T18:00:00-06:00","isDaytime":true,"temperature":48,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":50},"dewpoint":{"unitCode":"wmoUnit:degC","value":6.666666666666667},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":89},"windSpeed":"20 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/day/rain_showers,50/rain_showers,40?size=medium","shortForecast":"Chance Rain Showers","detailedForecast":"A chance of rain showers. Partly sunny, with a high near 48. Chance of precipitation is 50%."}]}
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

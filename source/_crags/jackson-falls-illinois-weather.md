---
### THIS FILE IS AUTO-GENERATED - DO NOT EDIT ###
layout: page
title: Jackson Falls, Illinois Climbing Weather - Current, Past, and Forecasted
title_override: Jackson Falls<br /><small>Climbing Weather</small>
description: A lightweight weather report for Jackson Falls, Illinois. Optimized for slow internet connections.
js_includes:
  - weather.js
---

<section class="measure center lh-copy f5-ns f6 ph2 mv4" style="text-align: justify;">
<strong>"Is it dry?"</strong>, an oft-repeated, age-old question. Here are real-time,
precipitation-focused reports of current, past, and forecasted climbing weather for Jackson Falls, Illinois.
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
<section id="weather" data-crag="jackson-falls-illinois" class="mv4-ns mv3 ph2 center"></section>
<section id="nearby" class="tc lh-copy">
  <h3>Nearby Crags</h3>
<a class="nowrap no-underline fancy-link relative light-red mh3" href="/crags/red-river-gorge-kentucky-weather.html">Red River Gorge</a>
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
  var weekly_PAH_116_58 = {"updated":"2024-01-07T04:04:18+00:00","units":"us","forecastGenerator":"BaselineForecastGenerator","generatedAt":"2024-01-07T08:31:54+00:00","updateTime":"2024-01-07T04:04:18+00:00","validTimes":"2024-01-06T22:00:00+00:00/P7DT3H","elevation":{"unitCode":"wmoUnit:m","value":96.012},"periods":[{"number":1,"name":"Overnight","startTime":"2024-01-07T02:00:00-06:00","endTime":"2024-01-07T06:00:00-06:00","isDaytime":false,"temperature":34,"temperatureUnit":"F","temperatureTrend":"rising","probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":0.5555555555555556},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":85},"windSpeed":"7 mph","windDirection":"WSW","icon":"https://api.weather.gov/icons/land/night/bkn?size=medium","shortForecast":"Mostly Cloudy","detailedForecast":"Mostly cloudy. Low around 34, with temperatures rising to around 36 overnight. West southwest wind around 7 mph."},{"number":2,"name":"Sunday","startTime":"2024-01-07T06:00:00-06:00","endTime":"2024-01-07T18:00:00-06:00","isDaytime":true,"temperature":45,"temperatureUnit":"F","temperatureTrend":"falling","probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":1.1111111111111112},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":89},"windSpeed":"3 to 10 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/day/bkn?size=medium","shortForecast":"Partly Sunny","detailedForecast":"Partly sunny. High near 45, with temperatures falling to around 42 in the afternoon. West wind 3 to 10 mph."},{"number":3,"name":"Sunday Night","startTime":"2024-01-07T18:00:00-06:00","endTime":"2024-01-08T06:00:00-06:00","isDaytime":false,"temperature":28,"temperatureUnit":"F","temperatureTrend":"rising","probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":-0.5555555555555556},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":92},"windSpeed":"2 to 6 mph","windDirection":"SE","icon":"https://api.weather.gov/icons/land/night/sct?size=medium","shortForecast":"Partly Cloudy","detailedForecast":"Partly cloudy. Low around 28, with temperatures rising to around 30 overnight. Southeast wind 2 to 6 mph."},{"number":4,"name":"Monday","startTime":"2024-01-08T06:00:00-06:00","endTime":"2024-01-08T18:00:00-06:00","isDaytime":true,"temperature":48,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":50},"dewpoint":{"unitCode":"wmoUnit:degC","value":0.5555555555555556},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":100},"windSpeed":"6 to 16 mph","windDirection":"ESE","icon":"https://api.weather.gov/icons/land/day/bkn/rain,50?size=medium","shortForecast":"Mostly Cloudy then Chance Light Rain","detailedForecast":"A chance of rain after noon. Mostly cloudy, with a high near 48. East southeast wind 6 to 16 mph, with gusts as high as 24 mph. Chance of precipitation is 50%."},{"number":5,"name":"Monday Night","startTime":"2024-01-08T18:00:00-06:00","endTime":"2024-01-09T06:00:00-06:00","isDaytime":false,"temperature":39,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":100},"dewpoint":{"unitCode":"wmoUnit:degC","value":6.111111111111111},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":96},"windSpeed":"14 to 18 mph","windDirection":"ESE","icon":"https://api.weather.gov/icons/land/night/rain,100?size=medium","shortForecast":"Rain","detailedForecast":"Rain. Cloudy, with a low around 39. East southeast wind 14 to 18 mph, with gusts as high as 29 mph. Chance of precipitation is 100%."},{"number":6,"name":"Tuesday","startTime":"2024-01-09T06:00:00-06:00","endTime":"2024-01-09T18:00:00-06:00","isDaytime":true,"temperature":50,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":100},"dewpoint":{"unitCode":"wmoUnit:degC","value":7.777777777777778},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":100},"windSpeed":"16 to 24 mph","windDirection":"SSW","icon":"https://api.weather.gov/icons/land/day/rain,100/rain_showers,80?size=medium","shortForecast":"Rain then Rain Showers","detailedForecast":"Rain before noon, then rain showers. Mostly cloudy, with a high near 50. South southwest wind 16 to 24 mph, with gusts as high as 36 mph. Chance of precipitation is 100%."},{"number":7,"name":"Tuesday Night","startTime":"2024-01-09T18:00:00-06:00","endTime":"2024-01-10T06:00:00-06:00","isDaytime":false,"temperature":30,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":50},"dewpoint":{"unitCode":"wmoUnit:degC","value":2.7777777777777777},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":94},"windSpeed":"21 to 24 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/night/snow,50/wind_bkn?size=medium","shortForecast":"Chance Rain And Snow Showers then Mostly Cloudy","detailedForecast":"A chance of rain and snow showers before midnight. Mostly cloudy, with a low around 30. West wind 21 to 24 mph, with gusts as high as 36 mph. Chance of precipitation is 50%."},{"number":8,"name":"Wednesday","startTime":"2024-01-10T06:00:00-06:00","endTime":"2024-01-10T18:00:00-06:00","isDaytime":true,"temperature":43,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":-1.6666666666666667},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":89},"windSpeed":"14 to 20 mph","windDirection":"SW","icon":"https://api.weather.gov/icons/land/day/sct?size=medium","shortForecast":"Mostly Sunny","detailedForecast":"Mostly sunny, with a high near 43. Southwest wind 14 to 20 mph, with gusts as high as 29 mph."},{"number":9,"name":"Wednesday Night","startTime":"2024-01-10T18:00:00-06:00","endTime":"2024-01-11T06:00:00-06:00","isDaytime":false,"temperature":32,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":-1.1111111111111112},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":86},"windSpeed":"15 mph","windDirection":"SSW","icon":"https://api.weather.gov/icons/land/night/sct?size=medium","shortForecast":"Partly Cloudy","detailedForecast":"Partly cloudy, with a low around 32. South southwest wind around 15 mph, with gusts as high as 23 mph."},{"number":10,"name":"Thursday","startTime":"2024-01-11T06:00:00-06:00","endTime":"2024-01-11T18:00:00-06:00","isDaytime":true,"temperature":48,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":0.5555555555555556},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":86},"windSpeed":"9 to 14 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/day/sct/rain?size=medium","shortForecast":"Mostly Sunny then Slight Chance Light Rain","detailedForecast":"A slight chance of rain after noon. Mostly sunny, with a high near 48. West wind 9 to 14 mph, with gusts as high as 21 mph."},{"number":11,"name":"Thursday Night","startTime":"2024-01-11T18:00:00-06:00","endTime":"2024-01-12T06:00:00-06:00","isDaytime":false,"temperature":29,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":0},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":87},"windSpeed":"9 to 14 mph","windDirection":"NE","icon":"https://api.weather.gov/icons/land/night/rain?size=medium","shortForecast":"Chance Light Rain","detailedForecast":"A chance of rain. Partly cloudy, with a low around 29. Northeast wind 9 to 14 mph, with gusts as high as 21 mph."},{"number":12,"name":"Friday","startTime":"2024-01-12T06:00:00-06:00","endTime":"2024-01-12T18:00:00-06:00","isDaytime":true,"temperature":46,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":1.1111111111111112},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":88},"windSpeed":"14 to 21 mph","windDirection":"E","icon":"https://api.weather.gov/icons/land/day/rain/rain_showers?size=medium","shortForecast":"Chance Rain then Rain Showers Likely","detailedForecast":"A chance of rain before noon, then rain showers likely. Mostly cloudy, with a high near 46. East wind 14 to 21 mph, with gusts as high as 32 mph."},{"number":13,"name":"Friday Night","startTime":"2024-01-12T18:00:00-06:00","endTime":"2024-01-13T06:00:00-06:00","isDaytime":false,"temperature":20,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":0.5555555555555556},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":88},"windSpeed":"21 to 24 mph","windDirection":"SSW","icon":"https://api.weather.gov/icons/land/night/snow?size=medium","shortForecast":"Chance Rain And Snow Showers","detailedForecast":"A chance of rain and snow showers. Mostly cloudy, with a low around 20. South southwest wind 21 to 24 mph, with gusts as high as 36 mph. New snow accumulation of less than half an inch possible."},{"number":14,"name":"Saturday","startTime":"2024-01-13T06:00:00-06:00","endTime":"2024-01-13T18:00:00-06:00","isDaytime":true,"temperature":31,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":-6.111111111111111},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":93},"windSpeed":"22 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/day/snow/wind_bkn?size=medium","shortForecast":"Slight Chance Light Snow then Partly Sunny","detailedForecast":"A slight chance of snow before noon. Partly sunny, with a high near 31. West wind around 22 mph, with gusts as high as 31 mph."}]}
  var hourly_PAH_116_58 = false
  var crags_config = [
  {
    "name": "Jackson Falls",
    "note": "The walls offer slopers, various sized pockets, roofs, and slabs.",
    "mountainProject": "https://www.mountainproject.com/area/106017458/jackson-falls",
    "station": "KPAH",
    "office": "PAH/116,58",
    "coordinates": [
      -88.682,
      37.510
    ]
  }
]</script>

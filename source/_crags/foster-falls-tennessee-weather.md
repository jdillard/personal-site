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
  var weekly_MRX_19_12 = {"updated":"2024-02-21T08:24:50+00:00","units":"us","forecastGenerator":"BaselineForecastGenerator","generatedAt":"2024-02-21T08:32:13+00:00","updateTime":"2024-02-21T08:24:50+00:00","validTimes":"2024-02-21T02:00:00+00:00/P7DT14H","elevation":{"unitCode":"wmoUnit:m","value":558.0888},"periods":[{"number":1,"name":"Overnight","startTime":"2024-02-21T02:00:00-06:00","endTime":"2024-02-21T06:00:00-06:00","isDaytime":false,"temperature":37,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":-3.888888888888889},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":59},"windSpeed":"0 to 5 mph","windDirection":"SE","icon":"https://api.weather.gov/icons/land/night/skc?size=medium","shortForecast":"Clear","detailedForecast":"Clear, with a low around 37. Southeast wind 0 to 5 mph."},{"number":2,"name":"Wednesday","startTime":"2024-02-21T06:00:00-06:00","endTime":"2024-02-21T18:00:00-06:00","isDaytime":true,"temperature":63,"temperatureUnit":"F","temperatureTrend":"falling","probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":-0.5555555555555556},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":59},"windSpeed":"5 to 10 mph","windDirection":"S","icon":"https://api.weather.gov/icons/land/day/few?size=medium","shortForecast":"Sunny","detailedForecast":"Sunny. High near 63, with temperatures falling to around 57 in the afternoon. South wind 5 to 10 mph."},{"number":3,"name":"Wednesday Night","startTime":"2024-02-21T18:00:00-06:00","endTime":"2024-02-22T06:00:00-06:00","isDaytime":false,"temperature":44,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":1.6666666666666667},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":68},"windSpeed":"10 to 15 mph","windDirection":"S","icon":"https://api.weather.gov/icons/land/night/sct?size=medium","shortForecast":"Partly Cloudy","detailedForecast":"Partly cloudy, with a low around 44. South wind 10 to 15 mph, with gusts as high as 20 mph."},{"number":4,"name":"Thursday","startTime":"2024-02-22T06:00:00-06:00","endTime":"2024-02-22T18:00:00-06:00","isDaytime":true,"temperature":59,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":50},"dewpoint":{"unitCode":"wmoUnit:degC","value":8.333333333333334},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":76},"windSpeed":"15 to 20 mph","windDirection":"S","icon":"https://api.weather.gov/icons/land/day/rain_showers,20/rain_showers,50?size=medium","shortForecast":"Chance Rain Showers","detailedForecast":"A chance of rain showers after 9am. Partly sunny, with a high near 59. South wind 15 to 20 mph, with gusts as high as 35 mph. Chance of precipitation is 50%."},{"number":5,"name":"Thursday Night","startTime":"2024-02-22T18:00:00-06:00","endTime":"2024-02-23T06:00:00-06:00","isDaytime":false,"temperature":46,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":100},"dewpoint":{"unitCode":"wmoUnit:degC","value":10.555555555555555},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":100},"windSpeed":"15 to 20 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/night/tsra,100/tsra,60?size=medium","shortForecast":"Showers And Thunderstorms","detailedForecast":"Showers and thunderstorms. Mostly cloudy, with a low around 46. West wind 15 to 20 mph, with gusts as high as 35 mph. Chance of precipitation is 100%."},{"number":6,"name":"Friday","startTime":"2024-02-23T06:00:00-06:00","endTime":"2024-02-23T18:00:00-06:00","isDaytime":true,"temperature":56,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":6.666666666666667},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":93},"windSpeed":"15 mph","windDirection":"NW","icon":"https://api.weather.gov/icons/land/day/sct?size=medium","shortForecast":"Mostly Sunny","detailedForecast":"Mostly sunny, with a high near 56. Northwest wind around 15 mph, with gusts as high as 30 mph."},{"number":7,"name":"Friday Night","startTime":"2024-02-23T18:00:00-06:00","endTime":"2024-02-24T06:00:00-06:00","isDaytime":false,"temperature":35,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":1.1111111111111112},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":79},"windSpeed":"10 to 15 mph","windDirection":"NW","icon":"https://api.weather.gov/icons/land/night/few?size=medium","shortForecast":"Mostly Clear","detailedForecast":"Mostly clear, with a low around 35. Northwest wind 10 to 15 mph, with gusts as high as 30 mph."},{"number":8,"name":"Saturday","startTime":"2024-02-24T06:00:00-06:00","endTime":"2024-02-24T18:00:00-06:00","isDaytime":true,"temperature":50,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":-1.1111111111111112},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":78},"windSpeed":"10 to 20 mph","windDirection":"NW","icon":"https://api.weather.gov/icons/land/day/few?size=medium","shortForecast":"Sunny","detailedForecast":"Sunny, with a high near 50."},{"number":9,"name":"Saturday Night","startTime":"2024-02-24T18:00:00-06:00","endTime":"2024-02-25T06:00:00-06:00","isDaytime":false,"temperature":31,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":-1.6666666666666667},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":85},"windSpeed":"5 to 15 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/night/skc?size=medium","shortForecast":"Clear","detailedForecast":"Clear, with a low around 31."},{"number":10,"name":"Sunday","startTime":"2024-02-25T06:00:00-06:00","endTime":"2024-02-25T18:00:00-06:00","isDaytime":true,"temperature":59,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":3.3333333333333335},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":85},"windSpeed":"5 to 15 mph","windDirection":"S","icon":"https://api.weather.gov/icons/land/day/sct?size=medium","shortForecast":"Mostly Sunny","detailedForecast":"Mostly sunny, with a high near 59."},{"number":11,"name":"Sunday Night","startTime":"2024-02-25T18:00:00-06:00","endTime":"2024-02-26T06:00:00-06:00","isDaytime":false,"temperature":46,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":3.888888888888889},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":73},"windSpeed":"10 mph","windDirection":"SW","icon":"https://api.weather.gov/icons/land/night/sct?size=medium","shortForecast":"Partly Cloudy","detailedForecast":"Partly cloudy, with a low around 46."},{"number":12,"name":"Monday","startTime":"2024-02-26T06:00:00-06:00","endTime":"2024-02-26T18:00:00-06:00","isDaytime":true,"temperature":65,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":8.333333333333334},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":73},"windSpeed":"10 to 15 mph","windDirection":"S","icon":"https://api.weather.gov/icons/land/day/sct?size=medium","shortForecast":"Mostly Sunny","detailedForecast":"Mostly sunny, with a high near 65."},{"number":13,"name":"Monday Night","startTime":"2024-02-26T18:00:00-06:00","endTime":"2024-02-27T06:00:00-06:00","isDaytime":false,"temperature":54,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":20},"dewpoint":{"unitCode":"wmoUnit:degC","value":10},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":86},"windSpeed":"15 mph","windDirection":"S","icon":"https://api.weather.gov/icons/land/night/rain_showers,20?size=medium","shortForecast":"Slight Chance Rain Showers","detailedForecast":"A slight chance of rain showers. Mostly cloudy, with a low around 54. Chance of precipitation is 20%."},{"number":14,"name":"Tuesday","startTime":"2024-02-27T06:00:00-06:00","endTime":"2024-02-27T18:00:00-06:00","isDaytime":true,"temperature":67,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":20},"dewpoint":{"unitCode":"wmoUnit:degC","value":12.222222222222221},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":86},"windSpeed":"15 to 20 mph","windDirection":"S","icon":"https://api.weather.gov/icons/land/day/rain_showers,20?size=medium","shortForecast":"Slight Chance Rain Showers","detailedForecast":"A slight chance of rain showers. Mostly cloudy, with a high near 67. Chance of precipitation is 20%."}]}
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

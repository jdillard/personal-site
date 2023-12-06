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
  var weekly_MRX_19_12 = {"updated":"2023-12-06T08:27:57+00:00","units":"us","forecastGenerator":"BaselineForecastGenerator","generatedAt":"2023-12-06T08:32:48+00:00","updateTime":"2023-12-06T08:27:57+00:00","validTimes":"2023-12-06T02:00:00+00:00/P7DT11H","elevation":{"unitCode":"wmoUnit:m","value":558.0888},"periods":[{"number":1,"name":"Overnight","startTime":"2023-12-06T02:00:00-06:00","endTime":"2023-12-06T06:00:00-06:00","isDaytime":false,"temperature":37,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":20},"dewpoint":{"unitCode":"wmoUnit:degC","value":0.5555555555555556},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":79},"windSpeed":"15 mph","windDirection":"NW","icon":"https://api.weather.gov/icons/land/night/rain_showers,20?size=medium","shortForecast":"Slight Chance Rain Showers","detailedForecast":"A slight chance of rain showers before 3am. Mostly cloudy, with a low around 37. Northwest wind around 15 mph, with gusts as high as 30 mph. Chance of precipitation is 20%."},{"number":2,"name":"Wednesday","startTime":"2023-12-06T06:00:00-06:00","endTime":"2023-12-06T18:00:00-06:00","isDaytime":true,"temperature":44,"temperatureUnit":"F","temperatureTrend":"falling","probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":0.5555555555555556},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":85},"windSpeed":"10 to 15 mph","windDirection":"N","icon":"https://api.weather.gov/icons/land/day/sct?size=medium","shortForecast":"Mostly Sunny","detailedForecast":"Mostly sunny. High near 44, with temperatures falling to around 37 in the afternoon. North wind 10 to 15 mph, with gusts as high as 30 mph."},{"number":3,"name":"Wednesday Night","startTime":"2023-12-06T18:00:00-06:00","endTime":"2023-12-07T06:00:00-06:00","isDaytime":false,"temperature":30,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":-1.6666666666666667},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":88},"windSpeed":"0 to 5 mph","windDirection":"N","icon":"https://api.weather.gov/icons/land/night/few?size=medium","shortForecast":"Mostly Clear","detailedForecast":"Mostly clear, with a low around 30. North wind 0 to 5 mph."},{"number":4,"name":"Thursday","startTime":"2023-12-07T06:00:00-06:00","endTime":"2023-12-07T18:00:00-06:00","isDaytime":true,"temperature":51,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":-1.6666666666666667},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":81},"windSpeed":"5 to 10 mph","windDirection":"SW","icon":"https://api.weather.gov/icons/land/day/few?size=medium","shortForecast":"Sunny","detailedForecast":"Sunny, with a high near 51. Southwest wind 5 to 10 mph."},{"number":5,"name":"Thursday Night","startTime":"2023-12-07T18:00:00-06:00","endTime":"2023-12-08T06:00:00-06:00","isDaytime":false,"temperature":36,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":-1.6666666666666667},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":75},"windSpeed":"5 mph","windDirection":"S","icon":"https://api.weather.gov/icons/land/night/bkn?size=medium","shortForecast":"Mostly Cloudy","detailedForecast":"Mostly cloudy, with a low around 36. South wind around 5 mph."},{"number":6,"name":"Friday","startTime":"2023-12-08T06:00:00-06:00","endTime":"2023-12-08T18:00:00-06:00","isDaytime":true,"temperature":55,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":4.444444444444445},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":76},"windSpeed":"5 to 10 mph","windDirection":"S","icon":"https://api.weather.gov/icons/land/day/bkn?size=medium","shortForecast":"Partly Sunny","detailedForecast":"Partly sunny, with a high near 55. South wind 5 to 10 mph."},{"number":7,"name":"Friday Night","startTime":"2023-12-08T18:00:00-06:00","endTime":"2023-12-09T06:00:00-06:00","isDaytime":false,"temperature":45,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":6.666666666666667},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":93},"windSpeed":"10 mph","windDirection":"S","icon":"https://api.weather.gov/icons/land/night/bkn?size=medium","shortForecast":"Mostly Cloudy","detailedForecast":"Mostly cloudy, with a low around 45. South wind around 10 mph."},{"number":8,"name":"Saturday","startTime":"2023-12-09T06:00:00-06:00","endTime":"2023-12-09T18:00:00-06:00","isDaytime":true,"temperature":59,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":30},"dewpoint":{"unitCode":"wmoUnit:degC","value":11.666666666666666},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":96},"windSpeed":"10 to 15 mph","windDirection":"SE","icon":"https://api.weather.gov/icons/land/day/bkn/rain_showers,30?size=medium","shortForecast":"Mostly Cloudy then Chance Rain Showers","detailedForecast":"A chance of rain showers after noon. Mostly cloudy, with a high near 59. Chance of precipitation is 30%."},{"number":9,"name":"Saturday Night","startTime":"2023-12-09T18:00:00-06:00","endTime":"2023-12-10T06:00:00-06:00","isDaytime":false,"temperature":47,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":90},"dewpoint":{"unitCode":"wmoUnit:degC","value":12.222222222222221},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":100},"windSpeed":"15 to 20 mph","windDirection":"S","icon":"https://api.weather.gov/icons/land/night/tsra,80/tsra,90?size=medium","shortForecast":"Showers And Thunderstorms","detailedForecast":"Showers and thunderstorms. Some of the storms could produce heavy rain. Cloudy, with a low around 47. Chance of precipitation is 90%."},{"number":10,"name":"Sunday","startTime":"2023-12-10T06:00:00-06:00","endTime":"2023-12-10T18:00:00-06:00","isDaytime":true,"temperature":54,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":80},"dewpoint":{"unitCode":"wmoUnit:degC","value":10},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":93},"windSpeed":"15 to 20 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/day/tsra,80/tsra,50?size=medium","shortForecast":"Showers And Thunderstorms","detailedForecast":"Showers and thunderstorms. Mostly cloudy, with a high near 54. Chance of precipitation is 80%."},{"number":11,"name":"Sunday Night","startTime":"2023-12-10T18:00:00-06:00","endTime":"2023-12-11T06:00:00-06:00","isDaytime":false,"temperature":31,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":30},"dewpoint":{"unitCode":"wmoUnit:degC","value":0.5555555555555556},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":88},"windSpeed":"10 to 15 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/night/snow,30/sct?size=medium","shortForecast":"Chance Rain And Snow Showers then Partly Cloudy","detailedForecast":"A chance of rain and snow showers before midnight. Partly cloudy, with a low around 31. Chance of precipitation is 30%."},{"number":12,"name":"Monday","startTime":"2023-12-11T06:00:00-06:00","endTime":"2023-12-11T18:00:00-06:00","isDaytime":true,"temperature":47,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":-1.6666666666666667},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":85},"windSpeed":"10 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/day/few?size=medium","shortForecast":"Sunny","detailedForecast":"Sunny, with a high near 47."},{"number":13,"name":"Monday Night","startTime":"2023-12-11T18:00:00-06:00","endTime":"2023-12-12T06:00:00-06:00","isDaytime":false,"temperature":31,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":-2.2222222222222223},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":81},"windSpeed":"5 to 10 mph","windDirection":"NW","icon":"https://api.weather.gov/icons/land/night/few?size=medium","shortForecast":"Mostly Clear","detailedForecast":"Mostly clear, with a low around 31."},{"number":14,"name":"Tuesday","startTime":"2023-12-12T06:00:00-06:00","endTime":"2023-12-12T18:00:00-06:00","isDaytime":true,"temperature":50,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":0},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":78},"windSpeed":"5 mph","windDirection":"E","icon":"https://api.weather.gov/icons/land/day/few?size=medium","shortForecast":"Sunny","detailedForecast":"Sunny, with a high near 50."}]}
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

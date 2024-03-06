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
  var weekly_JKL_47_57 = {"updated":"2024-03-06T08:15:14+00:00","units":"us","forecastGenerator":"BaselineForecastGenerator","generatedAt":"2024-03-06T08:32:46+00:00","updateTime":"2024-03-06T08:15:14+00:00","validTimes":"2024-03-06T02:00:00+00:00/P8D","elevation":{"unitCode":"wmoUnit:m","value":365.1504},"periods":[{"number":1,"name":"Overnight","startTime":"2024-03-06T03:00:00-05:00","endTime":"2024-03-06T06:00:00-05:00","isDaytime":false,"temperature":54,"temperatureUnit":"F","temperatureTrend":"rising","probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":90},"dewpoint":{"unitCode":"wmoUnit:degC","value":13.333333333333334},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":100},"windSpeed":"2 mph","windDirection":"ENE","icon":"https://api.weather.gov/icons/land/night/rain_showers,90?size=medium","shortForecast":"Rain Showers","detailedForecast":"Rain showers and patchy fog. Cloudy. Low around 54, with temperatures rising to around 56 overnight. East northeast wind around 2 mph. Chance of precipitation is 90%. New rainfall amounts between a tenth and quarter of an inch possible."},{"number":2,"name":"Wednesday","startTime":"2024-03-06T06:00:00-05:00","endTime":"2024-03-06T18:00:00-05:00","isDaytime":true,"temperature":59,"temperatureUnit":"F","temperatureTrend":"falling","probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":100},"dewpoint":{"unitCode":"wmoUnit:degC","value":12.777777777777779},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":96},"windSpeed":"5 mph","windDirection":"NE","icon":"https://api.weather.gov/icons/land/day/rain_showers,100/rain_showers,80?size=medium","shortForecast":"Rain Showers","detailedForecast":"Rain showers and patchy fog. Cloudy. High near 59, with temperatures falling to around 57 in the afternoon. Northeast wind around 5 mph. Chance of precipitation is 100%. New rainfall amounts between a quarter and half of an inch possible."},{"number":3,"name":"Wednesday Night","startTime":"2024-03-06T18:00:00-05:00","endTime":"2024-03-07T06:00:00-05:00","isDaytime":false,"temperature":45,"temperatureUnit":"F","temperatureTrend":"rising","probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":20},"dewpoint":{"unitCode":"wmoUnit:degC","value":11.666666666666666},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":93},"windSpeed":"6 mph","windDirection":"N","icon":"https://api.weather.gov/icons/land/night/rain_showers,20/rain?size=medium","shortForecast":"Patchy Fog","detailedForecast":"Patchy fog and a slight chance of rain showers before 7pm, then patchy fog and a slight chance of drizzle between 7pm and 2am. Mostly cloudy. Low around 45, with temperatures rising to around 47 overnight. North wind around 6 mph. Chance of precipitation is 20%. New rainfall amounts less than a tenth of an inch possible."},{"number":4,"name":"Thursday","startTime":"2024-03-07T06:00:00-05:00","endTime":"2024-03-07T18:00:00-05:00","isDaytime":true,"temperature":58,"temperatureUnit":"F","temperatureTrend":"falling","probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":8.333333333333334},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":96},"windSpeed":"1 to 5 mph","windDirection":"NNE","icon":"https://api.weather.gov/icons/land/day/rain/bkn?size=medium","shortForecast":"Patchy Fog then Mostly Cloudy","detailedForecast":"Patchy fog and a slight chance of drizzle before 9am. Mostly cloudy. High near 58, with temperatures falling to around 55 in the afternoon. North northeast wind 1 to 5 mph."},{"number":5,"name":"Thursday Night","startTime":"2024-03-07T18:00:00-05:00","endTime":"2024-03-08T06:00:00-05:00","isDaytime":false,"temperature":47,"temperatureUnit":"F","temperatureTrend":"rising","probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":8.333333333333334},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":89},"windSpeed":"6 mph","windDirection":"E","icon":"https://api.weather.gov/icons/land/night/bkn?size=medium","shortForecast":"Mostly Cloudy","detailedForecast":"Mostly cloudy. Low around 47, with temperatures rising to around 48 overnight. East wind around 6 mph."},{"number":6,"name":"Friday","startTime":"2024-03-08T06:00:00-05:00","endTime":"2024-03-08T18:00:00-05:00","isDaytime":true,"temperature":65,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":40},"dewpoint":{"unitCode":"wmoUnit:degC","value":10},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":93},"windSpeed":"6 to 10 mph","windDirection":"SE","icon":"https://api.weather.gov/icons/land/day/rain_showers,20/rain_showers,40?size=medium","shortForecast":"Chance Rain Showers","detailedForecast":"A chance of rain showers after 10am. Mostly cloudy, with a high near 65. Chance of precipitation is 40%."},{"number":7,"name":"Friday Night","startTime":"2024-03-08T18:00:00-05:00","endTime":"2024-03-09T06:00:00-05:00","isDaytime":false,"temperature":52,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":90},"dewpoint":{"unitCode":"wmoUnit:degC","value":10.555555555555555},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":93},"windSpeed":"10 to 17 mph","windDirection":"SSE","icon":"https://api.weather.gov/icons/land/night/rain_showers,60/rain_showers,90?size=medium","shortForecast":"Rain Showers","detailedForecast":"Rain showers. Cloudy, with a low around 52. Chance of precipitation is 90%."},{"number":8,"name":"Saturday","startTime":"2024-03-09T06:00:00-05:00","endTime":"2024-03-09T18:00:00-05:00","isDaytime":true,"temperature":61,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":100},"dewpoint":{"unitCode":"wmoUnit:degC","value":11.11111111111111},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":96},"windSpeed":"18 mph","windDirection":"SW","icon":"https://api.weather.gov/icons/land/day/tsra,100/tsra,90?size=medium","shortForecast":"Showers And Thunderstorms","detailedForecast":"Rain showers before 8am, then showers and thunderstorms. Cloudy, with a high near 61. Chance of precipitation is 100%."},{"number":9,"name":"Saturday Night","startTime":"2024-03-09T18:00:00-05:00","endTime":"2024-03-10T06:00:00-04:00","isDaytime":false,"temperature":35,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":60},"dewpoint":{"unitCode":"wmoUnit:degC","value":6.666666666666667},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":73},"windSpeed":"14 to 17 mph","windDirection":"WNW","icon":"https://api.weather.gov/icons/land/night/tsra_sct,60/tsra_sct,30?size=medium","shortForecast":"Showers And Thunderstorms Likely","detailedForecast":"Showers and thunderstorms likely. Mostly cloudy, with a low around 35. Chance of precipitation is 60%."},{"number":10,"name":"Sunday","startTime":"2024-03-10T06:00:00-04:00","endTime":"2024-03-10T18:00:00-04:00","isDaytime":true,"temperature":48,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":20},"dewpoint":{"unitCode":"wmoUnit:degC","value":-1.6666666666666667},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":75},"windSpeed":"14 to 21 mph","windDirection":"WNW","icon":"https://api.weather.gov/icons/land/day/rain_showers,20/wind_sct?size=medium","shortForecast":"Slight Chance Rain Showers then Mostly Sunny","detailedForecast":"A slight chance of rain showers before 9am. Mostly sunny, with a high near 48. Chance of precipitation is 20%."},{"number":11,"name":"Sunday Night","startTime":"2024-03-10T18:00:00-04:00","endTime":"2024-03-11T06:00:00-04:00","isDaytime":false,"temperature":31,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":-4.444444444444445},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":69},"windSpeed":"10 to 21 mph","windDirection":"WNW","icon":"https://api.weather.gov/icons/land/night/wind_few?size=medium","shortForecast":"Mostly Clear","detailedForecast":"Mostly clear, with a low around 31."},{"number":12,"name":"Monday","startTime":"2024-03-11T06:00:00-04:00","endTime":"2024-03-11T18:00:00-04:00","isDaytime":true,"temperature":55,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":-3.888888888888889},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":75},"windSpeed":"10 to 14 mph","windDirection":"WNW","icon":"https://api.weather.gov/icons/land/day/few?size=medium","shortForecast":"Sunny","detailedForecast":"Sunny, with a high near 55."},{"number":13,"name":"Monday Night","startTime":"2024-03-11T18:00:00-04:00","endTime":"2024-03-12T06:00:00-04:00","isDaytime":false,"temperature":32,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":-2.2222222222222223},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":75},"windSpeed":"5 to 12 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/night/few?size=medium","shortForecast":"Mostly Clear","detailedForecast":"Mostly clear, with a low around 32."},{"number":14,"name":"Tuesday","startTime":"2024-03-12T06:00:00-04:00","endTime":"2024-03-12T18:00:00-04:00","isDaytime":true,"temperature":63,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":0},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":81},"windSpeed":"5 to 8 mph","windDirection":"SW","icon":"https://api.weather.gov/icons/land/day/few?size=medium","shortForecast":"Sunny","detailedForecast":"Sunny, with a high near 63."}]}
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

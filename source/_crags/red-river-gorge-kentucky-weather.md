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
  var weekly_JKL_47_57 = {"updated":"2024-02-04T07:28:06+00:00","units":"us","forecastGenerator":"BaselineForecastGenerator","generatedAt":"2024-02-04T08:31:45+00:00","updateTime":"2024-02-04T07:28:06+00:00","validTimes":"2024-02-04T01:00:00+00:00/P8D","elevation":{"unitCode":"wmoUnit:m","value":365.1504},"periods":[{"number":1,"name":"Overnight","startTime":"2024-02-04T03:00:00-05:00","endTime":"2024-02-04T06:00:00-05:00","isDaytime":false,"temperature":34,"temperatureUnit":"F","temperatureTrend":"rising","probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":-2.2222222222222223},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":72},"windSpeed":"8 mph","windDirection":"E","icon":"https://api.weather.gov/icons/land/night/few?size=medium","shortForecast":"Mostly Clear","detailedForecast":"Mostly clear. Low around 34, with temperatures rising to around 36 overnight. East wind around 8 mph."},{"number":2,"name":"Sunday","startTime":"2024-02-04T06:00:00-05:00","endTime":"2024-02-04T18:00:00-05:00","isDaytime":true,"temperature":56,"temperatureUnit":"F","temperatureTrend":"falling","probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":-1.1111111111111112},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":75},"windSpeed":"7 to 10 mph","windDirection":"ENE","icon":"https://api.weather.gov/icons/land/day/few?size=medium","shortForecast":"Sunny","detailedForecast":"Sunny. High near 56, with temperatures falling to around 54 in the afternoon. East northeast wind 7 to 10 mph, with gusts as high as 16 mph."},{"number":3,"name":"Sunday Night","startTime":"2024-02-04T18:00:00-05:00","endTime":"2024-02-05T06:00:00-05:00","isDaytime":false,"temperature":33,"temperatureUnit":"F","temperatureTrend":"rising","probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":-0.5555555555555556},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":72},"windSpeed":"9 mph","windDirection":"NE","icon":"https://api.weather.gov/icons/land/night/few?size=medium","shortForecast":"Mostly Clear","detailedForecast":"Mostly clear. Low around 33, with temperatures rising to around 36 overnight. Northeast wind around 9 mph."},{"number":4,"name":"Monday","startTime":"2024-02-05T06:00:00-05:00","endTime":"2024-02-05T18:00:00-05:00","isDaytime":true,"temperature":52,"temperatureUnit":"F","temperatureTrend":"falling","probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":-1.1111111111111112},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":78},"windSpeed":"9 mph","windDirection":"NNE","icon":"https://api.weather.gov/icons/land/day/skc?size=medium","shortForecast":"Sunny","detailedForecast":"Sunny. High near 52, with temperatures falling to around 49 in the afternoon. North northeast wind around 9 mph."},{"number":5,"name":"Monday Night","startTime":"2024-02-05T18:00:00-05:00","endTime":"2024-02-06T06:00:00-05:00","isDaytime":false,"temperature":29,"temperatureUnit":"F","temperatureTrend":"rising","probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":-1.6666666666666667},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":88},"windSpeed":"8 mph","windDirection":"NNE","icon":"https://api.weather.gov/icons/land/night/few?size=medium","shortForecast":"Mostly Clear","detailedForecast":"Mostly clear. Low around 29, with temperatures rising to around 31 overnight. North northeast wind around 8 mph."},{"number":6,"name":"Tuesday","startTime":"2024-02-06T06:00:00-05:00","endTime":"2024-02-06T18:00:00-05:00","isDaytime":true,"temperature":51,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":-1.1111111111111112},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":92},"windSpeed":"6 mph","windDirection":"NNE","icon":"https://api.weather.gov/icons/land/day/few?size=medium","shortForecast":"Sunny","detailedForecast":"Sunny, with a high near 51."},{"number":7,"name":"Tuesday Night","startTime":"2024-02-06T18:00:00-05:00","endTime":"2024-02-07T06:00:00-05:00","isDaytime":false,"temperature":30,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":-0.5555555555555556},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":85},"windSpeed":"6 mph","windDirection":"ENE","icon":"https://api.weather.gov/icons/land/night/few?size=medium","shortForecast":"Mostly Clear","detailedForecast":"Mostly clear, with a low around 30."},{"number":8,"name":"Wednesday","startTime":"2024-02-07T06:00:00-05:00","endTime":"2024-02-07T18:00:00-05:00","isDaytime":true,"temperature":58,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":0.5555555555555556},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":85},"windSpeed":"6 mph","windDirection":"SSE","icon":"https://api.weather.gov/icons/land/day/few?size=medium","shortForecast":"Sunny","detailedForecast":"Sunny, with a high near 58."},{"number":9,"name":"Wednesday Night","startTime":"2024-02-07T18:00:00-05:00","endTime":"2024-02-08T06:00:00-05:00","isDaytime":false,"temperature":38,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":1.1111111111111112},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":79},"windSpeed":"7 mph","windDirection":"SSE","icon":"https://api.weather.gov/icons/land/night/sct?size=medium","shortForecast":"Partly Cloudy","detailedForecast":"Partly cloudy, with a low around 38."},{"number":10,"name":"Thursday","startTime":"2024-02-08T06:00:00-05:00","endTime":"2024-02-08T18:00:00-05:00","isDaytime":true,"temperature":59,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":2.7777777777777777},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":82},"windSpeed":"7 to 13 mph","windDirection":"S","icon":"https://api.weather.gov/icons/land/day/bkn?size=medium","shortForecast":"Partly Sunny","detailedForecast":"Partly sunny, with a high near 59."},{"number":11,"name":"Thursday Night","startTime":"2024-02-08T18:00:00-05:00","endTime":"2024-02-09T06:00:00-05:00","isDaytime":false,"temperature":46,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":40},"dewpoint":{"unitCode":"wmoUnit:degC","value":2.7777777777777777},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":63},"windSpeed":"13 to 16 mph","windDirection":"S","icon":"https://api.weather.gov/icons/land/night/bkn/rain_showers,40?size=medium","shortForecast":"Mostly Cloudy then Chance Rain Showers","detailedForecast":"A chance of rain showers after midnight. Mostly cloudy, with a low around 46. Chance of precipitation is 40%."},{"number":12,"name":"Friday","startTime":"2024-02-09T06:00:00-05:00","endTime":"2024-02-09T18:00:00-05:00","isDaytime":true,"temperature":57,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":70},"dewpoint":{"unitCode":"wmoUnit:degC","value":8.88888888888889},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":83},"windSpeed":"18 mph","windDirection":"SSW","icon":"https://api.weather.gov/icons/land/day/rain_showers,70/rain_showers,60?size=medium","shortForecast":"Rain Showers Likely","detailedForecast":"Rain showers likely. Mostly cloudy, with a high near 57. Chance of precipitation is 70%."},{"number":13,"name":"Friday Night","startTime":"2024-02-09T18:00:00-05:00","endTime":"2024-02-10T06:00:00-05:00","isDaytime":false,"temperature":49,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":70},"dewpoint":{"unitCode":"wmoUnit:degC","value":8.88888888888889},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":89},"windSpeed":"17 mph","windDirection":"SW","icon":"https://api.weather.gov/icons/land/night/rain_showers,60/rain_showers,70?size=medium","shortForecast":"Rain Showers Likely","detailedForecast":"Rain showers likely. Mostly cloudy, with a low around 49. Chance of precipitation is 70%."},{"number":14,"name":"Saturday","startTime":"2024-02-10T06:00:00-05:00","endTime":"2024-02-10T18:00:00-05:00","isDaytime":true,"temperature":60,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":60},"dewpoint":{"unitCode":"wmoUnit:degC","value":9.444444444444445},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":96},"windSpeed":"14 mph","windDirection":"SW","icon":"https://api.weather.gov/icons/land/day/rain_showers,60/rain_showers,50?size=medium","shortForecast":"Rain Showers Likely","detailedForecast":"Rain showers likely. Partly sunny, with a high near 60. Chance of precipitation is 60%."}]}
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

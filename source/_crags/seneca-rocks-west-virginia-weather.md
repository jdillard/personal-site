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
  var weekly_LWX_14_57 = {"updated":"2023-11-16T08:29:59+00:00","units":"us","forecastGenerator":"BaselineForecastGenerator","generatedAt":"2023-11-16T08:32:56+00:00","updateTime":"2023-11-16T08:29:59+00:00","validTimes":"2023-11-16T02:00:00+00:00/P7DT23H","elevation":{"unitCode":"wmoUnit:m","value":729.996},"periods":[{"number":1,"name":"Overnight","startTime":"2023-11-16T03:00:00-05:00","endTime":"2023-11-16T06:00:00-05:00","isDaytime":false,"temperature":37,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":-6.666666666666667},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":46},"windSpeed":"6 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/night/few?size=medium","shortForecast":"Mostly Clear","detailedForecast":"Mostly clear, with a low around 37. West wind around 6 mph."},{"number":2,"name":"Thursday","startTime":"2023-11-16T06:00:00-05:00","endTime":"2023-11-16T18:00:00-05:00","isDaytime":true,"temperature":67,"temperatureUnit":"F","temperatureTrend":"falling","probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":-1.6666666666666667},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":50},"windSpeed":"6 mph","windDirection":"SW","icon":"https://api.weather.gov/icons/land/day/skc?size=medium","shortForecast":"Sunny","detailedForecast":"Sunny. High near 67, with temperatures falling to around 61 in the afternoon. Southwest wind around 6 mph."},{"number":3,"name":"Thursday Night","startTime":"2023-11-16T18:00:00-05:00","endTime":"2023-11-17T06:00:00-05:00","isDaytime":false,"temperature":45,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":5.555555555555555},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":83},"windSpeed":"5 to 8 mph","windDirection":"SW","icon":"https://api.weather.gov/icons/land/night/few?size=medium","shortForecast":"Mostly Clear","detailedForecast":"Mostly clear, with a low around 45. Southwest wind 5 to 8 mph."},{"number":4,"name":"Friday","startTime":"2023-11-17T06:00:00-05:00","endTime":"2023-11-17T18:00:00-05:00","isDaytime":true,"temperature":62,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":70},"dewpoint":{"unitCode":"wmoUnit:degC","value":9.444444444444445},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":89},"windSpeed":"7 to 10 mph","windDirection":"SW","icon":"https://api.weather.gov/icons/land/day/bkn/rain_showers,70?size=medium","shortForecast":"Mostly Cloudy then Rain Showers Likely","detailedForecast":"Rain showers likely after 1pm. Mostly cloudy, with a high near 62. Southwest wind 7 to 10 mph. Chance of precipitation is 70%. New rainfall amounts less than a tenth of an inch possible."},{"number":5,"name":"Friday Night","startTime":"2023-11-17T18:00:00-05:00","endTime":"2023-11-18T06:00:00-05:00","isDaytime":false,"temperature":41,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":90},"dewpoint":{"unitCode":"wmoUnit:degC","value":10},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":93},"windSpeed":"9 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/night/rain_showers,90?size=medium","shortForecast":"Rain Showers","detailedForecast":"Rain showers. Cloudy, with a low around 41. West wind around 9 mph. Chance of precipitation is 90%."},{"number":6,"name":"Saturday","startTime":"2023-11-18T06:00:00-05:00","endTime":"2023-11-18T18:00:00-05:00","isDaytime":true,"temperature":47,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":80},"dewpoint":{"unitCode":"wmoUnit:degC","value":5},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":96},"windSpeed":"10 to 15 mph","windDirection":"NW","icon":"https://api.weather.gov/icons/land/day/rain_showers,80/sct?size=medium","shortForecast":"Rain Showers then Mostly Sunny","detailedForecast":"Rain showers before 7am. Mostly sunny, with a high near 47. Chance of precipitation is 80%."},{"number":7,"name":"Saturday Night","startTime":"2023-11-18T18:00:00-05:00","endTime":"2023-11-19T06:00:00-05:00","isDaytime":false,"temperature":29,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":-3.3333333333333335},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":78},"windSpeed":"8 to 15 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/night/skc?size=medium","shortForecast":"Clear","detailedForecast":"Clear, with a low around 29."},{"number":8,"name":"Sunday","startTime":"2023-11-19T06:00:00-05:00","endTime":"2023-11-19T18:00:00-05:00","isDaytime":true,"temperature":48,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":-3.888888888888889},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":75},"windSpeed":"9 to 15 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/day/skc?size=medium","shortForecast":"Sunny","detailedForecast":"Sunny, with a high near 48."},{"number":9,"name":"Sunday Night","startTime":"2023-11-19T18:00:00-05:00","endTime":"2023-11-20T06:00:00-05:00","isDaytime":false,"temperature":30,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":-3.3333333333333335},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":78},"windSpeed":"6 to 13 mph","windDirection":"SW","icon":"https://api.weather.gov/icons/land/night/few?size=medium","shortForecast":"Mostly Clear","detailedForecast":"Mostly clear, with a low around 30."},{"number":10,"name":"Monday","startTime":"2023-11-20T06:00:00-05:00","endTime":"2023-11-20T18:00:00-05:00","isDaytime":true,"temperature":47,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":-2.2222222222222223},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":78},"windSpeed":"6 to 10 mph","windDirection":"SE","icon":"https://api.weather.gov/icons/land/day/bkn?size=medium","shortForecast":"Partly Sunny","detailedForecast":"Partly sunny, with a high near 47."},{"number":11,"name":"Monday Night","startTime":"2023-11-20T18:00:00-05:00","endTime":"2023-11-21T06:00:00-05:00","isDaytime":false,"temperature":36,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":60},"dewpoint":{"unitCode":"wmoUnit:degC","value":1.6666666666666667},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":89},"windSpeed":"10 to 15 mph","windDirection":"SE","icon":"https://api.weather.gov/icons/land/night/rain_showers,40/rain_showers,60?size=medium","shortForecast":"Rain Showers Likely","detailedForecast":"Rain showers likely after 7pm. Mostly cloudy, with a low around 36. Chance of precipitation is 60%."},{"number":12,"name":"Tuesday","startTime":"2023-11-21T06:00:00-05:00","endTime":"2023-11-21T18:00:00-05:00","isDaytime":true,"temperature":49,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":80},"dewpoint":{"unitCode":"wmoUnit:degC","value":6.111111111111111},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":92},"windSpeed":"15 to 18 mph","windDirection":"SE","icon":"https://api.weather.gov/icons/land/day/rain_showers,80?size=medium","shortForecast":"Rain Showers","detailedForecast":"Rain showers. Mostly cloudy, with a high near 49. Chance of precipitation is 80%."},{"number":13,"name":"Tuesday Night","startTime":"2023-11-21T18:00:00-05:00","endTime":"2023-11-22T06:00:00-05:00","isDaytime":false,"temperature":36,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":80},"dewpoint":{"unitCode":"wmoUnit:degC","value":5.555555555555555},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":89},"windSpeed":"18 mph","windDirection":"SW","icon":"https://api.weather.gov/icons/land/night/rain_showers,80/rain_showers,70?size=medium","shortForecast":"Rain Showers","detailedForecast":"Rain showers. Mostly cloudy, with a low around 36. Chance of precipitation is 80%."},{"number":14,"name":"Wednesday","startTime":"2023-11-22T06:00:00-05:00","endTime":"2023-11-22T18:00:00-05:00","isDaytime":true,"temperature":40,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":60},"dewpoint":{"unitCode":"wmoUnit:degC","value":1.6666666666666667},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":85},"windSpeed":"20 to 23 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/day/snow,60/snow,30?size=medium","shortForecast":"Chance Rain And Snow Showers","detailedForecast":"Rain showers likely before 7am, then a chance of rain and snow showers. Partly sunny, with a high near 40. Chance of precipitation is 60%."}]}
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

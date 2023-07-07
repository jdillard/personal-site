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
  var weekly_MRX_19_12 = {"updated":"2023-07-07T07:45:03+00:00","units":"us","forecastGenerator":"BaselineForecastGenerator","generatedAt":"2023-07-07T08:34:31+00:00","updateTime":"2023-07-07T07:45:03+00:00","validTimes":"2023-07-07T01:00:00+00:00/P7DT12H","elevation":{"unitCode":"wmoUnit:m","value":558.0888},"periods":[{"number":1,"name":"Overnight","startTime":"2023-07-07T03:00:00-05:00","endTime":"2023-07-07T06:00:00-05:00","isDaytime":false,"temperature":65,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":20},"dewpoint":{"unitCode":"wmoUnit:degC","value":19.444444444444443},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":100},"windSpeed":"5 mph","windDirection":"N","icon":"https://api.weather.gov/icons/land/night/tsra_sct,20?size=medium","shortForecast":"Slight Chance Showers And Thunderstorms","detailedForecast":"A slight chance of showers and thunderstorms. Mostly cloudy, with a low around 65. North wind around 5 mph. Chance of precipitation is 20%."},{"number":2,"name":"Friday","startTime":"2023-07-07T06:00:00-05:00","endTime":"2023-07-07T18:00:00-05:00","isDaytime":true,"temperature":85,"temperatureUnit":"F","temperatureTrend":"falling","probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":21.11111111111111},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":100},"windSpeed":"5 mph","windDirection":"N","icon":"https://api.weather.gov/icons/land/day/sct?size=medium","shortForecast":"Mostly Sunny","detailedForecast":"Mostly sunny. High near 85, with temperatures falling to around 82 in the afternoon. North wind around 5 mph."},{"number":3,"name":"Friday Night","startTime":"2023-07-07T18:00:00-05:00","endTime":"2023-07-08T06:00:00-05:00","isDaytime":false,"temperature":67,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":20.555555555555557},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":90},"windSpeed":"5 mph","windDirection":"N","icon":"https://api.weather.gov/icons/land/night/sct?size=medium","shortForecast":"Partly Cloudy","detailedForecast":"Partly cloudy, with a low around 67. North wind around 5 mph."},{"number":4,"name":"Saturday","startTime":"2023-07-08T06:00:00-05:00","endTime":"2023-07-08T18:00:00-05:00","isDaytime":true,"temperature":85,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":60},"dewpoint":{"unitCode":"wmoUnit:degC","value":21.11111111111111},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":87},"windSpeed":"5 mph","windDirection":"NW","icon":"https://api.weather.gov/icons/land/day/tsra_hi,20/tsra_hi,60?size=medium","shortForecast":"Showers And Thunderstorms Likely","detailedForecast":"Showers and thunderstorms likely after 10am. Mostly sunny, with a high near 85. Northwest wind around 5 mph. Chance of precipitation is 60%."},{"number":5,"name":"Saturday Night","startTime":"2023-07-08T18:00:00-05:00","endTime":"2023-07-09T06:00:00-05:00","isDaytime":false,"temperature":66,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":70},"dewpoint":{"unitCode":"wmoUnit:degC","value":20.555555555555557},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":93},"windSpeed":"5 mph","windDirection":"SW","icon":"https://api.weather.gov/icons/land/night/tsra_hi,70?size=medium","shortForecast":"Showers And Thunderstorms Likely","detailedForecast":"Showers and thunderstorms likely before 10pm, then showers and thunderstorms likely. Mostly cloudy, with a low around 66. Southwest wind around 5 mph. Chance of precipitation is 70%."},{"number":6,"name":"Sunday","startTime":"2023-07-09T06:00:00-05:00","endTime":"2023-07-09T18:00:00-05:00","isDaytime":true,"temperature":80,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":70},"dewpoint":{"unitCode":"wmoUnit:degC","value":21.666666666666668},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":97},"windSpeed":"5 to 10 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/day/tsra_hi,70?size=medium","shortForecast":"Showers And Thunderstorms Likely","detailedForecast":"Showers and thunderstorms likely before 1pm, then showers and thunderstorms likely. Partly sunny, with a high near 80. West wind 5 to 10 mph. Chance of precipitation is 70%."},{"number":7,"name":"Sunday Night","startTime":"2023-07-09T18:00:00-05:00","endTime":"2023-07-10T06:00:00-05:00","isDaytime":false,"temperature":64,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":70},"dewpoint":{"unitCode":"wmoUnit:degC","value":20.555555555555557},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":97},"windSpeed":"5 to 10 mph","windDirection":"NW","icon":"https://api.weather.gov/icons/land/night/tsra_sct,70/tsra_sct,40?size=medium","shortForecast":"Showers And Thunderstorms Likely","detailedForecast":"Showers and thunderstorms likely before 4am, then a chance of showers and thunderstorms. Mostly cloudy, with a low around 64. Northwest wind 5 to 10 mph. Chance of precipitation is 70%."},{"number":8,"name":"Monday","startTime":"2023-07-10T06:00:00-05:00","endTime":"2023-07-10T18:00:00-05:00","isDaytime":true,"temperature":81,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":40},"dewpoint":{"unitCode":"wmoUnit:degC","value":18.88888888888889},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":97},"windSpeed":"5 to 10 mph","windDirection":"N","icon":"https://api.weather.gov/icons/land/day/tsra_hi,40?size=medium","shortForecast":"Chance Showers And Thunderstorms","detailedForecast":"A chance of showers and thunderstorms before 1pm, then a chance of showers and thunderstorms. Mostly sunny, with a high near 81. Chance of precipitation is 40%."},{"number":9,"name":"Monday Night","startTime":"2023-07-10T18:00:00-05:00","endTime":"2023-07-11T06:00:00-05:00","isDaytime":false,"temperature":62,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":40},"dewpoint":{"unitCode":"wmoUnit:degC","value":18.88888888888889},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":90},"windSpeed":"5 to 10 mph","windDirection":"N","icon":"https://api.weather.gov/icons/land/night/tsra_hi,40/few?size=medium","shortForecast":"Chance Showers And Thunderstorms then Mostly Clear","detailedForecast":"A chance of showers and thunderstorms before 7pm. Mostly clear, with a low around 62. Chance of precipitation is 40%."},{"number":10,"name":"Tuesday","startTime":"2023-07-11T06:00:00-05:00","endTime":"2023-07-11T18:00:00-05:00","isDaytime":true,"temperature":84,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":18.333333333333332},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":97},"windSpeed":"5 to 10 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/day/few?size=medium","shortForecast":"Sunny","detailedForecast":"Sunny, with a high near 84."},{"number":11,"name":"Tuesday Night","startTime":"2023-07-11T18:00:00-05:00","endTime":"2023-07-12T06:00:00-05:00","isDaytime":false,"temperature":63,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":18.333333333333332},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":87},"windSpeed":"5 mph","windDirection":"NW","icon":"https://api.weather.gov/icons/land/night/few?size=medium","shortForecast":"Mostly Clear","detailedForecast":"Mostly clear, with a low around 63."},{"number":12,"name":"Wednesday","startTime":"2023-07-12T06:00:00-05:00","endTime":"2023-07-12T18:00:00-05:00","isDaytime":true,"temperature":86,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":30},"dewpoint":{"unitCode":"wmoUnit:degC","value":19.444444444444443},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":93},"windSpeed":"5 to 10 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/day/rain_showers,20/tsra_hi,30?size=medium","shortForecast":"Slight Chance Rain Showers then Chance Showers And Thunderstorms","detailedForecast":"A slight chance of rain showers between 7am and 1pm, then a chance of showers and thunderstorms. Sunny, with a high near 86. Chance of precipitation is 30%."},{"number":13,"name":"Wednesday Night","startTime":"2023-07-12T18:00:00-05:00","endTime":"2023-07-13T06:00:00-05:00","isDaytime":false,"temperature":67,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":30},"dewpoint":{"unitCode":"wmoUnit:degC","value":20},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":90},"windSpeed":"5 to 10 mph","windDirection":"SW","icon":"https://api.weather.gov/icons/land/night/tsra_hi,30/tsra_hi,20?size=medium","shortForecast":"Chance Showers And Thunderstorms","detailedForecast":"A chance of showers and thunderstorms. Partly cloudy, with a low around 67. Chance of precipitation is 30%."},{"number":14,"name":"Thursday","startTime":"2023-07-13T06:00:00-05:00","endTime":"2023-07-13T18:00:00-05:00","isDaytime":true,"temperature":86,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":50},"dewpoint":{"unitCode":"wmoUnit:degC","value":22.77777777777778},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":93},"windSpeed":"5 to 10 mph","windDirection":"SW","icon":"https://api.weather.gov/icons/land/day/tsra_hi,30/tsra_hi,50?size=medium","shortForecast":"Chance Showers And Thunderstorms","detailedForecast":"A slight chance of rain showers before 7am, then a chance of showers and thunderstorms. Mostly sunny, with a high near 86. Chance of precipitation is 50%."}]}
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

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
  var weekly_LWX_14_57 = {"units":"us","forecastGenerator":"BaselineForecastGenerator","generatedAt":"2024-07-28T08:32:09+00:00","updateTime":"2024-07-28T08:29:51+00:00","validTimes":"2024-07-28T02:00:00+00:00/P7DT23H","elevation":{"unitCode":"wmoUnit:m","value":729.996},"periods":[{"number":1,"name":"Overnight","startTime":"2024-07-28T04:00:00-04:00","endTime":"2024-07-28T06:00:00-04:00","isDaytime":false,"temperature":61,"temperatureUnit":"F","temperatureTrend":"","probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"windSpeed":"3 mph","windDirection":"SW","icon":"https://api.weather.gov/icons/land/night/few?size=medium","shortForecast":"Mostly Clear","detailedForecast":"Mostly clear, with a low around 61. Southwest wind around 3 mph."},{"number":2,"name":"Sunday","startTime":"2024-07-28T06:00:00-04:00","endTime":"2024-07-28T18:00:00-04:00","isDaytime":true,"temperature":87,"temperatureUnit":"F","temperatureTrend":"","probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"windSpeed":"2 to 6 mph","windDirection":"NW","icon":"https://api.weather.gov/icons/land/day/few?size=medium","shortForecast":"Sunny","detailedForecast":"Sunny, with a high near 87. Northwest wind 2 to 6 mph. New rainfall amounts less than a tenth of an inch possible."},{"number":3,"name":"Sunday Night","startTime":"2024-07-28T18:00:00-04:00","endTime":"2024-07-29T06:00:00-04:00","isDaytime":false,"temperature":64,"temperatureUnit":"F","temperatureTrend":"","probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"windSpeed":"5 mph","windDirection":"SW","icon":"https://api.weather.gov/icons/land/night/sct?size=medium","shortForecast":"Partly Cloudy","detailedForecast":"Partly cloudy, with a low around 64. Southwest wind around 5 mph. New rainfall amounts less than a tenth of an inch possible."},{"number":4,"name":"Monday","startTime":"2024-07-29T06:00:00-04:00","endTime":"2024-07-29T18:00:00-04:00","isDaytime":true,"temperature":85,"temperatureUnit":"F","temperatureTrend":"","probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":70},"windSpeed":"7 mph","windDirection":"SW","icon":"https://api.weather.gov/icons/land/day/rain_showers,50/tsra_hi,70?size=medium","shortForecast":"Chance Rain Showers then Chance Showers And Thunderstorms","detailedForecast":"A chance of rain showers between 10am and 2pm, then a chance of showers and thunderstorms between 2pm and 5pm, then showers and thunderstorms likely. Partly sunny, with a high near 85. Southwest wind around 7 mph. Chance of precipitation is 70%. New rainfall amounts between a half and three quarters of an inch possible."},{"number":5,"name":"Monday Night","startTime":"2024-07-29T18:00:00-04:00","endTime":"2024-07-30T06:00:00-04:00","isDaytime":false,"temperature":64,"temperatureUnit":"F","temperatureTrend":"","probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":70},"windSpeed":"5 mph","windDirection":"SW","icon":"https://api.weather.gov/icons/land/night/tsra_sct,70/tsra_sct,50?size=medium","shortForecast":"Showers And Thunderstorms Likely then Chance Showers And Thunderstorms","detailedForecast":"Showers and thunderstorms likely before 8pm, then a chance of showers and thunderstorms between 8pm and 5am, then a chance of showers and thunderstorms. Mostly cloudy, with a low around 64. Southwest wind around 5 mph. Chance of precipitation is 70%."},{"number":6,"name":"Tuesday","startTime":"2024-07-30T06:00:00-04:00","endTime":"2024-07-30T18:00:00-04:00","isDaytime":true,"temperature":82,"temperatureUnit":"F","temperatureTrend":"","probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":90},"windSpeed":"2 to 7 mph","windDirection":"SW","icon":"https://api.weather.gov/icons/land/day/tsra_sct,60/tsra_sct,90?size=medium","shortForecast":"Showers And Thunderstorms","detailedForecast":"Showers and thunderstorms. Mostly cloudy, with a high near 82. Chance of precipitation is 90%."},{"number":7,"name":"Tuesday Night","startTime":"2024-07-30T18:00:00-04:00","endTime":"2024-07-31T06:00:00-04:00","isDaytime":false,"temperature":65,"temperatureUnit":"F","temperatureTrend":"","probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":90},"windSpeed":"6 mph","windDirection":"SW","icon":"https://api.weather.gov/icons/land/night/tsra_sct,90/tsra_sct,40?size=medium","shortForecast":"Showers And Thunderstorms","detailedForecast":"Showers and thunderstorms. Mostly cloudy, with a low around 65. Chance of precipitation is 90%."},{"number":8,"name":"Wednesday","startTime":"2024-07-31T06:00:00-04:00","endTime":"2024-07-31T18:00:00-04:00","isDaytime":true,"temperature":84,"temperatureUnit":"F","temperatureTrend":"","probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":50},"windSpeed":"3 to 7 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/day/tsra_hi,40/tsra_hi,50?size=medium","shortForecast":"Chance Showers And Thunderstorms","detailedForecast":"A chance of rain showers before 8am, then a chance of showers and thunderstorms. Mostly sunny, with a high near 84. Chance of precipitation is 50%."},{"number":9,"name":"Wednesday Night","startTime":"2024-07-31T18:00:00-04:00","endTime":"2024-08-01T06:00:00-04:00","isDaytime":false,"temperature":65,"temperatureUnit":"F","temperatureTrend":"","probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":50},"windSpeed":"2 to 6 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/night/tsra_hi,50/tsra_hi?size=medium","shortForecast":"Chance Showers And Thunderstorms","detailedForecast":"A chance of showers and thunderstorms before 2am. Mostly clear, with a low around 65. Chance of precipitation is 50%."},{"number":10,"name":"Thursday","startTime":"2024-08-01T06:00:00-04:00","endTime":"2024-08-01T18:00:00-04:00","isDaytime":true,"temperature":87,"temperatureUnit":"F","temperatureTrend":"","probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":30},"windSpeed":"2 to 6 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/day/rain_showers/tsra_hi,30?size=medium","shortForecast":"Slight Chance Rain Showers then Chance Showers And Thunderstorms","detailedForecast":"A slight chance of rain showers between 8am and 2pm, then a chance of showers and thunderstorms. Mostly sunny, with a high near 87. Chance of precipitation is 30%."},{"number":11,"name":"Thursday Night","startTime":"2024-08-01T18:00:00-04:00","endTime":"2024-08-02T06:00:00-04:00","isDaytime":false,"temperature":66,"temperatureUnit":"F","temperatureTrend":"","probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":30},"windSpeed":"5 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/night/tsra_hi,30/tsra_hi?size=medium","shortForecast":"Chance Showers And Thunderstorms","detailedForecast":"A chance of showers and thunderstorms before 2am. Partly cloudy, with a low around 66. Chance of precipitation is 30%."},{"number":12,"name":"Friday","startTime":"2024-08-02T06:00:00-04:00","endTime":"2024-08-02T18:00:00-04:00","isDaytime":true,"temperature":87,"temperatureUnit":"F","temperatureTrend":"","probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":40},"windSpeed":"2 to 6 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/day/tsra_hi/tsra_hi,40?size=medium","shortForecast":"Chance Showers And Thunderstorms","detailedForecast":"A chance of showers and thunderstorms after 8am. Mostly sunny, with a high near 87. Chance of precipitation is 40%."},{"number":13,"name":"Friday Night","startTime":"2024-08-02T18:00:00-04:00","endTime":"2024-08-03T06:00:00-04:00","isDaytime":false,"temperature":65,"temperatureUnit":"F","temperatureTrend":"","probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":40},"windSpeed":"5 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/night/tsra_hi,40/tsra_hi,30?size=medium","shortForecast":"Chance Showers And Thunderstorms","detailedForecast":"A chance of showers and thunderstorms before 2am. Partly cloudy, with a low around 65. Chance of precipitation is 40%."},{"number":14,"name":"Saturday","startTime":"2024-08-03T06:00:00-04:00","endTime":"2024-08-03T18:00:00-04:00","isDaytime":true,"temperature":86,"temperatureUnit":"F","temperatureTrend":"","probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":50},"windSpeed":"2 to 7 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/day/rain_showers,30/tsra_hi,50?size=medium","shortForecast":"Chance Rain Showers then Chance Showers And Thunderstorms","detailedForecast":"A chance of rain showers between 8am and 2pm, then a chance of showers and thunderstorms. Mostly sunny, with a high near 86. Chance of precipitation is 50%."}]}
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

---
### THIS FILE IS AUTO-GENERATED - DO NOT EDIT ###
layout: page
title: Enchanted Rock, Texas Climbing Weather - Current, Past, and Forecasted
title_override: Enchanted Rock<br /><small>Climbing Weather</small>
description: A lightweight weather report for Enchanted Rock, Texas. Optimized for slow internet connections.
js_includes:
  - weather.js
---

<section class="measure center lh-copy f5-ns f6 ph2 mv4" style="text-align: justify;">
<strong>"Is it dry?"</strong>, an oft-repeated, age-old question. Here are real-time,
precipitation-focused reports of current, past, and forecasted climbing weather for Enchanted Rock, Texas.
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
<section id="weather" data-crag="enchanted-rock-texas" class="mv4-ns mv3 ph2 center"></section>
<section id="nearby" class="tc lh-copy">
  <h3>Nearby Crags</h3>
<a class="nowrap no-underline fancy-link relative light-red mh3" href="/crags/the-greenbelt-texas-weather.html">The Greenbelt</a>
<a class="nowrap no-underline fancy-link relative light-red mh3" href="/crags/continental-ranch-texas-weather.html">Continental Ranch</a>
<a class="nowrap no-underline fancy-link relative light-red mh3" href="/crags/pace-bend-park-texas-weather.html">Pace Bend Park</a>
<a class="nowrap no-underline fancy-link relative light-red mh3" href="/crags/reimers-ranch-texas-weather.html">Reimer's Ranch</a>
<a class="nowrap no-underline fancy-link relative light-red mh3" href="/crags/cochise-stronghold-arizona-weather.html">Cochise Stronghold</a>
<a class="nowrap no-underline fancy-link relative light-red mh3" href="/crags/horseshoe-canyon-ranch-arkansas-weather.html">Horseshoe Canyon Ranch</a>
<a class="nowrap no-underline fancy-link relative light-red mh3" href="/crags/last-chance-canyon-new-mexico-weather.html">Last Chance Canyon</a>
<a class="nowrap no-underline fancy-link relative light-red mh3" href="/crags/georgetown-texas-weather.html">Georgetown</a>
<a class="nowrap no-underline fancy-link relative light-red mh3" href="/crags/mckinney-falls-texas-weather.html">McKinney Falls</a>
<a class="nowrap no-underline fancy-link relative light-red mh3" href="/crags/hueco-tanks-texas-weather.html">Hueco Tanks</a>
</section>
<section id="nearby" class="tc lh-copy">
  <h3>Other Metros</h3>
  <select class="ma1 bg-near-white pa2" id="stateSel">
    <option value="Texas" selected>Texas</option>
    <option value="Washington">Washington</option>
    <option value="Colorado">Colorado</option>
    <option value="Tennessee">Tennessee</option>
    <option value="Utah">Utah</option>
    <option value="California">California</option>
  </select>
  <select class="ma1 bg-near-white pa2" id="citySel">
    <option value="Austin" selected>Austin</option>
  </select>
  <a id="selectMetro" class="f6 link dim ph3 pv2 ma1 dib white bg-light-red" href="/crags/austin-texas-weather.html">Select Metro</a>
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
  var weekly_EWX_114_101 = {"updated":"2023-09-29T07:26:41+00:00","units":"us","forecastGenerator":"BaselineForecastGenerator","generatedAt":"2023-09-29T08:31:39+00:00","updateTime":"2023-09-29T07:26:41+00:00","validTimes":"2023-09-29T01:00:00+00:00/P8D","elevation":{"unitCode":"wmoUnit:m","value":537.972},"periods":[{"number":1,"name":"Overnight","startTime":"2023-09-29T03:00:00-05:00","endTime":"2023-09-29T06:00:00-05:00","isDaytime":false,"temperature":70,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":19.444444444444443},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":81},"windSpeed":"15 mph","windDirection":"SSW","icon":"https://api.weather.gov/icons/land/night/few?size=medium","shortForecast":"Mostly Clear","detailedForecast":"Mostly clear, with a low around 70. South southwest wind around 15 mph, with gusts as high as 20 mph."},{"number":2,"name":"Friday","startTime":"2023-09-29T06:00:00-05:00","endTime":"2023-09-29T18:00:00-05:00","isDaytime":true,"temperature":92,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":18.88888888888889},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":87},"windSpeed":"10 to 15 mph","windDirection":"SSE","icon":"https://api.weather.gov/icons/land/day/few?size=medium","shortForecast":"Sunny","detailedForecast":"Sunny, with a high near 92. South southeast wind 10 to 15 mph, with gusts as high as 20 mph."},{"number":3,"name":"Friday Night","startTime":"2023-09-29T18:00:00-05:00","endTime":"2023-09-30T06:00:00-05:00","isDaytime":false,"temperature":70,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":20},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":87},"windSpeed":"10 to 15 mph","windDirection":"SSE","icon":"https://api.weather.gov/icons/land/night/few?size=medium","shortForecast":"Mostly Clear","detailedForecast":"Mostly clear, with a low around 70. South southeast wind 10 to 15 mph, with gusts as high as 20 mph."},{"number":4,"name":"Saturday","startTime":"2023-09-30T06:00:00-05:00","endTime":"2023-09-30T18:00:00-05:00","isDaytime":true,"temperature":90,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":30},"dewpoint":{"unitCode":"wmoUnit:degC","value":20},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":93},"windSpeed":"5 to 15 mph","windDirection":"SE","icon":"https://api.weather.gov/icons/land/day/sct/rain_showers,30?size=medium","shortForecast":"Mostly Sunny then Chance Rain Showers","detailedForecast":"A chance of rain showers after 1pm. Mostly sunny, with a high near 90. Southeast wind 5 to 15 mph, with gusts as high as 25 mph. Chance of precipitation is 30%."},{"number":5,"name":"Saturday Night","startTime":"2023-09-30T18:00:00-05:00","endTime":"2023-10-01T06:00:00-05:00","isDaytime":false,"temperature":70,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":30},"dewpoint":{"unitCode":"wmoUnit:degC","value":19.444444444444443},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":88},"windSpeed":"10 to 15 mph","windDirection":"SE","icon":"https://api.weather.gov/icons/land/night/rain_showers,30/sct?size=medium","shortForecast":"Chance Rain Showers then Partly Cloudy","detailedForecast":"A chance of rain showers before 7pm. Partly cloudy, with a low around 70. Southeast wind 10 to 15 mph, with gusts as high as 25 mph. Chance of precipitation is 30%."},{"number":6,"name":"Sunday","startTime":"2023-10-01T06:00:00-05:00","endTime":"2023-10-01T18:00:00-05:00","isDaytime":true,"temperature":89,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":30},"dewpoint":{"unitCode":"wmoUnit:degC","value":19.444444444444443},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":87},"windSpeed":"5 to 15 mph","windDirection":"SE","icon":"https://api.weather.gov/icons/land/day/rain_showers,30?size=medium","shortForecast":"Chance Rain Showers","detailedForecast":"A chance of rain showers after 7am. Partly sunny, with a high near 89. Southeast wind 5 to 15 mph, with gusts as high as 20 mph. Chance of precipitation is 30%."},{"number":7,"name":"Sunday Night","startTime":"2023-10-01T18:00:00-05:00","endTime":"2023-10-02T06:00:00-05:00","isDaytime":false,"temperature":69,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":30},"dewpoint":{"unitCode":"wmoUnit:degC","value":18.333333333333332},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":83},"windSpeed":"10 to 15 mph","windDirection":"SSE","icon":"https://api.weather.gov/icons/land/night/rain_showers,30/sct?size=medium","shortForecast":"Chance Rain Showers then Partly Cloudy","detailedForecast":"A chance of rain showers before 7pm. Partly cloudy, with a low around 69. South southeast wind 10 to 15 mph, with gusts as high as 25 mph. Chance of precipitation is 30%."},{"number":8,"name":"Monday","startTime":"2023-10-02T06:00:00-05:00","endTime":"2023-10-02T18:00:00-05:00","isDaytime":true,"temperature":89,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":40},"dewpoint":{"unitCode":"wmoUnit:degC","value":18.333333333333332},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":86},"windSpeed":"10 to 15 mph","windDirection":"SE","icon":"https://api.weather.gov/icons/land/day/rain_showers,30/tsra_hi,40?size=medium","shortForecast":"Chance Rain Showers","detailedForecast":"A chance of rain showers between 7am and 1pm, then a chance of showers and thunderstorms. Mostly sunny, with a high near 89. Southeast wind 10 to 15 mph, with gusts as high as 25 mph. Chance of precipitation is 40%."},{"number":9,"name":"Monday Night","startTime":"2023-10-02T18:00:00-05:00","endTime":"2023-10-03T06:00:00-05:00","isDaytime":false,"temperature":70,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":40},"dewpoint":{"unitCode":"wmoUnit:degC","value":18.333333333333332},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":83},"windSpeed":"10 to 15 mph","windDirection":"SSE","icon":"https://api.weather.gov/icons/land/night/tsra_hi,40/tsra_hi,20?size=medium","shortForecast":"Chance Showers And Thunderstorms","detailedForecast":"A chance of showers and thunderstorms. Partly cloudy, with a low around 70. South southeast wind 10 to 15 mph, with gusts as high as 25 mph. Chance of precipitation is 40%."},{"number":10,"name":"Tuesday","startTime":"2023-10-03T06:00:00-05:00","endTime":"2023-10-03T18:00:00-05:00","isDaytime":true,"temperature":88,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":40},"dewpoint":{"unitCode":"wmoUnit:degC","value":19.444444444444443},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":87},"windSpeed":"10 to 15 mph","windDirection":"SSE","icon":"https://api.weather.gov/icons/land/day/rain_showers,40/tsra_hi,40?size=medium","shortForecast":"Chance Rain Showers","detailedForecast":"A chance of rain showers before 1pm, then a chance of showers and thunderstorms. Partly sunny, with a high near 88. Chance of precipitation is 40%."},{"number":11,"name":"Tuesday Night","startTime":"2023-10-03T18:00:00-05:00","endTime":"2023-10-04T06:00:00-05:00","isDaytime":false,"temperature":71,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":40},"dewpoint":{"unitCode":"wmoUnit:degC","value":20},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":86},"windSpeed":"15 mph","windDirection":"SSE","icon":"https://api.weather.gov/icons/land/night/tsra_hi,40/tsra_hi,30?size=medium","shortForecast":"Chance Showers And Thunderstorms then Slight Chance Showers And Thunderstorms","detailedForecast":"A chance of showers and thunderstorms before 7pm, then a slight chance of showers and thunderstorms between 7pm and 1am, then a chance of showers and thunderstorms. Mostly cloudy, with a low around 71. Chance of precipitation is 40%."},{"number":12,"name":"Wednesday","startTime":"2023-10-04T06:00:00-05:00","endTime":"2023-10-04T18:00:00-05:00","isDaytime":true,"temperature":88,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":50},"dewpoint":{"unitCode":"wmoUnit:degC","value":21.11111111111111},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":91},"windSpeed":"10 to 15 mph","windDirection":"SSE","icon":"https://api.weather.gov/icons/land/day/tsra_hi,40/tsra_hi,50?size=medium","shortForecast":"Chance Showers And Thunderstorms","detailedForecast":"A chance of showers and thunderstorms. Partly sunny, with a high near 88. Chance of precipitation is 50%."},{"number":13,"name":"Wednesday Night","startTime":"2023-10-04T18:00:00-05:00","endTime":"2023-10-05T06:00:00-05:00","isDaytime":false,"temperature":67,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":50},"dewpoint":{"unitCode":"wmoUnit:degC","value":18.88888888888889},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":85},"windSpeed":"15 mph","windDirection":"S","icon":"https://api.weather.gov/icons/land/night/tsra_sct,50?size=medium","shortForecast":"Chance Showers And Thunderstorms","detailedForecast":"A chance of showers and thunderstorms. Mostly cloudy, with a low around 67. Chance of precipitation is 50%."},{"number":14,"name":"Thursday","startTime":"2023-10-05T06:00:00-05:00","endTime":"2023-10-05T18:00:00-05:00","isDaytime":true,"temperature":82,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":50},"dewpoint":{"unitCode":"wmoUnit:degC","value":17.77777777777778},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":88},"windSpeed":"15 mph","windDirection":"NNE","icon":"https://api.weather.gov/icons/land/day/rain_showers,50?size=medium","shortForecast":"Chance Rain Showers","detailedForecast":"A chance of rain showers. Mostly sunny, with a high near 82. Chance of precipitation is 50%."}]}
  var hourly_EWX_114_101 = false
  var crags_config = [
  {
    "name": "Enchanted Rock",
    "note": "Granite, so the exposed areas dry fast.",
    "mountainProject": "https://www.mountainproject.com/area/105855196/enchanted-rock-state-natural-area",
    "station": "KT82",
    "office": "EWX/114,101",
    "coordinates": [
      -98.821,
      30.503
    ]
  }
]</script>

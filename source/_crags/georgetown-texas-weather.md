---
### THIS FILE IS AUTO-GENERATED - DO NOT EDIT ###
layout: page
title: Georgetown, Texas Climbing Weather - Current, Past, and Forecasted
title_override: Georgetown<br /><small>Climbing Weather</small>
description: A lightweight weather report for Georgetown, Texas. Optimized for slow internet connections.
js_includes:
  - weather.js
---

<section class="measure center lh-copy f5-ns f6 ph2 mv4" style="text-align: justify;">
<strong>"Is it dry?"</strong>, an oft-repeated, age-old question. Here are real-time,
precipitation-focused reports of current, past, and forecasted climbing weather for Georgetown, Texas.
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
<section id="weather" data-crag="georgetown-texas" class="mv4-ns mv3 ph2 center"></section>
<section id="nearby" class="tc lh-copy">
  <h3>Nearby Crags</h3>
<a class="nowrap no-underline fancy-link relative light-red mh3" href="/crags/the-greenbelt-texas-weather.html">The Greenbelt</a>
<a class="nowrap no-underline fancy-link relative light-red mh3" href="/crags/continental-ranch-texas-weather.html">Continental Ranch</a>
<a class="nowrap no-underline fancy-link relative light-red mh3" href="/crags/pace-bend-park-texas-weather.html">Pace Bend Park</a>
<a class="nowrap no-underline fancy-link relative light-red mh3" href="/crags/reimers-ranch-texas-weather.html">Reimer's Ranch</a>
<a class="nowrap no-underline fancy-link relative light-red mh3" href="/crags/cochise-stronghold-arizona-weather.html">Cochise Stronghold</a>
<a class="nowrap no-underline fancy-link relative light-red mh3" href="/crags/enchanted-rock-texas-weather.html">Enchanted Rock</a>
<a class="nowrap no-underline fancy-link relative light-red mh3" href="/crags/horseshoe-canyon-ranch-arkansas-weather.html">Horseshoe Canyon Ranch</a>
<a class="nowrap no-underline fancy-link relative light-red mh3" href="/crags/last-chance-canyon-new-mexico-weather.html">Last Chance Canyon</a>
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
  var weekly_EWX_157_106 = {"updated":"2023-05-17T08:24:53+00:00","units":"us","forecastGenerator":"BaselineForecastGenerator","generatedAt":"2023-05-17T08:31:43+00:00","updateTime":"2023-05-17T08:24:53+00:00","validTimes":"2023-05-17T02:00:00+00:00/P7DT2H","elevation":{"unitCode":"wmoUnit:m","value":242.9256},"periods":[{"number":1,"name":"Overnight","startTime":"2023-05-17T03:00:00-05:00","endTime":"2023-05-17T06:00:00-05:00","isDaytime":false,"temperature":63,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":17.77777777777778},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":100},"windSpeed":"5 mph","windDirection":"NW","icon":"https://api.weather.gov/icons/land/night/bkn?size=medium","shortForecast":"Mostly Cloudy","detailedForecast":"Mostly cloudy, with a low around 63. Northwest wind around 5 mph."},{"number":2,"name":"Wednesday","startTime":"2023-05-17T06:00:00-05:00","endTime":"2023-05-17T18:00:00-05:00","isDaytime":true,"temperature":85,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":20},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":100},"windSpeed":"5 mph","windDirection":"NNE","icon":"https://api.weather.gov/icons/land/day/sct?size=medium","shortForecast":"Mostly Sunny","detailedForecast":"Mostly sunny, with a high near 85. North northeast wind around 5 mph."},{"number":3,"name":"Wednesday Night","startTime":"2023-05-17T18:00:00-05:00","endTime":"2023-05-18T06:00:00-05:00","isDaytime":false,"temperature":63,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":18.88888888888889},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":97},"windSpeed":"5 mph","windDirection":"ESE","icon":"https://api.weather.gov/icons/land/night/few?size=medium","shortForecast":"Mostly Clear","detailedForecast":"Mostly clear, with a low around 63. East southeast wind around 5 mph."},{"number":4,"name":"Thursday","startTime":"2023-05-18T06:00:00-05:00","endTime":"2023-05-18T18:00:00-05:00","isDaytime":true,"temperature":88,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":20},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":100},"windSpeed":"5 to 10 mph","windDirection":"SSE","icon":"https://api.weather.gov/icons/land/day/few?size=medium","shortForecast":"Sunny","detailedForecast":"Sunny, with a high near 88. South southeast wind 5 to 10 mph."},{"number":5,"name":"Thursday Night","startTime":"2023-05-18T18:00:00-05:00","endTime":"2023-05-19T06:00:00-05:00","isDaytime":false,"temperature":68,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":18.88888888888889},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":86},"windSpeed":"5 to 10 mph","windDirection":"SSE","icon":"https://api.weather.gov/icons/land/night/sct?size=medium","shortForecast":"Partly Cloudy","detailedForecast":"Partly cloudy, with a low around 68. South southeast wind 5 to 10 mph."},{"number":6,"name":"Friday","startTime":"2023-05-19T06:00:00-05:00","endTime":"2023-05-19T18:00:00-05:00","isDaytime":true,"temperature":91,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":20},"dewpoint":{"unitCode":"wmoUnit:degC","value":20},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":88},"windSpeed":"5 to 10 mph","windDirection":"S","icon":"https://api.weather.gov/icons/land/day/sct/tsra_hi,20?size=medium","shortForecast":"Mostly Sunny then Slight Chance Showers And Thunderstorms","detailedForecast":"A slight chance of showers and thunderstorms after 1pm. Some of the storms could be severe. Mostly sunny, with a high near 91. South wind 5 to 10 mph. Chance of precipitation is 20%."},{"number":7,"name":"Friday Night","startTime":"2023-05-19T18:00:00-05:00","endTime":"2023-05-20T06:00:00-05:00","isDaytime":false,"temperature":67,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":40},"dewpoint":{"unitCode":"wmoUnit:degC","value":20},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":93},"windSpeed":"10 mph","windDirection":"WSW","icon":"https://api.weather.gov/icons/land/night/tsra_hi,40?size=medium","shortForecast":"Chance Showers And Thunderstorms","detailedForecast":"A chance of showers and thunderstorms. Some of the storms could be severe. Mostly cloudy, with a low around 67. West southwest wind around 10 mph. Chance of precipitation is 40%."},{"number":8,"name":"Saturday","startTime":"2023-05-20T06:00:00-05:00","endTime":"2023-05-20T18:00:00-05:00","isDaytime":true,"temperature":82,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":40},"dewpoint":{"unitCode":"wmoUnit:degC","value":20},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":93},"windSpeed":"10 to 15 mph","windDirection":"N","icon":"https://api.weather.gov/icons/land/day/tsra_sct,40/tsra_sct,20?size=medium","shortForecast":"Chance Showers And Thunderstorms","detailedForecast":"A chance of showers and thunderstorms before 1pm. Partly sunny, with a high near 82. North wind 10 to 15 mph, with gusts as high as 20 mph. Chance of precipitation is 40%."},{"number":9,"name":"Saturday Night","startTime":"2023-05-20T18:00:00-05:00","endTime":"2023-05-21T06:00:00-05:00","isDaytime":false,"temperature":65,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":19.444444444444443},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":85},"windSpeed":"5 to 10 mph","windDirection":"NNE","icon":"https://api.weather.gov/icons/land/night/bkn?size=medium","shortForecast":"Mostly Cloudy","detailedForecast":"Mostly cloudy, with a low around 65. North northeast wind 5 to 10 mph."},{"number":10,"name":"Sunday","startTime":"2023-05-21T06:00:00-05:00","endTime":"2023-05-21T18:00:00-05:00","isDaytime":true,"temperature":81,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":20},"dewpoint":{"unitCode":"wmoUnit:degC","value":17.77777777777778},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":86},"windSpeed":"5 mph","windDirection":"NE","icon":"https://api.weather.gov/icons/land/day/bkn/tsra_sct,20?size=medium","shortForecast":"Mostly Cloudy then Slight Chance Showers And Thunderstorms","detailedForecast":"A slight chance of showers and thunderstorms after 1pm. Mostly cloudy, with a high near 81. Chance of precipitation is 20%."},{"number":11,"name":"Sunday Night","startTime":"2023-05-21T18:00:00-05:00","endTime":"2023-05-22T06:00:00-05:00","isDaytime":false,"temperature":64,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":20},"dewpoint":{"unitCode":"wmoUnit:degC","value":17.22222222222222},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":89},"windSpeed":"5 mph","windDirection":"ENE","icon":"https://api.weather.gov/icons/land/night/tsra_sct,20/bkn?size=medium","shortForecast":"Slight Chance Showers And Thunderstorms then Mostly Cloudy","detailedForecast":"A slight chance of showers and thunderstorms before 7pm. Mostly cloudy, with a low around 64. Chance of precipitation is 20%."},{"number":12,"name":"Monday","startTime":"2023-05-22T06:00:00-05:00","endTime":"2023-05-22T18:00:00-05:00","isDaytime":true,"temperature":84,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":20},"dewpoint":{"unitCode":"wmoUnit:degC","value":18.88888888888889},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":92},"windSpeed":"5 to 10 mph","windDirection":"E","icon":"https://api.weather.gov/icons/land/day/tsra_hi,20?size=medium","shortForecast":"Slight Chance Showers And Thunderstorms","detailedForecast":"A slight chance of showers and thunderstorms after 7am. Partly sunny, with a high near 84. Chance of precipitation is 20%."},{"number":13,"name":"Monday Night","startTime":"2023-05-22T18:00:00-05:00","endTime":"2023-05-23T06:00:00-05:00","isDaytime":false,"temperature":65,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":20},"dewpoint":{"unitCode":"wmoUnit:degC","value":18.88888888888889},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":91},"windSpeed":"5 to 10 mph","windDirection":"ESE","icon":"https://api.weather.gov/icons/land/night/tsra_hi,20/sct?size=medium","shortForecast":"Slight Chance Showers And Thunderstorms then Partly Cloudy","detailedForecast":"A slight chance of showers and thunderstorms before 7pm. Partly cloudy, with a low around 65. Chance of precipitation is 20%."},{"number":14,"name":"Tuesday","startTime":"2023-05-23T06:00:00-05:00","endTime":"2023-05-23T18:00:00-05:00","isDaytime":true,"temperature":86,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":20},"dewpoint":{"unitCode":"wmoUnit:degC","value":19.444444444444443},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":93},"windSpeed":"5 to 10 mph","windDirection":"SE","icon":"https://api.weather.gov/icons/land/day/tsra_hi,20?size=medium","shortForecast":"Slight Chance Showers And Thunderstorms","detailedForecast":"A slight chance of showers and thunderstorms after 7am. Partly sunny, with a high near 86. Chance of precipitation is 20%."}]}
  var hourly_EWX_157_106 = false
  var crags_config = [
  {
    "name": "Georgetown",
    "note": "Porous limestone that can take a couple days to dry out.",
    "mountainProject": "https://www.mountainproject.com/area/106715082/georgetown-hospital",
    "station": "KGTU",
    "office": "EWX/157,106",
    "coordinates": [
      -97.69,
      30.627
    ]
  }
]</script>

---
### THIS FILE IS AUTO-GENERATED - DO NOT EDIT ###
layout: page
title: Reimer's Ranch, Texas Climbing Weather - Current, Past, and Forecasted
title_override: Reimer's Ranch<br /><small>Climbing Weather</small>
description: A lightweight weather report for Reimer's Ranch, Texas. Optimized for slow internet connections.
js_includes:
  - weather.js
---

<section class="measure center lh-copy f5-ns f6 ph2 mv4" style="text-align: justify;">
<strong>"Is it dry?"</strong>, an oft-repeated, age-old question. Here are real-time,
precipitation-focused reports of current, past, and forecasted climbing weather for Reimer's Ranch, Texas.
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
<section id="weather" data-crag="reimers-ranch-texas" class="mv4-ns mv3 ph2 center"></section>
<section id="nearby" class="tc lh-copy">
  <h3>Nearby Crags</h3>
<a class="nowrap no-underline fancy-link relative light-red mh3" href="/crags/the-greenbelt-texas-weather.html">The Greenbelt</a>
<a class="nowrap no-underline fancy-link relative light-red mh3" href="/crags/continental-ranch-texas-weather.html">Continental Ranch</a>
<a class="nowrap no-underline fancy-link relative light-red mh3" href="/crags/pace-bend-park-texas-weather.html">Pace Bend Park</a>
<a class="nowrap no-underline fancy-link relative light-red mh3" href="/crags/cochise-stronghold-arizona-weather.html">Cochise Stronghold</a>
<a class="nowrap no-underline fancy-link relative light-red mh3" href="/crags/enchanted-rock-texas-weather.html">Enchanted Rock</a>
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
  var weekly_EWX_141_93 = {"updated":"2024-04-18T07:54:55+00:00","units":"us","forecastGenerator":"BaselineForecastGenerator","generatedAt":"2024-04-18T08:31:41+00:00","updateTime":"2024-04-18T07:54:55+00:00","validTimes":"2024-04-18T01:00:00+00:00/P8D","elevation":{"unitCode":"wmoUnit:m","value":324.0024},"periods":[{"number":1,"name":"Overnight","startTime":"2024-04-18T03:00:00-05:00","endTime":"2024-04-18T06:00:00-05:00","isDaytime":false,"temperature":70,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":21.11111111111111},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":100},"windSpeed":"10 mph","windDirection":"S","icon":"https://api.weather.gov/icons/land/night/rain?size=medium","shortForecast":"Slight Chance Drizzle","detailedForecast":"A slight chance of drizzle after 4am. Mostly cloudy, with a low around 70. South wind around 10 mph."},{"number":2,"name":"Thursday","startTime":"2024-04-18T06:00:00-05:00","endTime":"2024-04-18T18:00:00-05:00","isDaytime":true,"temperature":87,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":22.22222222222222},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":100},"windSpeed":"10 mph","windDirection":"S","icon":"https://api.weather.gov/icons/land/day/rain/bkn?size=medium","shortForecast":"Slight Chance Drizzle then Partly Sunny","detailedForecast":"A slight chance of drizzle before 8am, then patchy fog and a slight chance of drizzle between 8am and 10am. Partly sunny, with a high near 87. South wind around 10 mph. New rainfall amounts less than a tenth of an inch possible."},{"number":3,"name":"Thursday Night","startTime":"2024-04-18T18:00:00-05:00","endTime":"2024-04-19T06:00:00-05:00","isDaytime":false,"temperature":64,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":30},"dewpoint":{"unitCode":"wmoUnit:degC","value":21.11111111111111},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":100},"windSpeed":"5 to 15 mph","windDirection":"ESE","icon":"https://api.weather.gov/icons/land/night/tsra_hi,30?size=medium","shortForecast":"Chance Showers And Thunderstorms","detailedForecast":"A chance of showers and thunderstorms between 7pm and 10pm, then a chance of showers and thunderstorms between 10pm and 1am. Mostly cloudy, with a low around 64. East southeast wind 5 to 15 mph, with gusts as high as 20 mph. Chance of precipitation is 30%. New rainfall amounts between a half and three quarters of an inch possible."},{"number":4,"name":"Friday","startTime":"2024-04-19T06:00:00-05:00","endTime":"2024-04-19T18:00:00-05:00","isDaytime":true,"temperature":79,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":18.333333333333332},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":97},"windSpeed":"5 to 10 mph","windDirection":"ENE","icon":"https://api.weather.gov/icons/land/day/fog/bkn?size=medium","shortForecast":"Patchy Fog then Partly Sunny","detailedForecast":"Patchy fog between 8am and 10am. Partly sunny, with a high near 79. East northeast wind 5 to 10 mph."},{"number":5,"name":"Friday Night","startTime":"2024-04-19T18:00:00-05:00","endTime":"2024-04-20T06:00:00-05:00","isDaytime":false,"temperature":66,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":30},"dewpoint":{"unitCode":"wmoUnit:degC","value":18.88888888888889},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":97},"windSpeed":"5 to 10 mph","windDirection":"ESE","icon":"https://api.weather.gov/icons/land/night/tsra,30?size=medium","shortForecast":"Chance Showers And Thunderstorms","detailedForecast":"A chance of showers and thunderstorms between 7pm and 1am. Mostly cloudy, with a low around 66. East southeast wind 5 to 10 mph. Chance of precipitation is 30%."},{"number":6,"name":"Saturday","startTime":"2024-04-20T06:00:00-05:00","endTime":"2024-04-20T18:00:00-05:00","isDaytime":true,"temperature":77,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":70},"dewpoint":{"unitCode":"wmoUnit:degC","value":18.88888888888889},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":96},"windSpeed":"5 to 15 mph","windDirection":"E","icon":"https://api.weather.gov/icons/land/day/tsra,20/tsra,70?size=medium","shortForecast":"Slight Chance Showers And Thunderstorms","detailedForecast":"A slight chance of showers and thunderstorms between 7am and 1pm, then showers and thunderstorms likely. Mostly cloudy, with a high near 77. East wind 5 to 15 mph, with gusts as high as 20 mph. Chance of precipitation is 70%."},{"number":7,"name":"Saturday Night","startTime":"2024-04-20T18:00:00-05:00","endTime":"2024-04-21T06:00:00-05:00","isDaytime":false,"temperature":54,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":90},"dewpoint":{"unitCode":"wmoUnit:degC","value":18.333333333333332},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":100},"windSpeed":"15 mph","windDirection":"NNE","icon":"https://api.weather.gov/icons/land/night/tsra,90?size=medium","shortForecast":"Showers And Thunderstorms","detailedForecast":"Showers and thunderstorms before 1am, then showers and thunderstorms likely between 1am and 4am, then showers and thunderstorms likely. Some of the storms could produce heavy rain. Cloudy, with a low around 54. North northeast wind around 15 mph, with gusts as high as 25 mph. Chance of precipitation is 90%."},{"number":8,"name":"Sunday","startTime":"2024-04-21T06:00:00-05:00","endTime":"2024-04-21T18:00:00-05:00","isDaytime":true,"temperature":65,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":60},"dewpoint":{"unitCode":"wmoUnit:degC","value":12.777777777777779},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":100},"windSpeed":"15 mph","windDirection":"N","icon":"https://api.weather.gov/icons/land/day/tsra,60/bkn?size=medium","shortForecast":"Showers And Thunderstorms Likely then Mostly Cloudy","detailedForecast":"Showers and thunderstorms likely before 7am. Mostly cloudy, with a high near 65. North wind around 15 mph, with gusts as high as 25 mph. Chance of precipitation is 60%."},{"number":9,"name":"Sunday Night","startTime":"2024-04-21T18:00:00-05:00","endTime":"2024-04-22T06:00:00-05:00","isDaytime":false,"temperature":52,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":11.666666666666666},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":96},"windSpeed":"5 to 15 mph","windDirection":"NE","icon":"https://api.weather.gov/icons/land/night/bkn?size=medium","shortForecast":"Mostly Cloudy","detailedForecast":"Mostly cloudy, with a low around 52. Northeast wind 5 to 15 mph, with gusts as high as 25 mph."},{"number":10,"name":"Monday","startTime":"2024-04-22T06:00:00-05:00","endTime":"2024-04-22T18:00:00-05:00","isDaytime":true,"temperature":73,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":13.88888888888889},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":99},"windSpeed":"5 to 10 mph","windDirection":"ESE","icon":"https://api.weather.gov/icons/land/day/bkn?size=medium","shortForecast":"Partly Sunny","detailedForecast":"Partly sunny, with a high near 73."},{"number":11,"name":"Monday Night","startTime":"2024-04-22T18:00:00-05:00","endTime":"2024-04-23T06:00:00-05:00","isDaytime":false,"temperature":59,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":15.555555555555555},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":100},"windSpeed":"10 mph","windDirection":"SSE","icon":"https://api.weather.gov/icons/land/night/bkn?size=medium","shortForecast":"Mostly Cloudy","detailedForecast":"Mostly cloudy, with a low around 59."},{"number":12,"name":"Tuesday","startTime":"2024-04-23T06:00:00-05:00","endTime":"2024-04-23T18:00:00-05:00","isDaytime":true,"temperature":79,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":18.333333333333332},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":100},"windSpeed":"10 to 15 mph","windDirection":"SSE","icon":"https://api.weather.gov/icons/land/day/bkn?size=medium","shortForecast":"Partly Sunny","detailedForecast":"Partly sunny, with a high near 79."},{"number":13,"name":"Tuesday Night","startTime":"2024-04-23T18:00:00-05:00","endTime":"2024-04-24T06:00:00-05:00","isDaytime":false,"temperature":65,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":18.88888888888889},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":100},"windSpeed":"10 to 15 mph","windDirection":"SSE","icon":"https://api.weather.gov/icons/land/night/bkn?size=medium","shortForecast":"Mostly Cloudy","detailedForecast":"Mostly cloudy, with a low around 65."},{"number":14,"name":"Wednesday","startTime":"2024-04-24T06:00:00-05:00","endTime":"2024-04-24T18:00:00-05:00","isDaytime":true,"temperature":82,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":20},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":100},"windSpeed":"10 to 15 mph","windDirection":"SE","icon":"https://api.weather.gov/icons/land/day/bkn?size=medium","shortForecast":"Mostly Cloudy","detailedForecast":"Mostly cloudy, with a high near 82."}]}
  var hourly_EWX_141_93 = false
  var crags_config = [
  {
    "name": "Reimer's Ranch",
    "note": "Porous limestone that can take a couple days to dry out.",
    "mountainProject": "https://www.mountainproject.com/area/105837312/reimers-ranch",
    "station": "KRYW",
    "office": "EWX/141,93",
    "coordinates": [
      -98.122,
      30.334
    ]
  }
]</script>

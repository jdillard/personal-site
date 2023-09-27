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
  var weekly_EWX_141_93 = {"updated":"2023-09-27T07:42:27+00:00","units":"us","forecastGenerator":"BaselineForecastGenerator","generatedAt":"2023-09-27T08:32:05+00:00","updateTime":"2023-09-27T07:42:27+00:00","validTimes":"2023-09-27T01:00:00+00:00/P8D","elevation":{"unitCode":"wmoUnit:m","value":324.0024},"periods":[{"number":1,"name":"Overnight","startTime":"2023-09-27T03:00:00-05:00","endTime":"2023-09-27T06:00:00-05:00","isDaytime":false,"temperature":69,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":19.444444444444443},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":84},"windSpeed":"5 mph","windDirection":"SSW","icon":"https://api.weather.gov/icons/land/night/few?size=medium","shortForecast":"Mostly Clear","detailedForecast":"Mostly clear, with a low around 69. South southwest wind around 5 mph."},{"number":2,"name":"Wednesday","startTime":"2023-09-27T06:00:00-05:00","endTime":"2023-09-27T18:00:00-05:00","isDaytime":true,"temperature":95,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":20.555555555555557},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":93},"windSpeed":"0 to 10 mph","windDirection":"WNW","icon":"https://api.weather.gov/icons/land/day/sct/tsra_hi?size=medium","shortForecast":"Mostly Sunny then Slight Chance Showers And Thunderstorms","detailedForecast":"A slight chance of rain showers between 1pm and 4pm, then a slight chance of showers and thunderstorms. Mostly sunny, with a high near 95. West northwest wind 0 to 10 mph."},{"number":3,"name":"Wednesday Night","startTime":"2023-09-27T18:00:00-05:00","endTime":"2023-09-28T06:00:00-05:00","isDaytime":false,"temperature":69,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":19.444444444444443},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":88},"windSpeed":"5 to 10 mph","windDirection":"S","icon":"https://api.weather.gov/icons/land/night/tsra_hi/few?size=medium","shortForecast":"Slight Chance Showers And Thunderstorms then Mostly Clear","detailedForecast":"A slight chance of showers and thunderstorms before 7pm. Mostly clear, with a low around 69. South wind 5 to 10 mph."},{"number":4,"name":"Thursday","startTime":"2023-09-28T06:00:00-05:00","endTime":"2023-09-28T18:00:00-05:00","isDaytime":true,"temperature":95,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":20},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":97},"windSpeed":"5 to 10 mph","windDirection":"S","icon":"https://api.weather.gov/icons/land/day/few?size=medium","shortForecast":"Sunny","detailedForecast":"Sunny, with a high near 95. South wind 5 to 10 mph."},{"number":5,"name":"Thursday Night","startTime":"2023-09-28T18:00:00-05:00","endTime":"2023-09-29T06:00:00-05:00","isDaytime":false,"temperature":70,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":19.444444444444443},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":84},"windSpeed":"5 to 10 mph","windDirection":"SSE","icon":"https://api.weather.gov/icons/land/night/few?size=medium","shortForecast":"Mostly Clear","detailedForecast":"Mostly clear, with a low around 70. South southeast wind 5 to 10 mph."},{"number":6,"name":"Friday","startTime":"2023-09-29T06:00:00-05:00","endTime":"2023-09-29T18:00:00-05:00","isDaytime":true,"temperature":94,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":20},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":89},"windSpeed":"5 to 10 mph","windDirection":"SSE","icon":"https://api.weather.gov/icons/land/day/few?size=medium","shortForecast":"Sunny","detailedForecast":"Sunny, with a high near 94. South southeast wind 5 to 10 mph."},{"number":7,"name":"Friday Night","startTime":"2023-09-29T18:00:00-05:00","endTime":"2023-09-30T06:00:00-05:00","isDaytime":false,"temperature":70,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":20},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":91},"windSpeed":"5 to 15 mph","windDirection":"SSE","icon":"https://api.weather.gov/icons/land/night/few?size=medium","shortForecast":"Mostly Clear","detailedForecast":"Mostly clear, with a low around 70. South southeast wind 5 to 15 mph, with gusts as high as 20 mph."},{"number":8,"name":"Saturday","startTime":"2023-09-30T06:00:00-05:00","endTime":"2023-09-30T18:00:00-05:00","isDaytime":true,"temperature":93,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":21.11111111111111},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":94},"windSpeed":"5 to 15 mph","windDirection":"SE","icon":"https://api.weather.gov/icons/land/day/few?size=medium","shortForecast":"Sunny","detailedForecast":"Sunny, with a high near 93. Southeast wind 5 to 15 mph, with gusts as high as 25 mph."},{"number":9,"name":"Saturday Night","startTime":"2023-09-30T18:00:00-05:00","endTime":"2023-10-01T06:00:00-05:00","isDaytime":false,"temperature":69,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":18.88888888888889},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":86},"windSpeed":"5 to 15 mph","windDirection":"SE","icon":"https://api.weather.gov/icons/land/night/few?size=medium","shortForecast":"Mostly Clear","detailedForecast":"Mostly clear, with a low around 69. Southeast wind 5 to 15 mph, with gusts as high as 25 mph."},{"number":10,"name":"Sunday","startTime":"2023-10-01T06:00:00-05:00","endTime":"2023-10-01T18:00:00-05:00","isDaytime":true,"temperature":93,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":20},"dewpoint":{"unitCode":"wmoUnit:degC","value":19.444444444444443},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":87},"windSpeed":"5 to 15 mph","windDirection":"ESE","icon":"https://api.weather.gov/icons/land/day/sct/rain_showers,20?size=medium","shortForecast":"Mostly Sunny then Slight Chance Rain Showers","detailedForecast":"A slight chance of rain showers after 1pm. Mostly sunny, with a high near 93. Chance of precipitation is 20%."},{"number":11,"name":"Sunday Night","startTime":"2023-10-01T18:00:00-05:00","endTime":"2023-10-02T06:00:00-05:00","isDaytime":false,"temperature":68,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":20},"dewpoint":{"unitCode":"wmoUnit:degC","value":18.333333333333332},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":88},"windSpeed":"5 to 15 mph","windDirection":"SSE","icon":"https://api.weather.gov/icons/land/night/rain_showers,20/few?size=medium","shortForecast":"Slight Chance Rain Showers then Mostly Clear","detailedForecast":"A slight chance of rain showers before 7pm. Mostly clear, with a low around 68. Chance of precipitation is 20%."},{"number":12,"name":"Monday","startTime":"2023-10-02T06:00:00-05:00","endTime":"2023-10-02T18:00:00-05:00","isDaytime":true,"temperature":94,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":18.88888888888889},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":91},"windSpeed":"5 to 15 mph","windDirection":"SE","icon":"https://api.weather.gov/icons/land/day/few?size=medium","shortForecast":"Sunny","detailedForecast":"Sunny, with a high near 94."},{"number":13,"name":"Monday Night","startTime":"2023-10-02T18:00:00-05:00","endTime":"2023-10-03T06:00:00-05:00","isDaytime":false,"temperature":68,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":17.77777777777778},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":82},"windSpeed":"5 to 15 mph","windDirection":"SSE","icon":"https://api.weather.gov/icons/land/night/few?size=medium","shortForecast":"Mostly Clear","detailedForecast":"Mostly clear, with a low around 68."},{"number":14,"name":"Tuesday","startTime":"2023-10-03T06:00:00-05:00","endTime":"2023-10-03T18:00:00-05:00","isDaytime":true,"temperature":93,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":18.88888888888889},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":89},"windSpeed":"5 to 15 mph","windDirection":"SSE","icon":"https://api.weather.gov/icons/land/day/few?size=medium","shortForecast":"Sunny","detailedForecast":"Sunny, with a high near 93."}]}
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

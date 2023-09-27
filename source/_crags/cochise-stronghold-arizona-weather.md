---
### THIS FILE IS AUTO-GENERATED - DO NOT EDIT ###
layout: page
title: Cochise Stronghold, Arizona Climbing Weather - Current, Past, and Forecasted
title_override: Cochise Stronghold<br /><small>Climbing Weather</small>
description: A lightweight weather report for Cochise Stronghold, Arizona. Optimized for slow internet connections.
js_includes:
  - weather.js
---

<section class="measure center lh-copy f5-ns f6 ph2 mv4" style="text-align: justify;">
<strong>"Is it dry?"</strong>, an oft-repeated, age-old question. Here are real-time,
precipitation-focused reports of current, past, and forecasted climbing weather for Cochise Stronghold, Arizona.
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
<section id="weather" data-crag="cochise-stronghold-arizona" class="mv4-ns mv3 ph2 center"></section>
<section id="nearby" class="tc lh-copy">
  <h3>Nearby Crags</h3>
<a class="nowrap no-underline fancy-link relative light-red mh3" href="/crags/the-greenbelt-texas-weather.html">The Greenbelt</a>
<a class="nowrap no-underline fancy-link relative light-red mh3" href="/crags/continental-ranch-texas-weather.html">Continental Ranch</a>
<a class="nowrap no-underline fancy-link relative light-red mh3" href="/crags/pace-bend-park-texas-weather.html">Pace Bend Park</a>
<a class="nowrap no-underline fancy-link relative light-red mh3" href="/crags/reimers-ranch-texas-weather.html">Reimer's Ranch</a>
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
  var weekly_TWC_125_31 = {"updated":"2023-09-27T08:18:27+00:00","units":"us","forecastGenerator":"BaselineForecastGenerator","generatedAt":"2023-09-27T08:32:07+00:00","updateTime":"2023-09-27T08:18:27+00:00","validTimes":"2023-09-27T02:00:00+00:00/P7DT23H","elevation":{"unitCode":"wmoUnit:m","value":1795.8816},"periods":[{"number":1,"name":"Overnight","startTime":"2023-09-27T01:00:00-07:00","endTime":"2023-09-27T06:00:00-07:00","isDaytime":false,"temperature":62,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":2.7777777777777777},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":37},"windSpeed":"6 mph","windDirection":"NE","icon":"https://api.weather.gov/icons/land/night/skc?size=medium","shortForecast":"Clear","detailedForecast":"Clear, with a low around 62. Northeast wind around 6 mph."},{"number":2,"name":"Wednesday","startTime":"2023-09-27T06:00:00-07:00","endTime":"2023-09-27T18:00:00-07:00","isDaytime":true,"temperature":89,"temperatureUnit":"F","temperatureTrend":"falling","probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":3.888888888888889},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":36},"windSpeed":"3 to 17 mph","windDirection":"SSW","icon":"https://api.weather.gov/icons/land/day/few?size=medium","shortForecast":"Sunny","detailedForecast":"Sunny. High near 89, with temperatures falling to around 85 in the afternoon. South southwest wind 3 to 17 mph."},{"number":3,"name":"Wednesday Night","startTime":"2023-09-27T18:00:00-07:00","endTime":"2023-09-28T06:00:00-07:00","isDaytime":false,"temperature":61,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":2.2222222222222223},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":37},"windSpeed":"3 to 16 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/night/sct?size=medium","shortForecast":"Partly Cloudy","detailedForecast":"Partly cloudy, with a low around 61. West wind 3 to 16 mph."},{"number":4,"name":"Thursday","startTime":"2023-09-28T06:00:00-07:00","endTime":"2023-09-28T18:00:00-07:00","isDaytime":true,"temperature":86,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":4.444444444444445},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":37},"windSpeed":"5 to 16 mph","windDirection":"SSW","icon":"https://api.weather.gov/icons/land/day/sct?size=medium","shortForecast":"Mostly Sunny","detailedForecast":"Mostly sunny, with a high near 86. South southwest wind 5 to 16 mph."},{"number":5,"name":"Thursday Night","startTime":"2023-09-28T18:00:00-07:00","endTime":"2023-09-29T06:00:00-07:00","isDaytime":false,"temperature":59,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":6.666666666666667},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":56},"windSpeed":"6 to 15 mph","windDirection":"SSW","icon":"https://api.weather.gov/icons/land/night/few?size=medium","shortForecast":"Mostly Clear","detailedForecast":"Mostly clear, with a low around 59. South southwest wind 6 to 15 mph."},{"number":6,"name":"Friday","startTime":"2023-09-29T06:00:00-07:00","endTime":"2023-09-29T18:00:00-07:00","isDaytime":true,"temperature":84,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":7.777777777777778},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":55},"windSpeed":"8 to 20 mph","windDirection":"SSW","icon":"https://api.weather.gov/icons/land/day/few?size=medium","shortForecast":"Sunny","detailedForecast":"Sunny, with a high near 84."},{"number":7,"name":"Friday Night","startTime":"2023-09-29T18:00:00-07:00","endTime":"2023-09-30T06:00:00-07:00","isDaytime":false,"temperature":58,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":4.444444444444445},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":51},"windSpeed":"9 to 16 mph","windDirection":"SSW","icon":"https://api.weather.gov/icons/land/night/few?size=medium","shortForecast":"Mostly Clear","detailedForecast":"Mostly clear, with a low around 58."},{"number":8,"name":"Saturday","startTime":"2023-09-30T06:00:00-07:00","endTime":"2023-09-30T18:00:00-07:00","isDaytime":true,"temperature":81,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":5},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":49},"windSpeed":"12 to 24 mph","windDirection":"S","icon":"https://api.weather.gov/icons/land/day/wind_few?size=medium","shortForecast":"Sunny","detailedForecast":"Sunny, with a high near 81."},{"number":9,"name":"Saturday Night","startTime":"2023-09-30T18:00:00-07:00","endTime":"2023-10-01T06:00:00-07:00","isDaytime":false,"temperature":57,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":2.2222222222222223},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":45},"windSpeed":"13 to 21 mph","windDirection":"SSW","icon":"https://api.weather.gov/icons/land/night/wind_few?size=medium","shortForecast":"Mostly Clear","detailedForecast":"Mostly clear, with a low around 57."},{"number":10,"name":"Sunday","startTime":"2023-10-01T06:00:00-07:00","endTime":"2023-10-01T18:00:00-07:00","isDaytime":true,"temperature":78,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":3.888888888888889},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":45},"windSpeed":"14 to 25 mph","windDirection":"SSW","icon":"https://api.weather.gov/icons/land/day/wind_few?size=medium","shortForecast":"Sunny","detailedForecast":"Sunny, with a high near 78."},{"number":11,"name":"Sunday Night","startTime":"2023-10-01T18:00:00-07:00","endTime":"2023-10-02T06:00:00-07:00","isDaytime":false,"temperature":53,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":2.2222222222222223},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":51},"windSpeed":"8 to 21 mph","windDirection":"S","icon":"https://api.weather.gov/icons/land/night/wind_few?size=medium","shortForecast":"Mostly Clear","detailedForecast":"Mostly clear, with a low around 53."},{"number":12,"name":"Monday","startTime":"2023-10-02T06:00:00-07:00","endTime":"2023-10-02T18:00:00-07:00","isDaytime":true,"temperature":78,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":3.3333333333333335},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":50},"windSpeed":"9 to 21 mph","windDirection":"SSW","icon":"https://api.weather.gov/icons/land/day/wind_sct?size=medium","shortForecast":"Mostly Sunny","detailedForecast":"Mostly sunny, with a high near 78."},{"number":13,"name":"Monday Night","startTime":"2023-10-02T18:00:00-07:00","endTime":"2023-10-03T06:00:00-07:00","isDaytime":false,"temperature":51,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":-0.5555555555555556},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":45},"windSpeed":"6 to 16 mph","windDirection":"SSW","icon":"https://api.weather.gov/icons/land/night/sct?size=medium","shortForecast":"Partly Cloudy","detailedForecast":"Partly cloudy, with a low around 51."},{"number":14,"name":"Tuesday","startTime":"2023-10-03T06:00:00-07:00","endTime":"2023-10-03T18:00:00-07:00","isDaytime":true,"temperature":77,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":0.5555555555555556},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":43},"windSpeed":"6 to 15 mph","windDirection":"SSW","icon":"https://api.weather.gov/icons/land/day/few?size=medium","shortForecast":"Sunny","detailedForecast":"Sunny, with a high near 77."}]}
  var hourly_TWC_125_31 = false
  var crags_config = [
  {
    "name": "Cochise Stronghold",
    "note": "Granite, so the exposed areas dry fast.",
    "mountainProject": "https://www.mountainproject.com/area/105738034/cochise-stronghold",
    "station": "KFHU",
    "office": "TWC/125,31",
    "coordinates": [
      -109.987,
      31.921
    ]
  }
]</script>

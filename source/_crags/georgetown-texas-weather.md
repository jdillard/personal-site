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
  var weekly_EWX_157_106 = {"updated":"2024-02-20T07:34:35+00:00","units":"us","forecastGenerator":"BaselineForecastGenerator","generatedAt":"2024-02-20T08:31:22+00:00","updateTime":"2024-02-20T07:34:35+00:00","validTimes":"2024-02-20T01:00:00+00:00/P8D","elevation":{"unitCode":"wmoUnit:m","value":242.9256},"periods":[{"number":1,"name":"Overnight","startTime":"2024-02-20T02:00:00-06:00","endTime":"2024-02-20T06:00:00-06:00","isDaytime":false,"temperature":46,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":7.222222222222222},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":90},"windSpeed":"5 mph","windDirection":"SSW","icon":"https://api.weather.gov/icons/land/night/skc?size=medium","shortForecast":"Clear","detailedForecast":"Clear, with a low around 46. South southwest wind around 5 mph."},{"number":2,"name":"Tuesday","startTime":"2024-02-20T06:00:00-06:00","endTime":"2024-02-20T18:00:00-06:00","isDaytime":true,"temperature":78,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":12.222222222222221},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":95},"windSpeed":"5 to 15 mph","windDirection":"SSW","icon":"https://api.weather.gov/icons/land/day/few?size=medium","shortForecast":"Sunny","detailedForecast":"Sunny, with a high near 78. South southwest wind 5 to 15 mph, with gusts as high as 20 mph."},{"number":3,"name":"Tuesday Night","startTime":"2024-02-20T18:00:00-06:00","endTime":"2024-02-21T06:00:00-06:00","isDaytime":false,"temperature":56,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":13.88888888888889},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":100},"windSpeed":"10 to 15 mph","windDirection":"S","icon":"https://api.weather.gov/icons/land/night/sct/fog?size=medium","shortForecast":"Partly Cloudy then Patchy Fog","detailedForecast":"Patchy fog after 5am. Partly cloudy, with a low around 56. South wind 10 to 15 mph, with gusts as high as 20 mph."},{"number":4,"name":"Wednesday","startTime":"2024-02-21T06:00:00-06:00","endTime":"2024-02-21T18:00:00-06:00","isDaytime":true,"temperature":76,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":15},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":100},"windSpeed":"10 to 20 mph","windDirection":"S","icon":"https://api.weather.gov/icons/land/day/fog/sct?size=medium","shortForecast":"Patchy Fog then Mostly Sunny","detailedForecast":"Patchy fog before 8am. Mostly sunny, with a high near 76. South wind 10 to 20 mph, with gusts as high as 30 mph."},{"number":5,"name":"Wednesday Night","startTime":"2024-02-21T18:00:00-06:00","endTime":"2024-02-22T06:00:00-06:00","isDaytime":false,"temperature":60,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":15},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":96},"windSpeed":"10 to 20 mph","windDirection":"SSW","icon":"https://api.weather.gov/icons/land/night/bkn?size=medium","shortForecast":"Mostly Cloudy","detailedForecast":"Mostly cloudy, with a low around 60. South southwest wind 10 to 20 mph, with gusts as high as 35 mph."},{"number":6,"name":"Thursday","startTime":"2024-02-22T06:00:00-06:00","endTime":"2024-02-22T18:00:00-06:00","isDaytime":true,"temperature":82,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":15.555555555555555},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":96},"windSpeed":"10 to 15 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/day/sct?size=medium","shortForecast":"Mostly Sunny","detailedForecast":"Mostly sunny, with a high near 82. West wind 10 to 15 mph, with gusts as high as 25 mph."},{"number":7,"name":"Thursday Night","startTime":"2024-02-22T18:00:00-06:00","endTime":"2024-02-23T06:00:00-06:00","isDaytime":false,"temperature":51,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":6.666666666666667},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":72},"windSpeed":"15 mph","windDirection":"NNW","icon":"https://api.weather.gov/icons/land/night/few?size=medium","shortForecast":"Mostly Clear","detailedForecast":"Mostly clear, with a low around 51. North northwest wind around 15 mph, with gusts as high as 30 mph."},{"number":8,"name":"Friday","startTime":"2024-02-23T06:00:00-06:00","endTime":"2024-02-23T18:00:00-06:00","isDaytime":true,"temperature":72,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":5.555555555555555},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":71},"windSpeed":"10 to 15 mph","windDirection":"N","icon":"https://api.weather.gov/icons/land/day/few?size=medium","shortForecast":"Sunny","detailedForecast":"Sunny, with a high near 72. North wind 10 to 15 mph, with gusts as high as 25 mph."},{"number":9,"name":"Friday Night","startTime":"2024-02-23T18:00:00-06:00","endTime":"2024-02-24T06:00:00-06:00","isDaytime":false,"temperature":47,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":3.3333333333333335},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":66},"windSpeed":"5 to 10 mph","windDirection":"NNW","icon":"https://api.weather.gov/icons/land/night/few?size=medium","shortForecast":"Mostly Clear","detailedForecast":"Mostly clear, with a low around 47. North northwest wind 5 to 10 mph."},{"number":10,"name":"Saturday","startTime":"2024-02-24T06:00:00-06:00","endTime":"2024-02-24T18:00:00-06:00","isDaytime":true,"temperature":75,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":5},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":65},"windSpeed":"5 to 10 mph","windDirection":"SSW","icon":"https://api.weather.gov/icons/land/day/sct?size=medium","shortForecast":"Mostly Sunny","detailedForecast":"Mostly sunny, with a high near 75."},{"number":11,"name":"Saturday Night","startTime":"2024-02-24T18:00:00-06:00","endTime":"2024-02-25T06:00:00-06:00","isDaytime":false,"temperature":52,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":8.333333333333334},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":82},"windSpeed":"10 to 15 mph","windDirection":"S","icon":"https://api.weather.gov/icons/land/night/few?size=medium","shortForecast":"Mostly Clear","detailedForecast":"Mostly clear, with a low around 52."},{"number":12,"name":"Sunday","startTime":"2024-02-25T06:00:00-06:00","endTime":"2024-02-25T18:00:00-06:00","isDaytime":true,"temperature":80,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":12.777777777777779},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":83},"windSpeed":"15 to 20 mph","windDirection":"S","icon":"https://api.weather.gov/icons/land/day/few?size=medium","shortForecast":"Sunny","detailedForecast":"Sunny, with a high near 80."},{"number":13,"name":"Sunday Night","startTime":"2024-02-25T18:00:00-06:00","endTime":"2024-02-26T06:00:00-06:00","isDaytime":false,"temperature":59,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":14.444444444444445},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":93},"windSpeed":"15 mph","windDirection":"S","icon":"https://api.weather.gov/icons/land/night/sct?size=medium","shortForecast":"Partly Cloudy","detailedForecast":"Partly cloudy, with a low around 59."},{"number":14,"name":"Monday","startTime":"2024-02-26T06:00:00-06:00","endTime":"2024-02-26T18:00:00-06:00","isDaytime":true,"temperature":81,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":16.11111111111111},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":93},"windSpeed":"15 to 20 mph","windDirection":"S","icon":"https://api.weather.gov/icons/land/day/bkn?size=medium","shortForecast":"Partly Sunny","detailedForecast":"Partly sunny, with a high near 81."}]}
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

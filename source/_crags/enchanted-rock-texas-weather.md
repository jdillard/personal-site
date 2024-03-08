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
  var weekly_EWX_114_101 = {"updated":"2024-03-08T07:44:25+00:00","units":"us","forecastGenerator":"BaselineForecastGenerator","generatedAt":"2024-03-08T08:33:02+00:00","updateTime":"2024-03-08T07:44:25+00:00","validTimes":"2024-03-08T01:00:00+00:00/P8D","elevation":{"unitCode":"wmoUnit:m","value":537.972},"periods":[{"number":1,"name":"Overnight","startTime":"2024-03-08T02:00:00-06:00","endTime":"2024-03-08T06:00:00-06:00","isDaytime":false,"temperature":58,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":60},"dewpoint":{"unitCode":"wmoUnit:degC","value":17.77777777777778},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":97},"windSpeed":"10 to 15 mph","windDirection":"SW","icon":"https://api.weather.gov/icons/land/night/tsra_sct,60?size=medium","shortForecast":"Slight Chance Showers And Thunderstorms","detailedForecast":"A slight chance of showers and thunderstorms before 3am, then showers and thunderstorms likely. Some of the storms could be severe. Mostly cloudy, with a low around 58. Southwest wind 10 to 15 mph, with gusts as high as 30 mph. Chance of precipitation is 60%. New rainfall amounts between a tenth and quarter of an inch possible."},{"number":2,"name":"Friday","startTime":"2024-03-08T06:00:00-06:00","endTime":"2024-03-08T18:00:00-06:00","isDaytime":true,"temperature":78,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":40},"dewpoint":{"unitCode":"wmoUnit:degC","value":13.88888888888889},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":93},"windSpeed":"10 to 15 mph","windDirection":"WNW","icon":"https://api.weather.gov/icons/land/day/tsra_hi,40/sct?size=medium","shortForecast":"Chance Showers And Thunderstorms then Mostly Sunny","detailedForecast":"A chance of showers and thunderstorms before 9am. Mostly sunny, with a high near 78. West northwest wind 10 to 15 mph, with gusts as high as 25 mph. Chance of precipitation is 40%. New rainfall amounts less than a tenth of an inch possible."},{"number":3,"name":"Friday Night","startTime":"2024-03-08T18:00:00-06:00","endTime":"2024-03-09T06:00:00-06:00","isDaytime":false,"temperature":41,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":6.666666666666667},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":76},"windSpeed":"15 to 30 mph","windDirection":"NNW","icon":"https://api.weather.gov/icons/land/night/wind_bkn?size=medium","shortForecast":"Mostly Cloudy","detailedForecast":"Mostly cloudy, with a low around 41. North northwest wind 15 to 30 mph, with gusts as high as 35 mph."},{"number":4,"name":"Saturday","startTime":"2024-03-09T06:00:00-06:00","endTime":"2024-03-09T18:00:00-06:00","isDaytime":true,"temperature":60,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":1.6666666666666667},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":76},"windSpeed":"15 to 25 mph","windDirection":"N","icon":"https://api.weather.gov/icons/land/day/wind_sct?size=medium","shortForecast":"Mostly Sunny","detailedForecast":"Mostly sunny, with a high near 60. North wind 15 to 25 mph, with gusts as high as 35 mph."},{"number":5,"name":"Saturday Night","startTime":"2024-03-09T18:00:00-06:00","endTime":"2024-03-10T06:00:00-05:00","isDaytime":false,"temperature":40,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":1.6666666666666667},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":65},"windSpeed":"5 to 15 mph","windDirection":"N","icon":"https://api.weather.gov/icons/land/night/sct?size=medium","shortForecast":"Partly Cloudy","detailedForecast":"Partly cloudy, with a low around 40. North wind 5 to 15 mph, with gusts as high as 25 mph."},{"number":6,"name":"Sunday","startTime":"2024-03-10T06:00:00-05:00","endTime":"2024-03-10T18:00:00-05:00","isDaytime":true,"temperature":63,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":-1.1111111111111112},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":67},"windSpeed":"5 mph","windDirection":"ENE","icon":"https://api.weather.gov/icons/land/day/bkn?size=medium","shortForecast":"Mostly Cloudy","detailedForecast":"Mostly cloudy, with a high near 63. East northeast wind around 5 mph."},{"number":7,"name":"Sunday Night","startTime":"2024-03-10T18:00:00-05:00","endTime":"2024-03-11T06:00:00-05:00","isDaytime":false,"temperature":41,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":0.5555555555555556},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":67},"windSpeed":"5 to 10 mph","windDirection":"SE","icon":"https://api.weather.gov/icons/land/night/sct?size=medium","shortForecast":"Partly Cloudy","detailedForecast":"Partly cloudy, with a low around 41. Southeast wind 5 to 10 mph."},{"number":8,"name":"Monday","startTime":"2024-03-11T06:00:00-05:00","endTime":"2024-03-11T18:00:00-05:00","isDaytime":true,"temperature":72,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":4.444444444444445},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":70},"windSpeed":"10 to 15 mph","windDirection":"S","icon":"https://api.weather.gov/icons/land/day/few?size=medium","shortForecast":"Sunny","detailedForecast":"Sunny, with a high near 72. South wind 10 to 15 mph, with gusts as high as 20 mph."},{"number":9,"name":"Monday Night","startTime":"2024-03-11T18:00:00-05:00","endTime":"2024-03-12T06:00:00-05:00","isDaytime":false,"temperature":51,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":10},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":89},"windSpeed":"15 mph","windDirection":"SSE","icon":"https://api.weather.gov/icons/land/night/few?size=medium","shortForecast":"Mostly Clear","detailedForecast":"Mostly clear, with a low around 51. South southeast wind around 15 mph, with gusts as high as 25 mph."},{"number":10,"name":"Tuesday","startTime":"2024-03-12T06:00:00-05:00","endTime":"2024-03-12T18:00:00-05:00","isDaytime":true,"temperature":76,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":11.666666666666666},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":93},"windSpeed":"15 to 20 mph","windDirection":"S","icon":"https://api.weather.gov/icons/land/day/sct?size=medium","shortForecast":"Mostly Sunny","detailedForecast":"Mostly sunny, with a high near 76."},{"number":11,"name":"Tuesday Night","startTime":"2024-03-12T18:00:00-05:00","endTime":"2024-03-13T06:00:00-05:00","isDaytime":false,"temperature":57,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":13.88888888888889},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":96},"windSpeed":"15 mph","windDirection":"S","icon":"https://api.weather.gov/icons/land/night/sct?size=medium","shortForecast":"Partly Cloudy","detailedForecast":"Partly cloudy, with a low around 57."},{"number":12,"name":"Wednesday","startTime":"2024-03-13T06:00:00-05:00","endTime":"2024-03-13T18:00:00-05:00","isDaytime":true,"temperature":83,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":14.444444444444445},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":96},"windSpeed":"15 mph","windDirection":"S","icon":"https://api.weather.gov/icons/land/day/sct?size=medium","shortForecast":"Mostly Sunny","detailedForecast":"Mostly sunny, with a high near 83."},{"number":13,"name":"Wednesday Night","startTime":"2024-03-13T18:00:00-05:00","endTime":"2024-03-14T06:00:00-05:00","isDaytime":false,"temperature":62,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":16.11111111111111},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":93},"windSpeed":"15 to 20 mph","windDirection":"S","icon":"https://api.weather.gov/icons/land/night/sct?size=medium","shortForecast":"Partly Cloudy","detailedForecast":"Partly cloudy, with a low around 62."},{"number":14,"name":"Thursday","startTime":"2024-03-14T06:00:00-05:00","endTime":"2024-03-14T18:00:00-05:00","isDaytime":true,"temperature":78,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":50},"dewpoint":{"unitCode":"wmoUnit:degC","value":16.11111111111111},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":90},"windSpeed":"15 mph","windDirection":"SSE","icon":"https://api.weather.gov/icons/land/day/tsra_hi,30/tsra_hi,50?size=medium","shortForecast":"Chance Showers And Thunderstorms","detailedForecast":"A chance of showers and thunderstorms between 7am and 1pm, then a chance of showers and thunderstorms. Partly sunny, with a high near 78. Chance of precipitation is 50%."}]}
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

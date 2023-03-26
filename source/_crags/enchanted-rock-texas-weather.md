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
  var weekly_EWX_114_101 = {"updated":"2023-03-26T06:38:34+00:00","units":"us","forecastGenerator":"BaselineForecastGenerator","generatedAt":"2023-03-26T08:31:15+00:00","updateTime":"2023-03-26T06:38:34+00:00","validTimes":"2023-03-26T00:00:00+00:00/P8DT1H","elevation":{"unitCode":"wmoUnit:m","value":537.972},"periods":[{"number":1,"name":"Overnight","startTime":"2023-03-26T03:00:00-05:00","endTime":"2023-03-26T06:00:00-05:00","isDaytime":false,"temperature":51,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":1.1111111111111112},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":50},"windSpeed":"10 mph","windDirection":"S","icon":"https://api.weather.gov/icons/land/night/sct?size=medium","shortForecast":"Partly Cloudy","detailedForecast":"Partly cloudy, with a low around 51. South wind around 10 mph."},{"number":2,"name":"Sunday","startTime":"2023-03-26T06:00:00-05:00","endTime":"2023-03-26T18:00:00-05:00","isDaytime":true,"temperature":85,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":10},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":60},"windSpeed":"5 to 10 mph","windDirection":"SW","icon":"https://api.weather.gov/icons/land/day/few?size=medium","shortForecast":"Sunny","detailedForecast":"Sunny, with a high near 85. Southwest wind 5 to 10 mph, with gusts as high as 20 mph."},{"number":3,"name":"Sunday Night","startTime":"2023-03-26T18:00:00-05:00","endTime":"2023-03-27T06:00:00-05:00","isDaytime":false,"temperature":50,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":4.444444444444445},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":63},"windSpeed":"5 to 10 mph","windDirection":"N","icon":"https://api.weather.gov/icons/land/night/few?size=medium","shortForecast":"Mostly Clear","detailedForecast":"Mostly clear, with a low around 50. North wind 5 to 10 mph."},{"number":4,"name":"Monday","startTime":"2023-03-27T06:00:00-05:00","endTime":"2023-03-27T18:00:00-05:00","isDaytime":true,"temperature":78,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":12.222222222222221},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":80},"windSpeed":"5 to 10 mph","windDirection":"E","icon":"https://api.weather.gov/icons/land/day/bkn?size=medium","shortForecast":"Partly Sunny","detailedForecast":"Partly sunny, with a high near 78. East wind 5 to 10 mph."},{"number":5,"name":"Monday Night","startTime":"2023-03-27T18:00:00-05:00","endTime":"2023-03-28T06:00:00-05:00","isDaytime":false,"temperature":56,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":20},"dewpoint":{"unitCode":"wmoUnit:degC","value":13.333333333333334},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":84},"windSpeed":"10 mph","windDirection":"ENE","icon":"https://api.weather.gov/icons/land/night/tsra,20?size=medium","shortForecast":"Slight Chance Showers And Thunderstorms","detailedForecast":"A slight chance of showers and thunderstorms between 7pm and 1am. Mostly cloudy, with a low around 56. East northeast wind around 10 mph, with gusts as high as 20 mph. Chance of precipitation is 20%."},{"number":6,"name":"Tuesday","startTime":"2023-03-28T06:00:00-05:00","endTime":"2023-03-28T18:00:00-05:00","isDaytime":true,"temperature":64,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":11.666666666666666},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":85},"windSpeed":"15 to 20 mph","windDirection":"NE","icon":"https://api.weather.gov/icons/land/day/ovc?size=medium","shortForecast":"Cloudy","detailedForecast":"Cloudy, with a high near 64. Northeast wind 15 to 20 mph, with gusts as high as 35 mph."},{"number":7,"name":"Tuesday Night","startTime":"2023-03-28T18:00:00-05:00","endTime":"2023-03-29T06:00:00-05:00","isDaytime":false,"temperature":52,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":6.666666666666667},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":71},"windSpeed":"10 to 15 mph","windDirection":"ENE","icon":"https://api.weather.gov/icons/land/night/bkn?size=medium","shortForecast":"Mostly Cloudy","detailedForecast":"Mostly cloudy, with a low around 52. East northeast wind 10 to 15 mph, with gusts as high as 30 mph."},{"number":8,"name":"Wednesday","startTime":"2023-03-29T06:00:00-05:00","endTime":"2023-03-29T18:00:00-05:00","isDaytime":true,"temperature":71,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":12.222222222222221},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":76},"windSpeed":"10 to 15 mph","windDirection":"ESE","icon":"https://api.weather.gov/icons/land/day/bkn?size=medium","shortForecast":"Mostly Cloudy","detailedForecast":"Mostly cloudy, with a high near 71. East southeast wind 10 to 15 mph, with gusts as high as 20 mph."},{"number":9,"name":"Wednesday Night","startTime":"2023-03-29T18:00:00-05:00","endTime":"2023-03-30T06:00:00-05:00","isDaytime":false,"temperature":60,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":15},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":92},"windSpeed":"15 mph","windDirection":"SE","icon":"https://api.weather.gov/icons/land/night/ovc?size=medium","shortForecast":"Cloudy","detailedForecast":"Cloudy, with a low around 60. Southeast wind around 15 mph, with gusts as high as 25 mph."},{"number":10,"name":"Thursday","startTime":"2023-03-30T06:00:00-05:00","endTime":"2023-03-30T18:00:00-05:00","isDaytime":true,"temperature":76,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":20},"dewpoint":{"unitCode":"wmoUnit:degC","value":17.77777777777778},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":93},"windSpeed":"15 to 20 mph","windDirection":"SSE","icon":"https://api.weather.gov/icons/land/day/rain_showers,20/tsra,20?size=medium","shortForecast":"Slight Chance Rain Showers then Slight Chance Showers And Thunderstorms","detailedForecast":"A slight chance of rain showers between 7am and 1pm, then a slight chance of showers and thunderstorms. Cloudy, with a high near 76. Chance of precipitation is 20%."},{"number":11,"name":"Thursday Night","startTime":"2023-03-30T18:00:00-05:00","endTime":"2023-03-31T06:00:00-05:00","isDaytime":false,"temperature":66,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":30},"dewpoint":{"unitCode":"wmoUnit:degC","value":18.333333333333332},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":87},"windSpeed":"20 to 25 mph","windDirection":"S","icon":"https://api.weather.gov/icons/land/night/tsra,30?size=medium","shortForecast":"Chance Showers And Thunderstorms","detailedForecast":"A chance of showers and thunderstorms before 1am, then a chance of showers and thunderstorms. Cloudy, with a low around 66. Chance of precipitation is 30%."},{"number":12,"name":"Friday","startTime":"2023-03-31T06:00:00-05:00","endTime":"2023-03-31T18:00:00-05:00","isDaytime":true,"temperature":83,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":30},"dewpoint":{"unitCode":"wmoUnit:degC","value":17.77777777777778},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":90},"windSpeed":"20 mph","windDirection":"SSW","icon":"https://api.weather.gov/icons/land/day/tsra_sct,30/tsra_sct,20?size=medium","shortForecast":"Chance Showers And Thunderstorms then Slight Chance Showers And Thunderstorms","detailedForecast":"A chance of showers and thunderstorms before 7am, then a slight chance of showers and thunderstorms. Mostly cloudy, with a high near 83. Chance of precipitation is 30%."},{"number":13,"name":"Friday Night","startTime":"2023-03-31T18:00:00-05:00","endTime":"2023-04-01T06:00:00-05:00","isDaytime":false,"temperature":59,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":20},"dewpoint":{"unitCode":"wmoUnit:degC","value":14.444444444444445},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":74},"windSpeed":"10 to 15 mph","windDirection":"SW","icon":"https://api.weather.gov/icons/land/night/tsra_hi,20?size=medium","shortForecast":"Slight Chance Showers And Thunderstorms","detailedForecast":"A slight chance of showers and thunderstorms. Mostly cloudy, with a low around 59. Chance of precipitation is 20%."},{"number":14,"name":"Saturday","startTime":"2023-04-01T06:00:00-05:00","endTime":"2023-04-01T18:00:00-05:00","isDaytime":true,"temperature":78,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":20},"dewpoint":{"unitCode":"wmoUnit:degC","value":11.666666666666666},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":78},"windSpeed":"10 to 15 mph","windDirection":"NNW","icon":"https://api.weather.gov/icons/land/day/tsra_hi,20?size=medium","shortForecast":"Slight Chance Showers And Thunderstorms","detailedForecast":"A slight chance of showers and thunderstorms. Partly sunny, with a high near 78. Chance of precipitation is 20%."}]}
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

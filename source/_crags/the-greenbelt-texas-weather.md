---
### THIS FILE IS AUTO-GENERATED - DO NOT EDIT ###
layout: page
title: The Greenbelt, Texas Climbing Weather - Current, Past, and Forecasted
title_override: The Greenbelt<br /><small>Climbing Weather</small>
description: A lightweight weather report for The Greenbelt, Texas. Optimized for slow internet connections.
js_includes:
  - weather.js
---

<section class="measure center lh-copy f5-ns f6 ph2 mv4" style="text-align: justify;">
<strong>"Is it dry?"</strong>, an oft-repeated, age-old question. Here are real-time,
precipitation-focused reports of current, past, and forecasted climbing weather for The Greenbelt, Texas.
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
<section id="weather" data-crag="the-greenbelt-texas" class="mv4-ns mv3 ph2 center"></section>
<section id="nearby" class="tc lh-copy">
  <h3>Nearby Crags</h3>
<a class="nowrap no-underline fancy-link relative light-red mh3" href="/crags/continental-ranch-texas-weather.html">Continental Ranch</a>
<a class="nowrap no-underline fancy-link relative light-red mh3" href="/crags/pace-bend-park-texas-weather.html">Pace Bend Park</a>
<a class="nowrap no-underline fancy-link relative light-red mh3" href="/crags/reimers-ranch-texas-weather.html">Reimer's Ranch</a>
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
  var weekly_EWX_153_89 = {"updated":"2023-04-28T07:06:31+00:00","units":"us","forecastGenerator":"BaselineForecastGenerator","generatedAt":"2023-04-28T08:31:16+00:00","updateTime":"2023-04-28T07:06:31+00:00","validTimes":"2023-04-28T01:00:00+00:00/P8D","elevation":{"unitCode":"wmoUnit:m","value":213.0552},"periods":[{"number":1,"name":"Overnight","startTime":"2023-04-28T03:00:00-05:00","endTime":"2023-04-28T06:00:00-05:00","isDaytime":false,"temperature":57,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":13.88888888888889},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":93},"windSpeed":"5 to 10 mph","windDirection":"S","icon":"https://api.weather.gov/icons/land/night/few?size=medium","shortForecast":"Mostly Clear","detailedForecast":"Mostly clear, with a low around 57. South wind 5 to 10 mph."},{"number":2,"name":"Friday","startTime":"2023-04-28T06:00:00-05:00","endTime":"2023-04-28T18:00:00-05:00","isDaytime":true,"temperature":86,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":50},"dewpoint":{"unitCode":"wmoUnit:degC","value":20},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":100},"windSpeed":"10 to 20 mph","windDirection":"S","icon":"https://api.weather.gov/icons/land/day/fog/tsra_hi,50?size=medium","shortForecast":"Patchy Fog then Chance Showers And Thunderstorms","detailedForecast":"Patchy fog between 8am and 9am, then a chance of showers and thunderstorms. Some of the storms could be severe. Mostly sunny, with a high near 86. South wind 10 to 20 mph, with gusts as high as 30 mph. Chance of precipitation is 50%. New rainfall amounts between a quarter and half of an inch possible."},{"number":3,"name":"Friday Night","startTime":"2023-04-28T18:00:00-05:00","endTime":"2023-04-29T06:00:00-05:00","isDaytime":false,"temperature":54,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":90},"dewpoint":{"unitCode":"wmoUnit:degC","value":20},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":87},"windSpeed":"15 to 20 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/night/tsra,90/tsra,50?size=medium","shortForecast":"Showers And Thunderstorms","detailedForecast":"Showers and thunderstorms before 4am. Some of the storms could be severe. Mostly cloudy, with a low around 54. West wind 15 to 20 mph, with gusts as high as 35 mph. Chance of precipitation is 90%. New rainfall amounts between three quarters and one inch possible."},{"number":4,"name":"Saturday","startTime":"2023-04-29T06:00:00-05:00","endTime":"2023-04-29T18:00:00-05:00","isDaytime":true,"temperature":72,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":10},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":83},"windSpeed":"15 to 25 mph","windDirection":"NNW","icon":"https://api.weather.gov/icons/land/day/wind_few?size=medium","shortForecast":"Sunny","detailedForecast":"Sunny, with a high near 72. North northwest wind 15 to 25 mph, with gusts as high as 40 mph."},{"number":5,"name":"Saturday Night","startTime":"2023-04-29T18:00:00-05:00","endTime":"2023-04-30T06:00:00-05:00","isDaytime":false,"temperature":50,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":7.777777777777778},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":70},"windSpeed":"5 to 15 mph","windDirection":"NW","icon":"https://api.weather.gov/icons/land/night/skc?size=medium","shortForecast":"Clear","detailedForecast":"Clear, with a low around 50. Northwest wind 5 to 15 mph, with gusts as high as 25 mph."},{"number":6,"name":"Sunday","startTime":"2023-04-30T06:00:00-05:00","endTime":"2023-04-30T18:00:00-05:00","isDaytime":true,"temperature":83,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":11.11111111111111},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":70},"windSpeed":"5 to 10 mph","windDirection":"WSW","icon":"https://api.weather.gov/icons/land/day/skc?size=medium","shortForecast":"Sunny","detailedForecast":"Sunny, with a high near 83. West southwest wind 5 to 10 mph."},{"number":7,"name":"Sunday Night","startTime":"2023-04-30T18:00:00-05:00","endTime":"2023-05-01T06:00:00-05:00","isDaytime":false,"temperature":57,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":12.222222222222221},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":76},"windSpeed":"10 to 15 mph","windDirection":"S","icon":"https://api.weather.gov/icons/land/night/few?size=medium","shortForecast":"Mostly Clear","detailedForecast":"Mostly clear, with a low around 57. South wind 10 to 15 mph, with gusts as high as 25 mph."},{"number":8,"name":"Monday","startTime":"2023-05-01T06:00:00-05:00","endTime":"2023-05-01T18:00:00-05:00","isDaytime":true,"temperature":84,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":14.444444444444445},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":80},"windSpeed":"15 mph","windDirection":"S","icon":"https://api.weather.gov/icons/land/day/few?size=medium","shortForecast":"Sunny","detailedForecast":"Sunny, with a high near 84. South wind around 15 mph, with gusts as high as 30 mph."},{"number":9,"name":"Monday Night","startTime":"2023-05-01T18:00:00-05:00","endTime":"2023-05-02T06:00:00-05:00","isDaytime":false,"temperature":61,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":16.11111111111111},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":97},"windSpeed":"10 to 15 mph","windDirection":"SSE","icon":"https://api.weather.gov/icons/land/night/bkn?size=medium","shortForecast":"Mostly Cloudy","detailedForecast":"Mostly cloudy, with a low around 61. South southeast wind 10 to 15 mph, with gusts as high as 25 mph."},{"number":10,"name":"Tuesday","startTime":"2023-05-02T06:00:00-05:00","endTime":"2023-05-02T18:00:00-05:00","isDaytime":true,"temperature":83,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":18.333333333333332},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":100},"windSpeed":"10 to 15 mph","windDirection":"SE","icon":"https://api.weather.gov/icons/land/day/bkn?size=medium","shortForecast":"Mostly Cloudy","detailedForecast":"Mostly cloudy, with a high near 83."},{"number":11,"name":"Tuesday Night","startTime":"2023-05-02T18:00:00-05:00","endTime":"2023-05-03T06:00:00-05:00","isDaytime":false,"temperature":63,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":17.22222222222222},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":96},"windSpeed":"5 to 10 mph","windDirection":"SE","icon":"https://api.weather.gov/icons/land/night/bkn?size=medium","shortForecast":"Mostly Cloudy","detailedForecast":"Mostly cloudy, with a low around 63."},{"number":12,"name":"Wednesday","startTime":"2023-05-03T06:00:00-05:00","endTime":"2023-05-03T18:00:00-05:00","isDaytime":true,"temperature":84,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":18.333333333333332},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":97},"windSpeed":"5 to 10 mph","windDirection":"E","icon":"https://api.weather.gov/icons/land/day/bkn?size=medium","shortForecast":"Mostly Cloudy","detailedForecast":"Mostly cloudy, with a high near 84."},{"number":13,"name":"Wednesday Night","startTime":"2023-05-03T18:00:00-05:00","endTime":"2023-05-04T06:00:00-05:00","isDaytime":false,"temperature":67,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":18.333333333333332},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":90},"windSpeed":"10 mph","windDirection":"SE","icon":"https://api.weather.gov/icons/land/night/bkn?size=medium","shortForecast":"Mostly Cloudy","detailedForecast":"Mostly cloudy, with a low around 67."},{"number":14,"name":"Thursday","startTime":"2023-05-04T06:00:00-05:00","endTime":"2023-05-04T18:00:00-05:00","isDaytime":true,"temperature":85,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":20},"dewpoint":{"unitCode":"wmoUnit:degC","value":20},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":93},"windSpeed":"10 to 15 mph","windDirection":"SSE","icon":"https://api.weather.gov/icons/land/day/bkn/tsra,20?size=medium","shortForecast":"Mostly Cloudy then Slight Chance Showers And Thunderstorms","detailedForecast":"A slight chance of showers and thunderstorms after 1pm. Mostly cloudy, with a high near 85. Chance of precipitation is 20%."}]}
  var hourly_EWX_153_89 = false
  var crags_config = [
  {
    "name": "The Greenbelt",
    "note": "Porous limestone that can take a couple days to dry out.",
    "mountainProject": "https://www.mountainproject.com/area/105905087/barton-creek-greenbelt",
    "station": "KATT",
    "office": "EWX/153,89",
    "coordinates": [
      -97.801,
      30.244
    ]
  }
]</script>

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
  var weekly_EWX_141_93 = {"updated":"2023-11-26T08:11:21+00:00","units":"us","forecastGenerator":"BaselineForecastGenerator","generatedAt":"2023-11-26T08:31:17+00:00","updateTime":"2023-11-26T08:11:21+00:00","validTimes":"2023-11-26T02:00:00+00:00/P7DT23H","elevation":{"unitCode":"wmoUnit:m","value":324.0024},"periods":[{"number":1,"name":"Overnight","startTime":"2023-11-26T02:00:00-06:00","endTime":"2023-11-26T06:00:00-06:00","isDaytime":false,"temperature":49,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":30},"dewpoint":{"unitCode":"wmoUnit:degC","value":9.444444444444445},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":92},"windSpeed":"5 mph","windDirection":"NNW","icon":"https://api.weather.gov/icons/land/night/rain_showers,30?size=medium","shortForecast":"Chance Rain Showers","detailedForecast":"A chance of rain showers. Mostly cloudy, with a low around 49. North northwest wind around 5 mph. Chance of precipitation is 30%. New rainfall amounts less than a tenth of an inch possible."},{"number":2,"name":"Sunday","startTime":"2023-11-26T06:00:00-06:00","endTime":"2023-11-26T18:00:00-06:00","isDaytime":true,"temperature":54,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":9.444444444444445},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":95},"windSpeed":"10 to 15 mph","windDirection":"N","icon":"https://api.weather.gov/icons/land/day/bkn?size=medium","shortForecast":"Partly Sunny","detailedForecast":"Partly sunny, with a high near 54. North wind 10 to 15 mph, with gusts as high as 30 mph."},{"number":3,"name":"Sunday Night","startTime":"2023-11-26T18:00:00-06:00","endTime":"2023-11-27T06:00:00-06:00","isDaytime":false,"temperature":37,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":-1.1111111111111112},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":61},"windSpeed":"5 to 15 mph","windDirection":"N","icon":"https://api.weather.gov/icons/land/night/bkn?size=medium","shortForecast":"Mostly Cloudy","detailedForecast":"Mostly cloudy, with a low around 37. North wind 5 to 15 mph, with gusts as high as 20 mph."},{"number":4,"name":"Monday","startTime":"2023-11-27T06:00:00-06:00","endTime":"2023-11-27T18:00:00-06:00","isDaytime":true,"temperature":55,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":-1.6666666666666667},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":68},"windSpeed":"5 to 10 mph","windDirection":"NNE","icon":"https://api.weather.gov/icons/land/day/bkn?size=medium","shortForecast":"Partly Sunny","detailedForecast":"Partly sunny, with a high near 55. North northeast wind 5 to 10 mph."},{"number":5,"name":"Monday Night","startTime":"2023-11-27T18:00:00-06:00","endTime":"2023-11-28T06:00:00-06:00","isDaytime":false,"temperature":38,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":-0.5555555555555556},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":70},"windSpeed":"5 to 10 mph","windDirection":"NE","icon":"https://api.weather.gov/icons/land/night/bkn?size=medium","shortForecast":"Mostly Cloudy","detailedForecast":"Mostly cloudy, with a low around 38. Northeast wind 5 to 10 mph."},{"number":6,"name":"Tuesday","startTime":"2023-11-28T06:00:00-06:00","endTime":"2023-11-28T18:00:00-06:00","isDaytime":true,"temperature":57,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":0},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":70},"windSpeed":"5 mph","windDirection":"ENE","icon":"https://api.weather.gov/icons/land/day/bkn?size=medium","shortForecast":"Partly Sunny","detailedForecast":"Partly sunny, with a high near 57. East northeast wind around 5 mph."},{"number":7,"name":"Tuesday Night","startTime":"2023-11-28T18:00:00-06:00","endTime":"2023-11-29T06:00:00-06:00","isDaytime":false,"temperature":42,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":0.5555555555555556},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":69},"windSpeed":"5 mph","windDirection":"SSE","icon":"https://api.weather.gov/icons/land/night/bkn?size=medium","shortForecast":"Mostly Cloudy","detailedForecast":"Mostly cloudy, with a low around 42. South southeast wind around 5 mph."},{"number":8,"name":"Wednesday","startTime":"2023-11-29T06:00:00-06:00","endTime":"2023-11-29T18:00:00-06:00","isDaytime":true,"temperature":59,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":7.777777777777778},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":70},"windSpeed":"5 to 10 mph","windDirection":"S","icon":"https://api.weather.gov/icons/land/day/bkn?size=medium","shortForecast":"Mostly Cloudy","detailedForecast":"Mostly cloudy, with a high near 59. South wind 5 to 10 mph."},{"number":9,"name":"Wednesday Night","startTime":"2023-11-29T18:00:00-06:00","endTime":"2023-11-30T06:00:00-06:00","isDaytime":false,"temperature":52,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":40},"dewpoint":{"unitCode":"wmoUnit:degC","value":12.222222222222221},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":100},"windSpeed":"10 to 15 mph","windDirection":"SE","icon":"https://api.weather.gov/icons/land/night/rain_showers,20/rain_showers,40?size=medium","shortForecast":"Chance Rain Showers","detailedForecast":"A chance of rain showers. Cloudy, with a low around 52. Southeast wind 10 to 15 mph, with gusts as high as 20 mph. Chance of precipitation is 40%."},{"number":10,"name":"Thursday","startTime":"2023-11-30T06:00:00-06:00","endTime":"2023-11-30T18:00:00-06:00","isDaytime":true,"temperature":68,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":40},"dewpoint":{"unitCode":"wmoUnit:degC","value":17.22222222222222},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":100},"windSpeed":"10 to 15 mph","windDirection":"S","icon":"https://api.weather.gov/icons/land/day/tsra,40?size=medium","shortForecast":"Chance Showers And Thunderstorms","detailedForecast":"A chance of showers and thunderstorms before noon, then a chance of showers and thunderstorms. Cloudy, with a high near 68. Chance of precipitation is 40%."},{"number":11,"name":"Thursday Night","startTime":"2023-11-30T18:00:00-06:00","endTime":"2023-12-01T06:00:00-06:00","isDaytime":false,"temperature":53,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":40},"dewpoint":{"unitCode":"wmoUnit:degC","value":16.666666666666668},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":98},"windSpeed":"10 to 15 mph","windDirection":"WSW","icon":"https://api.weather.gov/icons/land/night/tsra_sct,40/tsra_sct,30?size=medium","shortForecast":"Chance Showers And Thunderstorms","detailedForecast":"A chance of showers and thunderstorms. Mostly cloudy, with a low around 53. Chance of precipitation is 40%."},{"number":12,"name":"Friday","startTime":"2023-12-01T06:00:00-06:00","endTime":"2023-12-01T18:00:00-06:00","isDaytime":true,"temperature":68,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":11.666666666666666},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":96},"windSpeed":"10 to 15 mph","windDirection":"NNW","icon":"https://api.weather.gov/icons/land/day/bkn?size=medium","shortForecast":"Partly Sunny","detailedForecast":"Partly sunny, with a high near 68."},{"number":13,"name":"Friday Night","startTime":"2023-12-01T18:00:00-06:00","endTime":"2023-12-02T06:00:00-06:00","isDaytime":false,"temperature":51,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":9.444444444444445},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":79},"windSpeed":"5 to 10 mph","windDirection":"NNE","icon":"https://api.weather.gov/icons/land/night/bkn?size=medium","shortForecast":"Mostly Cloudy","detailedForecast":"Mostly cloudy, with a low around 51."},{"number":14,"name":"Saturday","startTime":"2023-12-02T06:00:00-06:00","endTime":"2023-12-02T18:00:00-06:00","isDaytime":true,"temperature":68,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":20},"dewpoint":{"unitCode":"wmoUnit:degC","value":10.555555555555555},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":82},"windSpeed":"5 to 10 mph","windDirection":"NNE","icon":"https://api.weather.gov/icons/land/day/rain_showers,20?size=medium","shortForecast":"Slight Chance Rain Showers","detailedForecast":"A slight chance of rain showers. Mostly cloudy, with a high near 68. Chance of precipitation is 20%."}]}
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

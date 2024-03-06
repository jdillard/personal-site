---
### THIS FILE IS AUTO-GENERATED - DO NOT EDIT ###
layout: page
title: McKinney Falls, Texas Climbing Weather - Current, Past, and Forecasted
title_override: McKinney Falls<br /><small>Climbing Weather</small>
description: A lightweight weather report for McKinney Falls, Texas. Optimized for slow internet connections.
js_includes:
  - weather.js
---

<section class="measure center lh-copy f5-ns f6 ph2 mv4" style="text-align: justify;">
<strong>"Is it dry?"</strong>, an oft-repeated, age-old question. Here are real-time,
precipitation-focused reports of current, past, and forecasted climbing weather for McKinney Falls, Texas.
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
<section id="weather" data-crag="mckinney-falls-texas" class="mv4-ns mv3 ph2 center"></section>
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
<a class="nowrap no-underline fancy-link relative light-red mh3" href="/crags/georgetown-texas-weather.html">Georgetown</a>
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
  var weekly_EWX_156_86 = {"updated":"2024-03-06T08:25:03+00:00","units":"us","forecastGenerator":"BaselineForecastGenerator","generatedAt":"2024-03-06T08:32:23+00:00","updateTime":"2024-03-06T08:25:03+00:00","validTimes":"2024-03-06T02:00:00+00:00/P7DT23H","elevation":{"unitCode":"wmoUnit:m","value":167.0304},"periods":[{"number":1,"name":"Overnight","startTime":"2024-03-06T02:00:00-06:00","endTime":"2024-03-06T06:00:00-06:00","isDaytime":false,"temperature":56,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":12.777777777777779},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":93},"windSpeed":"5 mph","windDirection":"N","icon":"https://api.weather.gov/icons/land/night/sct?size=medium","shortForecast":"Partly Cloudy","detailedForecast":"Partly cloudy, with a low around 56. North wind around 5 mph."},{"number":2,"name":"Wednesday","startTime":"2024-03-06T06:00:00-06:00","endTime":"2024-03-06T18:00:00-06:00","isDaytime":true,"temperature":82,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":18.333333333333332},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":95},"windSpeed":"0 to 10 mph","windDirection":"SSW","icon":"https://api.weather.gov/icons/land/day/fog/bkn?size=medium","shortForecast":"Patchy Fog then Partly Sunny","detailedForecast":"Patchy fog between 7am and 8am. Partly sunny, with a high near 82. South southwest wind 0 to 10 mph."},{"number":3,"name":"Wednesday Night","startTime":"2024-03-06T18:00:00-06:00","endTime":"2024-03-07T06:00:00-06:00","isDaytime":false,"temperature":61,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":16.666666666666668},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":98},"windSpeed":"10 mph","windDirection":"SSE","icon":"https://api.weather.gov/icons/land/night/bkn?size=medium","shortForecast":"Mostly Cloudy","detailedForecast":"Mostly cloudy, with a low around 61. South southeast wind around 10 mph."},{"number":4,"name":"Thursday","startTime":"2024-03-07T06:00:00-06:00","endTime":"2024-03-07T18:00:00-06:00","isDaytime":true,"temperature":77,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":30},"dewpoint":{"unitCode":"wmoUnit:degC","value":18.88888888888889},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":100},"windSpeed":"10 to 15 mph","windDirection":"SSE","icon":"https://api.weather.gov/icons/land/day/ovc/tsra,30?size=medium","shortForecast":"Cloudy then Chance Showers And Thunderstorms","detailedForecast":"A chance of rain showers between noon and 3pm, then a chance of showers and thunderstorms. Cloudy, with a high near 77. South southeast wind 10 to 15 mph, with gusts as high as 25 mph. Chance of precipitation is 30%."},{"number":5,"name":"Thursday Night","startTime":"2024-03-07T18:00:00-06:00","endTime":"2024-03-08T06:00:00-06:00","isDaytime":false,"temperature":64,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":50},"dewpoint":{"unitCode":"wmoUnit:degC","value":19.444444444444443},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":100},"windSpeed":"10 to 15 mph","windDirection":"S","icon":"https://api.weather.gov/icons/land/night/tsra,40/tsra,50?size=medium","shortForecast":"Chance Showers And Thunderstorms","detailedForecast":"A chance of showers and thunderstorms before 3am, then patchy fog and a chance of showers and thunderstorms. Cloudy, with a low around 64. South wind 10 to 15 mph, with gusts as high as 25 mph. Chance of precipitation is 50%."},{"number":6,"name":"Friday","startTime":"2024-03-08T06:00:00-06:00","endTime":"2024-03-08T18:00:00-06:00","isDaytime":true,"temperature":79,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":50},"dewpoint":{"unitCode":"wmoUnit:degC","value":18.333333333333332},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":100},"windSpeed":"10 to 15 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/day/tsra_hi,50/bkn?size=medium","shortForecast":"Chance Showers And Thunderstorms then Partly Sunny","detailedForecast":"A chance of showers and thunderstorms before noon. Partly sunny, with a high near 79. West wind 10 to 15 mph, with gusts as high as 20 mph. Chance of precipitation is 50%."},{"number":7,"name":"Friday Night","startTime":"2024-03-08T18:00:00-06:00","endTime":"2024-03-09T06:00:00-06:00","isDaytime":false,"temperature":46,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":8.88888888888889},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":70},"windSpeed":"10 to 25 mph","windDirection":"NNW","icon":"https://api.weather.gov/icons/land/night/wind_sct?size=medium","shortForecast":"Partly Cloudy","detailedForecast":"Partly cloudy, with a low around 46. North northwest wind 10 to 25 mph, with gusts as high as 35 mph."},{"number":8,"name":"Saturday","startTime":"2024-03-09T06:00:00-06:00","endTime":"2024-03-09T18:00:00-06:00","isDaytime":true,"temperature":64,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":6.111111111111111},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":72},"windSpeed":"15 to 20 mph","windDirection":"N","icon":"https://api.weather.gov/icons/land/day/sct?size=medium","shortForecast":"Mostly Sunny","detailedForecast":"Mostly sunny, with a high near 64. North wind 15 to 20 mph, with gusts as high as 35 mph."},{"number":9,"name":"Saturday Night","startTime":"2024-03-09T18:00:00-06:00","endTime":"2024-03-10T06:00:00-05:00","isDaytime":false,"temperature":44,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":3.888888888888889},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":59},"windSpeed":"10 to 15 mph","windDirection":"N","icon":"https://api.weather.gov/icons/land/night/bkn?size=medium","shortForecast":"Mostly Cloudy","detailedForecast":"Mostly cloudy, with a low around 44. North wind 10 to 15 mph, with gusts as high as 25 mph."},{"number":10,"name":"Sunday","startTime":"2024-03-10T06:00:00-05:00","endTime":"2024-03-10T18:00:00-05:00","isDaytime":true,"temperature":64,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":2.2222222222222223},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":63},"windSpeed":"10 mph","windDirection":"NNE","icon":"https://api.weather.gov/icons/land/day/bkn?size=medium","shortForecast":"Mostly Cloudy","detailedForecast":"Mostly cloudy, with a high near 64."},{"number":11,"name":"Sunday Night","startTime":"2024-03-10T18:00:00-05:00","endTime":"2024-03-11T06:00:00-05:00","isDaytime":false,"temperature":44,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":3.888888888888889},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":74},"windSpeed":"5 mph","windDirection":"ENE","icon":"https://api.weather.gov/icons/land/night/bkn?size=medium","shortForecast":"Mostly Cloudy","detailedForecast":"Mostly cloudy, with a low around 44."},{"number":12,"name":"Monday","startTime":"2024-03-11T06:00:00-05:00","endTime":"2024-03-11T18:00:00-05:00","isDaytime":true,"temperature":72,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":6.111111111111111},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":78},"windSpeed":"5 to 10 mph","windDirection":"E","icon":"https://api.weather.gov/icons/land/day/few?size=medium","shortForecast":"Sunny","detailedForecast":"Sunny, with a high near 72."},{"number":13,"name":"Monday Night","startTime":"2024-03-11T18:00:00-05:00","endTime":"2024-03-12T06:00:00-05:00","isDaytime":false,"temperature":47,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":8.333333333333334},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":94},"windSpeed":"10 mph","windDirection":"SSE","icon":"https://api.weather.gov/icons/land/night/sct?size=medium","shortForecast":"Partly Cloudy","detailedForecast":"Partly cloudy, with a low around 47."},{"number":14,"name":"Tuesday","startTime":"2024-03-12T06:00:00-05:00","endTime":"2024-03-12T18:00:00-05:00","isDaytime":true,"temperature":74,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":12.222222222222221},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":98},"windSpeed":"5 to 15 mph","windDirection":"SSE","icon":"https://api.weather.gov/icons/land/day/sct?size=medium","shortForecast":"Mostly Sunny","detailedForecast":"Mostly sunny, with a high near 74."}]}
  var hourly_EWX_156_86 = false
  var crags_config = [
  {
    "name": "McKinney Falls",
    "note": "Porous limestone that can take a couple days to dry out.",
    "mountainProject": "https://www.mountainproject.com/area/106265889/mckinney-falls-state-park",
    "station": "KAUS",
    "office": "EWX/156,86",
    "coordinates": [
      -97.722,
      30.181
    ]
  }
]</script>

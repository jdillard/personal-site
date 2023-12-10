---
### THIS FILE IS AUTO-GENERATED - DO NOT EDIT ###
layout: page
title: Little Cottonwood Canyon, Utah Climbing Weather - Current, Past, and Forecasted
title_override: Little Cottonwood Canyon<br /><small>Climbing Weather</small>
description: A lightweight weather report for Little Cottonwood Canyon, Utah. Optimized for slow internet connections.
js_includes:
  - weather.js
---

<section class="measure center lh-copy f5-ns f6 ph2 mv4" style="text-align: justify;">
<strong>"Is it dry?"</strong>, an oft-repeated, age-old question. Here are real-time,
precipitation-focused reports of current, past, and forecasted climbing weather for Little Cottonwood Canyon, Utah.
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
<section id="weather" data-crag="little-cottonwood-canyon-utah" class="mv4-ns mv3 ph2 center"></section>
<section id="nearby" class="tc lh-copy">
  <h3>Nearby Crags</h3>
<a class="nowrap no-underline fancy-link relative light-red mh3" href="/crags/moab-utah-weather.html">Moab</a>
<a class="nowrap no-underline fancy-link relative light-red mh3" href="/crags/city-of-rocks-idaho-weather.html">City of Rocks</a>
</section>
<section id="nearby" class="tc lh-copy">
  <h3>Other Metros</h3>
  <select class="ma1 bg-near-white pa2" id="stateSel">
    <option value="Texas">Texas</option>
    <option value="Washington">Washington</option>
    <option value="Colorado">Colorado</option>
    <option value="Tennessee">Tennessee</option>
    <option value="Utah" selected>Utah</option>
    <option value="California">California</option>
  </select>
  <select class="ma1 bg-near-white pa2" id="citySel">
    <option value="Salt Lake City" selected>Salt Lake City</option>
  </select>
  <a id="selectMetro" class="f6 link dim ph3 pv2 ma1 dib white bg-light-red" href="/crags/salt-lake-city-utah-weather.html">Select Metro</a>
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
  var weekly_SLC_102_165 = {"updated":"2023-12-09T21:23:24+00:00","units":"us","forecastGenerator":"BaselineForecastGenerator","generatedAt":"2023-12-10T08:32:27+00:00","updateTime":"2023-12-09T21:23:24+00:00","validTimes":"2023-12-09T15:00:00+00:00/P7DT13H","elevation":{"unitCode":"wmoUnit:m","value":1827.8856},"periods":[{"number":1,"name":"Overnight","startTime":"2023-12-10T01:00:00-07:00","endTime":"2023-12-10T06:00:00-07:00","isDaytime":false,"temperature":20,"temperatureUnit":"F","temperatureTrend":"rising","probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":-12.777777777777779},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":55},"windSpeed":"8 mph","windDirection":"SE","icon":"https://api.weather.gov/icons/land/night/sct?size=medium","shortForecast":"Partly Cloudy","detailedForecast":"Partly cloudy. Low around 20, with temperatures rising to around 26 overnight. Southeast wind around 8 mph."},{"number":2,"name":"Sunday","startTime":"2023-12-10T06:00:00-07:00","endTime":"2023-12-10T18:00:00-07:00","isDaytime":true,"temperature":41,"temperatureUnit":"F","temperatureTrend":"falling","probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":-6.111111111111111},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":53},"windSpeed":"7 mph","windDirection":"SSE","icon":"https://api.weather.gov/icons/land/day/bkn?size=medium","shortForecast":"Partly Sunny","detailedForecast":"Partly sunny. High near 41, with temperatures falling to around 38 in the afternoon. South southeast wind around 7 mph."},{"number":3,"name":"Sunday Night","startTime":"2023-12-10T18:00:00-07:00","endTime":"2023-12-11T06:00:00-07:00","isDaytime":false,"temperature":31,"temperatureUnit":"F","temperatureTrend":"rising","probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":-6.666666666666667},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":53},"windSpeed":"6 mph","windDirection":"SE","icon":"https://api.weather.gov/icons/land/night/bkn?size=medium","shortForecast":"Mostly Cloudy","detailedForecast":"Mostly cloudy. Low around 31, with temperatures rising to around 33 overnight. Southeast wind around 6 mph."},{"number":4,"name":"Monday","startTime":"2023-12-11T06:00:00-07:00","endTime":"2023-12-11T18:00:00-07:00","isDaytime":true,"temperature":42,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":-2.2222222222222223},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":64},"windSpeed":"2 to 6 mph","windDirection":"SE","icon":"https://api.weather.gov/icons/land/day/sct?size=medium","shortForecast":"Mostly Sunny","detailedForecast":"Mostly sunny, with a high near 42. Southeast wind 2 to 6 mph."},{"number":5,"name":"Monday Night","startTime":"2023-12-11T18:00:00-07:00","endTime":"2023-12-12T06:00:00-07:00","isDaytime":false,"temperature":29,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":-3.888888888888889},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":69},"windSpeed":"5 mph","windDirection":"NNE","icon":"https://api.weather.gov/icons/land/night/sct?size=medium","shortForecast":"Partly Cloudy","detailedForecast":"Partly cloudy, with a low around 29. North northeast wind around 5 mph."},{"number":6,"name":"Tuesday","startTime":"2023-12-12T06:00:00-07:00","endTime":"2023-12-12T18:00:00-07:00","isDaytime":true,"temperature":37,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":20},"dewpoint":{"unitCode":"wmoUnit:degC","value":-1.6666666666666667},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":77},"windSpeed":"3 to 7 mph","windDirection":"N","icon":"https://api.weather.gov/icons/land/day/snow,20?size=medium","shortForecast":"Slight Chance Light Snow","detailedForecast":"A slight chance of snow between 11am and 5pm. Partly sunny, with a high near 37. Chance of precipitation is 20%."},{"number":7,"name":"Tuesday Night","startTime":"2023-12-12T18:00:00-07:00","endTime":"2023-12-13T06:00:00-07:00","isDaytime":false,"temperature":27,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":-2.7777777777777777},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":78},"windSpeed":"7 mph","windDirection":"N","icon":"https://api.weather.gov/icons/land/night/bkn?size=medium","shortForecast":"Mostly Cloudy","detailedForecast":"Mostly cloudy, with a low around 27."},{"number":8,"name":"Wednesday","startTime":"2023-12-13T06:00:00-07:00","endTime":"2023-12-13T18:00:00-07:00","isDaytime":true,"temperature":38,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":-2.7777777777777777},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":77},"windSpeed":"7 mph","windDirection":"NNE","icon":"https://api.weather.gov/icons/land/day/sct?size=medium","shortForecast":"Mostly Sunny","detailedForecast":"Mostly sunny, with a high near 38."},{"number":9,"name":"Wednesday Night","startTime":"2023-12-13T18:00:00-07:00","endTime":"2023-12-14T06:00:00-07:00","isDaytime":false,"temperature":27,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":-3.888888888888889},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":74},"windSpeed":"6 mph","windDirection":"ENE","icon":"https://api.weather.gov/icons/land/night/sct?size=medium","shortForecast":"Partly Cloudy","detailedForecast":"Partly cloudy, with a low around 27."},{"number":10,"name":"Thursday","startTime":"2023-12-14T06:00:00-07:00","endTime":"2023-12-14T18:00:00-07:00","isDaytime":true,"temperature":39,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":-2.7777777777777777},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":71},"windSpeed":"6 mph","windDirection":"SE","icon":"https://api.weather.gov/icons/land/day/sct?size=medium","shortForecast":"Mostly Sunny","detailedForecast":"Mostly sunny, with a high near 39."},{"number":11,"name":"Thursday Night","startTime":"2023-12-14T18:00:00-07:00","endTime":"2023-12-15T06:00:00-07:00","isDaytime":false,"temperature":27,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":-4.444444444444445},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":68},"windSpeed":"6 mph","windDirection":"ENE","icon":"https://api.weather.gov/icons/land/night/sct?size=medium","shortForecast":"Partly Cloudy","detailedForecast":"Partly cloudy, with a low around 27."},{"number":12,"name":"Friday","startTime":"2023-12-15T06:00:00-07:00","endTime":"2023-12-15T18:00:00-07:00","isDaytime":true,"temperature":40,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":-3.888888888888889},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":66},"windSpeed":"6 mph","windDirection":"NE","icon":"https://api.weather.gov/icons/land/day/sct?size=medium","shortForecast":"Mostly Sunny","detailedForecast":"Mostly sunny, with a high near 40."},{"number":13,"name":"Friday Night","startTime":"2023-12-15T18:00:00-07:00","endTime":"2023-12-16T06:00:00-07:00","isDaytime":false,"temperature":27,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":-5},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":64},"windSpeed":"7 mph","windDirection":"E","icon":"https://api.weather.gov/icons/land/night/sct?size=medium","shortForecast":"Partly Cloudy","detailedForecast":"Partly cloudy, with a low around 27."},{"number":14,"name":"Saturday","startTime":"2023-12-16T06:00:00-07:00","endTime":"2023-12-16T18:00:00-07:00","isDaytime":true,"temperature":42,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":-4.444444444444445},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":60},"windSpeed":"7 mph","windDirection":"SE","icon":"https://api.weather.gov/icons/land/day/sct?size=medium","shortForecast":"Mostly Sunny","detailedForecast":"Mostly sunny, with a high near 42."}]}
  var hourly_SLC_102_165 = false
  var crags_config = [
  {
    "name": "Little Cottonwood Canyon",
    "note": "Primarily quartz monzonite (white granite, essentially)",
    "mountainProject": "https://www.mountainproject.com/area/105739277/little-cottonwood-canyon",
    "station": "KSLC",
    "office": "SLC/102,165",
    "coordinates": [
      -111.775,
      40.5727
    ]
  }
]</script>

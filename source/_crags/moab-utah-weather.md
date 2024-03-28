---
### THIS FILE IS AUTO-GENERATED - DO NOT EDIT ###
layout: page
title: Moab, Utah Climbing Weather - Current, Past, and Forecasted
title_override: Moab<br /><small>Climbing Weather</small>
description: A lightweight weather report for Moab, Utah. Optimized for slow internet connections.
js_includes:
  - weather.js
---

<section class="measure center lh-copy f5-ns f6 ph2 mv4" style="text-align: justify;">
<strong>"Is it dry?"</strong>, an oft-repeated, age-old question. Here are real-time,
precipitation-focused reports of current, past, and forecasted climbing weather for Moab, Utah.
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
<section id="weather" data-crag="moab-utah" class="mv4-ns mv3 ph2 center"></section>
<section id="nearby" class="tc lh-copy">
  <h3>Nearby Crags</h3>
<a class="nowrap no-underline fancy-link relative light-red mh3" href="/crags/clear-creek-canyon-colorado-weather.html">Clear Creek Canyon</a>
<a class="nowrap no-underline fancy-link relative light-red mh3" href="/crags/staunton-state-park-colorado-weather.html">Staunton State Park</a>
<a class="nowrap no-underline fancy-link relative light-red mh3" href="/crags/lime-park-lime-creek-colorado-weather.html">Lime Park (Lime Creek)</a>
<a class="nowrap no-underline fancy-link relative light-red mh3" href="/crags/independence-pass-colorado-weather.html">Independence Pass</a>
<a class="nowrap no-underline fancy-link relative light-red mh3" href="/crags/estes-park-valley-colorado-weather.html">Estes Park Valley</a>
<a class="nowrap no-underline fancy-link relative light-red mh3" href="/crags/gunnison-colorado-weather.html">Gunnison</a>
<a class="nowrap no-underline fancy-link relative light-red mh3" href="/crags/little-cottonwood-canyon-utah-weather.html">Little Cottonwood Canyon</a>
<a class="nowrap no-underline fancy-link relative light-red mh3" href="/crags/city-of-rocks-idaho-weather.html">City of Rocks</a>
</section>
<section id="nearby" class="tc lh-copy">
  <h3>Other Metros</h3>
  <select class="ma1 bg-near-white pa2" id="stateSel">
    <option value="Texas">Texas</option>
    <option value="Washington">Washington</option>
    <option value="Colorado" selected>Colorado</option>
    <option value="Tennessee">Tennessee</option>
    <option value="Utah">Utah</option>
    <option value="California">California</option>
  </select>
  <select class="ma1 bg-near-white pa2" id="citySel">
    <option value="Denver" selected>Denver</option>
  </select>
  <a id="selectMetro" class="f6 link dim ph3 pv2 ma1 dib white bg-light-red" href="/crags/denver-colorado-weather.html">Select Metro</a>
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
  var weekly_GJT_60_82 = {"updated":"2024-03-28T05:12:50+00:00","units":"us","forecastGenerator":"BaselineForecastGenerator","generatedAt":"2024-03-28T07:47:43+00:00","updateTime":"2024-03-28T05:12:50+00:00","validTimes":"2024-03-27T23:00:00+00:00/P7DT2H","elevation":{"unitCode":"wmoUnit:m","value":1414.8816},"periods":[{"number":1,"name":"Overnight","startTime":"2024-03-28T01:00:00-06:00","endTime":"2024-03-28T06:00:00-06:00","isDaytime":false,"temperature":39,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":-7.777777777777778},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":41},"windSpeed":"10 to 15 mph","windDirection":"SE","icon":"https://api.weather.gov/icons/land/night/sct?size=medium","shortForecast":"Partly Cloudy","detailedForecast":"Partly cloudy, with a low around 39. Southeast wind 10 to 15 mph."},{"number":2,"name":"Thursday","startTime":"2024-03-28T06:00:00-06:00","endTime":"2024-03-28T18:00:00-06:00","isDaytime":true,"temperature":64,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":-4.444444444444445},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":41},"windSpeed":"15 to 20 mph","windDirection":"S","icon":"https://api.weather.gov/icons/land/day/bkn?size=medium","shortForecast":"Mostly Cloudy","detailedForecast":"Mostly cloudy, with a high near 64. South wind 15 to 20 mph, with gusts as high as 35 mph."},{"number":3,"name":"Thursday Night","startTime":"2024-03-28T18:00:00-06:00","endTime":"2024-03-29T06:00:00-06:00","isDaytime":false,"temperature":45,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":-1.6666666666666667},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":51},"windSpeed":"10 to 20 mph","windDirection":"SSW","icon":"https://api.weather.gov/icons/land/night/bkn?size=medium","shortForecast":"Mostly Cloudy","detailedForecast":"Mostly cloudy, with a low around 45. South southwest wind 10 to 20 mph."},{"number":4,"name":"Friday","startTime":"2024-03-29T06:00:00-06:00","endTime":"2024-03-29T18:00:00-06:00","isDaytime":true,"temperature":64,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":20},"dewpoint":{"unitCode":"wmoUnit:degC","value":-0.5555555555555556},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":53},"windSpeed":"10 to 20 mph","windDirection":"SSW","icon":"https://api.weather.gov/icons/land/day/rain_showers,20?size=medium","shortForecast":"Slight Chance Rain Showers","detailedForecast":"A slight chance of rain showers. Mostly cloudy, with a high near 64. South southwest wind 10 to 20 mph. Chance of precipitation is 20%."},{"number":5,"name":"Friday Night","startTime":"2024-03-29T18:00:00-06:00","endTime":"2024-03-30T06:00:00-06:00","isDaytime":false,"temperature":46,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":-2.7777777777777777},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":43},"windSpeed":"10 to 15 mph","windDirection":"S","icon":"https://api.weather.gov/icons/land/night/bkn?size=medium","shortForecast":"Mostly Cloudy","detailedForecast":"Mostly cloudy, with a low around 46. South wind 10 to 15 mph."},{"number":6,"name":"Saturday","startTime":"2024-03-30T06:00:00-06:00","endTime":"2024-03-30T18:00:00-06:00","isDaytime":true,"temperature":67,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":20},"dewpoint":{"unitCode":"wmoUnit:degC","value":-2.2222222222222223},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":44},"windSpeed":"15 to 25 mph","windDirection":"S","icon":"https://api.weather.gov/icons/land/day/wind_bkn/rain_showers,20?size=medium","shortForecast":"Mostly Cloudy then Slight Chance Rain Showers","detailedForecast":"A slight chance of rain showers after noon. Mostly cloudy, with a high near 67. Chance of precipitation is 20%."},{"number":7,"name":"Saturday Night","startTime":"2024-03-30T18:00:00-06:00","endTime":"2024-03-31T06:00:00-06:00","isDaytime":false,"temperature":46,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":30},"dewpoint":{"unitCode":"wmoUnit:degC","value":-0.5555555555555556},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":49},"windSpeed":"15 to 20 mph","windDirection":"S","icon":"https://api.weather.gov/icons/land/night/rain_showers,30?size=medium","shortForecast":"Chance Rain Showers","detailedForecast":"A chance of rain showers. Mostly cloudy, with a low around 46. Chance of precipitation is 30%."},{"number":8,"name":"Sunday","startTime":"2024-03-31T06:00:00-06:00","endTime":"2024-03-31T18:00:00-06:00","isDaytime":true,"temperature":60,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":0},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":53},"windSpeed":"20 mph","windDirection":"SSW","icon":"https://api.weather.gov/icons/land/day/rain_showers?size=medium","shortForecast":"Rain Showers Likely","detailedForecast":"Rain showers likely. Partly sunny, with a high near 60."},{"number":9,"name":"Sunday Night","startTime":"2024-03-31T18:00:00-06:00","endTime":"2024-04-01T06:00:00-06:00","isDaytime":false,"temperature":38,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":-1.6666666666666667},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":64},"windSpeed":"5 to 20 mph","windDirection":"S","icon":"https://api.weather.gov/icons/land/night/rain_showers/snow?size=medium","shortForecast":"Slight Chance Rain Showers then Slight Chance Snow Showers","detailedForecast":"A slight chance of rain showers before midnight, then a slight chance of snow showers. Mostly cloudy, with a low around 38."},{"number":10,"name":"Monday","startTime":"2024-04-01T06:00:00-06:00","endTime":"2024-04-01T18:00:00-06:00","isDaytime":true,"temperature":58,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":-1.6666666666666667},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":65},"windSpeed":"5 to 10 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/day/snow/rain_showers?size=medium","shortForecast":"Slight Chance Snow Showers then Chance Rain Showers","detailedForecast":"A slight chance of snow showers before noon, then a chance of rain showers. Mostly sunny, with a high near 58."},{"number":11,"name":"Monday Night","startTime":"2024-04-01T18:00:00-06:00","endTime":"2024-04-02T06:00:00-06:00","isDaytime":false,"temperature":35,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":-1.6666666666666667},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":66},"windSpeed":"10 mph","windDirection":"N","icon":"https://api.weather.gov/icons/land/night/few?size=medium","shortForecast":"Mostly Clear","detailedForecast":"Mostly clear, with a low around 35."},{"number":12,"name":"Tuesday","startTime":"2024-04-02T06:00:00-06:00","endTime":"2024-04-02T18:00:00-06:00","isDaytime":true,"temperature":63,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":-2.2222222222222223},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":66},"windSpeed":"10 to 15 mph","windDirection":"N","icon":"https://api.weather.gov/icons/land/day/few?size=medium","shortForecast":"Sunny","detailedForecast":"Sunny, with a high near 63."},{"number":13,"name":"Tuesday Night","startTime":"2024-04-02T18:00:00-06:00","endTime":"2024-04-03T06:00:00-06:00","isDaytime":false,"temperature":39,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":-1.6666666666666667},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":55},"windSpeed":"5 to 15 mph","windDirection":"ENE","icon":"https://api.weather.gov/icons/land/night/few?size=medium","shortForecast":"Mostly Clear","detailedForecast":"Mostly clear, with a low around 39."},{"number":14,"name":"Wednesday","startTime":"2024-04-03T06:00:00-06:00","endTime":"2024-04-03T18:00:00-06:00","isDaytime":true,"temperature":69,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":-1.1111111111111112},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":55},"windSpeed":"5 to 10 mph","windDirection":"N","icon":"https://api.weather.gov/icons/land/day/few?size=medium","shortForecast":"Sunny","detailedForecast":"Sunny, with a high near 69."}]}
  var hourly_GJT_60_82 = false
  var crags_config = [
  {
    "name": "Moab",
    "note": "Soft sandstone in a desert environment.",
    "mountainProject": "https://www.mountainproject.com/area/105716711/moab-area",
    "station": "MOAB",
    "office": "GJT/60,82",
    "coordinates": [
      -109.550,
      38.573
    ]
  }
]</script>

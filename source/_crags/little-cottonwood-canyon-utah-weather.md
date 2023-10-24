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
  var weekly_SLC_102_165 = {"updated":"2023-10-24T03:45:07+00:00","units":"us","forecastGenerator":"BaselineForecastGenerator","generatedAt":"2023-10-24T08:32:33+00:00","updateTime":"2023-10-24T03:45:07+00:00","validTimes":"2023-10-23T21:00:00+00:00/P7DT7H","elevation":{"unitCode":"wmoUnit:m","value":1827.8856},"periods":[{"number":1,"name":"Overnight","startTime":"2023-10-24T02:00:00-06:00","endTime":"2023-10-24T06:00:00-06:00","isDaytime":false,"temperature":46,"temperatureUnit":"F","temperatureTrend":"rising","probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":4.444444444444445},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":74},"windSpeed":"6 mph","windDirection":"NE","icon":"https://api.weather.gov/icons/land/night/few?size=medium","shortForecast":"Mostly Clear","detailedForecast":"Mostly clear. Low around 46, with temperatures rising to around 48 overnight. Northeast wind around 6 mph."},{"number":2,"name":"Tuesday","startTime":"2023-10-24T06:00:00-06:00","endTime":"2023-10-24T18:00:00-06:00","isDaytime":true,"temperature":63,"temperatureUnit":"F","temperatureTrend":"falling","probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":5.555555555555555},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":77},"windSpeed":"2 to 8 mph","windDirection":"SW","icon":"https://api.weather.gov/icons/land/day/sct?size=medium","shortForecast":"Mostly Sunny","detailedForecast":"Mostly sunny. High near 63, with temperatures falling to around 61 in the afternoon. Southwest wind 2 to 8 mph."},{"number":3,"name":"Tuesday Night","startTime":"2023-10-24T18:00:00-06:00","endTime":"2023-10-25T06:00:00-06:00","isDaytime":false,"temperature":50,"temperatureUnit":"F","temperatureTrend":"rising","probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":4.444444444444445},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":53},"windSpeed":"6 to 21 mph","windDirection":"SSE","icon":"https://api.weather.gov/icons/land/night/wind_few?size=medium","shortForecast":"Mostly Clear","detailedForecast":"Mostly clear. Low around 50, with temperatures rising to around 52 overnight. South southeast wind 6 to 21 mph."},{"number":4,"name":"Wednesday","startTime":"2023-10-25T06:00:00-06:00","endTime":"2023-10-25T18:00:00-06:00","isDaytime":true,"temperature":67,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":2.2222222222222223},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":50},"windSpeed":"21 to 25 mph","windDirection":"S","icon":"https://api.weather.gov/icons/land/day/wind_sct?size=medium","shortForecast":"Mostly Sunny","detailedForecast":"Mostly sunny, with a high near 67. South wind 21 to 25 mph."},{"number":5,"name":"Wednesday Night","startTime":"2023-10-25T18:00:00-06:00","endTime":"2023-10-26T06:00:00-06:00","isDaytime":false,"temperature":41,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":60},"dewpoint":{"unitCode":"wmoUnit:degC","value":2.2222222222222223},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":60},"windSpeed":"18 to 24 mph","windDirection":"S","icon":"https://api.weather.gov/icons/land/night/rain,30/rain,60?size=medium","shortForecast":"Light Rain Likely","detailedForecast":"Rain likely. Mostly cloudy, with a low around 41. South wind 18 to 24 mph, with gusts as high as 37 mph. Chance of precipitation is 60%."},{"number":6,"name":"Thursday","startTime":"2023-10-26T06:00:00-06:00","endTime":"2023-10-26T18:00:00-06:00","isDaytime":true,"temperature":49,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":80},"dewpoint":{"unitCode":"wmoUnit:degC","value":2.2222222222222223},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":81},"windSpeed":"12 to 22 mph","windDirection":"WSW","icon":"https://api.weather.gov/icons/land/day/rain,80/rain,40?size=medium","shortForecast":"Rain","detailedForecast":"Rain. Mostly cloudy, with a high near 49. Chance of precipitation is 80%."},{"number":7,"name":"Thursday Night","startTime":"2023-10-26T18:00:00-06:00","endTime":"2023-10-27T06:00:00-06:00","isDaytime":false,"temperature":32,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":-0.5555555555555556},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":69},"windSpeed":"9 mph","windDirection":"NE","icon":"https://api.weather.gov/icons/land/night/sct?size=medium","shortForecast":"Partly Cloudy","detailedForecast":"Partly cloudy, with a low around 32."},{"number":8,"name":"Friday","startTime":"2023-10-27T06:00:00-06:00","endTime":"2023-10-27T18:00:00-06:00","isDaytime":true,"temperature":49,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":3.3333333333333335},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":73},"windSpeed":"10 mph","windDirection":"S","icon":"https://api.weather.gov/icons/land/day/snow?size=medium","shortForecast":"Chance Rain And Snow","detailedForecast":"A chance of rain and snow. Partly sunny, with a high near 49."},{"number":9,"name":"Friday Night","startTime":"2023-10-27T18:00:00-06:00","endTime":"2023-10-28T06:00:00-06:00","isDaytime":false,"temperature":37,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":3.3333333333333335},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":79},"windSpeed":"10 mph","windDirection":"NNE","icon":"https://api.weather.gov/icons/land/night/rain?size=medium","shortForecast":"Chance Light Rain","detailedForecast":"A chance of rain. Mostly cloudy, with a low around 37."},{"number":10,"name":"Saturday","startTime":"2023-10-28T06:00:00-06:00","endTime":"2023-10-28T18:00:00-06:00","isDaytime":true,"temperature":45,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":2.2222222222222223},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":85},"windSpeed":"7 to 12 mph","windDirection":"NW","icon":"https://api.weather.gov/icons/land/day/snow?size=medium","shortForecast":"Chance Rain And Snow","detailedForecast":"A chance of rain and snow. Mostly cloudy, with a high near 45."},{"number":11,"name":"Saturday Night","startTime":"2023-10-28T18:00:00-06:00","endTime":"2023-10-29T06:00:00-06:00","isDaytime":false,"temperature":30,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":0.5555555555555556},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":72},"windSpeed":"12 mph","windDirection":"NNW","icon":"https://api.weather.gov/icons/land/night/snow?size=medium","shortForecast":"Chance Light Snow","detailedForecast":"A chance of snow. Mostly cloudy, with a low around 30. New snow accumulation of less than one inch possible."},{"number":12,"name":"Sunday","startTime":"2023-10-29T06:00:00-06:00","endTime":"2023-10-29T18:00:00-06:00","isDaytime":true,"temperature":40,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":-2.2222222222222223},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":80},"windSpeed":"12 mph","windDirection":"NNW","icon":"https://api.weather.gov/icons/land/day/snow?size=medium","shortForecast":"Chance Light Snow","detailedForecast":"A chance of snow. Partly sunny, with a high near 40. New snow accumulation of less than half an inch possible."},{"number":13,"name":"Sunday Night","startTime":"2023-10-29T18:00:00-06:00","endTime":"2023-10-30T06:00:00-06:00","isDaytime":false,"temperature":26,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":-3.3333333333333335},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":64},"windSpeed":"8 to 12 mph","windDirection":"N","icon":"https://api.weather.gov/icons/land/night/snow?size=medium","shortForecast":"Chance Light Snow","detailedForecast":"A chance of snow. Mostly cloudy, with a low around 26."},{"number":14,"name":"Monday","startTime":"2023-10-30T06:00:00-06:00","endTime":"2023-10-30T18:00:00-06:00","isDaytime":true,"temperature":42,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":-3.3333333333333335},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":71},"windSpeed":"9 mph","windDirection":"NNW","icon":"https://api.weather.gov/icons/land/day/snow/sct?size=medium","shortForecast":"Slight Chance Light Snow then Mostly Sunny","detailedForecast":"A slight chance of snow before noon. Mostly sunny, with a high near 42."}]}
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

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
  var weekly_SLC_102_165 = {"updated":"2023-08-17T21:22:06+00:00","units":"us","forecastGenerator":"BaselineForecastGenerator","generatedAt":"2023-08-18T08:32:22+00:00","updateTime":"2023-08-17T21:22:06+00:00","validTimes":"2023-08-17T15:00:00+00:00/P6DT22H","elevation":{"unitCode":"wmoUnit:m","value":1827.8856},"periods":[{"number":1,"name":"Overnight","startTime":"2023-08-18T02:00:00-06:00","endTime":"2023-08-18T06:00:00-06:00","isDaytime":false,"temperature":69,"temperatureUnit":"F","temperatureTrend":"rising","probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":30},"dewpoint":{"unitCode":"wmoUnit:degC","value":11.666666666666666},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":51},"windSpeed":"14 mph","windDirection":"SE","icon":"https://api.weather.gov/icons/land/night/tsra_hi,30?size=medium","shortForecast":"Chance Showers And Thunderstorms","detailedForecast":"A chance of showers and thunderstorms. Mostly cloudy. Low around 69, with temperatures rising to around 72 overnight. Southeast wind around 14 mph. Chance of precipitation is 30%."},{"number":2,"name":"Friday","startTime":"2023-08-18T06:00:00-06:00","endTime":"2023-08-18T18:00:00-06:00","isDaytime":true,"temperature":89,"temperatureUnit":"F","temperatureTrend":"falling","probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":40},"dewpoint":{"unitCode":"wmoUnit:degC","value":12.222222222222221},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":52},"windSpeed":"10 to 15 mph","windDirection":"S","icon":"https://api.weather.gov/icons/land/day/sct/tsra_hi,40?size=medium","shortForecast":"Mostly Sunny then Chance Showers And Thunderstorms","detailedForecast":"A chance of showers and thunderstorms between noon and 3pm, then a slight chance of showers and thunderstorms. Mostly sunny. High near 89, with temperatures falling to around 87 in the afternoon. South wind 10 to 15 mph. Chance of precipitation is 40%."},{"number":3,"name":"Friday Night","startTime":"2023-08-18T18:00:00-06:00","endTime":"2023-08-19T06:00:00-06:00","isDaytime":false,"temperature":69,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":20},"dewpoint":{"unitCode":"wmoUnit:degC","value":10.555555555555555},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":48},"windSpeed":"12 to 16 mph","windDirection":"S","icon":"https://api.weather.gov/icons/land/night/tsra_sct,20/bkn?size=medium","shortForecast":"Slight Chance Showers And Thunderstorms then Mostly Cloudy","detailedForecast":"A slight chance of showers and thunderstorms before midnight. Mostly cloudy, with a low around 69. South wind 12 to 16 mph. Chance of precipitation is 20%."},{"number":4,"name":"Saturday","startTime":"2023-08-19T06:00:00-06:00","endTime":"2023-08-19T18:00:00-06:00","isDaytime":true,"temperature":84,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":40},"dewpoint":{"unitCode":"wmoUnit:degC","value":13.333333333333334},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":50},"windSpeed":"10 to 17 mph","windDirection":"S","icon":"https://api.weather.gov/icons/land/day/rain_showers,20/tsra_sct,40?size=medium","shortForecast":"Slight Chance Rain Showers then Chance Showers And Thunderstorms","detailedForecast":"A slight chance of rain showers before noon, then a chance of showers and thunderstorms. Partly sunny, with a high near 84. South wind 10 to 17 mph. Chance of precipitation is 40%."},{"number":5,"name":"Saturday Night","startTime":"2023-08-19T18:00:00-06:00","endTime":"2023-08-20T06:00:00-06:00","isDaytime":false,"temperature":68,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":40},"dewpoint":{"unitCode":"wmoUnit:degC","value":13.333333333333334},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":55},"windSpeed":"7 to 10 mph","windDirection":"SSE","icon":"https://api.weather.gov/icons/land/night/tsra,40/tsra,20?size=medium","shortForecast":"Chance Showers And Thunderstorms","detailedForecast":"A chance of showers and thunderstorms. Mostly cloudy, with a low around 68. South southeast wind 7 to 10 mph. Chance of precipitation is 40%."},{"number":6,"name":"Sunday","startTime":"2023-08-20T06:00:00-06:00","endTime":"2023-08-20T18:00:00-06:00","isDaytime":true,"temperature":85,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":40},"dewpoint":{"unitCode":"wmoUnit:degC","value":13.88888888888889},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":59},"windSpeed":"7 to 18 mph","windDirection":"SSE","icon":"https://api.weather.gov/icons/land/day/rain_showers,30/tsra,40?size=medium","shortForecast":"Chance Rain Showers","detailedForecast":"A chance of rain showers before noon, then a chance of showers and thunderstorms. Mostly cloudy, with a high near 85. Chance of precipitation is 40%."},{"number":7,"name":"Sunday Night","startTime":"2023-08-20T18:00:00-06:00","endTime":"2023-08-21T06:00:00-06:00","isDaytime":false,"temperature":68,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":50},"dewpoint":{"unitCode":"wmoUnit:degC","value":13.333333333333334},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":57},"windSpeed":"8 to 13 mph","windDirection":"S","icon":"https://api.weather.gov/icons/land/night/tsra,50/tsra,30?size=medium","shortForecast":"Chance Showers And Thunderstorms","detailedForecast":"A chance of showers and thunderstorms. Mostly cloudy, with a low around 68. Chance of precipitation is 50%."},{"number":8,"name":"Monday","startTime":"2023-08-21T06:00:00-06:00","endTime":"2023-08-21T18:00:00-06:00","isDaytime":true,"temperature":86,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":13.88888888888889},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":58},"windSpeed":"8 to 18 mph","windDirection":"SSE","icon":"https://api.weather.gov/icons/land/day/rain_showers/tsra_sct?size=medium","shortForecast":"Chance Rain Showers","detailedForecast":"A chance of rain showers before noon, then a chance of showers and thunderstorms. Partly sunny, with a high near 86."},{"number":9,"name":"Monday Night","startTime":"2023-08-21T18:00:00-06:00","endTime":"2023-08-22T06:00:00-06:00","isDaytime":false,"temperature":67,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":13.333333333333334},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":60},"windSpeed":"9 to 18 mph","windDirection":"SSE","icon":"https://api.weather.gov/icons/land/night/tsra_hi/sct?size=medium","shortForecast":"Slight Chance Showers And Thunderstorms then Partly Cloudy","detailedForecast":"A slight chance of showers and thunderstorms before midnight. Partly cloudy, with a low around 67."},{"number":10,"name":"Tuesday","startTime":"2023-08-22T06:00:00-06:00","endTime":"2023-08-22T18:00:00-06:00","isDaytime":true,"temperature":82,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":16.11111111111111},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":62},"windSpeed":"8 to 14 mph","windDirection":"S","icon":"https://api.weather.gov/icons/land/day/bkn/tsra_hi?size=medium","shortForecast":"Partly Sunny then Chance Showers And Thunderstorms","detailedForecast":"A chance of showers and thunderstorms after noon. Partly sunny, with a high near 82."},{"number":11,"name":"Tuesday Night","startTime":"2023-08-22T18:00:00-06:00","endTime":"2023-08-23T06:00:00-06:00","isDaytime":false,"temperature":66,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":14.444444444444445},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":59},"windSpeed":"8 to 14 mph","windDirection":"SE","icon":"https://api.weather.gov/icons/land/night/tsra_hi?size=medium","shortForecast":"Chance Showers And Thunderstorms","detailedForecast":"A chance of showers and thunderstorms. Mostly cloudy, with a low around 66."},{"number":12,"name":"Wednesday","startTime":"2023-08-23T06:00:00-06:00","endTime":"2023-08-23T18:00:00-06:00","isDaytime":true,"temperature":83,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":16.666666666666668},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":60},"windSpeed":"8 to 12 mph","windDirection":"SSE","icon":"https://api.weather.gov/icons/land/day/rain_showers/tsra_hi?size=medium","shortForecast":"Slight Chance Rain Showers then Chance Showers And Thunderstorms","detailedForecast":"A slight chance of rain showers before noon, then a chance of showers and thunderstorms. Partly sunny, with a high near 83."},{"number":13,"name":"Wednesday Night","startTime":"2023-08-23T18:00:00-06:00","endTime":"2023-08-24T06:00:00-06:00","isDaytime":false,"temperature":66,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":16.11111111111111},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":68},"windSpeed":"8 to 12 mph","windDirection":"S","icon":"https://api.weather.gov/icons/land/night/tsra_hi?size=medium","shortForecast":"Chance Showers And Thunderstorms","detailedForecast":"A chance of showers and thunderstorms. Mostly cloudy, with a low around 66."},{"number":14,"name":"Thursday","startTime":"2023-08-24T06:00:00-06:00","endTime":"2023-08-24T18:00:00-06:00","isDaytime":true,"temperature":80,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":13.88888888888889},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":69},"windSpeed":"7 to 12 mph","windDirection":"S","icon":"https://api.weather.gov/icons/land/day/rain_showers/tsra_sct?size=medium","shortForecast":"Slight Chance Rain Showers then Chance Showers And Thunderstorms","detailedForecast":"A slight chance of rain showers before noon, then a chance of showers and thunderstorms. Partly sunny, with a high near 80."}]}
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

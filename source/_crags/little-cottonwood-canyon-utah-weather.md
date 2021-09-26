---
### THIS FILE IS AUTO-GENERATED - DO NOT EDIT ###
layout: page
title: Little Cottonwood Canyon, Utah Climbing Weather - Current, Past, and Forecasted Report
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
  var weekly_SLC_102_165 = {"updated":"2021-09-26T08:15:10+00:00","units":"us","forecastGenerator":"BaselineForecastGenerator","generatedAt":"2021-09-26T08:43:39+00:00","updateTime":"2021-09-26T08:15:10+00:00","validTimes":"2021-09-26T02:00:00+00:00/P6DT23H","elevation":{"value":1872.0816,"unitCode":"unit:m"},"periods":[{"number":1,"name":"Overnight","startTime":"2021-09-26T02:00:00-06:00","endTime":"2021-09-26T06:00:00-06:00","isDaytime":false,"temperature":57,"temperatureUnit":"F","temperatureTrend":"rising","windSpeed":"9 mph","windDirection":"SSW","icon":"https://api.weather.gov/icons/land/night/few?size=medium","shortForecast":"Mostly Clear","detailedForecast":"Mostly clear. Low around 57, with temperatures rising to around 60 overnight. South southwest wind around 9 mph."},{"number":2,"name":"Sunday","startTime":"2021-09-26T06:00:00-06:00","endTime":"2021-09-26T18:00:00-06:00","isDaytime":true,"temperature":79,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"6 to 9 mph","windDirection":"SSW","icon":"https://api.weather.gov/icons/land/day/few?size=medium","shortForecast":"Sunny","detailedForecast":"Sunny, with a high near 79. South southwest wind 6 to 9 mph."},{"number":3,"name":"Sunday Night","startTime":"2021-09-26T18:00:00-06:00","endTime":"2021-09-27T06:00:00-06:00","isDaytime":false,"temperature":58,"temperatureUnit":"F","temperatureTrend":"rising","windSpeed":"8 mph","windDirection":"E","icon":"https://api.weather.gov/icons/land/night/few?size=medium","shortForecast":"Mostly Clear","detailedForecast":"Mostly clear. Low around 58, with temperatures rising to around 60 overnight. East wind around 8 mph."},{"number":4,"name":"Monday","startTime":"2021-09-27T06:00:00-06:00","endTime":"2021-09-27T18:00:00-06:00","isDaytime":true,"temperature":80,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"8 mph","windDirection":"S","icon":"https://api.weather.gov/icons/land/day/smoke/few?size=medium","shortForecast":"Patchy Smoke then Sunny","detailedForecast":"Patchy smoke before noon. Sunny, with a high near 80. South wind around 8 mph."},{"number":5,"name":"Monday Night","startTime":"2021-09-27T18:00:00-06:00","endTime":"2021-09-28T06:00:00-06:00","isDaytime":false,"temperature":58,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"7 to 10 mph","windDirection":"E","icon":"https://api.weather.gov/icons/land/night/few?size=medium","shortForecast":"Mostly Clear","detailedForecast":"Mostly clear, with a low around 58. East wind 7 to 10 mph."},{"number":6,"name":"Tuesday","startTime":"2021-09-28T06:00:00-06:00","endTime":"2021-09-28T18:00:00-06:00","isDaytime":true,"temperature":71,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"13 mph","windDirection":"SSW","icon":"https://api.weather.gov/icons/land/day/sct/rain_showers,40?size=medium","shortForecast":"Mostly Sunny then Chance Rain Showers","detailedForecast":"A chance of rain showers after noon. Mostly sunny, with a high near 71. Chance of precipitation is 40%."},{"number":7,"name":"Tuesday Night","startTime":"2021-09-28T18:00:00-06:00","endTime":"2021-09-29T06:00:00-06:00","isDaytime":false,"temperature":44,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"8 to 13 mph","windDirection":"NNW","icon":"https://api.weather.gov/icons/land/night/rain_showers,60/rain_showers,50?size=medium","shortForecast":"Rain Showers Likely","detailedForecast":"Rain showers likely. Mostly cloudy, with a low around 44. Chance of precipitation is 60%."},{"number":8,"name":"Wednesday","startTime":"2021-09-29T06:00:00-06:00","endTime":"2021-09-29T18:00:00-06:00","isDaytime":true,"temperature":55,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"8 mph","windDirection":"NW","icon":"https://api.weather.gov/icons/land/day/rain_showers?size=medium","shortForecast":"Chance Rain Showers","detailedForecast":"A chance of rain showers. Mostly cloudy, with a high near 55."},{"number":9,"name":"Wednesday Night","startTime":"2021-09-29T18:00:00-06:00","endTime":"2021-09-30T06:00:00-06:00","isDaytime":false,"temperature":43,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"8 mph","windDirection":"NNE","icon":"https://api.weather.gov/icons/land/night/sct?size=medium","shortForecast":"Partly Cloudy","detailedForecast":"Partly cloudy, with a low around 43."},{"number":10,"name":"Thursday","startTime":"2021-09-30T06:00:00-06:00","endTime":"2021-09-30T18:00:00-06:00","isDaytime":true,"temperature":63,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"8 mph","windDirection":"N","icon":"https://api.weather.gov/icons/land/day/few?size=medium","shortForecast":"Sunny","detailedForecast":"Sunny, with a high near 63."},{"number":11,"name":"Thursday Night","startTime":"2021-09-30T18:00:00-06:00","endTime":"2021-10-01T06:00:00-06:00","isDaytime":false,"temperature":48,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"7 mph","windDirection":"NNE","icon":"https://api.weather.gov/icons/land/night/few?size=medium","shortForecast":"Mostly Clear","detailedForecast":"Mostly clear, with a low around 48."},{"number":12,"name":"Friday","startTime":"2021-10-01T06:00:00-06:00","endTime":"2021-10-01T18:00:00-06:00","isDaytime":true,"temperature":66,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"3 to 7 mph","windDirection":"S","icon":"https://api.weather.gov/icons/land/day/sct/rain_showers?size=medium","shortForecast":"Mostly Sunny then Slight Chance Rain Showers","detailedForecast":"A slight chance of rain showers after noon. Mostly sunny, with a high near 66."},{"number":13,"name":"Friday Night","startTime":"2021-10-01T18:00:00-06:00","endTime":"2021-10-02T06:00:00-06:00","isDaytime":false,"temperature":50,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"6 to 9 mph","windDirection":"NE","icon":"https://api.weather.gov/icons/land/night/rain_showers/sct?size=medium","shortForecast":"Slight Chance Rain Showers then Partly Cloudy","detailedForecast":"A slight chance of rain showers before midnight. Partly cloudy, with a low around 50."},{"number":14,"name":"Saturday","startTime":"2021-10-02T06:00:00-06:00","endTime":"2021-10-02T18:00:00-06:00","isDaytime":true,"temperature":66,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"8 mph","windDirection":"S","icon":"https://api.weather.gov/icons/land/day/sct/rain_showers?size=medium","shortForecast":"Mostly Sunny then Slight Chance Rain Showers","detailedForecast":"A slight chance of rain showers after noon. Mostly sunny, with a high near 66."}]}
  var hourly_SLC_102_165 = {"correlationId":"3ae189e","title":"Unexpected Problem","type":"https://api.weather.gov/problems/UnexpectedProblem","status":500,"detail":"An unexpected problem has occurred.","instance":"https://api.weather.gov/requests/3ae189e"}
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

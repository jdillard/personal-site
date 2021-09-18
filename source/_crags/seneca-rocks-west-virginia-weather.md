---
### THIS FILE IS AUTO-GENERATED - DO NOT EDIT ###
layout: page
title: Seneca Rocks, West Virginia Climbing Weather - Current, Past, and Forecasted Report
title_override: Seneca Rocks<br /><small>Climbing Weather</small>
description: A lightweight weather report for Seneca Rocks, West Virginia. Optimized for slow internet connections.
js_includes:
  - weather.js
---

<section class="measure center lh-copy f5-ns f6 ph2 mv4" style="text-align: justify;">
<strong>"Is it dry?"</strong>, an oft-repeated, age-old question. Here are real-time,
precipitation-focused reports of current, past, and forecasted climbing weather for Seneca Rocks, West Virginia.
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
<section id="weather" data-crag="seneca-rocks-west-virginia" class="mv4-ns mv3 ph2 center"></section>
<section id="nearby" class="tc lh-copy">
  <h3>Nearby Crags</h3>
<a class="nowrap no-underline fancy-link relative light-red mh3" href="/crags/jackson-falls-illinois-weather.html">Jackson Falls</a>
<a class="nowrap no-underline fancy-link relative light-red mh3" href="/crags/red-river-gorge-kentucky-weather.html">Red River Gorge</a>
<a class="nowrap no-underline fancy-link relative light-red mh3" href="/crags/foster-falls-tennessee-weather.html">Foster Falls</a>
</section>
<section id="nearby" class="tc lh-copy">
  <h3>Other Metros</h3>
  <select class="ma1 bg-near-white pa2" id="stateSel">
    <option value="Texas">Texas</option>
    <option value="Washington">Washington</option>
    <option value="Colorado">Colorado</option>
    <option value="Tennessee" selected>Tennessee</option>
    <option value="Utah">Utah</option>
    <option value="California">California</option>
  </select>
  <select class="ma1 bg-near-white pa2" id="citySel">
    <option value="Nashville" selected>Nashville</option>
  </select>
  <a id="selectMetro" class="f6 link dim ph3 pv2 ma1 dib white bg-light-red" href="/crags/nashville-tennessee-weather.html">Select Metro</a>
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
  var weekly_LWX_14_57 = {"updated":"2021-09-18T08:31:23+00:00","units":"us","forecastGenerator":"BaselineForecastGenerator","generatedAt":"2021-09-18T08:43:51+00:00","updateTime":"2021-09-18T08:31:23+00:00","validTimes":"2021-09-18T02:00:00+00:00/P7DT23H","elevation":{"value":631.8504,"unitCode":"unit:m"},"periods":[{"number":1,"name":"Overnight","startTime":"2021-09-18T04:00:00-04:00","endTime":"2021-09-18T06:00:00-04:00","isDaytime":false,"temperature":62,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"2 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/night/fog,20?size=medium","shortForecast":"Areas Of Fog","detailedForecast":"Areas of fog. Mostly cloudy, with a low around 62. West wind around 2 mph. Chance of precipitation is 20%."},{"number":2,"name":"Saturday","startTime":"2021-09-18T06:00:00-04:00","endTime":"2021-09-18T18:00:00-04:00","isDaytime":true,"temperature":81,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"2 to 6 mph","windDirection":"N","icon":"https://api.weather.gov/icons/land/day/fog,20/tsra_hi,20?size=medium","shortForecast":"Areas Of Fog then Slight Chance Showers And Thunderstorms","detailedForecast":"Areas of fog before 10am, then isolated rain showers between noon and 2pm, then a slight chance of showers and thunderstorms. Partly sunny, with a high near 81. North wind 2 to 6 mph. Chance of precipitation is 20%. New rainfall amounts less than a tenth of an inch possible."},{"number":3,"name":"Saturday Night","startTime":"2021-09-18T18:00:00-04:00","endTime":"2021-09-19T06:00:00-04:00","isDaytime":false,"temperature":58,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"1 to 5 mph","windDirection":"NW","icon":"https://api.weather.gov/icons/land/night/tsra_hi,20/sct?size=medium","shortForecast":"Slight Chance Showers And Thunderstorms then Partly Cloudy","detailedForecast":"A slight chance of showers and thunderstorms before 8pm. Partly cloudy, with a low around 58. Northwest wind 1 to 5 mph. Chance of precipitation is 20%. New rainfall amounts less than a tenth of an inch possible."},{"number":4,"name":"Sunday","startTime":"2021-09-19T06:00:00-04:00","endTime":"2021-09-19T18:00:00-04:00","isDaytime":true,"temperature":79,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"1 to 6 mph","windDirection":"N","icon":"https://api.weather.gov/icons/land/day/sct?size=medium","shortForecast":"Mostly Sunny","detailedForecast":"Mostly sunny, with a high near 79. North wind 1 to 6 mph."},{"number":5,"name":"Sunday Night","startTime":"2021-09-19T18:00:00-04:00","endTime":"2021-09-20T06:00:00-04:00","isDaytime":false,"temperature":58,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"5 mph","windDirection":"SE","icon":"https://api.weather.gov/icons/land/night/bkn/rain_showers?size=medium","shortForecast":"Mostly Cloudy then Slight Chance Rain Showers","detailedForecast":"A slight chance of rain showers after 2am. Mostly cloudy, with a low around 58. Southeast wind around 5 mph."},{"number":6,"name":"Monday","startTime":"2021-09-20T06:00:00-04:00","endTime":"2021-09-20T18:00:00-04:00","isDaytime":true,"temperature":76,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"2 to 8 mph","windDirection":"SE","icon":"https://api.weather.gov/icons/land/day/rain_showers,20/rain_showers,30?size=medium","shortForecast":"Chance Rain Showers","detailedForecast":"A chance of rain showers. Partly sunny, with a high near 76. Chance of precipitation is 30%."},{"number":7,"name":"Monday Night","startTime":"2021-09-20T18:00:00-04:00","endTime":"2021-09-21T06:00:00-04:00","isDaytime":false,"temperature":58,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"3 to 8 mph","windDirection":"SE","icon":"https://api.weather.gov/icons/land/night/rain_showers,30/rain_showers?size=medium","shortForecast":"Chance Rain Showers","detailedForecast":"A chance of rain showers. Mostly cloudy, with a low around 58. Chance of precipitation is 30%."},{"number":8,"name":"Tuesday","startTime":"2021-09-21T06:00:00-04:00","endTime":"2021-09-21T18:00:00-04:00","isDaytime":true,"temperature":73,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"3 to 8 mph","windDirection":"SE","icon":"https://api.weather.gov/icons/land/day/rain_showers?size=medium","shortForecast":"Slight Chance Rain Showers","detailedForecast":"A slight chance of rain showers. Mostly cloudy, with a high near 73."},{"number":9,"name":"Tuesday Night","startTime":"2021-09-21T18:00:00-04:00","endTime":"2021-09-22T06:00:00-04:00","isDaytime":false,"temperature":60,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"8 mph","windDirection":"S","icon":"https://api.weather.gov/icons/land/night/rain_showers,40?size=medium","shortForecast":"Chance Rain Showers","detailedForecast":"A chance of rain showers. Mostly cloudy, with a low around 60. Chance of precipitation is 40%."},{"number":10,"name":"Wednesday","startTime":"2021-09-22T06:00:00-04:00","endTime":"2021-09-22T18:00:00-04:00","isDaytime":true,"temperature":70,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"9 mph","windDirection":"S","icon":"https://api.weather.gov/icons/land/day/rain_showers,70?size=medium","shortForecast":"Rain Showers Likely","detailedForecast":"Rain showers likely. Mostly cloudy, with a high near 70. Chance of precipitation is 70%."},{"number":11,"name":"Wednesday Night","startTime":"2021-09-22T18:00:00-04:00","endTime":"2021-09-23T06:00:00-04:00","isDaytime":false,"temperature":51,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"8 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/night/rain_showers,70/rain_showers,60?size=medium","shortForecast":"Rain Showers Likely","detailedForecast":"Rain showers likely. Mostly cloudy, with a low around 51. Chance of precipitation is 70%."},{"number":12,"name":"Thursday","startTime":"2021-09-23T06:00:00-04:00","endTime":"2021-09-23T18:00:00-04:00","isDaytime":true,"temperature":65,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"9 mph","windDirection":"NW","icon":"https://api.weather.gov/icons/land/day/rain_showers,60/rain_showers,30?size=medium","shortForecast":"Rain Showers Likely","detailedForecast":"Rain showers likely. Mostly sunny, with a high near 65. Chance of precipitation is 60%."},{"number":13,"name":"Thursday Night","startTime":"2021-09-23T18:00:00-04:00","endTime":"2021-09-24T06:00:00-04:00","isDaytime":false,"temperature":44,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"8 mph","windDirection":"NW","icon":"https://api.weather.gov/icons/land/night/rain_showers,30/few?size=medium","shortForecast":"Chance Rain Showers then Mostly Clear","detailedForecast":"A chance of rain showers before 8pm. Mostly clear, with a low around 44. Chance of precipitation is 30%."},{"number":14,"name":"Friday","startTime":"2021-09-24T06:00:00-04:00","endTime":"2021-09-24T18:00:00-04:00","isDaytime":true,"temperature":67,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"6 mph","windDirection":"NW","icon":"https://api.weather.gov/icons/land/day/few?size=medium","shortForecast":"Sunny","detailedForecast":"Sunny, with a high near 67."}]}
  var hourly_LWX_14_57 = {"correlationId":"1e7e6572","title":"Unexpected Problem","type":"https://api.weather.gov/problems/UnexpectedProblem","status":500,"detail":"An unexpected problem has occurred.","instance":"https://api.weather.gov/requests/1e7e6572"}
  var crags_config = [
  {
    "name": "Seneca Rocks",
    "note": "White Tuscarora quartzite, which feels much like sandstone.",
    "mountainProject": "https://www.mountainproject.com/area/105861910/seneca-rocks",
    "station": "KW99",
    "office": "LWX/14,57",
    "coordinates": [
      -79.373,
      38.835
    ]
  }
]</script>

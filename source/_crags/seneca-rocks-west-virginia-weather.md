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
  var weekly_LWX_14_57 = {"updated":"2021-05-25T08:31:36+00:00","units":"us","forecastGenerator":"BaselineForecastGenerator","generatedAt":"2021-05-25T09:00:15+00:00","updateTime":"2021-05-25T08:31:36+00:00","validTimes":"2021-05-25T02:00:00+00:00/P7DT23H","elevation":{"value":631.8504,"unitCode":"unit:m"},"periods":[{"number":1,"name":"Overnight","startTime":"2021-05-25T05:00:00-04:00","endTime":"2021-05-25T06:00:00-04:00","isDaytime":false,"temperature":62,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"2 mph","windDirection":"S","icon":"https://api.weather.gov/icons/land/night/rain?size=medium","shortForecast":"Areas Of Drizzle","detailedForecast":"Areas of drizzle and areas of fog. Mostly cloudy, with a low around 62. South wind around 2 mph."},{"number":2,"name":"Tuesday","startTime":"2021-05-25T06:00:00-04:00","endTime":"2021-05-25T18:00:00-04:00","isDaytime":true,"temperature":82,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"2 to 6 mph","windDirection":"SW","icon":"https://api.weather.gov/icons/land/day/tsra_hi,30/tsra_hi,50?size=medium","shortForecast":"Chance Showers And Thunderstorms","detailedForecast":"Areas of drizzle and areas of fog before 9am, then a chance of showers and thunderstorms between 11am and 2pm, then a chance of showers and thunderstorms. Mostly sunny, with a high near 82. Southwest wind 2 to 6 mph. Chance of precipitation is 50%. New rainfall amounts between a tenth and quarter of an inch possible."},{"number":3,"name":"Tuesday Night","startTime":"2021-05-25T18:00:00-04:00","endTime":"2021-05-26T06:00:00-04:00","isDaytime":false,"temperature":65,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"6 mph","windDirection":"SW","icon":"https://api.weather.gov/icons/land/night/tsra_hi,50/bkn?size=medium","shortForecast":"Chance Showers And Thunderstorms then Mostly Cloudy","detailedForecast":"A chance of showers and thunderstorms before 8pm. Mostly cloudy, with a low around 65. Southwest wind around 6 mph. Chance of precipitation is 50%. New rainfall amounts between a tenth and quarter of an inch possible."},{"number":4,"name":"Wednesday","startTime":"2021-05-26T06:00:00-04:00","endTime":"2021-05-26T18:00:00-04:00","isDaytime":true,"temperature":83,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"5 to 10 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/day/rain_showers,20/tsra_hi,40?size=medium","shortForecast":"Chance Showers And Thunderstorms","detailedForecast":"A slight chance of rain showers between 11am and 2pm, then a chance of showers and thunderstorms. Mostly sunny, with a high near 83. West wind 5 to 10 mph. Chance of precipitation is 40%. New rainfall amounts less than a tenth of an inch possible."},{"number":5,"name":"Wednesday Night","startTime":"2021-05-26T18:00:00-04:00","endTime":"2021-05-27T06:00:00-04:00","isDaytime":false,"temperature":62,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"5 to 9 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/night/tsra_sct,40?size=medium","shortForecast":"Chance Showers And Thunderstorms","detailedForecast":"A chance of showers and thunderstorms. Mostly cloudy, with a low around 62. West wind 5 to 9 mph. Chance of precipitation is 40%."},{"number":6,"name":"Thursday","startTime":"2021-05-27T06:00:00-04:00","endTime":"2021-05-27T18:00:00-04:00","isDaytime":true,"temperature":80,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"5 to 9 mph","windDirection":"NW","icon":"https://api.weather.gov/icons/land/day/rain_showers,20/sct?size=medium","shortForecast":"Slight Chance Rain Showers then Mostly Sunny","detailedForecast":"A slight chance of rain showers before 8am. Mostly sunny, with a high near 80. Chance of precipitation is 20%."},{"number":7,"name":"Thursday Night","startTime":"2021-05-27T18:00:00-04:00","endTime":"2021-05-28T06:00:00-04:00","isDaytime":false,"temperature":58,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"2 to 6 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/night/rain_showers,30?size=medium","shortForecast":"Chance Rain Showers","detailedForecast":"A chance of rain showers after 8pm. Partly cloudy, with a low around 58. Chance of precipitation is 30%."},{"number":8,"name":"Friday","startTime":"2021-05-28T06:00:00-04:00","endTime":"2021-05-28T18:00:00-04:00","isDaytime":true,"temperature":73,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"3 to 8 mph","windDirection":"S","icon":"https://api.weather.gov/icons/land/day/rain_showers,40/tsra_sct,90?size=medium","shortForecast":"Showers And Thunderstorms","detailedForecast":"A chance of rain showers before 2pm, then showers and thunderstorms. Mostly cloudy, with a high near 73. Chance of precipitation is 90%."},{"number":9,"name":"Friday Night","startTime":"2021-05-28T18:00:00-04:00","endTime":"2021-05-29T06:00:00-04:00","isDaytime":false,"temperature":52,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"8 mph","windDirection":"NW","icon":"https://api.weather.gov/icons/land/night/tsra,90/tsra,80?size=medium","shortForecast":"Showers And Thunderstorms","detailedForecast":"Showers and thunderstorms. Mostly cloudy, with a low around 52. Chance of precipitation is 90%."},{"number":10,"name":"Saturday","startTime":"2021-05-29T06:00:00-04:00","endTime":"2021-05-29T18:00:00-04:00","isDaytime":true,"temperature":62,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"9 mph","windDirection":"N","icon":"https://api.weather.gov/icons/land/day/tsra_sct,80/tsra_sct,50?size=medium","shortForecast":"Chance Showers And Thunderstorms","detailedForecast":"Rain showers before 8am, then a chance of showers and thunderstorms. Partly sunny, with a high near 62. Chance of precipitation is 80%."},{"number":11,"name":"Saturday Night","startTime":"2021-05-29T18:00:00-04:00","endTime":"2021-05-30T06:00:00-04:00","isDaytime":false,"temperature":46,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"8 mph","windDirection":"NE","icon":"https://api.weather.gov/icons/land/night/tsra_hi,50/tsra_hi?size=medium","shortForecast":"Chance Showers And Thunderstorms","detailedForecast":"A chance of showers and thunderstorms. Mostly cloudy, with a low around 46. Chance of precipitation is 50%."},{"number":12,"name":"Sunday","startTime":"2021-05-30T06:00:00-04:00","endTime":"2021-05-30T18:00:00-04:00","isDaytime":true,"temperature":67,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"8 mph","windDirection":"NE","icon":"https://api.weather.gov/icons/land/day/rain_showers/sct?size=medium","shortForecast":"Slight Chance Rain Showers then Mostly Sunny","detailedForecast":"A slight chance of rain showers before 8am. Mostly sunny, with a high near 67."},{"number":13,"name":"Sunday Night","startTime":"2021-05-30T18:00:00-04:00","endTime":"2021-05-31T06:00:00-04:00","isDaytime":false,"temperature":46,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"7 mph","windDirection":"SE","icon":"https://api.weather.gov/icons/land/night/few?size=medium","shortForecast":"Mostly Clear","detailedForecast":"Mostly clear, with a low around 46."},{"number":14,"name":"Memorial Day","startTime":"2021-05-31T06:00:00-04:00","endTime":"2021-05-31T18:00:00-04:00","isDaytime":true,"temperature":75,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"7 mph","windDirection":"SW","icon":"https://api.weather.gov/icons/land/day/few?size=medium","shortForecast":"Sunny","detailedForecast":"Sunny, with a high near 75."}]}
  var hourly_LWX_14_57 = {"correlationId":"ef48afd","title":"Unexpected Problem","type":"https://api.weather.gov/problems/UnexpectedProblem","status":500,"detail":"An unexpected problem has occurred.","instance":"https://api.weather.gov/requests/ef48afd"}
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

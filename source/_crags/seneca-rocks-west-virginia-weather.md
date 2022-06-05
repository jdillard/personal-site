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
  var weekly_LWX_14_57 = {"updated":"2022-06-05T08:31:19+00:00","units":"us","forecastGenerator":"BaselineForecastGenerator","generatedAt":"2022-06-05T08:38:15+00:00","updateTime":"2022-06-05T08:31:19+00:00","validTimes":"2022-06-05T02:00:00+00:00/P7DT23H","elevation":{"unitCode":"wmoUnit:m","value":631.8504},"periods":[{"number":1,"name":"Overnight","startTime":"2022-06-05T04:00:00-04:00","endTime":"2022-06-05T06:00:00-04:00","isDaytime":false,"temperature":47,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"2 mph","windDirection":"NE","icon":"https://api.weather.gov/icons/land/night/few?size=medium","shortForecast":"Mostly Clear","detailedForecast":"Mostly clear, with a low around 47. Northeast wind around 2 mph."},{"number":2,"name":"Sunday","startTime":"2022-06-05T06:00:00-04:00","endTime":"2022-06-05T18:00:00-04:00","isDaytime":true,"temperature":76,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"1 to 5 mph","windDirection":"E","icon":"https://api.weather.gov/icons/land/day/few?size=medium","shortForecast":"Sunny","detailedForecast":"Sunny, with a high near 76. East wind 1 to 5 mph."},{"number":3,"name":"Sunday Night","startTime":"2022-06-05T18:00:00-04:00","endTime":"2022-06-06T06:00:00-04:00","isDaytime":false,"temperature":54,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"1 to 5 mph","windDirection":"S","icon":"https://api.weather.gov/icons/land/night/few?size=medium","shortForecast":"Mostly Clear","detailedForecast":"Mostly clear, with a low around 54. South wind 1 to 5 mph."},{"number":4,"name":"Monday","startTime":"2022-06-06T06:00:00-04:00","endTime":"2022-06-06T18:00:00-04:00","isDaytime":true,"temperature":79,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"1 to 9 mph","windDirection":"S","icon":"https://api.weather.gov/icons/land/day/few?size=medium","shortForecast":"Sunny","detailedForecast":"Sunny, with a high near 79. South wind 1 to 9 mph."},{"number":5,"name":"Monday Night","startTime":"2022-06-06T18:00:00-04:00","endTime":"2022-06-07T06:00:00-04:00","isDaytime":false,"temperature":59,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"3 to 8 mph","windDirection":"S","icon":"https://api.weather.gov/icons/land/night/sct?size=medium","shortForecast":"Partly Cloudy","detailedForecast":"Partly cloudy, with a low around 59. South wind 3 to 8 mph, with gusts as high as 20 mph."},{"number":6,"name":"Tuesday","startTime":"2022-06-07T06:00:00-04:00","endTime":"2022-06-07T18:00:00-04:00","isDaytime":true,"temperature":76,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"3 to 8 mph","windDirection":"SW","icon":"https://api.weather.gov/icons/land/day/tsra_sct,50/tsra_sct,60?size=medium","shortForecast":"Showers And Thunderstorms Likely","detailedForecast":"A chance of rain showers between 8am and 11am, then showers and thunderstorms likely. Partly sunny, with a high near 76. Chance of precipitation is 60%."},{"number":7,"name":"Tuesday Night","startTime":"2022-06-07T18:00:00-04:00","endTime":"2022-06-08T06:00:00-04:00","isDaytime":false,"temperature":62,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"2 to 6 mph","windDirection":"SW","icon":"https://api.weather.gov/icons/land/night/tsra_sct,60/tsra_sct,40?size=medium","shortForecast":"Showers And Thunderstorms Likely then Chance Showers And Thunderstorms","detailedForecast":"Showers and thunderstorms likely before 8pm, then a chance of showers and thunderstorms between 8pm and 5am, then a chance of showers and thunderstorms. Mostly cloudy, with a low around 62. Chance of precipitation is 60%."},{"number":8,"name":"Wednesday","startTime":"2022-06-08T06:00:00-04:00","endTime":"2022-06-08T18:00:00-04:00","isDaytime":true,"temperature":78,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"2 to 7 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/day/tsra_sct,50/tsra_sct,60?size=medium","shortForecast":"Showers And Thunderstorms Likely","detailedForecast":"Showers and thunderstorms likely. Partly sunny, with a high near 78. Chance of precipitation is 60%."},{"number":9,"name":"Wednesday Night","startTime":"2022-06-08T18:00:00-04:00","endTime":"2022-06-09T06:00:00-04:00","isDaytime":false,"temperature":62,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"7 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/night/tsra_sct,60?size=medium","shortForecast":"Showers And Thunderstorms Likely","detailedForecast":"Showers and thunderstorms likely. Mostly cloudy, with a low around 62. Chance of precipitation is 60%."},{"number":10,"name":"Thursday","startTime":"2022-06-09T06:00:00-04:00","endTime":"2022-06-09T18:00:00-04:00","isDaytime":true,"temperature":74,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"6 to 10 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/day/rain_showers,40/rain_showers?size=medium","shortForecast":"Chance Rain Showers","detailedForecast":"A chance of rain showers. Mostly sunny, with a high near 74. Chance of precipitation is 40%."},{"number":11,"name":"Thursday Night","startTime":"2022-06-09T18:00:00-04:00","endTime":"2022-06-10T06:00:00-04:00","isDaytime":false,"temperature":55,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"3 to 9 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/night/few?size=medium","shortForecast":"Mostly Clear","detailedForecast":"Mostly clear, with a low around 55."},{"number":12,"name":"Friday","startTime":"2022-06-10T06:00:00-04:00","endTime":"2022-06-10T18:00:00-04:00","isDaytime":true,"temperature":76,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"3 to 7 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/day/sct/rain_showers?size=medium","shortForecast":"Mostly Sunny then Slight Chance Rain Showers","detailedForecast":"A slight chance of rain showers after 2pm. Mostly sunny, with a high near 76."},{"number":13,"name":"Friday Night","startTime":"2022-06-10T18:00:00-04:00","endTime":"2022-06-11T06:00:00-04:00","isDaytime":false,"temperature":58,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"6 mph","windDirection":"SW","icon":"https://api.weather.gov/icons/land/night/rain_showers,30/rain_showers,50?size=medium","shortForecast":"Chance Rain Showers","detailedForecast":"A chance of rain showers. Mostly cloudy, with a low around 58. Chance of precipitation is 50%."},{"number":14,"name":"Saturday","startTime":"2022-06-11T06:00:00-04:00","endTime":"2022-06-11T18:00:00-04:00","isDaytime":true,"temperature":72,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"5 to 8 mph","windDirection":"SW","icon":"https://api.weather.gov/icons/land/day/rain_showers,60/tsra,70?size=medium","shortForecast":"Rain Showers Likely","detailedForecast":"Rain showers likely before 2pm, then showers and thunderstorms likely. Mostly cloudy, with a high near 72. Chance of precipitation is 70%."}]}
  var hourly_LWX_14_57 = {"correlationId":"5062fcc9","title":"Unexpected Problem","type":"https://api.weather.gov/problems/UnexpectedProblem","status":500,"detail":"An unexpected problem has occurred.","instance":"https://api.weather.gov/requests/5062fcc9"}
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

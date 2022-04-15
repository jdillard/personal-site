---
### THIS FILE IS AUTO-GENERATED - DO NOT EDIT ###
layout: page
title: Foster Falls, Tennessee Climbing Weather - Current, Past, and Forecasted Report
title_override: Foster Falls<br /><small>Climbing Weather</small>
description: A lightweight weather report for Foster Falls, Tennessee. Optimized for slow internet connections.
js_includes:
  - weather.js
---

<section class="measure center lh-copy f5-ns f6 ph2 mv4" style="text-align: justify;">
<strong>"Is it dry?"</strong>, an oft-repeated, age-old question. Here are real-time,
precipitation-focused reports of current, past, and forecasted climbing weather for Foster Falls, Tennessee.
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
<section id="weather" data-crag="foster-falls-tennessee" class="mv4-ns mv3 ph2 center"></section>
<section id="nearby" class="tc lh-copy">
  <h3>Nearby Crags</h3>
<a class="nowrap no-underline fancy-link relative light-red mh3" href="/crags/jackson-falls-illinois-weather.html">Jackson Falls</a>
<a class="nowrap no-underline fancy-link relative light-red mh3" href="/crags/red-river-gorge-kentucky-weather.html">Red River Gorge</a>
<a class="nowrap no-underline fancy-link relative light-red mh3" href="/crags/seneca-rocks-west-virginia-weather.html">Seneca Rocks</a>
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
  var weekly_MRX_19_12 = {"updated":"2022-04-15T08:15:53+00:00","units":"us","forecastGenerator":"BaselineForecastGenerator","generatedAt":"2022-04-15T08:39:07+00:00","updateTime":"2022-04-15T08:15:53+00:00","validTimes":"2022-04-15T02:00:00+00:00/P7DT10H","elevation":{"unitCode":"wmoUnit:m","value":458.1144},"periods":[{"number":1,"name":"Overnight","startTime":"2022-04-15T03:00:00-05:00","endTime":"2022-04-15T06:00:00-05:00","isDaytime":false,"temperature":44,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"5 mph","windDirection":"NE","icon":"https://api.weather.gov/icons/land/night/sct?size=medium","shortForecast":"Partly Cloudy","detailedForecast":"Partly cloudy, with a low around 44. Northeast wind around 5 mph."},{"number":2,"name":"Friday","startTime":"2022-04-15T06:00:00-05:00","endTime":"2022-04-15T18:00:00-05:00","isDaytime":true,"temperature":73,"temperatureUnit":"F","temperatureTrend":"falling","windSpeed":"5 to 10 mph","windDirection":"SE","icon":"https://api.weather.gov/icons/land/day/sct?size=medium","shortForecast":"Mostly Sunny","detailedForecast":"Mostly sunny. High near 73, with temperatures falling to around 69 in the afternoon. Southeast wind 5 to 10 mph, with gusts as high as 25 mph."},{"number":3,"name":"Friday Night","startTime":"2022-04-15T18:00:00-05:00","endTime":"2022-04-16T06:00:00-05:00","isDaytime":false,"temperature":55,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"5 to 10 mph","windDirection":"S","icon":"https://api.weather.gov/icons/land/night/bkn/tsra_sct,90?size=medium","shortForecast":"Mostly Cloudy then Chance Showers And Thunderstorms","detailedForecast":"A slight chance of rain showers between midnight and 1am, then a chance of showers and thunderstorms between 1am and 2am, then showers and thunderstorms. Mostly cloudy, with a low around 55. South wind 5 to 10 mph, with gusts as high as 25 mph. Chance of precipitation is 90%. New rainfall amounts between 1 and 2 inches possible."},{"number":4,"name":"Saturday","startTime":"2022-04-16T06:00:00-05:00","endTime":"2022-04-16T18:00:00-05:00","isDaytime":true,"temperature":70,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"5 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/day/tsra,60/tsra,30?size=medium","shortForecast":"Showers And Thunderstorms Likely then Chance Showers And Thunderstorms","detailedForecast":"Showers and thunderstorms likely before 7am, then a chance of showers and thunderstorms. Mostly cloudy, with a high near 70. West wind around 5 mph, with gusts as high as 20 mph. Chance of precipitation is 60%."},{"number":5,"name":"Saturday Night","startTime":"2022-04-16T18:00:00-05:00","endTime":"2022-04-17T06:00:00-05:00","isDaytime":false,"temperature":46,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"5 to 10 mph","windDirection":"N","icon":"https://api.weather.gov/icons/land/night/tsra_hi,20/sct?size=medium","shortForecast":"Slight Chance Showers And Thunderstorms then Partly Cloudy","detailedForecast":"A slight chance of showers and thunderstorms before midnight. Partly cloudy, with a low around 46. North wind 5 to 10 mph, with gusts as high as 25 mph. Chance of precipitation is 20%."},{"number":6,"name":"Sunday","startTime":"2022-04-17T06:00:00-05:00","endTime":"2022-04-17T18:00:00-05:00","isDaytime":true,"temperature":64,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"5 to 10 mph","windDirection":"NE","icon":"https://api.weather.gov/icons/land/day/rain_showers,20/rain_showers,50?size=medium","shortForecast":"Chance Rain Showers","detailedForecast":"A chance of rain showers after 7am. Mostly sunny, with a high near 64. Northeast wind 5 to 10 mph, with gusts as high as 25 mph. Chance of precipitation is 50%."},{"number":7,"name":"Sunday Night","startTime":"2022-04-17T18:00:00-05:00","endTime":"2022-04-18T06:00:00-05:00","isDaytime":false,"temperature":52,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"5 mph","windDirection":"SE","icon":"https://api.weather.gov/icons/land/night/tsra,60/tsra,80?size=medium","shortForecast":"Showers And Thunderstorms","detailedForecast":"A chance of rain showers before 7pm, then showers and thunderstorms. Mostly cloudy, with a low around 52. Southeast wind around 5 mph, with gusts as high as 25 mph. Chance of precipitation is 80%."},{"number":8,"name":"Monday","startTime":"2022-04-18T06:00:00-05:00","endTime":"2022-04-18T18:00:00-05:00","isDaytime":true,"temperature":63,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"5 to 10 mph","windDirection":"NW","icon":"https://api.weather.gov/icons/land/day/tsra_sct,80/tsra_sct,20?size=medium","shortForecast":"Showers And Thunderstorms","detailedForecast":"Showers and thunderstorms before 3pm. Partly sunny, with a high near 63. Chance of precipitation is 80%."},{"number":9,"name":"Monday Night","startTime":"2022-04-18T18:00:00-05:00","endTime":"2022-04-19T06:00:00-05:00","isDaytime":false,"temperature":41,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"10 mph","windDirection":"NW","icon":"https://api.weather.gov/icons/land/night/few?size=medium","shortForecast":"Mostly Clear","detailedForecast":"Mostly clear, with a low around 41."},{"number":10,"name":"Tuesday","startTime":"2022-04-19T06:00:00-05:00","endTime":"2022-04-19T18:00:00-05:00","isDaytime":true,"temperature":61,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"5 to 10 mph","windDirection":"N","icon":"https://api.weather.gov/icons/land/day/few?size=medium","shortForecast":"Sunny","detailedForecast":"Sunny, with a high near 61."},{"number":11,"name":"Tuesday Night","startTime":"2022-04-19T18:00:00-05:00","endTime":"2022-04-20T06:00:00-05:00","isDaytime":false,"temperature":41,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"5 mph","windDirection":"NE","icon":"https://api.weather.gov/icons/land/night/few?size=medium","shortForecast":"Mostly Clear","detailedForecast":"Mostly clear, with a low around 41."},{"number":12,"name":"Wednesday","startTime":"2022-04-20T06:00:00-05:00","endTime":"2022-04-20T18:00:00-05:00","isDaytime":true,"temperature":68,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"5 to 10 mph","windDirection":"SE","icon":"https://api.weather.gov/icons/land/day/few?size=medium","shortForecast":"Sunny","detailedForecast":"Sunny, with a high near 68."},{"number":13,"name":"Wednesday Night","startTime":"2022-04-20T18:00:00-05:00","endTime":"2022-04-21T06:00:00-05:00","isDaytime":false,"temperature":52,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"5 to 10 mph","windDirection":"S","icon":"https://api.weather.gov/icons/land/night/sct?size=medium","shortForecast":"Partly Cloudy","detailedForecast":"Partly cloudy, with a low around 52."},{"number":14,"name":"Thursday","startTime":"2022-04-21T06:00:00-05:00","endTime":"2022-04-21T18:00:00-05:00","isDaytime":true,"temperature":70,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"5 mph","windDirection":"SW","icon":"https://api.weather.gov/icons/land/day/bkn?size=medium","shortForecast":"Partly Sunny","detailedForecast":"Partly sunny, with a high near 70."}]}
  var hourly_MRX_19_12 = {"correlationId":"3f58ee96","title":"Unexpected Problem","type":"https://api.weather.gov/problems/UnexpectedProblem","status":500,"detail":"An unexpected problem has occurred.","instance":"https://api.weather.gov/requests/3f58ee96"}
  var crags_config = [
  {
    "name": "Foster Falls",
    "note": "High-quality sandstone.",
    "mountainProject": "https://www.mountainproject.com/area/105883248/foster-falls",
    "station": "KCHA",
    "office": "MRX/19,12",
    "coordinates": [
      -85.674,
      35.182
    ]
  }
]</script>

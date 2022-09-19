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
  var weekly_LWX_14_57 = {"updated":"2022-09-19T08:30:02+00:00","units":"us","forecastGenerator":"BaselineForecastGenerator","generatedAt":"2022-09-19T08:44:50+00:00","updateTime":"2022-09-19T08:30:02+00:00","validTimes":"2022-09-19T02:00:00+00:00/P7DT23H","elevation":{"unitCode":"wmoUnit:m","value":631.8504},"periods":[{"number":1,"name":"Overnight","startTime":"2022-09-19T04:00:00-04:00","endTime":"2022-09-19T06:00:00-04:00","isDaytime":false,"temperature":54,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"5 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/night/fog?size=medium","shortForecast":"Patchy Fog","detailedForecast":"Patchy fog. Mostly clear, with a low around 54. West wind around 5 mph."},{"number":2,"name":"Monday","startTime":"2022-09-19T06:00:00-04:00","endTime":"2022-09-19T18:00:00-04:00","isDaytime":true,"temperature":78,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"2 to 8 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/day/rain_showers,20/tsra_hi,40?size=medium","shortForecast":"Chance Rain Showers","detailedForecast":"Patchy fog before 9am, then a chance of rain showers between 11am and 2pm, then a chance of showers and thunderstorms between 2pm and 5pm, then a slight chance of showers and thunderstorms. Mostly sunny, with a high near 78. West wind 2 to 8 mph. Chance of precipitation is 40%."},{"number":3,"name":"Monday Night","startTime":"2022-09-19T18:00:00-04:00","endTime":"2022-09-20T06:00:00-04:00","isDaytime":false,"temperature":61,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"2 to 6 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/night/tsra_hi,30/tsra_hi,20?size=medium","shortForecast":"Slight Chance Showers And Thunderstorms then Chance Showers And Thunderstorms","detailedForecast":"A slight chance of showers and thunderstorms before 8pm, then a chance of showers and thunderstorms between 8pm and 2am, then patchy fog and a slight chance of rain showers. Partly cloudy, with a low around 61. West wind 2 to 6 mph, with gusts as high as 18 mph. Chance of precipitation is 30%."},{"number":4,"name":"Tuesday","startTime":"2022-09-20T06:00:00-04:00","endTime":"2022-09-20T18:00:00-04:00","isDaytime":true,"temperature":77,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"2 to 6 mph","windDirection":"NW","icon":"https://api.weather.gov/icons/land/day/fog/few?size=medium","shortForecast":"Patchy Fog then Sunny","detailedForecast":"Patchy fog before 8am. Sunny, with a high near 77. Northwest wind 2 to 6 mph."},{"number":5,"name":"Tuesday Night","startTime":"2022-09-20T18:00:00-04:00","endTime":"2022-09-21T06:00:00-04:00","isDaytime":false,"temperature":55,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"1 to 5 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/night/few?size=medium","shortForecast":"Mostly Clear","detailedForecast":"Mostly clear, with a low around 55. West wind 1 to 5 mph."},{"number":6,"name":"Wednesday","startTime":"2022-09-21T06:00:00-04:00","endTime":"2022-09-21T18:00:00-04:00","isDaytime":true,"temperature":84,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"2 to 7 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/day/few?size=medium","shortForecast":"Sunny","detailedForecast":"Sunny, with a high near 84."},{"number":7,"name":"Wednesday Night","startTime":"2022-09-21T18:00:00-04:00","endTime":"2022-09-22T06:00:00-04:00","isDaytime":false,"temperature":59,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"7 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/night/tsra_hi,30?size=medium","shortForecast":"Chance Showers And Thunderstorms","detailedForecast":"A chance of showers and thunderstorms after 8pm. Mostly cloudy, with a low around 59. Chance of precipitation is 30%."},{"number":8,"name":"Thursday","startTime":"2022-09-22T06:00:00-04:00","endTime":"2022-09-22T18:00:00-04:00","isDaytime":true,"temperature":68,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"6 to 20 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/day/rain_showers,30?size=medium","shortForecast":"Chance Rain Showers","detailedForecast":"A chance of rain showers. Mostly sunny, with a high near 68. Chance of precipitation is 30%."},{"number":9,"name":"Thursday Night","startTime":"2022-09-22T18:00:00-04:00","endTime":"2022-09-23T06:00:00-04:00","isDaytime":false,"temperature":44,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"14 to 21 mph","windDirection":"NW","icon":"https://api.weather.gov/icons/land/night/rain_showers,30/wind_sct?size=medium","shortForecast":"Chance Rain Showers then Partly Cloudy","detailedForecast":"A chance of rain showers before 8pm. Partly cloudy, with a low around 44. Chance of precipitation is 30%."},{"number":10,"name":"Friday","startTime":"2022-09-23T06:00:00-04:00","endTime":"2022-09-23T18:00:00-04:00","isDaytime":true,"temperature":61,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"15 mph","windDirection":"NW","icon":"https://api.weather.gov/icons/land/day/few?size=medium","shortForecast":"Sunny","detailedForecast":"Sunny, with a high near 61."},{"number":11,"name":"Friday Night","startTime":"2022-09-23T18:00:00-04:00","endTime":"2022-09-24T06:00:00-04:00","isDaytime":false,"temperature":43,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"6 to 15 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/night/few?size=medium","shortForecast":"Mostly Clear","detailedForecast":"Mostly clear, with a low around 43."},{"number":12,"name":"Saturday","startTime":"2022-09-24T06:00:00-04:00","endTime":"2022-09-24T18:00:00-04:00","isDaytime":true,"temperature":71,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"6 to 9 mph","windDirection":"SW","icon":"https://api.weather.gov/icons/land/day/sct?size=medium","shortForecast":"Mostly Sunny","detailedForecast":"Mostly sunny, with a high near 71."},{"number":13,"name":"Saturday Night","startTime":"2022-09-24T18:00:00-04:00","endTime":"2022-09-25T06:00:00-04:00","isDaytime":false,"temperature":52,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"9 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/night/sct?size=medium","shortForecast":"Partly Cloudy","detailedForecast":"Partly cloudy, with a low around 52."},{"number":14,"name":"Sunday","startTime":"2022-09-25T06:00:00-04:00","endTime":"2022-09-25T18:00:00-04:00","isDaytime":true,"temperature":74,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"9 to 15 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/day/rain_showers?size=medium","shortForecast":"Slight Chance Rain Showers","detailedForecast":"A slight chance of rain showers after 8am. Mostly sunny, with a high near 74."}]}
  var hourly_LWX_14_57 = {"correlationId":"fa1bd86","title":"Unexpected Problem","type":"https://api.weather.gov/problems/UnexpectedProblem","status":500,"detail":"An unexpected problem has occurred.","instance":"https://api.weather.gov/requests/fa1bd86"}
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

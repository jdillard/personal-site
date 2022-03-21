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
  var weekly_LWX_14_57 = {"updated":"2022-03-21T05:31:18+00:00","units":"us","forecastGenerator":"BaselineForecastGenerator","generatedAt":"2022-03-21T08:39:32+00:00","updateTime":"2022-03-21T05:31:18+00:00","validTimes":"2022-03-20T23:00:00+00:00/P7DT2H","elevation":{"unitCode":"wmoUnit:m","value":631.8504},"periods":[{"number":1,"name":"Overnight","startTime":"2022-03-21T04:00:00-04:00","endTime":"2022-03-21T06:00:00-04:00","isDaytime":false,"temperature":36,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"7 mph","windDirection":"SW","icon":"https://api.weather.gov/icons/land/night/skc?size=medium","shortForecast":"Clear","detailedForecast":"Clear, with a low around 36. Southwest wind around 7 mph."},{"number":2,"name":"Monday","startTime":"2022-03-21T06:00:00-04:00","endTime":"2022-03-21T18:00:00-04:00","isDaytime":true,"temperature":64,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"5 to 13 mph","windDirection":"SW","icon":"https://api.weather.gov/icons/land/day/few?size=medium","shortForecast":"Sunny","detailedForecast":"Sunny, with a high near 64. Southwest wind 5 to 13 mph, with gusts as high as 20 mph."},{"number":3,"name":"Monday Night","startTime":"2022-03-21T18:00:00-04:00","endTime":"2022-03-22T06:00:00-04:00","isDaytime":false,"temperature":42,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"2 to 10 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/night/few?size=medium","shortForecast":"Mostly Clear","detailedForecast":"Mostly clear, with a low around 42. West wind 2 to 10 mph."},{"number":4,"name":"Tuesday","startTime":"2022-03-22T06:00:00-04:00","endTime":"2022-03-22T18:00:00-04:00","isDaytime":true,"temperature":65,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"2 to 6 mph","windDirection":"E","icon":"https://api.weather.gov/icons/land/day/bkn?size=medium","shortForecast":"Partly Sunny","detailedForecast":"Partly sunny, with a high near 65. East wind 2 to 6 mph."},{"number":5,"name":"Tuesday Night","startTime":"2022-03-22T18:00:00-04:00","endTime":"2022-03-23T06:00:00-04:00","isDaytime":false,"temperature":47,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"6 mph","windDirection":"SE","icon":"https://api.weather.gov/icons/land/night/bkn/rain_showers,40?size=medium","shortForecast":"Mostly Cloudy then Chance Rain Showers","detailedForecast":"A chance of rain showers after 2am. Mostly cloudy, with a low around 47. Southeast wind around 6 mph. Chance of precipitation is 40%."},{"number":6,"name":"Wednesday","startTime":"2022-03-23T06:00:00-04:00","endTime":"2022-03-23T18:00:00-04:00","isDaytime":true,"temperature":60,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"5 to 9 mph","windDirection":"SE","icon":"https://api.weather.gov/icons/land/day/rain,90?size=medium","shortForecast":"Light Rain","detailedForecast":"A chance of rain showers before 8am, then rain. Mostly cloudy, with a high near 60. Chance of precipitation is 90%."},{"number":7,"name":"Wednesday Night","startTime":"2022-03-23T18:00:00-04:00","endTime":"2022-03-24T06:00:00-04:00","isDaytime":false,"temperature":50,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"7 mph","windDirection":"S","icon":"https://api.weather.gov/icons/land/night/tsra_sct,80/tsra_sct,70?size=medium","shortForecast":"Showers And Thunderstorms Likely","detailedForecast":"Rain before 8pm, then showers and thunderstorms likely. Mostly cloudy, with a low around 50. Chance of precipitation is 80%."},{"number":8,"name":"Thursday","startTime":"2022-03-24T06:00:00-04:00","endTime":"2022-03-24T18:00:00-04:00","isDaytime":true,"temperature":61,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"6 to 12 mph","windDirection":"SW","icon":"https://api.weather.gov/icons/land/day/rain,50/rain?size=medium","shortForecast":"Slight Chance Light Rain","detailedForecast":"A chance of rain showers before 8am, then a slight chance of rain. Mostly sunny, with a high near 61. Chance of precipitation is 50%."},{"number":9,"name":"Thursday Night","startTime":"2022-03-24T18:00:00-04:00","endTime":"2022-03-25T06:00:00-04:00","isDaytime":false,"temperature":38,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"13 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/night/rain/sct?size=medium","shortForecast":"Slight Chance Light Rain then Partly Cloudy","detailedForecast":"A slight chance of rain before 8pm. Partly cloudy, with a low around 38."},{"number":10,"name":"Friday","startTime":"2022-03-25T06:00:00-04:00","endTime":"2022-03-25T18:00:00-04:00","isDaytime":true,"temperature":48,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"14 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/day/rain,30?size=medium","shortForecast":"Chance Light Rain","detailedForecast":"A chance of rain after 8am. Partly sunny, with a high near 48. Chance of precipitation is 30%."},{"number":11,"name":"Friday Night","startTime":"2022-03-25T18:00:00-04:00","endTime":"2022-03-26T06:00:00-04:00","isDaytime":false,"temperature":36,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"14 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/night/rain,30?size=medium","shortForecast":"Chance Light Rain","detailedForecast":"A chance of rain. Mostly cloudy, with a low around 36. Chance of precipitation is 30%."},{"number":12,"name":"Saturday","startTime":"2022-03-26T06:00:00-04:00","endTime":"2022-03-26T18:00:00-04:00","isDaytime":true,"temperature":49,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"14 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/day/rain,40?size=medium","shortForecast":"Chance Light Rain","detailedForecast":"A chance of rain. Partly sunny, with a high near 49. Chance of precipitation is 40%."},{"number":13,"name":"Saturday Night","startTime":"2022-03-26T18:00:00-04:00","endTime":"2022-03-27T06:00:00-04:00","isDaytime":false,"temperature":31,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"14 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/night/snow,40/snow,30?size=medium","shortForecast":"Chance Rain And Snow","detailedForecast":"A chance of rain before 8pm, then a chance of rain and snow. Mostly cloudy, with a low around 31. Chance of precipitation is 40%."},{"number":14,"name":"Sunday","startTime":"2022-03-27T06:00:00-04:00","endTime":"2022-03-27T18:00:00-04:00","isDaytime":true,"temperature":43,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"14 mph","windDirection":"NW","icon":"https://api.weather.gov/icons/land/day/snow,30?size=medium","shortForecast":"Chance Light Snow","detailedForecast":"A chance of snow before 8am, then a chance of rain and snow. Mostly sunny, with a high near 43. Chance of precipitation is 30%."}]}
  var hourly_LWX_14_57 = {"correlationId":"225c1656","title":"Unexpected Problem","type":"https://api.weather.gov/problems/UnexpectedProblem","status":500,"detail":"An unexpected problem has occurred.","instance":"https://api.weather.gov/requests/225c1656"}
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

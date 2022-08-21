---
### THIS FILE IS AUTO-GENERATED - DO NOT EDIT ###
layout: page
title: Mammoth Lakes, California Climbing Weather - Current, Past, and Forecasted Report
title_override: Mammoth Lakes<br /><small>Climbing Weather</small>
description: A lightweight weather report for Mammoth Lakes, California. Optimized for slow internet connections.
js_includes:
  - weather.js
---

<section class="measure center lh-copy f5-ns f6 ph2 mv4" style="text-align: justify;">
<strong>"Is it dry?"</strong>, an oft-repeated, age-old question. Here are real-time,
precipitation-focused reports of current, past, and forecasted climbing weather for Mammoth Lakes, California.
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
<section id="weather" data-crag="mammoth-lakes-california" class="mv4-ns mv3 ph2 center"></section>
<section id="nearby" class="tc lh-copy">
  <h3>Nearby Crags</h3>
<a class="nowrap no-underline fancy-link relative light-red mh3" href="/crags/joshua-tree-national-park-california-weather.html">Joshua Tree National Park</a>
<a class="nowrap no-underline fancy-link relative light-red mh3" href="/crags/yosemite-national-park-california-weather.html">Yosemite National Park</a>
<a class="nowrap no-underline fancy-link relative light-red mh3" href="/crags/bishop-california-weather.html">Bishop</a>
<a class="nowrap no-underline fancy-link relative light-red mh3" href="/crags/red-rock-nevada-weather.html">Red Rock</a>
</section>
<section id="nearby" class="tc lh-copy">
  <h3>Other Metros</h3>
  <select class="ma1 bg-near-white pa2" id="stateSel">
    <option value="Texas">Texas</option>
    <option value="Washington">Washington</option>
    <option value="Colorado">Colorado</option>
    <option value="Tennessee">Tennessee</option>
    <option value="Utah">Utah</option>
    <option value="California" selected>California</option>
  </select>
  <select class="ma1 bg-near-white pa2" id="citySel">
    <option value="San Francisco" selected>San Francisco</option>
    <option value="Los Angeles">Los Angeles</option>
  </select>
  <a id="selectMetro" class="f6 link dim ph3 pv2 ma1 dib white bg-light-red" href="/crags/san-francisco-california-weather.html">Select Metro</a>
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
  var weekly_REV_58_16 = {"updated":"2022-08-21T08:31:18+00:00","units":"us","forecastGenerator":"BaselineForecastGenerator","generatedAt":"2022-08-21T08:39:25+00:00","updateTime":"2022-08-21T08:31:18+00:00","validTimes":"2022-08-21T02:00:00+00:00/P7DT23H","elevation":{"unitCode":"wmoUnit:m","value":2411.8824},"periods":[{"number":1,"name":"Overnight","startTime":"2022-08-21T01:00:00-07:00","endTime":"2022-08-21T06:00:00-07:00","isDaytime":false,"temperature":55,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"5 mph","windDirection":"N","icon":"https://api.weather.gov/icons/land/night/few?size=medium","shortForecast":"Mostly Clear","detailedForecast":"Mostly clear, with a low around 55. North wind around 5 mph."},{"number":2,"name":"Sunday","startTime":"2022-08-21T06:00:00-07:00","endTime":"2022-08-21T18:00:00-07:00","isDaytime":true,"temperature":80,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"0 to 20 mph","windDirection":"NE","icon":"https://api.weather.gov/icons/land/day/few?size=medium","shortForecast":"Sunny","detailedForecast":"Sunny, with a high near 80. Northeast wind 0 to 20 mph, with gusts as high as 30 mph."},{"number":3,"name":"Sunday Night","startTime":"2022-08-21T18:00:00-07:00","endTime":"2022-08-22T06:00:00-07:00","isDaytime":false,"temperature":55,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"5 to 20 mph","windDirection":"NW","icon":"https://api.weather.gov/icons/land/night/few?size=medium","shortForecast":"Mostly Clear","detailedForecast":"Mostly clear, with a low around 55. Northwest wind 5 to 20 mph, with gusts as high as 30 mph."},{"number":4,"name":"Monday","startTime":"2022-08-22T06:00:00-07:00","endTime":"2022-08-22T18:00:00-07:00","isDaytime":true,"temperature":81,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"0 to 15 mph","windDirection":"N","icon":"https://api.weather.gov/icons/land/day/few?size=medium","shortForecast":"Sunny","detailedForecast":"Sunny, with a high near 81. North wind 0 to 15 mph, with gusts as high as 30 mph."},{"number":5,"name":"Monday Night","startTime":"2022-08-22T18:00:00-07:00","endTime":"2022-08-23T06:00:00-07:00","isDaytime":false,"temperature":54,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"0 to 15 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/night/few?size=medium","shortForecast":"Mostly Clear","detailedForecast":"Mostly clear, with a low around 54. West wind 0 to 15 mph, with gusts as high as 30 mph."},{"number":6,"name":"Tuesday","startTime":"2022-08-23T06:00:00-07:00","endTime":"2022-08-23T18:00:00-07:00","isDaytime":true,"temperature":81,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"0 to 10 mph","windDirection":"SW","icon":"https://api.weather.gov/icons/land/day/few?size=medium","shortForecast":"Sunny","detailedForecast":"Sunny, with a high near 81. Southwest wind 0 to 10 mph."},{"number":7,"name":"Tuesday Night","startTime":"2022-08-23T18:00:00-07:00","endTime":"2022-08-24T06:00:00-07:00","isDaytime":false,"temperature":54,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"5 to 10 mph","windDirection":"SW","icon":"https://api.weather.gov/icons/land/night/few?size=medium","shortForecast":"Mostly Clear","detailedForecast":"Mostly clear, with a low around 54."},{"number":8,"name":"Wednesday","startTime":"2022-08-24T06:00:00-07:00","endTime":"2022-08-24T18:00:00-07:00","isDaytime":true,"temperature":79,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"5 to 15 mph","windDirection":"SW","icon":"https://api.weather.gov/icons/land/day/few?size=medium","shortForecast":"Sunny","detailedForecast":"Sunny, with a high near 79."},{"number":9,"name":"Wednesday Night","startTime":"2022-08-24T18:00:00-07:00","endTime":"2022-08-25T06:00:00-07:00","isDaytime":false,"temperature":53,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"5 to 15 mph","windDirection":"SW","icon":"https://api.weather.gov/icons/land/night/few?size=medium","shortForecast":"Mostly Clear","detailedForecast":"Mostly clear, with a low around 53."},{"number":10,"name":"Thursday","startTime":"2022-08-25T06:00:00-07:00","endTime":"2022-08-25T18:00:00-07:00","isDaytime":true,"temperature":79,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"5 to 10 mph","windDirection":"SW","icon":"https://api.weather.gov/icons/land/day/tsra_hi?size=medium","shortForecast":"Slight Chance Showers And Thunderstorms","detailedForecast":"A slight chance of showers and thunderstorms between 11am and 5pm. Sunny, with a high near 79."},{"number":11,"name":"Thursday Night","startTime":"2022-08-25T18:00:00-07:00","endTime":"2022-08-26T06:00:00-07:00","isDaytime":false,"temperature":53,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"5 to 10 mph","windDirection":"SW","icon":"https://api.weather.gov/icons/land/night/few?size=medium","shortForecast":"Mostly Clear","detailedForecast":"Mostly clear, with a low around 53."},{"number":12,"name":"Friday","startTime":"2022-08-26T06:00:00-07:00","endTime":"2022-08-26T18:00:00-07:00","isDaytime":true,"temperature":77,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"5 to 10 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/day/sct?size=medium","shortForecast":"Mostly Sunny","detailedForecast":"Mostly sunny, with a high near 77."},{"number":13,"name":"Friday Night","startTime":"2022-08-26T18:00:00-07:00","endTime":"2022-08-27T06:00:00-07:00","isDaytime":false,"temperature":53,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"5 to 10 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/night/sct?size=medium","shortForecast":"Partly Cloudy","detailedForecast":"Partly cloudy, with a low around 53."},{"number":14,"name":"Saturday","startTime":"2022-08-27T06:00:00-07:00","endTime":"2022-08-27T18:00:00-07:00","isDaytime":true,"temperature":77,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"5 to 10 mph","windDirection":"SW","icon":"https://api.weather.gov/icons/land/day/few?size=medium","shortForecast":"Sunny","detailedForecast":"Sunny, with a high near 77."}]}
  var hourly_REV_58_16 = {"correlationId":"299460ce","title":"Unexpected Problem","type":"https://api.weather.gov/problems/UnexpectedProblem","status":500,"detail":"An unexpected problem has occurred.","instance":"https://api.weather.gov/requests/299460ce"}
  var crags_config = [
  {
    "name": "Mammoth Lakes",
    "note": "Volcanic tuff to perfect granite.",
    "mountainProject": "https://www.mountainproject.com/area/106064821/mammoth-lakes-area",
    "station": "C2998",
    "office": "REV/58,16",
    "coordinates": [
      -118.967,
      37.647
    ]
  }
]</script>

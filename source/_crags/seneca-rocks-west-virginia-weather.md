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
  var weekly_LWX_14_57 = {"updated":"2022-11-13T08:29:43+00:00","units":"us","forecastGenerator":"BaselineForecastGenerator","generatedAt":"2022-11-13T08:39:53+00:00","updateTime":"2022-11-13T08:29:43+00:00","validTimes":"2022-11-13T02:00:00+00:00/P7DT23H","elevation":{"unitCode":"wmoUnit:m","value":631.8504},"periods":[{"number":1,"name":"Overnight","startTime":"2022-11-13T03:00:00-05:00","endTime":"2022-11-13T06:00:00-05:00","isDaytime":false,"temperature":29,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"10 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/night/snow,20?size=medium","shortForecast":"Isolated Snow Showers","detailedForecast":"Isolated snow showers. Mostly cloudy, with a low around 29. West wind around 10 mph, with gusts as high as 26 mph. Chance of precipitation is 20%."},{"number":2,"name":"Sunday","startTime":"2022-11-13T06:00:00-05:00","endTime":"2022-11-13T18:00:00-05:00","isDaytime":true,"temperature":37,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"12 to 15 mph","windDirection":"NW","icon":"https://api.weather.gov/icons/land/day/snow,20?size=medium","shortForecast":"Isolated Snow Showers","detailedForecast":"Isolated snow showers before 11am, then isolated rain and snow showers between 11am and 1pm. Mostly cloudy, with a high near 37. Northwest wind 12 to 15 mph, with gusts as high as 30 mph. Chance of precipitation is 20%."},{"number":3,"name":"Sunday Night","startTime":"2022-11-13T18:00:00-05:00","endTime":"2022-11-14T06:00:00-05:00","isDaytime":false,"temperature":23,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"5 to 12 mph","windDirection":"NW","icon":"https://api.weather.gov/icons/land/night/bkn?size=medium","shortForecast":"Mostly Cloudy","detailedForecast":"Mostly cloudy, with a low around 23. Northwest wind 5 to 12 mph, with gusts as high as 24 mph."},{"number":4,"name":"Monday","startTime":"2022-11-14T06:00:00-05:00","endTime":"2022-11-14T18:00:00-05:00","isDaytime":true,"temperature":44,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"5 mph","windDirection":"N","icon":"https://api.weather.gov/icons/land/day/few?size=medium","shortForecast":"Sunny","detailedForecast":"Sunny, with a high near 44. North wind around 5 mph."},{"number":5,"name":"Monday Night","startTime":"2022-11-14T18:00:00-05:00","endTime":"2022-11-15T06:00:00-05:00","isDaytime":false,"temperature":26,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"3 mph","windDirection":"SE","icon":"https://api.weather.gov/icons/land/night/sct?size=medium","shortForecast":"Partly Cloudy","detailedForecast":"Partly cloudy, with a low around 26. Southeast wind around 3 mph."},{"number":6,"name":"Tuesday","startTime":"2022-11-15T06:00:00-05:00","endTime":"2022-11-15T18:00:00-05:00","isDaytime":true,"temperature":40,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"2 to 6 mph","windDirection":"SE","icon":"https://api.weather.gov/icons/land/day/snow_fzra,40/snow_fzra,70?size=medium","shortForecast":"Slight Chance Freezing Rain","detailedForecast":"A slight chance of freezing rain and rain and snow likely after 7am. Mostly cloudy, with a high near 40. Chance of precipitation is 70%."},{"number":7,"name":"Tuesday Night","startTime":"2022-11-15T18:00:00-05:00","endTime":"2022-11-16T06:00:00-05:00","isDaytime":false,"temperature":32,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"3 mph","windDirection":"SW","icon":"https://api.weather.gov/icons/land/night/rain,70?size=medium","shortForecast":"Rain Likely","detailedForecast":"Rain likely. Mostly cloudy, with a low around 32. Chance of precipitation is 70%."},{"number":8,"name":"Wednesday","startTime":"2022-11-16T06:00:00-05:00","endTime":"2022-11-16T18:00:00-05:00","isDaytime":true,"temperature":41,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"3 to 10 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/day/rain,40/rain?size=medium","shortForecast":"Chance Light Rain","detailedForecast":"A chance of rain before 1pm. Mostly cloudy, with a high near 41. Chance of precipitation is 40%."},{"number":9,"name":"Wednesday Night","startTime":"2022-11-16T18:00:00-05:00","endTime":"2022-11-17T06:00:00-05:00","isDaytime":false,"temperature":24,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"10 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/night/snow,30?size=medium","shortForecast":"Chance Rain And Snow Showers","detailedForecast":"A chance of rain and snow showers after 7pm. Mostly cloudy, with a low around 24. Chance of precipitation is 30%."},{"number":10,"name":"Thursday","startTime":"2022-11-17T06:00:00-05:00","endTime":"2022-11-17T18:00:00-05:00","isDaytime":true,"temperature":34,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"10 to 14 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/day/snow/bkn?size=medium","shortForecast":"Slight Chance Snow Showers then Partly Sunny","detailedForecast":"A slight chance of snow showers before 7am. Partly sunny, with a high near 34."},{"number":11,"name":"Thursday Night","startTime":"2022-11-17T18:00:00-05:00","endTime":"2022-11-18T06:00:00-05:00","isDaytime":false,"temperature":21,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"10 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/night/bkn?size=medium","shortForecast":"Mostly Cloudy","detailedForecast":"Mostly cloudy, with a low around 21."},{"number":12,"name":"Friday","startTime":"2022-11-18T06:00:00-05:00","endTime":"2022-11-18T18:00:00-05:00","isDaytime":true,"temperature":35,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"9 to 13 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/day/sct?size=medium","shortForecast":"Mostly Sunny","detailedForecast":"Mostly sunny, with a high near 35."},{"number":13,"name":"Friday Night","startTime":"2022-11-18T18:00:00-05:00","endTime":"2022-11-19T06:00:00-05:00","isDaytime":false,"temperature":17,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"10 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/night/sct?size=medium","shortForecast":"Partly Cloudy","detailedForecast":"Partly cloudy, with a low around 17."},{"number":14,"name":"Saturday","startTime":"2022-11-19T06:00:00-05:00","endTime":"2022-11-19T18:00:00-05:00","isDaytime":true,"temperature":35,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"8 to 12 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/day/few?size=medium","shortForecast":"Sunny","detailedForecast":"Sunny, with a high near 35."}]}
  var hourly_LWX_14_57 = false
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

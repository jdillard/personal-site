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
  var weekly_LWX_14_57 = {"updated":"2023-01-07T08:29:49+00:00","units":"us","forecastGenerator":"BaselineForecastGenerator","generatedAt":"2023-01-07T08:35:47+00:00","updateTime":"2023-01-07T08:29:49+00:00","validTimes":"2023-01-07T02:00:00+00:00/P7DT23H","elevation":{"unitCode":"wmoUnit:m","value":631.8504},"periods":[{"number":1,"name":"Overnight","startTime":"2023-01-07T03:00:00-05:00","endTime":"2023-01-07T06:00:00-05:00","isDaytime":false,"temperature":28,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"3 mph","windDirection":"SW","icon":"https://api.weather.gov/icons/land/night/bkn?size=medium","shortForecast":"Mostly Cloudy","detailedForecast":"Mostly cloudy, with a low around 28. Southwest wind around 3 mph, with gusts as high as 20 mph."},{"number":2,"name":"Saturday","startTime":"2023-01-07T06:00:00-05:00","endTime":"2023-01-07T18:00:00-05:00","isDaytime":true,"temperature":39,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"3 to 10 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/day/sct?size=medium","shortForecast":"Mostly Sunny","detailedForecast":"Mostly sunny, with a high near 39. West wind 3 to 10 mph, with gusts as high as 21 mph."},{"number":3,"name":"Saturday Night","startTime":"2023-01-07T18:00:00-05:00","endTime":"2023-01-08T06:00:00-05:00","isDaytime":false,"temperature":23,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"0 to 6 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/night/sct?size=medium","shortForecast":"Partly Cloudy","detailedForecast":"Partly cloudy, with a low around 23. West wind 0 to 6 mph, with gusts as high as 18 mph."},{"number":4,"name":"Sunday","startTime":"2023-01-08T06:00:00-05:00","endTime":"2023-01-08T18:00:00-05:00","isDaytime":true,"temperature":38,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"1 to 6 mph","windDirection":"S","icon":"https://api.weather.gov/icons/land/day/snow,20/snow,50?size=medium","shortForecast":"Chance Rain And Snow","detailedForecast":"A chance of rain and snow after 10am. Partly sunny, with a high near 38. South wind 1 to 6 mph. Chance of precipitation is 50%. Little or no snow accumulation expected."},{"number":5,"name":"Sunday Night","startTime":"2023-01-08T18:00:00-05:00","endTime":"2023-01-09T06:00:00-05:00","isDaytime":false,"temperature":31,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"5 mph","windDirection":"SW","icon":"https://api.weather.gov/icons/land/night/snow_fzra,60/snow_fzra,70?size=medium","shortForecast":"Freezing Rain Likely","detailedForecast":"A chance of rain and snow before 7pm, then freezing rain likely and rain and snow likely. Mostly cloudy, with a low around 31. Southwest wind around 5 mph, with gusts as high as 22 mph. Chance of precipitation is 70%. Little or no snow accumulation expected. Little or no ice accumulation expected."},{"number":6,"name":"Monday","startTime":"2023-01-09T06:00:00-05:00","endTime":"2023-01-09T18:00:00-05:00","isDaytime":true,"temperature":39,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"6 to 10 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/day/snow_fzra,70/snow,20?size=medium","shortForecast":"Slight Chance Rain And Snow","detailedForecast":"Freezing rain likely and rain likely before 7am, then a slight chance of rain and snow between 7am and 1pm. Partly sunny, with a high near 39. Chance of precipitation is 70%. Little or no ice accumulation expected."},{"number":7,"name":"Monday Night","startTime":"2023-01-09T18:00:00-05:00","endTime":"2023-01-10T06:00:00-05:00","isDaytime":false,"temperature":26,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"2 to 7 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/night/sct?size=medium","shortForecast":"Partly Cloudy","detailedForecast":"Partly cloudy, with a low around 26."},{"number":8,"name":"Tuesday","startTime":"2023-01-10T06:00:00-05:00","endTime":"2023-01-10T18:00:00-05:00","isDaytime":true,"temperature":47,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"5 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/day/bkn?size=medium","shortForecast":"Partly Sunny","detailedForecast":"Partly sunny, with a high near 47."},{"number":9,"name":"Tuesday Night","startTime":"2023-01-10T18:00:00-05:00","endTime":"2023-01-11T06:00:00-05:00","isDaytime":false,"temperature":27,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"6 mph","windDirection":"SW","icon":"https://api.weather.gov/icons/land/night/bkn?size=medium","shortForecast":"Mostly Cloudy","detailedForecast":"Mostly cloudy, with a low around 27."},{"number":10,"name":"Wednesday","startTime":"2023-01-11T06:00:00-05:00","endTime":"2023-01-11T18:00:00-05:00","isDaytime":true,"temperature":49,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"6 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/day/sct?size=medium","shortForecast":"Mostly Sunny","detailedForecast":"Mostly sunny, with a high near 49."},{"number":11,"name":"Wednesday Night","startTime":"2023-01-11T18:00:00-05:00","endTime":"2023-01-12T06:00:00-05:00","isDaytime":false,"temperature":32,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"6 mph","windDirection":"SW","icon":"https://api.weather.gov/icons/land/night/bkn?size=medium","shortForecast":"Mostly Cloudy","detailedForecast":"Mostly cloudy, with a low around 32."},{"number":12,"name":"Thursday","startTime":"2023-01-12T06:00:00-05:00","endTime":"2023-01-12T18:00:00-05:00","isDaytime":true,"temperature":48,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"8 mph","windDirection":"S","icon":"https://api.weather.gov/icons/land/day/bkn?size=medium","shortForecast":"Partly Sunny","detailedForecast":"Partly sunny, with a high near 48."},{"number":13,"name":"Thursday Night","startTime":"2023-01-12T18:00:00-05:00","endTime":"2023-01-13T06:00:00-05:00","isDaytime":false,"temperature":35,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"6 to 9 mph","windDirection":"S","icon":"https://api.weather.gov/icons/land/night/rain,50?size=medium","shortForecast":"Chance Light Rain","detailedForecast":"A chance of rain after 7pm. Mostly cloudy, with a low around 35. Chance of precipitation is 50%."},{"number":14,"name":"Friday","startTime":"2023-01-13T06:00:00-05:00","endTime":"2023-01-13T18:00:00-05:00","isDaytime":true,"temperature":45,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"7 mph","windDirection":"SE","icon":"https://api.weather.gov/icons/land/day/rain,70?size=medium","shortForecast":"Light Rain Likely","detailedForecast":"Rain likely. Mostly cloudy, with a high near 45. Chance of precipitation is 70%."}]}
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

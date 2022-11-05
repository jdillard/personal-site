---
### THIS FILE IS AUTO-GENERATED - DO NOT EDIT ###
layout: page
title: Red Rock, Nevada Climbing Weather - Current, Past, and Forecasted Report
title_override: Red Rock<br /><small>Climbing Weather</small>
description: A lightweight weather report for Red Rock, Nevada. Optimized for slow internet connections.
js_includes:
  - weather.js
---

<section class="measure center lh-copy f5-ns f6 ph2 mv4" style="text-align: justify;">
<strong>"Is it dry?"</strong>, an oft-repeated, age-old question. Here are real-time,
precipitation-focused reports of current, past, and forecasted climbing weather for Red Rock, Nevada.
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
<section id="weather" data-crag="red-rock-nevada" class="mv4-ns mv3 ph2 center"></section>
<section id="nearby" class="tc lh-copy">
  <h3>Nearby Crags</h3>
<a class="nowrap no-underline fancy-link relative light-red mh3" href="/crags/joshua-tree-national-park-california-weather.html">Joshua Tree National Park</a>
<a class="nowrap no-underline fancy-link relative light-red mh3" href="/crags/yosemite-national-park-california-weather.html">Yosemite National Park</a>
<a class="nowrap no-underline fancy-link relative light-red mh3" href="/crags/bishop-california-weather.html">Bishop</a>
<a class="nowrap no-underline fancy-link relative light-red mh3" href="/crags/mammoth-lakes-california-weather.html">Mammoth Lakes</a>
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
  var weekly_VEF_111_97 = {"updated":"2022-11-05T08:12:37+00:00","units":"us","forecastGenerator":"BaselineForecastGenerator","generatedAt":"2022-11-05T08:39:24+00:00","updateTime":"2022-11-05T08:12:37+00:00","validTimes":"2022-11-05T02:00:00+00:00/P8DT6H","elevation":{"unitCode":"wmoUnit:m","value":1157.9352},"periods":[{"number":1,"name":"Overnight","startTime":"2022-11-05T01:00:00-07:00","endTime":"2022-11-05T06:00:00-07:00","isDaytime":false,"temperature":40,"temperatureUnit":"F","temperatureTrend":"rising","windSpeed":"3 mph","windDirection":"SW","icon":"https://api.weather.gov/icons/land/night/sct?size=medium","shortForecast":"Partly Cloudy","detailedForecast":"Partly cloudy. Low around 40, with temperatures rising to around 42 overnight. Southwest wind around 3 mph."},{"number":2,"name":"Saturday","startTime":"2022-11-05T06:00:00-07:00","endTime":"2022-11-05T18:00:00-07:00","isDaytime":true,"temperature":65,"temperatureUnit":"F","temperatureTrend":"falling","windSpeed":"2 to 8 mph","windDirection":"SE","icon":"https://api.weather.gov/icons/land/day/few?size=medium","shortForecast":"Sunny","detailedForecast":"Sunny. High near 65, with temperatures falling to around 63 in the afternoon. Southeast wind 2 to 8 mph."},{"number":3,"name":"Saturday Night","startTime":"2022-11-05T18:00:00-07:00","endTime":"2022-11-06T06:00:00-08:00","isDaytime":false,"temperature":41,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"5 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/night/few?size=medium","shortForecast":"Mostly Clear","detailedForecast":"Mostly clear, with a low around 41. West wind around 5 mph."},{"number":4,"name":"Sunday","startTime":"2022-11-06T06:00:00-08:00","endTime":"2022-11-06T18:00:00-08:00","isDaytime":true,"temperature":64,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"3 to 17 mph","windDirection":"SE","icon":"https://api.weather.gov/icons/land/day/few?size=medium","shortForecast":"Sunny","detailedForecast":"Sunny, with a high near 64. Southeast wind 3 to 17 mph, with gusts as high as 26 mph."},{"number":5,"name":"Sunday Night","startTime":"2022-11-06T18:00:00-08:00","endTime":"2022-11-07T06:00:00-08:00","isDaytime":false,"temperature":45,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"16 to 24 mph","windDirection":"SW","icon":"https://api.weather.gov/icons/land/night/wind_sct?size=medium","shortForecast":"Partly Cloudy","detailedForecast":"Partly cloudy, with a low around 45. Southwest wind 16 to 24 mph, with gusts as high as 35 mph."},{"number":6,"name":"Monday","startTime":"2022-11-07T06:00:00-08:00","endTime":"2022-11-07T18:00:00-08:00","isDaytime":true,"temperature":62,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"21 to 26 mph","windDirection":"SSW","icon":"https://api.weather.gov/icons/land/day/wind_sct/rain,30?size=medium","shortForecast":"Mostly Sunny then Chance Light Rain","detailedForecast":"A chance of rain after 4pm. Mostly sunny, with a high near 62. Chance of precipitation is 30%."},{"number":7,"name":"Monday Night","startTime":"2022-11-07T18:00:00-08:00","endTime":"2022-11-08T06:00:00-08:00","isDaytime":false,"temperature":42,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"16 to 22 mph","windDirection":"SSW","icon":"https://api.weather.gov/icons/land/night/rain,40/tsra_sct,40?size=medium","shortForecast":"Chance Light Rain","detailedForecast":"A chance of rain before 4am, then a chance of rain and a slight chance of thunderstorms. Mostly cloudy, with a low around 42. Chance of precipitation is 40%."},{"number":8,"name":"Tuesday","startTime":"2022-11-08T06:00:00-08:00","endTime":"2022-11-08T18:00:00-08:00","isDaytime":true,"temperature":53,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"15 to 20 mph","windDirection":"SSW","icon":"https://api.weather.gov/icons/land/day/tsra_sct?size=medium","shortForecast":"Light Rain Likely","detailedForecast":"Rain likely and a slight chance of thunderstorms. Mostly cloudy, with a high near 53."},{"number":9,"name":"Tuesday Night","startTime":"2022-11-08T18:00:00-08:00","endTime":"2022-11-09T06:00:00-08:00","isDaytime":false,"temperature":34,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"15 to 20 mph","windDirection":"SW","icon":"https://api.weather.gov/icons/land/night/rain/snow?size=medium","shortForecast":"Chance Light Rain then Chance Rain And Snow","detailedForecast":"A chance of rain before midnight, then a chance of rain and snow. Mostly cloudy, with a low around 34."},{"number":10,"name":"Wednesday","startTime":"2022-11-09T06:00:00-08:00","endTime":"2022-11-09T18:00:00-08:00","isDaytime":true,"temperature":49,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"8 to 13 mph","windDirection":"WSW","icon":"https://api.weather.gov/icons/land/day/snow/sct?size=medium","shortForecast":"Slight Chance Light Snow then Mostly Sunny","detailedForecast":"A slight chance of snow before 9am, then a slight chance of rain and snow between 9am and 10am. Mostly sunny, with a high near 49."},{"number":11,"name":"Wednesday Night","startTime":"2022-11-09T18:00:00-08:00","endTime":"2022-11-10T06:00:00-08:00","isDaytime":false,"temperature":32,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"9 mph","windDirection":"NW","icon":"https://api.weather.gov/icons/land/night/few?size=medium","shortForecast":"Mostly Clear","detailedForecast":"Mostly clear, with a low around 32."},{"number":12,"name":"Thursday","startTime":"2022-11-10T06:00:00-08:00","endTime":"2022-11-10T18:00:00-08:00","isDaytime":true,"temperature":51,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"12 mph","windDirection":"N","icon":"https://api.weather.gov/icons/land/day/few?size=medium","shortForecast":"Sunny","detailedForecast":"Sunny, with a high near 51."},{"number":13,"name":"Thursday Night","startTime":"2022-11-10T18:00:00-08:00","endTime":"2022-11-11T06:00:00-08:00","isDaytime":false,"temperature":31,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"10 mph","windDirection":"N","icon":"https://api.weather.gov/icons/land/night/few?size=medium","shortForecast":"Mostly Clear","detailedForecast":"Mostly clear, with a low around 31."},{"number":14,"name":"Veterans Day","startTime":"2022-11-11T06:00:00-08:00","endTime":"2022-11-11T18:00:00-08:00","isDaytime":true,"temperature":52,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"10 mph","windDirection":"NNE","icon":"https://api.weather.gov/icons/land/day/few?size=medium","shortForecast":"Sunny","detailedForecast":"Sunny, with a high near 52."}]}
  var hourly_VEF_111_97 = false
  var crags_config = [
  {
    "name": "Red Rock",
    "note": "Sandstone that can be fragile when wet.",
    "mountainProject": "https://www.mountainproject.com/area/105731932/red-rock",
    "station": "KYCN2",
    "office": "VEF/111,97",
    "coordinates": [
      -115.427,
      36.135
    ]
  }
]</script>

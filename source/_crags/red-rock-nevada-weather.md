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
  var weekly_VEF_111_97 = {"updated":"2022-07-05T19:58:48+00:00","units":"us","forecastGenerator":"BaselineForecastGenerator","generatedAt":"2022-07-06T08:40:28+00:00","updateTime":"2022-07-05T19:58:48+00:00","validTimes":"2022-07-05T13:00:00+00:00/P8DT6H","elevation":{"unitCode":"wmoUnit:m","value":1157.9352},"periods":[{"number":1,"name":"Overnight","startTime":"2022-07-06T01:00:00-07:00","endTime":"2022-07-06T06:00:00-07:00","isDaytime":false,"temperature":68,"temperatureUnit":"F","temperatureTrend":"rising","windSpeed":"10 to 15 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/night/skc?size=medium","shortForecast":"Clear","detailedForecast":"Clear. Low around 68, with temperatures rising to around 71 overnight. West wind 10 to 15 mph, with gusts as high as 21 mph."},{"number":2,"name":"Wednesday","startTime":"2022-07-06T06:00:00-07:00","endTime":"2022-07-06T18:00:00-07:00","isDaytime":true,"temperature":94,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"9 to 17 mph","windDirection":"S","icon":"https://api.weather.gov/icons/land/day/skc?size=medium","shortForecast":"Sunny","detailedForecast":"Sunny, with a high near 94. South wind 9 to 17 mph, with gusts as high as 24 mph."},{"number":3,"name":"Wednesday Night","startTime":"2022-07-06T18:00:00-07:00","endTime":"2022-07-07T06:00:00-07:00","isDaytime":false,"temperature":70,"temperatureUnit":"F","temperatureTrend":"rising","windSpeed":"12 to 21 mph","windDirection":"WSW","icon":"https://api.weather.gov/icons/land/night/wind_skc?size=medium","shortForecast":"Clear","detailedForecast":"Clear. Low around 70, with temperatures rising to around 72 overnight. West southwest wind 12 to 21 mph, with gusts as high as 29 mph."},{"number":4,"name":"Thursday","startTime":"2022-07-07T06:00:00-07:00","endTime":"2022-07-07T18:00:00-07:00","isDaytime":true,"temperature":95,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"10 to 18 mph","windDirection":"S","icon":"https://api.weather.gov/icons/land/day/skc?size=medium","shortForecast":"Sunny","detailedForecast":"Sunny, with a high near 95. South wind 10 to 18 mph, with gusts as high as 25 mph."},{"number":5,"name":"Thursday Night","startTime":"2022-07-07T18:00:00-07:00","endTime":"2022-07-08T06:00:00-07:00","isDaytime":false,"temperature":71,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"13 to 17 mph","windDirection":"SW","icon":"https://api.weather.gov/icons/land/night/skc?size=medium","shortForecast":"Clear","detailedForecast":"Clear, with a low around 71. Southwest wind 13 to 17 mph, with gusts as high as 24 mph."},{"number":6,"name":"Friday","startTime":"2022-07-08T06:00:00-07:00","endTime":"2022-07-08T18:00:00-07:00","isDaytime":true,"temperature":98,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"10 to 18 mph","windDirection":"S","icon":"https://api.weather.gov/icons/land/day/few?size=medium","shortForecast":"Sunny","detailedForecast":"Sunny, with a high near 98."},{"number":7,"name":"Friday Night","startTime":"2022-07-08T18:00:00-07:00","endTime":"2022-07-09T06:00:00-07:00","isDaytime":false,"temperature":73,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"13 to 18 mph","windDirection":"SW","icon":"https://api.weather.gov/icons/land/night/few?size=medium","shortForecast":"Mostly Clear","detailedForecast":"Mostly clear, with a low around 73."},{"number":8,"name":"Saturday","startTime":"2022-07-09T06:00:00-07:00","endTime":"2022-07-09T18:00:00-07:00","isDaytime":true,"temperature":99,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"8 to 18 mph","windDirection":"SSW","icon":"https://api.weather.gov/icons/land/day/few?size=medium","shortForecast":"Sunny","detailedForecast":"Sunny, with a high near 99."},{"number":9,"name":"Saturday Night","startTime":"2022-07-09T18:00:00-07:00","endTime":"2022-07-10T06:00:00-07:00","isDaytime":false,"temperature":75,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"10 to 17 mph","windDirection":"WSW","icon":"https://api.weather.gov/icons/land/night/skc?size=medium","shortForecast":"Clear","detailedForecast":"Clear, with a low around 75."},{"number":10,"name":"Sunday","startTime":"2022-07-10T06:00:00-07:00","endTime":"2022-07-10T18:00:00-07:00","isDaytime":true,"temperature":101,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"7 to 14 mph","windDirection":"S","icon":"https://api.weather.gov/icons/land/day/skc?size=medium","shortForecast":"Sunny","detailedForecast":"Sunny, with a high near 101."},{"number":11,"name":"Sunday Night","startTime":"2022-07-10T18:00:00-07:00","endTime":"2022-07-11T06:00:00-07:00","isDaytime":false,"temperature":77,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"10 to 15 mph","windDirection":"WSW","icon":"https://api.weather.gov/icons/land/night/few?size=medium","shortForecast":"Mostly Clear","detailedForecast":"Mostly clear, with a low around 77."},{"number":12,"name":"Monday","startTime":"2022-07-11T06:00:00-07:00","endTime":"2022-07-11T18:00:00-07:00","isDaytime":true,"temperature":102,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"7 to 15 mph","windDirection":"S","icon":"https://api.weather.gov/icons/land/day/few?size=medium","shortForecast":"Sunny","detailedForecast":"Sunny, with a high near 102."},{"number":13,"name":"Monday Night","startTime":"2022-07-11T18:00:00-07:00","endTime":"2022-07-12T06:00:00-07:00","isDaytime":false,"temperature":77,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"15 mph","windDirection":"SW","icon":"https://api.weather.gov/icons/land/night/few?size=medium","shortForecast":"Mostly Clear","detailedForecast":"Mostly clear, with a low around 77."},{"number":14,"name":"Tuesday","startTime":"2022-07-12T06:00:00-07:00","endTime":"2022-07-12T18:00:00-07:00","isDaytime":true,"temperature":102,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"9 to 17 mph","windDirection":"SSW","icon":"https://api.weather.gov/icons/land/day/few?size=medium","shortForecast":"Sunny","detailedForecast":"Sunny, with a high near 102."}]}
  var hourly_VEF_111_97 = {"correlationId":"228abe7a","title":"Unexpected Problem","type":"https://api.weather.gov/problems/UnexpectedProblem","status":500,"detail":"An unexpected problem has occurred.","instance":"https://api.weather.gov/requests/228abe7a"}
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

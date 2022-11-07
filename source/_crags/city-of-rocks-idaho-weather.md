---
### THIS FILE IS AUTO-GENERATED - DO NOT EDIT ###
layout: page
title: City of Rocks, Idaho Climbing Weather - Current, Past, and Forecasted Report
title_override: City of Rocks<br /><small>Climbing Weather</small>
description: A lightweight weather report for City of Rocks, Idaho. Optimized for slow internet connections.
js_includes:
  - weather.js
---

<section class="measure center lh-copy f5-ns f6 ph2 mv4" style="text-align: justify;">
<strong>"Is it dry?"</strong>, an oft-repeated, age-old question. Here are real-time,
precipitation-focused reports of current, past, and forecasted climbing weather for City of Rocks, Idaho.
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
<section id="weather" data-crag="city-of-rocks-idaho" class="mv4-ns mv3 ph2 center"></section>
<section id="nearby" class="tc lh-copy">
  <h3>Nearby Crags</h3>
<a class="nowrap no-underline fancy-link relative light-red mh3" href="/crags/moab-utah-weather.html">Moab</a>
<a class="nowrap no-underline fancy-link relative light-red mh3" href="/crags/little-cottonwood-canyon-utah-weather.html">Little Cottonwood Canyon</a>
</section>
<section id="nearby" class="tc lh-copy">
  <h3>Other Metros</h3>
  <select class="ma1 bg-near-white pa2" id="stateSel">
    <option value="Texas">Texas</option>
    <option value="Washington">Washington</option>
    <option value="Colorado">Colorado</option>
    <option value="Tennessee">Tennessee</option>
    <option value="Utah" selected>Utah</option>
    <option value="California">California</option>
  </select>
  <select class="ma1 bg-near-white pa2" id="citySel">
    <option value="Salt Lake City" selected>Salt Lake City</option>
  </select>
  <a id="selectMetro" class="f6 link dim ph3 pv2 ma1 dib white bg-light-red" href="/crags/salt-lake-city-utah-weather.html">Select Metro</a>
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
  var weekly_PIH_50_16 = {"updated":"2022-11-07T08:11:50+00:00","units":"us","forecastGenerator":"BaselineForecastGenerator","generatedAt":"2022-11-07T08:42:34+00:00","updateTime":"2022-11-07T08:11:50+00:00","validTimes":"2022-11-07T02:00:00+00:00/P7DT11H","elevation":{"unitCode":"wmoUnit:m","value":1958.9496},"periods":[{"number":1,"name":"Overnight","startTime":"2022-11-07T01:00:00-07:00","endTime":"2022-11-07T06:00:00-07:00","isDaytime":false,"temperature":31,"temperatureUnit":"F","temperatureTrend":"rising","windSpeed":"17 mph","windDirection":"S","icon":"https://api.weather.gov/icons/land/night/snow,30?size=medium","shortForecast":"Chance Rain And Snow","detailedForecast":"A chance of rain and snow. Mostly cloudy. Low around 31, with temperatures rising to around 34 overnight. South wind around 17 mph, with gusts as high as 25 mph. Chance of precipitation is 30%."},{"number":2,"name":"Monday","startTime":"2022-11-07T06:00:00-07:00","endTime":"2022-11-07T18:00:00-07:00","isDaytime":true,"temperature":40,"temperatureUnit":"F","temperatureTrend":"falling","windSpeed":"13 to 22 mph","windDirection":"SW","icon":"https://api.weather.gov/icons/land/day/snow,50/snow,90?size=medium","shortForecast":"Rain And Snow","detailedForecast":"Rain and snow. Mostly cloudy. High near 40, with temperatures falling to around 30 in the afternoon. Southwest wind 13 to 22 mph, with gusts as high as 32 mph. Chance of precipitation is 90%. New snow accumulation of 3 to 7 inches possible."},{"number":3,"name":"Monday Night","startTime":"2022-11-07T18:00:00-07:00","endTime":"2022-11-08T06:00:00-07:00","isDaytime":false,"temperature":24,"temperatureUnit":"F","temperatureTrend":"rising","windSpeed":"6 to 13 mph","windDirection":"NNE","icon":"https://api.weather.gov/icons/land/night/snow,100/snow,70?size=medium","shortForecast":"Heavy Snow","detailedForecast":"Snow. Cloudy. Low around 24, with temperatures rising to around 26 overnight. North northeast wind 6 to 13 mph, with gusts as high as 21 mph. Chance of precipitation is 100%. New snow accumulation of 4 to 8 inches possible."},{"number":4,"name":"Tuesday","startTime":"2022-11-08T06:00:00-07:00","endTime":"2022-11-08T18:00:00-07:00","isDaytime":true,"temperature":34,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"6 to 13 mph","windDirection":"ESE","icon":"https://api.weather.gov/icons/land/day/snow,70/snow,90?size=medium","shortForecast":"Light Snow","detailedForecast":"Snow. Cloudy, with a high near 34. East southeast wind 6 to 13 mph, with gusts as high as 20 mph. Chance of precipitation is 90%. New snow accumulation of 1 to 3 inches possible."},{"number":5,"name":"Tuesday Night","startTime":"2022-11-08T18:00:00-07:00","endTime":"2022-11-09T06:00:00-07:00","isDaytime":false,"temperature":26,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"13 mph","windDirection":"SSE","icon":"https://api.weather.gov/icons/land/night/snow,90?size=medium","shortForecast":"Light Snow","detailedForecast":"Snow. Cloudy, with a low around 26. South southeast wind around 13 mph, with gusts as high as 23 mph. Chance of precipitation is 90%. New snow accumulation of 2 to 4 inches possible."},{"number":6,"name":"Wednesday","startTime":"2022-11-09T06:00:00-07:00","endTime":"2022-11-09T18:00:00-07:00","isDaytime":true,"temperature":30,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"9 to 13 mph","windDirection":"WSW","icon":"https://api.weather.gov/icons/land/day/snow,60?size=medium","shortForecast":"Light Snow Likely","detailedForecast":"Snow likely. Mostly cloudy, with a high near 30. Chance of precipitation is 60%. New snow accumulation of less than one inch possible."},{"number":7,"name":"Wednesday Night","startTime":"2022-11-09T18:00:00-07:00","endTime":"2022-11-10T06:00:00-07:00","isDaytime":false,"temperature":16,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"12 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/night/snow,40/snow,20?size=medium","shortForecast":"Chance Light Snow","detailedForecast":"A chance of snow before 5am. Mostly cloudy, with a low around 16. Chance of precipitation is 40%."},{"number":8,"name":"Thursday","startTime":"2022-11-10T06:00:00-07:00","endTime":"2022-11-10T18:00:00-07:00","isDaytime":true,"temperature":25,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"12 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/day/sct?size=medium","shortForecast":"Mostly Sunny","detailedForecast":"Mostly sunny, with a high near 25."},{"number":9,"name":"Thursday Night","startTime":"2022-11-10T18:00:00-07:00","endTime":"2022-11-11T06:00:00-07:00","isDaytime":false,"temperature":9,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"9 mph","windDirection":"SW","icon":"https://api.weather.gov/icons/land/night/cold?size=medium","shortForecast":"Partly Cloudy","detailedForecast":"Partly cloudy, with a low around 9."},{"number":10,"name":"Veterans Day","startTime":"2022-11-11T06:00:00-07:00","endTime":"2022-11-11T18:00:00-07:00","isDaytime":true,"temperature":26,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"9 mph","windDirection":"S","icon":"https://api.weather.gov/icons/land/day/sct?size=medium","shortForecast":"Mostly Sunny","detailedForecast":"Mostly sunny, with a high near 26."},{"number":11,"name":"Friday Night","startTime":"2022-11-11T18:00:00-07:00","endTime":"2022-11-12T06:00:00-07:00","isDaytime":false,"temperature":11,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"9 mph","windDirection":"S","icon":"https://api.weather.gov/icons/land/night/sct?size=medium","shortForecast":"Partly Cloudy","detailedForecast":"Partly cloudy, with a low around 11."},{"number":12,"name":"Saturday","startTime":"2022-11-12T06:00:00-07:00","endTime":"2022-11-12T18:00:00-07:00","isDaytime":true,"temperature":28,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"9 mph","windDirection":"SSW","icon":"https://api.weather.gov/icons/land/day/bkn?size=medium","shortForecast":"Partly Sunny","detailedForecast":"Partly sunny, with a high near 28."},{"number":13,"name":"Saturday Night","startTime":"2022-11-12T18:00:00-07:00","endTime":"2022-11-13T06:00:00-07:00","isDaytime":false,"temperature":16,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"9 mph","windDirection":"WSW","icon":"https://api.weather.gov/icons/land/night/bkn?size=medium","shortForecast":"Mostly Cloudy","detailedForecast":"Mostly cloudy, with a low around 16."},{"number":14,"name":"Sunday","startTime":"2022-11-13T06:00:00-07:00","endTime":"2022-11-13T18:00:00-07:00","isDaytime":true,"temperature":29,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"8 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/day/bkn?size=medium","shortForecast":"Partly Sunny","detailedForecast":"Partly sunny, with a high near 29."}]}
  var hourly_PIH_50_16 = false
  var crags_config = [
  {
    "name": "City of Rocks",
    "note": "Varnished and pocketed granite",
    "mountainProject": "https://www.mountainproject.com/area/105739322/city-of-rocks",
    "station": "RCKI1",
    "office": "PIH/50,16",
    "coordinates": [
      -113.7215,
      42.0760
    ]
  }
]</script>

---
### THIS FILE IS AUTO-GENERATED - DO NOT EDIT ###
layout: page
title: Little Cottonwood Canyon, Utah Climbing Weather - Current, Past, and Forecasted Report
title_override: Little Cottonwood Canyon<br /><small>Climbing Weather</small>
description: A lightweight weather report for Little Cottonwood Canyon, Utah. Optimized for slow internet connections.
js_includes:
  - weather.js
---

<section class="measure center lh-copy f5-ns f6 ph2 mv4" style="text-align: justify;">
<strong>"Is it dry?"</strong>, an oft-repeated, age-old question. Here are real-time,
precipitation-focused reports of current, past, and forecasted climbing weather for Little Cottonwood Canyon, Utah.
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
<section id="weather" data-crag="little-cottonwood-canyon-utah" class="mv4-ns mv3 ph2 center"></section>
<section id="nearby" class="tc lh-copy">
  <h3>Nearby Crags</h3>
<a class="nowrap no-underline fancy-link relative light-red mh3" href="/crags/moab-utah-weather.html">Moab</a>
<a class="nowrap no-underline fancy-link relative light-red mh3" href="/crags/city-of-rocks-idaho-weather.html">City of Rocks</a>
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
  var weekly_SLC_102_165 = {"updated":"2022-12-07T04:52:04+00:00","units":"us","forecastGenerator":"BaselineForecastGenerator","generatedAt":"2022-12-07T08:37:26+00:00","updateTime":"2022-12-07T04:52:04+00:00","validTimes":"2022-12-06T22:00:00+00:00/P7DT6H","elevation":{"unitCode":"wmoUnit:m","value":1872.0816},"periods":[{"number":1,"name":"Overnight","startTime":"2022-12-07T01:00:00-07:00","endTime":"2022-12-07T06:00:00-07:00","isDaytime":false,"temperature":22,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"6 mph","windDirection":"ESE","icon":"https://api.weather.gov/icons/land/night/sct?size=medium","shortForecast":"Partly Cloudy","detailedForecast":"Partly cloudy, with a low around 22. East southeast wind around 6 mph."},{"number":2,"name":"Wednesday","startTime":"2022-12-07T06:00:00-07:00","endTime":"2022-12-07T18:00:00-07:00","isDaytime":true,"temperature":33,"temperatureUnit":"F","temperatureTrend":"falling","windSpeed":"2 to 6 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/day/snow,40/snow,50?size=medium","shortForecast":"Chance Light Snow","detailedForecast":"A chance of snow after 8am. Partly sunny. High near 33, with temperatures falling to around 30 in the afternoon. West wind 2 to 6 mph. Chance of precipitation is 50%. New snow accumulation of less than one inch possible."},{"number":3,"name":"Wednesday Night","startTime":"2022-12-07T18:00:00-07:00","endTime":"2022-12-08T06:00:00-07:00","isDaytime":false,"temperature":22,"temperatureUnit":"F","temperatureTrend":"rising","windSpeed":"2 to 6 mph","windDirection":"SW","icon":"https://api.weather.gov/icons/land/night/snow,40/snow,20?size=medium","shortForecast":"Chance Light Snow","detailedForecast":"A chance of snow before 5am. Mostly cloudy. Low around 22, with temperatures rising to around 24 overnight. Southwest wind 2 to 6 mph. Chance of precipitation is 40%. New snow accumulation of less than half an inch possible."},{"number":4,"name":"Thursday","startTime":"2022-12-08T06:00:00-07:00","endTime":"2022-12-08T18:00:00-07:00","isDaytime":true,"temperature":33,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"6 to 9 mph","windDirection":"S","icon":"https://api.weather.gov/icons/land/day/sct?size=medium","shortForecast":"Mostly Sunny","detailedForecast":"Mostly sunny, with a high near 33. South wind 6 to 9 mph."},{"number":5,"name":"Thursday Night","startTime":"2022-12-08T18:00:00-07:00","endTime":"2022-12-09T06:00:00-07:00","isDaytime":false,"temperature":24,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"10 mph","windDirection":"SSE","icon":"https://api.weather.gov/icons/land/night/bkn/snow,40?size=medium","shortForecast":"Mostly Cloudy then Chance Light Snow","detailedForecast":"A chance of snow after 5am. Mostly cloudy, with a low around 24. South southeast wind around 10 mph. Chance of precipitation is 40%. Little or no snow accumulation expected."},{"number":6,"name":"Friday","startTime":"2022-12-09T06:00:00-07:00","endTime":"2022-12-09T18:00:00-07:00","isDaytime":true,"temperature":32,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"8 to 12 mph","windDirection":"S","icon":"https://api.weather.gov/icons/land/day/snow,40?size=medium","shortForecast":"Chance Light Snow","detailedForecast":"A chance of snow before 5pm. Partly sunny, with a high near 32. Chance of precipitation is 40%. New snow accumulation of less than half an inch possible."},{"number":7,"name":"Friday Night","startTime":"2022-12-09T18:00:00-07:00","endTime":"2022-12-10T06:00:00-07:00","isDaytime":false,"temperature":23,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"8 to 12 mph","windDirection":"SSE","icon":"https://api.weather.gov/icons/land/night/bkn?size=medium","shortForecast":"Mostly Cloudy","detailedForecast":"Mostly cloudy, with a low around 23."},{"number":8,"name":"Saturday","startTime":"2022-12-10T06:00:00-07:00","endTime":"2022-12-10T18:00:00-07:00","isDaytime":true,"temperature":35,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"12 mph","windDirection":"SSE","icon":"https://api.weather.gov/icons/land/day/snow?size=medium","shortForecast":"Light Snow Likely","detailedForecast":"Snow likely after 11am. Mostly cloudy, with a high near 35."},{"number":9,"name":"Saturday Night","startTime":"2022-12-10T18:00:00-07:00","endTime":"2022-12-11T06:00:00-07:00","isDaytime":false,"temperature":30,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"12 to 15 mph","windDirection":"SSE","icon":"https://api.weather.gov/icons/land/night/snow?size=medium","shortForecast":"Light Snow","detailedForecast":"Snow. Cloudy, with a low around 30."},{"number":10,"name":"Sunday","startTime":"2022-12-11T06:00:00-07:00","endTime":"2022-12-11T18:00:00-07:00","isDaytime":true,"temperature":36,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"8 to 15 mph","windDirection":"S","icon":"https://api.weather.gov/icons/land/day/snow?size=medium","shortForecast":"Light Snow","detailedForecast":"Snow. Cloudy, with a high near 36."},{"number":11,"name":"Sunday Night","startTime":"2022-12-11T18:00:00-07:00","endTime":"2022-12-12T06:00:00-07:00","isDaytime":false,"temperature":26,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"10 mph","windDirection":"WNW","icon":"https://api.weather.gov/icons/land/night/snow?size=medium","shortForecast":"Chance Light Snow","detailedForecast":"A chance of snow. Mostly cloudy, with a low around 26."},{"number":12,"name":"Monday","startTime":"2022-12-12T06:00:00-07:00","endTime":"2022-12-12T18:00:00-07:00","isDaytime":true,"temperature":28,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"10 mph","windDirection":"NW","icon":"https://api.weather.gov/icons/land/day/snow?size=medium","shortForecast":"Chance Light Snow","detailedForecast":"A chance of snow. Mostly cloudy, with a high near 28."},{"number":13,"name":"Monday Night","startTime":"2022-12-12T18:00:00-07:00","endTime":"2022-12-13T06:00:00-07:00","isDaytime":false,"temperature":15,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"10 mph","windDirection":"NW","icon":"https://api.weather.gov/icons/land/night/snow/bkn?size=medium","shortForecast":"Slight Chance Light Snow then Mostly Cloudy","detailedForecast":"A slight chance of snow before 11pm. Mostly cloudy, with a low around 15."},{"number":14,"name":"Tuesday","startTime":"2022-12-13T06:00:00-07:00","endTime":"2022-12-13T18:00:00-07:00","isDaytime":true,"temperature":22,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"8 mph","windDirection":"WNW","icon":"https://api.weather.gov/icons/land/day/bkn?size=medium","shortForecast":"Mostly Cloudy","detailedForecast":"Mostly cloudy, with a high near 22."}]}
  var hourly_SLC_102_165 = false
  var crags_config = [
  {
    "name": "Little Cottonwood Canyon",
    "note": "Primarily quartz monzonite (white granite, essentially)",
    "mountainProject": "https://www.mountainproject.com/area/105739277/little-cottonwood-canyon",
    "station": "KSLC",
    "office": "SLC/102,165",
    "coordinates": [
      -111.775,
      40.5727
    ]
  }
]</script>

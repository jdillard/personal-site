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
  var weekly_REV_58_16 = {"updated":"2023-01-10T04:59:16+00:00","units":"us","forecastGenerator":"BaselineForecastGenerator","generatedAt":"2023-01-10T05:25:30+00:00","updateTime":"2023-01-10T04:59:16+00:00","validTimes":"2023-01-09T22:00:00+00:00/P7DT6H","elevation":{"unitCode":"wmoUnit:m","value":2411.8824},"periods":[{"number":1,"name":"Tonight","startTime":"2023-01-09T21:00:00-08:00","endTime":"2023-01-10T06:00:00-08:00","isDaytime":false,"temperature":26,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"25 to 30 mph","windDirection":"SW","icon":"https://api.weather.gov/icons/land/night/snow,90?size=medium","shortForecast":"Heavy Snow then Snow Showers Likely","detailedForecast":"Snow before 10pm, then snow showers likely and a slight chance of thunderstorms between 10pm and 1am, then snow. Cloudy, with a low around 26. Southwest wind 25 to 30 mph, with gusts as high as 45 mph. Chance of precipitation is 90%. New snow accumulation of 18 to 24 inches possible."},{"number":2,"name":"Tuesday","startTime":"2023-01-10T06:00:00-08:00","endTime":"2023-01-10T18:00:00-08:00","isDaytime":true,"temperature":32,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"25 mph","windDirection":"SW","icon":"https://api.weather.gov/icons/land/day/snow,100/snow,80?size=medium","shortForecast":"Heavy Snow","detailedForecast":"Snow before 7am, then snow showers and a slight chance of thunderstorms between 7am and 10am, then snow and a slight chance of thunderstorms. Cloudy, with a high near 32. Southwest wind around 25 mph, with gusts as high as 40 mph. Chance of precipitation is 100%. New snow accumulation of 16 to 22 inches possible."},{"number":3,"name":"Tuesday Night","startTime":"2023-01-10T18:00:00-08:00","endTime":"2023-01-11T06:00:00-08:00","isDaytime":false,"temperature":17,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"5 to 30 mph","windDirection":"SW","icon":"https://api.weather.gov/icons/land/night/snow,70/wind_bkn?size=medium","shortForecast":"Snow Likely then Mostly Cloudy","detailedForecast":"Snow likely before 10pm. Mostly cloudy, with a low around 17. Southwest wind 5 to 30 mph, with gusts as high as 50 mph. Chance of precipitation is 70%. New snow accumulation of 1 to 3 inches possible."},{"number":4,"name":"Wednesday","startTime":"2023-01-11T06:00:00-08:00","endTime":"2023-01-11T18:00:00-08:00","isDaytime":true,"temperature":37,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"5 mph","windDirection":"SW","icon":"https://api.weather.gov/icons/land/day/snow,40?size=medium","shortForecast":"Chance Light Snow","detailedForecast":"A chance of snow after 10am. Partly sunny, with a high near 37. Southwest wind around 5 mph, with gusts as high as 25 mph. Chance of precipitation is 40%. New snow accumulation of less than one inch possible."},{"number":5,"name":"Wednesday Night","startTime":"2023-01-11T18:00:00-08:00","endTime":"2023-01-12T06:00:00-08:00","isDaytime":false,"temperature":25,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"0 to 5 mph","windDirection":"SW","icon":"https://api.weather.gov/icons/land/night/snow,20/bkn?size=medium","shortForecast":"Slight Chance Light Snow then Mostly Cloudy","detailedForecast":"A slight chance of snow before 10pm. Mostly cloudy, with a low around 25. Southwest wind 0 to 5 mph. Chance of precipitation is 20%."},{"number":6,"name":"Thursday","startTime":"2023-01-12T06:00:00-08:00","endTime":"2023-01-12T18:00:00-08:00","isDaytime":true,"temperature":42,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"0 to 5 mph","windDirection":"S","icon":"https://api.weather.gov/icons/land/day/bkn?size=medium","shortForecast":"Partly Sunny","detailedForecast":"Partly sunny, with a high near 42. South wind 0 to 5 mph."},{"number":7,"name":"Thursday Night","startTime":"2023-01-12T18:00:00-08:00","endTime":"2023-01-13T06:00:00-08:00","isDaytime":false,"temperature":27,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"0 to 10 mph","windDirection":"SW","icon":"https://api.weather.gov/icons/land/night/bkn?size=medium","shortForecast":"Mostly Cloudy","detailedForecast":"Mostly cloudy, with a low around 27."},{"number":8,"name":"Friday","startTime":"2023-01-13T06:00:00-08:00","endTime":"2023-01-13T18:00:00-08:00","isDaytime":true,"temperature":41,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"5 to 10 mph","windDirection":"SW","icon":"https://api.weather.gov/icons/land/day/bkn/snow?size=medium","shortForecast":"Partly Sunny then Slight Chance Light Snow","detailedForecast":"A slight chance of snow after 4pm. Partly sunny, with a high near 41."},{"number":9,"name":"Friday Night","startTime":"2023-01-13T18:00:00-08:00","endTime":"2023-01-14T06:00:00-08:00","isDaytime":false,"temperature":24,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"10 mph","windDirection":"SW","icon":"https://api.weather.gov/icons/land/night/snow?size=medium","shortForecast":"Chance Light Snow","detailedForecast":"A chance of snow. Mostly cloudy, with a low around 24."},{"number":10,"name":"Saturday","startTime":"2023-01-14T06:00:00-08:00","endTime":"2023-01-14T18:00:00-08:00","isDaytime":true,"temperature":35,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"10 mph","windDirection":"SW","icon":"https://api.weather.gov/icons/land/day/snow?size=medium","shortForecast":"Snow Likely","detailedForecast":"Snow likely. Mostly cloudy, with a high near 35. New snow accumulation of 3 to 5 inches possible."},{"number":11,"name":"Saturday Night","startTime":"2023-01-14T18:00:00-08:00","endTime":"2023-01-15T06:00:00-08:00","isDaytime":false,"temperature":21,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"10 mph","windDirection":"SW","icon":"https://api.weather.gov/icons/land/night/snow?size=medium","shortForecast":"Snow Likely","detailedForecast":"Snow likely. Mostly cloudy, with a low around 21. New snow accumulation of 3 to 7 inches possible."},{"number":12,"name":"Sunday","startTime":"2023-01-15T06:00:00-08:00","endTime":"2023-01-15T18:00:00-08:00","isDaytime":true,"temperature":33,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"10 mph","windDirection":"SW","icon":"https://api.weather.gov/icons/land/day/snow?size=medium","shortForecast":"Snow Likely","detailedForecast":"Snow likely. Mostly cloudy, with a high near 33. New snow accumulation of 3 to 5 inches possible."},{"number":13,"name":"Sunday Night","startTime":"2023-01-15T18:00:00-08:00","endTime":"2023-01-16T06:00:00-08:00","isDaytime":false,"temperature":20,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"10 mph","windDirection":"SW","icon":"https://api.weather.gov/icons/land/night/snow?size=medium","shortForecast":"Snow Likely","detailedForecast":"Snow likely. Mostly cloudy, with a low around 20. New snow accumulation of 4 to 8 inches possible."},{"number":14,"name":"M.L. King Jr. Day","startTime":"2023-01-16T06:00:00-08:00","endTime":"2023-01-16T18:00:00-08:00","isDaytime":true,"temperature":32,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"10 mph","windDirection":"SW","icon":"https://api.weather.gov/icons/land/day/snow?size=medium","shortForecast":"Snow Likely","detailedForecast":"Snow likely before 5pm. Mostly cloudy, with a high near 32. New snow accumulation of 3 to 5 inches possible."}]}
  var hourly_REV_58_16 = false
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

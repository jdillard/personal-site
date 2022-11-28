---
### THIS FILE IS AUTO-GENERATED - DO NOT EDIT ###
layout: page
title: Yosemite National Park, California Climbing Weather - Current, Past, and Forecasted Report
title_override: Yosemite National Park<br /><small>Climbing Weather</small>
description: A lightweight weather report for Yosemite National Park, California. Optimized for slow internet connections.
js_includes:
  - weather.js
---

<section class="measure center lh-copy f5-ns f6 ph2 mv4" style="text-align: justify;">
<strong>"Is it dry?"</strong>, an oft-repeated, age-old question. Here are real-time,
precipitation-focused reports of current, past, and forecasted climbing weather for Yosemite National Park, California.
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
<section id="weather" data-crag="yosemite-national-park-california" class="mv4-ns mv3 ph2 center"></section>
<section id="nearby" class="tc lh-copy">
  <h3>Nearby Crags</h3>
<a class="nowrap no-underline fancy-link relative light-red mh3" href="/crags/joshua-tree-national-park-california-weather.html">Joshua Tree National Park</a>
<a class="nowrap no-underline fancy-link relative light-red mh3" href="/crags/bishop-california-weather.html">Bishop</a>
<a class="nowrap no-underline fancy-link relative light-red mh3" href="/crags/mammoth-lakes-california-weather.html">Mammoth Lakes</a>
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
  var weekly_HNX_66_143 = {"updated":"2022-11-28T07:57:36+00:00","units":"us","forecastGenerator":"BaselineForecastGenerator","generatedAt":"2022-11-28T08:38:41+00:00","updateTime":"2022-11-28T07:57:36+00:00","validTimes":"2022-11-28T01:00:00+00:00/P7D","elevation":{"unitCode":"wmoUnit:m","value":2167.128},"periods":[{"number":1,"name":"Overnight","startTime":"2022-11-28T00:00:00-08:00","endTime":"2022-11-28T06:00:00-08:00","isDaytime":false,"temperature":28,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"0 mph","windDirection":"E","icon":"https://api.weather.gov/icons/land/night/cold?size=medium","shortForecast":"Partly Cloudy","detailedForecast":"Partly cloudy, with a low around 28. Wind chill values as low as 29. East wind around 0 mph."},{"number":2,"name":"Monday","startTime":"2022-11-28T06:00:00-08:00","endTime":"2022-11-28T18:00:00-08:00","isDaytime":true,"temperature":36,"temperatureUnit":"F","temperatureTrend":"falling","windSpeed":"0 to 5 mph","windDirection":"S","icon":"https://api.weather.gov/icons/land/day/sct?size=medium","shortForecast":"Mostly Sunny then Widespread Frost","detailedForecast":"Widespread frost after 5pm. Mostly sunny. High near 36, with temperatures falling to around 29 in the afternoon. Wind chill values as low as 25. South wind 0 to 5 mph."},{"number":3,"name":"Monday Night","startTime":"2022-11-28T18:00:00-08:00","endTime":"2022-11-29T06:00:00-08:00","isDaytime":false,"temperature":20,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"0 mph","windDirection":"ESE","icon":"https://api.weather.gov/icons/land/night/cold?size=medium","shortForecast":"Widespread Frost then Partly Cloudy","detailedForecast":"Widespread frost before 11pm. Partly cloudy, with a low around 20. Wind chill values as low as 21. East southeast wind around 0 mph."},{"number":4,"name":"Tuesday","startTime":"2022-11-29T06:00:00-08:00","endTime":"2022-11-29T18:00:00-08:00","isDaytime":true,"temperature":38,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"0 mph","windDirection":"NNE","icon":"https://api.weather.gov/icons/land/day/few?size=medium","shortForecast":"Sunny then Widespread Frost","detailedForecast":"Widespread frost after 4pm. Sunny, with a high near 38. Wind chill values as low as 21. North northeast wind around 0 mph."},{"number":5,"name":"Tuesday Night","startTime":"2022-11-29T18:00:00-08:00","endTime":"2022-11-30T06:00:00-08:00","isDaytime":false,"temperature":27,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"0 mph","windDirection":"SSE","icon":"https://api.weather.gov/icons/land/night/cold?size=medium","shortForecast":"Widespread Frost then Mostly Clear","detailedForecast":"Widespread frost before 7pm. Mostly clear, with a low around 27. South southeast wind around 0 mph."},{"number":6,"name":"Wednesday","startTime":"2022-11-30T06:00:00-08:00","endTime":"2022-11-30T18:00:00-08:00","isDaytime":true,"temperature":39,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"0 to 5 mph","windDirection":"SSE","icon":"https://api.weather.gov/icons/land/day/sct?size=medium","shortForecast":"Mostly Sunny","detailedForecast":"Mostly sunny, with a high near 39. South southeast wind 0 to 5 mph."},{"number":7,"name":"Wednesday Night","startTime":"2022-11-30T18:00:00-08:00","endTime":"2022-12-01T06:00:00-08:00","isDaytime":false,"temperature":27,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"5 mph","windDirection":"S","icon":"https://api.weather.gov/icons/land/night/cold/snow,40?size=medium","shortForecast":"Partly Cloudy then Chance Light Snow","detailedForecast":"A chance of snow after 4am. Partly cloudy, with a low around 27. South wind around 5 mph. Chance of precipitation is 40%. New snow accumulation of 1 to 2 inches possible."},{"number":8,"name":"Thursday","startTime":"2022-12-01T06:00:00-08:00","endTime":"2022-12-01T18:00:00-08:00","isDaytime":true,"temperature":32,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"5 to 10 mph","windDirection":"S","icon":"https://api.weather.gov/icons/land/day/snow,70?size=medium","shortForecast":"Heavy Snow Likely","detailedForecast":"Snow likely. Mostly cloudy, with a high near 32. South wind 5 to 10 mph, with gusts as high as 25 mph. Chance of precipitation is 70%. New snow accumulation of 11 to 17 inches possible."},{"number":9,"name":"Thursday Night","startTime":"2022-12-01T18:00:00-08:00","endTime":"2022-12-02T06:00:00-08:00","isDaytime":false,"temperature":23,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"10 mph","windDirection":"S","icon":"https://api.weather.gov/icons/land/night/snow,70/snow,60?size=medium","shortForecast":"Heavy Snow Likely","detailedForecast":"Snow likely. Mostly cloudy, with a low around 23. South wind around 10 mph, with gusts as high as 35 mph. Chance of precipitation is 70%. New snow accumulation of 11 to 17 inches possible."},{"number":10,"name":"Friday","startTime":"2022-12-02T06:00:00-08:00","endTime":"2022-12-02T18:00:00-08:00","isDaytime":true,"temperature":32,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"5 to 10 mph","windDirection":"SSW","icon":"https://api.weather.gov/icons/land/day/snow,40/snow,30?size=medium","shortForecast":"Chance Heavy Snow","detailedForecast":"A chance of snow. Partly sunny, with a high near 32. South southwest wind 5 to 10 mph, with gusts as high as 25 mph. Chance of precipitation is 40%. New snow accumulation of 3 to 7 inches possible."},{"number":11,"name":"Friday Night","startTime":"2022-12-02T18:00:00-08:00","endTime":"2022-12-03T06:00:00-08:00","isDaytime":false,"temperature":22,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"5 mph","windDirection":"SSE","icon":"https://api.weather.gov/icons/land/night/snow,30?size=medium","shortForecast":"Chance Light Snow","detailedForecast":"A chance of snow. Partly cloudy, with a low around 22. South southeast wind around 5 mph. Chance of precipitation is 30%. New snow accumulation of 1 to 3 inches possible."},{"number":12,"name":"Saturday","startTime":"2022-12-03T06:00:00-08:00","endTime":"2022-12-03T18:00:00-08:00","isDaytime":true,"temperature":33,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"5 to 10 mph","windDirection":"SSW","icon":"https://api.weather.gov/icons/land/day/snow,40/snow,50?size=medium","shortForecast":"Chance Heavy Snow","detailedForecast":"A chance of snow. Partly sunny, with a high near 33. South southwest wind 5 to 10 mph, with gusts as high as 20 mph. Chance of precipitation is 50%. New snow accumulation of 5 to 9 inches possible."},{"number":13,"name":"Saturday Night","startTime":"2022-12-03T18:00:00-08:00","endTime":"2022-12-04T06:00:00-08:00","isDaytime":false,"temperature":22,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"5 mph","windDirection":"SSW","icon":"https://api.weather.gov/icons/land/night/snow,50?size=medium","shortForecast":"Chance Heavy Snow","detailedForecast":"A chance of snow. Mostly cloudy, with a low around 22. South southwest wind around 5 mph, with gusts as high as 20 mph. Chance of precipitation is 50%. New snow accumulation of 11 to 17 inches possible."},{"number":14,"name":"Sunday","startTime":"2022-12-04T06:00:00-08:00","endTime":"2022-12-04T18:00:00-08:00","isDaytime":true,"temperature":31,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"5 to 10 mph","windDirection":"SSW","icon":"https://api.weather.gov/icons/land/day/snow,50?size=medium","shortForecast":"Chance Heavy Snow","detailedForecast":"A chance of snow before 5pm. Partly sunny, with a high near 31. South southwest wind 5 to 10 mph, with gusts as high as 20 mph. Chance of precipitation is 50%. New snow accumulation of 7 to 11 inches possible."}]}
  var hourly_HNX_66_143 = false
  var crags_config = [
  {
    "name": "Yosemite National Park",
    "note": "Glacial granite.",
    "mountainProject": "https://www.mountainproject.com/area/105833381/yosemite-national-park",
    "station": "AHIC1",
    "office": "HNX/66,143",
    "coordinates": [
      -119.604,
      37.741
    ]
  }
]</script>

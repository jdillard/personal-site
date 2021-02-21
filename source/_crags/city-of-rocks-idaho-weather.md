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
  var weekly_PIH_50_16 = {"updated":"2021-02-20T21:06:53+00:00","units":"us","forecastGenerator":"BaselineForecastGenerator","generatedAt":"2021-02-21T08:47:01+00:00","updateTime":"2021-02-20T21:06:53+00:00","validTimes":"2021-02-20T15:00:00+00:00/P7DT22H","elevation":{"value":1958.9496,"unitCode":"unit:m"},"periods":[{"number":1,"name":"Overnight","startTime":"2021-02-21T01:00:00-07:00","endTime":"2021-02-21T06:00:00-07:00","isDaytime":false,"temperature":17,"temperatureUnit":"F","temperatureTrend":"rising","windSpeed":"17 to 30 mph","windDirection":"WNW","icon":"https://api.weather.gov/icons/land/night/wind_bkn?size=medium","shortForecast":"Mostly Cloudy","detailedForecast":"Mostly cloudy. Low around 17, with temperatures rising to around 19 overnight. West northwest wind 17 to 30 mph, with gusts as high as 40 mph."},{"number":2,"name":"Sunday","startTime":"2021-02-21T06:00:00-07:00","endTime":"2021-02-21T18:00:00-07:00","isDaytime":true,"temperature":30,"temperatureUnit":"F","temperatureTrend":"falling","windSpeed":"16 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/day/bkn?size=medium","shortForecast":"Mostly Cloudy","detailedForecast":"Mostly cloudy. High near 30, with temperatures falling to around 28 in the afternoon. West wind around 16 mph, with gusts as high as 24 mph."},{"number":3,"name":"Sunday Night","startTime":"2021-02-21T18:00:00-07:00","endTime":"2021-02-22T06:00:00-07:00","isDaytime":false,"temperature":23,"temperatureUnit":"F","temperatureTrend":"rising","windSpeed":"10 to 15 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/night/bkn?size=medium","shortForecast":"Mostly Cloudy","detailedForecast":"Mostly cloudy. Low around 23, with temperatures rising to around 26 overnight. West wind 10 to 15 mph, with gusts as high as 23 mph."},{"number":4,"name":"Monday","startTime":"2021-02-22T06:00:00-07:00","endTime":"2021-02-22T18:00:00-07:00","isDaytime":true,"temperature":38,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"13 mph","windDirection":"WSW","icon":"https://api.weather.gov/icons/land/day/sct?size=medium","shortForecast":"Mostly Sunny","detailedForecast":"Mostly sunny, with a high near 38. West southwest wind around 13 mph, with gusts as high as 21 mph."},{"number":5,"name":"Monday Night","startTime":"2021-02-22T18:00:00-07:00","endTime":"2021-02-23T06:00:00-07:00","isDaytime":false,"temperature":24,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"10 to 15 mph","windDirection":"WSW","icon":"https://api.weather.gov/icons/land/night/snow,20/snow,30?size=medium","shortForecast":"Chance Light Snow","detailedForecast":"A chance of snow after 11pm. Partly cloudy, with a low around 24. West southwest wind 10 to 15 mph, with gusts as high as 24 mph. Chance of precipitation is 30%. Little or no snow accumulation expected."},{"number":6,"name":"Tuesday","startTime":"2021-02-23T06:00:00-07:00","endTime":"2021-02-23T18:00:00-07:00","isDaytime":true,"temperature":32,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"14 to 23 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/day/blizzard,30/blizzard?size=medium","shortForecast":"Chance Light Snow And Patchy Blowing Snow","detailedForecast":"A chance of snow before 8am, then a chance of snow and patchy blowing snow between 8am and 5pm. Partly sunny, with a high near 32. Chance of precipitation is 30%. Little or no snow accumulation expected."},{"number":7,"name":"Tuesday Night","startTime":"2021-02-23T18:00:00-07:00","endTime":"2021-02-24T06:00:00-07:00","isDaytime":false,"temperature":17,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"12 to 18 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/night/sct?size=medium","shortForecast":"Partly Cloudy","detailedForecast":"Partly cloudy, with a low around 17."},{"number":8,"name":"Wednesday","startTime":"2021-02-24T06:00:00-07:00","endTime":"2021-02-24T18:00:00-07:00","isDaytime":true,"temperature":27,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"10 to 15 mph","windDirection":"WNW","icon":"https://api.weather.gov/icons/land/day/bkn?size=medium","shortForecast":"Partly Sunny","detailedForecast":"Partly sunny, with a high near 27."},{"number":9,"name":"Wednesday Night","startTime":"2021-02-24T18:00:00-07:00","endTime":"2021-02-25T06:00:00-07:00","isDaytime":false,"temperature":12,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"10 to 14 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/night/sct?size=medium","shortForecast":"Partly Cloudy","detailedForecast":"Partly cloudy, with a low around 12."},{"number":10,"name":"Thursday","startTime":"2021-02-25T06:00:00-07:00","endTime":"2021-02-25T18:00:00-07:00","isDaytime":true,"temperature":30,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"12 to 16 mph","windDirection":"SW","icon":"https://api.weather.gov/icons/land/day/snow,20?size=medium","shortForecast":"Slight Chance Light Snow","detailedForecast":"A slight chance of snow after 11am. Partly sunny, with a high near 30. Chance of precipitation is 20%."},{"number":11,"name":"Thursday Night","startTime":"2021-02-25T18:00:00-07:00","endTime":"2021-02-26T06:00:00-07:00","isDaytime":false,"temperature":19,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"15 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/night/snow,20?size=medium","shortForecast":"Slight Chance Light Snow","detailedForecast":"A slight chance of snow. Mostly cloudy, with a low around 19. Chance of precipitation is 20%."},{"number":12,"name":"Friday","startTime":"2021-02-26T06:00:00-07:00","endTime":"2021-02-26T18:00:00-07:00","isDaytime":true,"temperature":31,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"14 to 17 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/day/snow,30?size=medium","shortForecast":"Chance Light Snow","detailedForecast":"A chance of snow. Mostly cloudy, with a high near 31. Chance of precipitation is 30%."},{"number":13,"name":"Friday Night","startTime":"2021-02-26T18:00:00-07:00","endTime":"2021-02-27T06:00:00-07:00","isDaytime":false,"temperature":21,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"15 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/night/snow,30?size=medium","shortForecast":"Chance Light Snow","detailedForecast":"A chance of snow. Mostly cloudy, with a low around 21. Chance of precipitation is 30%."},{"number":14,"name":"Saturday","startTime":"2021-02-27T06:00:00-07:00","endTime":"2021-02-27T18:00:00-07:00","isDaytime":true,"temperature":34,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"14 to 17 mph","windDirection":"WNW","icon":"https://api.weather.gov/icons/land/day/snow,30?size=medium","shortForecast":"Chance Light Snow","detailedForecast":"A chance of snow before 5pm. Partly sunny, with a high near 34. Chance of precipitation is 30%."}]}
  var hourly_PIH_50_16 = {"correlationId":"1516a7b6","title":"Unexpected Problem","type":"https://api.weather.gov/problems/UnexpectedProblem","status":500,"detail":"An unexpected problem has occurred.","instance":"https://api.weather.gov/requests/1516a7b6"}
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

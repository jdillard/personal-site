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
  var weekly_PIH_50_16 = {"updated":"2022-04-15T03:34:05+00:00","units":"us","forecastGenerator":"BaselineForecastGenerator","generatedAt":"2022-04-15T08:39:39+00:00","updateTime":"2022-04-15T03:34:05+00:00","validTimes":"2022-04-14T21:00:00+00:00/P7DT15H","elevation":{"unitCode":"wmoUnit:m","value":1958.9496},"periods":[{"number":1,"name":"Overnight","startTime":"2022-04-15T02:00:00-06:00","endTime":"2022-04-15T06:00:00-06:00","isDaytime":false,"temperature":24,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"12 to 15 mph","windDirection":"NW","icon":"https://api.weather.gov/icons/land/night/snow,40?size=medium","shortForecast":"Chance Light Snow","detailedForecast":"A chance of snow. Mostly cloudy, with a low around 24. Northwest wind 12 to 15 mph, with gusts as high as 22 mph. Chance of precipitation is 40%. New snow accumulation of less than half an inch possible."},{"number":2,"name":"Friday","startTime":"2022-04-15T06:00:00-06:00","endTime":"2022-04-15T18:00:00-06:00","isDaytime":true,"temperature":41,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"10 to 16 mph","windDirection":"WNW","icon":"https://api.weather.gov/icons/land/day/snow,20/bkn?size=medium","shortForecast":"Slight Chance Light Snow then Partly Sunny","detailedForecast":"A slight chance of snow before noon. Partly sunny, with a high near 41. West northwest wind 10 to 16 mph, with gusts as high as 22 mph. Chance of precipitation is 20%."},{"number":3,"name":"Friday Night","startTime":"2022-04-15T18:00:00-06:00","endTime":"2022-04-16T06:00:00-06:00","isDaytime":false,"temperature":28,"temperatureUnit":"F","temperatureTrend":"rising","windSpeed":"7 to 13 mph","windDirection":"ENE","icon":"https://api.weather.gov/icons/land/night/sct?size=medium","shortForecast":"Partly Cloudy","detailedForecast":"Partly cloudy. Low around 28, with temperatures rising to around 30 overnight. East northeast wind 7 to 13 mph, with gusts as high as 18 mph."},{"number":4,"name":"Saturday","startTime":"2022-04-16T06:00:00-06:00","endTime":"2022-04-16T18:00:00-06:00","isDaytime":true,"temperature":52,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"8 to 25 mph","windDirection":"SW","icon":"https://api.weather.gov/icons/land/day/snow,20/tsra_sct,50?size=medium","shortForecast":"Slight Chance Snow Showers then Chance Showers And Thunderstorms","detailedForecast":"A slight chance of snow showers before noon, then a chance of showers and thunderstorms. Mostly cloudy, with a high near 52. Southwest wind 8 to 25 mph, with gusts as high as 36 mph. Chance of precipitation is 50%."},{"number":5,"name":"Saturday Night","startTime":"2022-04-16T18:00:00-06:00","endTime":"2022-04-17T06:00:00-06:00","isDaytime":false,"temperature":22,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"13 to 26 mph","windDirection":"WNW","icon":"https://api.weather.gov/icons/land/night/snow,20/wind_sct?size=medium","shortForecast":"Slight Chance T-storms then Partly Cloudy","detailedForecast":"A slight chance of thunderstorms and a slight chance of rain and snow showers before midnight. Partly cloudy, with a low around 22. West northwest wind 13 to 26 mph, with gusts as high as 37 mph. Chance of precipitation is 20%. New snow accumulation of less than half an inch possible."},{"number":6,"name":"Sunday","startTime":"2022-04-17T06:00:00-06:00","endTime":"2022-04-17T18:00:00-06:00","isDaytime":true,"temperature":47,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"8 to 14 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/day/sct?size=medium","shortForecast":"Mostly Sunny","detailedForecast":"Mostly sunny, with a high near 47."},{"number":7,"name":"Sunday Night","startTime":"2022-04-17T18:00:00-06:00","endTime":"2022-04-18T06:00:00-06:00","isDaytime":false,"temperature":31,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"8 to 13 mph","windDirection":"S","icon":"https://api.weather.gov/icons/land/night/sct?size=medium","shortForecast":"Partly Cloudy","detailedForecast":"Partly cloudy, with a low around 31."},{"number":8,"name":"Monday","startTime":"2022-04-18T06:00:00-06:00","endTime":"2022-04-18T18:00:00-06:00","isDaytime":true,"temperature":60,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"9 to 17 mph","windDirection":"S","icon":"https://api.weather.gov/icons/land/day/sct?size=medium","shortForecast":"Mostly Sunny","detailedForecast":"Mostly sunny, with a high near 60."},{"number":9,"name":"Monday Night","startTime":"2022-04-18T18:00:00-06:00","endTime":"2022-04-19T06:00:00-06:00","isDaytime":false,"temperature":34,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"10 to 17 mph","windDirection":"SW","icon":"https://api.weather.gov/icons/land/night/bkn?size=medium","shortForecast":"Mostly Cloudy","detailedForecast":"Mostly cloudy, with a low around 34."},{"number":10,"name":"Tuesday","startTime":"2022-04-19T06:00:00-06:00","endTime":"2022-04-19T18:00:00-06:00","isDaytime":true,"temperature":46,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"13 to 20 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/day/snow,30?size=medium","shortForecast":"Chance Snow Showers","detailedForecast":"A chance of snow showers. Mostly cloudy, with a high near 46. Chance of precipitation is 30%."},{"number":11,"name":"Tuesday Night","startTime":"2022-04-19T18:00:00-06:00","endTime":"2022-04-20T06:00:00-06:00","isDaytime":false,"temperature":29,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"8 to 21 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/night/wind_sct?size=medium","shortForecast":"Partly Cloudy","detailedForecast":"Partly cloudy, with a low around 29."},{"number":12,"name":"Wednesday","startTime":"2022-04-20T06:00:00-06:00","endTime":"2022-04-20T18:00:00-06:00","isDaytime":true,"temperature":54,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"7 to 14 mph","windDirection":"SW","icon":"https://api.weather.gov/icons/land/day/sct?size=medium","shortForecast":"Mostly Sunny","detailedForecast":"Mostly sunny, with a high near 54."},{"number":13,"name":"Wednesday Night","startTime":"2022-04-20T18:00:00-06:00","endTime":"2022-04-21T06:00:00-06:00","isDaytime":false,"temperature":37,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"9 to 13 mph","windDirection":"SSW","icon":"https://api.weather.gov/icons/land/night/bkn?size=medium","shortForecast":"Mostly Cloudy","detailedForecast":"Mostly cloudy, with a low around 37."},{"number":14,"name":"Thursday","startTime":"2022-04-21T06:00:00-06:00","endTime":"2022-04-21T18:00:00-06:00","isDaytime":true,"temperature":61,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"9 to 16 mph","windDirection":"SSW","icon":"https://api.weather.gov/icons/land/day/snow,20/snow,30?size=medium","shortForecast":"Chance Rain And Snow Showers","detailedForecast":"A chance of rain and snow showers. Partly sunny, with a high near 61. Chance of precipitation is 30%."}]}
  var hourly_PIH_50_16 = {"correlationId":"4a102497","title":"Unexpected Problem","type":"https://api.weather.gov/problems/UnexpectedProblem","status":500,"detail":"An unexpected problem has occurred.","instance":"https://api.weather.gov/requests/4a102497"}
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

---
### THIS FILE IS AUTO-GENERATED - DO NOT EDIT ###
layout: page
title: Bishop, California Climbing Weather - Current, Past, and Forecasted Report
title_override: Bishop<br /><small>Climbing Weather</small>
description: A lightweight weather report for Bishop, California. Optimized for slow internet connections.
js_includes:
  - weather.js
---

<section class="measure center lh-copy f5-ns f6 ph2 mv4" style="text-align: justify;">
<strong>"Is it dry?"</strong>, an oft-repeated, age-old question. Here are real-time,
precipitation-focused reports of current, past, and forecasted climbing weather for Bishop, California.
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
<section id="weather" data-crag="bishop-california" class="mv4-ns mv3 ph2 center"></section>
<section id="nearby" class="tc lh-copy">
  <h3>Nearby Crags</h3>
<a class="nowrap no-underline fancy-link relative light-red mh3" href="/crags/joshua-tree-national-park-california-weather.html">Joshua Tree National Park</a>
<a class="nowrap no-underline fancy-link relative light-red mh3" href="/crags/yosemite-national-park-california-weather.html">Yosemite National Park</a>
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
  var weekly_VEF_14_168 = {"updated":"2021-12-25T04:41:11+00:00","units":"us","forecastGenerator":"BaselineForecastGenerator","generatedAt":"2021-12-25T08:47:26+00:00","updateTime":"2021-12-25T04:41:11+00:00","validTimes":"2021-12-24T22:00:00+00:00/P8DT6H","elevation":{"unitCode":"wmoUnit:m","value":1296.0096},"periods":[{"number":1,"name":"Overnight","startTime":"2021-12-25T00:00:00-08:00","endTime":"2021-12-25T06:00:00-08:00","isDaytime":false,"temperature":23,"temperatureUnit":"F","temperatureTrend":"rising","windSpeed":"8 mph","windDirection":"NNW","icon":"https://api.weather.gov/icons/land/night/few?size=medium","shortForecast":"Mostly Clear","detailedForecast":"Mostly clear. Low around 23, with temperatures rising to around 27 overnight. North northwest wind around 8 mph."},{"number":2,"name":"Christmas Day","startTime":"2021-12-25T06:00:00-08:00","endTime":"2021-12-25T18:00:00-08:00","isDaytime":true,"temperature":46,"temperatureUnit":"F","temperatureTrend":"falling","windSpeed":"7 to 13 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/day/few/snow,90?size=medium","shortForecast":"Sunny then Snow Showers","detailedForecast":"Snow showers after 2pm. Sunny. High near 46, with temperatures falling to around 39 in the afternoon. West wind 7 to 13 mph. Chance of precipitation is 90%. New snow accumulation of 1 to 2 inches possible."},{"number":3,"name":"Saturday Night","startTime":"2021-12-25T18:00:00-08:00","endTime":"2021-12-26T06:00:00-08:00","isDaytime":false,"temperature":19,"temperatureUnit":"F","temperatureTrend":"rising","windSpeed":"13 mph","windDirection":"SSW","icon":"https://api.weather.gov/icons/land/night/snow,90/snow,80?size=medium","shortForecast":"Snow Showers","detailedForecast":"Snow showers. Mostly cloudy. Low around 19, with temperatures rising to around 25 overnight. South southwest wind around 13 mph. Chance of precipitation is 90%. New snow accumulation of 1 to 3 inches possible."},{"number":4,"name":"Sunday","startTime":"2021-12-26T06:00:00-08:00","endTime":"2021-12-26T18:00:00-08:00","isDaytime":true,"temperature":40,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"15 mph","windDirection":"WSW","icon":"https://api.weather.gov/icons/land/day/snow,20?size=medium","shortForecast":"Slight Chance Snow Showers","detailedForecast":"A slight chance of snow showers. Mostly sunny, with a high near 40. West southwest wind around 15 mph, with gusts as high as 22 mph. Chance of precipitation is 20%."},{"number":5,"name":"Sunday Night","startTime":"2021-12-26T18:00:00-08:00","endTime":"2021-12-27T06:00:00-08:00","isDaytime":false,"temperature":19,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"8 to 13 mph","windDirection":"SW","icon":"https://api.weather.gov/icons/land/night/snow,50/snow,80?size=medium","shortForecast":"Snow Showers","detailedForecast":"Snow showers. Mostly cloudy, with a low around 19. Southwest wind 8 to 13 mph. Chance of precipitation is 80%. New snow accumulation of around one inch possible."},{"number":6,"name":"Monday","startTime":"2021-12-27T06:00:00-08:00","endTime":"2021-12-27T18:00:00-08:00","isDaytime":true,"temperature":39,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"8 to 15 mph","windDirection":"SSW","icon":"https://api.weather.gov/icons/land/day/snow,90?size=medium","shortForecast":"Snow Showers","detailedForecast":"Snow showers. Mostly cloudy, with a high near 39. Chance of precipitation is 90%. New snow accumulation of 2 to 4 inches possible."},{"number":7,"name":"Monday Night","startTime":"2021-12-27T18:00:00-08:00","endTime":"2021-12-28T06:00:00-08:00","isDaytime":false,"temperature":13,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"7 to 14 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/night/snow,30/sct?size=medium","shortForecast":"Chance Snow Showers then Partly Cloudy","detailedForecast":"A chance of snow showers before 10pm. Partly cloudy, with a low around 13. Chance of precipitation is 30%. New snow accumulation of less than half an inch possible."},{"number":8,"name":"Tuesday","startTime":"2021-12-28T06:00:00-08:00","endTime":"2021-12-28T18:00:00-08:00","isDaytime":true,"temperature":34,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"6 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/day/bkn?size=medium","shortForecast":"Partly Sunny","detailedForecast":"Partly sunny, with a high near 34."},{"number":9,"name":"Tuesday Night","startTime":"2021-12-28T18:00:00-08:00","endTime":"2021-12-29T06:00:00-08:00","isDaytime":false,"temperature":13,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"8 mph","windDirection":"WSW","icon":"https://api.weather.gov/icons/land/night/sct/snow?size=medium","shortForecast":"Partly Cloudy then Slight Chance Snow Showers","detailedForecast":"A slight chance of snow showers after 4am. Partly cloudy, with a low around 13."},{"number":10,"name":"Wednesday","startTime":"2021-12-29T06:00:00-08:00","endTime":"2021-12-29T18:00:00-08:00","isDaytime":true,"temperature":35,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"6 mph","windDirection":"NE","icon":"https://api.weather.gov/icons/land/day/snow?size=medium","shortForecast":"Slight Chance Snow Showers","detailedForecast":"A slight chance of snow showers before 4pm. Partly sunny, with a high near 35."},{"number":11,"name":"Wednesday Night","startTime":"2021-12-29T18:00:00-08:00","endTime":"2021-12-30T06:00:00-08:00","isDaytime":false,"temperature":14,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"6 mph","windDirection":"WSW","icon":"https://api.weather.gov/icons/land/night/sct?size=medium","shortForecast":"Partly Cloudy","detailedForecast":"Partly cloudy, with a low around 14."},{"number":12,"name":"Thursday","startTime":"2021-12-30T06:00:00-08:00","endTime":"2021-12-30T18:00:00-08:00","isDaytime":true,"temperature":39,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"6 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/day/sct?size=medium","shortForecast":"Mostly Sunny","detailedForecast":"Mostly sunny, with a high near 39."},{"number":13,"name":"Thursday Night","startTime":"2021-12-30T18:00:00-08:00","endTime":"2021-12-31T06:00:00-08:00","isDaytime":false,"temperature":18,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"6 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/night/few?size=medium","shortForecast":"Mostly Clear","detailedForecast":"Mostly clear, with a low around 18."},{"number":14,"name":"Friday","startTime":"2021-12-31T06:00:00-08:00","endTime":"2021-12-31T18:00:00-08:00","isDaytime":true,"temperature":41,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"7 mph","windDirection":"NW","icon":"https://api.weather.gov/icons/land/day/sct?size=medium","shortForecast":"Mostly Sunny","detailedForecast":"Mostly sunny, with a high near 41."}]}
  var hourly_VEF_14_168 = {"correlationId":"4b2532a1","title":"Unexpected Problem","type":"https://api.weather.gov/problems/UnexpectedProblem","status":500,"detail":"An unexpected problem has occurred.","instance":"https://api.weather.gov/requests/4b2532a1"}
  var crags_config = [
  {
    "name": "Bishop",
    "note": "Sharp, skin tearing quartz monzonite.",
    "mountainProject": "https://www.mountainproject.com/area/106064825/bishop-area",
    "station": "KBIH",
    "office": "VEF/14,168",
    "coordinates": [
      -118.435,
      37.361
    ]
  }
]</script>

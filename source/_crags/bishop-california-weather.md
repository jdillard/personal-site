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
  var weekly_VEF_14_168 = {"updated":"2022-08-13T17:41:43+00:00","units":"us","forecastGenerator":"BaselineForecastGenerator","generatedAt":"2022-08-14T08:38:30+00:00","updateTime":"2022-08-13T17:41:43+00:00","validTimes":"2022-08-13T11:00:00+00:00/P8DT2H","elevation":{"unitCode":"wmoUnit:m","value":1296.0096},"periods":[{"number":1,"name":"Overnight","startTime":"2022-08-14T01:00:00-07:00","endTime":"2022-08-14T06:00:00-07:00","isDaytime":false,"temperature":66,"temperatureUnit":"F","temperatureTrend":"rising","windSpeed":"5 to 8 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/night/few?size=medium","shortForecast":"Mostly Clear","detailedForecast":"Mostly clear. Low around 66, with temperatures rising to around 68 overnight. West wind 5 to 8 mph."},{"number":2,"name":"Sunday","startTime":"2022-08-14T06:00:00-07:00","endTime":"2022-08-14T18:00:00-07:00","isDaytime":true,"temperature":96,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"3 to 13 mph","windDirection":"E","icon":"https://api.weather.gov/icons/land/day/few?size=medium","shortForecast":"Sunny","detailedForecast":"Sunny, with a high near 96. East wind 3 to 13 mph, with gusts as high as 18 mph."},{"number":3,"name":"Sunday Night","startTime":"2022-08-14T18:00:00-07:00","endTime":"2022-08-15T06:00:00-07:00","isDaytime":false,"temperature":66,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"6 to 14 mph","windDirection":"WSW","icon":"https://api.weather.gov/icons/land/night/few?size=medium","shortForecast":"Mostly Clear","detailedForecast":"Mostly clear, with a low around 66. West southwest wind 6 to 14 mph, with gusts as high as 20 mph."},{"number":4,"name":"Monday","startTime":"2022-08-15T06:00:00-07:00","endTime":"2022-08-15T18:00:00-07:00","isDaytime":true,"temperature":95,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"3 to 13 mph","windDirection":"SE","icon":"https://api.weather.gov/icons/land/day/few/tsra_hi,20?size=medium","shortForecast":"Sunny then Slight Chance Showers And Thunderstorms","detailedForecast":"A slight chance of showers and thunderstorms after 5pm. Sunny, with a high near 95. Southeast wind 3 to 13 mph, with gusts as high as 18 mph. Chance of precipitation is 20%."},{"number":5,"name":"Monday Night","startTime":"2022-08-15T18:00:00-07:00","endTime":"2022-08-16T06:00:00-07:00","isDaytime":false,"temperature":66,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"6 to 14 mph","windDirection":"WSW","icon":"https://api.weather.gov/icons/land/night/tsra_hi,20/sct?size=medium","shortForecast":"Slight Chance Showers And Thunderstorms then Partly Cloudy","detailedForecast":"A slight chance of showers and thunderstorms before 11pm. Partly cloudy, with a low around 66. West southwest wind 6 to 14 mph, with gusts as high as 20 mph. Chance of precipitation is 20%."},{"number":6,"name":"Tuesday","startTime":"2022-08-16T06:00:00-07:00","endTime":"2022-08-16T18:00:00-07:00","isDaytime":true,"temperature":93,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"5 to 13 mph","windDirection":"SSE","icon":"https://api.weather.gov/icons/land/day/tsra_hi,30?size=medium","shortForecast":"Chance Showers And Thunderstorms","detailedForecast":"A chance of showers and thunderstorms after 11am. Mostly sunny, with a high near 93. Chance of precipitation is 30%."},{"number":7,"name":"Tuesday Night","startTime":"2022-08-16T18:00:00-07:00","endTime":"2022-08-17T06:00:00-07:00","isDaytime":false,"temperature":65,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"5 to 14 mph","windDirection":"WSW","icon":"https://api.weather.gov/icons/land/night/tsra_hi,20/sct?size=medium","shortForecast":"Slight Chance Showers And Thunderstorms then Partly Cloudy","detailedForecast":"A slight chance of showers and thunderstorms before 11pm. Partly cloudy, with a low around 65. Chance of precipitation is 20%."},{"number":8,"name":"Wednesday","startTime":"2022-08-17T06:00:00-07:00","endTime":"2022-08-17T18:00:00-07:00","isDaytime":true,"temperature":91,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"5 to 13 mph","windDirection":"SSW","icon":"https://api.weather.gov/icons/land/day/tsra_hi?size=medium","shortForecast":"Chance Showers And Thunderstorms","detailedForecast":"A chance of showers and thunderstorms between 11am and 5pm, then a slight chance of showers and thunderstorms. Mostly sunny, with a high near 91."},{"number":9,"name":"Wednesday Night","startTime":"2022-08-17T18:00:00-07:00","endTime":"2022-08-18T06:00:00-07:00","isDaytime":false,"temperature":66,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"6 to 13 mph","windDirection":"WSW","icon":"https://api.weather.gov/icons/land/night/tsra_hi/sct?size=medium","shortForecast":"Slight Chance Showers And Thunderstorms then Partly Cloudy","detailedForecast":"A slight chance of showers and thunderstorms before 11pm. Partly cloudy, with a low around 66."},{"number":10,"name":"Thursday","startTime":"2022-08-18T06:00:00-07:00","endTime":"2022-08-18T18:00:00-07:00","isDaytime":true,"temperature":93,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"5 to 13 mph","windDirection":"SSE","icon":"https://api.weather.gov/icons/land/day/tsra_hi?size=medium","shortForecast":"Slight Chance Showers And Thunderstorms","detailedForecast":"A slight chance of showers and thunderstorms between 11am and 5pm. Mostly sunny, with a high near 93."},{"number":11,"name":"Thursday Night","startTime":"2022-08-18T18:00:00-07:00","endTime":"2022-08-19T06:00:00-07:00","isDaytime":false,"temperature":66,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"6 to 13 mph","windDirection":"WSW","icon":"https://api.weather.gov/icons/land/night/sct?size=medium","shortForecast":"Partly Cloudy","detailedForecast":"Partly cloudy, with a low around 66."},{"number":12,"name":"Friday","startTime":"2022-08-19T06:00:00-07:00","endTime":"2022-08-19T18:00:00-07:00","isDaytime":true,"temperature":92,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"6 to 14 mph","windDirection":"S","icon":"https://api.weather.gov/icons/land/day/tsra_hi?size=medium","shortForecast":"Slight Chance Showers And Thunderstorms","detailedForecast":"A slight chance of showers and thunderstorms between 11am and 5pm. Mostly sunny, with a high near 92."},{"number":13,"name":"Friday Night","startTime":"2022-08-19T18:00:00-07:00","endTime":"2022-08-20T06:00:00-07:00","isDaytime":false,"temperature":64,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"6 to 14 mph","windDirection":"WSW","icon":"https://api.weather.gov/icons/land/night/sct?size=medium","shortForecast":"Partly Cloudy","detailedForecast":"Partly cloudy, with a low around 64."},{"number":14,"name":"Saturday","startTime":"2022-08-20T06:00:00-07:00","endTime":"2022-08-20T18:00:00-07:00","isDaytime":true,"temperature":91,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"6 to 15 mph","windDirection":"S","icon":"https://api.weather.gov/icons/land/day/tsra_hi?size=medium","shortForecast":"Slight Chance Showers And Thunderstorms","detailedForecast":"A slight chance of showers and thunderstorms between 11am and 5pm. Mostly sunny, with a high near 91."}]}
  var hourly_VEF_14_168 = {"correlationId":"128aaa1d","title":"Unexpected Problem","type":"https://api.weather.gov/problems/UnexpectedProblem","status":500,"detail":"An unexpected problem has occurred.","instance":"https://api.weather.gov/requests/128aaa1d"}
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

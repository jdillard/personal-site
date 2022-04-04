---
### THIS FILE IS AUTO-GENERATED - DO NOT EDIT ###
layout: page
title: Georgetown, Texas Climbing Weather - Current, Past, and Forecasted Report
title_override: Georgetown<br /><small>Climbing Weather</small>
description: A lightweight weather report for Georgetown, Texas. Optimized for slow internet connections.
js_includes:
  - weather.js
---

<section class="measure center lh-copy f5-ns f6 ph2 mv4" style="text-align: justify;">
<strong>"Is it dry?"</strong>, an oft-repeated, age-old question. Here are real-time,
precipitation-focused reports of current, past, and forecasted climbing weather for Georgetown, Texas.
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
<section id="weather" data-crag="georgetown-texas" class="mv4-ns mv3 ph2 center"></section>
<section id="nearby" class="tc lh-copy">
  <h3>Nearby Crags</h3>
<a class="nowrap no-underline fancy-link relative light-red mh3" href="/crags/the-greenbelt-texas-weather.html">The Greenbelt</a>
<a class="nowrap no-underline fancy-link relative light-red mh3" href="/crags/continental-ranch-texas-weather.html">Continental Ranch</a>
<a class="nowrap no-underline fancy-link relative light-red mh3" href="/crags/pace-bend-park-texas-weather.html">Pace Bend Park</a>
<a class="nowrap no-underline fancy-link relative light-red mh3" href="/crags/reimers-ranch-texas-weather.html">Reimer's Ranch</a>
<a class="nowrap no-underline fancy-link relative light-red mh3" href="/crags/cochise-stronghold-arizona-weather.html">Cochise Stronghold</a>
<a class="nowrap no-underline fancy-link relative light-red mh3" href="/crags/enchanted-rock-texas-weather.html">Enchanted Rock</a>
<a class="nowrap no-underline fancy-link relative light-red mh3" href="/crags/horseshoe-canyon-ranch-arkansas-weather.html">Horseshoe Canyon Ranch</a>
<a class="nowrap no-underline fancy-link relative light-red mh3" href="/crags/last-chance-canyon-new-mexico-weather.html">Last Chance Canyon</a>
<a class="nowrap no-underline fancy-link relative light-red mh3" href="/crags/mckinney-falls-texas-weather.html">McKinney Falls</a>
<a class="nowrap no-underline fancy-link relative light-red mh3" href="/crags/hueco-tanks-texas-weather.html">Hueco Tanks</a>
</section>
<section id="nearby" class="tc lh-copy">
  <h3>Other Metros</h3>
  <select class="ma1 bg-near-white pa2" id="stateSel">
    <option value="Texas" selected>Texas</option>
    <option value="Washington">Washington</option>
    <option value="Colorado">Colorado</option>
    <option value="Tennessee">Tennessee</option>
    <option value="Utah">Utah</option>
    <option value="California">California</option>
  </select>
  <select class="ma1 bg-near-white pa2" id="citySel">
    <option value="Austin" selected>Austin</option>
  </select>
  <a id="selectMetro" class="f6 link dim ph3 pv2 ma1 dib white bg-light-red" href="/crags/austin-texas-weather.html">Select Metro</a>
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
  var weekly_EWX_157_106 = {"updated":"2022-04-04T08:09:14+00:00","units":"us","forecastGenerator":"BaselineForecastGenerator","generatedAt":"2022-04-04T08:38:18+00:00","updateTime":"2022-04-04T08:09:14+00:00","validTimes":"2022-04-04T02:00:00+00:00/P8DT6H","elevation":{"unitCode":"wmoUnit:m","value":239.8776},"periods":[{"number":1,"name":"Overnight","startTime":"2022-04-04T03:00:00-05:00","endTime":"2022-04-04T06:00:00-05:00","isDaytime":false,"temperature":62,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"10 to 15 mph","windDirection":"S","icon":"https://api.weather.gov/icons/land/night/bkn?size=medium","shortForecast":"Mostly Cloudy","detailedForecast":"Mostly cloudy, with a low around 62. South wind 10 to 15 mph, with gusts as high as 25 mph."},{"number":2,"name":"Monday","startTime":"2022-04-04T06:00:00-05:00","endTime":"2022-04-04T18:00:00-05:00","isDaytime":true,"temperature":81,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"10 to 15 mph","windDirection":"SSE","icon":"https://api.weather.gov/icons/land/day/tsra,20/tsra,50?size=medium","shortForecast":"Chance Showers And Thunderstorms","detailedForecast":"A slight chance of rain showers between 7am and 10am, then a chance of showers and thunderstorms. Mostly cloudy, with a high near 81. South southeast wind 10 to 15 mph, with gusts as high as 25 mph. Chance of precipitation is 50%. New rainfall amounts less than a tenth of an inch possible."},{"number":3,"name":"Monday Night","startTime":"2022-04-04T18:00:00-05:00","endTime":"2022-04-05T06:00:00-05:00","isDaytime":false,"temperature":61,"temperatureUnit":"F","temperatureTrend":"rising","windSpeed":"10 to 15 mph","windDirection":"SSW","icon":"https://api.weather.gov/icons/land/night/tsra,60?size=medium","shortForecast":"Showers And Thunderstorms Likely","detailedForecast":"Showers and thunderstorms likely. Mostly cloudy. Low around 61, with temperatures rising to around 65 overnight. South southwest wind 10 to 15 mph, with gusts as high as 25 mph. Chance of precipitation is 60%. New rainfall amounts between a tenth and quarter of an inch possible."},{"number":4,"name":"Tuesday","startTime":"2022-04-05T06:00:00-05:00","endTime":"2022-04-05T18:00:00-05:00","isDaytime":true,"temperature":93,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"5 to 10 mph","windDirection":"WSW","icon":"https://api.weather.gov/icons/land/day/tsra_hi,20/sct?size=medium","shortForecast":"Slight Chance Showers And Thunderstorms then Mostly Sunny","detailedForecast":"A slight chance of showers and thunderstorms before 7am. Mostly sunny, with a high near 93. West southwest wind 5 to 10 mph, with gusts as high as 25 mph. Chance of precipitation is 20%."},{"number":5,"name":"Tuesday Night","startTime":"2022-04-05T18:00:00-05:00","endTime":"2022-04-06T06:00:00-05:00","isDaytime":false,"temperature":62,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"10 to 15 mph","windDirection":"SSW","icon":"https://api.weather.gov/icons/land/night/few?size=medium","shortForecast":"Mostly Clear","detailedForecast":"Mostly clear, with a low around 62. South southwest wind 10 to 15 mph, with gusts as high as 25 mph."},{"number":6,"name":"Wednesday","startTime":"2022-04-06T06:00:00-05:00","endTime":"2022-04-06T18:00:00-05:00","isDaytime":true,"temperature":78,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"15 to 20 mph","windDirection":"NNW","icon":"https://api.weather.gov/icons/land/day/skc?size=medium","shortForecast":"Sunny","detailedForecast":"Sunny, with a high near 78. North northwest wind 15 to 20 mph, with gusts as high as 30 mph."},{"number":7,"name":"Wednesday Night","startTime":"2022-04-06T18:00:00-05:00","endTime":"2022-04-07T06:00:00-05:00","isDaytime":false,"temperature":51,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"10 to 15 mph","windDirection":"NNE","icon":"https://api.weather.gov/icons/land/night/few?size=medium","shortForecast":"Mostly Clear","detailedForecast":"Mostly clear, with a low around 51. North northeast wind 10 to 15 mph, with gusts as high as 30 mph."},{"number":8,"name":"Thursday","startTime":"2022-04-07T06:00:00-05:00","endTime":"2022-04-07T18:00:00-05:00","isDaytime":true,"temperature":73,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"10 to 20 mph","windDirection":"N","icon":"https://api.weather.gov/icons/land/day/skc?size=medium","shortForecast":"Sunny","detailedForecast":"Sunny, with a high near 73. North wind 10 to 20 mph, with gusts as high as 30 mph."},{"number":9,"name":"Thursday Night","startTime":"2022-04-07T18:00:00-05:00","endTime":"2022-04-08T06:00:00-05:00","isDaytime":false,"temperature":45,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"10 to 20 mph","windDirection":"NW","icon":"https://api.weather.gov/icons/land/night/skc?size=medium","shortForecast":"Clear","detailedForecast":"Clear, with a low around 45. Northwest wind 10 to 20 mph, with gusts as high as 30 mph."},{"number":10,"name":"Friday","startTime":"2022-04-08T06:00:00-05:00","endTime":"2022-04-08T18:00:00-05:00","isDaytime":true,"temperature":75,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"5 to 20 mph","windDirection":"NW","icon":"https://api.weather.gov/icons/land/day/skc?size=medium","shortForecast":"Sunny","detailedForecast":"Sunny, with a high near 75."},{"number":11,"name":"Friday Night","startTime":"2022-04-08T18:00:00-05:00","endTime":"2022-04-09T06:00:00-05:00","isDaytime":false,"temperature":43,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"5 to 15 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/night/few?size=medium","shortForecast":"Mostly Clear","detailedForecast":"Mostly clear, with a low around 43."},{"number":12,"name":"Saturday","startTime":"2022-04-09T06:00:00-05:00","endTime":"2022-04-09T18:00:00-05:00","isDaytime":true,"temperature":83,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"5 to 15 mph","windDirection":"SSW","icon":"https://api.weather.gov/icons/land/day/few?size=medium","shortForecast":"Sunny","detailedForecast":"Sunny, with a high near 83."},{"number":13,"name":"Saturday Night","startTime":"2022-04-09T18:00:00-05:00","endTime":"2022-04-10T06:00:00-05:00","isDaytime":false,"temperature":54,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"15 mph","windDirection":"S","icon":"https://api.weather.gov/icons/land/night/few?size=medium","shortForecast":"Mostly Clear","detailedForecast":"Mostly clear, with a low around 54."},{"number":14,"name":"Sunday","startTime":"2022-04-10T06:00:00-05:00","endTime":"2022-04-10T18:00:00-05:00","isDaytime":true,"temperature":85,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"15 to 25 mph","windDirection":"S","icon":"https://api.weather.gov/icons/land/day/wind_sct?size=medium","shortForecast":"Mostly Sunny","detailedForecast":"Mostly sunny, with a high near 85."}]}
  var hourly_EWX_157_106 = {"correlationId":"1a03aa01","title":"Unexpected Problem","type":"https://api.weather.gov/problems/UnexpectedProblem","status":500,"detail":"An unexpected problem has occurred.","instance":"https://api.weather.gov/requests/1a03aa01"}
  var crags_config = [
  {
    "name": "Georgetown",
    "note": "Porous limestone that can take a couple days to dry out.",
    "mountainProject": "https://www.mountainproject.com/area/106715082/georgetown-hospital",
    "station": "KGTU",
    "office": "EWX/157,106",
    "coordinates": [
      -97.69,
      30.627
    ]
  }
]</script>

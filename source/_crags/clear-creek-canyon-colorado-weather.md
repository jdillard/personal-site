---
### THIS FILE IS AUTO-GENERATED - DO NOT EDIT ###
layout: page
title: Clear Creek Canyon, Colorado Climbing Weather - Current, Past, and Forecasted Report
title_override: Clear Creek Canyon<br /><small>Climbing Weather</small>
description: A lightweight weather report for Clear Creek Canyon, Colorado. Optimized for slow internet connections.
js_includes:
  - weather.js
---

<section class="measure center lh-copy f5-ns f6 ph2 mv4" style="text-align: justify;">
<strong>"Is it dry?"</strong>, an oft-repeated, age-old question. Here are real-time,
precipitation-focused reports of current, past, and forecasted climbing weather for Clear Creek Canyon, Colorado.
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
<section id="weather" data-crag="clear-creek-canyon-colorado" class="mv4-ns mv3 ph2 center"></section>
<section id="nearby" class="tc lh-copy">
  <h3>Nearby Crags</h3>
<a class="nowrap no-underline fancy-link relative light-red mh3" href="/crags/staunton-state-park-colorado-weather.html">Staunton State Park</a>
<a class="nowrap no-underline fancy-link relative light-red mh3" href="/crags/lime-park-lime-creek-colorado-weather.html">Lime Park (Lime Creek)</a>
<a class="nowrap no-underline fancy-link relative light-red mh3" href="/crags/independence-pass-colorado-weather.html">Independence Pass</a>
<a class="nowrap no-underline fancy-link relative light-red mh3" href="/crags/moab-utah-weather.html">Moab</a>
<a class="nowrap no-underline fancy-link relative light-red mh3" href="/crags/estes-park-valley-colorado-weather.html">Estes Park Valley</a>
<a class="nowrap no-underline fancy-link relative light-red mh3" href="/crags/gunnison-colorado-weather.html">Gunnison</a>
</section>
<section id="nearby" class="tc lh-copy">
  <h3>Other Metros</h3>
  <select class="ma1 bg-near-white pa2" id="stateSel">
    <option value="Texas">Texas</option>
    <option value="Washington">Washington</option>
    <option value="Colorado" selected>Colorado</option>
    <option value="Tennessee">Tennessee</option>
    <option value="Utah">Utah</option>
    <option value="California">California</option>
  </select>
  <select class="ma1 bg-near-white pa2" id="citySel">
    <option value="Denver" selected>Denver</option>
  </select>
  <a id="selectMetro" class="f6 link dim ph3 pv2 ma1 dib white bg-light-red" href="/crags/denver-colorado-weather.html">Select Metro</a>
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
  var weekly_BOU_53_62 = {"updated":"2022-08-06T03:42:24+00:00","units":"us","forecastGenerator":"BaselineForecastGenerator","generatedAt":"2022-08-06T08:38:42+00:00","updateTime":"2022-08-06T03:42:24+00:00","validTimes":"2022-08-05T21:00:00+00:00/P7DT4H","elevation":{"unitCode":"wmoUnit:m","value":1869.948},"periods":[{"number":1,"name":"Overnight","startTime":"2022-08-06T02:00:00-06:00","endTime":"2022-08-06T06:00:00-06:00","isDaytime":false,"temperature":66,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"7 mph","windDirection":"WNW","icon":"https://api.weather.gov/icons/land/night/sct?size=medium","shortForecast":"Partly Cloudy","detailedForecast":"Partly cloudy, with a low around 66. West northwest wind around 7 mph."},{"number":2,"name":"Saturday","startTime":"2022-08-06T06:00:00-06:00","endTime":"2022-08-06T18:00:00-06:00","isDaytime":true,"temperature":85,"temperatureUnit":"F","temperatureTrend":"falling","windSpeed":"5 to 9 mph","windDirection":"ENE","icon":"https://api.weather.gov/icons/land/day/sct/tsra_hi,40?size=medium","shortForecast":"Mostly Sunny then Chance Showers And Thunderstorms","detailedForecast":"A chance of showers and thunderstorms after noon. Mostly sunny. High near 85, with temperatures falling to around 83 in the afternoon. East northeast wind 5 to 9 mph. Chance of precipitation is 40%."},{"number":3,"name":"Saturday Night","startTime":"2022-08-06T18:00:00-06:00","endTime":"2022-08-07T06:00:00-06:00","isDaytime":false,"temperature":64,"temperatureUnit":"F","temperatureTrend":"rising","windSpeed":"9 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/night/tsra_sct,30/bkn?size=medium","shortForecast":"Chance Showers And Thunderstorms then Mostly Cloudy","detailedForecast":"A chance of showers and thunderstorms before midnight. Mostly cloudy. Low around 64, with temperatures rising to around 66 overnight. West wind around 9 mph. Chance of precipitation is 30%."},{"number":4,"name":"Sunday","startTime":"2022-08-07T06:00:00-06:00","endTime":"2022-08-07T18:00:00-06:00","isDaytime":true,"temperature":76,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"6 to 12 mph","windDirection":"NE","icon":"https://api.weather.gov/icons/land/day/tsra_sct,20/tsra_sct,70?size=medium","shortForecast":"Showers And Thunderstorms Likely","detailedForecast":"A slight chance of rain showers before 11am, then showers and thunderstorms likely. Partly sunny, with a high near 76. Northeast wind 6 to 12 mph, with gusts as high as 20 mph. Chance of precipitation is 70%."},{"number":5,"name":"Sunday Night","startTime":"2022-08-07T18:00:00-06:00","endTime":"2022-08-08T06:00:00-06:00","isDaytime":false,"temperature":62,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"5 to 9 mph","windDirection":"S","icon":"https://api.weather.gov/icons/land/night/tsra_sct,50/tsra_sct?size=medium","shortForecast":"Chance Showers And Thunderstorms","detailedForecast":"A chance of showers and thunderstorms. Mostly cloudy, with a low around 62. South wind 5 to 9 mph. Chance of precipitation is 50%."},{"number":6,"name":"Monday","startTime":"2022-08-08T06:00:00-06:00","endTime":"2022-08-08T18:00:00-06:00","isDaytime":true,"temperature":80,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"5 to 10 mph","windDirection":"NE","icon":"https://api.weather.gov/icons/land/day/sct/tsra_hi,40?size=medium","shortForecast":"Mostly Sunny then Chance Showers And Thunderstorms","detailedForecast":"A chance of showers and thunderstorms after noon. Mostly sunny, with a high near 80. Chance of precipitation is 40%."},{"number":7,"name":"Monday Night","startTime":"2022-08-08T18:00:00-06:00","endTime":"2022-08-09T06:00:00-06:00","isDaytime":false,"temperature":61,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"8 mph","windDirection":"SSW","icon":"https://api.weather.gov/icons/land/night/tsra_hi,20/sct?size=medium","shortForecast":"Slight Chance Showers And Thunderstorms then Partly Cloudy","detailedForecast":"A slight chance of showers and thunderstorms before midnight. Partly cloudy, with a low around 61. Chance of precipitation is 20%."},{"number":8,"name":"Tuesday","startTime":"2022-08-09T06:00:00-06:00","endTime":"2022-08-09T18:00:00-06:00","isDaytime":true,"temperature":83,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"7 to 10 mph","windDirection":"NNE","icon":"https://api.weather.gov/icons/land/day/sct?size=medium","shortForecast":"Mostly Sunny","detailedForecast":"Mostly sunny, with a high near 83."},{"number":9,"name":"Tuesday Night","startTime":"2022-08-09T18:00:00-06:00","endTime":"2022-08-10T06:00:00-06:00","isDaytime":false,"temperature":63,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"7 to 10 mph","windDirection":"S","icon":"https://api.weather.gov/icons/land/night/few?size=medium","shortForecast":"Mostly Clear","detailedForecast":"Mostly clear, with a low around 63."},{"number":10,"name":"Wednesday","startTime":"2022-08-10T06:00:00-06:00","endTime":"2022-08-10T18:00:00-06:00","isDaytime":true,"temperature":84,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"7 to 10 mph","windDirection":"SE","icon":"https://api.weather.gov/icons/land/day/sct/tsra_hi?size=medium","shortForecast":"Mostly Sunny then Slight Chance Showers And Thunderstorms","detailedForecast":"A slight chance of showers and thunderstorms after noon. Mostly sunny, with a high near 84."},{"number":11,"name":"Wednesday Night","startTime":"2022-08-10T18:00:00-06:00","endTime":"2022-08-11T06:00:00-06:00","isDaytime":false,"temperature":63,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"10 mph","windDirection":"S","icon":"https://api.weather.gov/icons/land/night/few?size=medium","shortForecast":"Mostly Clear","detailedForecast":"Mostly clear, with a low around 63."},{"number":12,"name":"Thursday","startTime":"2022-08-11T06:00:00-06:00","endTime":"2022-08-11T18:00:00-06:00","isDaytime":true,"temperature":87,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"8 to 12 mph","windDirection":"N","icon":"https://api.weather.gov/icons/land/day/sct/tsra_hi?size=medium","shortForecast":"Mostly Sunny then Chance Showers And Thunderstorms","detailedForecast":"A chance of showers and thunderstorms after noon. Mostly sunny, with a high near 87."},{"number":13,"name":"Thursday Night","startTime":"2022-08-11T18:00:00-06:00","endTime":"2022-08-12T06:00:00-06:00","isDaytime":false,"temperature":65,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"10 mph","windDirection":"S","icon":"https://api.weather.gov/icons/land/night/tsra_hi/sct?size=medium","shortForecast":"Slight Chance Showers And Thunderstorms then Partly Cloudy","detailedForecast":"A slight chance of showers and thunderstorms before midnight. Partly cloudy, with a low around 65."},{"number":14,"name":"Friday","startTime":"2022-08-12T06:00:00-06:00","endTime":"2022-08-12T18:00:00-06:00","isDaytime":true,"temperature":85,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"8 to 12 mph","windDirection":"NW","icon":"https://api.weather.gov/icons/land/day/sct/tsra_hi?size=medium","shortForecast":"Mostly Sunny then Chance Showers And Thunderstorms","detailedForecast":"A chance of showers and thunderstorms after noon. Mostly sunny, with a high near 85."}]}
  var hourly_BOU_53_62 = {"correlationId":"1f67f466","title":"Unexpected Problem","type":"https://api.weather.gov/problems/UnexpectedProblem","status":500,"detail":"An unexpected problem has occurred.","instance":"https://api.weather.gov/requests/1f67f466"}
  var crags_config = [
  {
    "name": "Clear Creek Canyon",
    "note": "Relatively solid gneiss and schist to sandy granite.",
    "mountainProject": "https://www.mountainproject.com/area/105744243/clear-creek-canyon",
    "station": "KBJC",
    "office": "BOU/53,62",
    "coordinates": [
      -105.243,
      39.754
    ]
  }
]</script>

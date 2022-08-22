---
### THIS FILE IS AUTO-GENERATED - DO NOT EDIT ###
layout: page
title: Joshua Tree National Park, California Climbing Weather - Current, Past, and Forecasted Report
title_override: Joshua Tree National Park<br /><small>Climbing Weather</small>
description: A lightweight weather report for Joshua Tree National Park, California. Optimized for slow internet connections.
js_includes:
  - weather.js
---

<section class="measure center lh-copy f5-ns f6 ph2 mv4" style="text-align: justify;">
<strong>"Is it dry?"</strong>, an oft-repeated, age-old question. Here are real-time,
precipitation-focused reports of current, past, and forecasted climbing weather for Joshua Tree National Park, California.
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
<section id="weather" data-crag="joshua-tree-national-park-california" class="mv4-ns mv3 ph2 center"></section>
<section id="nearby" class="tc lh-copy">
  <h3>Nearby Crags</h3>
<a class="nowrap no-underline fancy-link relative light-red mh3" href="/crags/yosemite-national-park-california-weather.html">Yosemite National Park</a>
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
  var weekly_PSR_12_103 = {"updated":"2022-08-21T18:26:00+00:00","units":"us","forecastGenerator":"BaselineForecastGenerator","generatedAt":"2022-08-22T08:41:16+00:00","updateTime":"2022-08-21T18:26:00+00:00","validTimes":"2022-08-21T12:00:00+00:00/P7DT13H","elevation":{"unitCode":"wmoUnit:m","value":1279.8552},"periods":[{"number":1,"name":"Overnight","startTime":"2022-08-22T01:00:00-07:00","endTime":"2022-08-22T06:00:00-07:00","isDaytime":false,"temperature":67,"temperatureUnit":"F","temperatureTrend":"rising","windSpeed":"5 mph","windDirection":"SW","icon":"https://api.weather.gov/icons/land/night/few?size=medium","shortForecast":"Mostly Clear","detailedForecast":"Mostly clear. Low around 67, with temperatures rising to around 70 overnight. Southwest wind around 5 mph."},{"number":2,"name":"Monday","startTime":"2022-08-22T06:00:00-07:00","endTime":"2022-08-22T18:00:00-07:00","isDaytime":true,"temperature":95,"temperatureUnit":"F","temperatureTrend":"falling","windSpeed":"0 to 5 mph","windDirection":"SW","icon":"https://api.weather.gov/icons/land/day/few?size=medium","shortForecast":"Sunny","detailedForecast":"Sunny. High near 95, with temperatures falling to around 92 in the afternoon. Southwest wind 0 to 5 mph."},{"number":3,"name":"Monday Night","startTime":"2022-08-22T18:00:00-07:00","endTime":"2022-08-23T06:00:00-07:00","isDaytime":false,"temperature":70,"temperatureUnit":"F","temperatureTrend":"rising","windSpeed":"5 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/night/few?size=medium","shortForecast":"Mostly Clear","detailedForecast":"Mostly clear. Low around 70, with temperatures rising to around 73 overnight. West wind around 5 mph."},{"number":4,"name":"Tuesday","startTime":"2022-08-23T06:00:00-07:00","endTime":"2022-08-23T18:00:00-07:00","isDaytime":true,"temperature":95,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"5 to 10 mph","windDirection":"S","icon":"https://api.weather.gov/icons/land/day/few?size=medium","shortForecast":"Sunny","detailedForecast":"Sunny, with a high near 95. South wind 5 to 10 mph."},{"number":5,"name":"Tuesday Night","startTime":"2022-08-23T18:00:00-07:00","endTime":"2022-08-24T06:00:00-07:00","isDaytime":false,"temperature":69,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"5 to 10 mph","windDirection":"SSW","icon":"https://api.weather.gov/icons/land/night/few?size=medium","shortForecast":"Mostly Clear","detailedForecast":"Mostly clear, with a low around 69. South southwest wind 5 to 10 mph."},{"number":6,"name":"Wednesday","startTime":"2022-08-24T06:00:00-07:00","endTime":"2022-08-24T18:00:00-07:00","isDaytime":true,"temperature":88,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"5 to 10 mph","windDirection":"S","icon":"https://api.weather.gov/icons/land/day/tsra_hi,40?size=medium","shortForecast":"Chance Showers And Thunderstorms","detailedForecast":"A chance of showers and thunderstorms after 11am. Mostly sunny, with a high near 88. South wind 5 to 10 mph, with gusts as high as 25 mph. Chance of precipitation is 40%. New rainfall amounts less than a tenth of an inch possible."},{"number":7,"name":"Wednesday Night","startTime":"2022-08-24T18:00:00-07:00","endTime":"2022-08-25T06:00:00-07:00","isDaytime":false,"temperature":67,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"0 to 10 mph","windDirection":"SSW","icon":"https://api.weather.gov/icons/land/night/tsra_hi,20/few?size=medium","shortForecast":"Slight Chance Showers And Thunderstorms then Mostly Clear","detailedForecast":"A slight chance of showers and thunderstorms before 11pm. Mostly clear, with a low around 67. South southwest wind 0 to 10 mph. Chance of precipitation is 20%."},{"number":8,"name":"Thursday","startTime":"2022-08-25T06:00:00-07:00","endTime":"2022-08-25T18:00:00-07:00","isDaytime":true,"temperature":88,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"0 to 10 mph","windDirection":"S","icon":"https://api.weather.gov/icons/land/day/tsra_hi,30?size=medium","shortForecast":"Chance Showers And Thunderstorms","detailedForecast":"A chance of showers and thunderstorms after 11am. Mostly sunny, with a high near 88. South wind 0 to 10 mph. Chance of precipitation is 30%."},{"number":9,"name":"Thursday Night","startTime":"2022-08-25T18:00:00-07:00","endTime":"2022-08-26T06:00:00-07:00","isDaytime":false,"temperature":67,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"5 mph","windDirection":"WSW","icon":"https://api.weather.gov/icons/land/night/tsra_hi,20/few?size=medium","shortForecast":"Slight Chance Showers And Thunderstorms then Mostly Clear","detailedForecast":"A slight chance of showers and thunderstorms before 11pm. Mostly clear, with a low around 67. West southwest wind around 5 mph. Chance of precipitation is 20%."},{"number":10,"name":"Friday","startTime":"2022-08-26T06:00:00-07:00","endTime":"2022-08-26T18:00:00-07:00","isDaytime":true,"temperature":91,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"5 mph","windDirection":"SSW","icon":"https://api.weather.gov/icons/land/day/few?size=medium","shortForecast":"Sunny","detailedForecast":"Sunny, with a high near 91. South southwest wind around 5 mph."},{"number":11,"name":"Friday Night","startTime":"2022-08-26T18:00:00-07:00","endTime":"2022-08-27T06:00:00-07:00","isDaytime":false,"temperature":68,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"5 mph","windDirection":"WSW","icon":"https://api.weather.gov/icons/land/night/few?size=medium","shortForecast":"Mostly Clear","detailedForecast":"Mostly clear, with a low around 68. West southwest wind around 5 mph."},{"number":12,"name":"Saturday","startTime":"2022-08-27T06:00:00-07:00","endTime":"2022-08-27T18:00:00-07:00","isDaytime":true,"temperature":92,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"5 to 10 mph","windDirection":"SW","icon":"https://api.weather.gov/icons/land/day/few?size=medium","shortForecast":"Sunny","detailedForecast":"Sunny, with a high near 92. Southwest wind 5 to 10 mph, with gusts as high as 20 mph."},{"number":13,"name":"Saturday Night","startTime":"2022-08-27T18:00:00-07:00","endTime":"2022-08-28T06:00:00-07:00","isDaytime":false,"temperature":67,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"5 to 10 mph","windDirection":"WSW","icon":"https://api.weather.gov/icons/land/night/few?size=medium","shortForecast":"Mostly Clear","detailedForecast":"Mostly clear, with a low around 67. West southwest wind 5 to 10 mph, with gusts as high as 20 mph."},{"number":14,"name":"Sunday","startTime":"2022-08-28T06:00:00-07:00","endTime":"2022-08-28T18:00:00-07:00","isDaytime":true,"temperature":91,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"5 to 10 mph","windDirection":"SSW","icon":"https://api.weather.gov/icons/land/day/few?size=medium","shortForecast":"Sunny","detailedForecast":"Sunny, with a high near 91. South southwest wind 5 to 10 mph."}]}
  var hourly_PSR_12_103 = {"correlationId":"2f22f268","title":"Unexpected Problem","type":"https://api.weather.gov/problems/UnexpectedProblem","status":500,"detail":"An unexpected problem has occurred.","instance":"https://api.weather.gov/requests/2f22f268"}
  var crags_config = [
  {
    "name": "Joshua Tree National Park",
    "note": "Quartz monzonite.",
    "mountainProject": "https://www.mountainproject.com/area/105720495/joshua-tree-national-park",
    "station": "LTHC1",
    "office": "PSR/12,103",
    "coordinates": [
      -116.168,
      34.012
    ]
  }
]</script>

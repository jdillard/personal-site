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
  var weekly_HNX_66_143 = {"updated":"2022-09-15T07:57:33+00:00","units":"us","forecastGenerator":"BaselineForecastGenerator","generatedAt":"2022-09-15T08:43:54+00:00","updateTime":"2022-09-15T07:57:33+00:00","validTimes":"2022-09-15T01:00:00+00:00/P7D","elevation":{"unitCode":"wmoUnit:m","value":2167.128},"periods":[{"number":1,"name":"Overnight","startTime":"2022-09-15T01:00:00-07:00","endTime":"2022-09-15T06:00:00-07:00","isDaytime":false,"temperature":43,"temperatureUnit":"F","temperatureTrend":"rising","windSpeed":"0 to 5 mph","windDirection":"NNW","icon":"https://api.weather.gov/icons/land/night/few?size=medium","shortForecast":"Mostly Clear","detailedForecast":"Mostly clear. Low around 43, with temperatures rising to around 45 overnight. North northwest wind 0 to 5 mph."},{"number":2,"name":"Thursday","startTime":"2022-09-15T06:00:00-07:00","endTime":"2022-09-15T18:00:00-07:00","isDaytime":true,"temperature":61,"temperatureUnit":"F","temperatureTrend":"falling","windSpeed":"0 to 10 mph","windDirection":"S","icon":"https://api.weather.gov/icons/land/day/few?size=medium","shortForecast":"Sunny","detailedForecast":"Sunny. High near 61, with temperatures falling to around 59 in the afternoon. South wind 0 to 10 mph."},{"number":3,"name":"Thursday Night","startTime":"2022-09-15T18:00:00-07:00","endTime":"2022-09-16T06:00:00-07:00","isDaytime":false,"temperature":46,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"0 to 5 mph","windDirection":"NE","icon":"https://api.weather.gov/icons/land/night/few?size=medium","shortForecast":"Mostly Clear","detailedForecast":"Mostly clear, with a low around 46. Northeast wind 0 to 5 mph."},{"number":4,"name":"Friday","startTime":"2022-09-16T06:00:00-07:00","endTime":"2022-09-16T18:00:00-07:00","isDaytime":true,"temperature":64,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"0 to 10 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/day/skc?size=medium","shortForecast":"Sunny","detailedForecast":"Sunny, with a high near 64. West wind 0 to 10 mph."},{"number":5,"name":"Friday Night","startTime":"2022-09-16T18:00:00-07:00","endTime":"2022-09-17T06:00:00-07:00","isDaytime":false,"temperature":44,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"0 to 5 mph","windDirection":"N","icon":"https://api.weather.gov/icons/land/night/skc?size=medium","shortForecast":"Clear","detailedForecast":"Clear, with a low around 44. North wind 0 to 5 mph."},{"number":6,"name":"Saturday","startTime":"2022-09-17T06:00:00-07:00","endTime":"2022-09-17T18:00:00-07:00","isDaytime":true,"temperature":61,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"0 to 10 mph","windDirection":"SSE","icon":"https://api.weather.gov/icons/land/day/skc?size=medium","shortForecast":"Sunny","detailedForecast":"Sunny, with a high near 61. South southeast wind 0 to 10 mph, with gusts as high as 20 mph."},{"number":7,"name":"Saturday Night","startTime":"2022-09-17T18:00:00-07:00","endTime":"2022-09-18T06:00:00-07:00","isDaytime":false,"temperature":42,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"0 to 10 mph","windDirection":"S","icon":"https://api.weather.gov/icons/land/night/sct?size=medium","shortForecast":"Partly Cloudy","detailedForecast":"Partly cloudy, with a low around 42. South wind 0 to 10 mph, with gusts as high as 20 mph."},{"number":8,"name":"Sunday","startTime":"2022-09-18T06:00:00-07:00","endTime":"2022-09-18T18:00:00-07:00","isDaytime":true,"temperature":54,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"0 to 10 mph","windDirection":"S","icon":"https://api.weather.gov/icons/land/day/sct/rain,20?size=medium","shortForecast":"Mostly Sunny then Slight Chance Light Rain","detailedForecast":"A slight chance of rain after 5pm. Mostly sunny, with a high near 54. South wind 0 to 10 mph, with gusts as high as 20 mph. Chance of precipitation is 20%."},{"number":9,"name":"Sunday Night","startTime":"2022-09-18T18:00:00-07:00","endTime":"2022-09-19T06:00:00-07:00","isDaytime":false,"temperature":40,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"0 to 10 mph","windDirection":"SSE","icon":"https://api.weather.gov/icons/land/night/rain,20?size=medium","shortForecast":"Slight Chance Light Rain","detailedForecast":"A slight chance of rain. Partly cloudy, with a low around 40. South southeast wind 0 to 10 mph. Chance of precipitation is 20%. New rainfall amounts between a tenth and quarter of an inch possible."},{"number":10,"name":"Monday","startTime":"2022-09-19T06:00:00-07:00","endTime":"2022-09-19T18:00:00-07:00","isDaytime":true,"temperature":56,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"0 to 10 mph","windDirection":"S","icon":"https://api.weather.gov/icons/land/day/rain,30?size=medium","shortForecast":"Chance Light Rain","detailedForecast":"A chance of rain. Mostly sunny, with a high near 56. South wind 0 to 10 mph, with gusts as high as 25 mph. Chance of precipitation is 30%. New rainfall amounts between a quarter and half of an inch possible."},{"number":11,"name":"Monday Night","startTime":"2022-09-19T18:00:00-07:00","endTime":"2022-09-20T06:00:00-07:00","isDaytime":false,"temperature":40,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"0 to 5 mph","windDirection":"SE","icon":"https://api.weather.gov/icons/land/night/rain,30/rain,20?size=medium","shortForecast":"Chance Light Rain","detailedForecast":"A chance of rain before 5am. Partly cloudy, with a low around 40. Southeast wind 0 to 5 mph. Chance of precipitation is 30%. New rainfall amounts between a tenth and quarter of an inch possible."},{"number":12,"name":"Tuesday","startTime":"2022-09-20T06:00:00-07:00","endTime":"2022-09-20T18:00:00-07:00","isDaytime":true,"temperature":57,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"0 to 5 mph","windDirection":"S","icon":"https://api.weather.gov/icons/land/day/rain,30?size=medium","shortForecast":"Chance Light Rain","detailedForecast":"A chance of rain after 11am. Mostly sunny, with a high near 57. South wind 0 to 5 mph. Chance of precipitation is 30%. New rainfall amounts less than a tenth of an inch possible."},{"number":13,"name":"Tuesday Night","startTime":"2022-09-20T18:00:00-07:00","endTime":"2022-09-21T06:00:00-07:00","isDaytime":false,"temperature":43,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"0 to 5 mph","windDirection":"S","icon":"https://api.weather.gov/icons/land/night/rain,20/few?size=medium","shortForecast":"Slight Chance Light Rain then Mostly Clear","detailedForecast":"A slight chance of rain before 11pm. Mostly clear, with a low around 43. South wind 0 to 5 mph. Chance of precipitation is 20%."},{"number":14,"name":"Wednesday","startTime":"2022-09-21T06:00:00-07:00","endTime":"2022-09-21T18:00:00-07:00","isDaytime":true,"temperature":61,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"5 mph","windDirection":"SSE","icon":"https://api.weather.gov/icons/land/day/rain,20?size=medium","shortForecast":"Slight Chance Light Rain","detailedForecast":"A slight chance of rain between 11am and 5pm. Sunny, with a high near 61. South southeast wind around 5 mph, with gusts as high as 20 mph. Chance of precipitation is 20%."}]}
  var hourly_HNX_66_143 = {"correlationId":"5d156881","title":"Unexpected Problem","type":"https://api.weather.gov/problems/UnexpectedProblem","status":500,"detail":"An unexpected problem has occurred.","instance":"https://api.weather.gov/requests/5d156881"}
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

---
### THIS FILE IS AUTO-GENERATED - DO NOT EDIT ###
layout: page
title: Mount Erie, Washington Climbing Weather - Current, Past, and Forecasted Report
title_override: Mount Erie<br /><small>Climbing Weather</small>
description: A lightweight weather report for Mount Erie, Washington. Optimized for slow internet connections.
js_includes:
  - weather.js
---

<section class="measure center lh-copy f5-ns f6 ph2 mv4" style="text-align: justify;">
<strong>"Is it dry?"</strong>, an oft-repeated, age-old question. Here are real-time,
precipitation-focused reports of current, past, and forecasted climbing weather for Mount Erie, Washington.
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
<section id="weather" data-crag="mount-erie-washington" class="mv4-ns mv3 ph2 center"></section>
<section id="nearby" class="tc lh-copy">
  <h3>Nearby Crags</h3>
<a class="nowrap no-underline fancy-link relative light-red mh3" href="/crags/icicle-creek-washington-weather.html">Icicle Creek</a>
<a class="nowrap no-underline fancy-link relative light-red mh3" href="/crags/tieton-river-rock-washington-weather.html">Tieton River Rock</a>
<a class="nowrap no-underline fancy-link relative light-red mh3" href="/crags/vantage-washington-weather.html">Vantage</a>
<a class="nowrap no-underline fancy-link relative light-red mh3" href="/crags/index-washington-weather.html">Index</a>
<a class="nowrap no-underline fancy-link relative light-red mh3" href="/crags/darrington-washington-weather.html">Darrington</a>
<a class="nowrap no-underline fancy-link relative light-red mh3" href="/crags/smith-rock-oregon-weather.html">Smith Rock</a>
<a class="nowrap no-underline fancy-link relative light-red mh3" href="/crags/trout-creek-oregon-weather.html">Trout Creek</a>
</section>
<section id="nearby" class="tc lh-copy">
  <h3>Other Metros</h3>
  <select class="ma1 bg-near-white pa2" id="stateSel">
    <option value="Texas">Texas</option>
    <option value="Washington" selected>Washington</option>
    <option value="Colorado">Colorado</option>
    <option value="Tennessee">Tennessee</option>
    <option value="Utah">Utah</option>
    <option value="California">California</option>
  </select>
  <select class="ma1 bg-near-white pa2" id="citySel">
    <option value="Seattle" selected>Seattle</option>
  </select>
  <a id="selectMetro" class="f6 link dim ph3 pv2 ma1 dib white bg-light-red" href="/crags/seattle-washington-weather.html">Select Metro</a>
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
  var weekly_SEW_123_109 = {"updated":"2022-04-16T21:01:30+00:00","units":"us","forecastGenerator":"BaselineForecastGenerator","generatedAt":"2022-04-17T08:31:25+00:00","updateTime":"2022-04-16T21:01:30+00:00","validTimes":"2022-04-16T15:00:00+00:00/P7DT10H","elevation":{"unitCode":"wmoUnit:m","value":238.9632},"periods":[{"number":1,"name":"Overnight","startTime":"2022-04-17T01:00:00-07:00","endTime":"2022-04-17T06:00:00-07:00","isDaytime":false,"temperature":36,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"14 mph","windDirection":"S","icon":"https://api.weather.gov/icons/land/night/rain,20?size=medium","shortForecast":"Slight Chance Light Rain","detailedForecast":"A slight chance of rain between 2am and 3am. Mostly cloudy, with a low around 36. South wind around 14 mph. Chance of precipitation is 20%."},{"number":2,"name":"Sunday","startTime":"2022-04-17T06:00:00-07:00","endTime":"2022-04-17T18:00:00-07:00","isDaytime":true,"temperature":55,"temperatureUnit":"F","temperatureTrend":"falling","windSpeed":"8 to 13 mph","windDirection":"SE","icon":"https://api.weather.gov/icons/land/day/sct?size=medium","shortForecast":"Mostly Sunny","detailedForecast":"Mostly sunny. High near 55, with temperatures falling to around 53 in the afternoon. Southeast wind 8 to 13 mph."},{"number":3,"name":"Sunday Night","startTime":"2022-04-17T18:00:00-07:00","endTime":"2022-04-18T06:00:00-07:00","isDaytime":false,"temperature":43,"temperatureUnit":"F","temperatureTrend":"rising","windSpeed":"7 to 14 mph","windDirection":"ESE","icon":"https://api.weather.gov/icons/land/night/rain,30/rain,80?size=medium","shortForecast":"Light Rain","detailedForecast":"Rain after 11pm. Mostly cloudy. Low around 43, with temperatures rising to around 46 overnight. East southeast wind 7 to 14 mph. Chance of precipitation is 80%. New rainfall amounts less than a tenth of an inch possible."},{"number":4,"name":"Monday","startTime":"2022-04-18T06:00:00-07:00","endTime":"2022-04-18T18:00:00-07:00","isDaytime":true,"temperature":52,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"14 to 17 mph","windDirection":"SE","icon":"https://api.weather.gov/icons/land/day/rain,90?size=medium","shortForecast":"Light Rain","detailedForecast":"Rain. Cloudy, with a high near 52. Southeast wind 14 to 17 mph, with gusts as high as 28 mph. Chance of precipitation is 90%. New rainfall amounts between a quarter and half of an inch possible."},{"number":5,"name":"Monday Night","startTime":"2022-04-18T18:00:00-07:00","endTime":"2022-04-19T06:00:00-07:00","isDaytime":false,"temperature":40,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"9 to 16 mph","windDirection":"S","icon":"https://api.weather.gov/icons/land/night/rain,80/rain,50?size=medium","shortForecast":"Light Rain","detailedForecast":"Rain. Mostly cloudy, with a low around 40. South wind 9 to 16 mph, with gusts as high as 21 mph. Chance of precipitation is 80%. New rainfall amounts between a quarter and half of an inch possible."},{"number":6,"name":"Tuesday","startTime":"2022-04-19T06:00:00-07:00","endTime":"2022-04-19T18:00:00-07:00","isDaytime":true,"temperature":52,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"8 to 13 mph","windDirection":"S","icon":"https://api.weather.gov/icons/land/day/rain,70?size=medium","shortForecast":"Light Rain Likely","detailedForecast":"Rain likely. Mostly cloudy, with a high near 52. Chance of precipitation is 70%. New rainfall amounts less than a tenth of an inch possible."},{"number":7,"name":"Tuesday Night","startTime":"2022-04-19T18:00:00-07:00","endTime":"2022-04-20T06:00:00-07:00","isDaytime":false,"temperature":38,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"8 mph","windDirection":"SSE","icon":"https://api.weather.gov/icons/land/night/rain,40/rain,30?size=medium","shortForecast":"Chance Light Rain","detailedForecast":"A chance of rain. Mostly cloudy, with a low around 38. Chance of precipitation is 40%."},{"number":8,"name":"Wednesday","startTime":"2022-04-20T06:00:00-07:00","endTime":"2022-04-20T18:00:00-07:00","isDaytime":true,"temperature":56,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"10 mph","windDirection":"ESE","icon":"https://api.weather.gov/icons/land/day/rain?size=medium","shortForecast":"Light Rain","detailedForecast":"Rain. Mostly cloudy, with a high near 56."},{"number":9,"name":"Wednesday Night","startTime":"2022-04-20T18:00:00-07:00","endTime":"2022-04-21T06:00:00-07:00","isDaytime":false,"temperature":44,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"8 to 12 mph","windDirection":"SE","icon":"https://api.weather.gov/icons/land/night/rain?size=medium","shortForecast":"Light Rain","detailedForecast":"Rain. Mostly cloudy, with a low around 44."},{"number":10,"name":"Thursday","startTime":"2022-04-21T06:00:00-07:00","endTime":"2022-04-21T18:00:00-07:00","isDaytime":true,"temperature":55,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"7 to 10 mph","windDirection":"S","icon":"https://api.weather.gov/icons/land/day/rain?size=medium","shortForecast":"Light Rain Likely","detailedForecast":"Rain likely. Mostly cloudy, with a high near 55."},{"number":11,"name":"Thursday Night","startTime":"2022-04-21T18:00:00-07:00","endTime":"2022-04-22T06:00:00-07:00","isDaytime":false,"temperature":42,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"7 mph","windDirection":"N","icon":"https://api.weather.gov/icons/land/night/rain?size=medium","shortForecast":"Chance Light Rain","detailedForecast":"A chance of rain. Mostly cloudy, with a low around 42."},{"number":12,"name":"Friday","startTime":"2022-04-22T06:00:00-07:00","endTime":"2022-04-22T18:00:00-07:00","isDaytime":true,"temperature":56,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"5 to 8 mph","windDirection":"S","icon":"https://api.weather.gov/icons/land/day/rain?size=medium","shortForecast":"Chance Light Rain","detailedForecast":"A chance of rain. Partly sunny, with a high near 56."},{"number":13,"name":"Friday Night","startTime":"2022-04-22T18:00:00-07:00","endTime":"2022-04-23T06:00:00-07:00","isDaytime":false,"temperature":44,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"8 mph","windDirection":"S","icon":"https://api.weather.gov/icons/land/night/rain?size=medium","shortForecast":"Chance Light Rain","detailedForecast":"A chance of rain. Mostly cloudy, with a low around 44."},{"number":14,"name":"Saturday","startTime":"2022-04-23T06:00:00-07:00","endTime":"2022-04-23T18:00:00-07:00","isDaytime":true,"temperature":55,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"9 mph","windDirection":"S","icon":"https://api.weather.gov/icons/land/day/rain?size=medium","shortForecast":"Chance Light Rain","detailedForecast":"A chance of rain. Mostly cloudy, with a high near 55."}]}
  var hourly_SEW_123_109 = {"correlationId":"83b6cf97","title":"Unexpected Problem","type":"https://api.weather.gov/problems/UnexpectedProblem","status":500,"detail":"An unexpected problem has occurred.","instance":"https://api.weather.gov/requests/83b6cf97"}
  var crags_config = [
  {
    "name": "Mount Erie",
    "note": "Highly textured and featured diorite.",
    "mountainProject": "https://www.mountainproject.com/area/106413714/mount-erie",
    "station": "KNUW",
    "office": "SEW/123,109",
    "coordinates": [
      -122.627,
      48.453
    ]
  }
]</script>

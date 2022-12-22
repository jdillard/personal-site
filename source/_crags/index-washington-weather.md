---
### THIS FILE IS AUTO-GENERATED - DO NOT EDIT ###
layout: page
title: Index, Washington Climbing Weather - Current, Past, and Forecasted Report
title_override: Index<br /><small>Climbing Weather</small>
description: A lightweight weather report for Index, Washington. Optimized for slow internet connections.
js_includes:
  - weather.js
---

<section class="measure center lh-copy f5-ns f6 ph2 mv4" style="text-align: justify;">
<strong>"Is it dry?"</strong>, an oft-repeated, age-old question. Here are real-time,
precipitation-focused reports of current, past, and forecasted climbing weather for Index, Washington.
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
<section id="weather" data-crag="index-washington" class="mv4-ns mv3 ph2 center"></section>
<section id="nearby" class="tc lh-copy">
  <h3>Nearby Crags</h3>
<a class="nowrap no-underline fancy-link relative light-red mh3" href="/crags/icicle-creek-washington-weather.html">Icicle Creek</a>
<a class="nowrap no-underline fancy-link relative light-red mh3" href="/crags/tieton-river-rock-washington-weather.html">Tieton River Rock</a>
<a class="nowrap no-underline fancy-link relative light-red mh3" href="/crags/vantage-washington-weather.html">Vantage</a>
<a class="nowrap no-underline fancy-link relative light-red mh3" href="/crags/mount-erie-washington-weather.html">Mount Erie</a>
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
  var weekly_SEW_150_72 = {"updated":"2022-12-22T16:40:23+00:00","units":"us","forecastGenerator":"BaselineForecastGenerator","generatedAt":"2022-12-22T17:51:26+00:00","updateTime":"2022-12-22T16:40:23+00:00","validTimes":"2022-12-22T10:00:00+00:00/P7DT18H","elevation":{"unitCode":"wmoUnit:m","value":148.1328},"periods":[{"number":1,"name":"Today","startTime":"2022-12-22T09:00:00-08:00","endTime":"2022-12-22T18:00:00-08:00","isDaytime":true,"temperature":15,"temperatureUnit":"F","temperatureTrend":"falling","windSpeed":"13 mph","windDirection":"E","icon":"https://api.weather.gov/icons/land/day/ovc/snow,30?size=medium","shortForecast":"Cloudy then Chance Light Snow","detailedForecast":"A chance of snow after 4pm. Cloudy. High near 15, with temperatures falling to around 13 in the afternoon. Wind chill values as low as -7. East wind around 13 mph, with gusts as high as 29 mph. Chance of precipitation is 30%. Little or no snow accumulation expected."},{"number":2,"name":"Tonight","startTime":"2022-12-22T18:00:00-08:00","endTime":"2022-12-23T06:00:00-08:00","isDaytime":false,"temperature":11,"temperatureUnit":"F","temperatureTrend":"rising","windSpeed":"14 mph","windDirection":"E","icon":"https://api.weather.gov/icons/land/night/snow,80/snow,100?size=medium","shortForecast":"Light Snow","detailedForecast":"Snow. Cloudy. Low around 11, with temperatures rising to around 17 overnight. Wind chill values as low as -1. East wind around 14 mph, with gusts as high as 28 mph. Chance of precipitation is 100%. New snow accumulation of around one inch possible."},{"number":3,"name":"Friday","startTime":"2022-12-23T06:00:00-08:00","endTime":"2022-12-23T18:00:00-08:00","isDaytime":true,"temperature":34,"temperatureUnit":"F","temperatureTrend":"falling","windSpeed":"7 to 12 mph","windDirection":"E","icon":"https://api.weather.gov/icons/land/day/snow_fzra,100?size=medium","shortForecast":"Light Snow","detailedForecast":"Snow before 10am, then snow and freezing rain. Cloudy. High near 34, with temperatures falling to around 31 in the afternoon. Wind chill values as low as 4. East wind 7 to 12 mph, with gusts as high as 21 mph. Chance of precipitation is 100%. Little or no ice accumulation expected."},{"number":4,"name":"Friday Night","startTime":"2022-12-23T18:00:00-08:00","endTime":"2022-12-24T06:00:00-08:00","isDaytime":false,"temperature":29,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"3 to 7 mph","windDirection":"E","icon":"https://api.weather.gov/icons/land/night/snow_fzra,100/rain,90?size=medium","shortForecast":"Light Snow then Rain","detailedForecast":"Snow and freezing rain likely before 7pm, then rain. Cloudy, with a low around 29. East wind 3 to 7 mph. Chance of precipitation is 100%. Little or no ice accumulation expected."},{"number":5,"name":"Saturday","startTime":"2022-12-24T06:00:00-08:00","endTime":"2022-12-24T18:00:00-08:00","isDaytime":true,"temperature":43,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"8 mph","windDirection":"ESE","icon":"https://api.weather.gov/icons/land/day/rain,100?size=medium","shortForecast":"Rain","detailedForecast":"Rain. Cloudy, with a high near 43. East southeast wind around 8 mph. Chance of precipitation is 100%. New rainfall amounts between 1 and 2 inches possible."},{"number":6,"name":"Saturday Night","startTime":"2022-12-24T18:00:00-08:00","endTime":"2022-12-25T06:00:00-08:00","isDaytime":false,"temperature":38,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"6 to 9 mph","windDirection":"SSE","icon":"https://api.weather.gov/icons/land/night/rain,90/rain,50?size=medium","shortForecast":"Rain","detailedForecast":"Rain. Cloudy, with a low around 38. Chance of precipitation is 90%. New rainfall amounts between three quarters and one inch possible."},{"number":7,"name":"Christmas Day","startTime":"2022-12-25T06:00:00-08:00","endTime":"2022-12-25T18:00:00-08:00","isDaytime":true,"temperature":45,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"10 mph","windDirection":"ESE","icon":"https://api.weather.gov/icons/land/day/rain,70/rain,90?size=medium","shortForecast":"Rain","detailedForecast":"Rain. Cloudy, with a high near 45. Chance of precipitation is 90%."},{"number":8,"name":"Sunday Night","startTime":"2022-12-25T18:00:00-08:00","endTime":"2022-12-26T06:00:00-08:00","isDaytime":false,"temperature":42,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"12 mph","windDirection":"ESE","icon":"https://api.weather.gov/icons/land/night/rain?size=medium","shortForecast":"Rain","detailedForecast":"Rain. Cloudy, with a low around 42."},{"number":9,"name":"Monday","startTime":"2022-12-26T06:00:00-08:00","endTime":"2022-12-26T18:00:00-08:00","isDaytime":true,"temperature":47,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"12 mph","windDirection":"SE","icon":"https://api.weather.gov/icons/land/day/rain?size=medium","shortForecast":"Rain","detailedForecast":"Rain. Cloudy, with a high near 47."},{"number":10,"name":"Monday Night","startTime":"2022-12-26T18:00:00-08:00","endTime":"2022-12-27T06:00:00-08:00","isDaytime":false,"temperature":41,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"9 to 16 mph","windDirection":"SE","icon":"https://api.weather.gov/icons/land/night/rain?size=medium","shortForecast":"Rain","detailedForecast":"Rain. Cloudy, with a low around 41."},{"number":11,"name":"Tuesday","startTime":"2022-12-27T06:00:00-08:00","endTime":"2022-12-27T18:00:00-08:00","isDaytime":true,"temperature":44,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"12 to 16 mph","windDirection":"ESE","icon":"https://api.weather.gov/icons/land/day/rain?size=medium","shortForecast":"Rain","detailedForecast":"Rain. Cloudy, with a high near 44."},{"number":12,"name":"Tuesday Night","startTime":"2022-12-27T18:00:00-08:00","endTime":"2022-12-28T06:00:00-08:00","isDaytime":false,"temperature":39,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"15 mph","windDirection":"S","icon":"https://api.weather.gov/icons/land/night/rain?size=medium","shortForecast":"Rain","detailedForecast":"Rain. Cloudy, with a low around 39."},{"number":13,"name":"Wednesday","startTime":"2022-12-28T06:00:00-08:00","endTime":"2022-12-28T18:00:00-08:00","isDaytime":true,"temperature":42,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"9 to 14 mph","windDirection":"S","icon":"https://api.weather.gov/icons/land/day/rain?size=medium","shortForecast":"Rain Likely","detailedForecast":"Rain likely. Cloudy, with a high near 42."},{"number":14,"name":"Wednesday Night","startTime":"2022-12-28T18:00:00-08:00","endTime":"2022-12-29T06:00:00-08:00","isDaytime":false,"temperature":38,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"12 mph","windDirection":"SE","icon":"https://api.weather.gov/icons/land/night/rain?size=medium","shortForecast":"Rain Likely","detailedForecast":"Rain likely. Cloudy, with a low around 38."}]}
  var hourly_SEW_150_72 = false
  var crags_config = [
  {
    "name": "Index",
    "note": "Fine-grained granite",
    "mountainProject": "https://www.mountainproject.com/area/105790635/index",
    "station": "TSTEV",
    "office": "SEW/150,72",
    "coordinates": [
      -121.556,
      47.82
    ]
  }
]</script>

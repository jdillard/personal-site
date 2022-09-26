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
  var weekly_SEW_150_72 = {"updated":"2022-09-26T04:40:19+00:00","units":"us","forecastGenerator":"BaselineForecastGenerator","generatedAt":"2022-09-26T08:44:07+00:00","updateTime":"2022-09-26T04:40:19+00:00","validTimes":"2022-09-25T22:00:00+00:00/P7DT6H","elevation":{"unitCode":"wmoUnit:m","value":148.1328},"periods":[{"number":1,"name":"Overnight","startTime":"2022-09-26T01:00:00-07:00","endTime":"2022-09-26T06:00:00-07:00","isDaytime":false,"temperature":58,"temperatureUnit":"F","temperatureTrend":"rising","windSpeed":"8 mph","windDirection":"ENE","icon":"https://api.weather.gov/icons/land/night/smoke?size=medium","shortForecast":"Haze","detailedForecast":"Haze and areas of smoke. Clear. Low around 58, with temperatures rising to around 60 overnight. East northeast wind around 8 mph."},{"number":2,"name":"Monday","startTime":"2022-09-26T06:00:00-07:00","endTime":"2022-09-26T18:00:00-07:00","isDaytime":true,"temperature":84,"temperatureUnit":"F","temperatureTrend":"falling","windSpeed":"2 to 8 mph","windDirection":"N","icon":"https://api.weather.gov/icons/land/day/smoke/few?size=medium","shortForecast":"Haze then Sunny","detailedForecast":"Haze and areas of smoke before 11am. Sunny. High near 84, with temperatures falling to around 82 in the afternoon. North wind 2 to 8 mph."},{"number":3,"name":"Monday Night","startTime":"2022-09-26T18:00:00-07:00","endTime":"2022-09-27T06:00:00-07:00","isDaytime":false,"temperature":56,"temperatureUnit":"F","temperatureTrend":"rising","windSpeed":"7 mph","windDirection":"NNE","icon":"https://api.weather.gov/icons/land/night/skc?size=medium","shortForecast":"Clear","detailedForecast":"Clear. Low around 56, with temperatures rising to around 60 overnight. North northeast wind around 7 mph."},{"number":4,"name":"Tuesday","startTime":"2022-09-27T06:00:00-07:00","endTime":"2022-09-27T18:00:00-07:00","isDaytime":true,"temperature":81,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"2 to 8 mph","windDirection":"ENE","icon":"https://api.weather.gov/icons/land/day/few?size=medium","shortForecast":"Sunny","detailedForecast":"Sunny, with a high near 81. East northeast wind 2 to 8 mph."},{"number":5,"name":"Tuesday Night","startTime":"2022-09-27T18:00:00-07:00","endTime":"2022-09-28T06:00:00-07:00","isDaytime":false,"temperature":54,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"1 to 5 mph","windDirection":"NNE","icon":"https://api.weather.gov/icons/land/night/sct/rain,20?size=medium","shortForecast":"Partly Cloudy then Slight Chance Light Rain","detailedForecast":"A slight chance of rain after 5am. Partly cloudy, with a low around 54. North northeast wind 1 to 5 mph. Chance of precipitation is 20%."},{"number":6,"name":"Wednesday","startTime":"2022-09-28T06:00:00-07:00","endTime":"2022-09-28T18:00:00-07:00","isDaytime":true,"temperature":66,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"5 mph","windDirection":"NNW","icon":"https://api.weather.gov/icons/land/day/rain,30/rain,40?size=medium","shortForecast":"Chance Light Rain","detailedForecast":"A chance of rain. Mostly cloudy, with a high near 66. Chance of precipitation is 40%. New rainfall amounts less than a tenth of an inch possible."},{"number":7,"name":"Wednesday Night","startTime":"2022-09-28T18:00:00-07:00","endTime":"2022-09-29T06:00:00-07:00","isDaytime":false,"temperature":52,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"5 mph","windDirection":"SW","icon":"https://api.weather.gov/icons/land/night/rain,50?size=medium","shortForecast":"Chance Light Rain","detailedForecast":"A chance of rain. Mostly cloudy, with a low around 52. Chance of precipitation is 50%."},{"number":8,"name":"Thursday","startTime":"2022-09-29T06:00:00-07:00","endTime":"2022-09-29T18:00:00-07:00","isDaytime":true,"temperature":61,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"5 mph","windDirection":"WSW","icon":"https://api.weather.gov/icons/land/day/rain?size=medium","shortForecast":"Chance Light Rain","detailedForecast":"A chance of rain before 5pm. Mostly cloudy, with a high near 61."},{"number":9,"name":"Thursday Night","startTime":"2022-09-29T18:00:00-07:00","endTime":"2022-09-30T06:00:00-07:00","isDaytime":false,"temperature":49,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"5 mph","windDirection":"N","icon":"https://api.weather.gov/icons/land/night/bkn?size=medium","shortForecast":"Mostly Cloudy","detailedForecast":"Mostly cloudy, with a low around 49."},{"number":10,"name":"Friday","startTime":"2022-09-30T06:00:00-07:00","endTime":"2022-09-30T18:00:00-07:00","isDaytime":true,"temperature":70,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"3 mph","windDirection":"NE","icon":"https://api.weather.gov/icons/land/day/sct?size=medium","shortForecast":"Mostly Sunny","detailedForecast":"Mostly sunny, with a high near 70."},{"number":11,"name":"Friday Night","startTime":"2022-09-30T18:00:00-07:00","endTime":"2022-10-01T06:00:00-07:00","isDaytime":false,"temperature":51,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"3 to 7 mph","windDirection":"E","icon":"https://api.weather.gov/icons/land/night/sct?size=medium","shortForecast":"Partly Cloudy","detailedForecast":"Partly cloudy, with a low around 51."},{"number":12,"name":"Saturday","startTime":"2022-10-01T06:00:00-07:00","endTime":"2022-10-01T18:00:00-07:00","isDaytime":true,"temperature":73,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"7 mph","windDirection":"SSE","icon":"https://api.weather.gov/icons/land/day/sct/rain?size=medium","shortForecast":"Mostly Sunny then Slight Chance Light Rain","detailedForecast":"A slight chance of rain after 5pm. Mostly sunny, with a high near 73."},{"number":13,"name":"Saturday Night","startTime":"2022-10-01T18:00:00-07:00","endTime":"2022-10-02T06:00:00-07:00","isDaytime":false,"temperature":51,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"5 mph","windDirection":"S","icon":"https://api.weather.gov/icons/land/night/rain?size=medium","shortForecast":"Slight Chance Light Rain","detailedForecast":"A slight chance of rain. Partly cloudy, with a low around 51."},{"number":14,"name":"Sunday","startTime":"2022-10-02T06:00:00-07:00","endTime":"2022-10-02T18:00:00-07:00","isDaytime":true,"temperature":65,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"5 mph","windDirection":"SSW","icon":"https://api.weather.gov/icons/land/day/rain?size=medium","shortForecast":"Slight Chance Light Rain","detailedForecast":"A slight chance of rain before 5pm. Mostly sunny, with a high near 65."}]}
  var hourly_SEW_150_72 = {"correlationId":"29b4ae0a","title":"Unexpected Problem","type":"https://api.weather.gov/problems/UnexpectedProblem","status":500,"detail":"An unexpected problem has occurred.","instance":"https://api.weather.gov/requests/29b4ae0a"}
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

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
  var weekly_SEW_150_72 = {"updated":"2022-05-07T04:40:28+00:00","units":"us","forecastGenerator":"BaselineForecastGenerator","generatedAt":"2022-05-07T08:39:26+00:00","updateTime":"2022-05-07T04:40:28+00:00","validTimes":"2022-05-06T22:00:00+00:00/P7DT9H","elevation":{"unitCode":"wmoUnit:m","value":148.1328},"periods":[{"number":1,"name":"Overnight","startTime":"2022-05-07T01:00:00-07:00","endTime":"2022-05-07T06:00:00-07:00","isDaytime":false,"temperature":41,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"1 to 5 mph","windDirection":"NW","icon":"https://api.weather.gov/icons/land/night/rain,90?size=medium","shortForecast":"Light Rain","detailedForecast":"Rain showers before 2am, then rain. Cloudy, with a low around 41. Northwest wind 1 to 5 mph. Chance of precipitation is 90%. New rainfall amounts between a half and three quarters of an inch possible."},{"number":2,"name":"Saturday","startTime":"2022-05-07T06:00:00-07:00","endTime":"2022-05-07T18:00:00-07:00","isDaytime":true,"temperature":46,"temperatureUnit":"F","temperatureTrend":"falling","windSpeed":"5 to 8 mph","windDirection":"WNW","icon":"https://api.weather.gov/icons/land/day/tsra,90?size=medium","shortForecast":"Rain","detailedForecast":"Rain before 11am, then rain and a slight chance of thunderstorms. Cloudy. High near 46, with temperatures falling to around 42 in the afternoon. West northwest wind 5 to 8 mph. Chance of precipitation is 90%. New rainfall amounts between 1 and 2 inches possible."},{"number":3,"name":"Saturday Night","startTime":"2022-05-07T18:00:00-07:00","endTime":"2022-05-08T06:00:00-07:00","isDaytime":false,"temperature":37,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"1 to 6 mph","windDirection":"NW","icon":"https://api.weather.gov/icons/land/night/tsra,60/rain_showers,40?size=medium","shortForecast":"Rain Likely then Chance Rain Showers","detailedForecast":"Rain likely and a slight chance of thunderstorms before 11pm, then a chance of rain showers between 11pm and 5am. Cloudy, with a low around 37. Northwest wind 1 to 6 mph. Chance of precipitation is 60%. New rainfall amounts between a half and three quarters of an inch possible."},{"number":4,"name":"Sunday","startTime":"2022-05-08T06:00:00-07:00","endTime":"2022-05-08T18:00:00-07:00","isDaytime":true,"temperature":48,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"1 to 7 mph","windDirection":"NW","icon":"https://api.weather.gov/icons/land/day/rain_showers,50?size=medium","shortForecast":"Chance Rain Showers","detailedForecast":"A chance of rain showers after 11am. Mostly cloudy, with a high near 48. Northwest wind 1 to 7 mph. Chance of precipitation is 50%. New rainfall amounts less than a tenth of an inch possible."},{"number":5,"name":"Sunday Night","startTime":"2022-05-08T18:00:00-07:00","endTime":"2022-05-09T06:00:00-07:00","isDaytime":false,"temperature":38,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"0 to 6 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/night/rain_showers,20/rain_showers,30?size=medium","shortForecast":"Chance Rain Showers","detailedForecast":"A chance of rain showers. Mostly cloudy, with a low around 38. West wind 0 to 6 mph. Chance of precipitation is 30%. New rainfall amounts less than a tenth of an inch possible."},{"number":6,"name":"Monday","startTime":"2022-05-09T06:00:00-07:00","endTime":"2022-05-09T18:00:00-07:00","isDaytime":true,"temperature":49,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"1 to 5 mph","windDirection":"WSW","icon":"https://api.weather.gov/icons/land/day/rain_showers,40?size=medium","shortForecast":"Chance Rain Showers","detailedForecast":"A chance of rain showers. Mostly cloudy, with a high near 49. Chance of precipitation is 40%. New rainfall amounts between a tenth and quarter of an inch possible."},{"number":7,"name":"Monday Night","startTime":"2022-05-09T18:00:00-07:00","endTime":"2022-05-10T06:00:00-07:00","isDaytime":false,"temperature":40,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"5 mph","windDirection":"SW","icon":"https://api.weather.gov/icons/land/night/rain_showers,20/bkn?size=medium","shortForecast":"Slight Chance Rain Showers then Mostly Cloudy","detailedForecast":"A slight chance of rain showers before 11pm. Mostly cloudy, with a low around 40. Chance of precipitation is 20%."},{"number":8,"name":"Tuesday","startTime":"2022-05-10T06:00:00-07:00","endTime":"2022-05-10T18:00:00-07:00","isDaytime":true,"temperature":52,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"6 mph","windDirection":"WSW","icon":"https://api.weather.gov/icons/land/day/rain_showers?size=medium","shortForecast":"Slight Chance Rain Showers","detailedForecast":"A slight chance of rain showers between 11am and 5pm. Mostly cloudy, with a high near 52."},{"number":9,"name":"Tuesday Night","startTime":"2022-05-10T18:00:00-07:00","endTime":"2022-05-11T06:00:00-07:00","isDaytime":false,"temperature":40,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"6 mph","windDirection":"SW","icon":"https://api.weather.gov/icons/land/night/bkn?size=medium","shortForecast":"Mostly Cloudy","detailedForecast":"Mostly cloudy, with a low around 40."},{"number":10,"name":"Wednesday","startTime":"2022-05-11T06:00:00-07:00","endTime":"2022-05-11T18:00:00-07:00","isDaytime":true,"temperature":54,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"6 mph","windDirection":"SSW","icon":"https://api.weather.gov/icons/land/day/rain?size=medium","shortForecast":"Chance Light Rain","detailedForecast":"A chance of rain after 11am. Partly sunny, with a high near 54."},{"number":11,"name":"Wednesday Night","startTime":"2022-05-11T18:00:00-07:00","endTime":"2022-05-12T06:00:00-07:00","isDaytime":false,"temperature":40,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"6 mph","windDirection":"SSW","icon":"https://api.weather.gov/icons/land/night/rain?size=medium","shortForecast":"Chance Light Rain","detailedForecast":"A chance of rain. Mostly cloudy, with a low around 40."},{"number":12,"name":"Thursday","startTime":"2022-05-12T06:00:00-07:00","endTime":"2022-05-12T18:00:00-07:00","isDaytime":true,"temperature":51,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"6 mph","windDirection":"SSW","icon":"https://api.weather.gov/icons/land/day/rain?size=medium","shortForecast":"Chance Light Rain","detailedForecast":"A chance of rain before 5pm, then a chance of rain showers. Mostly cloudy, with a high near 51."},{"number":13,"name":"Thursday Night","startTime":"2022-05-12T18:00:00-07:00","endTime":"2022-05-13T06:00:00-07:00","isDaytime":false,"temperature":40,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"6 mph","windDirection":"SW","icon":"https://api.weather.gov/icons/land/night/rain_showers?size=medium","shortForecast":"Chance Rain Showers","detailedForecast":"A chance of rain showers. Mostly cloudy, with a low around 40."},{"number":14,"name":"Friday","startTime":"2022-05-13T06:00:00-07:00","endTime":"2022-05-13T18:00:00-07:00","isDaytime":true,"temperature":51,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"6 mph","windDirection":"SW","icon":"https://api.weather.gov/icons/land/day/rain_showers?size=medium","shortForecast":"Chance Rain Showers","detailedForecast":"A chance of rain showers. Mostly cloudy, with a high near 51."}]}
  var hourly_SEW_150_72 = {"correlationId":"ab8e8c3","title":"Unexpected Problem","type":"https://api.weather.gov/problems/UnexpectedProblem","status":500,"detail":"An unexpected problem has occurred.","instance":"https://api.weather.gov/requests/ab8e8c3"}
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

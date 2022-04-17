---
### THIS FILE IS AUTO-GENERATED - DO NOT EDIT ###
layout: page
title: Icicle Creek, Washington Climbing Weather - Current, Past, and Forecasted Report
title_override: Icicle Creek<br /><small>Climbing Weather</small>
description: A lightweight weather report for Icicle Creek, Washington. Optimized for slow internet connections.
js_includes:
  - weather.js
---

<section class="measure center lh-copy f5-ns f6 ph2 mv4" style="text-align: justify;">
<strong>"Is it dry?"</strong>, an oft-repeated, age-old question. Here are real-time,
precipitation-focused reports of current, past, and forecasted climbing weather for Icicle Creek, Washington.
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
<section id="weather" data-crag="icicle-creek-washington" class="mv4-ns mv3 ph2 center"></section>
<section id="nearby" class="tc lh-copy">
  <h3>Nearby Crags</h3>
<a class="nowrap no-underline fancy-link relative light-red mh3" href="/crags/tieton-river-rock-washington-weather.html">Tieton River Rock</a>
<a class="nowrap no-underline fancy-link relative light-red mh3" href="/crags/vantage-washington-weather.html">Vantage</a>
<a class="nowrap no-underline fancy-link relative light-red mh3" href="/crags/mount-erie-washington-weather.html">Mount Erie</a>
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
  var weekly_OTX_35_103 = {"updated":"2022-04-17T05:46:42+00:00","units":"us","forecastGenerator":"BaselineForecastGenerator","generatedAt":"2022-04-17T08:37:59+00:00","updateTime":"2022-04-17T05:46:42+00:00","validTimes":"2022-04-16T23:00:00+00:00/P7DT2H","elevation":{"unitCode":"wmoUnit:m","value":627.888},"periods":[{"number":1,"name":"Overnight","startTime":"2022-04-17T01:00:00-07:00","endTime":"2022-04-17T06:00:00-07:00","isDaytime":false,"temperature":25,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"17 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/night/sct?size=medium","shortForecast":"Partly Cloudy","detailedForecast":"Partly cloudy, with a low around 25. West wind around 17 mph."},{"number":2,"name":"Sunday","startTime":"2022-04-17T06:00:00-07:00","endTime":"2022-04-17T18:00:00-07:00","isDaytime":true,"temperature":47,"temperatureUnit":"F","temperatureTrend":"falling","windSpeed":"5 to 14 mph","windDirection":"E","icon":"https://api.weather.gov/icons/land/day/sct?size=medium","shortForecast":"Mostly Sunny","detailedForecast":"Mostly sunny. High near 47, with temperatures falling to around 39 in the afternoon. East wind 5 to 14 mph."},{"number":3,"name":"Sunday Night","startTime":"2022-04-17T18:00:00-07:00","endTime":"2022-04-18T06:00:00-07:00","isDaytime":false,"temperature":31,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"3 to 8 mph","windDirection":"SE","icon":"https://api.weather.gov/icons/land/night/bkn/snow,60?size=medium","shortForecast":"Mostly Cloudy then Light Snow Likely","detailedForecast":"Snow likely after 5am. Mostly cloudy, with a low around 31. Southeast wind 3 to 8 mph. Chance of precipitation is 60%. New snow accumulation of less than one inch possible."},{"number":4,"name":"Monday","startTime":"2022-04-18T06:00:00-07:00","endTime":"2022-04-18T18:00:00-07:00","isDaytime":true,"temperature":40,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"7 mph","windDirection":"E","icon":"https://api.weather.gov/icons/land/day/snow,80?size=medium","shortForecast":"Rain And Snow","detailedForecast":"Snow likely before 8am, then rain and snow. Mostly cloudy, with a high near 40. East wind around 7 mph. Chance of precipitation is 80%. New snow accumulation of less than one inch possible."},{"number":5,"name":"Monday Night","startTime":"2022-04-18T18:00:00-07:00","endTime":"2022-04-19T06:00:00-07:00","isDaytime":false,"temperature":29,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"6 to 9 mph","windDirection":"SW","icon":"https://api.weather.gov/icons/land/night/snow,70/snow,30?size=medium","shortForecast":"Chance Rain And Snow","detailedForecast":"Rain likely before 11pm, then a chance of rain and snow. Mostly cloudy, with a low around 29. Southwest wind 6 to 9 mph. Chance of precipitation is 70%. New snow accumulation of less than half an inch possible."},{"number":6,"name":"Tuesday","startTime":"2022-04-19T06:00:00-07:00","endTime":"2022-04-19T18:00:00-07:00","isDaytime":true,"temperature":43,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"10 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/day/snow,40?size=medium","shortForecast":"Chance Rain And Snow","detailedForecast":"A slight chance of snow before 11am, then a chance of rain and snow. Mostly sunny, with a high near 43. Chance of precipitation is 40%. Little or no snow accumulation expected."},{"number":7,"name":"Tuesday Night","startTime":"2022-04-19T18:00:00-07:00","endTime":"2022-04-20T06:00:00-07:00","isDaytime":false,"temperature":26,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"7 to 10 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/night/snow,30/snow,20?size=medium","shortForecast":"Chance Rain And Snow","detailedForecast":"A chance of rain and snow. Partly cloudy, with a low around 26. Chance of precipitation is 30%. Little or no snow accumulation expected."},{"number":8,"name":"Wednesday","startTime":"2022-04-20T06:00:00-07:00","endTime":"2022-04-20T18:00:00-07:00","isDaytime":true,"temperature":44,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"7 to 10 mph","windDirection":"S","icon":"https://api.weather.gov/icons/land/day/snow,50/snow,70?size=medium","shortForecast":"Slight Chance Light Snow then Rain And Snow Likely","detailedForecast":"A slight chance of snow before 11am, then rain and snow likely. Partly sunny, with a high near 44. Chance of precipitation is 70%. Little or no snow accumulation expected."},{"number":9,"name":"Wednesday Night","startTime":"2022-04-20T18:00:00-07:00","endTime":"2022-04-21T06:00:00-07:00","isDaytime":false,"temperature":33,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"6 to 10 mph","windDirection":"NW","icon":"https://api.weather.gov/icons/land/night/rain,70/rain,40?size=medium","shortForecast":"Light Rain Likely","detailedForecast":"Rain likely. Mostly cloudy, with a low around 33. Chance of precipitation is 70%."},{"number":10,"name":"Thursday","startTime":"2022-04-21T06:00:00-07:00","endTime":"2022-04-21T18:00:00-07:00","isDaytime":true,"temperature":47,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"8 mph","windDirection":"SW","icon":"https://api.weather.gov/icons/land/day/rain,40?size=medium","shortForecast":"Chance Light Rain","detailedForecast":"A chance of rain. Partly sunny, with a high near 47. Chance of precipitation is 40%."},{"number":11,"name":"Thursday Night","startTime":"2022-04-21T18:00:00-07:00","endTime":"2022-04-22T06:00:00-07:00","isDaytime":false,"temperature":33,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"8 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/night/rain,20?size=medium","shortForecast":"Slight Chance Light Rain","detailedForecast":"A slight chance of rain. Mostly cloudy, with a low around 33. Chance of precipitation is 20%."},{"number":12,"name":"Friday","startTime":"2022-04-22T06:00:00-07:00","endTime":"2022-04-22T18:00:00-07:00","isDaytime":true,"temperature":51,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"8 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/day/rain,30?size=medium","shortForecast":"Chance Light Rain","detailedForecast":"A chance of rain. Partly sunny, with a high near 51. Chance of precipitation is 30%."},{"number":13,"name":"Friday Night","startTime":"2022-04-22T18:00:00-07:00","endTime":"2022-04-23T06:00:00-07:00","isDaytime":false,"temperature":35,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"8 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/night/rain,30?size=medium","shortForecast":"Chance Light Rain","detailedForecast":"A chance of rain. Mostly cloudy, with a low around 35. Chance of precipitation is 30%."},{"number":14,"name":"Saturday","startTime":"2022-04-23T06:00:00-07:00","endTime":"2022-04-23T18:00:00-07:00","isDaytime":true,"temperature":52,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"8 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/day/rain,30?size=medium","shortForecast":"Chance Light Rain","detailedForecast":"A chance of rain. Partly sunny, with a high near 52. Chance of precipitation is 30%."}]}
  var hourly_OTX_35_103 = {"correlationId":"83b6882d","title":"Unexpected Problem","type":"https://api.weather.gov/problems/UnexpectedProblem","status":500,"detail":"An unexpected problem has occurred.","instance":"https://api.weather.gov/requests/83b6882d"}
  var crags_config = [
  {
    "name": "Icicle Creek",
    "note": "Granite, so exposed areas dry fast.",
    "mountainProject": "https://www.mountainproject.com/area/105790237/icicle-creek",
    "station": "KEAT",
    "office": "OTX/35,103",
    "coordinates": [
      -120.711,
      47.543
    ]
  }
]</script>

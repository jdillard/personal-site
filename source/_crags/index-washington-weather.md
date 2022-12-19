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
  var weekly_SEW_150_72 = {"updated":"2022-12-19T07:48:23+00:00","units":"us","forecastGenerator":"BaselineForecastGenerator","generatedAt":"2022-12-19T08:35:53+00:00","updateTime":"2022-12-19T07:48:23+00:00","validTimes":"2022-12-19T01:00:00+00:00/P7DT3H","elevation":{"unitCode":"wmoUnit:m","value":148.1328},"periods":[{"number":1,"name":"Overnight","startTime":"2022-12-19T00:00:00-08:00","endTime":"2022-12-19T06:00:00-08:00","isDaytime":false,"temperature":19,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"0 to 3 mph","windDirection":"SE","icon":"https://api.weather.gov/icons/land/night/snow,20?size=medium","shortForecast":"Slight Chance Light Snow","detailedForecast":"A slight chance of snow between 1am and 2am. Cloudy, with a low around 19. Wind chill values as low as 20. Southeast wind 0 to 3 mph. Chance of precipitation is 20%. New snow accumulation of less than one inch possible."},{"number":2,"name":"Monday","startTime":"2022-12-19T06:00:00-08:00","endTime":"2022-12-19T18:00:00-08:00","isDaytime":true,"temperature":27,"temperatureUnit":"F","temperatureTrend":"falling","windSpeed":"3 mph","windDirection":"NE","icon":"https://api.weather.gov/icons/land/day/bkn/snow,20?size=medium","shortForecast":"Mostly Cloudy then Slight Chance Light Snow","detailedForecast":"A slight chance of snow after 4pm. Mostly cloudy. High near 27, with temperatures falling to around 23 in the afternoon. Wind chill values as low as 19. Northeast wind around 3 mph. Chance of precipitation is 20%. New snow accumulation of around one inch possible."},{"number":3,"name":"Monday Night","startTime":"2022-12-19T18:00:00-08:00","endTime":"2022-12-20T06:00:00-08:00","isDaytime":false,"temperature":20,"temperatureUnit":"F","temperatureTrend":"rising","windSpeed":"1 to 6 mph","windDirection":"ENE","icon":"https://api.weather.gov/icons/land/night/snow,40/snow,50?size=medium","shortForecast":"Chance Snow","detailedForecast":"A chance of snow. Mostly cloudy. Low around 20, with temperatures rising to around 23 overnight. Wind chill values as low as 16. East northeast wind 1 to 6 mph. Chance of precipitation is 50%. New snow accumulation of 3 to 5 inches possible."},{"number":4,"name":"Tuesday","startTime":"2022-12-20T06:00:00-08:00","endTime":"2022-12-20T18:00:00-08:00","isDaytime":true,"temperature":29,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"3 mph","windDirection":"ESE","icon":"https://api.weather.gov/icons/land/day/snow,60?size=medium","shortForecast":"Heavy Snow Likely","detailedForecast":"Snow likely. Mostly cloudy, with a high near 29. Wind chill values as low as 21. East southeast wind around 3 mph. Chance of precipitation is 60%. New snow accumulation of 8 to 12 inches possible."},{"number":5,"name":"Tuesday Night","startTime":"2022-12-20T18:00:00-08:00","endTime":"2022-12-21T06:00:00-08:00","isDaytime":false,"temperature":19,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"3 mph","windDirection":"ESE","icon":"https://api.weather.gov/icons/land/night/snow,50/snow,30?size=medium","shortForecast":"Chance Heavy Snow","detailedForecast":"A chance of snow before 7pm, then a chance of rain and snow between 7pm and 4am. Mostly cloudy, with a low around 19. East southeast wind around 3 mph. Chance of precipitation is 50%. New snow accumulation of 4 to 8 inches possible."},{"number":6,"name":"Wednesday","startTime":"2022-12-21T06:00:00-08:00","endTime":"2022-12-21T18:00:00-08:00","isDaytime":true,"temperature":26,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"3 mph","windDirection":"E","icon":"https://api.weather.gov/icons/land/day/bkn?size=medium","shortForecast":"Mostly Cloudy","detailedForecast":"Mostly cloudy, with a high near 26. New snow accumulation of 1 to 2 inches possible."},{"number":7,"name":"Wednesday Night","startTime":"2022-12-21T18:00:00-08:00","endTime":"2022-12-22T06:00:00-08:00","isDaytime":false,"temperature":16,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"3 to 12 mph","windDirection":"E","icon":"https://api.weather.gov/icons/land/night/snow,20/snow,30?size=medium","shortForecast":"Chance Light Snow","detailedForecast":"A chance of snow after 10pm. Mostly cloudy, with a low around 16. Chance of precipitation is 30%."},{"number":8,"name":"Thursday","startTime":"2022-12-22T06:00:00-08:00","endTime":"2022-12-22T18:00:00-08:00","isDaytime":true,"temperature":24,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"12 mph","windDirection":"E","icon":"https://api.weather.gov/icons/land/day/snow?size=medium","shortForecast":"Chance Light Snow","detailedForecast":"A chance of snow before 1pm, then rain and snow likely. Cloudy, with a high near 24. New snow accumulation of less than half an inch possible."},{"number":9,"name":"Thursday Night","startTime":"2022-12-22T18:00:00-08:00","endTime":"2022-12-23T06:00:00-08:00","isDaytime":false,"temperature":21,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"13 mph","windDirection":"E","icon":"https://api.weather.gov/icons/land/night/snow?size=medium","shortForecast":"Light Snow Likely","detailedForecast":"Snow likely before 1am, then rain and snow likely. Cloudy, with a low around 21."},{"number":10,"name":"Friday","startTime":"2022-12-23T06:00:00-08:00","endTime":"2022-12-23T18:00:00-08:00","isDaytime":true,"temperature":38,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"6 to 10 mph","windDirection":"ESE","icon":"https://api.weather.gov/icons/land/day/snow?size=medium","shortForecast":"Rain And Snow Likely","detailedForecast":"Rain and snow likely. Cloudy, with a high near 38."},{"number":11,"name":"Friday Night","startTime":"2022-12-23T18:00:00-08:00","endTime":"2022-12-24T06:00:00-08:00","isDaytime":false,"temperature":35,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"7 mph","windDirection":"ESE","icon":"https://api.weather.gov/icons/land/night/rain?size=medium","shortForecast":"Chance Light Rain","detailedForecast":"A chance of rain. Mostly cloudy, with a low around 35."},{"number":12,"name":"Saturday","startTime":"2022-12-24T06:00:00-08:00","endTime":"2022-12-24T18:00:00-08:00","isDaytime":true,"temperature":44,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"7 mph","windDirection":"ESE","icon":"https://api.weather.gov/icons/land/day/rain?size=medium","shortForecast":"Rain Likely","detailedForecast":"Rain likely. Cloudy, with a high near 44."},{"number":13,"name":"Saturday Night","startTime":"2022-12-24T18:00:00-08:00","endTime":"2022-12-25T06:00:00-08:00","isDaytime":false,"temperature":40,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"7 mph","windDirection":"SE","icon":"https://api.weather.gov/icons/land/night/rain?size=medium","shortForecast":"Rain Likely","detailedForecast":"Rain likely. Cloudy, with a low around 40."},{"number":14,"name":"Christmas Day","startTime":"2022-12-25T06:00:00-08:00","endTime":"2022-12-25T18:00:00-08:00","isDaytime":true,"temperature":46,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"7 mph","windDirection":"SE","icon":"https://api.weather.gov/icons/land/day/rain?size=medium","shortForecast":"Chance Light Rain","detailedForecast":"A chance of rain before 5pm. Mostly cloudy, with a high near 46."}]}
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

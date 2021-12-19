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
  var weekly_OTX_35_103 = {"updated":"2021-12-19T05:51:38+00:00","units":"us","forecastGenerator":"BaselineForecastGenerator","generatedAt":"2021-12-19T08:45:50+00:00","updateTime":"2021-12-19T05:51:38+00:00","validTimes":"2021-12-18T23:00:00+00:00/P7DT15H","elevation":{"unitCode":"wmoUnit:m","value":627.888},"periods":[{"number":1,"name":"Overnight","startTime":"2021-12-19T00:00:00-08:00","endTime":"2021-12-19T06:00:00-08:00","isDaytime":false,"temperature":22,"temperatureUnit":"F","temperatureTrend":"rising","windSpeed":"5 to 15 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/night/fog?size=medium","shortForecast":"Patchy Freezing Fog","detailedForecast":"Patchy freezing fog after 4am. Mostly cloudy. Low around 22, with temperatures rising to around 25 overnight. West wind 5 to 15 mph, with gusts as high as 24 mph."},{"number":2,"name":"Sunday","startTime":"2021-12-19T06:00:00-08:00","endTime":"2021-12-19T18:00:00-08:00","isDaytime":true,"temperature":30,"temperatureUnit":"F","temperatureTrend":"falling","windSpeed":"2 to 6 mph","windDirection":"S","icon":"https://api.weather.gov/icons/land/day/fog/snow,30?size=medium","shortForecast":"Patchy Freezing Fog then Chance Light Snow","detailedForecast":"Patchy freezing fog before 10am, then a chance of snow. Mostly sunny. High near 30, with temperatures falling to around 23 in the afternoon. South wind 2 to 6 mph. Chance of precipitation is 30%. New snow accumulation of less than half an inch possible."},{"number":3,"name":"Sunday Night","startTime":"2021-12-19T18:00:00-08:00","endTime":"2021-12-20T06:00:00-08:00","isDaytime":false,"temperature":20,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"2 to 6 mph","windDirection":"SE","icon":"https://api.weather.gov/icons/land/night/snow,50/snow,80?size=medium","shortForecast":"Light Snow","detailedForecast":"Snow. Mostly cloudy, with a low around 20. Southeast wind 2 to 6 mph. Chance of precipitation is 80%. New snow accumulation of 1 to 3 inches possible."},{"number":4,"name":"Monday","startTime":"2021-12-20T06:00:00-08:00","endTime":"2021-12-20T18:00:00-08:00","isDaytime":true,"temperature":28,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"3 mph","windDirection":"E","icon":"https://api.weather.gov/icons/land/day/snow,90?size=medium","shortForecast":"Light Snow","detailedForecast":"Snow. Mostly cloudy, with a high near 28. East wind around 3 mph. Chance of precipitation is 90%. New snow accumulation of 2 to 4 inches possible."},{"number":5,"name":"Monday Night","startTime":"2021-12-20T18:00:00-08:00","endTime":"2021-12-21T06:00:00-08:00","isDaytime":false,"temperature":24,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"2 mph","windDirection":"E","icon":"https://api.weather.gov/icons/land/night/snow,50/snow,20?size=medium","shortForecast":"Chance Light Snow","detailedForecast":"A chance of snow. Mostly cloudy, with a low around 24. East wind around 2 mph. Chance of precipitation is 50%. New snow accumulation of less than half an inch possible."},{"number":6,"name":"Tuesday","startTime":"2021-12-21T06:00:00-08:00","endTime":"2021-12-21T18:00:00-08:00","isDaytime":true,"temperature":32,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"3 mph","windDirection":"SE","icon":"https://api.weather.gov/icons/land/day/snow,30/snow,60?size=medium","shortForecast":"Light Snow Likely","detailedForecast":"Snow likely. Partly sunny, with a high near 32. Chance of precipitation is 60%. New snow accumulation of less than half an inch possible."},{"number":7,"name":"Tuesday Night","startTime":"2021-12-21T18:00:00-08:00","endTime":"2021-12-22T06:00:00-08:00","isDaytime":false,"temperature":27,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"2 to 8 mph","windDirection":"SW","icon":"https://api.weather.gov/icons/land/night/snow,60/snow,70?size=medium","shortForecast":"Light Snow Likely","detailedForecast":"Snow likely. Mostly cloudy, with a low around 27. Chance of precipitation is 70%. New snow accumulation of less than one inch possible."},{"number":8,"name":"Wednesday","startTime":"2021-12-22T06:00:00-08:00","endTime":"2021-12-22T18:00:00-08:00","isDaytime":true,"temperature":34,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"8 mph","windDirection":"S","icon":"https://api.weather.gov/icons/land/day/snow,70?size=medium","shortForecast":"Light Snow Likely","detailedForecast":"Snow likely. Mostly cloudy, with a high near 34. Chance of precipitation is 70%. New snow accumulation of less than half an inch possible."},{"number":9,"name":"Wednesday Night","startTime":"2021-12-22T18:00:00-08:00","endTime":"2021-12-23T06:00:00-08:00","isDaytime":false,"temperature":24,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"7 mph","windDirection":"SW","icon":"https://api.weather.gov/icons/land/night/snow,60/snow,50?size=medium","shortForecast":"Light Snow Likely","detailedForecast":"Snow likely. Mostly cloudy, with a low around 24. Chance of precipitation is 60%."},{"number":10,"name":"Thursday","startTime":"2021-12-23T06:00:00-08:00","endTime":"2021-12-23T18:00:00-08:00","isDaytime":true,"temperature":34,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"7 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/day/snow,50?size=medium","shortForecast":"Chance Light Snow","detailedForecast":"A chance of snow. Partly sunny, with a high near 34. Chance of precipitation is 50%."},{"number":11,"name":"Thursday Night","startTime":"2021-12-23T18:00:00-08:00","endTime":"2021-12-24T06:00:00-08:00","isDaytime":false,"temperature":23,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"8 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/night/snow,50/snow,60?size=medium","shortForecast":"Light Snow Likely","detailedForecast":"Snow likely. Mostly cloudy, with a low around 23. Chance of precipitation is 60%."},{"number":12,"name":"Friday","startTime":"2021-12-24T06:00:00-08:00","endTime":"2021-12-24T18:00:00-08:00","isDaytime":true,"temperature":31,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"8 mph","windDirection":"SW","icon":"https://api.weather.gov/icons/land/day/snow,60/snow,70?size=medium","shortForecast":"Light Snow Likely","detailedForecast":"Snow likely. Mostly cloudy, with a high near 31. Chance of precipitation is 70%."},{"number":13,"name":"Friday Night","startTime":"2021-12-24T18:00:00-08:00","endTime":"2021-12-25T06:00:00-08:00","isDaytime":false,"temperature":21,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"8 mph","windDirection":"SW","icon":"https://api.weather.gov/icons/land/night/snow,70/snow,60?size=medium","shortForecast":"Light Snow Likely","detailedForecast":"Snow likely. Mostly cloudy, with a low around 21. Chance of precipitation is 70%."},{"number":14,"name":"Christmas Day","startTime":"2021-12-25T06:00:00-08:00","endTime":"2021-12-25T18:00:00-08:00","isDaytime":true,"temperature":30,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"8 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/day/snow,60?size=medium","shortForecast":"Light Snow Likely","detailedForecast":"Snow likely before 5pm. Mostly cloudy, with a high near 30. Chance of precipitation is 60%."}]}
  var hourly_OTX_35_103 = {"correlationId":"15bef284","title":"Unexpected Problem","type":"https://api.weather.gov/problems/UnexpectedProblem","status":500,"detail":"An unexpected problem has occurred.","instance":"https://api.weather.gov/requests/15bef284"}
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

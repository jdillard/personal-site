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
  var weekly_OTX_35_103 = {"updated":"2022-01-05T05:17:00+00:00","units":"us","forecastGenerator":"BaselineForecastGenerator","generatedAt":"2022-01-05T08:47:05+00:00","updateTime":"2022-01-05T05:17:00+00:00","validTimes":"2022-01-04T23:00:00+00:00/P7DT2H","elevation":{"unitCode":"wmoUnit:m","value":627.888},"periods":[{"number":1,"name":"Overnight","startTime":"2022-01-05T00:00:00-08:00","endTime":"2022-01-05T06:00:00-08:00","isDaytime":false,"temperature":19,"temperatureUnit":"F","temperatureTrend":"rising","windSpeed":"7 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/night/snow,70?size=medium","shortForecast":"Light Snow Likely","detailedForecast":"Snow likely and patchy fog. Mostly cloudy. Low around 19, with temperatures rising to around 21 overnight. West wind around 7 mph. Chance of precipitation is 70%. New snow accumulation of less than one inch possible."},{"number":2,"name":"Wednesday","startTime":"2022-01-05T06:00:00-08:00","endTime":"2022-01-05T18:00:00-08:00","isDaytime":true,"temperature":26,"temperatureUnit":"F","temperatureTrend":"falling","windSpeed":"2 to 6 mph","windDirection":"S","icon":"https://api.weather.gov/icons/land/day/fog/snow,80?size=medium","shortForecast":"Patchy Fog then Snow","detailedForecast":"Patchy fog before 1pm, then snow and patchy fog. Mostly cloudy. High near 26, with temperatures falling to around 22 in the afternoon. South wind 2 to 6 mph. Chance of precipitation is 80%. New snow accumulation of 2 to 4 inches possible."},{"number":3,"name":"Wednesday Night","startTime":"2022-01-05T18:00:00-08:00","endTime":"2022-01-06T06:00:00-08:00","isDaytime":false,"temperature":16,"temperatureUnit":"F","temperatureTrend":"rising","windSpeed":"5 mph","windDirection":"E","icon":"https://api.weather.gov/icons/land/night/snow,100?size=medium","shortForecast":"Heavy Snow","detailedForecast":"Snow and patchy fog. Cloudy. Low around 16, with temperatures rising to around 18 overnight. East wind around 5 mph. Chance of precipitation is 100%. New snow accumulation of 13 to 19 inches possible."},{"number":4,"name":"Thursday","startTime":"2022-01-06T06:00:00-08:00","endTime":"2022-01-06T18:00:00-08:00","isDaytime":true,"temperature":35,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"6 mph","windDirection":"S","icon":"https://api.weather.gov/icons/land/day/snow,90/snow_fzra,70?size=medium","shortForecast":"Heavy Snow","detailedForecast":"Snow and patchy fog before 4pm, then snow likely and a chance of freezing rain. Mostly cloudy, with a high near 35. South wind around 6 mph. Chance of precipitation is 90%. New snow accumulation of 7 to 11 inches possible."},{"number":5,"name":"Thursday Night","startTime":"2022-01-06T18:00:00-08:00","endTime":"2022-01-07T06:00:00-08:00","isDaytime":false,"temperature":26,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"8 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/night/snow_fzra,80?size=medium","shortForecast":"Chance Freezing Rain","detailedForecast":"Snow likely and a chance of freezing rain before 10pm, then a chance of freezing rain and rain and snow. Mostly cloudy, with a low around 26. West wind around 8 mph. Chance of precipitation is 80%. New snow accumulation of 1 to 3 inches possible."},{"number":6,"name":"Friday","startTime":"2022-01-07T06:00:00-08:00","endTime":"2022-01-07T18:00:00-08:00","isDaytime":true,"temperature":34,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"6 to 13 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/day/snow,80/snow,70?size=medium","shortForecast":"Light Snow","detailedForecast":"Snow. Mostly cloudy, with a high near 34. Chance of precipitation is 80%. New snow accumulation of 1 to 2 inches possible."},{"number":7,"name":"Friday Night","startTime":"2022-01-07T18:00:00-08:00","endTime":"2022-01-08T06:00:00-08:00","isDaytime":false,"temperature":21,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"13 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/night/snow,50/snow,20?size=medium","shortForecast":"Chance Light Snow","detailedForecast":"A chance of snow. Mostly cloudy, with a low around 21. Chance of precipitation is 50%. New snow accumulation of less than half an inch possible."},{"number":8,"name":"Saturday","startTime":"2022-01-08T06:00:00-08:00","endTime":"2022-01-08T18:00:00-08:00","isDaytime":true,"temperature":33,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"7 to 13 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/day/snow,20/sct?size=medium","shortForecast":"Slight Chance Light Snow then Mostly Sunny","detailedForecast":"A slight chance of snow before 10am. Mostly sunny, with a high near 33. Chance of precipitation is 20%."},{"number":9,"name":"Saturday Night","startTime":"2022-01-08T18:00:00-08:00","endTime":"2022-01-09T06:00:00-08:00","isDaytime":false,"temperature":17,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"7 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/night/fog?size=medium","shortForecast":"Patchy Fog","detailedForecast":"Patchy fog after 7pm. Mostly cloudy, with a low around 17."},{"number":10,"name":"Sunday","startTime":"2022-01-09T06:00:00-08:00","endTime":"2022-01-09T18:00:00-08:00","isDaytime":true,"temperature":28,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"7 mph","windDirection":"NE","icon":"https://api.weather.gov/icons/land/day/fog/bkn?size=medium","shortForecast":"Patchy Fog then Partly Sunny","detailedForecast":"Patchy fog before 8am. Partly sunny, with a high near 28."},{"number":11,"name":"Sunday Night","startTime":"2022-01-09T18:00:00-08:00","endTime":"2022-01-10T06:00:00-08:00","isDaytime":false,"temperature":17,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"7 mph","windDirection":"S","icon":"https://api.weather.gov/icons/land/night/snow,20/snow,30?size=medium","shortForecast":"Areas Of Fog","detailedForecast":"Areas of fog between 8pm and 10pm, then areas of fog and a chance of snow. Mostly cloudy, with a low around 17. Chance of precipitation is 30%."},{"number":12,"name":"Monday","startTime":"2022-01-10T06:00:00-08:00","endTime":"2022-01-10T18:00:00-08:00","isDaytime":true,"temperature":30,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"7 mph","windDirection":"S","icon":"https://api.weather.gov/icons/land/day/snow,30?size=medium","shortForecast":"Areas Of Fog","detailedForecast":"Areas of fog and a chance of snow. Partly sunny, with a high near 30. Chance of precipitation is 30%."},{"number":13,"name":"Monday Night","startTime":"2022-01-10T18:00:00-08:00","endTime":"2022-01-11T06:00:00-08:00","isDaytime":false,"temperature":21,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"7 mph","windDirection":"SW","icon":"https://api.weather.gov/icons/land/night/snow,40?size=medium","shortForecast":"Chance Light Snow","detailedForecast":"A chance of snow before 9pm, then a chance of snow and patchy fog. Mostly cloudy, with a low around 21. Chance of precipitation is 40%."},{"number":14,"name":"Tuesday","startTime":"2022-01-11T06:00:00-08:00","endTime":"2022-01-11T18:00:00-08:00","isDaytime":true,"temperature":32,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"7 mph","windDirection":"S","icon":"https://api.weather.gov/icons/land/day/snow,40?size=medium","shortForecast":"Chance Light Snow","detailedForecast":"A chance of snow and patchy fog before 5pm. Partly sunny, with a high near 32. Chance of precipitation is 40%."}]}
  var hourly_OTX_35_103 = {"correlationId":"4df7aa4e","title":"Unexpected Problem","type":"https://api.weather.gov/problems/UnexpectedProblem","status":500,"detail":"An unexpected problem has occurred.","instance":"https://api.weather.gov/requests/4df7aa4e"}
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

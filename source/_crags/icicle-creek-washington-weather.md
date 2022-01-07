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
  var weekly_OTX_35_103 = {"updated":"2022-01-07T05:40:29+00:00","units":"us","forecastGenerator":"BaselineForecastGenerator","generatedAt":"2022-01-07T06:05:20+00:00","updateTime":"2022-01-07T05:40:29+00:00","validTimes":"2022-01-06T23:00:00+00:00/P7DT5H","elevation":{"unitCode":"wmoUnit:m","value":627.888},"periods":[{"number":1,"name":"Tonight","startTime":"2022-01-06T22:00:00-08:00","endTime":"2022-01-07T06:00:00-08:00","isDaytime":false,"temperature":29,"temperatureUnit":"F","temperatureTrend":"rising","windSpeed":"0 to 15 mph","windDirection":"N","icon":"https://api.weather.gov/icons/land/night/snow_fzra,90?size=medium","shortForecast":"Snow","detailedForecast":"Snow and freezing rain likely before 3am, then a slight chance of freezing rain and rain and snow. Cloudy. Low around 29, with temperatures rising to around 33 overnight. North wind 0 to 15 mph. Chance of precipitation is 90%. New snow accumulation of 1 to 3 inches possible."},{"number":2,"name":"Friday","startTime":"2022-01-07T06:00:00-08:00","endTime":"2022-01-07T18:00:00-08:00","isDaytime":true,"temperature":38,"temperatureUnit":"F","temperatureTrend":"falling","windSpeed":"3 to 31 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/day/snow,90/blizzard,60?size=medium","shortForecast":"Rain And Snow","detailedForecast":"Rain before 7am, then rain and snow between 7am and 1pm, then snow likely and areas of blowing snow. Mostly cloudy. High near 38, with temperatures falling to around 27 in the afternoon. West wind 3 to 31 mph, with gusts as high as 51 mph. Chance of precipitation is 90%. New snow accumulation of less than one inch possible."},{"number":3,"name":"Friday Night","startTime":"2022-01-07T18:00:00-08:00","endTime":"2022-01-08T06:00:00-08:00","isDaytime":false,"temperature":22,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"8 to 20 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/night/blizzard,40/blizzard,30?size=medium","shortForecast":"Chance Light Snow And Patchy Blowing Snow","detailedForecast":"A chance of snow and patchy blowing snow. Mostly cloudy, with a low around 22. West wind 8 to 20 mph, with gusts as high as 32 mph. Chance of precipitation is 40%. New snow accumulation of less than one inch possible."},{"number":4,"name":"Saturday","startTime":"2022-01-08T06:00:00-08:00","endTime":"2022-01-08T18:00:00-08:00","isDaytime":true,"temperature":33,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"3 to 8 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/day/snow,20/bkn?size=medium","shortForecast":"Slight Chance Light Snow then Partly Sunny","detailedForecast":"A slight chance of snow before 10am. Partly sunny, with a high near 33. West wind 3 to 8 mph. Chance of precipitation is 20%. Little or no snow accumulation expected."},{"number":5,"name":"Saturday Night","startTime":"2022-01-08T18:00:00-08:00","endTime":"2022-01-09T06:00:00-08:00","isDaytime":false,"temperature":21,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"5 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/night/bkn?size=medium","shortForecast":"Mostly Cloudy","detailedForecast":"Mostly cloudy, with a low around 21. West wind around 5 mph."},{"number":6,"name":"Sunday","startTime":"2022-01-09T06:00:00-08:00","endTime":"2022-01-09T18:00:00-08:00","isDaytime":true,"temperature":30,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"5 mph","windDirection":"S","icon":"https://api.weather.gov/icons/land/day/bkn?size=medium","shortForecast":"Partly Sunny","detailedForecast":"Partly sunny, with a high near 30."},{"number":7,"name":"Sunday Night","startTime":"2022-01-09T18:00:00-08:00","endTime":"2022-01-10T06:00:00-08:00","isDaytime":false,"temperature":19,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"6 mph","windDirection":"NW","icon":"https://api.weather.gov/icons/land/night/bkn/snow,20?size=medium","shortForecast":"Mostly Cloudy then Slight Chance Light Snow","detailedForecast":"A slight chance of snow after 4am. Mostly cloudy, with a low around 19. Chance of precipitation is 20%."},{"number":8,"name":"Monday","startTime":"2022-01-10T06:00:00-08:00","endTime":"2022-01-10T18:00:00-08:00","isDaytime":true,"temperature":32,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"6 mph","windDirection":"S","icon":"https://api.weather.gov/icons/land/day/snow,30?size=medium","shortForecast":"Chance Light Snow","detailedForecast":"A chance of snow. Partly sunny, with a high near 32. Chance of precipitation is 30%."},{"number":9,"name":"Monday Night","startTime":"2022-01-10T18:00:00-08:00","endTime":"2022-01-11T06:00:00-08:00","isDaytime":false,"temperature":25,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"7 mph","windDirection":"SW","icon":"https://api.weather.gov/icons/land/night/snow,40?size=medium","shortForecast":"Chance Light Snow","detailedForecast":"A chance of snow before 1am, then a chance of rain and snow. Mostly cloudy, with a low around 25. Chance of precipitation is 40%."},{"number":10,"name":"Tuesday","startTime":"2022-01-11T06:00:00-08:00","endTime":"2022-01-11T18:00:00-08:00","isDaytime":true,"temperature":34,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"7 mph","windDirection":"S","icon":"https://api.weather.gov/icons/land/day/snow,40?size=medium","shortForecast":"Chance Light Snow","detailedForecast":"A chance of snow before 10am, then a chance of rain and snow. Mostly cloudy, with a high near 34. Chance of precipitation is 40%."},{"number":11,"name":"Tuesday Night","startTime":"2022-01-11T18:00:00-08:00","endTime":"2022-01-12T06:00:00-08:00","isDaytime":false,"temperature":26,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"7 mph","windDirection":"S","icon":"https://api.weather.gov/icons/land/night/snow,50?size=medium","shortForecast":"Chance Rain And Snow","detailedForecast":"A chance of rain and snow. Mostly cloudy, with a low around 26. Chance of precipitation is 50%."},{"number":12,"name":"Wednesday","startTime":"2022-01-12T06:00:00-08:00","endTime":"2022-01-12T18:00:00-08:00","isDaytime":true,"temperature":36,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"7 mph","windDirection":"S","icon":"https://api.weather.gov/icons/land/day/snow,50?size=medium","shortForecast":"Chance Rain And Snow","detailedForecast":"A chance of rain and snow. Mostly cloudy, with a high near 36. Chance of precipitation is 50%."},{"number":13,"name":"Wednesday Night","startTime":"2022-01-12T18:00:00-08:00","endTime":"2022-01-13T06:00:00-08:00","isDaytime":false,"temperature":27,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"7 mph","windDirection":"SW","icon":"https://api.weather.gov/icons/land/night/snow,40/snow,30?size=medium","shortForecast":"Chance Rain And Snow","detailedForecast":"A chance of rain and snow. Mostly cloudy, with a low around 27. Chance of precipitation is 40%."},{"number":14,"name":"Thursday","startTime":"2022-01-13T06:00:00-08:00","endTime":"2022-01-13T18:00:00-08:00","isDaytime":true,"temperature":36,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"7 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/day/snow,20/bkn?size=medium","shortForecast":"Slight Chance Rain And Snow then Partly Sunny","detailedForecast":"A slight chance of rain and snow before 10am. Partly sunny, with a high near 36. Chance of precipitation is 20%."}]}
  var hourly_OTX_35_103 = {"correlationId":"4a64bc1","title":"Unexpected Problem","type":"https://api.weather.gov/problems/UnexpectedProblem","status":500,"detail":"An unexpected problem has occurred.","instance":"https://api.weather.gov/requests/4a64bc1"}
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

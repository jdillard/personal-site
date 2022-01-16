---
### THIS FILE IS AUTO-GENERATED - DO NOT EDIT ###
layout: page
title: Trout Creek, Oregon Climbing Weather - Current, Past, and Forecasted Report
title_override: Trout Creek<br /><small>Climbing Weather</small>
description: A lightweight weather report for Trout Creek, Oregon. Optimized for slow internet connections.
js_includes:
  - weather.js
---

<section class="measure center lh-copy f5-ns f6 ph2 mv4" style="text-align: justify;">
<strong>"Is it dry?"</strong>, an oft-repeated, age-old question. Here are real-time,
precipitation-focused reports of current, past, and forecasted climbing weather for Trout Creek, Oregon.
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
<section id="weather" data-crag="trout-creek-oregon" class="mv4-ns mv3 ph2 center"></section>
<section id="nearby" class="tc lh-copy">
  <h3>Nearby Crags</h3>
<a class="nowrap no-underline fancy-link relative light-red mh3" href="/crags/icicle-creek-washington-weather.html">Icicle Creek</a>
<a class="nowrap no-underline fancy-link relative light-red mh3" href="/crags/tieton-river-rock-washington-weather.html">Tieton River Rock</a>
<a class="nowrap no-underline fancy-link relative light-red mh3" href="/crags/vantage-washington-weather.html">Vantage</a>
<a class="nowrap no-underline fancy-link relative light-red mh3" href="/crags/mount-erie-washington-weather.html">Mount Erie</a>
<a class="nowrap no-underline fancy-link relative light-red mh3" href="/crags/index-washington-weather.html">Index</a>
<a class="nowrap no-underline fancy-link relative light-red mh3" href="/crags/darrington-washington-weather.html">Darrington</a>
<a class="nowrap no-underline fancy-link relative light-red mh3" href="/crags/smith-rock-oregon-weather.html">Smith Rock</a>
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
  var weekly_PDT_48_73 = {"updated":"2021-12-28T08:11:58+00:00","units":"us","forecastGenerator":"BaselineForecastGenerator","generatedAt":"2021-12-28T08:47:46+00:00","updateTime":"2021-12-28T08:11:58+00:00","validTimes":"2021-12-28T02:00:00+00:00/P7DT23H","elevation":{"unitCode":"wmoUnit:m","value":494.9952},"periods":[{"number":1,"name":"Overnight","startTime":"2021-12-28T00:00:00-08:00","endTime":"2021-12-28T06:00:00-08:00","isDaytime":false,"temperature":17,"temperatureUnit":"F","temperatureTrend":"rising","windSpeed":"5 mph","windDirection":"S","icon":"https://api.weather.gov/icons/land/night/snow,20?size=medium","shortForecast":"Isolated Snow Showers","detailedForecast":"Isolated snow showers before 4am, then a slight chance of snow. Mostly cloudy. Low around 17, with temperatures rising to around 20 overnight. South wind around 5 mph. Chance of precipitation is 20%. New snow accumulation of less than one inch possible."},{"number":2,"name":"Tuesday","startTime":"2021-12-28T06:00:00-08:00","endTime":"2021-12-28T18:00:00-08:00","isDaytime":true,"temperature":32,"temperatureUnit":"F","temperatureTrend":"falling","windSpeed":"5 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/day/snow,20/snow,30?size=medium","shortForecast":"Chance Light Snow","detailedForecast":"A chance of snow. Mostly cloudy. High near 32, with temperatures falling to around 29 in the afternoon. West wind around 5 mph. Chance of precipitation is 30%. New snow accumulation of less than one inch possible."},{"number":3,"name":"Tuesday Night","startTime":"2021-12-28T18:00:00-08:00","endTime":"2021-12-29T06:00:00-08:00","isDaytime":false,"temperature":16,"temperatureUnit":"F","temperatureTrend":"rising","windSpeed":"2 to 6 mph","windDirection":"N","icon":"https://api.weather.gov/icons/land/night/snow,40?size=medium","shortForecast":"Chance Light Snow","detailedForecast":"A chance of snow. Mostly cloudy. Low around 16, with temperatures rising to around 20 overnight. North wind 2 to 6 mph. Chance of precipitation is 40%. New snow accumulation of 1 to 2 inches possible."},{"number":4,"name":"Wednesday","startTime":"2021-12-29T06:00:00-08:00","endTime":"2021-12-29T18:00:00-08:00","isDaytime":true,"temperature":26,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"6 mph","windDirection":"N","icon":"https://api.weather.gov/icons/land/day/snow,30/bkn?size=medium","shortForecast":"Chance Light Snow then Partly Sunny","detailedForecast":"A chance of snow before 10am. Partly sunny, with a high near 26. North wind around 6 mph. Chance of precipitation is 30%. New snow accumulation of less than half an inch possible."},{"number":5,"name":"Wednesday Night","startTime":"2021-12-29T18:00:00-08:00","endTime":"2021-12-30T06:00:00-08:00","isDaytime":false,"temperature":10,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"2 to 7 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/night/cold/snow,40?size=medium","shortForecast":"Mostly Cloudy then Chance Light Snow","detailedForecast":"A chance of snow after 4am. Mostly cloudy, with a low around 10. West wind 2 to 7 mph. Chance of precipitation is 40%."},{"number":6,"name":"Thursday","startTime":"2021-12-30T06:00:00-08:00","endTime":"2021-12-30T18:00:00-08:00","isDaytime":true,"temperature":38,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"7 to 10 mph","windDirection":"SW","icon":"https://api.weather.gov/icons/land/day/snow,60?size=medium","shortForecast":"Rain And Snow Likely","detailedForecast":"A chance of snow before 10am, then rain and snow likely. Mostly cloudy, with a high near 38. Chance of precipitation is 60%."},{"number":7,"name":"Thursday Night","startTime":"2021-12-30T18:00:00-08:00","endTime":"2021-12-31T06:00:00-08:00","isDaytime":false,"temperature":16,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"5 to 9 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/night/snow,60/snow,50?size=medium","shortForecast":"Light Snow Likely","detailedForecast":"Snow likely. Mostly cloudy, with a low around 16. Chance of precipitation is 60%. Little or no snow accumulation expected."},{"number":8,"name":"Friday","startTime":"2021-12-31T06:00:00-08:00","endTime":"2021-12-31T18:00:00-08:00","isDaytime":true,"temperature":28,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"2 to 6 mph","windDirection":"N","icon":"https://api.weather.gov/icons/land/day/snow,20/sct?size=medium","shortForecast":"Chance Light Snow then Mostly Sunny","detailedForecast":"A chance of snow before 10am. Mostly sunny, with a high near 28. Chance of precipitation is 20%."},{"number":9,"name":"Friday Night","startTime":"2021-12-31T18:00:00-08:00","endTime":"2022-01-01T06:00:00-08:00","isDaytime":false,"temperature":10,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"6 mph","windDirection":"S","icon":"https://api.weather.gov/icons/land/night/cold?size=medium","shortForecast":"Partly Cloudy","detailedForecast":"Partly cloudy, with a low around 10."},{"number":10,"name":"New Year's Day","startTime":"2022-01-01T06:00:00-08:00","endTime":"2022-01-01T18:00:00-08:00","isDaytime":true,"temperature":34,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"7 mph","windDirection":"S","icon":"https://api.weather.gov/icons/land/day/bkn?size=medium","shortForecast":"Partly Sunny","detailedForecast":"Partly sunny, with a high near 34."},{"number":11,"name":"Saturday Night","startTime":"2022-01-01T18:00:00-08:00","endTime":"2022-01-02T06:00:00-08:00","isDaytime":false,"temperature":20,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"7 mph","windDirection":"S","icon":"https://api.weather.gov/icons/land/night/bkn/snow?size=medium","shortForecast":"Mostly Cloudy then Chance Light Snow","detailedForecast":"A chance of snow after 4am. Mostly cloudy, with a low around 20."},{"number":12,"name":"Sunday","startTime":"2022-01-02T06:00:00-08:00","endTime":"2022-01-02T18:00:00-08:00","isDaytime":true,"temperature":38,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"9 mph","windDirection":"S","icon":"https://api.weather.gov/icons/land/day/snow?size=medium","shortForecast":"Chance Light Snow","detailedForecast":"A chance of snow before 10am, then a chance of rain and snow. Partly sunny, with a high near 38."},{"number":13,"name":"Sunday Night","startTime":"2022-01-02T18:00:00-08:00","endTime":"2022-01-03T06:00:00-08:00","isDaytime":false,"temperature":26,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"10 mph","windDirection":"S","icon":"https://api.weather.gov/icons/land/night/snow?size=medium","shortForecast":"Rain And Snow Likely","detailedForecast":"A chance of snow before 7pm, then rain and snow likely. Mostly cloudy, with a low around 26. New snow accumulation of less than half an inch possible."},{"number":14,"name":"Monday","startTime":"2022-01-03T06:00:00-08:00","endTime":"2022-01-03T18:00:00-08:00","isDaytime":true,"temperature":40,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"10 mph","windDirection":"S","icon":"https://api.weather.gov/icons/land/day/snow?size=medium","shortForecast":"Light Snow Likely","detailedForecast":"Snow likely before 7am, then rain and snow likely. Mostly cloudy, with a high near 40. Little or no snow accumulation expected."}]}
  var hourly_PDT_48_73 = {"correlationId":"cd4dc55a","title":"Unexpected Problem","type":"https://api.weather.gov/problems/UnexpectedProblem","status":500,"detail":"An unexpected problem has occurred.","instance":"https://api.weather.gov/requests/cd4dc55a"}
  var crags_config = [
  {
    "name": "Trout Creek",
    "note": "Large basalt columns.",
    "mountainProject": "https://www.mountainproject.com/area/106505473/trout-creek",
    "station": "KS33",
    "office": "PDT/48,73",
    "coordinates": [
      -121.095,
      44.816
    ]
  }
]</script>

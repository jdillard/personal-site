---
### THIS FILE IS AUTO-GENERATED - DO NOT EDIT ###
layout: page
title: Vantage, Washington Climbing Weather - Current, Past, and Forecasted Report
title_override: Vantage<br /><small>Climbing Weather</small>
description: A lightweight weather report for Vantage, Washington. Optimized for slow internet connections.
js_includes:
  - weather.js
---

<section class="measure center lh-copy f5-ns f6 ph2 mv4" style="text-align: justify;">
<strong>"Is it dry?"</strong>, an oft-repeated, age-old question. Here are real-time,
precipitation-focused reports of current, past, and forecasted climbing weather for Vantage, Washington.
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
<section id="weather" data-crag="vantage-washington" class="mv4-ns mv3 ph2 center"></section>
<section id="nearby" class="tc lh-copy">
  <h3>Nearby Crags</h3>
<a class="nowrap no-underline fancy-link relative light-red mh3" href="/crags/icicle-creek-washington-weather.html">Icicle Creek</a>
<a class="nowrap no-underline fancy-link relative light-red mh3" href="/crags/tieton-river-rock-washington-weather.html">Tieton River Rock</a>
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
  var weekly_OTX_54_74 = {"updated":"2022-12-20T06:04:37+00:00","units":"us","forecastGenerator":"BaselineForecastGenerator","generatedAt":"2022-12-20T08:36:08+00:00","updateTime":"2022-12-20T06:04:37+00:00","validTimes":"2022-12-20T00:00:00+00:00/P7DT4H","elevation":{"unitCode":"wmoUnit:m","value":374.904},"periods":[{"number":1,"name":"Overnight","startTime":"2022-12-20T00:00:00-08:00","endTime":"2022-12-20T06:00:00-08:00","isDaytime":false,"temperature":6,"temperatureUnit":"F","temperatureTrend":"rising","windSpeed":"6 mph","windDirection":"N","icon":"https://api.weather.gov/icons/land/night/snow,30?size=medium","shortForecast":"Chance Snow Showers","detailedForecast":"A chance of snow showers before 4am, then a chance of snow. Mostly cloudy. Low around 6, with temperatures rising to around 9 overnight. Wind chill values as low as 0. North wind around 6 mph. Chance of precipitation is 30%."},{"number":2,"name":"Tuesday","startTime":"2022-12-20T06:00:00-08:00","endTime":"2022-12-20T18:00:00-08:00","isDaytime":true,"temperature":13,"temperatureUnit":"F","temperatureTrend":"falling","windSpeed":"7 mph","windDirection":"N","icon":"https://api.weather.gov/icons/land/day/snow,30?size=medium","shortForecast":"Chance Light Snow","detailedForecast":"A chance of snow. Mostly cloudy. High near 13, with temperatures falling to around 11 in the afternoon. Wind chill values as low as -1. North wind around 7 mph. Chance of precipitation is 30%. New snow accumulation of less than half an inch possible."},{"number":3,"name":"Tuesday Night","startTime":"2022-12-20T18:00:00-08:00","endTime":"2022-12-21T06:00:00-08:00","isDaytime":false,"temperature":2,"temperatureUnit":"F","temperatureTrend":"rising","windSpeed":"7 mph","windDirection":"N","icon":"https://api.weather.gov/icons/land/night/snow,20/cold?size=medium","shortForecast":"Slight Chance Light Snow then Mostly Cloudy","detailedForecast":"A slight chance of snow before 10pm. Mostly cloudy. Low around 2, with temperatures rising to around 4 overnight. Wind chill values as low as -7. North wind around 7 mph. Chance of precipitation is 20%. Little or no snow accumulation expected."},{"number":4,"name":"Wednesday","startTime":"2022-12-21T06:00:00-08:00","endTime":"2022-12-21T18:00:00-08:00","isDaytime":true,"temperature":9,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"6 to 12 mph","windDirection":"N","icon":"https://api.weather.gov/icons/land/day/cold?size=medium","shortForecast":"Partly Sunny","detailedForecast":"Partly sunny, with a high near 9. Wind chill values as low as -10. North wind 6 to 12 mph."},{"number":5,"name":"Wednesday Night","startTime":"2022-12-21T18:00:00-08:00","endTime":"2022-12-22T06:00:00-08:00","isDaytime":false,"temperature":-10,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"6 mph","windDirection":"N","icon":"https://api.weather.gov/icons/land/night/cold?size=medium","shortForecast":"Partly Cloudy","detailedForecast":"Partly cloudy, with a low around -10. North wind around 6 mph."},{"number":6,"name":"Thursday","startTime":"2022-12-22T06:00:00-08:00","endTime":"2022-12-22T18:00:00-08:00","isDaytime":true,"temperature":4,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"8 mph","windDirection":"N","icon":"https://api.weather.gov/icons/land/day/cold?size=medium","shortForecast":"Partly Sunny","detailedForecast":"Partly sunny, with a high near 4."},{"number":7,"name":"Thursday Night","startTime":"2022-12-22T18:00:00-08:00","endTime":"2022-12-23T06:00:00-08:00","isDaytime":false,"temperature":-1,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"6 mph","windDirection":"N","icon":"https://api.weather.gov/icons/land/night/snow,20/snow,30?size=medium","shortForecast":"Chance Light Snow","detailedForecast":"A chance of snow after 10pm. Mostly cloudy, with a low around -1. Chance of precipitation is 30%."},{"number":8,"name":"Friday","startTime":"2022-12-23T06:00:00-08:00","endTime":"2022-12-23T18:00:00-08:00","isDaytime":true,"temperature":11,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"7 mph","windDirection":"N","icon":"https://api.weather.gov/icons/land/day/snow,30/snow,20?size=medium","shortForecast":"Chance Light Snow","detailedForecast":"A chance of snow before 4pm. Cloudy, with a high near 11. Chance of precipitation is 30%."},{"number":9,"name":"Friday Night","startTime":"2022-12-23T18:00:00-08:00","endTime":"2022-12-24T06:00:00-08:00","isDaytime":false,"temperature":8,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"5 mph","windDirection":"N","icon":"https://api.weather.gov/icons/land/night/snow,20/snow,30?size=medium","shortForecast":"Chance Light Snow","detailedForecast":"A chance of snow after 10pm. Mostly cloudy, with a low around 8. Chance of precipitation is 30%."},{"number":10,"name":"Saturday","startTime":"2022-12-24T06:00:00-08:00","endTime":"2022-12-24T18:00:00-08:00","isDaytime":true,"temperature":20,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"5 mph","windDirection":"N","icon":"https://api.weather.gov/icons/land/day/snow,40?size=medium","shortForecast":"Chance Light Snow","detailedForecast":"A chance of snow. Cloudy, with a high near 20. Chance of precipitation is 40%. New snow accumulation of less than one inch possible. Little or no ice accumulation expected."},{"number":11,"name":"Saturday Night","startTime":"2022-12-24T18:00:00-08:00","endTime":"2022-12-25T06:00:00-08:00","isDaytime":false,"temperature":16,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"3 mph","windDirection":"N","icon":"https://api.weather.gov/icons/land/night/snow_fzra,40?size=medium","shortForecast":"Chance Light Snow then Chance Freezing Rain","detailedForecast":"A chance of snow before 7pm, then a chance of snow and a chance of freezing rain between 7pm and 10pm, then a chance of freezing rain and a slight chance of snow. Mostly cloudy, with a low around 16. Chance of precipitation is 40%. New snow accumulation of less than half an inch possible. Little or no ice accumulation expected."},{"number":12,"name":"Christmas Day","startTime":"2022-12-25T06:00:00-08:00","endTime":"2022-12-25T18:00:00-08:00","isDaytime":true,"temperature":28,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"5 mph","windDirection":"N","icon":"https://api.weather.gov/icons/land/day/fzra,30/fzra,40?size=medium","shortForecast":"Chance Freezing Rain","detailedForecast":"A chance of freezing rain. Cloudy, with a high near 28. Chance of precipitation is 40%. Little or no ice accumulation expected."},{"number":13,"name":"Sunday Night","startTime":"2022-12-25T18:00:00-08:00","endTime":"2022-12-26T06:00:00-08:00","isDaytime":false,"temperature":23,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"3 mph","windDirection":"N","icon":"https://api.weather.gov/icons/land/night/fzra,40?size=medium","shortForecast":"Chance Freezing Rain","detailedForecast":"A chance of freezing rain. Mostly cloudy, with a low around 23. Chance of precipitation is 40%. Little or no ice accumulation expected."},{"number":14,"name":"Monday","startTime":"2022-12-26T06:00:00-08:00","endTime":"2022-12-26T18:00:00-08:00","isDaytime":true,"temperature":32,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"5 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/day/fzra,30/fzra,40?size=medium","shortForecast":"Chance Freezing Rain","detailedForecast":"A chance of freezing rain before 5pm. Cloudy, with a high near 32. Chance of precipitation is 40%."}]}
  var hourly_OTX_54_74 = false
  var crags_config = [
  {
    "name": "Vantage",
    "note": "The rocks are basalt.",
    "mountainProject": "https://www.mountainproject.com/map/105792231/vantage-frenchman-coulee",
    "station": "KEAT",
    "office": "OTX/54,74",
    "coordinates": [
      -119.969,
      47.025
    ]
  }
]</script>

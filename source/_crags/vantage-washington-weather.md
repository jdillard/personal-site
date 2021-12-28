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
  var weekly_OTX_54_74 = {"updated":"2021-12-28T03:42:53+00:00","units":"us","forecastGenerator":"BaselineForecastGenerator","generatedAt":"2021-12-28T08:47:03+00:00","updateTime":"2021-12-28T03:42:53+00:00","validTimes":"2021-12-27T21:00:00+00:00/P7DT4H","elevation":{"unitCode":"wmoUnit:m","value":374.904},"periods":[{"number":1,"name":"Overnight","startTime":"2021-12-28T00:00:00-08:00","endTime":"2021-12-28T06:00:00-08:00","isDaytime":false,"temperature":5,"temperatureUnit":"F","temperatureTrend":"rising","windSpeed":"6 mph","windDirection":"N","icon":"https://api.weather.gov/icons/land/night/cold?size=medium","shortForecast":"Mostly Cloudy","detailedForecast":"Mostly cloudy. Low around 5, with temperatures rising to around 8 overnight. Wind chill values as low as -1. North wind around 6 mph."},{"number":2,"name":"Tuesday","startTime":"2021-12-28T06:00:00-08:00","endTime":"2021-12-28T18:00:00-08:00","isDaytime":true,"temperature":17,"temperatureUnit":"F","temperatureTrend":"falling","windSpeed":"6 mph","windDirection":"N","icon":"https://api.weather.gov/icons/land/day/sct/snow,20?size=medium","shortForecast":"Mostly Sunny then Slight Chance Light Snow","detailedForecast":"A slight chance of snow after 4pm. Mostly sunny. High near 17, with temperatures falling to around 15 in the afternoon. Wind chill values as low as -2. North wind around 6 mph. Chance of precipitation is 20%."},{"number":3,"name":"Tuesday Night","startTime":"2021-12-28T18:00:00-08:00","endTime":"2021-12-29T06:00:00-08:00","isDaytime":false,"temperature":6,"temperatureUnit":"F","temperatureTrend":"rising","windSpeed":"5 to 9 mph","windDirection":"N","icon":"https://api.weather.gov/icons/land/night/snow,20?size=medium","shortForecast":"Slight Chance Light Snow","detailedForecast":"A slight chance of snow before 4am. Mostly cloudy. Low around 6, with temperatures rising to around 12 overnight. Wind chill values as low as -1. North wind 5 to 9 mph. Chance of precipitation is 20%."},{"number":4,"name":"Wednesday","startTime":"2021-12-29T06:00:00-08:00","endTime":"2021-12-29T18:00:00-08:00","isDaytime":true,"temperature":16,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"3 to 9 mph","windDirection":"N","icon":"https://api.weather.gov/icons/land/day/sct?size=medium","shortForecast":"Mostly Sunny","detailedForecast":"Mostly sunny, with a high near 16. Wind chill values as low as -2. North wind 3 to 9 mph."},{"number":5,"name":"Wednesday Night","startTime":"2021-12-29T18:00:00-08:00","endTime":"2021-12-30T06:00:00-08:00","isDaytime":false,"temperature":8,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"6 mph","windDirection":"SW","icon":"https://api.weather.gov/icons/land/night/snow/snow,40?size=medium","shortForecast":"Chance Snow Showers","detailedForecast":"Patchy freezing fog between 7pm and 8pm, then a chance of snow showers between 10pm and 4am, then a chance of snow. Mostly cloudy, with a low around 8. Southwest wind around 6 mph. Chance of precipitation is 40%."},{"number":6,"name":"Thursday","startTime":"2021-12-30T06:00:00-08:00","endTime":"2021-12-30T18:00:00-08:00","isDaytime":true,"temperature":20,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"7 mph","windDirection":"NW","icon":"https://api.weather.gov/icons/land/day/snow,40/snow,30?size=medium","shortForecast":"Chance Light Snow","detailedForecast":"A chance of snow. Mostly cloudy, with a high near 20. Chance of precipitation is 40%. New snow accumulation of less than one inch possible."},{"number":7,"name":"Thursday Night","startTime":"2021-12-30T18:00:00-08:00","endTime":"2021-12-31T06:00:00-08:00","isDaytime":false,"temperature":12,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"7 mph","windDirection":"NW","icon":"https://api.weather.gov/icons/land/night/snow,30/snow,20?size=medium","shortForecast":"Chance Light Snow","detailedForecast":"A chance of snow before 2am, then patchy freezing fog and a slight chance of snow. Mostly cloudy, with a low around 12. Chance of precipitation is 30%. New snow accumulation of less than one inch possible."},{"number":8,"name":"Friday","startTime":"2021-12-31T06:00:00-08:00","endTime":"2021-12-31T18:00:00-08:00","isDaytime":true,"temperature":20,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"7 mph","windDirection":"N","icon":"https://api.weather.gov/icons/land/day/fog/sct?size=medium","shortForecast":"Patchy Freezing Fog then Mostly Sunny","detailedForecast":"Patchy freezing fog before 8am. Mostly sunny, with a high near 20."},{"number":9,"name":"Friday Night","startTime":"2021-12-31T18:00:00-08:00","endTime":"2022-01-01T06:00:00-08:00","isDaytime":false,"temperature":7,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"5 mph","windDirection":"N","icon":"https://api.weather.gov/icons/land/night/cold?size=medium","shortForecast":"Partly Cloudy","detailedForecast":"Partly cloudy, with a low around 7."},{"number":10,"name":"New Year's Day","startTime":"2022-01-01T06:00:00-08:00","endTime":"2022-01-01T18:00:00-08:00","isDaytime":true,"temperature":18,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"7 mph","windDirection":"NE","icon":"https://api.weather.gov/icons/land/day/snow?size=medium","shortForecast":"Chance Snow Showers","detailedForecast":"A chance of snow showers after 10am. Mostly cloudy, with a high near 18."},{"number":11,"name":"Saturday Night","startTime":"2022-01-01T18:00:00-08:00","endTime":"2022-01-02T06:00:00-08:00","isDaytime":false,"temperature":13,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"6 mph","windDirection":"N","icon":"https://api.weather.gov/icons/land/night/snow/snow,30?size=medium","shortForecast":"Chance Snow Showers","detailedForecast":"A chance of snow showers before 4am, then a chance of snow. Mostly cloudy, with a low around 13. Chance of precipitation is 30%."},{"number":12,"name":"Sunday","startTime":"2022-01-02T06:00:00-08:00","endTime":"2022-01-02T18:00:00-08:00","isDaytime":true,"temperature":23,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"5 to 8 mph","windDirection":"N","icon":"https://api.weather.gov/icons/land/day/snow,30/snow,40?size=medium","shortForecast":"Chance Light Snow","detailedForecast":"A chance of snow. Mostly cloudy, with a high near 23. Chance of precipitation is 40%."},{"number":13,"name":"Sunday Night","startTime":"2022-01-02T18:00:00-08:00","endTime":"2022-01-03T06:00:00-08:00","isDaytime":false,"temperature":18,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"7 mph","windDirection":"N","icon":"https://api.weather.gov/icons/land/night/snow,50/snow,60?size=medium","shortForecast":"Light Snow Likely","detailedForecast":"Snow likely. Mostly cloudy, with a low around 18. Chance of precipitation is 60%."},{"number":14,"name":"Monday","startTime":"2022-01-03T06:00:00-08:00","endTime":"2022-01-03T18:00:00-08:00","isDaytime":true,"temperature":29,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"6 to 9 mph","windDirection":"N","icon":"https://api.weather.gov/icons/land/day/snow,60/snow,40?size=medium","shortForecast":"Light Snow Likely","detailedForecast":"Snow likely before 5pm. Mostly cloudy, with a high near 29. Chance of precipitation is 60%."}]}
  var hourly_OTX_54_74 = {"correlationId":"57870f4d","title":"Unexpected Problem","type":"https://api.weather.gov/problems/UnexpectedProblem","status":500,"detail":"An unexpected problem has occurred.","instance":"https://api.weather.gov/requests/57870f4d"}
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

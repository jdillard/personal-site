---
### THIS FILE IS AUTO-GENERATED - DO NOT EDIT ###
layout: page
title: Red River Gorge, Kentucky Climbing Weather - Current, Past, and Forecasted Report
title_override: Red River Gorge<br /><small>Climbing Weather</small>
description: A lightweight weather report for Red River Gorge, Kentucky. Optimized for slow internet connections.
js_includes:
  - weather.js
---

<section class="measure center lh-copy f5-ns f6 ph2 mv4" style="text-align: justify;">
<strong>"Is it dry?"</strong>, an oft-repeated, age-old question. Here are real-time,
precipitation-focused reports of current, past, and forecasted climbing weather for Red River Gorge, Kentucky.
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
<section id="weather" data-crag="red-river-gorge-kentucky" class="mv4-ns mv3 ph2 center"></section>
<section id="nearby" class="tc lh-copy">
  <h3>Nearby Crags</h3>
<a class="nowrap no-underline fancy-link relative light-red mh3" href="/crags/jackson-falls-illinois-weather.html">Jackson Falls</a>
<a class="nowrap no-underline fancy-link relative light-red mh3" href="/crags/foster-falls-tennessee-weather.html">Foster Falls</a>
<a class="nowrap no-underline fancy-link relative light-red mh3" href="/crags/seneca-rocks-west-virginia-weather.html">Seneca Rocks</a>
</section>
<section id="nearby" class="tc lh-copy">
  <h3>Other Metros</h3>
  <select class="ma1 bg-near-white pa2" id="stateSel">
    <option value="Texas">Texas</option>
    <option value="Washington">Washington</option>
    <option value="Colorado">Colorado</option>
    <option value="Tennessee" selected>Tennessee</option>
    <option value="Utah">Utah</option>
    <option value="California">California</option>
  </select>
  <select class="ma1 bg-near-white pa2" id="citySel">
    <option value="Nashville" selected>Nashville</option>
  </select>
  <a id="selectMetro" class="f6 link dim ph3 pv2 ma1 dib white bg-light-red" href="/crags/nashville-tennessee-weather.html">Select Metro</a>
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
  var weekly_JKL_47_57 = {"updated":"2022-04-09T07:58:26+00:00","units":"us","forecastGenerator":"BaselineForecastGenerator","generatedAt":"2022-04-09T08:38:22+00:00","updateTime":"2022-04-09T07:58:26+00:00","validTimes":"2022-04-09T01:00:00+00:00/P8D","elevation":{"unitCode":"wmoUnit:m","value":270.0528},"periods":[{"number":1,"name":"Overnight","startTime":"2022-04-09T04:00:00-04:00","endTime":"2022-04-09T06:00:00-04:00","isDaytime":false,"temperature":34,"temperatureUnit":"F","temperatureTrend":"rising","windSpeed":"8 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/night/snow,30?size=medium","shortForecast":"Chance Rain And Snow Showers","detailedForecast":"A chance of rain and snow showers. Cloudy. Low around 34, with temperatures rising to around 35 overnight. West wind around 8 mph. Chance of precipitation is 30%. New rainfall amounts less than a tenth of an inch possible."},{"number":2,"name":"Saturday","startTime":"2022-04-09T06:00:00-04:00","endTime":"2022-04-09T18:00:00-04:00","isDaytime":true,"temperature":45,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"7 to 13 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/day/snow,50?size=medium","shortForecast":"Chance Rain And Snow Showers","detailedForecast":"A chance of rain and snow showers. Cloudy, with a high near 45. West wind 7 to 13 mph, with gusts as high as 23 mph. Chance of precipitation is 50%. New rainfall amounts less than a tenth of an inch possible."},{"number":3,"name":"Saturday Night","startTime":"2022-04-09T18:00:00-04:00","endTime":"2022-04-10T06:00:00-04:00","isDaytime":false,"temperature":29,"temperatureUnit":"F","temperatureTrend":"rising","windSpeed":"2 to 12 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/night/rain_showers,20/sct?size=medium","shortForecast":"Slight Chance Rain Showers then Widespread Frost","detailedForecast":"A slight chance of rain showers before 8pm, then widespread frost. Partly cloudy. Low around 29, with temperatures rising to around 31 overnight. West wind 2 to 12 mph, with gusts as high as 23 mph. Chance of precipitation is 20%. New rainfall amounts less than a tenth of an inch possible."},{"number":4,"name":"Sunday","startTime":"2022-04-10T06:00:00-04:00","endTime":"2022-04-10T18:00:00-04:00","isDaytime":true,"temperature":65,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"2 to 7 mph","windDirection":"SSW","icon":"https://api.weather.gov/icons/land/day/few?size=medium","shortForecast":"Widespread Frost then Sunny","detailedForecast":"Widespread frost before 10am. Sunny, with a high near 65. South southwest wind 2 to 7 mph."},{"number":5,"name":"Sunday Night","startTime":"2022-04-10T18:00:00-04:00","endTime":"2022-04-11T06:00:00-04:00","isDaytime":false,"temperature":50,"temperatureUnit":"F","temperatureTrend":"rising","windSpeed":"7 mph","windDirection":"S","icon":"https://api.weather.gov/icons/land/night/sct?size=medium","shortForecast":"Partly Cloudy","detailedForecast":"Partly cloudy. Low around 50, with temperatures rising to around 54 overnight. South wind around 7 mph, with gusts as high as 18 mph. New rainfall amounts less than a tenth of an inch possible."},{"number":6,"name":"Monday","startTime":"2022-04-11T06:00:00-04:00","endTime":"2022-04-11T18:00:00-04:00","isDaytime":true,"temperature":72,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"7 to 10 mph","windDirection":"SSW","icon":"https://api.weather.gov/icons/land/day/rain_showers,30/tsra_sct,30?size=medium","shortForecast":"Chance Rain Showers then Slight Chance Showers And Thunderstorms","detailedForecast":"A chance of rain showers before 5pm, then a slight chance of showers and thunderstorms. Partly sunny, with a high near 72. Chance of precipitation is 30%."},{"number":7,"name":"Monday Night","startTime":"2022-04-11T18:00:00-04:00","endTime":"2022-04-12T06:00:00-04:00","isDaytime":false,"temperature":56,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"5 to 9 mph","windDirection":"SW","icon":"https://api.weather.gov/icons/land/night/tsra_sct,30/tsra_sct,50?size=medium","shortForecast":"Slight Chance Showers And Thunderstorms then Chance Showers And Thunderstorms","detailedForecast":"A slight chance of showers and thunderstorms before 7pm, then a chance of showers and thunderstorms between 7pm and 9pm, then a chance of showers and thunderstorms between 9pm and 10pm, then a chance of showers and thunderstorms between 10pm and 4am, then a chance of showers and thunderstorms. Mostly cloudy, with a low around 56. Chance of precipitation is 50%."},{"number":8,"name":"Tuesday","startTime":"2022-04-12T06:00:00-04:00","endTime":"2022-04-12T18:00:00-04:00","isDaytime":true,"temperature":76,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"3 to 7 mph","windDirection":"SSW","icon":"https://api.weather.gov/icons/land/day/tsra_sct,40/tsra_sct,20?size=medium","shortForecast":"Chance Showers And Thunderstorms","detailedForecast":"A chance of showers and thunderstorms before 2pm, then a slight chance of showers and thunderstorms. Mostly cloudy, with a high near 76. Chance of precipitation is 40%."},{"number":9,"name":"Tuesday Night","startTime":"2022-04-12T18:00:00-04:00","endTime":"2022-04-13T06:00:00-04:00","isDaytime":false,"temperature":60,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"6 mph","windDirection":"S","icon":"https://api.weather.gov/icons/land/night/tsra_hi,20?size=medium","shortForecast":"Slight Chance Showers And Thunderstorms","detailedForecast":"A slight chance of showers and thunderstorms. Mostly cloudy, with a low around 60. Chance of precipitation is 20%."},{"number":10,"name":"Wednesday","startTime":"2022-04-13T06:00:00-04:00","endTime":"2022-04-13T18:00:00-04:00","isDaytime":true,"temperature":78,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"6 to 10 mph","windDirection":"S","icon":"https://api.weather.gov/icons/land/day/rain_showers,40/tsra_sct,30?size=medium","shortForecast":"Chance Rain Showers","detailedForecast":"A chance of rain showers before 2pm, then a chance of showers and thunderstorms between 2pm and 3pm, then a slight chance of showers and thunderstorms. Mostly cloudy, with a high near 78. Chance of precipitation is 40%."},{"number":11,"name":"Wednesday Night","startTime":"2022-04-13T18:00:00-04:00","endTime":"2022-04-14T06:00:00-04:00","isDaytime":false,"temperature":60,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"8 mph","windDirection":"S","icon":"https://api.weather.gov/icons/land/night/tsra_sct,20/tsra_sct,40?size=medium","shortForecast":"Slight Chance Showers And Thunderstorms","detailedForecast":"A slight chance of showers and thunderstorms before 1am, then a chance of showers and thunderstorms. Mostly cloudy, with a low around 60. Chance of precipitation is 40%."},{"number":12,"name":"Thursday","startTime":"2022-04-14T06:00:00-04:00","endTime":"2022-04-14T18:00:00-04:00","isDaytime":true,"temperature":74,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"8 to 12 mph","windDirection":"SSW","icon":"https://api.weather.gov/icons/land/day/rain_showers,60/tsra_sct,50?size=medium","shortForecast":"Rain Showers Likely","detailedForecast":"Rain showers likely before 2pm, then a chance of showers and thunderstorms. Partly sunny, with a high near 74. Chance of precipitation is 60%."},{"number":13,"name":"Thursday Night","startTime":"2022-04-14T18:00:00-04:00","endTime":"2022-04-15T06:00:00-04:00","isDaytime":false,"temperature":51,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"5 to 10 mph","windDirection":"SW","icon":"https://api.weather.gov/icons/land/night/tsra_hi,40?size=medium","shortForecast":"Chance Showers And Thunderstorms","detailedForecast":"A chance of showers and thunderstorms. Partly cloudy, with a low around 51. Chance of precipitation is 40%."},{"number":14,"name":"Friday","startTime":"2022-04-15T06:00:00-04:00","endTime":"2022-04-15T18:00:00-04:00","isDaytime":true,"temperature":69,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"5 to 10 mph","windDirection":"WSW","icon":"https://api.weather.gov/icons/land/day/rain_showers,20/sct?size=medium","shortForecast":"Slight Chance Rain Showers then Mostly Sunny","detailedForecast":"A slight chance of rain showers before 9am. Mostly sunny, with a high near 69. Chance of precipitation is 20%."}]}
  var hourly_JKL_47_57 = {"correlationId":"d97203c","title":"Unexpected Problem","type":"https://api.weather.gov/problems/UnexpectedProblem","status":500,"detail":"An unexpected problem has occurred.","instance":"https://api.weather.gov/requests/d97203c"}
  var crags_config = [
  {
    "name": "Red River Gorge",
    "note": "Sandstone cliffs.",
    "mountainProject": "https://www.mountainproject.com/area/105841134/red-river-gorge",
    "station": "KIOB",
    "office": "JKL/47,57",
    "coordinates": [
      -83.683,
      37.783
    ]
  }
]</script>

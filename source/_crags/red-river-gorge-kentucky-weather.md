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
  var weekly_JKL_47_57 = {"updated":"2022-12-05T07:58:11+00:00","units":"us","forecastGenerator":"BaselineForecastGenerator","generatedAt":"2022-12-05T08:37:29+00:00","updateTime":"2022-12-05T07:58:11+00:00","validTimes":"2022-12-05T01:00:00+00:00/P8D","elevation":{"unitCode":"wmoUnit:m","value":270.0528},"periods":[{"number":1,"name":"Overnight","startTime":"2022-12-05T03:00:00-05:00","endTime":"2022-12-05T06:00:00-05:00","isDaytime":false,"temperature":25,"temperatureUnit":"F","temperatureTrend":"rising","windSpeed":"3 mph","windDirection":"SSE","icon":"https://api.weather.gov/icons/land/night/sct?size=medium","shortForecast":"Partly Cloudy","detailedForecast":"Partly cloudy. Low around 25, with temperatures rising to around 28 overnight. South southeast wind around 3 mph."},{"number":2,"name":"Monday","startTime":"2022-12-05T06:00:00-05:00","endTime":"2022-12-05T18:00:00-05:00","isDaytime":true,"temperature":51,"temperatureUnit":"F","temperatureTrend":"falling","windSpeed":"2 to 6 mph","windDirection":"S","icon":"https://api.weather.gov/icons/land/day/bkn/rain,20?size=medium","shortForecast":"Mostly Cloudy then Slight Chance Light Rain","detailedForecast":"A slight chance of rain after 4pm. Mostly cloudy. High near 51, with temperatures falling to around 48 in the afternoon. South wind 2 to 6 mph, with gusts as high as 17 mph. Chance of precipitation is 20%. New rainfall amounts less than a tenth of an inch possible."},{"number":3,"name":"Monday Night","startTime":"2022-12-05T18:00:00-05:00","endTime":"2022-12-06T06:00:00-05:00","isDaytime":false,"temperature":45,"temperatureUnit":"F","temperatureTrend":"rising","windSpeed":"6 mph","windDirection":"S","icon":"https://api.weather.gov/icons/land/night/rain,60/rain,70?size=medium","shortForecast":"Light Rain Likely","detailedForecast":"Rain likely. Cloudy. Low around 45, with temperatures rising to around 48 overnight. South wind around 6 mph. Chance of precipitation is 70%. New rainfall amounts between a tenth and quarter of an inch possible."},{"number":4,"name":"Tuesday","startTime":"2022-12-06T06:00:00-05:00","endTime":"2022-12-06T18:00:00-05:00","isDaytime":true,"temperature":59,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"7 mph","windDirection":"S","icon":"https://api.weather.gov/icons/land/day/tsra,70/tsra,80?size=medium","shortForecast":"Showers And Thunderstorms","detailedForecast":"Rain likely before 7am, then showers and thunderstorms. Cloudy, with a high near 59. South wind around 7 mph, with gusts as high as 20 mph. Chance of precipitation is 80%. New rainfall amounts between a quarter and half of an inch possible."},{"number":5,"name":"Tuesday Night","startTime":"2022-12-06T18:00:00-05:00","endTime":"2022-12-07T06:00:00-05:00","isDaytime":false,"temperature":56,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"6 mph","windDirection":"SSW","icon":"https://api.weather.gov/icons/land/night/tsra,80/tsra,90?size=medium","shortForecast":"Showers And Thunderstorms","detailedForecast":"Showers and thunderstorms. Cloudy, with a low around 56. South southwest wind around 6 mph, with gusts as high as 17 mph. Chance of precipitation is 90%. New rainfall amounts between a half and three quarters of an inch possible."},{"number":6,"name":"Wednesday","startTime":"2022-12-07T06:00:00-05:00","endTime":"2022-12-07T18:00:00-05:00","isDaytime":true,"temperature":65,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"3 to 7 mph","windDirection":"WSW","icon":"https://api.weather.gov/icons/land/day/tsra,90/tsra,80?size=medium","shortForecast":"Showers And Thunderstorms","detailedForecast":"Showers and thunderstorms. Cloudy, with a high near 65. Chance of precipitation is 90%."},{"number":7,"name":"Wednesday Night","startTime":"2022-12-07T18:00:00-05:00","endTime":"2022-12-08T06:00:00-05:00","isDaytime":false,"temperature":50,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"3 mph","windDirection":"NNW","icon":"https://api.weather.gov/icons/land/night/rain_showers,60?size=medium","shortForecast":"Rain Showers Likely","detailedForecast":"Rain showers likely. Cloudy, with a low around 50. Chance of precipitation is 60%."},{"number":8,"name":"Thursday","startTime":"2022-12-08T06:00:00-05:00","endTime":"2022-12-08T18:00:00-05:00","isDaytime":true,"temperature":59,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"3 to 7 mph","windDirection":"E","icon":"https://api.weather.gov/icons/land/day/rain_showers,70/rain_showers,80?size=medium","shortForecast":"Rain Showers","detailedForecast":"Rain showers. Cloudy, with a high near 59. Chance of precipitation is 80%."},{"number":9,"name":"Thursday Night","startTime":"2022-12-08T18:00:00-05:00","endTime":"2022-12-09T06:00:00-05:00","isDaytime":false,"temperature":51,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"5 mph","windDirection":"SSE","icon":"https://api.weather.gov/icons/land/night/tsra,80?size=medium","shortForecast":"Showers And Thunderstorms","detailedForecast":"Rain showers before 7pm, then showers and thunderstorms. Cloudy, with a low around 51. Chance of precipitation is 80%."},{"number":10,"name":"Friday","startTime":"2022-12-09T06:00:00-05:00","endTime":"2022-12-09T18:00:00-05:00","isDaytime":true,"temperature":57,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"6 to 10 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/day/tsra,70/tsra,40?size=medium","shortForecast":"Showers And Thunderstorms Likely","detailedForecast":"Showers and thunderstorms likely. Mostly cloudy, with a high near 57. Chance of precipitation is 70%."},{"number":11,"name":"Friday Night","startTime":"2022-12-09T18:00:00-05:00","endTime":"2022-12-10T06:00:00-05:00","isDaytime":false,"temperature":36,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"5 to 8 mph","windDirection":"NW","icon":"https://api.weather.gov/icons/land/night/rain_showers,20/bkn?size=medium","shortForecast":"Slight Chance Rain Showers then Mostly Cloudy","detailedForecast":"A slight chance of rain showers before 11pm. Mostly cloudy, with a low around 36. Chance of precipitation is 20%."},{"number":12,"name":"Saturday","startTime":"2022-12-10T06:00:00-05:00","endTime":"2022-12-10T18:00:00-05:00","isDaytime":true,"temperature":47,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"5 mph","windDirection":"NW","icon":"https://api.weather.gov/icons/land/day/bkn?size=medium","shortForecast":"Mostly Cloudy","detailedForecast":"Mostly cloudy, with a high near 47."},{"number":13,"name":"Saturday Night","startTime":"2022-12-10T18:00:00-05:00","endTime":"2022-12-11T06:00:00-05:00","isDaytime":false,"temperature":36,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"2 mph","windDirection":"ENE","icon":"https://api.weather.gov/icons/land/night/bkn/rain,20?size=medium","shortForecast":"Mostly Cloudy then Slight Chance Light Rain","detailedForecast":"A slight chance of rain after 2am. Mostly cloudy, with a low around 36. Chance of precipitation is 20%."},{"number":14,"name":"Sunday","startTime":"2022-12-11T06:00:00-05:00","endTime":"2022-12-11T18:00:00-05:00","isDaytime":true,"temperature":49,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"2 to 6 mph","windDirection":"SSE","icon":"https://api.weather.gov/icons/land/day/rain,30?size=medium","shortForecast":"Chance Light Rain","detailedForecast":"A chance of rain. Mostly cloudy, with a high near 49. Chance of precipitation is 30%."}]}
  var hourly_JKL_47_57 = false
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

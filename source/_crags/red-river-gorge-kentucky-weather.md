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
  var weekly_JKL_47_57 = {"updated":"2022-05-12T08:14:51+00:00","units":"us","forecastGenerator":"BaselineForecastGenerator","generatedAt":"2022-05-12T08:40:51+00:00","updateTime":"2022-05-12T08:14:51+00:00","validTimes":"2022-05-12T02:00:00+00:00/P7DT23H","elevation":{"unitCode":"wmoUnit:m","value":270.0528},"periods":[{"number":1,"name":"Overnight","startTime":"2022-05-12T04:00:00-04:00","endTime":"2022-05-12T06:00:00-04:00","isDaytime":false,"temperature":52,"temperatureUnit":"F","temperatureTrend":"rising","windSpeed":"3 mph","windDirection":"E","icon":"https://api.weather.gov/icons/land/night/skc?size=medium","shortForecast":"Clear","detailedForecast":"Clear. Low around 52, with temperatures rising to around 55 overnight. East wind around 3 mph."},{"number":2,"name":"Thursday","startTime":"2022-05-12T06:00:00-04:00","endTime":"2022-05-12T18:00:00-04:00","isDaytime":true,"temperature":83,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"2 to 6 mph","windDirection":"E","icon":"https://api.weather.gov/icons/land/day/skc?size=medium","shortForecast":"Sunny","detailedForecast":"Sunny, with a high near 83. East wind 2 to 6 mph, with gusts as high as 16 mph."},{"number":3,"name":"Thursday Night","startTime":"2022-05-12T18:00:00-04:00","endTime":"2022-05-13T06:00:00-04:00","isDaytime":false,"temperature":59,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"6 mph","windDirection":"E","icon":"https://api.weather.gov/icons/land/night/few?size=medium","shortForecast":"Mostly Clear","detailedForecast":"Mostly clear, with a low around 59. East wind around 6 mph."},{"number":4,"name":"Friday","startTime":"2022-05-13T06:00:00-04:00","endTime":"2022-05-13T18:00:00-04:00","isDaytime":true,"temperature":82,"temperatureUnit":"F","temperatureTrend":"falling","windSpeed":"5 mph","windDirection":"ESE","icon":"https://api.weather.gov/icons/land/day/sct/tsra_hi,20?size=medium","shortForecast":"Mostly Sunny then Slight Chance Showers And Thunderstorms","detailedForecast":"A slight chance of showers and thunderstorms after 3pm. Mostly sunny. High near 82, with temperatures falling to around 81 in the afternoon. East southeast wind around 5 mph. Chance of precipitation is 20%. New rainfall amounts less than a tenth of an inch possible."},{"number":5,"name":"Friday Night","startTime":"2022-05-13T18:00:00-04:00","endTime":"2022-05-14T06:00:00-04:00","isDaytime":false,"temperature":58,"temperatureUnit":"F","temperatureTrend":"rising","windSpeed":"3 mph","windDirection":"SE","icon":"https://api.weather.gov/icons/land/night/tsra_hi,20/sct?size=medium","shortForecast":"Slight Chance Showers And Thunderstorms then Partly Cloudy","detailedForecast":"A slight chance of showers and thunderstorms before 8pm. Partly cloudy. Low around 58, with temperatures rising to around 61 overnight. Southeast wind around 3 mph. Chance of precipitation is 20%. New rainfall amounts less than a tenth of an inch possible."},{"number":6,"name":"Saturday","startTime":"2022-05-14T06:00:00-04:00","endTime":"2022-05-14T18:00:00-04:00","isDaytime":true,"temperature":81,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"3 mph","windDirection":"S","icon":"https://api.weather.gov/icons/land/day/tsra_hi,40/tsra_hi,60?size=medium","shortForecast":"Chance Showers And Thunderstorms","detailedForecast":"A chance of showers and thunderstorms before 2pm, then a chance of showers and thunderstorms between 2pm and 4pm, then showers and thunderstorms likely. Mostly sunny, with a high near 81. Chance of precipitation is 60%."},{"number":7,"name":"Saturday Night","startTime":"2022-05-14T18:00:00-04:00","endTime":"2022-05-15T06:00:00-04:00","isDaytime":false,"temperature":60,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"2 mph","windDirection":"SSW","icon":"https://api.weather.gov/icons/land/night/tsra_hi,60/tsra_hi,30?size=medium","shortForecast":"Showers And Thunderstorms Likely","detailedForecast":"Showers and thunderstorms likely before 7pm, then a chance of showers and thunderstorms between 7pm and 11pm, then a chance of showers and thunderstorms between 11pm and 2am, then a slight chance of showers and thunderstorms between 2am and 4am. Mostly cloudy, with a low around 60. Chance of precipitation is 60%."},{"number":8,"name":"Sunday","startTime":"2022-05-15T06:00:00-04:00","endTime":"2022-05-15T18:00:00-04:00","isDaytime":true,"temperature":81,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"5 mph","windDirection":"WSW","icon":"https://api.weather.gov/icons/land/day/rain_showers,20/tsra_hi,40?size=medium","shortForecast":"Chance Showers And Thunderstorms","detailedForecast":"A slight chance of rain showers between 10am and 2pm, then a chance of showers and thunderstorms. Partly sunny, with a high near 81. Chance of precipitation is 40%."},{"number":9,"name":"Sunday Night","startTime":"2022-05-15T18:00:00-04:00","endTime":"2022-05-16T06:00:00-04:00","isDaytime":false,"temperature":60,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"1 to 5 mph","windDirection":"WSW","icon":"https://api.weather.gov/icons/land/night/tsra_hi,50?size=medium","shortForecast":"Chance Showers And Thunderstorms","detailedForecast":"A chance of showers and thunderstorms. Partly cloudy, with a low around 60. Chance of precipitation is 50%."},{"number":10,"name":"Monday","startTime":"2022-05-16T06:00:00-04:00","endTime":"2022-05-16T18:00:00-04:00","isDaytime":true,"temperature":78,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"3 to 8 mph","windDirection":"WNW","icon":"https://api.weather.gov/icons/land/day/rain_showers,40/tsra_hi,30?size=medium","shortForecast":"Chance Rain Showers then Slight Chance Showers And Thunderstorms","detailedForecast":"A chance of rain showers before 2pm, then a slight chance of showers and thunderstorms. Mostly sunny, with a high near 78. Chance of precipitation is 40%."},{"number":11,"name":"Monday Night","startTime":"2022-05-16T18:00:00-04:00","endTime":"2022-05-17T06:00:00-04:00","isDaytime":false,"temperature":55,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"2 to 7 mph","windDirection":"WNW","icon":"https://api.weather.gov/icons/land/night/tsra_hi,20/few?size=medium","shortForecast":"Slight Chance Showers And Thunderstorms then Mostly Clear","detailedForecast":"A slight chance of showers and thunderstorms before 8pm. Mostly clear, with a low around 55. Chance of precipitation is 20%."},{"number":12,"name":"Tuesday","startTime":"2022-05-17T06:00:00-04:00","endTime":"2022-05-17T18:00:00-04:00","isDaytime":true,"temperature":79,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"2 to 7 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/day/few?size=medium","shortForecast":"Sunny","detailedForecast":"Sunny, with a high near 79."},{"number":13,"name":"Tuesday Night","startTime":"2022-05-17T18:00:00-04:00","endTime":"2022-05-18T06:00:00-04:00","isDaytime":false,"temperature":56,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"5 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/night/sct/rain_showers,20?size=medium","shortForecast":"Partly Cloudy then Slight Chance Rain Showers","detailedForecast":"A slight chance of rain showers after midnight. Partly cloudy, with a low around 56. Chance of precipitation is 20%."},{"number":14,"name":"Wednesday","startTime":"2022-05-18T06:00:00-04:00","endTime":"2022-05-18T18:00:00-04:00","isDaytime":true,"temperature":79,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"5 mph","windDirection":"SW","icon":"https://api.weather.gov/icons/land/day/rain_showers,20/tsra_hi,30?size=medium","shortForecast":"Chance Rain Showers then Chance Showers And Thunderstorms","detailedForecast":"A chance of rain showers before 2pm, then a chance of showers and thunderstorms. Partly sunny, with a high near 79. Chance of precipitation is 30%."}]}
  var hourly_JKL_47_57 = {"correlationId":"4dd4b669","title":"Unexpected Problem","type":"https://api.weather.gov/problems/UnexpectedProblem","status":500,"detail":"An unexpected problem has occurred.","instance":"https://api.weather.gov/requests/4dd4b669"}
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

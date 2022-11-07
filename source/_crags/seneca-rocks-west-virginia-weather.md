---
### THIS FILE IS AUTO-GENERATED - DO NOT EDIT ###
layout: page
title: Seneca Rocks, West Virginia Climbing Weather - Current, Past, and Forecasted Report
title_override: Seneca Rocks<br /><small>Climbing Weather</small>
description: A lightweight weather report for Seneca Rocks, West Virginia. Optimized for slow internet connections.
js_includes:
  - weather.js
---

<section class="measure center lh-copy f5-ns f6 ph2 mv4" style="text-align: justify;">
<strong>"Is it dry?"</strong>, an oft-repeated, age-old question. Here are real-time,
precipitation-focused reports of current, past, and forecasted climbing weather for Seneca Rocks, West Virginia.
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
<section id="weather" data-crag="seneca-rocks-west-virginia" class="mv4-ns mv3 ph2 center"></section>
<section id="nearby" class="tc lh-copy">
  <h3>Nearby Crags</h3>
<a class="nowrap no-underline fancy-link relative light-red mh3" href="/crags/jackson-falls-illinois-weather.html">Jackson Falls</a>
<a class="nowrap no-underline fancy-link relative light-red mh3" href="/crags/red-river-gorge-kentucky-weather.html">Red River Gorge</a>
<a class="nowrap no-underline fancy-link relative light-red mh3" href="/crags/foster-falls-tennessee-weather.html">Foster Falls</a>
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
  var weekly_LWX_14_57 = {"updated":"2022-11-07T08:29:35+00:00","units":"us","forecastGenerator":"BaselineForecastGenerator","generatedAt":"2022-11-07T08:42:29+00:00","updateTime":"2022-11-07T08:29:35+00:00","validTimes":"2022-11-07T02:00:00+00:00/P7DT23H","elevation":{"unitCode":"wmoUnit:m","value":631.8504},"periods":[{"number":1,"name":"Overnight","startTime":"2022-11-07T03:00:00-05:00","endTime":"2022-11-07T06:00:00-05:00","isDaytime":false,"temperature":54,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"6 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/night/rain_showers,20?size=medium","shortForecast":"Isolated Rain Showers","detailedForecast":"Isolated rain showers. Mostly cloudy, with a low around 54. West wind around 6 mph. Chance of precipitation is 20%. New rainfall amounts less than a tenth of an inch possible."},{"number":2,"name":"Monday","startTime":"2022-11-07T06:00:00-05:00","endTime":"2022-11-07T18:00:00-05:00","isDaytime":true,"temperature":70,"temperatureUnit":"F","temperatureTrend":"falling","windSpeed":"2 to 9 mph","windDirection":"NW","icon":"https://api.weather.gov/icons/land/day/rain_showers,20/few?size=medium","shortForecast":"Isolated Rain Showers then Sunny","detailedForecast":"Isolated rain showers before 7am. Sunny. High near 70, with temperatures falling to around 62 in the afternoon. Northwest wind 2 to 9 mph, with gusts as high as 18 mph. Chance of precipitation is 20%. New rainfall amounts less than a tenth of an inch possible."},{"number":3,"name":"Monday Night","startTime":"2022-11-07T18:00:00-05:00","endTime":"2022-11-08T06:00:00-05:00","isDaytime":false,"temperature":37,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"3 mph","windDirection":"N","icon":"https://api.weather.gov/icons/land/night/few?size=medium","shortForecast":"Mostly Clear","detailedForecast":"Mostly clear, with a low around 37. North wind around 3 mph."},{"number":4,"name":"Tuesday","startTime":"2022-11-08T06:00:00-05:00","endTime":"2022-11-08T18:00:00-05:00","isDaytime":true,"temperature":55,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"2 to 7 mph","windDirection":"NE","icon":"https://api.weather.gov/icons/land/day/few?size=medium","shortForecast":"Sunny","detailedForecast":"Sunny, with a high near 55. Northeast wind 2 to 7 mph."},{"number":5,"name":"Tuesday Night","startTime":"2022-11-08T18:00:00-05:00","endTime":"2022-11-09T06:00:00-05:00","isDaytime":false,"temperature":34,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"3 mph","windDirection":"E","icon":"https://api.weather.gov/icons/land/night/few?size=medium","shortForecast":"Mostly Clear","detailedForecast":"Mostly clear, with a low around 34. East wind around 3 mph."},{"number":6,"name":"Wednesday","startTime":"2022-11-09T06:00:00-05:00","endTime":"2022-11-09T18:00:00-05:00","isDaytime":true,"temperature":59,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"1 to 6 mph","windDirection":"SE","icon":"https://api.weather.gov/icons/land/day/few?size=medium","shortForecast":"Sunny","detailedForecast":"Sunny, with a high near 59."},{"number":7,"name":"Wednesday Night","startTime":"2022-11-09T18:00:00-05:00","endTime":"2022-11-10T06:00:00-05:00","isDaytime":false,"temperature":38,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"3 mph","windDirection":"S","icon":"https://api.weather.gov/icons/land/night/skc?size=medium","shortForecast":"Clear","detailedForecast":"Clear, with a low around 38."},{"number":8,"name":"Thursday","startTime":"2022-11-10T06:00:00-05:00","endTime":"2022-11-10T18:00:00-05:00","isDaytime":true,"temperature":65,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"2 to 8 mph","windDirection":"S","icon":"https://api.weather.gov/icons/land/day/few?size=medium","shortForecast":"Sunny","detailedForecast":"Sunny, with a high near 65."},{"number":9,"name":"Thursday Night","startTime":"2022-11-10T18:00:00-05:00","endTime":"2022-11-11T06:00:00-05:00","isDaytime":false,"temperature":46,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"7 mph","windDirection":"S","icon":"https://api.weather.gov/icons/land/night/sct/rain_showers?size=medium","shortForecast":"Partly Cloudy then Slight Chance Rain Showers","detailedForecast":"A slight chance of rain showers after 1am. Partly cloudy, with a low around 46."},{"number":10,"name":"Veterans Day","startTime":"2022-11-11T06:00:00-05:00","endTime":"2022-11-11T18:00:00-05:00","isDaytime":true,"temperature":62,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"7 mph","windDirection":"S","icon":"https://api.weather.gov/icons/land/day/rain_showers,50/rain_showers,60?size=medium","shortForecast":"Rain Showers Likely","detailedForecast":"Rain showers likely. Mostly cloudy, with a high near 62. Chance of precipitation is 60%."},{"number":11,"name":"Friday Night","startTime":"2022-11-11T18:00:00-05:00","endTime":"2022-11-12T06:00:00-05:00","isDaytime":false,"temperature":40,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"5 to 10 mph","windDirection":"SW","icon":"https://api.weather.gov/icons/land/night/rain_showers,60/rain_showers,50?size=medium","shortForecast":"Rain Showers Likely","detailedForecast":"Rain showers likely. Mostly cloudy, with a low around 40. Chance of precipitation is 60%."},{"number":12,"name":"Saturday","startTime":"2022-11-12T06:00:00-05:00","endTime":"2022-11-12T18:00:00-05:00","isDaytime":true,"temperature":51,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"12 to 15 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/day/rain_showers,30/sct?size=medium","shortForecast":"Chance Rain Showers then Mostly Sunny","detailedForecast":"A chance of rain showers before 7am. Mostly sunny, with a high near 51. Chance of precipitation is 30%."},{"number":13,"name":"Saturday Night","startTime":"2022-11-12T18:00:00-05:00","endTime":"2022-11-13T06:00:00-05:00","isDaytime":false,"temperature":25,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"14 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/night/sct?size=medium","shortForecast":"Partly Cloudy","detailedForecast":"Partly cloudy, with a low around 25."},{"number":14,"name":"Sunday","startTime":"2022-11-13T06:00:00-05:00","endTime":"2022-11-13T18:00:00-05:00","isDaytime":true,"temperature":36,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"15 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/day/sct?size=medium","shortForecast":"Mostly Sunny","detailedForecast":"Mostly sunny, with a high near 36."}]}
  var hourly_LWX_14_57 = false
  var crags_config = [
  {
    "name": "Seneca Rocks",
    "note": "White Tuscarora quartzite, which feels much like sandstone.",
    "mountainProject": "https://www.mountainproject.com/area/105861910/seneca-rocks",
    "station": "KW99",
    "office": "LWX/14,57",
    "coordinates": [
      -79.373,
      38.835
    ]
  }
]</script>

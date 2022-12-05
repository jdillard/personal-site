---
### THIS FILE IS AUTO-GENERATED - DO NOT EDIT ###
layout: page
title: Hueco Tanks, Texas Climbing Weather - Current, Past, and Forecasted Report
title_override: Hueco Tanks<br /><small>Climbing Weather</small>
description: A lightweight weather report for Hueco Tanks, Texas. Optimized for slow internet connections.
js_includes:
  - weather.js
---

<section class="measure center lh-copy f5-ns f6 ph2 mv4" style="text-align: justify;">
<strong>"Is it dry?"</strong>, an oft-repeated, age-old question. Here are real-time,
precipitation-focused reports of current, past, and forecasted climbing weather for Hueco Tanks, Texas.
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
<section id="weather" data-crag="hueco-tanks-texas" class="mv4-ns mv3 ph2 center"></section>
<section id="nearby" class="tc lh-copy">
  <h3>Nearby Crags</h3>
<a class="nowrap no-underline fancy-link relative light-red mh3" href="/crags/the-greenbelt-texas-weather.html">The Greenbelt</a>
<a class="nowrap no-underline fancy-link relative light-red mh3" href="/crags/continental-ranch-texas-weather.html">Continental Ranch</a>
<a class="nowrap no-underline fancy-link relative light-red mh3" href="/crags/pace-bend-park-texas-weather.html">Pace Bend Park</a>
<a class="nowrap no-underline fancy-link relative light-red mh3" href="/crags/reimers-ranch-texas-weather.html">Reimer's Ranch</a>
<a class="nowrap no-underline fancy-link relative light-red mh3" href="/crags/cochise-stronghold-arizona-weather.html">Cochise Stronghold</a>
<a class="nowrap no-underline fancy-link relative light-red mh3" href="/crags/enchanted-rock-texas-weather.html">Enchanted Rock</a>
<a class="nowrap no-underline fancy-link relative light-red mh3" href="/crags/horseshoe-canyon-ranch-arkansas-weather.html">Horseshoe Canyon Ranch</a>
<a class="nowrap no-underline fancy-link relative light-red mh3" href="/crags/last-chance-canyon-new-mexico-weather.html">Last Chance Canyon</a>
<a class="nowrap no-underline fancy-link relative light-red mh3" href="/crags/georgetown-texas-weather.html">Georgetown</a>
<a class="nowrap no-underline fancy-link relative light-red mh3" href="/crags/mckinney-falls-texas-weather.html">McKinney Falls</a>
</section>
<section id="nearby" class="tc lh-copy">
  <h3>Other Metros</h3>
  <select class="ma1 bg-near-white pa2" id="stateSel">
    <option value="Texas" selected>Texas</option>
    <option value="Washington">Washington</option>
    <option value="Colorado">Colorado</option>
    <option value="Tennessee">Tennessee</option>
    <option value="Utah">Utah</option>
    <option value="California">California</option>
  </select>
  <select class="ma1 bg-near-white pa2" id="citySel">
    <option value="Austin" selected>Austin</option>
  </select>
  <a id="selectMetro" class="f6 link dim ph3 pv2 ma1 dib white bg-light-red" href="/crags/austin-texas-weather.html">Select Metro</a>
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
  var weekly_EPZ_116_60 = {"updated":"2022-12-05T08:10:41+00:00","units":"us","forecastGenerator":"BaselineForecastGenerator","generatedAt":"2022-12-05T08:37:17+00:00","updateTime":"2022-12-05T08:10:41+00:00","validTimes":"2022-12-05T02:00:00+00:00/P8DT5H","elevation":{"unitCode":"wmoUnit:m","value":1449.9336},"periods":[{"number":1,"name":"Overnight","startTime":"2022-12-05T01:00:00-07:00","endTime":"2022-12-05T06:00:00-07:00","isDaytime":false,"temperature":53,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"8 mph","windDirection":"SSW","icon":"https://api.weather.gov/icons/land/night/rain_showers?size=medium","shortForecast":"Isolated Rain Showers","detailedForecast":"Isolated rain showers before 2am. Cloudy, with a low around 53. South southwest wind around 8 mph. New rainfall amounts less than a tenth of an inch possible."},{"number":2,"name":"Monday","startTime":"2022-12-05T06:00:00-07:00","endTime":"2022-12-05T18:00:00-07:00","isDaytime":true,"temperature":68,"temperatureUnit":"F","temperatureTrend":"falling","windSpeed":"6 to 15 mph","windDirection":"WSW","icon":"https://api.weather.gov/icons/land/day/bkn/tsra_hi?size=medium","shortForecast":"Partly Sunny then Isolated Showers And Thunderstorms","detailedForecast":"Isolated showers and thunderstorms after 2pm. Partly sunny. High near 68, with temperatures falling to around 64 in the afternoon. West southwest wind 6 to 15 mph, with gusts as high as 22 mph. New rainfall amounts less than a tenth of an inch possible."},{"number":3,"name":"Monday Night","startTime":"2022-12-05T18:00:00-07:00","endTime":"2022-12-06T06:00:00-07:00","isDaytime":false,"temperature":49,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"8 mph","windDirection":"WSW","icon":"https://api.weather.gov/icons/land/night/tsra_hi/sct?size=medium","shortForecast":"Isolated Showers And Thunderstorms then Partly Cloudy","detailedForecast":"Isolated showers and thunderstorms before 8pm. Partly cloudy, with a low around 49. West southwest wind around 8 mph."},{"number":4,"name":"Tuesday","startTime":"2022-12-06T06:00:00-07:00","endTime":"2022-12-06T18:00:00-07:00","isDaytime":true,"temperature":68,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"6 to 18 mph","windDirection":"SW","icon":"https://api.weather.gov/icons/land/day/sct?size=medium","shortForecast":"Mostly Sunny","detailedForecast":"Mostly sunny, with a high near 68. Southwest wind 6 to 18 mph, with gusts as high as 28 mph."},{"number":5,"name":"Tuesday Night","startTime":"2022-12-06T18:00:00-07:00","endTime":"2022-12-07T06:00:00-07:00","isDaytime":false,"temperature":48,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"7 to 12 mph","windDirection":"SSW","icon":"https://api.weather.gov/icons/land/night/rain_showers,20?size=medium","shortForecast":"Slight Chance Rain Showers","detailedForecast":"A slight chance of rain showers after 11pm. Mostly cloudy, with a low around 48. South southwest wind 7 to 12 mph. Chance of precipitation is 20%."},{"number":6,"name":"Wednesday","startTime":"2022-12-07T06:00:00-07:00","endTime":"2022-12-07T18:00:00-07:00","isDaytime":true,"temperature":63,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"6 to 17 mph","windDirection":"SW","icon":"https://api.weather.gov/icons/land/day/rain_showers,20?size=medium","shortForecast":"Slight Chance Rain Showers","detailedForecast":"A slight chance of rain showers. Mostly sunny, with a high near 63. Southwest wind 6 to 17 mph, with gusts as high as 23 mph. Chance of precipitation is 20%."},{"number":7,"name":"Wednesday Night","startTime":"2022-12-07T18:00:00-07:00","endTime":"2022-12-08T06:00:00-07:00","isDaytime":false,"temperature":41,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"9 to 14 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/night/rain_showers/sct?size=medium","shortForecast":"Slight Chance Rain Showers then Partly Cloudy","detailedForecast":"A slight chance of rain showers before 11pm. Partly cloudy, with a low around 41. West wind 9 to 14 mph."},{"number":8,"name":"Thursday","startTime":"2022-12-08T06:00:00-07:00","endTime":"2022-12-08T18:00:00-07:00","isDaytime":true,"temperature":58,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"8 to 13 mph","windDirection":"WNW","icon":"https://api.weather.gov/icons/land/day/few?size=medium","shortForecast":"Sunny","detailedForecast":"Sunny, with a high near 58. West northwest wind 8 to 13 mph."},{"number":9,"name":"Thursday Night","startTime":"2022-12-08T18:00:00-07:00","endTime":"2022-12-09T06:00:00-07:00","isDaytime":false,"temperature":40,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"9 mph","windDirection":"NE","icon":"https://api.weather.gov/icons/land/night/sct?size=medium","shortForecast":"Partly Cloudy","detailedForecast":"Partly cloudy, with a low around 40. Northeast wind around 9 mph."},{"number":10,"name":"Friday","startTime":"2022-12-09T06:00:00-07:00","endTime":"2022-12-09T18:00:00-07:00","isDaytime":true,"temperature":61,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"10 mph","windDirection":"S","icon":"https://api.weather.gov/icons/land/day/sct?size=medium","shortForecast":"Mostly Sunny","detailedForecast":"Mostly sunny, with a high near 61."},{"number":11,"name":"Friday Night","startTime":"2022-12-09T18:00:00-07:00","endTime":"2022-12-10T06:00:00-07:00","isDaytime":false,"temperature":40,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"8 mph","windDirection":"WSW","icon":"https://api.weather.gov/icons/land/night/sct?size=medium","shortForecast":"Partly Cloudy","detailedForecast":"Partly cloudy, with a low around 40."},{"number":12,"name":"Saturday","startTime":"2022-12-10T06:00:00-07:00","endTime":"2022-12-10T18:00:00-07:00","isDaytime":true,"temperature":59,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"7 to 14 mph","windDirection":"WSW","icon":"https://api.weather.gov/icons/land/day/few?size=medium","shortForecast":"Sunny","detailedForecast":"Sunny, with a high near 59."},{"number":13,"name":"Saturday Night","startTime":"2022-12-10T18:00:00-07:00","endTime":"2022-12-11T06:00:00-07:00","isDaytime":false,"temperature":36,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"10 mph","windDirection":"WNW","icon":"https://api.weather.gov/icons/land/night/few?size=medium","shortForecast":"Mostly Clear","detailedForecast":"Mostly clear, with a low around 36."},{"number":14,"name":"Sunday","startTime":"2022-12-11T06:00:00-07:00","endTime":"2022-12-11T18:00:00-07:00","isDaytime":true,"temperature":60,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"9 to 15 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/day/few?size=medium","shortForecast":"Sunny","detailedForecast":"Sunny, with a high near 60."}]}
  var hourly_EPZ_116_60 = false
  var crags_config = [
  {
    "name": "Hueco Tanks",
    "note": "Reservations required.",
    "mountainProject": "https://www.mountainproject.com/area/105810691/hueco-tanks",
    "station": "KELP",
    "office": "EPZ/116,60",
    "coordinates": [
      -106.043,
      31.917
    ]
  }
]</script>

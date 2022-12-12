---
### THIS FILE IS AUTO-GENERATED - DO NOT EDIT ###
layout: page
title: Enchanted Rock, Texas Climbing Weather - Current, Past, and Forecasted Report
title_override: Enchanted Rock<br /><small>Climbing Weather</small>
description: A lightweight weather report for Enchanted Rock, Texas. Optimized for slow internet connections.
js_includes:
  - weather.js
---

<section class="measure center lh-copy f5-ns f6 ph2 mv4" style="text-align: justify;">
<strong>"Is it dry?"</strong>, an oft-repeated, age-old question. Here are real-time,
precipitation-focused reports of current, past, and forecasted climbing weather for Enchanted Rock, Texas.
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
<section id="weather" data-crag="enchanted-rock-texas" class="mv4-ns mv3 ph2 center"></section>
<section id="nearby" class="tc lh-copy">
  <h3>Nearby Crags</h3>
<a class="nowrap no-underline fancy-link relative light-red mh3" href="/crags/the-greenbelt-texas-weather.html">The Greenbelt</a>
<a class="nowrap no-underline fancy-link relative light-red mh3" href="/crags/continental-ranch-texas-weather.html">Continental Ranch</a>
<a class="nowrap no-underline fancy-link relative light-red mh3" href="/crags/pace-bend-park-texas-weather.html">Pace Bend Park</a>
<a class="nowrap no-underline fancy-link relative light-red mh3" href="/crags/reimers-ranch-texas-weather.html">Reimer's Ranch</a>
<a class="nowrap no-underline fancy-link relative light-red mh3" href="/crags/cochise-stronghold-arizona-weather.html">Cochise Stronghold</a>
<a class="nowrap no-underline fancy-link relative light-red mh3" href="/crags/horseshoe-canyon-ranch-arkansas-weather.html">Horseshoe Canyon Ranch</a>
<a class="nowrap no-underline fancy-link relative light-red mh3" href="/crags/last-chance-canyon-new-mexico-weather.html">Last Chance Canyon</a>
<a class="nowrap no-underline fancy-link relative light-red mh3" href="/crags/georgetown-texas-weather.html">Georgetown</a>
<a class="nowrap no-underline fancy-link relative light-red mh3" href="/crags/mckinney-falls-texas-weather.html">McKinney Falls</a>
<a class="nowrap no-underline fancy-link relative light-red mh3" href="/crags/hueco-tanks-texas-weather.html">Hueco Tanks</a>
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
  var weekly_EWX_114_101 = {"updated":"2022-12-12T07:56:36+00:00","units":"us","forecastGenerator":"BaselineForecastGenerator","generatedAt":"2022-12-12T08:37:04+00:00","updateTime":"2022-12-12T07:56:36+00:00","validTimes":"2022-12-12T01:00:00+00:00/P8D","elevation":{"unitCode":"wmoUnit:m","value":456.8952},"periods":[{"number":1,"name":"Overnight","startTime":"2022-12-12T02:00:00-06:00","endTime":"2022-12-12T06:00:00-06:00","isDaytime":false,"temperature":56,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"5 mph","windDirection":"SE","icon":"https://api.weather.gov/icons/land/night/fog?size=medium","shortForecast":"Patchy Fog","detailedForecast":"Patchy fog after 5am. Cloudy, with a low around 56. Southeast wind around 5 mph."},{"number":2,"name":"Monday","startTime":"2022-12-12T06:00:00-06:00","endTime":"2022-12-12T18:00:00-06:00","isDaytime":true,"temperature":70,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"5 to 15 mph","windDirection":"SE","icon":"https://api.weather.gov/icons/land/day/fog/bkn?size=medium","shortForecast":"Areas Of Fog then Mostly Cloudy","detailedForecast":"Areas of fog before noon. Mostly cloudy, with a high near 70. Southeast wind 5 to 15 mph, with gusts as high as 30 mph."},{"number":3,"name":"Monday Night","startTime":"2022-12-12T18:00:00-06:00","endTime":"2022-12-13T06:00:00-06:00","isDaytime":false,"temperature":62,"temperatureUnit":"F","temperatureTrend":"rising","windSpeed":"10 to 20 mph","windDirection":"SSE","icon":"https://api.weather.gov/icons/land/night/bkn/rain_showers,30?size=medium","shortForecast":"Mostly Cloudy then Chance Rain Showers","detailedForecast":"A chance of rain showers after midnight. Mostly cloudy. Low around 62, with temperatures rising to around 69 overnight. South southeast wind 10 to 20 mph, with gusts as high as 40 mph. Chance of precipitation is 30%. New rainfall amounts less than a tenth of an inch possible."},{"number":4,"name":"Tuesday","startTime":"2022-12-13T06:00:00-06:00","endTime":"2022-12-13T18:00:00-06:00","isDaytime":true,"temperature":69,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"10 to 15 mph","windDirection":"WSW","icon":"https://api.weather.gov/icons/land/day/tsra_hi,30/sct?size=medium","shortForecast":"Chance Showers And Thunderstorms then Mostly Sunny","detailedForecast":"A chance of showers and thunderstorms before noon. Mostly sunny, with a high near 69. West southwest wind 10 to 15 mph, with gusts as high as 30 mph. Chance of precipitation is 30%."},{"number":5,"name":"Tuesday Night","startTime":"2022-12-13T18:00:00-06:00","endTime":"2022-12-14T06:00:00-06:00","isDaytime":false,"temperature":46,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"5 to 10 mph","windDirection":"WNW","icon":"https://api.weather.gov/icons/land/night/sct?size=medium","shortForecast":"Partly Cloudy","detailedForecast":"Partly cloudy, with a low around 46. West northwest wind 5 to 10 mph, with gusts as high as 25 mph."},{"number":6,"name":"Wednesday","startTime":"2022-12-14T06:00:00-06:00","endTime":"2022-12-14T18:00:00-06:00","isDaytime":true,"temperature":62,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"10 to 15 mph","windDirection":"WNW","icon":"https://api.weather.gov/icons/land/day/few?size=medium","shortForecast":"Sunny","detailedForecast":"Sunny, with a high near 62. West northwest wind 10 to 15 mph, with gusts as high as 25 mph."},{"number":7,"name":"Wednesday Night","startTime":"2022-12-14T18:00:00-06:00","endTime":"2022-12-15T06:00:00-06:00","isDaytime":false,"temperature":37,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"5 to 10 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/night/skc?size=medium","shortForecast":"Clear","detailedForecast":"Clear, with a low around 37. West wind 5 to 10 mph."},{"number":8,"name":"Thursday","startTime":"2022-12-15T06:00:00-06:00","endTime":"2022-12-15T18:00:00-06:00","isDaytime":true,"temperature":58,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"5 mph","windDirection":"NW","icon":"https://api.weather.gov/icons/land/day/skc?size=medium","shortForecast":"Sunny","detailedForecast":"Sunny, with a high near 58. Northwest wind around 5 mph."},{"number":9,"name":"Thursday Night","startTime":"2022-12-15T18:00:00-06:00","endTime":"2022-12-16T06:00:00-06:00","isDaytime":false,"temperature":35,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"5 mph","windDirection":"N","icon":"https://api.weather.gov/icons/land/night/few?size=medium","shortForecast":"Mostly Clear","detailedForecast":"Mostly clear, with a low around 35. North wind around 5 mph."},{"number":10,"name":"Friday","startTime":"2022-12-16T06:00:00-06:00","endTime":"2022-12-16T18:00:00-06:00","isDaytime":true,"temperature":55,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"5 mph","windDirection":"NNE","icon":"https://api.weather.gov/icons/land/day/few?size=medium","shortForecast":"Sunny","detailedForecast":"Sunny, with a high near 55."},{"number":11,"name":"Friday Night","startTime":"2022-12-16T18:00:00-06:00","endTime":"2022-12-17T06:00:00-06:00","isDaytime":false,"temperature":35,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"5 mph","windDirection":"ENE","icon":"https://api.weather.gov/icons/land/night/bkn?size=medium","shortForecast":"Mostly Cloudy","detailedForecast":"Mostly cloudy, with a low around 35."},{"number":12,"name":"Saturday","startTime":"2022-12-17T06:00:00-06:00","endTime":"2022-12-17T18:00:00-06:00","isDaytime":true,"temperature":47,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"5 to 10 mph","windDirection":"ENE","icon":"https://api.weather.gov/icons/land/day/rain,20?size=medium","shortForecast":"Slight Chance Light Rain","detailedForecast":"A slight chance of rain. Mostly cloudy, with a high near 47. Chance of precipitation is 20%."},{"number":13,"name":"Saturday Night","startTime":"2022-12-17T18:00:00-06:00","endTime":"2022-12-18T06:00:00-06:00","isDaytime":false,"temperature":35,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"5 to 10 mph","windDirection":"E","icon":"https://api.weather.gov/icons/land/night/rain,20?size=medium","shortForecast":"Slight Chance Light Rain","detailedForecast":"A slight chance of rain. Mostly cloudy, with a low around 35. Chance of precipitation is 20%."},{"number":14,"name":"Sunday","startTime":"2022-12-18T06:00:00-06:00","endTime":"2022-12-18T18:00:00-06:00","isDaytime":true,"temperature":49,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"5 to 10 mph","windDirection":"E","icon":"https://api.weather.gov/icons/land/day/rain,20?size=medium","shortForecast":"Slight Chance Light Rain","detailedForecast":"A slight chance of rain. Mostly cloudy, with a high near 49. Chance of precipitation is 20%."}]}
  var hourly_EWX_114_101 = false
  var crags_config = [
  {
    "name": "Enchanted Rock",
    "note": "Granite, so the exposed areas dry fast.",
    "mountainProject": "https://www.mountainproject.com/area/105855196/enchanted-rock-state-natural-area",
    "station": "KT82",
    "office": "EWX/114,101",
    "coordinates": [
      -98.821,
      30.503
    ]
  }
]</script>

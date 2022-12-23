---
### THIS FILE IS AUTO-GENERATED - DO NOT EDIT ###
layout: page
title: Joshua Tree National Park, California Climbing Weather - Current, Past, and Forecasted Report
title_override: Joshua Tree National Park<br /><small>Climbing Weather</small>
description: A lightweight weather report for Joshua Tree National Park, California. Optimized for slow internet connections.
js_includes:
  - weather.js
---

<section class="measure center lh-copy f5-ns f6 ph2 mv4" style="text-align: justify;">
<strong>"Is it dry?"</strong>, an oft-repeated, age-old question. Here are real-time,
precipitation-focused reports of current, past, and forecasted climbing weather for Joshua Tree National Park, California.
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
<section id="weather" data-crag="joshua-tree-national-park-california" class="mv4-ns mv3 ph2 center"></section>
<section id="nearby" class="tc lh-copy">
  <h3>Nearby Crags</h3>
<a class="nowrap no-underline fancy-link relative light-red mh3" href="/crags/yosemite-national-park-california-weather.html">Yosemite National Park</a>
<a class="nowrap no-underline fancy-link relative light-red mh3" href="/crags/bishop-california-weather.html">Bishop</a>
<a class="nowrap no-underline fancy-link relative light-red mh3" href="/crags/mammoth-lakes-california-weather.html">Mammoth Lakes</a>
<a class="nowrap no-underline fancy-link relative light-red mh3" href="/crags/red-rock-nevada-weather.html">Red Rock</a>
</section>
<section id="nearby" class="tc lh-copy">
  <h3>Other Metros</h3>
  <select class="ma1 bg-near-white pa2" id="stateSel">
    <option value="Texas">Texas</option>
    <option value="Washington">Washington</option>
    <option value="Colorado">Colorado</option>
    <option value="Tennessee">Tennessee</option>
    <option value="Utah">Utah</option>
    <option value="California" selected>California</option>
  </select>
  <select class="ma1 bg-near-white pa2" id="citySel">
    <option value="San Francisco" selected>San Francisco</option>
    <option value="Los Angeles">Los Angeles</option>
  </select>
  <a id="selectMetro" class="f6 link dim ph3 pv2 ma1 dib white bg-light-red" href="/crags/san-francisco-california-weather.html">Select Metro</a>
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
  var weekly_PSR_12_103 = {"updated":"2022-12-23T07:36:05+00:00","units":"us","forecastGenerator":"BaselineForecastGenerator","generatedAt":"2022-12-23T08:36:47+00:00","updateTime":"2022-12-23T07:36:05+00:00","validTimes":"2022-12-23T01:00:00+00:00/P8D","elevation":{"unitCode":"wmoUnit:m","value":1279.8552},"periods":[{"number":1,"name":"Overnight","startTime":"2022-12-23T00:00:00-08:00","endTime":"2022-12-23T06:00:00-08:00","isDaytime":false,"temperature":36,"temperatureUnit":"F","temperatureTrend":"rising","windSpeed":"0 mph","windDirection":"WNW","icon":"https://api.weather.gov/icons/land/night/skc?size=medium","shortForecast":"Clear","detailedForecast":"Clear. Low around 36, with temperatures rising to around 38 overnight. West northwest wind around 0 mph."},{"number":2,"name":"Friday","startTime":"2022-12-23T06:00:00-08:00","endTime":"2022-12-23T18:00:00-08:00","isDaytime":true,"temperature":60,"temperatureUnit":"F","temperatureTrend":"falling","windSpeed":"0 to 5 mph","windDirection":"NW","icon":"https://api.weather.gov/icons/land/day/few?size=medium","shortForecast":"Sunny","detailedForecast":"Sunny. High near 60, with temperatures falling to around 53 in the afternoon. Northwest wind 0 to 5 mph."},{"number":3,"name":"Friday Night","startTime":"2022-12-23T18:00:00-08:00","endTime":"2022-12-24T06:00:00-08:00","isDaytime":false,"temperature":36,"temperatureUnit":"F","temperatureTrend":"rising","windSpeed":"5 mph","windDirection":"NW","icon":"https://api.weather.gov/icons/land/night/few?size=medium","shortForecast":"Mostly Clear","detailedForecast":"Mostly clear. Low around 36, with temperatures rising to around 38 overnight. Northwest wind around 5 mph."},{"number":4,"name":"Saturday","startTime":"2022-12-24T06:00:00-08:00","endTime":"2022-12-24T18:00:00-08:00","isDaytime":true,"temperature":62,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"5 to 10 mph","windDirection":"NNW","icon":"https://api.weather.gov/icons/land/day/skc?size=medium","shortForecast":"Sunny","detailedForecast":"Sunny, with a high near 62. North northwest wind 5 to 10 mph."},{"number":5,"name":"Saturday Night","startTime":"2022-12-24T18:00:00-08:00","endTime":"2022-12-25T06:00:00-08:00","isDaytime":false,"temperature":38,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"5 to 10 mph","windDirection":"NNW","icon":"https://api.weather.gov/icons/land/night/few?size=medium","shortForecast":"Mostly Clear","detailedForecast":"Mostly clear, with a low around 38. North northwest wind 5 to 10 mph."},{"number":6,"name":"Christmas Day","startTime":"2022-12-25T06:00:00-08:00","endTime":"2022-12-25T18:00:00-08:00","isDaytime":true,"temperature":64,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"5 to 10 mph","windDirection":"N","icon":"https://api.weather.gov/icons/land/day/few?size=medium","shortForecast":"Sunny","detailedForecast":"Sunny, with a high near 64. North wind 5 to 10 mph."},{"number":7,"name":"Sunday Night","startTime":"2022-12-25T18:00:00-08:00","endTime":"2022-12-26T06:00:00-08:00","isDaytime":false,"temperature":39,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"5 mph","windDirection":"NNW","icon":"https://api.weather.gov/icons/land/night/few?size=medium","shortForecast":"Mostly Clear","detailedForecast":"Mostly clear, with a low around 39. North northwest wind around 5 mph."},{"number":8,"name":"Monday","startTime":"2022-12-26T06:00:00-08:00","endTime":"2022-12-26T18:00:00-08:00","isDaytime":true,"temperature":65,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"5 mph","windDirection":"SSW","icon":"https://api.weather.gov/icons/land/day/sct?size=medium","shortForecast":"Mostly Sunny","detailedForecast":"Mostly sunny, with a high near 65. South southwest wind around 5 mph."},{"number":9,"name":"Monday Night","startTime":"2022-12-26T18:00:00-08:00","endTime":"2022-12-27T06:00:00-08:00","isDaytime":false,"temperature":42,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"0 to 5 mph","windDirection":"SW","icon":"https://api.weather.gov/icons/land/night/bkn?size=medium","shortForecast":"Mostly Cloudy","detailedForecast":"Mostly cloudy, with a low around 42. Southwest wind 0 to 5 mph."},{"number":10,"name":"Tuesday","startTime":"2022-12-27T06:00:00-08:00","endTime":"2022-12-27T18:00:00-08:00","isDaytime":true,"temperature":61,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"5 to 10 mph","windDirection":"SW","icon":"https://api.weather.gov/icons/land/day/rain_showers,20/rain_showers,40?size=medium","shortForecast":"Chance Rain Showers","detailedForecast":"A chance of rain showers after 10am. Partly sunny, with a high near 61. Southwest wind 5 to 10 mph, with gusts as high as 20 mph. Chance of precipitation is 40%. New rainfall amounts less than a tenth of an inch possible."},{"number":11,"name":"Tuesday Night","startTime":"2022-12-27T18:00:00-08:00","endTime":"2022-12-28T06:00:00-08:00","isDaytime":false,"temperature":41,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"5 to 10 mph","windDirection":"SW","icon":"https://api.weather.gov/icons/land/night/rain_showers,50?size=medium","shortForecast":"Chance Rain Showers","detailedForecast":"A chance of rain showers. Mostly cloudy, with a low around 41. Southwest wind 5 to 10 mph. Chance of precipitation is 50%. New rainfall amounts between a tenth and quarter of an inch possible."},{"number":12,"name":"Wednesday","startTime":"2022-12-28T06:00:00-08:00","endTime":"2022-12-28T18:00:00-08:00","isDaytime":true,"temperature":56,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"5 to 15 mph","windDirection":"WSW","icon":"https://api.weather.gov/icons/land/day/rain_showers,50/rain_showers,40?size=medium","shortForecast":"Chance Rain Showers","detailedForecast":"A chance of rain showers. Partly sunny, with a high near 56. West southwest wind 5 to 15 mph, with gusts as high as 20 mph. Chance of precipitation is 50%. New rainfall amounts less than a tenth of an inch possible."},{"number":13,"name":"Wednesday Night","startTime":"2022-12-28T18:00:00-08:00","endTime":"2022-12-29T06:00:00-08:00","isDaytime":false,"temperature":37,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"5 to 10 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/night/rain_showers,20?size=medium","shortForecast":"Slight Chance Rain Showers","detailedForecast":"A slight chance of rain showers. Partly cloudy, with a low around 37. West wind 5 to 10 mph, with gusts as high as 20 mph. Chance of precipitation is 20%."},{"number":14,"name":"Thursday","startTime":"2022-12-29T06:00:00-08:00","endTime":"2022-12-29T18:00:00-08:00","isDaytime":true,"temperature":54,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"5 to 10 mph","windDirection":"WSW","icon":"https://api.weather.gov/icons/land/day/rain_showers,20?size=medium","shortForecast":"Slight Chance Rain Showers","detailedForecast":"A slight chance of rain showers. Partly sunny, with a high near 54. West southwest wind 5 to 10 mph. Chance of precipitation is 20%."}]}
  var hourly_PSR_12_103 = false
  var crags_config = [
  {
    "name": "Joshua Tree National Park",
    "note": "Quartz monzonite.",
    "mountainProject": "https://www.mountainproject.com/area/105720495/joshua-tree-national-park",
    "station": "LTHC1",
    "office": "PSR/12,103",
    "coordinates": [
      -116.168,
      34.012
    ]
  }
]</script>

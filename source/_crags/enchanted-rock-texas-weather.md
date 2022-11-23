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
  var weekly_EWX_114_101 = {"updated":"2022-11-23T08:26:38+00:00","units":"us","forecastGenerator":"BaselineForecastGenerator","generatedAt":"2022-11-23T08:37:32+00:00","updateTime":"2022-11-23T08:26:38+00:00","validTimes":"2022-11-23T02:00:00+00:00/P7DT23H","elevation":{"unitCode":"wmoUnit:m","value":456.8952},"periods":[{"number":1,"name":"Overnight","startTime":"2022-11-23T02:00:00-06:00","endTime":"2022-11-23T06:00:00-06:00","isDaytime":false,"temperature":48,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"5 mph","windDirection":"SSE","icon":"https://api.weather.gov/icons/land/night/rain_showers,20?size=medium","shortForecast":"Areas Of Fog","detailedForecast":"Areas of fog and a slight chance of rain showers. Cloudy, with a low around 48. South southeast wind around 5 mph. Chance of precipitation is 20%. New rainfall amounts less than a tenth of an inch possible."},{"number":2,"name":"Wednesday","startTime":"2022-11-23T06:00:00-06:00","endTime":"2022-11-23T18:00:00-06:00","isDaytime":true,"temperature":61,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"0 to 10 mph","windDirection":"S","icon":"https://api.weather.gov/icons/land/day/fog/rain_showers,20?size=medium","shortForecast":"Patchy Fog then Slight Chance Rain Showers","detailedForecast":"Patchy fog before 9am, then a slight chance of rain showers. Cloudy, with a high near 61. South wind 0 to 10 mph. Chance of precipitation is 20%."},{"number":3,"name":"Wednesday Night","startTime":"2022-11-23T18:00:00-06:00","endTime":"2022-11-24T06:00:00-06:00","isDaytime":false,"temperature":56,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"5 to 10 mph","windDirection":"S","icon":"https://api.weather.gov/icons/land/night/tsra,40/tsra,50?size=medium","shortForecast":"Chance Showers And Thunderstorms","detailedForecast":"A chance of showers and thunderstorms before 3am, then a chance of showers and thunderstorms. Cloudy, with a low around 56. South wind 5 to 10 mph, with gusts as high as 20 mph. Chance of precipitation is 50%. New rainfall amounts less than a tenth of an inch possible."},{"number":4,"name":"Thanksgiving Day","startTime":"2022-11-24T06:00:00-06:00","endTime":"2022-11-24T18:00:00-06:00","isDaytime":true,"temperature":67,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"5 to 10 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/day/tsra_hi,60/tsra_hi,40?size=medium","shortForecast":"Showers And Thunderstorms Likely then Chance Showers And Thunderstorms","detailedForecast":"Showers and thunderstorms likely before 9am, then a chance of showers and thunderstorms. Partly sunny, with a high near 67. West wind 5 to 10 mph, with gusts as high as 20 mph. Chance of precipitation is 60%."},{"number":5,"name":"Thursday Night","startTime":"2022-11-24T18:00:00-06:00","endTime":"2022-11-25T06:00:00-06:00","isDaytime":false,"temperature":43,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"10 to 15 mph","windDirection":"NNW","icon":"https://api.weather.gov/icons/land/night/tsra_sct,20/tsra_sct,30?size=medium","shortForecast":"Chance Showers And Thunderstorms","detailedForecast":"A chance of showers and thunderstorms. Mostly cloudy, with a low around 43. North northwest wind 10 to 15 mph, with gusts as high as 25 mph. Chance of precipitation is 30%."},{"number":6,"name":"Friday","startTime":"2022-11-25T06:00:00-06:00","endTime":"2022-11-25T18:00:00-06:00","isDaytime":true,"temperature":52,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"15 mph","windDirection":"NW","icon":"https://api.weather.gov/icons/land/day/rain_showers,30/rain_showers,20?size=medium","shortForecast":"Chance Rain Showers","detailedForecast":"A chance of rain showers. Partly sunny, with a high near 52. Northwest wind around 15 mph, with gusts as high as 25 mph. Chance of precipitation is 30%."},{"number":7,"name":"Friday Night","startTime":"2022-11-25T18:00:00-06:00","endTime":"2022-11-26T06:00:00-06:00","isDaytime":false,"temperature":38,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"10 to 15 mph","windDirection":"WNW","icon":"https://api.weather.gov/icons/land/night/rain_showers,20/sct?size=medium","shortForecast":"Slight Chance Rain Showers then Partly Cloudy","detailedForecast":"A slight chance of rain showers before midnight. Partly cloudy, with a low around 38. West northwest wind 10 to 15 mph, with gusts as high as 25 mph. Chance of precipitation is 20%."},{"number":8,"name":"Saturday","startTime":"2022-11-26T06:00:00-06:00","endTime":"2022-11-26T18:00:00-06:00","isDaytime":true,"temperature":64,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"10 to 15 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/day/few?size=medium","shortForecast":"Sunny","detailedForecast":"Sunny, with a high near 64. West wind 10 to 15 mph, with gusts as high as 30 mph."},{"number":9,"name":"Saturday Night","startTime":"2022-11-26T18:00:00-06:00","endTime":"2022-11-27T06:00:00-06:00","isDaytime":false,"temperature":44,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"5 to 10 mph","windDirection":"SW","icon":"https://api.weather.gov/icons/land/night/skc?size=medium","shortForecast":"Clear","detailedForecast":"Clear, with a low around 44. Southwest wind 5 to 10 mph, with gusts as high as 20 mph."},{"number":10,"name":"Sunday","startTime":"2022-11-27T06:00:00-06:00","endTime":"2022-11-27T18:00:00-06:00","isDaytime":true,"temperature":71,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"5 mph","windDirection":"WSW","icon":"https://api.weather.gov/icons/land/day/skc?size=medium","shortForecast":"Sunny","detailedForecast":"Sunny, with a high near 71."},{"number":11,"name":"Sunday Night","startTime":"2022-11-27T18:00:00-06:00","endTime":"2022-11-28T06:00:00-06:00","isDaytime":false,"temperature":45,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"5 mph","windDirection":"SSW","icon":"https://api.weather.gov/icons/land/night/few?size=medium","shortForecast":"Mostly Clear","detailedForecast":"Mostly clear, with a low around 45."},{"number":12,"name":"Monday","startTime":"2022-11-28T06:00:00-06:00","endTime":"2022-11-28T18:00:00-06:00","isDaytime":true,"temperature":73,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"5 to 10 mph","windDirection":"S","icon":"https://api.weather.gov/icons/land/day/few?size=medium","shortForecast":"Sunny","detailedForecast":"Sunny, with a high near 73."},{"number":13,"name":"Monday Night","startTime":"2022-11-28T18:00:00-06:00","endTime":"2022-11-29T06:00:00-06:00","isDaytime":false,"temperature":56,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"10 to 15 mph","windDirection":"S","icon":"https://api.weather.gov/icons/land/night/sct?size=medium","shortForecast":"Partly Cloudy","detailedForecast":"Partly cloudy, with a low around 56."},{"number":14,"name":"Tuesday","startTime":"2022-11-29T06:00:00-06:00","endTime":"2022-11-29T18:00:00-06:00","isDaytime":true,"temperature":76,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"10 to 15 mph","windDirection":"SSW","icon":"https://api.weather.gov/icons/land/day/sct?size=medium","shortForecast":"Mostly Sunny","detailedForecast":"Mostly sunny, with a high near 76."}]}
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

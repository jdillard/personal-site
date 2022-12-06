---
### THIS FILE IS AUTO-GENERATED - DO NOT EDIT ###
layout: page
title: Los Angeles, California Climbing Weather - Current, Past, and Forecasted Report
title_override: Los Angeles, California<br /><small>Climbing Weather</small>
description: A lightweight climbing weather report for crags near Los Angeles, California. Optimized for slow internet connections.
js_includes:
  - weather.js
---

<section class="measure center lh-copy f5-ns f6 ph2 mv4" style="text-align: justify;">
<strong>"Is it dry?"</strong>, an oft-repeated, age-old question. Here are real-time,
precipitation-focused reports of current, past, and forecasted climbing weather for crags near Los Angeles, California, sourced
from <a class="no-underline fancy-link relative light-red" target="_blank" href="https://www.weather.gov/documentation/services-web-api">weather.gov</a>.
</section>

<p id="settings-toggle" class="mw5 b center tc hover-light-red black-70 pointer">Show Settings</p>
<section id="settings" class="overflow-hidden" style="display:none;">
    <div class="mv2 ph2 center">
        <div id="menu" class="fn fl-ns w-50-l w-100 pv2 pr4-l">
            <div class="f7 tc b">Select Defaults:</div>
        </div>
        <div class="fn f6 tc fl-ns w-50-l w-100 pv2">
            <span class="f7 b">Instructions:</span>
            <p class="measure lh-copy center"><strong>Show/hide crags</strong> by clicking on their name to the left; green mean shown and gray means hidden.</p>
            <hr class="mw5 p0 mv2 o-60 b0 bt b--light-red light-red bg-light-red">
            <p class="measure lh-copy center"><strong>Show/hide hourly forecasts</strong> by clicking the desired day.</p>
            <hr class="mw5 p0 mv2 o-60 b0 bt b--light-red light-red bg-light-red">
            <p class="measure lh-copy center"><strong>Current and Past conditions</strong> are measured by the nearest weather station. <strong>Forecast conditions</strong> are calculated and polled separately.</p>
            <hr class="mw5 p0 mv2 o-60 b0 bt b--light-red light-red bg-light-red">
            <p class="measure lh-copy center"><strong>Having issues?</strong> Try <a id="clear-cache" class="no-underline relative fancy-link light-red hover-light-red" href="#">clearing the local cache</a>.</p>
        </div>
    </div>
      <hr class="cb mw5 p0 mb3 o-70 b0 bt b--light-red light-red bg-light-red">
    <section class="mh5-ns mh2 pa3 ba b--moon-gray br2 bg-near-white">
      <h3 class="mt2">Submit a New Area</h3>
      <form class="black-80" name="new-crag" data-netlify="true">
          <label for="mp-url" class="f6 b db mb2">Mountain Project Area URL</label>
          <input id="metro" name="metro" type="hidden" value="Los Angeles, California">
          <input id="mp-url" name="mp-url" class="input-reset ba b--moon-gray pa2 mb2 db w-100" placeholder="https://www.mountainproject.com/area/105833381/yosemite-national-park" type="text">
        <div class="mt3"><input class="b ph3 pv2 input-reset ba b--black bg-white grow pointer f6" type="submit" value="Submit"></div>
      </form>
    </section>
</section>
<section id="weather" data-metro data-crag="los-angeles-california" class="mv4-ns mv3 ph2 center"></section>
<script>
  var weekly_PSR_12_103 = {"updated":"2022-12-06T07:53:56+00:00","units":"us","forecastGenerator":"BaselineForecastGenerator","generatedAt":"2022-12-06T08:37:11+00:00","updateTime":"2022-12-06T07:53:56+00:00","validTimes":"2022-12-06T01:00:00+00:00/P8D","elevation":{"unitCode":"wmoUnit:m","value":1279.8552},"periods":[{"number":1,"name":"Overnight","startTime":"2022-12-06T00:00:00-08:00","endTime":"2022-12-06T06:00:00-08:00","isDaytime":false,"temperature":31,"temperatureUnit":"F","temperatureTrend":"rising","windSpeed":"10 mph","windDirection":"WSW","icon":"https://api.weather.gov/icons/land/night/few?size=medium","shortForecast":"Mostly Clear","detailedForecast":"Mostly clear. Low around 31, with temperatures rising to around 33 overnight. West southwest wind around 10 mph."},{"number":2,"name":"Tuesday","startTime":"2022-12-06T06:00:00-08:00","endTime":"2022-12-06T18:00:00-08:00","isDaytime":true,"temperature":51,"temperatureUnit":"F","temperatureTrend":"falling","windSpeed":"10 to 15 mph","windDirection":"WSW","icon":"https://api.weather.gov/icons/land/day/bkn?size=medium","shortForecast":"Partly Sunny","detailedForecast":"Partly sunny. High near 51, with temperatures falling to around 43 in the afternoon. West southwest wind 10 to 15 mph."},{"number":3,"name":"Tuesday Night","startTime":"2022-12-06T18:00:00-08:00","endTime":"2022-12-07T06:00:00-08:00","isDaytime":false,"temperature":29,"temperatureUnit":"F","temperatureTrend":"rising","windSpeed":"5 to 10 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/night/few?size=medium","shortForecast":"Mostly Clear","detailedForecast":"Mostly clear. Low around 29, with temperatures rising to around 31 overnight. West wind 5 to 10 mph."},{"number":4,"name":"Wednesday","startTime":"2022-12-07T06:00:00-08:00","endTime":"2022-12-07T18:00:00-08:00","isDaytime":true,"temperature":51,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"5 to 10 mph","windDirection":"WNW","icon":"https://api.weather.gov/icons/land/day/few?size=medium","shortForecast":"Sunny","detailedForecast":"Sunny, with a high near 51. West northwest wind 5 to 10 mph."},{"number":5,"name":"Wednesday Night","startTime":"2022-12-07T18:00:00-08:00","endTime":"2022-12-08T06:00:00-08:00","isDaytime":false,"temperature":28,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"5 mph","windDirection":"WNW","icon":"https://api.weather.gov/icons/land/night/skc?size=medium","shortForecast":"Clear","detailedForecast":"Clear, with a low around 28. West northwest wind around 5 mph."},{"number":6,"name":"Thursday","startTime":"2022-12-08T06:00:00-08:00","endTime":"2022-12-08T18:00:00-08:00","isDaytime":true,"temperature":52,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"5 to 10 mph","windDirection":"WSW","icon":"https://api.weather.gov/icons/land/day/few?size=medium","shortForecast":"Sunny","detailedForecast":"Sunny, with a high near 52. West southwest wind 5 to 10 mph."},{"number":7,"name":"Thursday Night","startTime":"2022-12-08T18:00:00-08:00","endTime":"2022-12-09T06:00:00-08:00","isDaytime":false,"temperature":28,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"5 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/night/few?size=medium","shortForecast":"Mostly Clear","detailedForecast":"Mostly clear, with a low around 28. West wind around 5 mph."},{"number":8,"name":"Friday","startTime":"2022-12-09T06:00:00-08:00","endTime":"2022-12-09T18:00:00-08:00","isDaytime":true,"temperature":52,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"5 to 10 mph","windDirection":"WNW","icon":"https://api.weather.gov/icons/land/day/few?size=medium","shortForecast":"Sunny","detailedForecast":"Sunny, with a high near 52. West northwest wind 5 to 10 mph."},{"number":9,"name":"Friday Night","startTime":"2022-12-09T18:00:00-08:00","endTime":"2022-12-10T06:00:00-08:00","isDaytime":false,"temperature":29,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"5 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/night/few?size=medium","shortForecast":"Mostly Clear","detailedForecast":"Mostly clear, with a low around 29. West wind around 5 mph."},{"number":10,"name":"Saturday","startTime":"2022-12-10T06:00:00-08:00","endTime":"2022-12-10T18:00:00-08:00","isDaytime":true,"temperature":53,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"5 to 10 mph","windDirection":"WSW","icon":"https://api.weather.gov/icons/land/day/sct?size=medium","shortForecast":"Mostly Sunny","detailedForecast":"Mostly sunny, with a high near 53. West southwest wind 5 to 10 mph."},{"number":11,"name":"Saturday Night","startTime":"2022-12-10T18:00:00-08:00","endTime":"2022-12-11T06:00:00-08:00","isDaytime":false,"temperature":30,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"10 mph","windDirection":"WSW","icon":"https://api.weather.gov/icons/land/night/rain_showers,20/snow,20?size=medium","shortForecast":"Slight Chance Rain Showers then Slight Chance Rain And Snow Showers","detailedForecast":"A slight chance of rain showers between 10pm and 3am, then a slight chance of rain and snow showers. Partly cloudy, with a low around 30. West southwest wind around 10 mph. Chance of precipitation is 20%."},{"number":12,"name":"Sunday","startTime":"2022-12-11T06:00:00-08:00","endTime":"2022-12-11T18:00:00-08:00","isDaytime":true,"temperature":49,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"10 to 15 mph","windDirection":"WSW","icon":"https://api.weather.gov/icons/land/day/snow,20?size=medium","shortForecast":"Slight Chance Rain And Snow Showers","detailedForecast":"A slight chance of rain and snow showers before 4pm. Mostly sunny, with a high near 49. West southwest wind 10 to 15 mph, with gusts as high as 25 mph. Chance of precipitation is 20%."},{"number":13,"name":"Sunday Night","startTime":"2022-12-11T18:00:00-08:00","endTime":"2022-12-12T06:00:00-08:00","isDaytime":false,"temperature":27,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"10 to 15 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/night/few?size=medium","shortForecast":"Mostly Clear","detailedForecast":"Mostly clear, with a low around 27. West wind 10 to 15 mph, with gusts as high as 20 mph. New rainfall amounts less than a tenth of an inch possible."},{"number":14,"name":"Monday","startTime":"2022-12-12T06:00:00-08:00","endTime":"2022-12-12T18:00:00-08:00","isDaytime":true,"temperature":46,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"10 to 15 mph","windDirection":"NW","icon":"https://api.weather.gov/icons/land/day/few?size=medium","shortForecast":"Sunny","detailedForecast":"Sunny, with a high near 46. Northwest wind 10 to 15 mph, with gusts as high as 20 mph."}]}
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
    <option value="San Francisco">San Francisco</option>
    <option value="Los Angeles" selected>Los Angeles</option>
  </select>
  <a id="selectMetro" class="f6 link dim ph3 pv2 ma1 dib white bg-light-red" href="/crags/los-angeles-california-weather.html">Select Metro</a>
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


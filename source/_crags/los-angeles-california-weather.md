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
  var weekly_PSR_12_103 = {"updated":"2022-11-23T07:29:22+00:00","units":"us","forecastGenerator":"BaselineForecastGenerator","generatedAt":"2022-11-23T08:38:06+00:00","updateTime":"2022-11-23T07:29:22+00:00","validTimes":"2022-11-23T01:00:00+00:00/P8D","elevation":{"unitCode":"wmoUnit:m","value":1279.8552},"periods":[{"number":1,"name":"Overnight","startTime":"2022-11-23T00:00:00-08:00","endTime":"2022-11-23T06:00:00-08:00","isDaytime":false,"temperature":34,"temperatureUnit":"F","temperatureTrend":"rising","windSpeed":"5 mph","windDirection":"NW","icon":"https://api.weather.gov/icons/land/night/skc?size=medium","shortForecast":"Clear","detailedForecast":"Clear. Low around 34, with temperatures rising to around 36 overnight. Northwest wind around 5 mph."},{"number":2,"name":"Wednesday","startTime":"2022-11-23T06:00:00-08:00","endTime":"2022-11-23T18:00:00-08:00","isDaytime":true,"temperature":63,"temperatureUnit":"F","temperatureTrend":"falling","windSpeed":"5 to 15 mph","windDirection":"NNW","icon":"https://api.weather.gov/icons/land/day/few?size=medium","shortForecast":"Sunny","detailedForecast":"Sunny. High near 63, with temperatures falling to around 56 in the afternoon. North northwest wind 5 to 15 mph, with gusts as high as 20 mph."},{"number":3,"name":"Wednesday Night","startTime":"2022-11-23T18:00:00-08:00","endTime":"2022-11-24T06:00:00-08:00","isDaytime":false,"temperature":35,"temperatureUnit":"F","temperatureTrend":"rising","windSpeed":"10 to 15 mph","windDirection":"NNW","icon":"https://api.weather.gov/icons/land/night/few?size=medium","shortForecast":"Mostly Clear","detailedForecast":"Mostly clear. Low around 35, with temperatures rising to around 37 overnight. North northwest wind 10 to 15 mph, with gusts as high as 20 mph."},{"number":4,"name":"Thanksgiving Day","startTime":"2022-11-24T06:00:00-08:00","endTime":"2022-11-24T18:00:00-08:00","isDaytime":true,"temperature":56,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"15 to 20 mph","windDirection":"N","icon":"https://api.weather.gov/icons/land/day/few?size=medium","shortForecast":"Sunny","detailedForecast":"Sunny, with a high near 56. North wind 15 to 20 mph, with gusts as high as 25 mph."},{"number":5,"name":"Thursday Night","startTime":"2022-11-24T18:00:00-08:00","endTime":"2022-11-25T06:00:00-08:00","isDaytime":false,"temperature":32,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"5 to 10 mph","windDirection":"N","icon":"https://api.weather.gov/icons/land/night/skc?size=medium","shortForecast":"Clear","detailedForecast":"Clear, with a low around 32. North wind 5 to 10 mph."},{"number":6,"name":"Friday","startTime":"2022-11-25T06:00:00-08:00","endTime":"2022-11-25T18:00:00-08:00","isDaytime":true,"temperature":58,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"5 mph","windDirection":"NNE","icon":"https://api.weather.gov/icons/land/day/few?size=medium","shortForecast":"Sunny","detailedForecast":"Sunny, with a high near 58. North northeast wind around 5 mph."},{"number":7,"name":"Friday Night","startTime":"2022-11-25T18:00:00-08:00","endTime":"2022-11-26T06:00:00-08:00","isDaytime":false,"temperature":36,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"5 mph","windDirection":"NNW","icon":"https://api.weather.gov/icons/land/night/few?size=medium","shortForecast":"Mostly Clear","detailedForecast":"Mostly clear, with a low around 36. North northwest wind around 5 mph."},{"number":8,"name":"Saturday","startTime":"2022-11-26T06:00:00-08:00","endTime":"2022-11-26T18:00:00-08:00","isDaytime":true,"temperature":63,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"5 mph","windDirection":"NW","icon":"https://api.weather.gov/icons/land/day/few?size=medium","shortForecast":"Sunny","detailedForecast":"Sunny, with a high near 63. Northwest wind around 5 mph."},{"number":9,"name":"Saturday Night","startTime":"2022-11-26T18:00:00-08:00","endTime":"2022-11-27T06:00:00-08:00","isDaytime":false,"temperature":36,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"5 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/night/few?size=medium","shortForecast":"Mostly Clear","detailedForecast":"Mostly clear, with a low around 36. West wind around 5 mph."},{"number":10,"name":"Sunday","startTime":"2022-11-27T06:00:00-08:00","endTime":"2022-11-27T18:00:00-08:00","isDaytime":true,"temperature":60,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"5 to 10 mph","windDirection":"SW","icon":"https://api.weather.gov/icons/land/day/few?size=medium","shortForecast":"Sunny","detailedForecast":"Sunny, with a high near 60. Southwest wind 5 to 10 mph."},{"number":11,"name":"Sunday Night","startTime":"2022-11-27T18:00:00-08:00","endTime":"2022-11-28T06:00:00-08:00","isDaytime":false,"temperature":33,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"5 to 10 mph","windDirection":"SW","icon":"https://api.weather.gov/icons/land/night/few?size=medium","shortForecast":"Mostly Clear","detailedForecast":"Mostly clear, with a low around 33. Southwest wind 5 to 10 mph."},{"number":12,"name":"Monday","startTime":"2022-11-28T06:00:00-08:00","endTime":"2022-11-28T18:00:00-08:00","isDaytime":true,"temperature":54,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"5 to 15 mph","windDirection":"WSW","icon":"https://api.weather.gov/icons/land/day/rain_showers,20/rain_showers,30?size=medium","shortForecast":"Chance Rain Showers","detailedForecast":"A chance of rain showers after 10am. Mostly sunny, with a high near 54. West southwest wind 5 to 15 mph, with gusts as high as 25 mph. Chance of precipitation is 30%."},{"number":13,"name":"Monday Night","startTime":"2022-11-28T18:00:00-08:00","endTime":"2022-11-29T06:00:00-08:00","isDaytime":false,"temperature":30,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"15 mph","windDirection":"WSW","icon":"https://api.weather.gov/icons/land/night/rain_showers,30/snow,20?size=medium","shortForecast":"Chance Rain Showers then Slight Chance Rain And Snow Showers","detailedForecast":"A chance of rain showers before 3am, then a slight chance of rain and snow showers. Partly cloudy, with a low around 30. West southwest wind around 15 mph, with gusts as high as 25 mph. Chance of precipitation is 30%. Little or no snow accumulation expected."},{"number":14,"name":"Tuesday","startTime":"2022-11-29T06:00:00-08:00","endTime":"2022-11-29T18:00:00-08:00","isDaytime":true,"temperature":48,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"10 to 15 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/day/snow,20/sct?size=medium","shortForecast":"Slight Chance Rain And Snow Showers then Mostly Sunny","detailedForecast":"A slight chance of rain and snow showers before 10am. Mostly sunny, with a high near 48. West wind 10 to 15 mph, with gusts as high as 25 mph. Chance of precipitation is 20%. Little or no snow accumulation expected."}]}
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


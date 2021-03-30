---
### THIS FILE IS AUTO-GENERATED - DO NOT EDIT ###
layout: page
title: San Francisco, California Climbing Weather - Current, Past, and Forecasted Report
title_override: San Francisco, California<br /><small>Climbing Weather</small>
description: A lightweight climbing weather report for crags near San Francisco, California. Optimized for slow internet connections.
js_includes:
  - weather.js
---

<section class="measure center lh-copy f5-ns f6 ph2 mv4" style="text-align: justify;">
<strong>"Is it dry?"</strong>, an oft-repeated, age-old question. Here are real-time,
precipitation-focused reports of current, past, and forecasted climbing weather for crags near San Francisco, California, sourced
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
          <input id="metro" name="metro" type="hidden" value="San Francisco, California">
          <input id="mp-url" name="mp-url" class="input-reset ba b--moon-gray pa2 mb2 db w-100" placeholder="https://www.mountainproject.com/area/105833381/yosemite-national-park" type="text">
        <div class="mt3"><input class="b ph3 pv2 input-reset ba b--black bg-white grow pointer f6" type="submit" value="Submit"></div>
      </form>
    </section>
</section>
<section id="weather" data-metro data-crag="san-francisco-california" class="mv4-ns mv3 ph2 center"></section>
<script>
  var weekly_PSR_12_103 = null
  var hourly_PSR_12_103 = {"correlationId":"a5db886","title":"Forecast Grid Expired","type":"https://api.weather.gov/problems/ForecastGridExpired","status":503,"detail":"The requested forecast grid was issued 2021-03-29T08:20:45+00:00 and has expired.","instance":"https://api.weather.gov/requests/a5db886"}
  var weekly_HNX_66_143 = null
  var hourly_HNX_66_143 = {"correlationId":"11def3ba","title":"Forecast Grid Expired","type":"https://api.weather.gov/problems/ForecastGridExpired","status":503,"detail":"The requested forecast grid was issued 2021-03-29T09:56:24+00:00 and has expired.","instance":"https://api.weather.gov/requests/11def3ba"}
  var weekly_VEF_14_168 = null
  var hourly_VEF_14_168 = {"correlationId":"e71cd55","title":"Forecast Grid Expired","type":"https://api.weather.gov/problems/ForecastGridExpired","status":503,"detail":"The requested forecast grid was issued 2021-03-29T08:08:11+00:00 and has expired.","instance":"https://api.weather.gov/requests/e71cd55"}
  var weekly_REV_58_16 = {"updated":"2021-03-29T10:12:10+00:00","units":"us","forecastGenerator":"BaselineForecastGenerator","generatedAt":"2021-03-29T15:49:32+00:00","updateTime":"2021-03-29T10:12:10+00:00","validTimes":"2021-03-29T04:00:00+00:00/P7DT21H","elevation":{"value":2411.8824,"unitCode":"unit:m"},"periods":[{"number":1,"name":"Today","startTime":"2021-03-29T08:00:00-07:00","endTime":"2021-03-29T18:00:00-07:00","isDaytime":true,"temperature":52,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"20 to 25 mph","windDirection":"SW","icon":"https://api.weather.gov/icons/land/day/wind_few?size=medium","shortForecast":"Sunny","detailedForecast":"Sunny, with a high near 52. Southwest wind 20 to 25 mph, with gusts as high as 45 mph."},{"number":2,"name":"Tonight","startTime":"2021-03-29T18:00:00-07:00","endTime":"2021-03-30T06:00:00-07:00","isDaytime":false,"temperature":18,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"0 to 15 mph","windDirection":"NW","icon":"https://api.weather.gov/icons/land/night/few?size=medium","shortForecast":"Mostly Clear","detailedForecast":"Mostly clear, with a low around 18. Northwest wind 0 to 15 mph, with gusts as high as 30 mph."},{"number":3,"name":"Tuesday","startTime":"2021-03-30T06:00:00-07:00","endTime":"2021-03-30T18:00:00-07:00","isDaytime":true,"temperature":49,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"0 to 10 mph","windDirection":"N","icon":"https://api.weather.gov/icons/land/day/few?size=medium","shortForecast":"Sunny","detailedForecast":"Sunny, with a high near 49. North wind 0 to 10 mph, with gusts as high as 20 mph."},{"number":4,"name":"Tuesday Night","startTime":"2021-03-30T18:00:00-07:00","endTime":"2021-03-31T06:00:00-07:00","isDaytime":false,"temperature":24,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"5 to 10 mph","windDirection":"NE","icon":"https://api.weather.gov/icons/land/night/skc?size=medium","shortForecast":"Clear","detailedForecast":"Clear, with a low around 24. Northeast wind 5 to 10 mph."},{"number":5,"name":"Wednesday","startTime":"2021-03-31T06:00:00-07:00","endTime":"2021-03-31T18:00:00-07:00","isDaytime":true,"temperature":57,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"5 mph","windDirection":"E","icon":"https://api.weather.gov/icons/land/day/skc?size=medium","shortForecast":"Sunny","detailedForecast":"Sunny, with a high near 57. East wind around 5 mph."},{"number":6,"name":"Wednesday Night","startTime":"2021-03-31T18:00:00-07:00","endTime":"2021-04-01T06:00:00-07:00","isDaytime":false,"temperature":31,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"5 mph","windDirection":"S","icon":"https://api.weather.gov/icons/land/night/skc?size=medium","shortForecast":"Clear","detailedForecast":"Clear, with a low around 31. South wind around 5 mph."},{"number":7,"name":"Thursday","startTime":"2021-04-01T06:00:00-07:00","endTime":"2021-04-01T18:00:00-07:00","isDaytime":true,"temperature":60,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"5 to 10 mph","windDirection":"SW","icon":"https://api.weather.gov/icons/land/day/few?size=medium","shortForecast":"Sunny","detailedForecast":"Sunny, with a high near 60."},{"number":8,"name":"Thursday Night","startTime":"2021-04-01T18:00:00-07:00","endTime":"2021-04-02T06:00:00-07:00","isDaytime":false,"temperature":32,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"10 mph","windDirection":"SW","icon":"https://api.weather.gov/icons/land/night/few?size=medium","shortForecast":"Mostly Clear","detailedForecast":"Mostly clear, with a low around 32."},{"number":9,"name":"Friday","startTime":"2021-04-02T06:00:00-07:00","endTime":"2021-04-02T18:00:00-07:00","isDaytime":true,"temperature":63,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"10 mph","windDirection":"SW","icon":"https://api.weather.gov/icons/land/day/few?size=medium","shortForecast":"Sunny","detailedForecast":"Sunny, with a high near 63."},{"number":10,"name":"Friday Night","startTime":"2021-04-02T18:00:00-07:00","endTime":"2021-04-03T06:00:00-07:00","isDaytime":false,"temperature":34,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"10 mph","windDirection":"SW","icon":"https://api.weather.gov/icons/land/night/few?size=medium","shortForecast":"Mostly Clear","detailedForecast":"Mostly clear, with a low around 34."},{"number":11,"name":"Saturday","startTime":"2021-04-03T06:00:00-07:00","endTime":"2021-04-03T18:00:00-07:00","isDaytime":true,"temperature":59,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"10 to 15 mph","windDirection":"SW","icon":"https://api.weather.gov/icons/land/day/few?size=medium","shortForecast":"Sunny","detailedForecast":"Sunny, with a high near 59."},{"number":12,"name":"Saturday Night","startTime":"2021-04-03T18:00:00-07:00","endTime":"2021-04-04T06:00:00-07:00","isDaytime":false,"temperature":32,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"15 mph","windDirection":"SW","icon":"https://api.weather.gov/icons/land/night/few?size=medium","shortForecast":"Mostly Clear","detailedForecast":"Mostly clear, with a low around 32."},{"number":13,"name":"Sunday","startTime":"2021-04-04T06:00:00-07:00","endTime":"2021-04-04T18:00:00-07:00","isDaytime":true,"temperature":52,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"15 mph","windDirection":"SW","icon":"https://api.weather.gov/icons/land/day/rain_showers/snow?size=medium","shortForecast":"Slight Chance Rain Showers then Chance Snow Showers","detailedForecast":"A slight chance of rain showers between 11am and 5pm, then a chance of snow showers. Mostly sunny, with a high near 52."},{"number":14,"name":"Sunday Night","startTime":"2021-04-04T18:00:00-07:00","endTime":"2021-04-05T06:00:00-07:00","isDaytime":false,"temperature":26,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"15 mph","windDirection":"SW","icon":"https://api.weather.gov/icons/land/night/snow?size=medium","shortForecast":"Chance Snow Showers","detailedForecast":"A chance of snow showers. Partly cloudy, with a low around 26."}]}
  var hourly_REV_58_16 = {"correlationId":"161ab5df","title":"Forecast Grid Expired","type":"https://api.weather.gov/problems/ForecastGridExpired","status":503,"detail":"The requested forecast grid was issued 2021-03-29T10:12:10+00:00 and has expired.","instance":"https://api.weather.gov/requests/161ab5df"}
  var weekly_VEF_111_97 = null
  var hourly_VEF_111_97 = {"correlationId":"b9b83c8","title":"Forecast Grid Expired","type":"https://api.weather.gov/problems/ForecastGridExpired","status":503,"detail":"The requested forecast grid was issued 2021-03-29T08:08:11+00:00 and has expired.","instance":"https://api.weather.gov/requests/b9b83c8"}
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
  },
  {
    "name": "Yosemite National Park",
    "note": "Glacial granite.",
    "mountainProject": "https://www.mountainproject.com/area/105833381/yosemite-national-park",
    "station": "AHIC1",
    "office": "HNX/66,143",
    "coordinates": [
      -119.604,
      37.741
    ]
  },
  {
    "name": "Bishop",
    "note": "Sharp, skin tearing quartz monzonite.",
    "mountainProject": "https://www.mountainproject.com/area/106064825/bishop-area",
    "station": "KBIH",
    "office": "VEF/14,168",
    "coordinates": [
      -118.435,
      37.361
    ]
  },
  {
    "name": "Mammoth Lakes",
    "note": "Volcanic tuff to perfect granite.",
    "mountainProject": "https://www.mountainproject.com/area/106064821/mammoth-lakes-area",
    "station": "C2998",
    "office": "REV/58,16",
    "coordinates": [
      -118.967,
      37.647
    ]
  },
  {
    "name": "Red Rock",
    "note": "Sandstone that can be fragile when wet.",
    "mountainProject": "https://www.mountainproject.com/area/105731932/red-rock",
    "station": "KYCN2",
    "office": "VEF/111,97",
    "coordinates": [
      -115.427,
      36.135
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


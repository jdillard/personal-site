---
### THIS FILE IS AUTO-GENERATED - DO NOT EDIT ###
layout: page
title: Austin, Texas Climbing Weather - Current, Past, and Forecasted Report
title_override: Austin, Texas<br /><small>Climbing Weather</small>
description: A lightweight climbing weather report for crags near Austin, Texas. Optimized for slow internet connections.
js_includes:
  - weather.js
---

<section class="measure center lh-copy f5-ns f6 ph2 mv4" style="text-align: justify;">
<strong>"Is it dry?"</strong>, an oft-repeated, age-old question. Here are real-time,
precipitation-focused reports of current, past, and forecasted climbing weather for crags near Austin, Texas, sourced
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
          <input id="metro" name="metro" type="hidden" value="Austin, Texas">
          <input id="mp-url" name="mp-url" class="input-reset ba b--moon-gray pa2 mb2 db w-100" placeholder="https://www.mountainproject.com/area/105833381/yosemite-national-park" type="text">
        <div class="mt3"><input class="b ph3 pv2 input-reset ba b--black bg-white grow pointer f6" type="submit" value="Submit"></div>
      </form>
    </section>
</section>
<section id="weather" data-metro data-crag="austin-texas" class="mv4-ns mv3 ph2 center"></section>
<script>
  var weekly_EWX_153_89 = null
  var hourly_EWX_153_89 = {"correlationId":"e6fa78d","title":"Forecast Grid Expired","type":"https://api.weather.gov/problems/ForecastGridExpired","status":503,"detail":"The requested forecast grid was issued 2021-03-29T08:02:53+00:00 and has expired.","instance":"https://api.weather.gov/requests/e6fa78d"}
  var weekly_EWX_14_74 = null
  var hourly_EWX_14_74 = {"correlationId":"dd0898a","title":"Forecast Grid Expired","type":"https://api.weather.gov/problems/ForecastGridExpired","status":503,"detail":"The requested forecast grid was issued 2021-03-29T08:02:53+00:00 and has expired.","instance":"https://api.weather.gov/requests/dd0898a"}
  var weekly_EWX_145_98 = null
  var hourly_EWX_145_98 = {"correlationId":"e8d6312","title":"Forecast Grid Expired","type":"https://api.weather.gov/problems/ForecastGridExpired","status":503,"detail":"The requested forecast grid was issued 2021-03-29T08:02:53+00:00 and has expired.","instance":"https://api.weather.gov/requests/e8d6312"}
  var weekly_EWX_141_93 = null
  var hourly_EWX_141_93 = {"correlationId":"ebcf636","title":"Forecast Grid Expired","type":"https://api.weather.gov/problems/ForecastGridExpired","status":503,"detail":"The requested forecast grid was issued 2021-03-29T08:02:53+00:00 and has expired.","instance":"https://api.weather.gov/requests/ebcf636"}
  var weekly_TWC_125_31 = null
  var hourly_TWC_125_31 = {"correlationId":"e8e17a8","title":"Forecast Grid Expired","type":"https://api.weather.gov/problems/ForecastGridExpired","status":503,"detail":"The requested forecast grid was issued 2021-03-29T09:31:32+00:00 and has expired.","instance":"https://api.weather.gov/requests/e8e17a8"}
  var weekly_EWX_114_101 = null
  var hourly_EWX_114_101 = {"correlationId":"344f43","title":"Forecast Grid Expired","type":"https://api.weather.gov/problems/ForecastGridExpired","status":503,"detail":"The requested forecast grid was issued 2021-03-29T08:02:53+00:00 and has expired.","instance":"https://api.weather.gov/requests/344f43"}
  var weekly_LZK_44_127 = null
  var hourly_LZK_44_127 = {"correlationId":"139902f5","title":"Forecast Grid Expired","type":"https://api.weather.gov/problems/ForecastGridExpired","status":503,"detail":"The requested forecast grid was issued 2021-03-29T10:35:43+00:00 and has expired.","instance":"https://api.weather.gov/requests/139902f5"}
  var weekly_MAF_16_149 = null
  var hourly_MAF_16_149 = {"correlationId":"11c7b55a","title":"Forecast Grid Expired","type":"https://api.weather.gov/problems/ForecastGridExpired","status":503,"detail":"The requested forecast grid was issued 2021-03-29T09:17:21+00:00 and has expired.","instance":"https://api.weather.gov/requests/11c7b55a"}
  var weekly_EWX_157_106 = {"updated":"2021-03-29T08:02:53+00:00","units":"us","forecastGenerator":"BaselineForecastGenerator","generatedAt":"2021-03-29T21:05:50+00:00","updateTime":"2021-03-29T08:02:53+00:00","validTimes":"2021-03-29T02:00:00+00:00/P8DT6H","elevation":{"value":239.8776,"unitCode":"unit:m"},"periods":[{"number":1,"name":"This Afternoon","startTime":"2021-03-29T16:00:00-05:00","endTime":"2021-03-29T18:00:00-05:00","isDaytime":true,"temperature":76,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"10 mph","windDirection":"S","icon":"https://api.weather.gov/icons/land/day/few?size=medium","shortForecast":"Sunny","detailedForecast":"Sunny, with a high near 76. South wind around 10 mph."},{"number":2,"name":"Tonight","startTime":"2021-03-29T18:00:00-05:00","endTime":"2021-03-30T06:00:00-05:00","isDaytime":false,"temperature":56,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"10 mph","windDirection":"S","icon":"https://api.weather.gov/icons/land/night/sct?size=medium","shortForecast":"Partly Cloudy","detailedForecast":"Partly cloudy, with a low around 56. South wind around 10 mph, with gusts as high as 20 mph."},{"number":3,"name":"Tuesday","startTime":"2021-03-30T06:00:00-05:00","endTime":"2021-03-30T18:00:00-05:00","isDaytime":true,"temperature":83,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"5 to 15 mph","windDirection":"S","icon":"https://api.weather.gov/icons/land/day/bkn?size=medium","shortForecast":"Mostly Cloudy","detailedForecast":"Mostly cloudy, with a high near 83. South wind 5 to 15 mph, with gusts as high as 25 mph."},{"number":4,"name":"Tuesday Night","startTime":"2021-03-30T18:00:00-05:00","endTime":"2021-03-31T06:00:00-05:00","isDaytime":false,"temperature":53,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"10 to 15 mph","windDirection":"WSW","icon":"https://api.weather.gov/icons/land/night/bkn?size=medium","shortForecast":"Mostly Cloudy","detailedForecast":"Mostly cloudy, with a low around 53. West southwest wind 10 to 15 mph, with gusts as high as 25 mph."},{"number":5,"name":"Wednesday","startTime":"2021-03-31T06:00:00-05:00","endTime":"2021-03-31T18:00:00-05:00","isDaytime":true,"temperature":65,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"15 to 20 mph","windDirection":"N","icon":"https://api.weather.gov/icons/land/day/bkn?size=medium","shortForecast":"Partly Sunny","detailedForecast":"Partly sunny, with a high near 65. North wind 15 to 20 mph, with gusts as high as 35 mph."},{"number":6,"name":"Wednesday Night","startTime":"2021-03-31T18:00:00-05:00","endTime":"2021-04-01T06:00:00-05:00","isDaytime":false,"temperature":42,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"10 to 20 mph","windDirection":"NNE","icon":"https://api.weather.gov/icons/land/night/few?size=medium","shortForecast":"Mostly Clear","detailedForecast":"Mostly clear, with a low around 42. North northeast wind 10 to 20 mph, with gusts as high as 30 mph."},{"number":7,"name":"Thursday","startTime":"2021-04-01T06:00:00-05:00","endTime":"2021-04-01T18:00:00-05:00","isDaytime":true,"temperature":68,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"10 to 15 mph","windDirection":"NE","icon":"https://api.weather.gov/icons/land/day/few?size=medium","shortForecast":"Sunny","detailedForecast":"Sunny, with a high near 68. Northeast wind 10 to 15 mph, with gusts as high as 20 mph."},{"number":8,"name":"Thursday Night","startTime":"2021-04-01T18:00:00-05:00","endTime":"2021-04-02T06:00:00-05:00","isDaytime":false,"temperature":44,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"5 to 10 mph","windDirection":"ESE","icon":"https://api.weather.gov/icons/land/night/sct?size=medium","shortForecast":"Partly Cloudy","detailedForecast":"Partly cloudy, with a low around 44. East southeast wind 5 to 10 mph."},{"number":9,"name":"Friday","startTime":"2021-04-02T06:00:00-05:00","endTime":"2021-04-02T18:00:00-05:00","isDaytime":true,"temperature":70,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"5 to 15 mph","windDirection":"SE","icon":"https://api.weather.gov/icons/land/day/bkn?size=medium","shortForecast":"Partly Sunny","detailedForecast":"Partly sunny, with a high near 70. Southeast wind 5 to 15 mph, with gusts as high as 25 mph."},{"number":10,"name":"Friday Night","startTime":"2021-04-02T18:00:00-05:00","endTime":"2021-04-03T06:00:00-05:00","isDaytime":false,"temperature":50,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"10 to 15 mph","windDirection":"SSE","icon":"https://api.weather.gov/icons/land/night/bkn?size=medium","shortForecast":"Mostly Cloudy","detailedForecast":"Mostly cloudy, with a low around 50."},{"number":11,"name":"Saturday","startTime":"2021-04-03T06:00:00-05:00","endTime":"2021-04-03T18:00:00-05:00","isDaytime":true,"temperature":72,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"10 to 15 mph","windDirection":"SSE","icon":"https://api.weather.gov/icons/land/day/bkn?size=medium","shortForecast":"Partly Sunny","detailedForecast":"Partly sunny, with a high near 72."},{"number":12,"name":"Saturday Night","startTime":"2021-04-03T18:00:00-05:00","endTime":"2021-04-04T06:00:00-05:00","isDaytime":false,"temperature":56,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"10 to 15 mph","windDirection":"SSE","icon":"https://api.weather.gov/icons/land/night/bkn?size=medium","shortForecast":"Mostly Cloudy","detailedForecast":"Mostly cloudy, with a low around 56."},{"number":13,"name":"Sunday","startTime":"2021-04-04T06:00:00-05:00","endTime":"2021-04-04T18:00:00-05:00","isDaytime":true,"temperature":78,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"10 to 20 mph","windDirection":"SSE","icon":"https://api.weather.gov/icons/land/day/bkn?size=medium","shortForecast":"Partly Sunny","detailedForecast":"Partly sunny, with a high near 78."},{"number":14,"name":"Sunday Night","startTime":"2021-04-04T18:00:00-05:00","endTime":"2021-04-05T06:00:00-05:00","isDaytime":false,"temperature":59,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"15 to 20 mph","windDirection":"SSE","icon":"https://api.weather.gov/icons/land/night/sct?size=medium","shortForecast":"Partly Cloudy","detailedForecast":"Partly cloudy, with a low around 59."}]}
  var hourly_EWX_157_106 = {"correlationId":"b9b12a6","title":"Forecast Grid Expired","type":"https://api.weather.gov/problems/ForecastGridExpired","status":503,"detail":"The requested forecast grid was issued 2021-03-29T08:02:53+00:00 and has expired.","instance":"https://api.weather.gov/requests/b9b12a6"}
  var weekly_EWX_156_86 = null
  var hourly_EWX_156_86 = {"correlationId":"e8c4ced","title":"Forecast Grid Expired","type":"https://api.weather.gov/problems/ForecastGridExpired","status":503,"detail":"The requested forecast grid was issued 2021-03-29T08:02:53+00:00 and has expired.","instance":"https://api.weather.gov/requests/e8c4ced"}
  var weekly_EPZ_116_60 = null
  var hourly_EPZ_116_60 = {"correlationId":"181da62e","title":"Forecast Grid Expired","type":"https://api.weather.gov/problems/ForecastGridExpired","status":503,"detail":"The requested forecast grid was issued 2021-03-29T06:42:56+00:00 and has expired.","instance":"https://api.weather.gov/requests/181da62e"}
  var crags_config = [
  {
    "name": "The Greenbelt",
    "note": "Porous limestone that can take a couple days to dry out.",
    "mountainProject": "https://www.mountainproject.com/area/105905087/barton-creek-greenbelt",
    "station": "KATT",
    "office": "EWX/153,89",
    "coordinates": [
      -97.801,
      30.244
    ]
  },
  {
    "name": "Continental Ranch",
    "note": "Hard limestone, so dries fairly fast. The ranch also seems to sit in a weather bubble with the rain passing around it.",
    "mountainProject": "https://www.mountainproject.com/area/106169626/continental-ranch",
    "station": "KDRT",
    "office": "EWX/14,74",
    "coordinates": [
      -101.44,
      29.803
    ]
  },
  {
    "name": "Pace Bend Park",
    "note": "Limestone. To check water levels for DWS, see: http://www.bloodyflapper.com/pacebend",
    "mountainProject": "https://www.mountainproject.com/area/107104361/pace-bend-park-dws",
    "station": "KRYW",
    "office": "EWX/145,98",
    "coordinates": [
      -98.019,
      30.455
    ]
  },
  {
    "name": "Reimer's Ranch",
    "note": "Porous limestone that can take a couple days to dry out.",
    "mountainProject": "https://www.mountainproject.com/area/105837312/reimers-ranch",
    "station": "KRYW",
    "office": "EWX/141,93",
    "coordinates": [
      -98.122,
      30.334
    ]
  },
  {
    "name": "Cochise Stronghold",
    "note": "Granite, so the exposed areas dry fast.",
    "mountainProject": "https://www.mountainproject.com/area/105738034/cochise-stronghold",
    "station": "KFHU",
    "office": "TWC/125,31",
    "coordinates": [
      -109.987,
      31.921
    ]
  },
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
  },
  {
    "name": "Horseshoe Canyon Ranch",
    "note": "Sandstone, so give it plenty of time to dry so it doesn't get damaged.",
    "mountainProject": "https://www.mountainproject.com/area/105903004/horseshoe-canyon-ranch",
    "station": "KHRO",
    "office": "LZK/44,127",
    "coordinates": [
      -93.292,
      36.012
    ]
  },
  {
    "name": "Last Chance Canyon",
    "note": "Limestone",
    "mountainProject": "https://www.mountainproject.com/area/105920274/last-chance-canyon",
    "station": "KGDP",
    "office": "MAF/16,149",
    "coordinates": [
      -104.754,
      32.234
    ]
  },
  {
    "name": "Georgetown",
    "note": "Porous limestone that can take a couple days to dry out.",
    "mountainProject": "https://www.mountainproject.com/area/106715082/georgetown-hospital",
    "station": "KGTU",
    "office": "EWX/157,106",
    "coordinates": [
      -97.69,
      30.627
    ]
  },
  {
    "name": "McKinney Falls",
    "note": "Porous limestone that can take a couple days to dry out.",
    "mountainProject": "https://www.mountainproject.com/area/106265889/mckinney-falls-state-park",
    "station": "KAUS",
    "office": "EWX/156,86",
    "coordinates": [
      -97.722,
      30.181
    ]
  },
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


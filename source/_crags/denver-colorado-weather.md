---
### THIS FILE IS AUTO-GENERATED - DO NOT EDIT ###
layout: page
title: Denver, Colorado Climbing Weather - Current, Past, and Forecasted Report
title_override: Denver, Colorado<br /><small>Climbing Weather</small>
description: A lightweight climbing weather report for crags near Denver, Colorado. Optimized for slow internet connections.
js_includes:
  - weather.js
---

<section class="measure center lh-copy f5-ns f6 ph2 mv4" style="text-align: justify;">
<strong>"Is it dry?"</strong>, an oft-repeated, age-old question. Here are real-time,
precipitation-focused reports of current, past, and forecasted climbing weather for crags near Denver, Colorado, sourced
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
          <input id="metro" name="metro" type="hidden" value="Denver, Colorado">
          <input id="mp-url" name="mp-url" class="input-reset ba b--moon-gray pa2 mb2 db w-100" placeholder="https://www.mountainproject.com/area/105833381/yosemite-national-park" type="text">
        <div class="mt3"><input class="b ph3 pv2 input-reset ba b--black bg-white grow pointer f6" type="submit" value="Submit"></div>
      </form>
    </section>
</section>
<section id="weather" data-metro data-crag="denver-colorado" class="mv4-ns mv3 ph2 center"></section>
<script>
  var weekly_BOU_53_62 = null
  var hourly_BOU_53_62 = {"correlationId":"e701b1b","title":"Forecast Grid Expired","type":"https://api.weather.gov/problems/ForecastGridExpired","status":503,"detail":"The requested forecast grid was issued 2021-03-29T03:16:41+00:00 and has expired.","instance":"https://api.weather.gov/requests/e701b1b"}
  var weekly_BOU_48_51 = null
  var hourly_BOU_48_51 = {"correlationId":"b9bb3dd","title":"Forecast Grid Expired","type":"https://api.weather.gov/problems/ForecastGridExpired","status":503,"detail":"The requested forecast grid was issued 2021-03-29T03:16:41+00:00 and has expired.","instance":"https://api.weather.gov/requests/b9bb3dd"}
  var weekly_GJT_165_110 = null
  var hourly_GJT_165_110 = {"correlationId":"999617c","title":"Forecast Grid Expired","type":"https://api.weather.gov/problems/ForecastGridExpired","status":503,"detail":"The requested forecast grid was issued 2021-03-29T09:34:44+00:00 and has expired.","instance":"https://api.weather.gov/requests/999617c"}
  var weekly_GJT_162_97 = null
  var hourly_GJT_162_97 = {"correlationId":"d59c1b","title":"Forecast Grid Expired","type":"https://api.weather.gov/problems/ForecastGridExpired","status":503,"detail":"The requested forecast grid was issued 2021-03-29T09:34:44+00:00 and has expired.","instance":"https://api.weather.gov/requests/d59c1b"}
  var weekly_GJT_60_82 = null
  var hourly_GJT_60_82 = {"correlationId":"b9bca7b","title":"Forecast Grid Expired","type":"https://api.weather.gov/problems/ForecastGridExpired","status":503,"detail":"The requested forecast grid was issued 2021-03-29T09:34:44+00:00 and has expired.","instance":"https://api.weather.gov/requests/b9bca7b"}
  var weekly_BOU_46_92 = null
  var hourly_BOU_46_92 = {"correlationId":"ba379a6","title":"Forecast Grid Expired","type":"https://api.weather.gov/problems/ForecastGridExpired","status":503,"detail":"The requested forecast grid was issued 2021-03-29T03:16:41+00:00 and has expired.","instance":"https://api.weather.gov/requests/ba379a6"}
  var weekly_GJT_152_72 = null
  var hourly_GJT_152_72 = {"correlationId":"139a35ba","title":"Forecast Grid Expired","type":"https://api.weather.gov/problems/ForecastGridExpired","status":503,"detail":"The requested forecast grid was issued 2021-03-29T09:34:44+00:00 and has expired.","instance":"https://api.weather.gov/requests/139a35ba"}
  var crags_config = [
  {
    "name": "Clear Creek Canyon",
    "note": "Relatively solid gneiss and schist to sandy granite.",
    "mountainProject": "https://www.mountainproject.com/area/105744243/clear-creek-canyon",
    "station": "KBJC",
    "office": "BOU/53,62",
    "coordinates": [
      -105.243,
      39.754
    ]
  },
  {
    "name": "Staunton State Park",
    "note": "Interesting and featured rock",
    "mountainProject": "https://www.mountainproject.com/area/107838839/staunton-state-park",
    "station": "KAPA",
    "office": "BOU/48,51",
    "coordinates": [
      -105.379,
      39.499
    ]
  },
  {
    "name": "Lime Park (Lime Creek)",
    "note": "Great limestone.",
    "mountainProject": "https://www.mountainproject.com/area/105744451/lime-park-aka-lime-creek",
    "station": "CO092",
    "office": "GJT/165,110",
    "coordinates": [
      -106.656,
      39.408
    ]
  },
  {
    "name": "Independence Pass",
    "note": "Ultra-worthy granite.",
    "mountainProject": "https://www.mountainproject.com/area/105744331/independence-pass",
    "station": "IDPC2",
    "office": "GJT/162,97",
    "coordinates": [
      -106.704,
      39.119
    ]
  },
  {
    "name": "Moab",
    "note": "Soft sandstone in a desert environment.",
    "mountainProject": "https://www.mountainproject.com/area/105716711/moab-area",
    "station": "MOAB",
    "office": "GJT/60,82",
    "coordinates": [
      -109.550,
      38.573
    ]
  },
  {
    "name": "Estes Park Valley",
    "note": "Good variety of granitic, gneiss, and schist crags.",
    "mountainProject": "https://www.mountainproject.com/area/105801865/estes-park-valley",
    "station": "KLMO",
    "office": "BOU/46,92",
    "coordinates": [
      -105.513,
      40.397
    ]
  },
  {
    "name": "Gunnison",
    "note": "Granite.",
    "mountainProject": "https://www.mountainproject.com/area/105802040/gunnison",
    "station": "KGUC",
    "office": "GJT/152,72",
    "coordinates": [
      -106.927,
      38.546
    ]
  }
]</script>
<section id="nearby" class="tc lh-copy">
  <h3>Other Metros</h3>
  <select class="ma1 bg-near-white pa2" id="stateSel">
    <option value="Texas">Texas</option>
    <option value="Washington">Washington</option>
    <option value="Colorado" selected>Colorado</option>
    <option value="Tennessee">Tennessee</option>
    <option value="Utah">Utah</option>
    <option value="California">California</option>
  </select>
  <select class="ma1 bg-near-white pa2" id="citySel">
    <option value="Denver" selected>Denver</option>
  </select>
  <a id="selectMetro" class="f6 link dim ph3 pv2 ma1 dib white bg-light-red" href="/crags/denver-colorado-weather.html">Select Metro</a>
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


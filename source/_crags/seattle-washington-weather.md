---
### THIS FILE IS AUTO-GENERATED - DO NOT EDIT ###
layout: page
title: Seattle, Washington Climbing Weather - Current, Past, and Forecasted
title_override: Seattle, Washington<br /><small>Climbing Weather</small>
description: A lightweight climbing weather report for crags near Seattle, Washington. Optimized for slow internet connections.
js_includes:
  - weather.js
---

<section class="measure center lh-copy f5-ns f6 ph2 mv4" style="text-align: justify;">
<strong>"Is it dry?"</strong>, an oft-repeated, age-old question. Here are real-time,
precipitation-focused reports of current, past, and forecasted climbing weather for crags near Seattle, Washington, sourced
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
          <input id="metro" name="metro" type="hidden" value="Seattle, Washington">
          <input id="mp-url" name="mp-url" class="input-reset ba b--moon-gray pa2 mb2 db w-100" placeholder="https://www.mountainproject.com/area/105833381/yosemite-national-park" type="text">
        <div class="mt3"><input class="b ph3 pv2 input-reset ba b--black bg-white grow pointer f6" type="submit" value="Submit"></div>
      </form>
    </section>
</section>
<section id="weather" data-metro data-crag="seattle-washington" class="mv4-ns mv3 ph2 center"></section>
<script>
  var weekly_OTX_35_103 = false
  var hourly_OTX_35_103 = false
  var weekly_PDT_70_159 = false
  var hourly_PDT_70_159 = false
  var weekly_OTX_54_74 = false
  var hourly_OTX_54_74 = false
  var weekly_SEW_123_109 = false
  var hourly_SEW_123_109 = false
  var weekly_SEW_150_72 = false
  var hourly_SEW_150_72 = false
  var weekly_SEW_151_89 = false
  var hourly_SEW_151_89 = false
  var weekly_PDT_43_53 = false
  var hourly_PDT_43_53 = false
  var weekly_PDT_48_73 = false
  var hourly_PDT_48_73 = false
  var crags_config = [
  {
    "name": "Icicle Creek",
    "note": "Granite, so exposed areas dry fast.",
    "mountainProject": "https://www.mountainproject.com/area/105790237/icicle-creek",
    "station": "KEAT",
    "office": "OTX/35,103",
    "coordinates": [
      -120.711,
      47.543
    ]
  },
  {
    "name": "Tieton River Rock",
    "note": "Mostly andesite (similar to basalt).",
    "mountainProject": "https://www.mountainproject.com/area/105921237/tieton-river",
    "station": "AT095",
    "office": "PDT/70,159",
    "coordinates": [
      -120.958,
      46.684
    ]
  },
  {
    "name": "Vantage",
    "note": "The rocks are basalt.",
    "mountainProject": "https://www.mountainproject.com/map/105792231/vantage-frenchman-coulee",
    "station": "KEAT",
    "office": "OTX/54,74",
    "coordinates": [
      -119.969,
      47.025
    ]
  },
  {
    "name": "Mount Erie",
    "note": "Highly textured and featured diorite.",
    "mountainProject": "https://www.mountainproject.com/area/106413714/mount-erie",
    "station": "KNUW",
    "office": "SEW/123,109",
    "coordinates": [
      -122.627,
      48.453
    ]
  },
  {
    "name": "Index",
    "note": "Fine-grained granite",
    "mountainProject": "https://www.mountainproject.com/area/105790635/index",
    "station": "TSTEV",
    "office": "SEW/150,72",
    "coordinates": [
      -121.556,
      47.82
    ]
  },
  {
    "name": "Darrington",
    "note": "A collection of granite domes",
    "mountainProject": "https://www.mountainproject.com/area/106006698/darrington",
    "station": "KAWO",
    "office": "SEW/151,89",
    "coordinates": [
      -121.638,
      48.161
    ]
  },
  {
    "name": "Smith Rock",
    "note": "Volcanic welded tuff with surrounding bands of columnar basalt.",
    "mountainProject": "https://www.mountainproject.com/area/105788989/smith-rock",
    "station": "KRDM",
    "office": "PDT/43,53",
    "coordinates": [
      -121.143,
      44.366
    ]
  },
  {
    "name": "Trout Creek",
    "note": "Large basalt columns.",
    "mountainProject": "https://www.mountainproject.com/area/106505473/trout-creek",
    "station": "KS33",
    "office": "PDT/48,73",
    "coordinates": [
      -121.095,
      44.816
    ]
  }
]</script>
<section id="nearby" class="tc lh-copy">
  <h3>Other Metros</h3>
  <select class="ma1 bg-near-white pa2" id="stateSel">
    <option value="Texas">Texas</option>
    <option value="Washington" selected>Washington</option>
    <option value="Colorado">Colorado</option>
    <option value="Tennessee">Tennessee</option>
    <option value="Utah">Utah</option>
    <option value="California">California</option>
  </select>
  <select class="ma1 bg-near-white pa2" id="citySel">
    <option value="Seattle" selected>Seattle</option>
  </select>
  <a id="selectMetro" class="f6 link dim ph3 pv2 ma1 dib white bg-light-red" href="/crags/seattle-washington-weather.html">Select Metro</a>
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


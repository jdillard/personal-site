---
### THIS FILE IS AUTO-GENERATED - DO NOT EDIT ###
layout: page
title: Nashville, Tennessee Climbing Weather - Current, Past, and Forecasted Report
title_override: Nashville, Tennessee<br /><small>Climbing Weather</small>
description: A lightweight climbing weather report for crags near Nashville, Tennessee. Optimized for slow internet connections.
js_includes:
  - weather.js
---

<section class="measure center lh-copy f5-ns f6 ph2 mv4" style="text-align: justify;">
<strong>"Is it dry?"</strong>, an oft-repeated, age-old question. Here are real-time,
precipitation-focused reports of current, past, and forecasted climbing weather for crags near Nashville, Tennessee, sourced
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
    <section class="cb ph5  center">
      <hr class="mw5 p0 mb3 o-70 b0 bt b--light-red light-red bg-light-red">
      <h3>Submit a New Area</h3>
      <form class="black-80" name="new-crag" data-netlify="true">
          <label for="mp-url" class="f6 b db mb2">Mountain Project Area URL</label>
          <input id="metro" name="metro" type="hidden" value="Nashville, Tennessee">
          <input id="mp-url" name="mp-url" class="input-reset ba b--black-20 pa2 mb2 db w-100" placeholder="https://www.mountainproject.com/area/105833381/yosemite-national-park" type="text">
        <div class="mt3"><input class="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6" type="submit" value="Submit"></div>
      </form>
    </section>
</section>
<section id="weather" data-crag="nashville-tennessee" class="mv4-ns mv3 ph2 center"></section>
<section id="nearby" class="tc lh-copy">
  <h3>Other Metros</h3>
  <select class="ma1 bg-near-white pa2" id="stateSel">
    <option value="Texas">Texas</option>
    <option value="Washington">Washington</option>
    <option value="Colorado">Colorado</option>
    <option value="Tennessee" selected>Tennessee</option>
    <option value="Utah">Utah</option>
    <option value="California">California</option>
  </select>
  <select class="ma1 bg-near-white pa2" id="citySel">
    <option value="Nashville" selected>Nashville</option>
  </select>
  <a id="selectMetro" class="f6 link dim ph3 pv2 ma1 dib white bg-light-red" href="/crags/nashville-tennessee-weather.html">Select Metro</a>
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


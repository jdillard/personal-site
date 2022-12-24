---
### THIS FILE IS AUTO-GENERATED - DO NOT EDIT ###
layout: page
title: Jackson Falls, Illinois Climbing Weather - Current, Past, and Forecasted Report
title_override: Jackson Falls<br /><small>Climbing Weather</small>
description: A lightweight weather report for Jackson Falls, Illinois. Optimized for slow internet connections.
js_includes:
  - weather.js
---

<section class="measure center lh-copy f5-ns f6 ph2 mv4" style="text-align: justify;">
<strong>"Is it dry?"</strong>, an oft-repeated, age-old question. Here are real-time,
precipitation-focused reports of current, past, and forecasted climbing weather for Jackson Falls, Illinois.
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
<section id="weather" data-crag="jackson-falls-illinois" class="mv4-ns mv3 ph2 center"></section>
<section id="nearby" class="tc lh-copy">
  <h3>Nearby Crags</h3>
<a class="nowrap no-underline fancy-link relative light-red mh3" href="/crags/red-river-gorge-kentucky-weather.html">Red River Gorge</a>
<a class="nowrap no-underline fancy-link relative light-red mh3" href="/crags/foster-falls-tennessee-weather.html">Foster Falls</a>
<a class="nowrap no-underline fancy-link relative light-red mh3" href="/crags/seneca-rocks-west-virginia-weather.html">Seneca Rocks</a>
</section>
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

<script>
  var weekly_PAH_116_58 = {"updated":"2022-12-24T08:15:21+00:00","units":"us","forecastGenerator":"BaselineForecastGenerator","generatedAt":"2022-12-24T08:35:22+00:00","updateTime":"2022-12-24T08:15:21+00:00","validTimes":"2022-12-24T02:00:00+00:00/P7DT23H","elevation":{"unitCode":"wmoUnit:m","value":99.9744},"periods":[{"number":1,"name":"Overnight","startTime":"2022-12-24T02:00:00-06:00","endTime":"2022-12-24T06:00:00-06:00","isDaytime":false,"temperature":5,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"10 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/night/cold?size=medium","shortForecast":"Mostly Clear","detailedForecast":"Mostly clear, with a low around 5. Wind chill values as low as -9. West wind around 10 mph, with gusts as high as 20 mph."},{"number":2,"name":"Saturday","startTime":"2022-12-24T06:00:00-06:00","endTime":"2022-12-24T18:00:00-06:00","isDaytime":true,"temperature":22,"temperatureUnit":"F","temperatureTrend":"falling","windSpeed":"8 to 13 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/day/few?size=medium","shortForecast":"Sunny","detailedForecast":"Sunny. High near 22, with temperatures falling to around 20 in the afternoon. Wind chill values as low as -8. West wind 8 to 13 mph, with gusts as high as 22 mph."},{"number":3,"name":"Saturday Night","startTime":"2022-12-24T18:00:00-06:00","endTime":"2022-12-25T06:00:00-06:00","isDaytime":false,"temperature":7,"temperatureUnit":"F","temperatureTrend":"rising","windSpeed":"7 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/night/cold?size=medium","shortForecast":"Mostly Clear","detailedForecast":"Mostly clear. Low around 7, with temperatures rising to around 9 overnight. West wind around 7 mph."},{"number":4,"name":"Christmas Day","startTime":"2022-12-25T06:00:00-06:00","endTime":"2022-12-25T18:00:00-06:00","isDaytime":true,"temperature":26,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"3 to 7 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/day/skc?size=medium","shortForecast":"Sunny","detailedForecast":"Sunny, with a high near 26. Wind chill values as low as -1. West wind 3 to 7 mph."},{"number":5,"name":"Sunday Night","startTime":"2022-12-25T18:00:00-06:00","endTime":"2022-12-26T06:00:00-06:00","isDaytime":false,"temperature":15,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"2 to 7 mph","windDirection":"SSW","icon":"https://api.weather.gov/icons/land/night/bkn/snow,20?size=medium","shortForecast":"Mostly Cloudy then Slight Chance Light Snow","detailedForecast":"A slight chance of snow after midnight. Mostly cloudy, with a low around 15. South southwest wind 2 to 7 mph. Chance of precipitation is 20%. New snow accumulation of less than one inch possible."},{"number":6,"name":"Monday","startTime":"2022-12-26T06:00:00-06:00","endTime":"2022-12-26T18:00:00-06:00","isDaytime":true,"temperature":32,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"3 to 10 mph","windDirection":"SW","icon":"https://api.weather.gov/icons/land/day/snow,70/snow,30?size=medium","shortForecast":"Light Snow Likely","detailedForecast":"Snow likely. Mostly cloudy, with a high near 32. Southwest wind 3 to 10 mph, with gusts as high as 18 mph. Chance of precipitation is 70%. New snow accumulation of around one inch possible."},{"number":7,"name":"Monday Night","startTime":"2022-12-26T18:00:00-06:00","endTime":"2022-12-27T06:00:00-06:00","isDaytime":false,"temperature":16,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"2 mph","windDirection":"NW","icon":"https://api.weather.gov/icons/land/night/bkn?size=medium","shortForecast":"Mostly Cloudy","detailedForecast":"Mostly cloudy, with a low around 16. Northwest wind around 2 mph."},{"number":8,"name":"Tuesday","startTime":"2022-12-27T06:00:00-06:00","endTime":"2022-12-27T18:00:00-06:00","isDaytime":true,"temperature":32,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"5 mph","windDirection":"ENE","icon":"https://api.weather.gov/icons/land/day/sct?size=medium","shortForecast":"Mostly Sunny","detailedForecast":"Mostly sunny, with a high near 32. East northeast wind around 5 mph."},{"number":9,"name":"Tuesday Night","startTime":"2022-12-27T18:00:00-06:00","endTime":"2022-12-28T06:00:00-06:00","isDaytime":false,"temperature":23,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"3 to 9 mph","windDirection":"S","icon":"https://api.weather.gov/icons/land/night/sct?size=medium","shortForecast":"Partly Cloudy","detailedForecast":"Partly cloudy, with a low around 23. South wind 3 to 9 mph."},{"number":10,"name":"Wednesday","startTime":"2022-12-28T06:00:00-06:00","endTime":"2022-12-28T18:00:00-06:00","isDaytime":true,"temperature":50,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"10 to 14 mph","windDirection":"S","icon":"https://api.weather.gov/icons/land/day/bkn?size=medium","shortForecast":"Partly Sunny","detailedForecast":"Partly sunny, with a high near 50. South wind 10 to 14 mph, with gusts as high as 25 mph."},{"number":11,"name":"Wednesday Night","startTime":"2022-12-28T18:00:00-06:00","endTime":"2022-12-29T06:00:00-06:00","isDaytime":false,"temperature":43,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"14 mph","windDirection":"S","icon":"https://api.weather.gov/icons/land/night/bkn/rain?size=medium","shortForecast":"Mostly Cloudy then Slight Chance Light Rain","detailedForecast":"A slight chance of rain after midnight. Mostly cloudy, with a low around 43. South wind around 14 mph, with gusts as high as 28 mph."},{"number":12,"name":"Thursday","startTime":"2022-12-29T06:00:00-06:00","endTime":"2022-12-29T18:00:00-06:00","isDaytime":true,"temperature":58,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"13 to 16 mph","windDirection":"S","icon":"https://api.weather.gov/icons/land/day/rain?size=medium","shortForecast":"Slight Chance Light Rain","detailedForecast":"A slight chance of rain. Mostly cloudy, with a high near 58. South wind 13 to 16 mph, with gusts as high as 28 mph."},{"number":13,"name":"Thursday Night","startTime":"2022-12-29T18:00:00-06:00","endTime":"2022-12-30T06:00:00-06:00","isDaytime":false,"temperature":48,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"12 mph","windDirection":"S","icon":"https://api.weather.gov/icons/land/night/rain?size=medium","shortForecast":"Chance Light Rain","detailedForecast":"A chance of rain. Mostly cloudy, with a low around 48. South wind around 12 mph, with gusts as high as 22 mph."},{"number":14,"name":"Friday","startTime":"2022-12-30T06:00:00-06:00","endTime":"2022-12-30T18:00:00-06:00","isDaytime":true,"temperature":59,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"8 to 12 mph","windDirection":"S","icon":"https://api.weather.gov/icons/land/day/rain?size=medium","shortForecast":"Light Rain Likely","detailedForecast":"Rain likely. Cloudy, with a high near 59. South wind 8 to 12 mph, with gusts as high as 22 mph."}]}
  var hourly_PAH_116_58 = false
  var crags_config = [
  {
    "name": "Jackson Falls",
    "note": "The walls offer slopers, various sized pockets, roofs, and slabs.",
    "mountainProject": "https://www.mountainproject.com/area/106017458/jackson-falls",
    "station": "KPAH",
    "office": "PAH/116,58",
    "coordinates": [
      -88.682,
      37.510
    ]
  }
]</script>

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
  var weekly_PAH_116_58 = {"updated":"2023-01-02T07:45:13+00:00","units":"us","forecastGenerator":"BaselineForecastGenerator","generatedAt":"2023-01-02T08:36:11+00:00","updateTime":"2023-01-02T07:45:13+00:00","validTimes":"2023-01-02T01:00:00+00:00/P8D","elevation":{"unitCode":"wmoUnit:m","value":99.9744},"periods":[{"number":1,"name":"Overnight","startTime":"2023-01-02T02:00:00-06:00","endTime":"2023-01-02T06:00:00-06:00","isDaytime":false,"temperature":46,"temperatureUnit":"F","temperatureTrend":"rising","windSpeed":"6 mph","windDirection":"S","icon":"https://api.weather.gov/icons/land/night/ovc?size=medium","shortForecast":"Cloudy","detailedForecast":"Cloudy. Low around 46, with temperatures rising to around 56 overnight. South wind around 6 mph."},{"number":2,"name":"Monday","startTime":"2023-01-02T06:00:00-06:00","endTime":"2023-01-02T18:00:00-06:00","isDaytime":true,"temperature":68,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"6 to 10 mph","windDirection":"S","icon":"https://api.weather.gov/icons/land/day/rain,20/tsra,60?size=medium","shortForecast":"Areas Of Fog then Chance Showers And Thunderstorms","detailedForecast":"Areas of fog and a slight chance of rain before noon, then a slight chance of rain showers between noon and 3pm, then a chance of showers and thunderstorms between 3pm and 5pm, then showers and thunderstorms likely. Cloudy, with a high near 68. South wind 6 to 10 mph, with gusts as high as 20 mph. Chance of precipitation is 60%."},{"number":3,"name":"Monday Night","startTime":"2023-01-02T18:00:00-06:00","endTime":"2023-01-03T06:00:00-06:00","isDaytime":false,"temperature":61,"temperatureUnit":"F","temperatureTrend":"rising","windSpeed":"10 to 20 mph","windDirection":"S","icon":"https://api.weather.gov/icons/land/night/tsra,100?size=medium","shortForecast":"Showers And Thunderstorms","detailedForecast":"Showers and thunderstorms. Some of the storms could produce heavy rain. Cloudy. Low around 61, with temperatures rising to around 64 overnight. South wind 10 to 20 mph, with gusts as high as 37 mph. Chance of precipitation is 100%."},{"number":4,"name":"Tuesday","startTime":"2023-01-03T06:00:00-06:00","endTime":"2023-01-03T18:00:00-06:00","isDaytime":true,"temperature":68,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"12 to 17 mph","windDirection":"SSW","icon":"https://api.weather.gov/icons/land/day/tsra_sct,50/tsra_sct,20?size=medium","shortForecast":"Chance Showers And Thunderstorms","detailedForecast":"A chance of showers and thunderstorms. Mostly cloudy, with a high near 68. South southwest wind 12 to 17 mph, with gusts as high as 28 mph. Chance of precipitation is 50%."},{"number":5,"name":"Tuesday Night","startTime":"2023-01-03T18:00:00-06:00","endTime":"2023-01-04T06:00:00-06:00","isDaytime":false,"temperature":43,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"6 to 10 mph","windDirection":"WSW","icon":"https://api.weather.gov/icons/land/night/sct?size=medium","shortForecast":"Partly Cloudy","detailedForecast":"Partly cloudy, with a low around 43. West southwest wind 6 to 10 mph, with gusts as high as 21 mph."},{"number":6,"name":"Wednesday","startTime":"2023-01-04T06:00:00-06:00","endTime":"2023-01-04T18:00:00-06:00","isDaytime":true,"temperature":51,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"6 to 10 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/day/sct?size=medium","shortForecast":"Mostly Sunny","detailedForecast":"Mostly sunny, with a high near 51. West wind 6 to 10 mph, with gusts as high as 21 mph."},{"number":7,"name":"Wednesday Night","startTime":"2023-01-04T18:00:00-06:00","endTime":"2023-01-05T06:00:00-06:00","isDaytime":false,"temperature":32,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"6 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/night/sct?size=medium","shortForecast":"Partly Cloudy","detailedForecast":"Partly cloudy, with a low around 32. West wind around 6 mph."},{"number":8,"name":"Thursday","startTime":"2023-01-05T06:00:00-06:00","endTime":"2023-01-05T18:00:00-06:00","isDaytime":true,"temperature":40,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"6 to 9 mph","windDirection":"WNW","icon":"https://api.weather.gov/icons/land/day/bkn?size=medium","shortForecast":"Partly Sunny","detailedForecast":"Partly sunny, with a high near 40. West northwest wind 6 to 9 mph, with gusts as high as 18 mph."},{"number":9,"name":"Thursday Night","startTime":"2023-01-05T18:00:00-06:00","endTime":"2023-01-06T06:00:00-06:00","isDaytime":false,"temperature":27,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"5 mph","windDirection":"WNW","icon":"https://api.weather.gov/icons/land/night/sct?size=medium","shortForecast":"Partly Cloudy","detailedForecast":"Partly cloudy, with a low around 27. West northwest wind around 5 mph."},{"number":10,"name":"Friday","startTime":"2023-01-06T06:00:00-06:00","endTime":"2023-01-06T18:00:00-06:00","isDaytime":true,"temperature":43,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"5 mph","windDirection":"WSW","icon":"https://api.weather.gov/icons/land/day/few?size=medium","shortForecast":"Sunny","detailedForecast":"Sunny, with a high near 43. West southwest wind around 5 mph."},{"number":11,"name":"Friday Night","startTime":"2023-01-06T18:00:00-06:00","endTime":"2023-01-07T06:00:00-06:00","isDaytime":false,"temperature":33,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"2 to 6 mph","windDirection":"S","icon":"https://api.weather.gov/icons/land/night/bkn?size=medium","shortForecast":"Mostly Cloudy","detailedForecast":"Mostly cloudy, with a low around 33. South wind 2 to 6 mph."},{"number":12,"name":"Saturday","startTime":"2023-01-07T06:00:00-06:00","endTime":"2023-01-07T18:00:00-06:00","isDaytime":true,"temperature":48,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"8 mph","windDirection":"S","icon":"https://api.weather.gov/icons/land/day/rain?size=medium","shortForecast":"Slight Chance Light Rain","detailedForecast":"A slight chance of rain. Mostly cloudy, with a high near 48. South wind around 8 mph."},{"number":13,"name":"Saturday Night","startTime":"2023-01-07T18:00:00-06:00","endTime":"2023-01-08T06:00:00-06:00","isDaytime":false,"temperature":37,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"6 mph","windDirection":"SW","icon":"https://api.weather.gov/icons/land/night/rain?size=medium","shortForecast":"Slight Chance Light Rain","detailedForecast":"A slight chance of rain. Mostly cloudy, with a low around 37. Southwest wind around 6 mph."},{"number":14,"name":"Sunday","startTime":"2023-01-08T06:00:00-06:00","endTime":"2023-01-08T18:00:00-06:00","isDaytime":true,"temperature":49,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"3 to 7 mph","windDirection":"WNW","icon":"https://api.weather.gov/icons/land/day/bkn?size=medium","shortForecast":"Partly Sunny","detailedForecast":"Partly sunny, with a high near 49. West northwest wind 3 to 7 mph."}]}
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

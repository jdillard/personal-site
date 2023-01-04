---
### THIS FILE IS AUTO-GENERATED - DO NOT EDIT ###
layout: page
title: Estes Park Valley, Colorado Climbing Weather - Current, Past, and Forecasted Report
title_override: Estes Park Valley<br /><small>Climbing Weather</small>
description: A lightweight weather report for Estes Park Valley, Colorado. Optimized for slow internet connections.
js_includes:
  - weather.js
---

<section class="measure center lh-copy f5-ns f6 ph2 mv4" style="text-align: justify;">
<strong>"Is it dry?"</strong>, an oft-repeated, age-old question. Here are real-time,
precipitation-focused reports of current, past, and forecasted climbing weather for Estes Park Valley, Colorado.
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
<section id="weather" data-crag="estes-park-valley-colorado" class="mv4-ns mv3 ph2 center"></section>
<section id="nearby" class="tc lh-copy">
  <h3>Nearby Crags</h3>
<a class="nowrap no-underline fancy-link relative light-red mh3" href="/crags/clear-creek-canyon-colorado-weather.html">Clear Creek Canyon</a>
<a class="nowrap no-underline fancy-link relative light-red mh3" href="/crags/staunton-state-park-colorado-weather.html">Staunton State Park</a>
<a class="nowrap no-underline fancy-link relative light-red mh3" href="/crags/lime-park-lime-creek-colorado-weather.html">Lime Park (Lime Creek)</a>
<a class="nowrap no-underline fancy-link relative light-red mh3" href="/crags/independence-pass-colorado-weather.html">Independence Pass</a>
<a class="nowrap no-underline fancy-link relative light-red mh3" href="/crags/moab-utah-weather.html">Moab</a>
<a class="nowrap no-underline fancy-link relative light-red mh3" href="/crags/gunnison-colorado-weather.html">Gunnison</a>
</section>
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

<script>
  var weekly_BOU_46_92 = {"updated":"2023-01-04T03:55:37+00:00","units":"us","forecastGenerator":"BaselineForecastGenerator","generatedAt":"2023-01-04T08:36:36+00:00","updateTime":"2023-01-04T03:55:37+00:00","validTimes":"2023-01-03T21:00:00+00:00/P7DT4H","elevation":{"unitCode":"wmoUnit:m","value":2542.9464},"periods":[{"number":1,"name":"Overnight","startTime":"2023-01-04T01:00:00-07:00","endTime":"2023-01-04T06:00:00-07:00","isDaytime":false,"temperature":13,"temperatureUnit":"F","temperatureTrend":"rising","windSpeed":"23 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/night/blizzard?size=medium","shortForecast":"Patchy Blowing Snow","detailedForecast":"Patchy blowing snow after 5am. Mostly cloudy. Low around 13, with temperatures rising to around 16 overnight. Wind chill values as low as -4. West wind around 23 mph, with gusts as high as 35 mph."},{"number":2,"name":"Wednesday","startTime":"2023-01-04T06:00:00-07:00","endTime":"2023-01-04T18:00:00-07:00","isDaytime":true,"temperature":28,"temperatureUnit":"F","temperatureTrend":"falling","windSpeed":"21 to 26 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/day/blizzard?size=medium","shortForecast":"Patchy Blowing Snow","detailedForecast":"Patchy blowing snow before 5pm. Mostly sunny. High near 28, with temperatures falling to around 24 in the afternoon. Wind chill values as low as -2. West wind 21 to 26 mph, with gusts as high as 40 mph."},{"number":3,"name":"Wednesday Night","startTime":"2023-01-04T18:00:00-07:00","endTime":"2023-01-05T06:00:00-07:00","isDaytime":false,"temperature":16,"temperatureUnit":"F","temperatureTrend":"rising","windSpeed":"16 to 26 mph","windDirection":"WSW","icon":"https://api.weather.gov/icons/land/night/wind_few?size=medium","shortForecast":"Mostly Clear","detailedForecast":"Mostly clear. Low around 16, with temperatures rising to around 23 overnight. West southwest wind 16 to 26 mph, with gusts as high as 40 mph."},{"number":4,"name":"Thursday","startTime":"2023-01-05T06:00:00-07:00","endTime":"2023-01-05T18:00:00-07:00","isDaytime":true,"temperature":40,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"16 to 22 mph","windDirection":"WSW","icon":"https://api.weather.gov/icons/land/day/wind_sct?size=medium","shortForecast":"Mostly Sunny","detailedForecast":"Mostly sunny, with a high near 40. West southwest wind 16 to 22 mph, with gusts as high as 35 mph."},{"number":5,"name":"Thursday Night","startTime":"2023-01-05T18:00:00-07:00","endTime":"2023-01-06T06:00:00-07:00","isDaytime":false,"temperature":25,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"21 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/night/wind_sct/snow,20?size=medium","shortForecast":"Partly Cloudy then Slight Chance Light Snow","detailedForecast":"A slight chance of snow after 5am. Partly cloudy, with a low around 25. West wind around 21 mph, with gusts as high as 30 mph. Chance of precipitation is 20%."},{"number":6,"name":"Friday","startTime":"2023-01-06T06:00:00-07:00","endTime":"2023-01-06T18:00:00-07:00","isDaytime":true,"temperature":38,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"15 to 18 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/day/snow,50?size=medium","shortForecast":"Chance Light Snow","detailedForecast":"A chance of snow. Partly sunny, with a high near 38. Chance of precipitation is 50%. Little or no snow accumulation expected."},{"number":7,"name":"Friday Night","startTime":"2023-01-06T18:00:00-07:00","endTime":"2023-01-07T06:00:00-07:00","isDaytime":false,"temperature":22,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"20 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/night/snow,20/bkn?size=medium","shortForecast":"Slight Chance Light Snow then Mostly Cloudy","detailedForecast":"A slight chance of snow before 11pm. Mostly cloudy, with a low around 22. Chance of precipitation is 20%."},{"number":8,"name":"Saturday","startTime":"2023-01-07T06:00:00-07:00","endTime":"2023-01-07T18:00:00-07:00","isDaytime":true,"temperature":34,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"14 to 17 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/day/sct?size=medium","shortForecast":"Mostly Sunny","detailedForecast":"Mostly sunny, with a high near 34."},{"number":9,"name":"Saturday Night","startTime":"2023-01-07T18:00:00-07:00","endTime":"2023-01-08T06:00:00-07:00","isDaytime":false,"temperature":18,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"14 to 18 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/night/few?size=medium","shortForecast":"Mostly Clear","detailedForecast":"Mostly clear, with a low around 18."},{"number":10,"name":"Sunday","startTime":"2023-01-08T06:00:00-07:00","endTime":"2023-01-08T18:00:00-07:00","isDaytime":true,"temperature":37,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"18 to 22 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/day/wind_sct?size=medium","shortForecast":"Mostly Sunny","detailedForecast":"Mostly sunny, with a high near 37."},{"number":11,"name":"Sunday Night","startTime":"2023-01-08T18:00:00-07:00","endTime":"2023-01-09T06:00:00-07:00","isDaytime":false,"temperature":21,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"23 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/night/wind_sct?size=medium","shortForecast":"Partly Cloudy","detailedForecast":"Partly cloudy, with a low around 21."},{"number":12,"name":"Monday","startTime":"2023-01-09T06:00:00-07:00","endTime":"2023-01-09T18:00:00-07:00","isDaytime":true,"temperature":36,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"21 to 25 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/day/wind_sct?size=medium","shortForecast":"Mostly Sunny","detailedForecast":"Mostly sunny, with a high near 36."},{"number":13,"name":"Monday Night","startTime":"2023-01-09T18:00:00-07:00","endTime":"2023-01-10T06:00:00-07:00","isDaytime":false,"temperature":20,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"21 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/night/wind_sct?size=medium","shortForecast":"Partly Cloudy","detailedForecast":"Partly cloudy, with a low around 20."},{"number":14,"name":"Tuesday","startTime":"2023-01-10T06:00:00-07:00","endTime":"2023-01-10T18:00:00-07:00","isDaytime":true,"temperature":40,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"18 to 22 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/day/wind_sct?size=medium","shortForecast":"Mostly Sunny","detailedForecast":"Mostly sunny, with a high near 40."}]}
  var hourly_BOU_46_92 = false
  var crags_config = [
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
  }
]</script>

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
  var weekly_BOU_46_92 = {"updated":"2022-01-01T03:19:20+00:00","units":"us","forecastGenerator":"BaselineForecastGenerator","generatedAt":"2022-01-01T08:47:40+00:00","updateTime":"2022-01-01T03:19:20+00:00","validTimes":"2021-12-31T21:00:00+00:00/P7DT4H","elevation":{"unitCode":"wmoUnit:m","value":2542.9464},"periods":[{"number":1,"name":"Overnight","startTime":"2022-01-01T01:00:00-07:00","endTime":"2022-01-01T06:00:00-07:00","isDaytime":false,"temperature":-2,"temperatureUnit":"F","temperatureTrend":"rising","windSpeed":"5 mph","windDirection":"ENE","icon":"https://api.weather.gov/icons/land/night/snow,80?size=medium","shortForecast":"Light Snow","detailedForecast":"Snow. Cloudy. Low around -2, with temperatures rising to around 2 overnight. Wind chill values as low as -8. East northeast wind around 5 mph. Chance of precipitation is 80%. New snow accumulation of around one inch possible."},{"number":2,"name":"New Year's Day","startTime":"2022-01-01T06:00:00-07:00","endTime":"2022-01-01T18:00:00-07:00","isDaytime":true,"temperature":11,"temperatureUnit":"F","temperatureTrend":"falling","windSpeed":"5 to 15 mph","windDirection":"N","icon":"https://api.weather.gov/icons/land/day/snow,60/snow,20?size=medium","shortForecast":"Light Snow Likely","detailedForecast":"Snow likely before 2pm. Partly sunny. High near 11, with temperatures falling to around 3 in the afternoon. Wind chill values as low as -16. North wind 5 to 15 mph, with gusts as high as 24 mph. Chance of precipitation is 60%. New snow accumulation of less than half an inch possible."},{"number":3,"name":"Saturday Night","startTime":"2022-01-01T18:00:00-07:00","endTime":"2022-01-02T06:00:00-07:00","isDaytime":false,"temperature":2,"temperatureUnit":"F","temperatureTrend":"rising","windSpeed":"14 to 24 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/night/cold?size=medium","shortForecast":"Mostly Clear","detailedForecast":"Mostly clear. Low around 2, with temperatures rising to around 10 overnight. Wind chill values as low as -18. West wind 14 to 24 mph, with gusts as high as 38 mph."},{"number":4,"name":"Sunday","startTime":"2022-01-02T06:00:00-07:00","endTime":"2022-01-02T18:00:00-07:00","isDaytime":true,"temperature":31,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"22 to 26 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/day/wind_few?size=medium","shortForecast":"Sunny","detailedForecast":"Sunny, with a high near 31. Wind chill values as low as -11. West wind 22 to 26 mph, with gusts as high as 36 mph."},{"number":5,"name":"Sunday Night","startTime":"2022-01-02T18:00:00-07:00","endTime":"2022-01-03T06:00:00-07:00","isDaytime":false,"temperature":20,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"18 to 23 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/night/wind_sct?size=medium","shortForecast":"Partly Cloudy","detailedForecast":"Partly cloudy, with a low around 20. West wind 18 to 23 mph, with gusts as high as 31 mph."},{"number":6,"name":"Monday","startTime":"2022-01-03T06:00:00-07:00","endTime":"2022-01-03T18:00:00-07:00","isDaytime":true,"temperature":38,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"21 to 24 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/day/wind_sct?size=medium","shortForecast":"Mostly Sunny","detailedForecast":"Mostly sunny, with a high near 38."},{"number":7,"name":"Monday Night","startTime":"2022-01-03T18:00:00-07:00","endTime":"2022-01-04T06:00:00-07:00","isDaytime":false,"temperature":24,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"22 to 25 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/night/wind_sct?size=medium","shortForecast":"Partly Cloudy","detailedForecast":"Partly cloudy, with a low around 24."},{"number":8,"name":"Tuesday","startTime":"2022-01-04T06:00:00-07:00","endTime":"2022-01-04T18:00:00-07:00","isDaytime":true,"temperature":34,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"25 to 32 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/day/wind_sct?size=medium","shortForecast":"Mostly Sunny","detailedForecast":"Mostly sunny, with a high near 34."},{"number":9,"name":"Tuesday Night","startTime":"2022-01-04T18:00:00-07:00","endTime":"2022-01-05T06:00:00-07:00","isDaytime":false,"temperature":24,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"24 to 29 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/night/snow?size=medium","shortForecast":"Chance Light Snow","detailedForecast":"A chance of snow after 11pm. Mostly cloudy, with a low around 24."},{"number":10,"name":"Wednesday","startTime":"2022-01-05T06:00:00-07:00","endTime":"2022-01-05T18:00:00-07:00","isDaytime":true,"temperature":32,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"21 to 25 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/day/snow?size=medium","shortForecast":"Light Snow Likely","detailedForecast":"Snow likely. Mostly cloudy, with a high near 32. New snow accumulation of 1 to 2 inches possible."},{"number":11,"name":"Wednesday Night","startTime":"2022-01-05T18:00:00-07:00","endTime":"2022-01-06T06:00:00-07:00","isDaytime":false,"temperature":16,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"21 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/night/snow?size=medium","shortForecast":"Light Snow Likely","detailedForecast":"Snow likely. Mostly cloudy, with a low around 16. New snow accumulation of 1 to 2 inches possible."},{"number":12,"name":"Thursday","startTime":"2022-01-06T06:00:00-07:00","endTime":"2022-01-06T18:00:00-07:00","isDaytime":true,"temperature":32,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"18 to 23 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/day/snow?size=medium","shortForecast":"Chance Light Snow","detailedForecast":"A chance of snow before 5pm. Partly sunny, with a high near 32."},{"number":13,"name":"Thursday Night","startTime":"2022-01-06T18:00:00-07:00","endTime":"2022-01-07T06:00:00-07:00","isDaytime":false,"temperature":26,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"23 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/night/wind_bkn?size=medium","shortForecast":"Mostly Cloudy","detailedForecast":"Mostly cloudy, with a low around 26."},{"number":14,"name":"Friday","startTime":"2022-01-07T06:00:00-07:00","endTime":"2022-01-07T18:00:00-07:00","isDaytime":true,"temperature":42,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"22 mph","windDirection":"WSW","icon":"https://api.weather.gov/icons/land/day/wind_sct/snow?size=medium","shortForecast":"Mostly Sunny then Slight Chance Light Snow","detailedForecast":"A slight chance of snow after 5pm. Mostly sunny, with a high near 42."}]}
  var hourly_BOU_46_92 = {"correlationId":"fa079a97","title":"Unavailable Resource","type":"https://api.weather.gov/problems/UnavailableWebService","status":503,"detail":"The resource you requested is currently unavailable.  Please try again later.","instance":"https://api.weather.gov/requests/fa079a97"}
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

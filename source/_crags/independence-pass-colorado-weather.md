---
### THIS FILE IS AUTO-GENERATED - DO NOT EDIT ###
layout: page
title: Independence Pass, Colorado Climbing Weather - Current, Past, and Forecasted
title_override: Independence Pass<br /><small>Climbing Weather</small>
description: A lightweight weather report for Independence Pass, Colorado. Optimized for slow internet connections.
js_includes:
  - weather.js
---

<section class="measure center lh-copy f5-ns f6 ph2 mv4" style="text-align: justify;">
<strong>"Is it dry?"</strong>, an oft-repeated, age-old question. Here are real-time,
precipitation-focused reports of current, past, and forecasted climbing weather for Independence Pass, Colorado.
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
<section id="weather" data-crag="independence-pass-colorado" class="mv4-ns mv3 ph2 center"></section>
<section id="nearby" class="tc lh-copy">
  <h3>Nearby Crags</h3>
<a class="nowrap no-underline fancy-link relative light-red mh3" href="/crags/clear-creek-canyon-colorado-weather.html">Clear Creek Canyon</a>
<a class="nowrap no-underline fancy-link relative light-red mh3" href="/crags/staunton-state-park-colorado-weather.html">Staunton State Park</a>
<a class="nowrap no-underline fancy-link relative light-red mh3" href="/crags/lime-park-lime-creek-colorado-weather.html">Lime Park (Lime Creek)</a>
<a class="nowrap no-underline fancy-link relative light-red mh3" href="/crags/moab-utah-weather.html">Moab</a>
<a class="nowrap no-underline fancy-link relative light-red mh3" href="/crags/estes-park-valley-colorado-weather.html">Estes Park Valley</a>
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
  var weekly_GJT_162_97 = {"units":"us","forecastGenerator":"BaselineForecastGenerator","generatedAt":"2024-09-12T08:35:14+00:00","updateTime":"2024-09-12T07:47:45+00:00","validTimes":"2024-09-12T01:00:00+00:00/P8D","elevation":{"unitCode":"wmoUnit:m","value":3193.9992},"periods":[{"number":1,"name":"Overnight","startTime":"2024-09-12T02:00:00-06:00","endTime":"2024-09-12T06:00:00-06:00","isDaytime":false,"temperature":32,"temperatureUnit":"F","temperatureTrend":"","probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"windSpeed":"5 to 15 mph","windDirection":"SW","icon":"https://api.weather.gov/icons/land/night/few?size=medium","shortForecast":"Mostly Clear","detailedForecast":"Mostly clear, with a low around 32. Southwest wind 5 to 15 mph."},{"number":2,"name":"Thursday","startTime":"2024-09-12T06:00:00-06:00","endTime":"2024-09-12T18:00:00-06:00","isDaytime":true,"temperature":58,"temperatureUnit":"F","temperatureTrend":"","probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"windSpeed":"15 to 30 mph","windDirection":"SW","icon":"https://api.weather.gov/icons/land/day/wind_few/smoke?size=medium","shortForecast":"Sunny then Areas Of Smoke","detailedForecast":"Areas of smoke after 5pm. Sunny, with a high near 58. Southwest wind 15 to 30 mph, with gusts as high as 45 mph."},{"number":3,"name":"Thursday Night","startTime":"2024-09-12T18:00:00-06:00","endTime":"2024-09-13T06:00:00-06:00","isDaytime":false,"temperature":35,"temperatureUnit":"F","temperatureTrend":"","probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"windSpeed":"10 to 25 mph","windDirection":"SW","icon":"https://api.weather.gov/icons/land/night/smoke/wind_few?size=medium","shortForecast":"Areas Of Smoke then Mostly Clear","detailedForecast":"Areas of smoke before 7pm. Mostly clear, with a low around 35. Southwest wind 10 to 25 mph, with gusts as high as 40 mph."},{"number":4,"name":"Friday","startTime":"2024-09-13T06:00:00-06:00","endTime":"2024-09-13T18:00:00-06:00","isDaytime":true,"temperature":57,"temperatureUnit":"F","temperatureTrend":"","probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"windSpeed":"10 to 20 mph","windDirection":"WSW","icon":"https://api.weather.gov/icons/land/day/few?size=medium","shortForecast":"Sunny","detailedForecast":"Sunny, with a high near 57. West southwest wind 10 to 20 mph."},{"number":5,"name":"Friday Night","startTime":"2024-09-13T18:00:00-06:00","endTime":"2024-09-14T06:00:00-06:00","isDaytime":false,"temperature":35,"temperatureUnit":"F","temperatureTrend":"","probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"windSpeed":"0 to 15 mph","windDirection":"SW","icon":"https://api.weather.gov/icons/land/night/few?size=medium","shortForecast":"Mostly Clear","detailedForecast":"Mostly clear, with a low around 35. Southwest wind 0 to 15 mph."},{"number":6,"name":"Saturday","startTime":"2024-09-14T06:00:00-06:00","endTime":"2024-09-14T18:00:00-06:00","isDaytime":true,"temperature":60,"temperatureUnit":"F","temperatureTrend":"","probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"windSpeed":"5 to 10 mph","windDirection":"SW","icon":"https://api.weather.gov/icons/land/day/few?size=medium","shortForecast":"Sunny","detailedForecast":"Sunny, with a high near 60."},{"number":7,"name":"Saturday Night","startTime":"2024-09-14T18:00:00-06:00","endTime":"2024-09-15T06:00:00-06:00","isDaytime":false,"temperature":37,"temperatureUnit":"F","temperatureTrend":"","probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"windSpeed":"0 to 10 mph","windDirection":"SSW","icon":"https://api.weather.gov/icons/land/night/few?size=medium","shortForecast":"Mostly Clear","detailedForecast":"Mostly clear, with a low around 37."},{"number":8,"name":"Sunday","startTime":"2024-09-15T06:00:00-06:00","endTime":"2024-09-15T18:00:00-06:00","isDaytime":true,"temperature":58,"temperatureUnit":"F","temperatureTrend":"","probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"windSpeed":"0 to 10 mph","windDirection":"SSE","icon":"https://api.weather.gov/icons/land/day/bkn/tsra_hi?size=medium","shortForecast":"Partly Sunny then Slight Chance Showers And Thunderstorms","detailedForecast":"A slight chance of showers and thunderstorms after noon. Partly sunny, with a high near 58."},{"number":9,"name":"Sunday Night","startTime":"2024-09-15T18:00:00-06:00","endTime":"2024-09-16T06:00:00-06:00","isDaytime":false,"temperature":36,"temperatureUnit":"F","temperatureTrend":"","probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"windSpeed":"5 mph","windDirection":"SSE","icon":"https://api.weather.gov/icons/land/night/tsra_hi?size=medium","shortForecast":"Slight Chance Showers And Thunderstorms","detailedForecast":"A slight chance of showers and thunderstorms. Partly cloudy, with a low around 36."},{"number":10,"name":"Monday","startTime":"2024-09-16T06:00:00-06:00","endTime":"2024-09-16T18:00:00-06:00","isDaytime":true,"temperature":56,"temperatureUnit":"F","temperatureTrend":"","probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"windSpeed":"5 to 10 mph","windDirection":"S","icon":"https://api.weather.gov/icons/land/day/sct/tsra_hi?size=medium","shortForecast":"Mostly Sunny then Chance Showers And Thunderstorms","detailedForecast":"A chance of showers and thunderstorms after noon. Mostly sunny, with a high near 56."},{"number":11,"name":"Monday Night","startTime":"2024-09-16T18:00:00-06:00","endTime":"2024-09-17T06:00:00-06:00","isDaytime":false,"temperature":36,"temperatureUnit":"F","temperatureTrend":"","probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"windSpeed":"10 mph","windDirection":"S","icon":"https://api.weather.gov/icons/land/night/tsra_hi?size=medium","shortForecast":"Slight Chance Showers And Thunderstorms then Chance Showers And Thunderstorms","detailedForecast":"A slight chance of showers and thunderstorms before midnight, then a chance of showers and thunderstorms. Partly cloudy, with a low around 36."},{"number":12,"name":"Tuesday","startTime":"2024-09-17T06:00:00-06:00","endTime":"2024-09-17T18:00:00-06:00","isDaytime":true,"temperature":49,"temperatureUnit":"F","temperatureTrend":"","probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"windSpeed":"10 to 15 mph","windDirection":"SW","icon":"https://api.weather.gov/icons/land/day/tsra_hi?size=medium","shortForecast":"Chance Showers And Thunderstorms then Slight Chance Showers And Thunderstorms","detailedForecast":"A chance of showers and thunderstorms before noon, then a slight chance of showers and thunderstorms. Mostly sunny, with a high near 49."},{"number":13,"name":"Tuesday Night","startTime":"2024-09-17T18:00:00-06:00","endTime":"2024-09-18T06:00:00-06:00","isDaytime":false,"temperature":29,"temperatureUnit":"F","temperatureTrend":"","probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"windSpeed":"5 to 15 mph","windDirection":"SW","icon":"https://api.weather.gov/icons/land/night/tsra_hi/snow?size=medium","shortForecast":"Slight Chance Showers And Thunderstorms then Slight Chance Snow Showers","detailedForecast":"A slight chance of showers and thunderstorms before midnight, then a slight chance of snow showers and a slight chance of thunderstorms. Partly cloudy, with a low around 29."},{"number":14,"name":"Wednesday","startTime":"2024-09-18T06:00:00-06:00","endTime":"2024-09-18T18:00:00-06:00","isDaytime":true,"temperature":52,"temperatureUnit":"F","temperatureTrend":"","probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"windSpeed":"5 to 15 mph","windDirection":"SW","icon":"https://api.weather.gov/icons/land/day/few/snow?size=medium","shortForecast":"Sunny then Slight Chance T-storms","detailedForecast":"A slight chance of thunderstorms and a slight chance of rain and snow showers after noon. Sunny, with a high near 52."}]}
  var hourly_GJT_162_97 = false
  var crags_config = [
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
  }
]</script>

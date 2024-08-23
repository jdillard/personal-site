---
### THIS FILE IS AUTO-GENERATED - DO NOT EDIT ###
layout: page
title: Staunton State Park, Colorado Climbing Weather - Current, Past, and Forecasted
title_override: Staunton State Park<br /><small>Climbing Weather</small>
description: A lightweight weather report for Staunton State Park, Colorado. Optimized for slow internet connections.
js_includes:
  - weather.js
---

<section class="measure center lh-copy f5-ns f6 ph2 mv4" style="text-align: justify;">
<strong>"Is it dry?"</strong>, an oft-repeated, age-old question. Here are real-time,
precipitation-focused reports of current, past, and forecasted climbing weather for Staunton State Park, Colorado.
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
<section id="weather" data-crag="staunton-state-park-colorado" class="mv4-ns mv3 ph2 center"></section>
<section id="nearby" class="tc lh-copy">
  <h3>Nearby Crags</h3>
<a class="nowrap no-underline fancy-link relative light-red mh3" href="/crags/clear-creek-canyon-colorado-weather.html">Clear Creek Canyon</a>
<a class="nowrap no-underline fancy-link relative light-red mh3" href="/crags/lime-park-lime-creek-colorado-weather.html">Lime Park (Lime Creek)</a>
<a class="nowrap no-underline fancy-link relative light-red mh3" href="/crags/independence-pass-colorado-weather.html">Independence Pass</a>
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
  var weekly_BOU_48_51 = {"units":"us","forecastGenerator":"BaselineForecastGenerator","generatedAt":"2024-08-23T08:34:24+00:00","updateTime":"2024-08-23T02:29:53+00:00","validTimes":"2024-08-22T20:00:00+00:00/P7DT5H","elevation":{"unitCode":"wmoUnit:m","value":2560.0152},"periods":[{"number":1,"name":"Overnight","startTime":"2024-08-23T02:00:00-06:00","endTime":"2024-08-23T06:00:00-06:00","isDaytime":false,"temperature":47,"temperatureUnit":"F","temperatureTrend":"","probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"windSpeed":"5 mph","windDirection":"WSW","icon":"https://api.weather.gov/icons/land/night/tsra_hi?size=medium","shortForecast":"Slight Chance Showers And Thunderstorms","detailedForecast":"A slight chance of showers and thunderstorms before 3am. Partly cloudy, with a low around 47. West southwest wind around 5 mph."},{"number":2,"name":"Friday","startTime":"2024-08-23T06:00:00-06:00","endTime":"2024-08-23T18:00:00-06:00","isDaytime":true,"temperature":76,"temperatureUnit":"F","temperatureTrend":"","probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":60},"windSpeed":"3 to 7 mph","windDirection":"SW","icon":"https://api.weather.gov/icons/land/day/bkn/tsra_hi,60?size=medium","shortForecast":"Partly Sunny then Showers And Thunderstorms Likely","detailedForecast":"Showers and thunderstorms likely after noon. Partly sunny. High near 76, with temperatures falling to around 74 in the afternoon. Southwest wind 3 to 7 mph. Chance of precipitation is 60%. New rainfall amounts less than a tenth of an inch possible."},{"number":3,"name":"Friday Night","startTime":"2024-08-23T18:00:00-06:00","endTime":"2024-08-24T06:00:00-06:00","isDaytime":false,"temperature":49,"temperatureUnit":"F","temperatureTrend":"","probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":30},"windSpeed":"6 to 9 mph","windDirection":"SW","icon":"https://api.weather.gov/icons/land/night/tsra_sct,30/bkn?size=medium","shortForecast":"Chance Showers And Thunderstorms then Mostly Cloudy","detailedForecast":"A chance of showers and thunderstorms before midnight. Mostly cloudy, with a low around 49. Southwest wind 6 to 9 mph. Chance of precipitation is 30%."},{"number":4,"name":"Saturday","startTime":"2024-08-24T06:00:00-06:00","endTime":"2024-08-24T18:00:00-06:00","isDaytime":true,"temperature":77,"temperatureUnit":"F","temperatureTrend":"","probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":50},"windSpeed":"5 to 10 mph","windDirection":"SW","icon":"https://api.weather.gov/icons/land/day/bkn/tsra_sct,50?size=medium","shortForecast":"Partly Sunny then Chance Showers And Thunderstorms","detailedForecast":"A chance of showers and thunderstorms after noon. Partly sunny, with a high near 77. Southwest wind 5 to 10 mph, with gusts as high as 21 mph. Chance of precipitation is 50%."},{"number":5,"name":"Saturday Night","startTime":"2024-08-24T18:00:00-06:00","endTime":"2024-08-25T06:00:00-06:00","isDaytime":false,"temperature":49,"temperatureUnit":"F","temperatureTrend":"","probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":20},"windSpeed":"5 to 8 mph","windDirection":"WSW","icon":"https://api.weather.gov/icons/land/night/tsra_sct,20/bkn?size=medium","shortForecast":"Slight Chance Showers And Thunderstorms then Mostly Cloudy","detailedForecast":"A slight chance of showers and thunderstorms before midnight. Mostly cloudy, with a low around 49. West southwest wind 5 to 8 mph, with gusts as high as 20 mph. Chance of precipitation is 20%."},{"number":6,"name":"Sunday","startTime":"2024-08-25T06:00:00-06:00","endTime":"2024-08-25T18:00:00-06:00","isDaytime":true,"temperature":72,"temperatureUnit":"F","temperatureTrend":"","probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":60},"windSpeed":"6 to 12 mph","windDirection":"SW","icon":"https://api.weather.gov/icons/land/day/bkn/tsra_sct,60?size=medium","shortForecast":"Partly Sunny then Showers And Thunderstorms Likely","detailedForecast":"Showers and thunderstorms likely after noon. Partly sunny, with a high near 72. Chance of precipitation is 60%."},{"number":7,"name":"Sunday Night","startTime":"2024-08-25T18:00:00-06:00","endTime":"2024-08-26T06:00:00-06:00","isDaytime":false,"temperature":45,"temperatureUnit":"F","temperatureTrend":"","probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":40},"windSpeed":"8 mph","windDirection":"SW","icon":"https://api.weather.gov/icons/land/night/tsra_sct,40/bkn?size=medium","shortForecast":"Chance Showers And Thunderstorms then Mostly Cloudy","detailedForecast":"A chance of showers and thunderstorms before midnight. Mostly cloudy, with a low around 45. Chance of precipitation is 40%."},{"number":8,"name":"Monday","startTime":"2024-08-26T06:00:00-06:00","endTime":"2024-08-26T18:00:00-06:00","isDaytime":true,"temperature":69,"temperatureUnit":"F","temperatureTrend":"","probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"windSpeed":"6 mph","windDirection":"SSW","icon":"https://api.weather.gov/icons/land/day/bkn/tsra_hi?size=medium","shortForecast":"Partly Sunny then Chance Showers And Thunderstorms","detailedForecast":"A chance of showers and thunderstorms after noon. Partly sunny, with a high near 69."},{"number":9,"name":"Monday Night","startTime":"2024-08-26T18:00:00-06:00","endTime":"2024-08-27T06:00:00-06:00","isDaytime":false,"temperature":44,"temperatureUnit":"F","temperatureTrend":"","probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"windSpeed":"5 mph","windDirection":"S","icon":"https://api.weather.gov/icons/land/night/tsra_hi/sct?size=medium","shortForecast":"Slight Chance Showers And Thunderstorms then Partly Cloudy","detailedForecast":"A slight chance of showers and thunderstorms before midnight. Partly cloudy, with a low around 44."},{"number":10,"name":"Tuesday","startTime":"2024-08-27T06:00:00-06:00","endTime":"2024-08-27T18:00:00-06:00","isDaytime":true,"temperature":73,"temperatureUnit":"F","temperatureTrend":"","probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"windSpeed":"6 mph","windDirection":"S","icon":"https://api.weather.gov/icons/land/day/sct/tsra_hi?size=medium","shortForecast":"Mostly Sunny then Chance Showers And Thunderstorms","detailedForecast":"A chance of showers and thunderstorms after noon. Mostly sunny, with a high near 73."},{"number":11,"name":"Tuesday Night","startTime":"2024-08-27T18:00:00-06:00","endTime":"2024-08-28T06:00:00-06:00","isDaytime":false,"temperature":45,"temperatureUnit":"F","temperatureTrend":"","probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"windSpeed":"6 mph","windDirection":"SW","icon":"https://api.weather.gov/icons/land/night/tsra_hi/sct?size=medium","shortForecast":"Slight Chance Showers And Thunderstorms then Partly Cloudy","detailedForecast":"A slight chance of showers and thunderstorms before midnight. Partly cloudy, with a low around 45."},{"number":12,"name":"Wednesday","startTime":"2024-08-28T06:00:00-06:00","endTime":"2024-08-28T18:00:00-06:00","isDaytime":true,"temperature":76,"temperatureUnit":"F","temperatureTrend":"","probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"windSpeed":"6 mph","windDirection":"NW","icon":"https://api.weather.gov/icons/land/day/few/tsra_hi?size=medium","shortForecast":"Sunny then Slight Chance Showers And Thunderstorms","detailedForecast":"A slight chance of showers and thunderstorms after noon. Sunny, with a high near 76."},{"number":13,"name":"Wednesday Night","startTime":"2024-08-28T18:00:00-06:00","endTime":"2024-08-29T06:00:00-06:00","isDaytime":false,"temperature":44,"temperatureUnit":"F","temperatureTrend":"","probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"windSpeed":"6 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/night/tsra_hi/sct?size=medium","shortForecast":"Slight Chance Showers And Thunderstorms then Partly Cloudy","detailedForecast":"A slight chance of showers and thunderstorms before midnight. Partly cloudy, with a low around 44."},{"number":14,"name":"Thursday","startTime":"2024-08-29T06:00:00-06:00","endTime":"2024-08-29T18:00:00-06:00","isDaytime":true,"temperature":70,"temperatureUnit":"F","temperatureTrend":"","probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"windSpeed":"7 mph","windDirection":"N","icon":"https://api.weather.gov/icons/land/day/sct/tsra_hi?size=medium","shortForecast":"Mostly Sunny then Chance Showers And Thunderstorms","detailedForecast":"A chance of showers and thunderstorms after noon. Mostly sunny, with a high near 70."}]}
  var hourly_BOU_48_51 = false
  var crags_config = [
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
  }
]</script>

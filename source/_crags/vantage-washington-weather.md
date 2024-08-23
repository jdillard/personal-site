---
### THIS FILE IS AUTO-GENERATED - DO NOT EDIT ###
layout: page
title: Vantage, Washington Climbing Weather - Current, Past, and Forecasted
title_override: Vantage<br /><small>Climbing Weather</small>
description: A lightweight weather report for Vantage, Washington. Optimized for slow internet connections.
js_includes:
  - weather.js
---

<section class="measure center lh-copy f5-ns f6 ph2 mv4" style="text-align: justify;">
<strong>"Is it dry?"</strong>, an oft-repeated, age-old question. Here are real-time,
precipitation-focused reports of current, past, and forecasted climbing weather for Vantage, Washington.
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
<section id="weather" data-crag="vantage-washington" class="mv4-ns mv3 ph2 center"></section>
<section id="nearby" class="tc lh-copy">
  <h3>Nearby Crags</h3>
<a class="nowrap no-underline fancy-link relative light-red mh3" href="/crags/icicle-creek-washington-weather.html">Icicle Creek</a>
<a class="nowrap no-underline fancy-link relative light-red mh3" href="/crags/tieton-river-rock-washington-weather.html">Tieton River Rock</a>
<a class="nowrap no-underline fancy-link relative light-red mh3" href="/crags/mount-erie-washington-weather.html">Mount Erie</a>
<a class="nowrap no-underline fancy-link relative light-red mh3" href="/crags/index-washington-weather.html">Index</a>
<a class="nowrap no-underline fancy-link relative light-red mh3" href="/crags/darrington-washington-weather.html">Darrington</a>
<a class="nowrap no-underline fancy-link relative light-red mh3" href="/crags/smith-rock-oregon-weather.html">Smith Rock</a>
<a class="nowrap no-underline fancy-link relative light-red mh3" href="/crags/trout-creek-oregon-weather.html">Trout Creek</a>
</section>
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

<script>
  var weekly_OTX_54_74 = {"units":"us","forecastGenerator":"BaselineForecastGenerator","generatedAt":"2024-08-23T08:34:13+00:00","updateTime":"2024-08-23T03:45:30+00:00","validTimes":"2024-08-22T21:00:00+00:00/P7DT7H","elevation":{"unitCode":"wmoUnit:m","value":374.904},"periods":[{"number":1,"name":"Overnight","startTime":"2024-08-23T01:00:00-07:00","endTime":"2024-08-23T06:00:00-07:00","isDaytime":false,"temperature":60,"temperatureUnit":"F","temperatureTrend":"","probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":20},"windSpeed":"3 to 7 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/night/rain_showers,20?size=medium","shortForecast":"Slight Chance Rain Showers","detailedForecast":"A slight chance of rain showers before 5am. Partly cloudy. Low around 60, with temperatures rising to around 62 overnight. West wind 3 to 7 mph. Chance of precipitation is 20%."},{"number":2,"name":"Friday","startTime":"2024-08-23T06:00:00-07:00","endTime":"2024-08-23T18:00:00-07:00","isDaytime":true,"temperature":76,"temperatureUnit":"F","temperatureTrend":"","probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":60},"windSpeed":"2 to 17 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/day/rain_showers,40/tsra,60?size=medium","shortForecast":"Chance Rain Showers","detailedForecast":"A chance of rain showers between 10am and 2pm, then a chance of showers and thunderstorms between 2pm and 5pm, then rain showers likely and patchy blowing dust. Mostly cloudy. High near 76, with temperatures falling to around 69 in the afternoon. West wind 2 to 17 mph, with gusts as high as 28 mph. Chance of precipitation is 60%. New rainfall amounts less than a tenth of an inch possible."},{"number":3,"name":"Friday Night","startTime":"2024-08-23T18:00:00-07:00","endTime":"2024-08-24T06:00:00-07:00","isDaytime":false,"temperature":55,"temperatureUnit":"F","temperatureTrend":"","probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":60},"windSpeed":"5 to 16 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/night/tsra_hi,60/tsra_hi,30?size=medium","shortForecast":"Showers And Thunderstorms Likely","detailedForecast":"Rain showers likely and patchy blowing dust before 8pm, then showers and thunderstorms likely. Mostly cloudy, with a low around 55. West wind 5 to 16 mph, with gusts as high as 28 mph. Chance of precipitation is 60%. New rainfall amounts less than a tenth of an inch possible."},{"number":4,"name":"Saturday","startTime":"2024-08-24T06:00:00-07:00","endTime":"2024-08-24T18:00:00-07:00","isDaytime":true,"temperature":68,"temperatureUnit":"F","temperatureTrend":"","probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":30},"windSpeed":"5 to 14 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/day/rain_showers,30?size=medium","shortForecast":"Chance Rain Showers","detailedForecast":"A chance of rain showers before 5pm. Partly sunny, with a high near 68. West wind 5 to 14 mph, with gusts as high as 22 mph. Chance of precipitation is 30%."},{"number":5,"name":"Saturday Night","startTime":"2024-08-24T18:00:00-07:00","endTime":"2024-08-25T06:00:00-07:00","isDaytime":false,"temperature":51,"temperatureUnit":"F","temperatureTrend":"","probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"windSpeed":"2 to 14 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/night/sct?size=medium","shortForecast":"Partly Cloudy","detailedForecast":"Partly cloudy, with a low around 51. West wind 2 to 14 mph, with gusts as high as 22 mph."},{"number":6,"name":"Sunday","startTime":"2024-08-25T06:00:00-07:00","endTime":"2024-08-25T18:00:00-07:00","isDaytime":true,"temperature":75,"temperatureUnit":"F","temperatureTrend":"","probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"windSpeed":"2 to 9 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/day/few?size=medium","shortForecast":"Sunny","detailedForecast":"Sunny, with a high near 75."},{"number":7,"name":"Sunday Night","startTime":"2024-08-25T18:00:00-07:00","endTime":"2024-08-26T06:00:00-07:00","isDaytime":false,"temperature":55,"temperatureUnit":"F","temperatureTrend":"","probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"windSpeed":"1 to 9 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/night/few?size=medium","shortForecast":"Mostly Clear","detailedForecast":"Mostly clear, with a low around 55."},{"number":8,"name":"Monday","startTime":"2024-08-26T06:00:00-07:00","endTime":"2024-08-26T18:00:00-07:00","isDaytime":true,"temperature":83,"temperatureUnit":"F","temperatureTrend":"","probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"windSpeed":"1 to 9 mph","windDirection":"S","icon":"https://api.weather.gov/icons/land/day/sct?size=medium","shortForecast":"Mostly Sunny","detailedForecast":"Mostly sunny, with a high near 83."},{"number":9,"name":"Monday Night","startTime":"2024-08-26T18:00:00-07:00","endTime":"2024-08-27T06:00:00-07:00","isDaytime":false,"temperature":60,"temperatureUnit":"F","temperatureTrend":"","probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"windSpeed":"3 to 9 mph","windDirection":"SW","icon":"https://api.weather.gov/icons/land/night/sct?size=medium","shortForecast":"Partly Cloudy","detailedForecast":"Partly cloudy, with a low around 60."},{"number":10,"name":"Tuesday","startTime":"2024-08-27T06:00:00-07:00","endTime":"2024-08-27T18:00:00-07:00","isDaytime":true,"temperature":78,"temperatureUnit":"F","temperatureTrend":"","probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"windSpeed":"3 to 15 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/day/bkn?size=medium","shortForecast":"Partly Sunny","detailedForecast":"Partly sunny, with a high near 78."},{"number":11,"name":"Tuesday Night","startTime":"2024-08-27T18:00:00-07:00","endTime":"2024-08-28T06:00:00-07:00","isDaytime":false,"temperature":51,"temperatureUnit":"F","temperatureTrend":"","probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"windSpeed":"5 to 15 mph","windDirection":"NW","icon":"https://api.weather.gov/icons/land/night/few?size=medium","shortForecast":"Mostly Clear","detailedForecast":"Mostly clear, with a low around 51."},{"number":12,"name":"Wednesday","startTime":"2024-08-28T06:00:00-07:00","endTime":"2024-08-28T18:00:00-07:00","isDaytime":true,"temperature":76,"temperatureUnit":"F","temperatureTrend":"","probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"windSpeed":"5 to 10 mph","windDirection":"N","icon":"https://api.weather.gov/icons/land/day/few?size=medium","shortForecast":"Sunny","detailedForecast":"Sunny, with a high near 76."},{"number":13,"name":"Wednesday Night","startTime":"2024-08-28T18:00:00-07:00","endTime":"2024-08-29T06:00:00-07:00","isDaytime":false,"temperature":54,"temperatureUnit":"F","temperatureTrend":"","probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"windSpeed":"2 to 10 mph","windDirection":"NW","icon":"https://api.weather.gov/icons/land/night/few?size=medium","shortForecast":"Mostly Clear","detailedForecast":"Mostly clear, with a low around 54."},{"number":14,"name":"Thursday","startTime":"2024-08-29T06:00:00-07:00","endTime":"2024-08-29T18:00:00-07:00","isDaytime":true,"temperature":82,"temperatureUnit":"F","temperatureTrend":"","probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"windSpeed":"2 to 8 mph","windDirection":"NE","icon":"https://api.weather.gov/icons/land/day/skc?size=medium","shortForecast":"Sunny","detailedForecast":"Sunny, with a high near 82."}]}
  var hourly_OTX_54_74 = false
  var crags_config = [
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
  }
]</script>

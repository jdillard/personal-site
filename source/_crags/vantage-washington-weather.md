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
  var weekly_OTX_54_74 = {"updated":"2024-01-21T05:04:25+00:00","units":"us","forecastGenerator":"BaselineForecastGenerator","generatedAt":"2024-01-21T08:31:38+00:00","updateTime":"2024-01-21T05:04:25+00:00","validTimes":"2024-01-20T23:00:00+00:00/P7DT15H","elevation":{"unitCode":"wmoUnit:m","value":374.904},"periods":[{"number":1,"name":"Overnight","startTime":"2024-01-21T00:00:00-08:00","endTime":"2024-01-21T06:00:00-08:00","isDaytime":false,"temperature":28,"temperatureUnit":"F","temperatureTrend":"rising","probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":70},"dewpoint":{"unitCode":"wmoUnit:degC","value":-1.1111111111111112},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":97},"windSpeed":"1 mph","windDirection":"E","icon":"https://api.weather.gov/icons/land/night/snow_fzra,70?size=medium","shortForecast":"Chance Rain And Snow","detailedForecast":"A chance of rain and snow before 1am, then freezing rain likely and rain likely between 1am and 4am, then rain and snow likely. Cloudy. Low around 28, with temperatures rising to around 31 overnight. East wind around 1 mph. Chance of precipitation is 70%. Little or no ice accumulation expected."},{"number":2,"name":"Sunday","startTime":"2024-01-21T06:00:00-08:00","endTime":"2024-01-21T18:00:00-08:00","isDaytime":true,"temperature":33,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":70},"dewpoint":{"unitCode":"wmoUnit:degC","value":0.5555555555555556},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":99},"windSpeed":"2 mph","windDirection":"SE","icon":"https://api.weather.gov/icons/land/day/rain_fzra,70/rain_fzra,40?size=medium","shortForecast":"Freezing Rain Likely","detailedForecast":"Freezing rain likely and rain likely. Cloudy, with a high near 33. Southeast wind around 2 mph. Chance of precipitation is 70%. Little or no ice accumulation expected."},{"number":3,"name":"Sunday Night","startTime":"2024-01-21T18:00:00-08:00","endTime":"2024-01-22T06:00:00-08:00","isDaytime":false,"temperature":32,"temperatureUnit":"F","temperatureTrend":"rising","probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":60},"dewpoint":{"unitCode":"wmoUnit:degC","value":0},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":99},"windSpeed":"2 mph","windDirection":"NE","icon":"https://api.weather.gov/icons/land/night/rain,50/rain,60?size=medium","shortForecast":"Light Rain Likely","detailedForecast":"Rain likely. Mostly cloudy. Low around 32, with temperatures rising to around 34 overnight. Northeast wind around 2 mph. Chance of precipitation is 60%. New rainfall amounts less than a tenth of an inch possible."},{"number":4,"name":"Monday","startTime":"2024-01-22T06:00:00-08:00","endTime":"2024-01-22T18:00:00-08:00","isDaytime":true,"temperature":38,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":70},"dewpoint":{"unitCode":"wmoUnit:degC","value":2.7777777777777777},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":100},"windSpeed":"3 mph","windDirection":"N","icon":"https://api.weather.gov/icons/land/day/rain,70?size=medium","shortForecast":"Light Rain Likely","detailedForecast":"Rain likely. Mostly cloudy, with a high near 38. North wind around 3 mph. Chance of precipitation is 70%. New rainfall amounts less than a tenth of an inch possible."},{"number":5,"name":"Monday Night","startTime":"2024-01-22T18:00:00-08:00","endTime":"2024-01-23T06:00:00-08:00","isDaytime":false,"temperature":31,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":40},"dewpoint":{"unitCode":"wmoUnit:degC","value":1.6666666666666667},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":94},"windSpeed":"2 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/night/rain,40/rain,30?size=medium","shortForecast":"Chance Light Rain","detailedForecast":"A chance of rain before 4am. Mostly cloudy, with a low around 31. West wind around 2 mph. Chance of precipitation is 40%. New rainfall amounts less than a tenth of an inch possible."},{"number":6,"name":"Tuesday","startTime":"2024-01-23T06:00:00-08:00","endTime":"2024-01-23T18:00:00-08:00","isDaytime":true,"temperature":37,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":1.6666666666666667},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":98},"windSpeed":"2 mph","windDirection":"S","icon":"https://api.weather.gov/icons/land/day/fog?size=medium","shortForecast":"Patchy Fog","detailedForecast":"Patchy fog after 7am. Mostly cloudy, with a high near 37."},{"number":7,"name":"Tuesday Night","startTime":"2024-01-23T18:00:00-08:00","endTime":"2024-01-24T06:00:00-08:00","isDaytime":false,"temperature":33,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":70},"dewpoint":{"unitCode":"wmoUnit:degC","value":0},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":95},"windSpeed":"3 mph","windDirection":"N","icon":"https://api.weather.gov/icons/land/night/rain,20/rain,70?size=medium","shortForecast":"Patchy Fog","detailedForecast":"Patchy fog before 10pm, then patchy fog and a slight chance of rain between 10pm and 4am, then rain likely and patchy fog. Mostly cloudy, with a low around 33. Chance of precipitation is 70%."},{"number":8,"name":"Wednesday","startTime":"2024-01-24T06:00:00-08:00","endTime":"2024-01-24T18:00:00-08:00","isDaytime":true,"temperature":36,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":70},"dewpoint":{"unitCode":"wmoUnit:degC","value":1.1111111111111112},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":95},"windSpeed":"5 mph","windDirection":"NE","icon":"https://api.weather.gov/icons/land/day/rain,70/rain,50?size=medium","shortForecast":"Light Rain Likely","detailedForecast":"Rain likely and patchy fog. Mostly cloudy, with a high near 36. Chance of precipitation is 70%."},{"number":9,"name":"Wednesday Night","startTime":"2024-01-24T18:00:00-08:00","endTime":"2024-01-25T06:00:00-08:00","isDaytime":false,"temperature":31,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":30},"dewpoint":{"unitCode":"wmoUnit:degC","value":0.5555555555555556},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":93},"windSpeed":"5 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/night/rain,30/rain,20?size=medium","shortForecast":"Chance Light Rain","detailedForecast":"A chance of rain. Mostly cloudy, with a low around 31. Chance of precipitation is 30%."},{"number":10,"name":"Thursday","startTime":"2024-01-25T06:00:00-08:00","endTime":"2024-01-25T18:00:00-08:00","isDaytime":true,"temperature":37,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":20},"dewpoint":{"unitCode":"wmoUnit:degC","value":1.1111111111111112},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":94},"windSpeed":"6 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/day/rain,20?size=medium","shortForecast":"Slight Chance Light Rain","detailedForecast":"A slight chance of rain. Mostly cloudy, with a high near 37. Chance of precipitation is 20%."},{"number":11,"name":"Thursday Night","startTime":"2024-01-25T18:00:00-08:00","endTime":"2024-01-26T06:00:00-08:00","isDaytime":false,"temperature":32,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":30},"dewpoint":{"unitCode":"wmoUnit:degC","value":0.5555555555555556},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":95},"windSpeed":"5 mph","windDirection":"NW","icon":"https://api.weather.gov/icons/land/night/rain,30?size=medium","shortForecast":"Chance Light Rain","detailedForecast":"A chance of rain. Mostly cloudy, with a low around 32. Chance of precipitation is 30%."},{"number":12,"name":"Friday","startTime":"2024-01-26T06:00:00-08:00","endTime":"2024-01-26T18:00:00-08:00","isDaytime":true,"temperature":36,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":40},"dewpoint":{"unitCode":"wmoUnit:degC","value":0.5555555555555556},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":92},"windSpeed":"6 mph","windDirection":"N","icon":"https://api.weather.gov/icons/land/day/rain,40?size=medium","shortForecast":"Chance Light Rain","detailedForecast":"A chance of rain. Mostly cloudy, with a high near 36. Chance of precipitation is 40%."},{"number":13,"name":"Friday Night","startTime":"2024-01-26T18:00:00-08:00","endTime":"2024-01-27T06:00:00-08:00","isDaytime":false,"temperature":32,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":40},"dewpoint":{"unitCode":"wmoUnit:degC","value":0},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":93},"windSpeed":"5 mph","windDirection":"NW","icon":"https://api.weather.gov/icons/land/night/rain,40?size=medium","shortForecast":"Chance Light Rain","detailedForecast":"A chance of rain before 10pm, then a chance of rain and patchy fog. Mostly cloudy, with a low around 32. Chance of precipitation is 40%."},{"number":14,"name":"Saturday","startTime":"2024-01-27T06:00:00-08:00","endTime":"2024-01-27T18:00:00-08:00","isDaytime":true,"temperature":39,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":40},"dewpoint":{"unitCode":"wmoUnit:degC","value":1.6666666666666667},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":93},"windSpeed":"6 mph","windDirection":"NW","icon":"https://api.weather.gov/icons/land/day/rain,40?size=medium","shortForecast":"Chance Light Rain","detailedForecast":"A chance of rain and patchy fog. Mostly cloudy, with a high near 39. Chance of precipitation is 40%."}]}
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

---
### THIS FILE IS AUTO-GENERATED - DO NOT EDIT ###
layout: page
title: Icicle Creek, Washington Climbing Weather - Current, Past, and Forecasted
title_override: Icicle Creek<br /><small>Climbing Weather</small>
description: A lightweight weather report for Icicle Creek, Washington. Optimized for slow internet connections.
js_includes:
  - weather.js
---

<section class="measure center lh-copy f5-ns f6 ph2 mv4" style="text-align: justify;">
<strong>"Is it dry?"</strong>, an oft-repeated, age-old question. Here are real-time,
precipitation-focused reports of current, past, and forecasted climbing weather for Icicle Creek, Washington.
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
<section id="weather" data-crag="icicle-creek-washington" class="mv4-ns mv3 ph2 center"></section>
<section id="nearby" class="tc lh-copy">
  <h3>Nearby Crags</h3>
<a class="nowrap no-underline fancy-link relative light-red mh3" href="/crags/tieton-river-rock-washington-weather.html">Tieton River Rock</a>
<a class="nowrap no-underline fancy-link relative light-red mh3" href="/crags/vantage-washington-weather.html">Vantage</a>
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
  var weekly_OTX_35_103 = {"updated":"2024-01-16T05:24:48+00:00","units":"us","forecastGenerator":"BaselineForecastGenerator","generatedAt":"2024-01-16T08:32:27+00:00","updateTime":"2024-01-16T05:24:48+00:00","validTimes":"2024-01-15T23:00:00+00:00/P7DT5H","elevation":{"unitCode":"wmoUnit:m","value":627.888},"periods":[{"number":1,"name":"Overnight","startTime":"2024-01-16T00:00:00-08:00","endTime":"2024-01-16T06:00:00-08:00","isDaytime":false,"temperature":-3,"temperatureUnit":"F","temperatureTrend":"rising","probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":-21.666666666666668},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":73},"windSpeed":"6 mph","windDirection":"NE","icon":"https://api.weather.gov/icons/land/night/cold?size=medium","shortForecast":"Partly Cloudy","detailedForecast":"Partly cloudy. Low around -3, with temperatures rising to around 0 overnight. Wind chill values as low as -14. Northeast wind around 6 mph."},{"number":2,"name":"Tuesday","startTime":"2024-01-16T06:00:00-08:00","endTime":"2024-01-16T18:00:00-08:00","isDaytime":true,"temperature":13,"temperatureUnit":"F","temperatureTrend":"falling","probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":-13.88888888888889},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":83},"windSpeed":"6 mph","windDirection":"NE","icon":"https://api.weather.gov/icons/land/day/bkn?size=medium","shortForecast":"Partly Sunny","detailedForecast":"Partly sunny. High near 13, with temperatures falling to around 11 in the afternoon. Wind chill values as low as -12. Northeast wind around 6 mph. New snow accumulation of 1 to 2 inches possible."},{"number":3,"name":"Tuesday Night","startTime":"2024-01-16T18:00:00-08:00","endTime":"2024-01-17T06:00:00-08:00","isDaytime":false,"temperature":9,"temperatureUnit":"F","temperatureTrend":"rising","probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":100},"dewpoint":{"unitCode":"wmoUnit:degC","value":-12.222222222222221},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":91},"windSpeed":"6 mph","windDirection":"NE","icon":"https://api.weather.gov/icons/land/night/snow,100?size=medium","shortForecast":"Heavy Snow","detailedForecast":"Snow after 7pm. Cloudy. Low around 9, with temperatures rising to around 12 overnight. Wind chill values as low as 0. Northeast wind around 6 mph. Chance of precipitation is 100%. New snow accumulation of 3 to 7 inches possible."},{"number":4,"name":"Wednesday","startTime":"2024-01-17T06:00:00-08:00","endTime":"2024-01-17T18:00:00-08:00","isDaytime":true,"temperature":24,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":100},"dewpoint":{"unitCode":"wmoUnit:degC","value":-6.111111111111111},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":99},"windSpeed":"6 to 9 mph","windDirection":"E","icon":"https://api.weather.gov/icons/land/day/snow,100?size=medium","shortForecast":"Heavy Snow","detailedForecast":"Snow. Cloudy, with a high near 24. East wind 6 to 9 mph. Chance of precipitation is 100%. New snow accumulation of 7 to 11 inches possible."},{"number":5,"name":"Wednesday Night","startTime":"2024-01-17T18:00:00-08:00","endTime":"2024-01-18T06:00:00-08:00","isDaytime":false,"temperature":16,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":70},"dewpoint":{"unitCode":"wmoUnit:degC","value":-6.666666666666667},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":92},"windSpeed":"7 to 14 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/night/snow,70/snow,30?size=medium","shortForecast":"Snow Likely","detailedForecast":"Snow likely. Mostly cloudy, with a low around 16. West wind 7 to 14 mph. Chance of precipitation is 70%. New snow accumulation of 3 to 7 inches possible."},{"number":6,"name":"Thursday","startTime":"2024-01-18T06:00:00-08:00","endTime":"2024-01-18T18:00:00-08:00","isDaytime":true,"temperature":25,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":80},"dewpoint":{"unitCode":"wmoUnit:degC","value":-6.111111111111111},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":93},"windSpeed":"7 mph","windDirection":"NE","icon":"https://api.weather.gov/icons/land/day/snow,60/snow,80?size=medium","shortForecast":"Snow","detailedForecast":"Snow. Mostly cloudy, with a high near 25. Chance of precipitation is 80%. New snow accumulation of 3 to 5 inches possible."},{"number":7,"name":"Thursday Night","startTime":"2024-01-18T18:00:00-08:00","endTime":"2024-01-19T06:00:00-08:00","isDaytime":false,"temperature":19,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":90},"dewpoint":{"unitCode":"wmoUnit:degC","value":-8.333333333333334},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":87},"windSpeed":"9 mph","windDirection":"E","icon":"https://api.weather.gov/icons/land/night/snow,90?size=medium","shortForecast":"Light Snow","detailedForecast":"Snow. Cloudy, with a low around 19. Chance of precipitation is 90%. New snow accumulation of 2 to 4 inches possible."},{"number":8,"name":"Friday","startTime":"2024-01-19T06:00:00-08:00","endTime":"2024-01-19T18:00:00-08:00","isDaytime":true,"temperature":29,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":90},"dewpoint":{"unitCode":"wmoUnit:degC","value":-2.7777777777777777},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":99},"windSpeed":"8 mph","windDirection":"E","icon":"https://api.weather.gov/icons/land/day/snow,90/snow,70?size=medium","shortForecast":"Light Snow","detailedForecast":"Snow. Mostly cloudy, with a high near 29. Chance of precipitation is 90%. New snow accumulation of less than one inch possible."},{"number":9,"name":"Friday Night","startTime":"2024-01-19T18:00:00-08:00","endTime":"2024-01-20T06:00:00-08:00","isDaytime":false,"temperature":25,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":80},"dewpoint":{"unitCode":"wmoUnit:degC","value":-4.444444444444445},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":91},"windSpeed":"8 mph","windDirection":"E","icon":"https://api.weather.gov/icons/land/night/snow,70/snow,80?size=medium","shortForecast":"Light Snow","detailedForecast":"Snow. Mostly cloudy, with a low around 25. Chance of precipitation is 80%. New snow accumulation of less than one inch possible. Little or no ice accumulation expected."},{"number":10,"name":"Saturday","startTime":"2024-01-20T06:00:00-08:00","endTime":"2024-01-20T18:00:00-08:00","isDaytime":true,"temperature":34,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":80},"dewpoint":{"unitCode":"wmoUnit:degC","value":-0.5555555555555556},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":97},"windSpeed":"7 mph","windDirection":"SE","icon":"https://api.weather.gov/icons/land/day/snow_fzra,80?size=medium","shortForecast":"Slight Chance Freezing Rain","detailedForecast":"Snow before 7am, then a slight chance of freezing rain and rain and snow between 7am and 10am, then a slight chance of freezing rain and rain and snow. Mostly cloudy, with a high near 34. Chance of precipitation is 80%. New snow accumulation of less than half an inch possible. Little or no ice accumulation expected."},{"number":11,"name":"Saturday Night","startTime":"2024-01-20T18:00:00-08:00","endTime":"2024-01-21T06:00:00-08:00","isDaytime":false,"temperature":27,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":90},"dewpoint":{"unitCode":"wmoUnit:degC","value":-2.2222222222222223},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":95},"windSpeed":"8 mph","windDirection":"E","icon":"https://api.weather.gov/icons/land/night/rain_fzra,80/snow_fzra,90?size=medium","shortForecast":"Light Rain","detailedForecast":"Rain and a slight chance of freezing rain before 1am, then rain and snow between 1am and 4am, then a slight chance of freezing rain and rain and snow. Cloudy, with a low around 27. Chance of precipitation is 90%. Little or no snow accumulation expected."},{"number":12,"name":"Sunday","startTime":"2024-01-21T06:00:00-08:00","endTime":"2024-01-21T18:00:00-08:00","isDaytime":true,"temperature":36,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":90},"dewpoint":{"unitCode":"wmoUnit:degC","value":1.1111111111111112},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":99},"windSpeed":"7 mph","windDirection":"E","icon":"https://api.weather.gov/icons/land/day/snow_fzra,90/snow_fzra,80?size=medium","shortForecast":"Slight Chance Freezing Rain","detailedForecast":"A slight chance of freezing rain and rain and snow. Cloudy, with a high near 36. Chance of precipitation is 90%. Little or no snow accumulation expected."},{"number":13,"name":"Sunday Night","startTime":"2024-01-21T18:00:00-08:00","endTime":"2024-01-22T06:00:00-08:00","isDaytime":false,"temperature":29,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":70},"dewpoint":{"unitCode":"wmoUnit:degC","value":-1.1111111111111112},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":94},"windSpeed":"7 mph","windDirection":"E","icon":"https://api.weather.gov/icons/land/night/rain,70?size=medium","shortForecast":"Light Rain Likely","detailedForecast":"Rain likely. Mostly cloudy, with a low around 29. Chance of precipitation is 70%."},{"number":14,"name":"Monday","startTime":"2024-01-22T06:00:00-08:00","endTime":"2024-01-22T18:00:00-08:00","isDaytime":true,"temperature":37,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":70},"dewpoint":{"unitCode":"wmoUnit:degC","value":1.1111111111111112},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":97},"windSpeed":"7 mph","windDirection":"E","icon":"https://api.weather.gov/icons/land/day/rain,70?size=medium","shortForecast":"Light Rain Likely","detailedForecast":"Rain likely. Mostly cloudy, with a high near 37. Chance of precipitation is 70%."}]}
  var hourly_OTX_35_103 = false
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
  }
]</script>

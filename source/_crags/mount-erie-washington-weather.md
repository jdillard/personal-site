---
### THIS FILE IS AUTO-GENERATED - DO NOT EDIT ###
layout: page
title: Mount Erie, Washington Climbing Weather - Current, Past, and Forecasted
title_override: Mount Erie<br /><small>Climbing Weather</small>
description: A lightweight weather report for Mount Erie, Washington. Optimized for slow internet connections.
js_includes:
  - weather.js
---

<section class="measure center lh-copy f5-ns f6 ph2 mv4" style="text-align: justify;">
<strong>"Is it dry?"</strong>, an oft-repeated, age-old question. Here are real-time,
precipitation-focused reports of current, past, and forecasted climbing weather for Mount Erie, Washington.
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
<section id="weather" data-crag="mount-erie-washington" class="mv4-ns mv3 ph2 center"></section>
<section id="nearby" class="tc lh-copy">
  <h3>Nearby Crags</h3>
<a class="nowrap no-underline fancy-link relative light-red mh3" href="/crags/icicle-creek-washington-weather.html">Icicle Creek</a>
<a class="nowrap no-underline fancy-link relative light-red mh3" href="/crags/tieton-river-rock-washington-weather.html">Tieton River Rock</a>
<a class="nowrap no-underline fancy-link relative light-red mh3" href="/crags/vantage-washington-weather.html">Vantage</a>
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
  var weekly_SEW_123_109 = {"updated":"2024-02-27T04:40:25+00:00","units":"us","forecastGenerator":"BaselineForecastGenerator","generatedAt":"2024-02-27T08:31:36+00:00","updateTime":"2024-02-27T04:40:25+00:00","validTimes":"2024-02-26T22:00:00+00:00/P7DT6H","elevation":{"unitCode":"wmoUnit:m","value":127.1016},"periods":[{"number":1,"name":"Overnight","startTime":"2024-02-27T00:00:00-08:00","endTime":"2024-02-27T06:00:00-08:00","isDaytime":false,"temperature":32,"temperatureUnit":"F","temperatureTrend":"rising","probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":-3.3333333333333335},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":71},"windSpeed":"6 to 13 mph","windDirection":"NW","icon":"https://api.weather.gov/icons/land/night/sct?size=medium","shortForecast":"Partly Cloudy","detailedForecast":"Partly cloudy. Low around 32, with temperatures rising to around 34 overnight. Northwest wind 6 to 13 mph."},{"number":2,"name":"Tuesday","startTime":"2024-02-27T06:00:00-08:00","endTime":"2024-02-27T18:00:00-08:00","isDaytime":true,"temperature":44,"temperatureUnit":"F","temperatureTrend":"falling","probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":80},"dewpoint":{"unitCode":"wmoUnit:degC","value":2.2222222222222223},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":80},"windSpeed":"3 to 17 mph","windDirection":"E","icon":"https://api.weather.gov/icons/land/day/bkn/snow,80?size=medium","shortForecast":"Mostly Cloudy then Chance Light Snow","detailedForecast":"A slight chance of rain between noon and 1pm, then a chance of snow between 1pm and 4pm, then rain. Mostly cloudy. High near 44, with temperatures falling to around 42 in the afternoon. East wind 3 to 17 mph, with gusts as high as 24 mph. Chance of precipitation is 80%. New rainfall amounts less than a tenth of an inch possible."},{"number":3,"name":"Tuesday Night","startTime":"2024-02-27T18:00:00-08:00","endTime":"2024-02-28T06:00:00-08:00","isDaytime":false,"temperature":37,"temperatureUnit":"F","temperatureTrend":"rising","probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":100},"dewpoint":{"unitCode":"wmoUnit:degC","value":5},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":92},"windSpeed":"14 to 20 mph","windDirection":"SSE","icon":"https://api.weather.gov/icons/land/night/rain,100?size=medium","shortForecast":"Light Rain","detailedForecast":"Rain. Cloudy. Low around 37, with temperatures rising to around 43 overnight. South southeast wind 14 to 20 mph, with gusts as high as 25 mph. Chance of precipitation is 100%. New rainfall amounts between a tenth and quarter of an inch possible."},{"number":4,"name":"Wednesday","startTime":"2024-02-28T06:00:00-08:00","endTime":"2024-02-28T18:00:00-08:00","isDaytime":true,"temperature":51,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":100},"dewpoint":{"unitCode":"wmoUnit:degC","value":7.222222222222222},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":91},"windSpeed":"20 to 25 mph","windDirection":"S","icon":"https://api.weather.gov/icons/land/day/rain,100?size=medium","shortForecast":"Rain","detailedForecast":"Rain. Cloudy, with a high near 51. South wind 20 to 25 mph, with gusts as high as 33 mph. Chance of precipitation is 100%. New rainfall amounts between a half and three quarters of an inch possible."},{"number":5,"name":"Wednesday Night","startTime":"2024-02-28T18:00:00-08:00","endTime":"2024-02-29T06:00:00-08:00","isDaytime":false,"temperature":37,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":90},"dewpoint":{"unitCode":"wmoUnit:degC","value":5},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":88},"windSpeed":"9 to 23 mph","windDirection":"SW","icon":"https://api.weather.gov/icons/land/night/rain,90/rain,80?size=medium","shortForecast":"Rain","detailedForecast":"Rain. Cloudy, with a low around 37. Southwest wind 9 to 23 mph, with gusts as high as 30 mph. Chance of precipitation is 90%. New rainfall amounts between a half and three quarters of an inch possible."},{"number":6,"name":"Thursday","startTime":"2024-02-29T06:00:00-08:00","endTime":"2024-02-29T18:00:00-08:00","isDaytime":true,"temperature":46,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":90},"dewpoint":{"unitCode":"wmoUnit:degC","value":3.3333333333333335},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":90},"windSpeed":"10 to 20 mph","windDirection":"SSE","icon":"https://api.weather.gov/icons/land/day/rain,90?size=medium","shortForecast":"Light Rain","detailedForecast":"Rain. Mostly cloudy, with a high near 46. Chance of precipitation is 90%. New rainfall amounts between a tenth and quarter of an inch possible."},{"number":7,"name":"Thursday Night","startTime":"2024-02-29T18:00:00-08:00","endTime":"2024-03-01T06:00:00-08:00","isDaytime":false,"temperature":37,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":70},"dewpoint":{"unitCode":"wmoUnit:degC","value":2.2222222222222223},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":81},"windSpeed":"16 to 21 mph","windDirection":"SSE","icon":"https://api.weather.gov/icons/land/night/rain,70/snow,70?size=medium","shortForecast":"Light Rain Likely then Rain And Snow Likely","detailedForecast":"Rain likely before 1am, then rain and snow likely. Mostly cloudy, with a low around 37. Chance of precipitation is 70%."},{"number":8,"name":"Friday","startTime":"2024-03-01T06:00:00-08:00","endTime":"2024-03-01T18:00:00-08:00","isDaytime":true,"temperature":47,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":0.5555555555555556},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":81},"windSpeed":"16 to 21 mph","windDirection":"SE","icon":"https://api.weather.gov/icons/land/day/snow?size=medium","shortForecast":"Rain And Snow Likely","detailedForecast":"Rain and snow likely. Mostly cloudy, with a high near 47."},{"number":9,"name":"Friday Night","startTime":"2024-03-01T18:00:00-08:00","endTime":"2024-03-02T06:00:00-08:00","isDaytime":false,"temperature":34,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":0.5555555555555556},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":80},"windSpeed":"10 to 16 mph","windDirection":"SE","icon":"https://api.weather.gov/icons/land/night/snow?size=medium","shortForecast":"Chance Rain And Snow","detailedForecast":"A chance of rain before 7pm, then a chance of rain and snow. Mostly cloudy, with a low around 34."},{"number":10,"name":"Saturday","startTime":"2024-03-02T06:00:00-08:00","endTime":"2024-03-02T18:00:00-08:00","isDaytime":true,"temperature":46,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":1.1111111111111112},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":81},"windSpeed":"13 mph","windDirection":"SE","icon":"https://api.weather.gov/icons/land/day/snow?size=medium","shortForecast":"Chance Rain And Snow","detailedForecast":"A chance of rain and snow. Mostly cloudy, with a high near 46."},{"number":11,"name":"Saturday Night","startTime":"2024-03-02T18:00:00-08:00","endTime":"2024-03-03T06:00:00-08:00","isDaytime":false,"temperature":35,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":0},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":83},"windSpeed":"8 to 12 mph","windDirection":"SE","icon":"https://api.weather.gov/icons/land/night/snow?size=medium","shortForecast":"Slight Chance Rain And Snow","detailedForecast":"A slight chance of rain and snow. Mostly cloudy, with a low around 35."},{"number":12,"name":"Sunday","startTime":"2024-03-03T06:00:00-08:00","endTime":"2024-03-03T18:00:00-08:00","isDaytime":true,"temperature":47,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":1.6666666666666667},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":83},"windSpeed":"9 mph","windDirection":"SSE","icon":"https://api.weather.gov/icons/land/day/snow?size=medium","shortForecast":"Slight Chance Rain And Snow","detailedForecast":"A slight chance of rain and snow. Partly sunny, with a high near 47."},{"number":13,"name":"Sunday Night","startTime":"2024-03-03T18:00:00-08:00","endTime":"2024-03-04T06:00:00-08:00","isDaytime":false,"temperature":35,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":0.5555555555555556},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":82},"windSpeed":"7 to 10 mph","windDirection":"SSE","icon":"https://api.weather.gov/icons/land/night/snow?size=medium","shortForecast":"Chance Rain And Snow","detailedForecast":"A slight chance of rain before 10pm, then a chance of rain and snow. Mostly cloudy, with a low around 35."},{"number":14,"name":"Monday","startTime":"2024-03-04T06:00:00-08:00","endTime":"2024-03-04T18:00:00-08:00","isDaytime":true,"temperature":47,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":2.7777777777777777},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":84},"windSpeed":"10 to 14 mph","windDirection":"SE","icon":"https://api.weather.gov/icons/land/day/snow?size=medium","shortForecast":"Chance Rain And Snow","detailedForecast":"A chance of rain and snow before 10am, then a chance of rain and snow between 10am and 5pm. Mostly cloudy, with a high near 47."}]}
  var hourly_SEW_123_109 = false
  var crags_config = [
  {
    "name": "Mount Erie",
    "note": "Highly textured and featured diorite.",
    "mountainProject": "https://www.mountainproject.com/area/106413714/mount-erie",
    "station": "KNUW",
    "office": "SEW/123,109",
    "coordinates": [
      -122.627,
      48.453
    ]
  }
]</script>

---
### THIS FILE IS AUTO-GENERATED - DO NOT EDIT ###
layout: page
title: Index, Washington Climbing Weather - Current, Past, and Forecasted
title_override: Index<br /><small>Climbing Weather</small>
description: A lightweight weather report for Index, Washington. Optimized for slow internet connections.
js_includes:
  - weather.js
---

<section class="measure center lh-copy f5-ns f6 ph2 mv4" style="text-align: justify;">
<strong>"Is it dry?"</strong>, an oft-repeated, age-old question. Here are real-time,
precipitation-focused reports of current, past, and forecasted climbing weather for Index, Washington.
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
<section id="weather" data-crag="index-washington" class="mv4-ns mv3 ph2 center"></section>
<section id="nearby" class="tc lh-copy">
  <h3>Nearby Crags</h3>
<a class="nowrap no-underline fancy-link relative light-red mh3" href="/crags/icicle-creek-washington-weather.html">Icicle Creek</a>
<a class="nowrap no-underline fancy-link relative light-red mh3" href="/crags/tieton-river-rock-washington-weather.html">Tieton River Rock</a>
<a class="nowrap no-underline fancy-link relative light-red mh3" href="/crags/vantage-washington-weather.html">Vantage</a>
<a class="nowrap no-underline fancy-link relative light-red mh3" href="/crags/mount-erie-washington-weather.html">Mount Erie</a>
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
  var weekly_SEW_150_72 = {"updated":"2023-12-14T04:40:20+00:00","units":"us","forecastGenerator":"BaselineForecastGenerator","generatedAt":"2023-12-14T08:32:25+00:00","updateTime":"2023-12-14T04:40:20+00:00","validTimes":"2023-12-13T22:00:00+00:00/P7DT6H","elevation":{"unitCode":"wmoUnit:m","value":402.9456},"periods":[{"number":1,"name":"Overnight","startTime":"2023-12-14T00:00:00-08:00","endTime":"2023-12-14T06:00:00-08:00","isDaytime":false,"temperature":36,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":50},"dewpoint":{"unitCode":"wmoUnit:degC","value":-2.7777777777777777},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":67},"windSpeed":"9 mph","windDirection":"ESE","icon":"https://api.weather.gov/icons/land/night/rain,50?size=medium","shortForecast":"Chance Light Rain","detailedForecast":"A chance of rain. Cloudy, with a low around 36. East southeast wind around 9 mph. Chance of precipitation is 50%. New rainfall amounts less than a tenth of an inch possible."},{"number":2,"name":"Thursday","startTime":"2023-12-14T06:00:00-08:00","endTime":"2023-12-14T18:00:00-08:00","isDaytime":true,"temperature":41,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":90},"dewpoint":{"unitCode":"wmoUnit:degC","value":3.3333333333333335},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":94},"windSpeed":"7 mph","windDirection":"ESE","icon":"https://api.weather.gov/icons/land/day/rain,90/rain,60?size=medium","shortForecast":"Light Rain","detailedForecast":"Rain. Mostly cloudy, with a high near 41. East southeast wind around 7 mph. Chance of precipitation is 90%. New rainfall amounts between a tenth and quarter of an inch possible."},{"number":3,"name":"Thursday Night","startTime":"2023-12-14T18:00:00-08:00","endTime":"2023-12-15T06:00:00-08:00","isDaytime":false,"temperature":38,"temperatureUnit":"F","temperatureTrend":"rising","probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":60},"dewpoint":{"unitCode":"wmoUnit:degC","value":2.2222222222222223},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":85},"windSpeed":"6 to 9 mph","windDirection":"ESE","icon":"https://api.weather.gov/icons/land/night/rain,60/rain,40?size=medium","shortForecast":"Light Rain Likely","detailedForecast":"Rain likely. Mostly cloudy. Low around 38, with temperatures rising to around 40 overnight. East southeast wind 6 to 9 mph. Chance of precipitation is 60%. New rainfall amounts less than a tenth of an inch possible."},{"number":4,"name":"Friday","startTime":"2023-12-15T06:00:00-08:00","endTime":"2023-12-15T18:00:00-08:00","isDaytime":true,"temperature":43,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":20},"dewpoint":{"unitCode":"wmoUnit:degC","value":2.2222222222222223},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":79},"windSpeed":"9 to 14 mph","windDirection":"E","icon":"https://api.weather.gov/icons/land/day/rain,20/bkn?size=medium","shortForecast":"Slight Chance Light Rain then Partly Sunny","detailedForecast":"A slight chance of rain before 10am. Partly sunny, with a high near 43. East wind 9 to 14 mph. Chance of precipitation is 20%."},{"number":5,"name":"Friday Night","startTime":"2023-12-15T18:00:00-08:00","endTime":"2023-12-16T06:00:00-08:00","isDaytime":false,"temperature":36,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":-0.5555555555555556},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":75},"windSpeed":"7 to 12 mph","windDirection":"E","icon":"https://api.weather.gov/icons/land/night/bkn?size=medium","shortForecast":"Mostly Cloudy","detailedForecast":"Mostly cloudy, with a low around 36. East wind 7 to 12 mph."},{"number":6,"name":"Saturday","startTime":"2023-12-16T06:00:00-08:00","endTime":"2023-12-16T18:00:00-08:00","isDaytime":true,"temperature":44,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":1.6666666666666667},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":72},"windSpeed":"7 mph","windDirection":"ESE","icon":"https://api.weather.gov/icons/land/day/bkn?size=medium","shortForecast":"Partly Sunny","detailedForecast":"Partly sunny, with a high near 44."},{"number":7,"name":"Saturday Night","startTime":"2023-12-16T18:00:00-08:00","endTime":"2023-12-17T06:00:00-08:00","isDaytime":false,"temperature":35,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":-1.1111111111111112},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":70},"windSpeed":"6 to 10 mph","windDirection":"ESE","icon":"https://api.weather.gov/icons/land/night/bkn?size=medium","shortForecast":"Mostly Cloudy","detailedForecast":"Mostly cloudy, with a low around 35."},{"number":8,"name":"Sunday","startTime":"2023-12-17T06:00:00-08:00","endTime":"2023-12-17T18:00:00-08:00","isDaytime":true,"temperature":42,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":0.5555555555555556},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":75},"windSpeed":"12 mph","windDirection":"E","icon":"https://api.weather.gov/icons/land/day/rain?size=medium","shortForecast":"Chance Light Rain","detailedForecast":"A chance of rain after 10am. Partly sunny, with a high near 42."},{"number":9,"name":"Sunday Night","startTime":"2023-12-17T18:00:00-08:00","endTime":"2023-12-18T06:00:00-08:00","isDaytime":false,"temperature":37,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":-0.5555555555555556},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":73},"windSpeed":"13 mph","windDirection":"E","icon":"https://api.weather.gov/icons/land/night/rain?size=medium","shortForecast":"Chance Light Rain","detailedForecast":"A chance of rain. Mostly cloudy, with a low around 37."},{"number":10,"name":"Monday","startTime":"2023-12-18T06:00:00-08:00","endTime":"2023-12-18T18:00:00-08:00","isDaytime":true,"temperature":40,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":2.2222222222222223},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":87},"windSpeed":"12 mph","windDirection":"ESE","icon":"https://api.weather.gov/icons/land/day/rain?size=medium","shortForecast":"Light Rain","detailedForecast":"Rain. Mostly cloudy, with a high near 40."},{"number":11,"name":"Monday Night","startTime":"2023-12-18T18:00:00-08:00","endTime":"2023-12-19T06:00:00-08:00","isDaytime":false,"temperature":38,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":1.6666666666666667},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":84},"windSpeed":"10 mph","windDirection":"E","icon":"https://api.weather.gov/icons/land/night/rain?size=medium","shortForecast":"Light Rain","detailedForecast":"Rain. Mostly cloudy, with a low around 38."},{"number":12,"name":"Tuesday","startTime":"2023-12-19T06:00:00-08:00","endTime":"2023-12-19T18:00:00-08:00","isDaytime":true,"temperature":40,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":2.7777777777777777},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":94},"windSpeed":"12 mph","windDirection":"ESE","icon":"https://api.weather.gov/icons/land/day/rain?size=medium","shortForecast":"Light Rain","detailedForecast":"Rain. Mostly cloudy, with a high near 40."},{"number":13,"name":"Tuesday Night","startTime":"2023-12-19T18:00:00-08:00","endTime":"2023-12-20T06:00:00-08:00","isDaytime":false,"temperature":35,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":1.6666666666666667},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":87},"windSpeed":"9 mph","windDirection":"ESE","icon":"https://api.weather.gov/icons/land/night/rain?size=medium","shortForecast":"Light Rain Likely","detailedForecast":"Rain likely. Mostly cloudy, with a low around 35."},{"number":14,"name":"Wednesday","startTime":"2023-12-20T06:00:00-08:00","endTime":"2023-12-20T18:00:00-08:00","isDaytime":true,"temperature":39,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":2.2222222222222223},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":93},"windSpeed":"9 mph","windDirection":"ESE","icon":"https://api.weather.gov/icons/land/day/rain?size=medium","shortForecast":"Chance Light Rain","detailedForecast":"A chance of rain before 5pm. Partly sunny, with a high near 39."}]}
  var hourly_SEW_150_72 = false
  var crags_config = [
  {
    "name": "Index",
    "note": "Fine-grained granite",
    "mountainProject": "https://www.mountainproject.com/area/105790635/index",
    "station": "TSTEV",
    "office": "SEW/150,72",
    "coordinates": [
      -121.556,
      47.82
    ]
  }
]</script>

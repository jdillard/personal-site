---
### THIS FILE IS AUTO-GENERATED - DO NOT EDIT ###
layout: page
title: Trout Creek, Oregon Climbing Weather - Current, Past, and Forecasted
title_override: Trout Creek<br /><small>Climbing Weather</small>
description: A lightweight weather report for Trout Creek, Oregon. Optimized for slow internet connections.
js_includes:
  - weather.js
---

<section class="measure center lh-copy f5-ns f6 ph2 mv4" style="text-align: justify;">
<strong>"Is it dry?"</strong>, an oft-repeated, age-old question. Here are real-time,
precipitation-focused reports of current, past, and forecasted climbing weather for Trout Creek, Oregon.
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
<section id="weather" data-crag="trout-creek-oregon" class="mv4-ns mv3 ph2 center"></section>
<section id="nearby" class="tc lh-copy">
  <h3>Nearby Crags</h3>
<a class="nowrap no-underline fancy-link relative light-red mh3" href="/crags/icicle-creek-washington-weather.html">Icicle Creek</a>
<a class="nowrap no-underline fancy-link relative light-red mh3" href="/crags/tieton-river-rock-washington-weather.html">Tieton River Rock</a>
<a class="nowrap no-underline fancy-link relative light-red mh3" href="/crags/vantage-washington-weather.html">Vantage</a>
<a class="nowrap no-underline fancy-link relative light-red mh3" href="/crags/mount-erie-washington-weather.html">Mount Erie</a>
<a class="nowrap no-underline fancy-link relative light-red mh3" href="/crags/index-washington-weather.html">Index</a>
<a class="nowrap no-underline fancy-link relative light-red mh3" href="/crags/darrington-washington-weather.html">Darrington</a>
<a class="nowrap no-underline fancy-link relative light-red mh3" href="/crags/smith-rock-oregon-weather.html">Smith Rock</a>
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
  var weekly_PDT_48_73 = {"updated":"2023-10-20T05:10:59+00:00","units":"us","forecastGenerator":"BaselineForecastGenerator","generatedAt":"2023-10-20T08:32:31+00:00","updateTime":"2023-10-20T05:10:59+00:00","validTimes":"2023-10-19T23:00:00+00:00/P7DT14H","elevation":{"unitCode":"wmoUnit:m","value":487.0704},"periods":[{"number":1,"name":"Overnight","startTime":"2023-10-20T01:00:00-07:00","endTime":"2023-10-20T06:00:00-07:00","isDaytime":false,"temperature":46,"temperatureUnit":"F","temperatureTrend":"rising","probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":6.666666666666667},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":82},"windSpeed":"3 mph","windDirection":"SW","icon":"https://api.weather.gov/icons/land/night/few?size=medium","shortForecast":"Mostly Clear","detailedForecast":"Mostly clear. Low around 46, with temperatures rising to around 49 overnight. Southwest wind around 3 mph."},{"number":2,"name":"Friday","startTime":"2023-10-20T06:00:00-07:00","endTime":"2023-10-20T18:00:00-07:00","isDaytime":true,"temperature":78,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":8.333333333333334},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":84},"windSpeed":"2 to 7 mph","windDirection":"NW","icon":"https://api.weather.gov/icons/land/day/sct?size=medium","shortForecast":"Mostly Sunny","detailedForecast":"Mostly sunny, with a high near 78. Northwest wind 2 to 7 mph."},{"number":3,"name":"Friday Night","startTime":"2023-10-20T18:00:00-07:00","endTime":"2023-10-21T06:00:00-07:00","isDaytime":false,"temperature":48,"temperatureUnit":"F","temperatureTrend":"rising","probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":8.333333333333334},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":78},"windSpeed":"2 to 7 mph","windDirection":"SW","icon":"https://api.weather.gov/icons/land/night/sct?size=medium","shortForecast":"Partly Cloudy","detailedForecast":"Partly cloudy. Low around 48, with temperatures rising to around 50 overnight. Southwest wind 2 to 7 mph."},{"number":4,"name":"Saturday","startTime":"2023-10-21T06:00:00-07:00","endTime":"2023-10-21T18:00:00-07:00","isDaytime":true,"temperature":76,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":11.11111111111111},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":79},"windSpeed":"2 to 12 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/day/bkn?size=medium","shortForecast":"Partly Sunny","detailedForecast":"Partly sunny, with a high near 76. West wind 2 to 12 mph."},{"number":5,"name":"Saturday Night","startTime":"2023-10-21T18:00:00-07:00","endTime":"2023-10-22T06:00:00-07:00","isDaytime":false,"temperature":50,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":50},"dewpoint":{"unitCode":"wmoUnit:degC","value":11.666666666666666},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":89},"windSpeed":"3 to 12 mph","windDirection":"NW","icon":"https://api.weather.gov/icons/land/night/rain,20/rain,50?size=medium","shortForecast":"Chance Light Rain","detailedForecast":"A chance of rain after 11pm. Mostly cloudy, with a low around 50. Northwest wind 3 to 12 mph. Chance of precipitation is 50%. New rainfall amounts less than a tenth of an inch possible."},{"number":6,"name":"Sunday","startTime":"2023-10-22T06:00:00-07:00","endTime":"2023-10-22T18:00:00-07:00","isDaytime":true,"temperature":64,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":60},"dewpoint":{"unitCode":"wmoUnit:degC","value":11.11111111111111},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":92},"windSpeed":"5 to 12 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/day/rain,60?size=medium","shortForecast":"Light Rain Likely","detailedForecast":"Rain likely. Mostly cloudy, with a high near 64. Chance of precipitation is 60%."},{"number":7,"name":"Sunday Night","startTime":"2023-10-22T18:00:00-07:00","endTime":"2023-10-23T06:00:00-07:00","isDaytime":false,"temperature":44,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":20},"dewpoint":{"unitCode":"wmoUnit:degC","value":9.444444444444445},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":90},"windSpeed":"6 to 12 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/night/rain,20/bkn?size=medium","shortForecast":"Slight Chance Light Rain then Mostly Cloudy","detailedForecast":"A slight chance of rain before 11pm. Mostly cloudy, with a low around 44. Chance of precipitation is 20%."},{"number":8,"name":"Monday","startTime":"2023-10-23T06:00:00-07:00","endTime":"2023-10-23T18:00:00-07:00","isDaytime":true,"temperature":65,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":7.222222222222222},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":84},"windSpeed":"6 to 13 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/day/sct?size=medium","shortForecast":"Mostly Sunny","detailedForecast":"Mostly sunny, with a high near 65."},{"number":9,"name":"Monday Night","startTime":"2023-10-23T18:00:00-07:00","endTime":"2023-10-24T06:00:00-07:00","isDaytime":false,"temperature":39,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":5},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":85},"windSpeed":"6 to 13 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/night/sct?size=medium","shortForecast":"Partly Cloudy","detailedForecast":"Partly cloudy, with a low around 39."},{"number":10,"name":"Tuesday","startTime":"2023-10-24T06:00:00-07:00","endTime":"2023-10-24T18:00:00-07:00","isDaytime":true,"temperature":63,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":4.444444444444445},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":83},"windSpeed":"6 to 12 mph","windDirection":"SW","icon":"https://api.weather.gov/icons/land/day/rain?size=medium","shortForecast":"Chance Light Rain","detailedForecast":"A chance of rain after 11am. Partly sunny, with a high near 63."},{"number":11,"name":"Tuesday Night","startTime":"2023-10-24T18:00:00-07:00","endTime":"2023-10-25T06:00:00-07:00","isDaytime":false,"temperature":40,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":4.444444444444445},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":78},"windSpeed":"12 mph","windDirection":"SW","icon":"https://api.weather.gov/icons/land/night/rain?size=medium","shortForecast":"Chance Light Rain","detailedForecast":"A chance of rain. Mostly cloudy, with a low around 40."},{"number":12,"name":"Wednesday","startTime":"2023-10-25T06:00:00-07:00","endTime":"2023-10-25T18:00:00-07:00","isDaytime":true,"temperature":60,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":6.666666666666667},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":72},"windSpeed":"10 to 15 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/day/rain/snow?size=medium","shortForecast":"Chance Light Rain then Chance Rain And Snow","detailedForecast":"A chance of rain before 5pm, then a chance of rain and snow. Partly sunny, with a high near 60."},{"number":13,"name":"Wednesday Night","startTime":"2023-10-25T18:00:00-07:00","endTime":"2023-10-26T06:00:00-07:00","isDaytime":false,"temperature":38,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":5},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":84},"windSpeed":"7 to 15 mph","windDirection":"SW","icon":"https://api.weather.gov/icons/land/night/snow?size=medium","shortForecast":"Chance Rain And Snow","detailedForecast":"A chance of rain and snow. Mostly cloudy, with a low around 38."},{"number":14,"name":"Thursday","startTime":"2023-10-26T06:00:00-07:00","endTime":"2023-10-26T18:00:00-07:00","isDaytime":true,"temperature":58,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":5.555555555555555},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":85},"windSpeed":"6 to 13 mph","windDirection":"SW","icon":"https://api.weather.gov/icons/land/day/snow?size=medium","shortForecast":"Slight Chance Rain And Snow","detailedForecast":"A slight chance of rain and snow. Partly sunny, with a high near 58."}]}
  var hourly_PDT_48_73 = false
  var crags_config = [
  {
    "name": "Trout Creek",
    "note": "Large basalt columns.",
    "mountainProject": "https://www.mountainproject.com/area/106505473/trout-creek",
    "station": "KS33",
    "office": "PDT/48,73",
    "coordinates": [
      -121.095,
      44.816
    ]
  }
]</script>

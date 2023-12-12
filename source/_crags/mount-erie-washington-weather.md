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
  var weekly_SEW_123_109 = {"updated":"2023-12-12T04:40:21+00:00","units":"us","forecastGenerator":"BaselineForecastGenerator","generatedAt":"2023-12-12T08:32:45+00:00","updateTime":"2023-12-12T04:40:21+00:00","validTimes":"2023-12-11T22:00:00+00:00/P7DT6H","elevation":{"unitCode":"wmoUnit:m","value":127.1016},"periods":[{"number":1,"name":"Overnight","startTime":"2023-12-12T00:00:00-08:00","endTime":"2023-12-12T06:00:00-08:00","isDaytime":false,"temperature":36,"temperatureUnit":"F","temperatureTrend":"rising","probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":4.444444444444445},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":99},"windSpeed":"3 mph","windDirection":"E","icon":"https://api.weather.gov/icons/land/night/bkn?size=medium","shortForecast":"Mostly Cloudy","detailedForecast":"Mostly cloudy. Low around 36, with temperatures rising to around 38 overnight. East wind around 3 mph."},{"number":2,"name":"Tuesday","startTime":"2023-12-12T06:00:00-08:00","endTime":"2023-12-12T18:00:00-08:00","isDaytime":true,"temperature":47,"temperatureUnit":"F","temperatureTrend":"falling","probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":5},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":96},"windSpeed":"2 to 6 mph","windDirection":"E","icon":"https://api.weather.gov/icons/land/day/sct?size=medium","shortForecast":"Mostly Sunny","detailedForecast":"Mostly sunny. High near 47, with temperatures falling to around 45 in the afternoon. East wind 2 to 6 mph."},{"number":3,"name":"Tuesday Night","startTime":"2023-12-12T18:00:00-08:00","endTime":"2023-12-13T06:00:00-08:00","isDaytime":false,"temperature":37,"temperatureUnit":"F","temperatureTrend":"rising","probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":4.444444444444445},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":92},"windSpeed":"6 to 13 mph","windDirection":"ESE","icon":"https://api.weather.gov/icons/land/night/bkn?size=medium","shortForecast":"Mostly Cloudy","detailedForecast":"Mostly cloudy. Low around 37, with temperatures rising to around 39 overnight. East southeast wind 6 to 13 mph."},{"number":4,"name":"Wednesday","startTime":"2023-12-13T06:00:00-08:00","endTime":"2023-12-13T18:00:00-08:00","isDaytime":true,"temperature":51,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":90},"dewpoint":{"unitCode":"wmoUnit:degC","value":4.444444444444445},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":75},"windSpeed":"12 to 17 mph","windDirection":"SE","icon":"https://api.weather.gov/icons/land/day/rain,30/rain,90?size=medium","shortForecast":"Light Rain","detailedForecast":"Rain after 10am. Cloudy, with a high near 51. Southeast wind 12 to 17 mph, with gusts as high as 24 mph. Chance of precipitation is 90%. New rainfall amounts between a tenth and quarter of an inch possible."},{"number":5,"name":"Wednesday Night","startTime":"2023-12-13T18:00:00-08:00","endTime":"2023-12-14T06:00:00-08:00","isDaytime":false,"temperature":40,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":90},"dewpoint":{"unitCode":"wmoUnit:degC","value":5},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":97},"windSpeed":"6 to 12 mph","windDirection":"SE","icon":"https://api.weather.gov/icons/land/night/rain,90?size=medium","shortForecast":"Light Rain","detailedForecast":"Rain. Cloudy, with a low around 40. Southeast wind 6 to 12 mph. Chance of precipitation is 90%. New rainfall amounts between a tenth and quarter of an inch possible."},{"number":6,"name":"Thursday","startTime":"2023-12-14T06:00:00-08:00","endTime":"2023-12-14T18:00:00-08:00","isDaytime":true,"temperature":49,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":30},"dewpoint":{"unitCode":"wmoUnit:degC","value":6.666666666666667},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":95},"windSpeed":"7 mph","windDirection":"NE","icon":"https://api.weather.gov/icons/land/day/rain,30/bkn?size=medium","shortForecast":"Chance Light Rain then Partly Sunny","detailedForecast":"A chance of rain before 10am. Partly sunny, with a high near 49. Chance of precipitation is 30%. New rainfall amounts less than a tenth of an inch possible."},{"number":7,"name":"Thursday Night","startTime":"2023-12-14T18:00:00-08:00","endTime":"2023-12-15T06:00:00-08:00","isDaytime":false,"temperature":38,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":30},"dewpoint":{"unitCode":"wmoUnit:degC","value":5.555555555555555},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":95},"windSpeed":"7 mph","windDirection":"ENE","icon":"https://api.weather.gov/icons/land/night/rain,20/rain,30?size=medium","shortForecast":"Chance Light Rain","detailedForecast":"A chance of rain after 10pm. Mostly cloudy, with a low around 38. Chance of precipitation is 30%."},{"number":8,"name":"Friday","startTime":"2023-12-15T06:00:00-08:00","endTime":"2023-12-15T18:00:00-08:00","isDaytime":true,"temperature":51,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":5.555555555555555},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":88},"windSpeed":"9 mph","windDirection":"ESE","icon":"https://api.weather.gov/icons/land/day/rain?size=medium","shortForecast":"Chance Light Rain","detailedForecast":"A chance of rain. Mostly cloudy, with a high near 51."},{"number":9,"name":"Friday Night","startTime":"2023-12-15T18:00:00-08:00","endTime":"2023-12-16T06:00:00-08:00","isDaytime":false,"temperature":38,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":4.444444444444445},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":89},"windSpeed":"9 mph","windDirection":"ESE","icon":"https://api.weather.gov/icons/land/night/rain?size=medium","shortForecast":"Slight Chance Light Rain","detailedForecast":"A slight chance of rain before 4am. Mostly cloudy, with a low around 38."},{"number":10,"name":"Saturday","startTime":"2023-12-16T06:00:00-08:00","endTime":"2023-12-16T18:00:00-08:00","isDaytime":true,"temperature":50,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":5.555555555555555},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":87},"windSpeed":"8 mph","windDirection":"NE","icon":"https://api.weather.gov/icons/land/day/bkn?size=medium","shortForecast":"Partly Sunny","detailedForecast":"Partly sunny, with a high near 50."},{"number":11,"name":"Saturday Night","startTime":"2023-12-16T18:00:00-08:00","endTime":"2023-12-17T06:00:00-08:00","isDaytime":false,"temperature":37,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":5},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":92},"windSpeed":"7 mph","windDirection":"N","icon":"https://api.weather.gov/icons/land/night/sct?size=medium","shortForecast":"Partly Cloudy","detailedForecast":"Partly cloudy, with a low around 37."},{"number":12,"name":"Sunday","startTime":"2023-12-17T06:00:00-08:00","endTime":"2023-12-17T18:00:00-08:00","isDaytime":true,"temperature":48,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":5},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":91},"windSpeed":"7 mph","windDirection":"NNE","icon":"https://api.weather.gov/icons/land/day/bkn/rain?size=medium","shortForecast":"Partly Sunny then Slight Chance Light Rain","detailedForecast":"A slight chance of rain after 4pm. Partly sunny, with a high near 48."},{"number":13,"name":"Sunday Night","startTime":"2023-12-17T18:00:00-08:00","endTime":"2023-12-18T06:00:00-08:00","isDaytime":false,"temperature":38,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":4.444444444444445},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":91},"windSpeed":"8 mph","windDirection":"ENE","icon":"https://api.weather.gov/icons/land/night/rain?size=medium","shortForecast":"Chance Light Rain","detailedForecast":"A chance of rain. Mostly cloudy, with a low around 38."},{"number":14,"name":"Monday","startTime":"2023-12-18T06:00:00-08:00","endTime":"2023-12-18T18:00:00-08:00","isDaytime":true,"temperature":50,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":6.111111111111111},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":85},"windSpeed":"8 to 14 mph","windDirection":"ESE","icon":"https://api.weather.gov/icons/land/day/rain?size=medium","shortForecast":"Chance Light Rain","detailedForecast":"A chance of rain before 5pm. Mostly cloudy, with a high near 50."}]}
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

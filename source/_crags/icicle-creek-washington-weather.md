---
### THIS FILE IS AUTO-GENERATED - DO NOT EDIT ###
layout: page
title: Icicle Creek, Washington Climbing Weather - Current, Past, and Forecasted Report
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
  var weekly_OTX_35_103 = {"updated":"2023-02-12T07:35:59+00:00","units":"us","forecastGenerator":"BaselineForecastGenerator","generatedAt":"2023-02-12T08:33:36+00:00","updateTime":"2023-02-12T07:35:59+00:00","validTimes":"2023-02-12T01:00:00+00:00/P7DT15H","elevation":{"unitCode":"wmoUnit:m","value":627.888},"periods":[{"number":1,"name":"Overnight","startTime":"2023-02-12T00:00:00-08:00","endTime":"2023-02-12T06:00:00-08:00","isDaytime":false,"temperature":29,"temperatureUnit":"F","temperatureTrend":"rising","probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":-5},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":73},"windSpeed":"7 mph","windDirection":"NW","icon":"https://api.weather.gov/icons/land/night/few?size=medium","shortForecast":"Mostly Clear","detailedForecast":"Mostly clear. Low around 29, with temperatures rising to around 31 overnight. Northwest wind around 7 mph."},{"number":2,"name":"Sunday","startTime":"2023-02-12T06:00:00-08:00","endTime":"2023-02-12T18:00:00-08:00","isDaytime":true,"temperature":44,"temperatureUnit":"F","temperatureTrend":"falling","probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":3.3333333333333335},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":85},"windSpeed":"7 mph","windDirection":"E","icon":"https://api.weather.gov/icons/land/day/bkn?size=medium","shortForecast":"Partly Sunny","detailedForecast":"Partly sunny. High near 44, with temperatures falling to around 41 in the afternoon. East wind around 7 mph. New rainfall amounts less than a tenth of an inch possible."},{"number":3,"name":"Sunday Night","startTime":"2023-02-12T18:00:00-08:00","endTime":"2023-02-13T06:00:00-08:00","isDaytime":false,"temperature":31,"temperatureUnit":"F","temperatureTrend":"rising","probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":50},"dewpoint":{"unitCode":"wmoUnit:degC","value":2.2222222222222223},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":89},"windSpeed":"7 to 23 mph","windDirection":"SW","icon":"https://api.weather.gov/icons/land/night/rain,40/snow,50?size=medium","shortForecast":"Chance Light Rain then Chance Rain And Snow","detailedForecast":"A chance of rain between 10pm and 4am, then a chance of rain and snow. Mostly cloudy. Low around 31, with temperatures rising to around 33 overnight. Southwest wind 7 to 23 mph, with gusts as high as 36 mph. Chance of precipitation is 50%. New snow accumulation of less than half an inch possible."},{"number":4,"name":"Monday","startTime":"2023-02-13T06:00:00-08:00","endTime":"2023-02-13T18:00:00-08:00","isDaytime":true,"temperature":36,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":60},"dewpoint":{"unitCode":"wmoUnit:degC","value":-3.888888888888889},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":76},"windSpeed":"17 to 23 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/day/snow,60?size=medium","shortForecast":"Rain And Snow Likely","detailedForecast":"Rain and snow likely before 4pm, then a chance of snow showers. Partly sunny, with a high near 36. West wind 17 to 23 mph, with gusts as high as 36 mph. Chance of precipitation is 60%. New snow accumulation of around one inch possible."},{"number":5,"name":"Monday Night","startTime":"2023-02-13T18:00:00-08:00","endTime":"2023-02-14T06:00:00-08:00","isDaytime":false,"temperature":22,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":40},"dewpoint":{"unitCode":"wmoUnit:degC","value":-6.111111111111111},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":72},"windSpeed":"16 to 20 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/night/snow,40/bkn?size=medium","shortForecast":"Chance Snow Showers then Mostly Cloudy","detailedForecast":"A chance of snow showers before 10pm. Mostly cloudy, with a low around 22. West wind 16 to 20 mph, with gusts as high as 28 mph. Chance of precipitation is 40%. New snow accumulation of less than half an inch possible."},{"number":6,"name":"Tuesday","startTime":"2023-02-14T06:00:00-08:00","endTime":"2023-02-14T18:00:00-08:00","isDaytime":true,"temperature":35,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":-6.111111111111111},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":71},"windSpeed":"9 to 16 mph","windDirection":"NW","icon":"https://api.weather.gov/icons/land/day/sct?size=medium","shortForecast":"Mostly Sunny","detailedForecast":"Mostly sunny, with a high near 35."},{"number":7,"name":"Tuesday Night","startTime":"2023-02-14T18:00:00-08:00","endTime":"2023-02-15T06:00:00-08:00","isDaytime":false,"temperature":18,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":-8.88888888888889},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":71},"windSpeed":"9 mph","windDirection":"NW","icon":"https://api.weather.gov/icons/land/night/few?size=medium","shortForecast":"Mostly Clear","detailedForecast":"Mostly clear, with a low around 18."},{"number":8,"name":"Wednesday","startTime":"2023-02-15T06:00:00-08:00","endTime":"2023-02-15T18:00:00-08:00","isDaytime":true,"temperature":37,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":-5.555555555555555},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":72},"windSpeed":"8 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/day/few?size=medium","shortForecast":"Sunny","detailedForecast":"Sunny, with a high near 37."},{"number":9,"name":"Wednesday Night","startTime":"2023-02-15T18:00:00-08:00","endTime":"2023-02-16T06:00:00-08:00","isDaytime":false,"temperature":21,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":-8.333333333333334},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":68},"windSpeed":"7 mph","windDirection":"SW","icon":"https://api.weather.gov/icons/land/night/sct?size=medium","shortForecast":"Partly Cloudy","detailedForecast":"Partly cloudy, with a low around 21."},{"number":10,"name":"Thursday","startTime":"2023-02-16T06:00:00-08:00","endTime":"2023-02-16T18:00:00-08:00","isDaytime":true,"temperature":35,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":20},"dewpoint":{"unitCode":"wmoUnit:degC","value":-3.888888888888889},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":70},"windSpeed":"8 mph","windDirection":"SE","icon":"https://api.weather.gov/icons/land/day/snow,20?size=medium","shortForecast":"Slight Chance Light Snow","detailedForecast":"A slight chance of snow after 10am. Partly sunny, with a high near 35. Chance of precipitation is 20%."},{"number":11,"name":"Thursday Night","startTime":"2023-02-16T18:00:00-08:00","endTime":"2023-02-17T06:00:00-08:00","isDaytime":false,"temperature":23,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":20},"dewpoint":{"unitCode":"wmoUnit:degC","value":-6.666666666666667},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":73},"windSpeed":"7 mph","windDirection":"SW","icon":"https://api.weather.gov/icons/land/night/snow,20?size=medium","shortForecast":"Slight Chance Light Snow","detailedForecast":"A slight chance of snow. Mostly cloudy, with a low around 23. Chance of precipitation is 20%."},{"number":12,"name":"Friday","startTime":"2023-02-17T06:00:00-08:00","endTime":"2023-02-17T18:00:00-08:00","isDaytime":true,"temperature":39,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":20},"dewpoint":{"unitCode":"wmoUnit:degC","value":-2.2222222222222223},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":72},"windSpeed":"8 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/day/snow,20?size=medium","shortForecast":"Slight Chance Light Snow","detailedForecast":"A slight chance of snow before 4pm. Mostly sunny, with a high near 39. Chance of precipitation is 20%."},{"number":13,"name":"Friday Night","startTime":"2023-02-17T18:00:00-08:00","endTime":"2023-02-18T06:00:00-08:00","isDaytime":false,"temperature":25,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":-5},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":75},"windSpeed":"9 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/night/sct?size=medium","shortForecast":"Partly Cloudy","detailedForecast":"Partly cloudy, with a low around 25."},{"number":14,"name":"Saturday","startTime":"2023-02-18T06:00:00-08:00","endTime":"2023-02-18T18:00:00-08:00","isDaytime":true,"temperature":39,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":30},"dewpoint":{"unitCode":"wmoUnit:degC","value":-1.6666666666666667},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":74},"windSpeed":"10 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/day/snow,20/snow,30?size=medium","shortForecast":"Slight Chance Light Snow","detailedForecast":"A slight chance of snow between 10am and 4pm, then a chance of rain and snow. Partly sunny, with a high near 39. Chance of precipitation is 30%."}]}
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

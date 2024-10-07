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
  var weekly_SEW_150_72 = {"units":"us","forecastGenerator":"BaselineForecastGenerator","generatedAt":"2024-10-07T08:36:10+00:00","updateTime":"2024-10-07T08:33:22+00:00","validTimes":"2024-10-07T02:00:00+00:00/P7DT2H","elevation":{"unitCode":"wmoUnit:m","value":402.9456},"periods":[{"number":1,"name":"Overnight","startTime":"2024-10-07T01:00:00-07:00","endTime":"2024-10-07T06:00:00-07:00","isDaytime":false,"temperature":49,"temperatureUnit":"F","temperatureTrend":"","probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"windSpeed":"8 mph","windDirection":"SE","icon":"https://api.weather.gov/icons/land/night/few?size=medium","shortForecast":"Mostly Clear","detailedForecast":"Mostly clear, with a low around 49. Southeast wind around 8 mph."},{"number":2,"name":"Monday","startTime":"2024-10-07T06:00:00-07:00","endTime":"2024-10-07T18:00:00-07:00","isDaytime":true,"temperature":66,"temperatureUnit":"F","temperatureTrend":"","probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"windSpeed":"2 to 6 mph","windDirection":"SW","icon":"https://api.weather.gov/icons/land/day/few?size=medium","shortForecast":"Sunny","detailedForecast":"Sunny. High near 66, with temperatures falling to around 64 in the afternoon. Southwest wind 2 to 6 mph."},{"number":3,"name":"Monday Night","startTime":"2024-10-07T18:00:00-07:00","endTime":"2024-10-08T06:00:00-07:00","isDaytime":false,"temperature":50,"temperatureUnit":"F","temperatureTrend":"","probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":70},"windSpeed":"2 to 6 mph","windDirection":"SSE","icon":"https://api.weather.gov/icons/land/night/rain,20/rain,70?size=medium","shortForecast":"Light Rain","detailedForecast":"Rain after 11pm. Partly cloudy. Low around 50, with temperatures rising to around 52 overnight. South southeast wind 2 to 6 mph. Chance of precipitation is 70%. New rainfall amounts less than a tenth of an inch possible."},{"number":4,"name":"Tuesday","startTime":"2024-10-08T06:00:00-07:00","endTime":"2024-10-08T18:00:00-07:00","isDaytime":true,"temperature":54,"temperatureUnit":"F","temperatureTrend":"","probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":70},"windSpeed":"5 mph","windDirection":"SSW","icon":"https://api.weather.gov/icons/land/day/rain,70?size=medium","shortForecast":"Light Rain","detailedForecast":"Rain. Mostly cloudy, with a high near 54. South southwest wind around 5 mph. Chance of precipitation is 70%. New rainfall amounts between a tenth and quarter of an inch possible."},{"number":5,"name":"Tuesday Night","startTime":"2024-10-08T18:00:00-07:00","endTime":"2024-10-09T06:00:00-07:00","isDaytime":false,"temperature":46,"temperatureUnit":"F","temperatureTrend":"","probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":70},"windSpeed":"3 mph","windDirection":"SW","icon":"https://api.weather.gov/icons/land/night/rain,70?size=medium","shortForecast":"Light Rain Likely","detailedForecast":"Rain likely. Mostly cloudy, with a low around 46. Southwest wind around 3 mph. Chance of precipitation is 70%. New rainfall amounts between a tenth and quarter of an inch possible."},{"number":6,"name":"Wednesday","startTime":"2024-10-09T06:00:00-07:00","endTime":"2024-10-09T18:00:00-07:00","isDaytime":true,"temperature":49,"temperatureUnit":"F","temperatureTrend":"","probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":70},"windSpeed":"2 to 9 mph","windDirection":"WSW","icon":"https://api.weather.gov/icons/land/day/rain,70/rain,60?size=medium","shortForecast":"Light Rain Likely","detailedForecast":"Rain likely. Mostly cloudy, with a high near 49. Chance of precipitation is 70%. New rainfall amounts between a tenth and quarter of an inch possible."},{"number":7,"name":"Wednesday Night","startTime":"2024-10-09T18:00:00-07:00","endTime":"2024-10-10T06:00:00-07:00","isDaytime":false,"temperature":42,"temperatureUnit":"F","temperatureTrend":"","probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":50},"windSpeed":"6 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/night/rain,50/rain,40?size=medium","shortForecast":"Light Rain Likely","detailedForecast":"Rain likely before 5am. Mostly cloudy, with a low around 42. Chance of precipitation is 50%."},{"number":8,"name":"Thursday","startTime":"2024-10-10T06:00:00-07:00","endTime":"2024-10-10T18:00:00-07:00","isDaytime":true,"temperature":51,"temperatureUnit":"F","temperatureTrend":"","probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"windSpeed":"5 mph","windDirection":"NNE","icon":"https://api.weather.gov/icons/land/day/bkn?size=medium","shortForecast":"Partly Sunny","detailedForecast":"Partly sunny, with a high near 51."},{"number":9,"name":"Thursday Night","startTime":"2024-10-10T18:00:00-07:00","endTime":"2024-10-11T06:00:00-07:00","isDaytime":false,"temperature":41,"temperatureUnit":"F","temperatureTrend":"","probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"windSpeed":"3 to 13 mph","windDirection":"ENE","icon":"https://api.weather.gov/icons/land/night/bkn/rain?size=medium","shortForecast":"Mostly Cloudy then Slight Chance Light Rain","detailedForecast":"A slight chance of rain after 5am. Mostly cloudy, with a low around 41."},{"number":10,"name":"Friday","startTime":"2024-10-11T06:00:00-07:00","endTime":"2024-10-11T18:00:00-07:00","isDaytime":true,"temperature":54,"temperatureUnit":"F","temperatureTrend":"","probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"windSpeed":"3 to 12 mph","windDirection":"NE","icon":"https://api.weather.gov/icons/land/day/rain?size=medium","shortForecast":"Chance Light Rain","detailedForecast":"A chance of rain. Partly sunny, with a high near 54."},{"number":11,"name":"Friday Night","startTime":"2024-10-11T18:00:00-07:00","endTime":"2024-10-12T06:00:00-07:00","isDaytime":false,"temperature":47,"temperatureUnit":"F","temperatureTrend":"","probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"windSpeed":"3 to 9 mph","windDirection":"NE","icon":"https://api.weather.gov/icons/land/night/rain?size=medium","shortForecast":"Chance Light Rain","detailedForecast":"A chance of rain. Mostly cloudy, with a low around 47."},{"number":12,"name":"Saturday","startTime":"2024-10-12T06:00:00-07:00","endTime":"2024-10-12T18:00:00-07:00","isDaytime":true,"temperature":55,"temperatureUnit":"F","temperatureTrend":"","probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"windSpeed":"3 to 8 mph","windDirection":"S","icon":"https://api.weather.gov/icons/land/day/rain?size=medium","shortForecast":"Chance Light Rain","detailedForecast":"A chance of rain. Partly sunny, with a high near 55."},{"number":13,"name":"Saturday Night","startTime":"2024-10-12T18:00:00-07:00","endTime":"2024-10-13T06:00:00-07:00","isDaytime":false,"temperature":49,"temperatureUnit":"F","temperatureTrend":"","probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"windSpeed":"3 to 10 mph","windDirection":"SSE","icon":"https://api.weather.gov/icons/land/night/rain?size=medium","shortForecast":"Chance Light Rain","detailedForecast":"A chance of rain. Mostly cloudy, with a low around 49."},{"number":14,"name":"Sunday","startTime":"2024-10-13T06:00:00-07:00","endTime":"2024-10-13T18:00:00-07:00","isDaytime":true,"temperature":57,"temperatureUnit":"F","temperatureTrend":"","probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"windSpeed":"5 to 9 mph","windDirection":"SSW","icon":"https://api.weather.gov/icons/land/day/rain?size=medium","shortForecast":"Chance Light Rain","detailedForecast":"A chance of rain. Partly sunny, with a high near 57."}]}
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

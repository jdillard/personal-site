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
  var weekly_SEW_123_109 = {"updated":"2023-09-27T04:40:23+00:00","units":"us","forecastGenerator":"BaselineForecastGenerator","generatedAt":"2023-09-27T08:32:24+00:00","updateTime":"2023-09-27T04:40:23+00:00","validTimes":"2023-09-26T22:00:00+00:00/P7DT6H","elevation":{"unitCode":"wmoUnit:m","value":127.1016},"periods":[{"number":1,"name":"Overnight","startTime":"2023-09-27T01:00:00-07:00","endTime":"2023-09-27T06:00:00-07:00","isDaytime":false,"temperature":50,"temperatureUnit":"F","temperatureTrend":"rising","probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":90},"dewpoint":{"unitCode":"wmoUnit:degC","value":10.555555555555555},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":89},"windSpeed":"13 to 17 mph","windDirection":"ESE","icon":"https://api.weather.gov/icons/land/night/rain,90?size=medium","shortForecast":"Light Rain","detailedForecast":"Rain. Cloudy. Low around 50, with temperatures rising to around 52 overnight. East southeast wind 13 to 17 mph. Chance of precipitation is 90%. New rainfall amounts between a tenth and quarter of an inch possible."},{"number":2,"name":"Wednesday","startTime":"2023-09-27T06:00:00-07:00","endTime":"2023-09-27T18:00:00-07:00","isDaytime":true,"temperature":62,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":90},"dewpoint":{"unitCode":"wmoUnit:degC","value":12.777777777777779},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":94},"windSpeed":"6 to 14 mph","windDirection":"SSW","icon":"https://api.weather.gov/icons/land/day/rain,90/rain,70?size=medium","shortForecast":"Light Rain","detailedForecast":"Rain. Mostly cloudy, with a high near 62. South southwest wind 6 to 14 mph. Chance of precipitation is 90%. New rainfall amounts between a tenth and quarter of an inch possible."},{"number":3,"name":"Wednesday Night","startTime":"2023-09-27T18:00:00-07:00","endTime":"2023-09-28T06:00:00-07:00","isDaytime":false,"temperature":49,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":100},"dewpoint":{"unitCode":"wmoUnit:degC","value":12.222222222222221},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":97},"windSpeed":"8 mph","windDirection":"S","icon":"https://api.weather.gov/icons/land/night/rain,90/rain,100?size=medium","shortForecast":"Light Rain","detailedForecast":"Rain. Cloudy, with a low around 49. South wind around 8 mph. Chance of precipitation is 100%. New rainfall amounts between a quarter and half of an inch possible."},{"number":4,"name":"Thursday","startTime":"2023-09-28T06:00:00-07:00","endTime":"2023-09-28T18:00:00-07:00","isDaytime":true,"temperature":62,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":100},"dewpoint":{"unitCode":"wmoUnit:degC","value":11.666666666666666},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":96},"windSpeed":"7 to 10 mph","windDirection":"SSW","icon":"https://api.weather.gov/icons/land/day/rain,100/rain,90?size=medium","shortForecast":"Light Rain","detailedForecast":"Rain. Cloudy, with a high near 62. South southwest wind 7 to 10 mph. Chance of precipitation is 100%. New rainfall amounts between a tenth and quarter of an inch possible."},{"number":5,"name":"Thursday Night","startTime":"2023-09-28T18:00:00-07:00","endTime":"2023-09-29T06:00:00-07:00","isDaytime":false,"temperature":46,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":70},"dewpoint":{"unitCode":"wmoUnit:degC","value":10},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":92},"windSpeed":"7 mph","windDirection":"SW","icon":"https://api.weather.gov/icons/land/night/rain,70/rain,60?size=medium","shortForecast":"Light Rain Likely","detailedForecast":"Rain likely. Mostly cloudy, with a low around 46. Southwest wind around 7 mph. Chance of precipitation is 70%. New rainfall amounts less than a tenth of an inch possible."},{"number":6,"name":"Friday","startTime":"2023-09-29T06:00:00-07:00","endTime":"2023-09-29T18:00:00-07:00","isDaytime":true,"temperature":60,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":40},"dewpoint":{"unitCode":"wmoUnit:degC","value":10},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":93},"windSpeed":"3 to 10 mph","windDirection":"WNW","icon":"https://api.weather.gov/icons/land/day/rain,40/rain,30?size=medium","shortForecast":"Chance Light Rain","detailedForecast":"A chance of rain. Partly sunny, with a high near 60. Chance of precipitation is 40%. New rainfall amounts less than a tenth of an inch possible."},{"number":7,"name":"Friday Night","startTime":"2023-09-29T18:00:00-07:00","endTime":"2023-09-30T06:00:00-07:00","isDaytime":false,"temperature":44,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":20},"dewpoint":{"unitCode":"wmoUnit:degC","value":9.444444444444445},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":90},"windSpeed":"6 to 10 mph","windDirection":"NNW","icon":"https://api.weather.gov/icons/land/night/rain,20/sct?size=medium","shortForecast":"Slight Chance Light Rain then Partly Cloudy","detailedForecast":"A slight chance of rain before 11pm. Partly cloudy, with a low around 44. Chance of precipitation is 20%."},{"number":8,"name":"Saturday","startTime":"2023-09-30T06:00:00-07:00","endTime":"2023-09-30T18:00:00-07:00","isDaytime":true,"temperature":61,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":10.555555555555555},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":92},"windSpeed":"6 to 9 mph","windDirection":"NNW","icon":"https://api.weather.gov/icons/land/day/sct?size=medium","shortForecast":"Mostly Sunny","detailedForecast":"Mostly sunny, with a high near 61."},{"number":9,"name":"Saturday Night","startTime":"2023-09-30T18:00:00-07:00","endTime":"2023-10-01T06:00:00-07:00","isDaytime":false,"temperature":45,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":10},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":91},"windSpeed":"8 mph","windDirection":"NNW","icon":"https://api.weather.gov/icons/land/night/few?size=medium","shortForecast":"Mostly Clear","detailedForecast":"Mostly clear, with a low around 45."},{"number":10,"name":"Sunday","startTime":"2023-10-01T06:00:00-07:00","endTime":"2023-10-01T18:00:00-07:00","isDaytime":true,"temperature":63,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":11.11111111111111},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":92},"windSpeed":"7 mph","windDirection":"NNW","icon":"https://api.weather.gov/icons/land/day/sct?size=medium","shortForecast":"Mostly Sunny","detailedForecast":"Mostly sunny, with a high near 63."},{"number":11,"name":"Sunday Night","startTime":"2023-10-01T18:00:00-07:00","endTime":"2023-10-02T06:00:00-07:00","isDaytime":false,"temperature":46,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":11.11111111111111},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":91},"windSpeed":"8 mph","windDirection":"SSW","icon":"https://api.weather.gov/icons/land/night/sct/rain?size=medium","shortForecast":"Partly Cloudy then Chance Light Rain","detailedForecast":"A chance of rain after 5am. Partly cloudy, with a low around 46."},{"number":12,"name":"Monday","startTime":"2023-10-02T06:00:00-07:00","endTime":"2023-10-02T18:00:00-07:00","isDaytime":true,"temperature":63,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":11.666666666666666},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":93},"windSpeed":"8 to 12 mph","windDirection":"S","icon":"https://api.weather.gov/icons/land/day/rain?size=medium","shortForecast":"Chance Light Rain","detailedForecast":"A chance of rain. Partly sunny, with a high near 63."},{"number":13,"name":"Monday Night","startTime":"2023-10-02T18:00:00-07:00","endTime":"2023-10-03T06:00:00-07:00","isDaytime":false,"temperature":49,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":11.11111111111111},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":89},"windSpeed":"13 mph","windDirection":"SW","icon":"https://api.weather.gov/icons/land/night/rain?size=medium","shortForecast":"Light Rain Likely","detailedForecast":"Rain likely. Mostly cloudy, with a low around 49."},{"number":14,"name":"Tuesday","startTime":"2023-10-03T06:00:00-07:00","endTime":"2023-10-03T18:00:00-07:00","isDaytime":true,"temperature":61,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":10.555555555555555},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":89},"windSpeed":"12 mph","windDirection":"SW","icon":"https://api.weather.gov/icons/land/day/rain?size=medium","shortForecast":"Chance Light Rain","detailedForecast":"A chance of rain. Mostly cloudy, with a high near 61."}]}
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

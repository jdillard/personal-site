---
### THIS FILE IS AUTO-GENERATED - DO NOT EDIT ###
layout: page
title: Smith Rock, Oregon Climbing Weather - Current, Past, and Forecasted
title_override: Smith Rock<br /><small>Climbing Weather</small>
description: A lightweight weather report for Smith Rock, Oregon. Optimized for slow internet connections.
js_includes:
  - weather.js
---

<section class="measure center lh-copy f5-ns f6 ph2 mv4" style="text-align: justify;">
<strong>"Is it dry?"</strong>, an oft-repeated, age-old question. Here are real-time,
precipitation-focused reports of current, past, and forecasted climbing weather for Smith Rock, Oregon.
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
<section id="weather" data-crag="smith-rock-oregon" class="mv4-ns mv3 ph2 center"></section>
<section id="nearby" class="tc lh-copy">
  <h3>Nearby Crags</h3>
<a class="nowrap no-underline fancy-link relative light-red mh3" href="/crags/icicle-creek-washington-weather.html">Icicle Creek</a>
<a class="nowrap no-underline fancy-link relative light-red mh3" href="/crags/tieton-river-rock-washington-weather.html">Tieton River Rock</a>
<a class="nowrap no-underline fancy-link relative light-red mh3" href="/crags/vantage-washington-weather.html">Vantage</a>
<a class="nowrap no-underline fancy-link relative light-red mh3" href="/crags/mount-erie-washington-weather.html">Mount Erie</a>
<a class="nowrap no-underline fancy-link relative light-red mh3" href="/crags/index-washington-weather.html">Index</a>
<a class="nowrap no-underline fancy-link relative light-red mh3" href="/crags/darrington-washington-weather.html">Darrington</a>
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
  var weekly_PDT_43_53 = {"updated":"2023-11-04T06:06:23+00:00","units":"us","forecastGenerator":"BaselineForecastGenerator","generatedAt":"2023-11-04T08:31:43+00:00","updateTime":"2023-11-04T06:06:23+00:00","validTimes":"2023-11-04T00:00:00+00:00/P7DT13H","elevation":{"unitCode":"wmoUnit:m","value":853.1352},"periods":[{"number":1,"name":"Overnight","startTime":"2023-11-04T01:00:00-07:00","endTime":"2023-11-04T06:00:00-07:00","isDaytime":false,"temperature":52,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":80},"dewpoint":{"unitCode":"wmoUnit:degC","value":8.88888888888889},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":82},"windSpeed":"14 mph","windDirection":"SE","icon":"https://api.weather.gov/icons/land/night/rain,80?size=medium","shortForecast":"Light Rain","detailedForecast":"Rain. Cloudy, with a low around 52. Southeast wind around 14 mph, with gusts as high as 22 mph. Chance of precipitation is 80%. New rainfall amounts less than a tenth of an inch possible."},{"number":2,"name":"Saturday","startTime":"2023-11-04T06:00:00-07:00","endTime":"2023-11-04T18:00:00-07:00","isDaytime":true,"temperature":63,"temperatureUnit":"F","temperatureTrend":"falling","probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":60},"dewpoint":{"unitCode":"wmoUnit:degC","value":10.555555555555555},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":85},"windSpeed":"14 to 22 mph","windDirection":"S","icon":"https://api.weather.gov/icons/land/day/rain,60?size=medium","shortForecast":"Light Rain Likely","detailedForecast":"Rain likely. Mostly cloudy. High near 63, with temperatures falling to around 55 in the afternoon. South wind 14 to 22 mph, with gusts as high as 31 mph. Chance of precipitation is 60%. New rainfall amounts less than a tenth of an inch possible."},{"number":3,"name":"Saturday Night","startTime":"2023-11-04T18:00:00-07:00","endTime":"2023-11-05T06:00:00-08:00","isDaytime":false,"temperature":36,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":40},"dewpoint":{"unitCode":"wmoUnit:degC","value":7.777777777777778},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":93},"windSpeed":"6 to 15 mph","windDirection":"S","icon":"https://api.weather.gov/icons/land/night/rain,40/sct?size=medium","shortForecast":"Chance Light Rain then Partly Cloudy","detailedForecast":"A chance of rain before 11pm. Partly cloudy, with a low around 36. South wind 6 to 15 mph, with gusts as high as 21 mph. Chance of precipitation is 40%. New rainfall amounts less than a tenth of an inch possible."},{"number":4,"name":"Sunday","startTime":"2023-11-05T06:00:00-08:00","endTime":"2023-11-05T18:00:00-08:00","isDaytime":true,"temperature":56,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":50},"dewpoint":{"unitCode":"wmoUnit:degC","value":5.555555555555555},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":94},"windSpeed":"7 to 14 mph","windDirection":"S","icon":"https://api.weather.gov/icons/land/day/rain,30/rain,50?size=medium","shortForecast":"Chance Light Rain","detailedForecast":"A chance of rain after 10am. Partly sunny, with a high near 56. South wind 7 to 14 mph, with gusts as high as 18 mph. Chance of precipitation is 50%. New rainfall amounts less than a tenth of an inch possible."},{"number":5,"name":"Sunday Night","startTime":"2023-11-05T18:00:00-08:00","endTime":"2023-11-06T06:00:00-08:00","isDaytime":false,"temperature":39,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":70},"dewpoint":{"unitCode":"wmoUnit:degC","value":3.3333333333333335},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":83},"windSpeed":"9 to 14 mph","windDirection":"S","icon":"https://api.weather.gov/icons/land/night/rain,70?size=medium","shortForecast":"Light Rain Likely","detailedForecast":"Rain likely. Mostly cloudy, with a low around 39. South wind 9 to 14 mph, with gusts as high as 20 mph. Chance of precipitation is 70%. New rainfall amounts between a tenth and quarter of an inch possible."},{"number":6,"name":"Monday","startTime":"2023-11-06T06:00:00-08:00","endTime":"2023-11-06T18:00:00-08:00","isDaytime":true,"temperature":54,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":70},"dewpoint":{"unitCode":"wmoUnit:degC","value":4.444444444444445},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":85},"windSpeed":"14 to 26 mph","windDirection":"SW","icon":"https://api.weather.gov/icons/land/day/rain,70/rain,50?size=medium","shortForecast":"Light Rain Likely","detailedForecast":"Rain likely. Partly sunny, with a high near 54. Chance of precipitation is 70%."},{"number":7,"name":"Monday Night","startTime":"2023-11-06T18:00:00-08:00","endTime":"2023-11-07T06:00:00-08:00","isDaytime":false,"temperature":32,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":40},"dewpoint":{"unitCode":"wmoUnit:degC","value":1.6666666666666667},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":90},"windSpeed":"8 to 22 mph","windDirection":"SW","icon":"https://api.weather.gov/icons/land/night/rain,40?size=medium","shortForecast":"Chance Light Rain","detailedForecast":"A chance of rain. Mostly cloudy, with a low around 32. Chance of precipitation is 40%."},{"number":8,"name":"Tuesday","startTime":"2023-11-07T06:00:00-08:00","endTime":"2023-11-07T18:00:00-08:00","isDaytime":true,"temperature":50,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":50},"dewpoint":{"unitCode":"wmoUnit:degC","value":3.3333333333333335},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":79},"windSpeed":"8 to 13 mph","windDirection":"SW","icon":"https://api.weather.gov/icons/land/day/rain,50?size=medium","shortForecast":"Chance Light Rain","detailedForecast":"A chance of rain. Partly sunny, with a high near 50. Chance of precipitation is 50%."},{"number":9,"name":"Tuesday Night","startTime":"2023-11-07T18:00:00-08:00","endTime":"2023-11-08T06:00:00-08:00","isDaytime":false,"temperature":26,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":20},"dewpoint":{"unitCode":"wmoUnit:degC","value":3.3333333333333335},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":100},"windSpeed":"5 to 13 mph","windDirection":"SW","icon":"https://api.weather.gov/icons/land/night/rain,20/sct?size=medium","shortForecast":"Slight Chance Light Rain then Partly Cloudy","detailedForecast":"A slight chance of rain before 10pm. Partly cloudy, with a low around 26. Chance of precipitation is 20%."},{"number":10,"name":"Wednesday","startTime":"2023-11-08T06:00:00-08:00","endTime":"2023-11-08T18:00:00-08:00","isDaytime":true,"temperature":49,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":1.6666666666666667},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":93},"windSpeed":"5 to 9 mph","windDirection":"SE","icon":"https://api.weather.gov/icons/land/day/few?size=medium","shortForecast":"Sunny","detailedForecast":"Sunny, with a high near 49."},{"number":11,"name":"Wednesday Night","startTime":"2023-11-08T18:00:00-08:00","endTime":"2023-11-09T06:00:00-08:00","isDaytime":false,"temperature":25,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":0.5555555555555556},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":86},"windSpeed":"6 to 9 mph","windDirection":"SE","icon":"https://api.weather.gov/icons/land/night/few?size=medium","shortForecast":"Mostly Clear","detailedForecast":"Mostly clear, with a low around 25."},{"number":12,"name":"Thursday","startTime":"2023-11-09T06:00:00-08:00","endTime":"2023-11-09T18:00:00-08:00","isDaytime":true,"temperature":51,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":-0.5555555555555556},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":75},"windSpeed":"6 to 13 mph","windDirection":"SE","icon":"https://api.weather.gov/icons/land/day/bkn?size=medium","shortForecast":"Partly Sunny","detailedForecast":"Partly sunny, with a high near 51."},{"number":13,"name":"Thursday Night","startTime":"2023-11-09T18:00:00-08:00","endTime":"2023-11-10T06:00:00-08:00","isDaytime":false,"temperature":27,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":-1.1111111111111112},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":92},"windSpeed":"6 to 12 mph","windDirection":"SE","icon":"https://api.weather.gov/icons/land/night/rain?size=medium","shortForecast":"Chance Light Rain","detailedForecast":"A chance of rain after 10pm. Mostly cloudy, with a low around 27."},{"number":14,"name":"Friday","startTime":"2023-11-10T06:00:00-08:00","endTime":"2023-11-10T18:00:00-08:00","isDaytime":true,"temperature":49,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":2.2222222222222223},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":88},"windSpeed":"6 to 12 mph","windDirection":"SW","icon":"https://api.weather.gov/icons/land/day/rain?size=medium","shortForecast":"Chance Light Rain","detailedForecast":"A chance of rain. Partly sunny, with a high near 49."}]}
  var hourly_PDT_43_53 = false
  var crags_config = [
  {
    "name": "Smith Rock",
    "note": "Volcanic welded tuff with surrounding bands of columnar basalt.",
    "mountainProject": "https://www.mountainproject.com/area/105788989/smith-rock",
    "station": "KRDM",
    "office": "PDT/43,53",
    "coordinates": [
      -121.143,
      44.366
    ]
  }
]</script>

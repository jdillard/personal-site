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
  var weekly_OTX_35_103 = {"updated":"2023-09-27T04:27:26+00:00","units":"us","forecastGenerator":"BaselineForecastGenerator","generatedAt":"2023-09-27T08:32:18+00:00","updateTime":"2023-09-27T04:27:26+00:00","validTimes":"2023-09-26T22:00:00+00:00/P7DT3H","elevation":{"unitCode":"wmoUnit:m","value":627.888},"periods":[{"number":1,"name":"Overnight","startTime":"2023-09-27T01:00:00-07:00","endTime":"2023-09-27T06:00:00-07:00","isDaytime":false,"temperature":47,"temperatureUnit":"F","temperatureTrend":"rising","probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":90},"dewpoint":{"unitCode":"wmoUnit:degC","value":5.555555555555555},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":74},"windSpeed":"6 mph","windDirection":"SE","icon":"https://api.weather.gov/icons/land/night/rain,90?size=medium","shortForecast":"Rain","detailedForecast":"A slight chance of rain showers before 2am, then rain. Mostly cloudy. Low around 47, with temperatures rising to around 49 overnight. Southeast wind around 6 mph. Chance of precipitation is 90%. New rainfall amounts between a quarter and half of an inch possible."},{"number":2,"name":"Wednesday","startTime":"2023-09-27T06:00:00-07:00","endTime":"2023-09-27T18:00:00-07:00","isDaytime":true,"temperature":54,"temperatureUnit":"F","temperatureTrend":"falling","probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":90},"dewpoint":{"unitCode":"wmoUnit:degC","value":10.555555555555555},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":99},"windSpeed":"6 to 13 mph","windDirection":"NE","icon":"https://api.weather.gov/icons/land/day/rain,90/rain_showers,50?size=medium","shortForecast":"Rain then Chance Rain Showers","detailedForecast":"Rain before 11am, then a chance of rain showers. Mostly cloudy. High near 54, with temperatures falling to around 52 in the afternoon. Northeast wind 6 to 13 mph. Chance of precipitation is 90%. New rainfall amounts between a quarter and half of an inch possible."},{"number":3,"name":"Wednesday Night","startTime":"2023-09-27T18:00:00-07:00","endTime":"2023-09-28T06:00:00-07:00","isDaytime":false,"temperature":45,"temperatureUnit":"F","temperatureTrend":"rising","probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":50},"dewpoint":{"unitCode":"wmoUnit:degC","value":8.88888888888889},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":86},"windSpeed":"7 to 14 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/night/rain_showers,50/rain,40?size=medium","shortForecast":"Chance Rain Showers then Chance Light Rain","detailedForecast":"A chance of rain showers before 5am, then a chance of rain. Mostly cloudy. Low around 45, with temperatures rising to around 47 overnight. West wind 7 to 14 mph. Chance of precipitation is 50%. New rainfall amounts less than a tenth of an inch possible."},{"number":4,"name":"Thursday","startTime":"2023-09-28T06:00:00-07:00","endTime":"2023-09-28T18:00:00-07:00","isDaytime":true,"temperature":55,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":60},"dewpoint":{"unitCode":"wmoUnit:degC","value":8.333333333333334},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":81},"windSpeed":"6 to 10 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/day/rain,60?size=medium","shortForecast":"Light Rain Likely","detailedForecast":"Rain likely. Partly sunny, with a high near 55. West wind 6 to 10 mph. Chance of precipitation is 60%. New rainfall amounts between a tenth and quarter of an inch possible."},{"number":5,"name":"Thursday Night","startTime":"2023-09-28T18:00:00-07:00","endTime":"2023-09-29T06:00:00-07:00","isDaytime":false,"temperature":41,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":50},"dewpoint":{"unitCode":"wmoUnit:degC","value":6.111111111111111},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":77},"windSpeed":"5 to 10 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/night/rain,50/rain,30?size=medium","shortForecast":"Chance Light Rain","detailedForecast":"A chance of rain. Mostly cloudy, with a low around 41. West wind 5 to 10 mph. Chance of precipitation is 50%. New rainfall amounts less than a tenth of an inch possible."},{"number":6,"name":"Friday","startTime":"2023-09-29T06:00:00-07:00","endTime":"2023-09-29T18:00:00-07:00","isDaytime":true,"temperature":54,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":30},"dewpoint":{"unitCode":"wmoUnit:degC","value":5},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":72},"windSpeed":"8 mph","windDirection":"NW","icon":"https://api.weather.gov/icons/land/day/rain,30?size=medium","shortForecast":"Chance Light Rain","detailedForecast":"A chance of rain. Mostly sunny, with a high near 54. Chance of precipitation is 30%."},{"number":7,"name":"Friday Night","startTime":"2023-09-29T18:00:00-07:00","endTime":"2023-09-30T06:00:00-07:00","isDaytime":false,"temperature":43,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":20},"dewpoint":{"unitCode":"wmoUnit:degC","value":4.444444444444445},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":72},"windSpeed":"9 mph","windDirection":"NW","icon":"https://api.weather.gov/icons/land/night/rain,20/sct?size=medium","shortForecast":"Slight Chance Light Rain then Partly Cloudy","detailedForecast":"A slight chance of rain before 11pm. Partly cloudy, with a low around 43. Chance of precipitation is 20%."},{"number":8,"name":"Saturday","startTime":"2023-09-30T06:00:00-07:00","endTime":"2023-09-30T18:00:00-07:00","isDaytime":true,"temperature":59,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":7.222222222222222},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":69},"windSpeed":"9 mph","windDirection":"N","icon":"https://api.weather.gov/icons/land/day/sct?size=medium","shortForecast":"Mostly Sunny","detailedForecast":"Mostly sunny, with a high near 59."},{"number":9,"name":"Saturday Night","startTime":"2023-09-30T18:00:00-07:00","endTime":"2023-10-01T06:00:00-07:00","isDaytime":false,"temperature":46,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":7.222222222222222},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":68},"windSpeed":"9 mph","windDirection":"N","icon":"https://api.weather.gov/icons/land/night/sct?size=medium","shortForecast":"Partly Cloudy","detailedForecast":"Partly cloudy, with a low around 46."},{"number":10,"name":"Sunday","startTime":"2023-10-01T06:00:00-07:00","endTime":"2023-10-01T18:00:00-07:00","isDaytime":true,"temperature":65,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":7.777777777777778},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":57},"windSpeed":"8 mph","windDirection":"N","icon":"https://api.weather.gov/icons/land/day/few?size=medium","shortForecast":"Sunny","detailedForecast":"Sunny, with a high near 65."},{"number":11,"name":"Sunday Night","startTime":"2023-10-01T18:00:00-07:00","endTime":"2023-10-02T06:00:00-07:00","isDaytime":false,"temperature":50,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":7.777777777777778},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":59},"windSpeed":"8 mph","windDirection":"NW","icon":"https://api.weather.gov/icons/land/night/sct?size=medium","shortForecast":"Partly Cloudy","detailedForecast":"Partly cloudy, with a low around 50."},{"number":12,"name":"Monday","startTime":"2023-10-02T06:00:00-07:00","endTime":"2023-10-02T18:00:00-07:00","isDaytime":true,"temperature":65,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":20},"dewpoint":{"unitCode":"wmoUnit:degC","value":10.555555555555555},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":73},"windSpeed":"7 to 13 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/day/sct/rain,20?size=medium","shortForecast":"Mostly Sunny then Slight Chance Light Rain","detailedForecast":"A slight chance of rain after 5pm. Mostly sunny, with a high near 65. Chance of precipitation is 20%."},{"number":13,"name":"Monday Night","startTime":"2023-10-02T18:00:00-07:00","endTime":"2023-10-03T06:00:00-07:00","isDaytime":false,"temperature":50,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":30},"dewpoint":{"unitCode":"wmoUnit:degC","value":10},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":74},"windSpeed":"13 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/night/rain,30?size=medium","shortForecast":"Chance Light Rain","detailedForecast":"A chance of rain. Mostly cloudy, with a low around 50. Chance of precipitation is 30%."},{"number":14,"name":"Tuesday","startTime":"2023-10-03T06:00:00-07:00","endTime":"2023-10-03T18:00:00-07:00","isDaytime":true,"temperature":59,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":20},"dewpoint":{"unitCode":"wmoUnit:degC","value":8.88888888888889},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":77},"windSpeed":"10 to 14 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/day/rain,20?size=medium","shortForecast":"Slight Chance Light Rain","detailedForecast":"A slight chance of rain before 5pm. Partly sunny, with a high near 59. Chance of precipitation is 20%."}]}
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

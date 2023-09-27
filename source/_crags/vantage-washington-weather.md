---
### THIS FILE IS AUTO-GENERATED - DO NOT EDIT ###
layout: page
title: Vantage, Washington Climbing Weather - Current, Past, and Forecasted
title_override: Vantage<br /><small>Climbing Weather</small>
description: A lightweight weather report for Vantage, Washington. Optimized for slow internet connections.
js_includes:
  - weather.js
---

<section class="measure center lh-copy f5-ns f6 ph2 mv4" style="text-align: justify;">
<strong>"Is it dry?"</strong>, an oft-repeated, age-old question. Here are real-time,
precipitation-focused reports of current, past, and forecasted climbing weather for Vantage, Washington.
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
<section id="weather" data-crag="vantage-washington" class="mv4-ns mv3 ph2 center"></section>
<section id="nearby" class="tc lh-copy">
  <h3>Nearby Crags</h3>
<a class="nowrap no-underline fancy-link relative light-red mh3" href="/crags/icicle-creek-washington-weather.html">Icicle Creek</a>
<a class="nowrap no-underline fancy-link relative light-red mh3" href="/crags/tieton-river-rock-washington-weather.html">Tieton River Rock</a>
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
  var weekly_OTX_54_74 = {"updated":"2023-09-27T04:27:26+00:00","units":"us","forecastGenerator":"BaselineForecastGenerator","generatedAt":"2023-09-27T08:32:22+00:00","updateTime":"2023-09-27T04:27:26+00:00","validTimes":"2023-09-26T22:00:00+00:00/P7DT3H","elevation":{"unitCode":"wmoUnit:m","value":374.904},"periods":[{"number":1,"name":"Overnight","startTime":"2023-09-27T01:00:00-07:00","endTime":"2023-09-27T06:00:00-07:00","isDaytime":false,"temperature":49,"temperatureUnit":"F","temperatureTrend":"rising","probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":90},"dewpoint":{"unitCode":"wmoUnit:degC","value":6.111111111111111},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":72},"windSpeed":"2 mph","windDirection":"S","icon":"https://api.weather.gov/icons/land/night/rain,90?size=medium","shortForecast":"Light Rain","detailedForecast":"Rain after 2am. Mostly cloudy. Low around 49, with temperatures rising to around 51 overnight. South wind around 2 mph. Chance of precipitation is 90%. New rainfall amounts between a tenth and quarter of an inch possible."},{"number":2,"name":"Wednesday","startTime":"2023-09-27T06:00:00-07:00","endTime":"2023-09-27T18:00:00-07:00","isDaytime":true,"temperature":62,"temperatureUnit":"F","temperatureTrend":"falling","probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":100},"dewpoint":{"unitCode":"wmoUnit:degC","value":8.333333333333334},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":91},"windSpeed":"2 to 14 mph","windDirection":"S","icon":"https://api.weather.gov/icons/land/day/rain,100/rain_showers,20?size=medium","shortForecast":"Light Rain then Slight Chance Rain Showers","detailedForecast":"Rain before 11am, then a slight chance of rain showers between 11am and 2pm. Mostly cloudy. High near 62, with temperatures falling to around 60 in the afternoon. South wind 2 to 14 mph. Chance of precipitation is 100%. New rainfall amounts between a tenth and quarter of an inch possible."},{"number":3,"name":"Wednesday Night","startTime":"2023-09-27T18:00:00-07:00","endTime":"2023-09-28T06:00:00-07:00","isDaytime":false,"temperature":46,"temperatureUnit":"F","temperatureTrend":"rising","probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":20},"dewpoint":{"unitCode":"wmoUnit:degC","value":9.444444444444445},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":77},"windSpeed":"3 to 13 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/night/few/rain,20?size=medium","shortForecast":"Mostly Clear then Slight Chance Light Rain","detailedForecast":"A slight chance of rain after 5am. Mostly clear. Low around 46, with temperatures rising to around 48 overnight. West wind 3 to 13 mph. Chance of precipitation is 20%."},{"number":4,"name":"Thursday","startTime":"2023-09-28T06:00:00-07:00","endTime":"2023-09-28T18:00:00-07:00","isDaytime":true,"temperature":63,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":30},"dewpoint":{"unitCode":"wmoUnit:degC","value":7.222222222222222},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":88},"windSpeed":"3 to 10 mph","windDirection":"SW","icon":"https://api.weather.gov/icons/land/day/rain,30?size=medium","shortForecast":"Chance Light Rain","detailedForecast":"A chance of rain. Mostly sunny, with a high near 63. Southwest wind 3 to 10 mph. Chance of precipitation is 30%. New rainfall amounts less than a tenth of an inch possible."},{"number":5,"name":"Thursday Night","startTime":"2023-09-28T18:00:00-07:00","endTime":"2023-09-29T06:00:00-07:00","isDaytime":false,"temperature":44,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":30},"dewpoint":{"unitCode":"wmoUnit:degC","value":6.666666666666667},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":73},"windSpeed":"5 to 10 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/night/rain,30?size=medium","shortForecast":"Chance Light Rain","detailedForecast":"A chance of rain. Mostly cloudy, with a low around 44. West wind 5 to 10 mph. Chance of precipitation is 30%. New rainfall amounts less than a tenth of an inch possible."},{"number":6,"name":"Friday","startTime":"2023-09-29T06:00:00-07:00","endTime":"2023-09-29T18:00:00-07:00","isDaytime":true,"temperature":59,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":30},"dewpoint":{"unitCode":"wmoUnit:degC","value":5.555555555555555},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":80},"windSpeed":"7 mph","windDirection":"NW","icon":"https://api.weather.gov/icons/land/day/rain,30?size=medium","shortForecast":"Chance Light Rain","detailedForecast":"A chance of rain. Mostly sunny, with a high near 59. Chance of precipitation is 30%."},{"number":7,"name":"Friday Night","startTime":"2023-09-29T18:00:00-07:00","endTime":"2023-09-30T06:00:00-07:00","isDaytime":false,"temperature":45,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":20},"dewpoint":{"unitCode":"wmoUnit:degC","value":5.555555555555555},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":68},"windSpeed":"8 mph","windDirection":"NW","icon":"https://api.weather.gov/icons/land/night/rain,20/sct?size=medium","shortForecast":"Slight Chance Light Rain then Partly Cloudy","detailedForecast":"A slight chance of rain before 11pm. Partly cloudy, with a low around 45. Chance of precipitation is 20%."},{"number":8,"name":"Saturday","startTime":"2023-09-30T06:00:00-07:00","endTime":"2023-09-30T18:00:00-07:00","isDaytime":true,"temperature":64,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":6.666666666666667},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":72},"windSpeed":"7 to 15 mph","windDirection":"N","icon":"https://api.weather.gov/icons/land/day/sct?size=medium","shortForecast":"Mostly Sunny","detailedForecast":"Mostly sunny, with a high near 64."},{"number":9,"name":"Saturday Night","startTime":"2023-09-30T18:00:00-07:00","endTime":"2023-10-01T06:00:00-07:00","isDaytime":false,"temperature":48,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":7.222222222222222},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":61},"windSpeed":"10 to 14 mph","windDirection":"N","icon":"https://api.weather.gov/icons/land/night/sct?size=medium","shortForecast":"Partly Cloudy","detailedForecast":"Partly cloudy, with a low around 48."},{"number":10,"name":"Sunday","startTime":"2023-10-01T06:00:00-07:00","endTime":"2023-10-01T18:00:00-07:00","isDaytime":true,"temperature":68,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":6.111111111111111},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":63},"windSpeed":"9 to 14 mph","windDirection":"N","icon":"https://api.weather.gov/icons/land/day/sct?size=medium","shortForecast":"Mostly Sunny","detailedForecast":"Mostly sunny, with a high near 68."},{"number":11,"name":"Sunday Night","startTime":"2023-10-01T18:00:00-07:00","endTime":"2023-10-02T06:00:00-07:00","isDaytime":false,"temperature":48,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":7.222222222222222},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":59},"windSpeed":"6 to 13 mph","windDirection":"NW","icon":"https://api.weather.gov/icons/land/night/sct?size=medium","shortForecast":"Partly Cloudy","detailedForecast":"Partly cloudy, with a low around 48."},{"number":12,"name":"Monday","startTime":"2023-10-02T06:00:00-07:00","endTime":"2023-10-02T18:00:00-07:00","isDaytime":true,"temperature":69,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":8.88888888888889},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":68},"windSpeed":"6 to 14 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/day/sct?size=medium","shortForecast":"Mostly Sunny","detailedForecast":"Mostly sunny, with a high near 69."},{"number":13,"name":"Monday Night","startTime":"2023-10-02T18:00:00-07:00","endTime":"2023-10-03T06:00:00-07:00","isDaytime":false,"temperature":49,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":20},"dewpoint":{"unitCode":"wmoUnit:degC","value":8.333333333333334},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":67},"windSpeed":"14 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/night/rain,20?size=medium","shortForecast":"Slight Chance Light Rain","detailedForecast":"A slight chance of rain after 11pm. Partly cloudy, with a low around 49. Chance of precipitation is 20%."},{"number":14,"name":"Tuesday","startTime":"2023-10-03T06:00:00-07:00","endTime":"2023-10-03T18:00:00-07:00","isDaytime":true,"temperature":66,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":20},"dewpoint":{"unitCode":"wmoUnit:degC","value":6.666666666666667},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":77},"windSpeed":"10 to 14 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/day/rain,20/sct?size=medium","shortForecast":"Slight Chance Light Rain then Mostly Sunny","detailedForecast":"A slight chance of rain before 11am. Mostly sunny, with a high near 66. Chance of precipitation is 20%."}]}
  var hourly_OTX_54_74 = false
  var crags_config = [
  {
    "name": "Vantage",
    "note": "The rocks are basalt.",
    "mountainProject": "https://www.mountainproject.com/map/105792231/vantage-frenchman-coulee",
    "station": "KEAT",
    "office": "OTX/54,74",
    "coordinates": [
      -119.969,
      47.025
    ]
  }
]</script>

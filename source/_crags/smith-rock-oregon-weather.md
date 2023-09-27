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
  var weekly_PDT_43_53 = {"updated":"2023-09-27T08:25:25+00:00","units":"us","forecastGenerator":"BaselineForecastGenerator","generatedAt":"2023-09-27T08:32:31+00:00","updateTime":"2023-09-27T08:25:25+00:00","validTimes":"2023-09-27T02:00:00+00:00/P7DT11H","elevation":{"unitCode":"wmoUnit:m","value":853.1352},"periods":[{"number":1,"name":"Overnight","startTime":"2023-09-27T01:00:00-07:00","endTime":"2023-09-27T06:00:00-07:00","isDaytime":false,"temperature":43,"temperatureUnit":"F","temperatureTrend":"rising","probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":60},"dewpoint":{"unitCode":"wmoUnit:degC","value":5.555555555555555},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":86},"windSpeed":"7 to 10 mph","windDirection":"S","icon":"https://api.weather.gov/icons/land/night/rain,60?size=medium","shortForecast":"Light Rain Likely","detailedForecast":"Rain likely. Mostly cloudy. Low around 43, with temperatures rising to around 46 overnight. South wind 7 to 10 mph. Chance of precipitation is 60%. New rainfall amounts less than a tenth of an inch possible."},{"number":2,"name":"Wednesday","startTime":"2023-09-27T06:00:00-07:00","endTime":"2023-09-27T18:00:00-07:00","isDaytime":true,"temperature":58,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":30},"dewpoint":{"unitCode":"wmoUnit:degC","value":6.111111111111111},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":91},"windSpeed":"9 to 15 mph","windDirection":"SW","icon":"https://api.weather.gov/icons/land/day/rain,30/bkn?size=medium","shortForecast":"Chance Light Rain then Partly Sunny","detailedForecast":"A chance of rain before 11am. Partly sunny, with a high near 58. Southwest wind 9 to 15 mph, with gusts as high as 21 mph. Chance of precipitation is 30%. New rainfall amounts less than a tenth of an inch possible."},{"number":3,"name":"Wednesday Night","startTime":"2023-09-27T18:00:00-07:00","endTime":"2023-09-28T06:00:00-07:00","isDaytime":false,"temperature":38,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":3.888888888888889},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":92},"windSpeed":"3 to 13 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/night/sct?size=medium","shortForecast":"Partly Cloudy","detailedForecast":"Partly cloudy, with a low around 38. West wind 3 to 13 mph, with gusts as high as 18 mph."},{"number":4,"name":"Thursday","startTime":"2023-09-28T06:00:00-07:00","endTime":"2023-09-28T18:00:00-07:00","isDaytime":true,"temperature":63,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":4.444444444444445},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":91},"windSpeed":"5 to 12 mph","windDirection":"SW","icon":"https://api.weather.gov/icons/land/day/sct?size=medium","shortForecast":"Mostly Sunny","detailedForecast":"Mostly sunny, with a high near 63. Southwest wind 5 to 12 mph."},{"number":5,"name":"Thursday Night","startTime":"2023-09-28T18:00:00-07:00","endTime":"2023-09-29T06:00:00-07:00","isDaytime":false,"temperature":39,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":30},"dewpoint":{"unitCode":"wmoUnit:degC","value":3.3333333333333335},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":87},"windSpeed":"2 to 12 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/night/rain_showers,20/rain_showers,30?size=medium","shortForecast":"Chance Rain Showers","detailedForecast":"A chance of rain showers after 11pm. Mostly cloudy, with a low around 39. West wind 2 to 12 mph. Chance of precipitation is 30%. New rainfall amounts less than a tenth of an inch possible."},{"number":6,"name":"Friday","startTime":"2023-09-29T06:00:00-07:00","endTime":"2023-09-29T18:00:00-07:00","isDaytime":true,"temperature":56,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":30},"dewpoint":{"unitCode":"wmoUnit:degC","value":6.666666666666667},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":88},"windSpeed":"3 to 12 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/day/rain_showers,30?size=medium","shortForecast":"Chance Rain Showers","detailedForecast":"A chance of rain showers. Mostly cloudy, with a high near 56. Chance of precipitation is 30%."},{"number":7,"name":"Friday Night","startTime":"2023-09-29T18:00:00-07:00","endTime":"2023-09-30T06:00:00-07:00","isDaytime":false,"temperature":33,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":30},"dewpoint":{"unitCode":"wmoUnit:degC","value":4.444444444444445},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":90},"windSpeed":"6 to 12 mph","windDirection":"NW","icon":"https://api.weather.gov/icons/land/night/rain_showers,30/bkn,20?size=medium","shortForecast":"Slight Chance Rain Showers then Mostly Cloudy","detailedForecast":"A slight chance of rain showers before 11pm. Mostly cloudy, with a low around 33. Chance of precipitation is 30%."},{"number":8,"name":"Saturday","startTime":"2023-09-30T06:00:00-07:00","endTime":"2023-09-30T18:00:00-07:00","isDaytime":true,"temperature":56,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":4.444444444444445},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":86},"windSpeed":"6 to 15 mph","windDirection":"N","icon":"https://api.weather.gov/icons/land/day/sct?size=medium","shortForecast":"Mostly Sunny","detailedForecast":"Mostly sunny, with a high near 56."},{"number":9,"name":"Saturday Night","startTime":"2023-09-30T18:00:00-07:00","endTime":"2023-10-01T06:00:00-07:00","isDaytime":false,"temperature":35,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":4.444444444444445},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":85},"windSpeed":"8 to 15 mph","windDirection":"NW","icon":"https://api.weather.gov/icons/land/night/sct/rain_showers?size=medium","shortForecast":"Partly Cloudy then Slight Chance Rain Showers","detailedForecast":"A slight chance of rain showers after 5am. Partly cloudy, with a low around 35."},{"number":10,"name":"Sunday","startTime":"2023-10-01T06:00:00-07:00","endTime":"2023-10-01T18:00:00-07:00","isDaytime":true,"temperature":60,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":6.666666666666667},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":82},"windSpeed":"8 to 15 mph","windDirection":"N","icon":"https://api.weather.gov/icons/land/day/rain_showers?size=medium","shortForecast":"Slight Chance Rain Showers","detailedForecast":"A slight chance of rain showers before 5pm. Partly sunny, with a high near 60."},{"number":11,"name":"Sunday Night","startTime":"2023-10-01T18:00:00-07:00","endTime":"2023-10-02T06:00:00-07:00","isDaytime":false,"temperature":39,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":6.111111111111111},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":82},"windSpeed":"5 to 14 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/night/sct?size=medium","shortForecast":"Partly Cloudy","detailedForecast":"Partly cloudy, with a low around 39."},{"number":12,"name":"Monday","startTime":"2023-10-02T06:00:00-07:00","endTime":"2023-10-02T18:00:00-07:00","isDaytime":true,"temperature":65,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":8.88888888888889},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":79},"windSpeed":"5 to 13 mph","windDirection":"SW","icon":"https://api.weather.gov/icons/land/day/sct/rain_showers?size=medium","shortForecast":"Mostly Sunny then Slight Chance Rain Showers","detailedForecast":"A slight chance of rain showers after 5pm. Mostly sunny, with a high near 65."},{"number":13,"name":"Monday Night","startTime":"2023-10-02T18:00:00-07:00","endTime":"2023-10-03T06:00:00-07:00","isDaytime":false,"temperature":42,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":8.88888888888889},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":89},"windSpeed":"8 to 13 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/night/rain_showers?size=medium","shortForecast":"Slight Chance Rain Showers","detailedForecast":"A slight chance of rain showers before 5am. Mostly cloudy, with a low around 42."},{"number":14,"name":"Tuesday","startTime":"2023-10-03T06:00:00-07:00","endTime":"2023-10-03T18:00:00-07:00","isDaytime":true,"temperature":66,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":7.777777777777778},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":82},"windSpeed":"8 to 14 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/day/sct?size=medium","shortForecast":"Mostly Sunny","detailedForecast":"Mostly sunny, with a high near 66."}]}
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

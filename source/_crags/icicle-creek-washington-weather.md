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
  var weekly_OTX_35_103 = {"updated":"2024-04-15T08:07:44+00:00","units":"us","forecastGenerator":"BaselineForecastGenerator","generatedAt":"2024-04-15T08:31:23+00:00","updateTime":"2024-04-15T08:07:44+00:00","validTimes":"2024-04-15T02:00:00+00:00/P7DT2H","elevation":{"unitCode":"wmoUnit:m","value":627.888},"periods":[{"number":1,"name":"Overnight","startTime":"2024-04-15T01:00:00-07:00","endTime":"2024-04-15T06:00:00-07:00","isDaytime":false,"temperature":39,"temperatureUnit":"F","temperatureTrend":"rising","probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":1.1111111111111112},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":69},"windSpeed":"17 to 22 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/night/wind_bkn?size=medium","shortForecast":"Mostly Cloudy","detailedForecast":"Mostly cloudy. Low around 39, with temperatures rising to around 41 overnight. West wind 17 to 22 mph."},{"number":2,"name":"Monday","startTime":"2024-04-15T06:00:00-07:00","endTime":"2024-04-15T18:00:00-07:00","isDaytime":true,"temperature":50,"temperatureUnit":"F","temperatureTrend":"falling","probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":0.5555555555555556},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":70},"windSpeed":"20 to 23 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/day/wind_sct?size=medium","shortForecast":"Mostly Sunny","detailedForecast":"Mostly sunny. High near 50, with temperatures falling to around 44 in the afternoon. West wind 20 to 23 mph, with gusts as high as 32 mph."},{"number":3,"name":"Monday Night","startTime":"2024-04-15T18:00:00-07:00","endTime":"2024-04-16T06:00:00-07:00","isDaytime":false,"temperature":31,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":20},"dewpoint":{"unitCode":"wmoUnit:degC","value":-1.1111111111111112},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":70},"windSpeed":"13 to 23 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/night/snow,20/wind_sct?size=medium","shortForecast":"Slight Chance Rain And Snow Showers then Partly Cloudy","detailedForecast":"A slight chance of rain and snow showers between 7pm and 11pm. Partly cloudy, with a low around 31. West wind 13 to 23 mph, with gusts as high as 32 mph. Chance of precipitation is 20%."},{"number":4,"name":"Tuesday","startTime":"2024-04-16T06:00:00-07:00","endTime":"2024-04-16T18:00:00-07:00","isDaytime":true,"temperature":46,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":-4.444444444444445},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":62},"windSpeed":"12 to 15 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/day/sct?size=medium","shortForecast":"Mostly Sunny","detailedForecast":"Mostly sunny, with a high near 46. West wind 12 to 15 mph, with gusts as high as 24 mph."},{"number":5,"name":"Tuesday Night","startTime":"2024-04-16T18:00:00-07:00","endTime":"2024-04-17T06:00:00-07:00","isDaytime":false,"temperature":30,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":-5.555555555555555},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":64},"windSpeed":"7 to 15 mph","windDirection":"NW","icon":"https://api.weather.gov/icons/land/night/few?size=medium","shortForecast":"Mostly Clear","detailedForecast":"Mostly clear, with a low around 30. Northwest wind 7 to 15 mph, with gusts as high as 24 mph."},{"number":6,"name":"Wednesday","startTime":"2024-04-17T06:00:00-07:00","endTime":"2024-04-17T18:00:00-07:00","isDaytime":true,"temperature":52,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":-2.2222222222222223},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":60},"windSpeed":"8 mph","windDirection":"NW","icon":"https://api.weather.gov/icons/land/day/few?size=medium","shortForecast":"Sunny","detailedForecast":"Sunny, with a high near 52."},{"number":7,"name":"Wednesday Night","startTime":"2024-04-17T18:00:00-07:00","endTime":"2024-04-18T06:00:00-07:00","isDaytime":false,"temperature":31,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":-2.7777777777777777},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":64},"windSpeed":"9 mph","windDirection":"NW","icon":"https://api.weather.gov/icons/land/night/few?size=medium","shortForecast":"Mostly Clear","detailedForecast":"Mostly clear, with a low around 31."},{"number":8,"name":"Thursday","startTime":"2024-04-18T06:00:00-07:00","endTime":"2024-04-18T18:00:00-07:00","isDaytime":true,"temperature":51,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":-2.2222222222222223},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":60},"windSpeed":"7 to 10 mph","windDirection":"E","icon":"https://api.weather.gov/icons/land/day/few?size=medium","shortForecast":"Sunny","detailedForecast":"Sunny, with a high near 51."},{"number":9,"name":"Thursday Night","startTime":"2024-04-18T18:00:00-07:00","endTime":"2024-04-19T06:00:00-07:00","isDaytime":false,"temperature":31,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":-4.444444444444445},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":56},"windSpeed":"7 to 10 mph","windDirection":"NE","icon":"https://api.weather.gov/icons/land/night/few?size=medium","shortForecast":"Mostly Clear","detailedForecast":"Mostly clear, with a low around 31."},{"number":10,"name":"Friday","startTime":"2024-04-19T06:00:00-07:00","endTime":"2024-04-19T18:00:00-07:00","isDaytime":true,"temperature":53,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":-2.7777777777777777},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":53},"windSpeed":"7 to 14 mph","windDirection":"NE","icon":"https://api.weather.gov/icons/land/day/few?size=medium","shortForecast":"Sunny","detailedForecast":"Sunny, with a high near 53."},{"number":11,"name":"Friday Night","startTime":"2024-04-19T18:00:00-07:00","endTime":"2024-04-20T06:00:00-07:00","isDaytime":false,"temperature":33,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":-4.444444444444445},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":51},"windSpeed":"8 to 14 mph","windDirection":"NE","icon":"https://api.weather.gov/icons/land/night/few?size=medium","shortForecast":"Mostly Clear","detailedForecast":"Mostly clear, with a low around 33."},{"number":12,"name":"Saturday","startTime":"2024-04-20T06:00:00-07:00","endTime":"2024-04-20T18:00:00-07:00","isDaytime":true,"temperature":55,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":0.5555555555555556},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":50},"windSpeed":"10 mph","windDirection":"NE","icon":"https://api.weather.gov/icons/land/day/sct?size=medium","shortForecast":"Mostly Sunny","detailedForecast":"Mostly sunny, with a high near 55."},{"number":13,"name":"Saturday Night","startTime":"2024-04-20T18:00:00-07:00","endTime":"2024-04-21T06:00:00-07:00","isDaytime":false,"temperature":38,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":0.5555555555555556},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":64},"windSpeed":"10 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/night/sct?size=medium","shortForecast":"Partly Cloudy","detailedForecast":"Partly cloudy, with a low around 38."},{"number":14,"name":"Sunday","startTime":"2024-04-21T06:00:00-07:00","endTime":"2024-04-21T18:00:00-07:00","isDaytime":true,"temperature":57,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":3.888888888888889},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":62},"windSpeed":"10 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/day/sct?size=medium","shortForecast":"Mostly Sunny","detailedForecast":"Mostly sunny, with a high near 57."}]}
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

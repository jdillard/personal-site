---
### THIS FILE IS AUTO-GENERATED - DO NOT EDIT ###
layout: page
title: Joshua Tree National Park, California Climbing Weather - Current, Past, and Forecasted
title_override: Joshua Tree National Park<br /><small>Climbing Weather</small>
description: A lightweight weather report for Joshua Tree National Park, California. Optimized for slow internet connections.
js_includes:
  - weather.js
---

<section class="measure center lh-copy f5-ns f6 ph2 mv4" style="text-align: justify;">
<strong>"Is it dry?"</strong>, an oft-repeated, age-old question. Here are real-time,
precipitation-focused reports of current, past, and forecasted climbing weather for Joshua Tree National Park, California.
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
<section id="weather" data-crag="joshua-tree-national-park-california" class="mv4-ns mv3 ph2 center"></section>
<section id="nearby" class="tc lh-copy">
  <h3>Nearby Crags</h3>
<a class="nowrap no-underline fancy-link relative light-red mh3" href="/crags/yosemite-national-park-california-weather.html">Yosemite National Park</a>
<a class="nowrap no-underline fancy-link relative light-red mh3" href="/crags/bishop-california-weather.html">Bishop</a>
<a class="nowrap no-underline fancy-link relative light-red mh3" href="/crags/mammoth-lakes-california-weather.html">Mammoth Lakes</a>
<a class="nowrap no-underline fancy-link relative light-red mh3" href="/crags/red-rock-nevada-weather.html">Red Rock</a>
</section>
<section id="nearby" class="tc lh-copy">
  <h3>Other Metros</h3>
  <select class="ma1 bg-near-white pa2" id="stateSel">
    <option value="Texas">Texas</option>
    <option value="Washington">Washington</option>
    <option value="Colorado">Colorado</option>
    <option value="Tennessee">Tennessee</option>
    <option value="Utah">Utah</option>
    <option value="California" selected>California</option>
  </select>
  <select class="ma1 bg-near-white pa2" id="citySel">
    <option value="San Francisco" selected>San Francisco</option>
    <option value="Los Angeles">Los Angeles</option>
  </select>
  <a id="selectMetro" class="f6 link dim ph3 pv2 ma1 dib white bg-light-red" href="/crags/san-francisco-california-weather.html">Select Metro</a>
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
  var weekly_PSR_12_103 = {"updated":"2024-03-11T07:48:38+00:00","units":"us","forecastGenerator":"BaselineForecastGenerator","generatedAt":"2024-03-11T08:32:05+00:00","updateTime":"2024-03-11T07:48:38+00:00","validTimes":"2024-03-11T01:00:00+00:00/P8D","elevation":{"unitCode":"wmoUnit:m","value":1324.0512},"periods":[{"number":1,"name":"Overnight","startTime":"2024-03-11T01:00:00-07:00","endTime":"2024-03-11T06:00:00-07:00","isDaytime":false,"temperature":38,"temperatureUnit":"F","temperatureTrend":"rising","probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":-2.2222222222222223},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":53},"windSpeed":"15 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/night/sct?size=medium","shortForecast":"Partly Cloudy","detailedForecast":"Partly cloudy. Low around 38, with temperatures rising to around 40 overnight. West wind around 15 mph, with gusts as high as 20 mph."},{"number":2,"name":"Monday","startTime":"2024-03-11T06:00:00-07:00","endTime":"2024-03-11T18:00:00-07:00","isDaytime":true,"temperature":62,"temperatureUnit":"F","temperatureTrend":"falling","probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":-1.1111111111111112},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":48},"windSpeed":"5 to 15 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/day/few?size=medium","shortForecast":"Sunny","detailedForecast":"Sunny. High near 62, with temperatures falling to around 58 in the afternoon. West wind 5 to 15 mph, with gusts as high as 25 mph."},{"number":3,"name":"Monday Night","startTime":"2024-03-11T18:00:00-07:00","endTime":"2024-03-12T06:00:00-07:00","isDaytime":false,"temperature":37,"temperatureUnit":"F","temperatureTrend":"rising","probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":0.5555555555555556},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":67},"windSpeed":"5 to 15 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/night/few?size=medium","shortForecast":"Mostly Clear","detailedForecast":"Mostly clear. Low around 37, with temperatures rising to around 40 overnight. West wind 5 to 15 mph, with gusts as high as 20 mph."},{"number":4,"name":"Tuesday","startTime":"2024-03-12T06:00:00-07:00","endTime":"2024-03-12T18:00:00-07:00","isDaytime":true,"temperature":65,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":3.3333333333333335},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":67},"windSpeed":"5 to 10 mph","windDirection":"SW","icon":"https://api.weather.gov/icons/land/day/few?size=medium","shortForecast":"Sunny","detailedForecast":"Sunny, with a high near 65. Southwest wind 5 to 10 mph."},{"number":5,"name":"Tuesday Night","startTime":"2024-03-12T18:00:00-07:00","endTime":"2024-03-13T06:00:00-07:00","isDaytime":false,"temperature":40,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":3.888888888888889},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":68},"windSpeed":"10 to 15 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/night/sct?size=medium","shortForecast":"Partly Cloudy","detailedForecast":"Partly cloudy, with a low around 40. West wind 10 to 15 mph, with gusts as high as 20 mph."},{"number":6,"name":"Wednesday","startTime":"2024-03-13T06:00:00-07:00","endTime":"2024-03-13T18:00:00-07:00","isDaytime":true,"temperature":63,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":-1.1111111111111112},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":62},"windSpeed":"15 to 20 mph","windDirection":"NNW","icon":"https://api.weather.gov/icons/land/day/few?size=medium","shortForecast":"Sunny","detailedForecast":"Sunny, with a high near 63. North northwest wind 15 to 20 mph, with gusts as high as 30 mph."},{"number":7,"name":"Wednesday Night","startTime":"2024-03-13T18:00:00-07:00","endTime":"2024-03-14T06:00:00-07:00","isDaytime":false,"temperature":37,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":-5.555555555555555},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":35},"windSpeed":"20 to 30 mph","windDirection":"NNW","icon":"https://api.weather.gov/icons/land/night/wind_few?size=medium","shortForecast":"Mostly Clear","detailedForecast":"Mostly clear, with a low around 37. North northwest wind 20 to 30 mph, with gusts as high as 45 mph."},{"number":8,"name":"Thursday","startTime":"2024-03-14T06:00:00-07:00","endTime":"2024-03-14T18:00:00-07:00","isDaytime":true,"temperature":55,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":-10},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":31},"windSpeed":"25 to 30 mph","windDirection":"NNW","icon":"https://api.weather.gov/icons/land/day/wind_few?size=medium","shortForecast":"Sunny","detailedForecast":"Sunny, with a high near 55. North northwest wind 25 to 30 mph, with gusts as high as 45 mph."},{"number":9,"name":"Thursday Night","startTime":"2024-03-14T18:00:00-07:00","endTime":"2024-03-15T06:00:00-07:00","isDaytime":false,"temperature":38,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":-5.555555555555555},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":48},"windSpeed":"15 to 25 mph","windDirection":"NNW","icon":"https://api.weather.gov/icons/land/night/wind_sct?size=medium","shortForecast":"Partly Cloudy","detailedForecast":"Partly cloudy, with a low around 38. North northwest wind 15 to 25 mph, with gusts as high as 35 mph."},{"number":10,"name":"Friday","startTime":"2024-03-15T06:00:00-07:00","endTime":"2024-03-15T18:00:00-07:00","isDaytime":true,"temperature":56,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":-3.888888888888889},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":50},"windSpeed":"15 mph","windDirection":"NNW","icon":"https://api.weather.gov/icons/land/day/sct?size=medium","shortForecast":"Mostly Sunny","detailedForecast":"Mostly sunny, with a high near 56. North northwest wind around 15 mph, with gusts as high as 25 mph."},{"number":11,"name":"Friday Night","startTime":"2024-03-15T18:00:00-07:00","endTime":"2024-03-16T06:00:00-07:00","isDaytime":false,"temperature":37,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":-3.3333333333333335},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":55},"windSpeed":"10 to 15 mph","windDirection":"NNW","icon":"https://api.weather.gov/icons/land/night/few?size=medium","shortForecast":"Mostly Clear","detailedForecast":"Mostly clear, with a low around 37. North northwest wind 10 to 15 mph, with gusts as high as 25 mph."},{"number":12,"name":"Saturday","startTime":"2024-03-16T06:00:00-07:00","endTime":"2024-03-16T18:00:00-07:00","isDaytime":true,"temperature":63,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":-2.7777777777777777},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":55},"windSpeed":"10 to 15 mph","windDirection":"NNW","icon":"https://api.weather.gov/icons/land/day/few?size=medium","shortForecast":"Sunny","detailedForecast":"Sunny, with a high near 63. North northwest wind 10 to 15 mph, with gusts as high as 25 mph."},{"number":13,"name":"Saturday Night","startTime":"2024-03-16T18:00:00-07:00","endTime":"2024-03-17T06:00:00-07:00","isDaytime":false,"temperature":41,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":-2.2222222222222223},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":53},"windSpeed":"10 to 15 mph","windDirection":"NNW","icon":"https://api.weather.gov/icons/land/night/few?size=medium","shortForecast":"Mostly Clear","detailedForecast":"Mostly clear, with a low around 41. North northwest wind 10 to 15 mph, with gusts as high as 20 mph."},{"number":14,"name":"Sunday","startTime":"2024-03-17T06:00:00-07:00","endTime":"2024-03-17T18:00:00-07:00","isDaytime":true,"temperature":67,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":-1.1111111111111112},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":51},"windSpeed":"10 to 15 mph","windDirection":"NNW","icon":"https://api.weather.gov/icons/land/day/few?size=medium","shortForecast":"Sunny","detailedForecast":"Sunny, with a high near 67. North northwest wind 10 to 15 mph, with gusts as high as 25 mph."}]}
  var hourly_PSR_12_103 = false
  var crags_config = [
  {
    "name": "Joshua Tree National Park",
    "note": "Quartz monzonite.",
    "mountainProject": "https://www.mountainproject.com/area/105720495/joshua-tree-national-park",
    "station": "LTHC1",
    "office": "PSR/12,103",
    "coordinates": [
      -116.168,
      34.012
    ]
  }
]</script>

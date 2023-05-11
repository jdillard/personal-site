---
### THIS FILE IS AUTO-GENERATED - DO NOT EDIT ###
layout: page
title: Yosemite National Park, California Climbing Weather - Current, Past, and Forecasted
title_override: Yosemite National Park<br /><small>Climbing Weather</small>
description: A lightweight weather report for Yosemite National Park, California. Optimized for slow internet connections.
js_includes:
  - weather.js
---

<section class="measure center lh-copy f5-ns f6 ph2 mv4" style="text-align: justify;">
<strong>"Is it dry?"</strong>, an oft-repeated, age-old question. Here are real-time,
precipitation-focused reports of current, past, and forecasted climbing weather for Yosemite National Park, California.
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
<section id="weather" data-crag="yosemite-national-park-california" class="mv4-ns mv3 ph2 center"></section>
<section id="nearby" class="tc lh-copy">
  <h3>Nearby Crags</h3>
<a class="nowrap no-underline fancy-link relative light-red mh3" href="/crags/joshua-tree-national-park-california-weather.html">Joshua Tree National Park</a>
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
  var weekly_HNX_66_143 = {"updated":"2023-05-11T08:14:30+00:00","units":"us","forecastGenerator":"BaselineForecastGenerator","generatedAt":"2023-05-11T08:31:46+00:00","updateTime":"2023-05-11T08:14:30+00:00","validTimes":"2023-05-11T02:00:00+00:00/P6DT11H","elevation":{"unitCode":"wmoUnit:m","value":2130.8568},"periods":[{"number":1,"name":"Overnight","startTime":"2023-05-11T01:00:00-07:00","endTime":"2023-05-11T06:00:00-07:00","isDaytime":false,"temperature":36,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":-3.888888888888889},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":59},"windSpeed":"5 mph","windDirection":"NE","icon":"https://api.weather.gov/icons/land/night/few?size=medium","shortForecast":"Mostly Clear","detailedForecast":"Mostly clear, with a low around 36. Northeast wind around 5 mph."},{"number":2,"name":"Thursday","startTime":"2023-05-11T06:00:00-07:00","endTime":"2023-05-11T18:00:00-07:00","isDaytime":true,"temperature":60,"temperatureUnit":"F","temperatureTrend":"falling","probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":3.888888888888889},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":50},"windSpeed":"0 to 5 mph","windDirection":"SSE","icon":"https://api.weather.gov/icons/land/day/few?size=medium","shortForecast":"Sunny","detailedForecast":"Sunny. High near 60, with temperatures falling to around 58 in the afternoon. South southeast wind 0 to 5 mph."},{"number":3,"name":"Thursday Night","startTime":"2023-05-11T18:00:00-07:00","endTime":"2023-05-12T06:00:00-07:00","isDaytime":false,"temperature":42,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":3.888888888888889},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":61},"windSpeed":"5 to 10 mph","windDirection":"N","icon":"https://api.weather.gov/icons/land/night/few?size=medium","shortForecast":"Mostly Clear","detailedForecast":"Mostly clear, with a low around 42. North wind 5 to 10 mph."},{"number":4,"name":"Friday","startTime":"2023-05-12T06:00:00-07:00","endTime":"2023-05-12T18:00:00-07:00","isDaytime":true,"temperature":68,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":5},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":47},"windSpeed":"5 to 10 mph","windDirection":"S","icon":"https://api.weather.gov/icons/land/day/skc?size=medium","shortForecast":"Sunny","detailedForecast":"Sunny, with a high near 68. South wind 5 to 10 mph."},{"number":5,"name":"Friday Night","startTime":"2023-05-12T18:00:00-07:00","endTime":"2023-05-13T06:00:00-07:00","isDaytime":false,"temperature":47,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":5},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":51},"windSpeed":"5 to 15 mph","windDirection":"NNE","icon":"https://api.weather.gov/icons/land/night/skc?size=medium","shortForecast":"Clear","detailedForecast":"Clear, with a low around 47. North northeast wind 5 to 15 mph."},{"number":6,"name":"Saturday","startTime":"2023-05-13T06:00:00-07:00","endTime":"2023-05-13T18:00:00-07:00","isDaytime":true,"temperature":71,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":3.888888888888889},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":41},"windSpeed":"10 mph","windDirection":"S","icon":"https://api.weather.gov/icons/land/day/few?size=medium","shortForecast":"Sunny","detailedForecast":"Sunny, with a high near 71. South wind around 10 mph, with gusts as high as 20 mph."},{"number":7,"name":"Saturday Night","startTime":"2023-05-13T18:00:00-07:00","endTime":"2023-05-14T06:00:00-07:00","isDaytime":false,"temperature":48,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":4.444444444444445},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":48},"windSpeed":"5 to 10 mph","windDirection":"ENE","icon":"https://api.weather.gov/icons/land/night/few?size=medium","shortForecast":"Mostly Clear","detailedForecast":"Mostly clear, with a low around 48. East northeast wind 5 to 10 mph, with gusts as high as 20 mph."},{"number":8,"name":"Sunday","startTime":"2023-05-14T06:00:00-07:00","endTime":"2023-05-14T18:00:00-07:00","isDaytime":true,"temperature":69,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":20},"dewpoint":{"unitCode":"wmoUnit:degC","value":5},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":48},"windSpeed":"10 to 15 mph","windDirection":"SE","icon":"https://api.weather.gov/icons/land/day/tsra_hi,20?size=medium","shortForecast":"Slight Chance Showers And Thunderstorms","detailedForecast":"A slight chance of showers and thunderstorms after 11am. Mostly sunny, with a high near 69. Southeast wind 10 to 15 mph. Chance of precipitation is 20%. New rainfall amounts less than a tenth of an inch possible."},{"number":9,"name":"Sunday Night","startTime":"2023-05-14T18:00:00-07:00","endTime":"2023-05-15T06:00:00-07:00","isDaytime":false,"temperature":48,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":5.555555555555555},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":55},"windSpeed":"10 mph","windDirection":"ESE","icon":"https://api.weather.gov/icons/land/night/tsra_hi/sct?size=medium","shortForecast":"Slight Chance Showers And Thunderstorms then Partly Cloudy","detailedForecast":"A slight chance of showers and thunderstorms before 11pm. Partly cloudy, with a low around 48. East southeast wind around 10 mph, with gusts as high as 20 mph."},{"number":10,"name":"Monday","startTime":"2023-05-15T06:00:00-07:00","endTime":"2023-05-15T18:00:00-07:00","isDaytime":true,"temperature":69,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":20},"dewpoint":{"unitCode":"wmoUnit:degC","value":5},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":48},"windSpeed":"10 mph","windDirection":"SSW","icon":"https://api.weather.gov/icons/land/day/tsra_hi,20?size=medium","shortForecast":"Slight Chance Showers And Thunderstorms","detailedForecast":"A slight chance of showers and thunderstorms between 11am and 5pm. Mostly sunny, with a high near 69. South southwest wind around 10 mph, with gusts as high as 20 mph. Chance of precipitation is 20%."},{"number":11,"name":"Monday Night","startTime":"2023-05-15T18:00:00-07:00","endTime":"2023-05-16T06:00:00-07:00","isDaytime":false,"temperature":48,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":5.555555555555555},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":55},"windSpeed":"10 mph","windDirection":"NNW","icon":"https://api.weather.gov/icons/land/night/sct?size=medium","shortForecast":"Partly Cloudy","detailedForecast":"Partly cloudy, with a low around 48. North northwest wind around 10 mph."},{"number":12,"name":"Tuesday","startTime":"2023-05-16T06:00:00-07:00","endTime":"2023-05-16T18:00:00-07:00","isDaytime":true,"temperature":70,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":6.111111111111111},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":48},"windSpeed":"10 mph","windDirection":"NNW","icon":"https://api.weather.gov/icons/land/day/tsra_hi?size=medium","shortForecast":"Slight Chance Showers And Thunderstorms","detailedForecast":"A slight chance of showers and thunderstorms between 11am and 5pm. Mostly sunny, with a high near 70. North northwest wind around 10 mph."},{"number":13,"name":"Tuesday Night","startTime":"2023-05-16T18:00:00-07:00","endTime":"2023-05-17T06:00:00-07:00","isDaytime":false,"temperature":47,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":6.111111111111111},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":57},"windSpeed":"10 mph","windDirection":"NE","icon":"https://api.weather.gov/icons/land/night/sct?size=medium","shortForecast":"Partly Cloudy","detailedForecast":"Partly cloudy, with a low around 47. Northeast wind around 10 mph."},{"number":14,"name":"Wednesday","startTime":"2023-05-17T06:00:00-07:00","endTime":"2023-05-17T18:00:00-07:00","isDaytime":true,"temperature":69,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":null,"relativeHumidity":null,"windSpeed":"10 mph","windDirection":"ENE","icon":"https://api.weather.gov/icons/land/day/few?size=medium","shortForecast":"Sunny","detailedForecast":"Sunny, with a high near 69. East northeast wind around 10 mph. New rainfall amounts less than a tenth of an inch possible."}]}
  var hourly_HNX_66_143 = false
  var crags_config = [
  {
    "name": "Yosemite National Park",
    "note": "Glacial granite.",
    "mountainProject": "https://www.mountainproject.com/area/105833381/yosemite-national-park",
    "station": "AHIC1",
    "office": "HNX/66,143",
    "coordinates": [
      -119.604,
      37.741
    ]
  }
]</script>

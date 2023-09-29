---
### THIS FILE IS AUTO-GENERATED - DO NOT EDIT ###
layout: page
title: Gunnison, Colorado Climbing Weather - Current, Past, and Forecasted
title_override: Gunnison<br /><small>Climbing Weather</small>
description: A lightweight weather report for Gunnison, Colorado. Optimized for slow internet connections.
js_includes:
  - weather.js
---

<section class="measure center lh-copy f5-ns f6 ph2 mv4" style="text-align: justify;">
<strong>"Is it dry?"</strong>, an oft-repeated, age-old question. Here are real-time,
precipitation-focused reports of current, past, and forecasted climbing weather for Gunnison, Colorado.
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
<section id="weather" data-crag="gunnison-colorado" class="mv4-ns mv3 ph2 center"></section>
<section id="nearby" class="tc lh-copy">
  <h3>Nearby Crags</h3>
<a class="nowrap no-underline fancy-link relative light-red mh3" href="/crags/clear-creek-canyon-colorado-weather.html">Clear Creek Canyon</a>
<a class="nowrap no-underline fancy-link relative light-red mh3" href="/crags/staunton-state-park-colorado-weather.html">Staunton State Park</a>
<a class="nowrap no-underline fancy-link relative light-red mh3" href="/crags/lime-park-lime-creek-colorado-weather.html">Lime Park (Lime Creek)</a>
<a class="nowrap no-underline fancy-link relative light-red mh3" href="/crags/independence-pass-colorado-weather.html">Independence Pass</a>
<a class="nowrap no-underline fancy-link relative light-red mh3" href="/crags/moab-utah-weather.html">Moab</a>
<a class="nowrap no-underline fancy-link relative light-red mh3" href="/crags/estes-park-valley-colorado-weather.html">Estes Park Valley</a>
</section>
<section id="nearby" class="tc lh-copy">
  <h3>Other Metros</h3>
  <select class="ma1 bg-near-white pa2" id="stateSel">
    <option value="Texas">Texas</option>
    <option value="Washington">Washington</option>
    <option value="Colorado" selected>Colorado</option>
    <option value="Tennessee">Tennessee</option>
    <option value="Utah">Utah</option>
    <option value="California">California</option>
  </select>
  <select class="ma1 bg-near-white pa2" id="citySel">
    <option value="Denver" selected>Denver</option>
  </select>
  <a id="selectMetro" class="f6 link dim ph3 pv2 ma1 dib white bg-light-red" href="/crags/denver-colorado-weather.html">Select Metro</a>
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
  var weekly_GJT_152_72 = {"updated":"2023-09-29T05:26:35+00:00","units":"us","forecastGenerator":"BaselineForecastGenerator","generatedAt":"2023-09-29T08:32:39+00:00","updateTime":"2023-09-29T05:26:35+00:00","validTimes":"2023-09-28T23:00:00+00:00/P7DT5H","elevation":{"unitCode":"wmoUnit:m","value":2390.8512},"periods":[{"number":1,"name":"Overnight","startTime":"2023-09-29T02:00:00-06:00","endTime":"2023-09-29T06:00:00-06:00","isDaytime":false,"temperature":33,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":-4.444444444444445},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":60},"windSpeed":"0 mph","windDirection":"SE","icon":"https://api.weather.gov/icons/land/night/skc?size=medium","shortForecast":"Clear","detailedForecast":"Clear, with a low around 33. Southeast wind around 0 mph."},{"number":2,"name":"Friday","startTime":"2023-09-29T06:00:00-06:00","endTime":"2023-09-29T18:00:00-06:00","isDaytime":true,"temperature":74,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":-4.444444444444445},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":61},"windSpeed":"0 to 15 mph","windDirection":"S","icon":"https://api.weather.gov/icons/land/day/skc?size=medium","shortForecast":"Sunny","detailedForecast":"Sunny, with a high near 74. South wind 0 to 15 mph."},{"number":3,"name":"Friday Night","startTime":"2023-09-29T18:00:00-06:00","endTime":"2023-09-30T06:00:00-06:00","isDaytime":false,"temperature":34,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":-3.888888888888889},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":60},"windSpeed":"5 to 15 mph","windDirection":"SSE","icon":"https://api.weather.gov/icons/land/night/few?size=medium","shortForecast":"Mostly Clear","detailedForecast":"Mostly clear, with a low around 34. South southeast wind 5 to 15 mph."},{"number":4,"name":"Saturday","startTime":"2023-09-30T06:00:00-06:00","endTime":"2023-09-30T18:00:00-06:00","isDaytime":true,"temperature":73,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":0},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":65},"windSpeed":"5 to 20 mph","windDirection":"SE","icon":"https://api.weather.gov/icons/land/day/sct?size=medium","shortForecast":"Mostly Sunny","detailedForecast":"Mostly sunny, with a high near 73. Southeast wind 5 to 20 mph."},{"number":5,"name":"Saturday Night","startTime":"2023-09-30T18:00:00-06:00","endTime":"2023-10-01T06:00:00-06:00","isDaytime":false,"temperature":39,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":30},"dewpoint":{"unitCode":"wmoUnit:degC","value":3.888888888888889},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":87},"windSpeed":"10 to 15 mph","windDirection":"SE","icon":"https://api.weather.gov/icons/land/night/tsra_hi,20/tsra_hi,30?size=medium","shortForecast":"Slight Chance Showers And Thunderstorms then Chance Showers And Thunderstorms","detailedForecast":"A slight chance of showers and thunderstorms before midnight, then a chance of showers and thunderstorms. Mostly cloudy, with a low around 39. Southeast wind 10 to 15 mph, with gusts as high as 25 mph. Chance of precipitation is 30%."},{"number":6,"name":"Sunday","startTime":"2023-10-01T06:00:00-06:00","endTime":"2023-10-01T18:00:00-06:00","isDaytime":true,"temperature":67,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":30},"dewpoint":{"unitCode":"wmoUnit:degC","value":4.444444444444445},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":92},"windSpeed":"10 to 30 mph","windDirection":"SSE","icon":"https://api.weather.gov/icons/land/day/rain_showers,30/tsra_hi,20?size=medium","shortForecast":"Chance Rain Showers then Slight Chance Showers And Thunderstorms","detailedForecast":"A chance of rain showers before noon, then a slight chance of showers and thunderstorms. Mostly sunny, with a high near 67. Chance of precipitation is 30%."},{"number":7,"name":"Sunday Night","startTime":"2023-10-01T18:00:00-06:00","endTime":"2023-10-02T06:00:00-06:00","isDaytime":false,"temperature":35,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":20},"dewpoint":{"unitCode":"wmoUnit:degC","value":1.6666666666666667},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":79},"windSpeed":"5 to 20 mph","windDirection":"SSE","icon":"https://api.weather.gov/icons/land/night/sct/rain_showers,20?size=medium","shortForecast":"Partly Cloudy then Slight Chance Rain Showers","detailedForecast":"A slight chance of rain showers after midnight. Partly cloudy, with a low around 35. Chance of precipitation is 20%."},{"number":8,"name":"Monday","startTime":"2023-10-02T06:00:00-06:00","endTime":"2023-10-02T18:00:00-06:00","isDaytime":true,"temperature":65,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":0},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":82},"windSpeed":"5 to 20 mph","windDirection":"S","icon":"https://api.weather.gov/icons/land/day/rain_showers/tsra_hi?size=medium","shortForecast":"Chance Rain Showers then Slight Chance Showers And Thunderstorms","detailedForecast":"A chance of rain showers before noon, then a slight chance of showers and thunderstorms. Mostly sunny, with a high near 65."},{"number":9,"name":"Monday Night","startTime":"2023-10-02T18:00:00-06:00","endTime":"2023-10-03T06:00:00-06:00","isDaytime":false,"temperature":31,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":0},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":88},"windSpeed":"5 to 20 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/night/rain_showers?size=medium","shortForecast":"Chance Rain Showers","detailedForecast":"A chance of rain showers. Partly cloudy, with a low around 31."},{"number":10,"name":"Tuesday","startTime":"2023-10-03T06:00:00-06:00","endTime":"2023-10-03T18:00:00-06:00","isDaytime":true,"temperature":57,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":0},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":92},"windSpeed":"5 to 15 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/day/snow/tsra_hi?size=medium","shortForecast":"Slight Chance Rain And Snow Showers then Slight Chance Showers And Thunderstorms","detailedForecast":"A slight chance of rain and snow showers before noon, then a slight chance of showers and thunderstorms. Mostly sunny, with a high near 57."},{"number":11,"name":"Tuesday Night","startTime":"2023-10-03T18:00:00-06:00","endTime":"2023-10-04T06:00:00-06:00","isDaytime":false,"temperature":26,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":-1.1111111111111112},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":91},"windSpeed":"5 to 15 mph","windDirection":"NW","icon":"https://api.weather.gov/icons/land/night/sct?size=medium","shortForecast":"Partly Cloudy","detailedForecast":"Partly cloudy, with a low around 26."},{"number":12,"name":"Wednesday","startTime":"2023-10-04T06:00:00-06:00","endTime":"2023-10-04T18:00:00-06:00","isDaytime":true,"temperature":60,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":-0.5555555555555556},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":95},"windSpeed":"5 to 10 mph","windDirection":"WNW","icon":"https://api.weather.gov/icons/land/day/few?size=medium","shortForecast":"Sunny","detailedForecast":"Sunny, with a high near 60."},{"number":13,"name":"Wednesday Night","startTime":"2023-10-04T18:00:00-06:00","endTime":"2023-10-05T06:00:00-06:00","isDaytime":false,"temperature":26,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":-1.1111111111111112},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":87},"windSpeed":"5 to 10 mph","windDirection":"N","icon":"https://api.weather.gov/icons/land/night/few?size=medium","shortForecast":"Mostly Clear","detailedForecast":"Mostly clear, with a low around 26."},{"number":14,"name":"Thursday","startTime":"2023-10-05T06:00:00-06:00","endTime":"2023-10-05T18:00:00-06:00","isDaytime":true,"temperature":65,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":-1.1111111111111112},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":92},"windSpeed":"5 to 15 mph","windDirection":"E","icon":"https://api.weather.gov/icons/land/day/few?size=medium","shortForecast":"Sunny","detailedForecast":"Sunny, with a high near 65."}]}
  var hourly_GJT_152_72 = false
  var crags_config = [
  {
    "name": "Gunnison",
    "note": "Granite.",
    "mountainProject": "https://www.mountainproject.com/area/105802040/gunnison",
    "station": "KGUC",
    "office": "GJT/152,72",
    "coordinates": [
      -106.927,
      38.546
    ]
  }
]</script>

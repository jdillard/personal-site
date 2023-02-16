---
### THIS FILE IS AUTO-GENERATED - DO NOT EDIT ###
layout: page
title: Staunton State Park, Colorado Climbing Weather - Current, Past, and Forecasted Report
title_override: Staunton State Park<br /><small>Climbing Weather</small>
description: A lightweight weather report for Staunton State Park, Colorado. Optimized for slow internet connections.
js_includes:
  - weather.js
---

<section class="measure center lh-copy f5-ns f6 ph2 mv4" style="text-align: justify;">
<strong>"Is it dry?"</strong>, an oft-repeated, age-old question. Here are real-time,
precipitation-focused reports of current, past, and forecasted climbing weather for Staunton State Park, Colorado.
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
<section id="weather" data-crag="staunton-state-park-colorado" class="mv4-ns mv3 ph2 center"></section>
<section id="nearby" class="tc lh-copy">
  <h3>Nearby Crags</h3>
<a class="nowrap no-underline fancy-link relative light-red mh3" href="/crags/clear-creek-canyon-colorado-weather.html">Clear Creek Canyon</a>
<a class="nowrap no-underline fancy-link relative light-red mh3" href="/crags/lime-park-lime-creek-colorado-weather.html">Lime Park (Lime Creek)</a>
<a class="nowrap no-underline fancy-link relative light-red mh3" href="/crags/independence-pass-colorado-weather.html">Independence Pass</a>
<a class="nowrap no-underline fancy-link relative light-red mh3" href="/crags/moab-utah-weather.html">Moab</a>
<a class="nowrap no-underline fancy-link relative light-red mh3" href="/crags/estes-park-valley-colorado-weather.html">Estes Park Valley</a>
<a class="nowrap no-underline fancy-link relative light-red mh3" href="/crags/gunnison-colorado-weather.html">Gunnison</a>
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
  var weekly_BOU_48_51 = {"updated":"2023-02-15T21:59:00+00:00","units":"us","forecastGenerator":"BaselineForecastGenerator","generatedAt":"2023-02-16T08:35:27+00:00","updateTime":"2023-02-15T21:59:00+00:00","validTimes":"2023-02-15T15:00:00+00:00/P7DT13H","elevation":{"unitCode":"wmoUnit:m","value":2628.9},"periods":[{"number":1,"name":"Overnight","startTime":"2023-02-16T01:00:00-07:00","endTime":"2023-02-16T06:00:00-07:00","isDaytime":false,"temperature":-8,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":-21.11111111111111},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":100},"windSpeed":"6 to 10 mph","windDirection":"NW","icon":"https://api.weather.gov/icons/land/night/cold?size=medium","shortForecast":"Mostly Cloudy","detailedForecast":"Mostly cloudy, with a low around -8. Wind chill values as low as -25. Northwest wind 6 to 10 mph, with gusts as high as 16 mph."},{"number":2,"name":"Thursday","startTime":"2023-02-16T06:00:00-07:00","endTime":"2023-02-16T18:00:00-07:00","isDaytime":true,"temperature":23,"temperatureUnit":"F","temperatureTrend":"falling","probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":-18.333333333333332},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":86},"windSpeed":"12 mph","windDirection":"NW","icon":"https://api.weather.gov/icons/land/day/few?size=medium","shortForecast":"Sunny","detailedForecast":"Sunny. High near 23, with temperatures falling to around 19 in the afternoon. Wind chill values as low as -24. Northwest wind around 12 mph, with gusts as high as 18 mph."},{"number":3,"name":"Thursday Night","startTime":"2023-02-16T18:00:00-07:00","endTime":"2023-02-17T06:00:00-07:00","isDaytime":false,"temperature":1,"temperatureUnit":"F","temperatureTrend":"rising","probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":-19.444444444444443},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":57},"windSpeed":"10 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/night/cold?size=medium","shortForecast":"Mostly Clear","detailedForecast":"Mostly clear. Low around 1, with temperatures rising to around 9 overnight. Wind chill values as low as -8. West wind around 10 mph, with gusts as high as 16 mph."},{"number":4,"name":"Friday","startTime":"2023-02-17T06:00:00-07:00","endTime":"2023-02-17T18:00:00-07:00","isDaytime":true,"temperature":43,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":-9.444444444444445},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":60},"windSpeed":"7 to 12 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/day/few?size=medium","shortForecast":"Sunny","detailedForecast":"Sunny, with a high near 43. Wind chill values as low as -4. West wind 7 to 12 mph, with gusts as high as 17 mph."},{"number":5,"name":"Friday Night","startTime":"2023-02-17T18:00:00-07:00","endTime":"2023-02-18T06:00:00-07:00","isDaytime":false,"temperature":13,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":-11.11111111111111},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":58},"windSpeed":"7 to 10 mph","windDirection":"WSW","icon":"https://api.weather.gov/icons/land/night/sct?size=medium","shortForecast":"Partly Cloudy","detailedForecast":"Partly cloudy, with a low around 13. West southwest wind 7 to 10 mph."},{"number":6,"name":"Saturday","startTime":"2023-02-18T06:00:00-07:00","endTime":"2023-02-18T18:00:00-07:00","isDaytime":true,"temperature":42,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":-12.777777777777779},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":55},"windSpeed":"10 to 15 mph","windDirection":"WSW","icon":"https://api.weather.gov/icons/land/day/sct?size=medium","shortForecast":"Mostly Sunny","detailedForecast":"Mostly sunny, with a high near 42."},{"number":7,"name":"Saturday Night","startTime":"2023-02-18T18:00:00-07:00","endTime":"2023-02-19T06:00:00-07:00","isDaytime":false,"temperature":17,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":-15},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":45},"windSpeed":"17 mph","windDirection":"WSW","icon":"https://api.weather.gov/icons/land/night/sct?size=medium","shortForecast":"Partly Cloudy","detailedForecast":"Partly cloudy, with a low around 17."},{"number":8,"name":"Sunday","startTime":"2023-02-19T06:00:00-07:00","endTime":"2023-02-19T18:00:00-07:00","isDaytime":true,"temperature":39,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":-12.222222222222221},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":48},"windSpeed":"14 to 22 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/day/wind_sct?size=medium","shortForecast":"Mostly Sunny","detailedForecast":"Mostly sunny, with a high near 39."},{"number":9,"name":"Sunday Night","startTime":"2023-02-19T18:00:00-07:00","endTime":"2023-02-20T06:00:00-07:00","isDaytime":false,"temperature":21,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":-12.222222222222221},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":53},"windSpeed":"14 to 17 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/night/snow?size=medium","shortForecast":"Slight Chance Light Snow","detailedForecast":"A slight chance of snow after 11pm. Partly cloudy, with a low around 21."},{"number":10,"name":"Washington's Birthday","startTime":"2023-02-20T06:00:00-07:00","endTime":"2023-02-20T18:00:00-07:00","isDaytime":true,"temperature":42,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":-11.11111111111111},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":51},"windSpeed":"15 to 20 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/day/snow?size=medium","shortForecast":"Chance Light Snow","detailedForecast":"A chance of snow. Partly sunny, with a high near 42. New snow accumulation of less than half an inch possible."},{"number":11,"name":"Monday Night","startTime":"2023-02-20T18:00:00-07:00","endTime":"2023-02-21T06:00:00-07:00","isDaytime":false,"temperature":17,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":-11.11111111111111},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":66},"windSpeed":"12 to 15 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/night/snow?size=medium","shortForecast":"Chance Light Snow","detailedForecast":"A chance of snow. Mostly cloudy, with a low around 17. New snow accumulation of around one inch possible."},{"number":12,"name":"Tuesday","startTime":"2023-02-21T06:00:00-07:00","endTime":"2023-02-21T18:00:00-07:00","isDaytime":true,"temperature":35,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":-12.222222222222221},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":70},"windSpeed":"12 to 15 mph","windDirection":"WNW","icon":"https://api.weather.gov/icons/land/day/snow?size=medium","shortForecast":"Chance Light Snow","detailedForecast":"A chance of snow. Partly sunny, with a high near 35. New snow accumulation of 1 to 2 inches possible."},{"number":13,"name":"Tuesday Night","startTime":"2023-02-21T18:00:00-07:00","endTime":"2023-02-22T06:00:00-07:00","isDaytime":false,"temperature":13,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":-12.777777777777779},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":67},"windSpeed":"14 mph","windDirection":"WSW","icon":"https://api.weather.gov/icons/land/night/snow?size=medium","shortForecast":"Chance Light Snow","detailedForecast":"A chance of snow. Mostly cloudy, with a low around 13. New snow accumulation of less than one inch possible."},{"number":14,"name":"Wednesday","startTime":"2023-02-22T06:00:00-07:00","endTime":"2023-02-22T18:00:00-07:00","isDaytime":true,"temperature":37,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":-11.666666666666666},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":62},"windSpeed":"14 to 18 mph","windDirection":"WSW","icon":"https://api.weather.gov/icons/land/day/snow?size=medium","shortForecast":"Chance Light Snow","detailedForecast":"A chance of snow. Partly sunny, with a high near 37. New snow accumulation of less than half an inch possible."}]}
  var hourly_BOU_48_51 = false
  var crags_config = [
  {
    "name": "Staunton State Park",
    "note": "Interesting and featured rock",
    "mountainProject": "https://www.mountainproject.com/area/107838839/staunton-state-park",
    "station": "KAPA",
    "office": "BOU/48,51",
    "coordinates": [
      -105.379,
      39.499
    ]
  }
]</script>

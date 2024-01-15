---
### THIS FILE IS AUTO-GENERATED - DO NOT EDIT ###
layout: page
title: City of Rocks, Idaho Climbing Weather - Current, Past, and Forecasted
title_override: City of Rocks<br /><small>Climbing Weather</small>
description: A lightweight weather report for City of Rocks, Idaho. Optimized for slow internet connections.
js_includes:
  - weather.js
---

<section class="measure center lh-copy f5-ns f6 ph2 mv4" style="text-align: justify;">
<strong>"Is it dry?"</strong>, an oft-repeated, age-old question. Here are real-time,
precipitation-focused reports of current, past, and forecasted climbing weather for City of Rocks, Idaho.
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
<section id="weather" data-crag="city-of-rocks-idaho" class="mv4-ns mv3 ph2 center"></section>
<section id="nearby" class="tc lh-copy">
  <h3>Nearby Crags</h3>
<a class="nowrap no-underline fancy-link relative light-red mh3" href="/crags/moab-utah-weather.html">Moab</a>
<a class="nowrap no-underline fancy-link relative light-red mh3" href="/crags/little-cottonwood-canyon-utah-weather.html">Little Cottonwood Canyon</a>
</section>
<section id="nearby" class="tc lh-copy">
  <h3>Other Metros</h3>
  <select class="ma1 bg-near-white pa2" id="stateSel">
    <option value="Texas">Texas</option>
    <option value="Washington">Washington</option>
    <option value="Colorado">Colorado</option>
    <option value="Tennessee">Tennessee</option>
    <option value="Utah" selected>Utah</option>
    <option value="California">California</option>
  </select>
  <select class="ma1 bg-near-white pa2" id="citySel">
    <option value="Salt Lake City" selected>Salt Lake City</option>
  </select>
  <a id="selectMetro" class="f6 link dim ph3 pv2 ma1 dib white bg-light-red" href="/crags/salt-lake-city-utah-weather.html">Select Metro</a>
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
  var weekly_PIH_50_16 = {"updated":"2024-01-15T05:31:06+00:00","units":"us","forecastGenerator":"BaselineForecastGenerator","generatedAt":"2024-01-15T08:33:59+00:00","updateTime":"2024-01-15T05:31:06+00:00","validTimes":"2024-01-14T23:00:00+00:00/P7DT14H","elevation":{"unitCode":"wmoUnit:m","value":1546.86},"periods":[{"number":1,"name":"Overnight","startTime":"2024-01-15T01:00:00-07:00","endTime":"2024-01-15T06:00:00-07:00","isDaytime":false,"temperature":17,"temperatureUnit":"F","temperatureTrend":"rising","probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":-6.111111111111111},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":96},"windSpeed":"13 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/night/bkn?size=medium","shortForecast":"Mostly Cloudy","detailedForecast":"Mostly cloudy. Low around 17, with temperatures rising to around 19 overnight. West wind around 13 mph."},{"number":2,"name":"M.L. King Jr. Day","startTime":"2024-01-15T06:00:00-07:00","endTime":"2024-01-15T18:00:00-07:00","isDaytime":true,"temperature":28,"temperatureUnit":"F","temperatureTrend":"falling","probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":-8.333333333333334},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":96},"windSpeed":"6 to 12 mph","windDirection":"NNW","icon":"https://api.weather.gov/icons/land/day/sct?size=medium","shortForecast":"Mostly Sunny","detailedForecast":"Mostly sunny. High near 28, with temperatures falling to around 19 in the afternoon. North northwest wind 6 to 12 mph, with gusts as high as 18 mph."},{"number":3,"name":"Monday Night","startTime":"2024-01-15T18:00:00-07:00","endTime":"2024-01-16T06:00:00-07:00","isDaytime":false,"temperature":1,"temperatureUnit":"F","temperatureTrend":"rising","probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":-12.777777777777779},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":88},"windSpeed":"6 mph","windDirection":"NW","icon":"https://api.weather.gov/icons/land/night/cold?size=medium","shortForecast":"Partly Cloudy","detailedForecast":"Partly cloudy. Low around 1, with temperatures rising to around 5 overnight. Wind chill values as low as -4. Northwest wind around 6 mph."},{"number":4,"name":"Tuesday","startTime":"2024-01-16T06:00:00-07:00","endTime":"2024-01-16T18:00:00-07:00","isDaytime":true,"temperature":29,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":30},"dewpoint":{"unitCode":"wmoUnit:degC","value":-6.666666666666667},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":91},"windSpeed":"3 to 9 mph","windDirection":"SSW","icon":"https://api.weather.gov/icons/land/day/sct/snow,30?size=medium","shortForecast":"Mostly Sunny then Chance Light Snow","detailedForecast":"A chance of snow after 5pm. Mostly sunny, with a high near 29. Wind chill values as low as -3. South southwest wind 3 to 9 mph. Chance of precipitation is 30%."},{"number":5,"name":"Tuesday Night","startTime":"2024-01-16T18:00:00-07:00","endTime":"2024-01-17T06:00:00-07:00","isDaytime":false,"temperature":18,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":90},"dewpoint":{"unitCode":"wmoUnit:degC","value":-3.888888888888889},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":96},"windSpeed":"9 mph","windDirection":"SSW","icon":"https://api.weather.gov/icons/land/night/snow,90?size=medium","shortForecast":"Light Snow","detailedForecast":"Snow. Mostly cloudy, with a low around 18. South southwest wind around 9 mph. Chance of precipitation is 90%. New snow accumulation of 1 to 3 inches possible."},{"number":6,"name":"Wednesday","startTime":"2024-01-17T06:00:00-07:00","endTime":"2024-01-17T18:00:00-07:00","isDaytime":true,"temperature":39,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":90},"dewpoint":{"unitCode":"wmoUnit:degC","value":0},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":100},"windSpeed":"8 to 14 mph","windDirection":"WSW","icon":"https://api.weather.gov/icons/land/day/snow,90/snow,60?size=medium","shortForecast":"Light Snow","detailedForecast":"Snow before 11am, then rain and snow likely. Mostly cloudy, with a high near 39. Chance of precipitation is 90%. New snow accumulation of 1 to 2 inches possible."},{"number":7,"name":"Wednesday Night","startTime":"2024-01-17T18:00:00-07:00","endTime":"2024-01-18T06:00:00-07:00","isDaytime":false,"temperature":19,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":50},"dewpoint":{"unitCode":"wmoUnit:degC","value":-1.1111111111111112},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":95},"windSpeed":"15 mph","windDirection":"WSW","icon":"https://api.weather.gov/icons/land/night/snow,50/snow,30?size=medium","shortForecast":"Chance Rain And Snow","detailedForecast":"A chance of rain and snow before 5am. Mostly cloudy, with a low around 19. Chance of precipitation is 50%. Little or no snow accumulation expected."},{"number":8,"name":"Thursday","startTime":"2024-01-18T06:00:00-07:00","endTime":"2024-01-18T18:00:00-07:00","isDaytime":true,"temperature":38,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":-1.1111111111111112},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":99},"windSpeed":"8 to 14 mph","windDirection":"WSW","icon":"https://api.weather.gov/icons/land/day/bkn?size=medium","shortForecast":"Partly Sunny","detailedForecast":"Partly sunny, with a high near 38."},{"number":9,"name":"Thursday Night","startTime":"2024-01-18T18:00:00-07:00","endTime":"2024-01-19T06:00:00-07:00","isDaytime":false,"temperature":20,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":-3.888888888888889},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":93},"windSpeed":"8 mph","windDirection":"S","icon":"https://api.weather.gov/icons/land/night/bkn?size=medium","shortForecast":"Mostly Cloudy","detailedForecast":"Mostly cloudy, with a low around 20."},{"number":10,"name":"Friday","startTime":"2024-01-19T06:00:00-07:00","endTime":"2024-01-19T18:00:00-07:00","isDaytime":true,"temperature":39,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":-1.1111111111111112},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":93},"windSpeed":"9 mph","windDirection":"S","icon":"https://api.weather.gov/icons/land/day/bkn?size=medium","shortForecast":"Partly Sunny","detailedForecast":"Partly sunny, with a high near 39."},{"number":11,"name":"Friday Night","startTime":"2024-01-19T18:00:00-07:00","endTime":"2024-01-20T06:00:00-07:00","isDaytime":false,"temperature":22,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":40},"dewpoint":{"unitCode":"wmoUnit:degC","value":-2.7777777777777777},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":89},"windSpeed":"9 mph","windDirection":"S","icon":"https://api.weather.gov/icons/land/night/bkn/snow,40?size=medium","shortForecast":"Mostly Cloudy then Chance Rain And Snow","detailedForecast":"A chance of rain and snow after 5am. Mostly cloudy, with a low around 22. Chance of precipitation is 40%."},{"number":12,"name":"Saturday","startTime":"2024-01-20T06:00:00-07:00","endTime":"2024-01-20T18:00:00-07:00","isDaytime":true,"temperature":40,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":40},"dewpoint":{"unitCode":"wmoUnit:degC","value":0.5555555555555556},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":97},"windSpeed":"9 mph","windDirection":"S","icon":"https://api.weather.gov/icons/land/day/snow,40?size=medium","shortForecast":"Chance Rain And Snow","detailedForecast":"A chance of rain and snow. Mostly cloudy, with a high near 40. Chance of precipitation is 40%."},{"number":13,"name":"Saturday Night","startTime":"2024-01-20T18:00:00-07:00","endTime":"2024-01-21T06:00:00-07:00","isDaytime":false,"temperature":25,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":50},"dewpoint":{"unitCode":"wmoUnit:degC","value":-0.5555555555555556},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":98},"windSpeed":"9 mph","windDirection":"S","icon":"https://api.weather.gov/icons/land/night/snow,40/snow,50?size=medium","shortForecast":"Chance Rain And Snow","detailedForecast":"A slight chance of rain before 8pm, then a chance of rain and snow. Mostly cloudy, with a low around 25. Chance of precipitation is 50%."},{"number":14,"name":"Sunday","startTime":"2024-01-21T06:00:00-07:00","endTime":"2024-01-21T18:00:00-07:00","isDaytime":true,"temperature":39,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":50},"dewpoint":{"unitCode":"wmoUnit:degC","value":0.5555555555555556},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":100},"windSpeed":"9 mph","windDirection":"S","icon":"https://api.weather.gov/icons/land/day/snow,50/snow,40?size=medium","shortForecast":"Chance Rain And Snow","detailedForecast":"A chance of rain and snow. Mostly cloudy, with a high near 39. Chance of precipitation is 50%."}]}
  var hourly_PIH_50_16 = false
  var crags_config = [
  {
    "name": "City of Rocks",
    "note": "Varnished and pocketed granite",
    "mountainProject": "https://www.mountainproject.com/area/105739322/city-of-rocks",
    "station": "RCKI1",
    "office": "PIH/50,16",
    "coordinates": [
      -113.7215,
      42.0760
    ]
  }
]</script>

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
  var weekly_GJT_152_72 = {"updated":"2024-03-05T08:03:25+00:00","units":"us","forecastGenerator":"BaselineForecastGenerator","generatedAt":"2024-03-05T08:32:39+00:00","updateTime":"2024-03-05T08:03:25+00:00","validTimes":"2024-03-05T02:00:00+00:00/P7DT23H","elevation":{"unitCode":"wmoUnit:m","value":2390.8512},"periods":[{"number":1,"name":"Overnight","startTime":"2024-03-05T01:00:00-07:00","endTime":"2024-03-05T06:00:00-07:00","isDaytime":false,"temperature":11,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":-8.88888888888889},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":98},"windSpeed":"0 to 5 mph","windDirection":"S","icon":"https://api.weather.gov/icons/land/night/sct?size=medium","shortForecast":"Partly Cloudy","detailedForecast":"Partly cloudy, with a low around 11. South wind 0 to 5 mph."},{"number":2,"name":"Tuesday","startTime":"2024-03-05T06:00:00-07:00","endTime":"2024-03-05T18:00:00-07:00","isDaytime":true,"temperature":35,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":20},"dewpoint":{"unitCode":"wmoUnit:degC","value":-5.555555555555555},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":100},"windSpeed":"0 to 10 mph","windDirection":"SSW","icon":"https://api.weather.gov/icons/land/day/bkn/snow,20?size=medium","shortForecast":"Partly Sunny then Slight Chance Rain And Snow Showers","detailedForecast":"A slight chance of rain and snow showers between 2pm and 3pm. Partly sunny, with a high near 35. South southwest wind 0 to 10 mph. Chance of precipitation is 20%."},{"number":3,"name":"Tuesday Night","startTime":"2024-03-05T18:00:00-07:00","endTime":"2024-03-06T06:00:00-07:00","isDaytime":false,"temperature":12,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":-6.111111111111111},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":100},"windSpeed":"5 to 10 mph","windDirection":"SSE","icon":"https://api.weather.gov/icons/land/night/bkn?size=medium","shortForecast":"Mostly Cloudy","detailedForecast":"Mostly cloudy, with a low around 12. South southeast wind 5 to 10 mph."},{"number":4,"name":"Wednesday","startTime":"2024-03-06T06:00:00-07:00","endTime":"2024-03-06T18:00:00-07:00","isDaytime":true,"temperature":37,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":20},"dewpoint":{"unitCode":"wmoUnit:degC","value":-5.555555555555555},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":100},"windSpeed":"0 to 10 mph","windDirection":"S","icon":"https://api.weather.gov/icons/land/day/snow,20?size=medium","shortForecast":"Slight Chance Rain And Snow Showers","detailedForecast":"A slight chance of rain and snow showers between 11am and 5pm. Partly sunny, with a high near 37. South wind 0 to 10 mph. Chance of precipitation is 20%."},{"number":5,"name":"Wednesday Night","startTime":"2024-03-06T18:00:00-07:00","endTime":"2024-03-07T06:00:00-07:00","isDaytime":false,"temperature":17,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":-6.111111111111111},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":86},"windSpeed":"5 to 10 mph","windDirection":"NE","icon":"https://api.weather.gov/icons/land/night/bkn?size=medium","shortForecast":"Mostly Cloudy","detailedForecast":"Mostly cloudy, with a low around 17. Northeast wind 5 to 10 mph."},{"number":6,"name":"Thursday","startTime":"2024-03-07T06:00:00-07:00","endTime":"2024-03-07T18:00:00-07:00","isDaytime":true,"temperature":38,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":50},"dewpoint":{"unitCode":"wmoUnit:degC","value":-5.555555555555555},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":87},"windSpeed":"5 mph","windDirection":"SW","icon":"https://api.weather.gov/icons/land/day/snow,50?size=medium","shortForecast":"Chance Snow Showers","detailedForecast":"A chance of snow showers after 11am. Mostly cloudy, with a high near 38. Chance of precipitation is 50%. New snow accumulation of less than half an inch possible."},{"number":7,"name":"Thursday Night","startTime":"2024-03-07T18:00:00-07:00","endTime":"2024-03-08T06:00:00-07:00","isDaytime":false,"temperature":18,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":30},"dewpoint":{"unitCode":"wmoUnit:degC","value":-5.555555555555555},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":90},"windSpeed":"5 mph","windDirection":"NW","icon":"https://api.weather.gov/icons/land/night/snow,30?size=medium","shortForecast":"Chance Snow Showers","detailedForecast":"A chance of snow showers. Mostly cloudy, with a low around 18. Chance of precipitation is 30%. New snow accumulation of less than half an inch possible."},{"number":8,"name":"Friday","startTime":"2024-03-08T06:00:00-07:00","endTime":"2024-03-08T18:00:00-07:00","isDaytime":true,"temperature":37,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":-6.666666666666667},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":88},"windSpeed":"5 to 10 mph","windDirection":"NNW","icon":"https://api.weather.gov/icons/land/day/snow?size=medium","shortForecast":"Snow Showers Likely","detailedForecast":"Snow showers likely. Mostly cloudy, with a high near 37. New snow accumulation of less than half an inch possible."},{"number":9,"name":"Friday Night","startTime":"2024-03-08T18:00:00-07:00","endTime":"2024-03-09T06:00:00-07:00","isDaytime":false,"temperature":12,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":-6.666666666666667},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":87},"windSpeed":"5 to 10 mph","windDirection":"NNE","icon":"https://api.weather.gov/icons/land/night/snow/bkn?size=medium","shortForecast":"Chance Snow Showers then Mostly Cloudy","detailedForecast":"A chance of snow showers before 11pm. Mostly cloudy, with a low around 12. New snow accumulation of less than half an inch possible."},{"number":10,"name":"Saturday","startTime":"2024-03-09T06:00:00-07:00","endTime":"2024-03-09T18:00:00-07:00","isDaytime":true,"temperature":37,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":-8.333333333333334},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":86},"windSpeed":"5 to 10 mph","windDirection":"NW","icon":"https://api.weather.gov/icons/land/day/sct?size=medium","shortForecast":"Mostly Sunny","detailedForecast":"Mostly sunny, with a high near 37."},{"number":11,"name":"Saturday Night","startTime":"2024-03-09T18:00:00-07:00","endTime":"2024-03-10T06:00:00-06:00","isDaytime":false,"temperature":9,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":-8.333333333333334},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":83},"windSpeed":"5 to 10 mph","windDirection":"NNW","icon":"https://api.weather.gov/icons/land/night/cold?size=medium","shortForecast":"Mostly Clear","detailedForecast":"Mostly clear, with a low around 9."},{"number":12,"name":"Sunday","startTime":"2024-03-10T06:00:00-06:00","endTime":"2024-03-10T18:00:00-06:00","isDaytime":true,"temperature":40,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":-8.333333333333334},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":81},"windSpeed":"5 to 10 mph","windDirection":"SSW","icon":"https://api.weather.gov/icons/land/day/sct?size=medium","shortForecast":"Mostly Sunny","detailedForecast":"Mostly sunny, with a high near 40."},{"number":13,"name":"Sunday Night","startTime":"2024-03-10T18:00:00-06:00","endTime":"2024-03-11T06:00:00-06:00","isDaytime":false,"temperature":12,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":-7.777777777777778},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":79},"windSpeed":"5 to 10 mph","windDirection":"NNW","icon":"https://api.weather.gov/icons/land/night/sct?size=medium","shortForecast":"Partly Cloudy","detailedForecast":"Partly cloudy, with a low around 12."},{"number":14,"name":"Monday","startTime":"2024-03-11T06:00:00-06:00","endTime":"2024-03-11T18:00:00-06:00","isDaytime":true,"temperature":43,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":-7.222222222222222},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":78},"windSpeed":"5 to 10 mph","windDirection":"SSE","icon":"https://api.weather.gov/icons/land/day/sct?size=medium","shortForecast":"Mostly Sunny","detailedForecast":"Mostly sunny, with a high near 43."}]}
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

---
### THIS FILE IS AUTO-GENERATED - DO NOT EDIT ###
layout: page
title: Staunton State Park, Colorado Climbing Weather - Current, Past, and Forecasted
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
  var weekly_BOU_48_51 = {"updated":"2024-01-04T20:49:45+00:00","units":"us","forecastGenerator":"BaselineForecastGenerator","generatedAt":"2024-01-05T08:32:16+00:00","updateTime":"2024-01-04T20:49:45+00:00","validTimes":"2024-01-04T14:00:00+00:00/P7DT11H","elevation":{"unitCode":"wmoUnit:m","value":2560.0152},"periods":[{"number":1,"name":"Overnight","startTime":"2024-01-05T01:00:00-07:00","endTime":"2024-01-05T06:00:00-07:00","isDaytime":false,"temperature":11,"temperatureUnit":"F","temperatureTrend":"rising","probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":40},"dewpoint":{"unitCode":"wmoUnit:degC","value":-10},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":100},"windSpeed":"2 to 6 mph","windDirection":"NNW","icon":"https://api.weather.gov/icons/land/night/snow,40?size=medium","shortForecast":"Chance Light Snow","detailedForecast":"A chance of snow. Mostly cloudy. Low around 11, with temperatures rising to around 13 overnight. North northwest wind 2 to 6 mph. Chance of precipitation is 40%. New snow accumulation of less than half an inch possible."},{"number":2,"name":"Friday","startTime":"2024-01-05T06:00:00-07:00","endTime":"2024-01-05T18:00:00-07:00","isDaytime":true,"temperature":30,"temperatureUnit":"F","temperatureTrend":"falling","probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":50},"dewpoint":{"unitCode":"wmoUnit:degC","value":-10.555555555555555},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":98},"windSpeed":"2 to 9 mph","windDirection":"NNW","icon":"https://api.weather.gov/icons/land/day/snow,20/snow,50?size=medium","shortForecast":"Chance Light Snow","detailedForecast":"A chance of snow. Partly sunny. High near 30, with temperatures falling to around 24 in the afternoon. North northwest wind 2 to 9 mph. Chance of precipitation is 50%. New snow accumulation of less than half an inch possible."},{"number":3,"name":"Friday Night","startTime":"2024-01-05T18:00:00-07:00","endTime":"2024-01-06T06:00:00-07:00","isDaytime":false,"temperature":6,"temperatureUnit":"F","temperatureTrend":"rising","probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":50},"dewpoint":{"unitCode":"wmoUnit:degC","value":-11.11111111111111},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":94},"windSpeed":"6 mph","windDirection":"NW","icon":"https://api.weather.gov/icons/land/night/snow,50/snow,40?size=medium","shortForecast":"Light Snow Likely","detailedForecast":"Snow likely. Mostly cloudy. Low around 6, with temperatures rising to around 8 overnight. Wind chill values as low as 0. Northwest wind around 6 mph. Chance of precipitation is 50%. New snow accumulation of 1 to 2 inches possible."},{"number":4,"name":"Saturday","startTime":"2024-01-06T06:00:00-07:00","endTime":"2024-01-06T18:00:00-07:00","isDaytime":true,"temperature":27,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":20},"dewpoint":{"unitCode":"wmoUnit:degC","value":-13.88888888888889},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":98},"windSpeed":"5 to 10 mph","windDirection":"WNW","icon":"https://api.weather.gov/icons/land/day/snow,20?size=medium","shortForecast":"Chance Light Snow","detailedForecast":"A chance of snow before 5pm. Partly sunny, with a high near 27. Wind chill values as low as -1. West northwest wind 5 to 10 mph, with gusts as high as 16 mph. Chance of precipitation is 20%."},{"number":5,"name":"Saturday Night","startTime":"2024-01-06T18:00:00-07:00","endTime":"2024-01-07T06:00:00-07:00","isDaytime":false,"temperature":2,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":-16.666666666666668},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":78},"windSpeed":"9 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/night/cold?size=medium","shortForecast":"Mostly Cloudy","detailedForecast":"Mostly cloudy, with a low around 2. West wind around 9 mph."},{"number":6,"name":"Sunday","startTime":"2024-01-07T06:00:00-07:00","endTime":"2024-01-07T18:00:00-07:00","isDaytime":true,"temperature":26,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":70},"dewpoint":{"unitCode":"wmoUnit:degC","value":-13.333333333333334},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":76},"windSpeed":"10 mph","windDirection":"NE","icon":"https://api.weather.gov/icons/land/day/snow,30/snow,70?size=medium","shortForecast":"Light Snow Likely","detailedForecast":"Snow likely after 11am. Mostly cloudy, with a high near 26. Chance of precipitation is 70%. New snow accumulation of 1 to 2 inches possible."},{"number":7,"name":"Sunday Night","startTime":"2024-01-07T18:00:00-07:00","endTime":"2024-01-08T06:00:00-07:00","isDaytime":false,"temperature":5,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":70},"dewpoint":{"unitCode":"wmoUnit:degC","value":-13.333333333333334},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":98},"windSpeed":"12 mph","windDirection":"N","icon":"https://api.weather.gov/icons/land/night/snow,70/snow,60?size=medium","shortForecast":"Light Snow Likely","detailedForecast":"Snow likely. Cloudy, with a low around 5. Chance of precipitation is 70%. New snow accumulation of 1 to 3 inches possible."},{"number":8,"name":"Monday","startTime":"2024-01-08T06:00:00-07:00","endTime":"2024-01-08T18:00:00-07:00","isDaytime":true,"temperature":20,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":-13.333333333333334},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":100},"windSpeed":"13 mph","windDirection":"NNW","icon":"https://api.weather.gov/icons/land/day/snow?size=medium","shortForecast":"Chance Light Snow","detailedForecast":"A chance of snow before 5pm. Mostly cloudy, with a high near 20. New snow accumulation of less than half an inch possible."},{"number":9,"name":"Monday Night","startTime":"2024-01-08T18:00:00-07:00","endTime":"2024-01-09T06:00:00-07:00","isDaytime":false,"temperature":0,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":-15},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":76},"windSpeed":"10 to 17 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/night/cold?size=medium","shortForecast":"Partly Cloudy","detailedForecast":"Partly cloudy, with a low around 0."},{"number":10,"name":"Tuesday","startTime":"2024-01-09T06:00:00-07:00","endTime":"2024-01-09T18:00:00-07:00","isDaytime":true,"temperature":31,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":-11.666666666666666},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":74},"windSpeed":"18 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/day/sct?size=medium","shortForecast":"Mostly Sunny","detailedForecast":"Mostly sunny, with a high near 31."},{"number":11,"name":"Tuesday Night","startTime":"2024-01-09T18:00:00-07:00","endTime":"2024-01-10T06:00:00-07:00","isDaytime":false,"temperature":8,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":-12.777777777777779},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":76},"windSpeed":"17 mph","windDirection":"WSW","icon":"https://api.weather.gov/icons/land/night/cold/snow?size=medium","shortForecast":"Partly Cloudy then Chance Light Snow","detailedForecast":"A chance of snow after 5am. Partly cloudy, with a low around 8."},{"number":12,"name":"Wednesday","startTime":"2024-01-10T06:00:00-07:00","endTime":"2024-01-10T18:00:00-07:00","isDaytime":true,"temperature":28,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":-12.777777777777779},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":79},"windSpeed":"16 to 20 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/day/snow?size=medium","shortForecast":"Chance Light Snow","detailedForecast":"A chance of snow. Partly sunny, with a high near 28. New snow accumulation of 1 to 2 inches possible."},{"number":13,"name":"Wednesday Night","startTime":"2024-01-10T18:00:00-07:00","endTime":"2024-01-11T06:00:00-07:00","isDaytime":false,"temperature":1,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":-15},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":79},"windSpeed":"10 to 16 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/night/snow?size=medium","shortForecast":"Chance Light Snow","detailedForecast":"A chance of snow. Mostly cloudy, with a low around 1. New snow accumulation of 1 to 3 inches possible."},{"number":14,"name":"Thursday","startTime":"2024-01-11T06:00:00-07:00","endTime":"2024-01-11T18:00:00-07:00","isDaytime":true,"temperature":21,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":-16.666666666666668},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":79},"windSpeed":"13 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/day/snow?size=medium","shortForecast":"Chance Light Snow","detailedForecast":"A chance of snow. Partly sunny, with a high near 21."}]}
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

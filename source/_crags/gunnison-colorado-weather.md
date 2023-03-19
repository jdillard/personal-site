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
  var weekly_GJT_152_72 = {"updated":"2023-03-19T08:24:24+00:00","units":"us","forecastGenerator":"BaselineForecastGenerator","generatedAt":"2023-03-19T08:33:31+00:00","updateTime":"2023-03-19T08:24:24+00:00","validTimes":"2023-03-19T02:00:00+00:00/P7DT23H","elevation":{"unitCode":"wmoUnit:m","value":2390.8512},"periods":[{"number":1,"name":"Overnight","startTime":"2023-03-19T02:00:00-06:00","endTime":"2023-03-19T06:00:00-06:00","isDaytime":false,"temperature":-4,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":-19.444444444444443},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":86},"windSpeed":"5 mph","windDirection":"E","icon":"https://api.weather.gov/icons/land/night/cold?size=medium","shortForecast":"Mostly Clear","detailedForecast":"Mostly clear, with a low around -4. Wind chill values as low as -11. East wind around 5 mph."},{"number":2,"name":"Sunday","startTime":"2023-03-19T06:00:00-06:00","endTime":"2023-03-19T18:00:00-06:00","isDaytime":true,"temperature":32,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":-10.555555555555555},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":93},"windSpeed":"5 to 10 mph","windDirection":"SSW","icon":"https://api.weather.gov/icons/land/day/sct?size=medium","shortForecast":"Mostly Sunny","detailedForecast":"Mostly sunny, with a high near 32. Wind chill values as low as -12. South southwest wind 5 to 10 mph."},{"number":3,"name":"Sunday Night","startTime":"2023-03-19T18:00:00-06:00","endTime":"2023-03-20T06:00:00-06:00","isDaytime":false,"temperature":8,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":20},"dewpoint":{"unitCode":"wmoUnit:degC","value":-9.444444444444445},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":100},"windSpeed":"5 to 10 mph","windDirection":"NNE","icon":"https://api.weather.gov/icons/land/night/cold/snow,20?size=medium","shortForecast":"Mostly Cloudy then Slight Chance Snow Showers","detailedForecast":"A slight chance of snow showers after 5am. Mostly cloudy, with a low around 8. North northeast wind 5 to 10 mph. Chance of precipitation is 20%."},{"number":4,"name":"Monday","startTime":"2023-03-20T06:00:00-06:00","endTime":"2023-03-20T18:00:00-06:00","isDaytime":true,"temperature":35,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":60},"dewpoint":{"unitCode":"wmoUnit:degC","value":-4.444444444444445},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":100},"windSpeed":"5 to 10 mph","windDirection":"S","icon":"https://api.weather.gov/icons/land/day/snow,30/snow,60?size=medium","shortForecast":"Snow Showers Likely","detailedForecast":"Snow showers likely. Mostly cloudy, with a high near 35. South wind 5 to 10 mph. Chance of precipitation is 60%. New snow accumulation of less than one inch possible."},{"number":5,"name":"Monday Night","startTime":"2023-03-20T18:00:00-06:00","endTime":"2023-03-21T06:00:00-06:00","isDaytime":false,"temperature":16,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":70},"dewpoint":{"unitCode":"wmoUnit:degC","value":-3.888888888888889},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":90},"windSpeed":"10 to 20 mph","windDirection":"WSW","icon":"https://api.weather.gov/icons/land/night/snow,70/blizzard,30?size=medium","shortForecast":"Snow Showers Likely","detailedForecast":"Snow showers likely and a slight chance of thunderstorms before 1am, then a chance of snow showers and patchy blowing snow. Mostly cloudy, with a low around 16. West southwest wind 10 to 20 mph, with gusts as high as 35 mph. Chance of precipitation is 70%. New snow accumulation of less than one inch possible."},{"number":6,"name":"Tuesday","startTime":"2023-03-21T06:00:00-06:00","endTime":"2023-03-21T18:00:00-06:00","isDaytime":true,"temperature":34,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":60},"dewpoint":{"unitCode":"wmoUnit:degC","value":-5.555555555555555},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":90},"windSpeed":"10 to 15 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/day/snow,30/snow,60?size=medium","shortForecast":"Snow Showers Likely","detailedForecast":"Snow showers likely. Mostly cloudy, with a high near 34. Chance of precipitation is 60%. New snow accumulation of less than half an inch possible."},{"number":7,"name":"Tuesday Night","startTime":"2023-03-21T18:00:00-06:00","endTime":"2023-03-22T06:00:00-06:00","isDaytime":false,"temperature":19,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":70},"dewpoint":{"unitCode":"wmoUnit:degC","value":-5},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":87},"windSpeed":"10 to 15 mph","windDirection":"S","icon":"https://api.weather.gov/icons/land/night/snow,50/snow,70?size=medium","shortForecast":"Snow Showers Likely","detailedForecast":"Snow showers likely. Mostly cloudy, with a low around 19. Chance of precipitation is 70%. New snow accumulation of less than one inch possible."},{"number":8,"name":"Wednesday","startTime":"2023-03-22T06:00:00-06:00","endTime":"2023-03-22T18:00:00-06:00","isDaytime":true,"temperature":38,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":-5.555555555555555},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":86},"windSpeed":"15 to 25 mph","windDirection":"WSW","icon":"https://api.weather.gov/icons/land/day/blizzard?size=medium","shortForecast":"Snow Showers And Patchy Blowing Snow","detailedForecast":"Snow showers before 11am, then snow showers and patchy blowing snow. Cloudy, with a high near 38. New snow accumulation of less than one inch possible."},{"number":9,"name":"Wednesday Night","startTime":"2023-03-22T18:00:00-06:00","endTime":"2023-03-23T06:00:00-06:00","isDaytime":false,"temperature":12,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":-6.666666666666667},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":84},"windSpeed":"10 to 20 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/night/blizzard/bkn?size=medium","shortForecast":"Patchy Blowing Snow then Mostly Cloudy","detailedForecast":"Patchy blowing snow and a slight chance of snow showers before midnight. Mostly cloudy, with a low around 12."},{"number":10,"name":"Thursday","startTime":"2023-03-23T06:00:00-06:00","endTime":"2023-03-23T18:00:00-06:00","isDaytime":true,"temperature":32,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":-8.88888888888889},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":84},"windSpeed":"10 to 15 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/day/bkn/snow?size=medium","shortForecast":"Mostly Cloudy then Chance Snow Showers","detailedForecast":"A chance of snow showers after noon. Mostly cloudy, with a high near 32. Little or no snow accumulation expected."},{"number":11,"name":"Thursday Night","startTime":"2023-03-23T18:00:00-06:00","endTime":"2023-03-24T06:00:00-06:00","isDaytime":false,"temperature":12,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":-8.333333333333334},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":85},"windSpeed":"5 to 15 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/night/bkn?size=medium","shortForecast":"Mostly Cloudy","detailedForecast":"Mostly cloudy, with a low around 12."},{"number":12,"name":"Friday","startTime":"2023-03-24T06:00:00-06:00","endTime":"2023-03-24T18:00:00-06:00","isDaytime":true,"temperature":33,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":-9.444444444444445},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":83},"windSpeed":"5 to 15 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/day/bkn/snow?size=medium","shortForecast":"Partly Sunny then Slight Chance Snow Showers","detailedForecast":"A slight chance of snow showers after noon. Partly sunny, with a high near 33."},{"number":13,"name":"Friday Night","startTime":"2023-03-24T18:00:00-06:00","endTime":"2023-03-25T06:00:00-06:00","isDaytime":false,"temperature":12,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":-8.88888888888889},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":82},"windSpeed":"5 to 15 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/night/bkn/snow?size=medium","shortForecast":"Mostly Cloudy then Slight Chance Snow Showers","detailedForecast":"A slight chance of snow showers after midnight. Mostly cloudy, with a low around 12. Little or no snow accumulation expected."},{"number":14,"name":"Saturday","startTime":"2023-03-25T06:00:00-06:00","endTime":"2023-03-25T18:00:00-06:00","isDaytime":true,"temperature":31,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":-10.555555555555555},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":82},"windSpeed":"5 to 15 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/day/snow?size=medium","shortForecast":"Chance Snow Showers","detailedForecast":"A chance of snow showers. Mostly cloudy, with a high near 31. New snow accumulation of less than half an inch possible."}]}
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

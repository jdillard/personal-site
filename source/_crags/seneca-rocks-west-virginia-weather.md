---
### THIS FILE IS AUTO-GENERATED - DO NOT EDIT ###
layout: page
title: Seneca Rocks, West Virginia Climbing Weather - Current, Past, and Forecasted
title_override: Seneca Rocks<br /><small>Climbing Weather</small>
description: A lightweight weather report for Seneca Rocks, West Virginia. Optimized for slow internet connections.
js_includes:
  - weather.js
---

<section class="measure center lh-copy f5-ns f6 ph2 mv4" style="text-align: justify;">
<strong>"Is it dry?"</strong>, an oft-repeated, age-old question. Here are real-time,
precipitation-focused reports of current, past, and forecasted climbing weather for Seneca Rocks, West Virginia.
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
<section id="weather" data-crag="seneca-rocks-west-virginia" class="mv4-ns mv3 ph2 center"></section>
<section id="nearby" class="tc lh-copy">
  <h3>Nearby Crags</h3>
<a class="nowrap no-underline fancy-link relative light-red mh3" href="/crags/jackson-falls-illinois-weather.html">Jackson Falls</a>
<a class="nowrap no-underline fancy-link relative light-red mh3" href="/crags/red-river-gorge-kentucky-weather.html">Red River Gorge</a>
<a class="nowrap no-underline fancy-link relative light-red mh3" href="/crags/foster-falls-tennessee-weather.html">Foster Falls</a>
</section>
<section id="nearby" class="tc lh-copy">
  <h3>Other Metros</h3>
  <select class="ma1 bg-near-white pa2" id="stateSel">
    <option value="Texas">Texas</option>
    <option value="Washington">Washington</option>
    <option value="Colorado">Colorado</option>
    <option value="Tennessee" selected>Tennessee</option>
    <option value="Utah">Utah</option>
    <option value="California">California</option>
  </select>
  <select class="ma1 bg-near-white pa2" id="citySel">
    <option value="Nashville" selected>Nashville</option>
  </select>
  <a id="selectMetro" class="f6 link dim ph3 pv2 ma1 dib white bg-light-red" href="/crags/nashville-tennessee-weather.html">Select Metro</a>
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
  var weekly_LWX_14_57 = {"units":"us","forecastGenerator":"BaselineForecastGenerator","generatedAt":"2024-11-23T08:35:24+00:00","updateTime":"2024-11-23T05:31:03+00:00","validTimes":"2024-11-22T23:00:00+00:00/P8DT2H","elevation":{"unitCode":"wmoUnit:m","value":729.996},"periods":[{"number":1,"name":"Overnight","startTime":"2024-11-23T03:00:00-05:00","endTime":"2024-11-23T06:00:00-05:00","isDaytime":false,"temperature":33,"temperatureUnit":"F","temperatureTrend":"","probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":70},"windSpeed":"17 mph","windDirection":"NW","icon":"https://api.weather.gov/icons/land/night/snow,70?size=medium","shortForecast":"Rain And Snow Likely","detailedForecast":"Rain likely before 5am, then rain and snow likely. Mostly cloudy, with a low around 33. Northwest wind around 17 mph, with gusts as high as 39 mph. Chance of precipitation is 70%. New rainfall amounts between a tenth and quarter of an inch possible."},{"number":2,"name":"Saturday","startTime":"2024-11-23T06:00:00-05:00","endTime":"2024-11-23T18:00:00-05:00","isDaytime":true,"temperature":41,"temperatureUnit":"F","temperatureTrend":"","probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":70},"windSpeed":"16 mph","windDirection":"NW","icon":"https://api.weather.gov/icons/land/day/rain,70/rain,20?size=medium","shortForecast":"Light Rain Likely","detailedForecast":"Rain likely. Mostly cloudy, with a high near 41. Northwest wind around 16 mph, with gusts as high as 37 mph. Chance of precipitation is 70%. New rainfall amounts between a tenth and quarter of an inch possible."},{"number":3,"name":"Saturday Night","startTime":"2024-11-23T18:00:00-05:00","endTime":"2024-11-24T06:00:00-05:00","isDaytime":false,"temperature":35,"temperatureUnit":"F","temperatureTrend":"","probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":30},"windSpeed":"10 to 15 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/night/rain,30/rain,20?size=medium","shortForecast":"Chance Light Rain","detailedForecast":"A chance of rain between 7pm and 1am. Mostly cloudy, with a low around 35. West wind 10 to 15 mph, with gusts as high as 33 mph. Chance of precipitation is 30%. New rainfall amounts less than a tenth of an inch possible."},{"number":4,"name":"Sunday","startTime":"2024-11-24T06:00:00-05:00","endTime":"2024-11-24T18:00:00-05:00","isDaytime":true,"temperature":49,"temperatureUnit":"F","temperatureTrend":"","probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"windSpeed":"6 to 9 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/day/sct?size=medium","shortForecast":"Mostly Sunny","detailedForecast":"Mostly sunny, with a high near 49. West wind 6 to 9 mph, with gusts as high as 21 mph."},{"number":5,"name":"Sunday Night","startTime":"2024-11-24T18:00:00-05:00","endTime":"2024-11-25T06:00:00-05:00","isDaytime":false,"temperature":35,"temperatureUnit":"F","temperatureTrend":"","probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"windSpeed":"3 to 7 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/night/sct?size=medium","shortForecast":"Partly Cloudy","detailedForecast":"Partly cloudy, with a low around 35. West wind 3 to 7 mph, with gusts as high as 20 mph."},{"number":6,"name":"Monday","startTime":"2024-11-25T06:00:00-05:00","endTime":"2024-11-25T18:00:00-05:00","isDaytime":true,"temperature":56,"temperatureUnit":"F","temperatureTrend":"","probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":20},"windSpeed":"9 mph","windDirection":"SW","icon":"https://api.weather.gov/icons/land/day/bkn/rain_showers,20?size=medium","shortForecast":"Partly Sunny then Slight Chance Rain Showers","detailedForecast":"A slight chance of rain showers after 1pm. Partly sunny, with a high near 56. Chance of precipitation is 20%."},{"number":7,"name":"Monday Night","startTime":"2024-11-25T18:00:00-05:00","endTime":"2024-11-26T06:00:00-05:00","isDaytime":false,"temperature":41,"temperatureUnit":"F","temperatureTrend":"","probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":70},"windSpeed":"9 to 14 mph","windDirection":"SW","icon":"https://api.weather.gov/icons/land/night/rain_showers,50/rain_showers,70?size=medium","shortForecast":"Rain Showers Likely","detailedForecast":"Rain showers likely. Mostly cloudy, with a low around 41. Chance of precipitation is 70%."},{"number":8,"name":"Tuesday","startTime":"2024-11-26T06:00:00-05:00","endTime":"2024-11-26T18:00:00-05:00","isDaytime":true,"temperature":48,"temperatureUnit":"F","temperatureTrend":"","probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":70},"windSpeed":"13 to 16 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/day/rain_showers,70/sct?size=medium","shortForecast":"Rain Showers Likely then Mostly Sunny","detailedForecast":"Rain showers likely before 7am. Mostly sunny, with a high near 48. Chance of precipitation is 70%."},{"number":9,"name":"Tuesday Night","startTime":"2024-11-26T18:00:00-05:00","endTime":"2024-11-27T06:00:00-05:00","isDaytime":false,"temperature":27,"temperatureUnit":"F","temperatureTrend":"","probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"windSpeed":"6 to 13 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/night/sct?size=medium","shortForecast":"Partly Cloudy","detailedForecast":"Partly cloudy, with a low around 27."},{"number":10,"name":"Wednesday","startTime":"2024-11-27T06:00:00-05:00","endTime":"2024-11-27T18:00:00-05:00","isDaytime":true,"temperature":44,"temperatureUnit":"F","temperatureTrend":"","probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"windSpeed":"7 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/day/sct?size=medium","shortForecast":"Mostly Sunny","detailedForecast":"Mostly sunny, with a high near 44."},{"number":11,"name":"Wednesday Night","startTime":"2024-11-27T18:00:00-05:00","endTime":"2024-11-28T06:00:00-05:00","isDaytime":false,"temperature":30,"temperatureUnit":"F","temperatureTrend":"","probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":40},"windSpeed":"5 mph","windDirection":"SW","icon":"https://api.weather.gov/icons/land/night/snow/snow,40?size=medium","shortForecast":"Chance Rain And Snow Showers","detailedForecast":"A chance of rain and snow showers after 7pm. Mostly cloudy, with a low around 30. Chance of precipitation is 40%."},{"number":12,"name":"Thanksgiving Day","startTime":"2024-11-28T06:00:00-05:00","endTime":"2024-11-28T18:00:00-05:00","isDaytime":true,"temperature":43,"temperatureUnit":"F","temperatureTrend":"","probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":50},"windSpeed":"7 mph","windDirection":"SW","icon":"https://api.weather.gov/icons/land/day/rain_showers,50?size=medium","shortForecast":"Chance Rain Showers","detailedForecast":"A chance of rain showers. Partly sunny, with a high near 43. Chance of precipitation is 50%."},{"number":13,"name":"Thursday Night","startTime":"2024-11-28T18:00:00-05:00","endTime":"2024-11-29T06:00:00-05:00","isDaytime":false,"temperature":28,"temperatureUnit":"F","temperatureTrend":"","probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":60},"windSpeed":"7 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/night/snow,60?size=medium","shortForecast":"Rain And Snow Showers Likely","detailedForecast":"A chance of rain showers before 7pm, then rain and snow showers likely between 7pm and 1am, then rain and snow showers likely. Mostly cloudy, with a low around 28. Chance of precipitation is 60%."},{"number":14,"name":"Friday","startTime":"2024-11-29T06:00:00-05:00","endTime":"2024-11-29T18:00:00-05:00","isDaytime":true,"temperature":37,"temperatureUnit":"F","temperatureTrend":"","probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":60},"windSpeed":"8 to 13 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/day/snow,60/snow,50?size=medium","shortForecast":"Rain And Snow Showers Likely","detailedForecast":"Rain and snow showers likely. Partly sunny, with a high near 37. Chance of precipitation is 60%."}]}
  var hourly_LWX_14_57 = false
  var crags_config = [
  {
    "name": "Seneca Rocks",
    "note": "White Tuscarora quartzite, which feels much like sandstone.",
    "mountainProject": "https://www.mountainproject.com/area/105861910/seneca-rocks",
    "station": "KW99",
    "office": "LWX/14,57",
    "coordinates": [
      -79.373,
      38.835
    ]
  }
]</script>

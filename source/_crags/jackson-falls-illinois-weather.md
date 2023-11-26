---
### THIS FILE IS AUTO-GENERATED - DO NOT EDIT ###
layout: page
title: Jackson Falls, Illinois Climbing Weather - Current, Past, and Forecasted
title_override: Jackson Falls<br /><small>Climbing Weather</small>
description: A lightweight weather report for Jackson Falls, Illinois. Optimized for slow internet connections.
js_includes:
  - weather.js
---

<section class="measure center lh-copy f5-ns f6 ph2 mv4" style="text-align: justify;">
<strong>"Is it dry?"</strong>, an oft-repeated, age-old question. Here are real-time,
precipitation-focused reports of current, past, and forecasted climbing weather for Jackson Falls, Illinois.
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
<section id="weather" data-crag="jackson-falls-illinois" class="mv4-ns mv3 ph2 center"></section>
<section id="nearby" class="tc lh-copy">
  <h3>Nearby Crags</h3>
<a class="nowrap no-underline fancy-link relative light-red mh3" href="/crags/red-river-gorge-kentucky-weather.html">Red River Gorge</a>
<a class="nowrap no-underline fancy-link relative light-red mh3" href="/crags/foster-falls-tennessee-weather.html">Foster Falls</a>
<a class="nowrap no-underline fancy-link relative light-red mh3" href="/crags/seneca-rocks-west-virginia-weather.html">Seneca Rocks</a>
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
  var weekly_PAH_116_58 = {"updated":"2023-11-26T07:46:16+00:00","units":"us","forecastGenerator":"BaselineForecastGenerator","generatedAt":"2023-11-26T08:31:46+00:00","updateTime":"2023-11-26T07:46:16+00:00","validTimes":"2023-11-26T01:00:00+00:00/P8DT6H","elevation":{"unitCode":"wmoUnit:m","value":96.012},"periods":[{"number":1,"name":"Overnight","startTime":"2023-11-26T02:00:00-06:00","endTime":"2023-11-26T06:00:00-06:00","isDaytime":false,"temperature":33,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":40},"dewpoint":{"unitCode":"wmoUnit:degC","value":0.5555555555555556},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":96},"windSpeed":"2 mph","windDirection":"WSW","icon":"https://api.weather.gov/icons/land/night/rain,40?size=medium","shortForecast":"Chance Light Rain","detailedForecast":"A chance of rain after 5am. Mostly cloudy, with a low around 33. West southwest wind around 2 mph. Chance of precipitation is 40%."},{"number":2,"name":"Sunday","startTime":"2023-11-26T06:00:00-06:00","endTime":"2023-11-26T18:00:00-06:00","isDaytime":true,"temperature":48,"temperatureUnit":"F","temperatureTrend":"falling","probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":70},"dewpoint":{"unitCode":"wmoUnit:degC","value":5.555555555555555},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":100},"windSpeed":"2 to 14 mph","windDirection":"WSW","icon":"https://api.weather.gov/icons/land/day/rain,70/rain,20?size=medium","shortForecast":"Light Rain Likely","detailedForecast":"Rain likely before 1pm. Mostly cloudy. High near 48, with temperatures falling to around 42 in the afternoon. West southwest wind 2 to 14 mph, with gusts as high as 22 mph. Chance of precipitation is 70%."},{"number":3,"name":"Sunday Night","startTime":"2023-11-26T18:00:00-06:00","endTime":"2023-11-27T06:00:00-06:00","isDaytime":false,"temperature":24,"temperatureUnit":"F","temperatureTrend":"rising","probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":-0.5555555555555556},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":100},"windSpeed":"6 to 13 mph","windDirection":"WNW","icon":"https://api.weather.gov/icons/land/night/sct?size=medium","shortForecast":"Partly Cloudy","detailedForecast":"Partly cloudy. Low around 24, with temperatures rising to around 26 overnight. West northwest wind 6 to 13 mph, with gusts as high as 18 mph."},{"number":4,"name":"Monday","startTime":"2023-11-27T06:00:00-06:00","endTime":"2023-11-27T18:00:00-06:00","isDaytime":true,"temperature":44,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":-3.3333333333333335},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":100},"windSpeed":"6 to 10 mph","windDirection":"WNW","icon":"https://api.weather.gov/icons/land/day/few?size=medium","shortForecast":"Sunny","detailedForecast":"Sunny, with a high near 44. West northwest wind 6 to 10 mph."},{"number":5,"name":"Monday Night","startTime":"2023-11-27T18:00:00-06:00","endTime":"2023-11-28T06:00:00-06:00","isDaytime":false,"temperature":24,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":-4.444444444444445},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":92},"windSpeed":"7 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/night/few?size=medium","shortForecast":"Mostly Clear","detailedForecast":"Mostly clear, with a low around 24. West wind around 7 mph."},{"number":6,"name":"Tuesday","startTime":"2023-11-28T06:00:00-06:00","endTime":"2023-11-28T18:00:00-06:00","isDaytime":true,"temperature":45,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":-3.888888888888889},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":88},"windSpeed":"5 to 8 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/day/skc?size=medium","shortForecast":"Sunny","detailedForecast":"Sunny, with a high near 45. West wind 5 to 8 mph."},{"number":7,"name":"Tuesday Night","startTime":"2023-11-28T18:00:00-06:00","endTime":"2023-11-29T06:00:00-06:00","isDaytime":false,"temperature":30,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":-2.2222222222222223},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":88},"windSpeed":"6 to 16 mph","windDirection":"SSW","icon":"https://api.weather.gov/icons/land/night/skc?size=medium","shortForecast":"Clear","detailedForecast":"Clear, with a low around 30. South southwest wind 6 to 16 mph, with gusts as high as 24 mph."},{"number":8,"name":"Wednesday","startTime":"2023-11-29T06:00:00-06:00","endTime":"2023-11-29T18:00:00-06:00","isDaytime":true,"temperature":56,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":2.2222222222222223},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":88},"windSpeed":"12 to 16 mph","windDirection":"SW","icon":"https://api.weather.gov/icons/land/day/skc?size=medium","shortForecast":"Sunny","detailedForecast":"Sunny, with a high near 56. Southwest wind 12 to 16 mph, with gusts as high as 24 mph."},{"number":9,"name":"Wednesday Night","startTime":"2023-11-29T18:00:00-06:00","endTime":"2023-11-30T06:00:00-06:00","isDaytime":false,"temperature":33,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":2.2222222222222223},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":97},"windSpeed":"8 to 12 mph","windDirection":"SSW","icon":"https://api.weather.gov/icons/land/night/sct?size=medium","shortForecast":"Partly Cloudy","detailedForecast":"Partly cloudy, with a low around 33. South southwest wind 8 to 12 mph."},{"number":10,"name":"Thursday","startTime":"2023-11-30T06:00:00-06:00","endTime":"2023-11-30T18:00:00-06:00","isDaytime":true,"temperature":57,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":4.444444444444445},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":95},"windSpeed":"8 to 13 mph","windDirection":"S","icon":"https://api.weather.gov/icons/land/day/bkn/rain?size=medium","shortForecast":"Partly Sunny then Chance Light Rain","detailedForecast":"A chance of rain after noon. Partly sunny, with a high near 57. South wind 8 to 13 mph, with gusts as high as 18 mph."},{"number":11,"name":"Thursday Night","startTime":"2023-11-30T18:00:00-06:00","endTime":"2023-12-01T06:00:00-06:00","isDaytime":false,"temperature":43,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":6.666666666666667},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":100},"windSpeed":"12 to 16 mph","windDirection":"SSE","icon":"https://api.weather.gov/icons/land/night/rain?size=medium","shortForecast":"Rain","detailedForecast":"Rain. Mostly cloudy, with a low around 43. South southeast wind 12 to 16 mph, with gusts as high as 24 mph."},{"number":12,"name":"Friday","startTime":"2023-12-01T06:00:00-06:00","endTime":"2023-12-01T18:00:00-06:00","isDaytime":true,"temperature":58,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":10.555555555555555},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":99},"windSpeed":"15 to 18 mph","windDirection":"SSW","icon":"https://api.weather.gov/icons/land/day/rain?size=medium","shortForecast":"Light Rain Likely","detailedForecast":"Rain likely. Mostly cloudy, with a high near 58. South southwest wind 15 to 18 mph, with gusts as high as 28 mph."},{"number":13,"name":"Friday Night","startTime":"2023-12-01T18:00:00-06:00","endTime":"2023-12-02T06:00:00-06:00","isDaytime":false,"temperature":42,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":9.444444444444445},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":100},"windSpeed":"9 to 15 mph","windDirection":"WNW","icon":"https://api.weather.gov/icons/land/night/rain?size=medium","shortForecast":"Chance Light Rain","detailedForecast":"A chance of rain. Mostly cloudy, with a low around 42. West northwest wind 9 to 15 mph, with gusts as high as 23 mph."},{"number":14,"name":"Saturday","startTime":"2023-12-02T06:00:00-06:00","endTime":"2023-12-02T18:00:00-06:00","isDaytime":true,"temperature":57,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":7.222222222222222},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":100},"windSpeed":"9 mph","windDirection":"NW","icon":"https://api.weather.gov/icons/land/day/bkn?size=medium","shortForecast":"Partly Sunny","detailedForecast":"Partly sunny, with a high near 57. Northwest wind around 9 mph."}]}
  var hourly_PAH_116_58 = false
  var crags_config = [
  {
    "name": "Jackson Falls",
    "note": "The walls offer slopers, various sized pockets, roofs, and slabs.",
    "mountainProject": "https://www.mountainproject.com/area/106017458/jackson-falls",
    "station": "KPAH",
    "office": "PAH/116,58",
    "coordinates": [
      -88.682,
      37.510
    ]
  }
]</script>

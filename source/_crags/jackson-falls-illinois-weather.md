---
### THIS FILE IS AUTO-GENERATED - DO NOT EDIT ###
layout: page
title: Jackson Falls, Illinois Climbing Weather - Current, Past, and Forecasted Report
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
  var weekly_PAH_116_58 = {"updated":"2022-04-04T08:16:32+00:00","units":"us","forecastGenerator":"BaselineForecastGenerator","generatedAt":"2022-04-04T08:38:49+00:00","updateTime":"2022-04-04T08:16:32+00:00","validTimes":"2022-04-04T02:00:00+00:00/P7DT23H","elevation":{"unitCode":"wmoUnit:m","value":99.9744},"periods":[{"number":1,"name":"Overnight","startTime":"2022-04-04T03:00:00-05:00","endTime":"2022-04-04T06:00:00-05:00","isDaytime":false,"temperature":50,"temperatureUnit":"F","temperatureTrend":"rising","windSpeed":"2 to 6 mph","windDirection":"SSE","icon":"https://api.weather.gov/icons/land/night/rain_showers,30?size=medium","shortForecast":"Chance Rain Showers","detailedForecast":"A chance of rain showers after 4am. Cloudy. Low around 50, with temperatures rising to around 52 overnight. South southeast wind 2 to 6 mph. Chance of precipitation is 30%."},{"number":2,"name":"Monday","startTime":"2022-04-04T06:00:00-05:00","endTime":"2022-04-04T18:00:00-05:00","isDaytime":true,"temperature":60,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"6 mph","windDirection":"SSW","icon":"https://api.weather.gov/icons/land/day/rain_showers,80/rain_showers,20?size=medium","shortForecast":"Rain Showers","detailedForecast":"Rain showers before 1pm. Cloudy, with a high near 60. South southwest wind around 6 mph. Chance of precipitation is 80%."},{"number":3,"name":"Monday Night","startTime":"2022-04-04T18:00:00-05:00","endTime":"2022-04-05T06:00:00-05:00","isDaytime":false,"temperature":51,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"3 mph","windDirection":"E","icon":"https://api.weather.gov/icons/land/night/rain_showers,30/tsra,40?size=medium","shortForecast":"Chance Rain Showers","detailedForecast":"A chance of rain showers before 1am, then a chance of showers and thunderstorms. Cloudy, with a low around 51. East wind around 3 mph. Chance of precipitation is 40%."},{"number":4,"name":"Tuesday","startTime":"2022-04-05T06:00:00-05:00","endTime":"2022-04-05T18:00:00-05:00","isDaytime":true,"temperature":69,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"6 mph","windDirection":"ESE","icon":"https://api.weather.gov/icons/land/day/tsra,80?size=medium","shortForecast":"Showers And Thunderstorms","detailedForecast":"Showers and thunderstorms. Mostly cloudy, with a high near 69. East southeast wind around 6 mph. Chance of precipitation is 80%."},{"number":5,"name":"Tuesday Night","startTime":"2022-04-05T18:00:00-05:00","endTime":"2022-04-06T06:00:00-05:00","isDaytime":false,"temperature":53,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"5 mph","windDirection":"S","icon":"https://api.weather.gov/icons/land/night/tsra_hi,30/tsra_hi,40?size=medium","shortForecast":"Chance Showers And Thunderstorms","detailedForecast":"A chance of showers and thunderstorms. Mostly cloudy, with a low around 53. South wind around 5 mph. Chance of precipitation is 40%."},{"number":6,"name":"Wednesday","startTime":"2022-04-06T06:00:00-05:00","endTime":"2022-04-06T18:00:00-05:00","isDaytime":true,"temperature":62,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"8 mph","windDirection":"WNW","icon":"https://api.weather.gov/icons/land/day/tsra_sct,60?size=medium","shortForecast":"Showers And Thunderstorms Likely","detailedForecast":"Showers and thunderstorms likely before 1pm, then a slight chance of showers and thunderstorms. Partly sunny, with a high near 62. West northwest wind around 8 mph. Chance of precipitation is 60%."},{"number":7,"name":"Wednesday Night","startTime":"2022-04-06T18:00:00-05:00","endTime":"2022-04-07T06:00:00-05:00","isDaytime":false,"temperature":43,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"6 mph","windDirection":"WSW","icon":"https://api.weather.gov/icons/land/night/rain_showers,20/few?size=medium","shortForecast":"Slight Chance Rain Showers then Mostly Clear","detailedForecast":"A slight chance of rain showers before 7pm. Mostly clear, with a low around 43. West southwest wind around 6 mph. Chance of precipitation is 20%."},{"number":8,"name":"Thursday","startTime":"2022-04-07T06:00:00-05:00","endTime":"2022-04-07T18:00:00-05:00","isDaytime":true,"temperature":58,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"6 to 15 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/day/sct?size=medium","shortForecast":"Mostly Sunny","detailedForecast":"Mostly sunny, with a high near 58. West wind 6 to 15 mph, with gusts as high as 23 mph."},{"number":9,"name":"Thursday Night","startTime":"2022-04-07T18:00:00-05:00","endTime":"2022-04-08T06:00:00-05:00","isDaytime":false,"temperature":40,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"8 to 12 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/night/bkn?size=medium","shortForecast":"Mostly Cloudy","detailedForecast":"Mostly cloudy, with a low around 40. West wind 8 to 12 mph, with gusts as high as 22 mph."},{"number":10,"name":"Friday","startTime":"2022-04-08T06:00:00-05:00","endTime":"2022-04-08T18:00:00-05:00","isDaytime":true,"temperature":50,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"8 to 14 mph","windDirection":"WNW","icon":"https://api.weather.gov/icons/land/day/bkn/rain_showers?size=medium","shortForecast":"Mostly Cloudy then Slight Chance Rain Showers","detailedForecast":"A slight chance of rain showers after 1pm. Mostly cloudy, with a high near 50. West northwest wind 8 to 14 mph, with gusts as high as 22 mph."},{"number":11,"name":"Friday Night","startTime":"2022-04-08T18:00:00-05:00","endTime":"2022-04-09T06:00:00-05:00","isDaytime":false,"temperature":34,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"6 to 12 mph","windDirection":"WNW","icon":"https://api.weather.gov/icons/land/night/rain_showers/bkn?size=medium","shortForecast":"Slight Chance Rain Showers then Mostly Cloudy","detailedForecast":"A slight chance of rain showers before 7pm. Mostly cloudy, with a low around 34. West northwest wind 6 to 12 mph, with gusts as high as 18 mph."},{"number":12,"name":"Saturday","startTime":"2022-04-09T06:00:00-05:00","endTime":"2022-04-09T18:00:00-05:00","isDaytime":true,"temperature":56,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"6 to 9 mph","windDirection":"NW","icon":"https://api.weather.gov/icons/land/day/sct?size=medium","shortForecast":"Mostly Sunny","detailedForecast":"Mostly sunny, with a high near 56. Northwest wind 6 to 9 mph, with gusts as high as 22 mph."},{"number":13,"name":"Saturday Night","startTime":"2022-04-09T18:00:00-05:00","endTime":"2022-04-10T06:00:00-05:00","isDaytime":false,"temperature":37,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"5 mph","windDirection":"SSW","icon":"https://api.weather.gov/icons/land/night/few?size=medium","shortForecast":"Mostly Clear","detailedForecast":"Mostly clear, with a low around 37. South southwest wind around 5 mph."},{"number":14,"name":"Sunday","startTime":"2022-04-10T06:00:00-05:00","endTime":"2022-04-10T18:00:00-05:00","isDaytime":true,"temperature":68,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"3 to 13 mph","windDirection":"S","icon":"https://api.weather.gov/icons/land/day/few?size=medium","shortForecast":"Sunny","detailedForecast":"Sunny, with a high near 68. South wind 3 to 13 mph, with gusts as high as 20 mph."}]}
  var hourly_PAH_116_58 = {"correlationId":"20794c20","title":"Unexpected Problem","type":"https://api.weather.gov/problems/UnexpectedProblem","status":500,"detail":"An unexpected problem has occurred.","instance":"https://api.weather.gov/requests/20794c20"}
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

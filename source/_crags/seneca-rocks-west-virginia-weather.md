---
### THIS FILE IS AUTO-GENERATED - DO NOT EDIT ###
layout: page
title: Seneca Rocks, West Virginia Climbing Weather - Current, Past, and Forecasted Report
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
  var weekly_LWX_14_57 = {"updated":"2022-03-30T05:32:53+00:00","units":"us","forecastGenerator":"BaselineForecastGenerator","generatedAt":"2022-03-30T08:39:28+00:00","updateTime":"2022-03-30T05:32:53+00:00","validTimes":"2022-03-29T23:00:00+00:00/P7DT2H","elevation":{"unitCode":"wmoUnit:m","value":631.8504},"periods":[{"number":1,"name":"Overnight","startTime":"2022-03-30T04:00:00-04:00","endTime":"2022-03-30T06:00:00-04:00","isDaytime":false,"temperature":32,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"5 mph","windDirection":"E","icon":"https://api.weather.gov/icons/land/night/rain_fzra,30?size=medium","shortForecast":"Freezing Rain Likely","detailedForecast":"Freezing rain likely and rain likely. Cloudy, with a low around 32. East wind around 5 mph. Chance of precipitation is 30%. New rainfall amounts less than a tenth of an inch possible."},{"number":2,"name":"Wednesday","startTime":"2022-03-30T06:00:00-04:00","endTime":"2022-03-30T18:00:00-04:00","isDaytime":true,"temperature":63,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"3 to 14 mph","windDirection":"S","icon":"https://api.weather.gov/icons/land/day/rain/bkn?size=medium","shortForecast":"Chance Light Rain then Partly Sunny","detailedForecast":"A chance of rain before 8am. Partly sunny, with a high near 63. South wind 3 to 14 mph, with gusts as high as 28 mph. New rainfall amounts less than a tenth of an inch possible."},{"number":3,"name":"Wednesday Night","startTime":"2022-03-30T18:00:00-04:00","endTime":"2022-03-31T06:00:00-04:00","isDaytime":false,"temperature":51,"temperatureUnit":"F","temperatureTrend":"rising","windSpeed":"13 mph","windDirection":"S","icon":"https://api.weather.gov/icons/land/night/bkn/rain,50?size=medium","shortForecast":"Mostly Cloudy then Chance Light Rain","detailedForecast":"A chance of rain after 2am. Mostly cloudy. Low around 51, with temperatures rising to around 57 overnight. South wind around 13 mph, with gusts as high as 35 mph. Chance of precipitation is 50%. New rainfall amounts less than a tenth of an inch possible."},{"number":4,"name":"Thursday","startTime":"2022-03-31T06:00:00-04:00","endTime":"2022-03-31T18:00:00-04:00","isDaytime":true,"temperature":68,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"10 to 16 mph","windDirection":"SW","icon":"https://api.weather.gov/icons/land/day/tsra_sct,70?size=medium","shortForecast":"Light Rain Likely","detailedForecast":"Rain likely before 11am, then rain likely and a chance of thunderstorms. Partly sunny, with a high near 68. Southwest wind 10 to 16 mph, with gusts as high as 41 mph. Chance of precipitation is 70%. New rainfall amounts between a quarter and half of an inch possible."},{"number":5,"name":"Thursday Night","startTime":"2022-03-31T18:00:00-04:00","endTime":"2022-04-01T06:00:00-04:00","isDaytime":false,"temperature":38,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"7 to 12 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/night/tsra_hi,70/snow,40?size=medium","shortForecast":"Light Rain Likely","detailedForecast":"Rain likely and a chance of thunderstorms before 8pm, then a chance of thunderstorms and a chance of rain between 8pm and 5am, then a chance of rain and snow. Partly cloudy, with a low around 38. West wind 7 to 12 mph, with gusts as high as 35 mph. Chance of precipitation is 70%."},{"number":6,"name":"Friday","startTime":"2022-04-01T06:00:00-04:00","endTime":"2022-04-01T18:00:00-04:00","isDaytime":true,"temperature":45,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"9 to 18 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/day/snow,30/bkn?size=medium","shortForecast":"Chance Rain And Snow then Partly Sunny","detailedForecast":"A chance of rain and snow before 8am. Partly sunny, with a high near 45. Chance of precipitation is 30%."},{"number":7,"name":"Friday Night","startTime":"2022-04-01T18:00:00-04:00","endTime":"2022-04-02T06:00:00-04:00","isDaytime":false,"temperature":28,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"5 to 14 mph","windDirection":"NW","icon":"https://api.weather.gov/icons/land/night/sct?size=medium","shortForecast":"Partly Cloudy","detailedForecast":"Partly cloudy, with a low around 28."},{"number":8,"name":"Saturday","startTime":"2022-04-02T06:00:00-04:00","endTime":"2022-04-02T18:00:00-04:00","isDaytime":true,"temperature":59,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"7 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/day/sct?size=medium","shortForecast":"Mostly Sunny","detailedForecast":"Mostly sunny, with a high near 59."},{"number":9,"name":"Saturday Night","startTime":"2022-04-02T18:00:00-04:00","endTime":"2022-04-03T06:00:00-04:00","isDaytime":false,"temperature":39,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"8 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/night/rain,30?size=medium","shortForecast":"Chance Light Rain","detailedForecast":"A chance of rain after 8pm. Mostly cloudy, with a low around 39. Chance of precipitation is 30%."},{"number":10,"name":"Sunday","startTime":"2022-04-03T06:00:00-04:00","endTime":"2022-04-03T18:00:00-04:00","isDaytime":true,"temperature":52,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"7 to 12 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/day/rain,30?size=medium","shortForecast":"Chance Light Rain","detailedForecast":"A chance of rain. Partly sunny, with a high near 52. Chance of precipitation is 30%."},{"number":11,"name":"Sunday Night","startTime":"2022-04-03T18:00:00-04:00","endTime":"2022-04-04T06:00:00-04:00","isDaytime":false,"temperature":34,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"6 to 12 mph","windDirection":"NW","icon":"https://api.weather.gov/icons/land/night/rain,30/snow?size=medium","shortForecast":"Chance Light Rain then Slight Chance Rain And Snow","detailedForecast":"A chance of rain before 2am, then a slight chance of rain and snow. Partly cloudy, with a low around 34. Chance of precipitation is 30%."},{"number":12,"name":"Monday","startTime":"2022-04-04T06:00:00-04:00","endTime":"2022-04-04T18:00:00-04:00","isDaytime":true,"temperature":57,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"6 to 10 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/day/snow?size=medium","shortForecast":"Slight Chance Rain And Snow","detailedForecast":"A slight chance of rain and snow. Mostly sunny, with a high near 57."},{"number":13,"name":"Monday Night","startTime":"2022-04-04T18:00:00-04:00","endTime":"2022-04-05T06:00:00-04:00","isDaytime":false,"temperature":38,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"8 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/night/rain/sct?size=medium","shortForecast":"Slight Chance Light Rain then Partly Cloudy","detailedForecast":"A slight chance of rain before 8pm. Partly cloudy, with a low around 38."},{"number":14,"name":"Tuesday","startTime":"2022-04-05T06:00:00-04:00","endTime":"2022-04-05T18:00:00-04:00","isDaytime":true,"temperature":63,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"6 to 9 mph","windDirection":"SW","icon":"https://api.weather.gov/icons/land/day/rain?size=medium","shortForecast":"Slight Chance Light Rain","detailedForecast":"A slight chance of rain after 8am. Partly sunny, with a high near 63."}]}
  var hourly_LWX_14_57 = {"correlationId":"3c6e5ecb","title":"Unexpected Problem","type":"https://api.weather.gov/problems/UnexpectedProblem","status":500,"detail":"An unexpected problem has occurred.","instance":"https://api.weather.gov/requests/3c6e5ecb"}
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

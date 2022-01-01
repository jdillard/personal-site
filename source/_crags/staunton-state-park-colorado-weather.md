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
  var weekly_BOU_48_51 = {"updated":"2021-12-31T03:00:43+00:00","units":"us","forecastGenerator":"BaselineForecastGenerator","generatedAt":"2021-12-31T08:47:11+00:00","updateTime":"2021-12-31T03:00:43+00:00","validTimes":"2021-12-30T20:00:00+00:00/P7DT5H","elevation":{"unitCode":"wmoUnit:m","value":2628.9},"periods":[{"number":1,"name":"Overnight","startTime":"2021-12-31T01:00:00-07:00","endTime":"2021-12-31T06:00:00-07:00","isDaytime":false,"temperature":17,"temperatureUnit":"F","temperatureTrend":"rising","windSpeed":"17 to 25 mph","windDirection":"WSW","icon":"https://api.weather.gov/icons/land/night/snow,40?size=medium","shortForecast":"Chance Light Snow","detailedForecast":"A chance of snow. Partly cloudy. Low around 17, with temperatures rising to around 21 overnight. West southwest wind 17 to 25 mph, with gusts as high as 38 mph. Chance of precipitation is 40%. Little or no snow accumulation expected."},{"number":2,"name":"Friday","startTime":"2021-12-31T06:00:00-07:00","endTime":"2021-12-31T18:00:00-07:00","isDaytime":true,"temperature":31,"temperatureUnit":"F","temperatureTrend":"falling","windSpeed":"10 to 14 mph","windDirection":"NNW","icon":"https://api.weather.gov/icons/land/day/snow,80/snow,90?size=medium","shortForecast":"Heavy Snow","detailedForecast":"Snow. Mostly cloudy. High near 31, with temperatures falling to around 21 in the afternoon. North northwest wind 10 to 14 mph, with gusts as high as 22 mph. Chance of precipitation is 90%. New snow accumulation of 4 to 8 inches possible."},{"number":3,"name":"Friday Night","startTime":"2021-12-31T18:00:00-07:00","endTime":"2022-01-01T06:00:00-07:00","isDaytime":false,"temperature":0,"temperatureUnit":"F","temperatureTrend":"rising","windSpeed":"7 to 12 mph","windDirection":"NNE","icon":"https://api.weather.gov/icons/land/night/snow,100?size=medium","shortForecast":"Heavy Snow","detailedForecast":"Snow. Cloudy. Low around 0, with temperatures rising to around 3 overnight. Wind chill values as low as -9. North northeast wind 7 to 12 mph, with gusts as high as 17 mph. Chance of precipitation is 100%. New snow accumulation of 5 to 9 inches possible."},{"number":4,"name":"New Year's Day","startTime":"2022-01-01T06:00:00-07:00","endTime":"2022-01-01T18:00:00-07:00","isDaytime":true,"temperature":10,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"7 to 12 mph","windDirection":"NNW","icon":"https://api.weather.gov/icons/land/day/snow,60/cold?size=medium","shortForecast":"Light Snow Likely then Mostly Cloudy","detailedForecast":"Snow likely before 11am. Mostly cloudy, with a high near 10. Wind chill values as low as -16. North northwest wind 7 to 12 mph, with gusts as high as 16 mph. Chance of precipitation is 60%. New snow accumulation of 1 to 2 inches possible."},{"number":5,"name":"Saturday Night","startTime":"2022-01-01T18:00:00-07:00","endTime":"2022-01-02T06:00:00-07:00","isDaytime":false,"temperature":-6,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"13 to 18 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/night/cold?size=medium","shortForecast":"Mostly Clear","detailedForecast":"Mostly clear, with a low around -6. West wind 13 to 18 mph, with gusts as high as 23 mph."},{"number":6,"name":"Sunday","startTime":"2022-01-02T06:00:00-07:00","endTime":"2022-01-02T18:00:00-07:00","isDaytime":true,"temperature":35,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"12 to 18 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/day/blizzard?size=medium","shortForecast":"Patchy Blowing Snow","detailedForecast":"Patchy blowing snow between 11am and 1pm. Sunny, with a high near 35."},{"number":7,"name":"Sunday Night","startTime":"2022-01-02T18:00:00-07:00","endTime":"2022-01-03T06:00:00-07:00","isDaytime":false,"temperature":11,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"8 to 13 mph","windDirection":"WSW","icon":"https://api.weather.gov/icons/land/night/few?size=medium","shortForecast":"Mostly Clear","detailedForecast":"Mostly clear, with a low around 11."},{"number":8,"name":"Monday","startTime":"2022-01-03T06:00:00-07:00","endTime":"2022-01-03T18:00:00-07:00","isDaytime":true,"temperature":40,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"15 mph","windDirection":"WSW","icon":"https://api.weather.gov/icons/land/day/sct?size=medium","shortForecast":"Mostly Sunny","detailedForecast":"Mostly sunny, with a high near 40."},{"number":9,"name":"Monday Night","startTime":"2022-01-03T18:00:00-07:00","endTime":"2022-01-04T06:00:00-07:00","isDaytime":false,"temperature":17,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"14 mph","windDirection":"WSW","icon":"https://api.weather.gov/icons/land/night/few?size=medium","shortForecast":"Mostly Clear","detailedForecast":"Mostly clear, with a low around 17."},{"number":10,"name":"Tuesday","startTime":"2022-01-04T06:00:00-07:00","endTime":"2022-01-04T18:00:00-07:00","isDaytime":true,"temperature":40,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"14 to 17 mph","windDirection":"WSW","icon":"https://api.weather.gov/icons/land/day/sct?size=medium","shortForecast":"Mostly Sunny","detailedForecast":"Mostly sunny, with a high near 40."},{"number":11,"name":"Tuesday Night","startTime":"2022-01-04T18:00:00-07:00","endTime":"2022-01-05T06:00:00-07:00","isDaytime":false,"temperature":19,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"14 to 17 mph","windDirection":"WSW","icon":"https://api.weather.gov/icons/land/night/sct/snow?size=medium","shortForecast":"Partly Cloudy then Slight Chance Light Snow","detailedForecast":"A slight chance of snow after 5am. Partly cloudy, with a low around 19."},{"number":12,"name":"Wednesday","startTime":"2022-01-05T06:00:00-07:00","endTime":"2022-01-05T18:00:00-07:00","isDaytime":true,"temperature":37,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"15 to 21 mph","windDirection":"WSW","icon":"https://api.weather.gov/icons/land/day/snow?size=medium","shortForecast":"Chance Light Snow","detailedForecast":"A chance of snow. Partly sunny, with a high near 37."},{"number":13,"name":"Wednesday Night","startTime":"2022-01-05T18:00:00-07:00","endTime":"2022-01-06T06:00:00-07:00","isDaytime":false,"temperature":15,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"15 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/night/snow?size=medium","shortForecast":"Chance Light Snow","detailedForecast":"A chance of snow. Mostly cloudy, with a low around 15."},{"number":14,"name":"Thursday","startTime":"2022-01-06T06:00:00-07:00","endTime":"2022-01-06T18:00:00-07:00","isDaytime":true,"temperature":37,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"16 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/day/snow?size=medium","shortForecast":"Slight Chance Light Snow","detailedForecast":"A slight chance of snow. Mostly sunny, with a high near 37."}]}
  var hourly_BOU_48_51 = {"correlationId":"fa0709a6","title":"Service Unavailable","type":"https://api.weather.gov/problems/ServiceUnavailable","status":503,"detail":"An upstream data source is temporarily unavailable. Please try again later.","instance":"https://api.weather.gov/requests/fa0709a6"}
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

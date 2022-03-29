---
### THIS FILE IS AUTO-GENERATED - DO NOT EDIT ###
layout: page
title: Estes Park Valley, Colorado Climbing Weather - Current, Past, and Forecasted Report
title_override: Estes Park Valley<br /><small>Climbing Weather</small>
description: A lightweight weather report for Estes Park Valley, Colorado. Optimized for slow internet connections.
js_includes:
  - weather.js
---

<section class="measure center lh-copy f5-ns f6 ph2 mv4" style="text-align: justify;">
<strong>"Is it dry?"</strong>, an oft-repeated, age-old question. Here are real-time,
precipitation-focused reports of current, past, and forecasted climbing weather for Estes Park Valley, Colorado.
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
<section id="weather" data-crag="estes-park-valley-colorado" class="mv4-ns mv3 ph2 center"></section>
<section id="nearby" class="tc lh-copy">
  <h3>Nearby Crags</h3>
<a class="nowrap no-underline fancy-link relative light-red mh3" href="/crags/clear-creek-canyon-colorado-weather.html">Clear Creek Canyon</a>
<a class="nowrap no-underline fancy-link relative light-red mh3" href="/crags/staunton-state-park-colorado-weather.html">Staunton State Park</a>
<a class="nowrap no-underline fancy-link relative light-red mh3" href="/crags/lime-park-lime-creek-colorado-weather.html">Lime Park (Lime Creek)</a>
<a class="nowrap no-underline fancy-link relative light-red mh3" href="/crags/independence-pass-colorado-weather.html">Independence Pass</a>
<a class="nowrap no-underline fancy-link relative light-red mh3" href="/crags/moab-utah-weather.html">Moab</a>
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
  var weekly_BOU_46_92 = {"updated":"2022-03-28T21:27:23+00:00","units":"us","forecastGenerator":"BaselineForecastGenerator","generatedAt":"2022-03-29T08:39:16+00:00","updateTime":"2022-03-28T21:27:23+00:00","validTimes":"2022-03-28T15:00:00+00:00/P7DT10H","elevation":{"unitCode":"wmoUnit:m","value":2542.9464},"periods":[{"number":1,"name":"Overnight","startTime":"2022-03-29T02:00:00-06:00","endTime":"2022-03-29T06:00:00-06:00","isDaytime":false,"temperature":39,"temperatureUnit":"F","temperatureTrend":"rising","windSpeed":"15 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/night/bkn?size=medium","shortForecast":"Mostly Cloudy","detailedForecast":"Mostly cloudy. Low around 39, with temperatures rising to around 44 overnight. West wind around 15 mph, with gusts as high as 24 mph."},{"number":2,"name":"Tuesday","startTime":"2022-03-29T06:00:00-06:00","endTime":"2022-03-29T18:00:00-06:00","isDaytime":true,"temperature":45,"temperatureUnit":"F","temperatureTrend":"falling","windSpeed":"13 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/day/snow,60/snow,90?size=medium","shortForecast":"Snow Showers","detailedForecast":"Snow showers likely before noon, then snow showers and a slight chance of thunderstorms between noon and 3pm, then a slight chance of thunderstorms and rain and snow showers. Cloudy. High near 45, with temperatures falling to around 40 in the afternoon. West wind around 13 mph, with gusts as high as 21 mph. Chance of precipitation is 90%. New snow accumulation of less than one inch possible."},{"number":3,"name":"Tuesday Night","startTime":"2022-03-29T18:00:00-06:00","endTime":"2022-03-30T06:00:00-06:00","isDaytime":false,"temperature":25,"temperatureUnit":"F","temperatureTrend":"rising","windSpeed":"9 to 13 mph","windDirection":"NNW","icon":"https://api.weather.gov/icons/land/night/snow,80/snow,40?size=medium","shortForecast":"Snow Showers","detailedForecast":"Snow showers and a slight chance of thunderstorms. Mostly cloudy. Low around 25, with temperatures rising to around 29 overnight. North northwest wind 9 to 13 mph, with gusts as high as 21 mph. Chance of precipitation is 80%. New snow accumulation of 1 to 2 inches possible."},{"number":4,"name":"Wednesday","startTime":"2022-03-30T06:00:00-06:00","endTime":"2022-03-30T18:00:00-06:00","isDaytime":true,"temperature":38,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"7 to 20 mph","windDirection":"NW","icon":"https://api.weather.gov/icons/land/day/snow,30/snow,20?size=medium","shortForecast":"Chance Snow Showers","detailedForecast":"A chance of snow showers. Partly sunny, with a high near 38. Northwest wind 7 to 20 mph, with gusts as high as 31 mph. Chance of precipitation is 30%."},{"number":5,"name":"Wednesday Night","startTime":"2022-03-30T18:00:00-06:00","endTime":"2022-03-31T06:00:00-06:00","isDaytime":false,"temperature":26,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"15 to 18 mph","windDirection":"WNW","icon":"https://api.weather.gov/icons/land/night/sct?size=medium","shortForecast":"Partly Cloudy","detailedForecast":"Partly cloudy, with a low around 26. West northwest wind 15 to 18 mph, with gusts as high as 30 mph."},{"number":6,"name":"Thursday","startTime":"2022-03-31T06:00:00-06:00","endTime":"2022-03-31T18:00:00-06:00","isDaytime":true,"temperature":49,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"13 to 16 mph","windDirection":"SW","icon":"https://api.weather.gov/icons/land/day/sct/snow,30?size=medium","shortForecast":"Mostly Sunny then Chance Snow Showers","detailedForecast":"A chance of snow showers after noon. Mostly sunny, with a high near 49. Chance of precipitation is 30%."},{"number":7,"name":"Thursday Night","startTime":"2022-03-31T18:00:00-06:00","endTime":"2022-04-01T06:00:00-06:00","isDaytime":false,"temperature":29,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"14 mph","windDirection":"WSW","icon":"https://api.weather.gov/icons/land/night/snow,30/snow,40?size=medium","shortForecast":"Chance Snow Showers","detailedForecast":"A chance of snow showers. Mostly cloudy, with a low around 29. Chance of precipitation is 40%. Little or no snow accumulation expected."},{"number":8,"name":"Friday","startTime":"2022-04-01T06:00:00-06:00","endTime":"2022-04-01T18:00:00-06:00","isDaytime":true,"temperature":41,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"18 mph","windDirection":"WNW","icon":"https://api.weather.gov/icons/land/day/snow?size=medium","shortForecast":"Snow Showers Likely","detailedForecast":"Snow showers likely. Mostly cloudy, with a high near 41. New snow accumulation of less than half an inch possible."},{"number":9,"name":"Friday Night","startTime":"2022-04-01T18:00:00-06:00","endTime":"2022-04-02T06:00:00-06:00","isDaytime":false,"temperature":26,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"15 mph","windDirection":"WNW","icon":"https://api.weather.gov/icons/land/night/snow/sct?size=medium","shortForecast":"Slight Chance Snow Showers then Partly Cloudy","detailedForecast":"A slight chance of snow showers before midnight. Partly cloudy, with a low around 26."},{"number":10,"name":"Saturday","startTime":"2022-04-02T06:00:00-06:00","endTime":"2022-04-02T18:00:00-06:00","isDaytime":true,"temperature":49,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"16 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/day/sct?size=medium","shortForecast":"Mostly Sunny","detailedForecast":"Mostly sunny, with a high near 49."},{"number":11,"name":"Saturday Night","startTime":"2022-04-02T18:00:00-06:00","endTime":"2022-04-03T06:00:00-06:00","isDaytime":false,"temperature":31,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"15 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/night/sct?size=medium","shortForecast":"Partly Cloudy","detailedForecast":"Partly cloudy, with a low around 31."},{"number":12,"name":"Sunday","startTime":"2022-04-03T06:00:00-06:00","endTime":"2022-04-03T18:00:00-06:00","isDaytime":true,"temperature":49,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"18 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/day/sct/snow?size=medium","shortForecast":"Mostly Sunny then Slight Chance Snow Showers","detailedForecast":"A slight chance of snow showers after noon. Mostly sunny, with a high near 49."},{"number":13,"name":"Sunday Night","startTime":"2022-04-03T18:00:00-06:00","endTime":"2022-04-04T06:00:00-06:00","isDaytime":false,"temperature":32,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"14 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/night/snow?size=medium","shortForecast":"Slight Chance Snow Showers","detailedForecast":"A slight chance of snow showers. Mostly cloudy, with a low around 32."},{"number":14,"name":"Monday","startTime":"2022-04-04T06:00:00-06:00","endTime":"2022-04-04T18:00:00-06:00","isDaytime":true,"temperature":49,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"16 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/day/snow?size=medium","shortForecast":"Chance Snow Showers","detailedForecast":"A chance of snow showers. Partly sunny, with a high near 49. Little or no snow accumulation expected."}]}
  var hourly_BOU_46_92 = {"correlationId":"38b8b92b","title":"Unexpected Problem","type":"https://api.weather.gov/problems/UnexpectedProblem","status":500,"detail":"An unexpected problem has occurred.","instance":"https://api.weather.gov/requests/38b8b92b"}
  var crags_config = [
  {
    "name": "Estes Park Valley",
    "note": "Good variety of granitic, gneiss, and schist crags.",
    "mountainProject": "https://www.mountainproject.com/area/105801865/estes-park-valley",
    "station": "KLMO",
    "office": "BOU/46,92",
    "coordinates": [
      -105.513,
      40.397
    ]
  }
]</script>

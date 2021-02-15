---
### THIS FILE IS AUTO-GENERATED - DO NOT EDIT ###
layout: page
title: Clear Creek Canyon, Colorado Climbing Weather - Current, Past, and Forecasted Report
title_override: Clear Creek Canyon<br /><small>Climbing Weather</small>
description: A lightweight weather report for Clear Creek Canyon, Colorado. Optimized for slow internet connections.
js_includes:
  - weather.js
---

<section class="measure center lh-copy f5-ns f6 ph2 mv4" style="text-align: justify;">
<strong>"Is it dry?"</strong>, an oft-repeated, age-old question. Here are real-time,
precipitation-focused reports of current, past, and forecasted climbing weather for Clear Creek Canyon, Colorado.
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
<section id="weather" data-crag="clear-creek-canyon-colorado" class="mv4-ns mv3 ph2 center"></section>
<section id="nearby" class="tc lh-copy">
  <h3>Nearby Crags</h3>
<a class="nowrap no-underline fancy-link relative light-red mh3" href="/crags/staunton-state-park-colorado-weather.html">Staunton State Park</a>
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
  var weekly_BOU_53_62 = {"updated":"2021-02-15T04:13:02+00:00","units":"us","forecastGenerator":"BaselineForecastGenerator","generatedAt":"2021-02-15T08:49:20+00:00","updateTime":"2021-02-15T04:13:02+00:00","validTimes":"2021-02-14T22:00:00+00:00/P7DT9H","elevation":{"value":1869.948,"unitCode":"unit:m"},"periods":[{"number":1,"name":"Overnight","startTime":"2021-02-15T01:00:00-07:00","endTime":"2021-02-15T06:00:00-07:00","isDaytime":false,"temperature":-11,"temperatureUnit":"F","temperatureTrend":"rising","windSpeed":"3 mph","windDirection":"SSW","icon":"https://api.weather.gov/icons/land/night/cold?size=medium","shortForecast":"Partly Cloudy","detailedForecast":"Partly cloudy. Low around -11, with temperatures rising to around -2 overnight. Wind chill values as low as -16. South southwest wind around 3 mph."},{"number":2,"name":"Washington's Birthday","startTime":"2021-02-15T06:00:00-07:00","endTime":"2021-02-15T18:00:00-07:00","isDaytime":true,"temperature":30,"temperatureUnit":"F","temperatureTrend":"falling","windSpeed":"5 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/day/sct?size=medium","shortForecast":"Mostly Sunny","detailedForecast":"Mostly sunny. High near 30, with temperatures falling to around 23 in the afternoon. Wind chill values as low as -8. West wind around 5 mph."},{"number":3,"name":"Monday Night","startTime":"2021-02-15T18:00:00-07:00","endTime":"2021-02-16T06:00:00-07:00","isDaytime":false,"temperature":16,"temperatureUnit":"F","temperatureTrend":"rising","windSpeed":"7 mph","windDirection":"WSW","icon":"https://api.weather.gov/icons/land/night/sct?size=medium","shortForecast":"Partly Cloudy","detailedForecast":"Partly cloudy. Low around 16, with temperatures rising to around 20 overnight. West southwest wind around 7 mph, with gusts as high as 20 mph."},{"number":4,"name":"Tuesday","startTime":"2021-02-16T06:00:00-07:00","endTime":"2021-02-16T18:00:00-07:00","isDaytime":true,"temperature":35,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"6 to 10 mph","windDirection":"NW","icon":"https://api.weather.gov/icons/land/day/snow,40?size=medium","shortForecast":"Chance Snow Showers","detailedForecast":"A chance of snow showers after 11am. Partly sunny, with a high near 35. Northwest wind 6 to 10 mph, with gusts as high as 21 mph. Chance of precipitation is 40%. New snow accumulation of less than one inch possible."},{"number":5,"name":"Tuesday Night","startTime":"2021-02-16T18:00:00-07:00","endTime":"2021-02-17T06:00:00-07:00","isDaytime":false,"temperature":16,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"5 mph","windDirection":"WNW","icon":"https://api.weather.gov/icons/land/night/snow,30/bkn?size=medium","shortForecast":"Chance Snow Showers then Mostly Cloudy","detailedForecast":"A chance of snow showers before 11pm. Mostly cloudy, with a low around 16. West northwest wind around 5 mph. Chance of precipitation is 30%. New snow accumulation of less than half an inch possible."},{"number":6,"name":"Wednesday","startTime":"2021-02-17T06:00:00-07:00","endTime":"2021-02-17T18:00:00-07:00","isDaytime":true,"temperature":31,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"3 to 9 mph","windDirection":"N","icon":"https://api.weather.gov/icons/land/day/snow,40/snow,50?size=medium","shortForecast":"Chance Snow Showers","detailedForecast":"A chance of snow showers after 11am. Mostly cloudy, with a high near 31. Chance of precipitation is 50%. New snow accumulation of around one inch possible."},{"number":7,"name":"Wednesday Night","startTime":"2021-02-17T18:00:00-07:00","endTime":"2021-02-18T06:00:00-07:00","isDaytime":false,"temperature":12,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"6 mph","windDirection":"N","icon":"https://api.weather.gov/icons/land/night/snow,50/bkn?size=medium","shortForecast":"Chance Snow Showers then Mostly Cloudy","detailedForecast":"A chance of snow showers before 11pm. Mostly cloudy, with a low around 12. Chance of precipitation is 50%. New snow accumulation of around one inch possible."},{"number":8,"name":"Thursday","startTime":"2021-02-18T06:00:00-07:00","endTime":"2021-02-18T18:00:00-07:00","isDaytime":true,"temperature":34,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"6 to 10 mph","windDirection":"WNW","icon":"https://api.weather.gov/icons/land/day/sct?size=medium","shortForecast":"Mostly Sunny","detailedForecast":"Mostly sunny, with a high near 34."},{"number":9,"name":"Thursday Night","startTime":"2021-02-18T18:00:00-07:00","endTime":"2021-02-19T06:00:00-07:00","isDaytime":false,"temperature":18,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"9 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/night/sct/snow?size=medium","shortForecast":"Partly Cloudy then Slight Chance Snow Showers","detailedForecast":"A slight chance of snow showers after 5am. Partly cloudy, with a low around 18."},{"number":10,"name":"Friday","startTime":"2021-02-19T06:00:00-07:00","endTime":"2021-02-19T18:00:00-07:00","isDaytime":true,"temperature":47,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"9 to 13 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/day/snow?size=medium","shortForecast":"Slight Chance Snow Showers","detailedForecast":"A slight chance of snow showers before 1pm, then a slight chance of rain showers between 1pm and 5pm. Mostly sunny, with a high near 47."},{"number":11,"name":"Friday Night","startTime":"2021-02-19T18:00:00-07:00","endTime":"2021-02-20T06:00:00-07:00","isDaytime":false,"temperature":26,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"10 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/night/sct?size=medium","shortForecast":"Partly Cloudy","detailedForecast":"Partly cloudy, with a low around 26."},{"number":12,"name":"Saturday","startTime":"2021-02-20T06:00:00-07:00","endTime":"2021-02-20T18:00:00-07:00","isDaytime":true,"temperature":47,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"12 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/day/snow?size=medium","shortForecast":"Slight Chance Snow Showers","detailedForecast":"A slight chance of snow showers between 11am and noon, then a slight chance of rain showers between noon and 4pm, then a slight chance of snow showers. Mostly sunny, with a high near 47."},{"number":13,"name":"Saturday Night","startTime":"2021-02-20T18:00:00-07:00","endTime":"2021-02-21T06:00:00-07:00","isDaytime":false,"temperature":25,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"9 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/night/snow/sct?size=medium","shortForecast":"Slight Chance Snow Showers then Partly Cloudy","detailedForecast":"A slight chance of snow showers before 11pm. Partly cloudy, with a low around 25."},{"number":14,"name":"Sunday","startTime":"2021-02-21T06:00:00-07:00","endTime":"2021-02-21T18:00:00-07:00","isDaytime":true,"temperature":47,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"9 to 13 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/day/sct?size=medium","shortForecast":"Mostly Sunny","detailedForecast":"Mostly sunny, with a high near 47."}]}
  var hourly_BOU_53_62 = {"correlationId":"6d11e5f","title":"Unexpected Problem","type":"https://api.weather.gov/problems/UnexpectedProblem","status":500,"detail":"An unexpected problem has occurred.","instance":"https://api.weather.gov/requests/6d11e5f"}
  var crags_config = [
  {
    "name": "Clear Creek Canyon",
    "note": "Relatively solid gneiss and schist to sandy granite.",
    "mountainProject": "https://www.mountainproject.com/area/105744243/clear-creek-canyon",
    "station": "KBJC",
    "office": "BOU/53,62",
    "coordinates": [
      -105.243,
      39.754
    ]
  }
]</script>

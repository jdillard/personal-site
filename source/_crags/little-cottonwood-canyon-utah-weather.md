---
### THIS FILE IS AUTO-GENERATED - DO NOT EDIT ###
layout: page
title: Little Cottonwood Canyon, Utah Climbing Weather - Current, Past, and Forecasted Report
title_override: Little Cottonwood Canyon<br /><small>Climbing Weather</small>
description: A lightweight weather report for Little Cottonwood Canyon, Utah. Optimized for slow internet connections.
js_includes:
  - weather.js
---

<section class="measure center lh-copy f5-ns f6 ph2 mv4" style="text-align: justify;">
<strong>"Is it dry?"</strong>, an oft-repeated, age-old question. Here are real-time,
precipitation-focused reports of current, past, and forecasted climbing weather for Little Cottonwood Canyon, Utah.
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
<section id="weather" data-crag="little-cottonwood-canyon-utah" class="mv4-ns mv3 ph2 center"></section>
<section id="nearby" class="tc lh-copy">
  <h3>Nearby Crags</h3>
<a class="nowrap no-underline fancy-link relative light-red mh3" href="/crags/moab-utah-weather.html">Moab</a>
<a class="nowrap no-underline fancy-link relative light-red mh3" href="/crags/city-of-rocks-idaho-weather.html">City of Rocks</a>
</section>
<section id="nearby" class="tc lh-copy">
  <h3>Other Metros</h3>
  <select class="ma1 bg-near-white pa2" id="stateSel">
    <option value="Texas">Texas</option>
    <option value="Washington">Washington</option>
    <option value="Colorado">Colorado</option>
    <option value="Tennessee">Tennessee</option>
    <option value="Utah" selected>Utah</option>
    <option value="California">California</option>
  </select>
  <select class="ma1 bg-near-white pa2" id="citySel">
    <option value="Salt Lake City" selected>Salt Lake City</option>
  </select>
  <a id="selectMetro" class="f6 link dim ph3 pv2 ma1 dib white bg-light-red" href="/crags/salt-lake-city-utah-weather.html">Select Metro</a>
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
  var weekly_SLC_102_165 = {"updated":"2021-04-26T08:12:38+00:00","units":"us","forecastGenerator":"BaselineForecastGenerator","generatedAt":"2021-04-26T08:43:07+00:00","updateTime":"2021-04-26T08:12:38+00:00","validTimes":"2021-04-26T02:00:00+00:00/P6DT23H","elevation":{"value":1872.0816,"unitCode":"unit:m"},"periods":[{"number":1,"name":"Overnight","startTime":"2021-04-26T02:00:00-06:00","endTime":"2021-04-26T06:00:00-06:00","isDaytime":false,"temperature":38,"temperatureUnit":"F","temperatureTrend":"rising","windSpeed":"13 to 17 mph","windDirection":"S","icon":"https://api.weather.gov/icons/land/night/rain_showers,50?size=medium","shortForecast":"Chance Rain Showers","detailedForecast":"A chance of rain showers. Cloudy. Low around 38, with temperatures rising to around 41 overnight. South wind 13 to 17 mph. Chance of precipitation is 50%."},{"number":2,"name":"Monday","startTime":"2021-04-26T06:00:00-06:00","endTime":"2021-04-26T18:00:00-06:00","isDaytime":true,"temperature":38,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"7 to 15 mph","windDirection":"SSW","icon":"https://api.weather.gov/icons/land/day/snow,90/snow,100?size=medium","shortForecast":"Rain And Snow Showers","detailedForecast":"Rain and snow showers. Cloudy, with a high near 38. South southwest wind 7 to 15 mph. Chance of precipitation is 100%. New snow accumulation of 3 to 5 inches possible."},{"number":3,"name":"Monday Night","startTime":"2021-04-26T18:00:00-06:00","endTime":"2021-04-27T06:00:00-06:00","isDaytime":false,"temperature":33,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"7 mph","windDirection":"NNE","icon":"https://api.weather.gov/icons/land/night/snow,50/snow,30?size=medium","shortForecast":"Chance Rain And Snow Showers","detailedForecast":"A chance of rain and snow showers. Mostly cloudy, with a low around 33. North northeast wind around 7 mph. Chance of precipitation is 50%. Little or no snow accumulation expected."},{"number":4,"name":"Tuesday","startTime":"2021-04-27T06:00:00-06:00","endTime":"2021-04-27T18:00:00-06:00","isDaytime":true,"temperature":47,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"5 to 12 mph","windDirection":"NNW","icon":"https://api.weather.gov/icons/land/day/snow,40/snow,50?size=medium","shortForecast":"Chance Snow Showers","detailedForecast":"A chance of snow showers before noon, then a chance of rain and snow showers. Mostly cloudy, with a high near 47. North northwest wind 5 to 12 mph. Chance of precipitation is 50%. Little or no snow accumulation expected."},{"number":5,"name":"Tuesday Night","startTime":"2021-04-27T18:00:00-06:00","endTime":"2021-04-28T06:00:00-06:00","isDaytime":false,"temperature":35,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"12 mph","windDirection":"N","icon":"https://api.weather.gov/icons/land/night/sct?size=medium","shortForecast":"Partly Cloudy","detailedForecast":"Partly cloudy, with a low around 35. North wind around 12 mph."},{"number":6,"name":"Wednesday","startTime":"2021-04-28T06:00:00-06:00","endTime":"2021-04-28T18:00:00-06:00","isDaytime":true,"temperature":57,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"5 to 9 mph","windDirection":"N","icon":"https://api.weather.gov/icons/land/day/few?size=medium","shortForecast":"Sunny","detailedForecast":"Sunny, with a high near 57."},{"number":7,"name":"Wednesday Night","startTime":"2021-04-28T18:00:00-06:00","endTime":"2021-04-29T06:00:00-06:00","isDaytime":false,"temperature":40,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"6 to 9 mph","windDirection":"NNE","icon":"https://api.weather.gov/icons/land/night/skc?size=medium","shortForecast":"Clear","detailedForecast":"Clear, with a low around 40."},{"number":8,"name":"Thursday","startTime":"2021-04-29T06:00:00-06:00","endTime":"2021-04-29T18:00:00-06:00","isDaytime":true,"temperature":65,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"7 mph","windDirection":"WSW","icon":"https://api.weather.gov/icons/land/day/few?size=medium","shortForecast":"Sunny","detailedForecast":"Sunny, with a high near 65."},{"number":9,"name":"Thursday Night","startTime":"2021-04-29T18:00:00-06:00","endTime":"2021-04-30T06:00:00-06:00","isDaytime":false,"temperature":47,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"7 mph","windDirection":"NE","icon":"https://api.weather.gov/icons/land/night/few?size=medium","shortForecast":"Mostly Clear","detailedForecast":"Mostly clear, with a low around 47."},{"number":10,"name":"Friday","startTime":"2021-04-30T06:00:00-06:00","endTime":"2021-04-30T18:00:00-06:00","isDaytime":true,"temperature":73,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"6 mph","windDirection":"S","icon":"https://api.weather.gov/icons/land/day/sct?size=medium","shortForecast":"Mostly Sunny","detailedForecast":"Mostly sunny, with a high near 73."},{"number":11,"name":"Friday Night","startTime":"2021-04-30T18:00:00-06:00","endTime":"2021-05-01T06:00:00-06:00","isDaytime":false,"temperature":53,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"7 mph","windDirection":"E","icon":"https://api.weather.gov/icons/land/night/sct?size=medium","shortForecast":"Partly Cloudy","detailedForecast":"Partly cloudy, with a low around 53."},{"number":12,"name":"Saturday","startTime":"2021-05-01T06:00:00-06:00","endTime":"2021-05-01T18:00:00-06:00","isDaytime":true,"temperature":75,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"9 mph","windDirection":"S","icon":"https://api.weather.gov/icons/land/day/bkn?size=medium","shortForecast":"Partly Sunny","detailedForecast":"Partly sunny, with a high near 75."},{"number":13,"name":"Saturday Night","startTime":"2021-05-01T18:00:00-06:00","endTime":"2021-05-02T06:00:00-06:00","isDaytime":false,"temperature":51,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"9 mph","windDirection":"NNW","icon":"https://api.weather.gov/icons/land/night/bkn/rain_showers?size=medium","shortForecast":"Mostly Cloudy then Slight Chance Rain Showers","detailedForecast":"A slight chance of rain showers after midnight. Mostly cloudy, with a low around 51."},{"number":14,"name":"Sunday","startTime":"2021-05-02T06:00:00-06:00","endTime":"2021-05-02T18:00:00-06:00","isDaytime":true,"temperature":63,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"6 to 9 mph","windDirection":"NW","icon":"https://api.weather.gov/icons/land/day/rain_showers?size=medium","shortForecast":"Chance Rain Showers","detailedForecast":"A chance of rain showers. Partly sunny, with a high near 63."}]}
  var hourly_SLC_102_165 = {"correlationId":"78e0cbc","title":"Unexpected Problem","type":"https://api.weather.gov/problems/UnexpectedProblem","status":500,"detail":"An unexpected problem has occurred.","instance":"https://api.weather.gov/requests/78e0cbc"}
  var crags_config = [
  {
    "name": "Little Cottonwood Canyon",
    "note": "Primarily quartz monzonite (white granite, essentially)",
    "mountainProject": "https://www.mountainproject.com/area/105739277/little-cottonwood-canyon",
    "station": "KSLC",
    "office": "SLC/102,165",
    "coordinates": [
      -111.775,
      40.5727
    ]
  }
]</script>

---
### THIS FILE IS AUTO-GENERATED - DO NOT EDIT ###
layout: page
title: Joshua Tree National Park, California Climbing Weather - Current, Past, and Forecasted
title_override: Joshua Tree National Park<br /><small>Climbing Weather</small>
description: A lightweight weather report for Joshua Tree National Park, California. Optimized for slow internet connections.
js_includes:
  - weather.js
---

<section class="measure center lh-copy f5-ns f6 ph2 mv4" style="text-align: justify;">
<strong>"Is it dry?"</strong>, an oft-repeated, age-old question. Here are real-time,
precipitation-focused reports of current, past, and forecasted climbing weather for Joshua Tree National Park, California.
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
<section id="weather" data-crag="joshua-tree-national-park-california" class="mv4-ns mv3 ph2 center"></section>
<section id="nearby" class="tc lh-copy">
  <h3>Nearby Crags</h3>
<a class="nowrap no-underline fancy-link relative light-red mh3" href="/crags/yosemite-national-park-california-weather.html">Yosemite National Park</a>
<a class="nowrap no-underline fancy-link relative light-red mh3" href="/crags/bishop-california-weather.html">Bishop</a>
<a class="nowrap no-underline fancy-link relative light-red mh3" href="/crags/mammoth-lakes-california-weather.html">Mammoth Lakes</a>
<a class="nowrap no-underline fancy-link relative light-red mh3" href="/crags/red-rock-nevada-weather.html">Red Rock</a>
</section>
<section id="nearby" class="tc lh-copy">
  <h3>Other Metros</h3>
  <select class="ma1 bg-near-white pa2" id="stateSel">
    <option value="Texas">Texas</option>
    <option value="Washington">Washington</option>
    <option value="Colorado">Colorado</option>
    <option value="Tennessee">Tennessee</option>
    <option value="Utah">Utah</option>
    <option value="California" selected>California</option>
  </select>
  <select class="ma1 bg-near-white pa2" id="citySel">
    <option value="San Francisco" selected>San Francisco</option>
    <option value="Los Angeles">Los Angeles</option>
  </select>
  <a id="selectMetro" class="f6 link dim ph3 pv2 ma1 dib white bg-light-red" href="/crags/san-francisco-california-weather.html">Select Metro</a>
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
  var weekly_PSR_12_103 = {"updated":"2023-07-07T08:14:15+00:00","units":"us","forecastGenerator":"BaselineForecastGenerator","generatedAt":"2023-07-07T08:34:42+00:00","updateTime":"2023-07-07T08:14:15+00:00","validTimes":"2023-07-07T02:00:00+00:00/P7DT23H","elevation":{"unitCode":"wmoUnit:m","value":1324.0512},"periods":[{"number":1,"name":"Overnight","startTime":"2023-07-07T01:00:00-07:00","endTime":"2023-07-07T06:00:00-07:00","isDaytime":false,"temperature":61,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":-6.111111111111111},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":19},"windSpeed":"5 mph","windDirection":"WSW","icon":"https://api.weather.gov/icons/land/night/few?size=medium","shortForecast":"Mostly Clear","detailedForecast":"Mostly clear, with a low around 61. West southwest wind around 5 mph."},{"number":2,"name":"Friday","startTime":"2023-07-07T06:00:00-07:00","endTime":"2023-07-07T18:00:00-07:00","isDaytime":true,"temperature":89,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":-3.3333333333333335},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":21},"windSpeed":"5 to 15 mph","windDirection":"SW","icon":"https://api.weather.gov/icons/land/day/skc?size=medium","shortForecast":"Sunny","detailedForecast":"Sunny, with a high near 89. Southwest wind 5 to 15 mph, with gusts as high as 20 mph."},{"number":3,"name":"Friday Night","startTime":"2023-07-07T18:00:00-07:00","endTime":"2023-07-08T06:00:00-07:00","isDaytime":false,"temperature":61,"temperatureUnit":"F","temperatureTrend":"rising","probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":0},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":19},"windSpeed":"5 to 10 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/night/skc?size=medium","shortForecast":"Clear","detailedForecast":"Clear. Low around 61, with temperatures rising to around 63 overnight. West wind 5 to 10 mph."},{"number":4,"name":"Saturday","startTime":"2023-07-08T06:00:00-07:00","endTime":"2023-07-08T18:00:00-07:00","isDaytime":true,"temperature":92,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":-2.2222222222222223},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":20},"windSpeed":"5 to 15 mph","windDirection":"SSW","icon":"https://api.weather.gov/icons/land/day/skc?size=medium","shortForecast":"Sunny","detailedForecast":"Sunny, with a high near 92. South southwest wind 5 to 15 mph."},{"number":5,"name":"Saturday Night","startTime":"2023-07-08T18:00:00-07:00","endTime":"2023-07-09T06:00:00-07:00","isDaytime":false,"temperature":64,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":1.1111111111111112},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":19},"windSpeed":"5 to 15 mph","windDirection":"WSW","icon":"https://api.weather.gov/icons/land/night/skc?size=medium","shortForecast":"Clear","detailedForecast":"Clear, with a low around 64. West southwest wind 5 to 15 mph."},{"number":6,"name":"Sunday","startTime":"2023-07-09T06:00:00-07:00","endTime":"2023-07-09T18:00:00-07:00","isDaytime":true,"temperature":92,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":-2.7777777777777777},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":16},"windSpeed":"5 to 15 mph","windDirection":"SW","icon":"https://api.weather.gov/icons/land/day/skc?size=medium","shortForecast":"Sunny","detailedForecast":"Sunny, with a high near 92. Southwest wind 5 to 15 mph, with gusts as high as 25 mph."},{"number":7,"name":"Sunday Night","startTime":"2023-07-09T18:00:00-07:00","endTime":"2023-07-10T06:00:00-07:00","isDaytime":false,"temperature":66,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":0},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":17},"windSpeed":"5 to 15 mph","windDirection":"WSW","icon":"https://api.weather.gov/icons/land/night/skc?size=medium","shortForecast":"Clear","detailedForecast":"Clear, with a low around 66. West southwest wind 5 to 15 mph, with gusts as high as 25 mph."},{"number":8,"name":"Monday","startTime":"2023-07-10T06:00:00-07:00","endTime":"2023-07-10T18:00:00-07:00","isDaytime":true,"temperature":95,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":-1.1111111111111112},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":15},"windSpeed":"5 to 15 mph","windDirection":"SSW","icon":"https://api.weather.gov/icons/land/day/skc?size=medium","shortForecast":"Sunny","detailedForecast":"Sunny, with a high near 95. South southwest wind 5 to 15 mph, with gusts as high as 20 mph."},{"number":9,"name":"Monday Night","startTime":"2023-07-10T18:00:00-07:00","endTime":"2023-07-11T06:00:00-07:00","isDaytime":false,"temperature":70,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":0.5555555555555556},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":19},"windSpeed":"5 to 15 mph","windDirection":"WSW","icon":"https://api.weather.gov/icons/land/night/skc?size=medium","shortForecast":"Clear","detailedForecast":"Clear, with a low around 70. West southwest wind 5 to 15 mph, with gusts as high as 20 mph."},{"number":10,"name":"Tuesday","startTime":"2023-07-11T06:00:00-07:00","endTime":"2023-07-11T18:00:00-07:00","isDaytime":true,"temperature":97,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":2.7777777777777777},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":18},"windSpeed":"5 to 15 mph","windDirection":"SW","icon":"https://api.weather.gov/icons/land/day/skc?size=medium","shortForecast":"Sunny","detailedForecast":"Sunny, with a high near 97. Southwest wind 5 to 15 mph, with gusts as high as 20 mph."},{"number":11,"name":"Tuesday Night","startTime":"2023-07-11T18:00:00-07:00","endTime":"2023-07-12T06:00:00-07:00","isDaytime":false,"temperature":71,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":3.3333333333333335},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":18},"windSpeed":"5 to 15 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/night/skc?size=medium","shortForecast":"Clear","detailedForecast":"Clear, with a low around 71. West wind 5 to 15 mph, with gusts as high as 20 mph."},{"number":12,"name":"Wednesday","startTime":"2023-07-12T06:00:00-07:00","endTime":"2023-07-12T18:00:00-07:00","isDaytime":true,"temperature":100,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":3.3333333333333335},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":17},"windSpeed":"5 to 15 mph","windDirection":"WSW","icon":"https://api.weather.gov/icons/land/day/skc?size=medium","shortForecast":"Sunny","detailedForecast":"Sunny, with a high near 100. West southwest wind 5 to 15 mph, with gusts as high as 20 mph."},{"number":13,"name":"Wednesday Night","startTime":"2023-07-12T18:00:00-07:00","endTime":"2023-07-13T06:00:00-07:00","isDaytime":false,"temperature":71,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":3.3333333333333335},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":16},"windSpeed":"5 to 15 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/night/skc?size=medium","shortForecast":"Clear","detailedForecast":"Clear, with a low around 71. West wind 5 to 15 mph, with gusts as high as 20 mph."},{"number":14,"name":"Thursday","startTime":"2023-07-13T06:00:00-07:00","endTime":"2023-07-13T18:00:00-07:00","isDaytime":true,"temperature":100,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":1.1111111111111112},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":13},"windSpeed":"5 to 15 mph","windDirection":"WSW","icon":"https://api.weather.gov/icons/land/day/skc?size=medium","shortForecast":"Sunny","detailedForecast":"Sunny, with a high near 100. West southwest wind 5 to 15 mph, with gusts as high as 20 mph."}]}
  var hourly_PSR_12_103 = false
  var crags_config = [
  {
    "name": "Joshua Tree National Park",
    "note": "Quartz monzonite.",
    "mountainProject": "https://www.mountainproject.com/area/105720495/joshua-tree-national-park",
    "station": "LTHC1",
    "office": "PSR/12,103",
    "coordinates": [
      -116.168,
      34.012
    ]
  }
]</script>

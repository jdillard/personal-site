---
### THIS FILE IS AUTO-GENERATED - DO NOT EDIT ###
layout: page
title: Yosemite National Park, California Climbing Weather - Current, Past, and Forecasted
title_override: Yosemite National Park<br /><small>Climbing Weather</small>
description: A lightweight weather report for Yosemite National Park, California. Optimized for slow internet connections.
js_includes:
  - weather.js
---

<section class="measure center lh-copy f5-ns f6 ph2 mv4" style="text-align: justify;">
<strong>"Is it dry?"</strong>, an oft-repeated, age-old question. Here are real-time,
precipitation-focused reports of current, past, and forecasted climbing weather for Yosemite National Park, California.
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
<section id="weather" data-crag="yosemite-national-park-california" class="mv4-ns mv3 ph2 center"></section>
<section id="nearby" class="tc lh-copy">
  <h3>Nearby Crags</h3>
<a class="nowrap no-underline fancy-link relative light-red mh3" href="/crags/joshua-tree-national-park-california-weather.html">Joshua Tree National Park</a>
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
  var weekly_HNX_66_143 = {"updated":"2023-12-04T07:58:10+00:00","units":"us","forecastGenerator":"BaselineForecastGenerator","generatedAt":"2023-12-04T08:33:10+00:00","updateTime":"2023-12-04T07:58:10+00:00","validTimes":"2023-12-04T01:00:00+00:00/P7DT12H","elevation":{"unitCode":"wmoUnit:m","value":2130.8568},"periods":[{"number":1,"name":"Overnight","startTime":"2023-12-04T00:00:00-08:00","endTime":"2023-12-04T06:00:00-08:00","isDaytime":false,"temperature":35,"temperatureUnit":"F","temperatureTrend":"rising","probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":-3.3333333333333335},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":61},"windSpeed":"0 to 5 mph","windDirection":"NNE","icon":"https://api.weather.gov/icons/land/night/bkn?size=medium","shortForecast":"Mostly Cloudy","detailedForecast":"Mostly cloudy. Low around 35, with temperatures rising to around 37 overnight. North northeast wind 0 to 5 mph."},{"number":2,"name":"Monday","startTime":"2023-12-04T06:00:00-08:00","endTime":"2023-12-04T18:00:00-08:00","isDaytime":true,"temperature":52,"temperatureUnit":"F","temperatureTrend":"falling","probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":1.6666666666666667},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":67},"windSpeed":"0 to 5 mph","windDirection":"NNW","icon":"https://api.weather.gov/icons/land/day/few?size=medium","shortForecast":"Sunny","detailedForecast":"Sunny. High near 52, with temperatures falling to around 47 in the afternoon. North northwest wind 0 to 5 mph."},{"number":3,"name":"Monday Night","startTime":"2023-12-04T18:00:00-08:00","endTime":"2023-12-05T06:00:00-08:00","isDaytime":false,"temperature":36,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":1.1111111111111112},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":69},"windSpeed":"0 to 5 mph","windDirection":"NNE","icon":"https://api.weather.gov/icons/land/night/skc?size=medium","shortForecast":"Clear","detailedForecast":"Clear, with a low around 36. North northeast wind 0 to 5 mph."},{"number":4,"name":"Tuesday","startTime":"2023-12-05T06:00:00-08:00","endTime":"2023-12-05T18:00:00-08:00","isDaytime":true,"temperature":55,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":1.1111111111111112},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":71},"windSpeed":"0 to 5 mph","windDirection":"NW","icon":"https://api.weather.gov/icons/land/day/few?size=medium","shortForecast":"Areas Of Frost then Sunny","detailedForecast":"Areas of frost before 7am. Sunny, with a high near 55. Northwest wind 0 to 5 mph."},{"number":5,"name":"Tuesday Night","startTime":"2023-12-05T18:00:00-08:00","endTime":"2023-12-06T06:00:00-08:00","isDaytime":false,"temperature":37,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":1.1111111111111112},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":67},"windSpeed":"5 mph","windDirection":"ENE","icon":"https://api.weather.gov/icons/land/night/sct?size=medium","shortForecast":"Partly Cloudy","detailedForecast":"Partly cloudy, with a low around 37. East northeast wind around 5 mph."},{"number":6,"name":"Wednesday","startTime":"2023-12-06T06:00:00-08:00","endTime":"2023-12-06T18:00:00-08:00","isDaytime":true,"temperature":49,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":40},"dewpoint":{"unitCode":"wmoUnit:degC","value":0.5555555555555556},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":68},"windSpeed":"5 to 15 mph","windDirection":"S","icon":"https://api.weather.gov/icons/land/day/rain_showers,30/rain_showers,40?size=medium","shortForecast":"Chance Rain Showers","detailedForecast":"A chance of rain showers after 10am. Partly sunny, with a high near 49. South wind 5 to 15 mph, with gusts as high as 25 mph. Chance of precipitation is 40%. New rainfall amounts less than a tenth of an inch possible."},{"number":7,"name":"Wednesday Night","startTime":"2023-12-06T18:00:00-08:00","endTime":"2023-12-07T06:00:00-08:00","isDaytime":false,"temperature":30,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":40},"dewpoint":{"unitCode":"wmoUnit:degC","value":0.5555555555555556},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":85},"windSpeed":"5 to 10 mph","windDirection":"SSW","icon":"https://api.weather.gov/icons/land/night/snow,40?size=medium","shortForecast":"Chance Rain And Snow Showers","detailedForecast":"A chance of rain showers before 7pm, then a chance of rain and snow showers. Mostly cloudy, with a low around 30. South southwest wind 5 to 10 mph, with gusts as high as 25 mph. Chance of precipitation is 40%. Little or no snow accumulation expected."},{"number":8,"name":"Thursday","startTime":"2023-12-07T06:00:00-08:00","endTime":"2023-12-07T18:00:00-08:00","isDaytime":true,"temperature":40,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":40},"dewpoint":{"unitCode":"wmoUnit:degC","value":-2.7777777777777777},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":85},"windSpeed":"5 to 10 mph","windDirection":"SW","icon":"https://api.weather.gov/icons/land/day/snow,30/snow,40?size=medium","shortForecast":"Chance Snow Showers","detailedForecast":"A chance of snow showers. Partly sunny, with a high near 40. Southwest wind 5 to 10 mph, with gusts as high as 20 mph. Chance of precipitation is 40%. New snow accumulation of less than half an inch possible."},{"number":9,"name":"Thursday Night","startTime":"2023-12-07T18:00:00-08:00","endTime":"2023-12-08T06:00:00-08:00","isDaytime":false,"temperature":22,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":40},"dewpoint":{"unitCode":"wmoUnit:degC","value":-3.888888888888889},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":75},"windSpeed":"5 to 10 mph","windDirection":"E","icon":"https://api.weather.gov/icons/land/night/snow,40/snow,30?size=medium","shortForecast":"Chance Snow Showers","detailedForecast":"A chance of snow showers. Mostly cloudy, with a low around 22. East wind 5 to 10 mph. Chance of precipitation is 40%. New snow accumulation of less than one inch possible."},{"number":10,"name":"Friday","startTime":"2023-12-08T06:00:00-08:00","endTime":"2023-12-08T18:00:00-08:00","isDaytime":true,"temperature":42,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":20},"dewpoint":{"unitCode":"wmoUnit:degC","value":-6.111111111111111},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":55},"windSpeed":"5 to 10 mph","windDirection":"N","icon":"https://api.weather.gov/icons/land/day/snow,20?size=medium","shortForecast":"Slight Chance Snow Showers","detailedForecast":"A slight chance of snow showers before 4pm. Mostly sunny, with a high near 42. North wind 5 to 10 mph. Chance of precipitation is 20%. New snow accumulation of less than half an inch possible."},{"number":11,"name":"Friday Night","startTime":"2023-12-08T18:00:00-08:00","endTime":"2023-12-09T06:00:00-08:00","isDaytime":false,"temperature":25,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":-6.666666666666667},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":57},"windSpeed":"5 to 10 mph","windDirection":"NE","icon":"https://api.weather.gov/icons/land/night/cold?size=medium","shortForecast":"Mostly Clear","detailedForecast":"Mostly clear, with a low around 25. Northeast wind 5 to 10 mph."},{"number":12,"name":"Saturday","startTime":"2023-12-09T06:00:00-08:00","endTime":"2023-12-09T18:00:00-08:00","isDaytime":true,"temperature":47,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":-3.3333333333333335},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":55},"windSpeed":"5 to 10 mph","windDirection":"N","icon":"https://api.weather.gov/icons/land/day/sct?size=medium","shortForecast":"Mostly Sunny","detailedForecast":"Mostly sunny, with a high near 47. North wind 5 to 10 mph."},{"number":13,"name":"Saturday Night","startTime":"2023-12-09T18:00:00-08:00","endTime":"2023-12-10T06:00:00-08:00","isDaytime":false,"temperature":31,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":-3.3333333333333335},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":61},"windSpeed":"5 mph","windDirection":"NNE","icon":"https://api.weather.gov/icons/land/night/cold?size=medium","shortForecast":"Mostly Cloudy","detailedForecast":"Mostly cloudy, with a low around 31. North northeast wind around 5 mph."},{"number":14,"name":"Sunday","startTime":"2023-12-10T06:00:00-08:00","endTime":"2023-12-10T18:00:00-08:00","isDaytime":true,"temperature":48,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":-1.6666666666666667},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":60},"windSpeed":"5 to 10 mph","windDirection":"N","icon":"https://api.weather.gov/icons/land/day/sct?size=medium","shortForecast":"Mostly Sunny","detailedForecast":"Mostly sunny, with a high near 48. North wind 5 to 10 mph."}]}
  var hourly_HNX_66_143 = false
  var crags_config = [
  {
    "name": "Yosemite National Park",
    "note": "Glacial granite.",
    "mountainProject": "https://www.mountainproject.com/area/105833381/yosemite-national-park",
    "station": "AHIC1",
    "office": "HNX/66,143",
    "coordinates": [
      -119.604,
      37.741
    ]
  }
]</script>

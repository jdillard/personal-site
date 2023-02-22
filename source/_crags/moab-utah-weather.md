---
### THIS FILE IS AUTO-GENERATED - DO NOT EDIT ###
layout: page
title: Moab, Utah Climbing Weather - Current, Past, and Forecasted Report
title_override: Moab<br /><small>Climbing Weather</small>
description: A lightweight weather report for Moab, Utah. Optimized for slow internet connections.
js_includes:
  - weather.js
---

<section class="measure center lh-copy f5-ns f6 ph2 mv4" style="text-align: justify;">
<strong>"Is it dry?"</strong>, an oft-repeated, age-old question. Here are real-time,
precipitation-focused reports of current, past, and forecasted climbing weather for Moab, Utah.
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
<section id="weather" data-crag="moab-utah" class="mv4-ns mv3 ph2 center"></section>
<section id="nearby" class="tc lh-copy">
  <h3>Nearby Crags</h3>
<a class="nowrap no-underline fancy-link relative light-red mh3" href="/crags/clear-creek-canyon-colorado-weather.html">Clear Creek Canyon</a>
<a class="nowrap no-underline fancy-link relative light-red mh3" href="/crags/staunton-state-park-colorado-weather.html">Staunton State Park</a>
<a class="nowrap no-underline fancy-link relative light-red mh3" href="/crags/lime-park-lime-creek-colorado-weather.html">Lime Park (Lime Creek)</a>
<a class="nowrap no-underline fancy-link relative light-red mh3" href="/crags/independence-pass-colorado-weather.html">Independence Pass</a>
<a class="nowrap no-underline fancy-link relative light-red mh3" href="/crags/estes-park-valley-colorado-weather.html">Estes Park Valley</a>
<a class="nowrap no-underline fancy-link relative light-red mh3" href="/crags/gunnison-colorado-weather.html">Gunnison</a>
<a class="nowrap no-underline fancy-link relative light-red mh3" href="/crags/little-cottonwood-canyon-utah-weather.html">Little Cottonwood Canyon</a>
<a class="nowrap no-underline fancy-link relative light-red mh3" href="/crags/city-of-rocks-idaho-weather.html">City of Rocks</a>
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
  var weekly_GJT_60_82 = {"updated":"2023-02-22T08:21:02+00:00","units":"us","forecastGenerator":"BaselineForecastGenerator","generatedAt":"2023-02-22T08:35:55+00:00","updateTime":"2023-02-22T08:21:02+00:00","validTimes":"2023-02-22T02:00:00+00:00/P7DT23H","elevation":{"unitCode":"wmoUnit:m","value":1560.8808},"periods":[{"number":1,"name":"Overnight","startTime":"2023-02-22T01:00:00-07:00","endTime":"2023-02-22T06:00:00-07:00","isDaytime":false,"temperature":37,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":60},"dewpoint":{"unitCode":"wmoUnit:degC","value":-0.5555555555555556},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":61},"windSpeed":"15 to 35 mph","windDirection":"SSE","icon":"https://api.weather.gov/icons/land/night/rain_showers,60?size=medium","shortForecast":"Rain Showers Likely","detailedForecast":"Rain showers likely. Cloudy, with a low around 37. South southeast wind 15 to 35 mph, with gusts as high as 55 mph. Chance of precipitation is 60%. New snow accumulation of less than one inch possible."},{"number":2,"name":"Wednesday","startTime":"2023-02-22T06:00:00-07:00","endTime":"2023-02-22T18:00:00-07:00","isDaytime":true,"temperature":39,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":70},"dewpoint":{"unitCode":"wmoUnit:degC","value":-1.1111111111111112},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":74},"windSpeed":"25 to 35 mph","windDirection":"SW","icon":"https://api.weather.gov/icons/land/day/snow,70/snow,50?size=medium","shortForecast":"Rain And Snow Showers Likely","detailedForecast":"Rain and snow showers likely before 11am, then a chance of snow showers and a slight chance of thunderstorms. Mostly cloudy, with a high near 39. Southwest wind 25 to 35 mph, with gusts as high as 55 mph. Chance of precipitation is 70%. New snow accumulation of 1 to 2 inches possible."},{"number":3,"name":"Wednesday Night","startTime":"2023-02-22T18:00:00-07:00","endTime":"2023-02-23T06:00:00-07:00","isDaytime":false,"temperature":21,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":20},"dewpoint":{"unitCode":"wmoUnit:degC","value":-8.88888888888889},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":75},"windSpeed":"15 to 25 mph","windDirection":"SW","icon":"https://api.weather.gov/icons/land/night/snow,20/wind_bkn?size=medium","shortForecast":"Slight Chance Snow Showers then Mostly Cloudy","detailedForecast":"A slight chance of snow showers before 10pm. Mostly cloudy, with a low around 21. Southwest wind 15 to 25 mph. Chance of precipitation is 20%. New snow accumulation of less than half an inch possible."},{"number":4,"name":"Thursday","startTime":"2023-02-23T06:00:00-07:00","endTime":"2023-02-23T18:00:00-07:00","isDaytime":true,"temperature":34,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":30},"dewpoint":{"unitCode":"wmoUnit:degC","value":-7.222222222222222},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":71},"windSpeed":"15 to 20 mph","windDirection":"SSW","icon":"https://api.weather.gov/icons/land/day/snow,30?size=medium","shortForecast":"Chance Snow Showers","detailedForecast":"A chance of snow showers after 8am. Partly sunny, with a high near 34. South southwest wind 15 to 20 mph, with gusts as high as 35 mph. Chance of precipitation is 30%. New snow accumulation of less than half an inch possible."},{"number":5,"name":"Thursday Night","startTime":"2023-02-23T18:00:00-07:00","endTime":"2023-02-24T06:00:00-07:00","isDaytime":false,"temperature":27,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":40},"dewpoint":{"unitCode":"wmoUnit:degC","value":-4.444444444444445},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":83},"windSpeed":"15 mph","windDirection":"S","icon":"https://api.weather.gov/icons/land/night/snow,40?size=medium","shortForecast":"Chance Snow Showers","detailedForecast":"A chance of snow showers. Mostly cloudy, with a low around 27. South wind around 15 mph, with gusts as high as 30 mph. Chance of precipitation is 40%. New snow accumulation of less than half an inch possible."},{"number":6,"name":"Friday","startTime":"2023-02-24T06:00:00-07:00","endTime":"2023-02-24T18:00:00-07:00","isDaytime":true,"temperature":41,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":40},"dewpoint":{"unitCode":"wmoUnit:degC","value":-3.888888888888889},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":85},"windSpeed":"10 to 20 mph","windDirection":"S","icon":"https://api.weather.gov/icons/land/day/snow,40/snow,20?size=medium","shortForecast":"Chance Snow Showers","detailedForecast":"A chance of snow showers before 5pm. Mostly cloudy, with a high near 41. Chance of precipitation is 40%. Little or no snow accumulation expected."},{"number":7,"name":"Friday Night","startTime":"2023-02-24T18:00:00-07:00","endTime":"2023-02-25T06:00:00-07:00","isDaytime":false,"temperature":26,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":-3.888888888888889},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":78},"windSpeed":"5 to 10 mph","windDirection":"SE","icon":"https://api.weather.gov/icons/land/night/bkn?size=medium","shortForecast":"Mostly Cloudy","detailedForecast":"Mostly cloudy, with a low around 26."},{"number":8,"name":"Saturday","startTime":"2023-02-25T06:00:00-07:00","endTime":"2023-02-25T18:00:00-07:00","isDaytime":true,"temperature":46,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":-2.2222222222222223},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":79},"windSpeed":"5 to 10 mph","windDirection":"NE","icon":"https://api.weather.gov/icons/land/day/sct?size=medium","shortForecast":"Mostly Sunny","detailedForecast":"Mostly sunny, with a high near 46."},{"number":9,"name":"Saturday Night","startTime":"2023-02-25T18:00:00-07:00","endTime":"2023-02-26T06:00:00-07:00","isDaytime":false,"temperature":30,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":-2.2222222222222223},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":74},"windSpeed":"10 mph","windDirection":"ESE","icon":"https://api.weather.gov/icons/land/night/bkn/snow?size=medium","shortForecast":"Mostly Cloudy then Chance Snow Showers","detailedForecast":"A chance of snow showers after 5am. Mostly cloudy, with a low around 30."},{"number":10,"name":"Sunday","startTime":"2023-02-26T06:00:00-07:00","endTime":"2023-02-26T18:00:00-07:00","isDaytime":true,"temperature":44,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":-1.6666666666666667},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":76},"windSpeed":"10 to 15 mph","windDirection":"S","icon":"https://api.weather.gov/icons/land/day/snow?size=medium","shortForecast":"Chance Snow Showers","detailedForecast":"A chance of snow showers before 5pm. Mostly cloudy, with a high near 44. New snow accumulation of less than half an inch possible."},{"number":11,"name":"Sunday Night","startTime":"2023-02-26T18:00:00-07:00","endTime":"2023-02-27T06:00:00-07:00","isDaytime":false,"temperature":25,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":-3.888888888888889},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":78},"windSpeed":"10 mph","windDirection":"S","icon":"https://api.weather.gov/icons/land/night/sct?size=medium","shortForecast":"Partly Cloudy","detailedForecast":"Partly cloudy, with a low around 25."},{"number":12,"name":"Monday","startTime":"2023-02-27T06:00:00-07:00","endTime":"2023-02-27T18:00:00-07:00","isDaytime":true,"temperature":43,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":-3.888888888888889},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":81},"windSpeed":"5 to 10 mph","windDirection":"S","icon":"https://api.weather.gov/icons/land/day/sct?size=medium","shortForecast":"Mostly Sunny","detailedForecast":"Mostly sunny, with a high near 43."},{"number":13,"name":"Monday Night","startTime":"2023-02-27T18:00:00-07:00","endTime":"2023-02-28T06:00:00-07:00","isDaytime":false,"temperature":28,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":-3.3333333333333335},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":77},"windSpeed":"10 mph","windDirection":"SSE","icon":"https://api.weather.gov/icons/land/night/bkn?size=medium","shortForecast":"Mostly Cloudy","detailedForecast":"Mostly cloudy, with a low around 28."},{"number":14,"name":"Tuesday","startTime":"2023-02-28T06:00:00-07:00","endTime":"2023-02-28T18:00:00-07:00","isDaytime":true,"temperature":44,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":-3.888888888888889},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":79},"windSpeed":"15 mph","windDirection":"SSW","icon":"https://api.weather.gov/icons/land/day/snow?size=medium","shortForecast":"Slight Chance Snow Showers","detailedForecast":"A slight chance of snow showers after 11am. Partly sunny, with a high near 44."}]}
  var hourly_GJT_60_82 = false
  var crags_config = [
  {
    "name": "Moab",
    "note": "Soft sandstone in a desert environment.",
    "mountainProject": "https://www.mountainproject.com/area/105716711/moab-area",
    "station": "MOAB",
    "office": "GJT/60,82",
    "coordinates": [
      -109.550,
      38.573
    ]
  }
]</script>

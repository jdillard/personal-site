---
### THIS FILE IS AUTO-GENERATED - DO NOT EDIT ###
layout: page
title: Staunton State Park, Colorado Climbing Weather - Current, Past, and Forecasted
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
  var weekly_BOU_48_51 = {"updated":"2023-03-23T07:02:26+00:00","units":"us","forecastGenerator":"BaselineForecastGenerator","generatedAt":"2023-03-23T08:33:13+00:00","updateTime":"2023-03-23T07:02:26+00:00","validTimes":"2023-03-23T01:00:00+00:00/P7DT5H","elevation":{"unitCode":"wmoUnit:m","value":2560.0152},"periods":[{"number":1,"name":"Overnight","startTime":"2023-03-23T02:00:00-06:00","endTime":"2023-03-23T06:00:00-06:00","isDaytime":false,"temperature":14,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":-13.333333333333334},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":70},"windSpeed":"16 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/night/few?size=medium","shortForecast":"Mostly Clear","detailedForecast":"Mostly clear, with a low around 14. Wind chill values as low as -2. West wind around 16 mph, with gusts as high as 25 mph."},{"number":2,"name":"Thursday","startTime":"2023-03-23T06:00:00-06:00","endTime":"2023-03-23T18:00:00-06:00","isDaytime":true,"temperature":39,"temperatureUnit":"F","temperatureTrend":"falling","probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":40},"dewpoint":{"unitCode":"wmoUnit:degC","value":-11.11111111111111},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":67},"windSpeed":"8 to 16 mph","windDirection":"WNW","icon":"https://api.weather.gov/icons/land/day/sct/snow,40?size=medium","shortForecast":"Mostly Sunny then Chance Snow Showers","detailedForecast":"A chance of snow showers after noon. Mostly sunny. High near 39, with temperatures falling to around 35 in the afternoon. Wind chill values as low as -1. West northwest wind 8 to 16 mph, with gusts as high as 25 mph. Chance of precipitation is 40%. New snow accumulation of less than half an inch possible."},{"number":3,"name":"Thursday Night","startTime":"2023-03-23T18:00:00-06:00","endTime":"2023-03-24T06:00:00-06:00","isDaytime":false,"temperature":11,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":20},"dewpoint":{"unitCode":"wmoUnit:degC","value":-6.666666666666667},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":87},"windSpeed":"8 mph","windDirection":"NW","icon":"https://api.weather.gov/icons/land/night/snow,20?size=medium","shortForecast":"Slight Chance Snow Showers","detailedForecast":"A slight chance of snow showers. Mostly cloudy, with a low around 11. Wind chill values as low as 0. Northwest wind around 8 mph. Chance of precipitation is 20%. New snow accumulation of less than half an inch possible."},{"number":4,"name":"Friday","startTime":"2023-03-24T06:00:00-06:00","endTime":"2023-03-24T18:00:00-06:00","isDaytime":true,"temperature":37,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":60},"dewpoint":{"unitCode":"wmoUnit:degC","value":-11.666666666666666},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":80},"windSpeed":"7 to 10 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/day/sct/snow,60?size=medium","shortForecast":"Mostly Sunny then Snow Showers Likely","detailedForecast":"Snow showers likely after noon. Mostly sunny, with a high near 37. Wind chill values as low as 0. West wind 7 to 10 mph. Chance of precipitation is 60%. New snow accumulation of around one inch possible."},{"number":5,"name":"Friday Night","startTime":"2023-03-24T18:00:00-06:00","endTime":"2023-03-25T06:00:00-06:00","isDaytime":false,"temperature":7,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":50},"dewpoint":{"unitCode":"wmoUnit:degC","value":-11.11111111111111},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":77},"windSpeed":"10 to 22 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/night/snow,50/snow,30?size=medium","shortForecast":"Chance Snow Showers","detailedForecast":"A chance of snow showers. Mostly cloudy, with a low around 7. West wind 10 to 22 mph, with gusts as high as 32 mph. Chance of precipitation is 50%. New snow accumulation of around one inch possible."},{"number":6,"name":"Saturday","startTime":"2023-03-25T06:00:00-06:00","endTime":"2023-03-25T18:00:00-06:00","isDaytime":true,"temperature":29,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":40},"dewpoint":{"unitCode":"wmoUnit:degC","value":-18.333333333333332},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":63},"windSpeed":"18 to 29 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/day/snow,20/snow,40?size=medium","shortForecast":"Chance Snow Showers","detailedForecast":"A chance of snow showers. Mostly sunny, with a high near 29. Chance of precipitation is 40%."},{"number":7,"name":"Saturday Night","startTime":"2023-03-25T18:00:00-06:00","endTime":"2023-03-26T06:00:00-06:00","isDaytime":false,"temperature":5,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":40},"dewpoint":{"unitCode":"wmoUnit:degC","value":-17.22222222222222},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":79},"windSpeed":"9 to 15 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/night/snow,40/snow,30?size=medium","shortForecast":"Chance Snow Showers","detailedForecast":"A chance of snow showers. Mostly cloudy, with a low around 5. Chance of precipitation is 40%. New snow accumulation of less than one inch possible."},{"number":8,"name":"Sunday","startTime":"2023-03-26T06:00:00-06:00","endTime":"2023-03-26T18:00:00-06:00","isDaytime":true,"temperature":29,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":-13.333333333333334},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":66},"windSpeed":"9 to 14 mph","windDirection":"WSW","icon":"https://api.weather.gov/icons/land/day/snow?size=medium","shortForecast":"Chance Snow Showers","detailedForecast":"A chance of snow showers. Mostly cloudy, with a high near 29. New snow accumulation of around one inch possible."},{"number":9,"name":"Sunday Night","startTime":"2023-03-26T18:00:00-06:00","endTime":"2023-03-27T06:00:00-06:00","isDaytime":false,"temperature":5,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":-13.333333333333334},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":91},"windSpeed":"12 mph","windDirection":"WNW","icon":"https://api.weather.gov/icons/land/night/snow?size=medium","shortForecast":"Chance Snow Showers","detailedForecast":"A chance of snow showers. Mostly cloudy, with a low around 5. New snow accumulation of 1 to 3 inches possible."},{"number":10,"name":"Monday","startTime":"2023-03-27T06:00:00-06:00","endTime":"2023-03-27T18:00:00-06:00","isDaytime":true,"temperature":33,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":-15},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":72},"windSpeed":"13 to 16 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/day/sct/snow?size=medium","shortForecast":"Mostly Sunny then Slight Chance Snow Showers","detailedForecast":"A slight chance of snow showers after noon. Mostly sunny, with a high near 33."},{"number":11,"name":"Monday Night","startTime":"2023-03-27T18:00:00-06:00","endTime":"2023-03-28T06:00:00-06:00","isDaytime":false,"temperature":7,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":-14.444444444444445},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":83},"windSpeed":"12 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/night/cold?size=medium","shortForecast":"Partly Cloudy","detailedForecast":"Partly cloudy, with a low around 7."},{"number":12,"name":"Tuesday","startTime":"2023-03-28T06:00:00-06:00","endTime":"2023-03-28T18:00:00-06:00","isDaytime":true,"temperature":44,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":-8.88888888888889},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":69},"windSpeed":"16 mph","windDirection":"SW","icon":"https://api.weather.gov/icons/land/day/few?size=medium","shortForecast":"Sunny","detailedForecast":"Sunny, with a high near 44."},{"number":13,"name":"Tuesday Night","startTime":"2023-03-28T18:00:00-06:00","endTime":"2023-03-29T06:00:00-06:00","isDaytime":false,"temperature":18,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":-8.88888888888889},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":80},"windSpeed":"14 mph","windDirection":"WSW","icon":"https://api.weather.gov/icons/land/night/sct?size=medium","shortForecast":"Partly Cloudy","detailedForecast":"Partly cloudy, with a low around 18."},{"number":14,"name":"Wednesday","startTime":"2023-03-29T06:00:00-06:00","endTime":"2023-03-29T18:00:00-06:00","isDaytime":true,"temperature":49,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":-7.777777777777778},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":65},"windSpeed":"16 mph","windDirection":"WSW","icon":"https://api.weather.gov/icons/land/day/sct/snow?size=medium","shortForecast":"Mostly Sunny then Slight Chance Snow Showers","detailedForecast":"A slight chance of snow showers after noon. Mostly sunny, with a high near 49."}]}
  var hourly_BOU_48_51 = false
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

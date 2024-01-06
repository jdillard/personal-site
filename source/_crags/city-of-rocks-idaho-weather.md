---
### THIS FILE IS AUTO-GENERATED - DO NOT EDIT ###
layout: page
title: City of Rocks, Idaho Climbing Weather - Current, Past, and Forecasted
title_override: City of Rocks<br /><small>Climbing Weather</small>
description: A lightweight weather report for City of Rocks, Idaho. Optimized for slow internet connections.
js_includes:
  - weather.js
---

<section class="measure center lh-copy f5-ns f6 ph2 mv4" style="text-align: justify;">
<strong>"Is it dry?"</strong>, an oft-repeated, age-old question. Here are real-time,
precipitation-focused reports of current, past, and forecasted climbing weather for City of Rocks, Idaho.
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
<section id="weather" data-crag="city-of-rocks-idaho" class="mv4-ns mv3 ph2 center"></section>
<section id="nearby" class="tc lh-copy">
  <h3>Nearby Crags</h3>
<a class="nowrap no-underline fancy-link relative light-red mh3" href="/crags/moab-utah-weather.html">Moab</a>
<a class="nowrap no-underline fancy-link relative light-red mh3" href="/crags/little-cottonwood-canyon-utah-weather.html">Little Cottonwood Canyon</a>
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
  var weekly_PIH_50_16 = {"updated":"2024-01-06T05:31:09+00:00","units":"us","forecastGenerator":"BaselineForecastGenerator","generatedAt":"2024-01-06T08:32:14+00:00","updateTime":"2024-01-06T05:31:09+00:00","validTimes":"2024-01-05T23:00:00+00:00/P7DT8H","elevation":{"unitCode":"wmoUnit:m","value":1546.86},"periods":[{"number":1,"name":"Overnight","startTime":"2024-01-06T01:00:00-07:00","endTime":"2024-01-06T06:00:00-07:00","isDaytime":false,"temperature":14,"temperatureUnit":"F","temperatureTrend":"rising","probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":-9.444444444444445},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":89},"windSpeed":"3 mph","windDirection":"SSW","icon":"https://api.weather.gov/icons/land/night/few?size=medium","shortForecast":"Mostly Clear","detailedForecast":"Mostly clear. Low around 14, with temperatures rising to around 16 overnight. South southwest wind around 3 mph."},{"number":2,"name":"Saturday","startTime":"2024-01-06T06:00:00-07:00","endTime":"2024-01-06T18:00:00-07:00","isDaytime":true,"temperature":31,"temperatureUnit":"F","temperatureTrend":"falling","probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":100},"dewpoint":{"unitCode":"wmoUnit:degC","value":-5.555555555555555},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":84},"windSpeed":"3 to 14 mph","windDirection":"SSW","icon":"https://api.weather.gov/icons/land/day/snow,20/snow,100?size=medium","shortForecast":"Light Snow","detailedForecast":"Snow after 11am. Partly sunny. High near 31, with temperatures falling to around 29 in the afternoon. South southwest wind 3 to 14 mph, with gusts as high as 22 mph. Chance of precipitation is 100%. New snow accumulation of around one inch possible."},{"number":3,"name":"Saturday Night","startTime":"2024-01-06T18:00:00-07:00","endTime":"2024-01-07T06:00:00-07:00","isDaytime":false,"temperature":17,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":100},"dewpoint":{"unitCode":"wmoUnit:degC","value":-5.555555555555555},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":89},"windSpeed":"8 to 13 mph","windDirection":"SW","icon":"https://api.weather.gov/icons/land/night/snow,100/snow,60?size=medium","shortForecast":"Light Snow","detailedForecast":"Snow. Mostly cloudy, with a low around 17. Southwest wind 8 to 13 mph, with gusts as high as 21 mph. Chance of precipitation is 100%. New snow accumulation of 1 to 3 inches possible."},{"number":4,"name":"Sunday","startTime":"2024-01-07T06:00:00-07:00","endTime":"2024-01-07T18:00:00-07:00","isDaytime":true,"temperature":27,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":60},"dewpoint":{"unitCode":"wmoUnit:degC","value":-7.777777777777778},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":90},"windSpeed":"9 to 20 mph","windDirection":"NW","icon":"https://api.weather.gov/icons/land/day/blizzard,60/blizzard,40?size=medium","shortForecast":"Chance Light Snow And Patchy Blowing Snow","detailedForecast":"Snow likely before 11am, then a chance of snow and patchy blowing snow. Mostly cloudy, with a high near 27. Northwest wind 9 to 20 mph, with gusts as high as 28 mph. Chance of precipitation is 60%. New snow accumulation of 1 to 2 inches possible."},{"number":5,"name":"Sunday Night","startTime":"2024-01-07T18:00:00-07:00","endTime":"2024-01-08T06:00:00-07:00","isDaytime":false,"temperature":10,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":20},"dewpoint":{"unitCode":"wmoUnit:degC","value":-8.88888888888889},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":97},"windSpeed":"3 to 14 mph","windDirection":"WNW","icon":"https://api.weather.gov/icons/land/night/snow,20?size=medium","shortForecast":"Slight Chance Light Snow","detailedForecast":"A slight chance of snow before 5am. Mostly cloudy, with a low around 10. West northwest wind 3 to 14 mph, with gusts as high as 22 mph. Chance of precipitation is 20%. New snow accumulation of less than half an inch possible."},{"number":6,"name":"Monday","startTime":"2024-01-08T06:00:00-07:00","endTime":"2024-01-08T18:00:00-07:00","isDaytime":true,"temperature":26,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":-10},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":100},"windSpeed":"2 to 8 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/day/sct?size=medium","shortForecast":"Mostly Sunny","detailedForecast":"Mostly sunny, with a high near 26."},{"number":7,"name":"Monday Night","startTime":"2024-01-08T18:00:00-07:00","endTime":"2024-01-09T06:00:00-07:00","isDaytime":false,"temperature":11,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":70},"dewpoint":{"unitCode":"wmoUnit:degC","value":-9.444444444444445},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":94},"windSpeed":"7 to 10 mph","windDirection":"SSW","icon":"https://api.weather.gov/icons/land/night/snow,40/snow,70?size=medium","shortForecast":"Light Snow Likely","detailedForecast":"Snow likely after 11pm. Mostly cloudy, with a low around 11. Chance of precipitation is 70%. New snow accumulation of around one inch possible."},{"number":8,"name":"Tuesday","startTime":"2024-01-09T06:00:00-07:00","endTime":"2024-01-09T18:00:00-07:00","isDaytime":true,"temperature":36,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":70},"dewpoint":{"unitCode":"wmoUnit:degC","value":-2.2222222222222223},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":97},"windSpeed":"10 to 21 mph","windDirection":"SW","icon":"https://api.weather.gov/icons/land/day/snow,70?size=medium","shortForecast":"Light Snow Likely","detailedForecast":"Snow likely. Mostly cloudy, with a high near 36. Chance of precipitation is 70%. New snow accumulation of 1 to 3 inches possible."},{"number":9,"name":"Tuesday Night","startTime":"2024-01-09T18:00:00-07:00","endTime":"2024-01-10T06:00:00-07:00","isDaytime":false,"temperature":13,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":70},"dewpoint":{"unitCode":"wmoUnit:degC","value":-5},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":93},"windSpeed":"14 to 21 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/night/snow,70?size=medium","shortForecast":"Light Snow Likely","detailedForecast":"Snow likely. Mostly cloudy, with a low around 13. Chance of precipitation is 70%. New snow accumulation of 1 to 3 inches possible."},{"number":10,"name":"Wednesday","startTime":"2024-01-10T06:00:00-07:00","endTime":"2024-01-10T18:00:00-07:00","isDaytime":true,"temperature":29,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":70},"dewpoint":{"unitCode":"wmoUnit:degC","value":-6.666666666666667},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":91},"windSpeed":"14 to 17 mph","windDirection":"WSW","icon":"https://api.weather.gov/icons/land/day/snow,70?size=medium","shortForecast":"Light Snow Likely","detailedForecast":"Snow likely. Mostly cloudy, with a high near 29. Chance of precipitation is 70%. New snow accumulation of 1 to 3 inches possible."},{"number":11,"name":"Wednesday Night","startTime":"2024-01-10T18:00:00-07:00","endTime":"2024-01-11T06:00:00-07:00","isDaytime":false,"temperature":11,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":50},"dewpoint":{"unitCode":"wmoUnit:degC","value":-7.222222222222222},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":94},"windSpeed":"12 to 15 mph","windDirection":"WSW","icon":"https://api.weather.gov/icons/land/night/snow,50?size=medium","shortForecast":"Chance Light Snow","detailedForecast":"A chance of snow. Mostly cloudy, with a low around 11. Chance of precipitation is 50%. New snow accumulation of less than one inch possible."},{"number":12,"name":"Thursday","startTime":"2024-01-11T06:00:00-07:00","endTime":"2024-01-11T18:00:00-07:00","isDaytime":true,"temperature":25,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":40},"dewpoint":{"unitCode":"wmoUnit:degC","value":-8.88888888888889},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":97},"windSpeed":"12 to 15 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/day/snow,40?size=medium","shortForecast":"Chance Light Snow","detailedForecast":"A chance of snow. Partly sunny, with a high near 25. Chance of precipitation is 40%."},{"number":13,"name":"Thursday Night","startTime":"2024-01-11T18:00:00-07:00","endTime":"2024-01-12T06:00:00-07:00","isDaytime":false,"temperature":7,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":60},"dewpoint":{"unitCode":"wmoUnit:degC","value":-10},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":95},"windSpeed":"12 mph","windDirection":"SW","icon":"https://api.weather.gov/icons/land/night/snow,50/snow,60?size=medium","shortForecast":"Light Snow Likely","detailedForecast":"Snow likely. Mostly cloudy, with a low around 7. Chance of precipitation is 60%. New snow accumulation of less than one inch possible."},{"number":14,"name":"Friday","startTime":"2024-01-12T06:00:00-07:00","endTime":"2024-01-12T18:00:00-07:00","isDaytime":true,"temperature":25,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":60},"dewpoint":{"unitCode":"wmoUnit:degC","value":-7.777777777777778},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":97},"windSpeed":"12 to 15 mph","windDirection":"SSW","icon":"https://api.weather.gov/icons/land/day/snow,60/snow,50?size=medium","shortForecast":"Light Snow Likely","detailedForecast":"Snow likely. Mostly cloudy, with a high near 25. Chance of precipitation is 60%. New snow accumulation of 1 to 2 inches possible."}]}
  var hourly_PIH_50_16 = false
  var crags_config = [
  {
    "name": "City of Rocks",
    "note": "Varnished and pocketed granite",
    "mountainProject": "https://www.mountainproject.com/area/105739322/city-of-rocks",
    "station": "RCKI1",
    "office": "PIH/50,16",
    "coordinates": [
      -113.7215,
      42.0760
    ]
  }
]</script>

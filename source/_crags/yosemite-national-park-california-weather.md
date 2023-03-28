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
  var weekly_HNX_66_143 = {"updated":"2023-03-28T07:57:36+00:00","units":"us","forecastGenerator":"BaselineForecastGenerator","generatedAt":"2023-03-28T08:34:33+00:00","updateTime":"2023-03-28T07:57:36+00:00","validTimes":"2023-03-28T01:00:00+00:00/P7D","elevation":{"unitCode":"wmoUnit:m","value":2130.8568},"periods":[{"number":1,"name":"Overnight","startTime":"2023-03-28T01:00:00-07:00","endTime":"2023-03-28T06:00:00-07:00","isDaytime":false,"temperature":26,"temperatureUnit":"F","temperatureTrend":"rising","probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":-12.777777777777779},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":42},"windSpeed":"5 to 10 mph","windDirection":"E","icon":"https://api.weather.gov/icons/land/night/cold?size=medium","shortForecast":"Mostly Cloudy","detailedForecast":"Mostly cloudy. Low around 26, with temperatures rising to around 29 overnight. Wind chill values as low as 20. East wind 5 to 10 mph."},{"number":2,"name":"Tuesday","startTime":"2023-03-28T06:00:00-07:00","endTime":"2023-03-28T18:00:00-07:00","isDaytime":true,"temperature":38,"temperatureUnit":"F","temperatureTrend":"falling","probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":100},"dewpoint":{"unitCode":"wmoUnit:degC","value":-3.888888888888889},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":75},"windSpeed":"10 to 20 mph","windDirection":"S","icon":"https://api.weather.gov/icons/land/day/snow,20/snow,100?size=medium","shortForecast":"Heavy Snow","detailedForecast":"Snow after 11am. Cloudy. High near 38, with temperatures falling to around 32 in the afternoon. Wind chill values as low as 20. South wind 10 to 20 mph, with gusts as high as 30 mph. Chance of precipitation is 100%. New snow accumulation of 14 to 20 inches possible."},{"number":3,"name":"Tuesday Night","startTime":"2023-03-28T18:00:00-07:00","endTime":"2023-03-29T06:00:00-07:00","isDaytime":false,"temperature":23,"temperatureUnit":"F","temperatureTrend":"rising","probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":100},"dewpoint":{"unitCode":"wmoUnit:degC","value":-2.7777777777777777},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":81},"windSpeed":"10 to 25 mph","windDirection":"SSW","icon":"https://api.weather.gov/icons/land/night/snow,100/snow,80?size=medium","shortForecast":"Heavy Snow","detailedForecast":"Snow. Cloudy. Low around 23, with temperatures rising to around 25 overnight. Wind chill values as low as 14. South southwest wind 10 to 25 mph, with gusts as high as 35 mph. Chance of precipitation is 100%. New snow accumulation of 18 to 24 inches possible."},{"number":4,"name":"Wednesday","startTime":"2023-03-29T06:00:00-07:00","endTime":"2023-03-29T18:00:00-07:00","isDaytime":true,"temperature":33,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":70},"dewpoint":{"unitCode":"wmoUnit:degC","value":-5.555555555555555},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":69},"windSpeed":"5 to 15 mph","windDirection":"SSW","icon":"https://api.weather.gov/icons/land/day/snow,70?size=medium","shortForecast":"Snow Likely","detailedForecast":"Snow likely. Mostly cloudy, with a high near 33. Wind chill values as low as 14. South southwest wind 5 to 15 mph. Chance of precipitation is 70%. New snow accumulation of 3 to 5 inches possible."},{"number":5,"name":"Wednesday Night","startTime":"2023-03-29T18:00:00-07:00","endTime":"2023-03-30T06:00:00-07:00","isDaytime":false,"temperature":21,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":70},"dewpoint":{"unitCode":"wmoUnit:degC","value":-6.666666666666667},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":69},"windSpeed":"5 to 15 mph","windDirection":"SW","icon":"https://api.weather.gov/icons/land/night/snow,70/snow,40?size=medium","shortForecast":"Snow Likely","detailedForecast":"Snow likely. Mostly cloudy, with a low around 21. Southwest wind 5 to 15 mph. Chance of precipitation is 70%. New snow accumulation of 2 to 4 inches possible."},{"number":6,"name":"Thursday","startTime":"2023-03-30T06:00:00-07:00","endTime":"2023-03-30T18:00:00-07:00","isDaytime":true,"temperature":34,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":40},"dewpoint":{"unitCode":"wmoUnit:degC","value":-3.888888888888889},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":75},"windSpeed":"5 to 10 mph","windDirection":"NW","icon":"https://api.weather.gov/icons/land/day/snow,40?size=medium","shortForecast":"Chance Light Snow","detailedForecast":"A chance of snow before 5pm. Partly sunny, with a high near 34. Northwest wind 5 to 10 mph, with gusts as high as 20 mph. Chance of precipitation is 40%. New snow accumulation of less than one inch possible."},{"number":7,"name":"Thursday Night","startTime":"2023-03-30T18:00:00-07:00","endTime":"2023-03-31T06:00:00-07:00","isDaytime":false,"temperature":19,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":-5},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":72},"windSpeed":"10 mph","windDirection":"SSE","icon":"https://api.weather.gov/icons/land/night/cold?size=medium","shortForecast":"Partly Cloudy","detailedForecast":"Partly cloudy, with a low around 19. South southeast wind around 10 mph."},{"number":8,"name":"Friday","startTime":"2023-03-31T06:00:00-07:00","endTime":"2023-03-31T18:00:00-07:00","isDaytime":true,"temperature":38,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":-3.3333333333333335},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":67},"windSpeed":"10 mph","windDirection":"SSW","icon":"https://api.weather.gov/icons/land/day/sct?size=medium","shortForecast":"Mostly Sunny","detailedForecast":"Mostly sunny, with a high near 38. South southwest wind around 10 mph, with gusts as high as 20 mph."},{"number":9,"name":"Friday Night","startTime":"2023-03-31T18:00:00-07:00","endTime":"2023-04-01T06:00:00-07:00","isDaytime":false,"temperature":25,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":-3.888888888888889},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":66},"windSpeed":"10 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/night/cold?size=medium","shortForecast":"Partly Cloudy","detailedForecast":"Partly cloudy, with a low around 25. West wind around 10 mph, with gusts as high as 20 mph."},{"number":10,"name":"Saturday","startTime":"2023-04-01T06:00:00-07:00","endTime":"2023-04-01T18:00:00-07:00","isDaytime":true,"temperature":42,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":-1.6666666666666667},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":70},"windSpeed":"10 mph","windDirection":"NE","icon":"https://api.weather.gov/icons/land/day/sct?size=medium","shortForecast":"Mostly Sunny","detailedForecast":"Mostly sunny, with a high near 42. Northeast wind around 10 mph, with gusts as high as 20 mph."},{"number":11,"name":"Saturday Night","startTime":"2023-04-01T18:00:00-07:00","endTime":"2023-04-02T06:00:00-07:00","isDaytime":false,"temperature":28,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":-2.2222222222222223},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":70},"windSpeed":"10 mph","windDirection":"SE","icon":"https://api.weather.gov/icons/land/night/cold?size=medium","shortForecast":"Partly Cloudy","detailedForecast":"Partly cloudy, with a low around 28. Southeast wind around 10 mph, with gusts as high as 20 mph."},{"number":12,"name":"Sunday","startTime":"2023-04-02T06:00:00-07:00","endTime":"2023-04-02T18:00:00-07:00","isDaytime":true,"temperature":41,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":40},"dewpoint":{"unitCode":"wmoUnit:degC","value":-1.1111111111111112},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":70},"windSpeed":"10 to 15 mph","windDirection":"SSW","icon":"https://api.weather.gov/icons/land/day/snow,20/snow,40?size=medium","shortForecast":"Chance Light Snow","detailedForecast":"A chance of snow after 11am. Mostly sunny, with a high near 41. South southwest wind 10 to 15 mph. Chance of precipitation is 40%. New snow accumulation of less than half an inch possible."},{"number":13,"name":"Sunday Night","startTime":"2023-04-02T18:00:00-07:00","endTime":"2023-04-03T06:00:00-07:00","isDaytime":false,"temperature":26,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":40},"dewpoint":{"unitCode":"wmoUnit:degC","value":-2.2222222222222223},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":72},"windSpeed":"10 to 15 mph","windDirection":"SSW","icon":"https://api.weather.gov/icons/land/night/snow,40?size=medium","shortForecast":"Chance Light Snow","detailedForecast":"A chance of snow. Mostly cloudy, with a low around 26. South southwest wind 10 to 15 mph. Chance of precipitation is 40%. New snow accumulation of around one inch possible."},{"number":14,"name":"Monday","startTime":"2023-04-03T06:00:00-07:00","endTime":"2023-04-03T18:00:00-07:00","isDaytime":true,"temperature":36,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":40},"dewpoint":{"unitCode":"wmoUnit:degC","value":-5},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":66},"windSpeed":"10 to 15 mph","windDirection":"SW","icon":"https://api.weather.gov/icons/land/day/snow,40?size=medium","shortForecast":"Chance Snow","detailedForecast":"A chance of snow. Partly sunny, with a high near 36. Southwest wind 10 to 15 mph, with gusts as high as 25 mph. Chance of precipitation is 40%. New snow accumulation of 2 to 4 inches possible."}]}
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

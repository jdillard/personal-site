---
### THIS FILE IS AUTO-GENERATED - DO NOT EDIT ###
layout: page
title: Mammoth Lakes, California Climbing Weather - Current, Past, and Forecasted
title_override: Mammoth Lakes<br /><small>Climbing Weather</small>
description: A lightweight weather report for Mammoth Lakes, California. Optimized for slow internet connections.
js_includes:
  - weather.js
---

<section class="measure center lh-copy f5-ns f6 ph2 mv4" style="text-align: justify;">
<strong>"Is it dry?"</strong>, an oft-repeated, age-old question. Here are real-time,
precipitation-focused reports of current, past, and forecasted climbing weather for Mammoth Lakes, California.
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
<section id="weather" data-crag="mammoth-lakes-california" class="mv4-ns mv3 ph2 center"></section>
<section id="nearby" class="tc lh-copy">
  <h3>Nearby Crags</h3>
<a class="nowrap no-underline fancy-link relative light-red mh3" href="/crags/joshua-tree-national-park-california-weather.html">Joshua Tree National Park</a>
<a class="nowrap no-underline fancy-link relative light-red mh3" href="/crags/yosemite-national-park-california-weather.html">Yosemite National Park</a>
<a class="nowrap no-underline fancy-link relative light-red mh3" href="/crags/bishop-california-weather.html">Bishop</a>
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
  var weekly_REV_58_16 = {"updated":"2023-03-20T22:48:29+00:00","units":"us","forecastGenerator":"BaselineForecastGenerator","generatedAt":"2023-03-21T07:55:53+00:00","updateTime":"2023-03-20T22:48:29+00:00","validTimes":"2023-03-20T16:00:00+00:00/P7DT12H","elevation":{"unitCode":"wmoUnit:m","value":2784.9576},"periods":[{"number":1,"name":"Overnight","startTime":"2023-03-21T00:00:00-07:00","endTime":"2023-03-21T06:00:00-07:00","isDaytime":false,"temperature":19,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":70},"dewpoint":{"unitCode":"wmoUnit:degC","value":-9.444444444444445},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":78},"windSpeed":"5 to 10 mph","windDirection":"S","icon":"https://api.weather.gov/icons/land/night/snow,70?size=medium","shortForecast":"Snow Showers Likely","detailedForecast":"Snow showers likely after 2am. Cloudy, with a low around 19. South wind 5 to 10 mph. Chance of precipitation is 70%. New snow accumulation of 4 to 8 inches possible."},{"number":2,"name":"Tuesday","startTime":"2023-03-21T06:00:00-07:00","endTime":"2023-03-21T18:00:00-07:00","isDaytime":true,"temperature":26,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":100},"dewpoint":{"unitCode":"wmoUnit:degC","value":-6.111111111111111},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":85},"windSpeed":"5 to 40 mph","windDirection":"SE","icon":"https://api.weather.gov/icons/land/day/snow,100?size=medium","shortForecast":"Snow Showers","detailedForecast":"Snow showers before 11am, then snow showers and a slight chance of thunderstorms. Cloudy, with a high near 26. Southeast wind 5 to 40 mph, with gusts as high as 65 mph. Chance of precipitation is 100%. New snow accumulation of 20 to 26 inches possible."},{"number":3,"name":"Tuesday Night","startTime":"2023-03-21T18:00:00-07:00","endTime":"2023-03-22T06:00:00-07:00","isDaytime":false,"temperature":14,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":80},"dewpoint":{"unitCode":"wmoUnit:degC","value":-10.555555555555555},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":78},"windSpeed":"15 to 30 mph","windDirection":"SW","icon":"https://api.weather.gov/icons/land/night/snow,80/snow,50?size=medium","shortForecast":"Snow Showers","detailedForecast":"Snow showers and a slight chance of thunderstorms. Mostly cloudy, with a low around 14. Southwest wind 15 to 30 mph, with gusts as high as 50 mph. Chance of precipitation is 80%. New snow accumulation of 7 to 11 inches possible."},{"number":4,"name":"Wednesday","startTime":"2023-03-22T06:00:00-07:00","endTime":"2023-03-22T18:00:00-07:00","isDaytime":true,"temperature":24,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":70},"dewpoint":{"unitCode":"wmoUnit:degC","value":-9.444444444444445},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":77},"windSpeed":"15 to 30 mph","windDirection":"SW","icon":"https://api.weather.gov/icons/land/day/snow,70?size=medium","shortForecast":"Snow Showers Likely","detailedForecast":"Snow showers likely. Mostly cloudy, with a high near 24. Southwest wind 15 to 30 mph, with gusts as high as 50 mph. Chance of precipitation is 70%. New snow accumulation of 1 to 3 inches possible."},{"number":5,"name":"Wednesday Night","startTime":"2023-03-22T18:00:00-07:00","endTime":"2023-03-23T06:00:00-07:00","isDaytime":false,"temperature":12,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":30},"dewpoint":{"unitCode":"wmoUnit:degC","value":-10},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":76},"windSpeed":"10 to 15 mph","windDirection":"SW","icon":"https://api.weather.gov/icons/land/night/snow,30/bkn?size=medium","shortForecast":"Chance Snow Showers then Mostly Cloudy","detailedForecast":"A chance of snow showers before 11pm. Mostly cloudy, with a low around 12. Southwest wind 10 to 15 mph. Chance of precipitation is 30%. New snow accumulation of less than one inch possible."},{"number":6,"name":"Thursday","startTime":"2023-03-23T06:00:00-07:00","endTime":"2023-03-23T18:00:00-07:00","isDaytime":true,"temperature":25,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":20},"dewpoint":{"unitCode":"wmoUnit:degC","value":-8.88888888888889},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":76},"windSpeed":"15 to 20 mph","windDirection":"SW","icon":"https://api.weather.gov/icons/land/day/snow,20?size=medium","shortForecast":"Slight Chance Snow Showers","detailedForecast":"A slight chance of snow showers between 11am and 5pm. Partly sunny, with a high near 25. Southwest wind 15 to 20 mph, with gusts as high as 35 mph. Chance of precipitation is 20%."},{"number":7,"name":"Thursday Night","startTime":"2023-03-23T18:00:00-07:00","endTime":"2023-03-24T06:00:00-07:00","isDaytime":false,"temperature":11,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":-10},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":71},"windSpeed":"15 to 20 mph","windDirection":"SW","icon":"https://api.weather.gov/icons/land/night/sct?size=medium","shortForecast":"Partly Cloudy","detailedForecast":"Partly cloudy, with a low around 11."},{"number":8,"name":"Friday","startTime":"2023-03-24T06:00:00-07:00","endTime":"2023-03-24T18:00:00-07:00","isDaytime":true,"temperature":25,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":-11.11111111111111},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":65},"windSpeed":"15 mph","windDirection":"SW","icon":"https://api.weather.gov/icons/land/day/sct/snow?size=medium","shortForecast":"Mostly Sunny then Slight Chance Snow Showers","detailedForecast":"A slight chance of snow showers after 5pm. Mostly sunny, with a high near 25."},{"number":9,"name":"Friday Night","startTime":"2023-03-24T18:00:00-07:00","endTime":"2023-03-25T06:00:00-07:00","isDaytime":false,"temperature":8,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":-11.666666666666666},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":67},"windSpeed":"15 mph","windDirection":"SW","icon":"https://api.weather.gov/icons/land/night/snow?size=medium","shortForecast":"Slight Chance Snow Showers","detailedForecast":"A slight chance of snow showers. Mostly cloudy, with a low around 8."},{"number":10,"name":"Saturday","startTime":"2023-03-25T06:00:00-07:00","endTime":"2023-03-25T18:00:00-07:00","isDaytime":true,"temperature":20,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":-13.88888888888889},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":65},"windSpeed":"10 to 15 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/day/snow?size=medium","shortForecast":"Chance Snow Showers","detailedForecast":"A chance of snow showers. Partly sunny, with a high near 20. New snow accumulation of 1 to 2 inches possible."},{"number":11,"name":"Saturday Night","startTime":"2023-03-25T18:00:00-07:00","endTime":"2023-03-26T06:00:00-07:00","isDaytime":false,"temperature":5,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":-13.88888888888889},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":68},"windSpeed":"15 mph","windDirection":"SW","icon":"https://api.weather.gov/icons/land/night/snow/bkn?size=medium","shortForecast":"Chance Snow Showers then Mostly Cloudy","detailedForecast":"A chance of snow showers before 11pm. Mostly cloudy, with a low around 5. New snow accumulation of less than one inch possible."},{"number":12,"name":"Sunday","startTime":"2023-03-26T06:00:00-07:00","endTime":"2023-03-26T18:00:00-07:00","isDaytime":true,"temperature":22,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":-13.333333333333334},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":65},"windSpeed":"15 mph","windDirection":"SW","icon":"https://api.weather.gov/icons/land/day/snow?size=medium","shortForecast":"Chance Snow Showers","detailedForecast":"A chance of snow showers after 11am. Mostly sunny, with a high near 22."},{"number":13,"name":"Sunday Night","startTime":"2023-03-26T18:00:00-07:00","endTime":"2023-03-27T06:00:00-07:00","isDaytime":false,"temperature":10,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":-13.88888888888889},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":66},"windSpeed":"15 mph","windDirection":"SW","icon":"https://api.weather.gov/icons/land/night/snow?size=medium","shortForecast":"Chance Snow Showers","detailedForecast":"A chance of snow showers. Mostly cloudy, with a low around 10."},{"number":14,"name":"Monday","startTime":"2023-03-27T06:00:00-07:00","endTime":"2023-03-27T18:00:00-07:00","isDaytime":true,"temperature":24,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":-11.11111111111111},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":63},"windSpeed":"15 to 20 mph","windDirection":"SW","icon":"https://api.weather.gov/icons/land/day/snow?size=medium","shortForecast":"Chance Snow Showers","detailedForecast":"A chance of snow showers. Partly sunny, with a high near 24. New snow accumulation of 1 to 3 inches possible."}]}
  var hourly_REV_58_16 = false
  var crags_config = [
  {
    "name": "Mammoth Lakes",
    "note": "Volcanic tuff to perfect granite.",
    "mountainProject": "https://www.mountainproject.com/area/106064821/mammoth-lakes-area",
    "station": "C2998",
    "office": "REV/58,16",
    "coordinates": [
      -118.967,
      37.647
    ]
  }
]</script>

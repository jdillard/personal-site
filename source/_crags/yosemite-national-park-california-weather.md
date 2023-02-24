---
### THIS FILE IS AUTO-GENERATED - DO NOT EDIT ###
layout: page
title: Yosemite National Park, California Climbing Weather - Current, Past, and Forecasted Report
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
  var weekly_HNX_66_143 = {"updated":"2023-02-24T07:57:01+00:00","units":"us","forecastGenerator":"BaselineForecastGenerator","generatedAt":"2023-02-24T08:35:24+00:00","updateTime":"2023-02-24T07:57:01+00:00","validTimes":"2023-02-24T01:00:00+00:00/P6D","elevation":{"unitCode":"wmoUnit:m","value":2167.128},"periods":[{"number":1,"name":"Overnight","startTime":"2023-02-24T00:00:00-08:00","endTime":"2023-02-24T06:00:00-08:00","isDaytime":false,"temperature":15,"temperatureUnit":"F","temperatureTrend":"rising","probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":100},"dewpoint":{"unitCode":"wmoUnit:degC","value":-15},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":74},"windSpeed":"20 to 25 mph","windDirection":"S","icon":"https://api.weather.gov/icons/land/night/snow,100?size=medium","shortForecast":"Heavy Snow","detailedForecast":"Snow. Cloudy. Low around 15, with temperatures rising to around 18 overnight. Wind chill values as low as 0. South wind 20 to 25 mph, with gusts as high as 40 mph. Chance of precipitation is 100%. New snow accumulation of 18 to 24 inches possible."},{"number":2,"name":"Friday","startTime":"2023-02-24T06:00:00-08:00","endTime":"2023-02-24T18:00:00-08:00","isDaytime":true,"temperature":24,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":100},"dewpoint":{"unitCode":"wmoUnit:degC","value":-6.666666666666667},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":84},"windSpeed":"10 to 25 mph","windDirection":"SSW","icon":"https://api.weather.gov/icons/land/day/snow,100/snow,90?size=medium","shortForecast":"Heavy Snow","detailedForecast":"Snow. Cloudy, with a high near 24. Wind chill values as low as 1. South southwest wind 10 to 25 mph, with gusts as high as 40 mph. Chance of precipitation is 100%. New snow accumulation of 26 to 32 inches possible."},{"number":3,"name":"Friday Night","startTime":"2023-02-24T18:00:00-08:00","endTime":"2023-02-25T06:00:00-08:00","isDaytime":false,"temperature":21,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":90},"dewpoint":{"unitCode":"wmoUnit:degC","value":-9.444444444444445},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":77},"windSpeed":"5 mph","windDirection":"ESE","icon":"https://api.weather.gov/icons/land/night/snow,90/snow,80?size=medium","shortForecast":"Heavy Snow","detailedForecast":"Snow. Mostly cloudy, with a low around 21. Wind chill values as low as 10. East southeast wind around 5 mph. Chance of precipitation is 90%. New snow accumulation of 10 to 14 inches possible."},{"number":4,"name":"Saturday","startTime":"2023-02-25T06:00:00-08:00","endTime":"2023-02-25T18:00:00-08:00","isDaytime":true,"temperature":27,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":70},"dewpoint":{"unitCode":"wmoUnit:degC","value":-5.555555555555555},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":84},"windSpeed":"5 mph","windDirection":"WSW","icon":"https://api.weather.gov/icons/land/day/snow,70/snow,60?size=medium","shortForecast":"Snow Likely","detailedForecast":"Snow likely. Mostly cloudy, with a high near 27. Wind chill values as low as 10. West southwest wind around 5 mph. Chance of precipitation is 70%. New snow accumulation of 5 to 9 inches possible."},{"number":5,"name":"Saturday Night","startTime":"2023-02-25T18:00:00-08:00","endTime":"2023-02-26T06:00:00-08:00","isDaytime":false,"temperature":16,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":40},"dewpoint":{"unitCode":"wmoUnit:degC","value":-9.444444444444445},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":71},"windSpeed":"5 mph","windDirection":"WSW","icon":"https://api.weather.gov/icons/land/night/snow,40/snow,20?size=medium","shortForecast":"Chance Light Snow","detailedForecast":"A chance of snow before 4am. Mostly cloudy, with a low around 16. West southwest wind around 5 mph. Chance of precipitation is 40%. New snow accumulation of 1 to 3 inches possible."},{"number":6,"name":"Sunday","startTime":"2023-02-26T06:00:00-08:00","endTime":"2023-02-26T18:00:00-08:00","isDaytime":true,"temperature":27,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":40},"dewpoint":{"unitCode":"wmoUnit:degC","value":-5.555555555555555},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":88},"windSpeed":"5 to 10 mph","windDirection":"SW","icon":"https://api.weather.gov/icons/land/day/snow,20/snow,40?size=medium","shortForecast":"Chance Snow","detailedForecast":"A chance of snow after 10am. Partly sunny, with a high near 27. Southwest wind 5 to 10 mph, with gusts as high as 20 mph. Chance of precipitation is 40%. New snow accumulation of 2 to 4 inches possible."},{"number":7,"name":"Sunday Night","startTime":"2023-02-26T18:00:00-08:00","endTime":"2023-02-27T06:00:00-08:00","isDaytime":false,"temperature":21,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":40},"dewpoint":{"unitCode":"wmoUnit:degC","value":-9.444444444444445},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":71},"windSpeed":"10 mph","windDirection":"SSW","icon":"https://api.weather.gov/icons/land/night/snow,40?size=medium","shortForecast":"Chance Snow","detailedForecast":"A chance of snow. Mostly cloudy, with a low around 21. South southwest wind around 10 mph, with gusts as high as 20 mph. Chance of precipitation is 40%. New snow accumulation of 5 to 9 inches possible."},{"number":8,"name":"Monday","startTime":"2023-02-27T06:00:00-08:00","endTime":"2023-02-27T18:00:00-08:00","isDaytime":true,"temperature":26,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":90},"dewpoint":{"unitCode":"wmoUnit:degC","value":-5},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":81},"windSpeed":"10 to 20 mph","windDirection":"SSW","icon":"https://api.weather.gov/icons/land/day/snow,70/snow,90?size=medium","shortForecast":"Heavy Snow","detailedForecast":"Snow. Mostly cloudy, with a high near 26. South southwest wind 10 to 20 mph, with gusts as high as 30 mph. Chance of precipitation is 90%. New snow accumulation of 15 to 21 inches possible."},{"number":9,"name":"Monday Night","startTime":"2023-02-27T18:00:00-08:00","endTime":"2023-02-28T06:00:00-08:00","isDaytime":false,"temperature":18,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":90},"dewpoint":{"unitCode":"wmoUnit:degC","value":-8.88888888888889},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":74},"windSpeed":"20 mph","windDirection":"SW","icon":"https://api.weather.gov/icons/land/night/snow,90?size=medium","shortForecast":"Heavy Snow","detailedForecast":"Snow. Cloudy, with a low around 18. Southwest wind around 20 mph, with gusts as high as 30 mph. Chance of precipitation is 90%. New snow accumulation of 18 to 24 inches possible."},{"number":10,"name":"Tuesday","startTime":"2023-02-28T06:00:00-08:00","endTime":"2023-02-28T18:00:00-08:00","isDaytime":true,"temperature":23,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":90},"dewpoint":{"unitCode":"wmoUnit:degC","value":-7.222222222222222},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":81},"windSpeed":"15 to 20 mph","windDirection":"SW","icon":"https://api.weather.gov/icons/land/day/snow,90?size=medium","shortForecast":"Heavy Snow","detailedForecast":"Snow. Cloudy, with a high near 23. Southwest wind 15 to 20 mph, with gusts as high as 30 mph. Chance of precipitation is 90%. New snow accumulation of 12 to 18 inches possible."},{"number":11,"name":"Tuesday Night","startTime":"2023-02-28T18:00:00-08:00","endTime":"2023-03-01T06:00:00-08:00","isDaytime":false,"temperature":16,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":80},"dewpoint":{"unitCode":"wmoUnit:degC","value":-10},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":68},"windSpeed":"10 to 15 mph","windDirection":"SW","icon":"https://api.weather.gov/icons/land/night/snow,80/snow,60?size=medium","shortForecast":"Heavy Snow","detailedForecast":"Snow. Mostly cloudy, with a low around 16. Southwest wind 10 to 15 mph, with gusts as high as 25 mph. Chance of precipitation is 80%. New snow accumulation of 8 to 12 inches possible."},{"number":12,"name":"Wednesday","startTime":"2023-03-01T06:00:00-08:00","endTime":"2023-03-01T18:00:00-08:00","isDaytime":true,"temperature":25,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":50},"dewpoint":{"unitCode":"wmoUnit:degC","value":-6.666666666666667},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":68},"windSpeed":"10 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/day/snow,50?size=medium","shortForecast":"Chance Snow","detailedForecast":"A chance of snow. Partly sunny, with a high near 25. West wind around 10 mph, with gusts as high as 20 mph. Chance of precipitation is 50%. New snow accumulation of 2 to 4 inches possible."},{"number":13,"name":"Wednesday Night","startTime":"2023-03-01T18:00:00-08:00","endTime":"2023-03-02T06:00:00-08:00","isDaytime":false,"temperature":13,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":30},"dewpoint":null,"relativeHumidity":{"unitCode":"wmoUnit:percent","value":59},"windSpeed":"10 mph","windDirection":"NNE","icon":"https://api.weather.gov/icons/land/night/snow,30/snow,20?size=medium","shortForecast":"Chance Light Snow","detailedForecast":"A chance of snow before 4am. Mostly cloudy, with a low around 13. North northeast wind around 10 mph, with gusts as high as 20 mph. Chance of precipitation is 30%. New snow accumulation of less than half an inch possible."},{"number":14,"name":"Thursday","startTime":"2023-03-02T06:00:00-08:00","endTime":"2023-03-02T18:00:00-08:00","isDaytime":true,"temperature":33,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":null,"relativeHumidity":{"unitCode":"wmoUnit:percent","value":69},"windSpeed":"10 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/day/?size=medium","shortForecast":"","detailedForecast":"High near 33. West wind around 10 mph, with gusts as high as 20 mph."}]}
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

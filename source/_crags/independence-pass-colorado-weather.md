---
### THIS FILE IS AUTO-GENERATED - DO NOT EDIT ###
layout: page
title: Independence Pass, Colorado Climbing Weather - Current, Past, and Forecasted
title_override: Independence Pass<br /><small class="f2">Climbing Weather</small>
description: A lightweight weather report for Independence Pass, Colorado. Optimized for slow internet connections.
js_includes:
  - weather.js
---

<section class="measure center lh-copy f5-ns f6 ph2 mv4" style="text-align: justify;">
<strong>"Is it dry?"</strong>, an oft-repeated, age-old question. Here are real-time,
precipitation-focused reports of current, past, and forecasted climbing weather for Independence Pass, Colorado.
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
<section id="weather" data-crag="independence-pass-colorado" class="mv4-ns mv3 ph2 center"></section>
<section id="nearby" class="tc lh-copy">
  <h3>Nearby Crags</h3>
<a class="nowrap no-underline fancy-link relative light-red mh3" href="/crags/clear-creek-canyon-colorado-weather.html">Clear Creek Canyon</a>
<a class="nowrap no-underline fancy-link relative light-red mh3" href="/crags/staunton-state-park-colorado-weather.html">Staunton State Park</a>
<a class="nowrap no-underline fancy-link relative light-red mh3" href="/crags/lime-park-lime-creek-colorado-weather.html">Lime Park (Lime Creek)</a>
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
  var weekly_GJT_162_97 = {"units":"us","forecastGenerator":"BaselineForecastGenerator","generatedAt":"2025-11-29T08:44:32+00:00","updateTime":"2025-11-29T08:37:18+00:00","validTimes":"2025-11-29T02:00:00+00:00/P7DT23H","elevation":{"unitCode":"wmoUnit:m","value":3193.9992},"periods":[{"number":1,"name":"Overnight","startTime":"2025-11-29T01:00:00-07:00","endTime":"2025-11-29T06:00:00-07:00","isDaytime":false,"temperature":13,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":66},"windSpeed":"20 mph","windDirection":"WNW","icon":"https://api.weather.gov/icons/land/night/blizzard,70?size=medium","shortForecast":"Chance Snow Showers And Patchy Blowing Snow","detailedForecast":"A chance of snow showers and patchy blowing snow before 4am, then patchy blowing snow and scattered snow showers. Mostly cloudy, with a low around 13. West northwest wind around 20 mph, with gusts as high as 35 mph. Chance of precipitation is 70%. New snow accumulation of 2 to 4 inches possible."},{"number":2,"name":"Saturday","startTime":"2025-11-29T06:00:00-07:00","endTime":"2025-11-29T18:00:00-07:00","isDaytime":true,"temperature":23,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":28},"windSpeed":"10 to 20 mph","windDirection":"WNW","icon":"https://api.weather.gov/icons/land/day/snow,30/sct?size=medium","shortForecast":"Scattered Snow Showers then Mostly Sunny","detailedForecast":"Scattered snow showers before 8am. Mostly sunny, with a high near 23. West northwest wind 10 to 20 mph. Chance of precipitation is 30%. New snow accumulation of less than one inch possible."},{"number":3,"name":"Saturday Night","startTime":"2025-11-29T18:00:00-07:00","endTime":"2025-11-30T06:00:00-07:00","isDaytime":false,"temperature":11,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":33},"windSpeed":"5 mph","windDirection":"WSW","icon":"https://api.weather.gov/icons/land/night/bkn/snow,30?size=medium","shortForecast":"Mostly Cloudy then Chance Snow Showers","detailedForecast":"A chance of snow showers after 5am. Mostly cloudy, with a low around 11. West southwest wind around 5 mph. Chance of precipitation is 30%."},{"number":4,"name":"Sunday","startTime":"2025-11-30T06:00:00-07:00","endTime":"2025-11-30T18:00:00-07:00","isDaytime":true,"temperature":25,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":90},"windSpeed":"5 to 10 mph","windDirection":"SW","icon":"https://api.weather.gov/icons/land/day/snow,80/snow,90?size=medium","shortForecast":"Snow Showers","detailedForecast":"Snow showers. Cloudy, with a high near 25. Southwest wind 5 to 10 mph, with gusts as high as 25 mph. Chance of precipitation is 90%. New snow accumulation of 3 to 7 inches possible."},{"number":5,"name":"Sunday Night","startTime":"2025-11-30T18:00:00-07:00","endTime":"2025-12-01T06:00:00-07:00","isDaytime":false,"temperature":10,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":90},"windSpeed":"5 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/night/snow,90/snow,80?size=medium","shortForecast":"Snow Showers","detailedForecast":"Snow showers. Mostly cloudy, with a low around 10. West wind around 5 mph, with gusts as high as 20 mph. Chance of precipitation is 90%. New snow accumulation of 3 to 5 inches possible."},{"number":6,"name":"Monday","startTime":"2025-12-01T06:00:00-07:00","endTime":"2025-12-01T18:00:00-07:00","isDaytime":true,"temperature":19,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":24},"windSpeed":"5 to 10 mph","windDirection":"WNW","icon":"https://api.weather.gov/icons/land/day/snow,20/sct?size=medium","shortForecast":"Slight Chance Snow Showers then Mostly Sunny","detailedForecast":"A slight chance of snow showers before 11am. Mostly sunny, with a high near 19. Chance of precipitation is 20%. New snow accumulation of less than half an inch possible."},{"number":7,"name":"Monday Night","startTime":"2025-12-01T18:00:00-07:00","endTime":"2025-12-02T06:00:00-07:00","isDaytime":false,"temperature":2,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":5},"windSpeed":"5 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/night/cold?size=medium","shortForecast":"Mostly Clear","detailedForecast":"Mostly clear, with a low around 2."},{"number":8,"name":"Tuesday","startTime":"2025-12-02T06:00:00-07:00","endTime":"2025-12-02T18:00:00-07:00","isDaytime":true,"temperature":27,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":32},"windSpeed":"5 to 10 mph","windDirection":"WSW","icon":"https://api.weather.gov/icons/land/day/snow,20/snow,30?size=medium","shortForecast":"Chance Snow Showers","detailedForecast":"A chance of snow showers after 11am. Mostly sunny, with a high near 27."},{"number":9,"name":"Tuesday Night","startTime":"2025-12-02T18:00:00-07:00","endTime":"2025-12-03T06:00:00-07:00","isDaytime":false,"temperature":10,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":51},"windSpeed":"0 to 5 mph","windDirection":"WSW","icon":"https://api.weather.gov/icons/land/night/snow,40/snow,50?size=medium","shortForecast":"Chance Snow Showers","detailedForecast":"A chance of snow showers. Mostly cloudy, with a low around 10. New snow accumulation of less than half an inch possible."},{"number":10,"name":"Wednesday","startTime":"2025-12-03T06:00:00-07:00","endTime":"2025-12-03T18:00:00-07:00","isDaytime":true,"temperature":23,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":62},"windSpeed":"0 to 5 mph","windDirection":"SW","icon":"https://api.weather.gov/icons/land/day/snow,60?size=medium","shortForecast":"Snow Showers Likely","detailedForecast":"Snow showers likely. Mostly cloudy, with a high near 23. New snow accumulation of around one inch possible."},{"number":11,"name":"Wednesday Night","startTime":"2025-12-03T18:00:00-07:00","endTime":"2025-12-04T06:00:00-07:00","isDaytime":false,"temperature":8,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":35},"windSpeed":"5 mph","windDirection":"WSW","icon":"https://api.weather.gov/icons/land/night/snow,40/snow,20?size=medium","shortForecast":"Chance Snow Showers","detailedForecast":"A chance of snow showers. Mostly cloudy, with a low around 8. New snow accumulation of less than half an inch possible."},{"number":12,"name":"Thursday","startTime":"2025-12-04T06:00:00-07:00","endTime":"2025-12-04T18:00:00-07:00","isDaytime":true,"temperature":24,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":17},"windSpeed":"5 to 10 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/day/snow,20/bkn?size=medium","shortForecast":"Slight Chance Snow Showers then Partly Sunny","detailedForecast":"A slight chance of snow showers before 11am. Partly sunny, with a high near 24."},{"number":13,"name":"Thursday Night","startTime":"2025-12-04T18:00:00-07:00","endTime":"2025-12-05T06:00:00-07:00","isDaytime":false,"temperature":8,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":26},"windSpeed":"10 mph","windDirection":"WNW","icon":"https://api.weather.gov/icons/land/night/cold/snow,30?size=medium","shortForecast":"Partly Cloudy then Chance Snow Showers","detailedForecast":"A chance of snow showers after 5am. Partly cloudy, with a low around 8."},{"number":14,"name":"Friday","startTime":"2025-12-05T06:00:00-07:00","endTime":"2025-12-05T18:00:00-07:00","isDaytime":true,"temperature":25,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":26},"windSpeed":"10 mph","windDirection":"WNW","icon":"https://api.weather.gov/icons/land/day/snow,30/snow,20?size=medium","shortForecast":"Chance Snow Showers","detailedForecast":"A chance of snow showers before 5pm. Mostly sunny, with a high near 25."}]}
  var hourly_GJT_162_97 = false
  var crags_config = [
  {
    "name": "Independence Pass",
    "note": "Ultra-worthy granite.",
    "mountainProject": "https://www.mountainproject.com/area/105744331/independence-pass",
    "station": "IDPC2",
    "office": "GJT/162,97",
    "coordinates": [
      -106.704,
      39.119
    ]
  }
]</script>

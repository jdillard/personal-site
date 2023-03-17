---
### THIS FILE IS AUTO-GENERATED - DO NOT EDIT ###
layout: page
title: Independence Pass, Colorado Climbing Weather - Current, Past, and Forecasted
title_override: Independence Pass<br /><small>Climbing Weather</small>
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
  var weekly_GJT_162_97 = {"updated":"2023-03-17T07:23:29+00:00","units":"us","forecastGenerator":"BaselineForecastGenerator","generatedAt":"2023-03-17T08:34:10+00:00","updateTime":"2023-03-17T07:23:29+00:00","validTimes":"2023-03-17T01:00:00+00:00/P8D","elevation":{"unitCode":"wmoUnit:m","value":3193.9992},"periods":[{"number":1,"name":"Overnight","startTime":"2023-03-17T02:00:00-06:00","endTime":"2023-03-17T06:00:00-06:00","isDaytime":false,"temperature":-1,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":-18.88888888888889},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":90},"windSpeed":"5 mph","windDirection":"SSE","icon":"https://api.weather.gov/icons/land/night/cold?size=medium","shortForecast":"Mostly Cloudy","detailedForecast":"Mostly cloudy, with a low around -1. Wind chill values as low as -13. South southeast wind around 5 mph."},{"number":2,"name":"Friday","startTime":"2023-03-17T06:00:00-06:00","endTime":"2023-03-17T18:00:00-06:00","isDaytime":true,"temperature":22,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":30},"dewpoint":{"unitCode":"wmoUnit:degC","value":-11.11111111111111},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":89},"windSpeed":"5 to 10 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/day/snow,20/snow,30?size=medium","shortForecast":"Chance Snow Showers","detailedForecast":"A chance of snow showers after 11am. Partly sunny, with a high near 22. West wind 5 to 10 mph. Chance of precipitation is 30%. New snow accumulation of less than half an inch possible."},{"number":3,"name":"Friday Night","startTime":"2023-03-17T18:00:00-06:00","endTime":"2023-03-18T06:00:00-06:00","isDaytime":false,"temperature":-4,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":30},"dewpoint":{"unitCode":"wmoUnit:degC","value":-14.444444444444445},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":62},"windSpeed":"5 to 10 mph","windDirection":"E","icon":"https://api.weather.gov/icons/land/night/snow,30/cold?size=medium","shortForecast":"Chance Snow Showers then Partly Cloudy","detailedForecast":"A chance of snow showers before 11pm. Partly cloudy, with a low around -4. Wind chill values as low as -18. East wind 5 to 10 mph. Chance of precipitation is 30%."},{"number":4,"name":"Saturday","startTime":"2023-03-18T06:00:00-06:00","endTime":"2023-03-18T18:00:00-06:00","isDaytime":true,"temperature":21,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":20},"dewpoint":{"unitCode":"wmoUnit:degC","value":-17.22222222222222},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":47},"windSpeed":"5 to 10 mph","windDirection":"WNW","icon":"https://api.weather.gov/icons/land/day/few/snow,20?size=medium","shortForecast":"Sunny then Slight Chance Snow Showers","detailedForecast":"A slight chance of snow showers after noon. Sunny, with a high near 21. Wind chill values as low as -17. West northwest wind 5 to 10 mph. Chance of precipitation is 20%. New snow accumulation of less than half an inch possible."},{"number":5,"name":"Saturday Night","startTime":"2023-03-18T18:00:00-06:00","endTime":"2023-03-19T06:00:00-06:00","isDaytime":false,"temperature":-1,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":-17.77777777777778},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":63},"windSpeed":"5 to 10 mph","windDirection":"SW","icon":"https://api.weather.gov/icons/land/night/cold?size=medium","shortForecast":"Mostly Clear","detailedForecast":"Mostly clear, with a low around -1. Southwest wind 5 to 10 mph."},{"number":6,"name":"Sunday","startTime":"2023-03-19T06:00:00-06:00","endTime":"2023-03-19T18:00:00-06:00","isDaytime":true,"temperature":25,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":-13.333333333333334},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":62},"windSpeed":"5 to 10 mph","windDirection":"WSW","icon":"https://api.weather.gov/icons/land/day/sct?size=medium","shortForecast":"Mostly Sunny","detailedForecast":"Mostly sunny, with a high near 25."},{"number":7,"name":"Sunday Night","startTime":"2023-03-19T18:00:00-06:00","endTime":"2023-03-20T06:00:00-06:00","isDaytime":false,"temperature":6,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":-14.444444444444445},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":69},"windSpeed":"10 mph","windDirection":"WSW","icon":"https://api.weather.gov/icons/land/night/cold?size=medium","shortForecast":"Mostly Cloudy","detailedForecast":"Mostly cloudy, with a low around 6."},{"number":8,"name":"Monday","startTime":"2023-03-20T06:00:00-06:00","endTime":"2023-03-20T18:00:00-06:00","isDaytime":true,"temperature":27,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":-6.666666666666667},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":74},"windSpeed":"10 to 15 mph","windDirection":"WSW","icon":"https://api.weather.gov/icons/land/day/snow?size=medium","shortForecast":"Snow Showers Likely","detailedForecast":"Snow showers likely. Mostly cloudy, with a high near 27. New snow accumulation of less than one inch possible."},{"number":9,"name":"Monday Night","startTime":"2023-03-20T18:00:00-06:00","endTime":"2023-03-21T06:00:00-06:00","isDaytime":false,"temperature":16,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":-8.333333333333334},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":81},"windSpeed":"10 to 15 mph","windDirection":"SW","icon":"https://api.weather.gov/icons/land/night/snow?size=medium","shortForecast":"Snow Showers Likely","detailedForecast":"Snow showers likely. Cloudy, with a low around 16. New snow accumulation of 1 to 3 inches possible."},{"number":10,"name":"Tuesday","startTime":"2023-03-21T06:00:00-06:00","endTime":"2023-03-21T18:00:00-06:00","isDaytime":true,"temperature":30,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":-3.888888888888889},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":85},"windSpeed":"15 mph","windDirection":"SW","icon":"https://api.weather.gov/icons/land/day/snow/blizzard?size=medium","shortForecast":"Snow Showers","detailedForecast":"Snow showers before 5pm, then snow showers and patchy blowing snow. Cloudy, with a high near 30. New snow accumulation of 2 to 4 inches possible."},{"number":11,"name":"Tuesday Night","startTime":"2023-03-21T18:00:00-06:00","endTime":"2023-03-22T06:00:00-06:00","isDaytime":false,"temperature":18,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":-4.444444444444445},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":84},"windSpeed":"15 to 20 mph","windDirection":"SW","icon":"https://api.weather.gov/icons/land/night/blizzard?size=medium","shortForecast":"Snow Showers And Areas Of Blowing Snow","detailedForecast":"Snow showers and areas of blowing snow. Cloudy, with a low around 18. New snow accumulation of 5 to 9 inches possible."},{"number":12,"name":"Wednesday","startTime":"2023-03-22T06:00:00-06:00","endTime":"2023-03-22T18:00:00-06:00","isDaytime":true,"temperature":27,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":-7.777777777777778},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":81},"windSpeed":"20 to 25 mph","windDirection":"WSW","icon":"https://api.weather.gov/icons/land/day/blizzard?size=medium","shortForecast":"Snow Showers And Areas Of Blowing Snow","detailedForecast":"Snow showers and areas of blowing snow. Cloudy, with a high near 27. New snow accumulation of 3 to 5 inches possible."},{"number":13,"name":"Wednesday Night","startTime":"2023-03-22T18:00:00-06:00","endTime":"2023-03-23T06:00:00-06:00","isDaytime":false,"temperature":7,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":-10},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":82},"windSpeed":"15 to 25 mph","windDirection":"WSW","icon":"https://api.weather.gov/icons/land/night/blizzard?size=medium","shortForecast":"Snow Showers Likely And Areas Of Blowing Snow","detailedForecast":"Snow showers likely and areas of blowing snow. Mostly cloudy, with a low around 7. New snow accumulation of 1 to 3 inches possible."},{"number":14,"name":"Thursday","startTime":"2023-03-23T06:00:00-06:00","endTime":"2023-03-23T18:00:00-06:00","isDaytime":true,"temperature":21,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":-10.555555555555555},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":85},"windSpeed":"15 to 20 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/day/snow?size=medium","shortForecast":"Snow Showers","detailedForecast":"Snow showers. Mostly cloudy, with a high near 21. New snow accumulation of 1 to 3 inches possible."}]}
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

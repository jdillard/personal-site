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
  var weekly_GJT_162_97 = {"updated":"2024-03-13T05:27:29+00:00","units":"us","forecastGenerator":"BaselineForecastGenerator","generatedAt":"2024-03-13T08:31:56+00:00","updateTime":"2024-03-13T05:27:29+00:00","validTimes":"2024-03-12T23:00:00+00:00/P7DT2H","elevation":{"unitCode":"wmoUnit:m","value":3193.9992},"periods":[{"number":1,"name":"Overnight","startTime":"2024-03-13T02:00:00-06:00","endTime":"2024-03-13T06:00:00-06:00","isDaytime":false,"temperature":16,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":70},"dewpoint":{"unitCode":"wmoUnit:degC","value":-8.88888888888889},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":83},"windSpeed":"5 to 10 mph","windDirection":"WSW","icon":"https://api.weather.gov/icons/land/night/snow,70?size=medium","shortForecast":"Snow Showers Likely","detailedForecast":"Snow showers likely. Mostly cloudy, with a low around 16. West southwest wind 5 to 10 mph. Chance of precipitation is 70%. New snow accumulation of 1 to 2 inches possible."},{"number":2,"name":"Wednesday","startTime":"2024-03-13T06:00:00-06:00","endTime":"2024-03-13T18:00:00-06:00","isDaytime":true,"temperature":28,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":90},"dewpoint":{"unitCode":"wmoUnit:degC","value":-6.666666666666667},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":93},"windSpeed":"5 to 10 mph","windDirection":"WSW","icon":"https://api.weather.gov/icons/land/day/snow,50/snow,90?size=medium","shortForecast":"Snow Showers","detailedForecast":"A chance of snow showers before noon, then snow showers and a slight chance of thunderstorms. Mostly cloudy, with a high near 28. West southwest wind 5 to 10 mph. Chance of precipitation is 90%. New snow accumulation of 2 to 4 inches possible."},{"number":3,"name":"Wednesday Night","startTime":"2024-03-13T18:00:00-06:00","endTime":"2024-03-14T06:00:00-06:00","isDaytime":false,"temperature":14,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":80},"dewpoint":{"unitCode":"wmoUnit:degC","value":-7.777777777777778},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":92},"windSpeed":"5 to 10 mph","windDirection":"NNW","icon":"https://api.weather.gov/icons/land/night/snow,70/snow,80?size=medium","shortForecast":"Snow Showers","detailedForecast":"Snow showers and a slight chance of thunderstorms. Cloudy, with a low around 14. North northwest wind 5 to 10 mph. Chance of precipitation is 80%. New snow accumulation of 3 to 5 inches possible."},{"number":4,"name":"Thursday","startTime":"2024-03-14T06:00:00-06:00","endTime":"2024-03-14T18:00:00-06:00","isDaytime":true,"temperature":24,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":80},"dewpoint":{"unitCode":"wmoUnit:degC","value":-8.333333333333334},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":84},"windSpeed":"5 to 20 mph","windDirection":"ENE","icon":"https://api.weather.gov/icons/land/day/snow,80/snow,70?size=medium","shortForecast":"Snow Showers","detailedForecast":"Snow showers. Cloudy, with a high near 24. East northeast wind 5 to 20 mph. Chance of precipitation is 80%. New snow accumulation of 1 to 2 inches possible."},{"number":5,"name":"Thursday Night","startTime":"2024-03-14T18:00:00-06:00","endTime":"2024-03-15T06:00:00-06:00","isDaytime":false,"temperature":9,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":50},"dewpoint":{"unitCode":"wmoUnit:degC","value":-10.555555555555555},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":81},"windSpeed":"15 to 20 mph","windDirection":"ESE","icon":"https://api.weather.gov/icons/land/night/snow,30/snow,50?size=medium","shortForecast":"Chance Snow Showers","detailedForecast":"A chance of snow showers. Mostly cloudy, with a low around 9. East southeast wind 15 to 20 mph. Chance of precipitation is 50%. New snow accumulation of less than one inch possible."},{"number":6,"name":"Friday","startTime":"2024-03-15T06:00:00-06:00","endTime":"2024-03-15T18:00:00-06:00","isDaytime":true,"temperature":29,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":50},"dewpoint":{"unitCode":"wmoUnit:degC","value":-6.111111111111111},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":83},"windSpeed":"10 to 15 mph","windDirection":"SE","icon":"https://api.weather.gov/icons/land/day/snow,50/snow,30?size=medium","shortForecast":"Chance Snow Showers","detailedForecast":"A chance of snow showers. Mostly cloudy, with a high near 29. Chance of precipitation is 50%. New snow accumulation of less than one inch possible."},{"number":7,"name":"Friday Night","startTime":"2024-03-15T18:00:00-06:00","endTime":"2024-03-16T06:00:00-06:00","isDaytime":false,"temperature":11,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":20},"dewpoint":{"unitCode":"wmoUnit:degC","value":-7.222222222222222},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":85},"windSpeed":"10 to 15 mph","windDirection":"SSE","icon":"https://api.weather.gov/icons/land/night/snow,20?size=medium","shortForecast":"Slight Chance Snow Showers","detailedForecast":"A slight chance of snow showers. Mostly cloudy, with a low around 11. Chance of precipitation is 20%. Little or no snow accumulation expected."},{"number":8,"name":"Saturday","startTime":"2024-03-16T06:00:00-06:00","endTime":"2024-03-16T18:00:00-06:00","isDaytime":true,"temperature":31,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":-4.444444444444445},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":85},"windSpeed":"10 to 15 mph","windDirection":"ESE","icon":"https://api.weather.gov/icons/land/day/snow?size=medium","shortForecast":"Snow Showers Likely","detailedForecast":"Snow showers likely. Partly sunny, with a high near 31. New snow accumulation of around one inch possible."},{"number":9,"name":"Saturday Night","startTime":"2024-03-16T18:00:00-06:00","endTime":"2024-03-17T06:00:00-06:00","isDaytime":false,"temperature":10,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":-6.111111111111111},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":88},"windSpeed":"10 to 15 mph","windDirection":"SE","icon":"https://api.weather.gov/icons/land/night/snow?size=medium","shortForecast":"Chance Snow Showers","detailedForecast":"A chance of snow showers. Mostly cloudy, with a low around 10. New snow accumulation of less than one inch possible."},{"number":10,"name":"Sunday","startTime":"2024-03-17T06:00:00-06:00","endTime":"2024-03-17T18:00:00-06:00","isDaytime":true,"temperature":33,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":-6.111111111111111},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":86},"windSpeed":"10 to 15 mph","windDirection":"WNW","icon":"https://api.weather.gov/icons/land/day/snow?size=medium","shortForecast":"Chance Snow Showers","detailedForecast":"A chance of snow showers. Partly sunny, with a high near 33."},{"number":11,"name":"Sunday Night","startTime":"2024-03-17T18:00:00-06:00","endTime":"2024-03-18T06:00:00-06:00","isDaytime":false,"temperature":12,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":-7.777777777777778},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":76},"windSpeed":"10 to 15 mph","windDirection":"WNW","icon":"https://api.weather.gov/icons/land/night/snow/sct?size=medium","shortForecast":"Slight Chance Snow Showers then Partly Cloudy","detailedForecast":"A slight chance of snow showers before midnight. Partly cloudy, with a low around 12."},{"number":12,"name":"Monday","startTime":"2024-03-18T06:00:00-06:00","endTime":"2024-03-18T18:00:00-06:00","isDaytime":true,"temperature":36,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":-7.222222222222222},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":73},"windSpeed":"10 to 15 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/day/few?size=medium","shortForecast":"Sunny","detailedForecast":"Sunny, with a high near 36."},{"number":13,"name":"Monday Night","startTime":"2024-03-18T18:00:00-06:00","endTime":"2024-03-19T06:00:00-06:00","isDaytime":false,"temperature":15,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":-7.777777777777778},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":67},"windSpeed":"10 to 15 mph","windDirection":"WNW","icon":"https://api.weather.gov/icons/land/night/few?size=medium","shortForecast":"Mostly Clear","detailedForecast":"Mostly clear, with a low around 15."},{"number":14,"name":"Tuesday","startTime":"2024-03-19T06:00:00-06:00","endTime":"2024-03-19T18:00:00-06:00","isDaytime":true,"temperature":37,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":-6.111111111111111},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":66},"windSpeed":"10 to 15 mph","windDirection":"WNW","icon":"https://api.weather.gov/icons/land/day/few/snow?size=medium","shortForecast":"Sunny then Slight Chance Rain And Snow Showers","detailedForecast":"A slight chance of rain and snow showers after noon. Sunny, with a high near 37."}]}
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

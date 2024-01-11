---
### THIS FILE IS AUTO-GENERATED - DO NOT EDIT ###
layout: page
title: Smith Rock, Oregon Climbing Weather - Current, Past, and Forecasted
title_override: Smith Rock<br /><small>Climbing Weather</small>
description: A lightweight weather report for Smith Rock, Oregon. Optimized for slow internet connections.
js_includes:
  - weather.js
---

<section class="measure center lh-copy f5-ns f6 ph2 mv4" style="text-align: justify;">
<strong>"Is it dry?"</strong>, an oft-repeated, age-old question. Here are real-time,
precipitation-focused reports of current, past, and forecasted climbing weather for Smith Rock, Oregon.
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
<section id="weather" data-crag="smith-rock-oregon" class="mv4-ns mv3 ph2 center"></section>
<section id="nearby" class="tc lh-copy">
  <h3>Nearby Crags</h3>
<a class="nowrap no-underline fancy-link relative light-red mh3" href="/crags/icicle-creek-washington-weather.html">Icicle Creek</a>
<a class="nowrap no-underline fancy-link relative light-red mh3" href="/crags/tieton-river-rock-washington-weather.html">Tieton River Rock</a>
<a class="nowrap no-underline fancy-link relative light-red mh3" href="/crags/vantage-washington-weather.html">Vantage</a>
<a class="nowrap no-underline fancy-link relative light-red mh3" href="/crags/mount-erie-washington-weather.html">Mount Erie</a>
<a class="nowrap no-underline fancy-link relative light-red mh3" href="/crags/index-washington-weather.html">Index</a>
<a class="nowrap no-underline fancy-link relative light-red mh3" href="/crags/darrington-washington-weather.html">Darrington</a>
<a class="nowrap no-underline fancy-link relative light-red mh3" href="/crags/trout-creek-oregon-weather.html">Trout Creek</a>
</section>
<section id="nearby" class="tc lh-copy">
  <h3>Other Metros</h3>
  <select class="ma1 bg-near-white pa2" id="stateSel">
    <option value="Texas">Texas</option>
    <option value="Washington" selected>Washington</option>
    <option value="Colorado">Colorado</option>
    <option value="Tennessee">Tennessee</option>
    <option value="Utah">Utah</option>
    <option value="California">California</option>
  </select>
  <select class="ma1 bg-near-white pa2" id="citySel">
    <option value="Seattle" selected>Seattle</option>
  </select>
  <a id="selectMetro" class="f6 link dim ph3 pv2 ma1 dib white bg-light-red" href="/crags/seattle-washington-weather.html">Select Metro</a>
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
  var weekly_PDT_43_53 = {"updated":"2024-01-11T05:02:08+00:00","units":"us","forecastGenerator":"BaselineForecastGenerator","generatedAt":"2024-01-11T08:32:51+00:00","updateTime":"2024-01-11T05:02:08+00:00","validTimes":"2024-01-10T23:00:00+00:00/P7DT2H","elevation":{"unitCode":"wmoUnit:m","value":853.1352},"periods":[{"number":1,"name":"Overnight","startTime":"2024-01-11T00:00:00-08:00","endTime":"2024-01-11T06:00:00-08:00","isDaytime":false,"temperature":23,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":20},"dewpoint":{"unitCode":"wmoUnit:degC","value":-7.222222222222222},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":86},"windSpeed":"9 mph","windDirection":"SW","icon":"https://api.weather.gov/icons/land/night/snow,20?size=medium","shortForecast":"Slight Chance Light Snow","detailedForecast":"A slight chance of snow after 4am. Partly cloudy, with a low around 23. Southwest wind around 9 mph. Chance of precipitation is 20%. Little or no snow accumulation expected."},{"number":2,"name":"Thursday","startTime":"2024-01-11T06:00:00-08:00","endTime":"2024-01-11T18:00:00-08:00","isDaytime":true,"temperature":36,"temperatureUnit":"F","temperatureTrend":"falling","probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":50},"dewpoint":{"unitCode":"wmoUnit:degC","value":-2.2222222222222223},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":83},"windSpeed":"9 to 23 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/day/snow,30/snow,50?size=medium","shortForecast":"Chance Light Snow","detailedForecast":"A chance of snow. Partly sunny. High near 36, with temperatures falling to around 34 in the afternoon. West wind 9 to 23 mph, with gusts as high as 37 mph. Chance of precipitation is 50%. New snow accumulation of less than half an inch possible."},{"number":3,"name":"Thursday Night","startTime":"2024-01-11T18:00:00-08:00","endTime":"2024-01-12T06:00:00-08:00","isDaytime":false,"temperature":29,"temperatureUnit":"F","temperatureTrend":"rising","probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":70},"dewpoint":{"unitCode":"wmoUnit:degC","value":-3.3333333333333335},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":78},"windSpeed":"18 to 23 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/night/snow,50/blizzard,70?size=medium","shortForecast":"Light Snow Likely And Patchy Blowing Snow","detailedForecast":"A chance of snow before 4am, then snow likely and patchy blowing snow. Mostly cloudy. Low around 29, with temperatures rising to around 31 overnight. West wind 18 to 23 mph, with gusts as high as 39 mph. Chance of precipitation is 70%. New snow accumulation of less than half an inch possible."},{"number":4,"name":"Friday","startTime":"2024-01-12T06:00:00-08:00","endTime":"2024-01-12T18:00:00-08:00","isDaytime":true,"temperature":39,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":70},"dewpoint":{"unitCode":"wmoUnit:degC","value":0.5555555555555556},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":82},"windSpeed":"12 to 23 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/day/blizzard,70/snow,70?size=medium","shortForecast":"Light Snow Likely And Patchy Blowing Snow","detailedForecast":"Snow likely and patchy blowing snow before 7am, then rain and snow likely. Mostly cloudy, with a high near 39. West wind 12 to 23 mph, with gusts as high as 39 mph. Chance of precipitation is 70%. New snow accumulation of 2 to 4 inches possible."},{"number":5,"name":"Friday Night","startTime":"2024-01-12T18:00:00-08:00","endTime":"2024-01-13T06:00:00-08:00","isDaytime":false,"temperature":6,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":70},"dewpoint":{"unitCode":"wmoUnit:degC","value":-5},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":78},"windSpeed":"8 to 12 mph","windDirection":"NW","icon":"https://api.weather.gov/icons/land/night/snow,70?size=medium","shortForecast":"Snow Likely","detailedForecast":"Snow likely. Mostly cloudy, with a low around 6. Northwest wind 8 to 12 mph. Chance of precipitation is 70%. New snow accumulation of 6 to 10 inches possible."},{"number":6,"name":"Saturday","startTime":"2024-01-13T06:00:00-08:00","endTime":"2024-01-13T18:00:00-08:00","isDaytime":true,"temperature":17,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":80},"dewpoint":{"unitCode":"wmoUnit:degC","value":-15},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":83},"windSpeed":"10 mph","windDirection":"N","icon":"https://api.weather.gov/icons/land/day/snow,80?size=medium","shortForecast":"Light Snow","detailedForecast":"Snow. Mostly cloudy, with a high near 17. Chance of precipitation is 80%. New snow accumulation of 5 to 9 inches possible."},{"number":7,"name":"Saturday Night","startTime":"2024-01-13T18:00:00-08:00","endTime":"2024-01-14T06:00:00-08:00","isDaytime":false,"temperature":2,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":40},"dewpoint":{"unitCode":"wmoUnit:degC","value":-15.555555555555555},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":81},"windSpeed":"6 to 10 mph","windDirection":"N","icon":"https://api.weather.gov/icons/land/night/snow,40/cold?size=medium","shortForecast":"Chance Light Snow then Mostly Cloudy","detailedForecast":"A chance of snow before 10pm. Mostly cloudy, with a low around 2. Chance of precipitation is 40%. New snow accumulation of 1 to 2 inches possible."},{"number":8,"name":"Sunday","startTime":"2024-01-14T06:00:00-08:00","endTime":"2024-01-14T18:00:00-08:00","isDaytime":true,"temperature":15,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":-15},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":84},"windSpeed":"6 to 9 mph","windDirection":"N","icon":"https://api.weather.gov/icons/land/day/bkn?size=medium","shortForecast":"Partly Sunny","detailedForecast":"Partly sunny, with a high near 15."},{"number":9,"name":"Sunday Night","startTime":"2024-01-14T18:00:00-08:00","endTime":"2024-01-15T06:00:00-08:00","isDaytime":false,"temperature":-3,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":-17.22222222222222},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":80},"windSpeed":"6 to 9 mph","windDirection":"NE","icon":"https://api.weather.gov/icons/land/night/cold?size=medium","shortForecast":"Mostly Cloudy","detailedForecast":"Mostly cloudy, with a low around -3."},{"number":10,"name":"M.L. King Jr. Day","startTime":"2024-01-15T06:00:00-08:00","endTime":"2024-01-15T18:00:00-08:00","isDaytime":true,"temperature":17,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":-13.333333333333334},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":81},"windSpeed":"8 mph","windDirection":"E","icon":"https://api.weather.gov/icons/land/day/bkn?size=medium","shortForecast":"Partly Sunny","detailedForecast":"Partly sunny, with a high near 17."},{"number":11,"name":"Monday Night","startTime":"2024-01-15T18:00:00-08:00","endTime":"2024-01-16T06:00:00-08:00","isDaytime":false,"temperature":4,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":-15},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":81},"windSpeed":"8 mph","windDirection":"SE","icon":"https://api.weather.gov/icons/land/night/cold?size=medium","shortForecast":"Mostly Cloudy","detailedForecast":"Mostly cloudy, with a low around 4."},{"number":12,"name":"Tuesday","startTime":"2024-01-16T06:00:00-08:00","endTime":"2024-01-16T18:00:00-08:00","isDaytime":true,"temperature":29,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":-6.111111111111111},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":83},"windSpeed":"8 mph","windDirection":"SE","icon":"https://api.weather.gov/icons/land/day/snow?size=medium","shortForecast":"Chance Light Snow","detailedForecast":"A chance of snow after 10am. Partly sunny, with a high near 29."},{"number":13,"name":"Tuesday Night","startTime":"2024-01-16T18:00:00-08:00","endTime":"2024-01-17T06:00:00-08:00","isDaytime":false,"temperature":18,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":-6.111111111111111},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":87},"windSpeed":"7 mph","windDirection":"SE","icon":"https://api.weather.gov/icons/land/night/snow?size=medium","shortForecast":"Chance Light Snow","detailedForecast":"A chance of snow. Mostly cloudy, with a low around 18."},{"number":14,"name":"Wednesday","startTime":"2024-01-17T06:00:00-08:00","endTime":"2024-01-17T18:00:00-08:00","isDaytime":true,"temperature":37,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":-0.5555555555555556},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":95},"windSpeed":"7 to 10 mph","windDirection":"S","icon":"https://api.weather.gov/icons/land/day/snow?size=medium","shortForecast":"Chance Light Snow","detailedForecast":"A chance of snow before 1pm, then a slight chance of rain and snow. Mostly cloudy, with a high near 37."}]}
  var hourly_PDT_43_53 = false
  var crags_config = [
  {
    "name": "Smith Rock",
    "note": "Volcanic welded tuff with surrounding bands of columnar basalt.",
    "mountainProject": "https://www.mountainproject.com/area/105788989/smith-rock",
    "station": "KRDM",
    "office": "PDT/43,53",
    "coordinates": [
      -121.143,
      44.366
    ]
  }
]</script>

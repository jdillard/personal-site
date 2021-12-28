---
### THIS FILE IS AUTO-GENERATED - DO NOT EDIT ###
layout: page
title: Icicle Creek, Washington Climbing Weather - Current, Past, and Forecasted Report
title_override: Icicle Creek<br /><small>Climbing Weather</small>
description: A lightweight weather report for Icicle Creek, Washington. Optimized for slow internet connections.
js_includes:
  - weather.js
---

<section class="measure center lh-copy f5-ns f6 ph2 mv4" style="text-align: justify;">
<strong>"Is it dry?"</strong>, an oft-repeated, age-old question. Here are real-time,
precipitation-focused reports of current, past, and forecasted climbing weather for Icicle Creek, Washington.
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
<section id="weather" data-crag="icicle-creek-washington" class="mv4-ns mv3 ph2 center"></section>
<section id="nearby" class="tc lh-copy">
  <h3>Nearby Crags</h3>
<a class="nowrap no-underline fancy-link relative light-red mh3" href="/crags/tieton-river-rock-washington-weather.html">Tieton River Rock</a>
<a class="nowrap no-underline fancy-link relative light-red mh3" href="/crags/vantage-washington-weather.html">Vantage</a>
<a class="nowrap no-underline fancy-link relative light-red mh3" href="/crags/mount-erie-washington-weather.html">Mount Erie</a>
<a class="nowrap no-underline fancy-link relative light-red mh3" href="/crags/index-washington-weather.html">Index</a>
<a class="nowrap no-underline fancy-link relative light-red mh3" href="/crags/darrington-washington-weather.html">Darrington</a>
<a class="nowrap no-underline fancy-link relative light-red mh3" href="/crags/smith-rock-oregon-weather.html">Smith Rock</a>
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
  var weekly_OTX_35_103 = {"updated":"2021-12-28T03:42:53+00:00","units":"us","forecastGenerator":"BaselineForecastGenerator","generatedAt":"2021-12-28T08:46:59+00:00","updateTime":"2021-12-28T03:42:53+00:00","validTimes":"2021-12-27T21:00:00+00:00/P7DT4H","elevation":{"unitCode":"wmoUnit:m","value":627.888},"periods":[{"number":1,"name":"Overnight","startTime":"2021-12-28T00:00:00-08:00","endTime":"2021-12-28T06:00:00-08:00","isDaytime":false,"temperature":-1,"temperatureUnit":"F","temperatureTrend":"rising","windSpeed":"3 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/night/cold?size=medium","shortForecast":"Mostly Cloudy","detailedForecast":"Mostly cloudy. Low around -1, with temperatures rising to around 2 overnight. Wind chill values as low as -4. West wind around 3 mph."},{"number":2,"name":"Tuesday","startTime":"2021-12-28T06:00:00-08:00","endTime":"2021-12-28T18:00:00-08:00","isDaytime":true,"temperature":19,"temperatureUnit":"F","temperatureTrend":"falling","windSpeed":"5 mph","windDirection":"NW","icon":"https://api.weather.gov/icons/land/day/sct/snow,30?size=medium","shortForecast":"Mostly Sunny then Chance Light Snow","detailedForecast":"A chance of snow after 4pm. Mostly sunny. High near 19, with temperatures falling to around 14 in the afternoon. Wind chill values as low as -6. Northwest wind around 5 mph. Chance of precipitation is 30%. New snow accumulation of less than half an inch possible."},{"number":3,"name":"Tuesday Night","startTime":"2021-12-28T18:00:00-08:00","endTime":"2021-12-29T06:00:00-08:00","isDaytime":false,"temperature":-3,"temperatureUnit":"F","temperatureTrend":"rising","windSpeed":"2 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/night/snow,30/snow,20?size=medium","shortForecast":"Chance Light Snow","detailedForecast":"A chance of snow before 4am. Mostly cloudy. Low around -3, with temperatures rising to around 2 overnight. West wind around 2 mph. Chance of precipitation is 30%. New snow accumulation of less than half an inch possible."},{"number":4,"name":"Wednesday","startTime":"2021-12-29T06:00:00-08:00","endTime":"2021-12-29T18:00:00-08:00","isDaytime":true,"temperature":15,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"3 mph","windDirection":"S","icon":"https://api.weather.gov/icons/land/day/few/fog?size=medium","shortForecast":"Sunny then Patchy Freezing Fog","detailedForecast":"Patchy freezing fog after 4pm. Sunny, with a high near 15. South wind around 3 mph."},{"number":5,"name":"Wednesday Night","startTime":"2021-12-29T18:00:00-08:00","endTime":"2021-12-30T06:00:00-08:00","isDaytime":false,"temperature":7,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"2 to 6 mph","windDirection":"SW","icon":"https://api.weather.gov/icons/land/night/snow,30/snow,80?size=medium","shortForecast":"Light Snow","detailedForecast":"Patchy freezing fog before 10pm, then snow and patchy freezing fog. Partly cloudy, with a low around 7. Southwest wind 2 to 6 mph. Chance of precipitation is 80%. New snow accumulation of around one inch possible."},{"number":6,"name":"Thursday","startTime":"2021-12-30T06:00:00-08:00","endTime":"2021-12-30T18:00:00-08:00","isDaytime":true,"temperature":21,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"6 mph","windDirection":"NW","icon":"https://api.weather.gov/icons/land/day/snow,80/snow,60?size=medium","shortForecast":"Light Snow","detailedForecast":"Snow. Mostly cloudy, with a high near 21. Chance of precipitation is 80%. New snow accumulation of 2 to 4 inches possible."},{"number":7,"name":"Thursday Night","startTime":"2021-12-30T18:00:00-08:00","endTime":"2021-12-31T06:00:00-08:00","isDaytime":false,"temperature":9,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"7 mph","windDirection":"NW","icon":"https://api.weather.gov/icons/land/night/snow,50/snow,30?size=medium","shortForecast":"Chance Light Snow","detailedForecast":"A chance of snow before 2am, then a chance of snow and patchy freezing fog between 2am and 4am, then a chance of snow showers and patchy freezing fog. Mostly cloudy, with a low around 9. Chance of precipitation is 50%. New snow accumulation of less than one inch possible."},{"number":8,"name":"Friday","startTime":"2021-12-31T06:00:00-08:00","endTime":"2021-12-31T18:00:00-08:00","isDaytime":true,"temperature":19,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"7 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/day/snow/sct?size=medium","shortForecast":"Chance Snow Showers then Mostly Sunny","detailedForecast":"A chance of snow showers and patchy freezing fog before 11am. Mostly sunny, with a high near 19."},{"number":9,"name":"Friday Night","startTime":"2021-12-31T18:00:00-08:00","endTime":"2022-01-01T06:00:00-08:00","isDaytime":false,"temperature":7,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"7 mph","windDirection":"SW","icon":"https://api.weather.gov/icons/land/night/snow/snow,20?size=medium","shortForecast":"Chance Snow Showers","detailedForecast":"A chance of snow showers between 10pm and 4am, then a slight chance of snow. Partly cloudy, with a low around 7. Chance of precipitation is 20%."},{"number":10,"name":"New Year's Day","startTime":"2022-01-01T06:00:00-08:00","endTime":"2022-01-01T18:00:00-08:00","isDaytime":true,"temperature":22,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"7 mph","windDirection":"SW","icon":"https://api.weather.gov/icons/land/day/snow,30/snow,40?size=medium","shortForecast":"Chance Light Snow","detailedForecast":"A chance of snow. Partly sunny, with a high near 22. Chance of precipitation is 40%."},{"number":11,"name":"Saturday Night","startTime":"2022-01-01T18:00:00-08:00","endTime":"2022-01-02T06:00:00-08:00","isDaytime":false,"temperature":14,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"8 mph","windDirection":"S","icon":"https://api.weather.gov/icons/land/night/snow,40/snow,60?size=medium","shortForecast":"Light Snow Likely","detailedForecast":"Snow likely. Mostly cloudy, with a low around 14. Chance of precipitation is 60%."},{"number":12,"name":"Sunday","startTime":"2022-01-02T06:00:00-08:00","endTime":"2022-01-02T18:00:00-08:00","isDaytime":true,"temperature":24,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"8 mph","windDirection":"S","icon":"https://api.weather.gov/icons/land/day/snow,70/snow,80?size=medium","shortForecast":"Light Snow","detailedForecast":"Snow. Mostly cloudy, with a high near 24. Chance of precipitation is 80%."},{"number":13,"name":"Sunday Night","startTime":"2022-01-02T18:00:00-08:00","endTime":"2022-01-03T06:00:00-08:00","isDaytime":false,"temperature":16,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"8 mph","windDirection":"E","icon":"https://api.weather.gov/icons/land/night/snow,80?size=medium","shortForecast":"Light Snow","detailedForecast":"Snow. Cloudy, with a low around 16. Chance of precipitation is 80%."},{"number":14,"name":"Monday","startTime":"2022-01-03T06:00:00-08:00","endTime":"2022-01-03T18:00:00-08:00","isDaytime":true,"temperature":27,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"8 mph","windDirection":"E","icon":"https://api.weather.gov/icons/land/day/snow,80/snow,70?size=medium","shortForecast":"Light Snow","detailedForecast":"Snow before 5pm. Mostly cloudy, with a high near 27. Chance of precipitation is 80%."}]}
  var hourly_OTX_35_103 = {"correlationId":"57870841","title":"Service Unavailable","type":"https://api.weather.gov/problems/ServiceUnavailable","status":503,"detail":"An upstream data source is temporarily unavailable. Please try again later.","instance":"https://api.weather.gov/requests/57870841"}
  var crags_config = [
  {
    "name": "Icicle Creek",
    "note": "Granite, so exposed areas dry fast.",
    "mountainProject": "https://www.mountainproject.com/area/105790237/icicle-creek",
    "station": "KEAT",
    "office": "OTX/35,103",
    "coordinates": [
      -120.711,
      47.543
    ]
  }
]</script>

---
### THIS FILE IS AUTO-GENERATED - DO NOT EDIT ###
layout: page
title: Smith Rock, Oregon Climbing Weather - Current, Past, and Forecasted Report
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
  var weekly_PDT_43_53 = {"updated":"2022-10-31T08:11:41+00:00","units":"us","forecastGenerator":"BaselineForecastGenerator","generatedAt":"2022-10-31T08:43:59+00:00","updateTime":"2022-10-31T08:11:41+00:00","validTimes":"2022-10-31T02:00:00+00:00/P7DT11H","elevation":{"unitCode":"wmoUnit:m","value":791.8704},"periods":[{"number":1,"name":"Overnight","startTime":"2022-10-31T01:00:00-07:00","endTime":"2022-10-31T06:00:00-07:00","isDaytime":false,"temperature":45,"temperatureUnit":"F","temperatureTrend":"rising","windSpeed":"6 mph","windDirection":"SE","icon":"https://api.weather.gov/icons/land/night/ovc?size=medium","shortForecast":"Cloudy","detailedForecast":"Cloudy. Low around 45, with temperatures rising to around 47 overnight. Southeast wind around 6 mph."},{"number":2,"name":"Monday","startTime":"2022-10-31T06:00:00-07:00","endTime":"2022-10-31T18:00:00-07:00","isDaytime":true,"temperature":61,"temperatureUnit":"F","temperatureTrend":"falling","windSpeed":"6 to 12 mph","windDirection":"SW","icon":"https://api.weather.gov/icons/land/day/rain,20/rain,60?size=medium","shortForecast":"Light Rain Likely","detailedForecast":"Rain likely after 11am. Cloudy. High near 61, with temperatures falling to around 56 in the afternoon. Southwest wind 6 to 12 mph, with gusts as high as 20 mph. Chance of precipitation is 60%. New rainfall amounts less than a tenth of an inch possible."},{"number":3,"name":"Monday Night","startTime":"2022-10-31T18:00:00-07:00","endTime":"2022-11-01T06:00:00-07:00","isDaytime":false,"temperature":34,"temperatureUnit":"F","temperatureTrend":"rising","windSpeed":"7 to 12 mph","windDirection":"N","icon":"https://api.weather.gov/icons/land/night/rain,70?size=medium","shortForecast":"Light Rain Likely","detailedForecast":"Rain likely. Cloudy. Low around 34, with temperatures rising to around 37 overnight. North wind 7 to 12 mph, with gusts as high as 20 mph. Chance of precipitation is 70%. New rainfall amounts between a quarter and half of an inch possible."},{"number":4,"name":"Tuesday","startTime":"2022-11-01T06:00:00-07:00","endTime":"2022-11-01T18:00:00-07:00","isDaytime":true,"temperature":46,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"6 to 9 mph","windDirection":"NW","icon":"https://api.weather.gov/icons/land/day/rain,70/rain,60?size=medium","shortForecast":"Light Rain Likely","detailedForecast":"Rain likely. Cloudy, with a high near 46. Northwest wind 6 to 9 mph. Chance of precipitation is 70%. New rainfall amounts between a tenth and quarter of an inch possible."},{"number":5,"name":"Tuesday Night","startTime":"2022-11-01T18:00:00-07:00","endTime":"2022-11-02T06:00:00-07:00","isDaytime":false,"temperature":25,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"5 to 9 mph","windDirection":"SW","icon":"https://api.weather.gov/icons/land/night/snow,40/snow,30?size=medium","shortForecast":"Chance Rain And Snow","detailedForecast":"A chance of rain before 8pm, then a chance of rain and snow. Mostly cloudy, with a low around 25. Southwest wind 5 to 9 mph. Chance of precipitation is 40%. New rainfall amounts less than a tenth of an inch possible."},{"number":6,"name":"Wednesday","startTime":"2022-11-02T06:00:00-07:00","endTime":"2022-11-02T18:00:00-07:00","isDaytime":true,"temperature":42,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"8 mph","windDirection":"SW","icon":"https://api.weather.gov/icons/land/day/snow,40?size=medium","shortForecast":"Chance Light Snow","detailedForecast":"A chance of snow before 2pm, then a chance of rain between 2pm and 5pm, then a slight chance of rain and snow. Mostly cloudy, with a high near 42. Chance of precipitation is 40%."},{"number":7,"name":"Wednesday Night","startTime":"2022-11-02T18:00:00-07:00","endTime":"2022-11-03T06:00:00-07:00","isDaytime":false,"temperature":20,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"3 to 8 mph","windDirection":"SW","icon":"https://api.weather.gov/icons/land/night/snow,20/bkn?size=medium","shortForecast":"Slight Chance Rain And Snow then Mostly Cloudy","detailedForecast":"A slight chance of rain and snow before 11pm. Mostly cloudy, with a low around 20. Chance of precipitation is 20%."},{"number":8,"name":"Thursday","startTime":"2022-11-03T06:00:00-07:00","endTime":"2022-11-03T18:00:00-07:00","isDaytime":true,"temperature":43,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"3 to 7 mph","windDirection":"S","icon":"https://api.weather.gov/icons/land/day/snow,20/snow,30?size=medium","shortForecast":"Slight Chance Light Snow","detailedForecast":"A slight chance of snow between 11am and 2pm, then a chance of rain and snow. Partly sunny, with a high near 43. Chance of precipitation is 30%."},{"number":9,"name":"Thursday Night","startTime":"2022-11-03T18:00:00-07:00","endTime":"2022-11-04T06:00:00-07:00","isDaytime":false,"temperature":31,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"7 mph","windDirection":"S","icon":"https://api.weather.gov/icons/land/night/snow,30?size=medium","shortForecast":"Chance Rain And Snow","detailedForecast":"A chance of rain and snow. Mostly cloudy, with a low around 31. Chance of precipitation is 30%."},{"number":10,"name":"Friday","startTime":"2022-11-04T06:00:00-07:00","endTime":"2022-11-04T18:00:00-07:00","isDaytime":true,"temperature":54,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"7 to 13 mph","windDirection":"SW","icon":"https://api.weather.gov/icons/land/day/rain?size=medium","shortForecast":"Light Rain Likely","detailedForecast":"Rain likely. Mostly cloudy, with a high near 54."},{"number":11,"name":"Friday Night","startTime":"2022-11-04T18:00:00-07:00","endTime":"2022-11-05T06:00:00-07:00","isDaytime":false,"temperature":39,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"13 mph","windDirection":"SW","icon":"https://api.weather.gov/icons/land/night/rain?size=medium","shortForecast":"Light Rain Likely","detailedForecast":"Rain likely. Mostly cloudy, with a low around 39."},{"number":12,"name":"Saturday","startTime":"2022-11-05T06:00:00-07:00","endTime":"2022-11-05T18:00:00-07:00","isDaytime":true,"temperature":54,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"10 to 14 mph","windDirection":"SW","icon":"https://api.weather.gov/icons/land/day/rain?size=medium","shortForecast":"Light Rain Likely","detailedForecast":"Rain likely. Mostly cloudy, with a high near 54."},{"number":13,"name":"Saturday Night","startTime":"2022-11-05T18:00:00-07:00","endTime":"2022-11-06T06:00:00-08:00","isDaytime":false,"temperature":34,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"5 to 14 mph","windDirection":"SW","icon":"https://api.weather.gov/icons/land/night/rain?size=medium","shortForecast":"Light Rain Likely","detailedForecast":"Rain likely. Mostly cloudy, with a low around 34."},{"number":14,"name":"Sunday","startTime":"2022-11-06T06:00:00-08:00","endTime":"2022-11-06T18:00:00-08:00","isDaytime":true,"temperature":48,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"5 to 12 mph","windDirection":"SW","icon":"https://api.weather.gov/icons/land/day/rain?size=medium","shortForecast":"Light Rain Likely","detailedForecast":"Rain likely. Mostly cloudy, with a high near 48."}]}
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

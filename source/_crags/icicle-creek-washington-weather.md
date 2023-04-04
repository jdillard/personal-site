---
### THIS FILE IS AUTO-GENERATED - DO NOT EDIT ###
layout: page
title: Icicle Creek, Washington Climbing Weather - Current, Past, and Forecasted
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
  var weekly_OTX_35_103 = {"updated":"2023-04-04T08:25:52+00:00","units":"us","forecastGenerator":"BaselineForecastGenerator","generatedAt":"2023-04-04T08:32:10+00:00","updateTime":"2023-04-04T08:25:52+00:00","validTimes":"2023-04-04T02:00:00+00:00/P6DT23H","elevation":{"unitCode":"wmoUnit:m","value":1865.9856},"periods":[{"number":1,"name":"Overnight","startTime":"2023-04-04T01:00:00-07:00","endTime":"2023-04-04T06:00:00-07:00","isDaytime":false,"temperature":16,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":20},"dewpoint":{"unitCode":"wmoUnit:degC","value":-11.666666666666666},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":74},"windSpeed":"15 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/night/snow,20?size=medium","shortForecast":"Slight Chance Snow Showers","detailedForecast":"A slight chance of snow showers before 4am. Mostly cloudy, with a low around 16. West wind around 15 mph. Chance of precipitation is 20%."},{"number":2,"name":"Tuesday","startTime":"2023-04-04T06:00:00-07:00","endTime":"2023-04-04T18:00:00-07:00","isDaytime":true,"temperature":28,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":30},"dewpoint":{"unitCode":"wmoUnit:degC","value":-8.88888888888889},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":74},"windSpeed":"3 to 12 mph","windDirection":"NW","icon":"https://api.weather.gov/icons/land/day/snow,20/snow,30?size=medium","shortForecast":"Chance Snow Showers","detailedForecast":"A chance of snow showers after 11am. Mostly sunny, with a high near 28. Northwest wind 3 to 12 mph. Chance of precipitation is 30%. New snow accumulation of 1 to 2 inches possible."},{"number":3,"name":"Tuesday Night","startTime":"2023-04-04T18:00:00-07:00","endTime":"2023-04-05T06:00:00-07:00","isDaytime":false,"temperature":17,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":20},"dewpoint":{"unitCode":"wmoUnit:degC","value":-7.777777777777778},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":74},"windSpeed":"5 to 9 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/night/snow,20/few?size=medium","shortForecast":"Slight Chance Snow Showers then Mostly Clear","detailedForecast":"A slight chance of snow showers before 8pm. Mostly clear, with a low around 17. West wind 5 to 9 mph. Chance of precipitation is 20%."},{"number":4,"name":"Wednesday","startTime":"2023-04-05T06:00:00-07:00","endTime":"2023-04-05T18:00:00-07:00","isDaytime":true,"temperature":33,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":-7.777777777777778},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":58},"windSpeed":"5 to 8 mph","windDirection":"SW","icon":"https://api.weather.gov/icons/land/day/bkn?size=medium","shortForecast":"Partly Sunny","detailedForecast":"Partly sunny, with a high near 33. Southwest wind 5 to 8 mph."},{"number":5,"name":"Wednesday Night","startTime":"2023-04-05T18:00:00-07:00","endTime":"2023-04-06T06:00:00-07:00","isDaytime":false,"temperature":26,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":50},"dewpoint":{"unitCode":"wmoUnit:degC","value":-7.222222222222222},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":76},"windSpeed":"9 mph","windDirection":"SW","icon":"https://api.weather.gov/icons/land/night/snow,20/snow,50?size=medium","shortForecast":"Chance Snow Showers","detailedForecast":"A chance of snow showers after 11pm. Mostly cloudy, with a low around 26. Southwest wind around 9 mph. Chance of precipitation is 50%. New snow accumulation of less than half an inch possible."},{"number":6,"name":"Thursday","startTime":"2023-04-06T06:00:00-07:00","endTime":"2023-04-06T18:00:00-07:00","isDaytime":true,"temperature":31,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":80},"dewpoint":{"unitCode":"wmoUnit:degC","value":-1.6666666666666667},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":94},"windSpeed":"8 to 13 mph","windDirection":"SW","icon":"https://api.weather.gov/icons/land/day/snow,70/snow,80?size=medium","shortForecast":"Snow Showers","detailedForecast":"Snow showers. Mostly cloudy, with a high near 31. Chance of precipitation is 80%. New snow accumulation of 1 to 3 inches possible."},{"number":7,"name":"Thursday Night","startTime":"2023-04-06T18:00:00-07:00","endTime":"2023-04-07T06:00:00-07:00","isDaytime":false,"temperature":29,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":80},"dewpoint":{"unitCode":"wmoUnit:degC","value":-2.2222222222222223},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":92},"windSpeed":"13 to 16 mph","windDirection":"SW","icon":"https://api.weather.gov/icons/land/night/snow,80?size=medium","shortForecast":"Snow Showers","detailedForecast":"Snow showers. Mostly cloudy, with a low around 29. Chance of precipitation is 80%. New snow accumulation of 1 to 3 inches possible."},{"number":8,"name":"Friday","startTime":"2023-04-07T06:00:00-07:00","endTime":"2023-04-07T18:00:00-07:00","isDaytime":true,"temperature":34,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":60},"dewpoint":{"unitCode":"wmoUnit:degC","value":-2.7777777777777777},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":81},"windSpeed":"16 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/day/snow,60/snow,50?size=medium","shortForecast":"Snow Showers Likely","detailedForecast":"Snow showers likely. Mostly cloudy, with a high near 34. Chance of precipitation is 60%. New snow accumulation of less than one inch possible."},{"number":9,"name":"Friday Night","startTime":"2023-04-07T18:00:00-07:00","endTime":"2023-04-08T06:00:00-07:00","isDaytime":false,"temperature":27,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":60},"dewpoint":{"unitCode":"wmoUnit:degC","value":-3.3333333333333335},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":79},"windSpeed":"12 to 15 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/night/snow,60?size=medium","shortForecast":"Snow Showers Likely","detailedForecast":"Snow showers likely. Mostly cloudy, with a low around 27. Chance of precipitation is 60%. New snow accumulation of less than half an inch possible."},{"number":10,"name":"Saturday","startTime":"2023-04-08T06:00:00-07:00","endTime":"2023-04-08T18:00:00-07:00","isDaytime":true,"temperature":38,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":40},"dewpoint":{"unitCode":"wmoUnit:degC","value":-2.2222222222222223},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":80},"windSpeed":"12 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/day/snow,40/snow,30?size=medium","shortForecast":"Chance Snow Showers","detailedForecast":"A chance of snow showers before 5pm. Partly sunny, with a high near 38. Chance of precipitation is 40%. Little or no snow accumulation expected."},{"number":11,"name":"Saturday Night","startTime":"2023-04-08T18:00:00-07:00","endTime":"2023-04-09T06:00:00-07:00","isDaytime":false,"temperature":29,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":20},"dewpoint":{"unitCode":"wmoUnit:degC","value":-2.2222222222222223},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":75},"windSpeed":"12 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/night/bkn/snow,20?size=medium","shortForecast":"Mostly Cloudy then Slight Chance Snow Showers","detailedForecast":"A slight chance of snow showers after 5am. Mostly cloudy, with a low around 29. Chance of precipitation is 20%."},{"number":12,"name":"Sunday","startTime":"2023-04-09T06:00:00-07:00","endTime":"2023-04-09T18:00:00-07:00","isDaytime":true,"temperature":40,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":30},"dewpoint":{"unitCode":"wmoUnit:degC","value":0},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":77},"windSpeed":"10 mph","windDirection":"SW","icon":"https://api.weather.gov/icons/land/day/snow,30?size=medium","shortForecast":"Chance Snow Showers","detailedForecast":"A chance of snow showers before 5pm, then a chance of rain and snow showers. Partly sunny, with a high near 40. Chance of precipitation is 30%."},{"number":13,"name":"Sunday Night","startTime":"2023-04-09T18:00:00-07:00","endTime":"2023-04-10T06:00:00-07:00","isDaytime":false,"temperature":33,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":30},"dewpoint":{"unitCode":"wmoUnit:degC","value":0},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":80},"windSpeed":"10 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/night/snow,30?size=medium","shortForecast":"Chance Rain And Snow Showers","detailedForecast":"A chance of rain and snow showers. Mostly cloudy, with a low around 33. Chance of precipitation is 30%."},{"number":14,"name":"Monday","startTime":"2023-04-10T06:00:00-07:00","endTime":"2023-04-10T18:00:00-07:00","isDaytime":true,"temperature":44,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":30},"dewpoint":{"unitCode":"wmoUnit:degC","value":1.6666666666666667},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":80},"windSpeed":"13 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/day/snow,30?size=medium","shortForecast":"Chance Rain And Snow Showers","detailedForecast":"A chance of rain and snow showers. Partly sunny, with a high near 44. Chance of precipitation is 30%."}]}
  var hourly_OTX_35_103 = false
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

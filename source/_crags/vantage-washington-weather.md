---
### THIS FILE IS AUTO-GENERATED - DO NOT EDIT ###
layout: page
title: Vantage, Washington Climbing Weather - Current, Past, and Forecasted
title_override: Vantage<br /><small>Climbing Weather</small>
description: A lightweight weather report for Vantage, Washington. Optimized for slow internet connections.
js_includes:
  - weather.js
---

<section class="measure center lh-copy f5-ns f6 ph2 mv4" style="text-align: justify;">
<strong>"Is it dry?"</strong>, an oft-repeated, age-old question. Here are real-time,
precipitation-focused reports of current, past, and forecasted climbing weather for Vantage, Washington.
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
<section id="weather" data-crag="vantage-washington" class="mv4-ns mv3 ph2 center"></section>
<section id="nearby" class="tc lh-copy">
  <h3>Nearby Crags</h3>
<a class="nowrap no-underline fancy-link relative light-red mh3" href="/crags/icicle-creek-washington-weather.html">Icicle Creek</a>
<a class="nowrap no-underline fancy-link relative light-red mh3" href="/crags/tieton-river-rock-washington-weather.html">Tieton River Rock</a>
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
  var weekly_OTX_54_74 = {"updated":"2024-01-04T06:02:30+00:00","units":"us","forecastGenerator":"BaselineForecastGenerator","generatedAt":"2024-01-04T08:31:54+00:00","updateTime":"2024-01-04T06:02:30+00:00","validTimes":"2024-01-04T00:00:00+00:00/P7DT4H","elevation":{"unitCode":"wmoUnit:m","value":374.904},"periods":[{"number":1,"name":"Overnight","startTime":"2024-01-04T00:00:00-08:00","endTime":"2024-01-04T06:00:00-08:00","isDaytime":false,"temperature":34,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":20},"dewpoint":{"unitCode":"wmoUnit:degC","value":1.1111111111111112},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":93},"windSpeed":"2 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/night/snow,20?size=medium","shortForecast":"Patchy Fog","detailedForecast":"Patchy fog and a slight chance of rain and snow after 4am. Cloudy, with a low around 34. West wind around 2 mph. Chance of precipitation is 20%."},{"number":2,"name":"Thursday","startTime":"2024-01-04T06:00:00-08:00","endTime":"2024-01-04T18:00:00-08:00","isDaytime":true,"temperature":41,"temperatureUnit":"F","temperatureTrend":"falling","probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":20},"dewpoint":{"unitCode":"wmoUnit:degC","value":2.7777777777777777},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":94},"windSpeed":"1 to 5 mph","windDirection":"SE","icon":"https://api.weather.gov/icons/land/day/snow,20?size=medium","shortForecast":"Patchy Fog","detailedForecast":"Patchy fog and a slight chance of rain and snow before 4pm. Cloudy. High near 41, with temperatures falling to around 39 in the afternoon. Southeast wind 1 to 5 mph. Chance of precipitation is 20%."},{"number":3,"name":"Thursday Night","startTime":"2024-01-04T18:00:00-08:00","endTime":"2024-01-05T06:00:00-08:00","isDaytime":false,"temperature":31,"temperatureUnit":"F","temperatureTrend":"rising","probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":1.1111111111111112},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":87},"windSpeed":"6 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/night/bkn?size=medium","shortForecast":"Mostly Cloudy","detailedForecast":"Mostly cloudy. Low around 31, with temperatures rising to around 33 overnight. West wind around 6 mph."},{"number":4,"name":"Friday","startTime":"2024-01-05T06:00:00-08:00","endTime":"2024-01-05T18:00:00-08:00","isDaytime":true,"temperature":43,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":0},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":81},"windSpeed":"6 to 10 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/day/sct?size=medium","shortForecast":"Mostly Sunny","detailedForecast":"Mostly sunny, with a high near 43. West wind 6 to 10 mph."},{"number":5,"name":"Friday Night","startTime":"2024-01-05T18:00:00-08:00","endTime":"2024-01-06T06:00:00-08:00","isDaytime":false,"temperature":32,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":50},"dewpoint":{"unitCode":"wmoUnit:degC","value":-0.5555555555555556},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":85},"windSpeed":"3 to 9 mph","windDirection":"SW","icon":"https://api.weather.gov/icons/land/night/rain,20/snow,50?size=medium","shortForecast":"Chance Rain And Snow","detailedForecast":"A slight chance of rain between 10pm and 1am, then a chance of rain and snow. Mostly cloudy, with a low around 32. Southwest wind 3 to 9 mph. Chance of precipitation is 50%. New rainfall amounts less than a tenth of an inch possible."},{"number":6,"name":"Saturday","startTime":"2024-01-06T06:00:00-08:00","endTime":"2024-01-06T18:00:00-08:00","isDaytime":true,"temperature":41,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":50},"dewpoint":{"unitCode":"wmoUnit:degC","value":-0.5555555555555556},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":85},"windSpeed":"6 to 13 mph","windDirection":"SW","icon":"https://api.weather.gov/icons/land/day/snow,50?size=medium","shortForecast":"Chance Rain And Snow","detailedForecast":"A chance of rain before 7am, then a chance of rain and snow. Mostly cloudy, with a high near 41. Chance of precipitation is 50%."},{"number":7,"name":"Saturday Night","startTime":"2024-01-06T18:00:00-08:00","endTime":"2024-01-07T06:00:00-08:00","isDaytime":false,"temperature":27,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":20},"dewpoint":{"unitCode":"wmoUnit:degC","value":-2.2222222222222223},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":79},"windSpeed":"9 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/night/snow,20/bkn?size=medium","shortForecast":"Slight Chance Rain And Snow then Mostly Cloudy","detailedForecast":"A slight chance of rain before 7pm, then a slight chance of rain and snow between 7pm and 10pm. Mostly cloudy, with a low around 27. Chance of precipitation is 20%."},{"number":8,"name":"Sunday","startTime":"2024-01-07T06:00:00-08:00","endTime":"2024-01-07T18:00:00-08:00","isDaytime":true,"temperature":39,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":-2.2222222222222223},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":82},"windSpeed":"7 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/day/few?size=medium","shortForecast":"Sunny","detailedForecast":"Sunny, with a high near 39."},{"number":9,"name":"Sunday Night","startTime":"2024-01-07T18:00:00-08:00","endTime":"2024-01-08T06:00:00-08:00","isDaytime":false,"temperature":26,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":40},"dewpoint":{"unitCode":"wmoUnit:degC","value":-3.3333333333333335},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":82},"windSpeed":"6 mph","windDirection":"SW","icon":"https://api.weather.gov/icons/land/night/bkn/snow,40?size=medium","shortForecast":"Mostly Cloudy then Chance Light Snow","detailedForecast":"A chance of snow after 4am. Mostly cloudy, with a low around 26. Chance of precipitation is 40%."},{"number":10,"name":"Monday","startTime":"2024-01-08T06:00:00-08:00","endTime":"2024-01-08T18:00:00-08:00","isDaytime":true,"temperature":34,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":50},"dewpoint":{"unitCode":"wmoUnit:degC","value":-2.2222222222222223},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":85},"windSpeed":"6 mph","windDirection":"SW","icon":"https://api.weather.gov/icons/land/day/snow,50?size=medium","shortForecast":"Chance Light Snow","detailedForecast":"A chance of snow before 1pm, then a chance of rain and snow. Mostly cloudy, with a high near 34. Chance of precipitation is 50%. New snow accumulation of less than half an inch possible."},{"number":11,"name":"Monday Night","startTime":"2024-01-08T18:00:00-08:00","endTime":"2024-01-09T06:00:00-08:00","isDaytime":false,"temperature":28,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":50},"dewpoint":{"unitCode":"wmoUnit:degC","value":-2.7777777777777777},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":90},"windSpeed":"7 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/night/snow,40/snow,50?size=medium","shortForecast":"Chance Rain And Snow","detailedForecast":"A chance of rain and snow. Mostly cloudy, with a low around 28. Chance of precipitation is 50%. New snow accumulation of less than one inch possible."},{"number":12,"name":"Tuesday","startTime":"2024-01-09T06:00:00-08:00","endTime":"2024-01-09T18:00:00-08:00","isDaytime":true,"temperature":40,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":60},"dewpoint":{"unitCode":"wmoUnit:degC","value":0},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":90},"windSpeed":"7 to 17 mph","windDirection":"SW","icon":"https://api.weather.gov/icons/land/day/snow,60?size=medium","shortForecast":"Rain And Snow Likely","detailedForecast":"A chance of snow before 7am, then rain and snow likely. Partly sunny, with a high near 40. Chance of precipitation is 60%. New snow accumulation of less than half an inch possible."},{"number":13,"name":"Tuesday Night","startTime":"2024-01-09T18:00:00-08:00","endTime":"2024-01-10T06:00:00-08:00","isDaytime":false,"temperature":27,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":40},"dewpoint":{"unitCode":"wmoUnit:degC","value":-2.2222222222222223},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":78},"windSpeed":"13 to 17 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/night/rain,40/snow,30?size=medium","shortForecast":"Chance Light Rain then Chance Rain And Snow","detailedForecast":"A chance of rain before 1am, then a chance of rain and snow. Mostly cloudy, with a low around 27. Chance of precipitation is 40%."},{"number":14,"name":"Wednesday","startTime":"2024-01-10T06:00:00-08:00","endTime":"2024-01-10T18:00:00-08:00","isDaytime":true,"temperature":37,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":30},"dewpoint":{"unitCode":"wmoUnit:degC","value":-2.2222222222222223},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":81},"windSpeed":"9 to 13 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/day/snow,30/snow,20?size=medium","shortForecast":"Chance Rain And Snow","detailedForecast":"A chance of rain and snow before 5pm. Partly sunny, with a high near 37. Chance of precipitation is 30%."}]}
  var hourly_OTX_54_74 = false
  var crags_config = [
  {
    "name": "Vantage",
    "note": "The rocks are basalt.",
    "mountainProject": "https://www.mountainproject.com/map/105792231/vantage-frenchman-coulee",
    "station": "KEAT",
    "office": "OTX/54,74",
    "coordinates": [
      -119.969,
      47.025
    ]
  }
]</script>

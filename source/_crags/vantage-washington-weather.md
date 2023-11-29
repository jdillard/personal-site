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
  var weekly_OTX_54_74 = {"updated":"2023-11-29T06:01:24+00:00","units":"us","forecastGenerator":"BaselineForecastGenerator","generatedAt":"2023-11-29T08:32:33+00:00","updateTime":"2023-11-29T06:01:24+00:00","validTimes":"2023-11-28T23:00:00+00:00/P7DT5H","elevation":{"unitCode":"wmoUnit:m","value":374.904},"periods":[{"number":1,"name":"Overnight","startTime":"2023-11-29T00:00:00-08:00","endTime":"2023-11-29T06:00:00-08:00","isDaytime":false,"temperature":25,"temperatureUnit":"F","temperatureTrend":"rising","probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":-3.3333333333333335},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":88},"windSpeed":"2 mph","windDirection":"SE","icon":"https://api.weather.gov/icons/land/night/ovc?size=medium","shortForecast":"Cloudy","detailedForecast":"Cloudy. Low around 25, with temperatures rising to around 28 overnight. Southeast wind around 2 mph."},{"number":2,"name":"Wednesday","startTime":"2023-11-29T06:00:00-08:00","endTime":"2023-11-29T18:00:00-08:00","isDaytime":true,"temperature":28,"temperatureUnit":"F","temperatureTrend":"falling","probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":-3.888888888888889},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":94},"windSpeed":"3 mph","windDirection":"SE","icon":"https://api.weather.gov/icons/land/day/fog/ovc?size=medium","shortForecast":"Patchy Fog then Cloudy","detailedForecast":"Patchy fog between 7am and 9am, then widespread freezing fog between 9am and 11am. Cloudy. High near 28, with temperatures falling to around 24 in the afternoon. Southeast wind around 3 mph."},{"number":3,"name":"Wednesday Night","startTime":"2023-11-29T18:00:00-08:00","endTime":"2023-11-30T06:00:00-08:00","isDaytime":false,"temperature":23,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":-5.555555555555555},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":93},"windSpeed":"2 mph","windDirection":"E","icon":"https://api.weather.gov/icons/land/night/fog?size=medium","shortForecast":"Patchy Fog","detailedForecast":"Patchy fog between 10pm and 4am. Mostly cloudy, with a low around 23. East wind around 2 mph."},{"number":4,"name":"Thursday","startTime":"2023-11-30T06:00:00-08:00","endTime":"2023-11-30T18:00:00-08:00","isDaytime":true,"temperature":32,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":40},"dewpoint":{"unitCode":"wmoUnit:degC","value":-3.3333333333333335},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":91},"windSpeed":"1 to 5 mph","windDirection":"E","icon":"https://api.weather.gov/icons/land/day/snow,20/snow,40?size=medium","shortForecast":"Chance Light Snow","detailedForecast":"A chance of snow after 10am. Cloudy, with a high near 32. East wind 1 to 5 mph. Chance of precipitation is 40%."},{"number":5,"name":"Thursday Night","startTime":"2023-11-30T18:00:00-08:00","endTime":"2023-12-01T06:00:00-08:00","isDaytime":false,"temperature":23,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":40},"dewpoint":{"unitCode":"wmoUnit:degC","value":-3.3333333333333335},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":88},"windSpeed":"5 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/night/snow,40/snow,30?size=medium","shortForecast":"Chance Light Snow","detailedForecast":"A chance of snow. Mostly cloudy, with a low around 23. West wind around 5 mph. Chance of precipitation is 40%."},{"number":6,"name":"Friday","startTime":"2023-12-01T06:00:00-08:00","endTime":"2023-12-01T18:00:00-08:00","isDaytime":true,"temperature":39,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":60},"dewpoint":{"unitCode":"wmoUnit:degC","value":0.5555555555555556},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":89},"windSpeed":"5 to 10 mph","windDirection":"S","icon":"https://api.weather.gov/icons/land/day/snow,60?size=medium","shortForecast":"Light Snow Likely","detailedForecast":"Snow likely before 11am, then rain and snow likely. Mostly cloudy, with a high near 39. Chance of precipitation is 60%. Little or no snow accumulation expected."},{"number":7,"name":"Friday Night","startTime":"2023-12-01T18:00:00-08:00","endTime":"2023-12-02T06:00:00-08:00","isDaytime":false,"temperature":26,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":60},"dewpoint":{"unitCode":"wmoUnit:degC","value":-1.6666666666666667},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":89},"windSpeed":"9 mph","windDirection":"SW","icon":"https://api.weather.gov/icons/land/night/snow,60/snow,50?size=medium","shortForecast":"Rain And Snow Likely","detailedForecast":"Rain and snow likely. Mostly cloudy, with a low around 26. Chance of precipitation is 60%. New snow accumulation of less than half an inch possible."},{"number":8,"name":"Saturday","startTime":"2023-12-02T06:00:00-08:00","endTime":"2023-12-02T18:00:00-08:00","isDaytime":true,"temperature":44,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":40},"dewpoint":{"unitCode":"wmoUnit:degC","value":2.2222222222222223},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":89},"windSpeed":"9 to 15 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/day/snow,40/snow,30?size=medium","shortForecast":"Chance Light Snow","detailedForecast":"A chance of snow before 8am, then a chance of rain and snow. Partly sunny, with a high near 44. Chance of precipitation is 40%. Little or no snow accumulation expected."},{"number":9,"name":"Saturday Night","startTime":"2023-12-02T18:00:00-08:00","endTime":"2023-12-03T06:00:00-08:00","isDaytime":false,"temperature":29,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":60},"dewpoint":{"unitCode":"wmoUnit:degC","value":-0.5555555555555556},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":88},"windSpeed":"7 to 15 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/night/snow,40/snow,60?size=medium","shortForecast":"Rain And Snow Likely","detailedForecast":"Rain and snow likely. Mostly cloudy, with a low around 29. Chance of precipitation is 60%."},{"number":10,"name":"Sunday","startTime":"2023-12-03T06:00:00-08:00","endTime":"2023-12-03T18:00:00-08:00","isDaytime":true,"temperature":43,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":60},"dewpoint":{"unitCode":"wmoUnit:degC","value":1.6666666666666667},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":91},"windSpeed":"7 to 16 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/day/rain,60?size=medium","shortForecast":"Light Rain Likely","detailedForecast":"Rain likely. Mostly cloudy, with a high near 43. Chance of precipitation is 60%."},{"number":11,"name":"Sunday Night","startTime":"2023-12-03T18:00:00-08:00","endTime":"2023-12-04T06:00:00-08:00","isDaytime":false,"temperature":32,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":50},"dewpoint":{"unitCode":"wmoUnit:degC","value":-0.5555555555555556},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":83},"windSpeed":"14 to 21 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/night/rain,50?size=medium","shortForecast":"Chance Light Rain","detailedForecast":"A chance of rain. Mostly cloudy, with a low around 32. Chance of precipitation is 50%."},{"number":12,"name":"Monday","startTime":"2023-12-04T06:00:00-08:00","endTime":"2023-12-04T18:00:00-08:00","isDaytime":true,"temperature":44,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":50},"dewpoint":{"unitCode":"wmoUnit:degC","value":3.3333333333333335},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":90},"windSpeed":"7 to 14 mph","windDirection":"NW","icon":"https://api.weather.gov/icons/land/day/rain,50?size=medium","shortForecast":"Chance Light Rain","detailedForecast":"A chance of rain. Mostly cloudy, with a high near 44. Chance of precipitation is 50%."},{"number":13,"name":"Monday Night","startTime":"2023-12-04T18:00:00-08:00","endTime":"2023-12-05T06:00:00-08:00","isDaytime":false,"temperature":35,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":50},"dewpoint":{"unitCode":"wmoUnit:degC","value":2.2222222222222223},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":90},"windSpeed":"7 mph","windDirection":"NW","icon":"https://api.weather.gov/icons/land/night/rain,50?size=medium","shortForecast":"Chance Light Rain","detailedForecast":"A chance of rain. Mostly cloudy, with a low around 35. Chance of precipitation is 50%."},{"number":14,"name":"Tuesday","startTime":"2023-12-05T06:00:00-08:00","endTime":"2023-12-05T18:00:00-08:00","isDaytime":true,"temperature":47,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":50},"dewpoint":{"unitCode":"wmoUnit:degC","value":4.444444444444445},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":94},"windSpeed":"6 to 9 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/day/rain,50?size=medium","shortForecast":"Chance Light Rain","detailedForecast":"A chance of rain before 5pm. Mostly cloudy, with a high near 47. Chance of precipitation is 50%."}]}
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

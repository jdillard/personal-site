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
  var weekly_OTX_35_103 = {"updated":"2023-02-22T07:35:20+00:00","units":"us","forecastGenerator":"BaselineForecastGenerator","generatedAt":"2023-02-22T08:34:51+00:00","updateTime":"2023-02-22T07:35:20+00:00","validTimes":"2023-02-22T01:00:00+00:00/P7D","elevation":{"unitCode":"wmoUnit:m","value":627.888},"periods":[{"number":1,"name":"Overnight","startTime":"2023-02-22T00:00:00-08:00","endTime":"2023-02-22T06:00:00-08:00","isDaytime":false,"temperature":16,"temperatureUnit":"F","temperatureTrend":"rising","probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":70},"dewpoint":{"unitCode":"wmoUnit:degC","value":-6.666666666666667},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":82},"windSpeed":"10 to 14 mph","windDirection":"SE","icon":"https://api.weather.gov/icons/land/night/snow,70?size=medium","shortForecast":"Heavy Snow Likely","detailedForecast":"Snow likely. Mostly cloudy. Low around 16, with temperatures rising to around 19 overnight. Southeast wind 10 to 14 mph. Chance of precipitation is 70%. New snow accumulation of 3 to 7 inches possible."},{"number":2,"name":"Wednesday","startTime":"2023-02-22T06:00:00-08:00","endTime":"2023-02-22T18:00:00-08:00","isDaytime":true,"temperature":22,"temperatureUnit":"F","temperatureTrend":"falling","probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":50},"dewpoint":{"unitCode":"wmoUnit:degC","value":-11.666666666666666},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":76},"windSpeed":"12 mph","windDirection":"E","icon":"https://api.weather.gov/icons/land/day/snow,50/snow,20?size=medium","shortForecast":"Chance Snow","detailedForecast":"A chance of snow. Mostly cloudy. High near 22, with temperatures falling to around 14 in the afternoon. Wind chill values as low as 0. East wind around 12 mph. Chance of precipitation is 50%. New snow accumulation of 1 to 3 inches possible."},{"number":3,"name":"Wednesday Night","startTime":"2023-02-22T18:00:00-08:00","endTime":"2023-02-23T06:00:00-08:00","isDaytime":false,"temperature":5,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":20},"dewpoint":{"unitCode":"wmoUnit:degC","value":-15},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":69},"windSpeed":"12 to 15 mph","windDirection":"E","icon":"https://api.weather.gov/icons/land/night/snow,20/cold?size=medium","shortForecast":"Slight Chance Light Snow then Mostly Cloudy","detailedForecast":"A slight chance of snow before 10pm. Mostly cloudy, with a low around 5. Wind chill values as low as -13. East wind 12 to 15 mph. Chance of precipitation is 20%. New snow accumulation of less than one inch possible."},{"number":4,"name":"Thursday","startTime":"2023-02-23T06:00:00-08:00","endTime":"2023-02-23T18:00:00-08:00","isDaytime":true,"temperature":13,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":-18.333333333333332},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":63},"windSpeed":"13 to 17 mph","windDirection":"E","icon":"https://api.weather.gov/icons/land/day/bkn?size=medium","shortForecast":"Partly Sunny","detailedForecast":"Partly sunny, with a high near 13. Wind chill values as low as -13. East wind 13 to 17 mph, with gusts as high as 26 mph."},{"number":5,"name":"Thursday Night","startTime":"2023-02-23T18:00:00-08:00","endTime":"2023-02-24T06:00:00-08:00","isDaytime":false,"temperature":1,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":-20},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":58},"windSpeed":"6 to 14 mph","windDirection":"NE","icon":"https://api.weather.gov/icons/land/night/cold?size=medium","shortForecast":"Partly Cloudy","detailedForecast":"Partly cloudy, with a low around 1. Northeast wind 6 to 14 mph."},{"number":6,"name":"Friday","startTime":"2023-02-24T06:00:00-08:00","endTime":"2023-02-24T18:00:00-08:00","isDaytime":true,"temperature":23,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":-12.777777777777779},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":58},"windSpeed":"8 mph","windDirection":"SW","icon":"https://api.weather.gov/icons/land/day/few?size=medium","shortForecast":"Sunny","detailedForecast":"Sunny, with a high near 23."},{"number":7,"name":"Friday Night","startTime":"2023-02-24T18:00:00-08:00","endTime":"2023-02-25T06:00:00-08:00","isDaytime":false,"temperature":8,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":-14.444444444444445},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":63},"windSpeed":"10 mph","windDirection":"SW","icon":"https://api.weather.gov/icons/land/night/cold?size=medium","shortForecast":"Partly Cloudy","detailedForecast":"Partly cloudy, with a low around 8."},{"number":8,"name":"Saturday","startTime":"2023-02-25T06:00:00-08:00","endTime":"2023-02-25T18:00:00-08:00","isDaytime":true,"temperature":32,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":30},"dewpoint":{"unitCode":"wmoUnit:degC","value":-5.555555555555555},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":70},"windSpeed":"7 to 10 mph","windDirection":"SW","icon":"https://api.weather.gov/icons/land/day/sct/snow,30?size=medium","shortForecast":"Mostly Sunny then Chance Light Snow","detailedForecast":"A chance of snow after 4pm. Mostly sunny, with a high near 32. Chance of precipitation is 30%."},{"number":9,"name":"Saturday Night","startTime":"2023-02-25T18:00:00-08:00","endTime":"2023-02-26T06:00:00-08:00","isDaytime":false,"temperature":21,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":50},"dewpoint":{"unitCode":"wmoUnit:degC","value":-6.111111111111111},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":72},"windSpeed":"8 to 14 mph","windDirection":"SW","icon":"https://api.weather.gov/icons/land/night/snow,30/snow,50?size=medium","shortForecast":"Chance Light Snow","detailedForecast":"A chance of snow. Mostly cloudy, with a low around 21. Chance of precipitation is 50%. New snow accumulation of less than one inch possible."},{"number":10,"name":"Sunday","startTime":"2023-02-26T06:00:00-08:00","endTime":"2023-02-26T18:00:00-08:00","isDaytime":true,"temperature":36,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":50},"dewpoint":{"unitCode":"wmoUnit:degC","value":-2.7777777777777777},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":74},"windSpeed":"12 to 16 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/day/snow,50/snow,40?size=medium","shortForecast":"Chance Light Snow","detailedForecast":"A chance of snow. Partly sunny, with a high near 36. Chance of precipitation is 50%. New snow accumulation of 1 to 2 inches possible."},{"number":11,"name":"Sunday Night","startTime":"2023-02-26T18:00:00-08:00","endTime":"2023-02-27T06:00:00-08:00","isDaytime":false,"temperature":22,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":30},"dewpoint":{"unitCode":"wmoUnit:degC","value":-5.555555555555555},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":70},"windSpeed":"13 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/night/snow,20/snow,30?size=medium","shortForecast":"Chance Light Snow","detailedForecast":"A chance of snow. Mostly cloudy, with a low around 22. Chance of precipitation is 30%. New snow accumulation of less than half an inch possible."},{"number":12,"name":"Monday","startTime":"2023-02-27T06:00:00-08:00","endTime":"2023-02-27T18:00:00-08:00","isDaytime":true,"temperature":34,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":40},"dewpoint":{"unitCode":"wmoUnit:degC","value":-4.444444444444445},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":74},"windSpeed":"10 mph","windDirection":"S","icon":"https://api.weather.gov/icons/land/day/snow,30/snow,40?size=medium","shortForecast":"Chance Light Snow","detailedForecast":"A chance of snow. Partly sunny, with a high near 34. Chance of precipitation is 40%. New snow accumulation of less than one inch possible."},{"number":13,"name":"Monday Night","startTime":"2023-02-27T18:00:00-08:00","endTime":"2023-02-28T06:00:00-08:00","isDaytime":false,"temperature":21,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":40},"dewpoint":{"unitCode":"wmoUnit:degC","value":-7.222222222222222},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":76},"windSpeed":"9 mph","windDirection":"S","icon":"https://api.weather.gov/icons/land/night/snow,40/snow,30?size=medium","shortForecast":"Chance Light Snow","detailedForecast":"A chance of snow. Mostly cloudy, with a low around 21. Chance of precipitation is 40%. New snow accumulation of less than one inch possible."},{"number":14,"name":"Tuesday","startTime":"2023-02-28T06:00:00-08:00","endTime":"2023-02-28T18:00:00-08:00","isDaytime":true,"temperature":36,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":30},"dewpoint":{"unitCode":"wmoUnit:degC","value":-3.3333333333333335},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":74},"windSpeed":"7 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/day/snow,30?size=medium","shortForecast":"Chance Light Snow","detailedForecast":"A chance of snow before 4pm. Partly sunny, with a high near 36. Chance of precipitation is 30%."}]}
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

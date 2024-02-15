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
  var weekly_OTX_35_103 = {"updated":"2024-02-15T08:07:58+00:00","units":"us","forecastGenerator":"BaselineForecastGenerator","generatedAt":"2024-02-15T08:31:30+00:00","updateTime":"2024-02-15T08:07:58+00:00","validTimes":"2024-02-15T02:00:00+00:00/P7DT2H","elevation":{"unitCode":"wmoUnit:m","value":627.888},"periods":[{"number":1,"name":"Overnight","startTime":"2024-02-15T00:00:00-08:00","endTime":"2024-02-15T06:00:00-08:00","isDaytime":false,"temperature":22,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":80},"dewpoint":{"unitCode":"wmoUnit:degC","value":-7.777777777777778},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":79},"windSpeed":"10 mph","windDirection":"SE","icon":"https://api.weather.gov/icons/land/night/snow,80?size=medium","shortForecast":"Snow","detailedForecast":"Snow. Cloudy, with a low around 22. Southeast wind around 10 mph. Chance of precipitation is 80%. New snow accumulation of 3 to 5 inches possible."},{"number":2,"name":"Thursday","startTime":"2024-02-15T06:00:00-08:00","endTime":"2024-02-15T18:00:00-08:00","isDaytime":true,"temperature":29,"temperatureUnit":"F","temperatureTrend":"falling","probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":70},"dewpoint":{"unitCode":"wmoUnit:degC","value":-5.555555555555555},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":83},"windSpeed":"7 to 10 mph","windDirection":"E","icon":"https://api.weather.gov/icons/land/day/snow,70/snow,30?size=medium","shortForecast":"Snow Likely","detailedForecast":"Snow likely before 4pm. Cloudy. High near 29, with temperatures falling to around 25 in the afternoon. East wind 7 to 10 mph. Chance of precipitation is 70%. New snow accumulation of 1 to 3 inches possible."},{"number":3,"name":"Thursday Night","startTime":"2024-02-15T18:00:00-08:00","endTime":"2024-02-16T06:00:00-08:00","isDaytime":false,"temperature":14,"temperatureUnit":"F","temperatureTrend":"rising","probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":-7.777777777777778},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":83},"windSpeed":"7 mph","windDirection":"E","icon":"https://api.weather.gov/icons/land/night/sct?size=medium","shortForecast":"Partly Cloudy","detailedForecast":"Partly cloudy. Low around 14, with temperatures rising to around 16 overnight. East wind around 7 mph."},{"number":4,"name":"Friday","startTime":"2024-02-16T06:00:00-08:00","endTime":"2024-02-16T18:00:00-08:00","isDaytime":true,"temperature":31,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":-6.111111111111111},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":77},"windSpeed":"6 to 9 mph","windDirection":"SE","icon":"https://api.weather.gov/icons/land/day/sct?size=medium","shortForecast":"Mostly Sunny","detailedForecast":"Mostly sunny, with a high near 31. Southeast wind 6 to 9 mph."},{"number":5,"name":"Friday Night","startTime":"2024-02-16T18:00:00-08:00","endTime":"2024-02-17T06:00:00-08:00","isDaytime":false,"temperature":19,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":20},"dewpoint":{"unitCode":"wmoUnit:degC","value":-8.88888888888889},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":73},"windSpeed":"8 mph","windDirection":"E","icon":"https://api.weather.gov/icons/land/night/sct/snow,20?size=medium","shortForecast":"Partly Cloudy then Slight Chance Light Snow","detailedForecast":"A slight chance of snow after 4am. Partly cloudy, with a low around 19. East wind around 8 mph. Chance of precipitation is 20%."},{"number":6,"name":"Saturday","startTime":"2024-02-17T06:00:00-08:00","endTime":"2024-02-17T18:00:00-08:00","isDaytime":true,"temperature":33,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":40},"dewpoint":{"unitCode":"wmoUnit:degC","value":-4.444444444444445},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":78},"windSpeed":"6 to 9 mph","windDirection":"E","icon":"https://api.weather.gov/icons/land/day/snow,30/snow,40?size=medium","shortForecast":"Chance Light Snow","detailedForecast":"A chance of snow. Mostly cloudy, with a high near 33. Chance of precipitation is 40%."},{"number":7,"name":"Saturday Night","startTime":"2024-02-17T18:00:00-08:00","endTime":"2024-02-18T06:00:00-08:00","isDaytime":false,"temperature":27,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":50},"dewpoint":{"unitCode":"wmoUnit:degC","value":-4.444444444444445},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":84},"windSpeed":"8 mph","windDirection":"NE","icon":"https://api.weather.gov/icons/land/night/snow,40/snow,50?size=medium","shortForecast":"Chance Light Snow","detailedForecast":"A chance of snow. Mostly cloudy, with a low around 27. Chance of precipitation is 50%. Little or no snow accumulation expected."},{"number":8,"name":"Sunday","startTime":"2024-02-18T06:00:00-08:00","endTime":"2024-02-18T18:00:00-08:00","isDaytime":true,"temperature":40,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":50},"dewpoint":{"unitCode":"wmoUnit:degC","value":1.1111111111111112},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":85},"windSpeed":"7 mph","windDirection":"NE","icon":"https://api.weather.gov/icons/land/day/snow,50/rain,30?size=medium","shortForecast":"Chance Light Snow then Chance Light Rain","detailedForecast":"A chance of snow before 10am, then a chance of rain between 10am and 4pm. Mostly cloudy, with a high near 40. Chance of precipitation is 50%. Little or no snow accumulation expected."},{"number":9,"name":"Sunday Night","startTime":"2024-02-18T18:00:00-08:00","endTime":"2024-02-19T06:00:00-08:00","isDaytime":false,"temperature":30,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":-0.5555555555555556},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":87},"windSpeed":"7 mph","windDirection":"E","icon":"https://api.weather.gov/icons/land/night/bkn?size=medium","shortForecast":"Mostly Cloudy","detailedForecast":"Mostly cloudy, with a low around 30."},{"number":10,"name":"Washington's Birthday","startTime":"2024-02-19T06:00:00-08:00","endTime":"2024-02-19T18:00:00-08:00","isDaytime":true,"temperature":38,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":30},"dewpoint":{"unitCode":"wmoUnit:degC","value":1.1111111111111112},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":90},"windSpeed":"8 mph","windDirection":"E","icon":"https://api.weather.gov/icons/land/day/rain,30?size=medium","shortForecast":"Chance Light Rain","detailedForecast":"A chance of rain after 10am. Mostly cloudy, with a high near 38. Chance of precipitation is 30%."},{"number":11,"name":"Monday Night","startTime":"2024-02-19T18:00:00-08:00","endTime":"2024-02-20T06:00:00-08:00","isDaytime":false,"temperature":28,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":30},"dewpoint":{"unitCode":"wmoUnit:degC","value":-1.1111111111111112},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":87},"windSpeed":"7 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/night/snow,30?size=medium","shortForecast":"Chance Rain And Snow","detailedForecast":"A chance of rain before 7pm, then a chance of rain and snow. Mostly cloudy, with a low around 28. Chance of precipitation is 30%."},{"number":12,"name":"Tuesday","startTime":"2024-02-20T06:00:00-08:00","endTime":"2024-02-20T18:00:00-08:00","isDaytime":true,"temperature":40,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":30},"dewpoint":{"unitCode":"wmoUnit:degC","value":1.6666666666666667},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":85},"windSpeed":"8 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/day/snow,30/rain,30?size=medium","shortForecast":"Chance Light Snow then Chance Light Rain","detailedForecast":"A chance of snow before 10am, then a chance of rain. Mostly cloudy, with a high near 40. Chance of precipitation is 30%."},{"number":13,"name":"Tuesday Night","startTime":"2024-02-20T18:00:00-08:00","endTime":"2024-02-21T06:00:00-08:00","isDaytime":false,"temperature":29,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":30},"dewpoint":{"unitCode":"wmoUnit:degC","value":-1.1111111111111112},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":85},"windSpeed":"8 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/night/snow,20/snow,30?size=medium","shortForecast":"Chance Rain And Snow","detailedForecast":"A slight chance of rain before 7pm, then a chance of rain and snow. Mostly cloudy, with a low around 29. Chance of precipitation is 30%."},{"number":14,"name":"Wednesday","startTime":"2024-02-21T06:00:00-08:00","endTime":"2024-02-21T18:00:00-08:00","isDaytime":true,"temperature":42,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":30},"dewpoint":{"unitCode":"wmoUnit:degC","value":1.6666666666666667},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":84},"windSpeed":"8 mph","windDirection":"NW","icon":"https://api.weather.gov/icons/land/day/snow,30/rain,30?size=medium","shortForecast":"Chance Light Snow then Chance Light Rain","detailedForecast":"A chance of snow before 10am, then a chance of rain between 10am and 5pm. Partly sunny, with a high near 42. Chance of precipitation is 30%."}]}
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

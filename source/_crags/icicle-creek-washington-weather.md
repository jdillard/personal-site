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
  var weekly_OTX_35_103 = {"updated":"2024-01-08T04:29:08+00:00","units":"us","forecastGenerator":"BaselineForecastGenerator","generatedAt":"2024-01-08T08:33:01+00:00","updateTime":"2024-01-08T04:29:08+00:00","validTimes":"2024-01-07T22:00:00+00:00/P7DT6H","elevation":{"unitCode":"wmoUnit:m","value":627.888},"periods":[{"number":1,"name":"Overnight","startTime":"2024-01-08T00:00:00-08:00","endTime":"2024-01-08T06:00:00-08:00","isDaytime":false,"temperature":17,"temperatureUnit":"F","temperatureTrend":"rising","probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":-10.555555555555555},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":76},"windSpeed":"5 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/night/snow?size=medium","shortForecast":"Chance Snow Showers","detailedForecast":"A chance of snow showers after 4am. Mostly cloudy. Low around 17, with temperatures rising to around 20 overnight. West wind around 5 mph. Little or no snow accumulation expected."},{"number":2,"name":"Monday","startTime":"2024-01-08T06:00:00-08:00","endTime":"2024-01-08T18:00:00-08:00","isDaytime":true,"temperature":29,"temperatureUnit":"F","temperatureTrend":"falling","probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":90},"dewpoint":{"unitCode":"wmoUnit:degC","value":-3.3333333333333335},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":99},"windSpeed":"6 mph","windDirection":"NE","icon":"https://api.weather.gov/icons/land/day/snow,50/snow,90?size=medium","shortForecast":"Chance Snow Showers then Snow","detailedForecast":"A chance of snow showers before 7am, then snow. Cloudy. High near 29, with temperatures falling to around 26 in the afternoon. Northeast wind around 6 mph. Chance of precipitation is 90%. New snow accumulation of 2 to 4 inches possible."},{"number":3,"name":"Monday Night","startTime":"2024-01-08T18:00:00-08:00","endTime":"2024-01-09T06:00:00-08:00","isDaytime":false,"temperature":26,"temperatureUnit":"F","temperatureTrend":"rising","probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":100},"dewpoint":{"unitCode":"wmoUnit:degC","value":-2.7777777777777777},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":96},"windSpeed":"6 to 16 mph","windDirection":"NE","icon":"https://api.weather.gov/icons/land/night/snow,100?size=medium","shortForecast":"Snow","detailedForecast":"Snow. Cloudy. Low around 26, with temperatures rising to around 31 overnight. Northeast wind 6 to 16 mph, with gusts as high as 24 mph. Chance of precipitation is 100%. New snow accumulation of 3 to 7 inches possible."},{"number":4,"name":"Tuesday","startTime":"2024-01-09T06:00:00-08:00","endTime":"2024-01-09T18:00:00-08:00","isDaytime":true,"temperature":34,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":90},"dewpoint":{"unitCode":"wmoUnit:degC","value":-2.7777777777777777},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":84},"windSpeed":"16 to 37 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/day/snow,90?size=medium","shortForecast":"Snow","detailedForecast":"Snow before 10am, then rain and snow. Cloudy, with a high near 34. West wind 16 to 37 mph, with gusts as high as 55 mph. Chance of precipitation is 90%. New snow accumulation of 3 to 7 inches possible."},{"number":5,"name":"Tuesday Night","startTime":"2024-01-09T18:00:00-08:00","endTime":"2024-01-10T06:00:00-08:00","isDaytime":false,"temperature":27,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":80},"dewpoint":{"unitCode":"wmoUnit:degC","value":-4.444444444444445},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":80},"windSpeed":"17 to 35 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/night/snow,80/blizzard,60?size=medium","shortForecast":"Snow","detailedForecast":"Snow before 4am, then snow likely and patchy blowing snow. Mostly cloudy, with a low around 27. West wind 17 to 35 mph, with gusts as high as 51 mph. Chance of precipitation is 80%. New snow accumulation of 3 to 5 inches possible."},{"number":6,"name":"Wednesday","startTime":"2024-01-10T06:00:00-08:00","endTime":"2024-01-10T18:00:00-08:00","isDaytime":true,"temperature":32,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":60},"dewpoint":{"unitCode":"wmoUnit:degC","value":-3.3333333333333335},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":85},"windSpeed":"10 to 17 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/day/blizzard,60?size=medium","shortForecast":"Light Snow Likely And Patchy Blowing Snow","detailedForecast":"Snow likely and patchy blowing snow. Partly sunny, with a high near 32. Chance of precipitation is 60%. New snow accumulation of around one inch possible."},{"number":7,"name":"Wednesday Night","startTime":"2024-01-10T18:00:00-08:00","endTime":"2024-01-11T06:00:00-08:00","isDaytime":false,"temperature":21,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":60},"dewpoint":{"unitCode":"wmoUnit:degC","value":-6.666666666666667},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":80},"windSpeed":"10 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/night/snow,40/snow,60?size=medium","shortForecast":"Light Snow Likely","detailedForecast":"Snow likely. Mostly cloudy, with a low around 21. Chance of precipitation is 60%. New snow accumulation of less than half an inch possible."},{"number":8,"name":"Thursday","startTime":"2024-01-11T06:00:00-08:00","endTime":"2024-01-11T18:00:00-08:00","isDaytime":true,"temperature":25,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":70},"dewpoint":{"unitCode":"wmoUnit:degC","value":-6.666666666666667},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":85},"windSpeed":"10 to 15 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/day/snow,70?size=medium","shortForecast":"Light Snow Likely","detailedForecast":"Snow likely. Mostly cloudy, with a high near 25. Chance of precipitation is 70%. New snow accumulation of 1 to 3 inches possible."},{"number":9,"name":"Thursday Night","startTime":"2024-01-11T18:00:00-08:00","endTime":"2024-01-12T06:00:00-08:00","isDaytime":false,"temperature":9,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":50},"dewpoint":{"unitCode":"wmoUnit:degC","value":-11.11111111111111},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":77},"windSpeed":"9 to 15 mph","windDirection":"NW","icon":"https://api.weather.gov/icons/land/night/snow,50/snow,40?size=medium","shortForecast":"Chance Light Snow","detailedForecast":"A chance of snow. Mostly cloudy, with a low around 9. Chance of precipitation is 50%. New snow accumulation of 1 to 2 inches possible."},{"number":10,"name":"Friday","startTime":"2024-01-12T06:00:00-08:00","endTime":"2024-01-12T18:00:00-08:00","isDaytime":true,"temperature":15,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":40},"dewpoint":{"unitCode":"wmoUnit:degC","value":-13.88888888888889},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":79},"windSpeed":"9 mph","windDirection":"NE","icon":"https://api.weather.gov/icons/land/day/snow,40?size=medium","shortForecast":"Chance Light Snow","detailedForecast":"A chance of snow. Partly sunny, with a high near 15. Chance of precipitation is 40%. New snow accumulation of around one inch possible."},{"number":11,"name":"Friday Night","startTime":"2024-01-12T18:00:00-08:00","endTime":"2024-01-13T06:00:00-08:00","isDaytime":false,"temperature":3,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":50},"dewpoint":{"unitCode":"wmoUnit:degC","value":-16.666666666666668},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":79},"windSpeed":"8 mph","windDirection":"S","icon":"https://api.weather.gov/icons/land/night/snow,40/snow,50?size=medium","shortForecast":"Chance Snow","detailedForecast":"A chance of snow. Mostly cloudy, with a low around 3. Chance of precipitation is 50%. New snow accumulation of 3 to 5 inches possible."},{"number":12,"name":"Saturday","startTime":"2024-01-13T06:00:00-08:00","endTime":"2024-01-13T18:00:00-08:00","isDaytime":true,"temperature":14,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":50},"dewpoint":{"unitCode":"wmoUnit:degC","value":-13.88888888888889},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":82},"windSpeed":"7 to 10 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/day/snow,50?size=medium","shortForecast":"Chance Snow","detailedForecast":"A chance of snow. Partly sunny, with a high near 14. Chance of precipitation is 50%. New snow accumulation of 2 to 4 inches possible."},{"number":13,"name":"Saturday Night","startTime":"2024-01-13T18:00:00-08:00","endTime":"2024-01-14T06:00:00-08:00","isDaytime":false,"temperature":5,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":30},"dewpoint":{"unitCode":"wmoUnit:degC","value":-15.555555555555555},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":83},"windSpeed":"9 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/night/snow,30?size=medium","shortForecast":"Chance Light Snow","detailedForecast":"A chance of snow. Mostly cloudy, with a low around 5. Chance of precipitation is 30%. New snow accumulation of less than one inch possible."},{"number":14,"name":"Sunday","startTime":"2024-01-14T06:00:00-08:00","endTime":"2024-01-14T18:00:00-08:00","isDaytime":true,"temperature":18,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":30},"dewpoint":{"unitCode":"wmoUnit:degC","value":-11.666666666666666},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":81},"windSpeed":"8 mph","windDirection":"NW","icon":"https://api.weather.gov/icons/land/day/snow,30?size=medium","shortForecast":"Chance Light Snow","detailedForecast":"A chance of snow. Partly sunny, with a high near 18. Chance of precipitation is 30%. Little or no snow accumulation expected."}]}
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

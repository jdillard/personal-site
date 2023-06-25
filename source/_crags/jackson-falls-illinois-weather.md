---
### THIS FILE IS AUTO-GENERATED - DO NOT EDIT ###
layout: page
title: Jackson Falls, Illinois Climbing Weather - Current, Past, and Forecasted
title_override: Jackson Falls<br /><small>Climbing Weather</small>
description: A lightweight weather report for Jackson Falls, Illinois. Optimized for slow internet connections.
js_includes:
  - weather.js
---

<section class="measure center lh-copy f5-ns f6 ph2 mv4" style="text-align: justify;">
<strong>"Is it dry?"</strong>, an oft-repeated, age-old question. Here are real-time,
precipitation-focused reports of current, past, and forecasted climbing weather for Jackson Falls, Illinois.
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
<section id="weather" data-crag="jackson-falls-illinois" class="mv4-ns mv3 ph2 center"></section>
<section id="nearby" class="tc lh-copy">
  <h3>Nearby Crags</h3>
<a class="nowrap no-underline fancy-link relative light-red mh3" href="/crags/red-river-gorge-kentucky-weather.html">Red River Gorge</a>
<a class="nowrap no-underline fancy-link relative light-red mh3" href="/crags/foster-falls-tennessee-weather.html">Foster Falls</a>
<a class="nowrap no-underline fancy-link relative light-red mh3" href="/crags/seneca-rocks-west-virginia-weather.html">Seneca Rocks</a>
</section>
<section id="nearby" class="tc lh-copy">
  <h3>Other Metros</h3>
  <select class="ma1 bg-near-white pa2" id="stateSel">
    <option value="Texas">Texas</option>
    <option value="Washington">Washington</option>
    <option value="Colorado">Colorado</option>
    <option value="Tennessee" selected>Tennessee</option>
    <option value="Utah">Utah</option>
    <option value="California">California</option>
  </select>
  <select class="ma1 bg-near-white pa2" id="citySel">
    <option value="Nashville" selected>Nashville</option>
  </select>
  <a id="selectMetro" class="f6 link dim ph3 pv2 ma1 dib white bg-light-red" href="/crags/nashville-tennessee-weather.html">Select Metro</a>
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
  var weekly_PAH_116_58 = {"updated":"2023-06-25T07:45:07+00:00","units":"us","forecastGenerator":"BaselineForecastGenerator","generatedAt":"2023-06-25T08:33:34+00:00","updateTime":"2023-06-25T07:45:07+00:00","validTimes":"2023-06-25T01:00:00+00:00/P8D","elevation":{"unitCode":"wmoUnit:m","value":96.012},"periods":[{"number":1,"name":"Overnight","startTime":"2023-06-25T03:00:00-05:00","endTime":"2023-06-25T06:00:00-05:00","isDaytime":false,"temperature":72,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":50},"dewpoint":{"unitCode":"wmoUnit:degC","value":21.11111111111111},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":90},"windSpeed":"9 mph","windDirection":"SSW","icon":"https://api.weather.gov/icons/land/night/tsra_hi,50?size=medium","shortForecast":"Chance Showers And Thunderstorms","detailedForecast":"A chance of showers and thunderstorms. Mostly cloudy, with a low around 72. South southwest wind around 9 mph, with gusts as high as 18 mph. Chance of precipitation is 50%."},{"number":2,"name":"Sunday","startTime":"2023-06-25T06:00:00-05:00","endTime":"2023-06-25T18:00:00-05:00","isDaytime":true,"temperature":98,"temperatureUnit":"F","temperatureTrend":"falling","probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":50},"dewpoint":{"unitCode":"wmoUnit:degC","value":24.444444444444443},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":100},"windSpeed":"9 to 14 mph","windDirection":"SW","icon":"https://api.weather.gov/icons/land/day/tsra_hi,50/tsra_hi,20?size=medium","shortForecast":"Chance Showers And Thunderstorms","detailedForecast":"A chance of showers and thunderstorms. Some of the storms could be severe. Mostly sunny. High near 98, with temperatures falling to around 94 in the afternoon. Heat index values as high as 105. Southwest wind 9 to 14 mph, with gusts as high as 21 mph. Chance of precipitation is 50%."},{"number":3,"name":"Sunday Night","startTime":"2023-06-25T18:00:00-05:00","endTime":"2023-06-26T06:00:00-05:00","isDaytime":false,"temperature":66,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":20},"dewpoint":{"unitCode":"wmoUnit:degC","value":21.11111111111111},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":81},"windSpeed":"7 to 15 mph","windDirection":"WSW","icon":"https://api.weather.gov/icons/land/night/tsra_hi,20/few?size=medium","shortForecast":"Slight Chance Showers And Thunderstorms then Mostly Clear","detailedForecast":"A slight chance of showers and thunderstorms before 10pm. Some of the storms could be severe. Mostly clear, with a low around 66. West southwest wind 7 to 15 mph, with gusts as high as 24 mph. Chance of precipitation is 20%."},{"number":4,"name":"Monday","startTime":"2023-06-26T06:00:00-05:00","endTime":"2023-06-26T18:00:00-05:00","isDaytime":true,"temperature":90,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":17.22222222222222},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":84},"windSpeed":"7 to 15 mph","windDirection":"WNW","icon":"https://api.weather.gov/icons/land/day/skc?size=medium","shortForecast":"Sunny","detailedForecast":"Sunny, with a high near 90. West northwest wind 7 to 15 mph, with gusts as high as 23 mph."},{"number":5,"name":"Monday Night","startTime":"2023-06-26T18:00:00-05:00","endTime":"2023-06-27T06:00:00-05:00","isDaytime":false,"temperature":65,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":15.555555555555555},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":75},"windSpeed":"6 to 13 mph","windDirection":"WNW","icon":"https://api.weather.gov/icons/land/night/skc?size=medium","shortForecast":"Clear","detailedForecast":"Clear, with a low around 65. West northwest wind 6 to 13 mph, with gusts as high as 20 mph."},{"number":6,"name":"Tuesday","startTime":"2023-06-27T06:00:00-05:00","endTime":"2023-06-27T18:00:00-05:00","isDaytime":true,"temperature":92,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":17.77777777777778},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":78},"windSpeed":"6 to 12 mph","windDirection":"NW","icon":"https://api.weather.gov/icons/land/day/skc?size=medium","shortForecast":"Sunny","detailedForecast":"Sunny, with a high near 92. Northwest wind 6 to 12 mph."},{"number":7,"name":"Tuesday Night","startTime":"2023-06-27T18:00:00-05:00","endTime":"2023-06-28T06:00:00-05:00","isDaytime":false,"temperature":65,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":17.22222222222222},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":87},"windSpeed":"6 to 10 mph","windDirection":"NE","icon":"https://api.weather.gov/icons/land/night/few?size=medium","shortForecast":"Mostly Clear","detailedForecast":"Mostly clear, with a low around 65. Northeast wind 6 to 10 mph."},{"number":8,"name":"Wednesday","startTime":"2023-06-28T06:00:00-05:00","endTime":"2023-06-28T18:00:00-05:00","isDaytime":true,"temperature":90,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":19.444444444444443},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":87},"windSpeed":"9 mph","windDirection":"SE","icon":"https://api.weather.gov/icons/land/day/rain_showers?size=medium","shortForecast":"Chance Rain Showers","detailedForecast":"A chance of rain showers between 7am and 1pm. Mostly sunny, with a high near 90. Southeast wind around 9 mph."},{"number":9,"name":"Wednesday Night","startTime":"2023-06-28T18:00:00-05:00","endTime":"2023-06-29T06:00:00-05:00","isDaytime":false,"temperature":70,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":20.555555555555557},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":90},"windSpeed":"10 mph","windDirection":"SE","icon":"https://api.weather.gov/icons/land/night/few/tsra_hi?size=medium","shortForecast":"Mostly Clear then Slight Chance Showers And Thunderstorms","detailedForecast":"A slight chance of showers and thunderstorms after 1am. Mostly clear, with a low around 70. Southeast wind around 10 mph."},{"number":10,"name":"Thursday","startTime":"2023-06-29T06:00:00-05:00","endTime":"2023-06-29T18:00:00-05:00","isDaytime":true,"temperature":99,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":22.22222222222222},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":90},"windSpeed":"14 mph","windDirection":"S","icon":"https://api.weather.gov/icons/land/day/tsra_hi?size=medium","shortForecast":"Slight Chance Showers And Thunderstorms","detailedForecast":"A slight chance of showers and thunderstorms before 1pm. Sunny, with a high near 99. South wind around 14 mph, with gusts as high as 21 mph."},{"number":11,"name":"Thursday Night","startTime":"2023-06-29T18:00:00-05:00","endTime":"2023-06-30T06:00:00-05:00","isDaytime":false,"temperature":74,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":22.77777777777778},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":87},"windSpeed":"12 mph","windDirection":"S","icon":"https://api.weather.gov/icons/land/night/sct?size=medium","shortForecast":"Partly Cloudy","detailedForecast":"Partly cloudy, with a low around 74. South wind around 12 mph."},{"number":12,"name":"Friday","startTime":"2023-06-30T06:00:00-05:00","endTime":"2023-06-30T18:00:00-05:00","isDaytime":true,"temperature":101,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":22.22222222222222},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":90},"windSpeed":"9 to 14 mph","windDirection":"SW","icon":"https://api.weather.gov/icons/land/day/hot/tsra_hi?size=medium","shortForecast":"Mostly Sunny then Slight Chance Showers And Thunderstorms","detailedForecast":"A slight chance of showers and thunderstorms after 1pm. Mostly sunny, with a high near 101. Southwest wind 9 to 14 mph, with gusts as high as 22 mph."},{"number":13,"name":"Friday Night","startTime":"2023-06-30T18:00:00-05:00","endTime":"2023-07-01T06:00:00-05:00","isDaytime":false,"temperature":74,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":21.666666666666668},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":87},"windSpeed":"10 to 14 mph","windDirection":"SSW","icon":"https://api.weather.gov/icons/land/night/tsra_hi?size=medium","shortForecast":"Slight Chance Showers And Thunderstorms then Chance Showers And Thunderstorms","detailedForecast":"A slight chance of showers and thunderstorms before 7pm, then a chance of showers and thunderstorms. Partly cloudy, with a low around 74. South southwest wind 10 to 14 mph, with gusts as high as 22 mph."},{"number":14,"name":"Saturday","startTime":"2023-07-01T06:00:00-05:00","endTime":"2023-07-01T18:00:00-05:00","isDaytime":true,"temperature":96,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":22.22222222222222},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":87},"windSpeed":"10 to 15 mph","windDirection":"SW","icon":"https://api.weather.gov/icons/land/day/rain_showers/tsra_hi?size=medium","shortForecast":"Chance Rain Showers then Chance Showers And Thunderstorms","detailedForecast":"A chance of rain showers before 1pm, then a chance of showers and thunderstorms. Partly sunny, with a high near 96. Southwest wind 10 to 15 mph, with gusts as high as 22 mph."}]}
  var hourly_PAH_116_58 = false
  var crags_config = [
  {
    "name": "Jackson Falls",
    "note": "The walls offer slopers, various sized pockets, roofs, and slabs.",
    "mountainProject": "https://www.mountainproject.com/area/106017458/jackson-falls",
    "station": "KPAH",
    "office": "PAH/116,58",
    "coordinates": [
      -88.682,
      37.510
    ]
  }
]</script>

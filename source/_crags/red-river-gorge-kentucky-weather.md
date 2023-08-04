---
### THIS FILE IS AUTO-GENERATED - DO NOT EDIT ###
layout: page
title: Red River Gorge, Kentucky Climbing Weather - Current, Past, and Forecasted
title_override: Red River Gorge<br /><small>Climbing Weather</small>
description: A lightweight weather report for Red River Gorge, Kentucky. Optimized for slow internet connections.
js_includes:
  - weather.js
---

<section class="measure center lh-copy f5-ns f6 ph2 mv4" style="text-align: justify;">
<strong>"Is it dry?"</strong>, an oft-repeated, age-old question. Here are real-time,
precipitation-focused reports of current, past, and forecasted climbing weather for Red River Gorge, Kentucky.
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
<section id="weather" data-crag="red-river-gorge-kentucky" class="mv4-ns mv3 ph2 center"></section>
<section id="nearby" class="tc lh-copy">
  <h3>Nearby Crags</h3>
<a class="nowrap no-underline fancy-link relative light-red mh3" href="/crags/jackson-falls-illinois-weather.html">Jackson Falls</a>
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
  var weekly_JKL_47_57 = {"updated":"2023-08-04T08:04:42+00:00","units":"us","forecastGenerator":"BaselineForecastGenerator","generatedAt":"2023-08-04T08:31:57+00:00","updateTime":"2023-08-04T08:04:42+00:00","validTimes":"2023-08-04T02:00:00+00:00/P7DT23H","elevation":{"unitCode":"wmoUnit:m","value":365.1504},"periods":[{"number":1,"name":"Overnight","startTime":"2023-08-04T04:00:00-04:00","endTime":"2023-08-04T06:00:00-04:00","isDaytime":false,"temperature":65,"temperatureUnit":"F","temperatureTrend":"rising","probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":18.88888888888889},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":100},"windSpeed":"1 mph","windDirection":"WSW","icon":"https://api.weather.gov/icons/land/night/fog?size=medium","shortForecast":"Areas Of Fog","detailedForecast":"Areas of fog. Mostly cloudy. Low around 65, with temperatures rising to around 66 overnight. West southwest wind around 1 mph."},{"number":2,"name":"Friday","startTime":"2023-08-04T06:00:00-04:00","endTime":"2023-08-04T18:00:00-04:00","isDaytime":true,"temperature":85,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":20.555555555555557},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":100},"windSpeed":"1 to 6 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/day/fog/bkn?size=medium","shortForecast":"Areas Of Fog then Partly Sunny","detailedForecast":"Areas of fog before 11am. Partly sunny, with a high near 85. West wind 1 to 6 mph."},{"number":3,"name":"Friday Night","startTime":"2023-08-04T18:00:00-04:00","endTime":"2023-08-05T06:00:00-04:00","isDaytime":false,"temperature":66,"temperatureUnit":"F","temperatureTrend":"rising","probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":19.444444444444443},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":90},"windSpeed":"5 mph","windDirection":"NE","icon":"https://api.weather.gov/icons/land/night/sct?size=medium","shortForecast":"Partly Cloudy","detailedForecast":"Partly cloudy. Low around 66, with temperatures rising to around 67 overnight. Northeast wind around 5 mph."},{"number":4,"name":"Saturday","startTime":"2023-08-05T06:00:00-04:00","endTime":"2023-08-05T18:00:00-04:00","isDaytime":true,"temperature":88,"temperatureUnit":"F","temperatureTrend":"falling","probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":20},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":93},"windSpeed":"6 mph","windDirection":"ENE","icon":"https://api.weather.gov/icons/land/day/sct?size=medium","shortForecast":"Mostly Sunny","detailedForecast":"Mostly sunny. High near 88, with temperatures falling to around 87 in the afternoon. East northeast wind around 6 mph."},{"number":5,"name":"Saturday Night","startTime":"2023-08-05T18:00:00-04:00","endTime":"2023-08-06T06:00:00-04:00","isDaytime":false,"temperature":68,"temperatureUnit":"F","temperatureTrend":"rising","probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":18.333333333333332},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":78},"windSpeed":"5 mph","windDirection":"E","icon":"https://api.weather.gov/icons/land/night/sct?size=medium","shortForecast":"Partly Cloudy","detailedForecast":"Partly cloudy. Low around 68, with temperatures rising to around 69 overnight. East wind around 5 mph."},{"number":6,"name":"Sunday","startTime":"2023-08-06T06:00:00-04:00","endTime":"2023-08-06T18:00:00-04:00","isDaytime":true,"temperature":87,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":50},"dewpoint":{"unitCode":"wmoUnit:degC","value":21.11111111111111},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":84},"windSpeed":"5 to 9 mph","windDirection":"S","icon":"https://api.weather.gov/icons/land/day/tsra_hi,20/tsra_hi,50?size=medium","shortForecast":"Chance Showers And Thunderstorms","detailedForecast":"A chance of showers and thunderstorms after 9am. Partly sunny, with a high near 87. Chance of precipitation is 50%."},{"number":7,"name":"Sunday Night","startTime":"2023-08-06T18:00:00-04:00","endTime":"2023-08-07T06:00:00-04:00","isDaytime":false,"temperature":71,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":70},"dewpoint":{"unitCode":"wmoUnit:degC","value":20.555555555555557},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":87},"windSpeed":"8 to 13 mph","windDirection":"SSW","icon":"https://api.weather.gov/icons/land/night/tsra_hi,50/tsra_hi,70?size=medium","shortForecast":"Chance Showers And Thunderstorms","detailedForecast":"A chance of showers and thunderstorms before 2am, then showers and thunderstorms likely. Mostly cloudy, with a low around 71. Chance of precipitation is 70%."},{"number":8,"name":"Monday","startTime":"2023-08-07T06:00:00-04:00","endTime":"2023-08-07T18:00:00-04:00","isDaytime":true,"temperature":82,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":60},"dewpoint":{"unitCode":"wmoUnit:degC","value":21.666666666666668},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":93},"windSpeed":"13 to 18 mph","windDirection":"SW","icon":"https://api.weather.gov/icons/land/day/tsra_hi,60?size=medium","shortForecast":"Showers And Thunderstorms Likely","detailedForecast":"Showers and thunderstorms likely before 3pm, then a chance of showers and thunderstorms. Partly sunny, with a high near 82. Chance of precipitation is 60%."},{"number":9,"name":"Monday Night","startTime":"2023-08-07T18:00:00-04:00","endTime":"2023-08-08T06:00:00-04:00","isDaytime":false,"temperature":64,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":30},"dewpoint":{"unitCode":"wmoUnit:degC","value":19.444444444444443},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":90},"windSpeed":"8 to 17 mph","windDirection":"WSW","icon":"https://api.weather.gov/icons/land/night/tsra_hi,30/tsra_hi,20?size=medium","shortForecast":"Chance Showers And Thunderstorms","detailedForecast":"A chance of showers and thunderstorms before 7pm, then a chance of showers and thunderstorms between 7pm and 3am. Partly cloudy, with a low around 64. Chance of precipitation is 30%."},{"number":10,"name":"Tuesday","startTime":"2023-08-08T06:00:00-04:00","endTime":"2023-08-08T18:00:00-04:00","isDaytime":true,"temperature":79,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":20},"dewpoint":{"unitCode":"wmoUnit:degC","value":17.22222222222222},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":93},"windSpeed":"8 to 13 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/day/sct/tsra_hi,20?size=medium","shortForecast":"Mostly Sunny then Slight Chance Showers And Thunderstorms","detailedForecast":"A slight chance of showers and thunderstorms after 5pm. Mostly sunny, with a high near 79. Chance of precipitation is 20%."},{"number":11,"name":"Tuesday Night","startTime":"2023-08-08T18:00:00-04:00","endTime":"2023-08-09T06:00:00-04:00","isDaytime":false,"temperature":61,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":16.11111111111111},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":93},"windSpeed":"3 to 9 mph","windDirection":"WSW","icon":"https://api.weather.gov/icons/land/night/sct?size=medium","shortForecast":"Partly Cloudy","detailedForecast":"Partly cloudy, with a low around 61."},{"number":12,"name":"Wednesday","startTime":"2023-08-09T06:00:00-04:00","endTime":"2023-08-09T18:00:00-04:00","isDaytime":true,"temperature":81,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":20},"dewpoint":{"unitCode":"wmoUnit:degC","value":17.22222222222222},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":100},"windSpeed":"3 to 9 mph","windDirection":"WSW","icon":"https://api.weather.gov/icons/land/day/sct/tsra_hi,20?size=medium","shortForecast":"Mostly Sunny then Slight Chance Showers And Thunderstorms","detailedForecast":"A slight chance of showers and thunderstorms after 4pm. Mostly sunny, with a high near 81. Chance of precipitation is 20%."},{"number":13,"name":"Wednesday Night","startTime":"2023-08-09T18:00:00-04:00","endTime":"2023-08-10T06:00:00-04:00","isDaytime":false,"temperature":65,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":20},"dewpoint":{"unitCode":"wmoUnit:degC","value":16.666666666666668},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":87},"windSpeed":"7 mph","windDirection":"SSW","icon":"https://api.weather.gov/icons/land/night/tsra_hi,20?size=medium","shortForecast":"Slight Chance Showers And Thunderstorms","detailedForecast":"A slight chance of showers and thunderstorms. Partly cloudy, with a low around 65. Chance of precipitation is 20%."},{"number":14,"name":"Thursday","startTime":"2023-08-10T06:00:00-04:00","endTime":"2023-08-10T18:00:00-04:00","isDaytime":true,"temperature":81,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":50},"dewpoint":{"unitCode":"wmoUnit:degC","value":19.444444444444443},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":87},"windSpeed":"5 to 12 mph","windDirection":"SSW","icon":"https://api.weather.gov/icons/land/day/rain_showers,40/tsra_hi,50?size=medium","shortForecast":"Chance Rain Showers","detailedForecast":"A chance of rain showers before 2pm, then a chance of showers and thunderstorms between 2pm and 5pm, then a chance of showers and thunderstorms. Partly sunny, with a high near 81. Chance of precipitation is 50%."}]}
  var hourly_JKL_47_57 = false
  var crags_config = [
  {
    "name": "Red River Gorge",
    "note": "Sandstone cliffs.",
    "mountainProject": "https://www.mountainproject.com/area/105841134/red-river-gorge",
    "station": "KIOB",
    "office": "JKL/47,57",
    "coordinates": [
      -83.683,
      37.783
    ]
  }
]</script>

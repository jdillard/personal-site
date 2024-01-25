---
### THIS FILE IS AUTO-GENERATED - DO NOT EDIT ###
layout: page
title: Seneca Rocks, West Virginia Climbing Weather - Current, Past, and Forecasted
title_override: Seneca Rocks<br /><small>Climbing Weather</small>
description: A lightweight weather report for Seneca Rocks, West Virginia. Optimized for slow internet connections.
js_includes:
  - weather.js
---

<section class="measure center lh-copy f5-ns f6 ph2 mv4" style="text-align: justify;">
<strong>"Is it dry?"</strong>, an oft-repeated, age-old question. Here are real-time,
precipitation-focused reports of current, past, and forecasted climbing weather for Seneca Rocks, West Virginia.
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
<section id="weather" data-crag="seneca-rocks-west-virginia" class="mv4-ns mv3 ph2 center"></section>
<section id="nearby" class="tc lh-copy">
  <h3>Nearby Crags</h3>
<a class="nowrap no-underline fancy-link relative light-red mh3" href="/crags/jackson-falls-illinois-weather.html">Jackson Falls</a>
<a class="nowrap no-underline fancy-link relative light-red mh3" href="/crags/red-river-gorge-kentucky-weather.html">Red River Gorge</a>
<a class="nowrap no-underline fancy-link relative light-red mh3" href="/crags/foster-falls-tennessee-weather.html">Foster Falls</a>
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
  var weekly_LWX_14_57 = {"updated":"2024-01-25T08:29:58+00:00","units":"us","forecastGenerator":"BaselineForecastGenerator","generatedAt":"2024-01-25T08:33:31+00:00","updateTime":"2024-01-25T08:29:58+00:00","validTimes":"2024-01-25T02:00:00+00:00/P7DT23H","elevation":{"unitCode":"wmoUnit:m","value":729.996},"periods":[{"number":1,"name":"Overnight","startTime":"2024-01-25T03:00:00-05:00","endTime":"2024-01-25T06:00:00-05:00","isDaytime":false,"temperature":45,"temperatureUnit":"F","temperatureTrend":"rising","probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":90},"dewpoint":{"unitCode":"wmoUnit:degC","value":8.333333333333334},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":93},"windSpeed":"7 mph","windDirection":"SW","icon":"https://api.weather.gov/icons/land/night/rain_showers,90?size=medium","shortForecast":"Rain Showers","detailedForecast":"Rain showers and areas of drizzle and patchy fog. Cloudy. Low around 45, with temperatures rising to around 51 overnight. Southwest wind around 7 mph. Chance of precipitation is 90%. New rainfall amounts less than a tenth of an inch possible."},{"number":2,"name":"Thursday","startTime":"2024-01-25T06:00:00-05:00","endTime":"2024-01-25T18:00:00-05:00","isDaytime":true,"temperature":59,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":100},"dewpoint":{"unitCode":"wmoUnit:degC","value":12.777777777777779},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":96},"windSpeed":"2 to 6 mph","windDirection":"S","icon":"https://api.weather.gov/icons/land/day/rain_showers,60/rain_showers,100?size=medium","shortForecast":"Chance Rain Showers then Areas Of Drizzle","detailedForecast":"A chance of rain showers and areas of drizzle and patchy fog before 7am, then areas of drizzle and patchy fog and scattered rain showers between 7am and 10am, then a chance of rain showers and areas of drizzle and areas of fog between 10am and 11am, then areas of drizzle and areas of fog and scattered rain showers between 11am and 1pm, then rain showers and patchy fog between 1pm and 5pm, then rain showers and areas of drizzle and areas of fog. Cloudy, with a high near 59. South wind 2 to 6 mph. Chance of precipitation is 100%. New rainfall amounts between a tenth and quarter of an inch possible."},{"number":3,"name":"Thursday Night","startTime":"2024-01-25T18:00:00-05:00","endTime":"2024-01-26T06:00:00-05:00","isDaytime":false,"temperature":51,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":100},"dewpoint":{"unitCode":"wmoUnit:degC","value":11.666666666666666},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":100},"windSpeed":"3 to 12 mph","windDirection":"S","icon":"https://api.weather.gov/icons/land/night/rain_showers,100/rain_showers,50?size=medium","shortForecast":"Rain Showers then Areas Of Drizzle","detailedForecast":"Rain showers and areas of drizzle and areas of fog before 10pm, then areas of drizzle and areas of fog and scattered rain showers. Cloudy, with a low around 51. South wind 3 to 12 mph, with gusts as high as 20 mph. Chance of precipitation is 100%. New rainfall amounts between a tenth and quarter of an inch possible."},{"number":4,"name":"Friday","startTime":"2024-01-26T06:00:00-05:00","endTime":"2024-01-26T18:00:00-05:00","isDaytime":true,"temperature":59,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":40},"dewpoint":{"unitCode":"wmoUnit:degC","value":11.11111111111111},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":93},"windSpeed":"14 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/day/rain_showers,40/rain_showers,20?size=medium","shortForecast":"Areas Of Drizzle","detailedForecast":"Areas of drizzle and patchy fog and scattered rain showers before 1pm. Mostly cloudy, with a high near 59. West wind around 14 mph, with gusts as high as 26 mph. Chance of precipitation is 40%. New rainfall amounts less than a tenth of an inch possible."},{"number":5,"name":"Friday Night","startTime":"2024-01-26T18:00:00-05:00","endTime":"2024-01-27T06:00:00-05:00","isDaytime":false,"temperature":40,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":6.666666666666667},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":93},"windSpeed":"5 to 12 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/night/bkn?size=medium","shortForecast":"Mostly Cloudy","detailedForecast":"Mostly cloudy, with a low around 40. West wind 5 to 12 mph, with gusts as high as 21 mph."},{"number":6,"name":"Saturday","startTime":"2024-01-27T06:00:00-05:00","endTime":"2024-01-27T18:00:00-05:00","isDaytime":true,"temperature":51,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":50},"dewpoint":{"unitCode":"wmoUnit:degC","value":5.555555555555555},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":96},"windSpeed":"2 to 6 mph","windDirection":"S","icon":"https://api.weather.gov/icons/land/day/bkn/rain,50?size=medium","shortForecast":"Mostly Cloudy then Chance Light Rain","detailedForecast":"A chance of rain after 1pm. Mostly cloudy, with a high near 51. Chance of precipitation is 50%."},{"number":7,"name":"Saturday Night","startTime":"2024-01-27T18:00:00-05:00","endTime":"2024-01-28T06:00:00-05:00","isDaytime":false,"temperature":39,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":100},"dewpoint":{"unitCode":"wmoUnit:degC","value":5.555555555555555},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":100},"windSpeed":"8 mph","windDirection":"SE","icon":"https://api.weather.gov/icons/land/night/rain,90/rain,100?size=medium","shortForecast":"Rain","detailedForecast":"Rain. Cloudy, with a low around 39. Chance of precipitation is 100%."},{"number":8,"name":"Sunday","startTime":"2024-01-28T06:00:00-05:00","endTime":"2024-01-28T18:00:00-05:00","isDaytime":true,"temperature":42,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":100},"dewpoint":{"unitCode":"wmoUnit:degC","value":3.888888888888889},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":96},"windSpeed":"9 to 15 mph","windDirection":"SW","icon":"https://api.weather.gov/icons/land/day/rain,100/rain,70?size=medium","shortForecast":"Rain","detailedForecast":"Rain. Mostly cloudy, with a high near 42. Chance of precipitation is 100%."},{"number":9,"name":"Sunday Night","startTime":"2024-01-28T18:00:00-05:00","endTime":"2024-01-29T06:00:00-05:00","isDaytime":false,"temperature":29,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":50},"dewpoint":{"unitCode":"wmoUnit:degC","value":1.1111111111111112},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":89},"windSpeed":"16 mph","windDirection":"NW","icon":"https://api.weather.gov/icons/land/night/snow,50?size=medium","shortForecast":"Chance Rain And Snow","detailedForecast":"A chance of rain before 7pm, then a chance of rain and snow between 7pm and 1am, then a chance of rain and snow. Mostly cloudy, with a low around 29. Chance of precipitation is 50%."},{"number":10,"name":"Monday","startTime":"2024-01-29T06:00:00-05:00","endTime":"2024-01-29T18:00:00-05:00","isDaytime":true,"temperature":33,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":40},"dewpoint":{"unitCode":"wmoUnit:degC","value":-3.3333333333333335},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":85},"windSpeed":"15 mph","windDirection":"NW","icon":"https://api.weather.gov/icons/land/day/snow,40/bkn?size=medium","shortForecast":"Chance Rain And Snow then Mostly Cloudy","detailedForecast":"A chance of rain and snow before 7am. Mostly cloudy, with a high near 33. Chance of precipitation is 40%."},{"number":11,"name":"Monday Night","startTime":"2024-01-29T18:00:00-05:00","endTime":"2024-01-30T06:00:00-05:00","isDaytime":false,"temperature":25,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":-5.555555555555555},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":85},"windSpeed":"9 to 14 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/night/bkn?size=medium","shortForecast":"Mostly Cloudy","detailedForecast":"Mostly cloudy, with a low around 25."},{"number":12,"name":"Tuesday","startTime":"2024-01-30T06:00:00-05:00","endTime":"2024-01-30T18:00:00-05:00","isDaytime":true,"temperature":36,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":-5.555555555555555},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":85},"windSpeed":"10 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/day/bkn?size=medium","shortForecast":"Partly Sunny","detailedForecast":"Partly sunny, with a high near 36."},{"number":13,"name":"Tuesday Night","startTime":"2024-01-30T18:00:00-05:00","endTime":"2024-01-31T06:00:00-05:00","isDaytime":false,"temperature":27,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":-4.444444444444445},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":88},"windSpeed":"13 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/night/bkn?size=medium","shortForecast":"Mostly Cloudy","detailedForecast":"Mostly cloudy, with a low around 27."},{"number":14,"name":"Wednesday","startTime":"2024-01-31T06:00:00-05:00","endTime":"2024-01-31T18:00:00-05:00","isDaytime":true,"temperature":41,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":-2.7777777777777777},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":88},"windSpeed":"13 to 16 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/day/bkn?size=medium","shortForecast":"Partly Sunny","detailedForecast":"Partly sunny, with a high near 41."}]}
  var hourly_LWX_14_57 = false
  var crags_config = [
  {
    "name": "Seneca Rocks",
    "note": "White Tuscarora quartzite, which feels much like sandstone.",
    "mountainProject": "https://www.mountainproject.com/area/105861910/seneca-rocks",
    "station": "KW99",
    "office": "LWX/14,57",
    "coordinates": [
      -79.373,
      38.835
    ]
  }
]</script>

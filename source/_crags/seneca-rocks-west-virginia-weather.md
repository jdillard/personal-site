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
  var weekly_LWX_14_57 = {"updated":"2023-09-26T05:29:42+00:00","units":"us","forecastGenerator":"BaselineForecastGenerator","generatedAt":"2023-09-26T08:32:59+00:00","updateTime":"2023-09-26T05:29:42+00:00","validTimes":"2023-09-25T23:00:00+00:00/P8DT2H","elevation":{"unitCode":"wmoUnit:m","value":729.996},"periods":[{"number":1,"name":"Overnight","startTime":"2023-09-26T04:00:00-04:00","endTime":"2023-09-26T06:00:00-04:00","isDaytime":false,"temperature":53,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":50},"dewpoint":{"unitCode":"wmoUnit:degC","value":12.777777777777779},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":100},"windSpeed":"5 mph","windDirection":"E","icon":"https://api.weather.gov/icons/land/night/rain,50?size=medium","shortForecast":"Areas Of Drizzle","detailedForecast":"Areas of drizzle and areas of fog. Cloudy, with a low around 53. East wind around 5 mph. Chance of precipitation is 50%. New rainfall amounts less than a tenth of an inch possible."},{"number":2,"name":"Tuesday","startTime":"2023-09-26T06:00:00-04:00","endTime":"2023-09-26T18:00:00-04:00","isDaytime":true,"temperature":56,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":50},"dewpoint":{"unitCode":"wmoUnit:degC","value":12.222222222222221},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":100},"windSpeed":"7 mph","windDirection":"E","icon":"https://api.weather.gov/icons/land/day/rain,50?size=medium","shortForecast":"Areas Of Drizzle then Chance Light Rain","detailedForecast":"Areas of drizzle and areas of fog before 10am, then areas of drizzle and areas of fog and a chance of rain between 10am and 11am, then a chance of rain and patchy drizzle and patchy fog. Cloudy, with a high near 56. East wind around 7 mph. Chance of precipitation is 50%. New rainfall amounts between a tenth and quarter of an inch possible."},{"number":3,"name":"Tuesday Night","startTime":"2023-09-26T18:00:00-04:00","endTime":"2023-09-27T06:00:00-04:00","isDaytime":false,"temperature":50,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":40},"dewpoint":{"unitCode":"wmoUnit:degC","value":11.666666666666666},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":100},"windSpeed":"5 to 8 mph","windDirection":"E","icon":"https://api.weather.gov/icons/land/night/rain,40?size=medium","shortForecast":"Chance Light Rain then Areas Of Drizzle","detailedForecast":"A chance of rain and patchy drizzle and patchy fog before 11pm, then areas of drizzle and a chance of rain and patchy fog between 11pm and 2am, then areas of drizzle and areas of fog and a chance of rain between 2am and 3am, then areas of drizzle and a chance of rain and patchy fog between 3am and 5am, then a chance of rain and patchy drizzle and patchy fog. Cloudy, with a low around 50. East wind 5 to 8 mph. Chance of precipitation is 40%. New rainfall amounts between a tenth and quarter of an inch possible."},{"number":4,"name":"Wednesday","startTime":"2023-09-27T06:00:00-04:00","endTime":"2023-09-27T18:00:00-04:00","isDaytime":true,"temperature":59,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":40},"dewpoint":{"unitCode":"wmoUnit:degC","value":11.666666666666666},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":100},"windSpeed":"7 mph","windDirection":"E","icon":"https://api.weather.gov/icons/land/day/rain,40/rain_showers,20?size=medium","shortForecast":"Chance Light Rain then Slight Chance Rain Showers","detailedForecast":"A chance of rain and patchy drizzle and patchy fog before 8am, then a slight chance of rain showers. Mostly cloudy, with a high near 59. East wind around 7 mph. Chance of precipitation is 40%. New rainfall amounts less than a tenth of an inch possible."},{"number":5,"name":"Wednesday Night","startTime":"2023-09-27T18:00:00-04:00","endTime":"2023-09-28T06:00:00-04:00","isDaytime":false,"temperature":50,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":30},"dewpoint":{"unitCode":"wmoUnit:degC","value":11.666666666666666},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":100},"windSpeed":"7 mph","windDirection":"SE","icon":"https://api.weather.gov/icons/land/night/rain_showers,20/rain_showers,30?size=medium","shortForecast":"Chance Rain Showers","detailedForecast":"A chance of rain showers. Mostly cloudy, with a low around 50. Southeast wind around 7 mph. Chance of precipitation is 30%."},{"number":6,"name":"Thursday","startTime":"2023-09-28T06:00:00-04:00","endTime":"2023-09-28T18:00:00-04:00","isDaytime":true,"temperature":64,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":30},"dewpoint":{"unitCode":"wmoUnit:degC","value":12.222222222222221},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":100},"windSpeed":"5 to 8 mph","windDirection":"SE","icon":"https://api.weather.gov/icons/land/day/rain_showers,30?size=medium","shortForecast":"Chance Rain Showers","detailedForecast":"A chance of rain showers. Mostly cloudy, with a high near 64. Chance of precipitation is 30%."},{"number":7,"name":"Thursday Night","startTime":"2023-09-28T18:00:00-04:00","endTime":"2023-09-29T06:00:00-04:00","isDaytime":false,"temperature":52,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":40},"dewpoint":{"unitCode":"wmoUnit:degC","value":12.777777777777779},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":100},"windSpeed":"6 to 9 mph","windDirection":"SE","icon":"https://api.weather.gov/icons/land/night/rain_showers,30/rain_showers,40?size=medium","shortForecast":"Chance Rain Showers","detailedForecast":"A chance of rain showers. Mostly cloudy, with a low around 52. Chance of precipitation is 40%."},{"number":8,"name":"Friday","startTime":"2023-09-29T06:00:00-04:00","endTime":"2023-09-29T18:00:00-04:00","isDaytime":true,"temperature":67,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":40},"dewpoint":{"unitCode":"wmoUnit:degC","value":14.444444444444445},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":100},"windSpeed":"0 to 7 mph","windDirection":"E","icon":"https://api.weather.gov/icons/land/day/rain_showers,40/rain_showers,30?size=medium","shortForecast":"Chance Rain Showers","detailedForecast":"A chance of rain showers. Partly sunny, with a high near 67. Chance of precipitation is 40%."},{"number":9,"name":"Friday Night","startTime":"2023-09-29T18:00:00-04:00","endTime":"2023-09-30T06:00:00-04:00","isDaytime":false,"temperature":54,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":30},"dewpoint":{"unitCode":"wmoUnit:degC","value":14.444444444444445},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":100},"windSpeed":"8 mph","windDirection":"NE","icon":"https://api.weather.gov/icons/land/night/rain_showers,30/bkn?size=medium","shortForecast":"Chance Rain Showers then Mostly Cloudy","detailedForecast":"A chance of rain showers before 8pm. Mostly cloudy, with a low around 54. Chance of precipitation is 30%."},{"number":10,"name":"Saturday","startTime":"2023-09-30T06:00:00-04:00","endTime":"2023-09-30T18:00:00-04:00","isDaytime":true,"temperature":66,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":13.88888888888889},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":100},"windSpeed":"9 mph","windDirection":"NE","icon":"https://api.weather.gov/icons/land/day/bkn?size=medium","shortForecast":"Partly Sunny","detailedForecast":"Partly sunny, with a high near 66."},{"number":11,"name":"Saturday Night","startTime":"2023-09-30T18:00:00-04:00","endTime":"2023-10-01T06:00:00-04:00","isDaytime":false,"temperature":53,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":13.333333333333334},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":100},"windSpeed":"9 mph","windDirection":"E","icon":"https://api.weather.gov/icons/land/night/sct?size=medium","shortForecast":"Partly Cloudy","detailedForecast":"Partly cloudy, with a low around 53."},{"number":12,"name":"Sunday","startTime":"2023-10-01T06:00:00-04:00","endTime":"2023-10-01T18:00:00-04:00","isDaytime":true,"temperature":67,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":12.222222222222221},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":100},"windSpeed":"10 mph","windDirection":"E","icon":"https://api.weather.gov/icons/land/day/sct?size=medium","shortForecast":"Mostly Sunny","detailedForecast":"Mostly sunny, with a high near 67."},{"number":13,"name":"Sunday Night","startTime":"2023-10-01T18:00:00-04:00","endTime":"2023-10-02T06:00:00-04:00","isDaytime":false,"temperature":50,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":12.222222222222221},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":100},"windSpeed":"7 to 10 mph","windDirection":"NE","icon":"https://api.weather.gov/icons/land/night/few?size=medium","shortForecast":"Mostly Clear","detailedForecast":"Mostly clear, with a low around 50."},{"number":14,"name":"Monday","startTime":"2023-10-02T06:00:00-04:00","endTime":"2023-10-02T18:00:00-04:00","isDaytime":true,"temperature":71,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":11.666666666666666},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":96},"windSpeed":"9 mph","windDirection":"N","icon":"https://api.weather.gov/icons/land/day/few?size=medium","shortForecast":"Sunny","detailedForecast":"Sunny, with a high near 71."}]}
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

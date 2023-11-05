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
  var weekly_LWX_14_57 = {"updated":"2023-11-05T05:30:33+00:00","units":"us","forecastGenerator":"BaselineForecastGenerator","generatedAt":"2023-11-05T08:32:12+00:00","updateTime":"2023-11-05T05:30:33+00:00","validTimes":"2023-11-04T23:00:00+00:00/P8DT2H","elevation":{"unitCode":"wmoUnit:m","value":729.996},"periods":[{"number":1,"name":"Overnight","startTime":"2023-11-05T03:00:00-05:00","endTime":"2023-11-05T06:00:00-05:00","isDaytime":false,"temperature":40,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":1.1111111111111112},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":73},"windSpeed":"9 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/night/bkn?size=medium","shortForecast":"Mostly Cloudy","detailedForecast":"Mostly cloudy, with a low around 40. West wind around 9 mph."},{"number":2,"name":"Sunday","startTime":"2023-11-05T06:00:00-05:00","endTime":"2023-11-05T18:00:00-05:00","isDaytime":true,"temperature":59,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":3.3333333333333335},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":76},"windSpeed":"7 to 13 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/day/sct?size=medium","shortForecast":"Mostly Sunny","detailedForecast":"Mostly sunny, with a high near 59. West wind 7 to 13 mph, with gusts as high as 18 mph."},{"number":3,"name":"Sunday Night","startTime":"2023-11-05T18:00:00-05:00","endTime":"2023-11-06T06:00:00-05:00","isDaytime":false,"temperature":36,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":2.2222222222222223},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":89},"windSpeed":"0 to 9 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/night/sct/fog?size=medium","shortForecast":"Partly Cloudy then Patchy Fog","detailedForecast":"Patchy fog after 4am. Partly cloudy, with a low around 36. West wind 0 to 9 mph."},{"number":4,"name":"Monday","startTime":"2023-11-06T06:00:00-05:00","endTime":"2023-11-06T18:00:00-05:00","isDaytime":true,"temperature":62,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":1.6666666666666667},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":85},"windSpeed":"0 to 9 mph","windDirection":"SW","icon":"https://api.weather.gov/icons/land/day/fog/sct?size=medium","shortForecast":"Patchy Fog then Mostly Sunny","detailedForecast":"Patchy fog before 8am. Mostly sunny, with a high near 62. Southwest wind 0 to 9 mph."},{"number":5,"name":"Monday Night","startTime":"2023-11-06T18:00:00-05:00","endTime":"2023-11-07T06:00:00-05:00","isDaytime":false,"temperature":50,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":7.777777777777778},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":72},"windSpeed":"10 to 24 mph","windDirection":"SW","icon":"https://api.weather.gov/icons/land/night/wind_bkn?size=medium","shortForecast":"Mostly Cloudy","detailedForecast":"Mostly cloudy, with a low around 50. Southwest wind 10 to 24 mph, with gusts as high as 43 mph."},{"number":6,"name":"Tuesday","startTime":"2023-11-07T06:00:00-05:00","endTime":"2023-11-07T18:00:00-05:00","isDaytime":true,"temperature":62,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":9.444444444444445},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":77},"windSpeed":"16 to 21 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/day/wind_bkn?size=medium","shortForecast":"Mostly Cloudy","detailedForecast":"Mostly cloudy, with a high near 62."},{"number":7,"name":"Tuesday Night","startTime":"2023-11-07T18:00:00-05:00","endTime":"2023-11-08T06:00:00-05:00","isDaytime":false,"temperature":50,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":9.444444444444445},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":89},"windSpeed":"7 to 15 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/night/rain_showers?size=medium","shortForecast":"Slight Chance Rain Showers","detailedForecast":"A slight chance of rain showers after 7pm. Mostly cloudy, with a low around 50."},{"number":8,"name":"Wednesday","startTime":"2023-11-08T06:00:00-05:00","endTime":"2023-11-08T18:00:00-05:00","isDaytime":true,"temperature":66,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":11.11111111111111},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":89},"windSpeed":"7 to 13 mph","windDirection":"SW","icon":"https://api.weather.gov/icons/land/day/rain_showers/bkn?size=medium","shortForecast":"Slight Chance Rain Showers then Partly Sunny","detailedForecast":"A slight chance of rain showers before 7am. Partly sunny, with a high near 66."},{"number":9,"name":"Wednesday Night","startTime":"2023-11-08T18:00:00-05:00","endTime":"2023-11-09T06:00:00-05:00","isDaytime":false,"temperature":53,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":10.555555555555555},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":83},"windSpeed":"10 to 16 mph","windDirection":"SW","icon":"https://api.weather.gov/icons/land/night/rain_showers?size=medium","shortForecast":"Slight Chance Rain Showers","detailedForecast":"A slight chance of rain showers after 7pm. Partly cloudy, with a low around 53."},{"number":10,"name":"Thursday","startTime":"2023-11-09T06:00:00-05:00","endTime":"2023-11-09T18:00:00-05:00","isDaytime":true,"temperature":65,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":40},"dewpoint":{"unitCode":"wmoUnit:degC","value":11.666666666666666},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":83},"windSpeed":"18 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/day/rain_showers/rain_showers,40?size=medium","shortForecast":"Chance Rain Showers","detailedForecast":"A chance of rain showers. Partly sunny, with a high near 65. Chance of precipitation is 40%."},{"number":11,"name":"Thursday Night","startTime":"2023-11-09T18:00:00-05:00","endTime":"2023-11-10T06:00:00-05:00","isDaytime":false,"temperature":47,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":50},"dewpoint":{"unitCode":"wmoUnit:degC","value":10.555555555555555},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":93},"windSpeed":"10 to 15 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/night/rain_showers,40/rain_showers,50?size=medium","shortForecast":"Chance Rain Showers","detailedForecast":"A chance of rain showers. Mostly cloudy, with a low around 47. Chance of precipitation is 50%."},{"number":12,"name":"Friday","startTime":"2023-11-10T06:00:00-05:00","endTime":"2023-11-10T18:00:00-05:00","isDaytime":true,"temperature":53,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":50},"dewpoint":{"unitCode":"wmoUnit:degC","value":7.222222222222222},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":86},"windSpeed":"12 to 15 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/day/rain_showers,50?size=medium","shortForecast":"Chance Rain Showers","detailedForecast":"A chance of rain showers. Mostly cloudy, with a high near 53. Chance of precipitation is 50%."},{"number":13,"name":"Friday Night","startTime":"2023-11-10T18:00:00-05:00","endTime":"2023-11-11T06:00:00-05:00","isDaytime":false,"temperature":35,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":50},"dewpoint":{"unitCode":"wmoUnit:degC","value":3.888888888888889},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":82},"windSpeed":"13 to 16 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/night/rain_showers,50/snow,30?size=medium","shortForecast":"Chance Rain Showers then Slight Chance Rain And Snow Showers","detailedForecast":"A chance of rain showers before 1am, then a slight chance of rain and snow showers. Partly cloudy, with a low around 35. Chance of precipitation is 50%."},{"number":14,"name":"Veterans Day","startTime":"2023-11-11T06:00:00-05:00","endTime":"2023-11-11T18:00:00-05:00","isDaytime":true,"temperature":47,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":-1.6666666666666667},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":78},"windSpeed":"15 mph","windDirection":"NW","icon":"https://api.weather.gov/icons/land/day/snow/sct?size=medium","shortForecast":"Slight Chance Rain And Snow Showers then Mostly Sunny","detailedForecast":"A slight chance of rain and snow showers before 7am. Mostly sunny, with a high near 47."}]}
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

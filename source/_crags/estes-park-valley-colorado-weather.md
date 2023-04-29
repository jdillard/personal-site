---
### THIS FILE IS AUTO-GENERATED - DO NOT EDIT ###
layout: page
title: Estes Park Valley, Colorado Climbing Weather - Current, Past, and Forecasted
title_override: Estes Park Valley<br /><small>Climbing Weather</small>
description: A lightweight weather report for Estes Park Valley, Colorado. Optimized for slow internet connections.
js_includes:
  - weather.js
---

<section class="measure center lh-copy f5-ns f6 ph2 mv4" style="text-align: justify;">
<strong>"Is it dry?"</strong>, an oft-repeated, age-old question. Here are real-time,
precipitation-focused reports of current, past, and forecasted climbing weather for Estes Park Valley, Colorado.
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
<section id="weather" data-crag="estes-park-valley-colorado" class="mv4-ns mv3 ph2 center"></section>
<section id="nearby" class="tc lh-copy">
  <h3>Nearby Crags</h3>
<a class="nowrap no-underline fancy-link relative light-red mh3" href="/crags/clear-creek-canyon-colorado-weather.html">Clear Creek Canyon</a>
<a class="nowrap no-underline fancy-link relative light-red mh3" href="/crags/staunton-state-park-colorado-weather.html">Staunton State Park</a>
<a class="nowrap no-underline fancy-link relative light-red mh3" href="/crags/lime-park-lime-creek-colorado-weather.html">Lime Park (Lime Creek)</a>
<a class="nowrap no-underline fancy-link relative light-red mh3" href="/crags/independence-pass-colorado-weather.html">Independence Pass</a>
<a class="nowrap no-underline fancy-link relative light-red mh3" href="/crags/moab-utah-weather.html">Moab</a>
<a class="nowrap no-underline fancy-link relative light-red mh3" href="/crags/gunnison-colorado-weather.html">Gunnison</a>
</section>
<section id="nearby" class="tc lh-copy">
  <h3>Other Metros</h3>
  <select class="ma1 bg-near-white pa2" id="stateSel">
    <option value="Texas">Texas</option>
    <option value="Washington">Washington</option>
    <option value="Colorado" selected>Colorado</option>
    <option value="Tennessee">Tennessee</option>
    <option value="Utah">Utah</option>
    <option value="California">California</option>
  </select>
  <select class="ma1 bg-near-white pa2" id="citySel">
    <option value="Denver" selected>Denver</option>
  </select>
  <a id="selectMetro" class="f6 link dim ph3 pv2 ma1 dib white bg-light-red" href="/crags/denver-colorado-weather.html">Select Metro</a>
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
  var weekly_BOU_46_92 = {"updated":"2023-04-29T07:32:30+00:00","units":"us","forecastGenerator":"BaselineForecastGenerator","generatedAt":"2023-04-29T08:32:05+00:00","updateTime":"2023-04-29T07:32:30+00:00","validTimes":"2023-04-29T01:00:00+00:00/P7DT3H","elevation":{"unitCode":"wmoUnit:m","value":2438.0952},"periods":[{"number":1,"name":"Overnight","startTime":"2023-04-29T02:00:00-06:00","endTime":"2023-04-29T06:00:00-06:00","isDaytime":false,"temperature":34,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":-6.111111111111111},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":56},"windSpeed":"14 mph","windDirection":"WSW","icon":"https://api.weather.gov/icons/land/night/sct?size=medium","shortForecast":"Partly Cloudy","detailedForecast":"Partly cloudy, with a low around 34. West southwest wind around 14 mph, with gusts as high as 22 mph."},{"number":2,"name":"Saturday","startTime":"2023-04-29T06:00:00-06:00","endTime":"2023-04-29T18:00:00-06:00","isDaytime":true,"temperature":64,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":-2.2222222222222223},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":54},"windSpeed":"13 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/day/few?size=medium","shortForecast":"Sunny","detailedForecast":"Sunny, with a high near 64. West wind around 13 mph, with gusts as high as 21 mph."},{"number":3,"name":"Saturday Night","startTime":"2023-04-29T18:00:00-06:00","endTime":"2023-04-30T06:00:00-06:00","isDaytime":false,"temperature":36,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":-2.2222222222222223},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":61},"windSpeed":"3 to 12 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/night/sct?size=medium","shortForecast":"Partly Cloudy","detailedForecast":"Partly cloudy, with a low around 36. West wind 3 to 12 mph, with gusts as high as 18 mph."},{"number":4,"name":"Sunday","startTime":"2023-04-30T06:00:00-06:00","endTime":"2023-04-30T18:00:00-06:00","isDaytime":true,"temperature":62,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":30},"dewpoint":{"unitCode":"wmoUnit:degC","value":0.5555555555555556},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":61},"windSpeed":"3 to 10 mph","windDirection":"WNW","icon":"https://api.weather.gov/icons/land/day/sct/tsra_hi,30?size=medium","shortForecast":"Mostly Sunny then Chance Showers And Thunderstorms","detailedForecast":"A chance of showers and thunderstorms after noon. Mostly sunny, with a high near 62. West northwest wind 3 to 10 mph, with gusts as high as 16 mph. Chance of precipitation is 30%."},{"number":5,"name":"Sunday Night","startTime":"2023-04-30T18:00:00-06:00","endTime":"2023-05-01T06:00:00-06:00","isDaytime":false,"temperature":37,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":20},"dewpoint":{"unitCode":"wmoUnit:degC","value":0.5555555555555556},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":70},"windSpeed":"5 to 10 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/night/tsra_hi,20/sct?size=medium","shortForecast":"Slight Chance Showers And Thunderstorms then Partly Cloudy","detailedForecast":"A slight chance of showers and thunderstorms before midnight. Partly cloudy, with a low around 37. West wind 5 to 10 mph. Chance of precipitation is 20%."},{"number":6,"name":"Monday","startTime":"2023-05-01T06:00:00-06:00","endTime":"2023-05-01T18:00:00-06:00","isDaytime":true,"temperature":65,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":30},"dewpoint":{"unitCode":"wmoUnit:degC","value":0.5555555555555556},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":68},"windSpeed":"6 to 12 mph","windDirection":"N","icon":"https://api.weather.gov/icons/land/day/sct/tsra_hi,30?size=medium","shortForecast":"Mostly Sunny then Chance Showers And Thunderstorms","detailedForecast":"A chance of showers and thunderstorms after noon. Mostly sunny, with a high near 65. Chance of precipitation is 30%."},{"number":7,"name":"Monday Night","startTime":"2023-05-01T18:00:00-06:00","endTime":"2023-05-02T06:00:00-06:00","isDaytime":false,"temperature":40,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":20},"dewpoint":{"unitCode":"wmoUnit:degC","value":0.5555555555555556},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":63},"windSpeed":"12 mph","windDirection":"SSW","icon":"https://api.weather.gov/icons/land/night/rain_showers,20/sct?size=medium","shortForecast":"Slight Chance Rain Showers then Partly Cloudy","detailedForecast":"A slight chance of rain showers before midnight. Partly cloudy, with a low around 40. Chance of precipitation is 20%."},{"number":8,"name":"Tuesday","startTime":"2023-05-02T06:00:00-06:00","endTime":"2023-05-02T18:00:00-06:00","isDaytime":true,"temperature":66,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":1.6666666666666667},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":61},"windSpeed":"13 mph","windDirection":"WSW","icon":"https://api.weather.gov/icons/land/day/bkn/tsra_hi?size=medium","shortForecast":"Partly Sunny then Chance Showers And Thunderstorms","detailedForecast":"A chance of showers and thunderstorms after noon. Partly sunny, with a high near 66."},{"number":9,"name":"Tuesday Night","startTime":"2023-05-02T18:00:00-06:00","endTime":"2023-05-03T06:00:00-06:00","isDaytime":false,"temperature":41,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":1.6666666666666667},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":63},"windSpeed":"13 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/night/rain_showers/bkn?size=medium","shortForecast":"Chance Rain Showers then Mostly Cloudy","detailedForecast":"A chance of rain showers before midnight. Mostly cloudy, with a low around 41."},{"number":10,"name":"Wednesday","startTime":"2023-05-03T06:00:00-06:00","endTime":"2023-05-03T18:00:00-06:00","isDaytime":true,"temperature":68,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":0.5555555555555556},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":61},"windSpeed":"14 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/day/bkn/tsra_hi?size=medium","shortForecast":"Partly Sunny then Chance Showers And Thunderstorms","detailedForecast":"A chance of showers and thunderstorms after noon. Partly sunny, with a high near 68."},{"number":11,"name":"Wednesday Night","startTime":"2023-05-03T18:00:00-06:00","endTime":"2023-05-04T06:00:00-06:00","isDaytime":false,"temperature":41,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":1.1111111111111112},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":60},"windSpeed":"13 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/night/rain_showers/bkn?size=medium","shortForecast":"Chance Rain Showers then Mostly Cloudy","detailedForecast":"A chance of rain showers before midnight. Mostly cloudy, with a low around 41."},{"number":12,"name":"Thursday","startTime":"2023-05-04T06:00:00-06:00","endTime":"2023-05-04T18:00:00-06:00","isDaytime":true,"temperature":62,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":0.5555555555555556},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":58},"windSpeed":"12 to 15 mph","windDirection":"SSW","icon":"https://api.weather.gov/icons/land/day/rain_showers/tsra_hi?size=medium","shortForecast":"Showers And Thunderstorms Likely","detailedForecast":"A slight chance of rain showers before noon, then showers and thunderstorms likely. Partly sunny, with a high near 62."},{"number":13,"name":"Thursday Night","startTime":"2023-05-04T18:00:00-06:00","endTime":"2023-05-05T06:00:00-06:00","isDaytime":false,"temperature":37,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":0.5555555555555556},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":65},"windSpeed":"15 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/night/tsra_hi/snow?size=medium","shortForecast":"Chance Showers And Thunderstorms then Chance Rain And Snow Showers","detailedForecast":"A chance of showers and thunderstorms before 3am, then a chance of rain and snow showers. Mostly cloudy, with a low around 37."},{"number":14,"name":"Friday","startTime":"2023-05-05T06:00:00-06:00","endTime":"2023-05-05T18:00:00-06:00","isDaytime":true,"temperature":57,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":-1.6666666666666667},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":66},"windSpeed":"17 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/day/snow/tsra_hi?size=medium","shortForecast":"Chance Rain And Snow Showers then Chance Showers And Thunderstorms","detailedForecast":"A chance of rain and snow showers before noon, then a chance of showers and thunderstorms. Partly sunny, with a high near 57."}]}
  var hourly_BOU_46_92 = false
  var crags_config = [
  {
    "name": "Estes Park Valley",
    "note": "Good variety of granitic, gneiss, and schist crags.",
    "mountainProject": "https://www.mountainproject.com/area/105801865/estes-park-valley",
    "station": "KLMO",
    "office": "BOU/46,92",
    "coordinates": [
      -105.513,
      40.397
    ]
  }
]</script>

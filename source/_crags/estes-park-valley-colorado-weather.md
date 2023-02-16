---
### THIS FILE IS AUTO-GENERATED - DO NOT EDIT ###
layout: page
title: Estes Park Valley, Colorado Climbing Weather - Current, Past, and Forecasted Report
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
  var weekly_BOU_46_92 = {"updated":"2023-02-15T21:59:00+00:00","units":"us","forecastGenerator":"BaselineForecastGenerator","generatedAt":"2023-02-16T08:35:44+00:00","updateTime":"2023-02-15T21:59:00+00:00","validTimes":"2023-02-15T15:00:00+00:00/P7DT13H","elevation":{"unitCode":"wmoUnit:m","value":2542.9464},"periods":[{"number":1,"name":"Overnight","startTime":"2023-02-16T01:00:00-07:00","endTime":"2023-02-16T06:00:00-07:00","isDaytime":false,"temperature":0,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":20},"dewpoint":{"unitCode":"wmoUnit:degC","value":-20.555555555555557},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":72},"windSpeed":"5 to 10 mph","windDirection":"WNW","icon":"https://api.weather.gov/icons/land/night/snow,20?size=medium","shortForecast":"Slight Chance Light Snow","detailedForecast":"A slight chance of snow before 2am. Mostly cloudy, with a low around 0. Wind chill values as low as -16. West northwest wind 5 to 10 mph, with gusts as high as 16 mph. Chance of precipitation is 20%."},{"number":2,"name":"Thursday","startTime":"2023-02-16T06:00:00-07:00","endTime":"2023-02-16T18:00:00-07:00","isDaytime":true,"temperature":24,"temperatureUnit":"F","temperatureTrend":"falling","probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":-17.77777777777778},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":59},"windSpeed":"12 mph","windDirection":"WNW","icon":"https://api.weather.gov/icons/land/day/few?size=medium","shortForecast":"Sunny","detailedForecast":"Sunny. High near 24, with temperatures falling to around 21 in the afternoon. Wind chill values as low as -17. West northwest wind around 12 mph, with gusts as high as 18 mph."},{"number":3,"name":"Thursday Night","startTime":"2023-02-16T18:00:00-07:00","endTime":"2023-02-17T06:00:00-07:00","isDaytime":false,"temperature":10,"temperatureUnit":"F","temperatureTrend":"rising","probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":-18.333333333333332},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":46},"windSpeed":"12 to 17 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/night/cold?size=medium","shortForecast":"Clear","detailedForecast":"Clear. Low around 10, with temperatures rising to around 19 overnight. Wind chill values as low as -1. West wind 12 to 17 mph, with gusts as high as 28 mph."},{"number":4,"name":"Friday","startTime":"2023-02-17T06:00:00-07:00","endTime":"2023-02-17T18:00:00-07:00","isDaytime":true,"temperature":41,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":-12.222222222222221},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":42},"windSpeed":"14 to 21 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/day/wind_sct?size=medium","shortForecast":"Mostly Sunny","detailedForecast":"Mostly sunny, with a high near 41. West wind 14 to 21 mph, with gusts as high as 31 mph."},{"number":5,"name":"Friday Night","startTime":"2023-02-17T18:00:00-07:00","endTime":"2023-02-18T06:00:00-07:00","isDaytime":false,"temperature":22,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":-13.333333333333334},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":37},"windSpeed":"14 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/night/sct?size=medium","shortForecast":"Partly Cloudy","detailedForecast":"Partly cloudy, with a low around 22. West wind around 14 mph, with gusts as high as 22 mph."},{"number":6,"name":"Saturday","startTime":"2023-02-18T06:00:00-07:00","endTime":"2023-02-18T18:00:00-07:00","isDaytime":true,"temperature":39,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":-13.333333333333334},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":35},"windSpeed":"13 to 25 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/day/wind_sct?size=medium","shortForecast":"Mostly Sunny","detailedForecast":"Mostly sunny, with a high near 39."},{"number":7,"name":"Saturday Night","startTime":"2023-02-18T18:00:00-07:00","endTime":"2023-02-19T06:00:00-07:00","isDaytime":false,"temperature":24,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":-13.88888888888889},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":38},"windSpeed":"25 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/night/wind_sct?size=medium","shortForecast":"Partly Cloudy","detailedForecast":"Partly cloudy, with a low around 24."},{"number":8,"name":"Sunday","startTime":"2023-02-19T06:00:00-07:00","endTime":"2023-02-19T18:00:00-07:00","isDaytime":true,"temperature":36,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":-11.11111111111111},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":44},"windSpeed":"21 to 28 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/day/snow?size=medium","shortForecast":"Slight Chance Light Snow","detailedForecast":"A slight chance of snow after 11am. Partly sunny, with a high near 36."},{"number":9,"name":"Sunday Night","startTime":"2023-02-19T18:00:00-07:00","endTime":"2023-02-20T06:00:00-07:00","isDaytime":false,"temperature":26,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":-11.11111111111111},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":44},"windSpeed":"21 to 28 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/night/snow?size=medium","shortForecast":"Chance Light Snow","detailedForecast":"A chance of snow. Mostly cloudy, with a low around 26. New snow accumulation of less than half an inch possible."},{"number":10,"name":"Washington's Birthday","startTime":"2023-02-20T06:00:00-07:00","endTime":"2023-02-20T18:00:00-07:00","isDaytime":true,"temperature":37,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":-10.555555555555555},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":45},"windSpeed":"22 to 28 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/day/snow?size=medium","shortForecast":"Chance Light Snow","detailedForecast":"A chance of snow. Partly sunny, with a high near 37. New snow accumulation of 1 to 2 inches possible."},{"number":11,"name":"Monday Night","startTime":"2023-02-20T18:00:00-07:00","endTime":"2023-02-21T06:00:00-07:00","isDaytime":false,"temperature":22,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":-10},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":55},"windSpeed":"17 to 22 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/night/snow?size=medium","shortForecast":"Light Snow Likely","detailedForecast":"Snow likely. Mostly cloudy, with a low around 22. New snow accumulation of 1 to 3 inches possible."},{"number":12,"name":"Tuesday","startTime":"2023-02-21T06:00:00-07:00","endTime":"2023-02-21T18:00:00-07:00","isDaytime":true,"temperature":32,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":-12.222222222222221},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":56},"windSpeed":"15 to 18 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/day/snow?size=medium","shortForecast":"Light Snow Likely","detailedForecast":"Snow likely. Mostly cloudy, with a high near 32. New snow accumulation of 1 to 2 inches possible."},{"number":13,"name":"Tuesday Night","startTime":"2023-02-21T18:00:00-07:00","endTime":"2023-02-22T06:00:00-07:00","isDaytime":false,"temperature":18,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":-12.222222222222221},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":55},"windSpeed":"17 mph","windDirection":"WSW","icon":"https://api.weather.gov/icons/land/night/snow?size=medium","shortForecast":"Chance Light Snow","detailedForecast":"A chance of snow. Mostly cloudy, with a low around 18. New snow accumulation of 1 to 2 inches possible."},{"number":14,"name":"Wednesday","startTime":"2023-02-22T06:00:00-07:00","endTime":"2023-02-22T18:00:00-07:00","isDaytime":true,"temperature":33,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":-11.11111111111111},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":51},"windSpeed":"17 to 22 mph","windDirection":"WSW","icon":"https://api.weather.gov/icons/land/day/snow?size=medium","shortForecast":"Chance Light Snow","detailedForecast":"A chance of snow. Partly sunny, with a high near 33. New snow accumulation of less than one inch possible."}]}
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

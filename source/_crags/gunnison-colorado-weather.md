---
### THIS FILE IS AUTO-GENERATED - DO NOT EDIT ###
layout: page
title: Gunnison, Colorado Climbing Weather - Current, Past, and Forecasted
title_override: Gunnison<br /><small>Climbing Weather</small>
description: A lightweight weather report for Gunnison, Colorado. Optimized for slow internet connections.
js_includes:
  - weather.js
---

<section class="measure center lh-copy f5-ns f6 ph2 mv4" style="text-align: justify;">
<strong>"Is it dry?"</strong>, an oft-repeated, age-old question. Here are real-time,
precipitation-focused reports of current, past, and forecasted climbing weather for Gunnison, Colorado.
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
<section id="weather" data-crag="gunnison-colorado" class="mv4-ns mv3 ph2 center"></section>
<section id="nearby" class="tc lh-copy">
  <h3>Nearby Crags</h3>
<a class="nowrap no-underline fancy-link relative light-red mh3" href="/crags/clear-creek-canyon-colorado-weather.html">Clear Creek Canyon</a>
<a class="nowrap no-underline fancy-link relative light-red mh3" href="/crags/staunton-state-park-colorado-weather.html">Staunton State Park</a>
<a class="nowrap no-underline fancy-link relative light-red mh3" href="/crags/lime-park-lime-creek-colorado-weather.html">Lime Park (Lime Creek)</a>
<a class="nowrap no-underline fancy-link relative light-red mh3" href="/crags/independence-pass-colorado-weather.html">Independence Pass</a>
<a class="nowrap no-underline fancy-link relative light-red mh3" href="/crags/moab-utah-weather.html">Moab</a>
<a class="nowrap no-underline fancy-link relative light-red mh3" href="/crags/estes-park-valley-colorado-weather.html">Estes Park Valley</a>
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
  var weekly_GJT_152_72 = {"updated":"2024-02-07T07:47:06+00:00","units":"us","forecastGenerator":"BaselineForecastGenerator","generatedAt":"2024-02-07T08:32:20+00:00","updateTime":"2024-02-07T07:47:06+00:00","validTimes":"2024-02-07T01:00:00+00:00/P7DT5H","elevation":{"unitCode":"wmoUnit:m","value":2390.8512},"periods":[{"number":1,"name":"Overnight","startTime":"2024-02-07T01:00:00-07:00","endTime":"2024-02-07T06:00:00-07:00","isDaytime":false,"temperature":20,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":60},"dewpoint":{"unitCode":"wmoUnit:degC","value":-4.444444444444445},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":98},"windSpeed":"5 to 10 mph","windDirection":"ENE","icon":"https://api.weather.gov/icons/land/night/snow,60?size=medium","shortForecast":"Snow Showers Likely","detailedForecast":"Snow showers likely. Mostly cloudy, with a low around 20. East northeast wind 5 to 10 mph. Chance of precipitation is 60%. New snow accumulation of less than one inch possible."},{"number":2,"name":"Wednesday","startTime":"2024-02-07T06:00:00-07:00","endTime":"2024-02-07T18:00:00-07:00","isDaytime":true,"temperature":32,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":80},"dewpoint":{"unitCode":"wmoUnit:degC","value":-5},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":100},"windSpeed":"5 to 20 mph","windDirection":"S","icon":"https://api.weather.gov/icons/land/day/snow,80/snow,70?size=medium","shortForecast":"Snow Showers","detailedForecast":"Snow showers before 11am, then snow showers likely and a slight chance of thunderstorms. Mostly cloudy, with a high near 32. South wind 5 to 20 mph. Chance of precipitation is 80%. New snow accumulation of less than one inch possible."},{"number":3,"name":"Wednesday Night","startTime":"2024-02-07T18:00:00-07:00","endTime":"2024-02-08T06:00:00-07:00","isDaytime":false,"temperature":11,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":40},"dewpoint":{"unitCode":"wmoUnit:degC","value":-7.777777777777778},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":99},"windSpeed":"15 mph","windDirection":"WSW","icon":"https://api.weather.gov/icons/land/night/snow,40/snow,30?size=medium","shortForecast":"Chance Snow Showers","detailedForecast":"A chance of snow showers. Mostly cloudy, with a low around 11. West southwest wind around 15 mph, with gusts as high as 30 mph. Chance of precipitation is 40%. Little or no snow accumulation expected."},{"number":4,"name":"Thursday","startTime":"2024-02-08T06:00:00-07:00","endTime":"2024-02-08T18:00:00-07:00","isDaytime":true,"temperature":30,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":50},"dewpoint":{"unitCode":"wmoUnit:degC","value":-9.444444444444445},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":100},"windSpeed":"15 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/day/snow,50?size=medium","shortForecast":"Chance Snow Showers","detailedForecast":"A chance of snow showers. Mostly cloudy, with a high near 30. West wind around 15 mph. Chance of precipitation is 50%. New snow accumulation of less than half an inch possible."},{"number":5,"name":"Thursday Night","startTime":"2024-02-08T18:00:00-07:00","endTime":"2024-02-09T06:00:00-07:00","isDaytime":false,"temperature":5,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":20},"dewpoint":{"unitCode":"wmoUnit:degC","value":-10},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":100},"windSpeed":"5 to 10 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/night/snow,20?size=medium","shortForecast":"Slight Chance Snow Showers","detailedForecast":"A slight chance of snow showers before 5am. Mostly cloudy, with a low around 5. West wind 5 to 10 mph. Chance of precipitation is 20%."},{"number":6,"name":"Friday","startTime":"2024-02-09T06:00:00-07:00","endTime":"2024-02-09T18:00:00-07:00","isDaytime":true,"temperature":28,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":30},"dewpoint":{"unitCode":"wmoUnit:degC","value":-10.555555555555555},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":100},"windSpeed":"5 to 10 mph","windDirection":"WSW","icon":"https://api.weather.gov/icons/land/day/snow,30?size=medium","shortForecast":"Chance Snow Showers","detailedForecast":"A chance of snow showers after 11am. Partly sunny, with a high near 28. Chance of precipitation is 30%. Little or no snow accumulation expected."},{"number":7,"name":"Friday Night","startTime":"2024-02-09T18:00:00-07:00","endTime":"2024-02-10T06:00:00-07:00","isDaytime":false,"temperature":7,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":30},"dewpoint":{"unitCode":"wmoUnit:degC","value":-10.555555555555555},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":100},"windSpeed":"5 mph","windDirection":"SSW","icon":"https://api.weather.gov/icons/land/night/snow,30?size=medium","shortForecast":"Chance Snow Showers","detailedForecast":"A chance of snow showers. Mostly cloudy, with a low around 7. Chance of precipitation is 30%. Little or no snow accumulation expected."},{"number":8,"name":"Saturday","startTime":"2024-02-10T06:00:00-07:00","endTime":"2024-02-10T18:00:00-07:00","isDaytime":true,"temperature":27,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":-10.555555555555555},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":83},"windSpeed":"5 to 10 mph","windDirection":"S","icon":"https://api.weather.gov/icons/land/day/snow?size=medium","shortForecast":"Chance Snow Showers","detailedForecast":"A chance of snow showers. Mostly cloudy, with a high near 27. New snow accumulation of less than half an inch possible."},{"number":9,"name":"Saturday Night","startTime":"2024-02-10T18:00:00-07:00","endTime":"2024-02-11T06:00:00-07:00","isDaytime":false,"temperature":1,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":-11.11111111111111},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":100},"windSpeed":"5 to 10 mph","windDirection":"WNW","icon":"https://api.weather.gov/icons/land/night/snow/cold?size=medium","shortForecast":"Slight Chance Snow Showers then Mostly Cloudy","detailedForecast":"A slight chance of snow showers before 11pm. Mostly cloudy, with a low around 1."},{"number":10,"name":"Sunday","startTime":"2024-02-11T06:00:00-07:00","endTime":"2024-02-11T18:00:00-07:00","isDaytime":true,"temperature":26,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":-12.222222222222221},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":92},"windSpeed":"5 to 10 mph","windDirection":"WNW","icon":"https://api.weather.gov/icons/land/day/bkn?size=medium","shortForecast":"Partly Sunny","detailedForecast":"Partly sunny, with a high near 26."},{"number":11,"name":"Sunday Night","startTime":"2024-02-11T18:00:00-07:00","endTime":"2024-02-12T06:00:00-07:00","isDaytime":false,"temperature":-2,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":-12.777777777777779},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":100},"windSpeed":"5 to 10 mph","windDirection":"NW","icon":"https://api.weather.gov/icons/land/night/cold?size=medium","shortForecast":"Partly Cloudy","detailedForecast":"Partly cloudy, with a low around -2."},{"number":12,"name":"Monday","startTime":"2024-02-12T06:00:00-07:00","endTime":"2024-02-12T18:00:00-07:00","isDaytime":true,"temperature":28,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":-11.666666666666666},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":73},"windSpeed":"5 to 10 mph","windDirection":"WNW","icon":"https://api.weather.gov/icons/land/day/sct?size=medium","shortForecast":"Mostly Sunny","detailedForecast":"Mostly sunny, with a high near 28."},{"number":13,"name":"Monday Night","startTime":"2024-02-12T18:00:00-07:00","endTime":"2024-02-13T06:00:00-07:00","isDaytime":false,"temperature":1,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":-12.222222222222221},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":100},"windSpeed":"5 to 10 mph","windDirection":"NNW","icon":"https://api.weather.gov/icons/land/night/cold?size=medium","shortForecast":"Partly Cloudy","detailedForecast":"Partly cloudy, with a low around 1."},{"number":14,"name":"Tuesday","startTime":"2024-02-13T06:00:00-07:00","endTime":"2024-02-13T18:00:00-07:00","isDaytime":true,"temperature":30,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":-10.555555555555555},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":80},"windSpeed":"5 to 10 mph","windDirection":"WSW","icon":"https://api.weather.gov/icons/land/day/sct?size=medium","shortForecast":"Mostly Sunny","detailedForecast":"Mostly sunny, with a high near 30."}]}
  var hourly_GJT_152_72 = false
  var crags_config = [
  {
    "name": "Gunnison",
    "note": "Granite.",
    "mountainProject": "https://www.mountainproject.com/area/105802040/gunnison",
    "station": "KGUC",
    "office": "GJT/152,72",
    "coordinates": [
      -106.927,
      38.546
    ]
  }
]</script>

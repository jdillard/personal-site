---
### THIS FILE IS AUTO-GENERATED - DO NOT EDIT ###
layout: page
title: The Greenbelt, Texas Climbing Weather - Current, Past, and Forecasted
title_override: The Greenbelt<br /><small>Climbing Weather</small>
description: A lightweight weather report for The Greenbelt, Texas. Optimized for slow internet connections.
js_includes:
  - weather.js
---

<section class="measure center lh-copy f5-ns f6 ph2 mv4" style="text-align: justify;">
<strong>"Is it dry?"</strong>, an oft-repeated, age-old question. Here are real-time,
precipitation-focused reports of current, past, and forecasted climbing weather for The Greenbelt, Texas.
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
<section id="weather" data-crag="the-greenbelt-texas" class="mv4-ns mv3 ph2 center"></section>
<section id="nearby" class="tc lh-copy">
  <h3>Nearby Crags</h3>
<a class="nowrap no-underline fancy-link relative light-red mh3" href="/crags/continental-ranch-texas-weather.html">Continental Ranch</a>
<a class="nowrap no-underline fancy-link relative light-red mh3" href="/crags/pace-bend-park-texas-weather.html">Pace Bend Park</a>
<a class="nowrap no-underline fancy-link relative light-red mh3" href="/crags/reimers-ranch-texas-weather.html">Reimer's Ranch</a>
<a class="nowrap no-underline fancy-link relative light-red mh3" href="/crags/cochise-stronghold-arizona-weather.html">Cochise Stronghold</a>
<a class="nowrap no-underline fancy-link relative light-red mh3" href="/crags/enchanted-rock-texas-weather.html">Enchanted Rock</a>
<a class="nowrap no-underline fancy-link relative light-red mh3" href="/crags/horseshoe-canyon-ranch-arkansas-weather.html">Horseshoe Canyon Ranch</a>
<a class="nowrap no-underline fancy-link relative light-red mh3" href="/crags/last-chance-canyon-new-mexico-weather.html">Last Chance Canyon</a>
<a class="nowrap no-underline fancy-link relative light-red mh3" href="/crags/georgetown-texas-weather.html">Georgetown</a>
<a class="nowrap no-underline fancy-link relative light-red mh3" href="/crags/mckinney-falls-texas-weather.html">McKinney Falls</a>
<a class="nowrap no-underline fancy-link relative light-red mh3" href="/crags/hueco-tanks-texas-weather.html">Hueco Tanks</a>
</section>
<section id="nearby" class="tc lh-copy">
  <h3>Other Metros</h3>
  <select class="ma1 bg-near-white pa2" id="stateSel">
    <option value="Texas" selected>Texas</option>
    <option value="Washington">Washington</option>
    <option value="Colorado">Colorado</option>
    <option value="Tennessee">Tennessee</option>
    <option value="Utah">Utah</option>
    <option value="California">California</option>
  </select>
  <select class="ma1 bg-near-white pa2" id="citySel">
    <option value="Austin" selected>Austin</option>
  </select>
  <a id="selectMetro" class="f6 link dim ph3 pv2 ma1 dib white bg-light-red" href="/crags/austin-texas-weather.html">Select Metro</a>
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
  var weekly_EWX_153_89 = {"updated":"2024-05-27T08:16:31+00:00","units":"us","forecastGenerator":"BaselineForecastGenerator","generatedAt":"2024-05-27T08:32:40+00:00","updateTime":"2024-05-27T08:16:31+00:00","validTimes":"2024-05-27T02:00:00+00:00/P7DT23H","elevation":{"unitCode":"wmoUnit:m","value":213.0552},"periods":[{"number":1,"name":"Overnight","startTime":"2024-05-27T03:00:00-05:00","endTime":"2024-05-27T06:00:00-05:00","isDaytime":false,"temperature":78,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":25},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":93},"windSpeed":"5 mph","windDirection":"SSW","icon":"https://api.weather.gov/icons/land/night/bkn?size=medium","shortForecast":"Mostly Cloudy","detailedForecast":"Mostly cloudy, with a low around 78. South southwest wind around 5 mph."},{"number":2,"name":"Memorial Day","startTime":"2024-05-27T06:00:00-05:00","endTime":"2024-05-27T18:00:00-05:00","isDaytime":true,"temperature":98,"temperatureUnit":"F","temperatureTrend":"falling","probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":20},"dewpoint":{"unitCode":"wmoUnit:degC","value":25.555555555555557},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":94},"windSpeed":"0 to 5 mph","windDirection":"SSE","icon":"https://api.weather.gov/icons/land/day/sct/tsra_hi,20?size=medium","shortForecast":"Mostly Sunny then Slight Chance Showers And Thunderstorms","detailedForecast":"A slight chance of showers and thunderstorms after 4pm. Mostly sunny. High near 98, with temperatures falling to around 94 in the afternoon. Heat index values as high as 110. South southeast wind 0 to 5 mph. Chance of precipitation is 20%. New rainfall amounts between a tenth and quarter of an inch possible."},{"number":3,"name":"Monday Night","startTime":"2024-05-27T18:00:00-05:00","endTime":"2024-05-28T06:00:00-05:00","isDaytime":false,"temperature":74,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":20},"dewpoint":{"unitCode":"wmoUnit:degC","value":22.77777777777778},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":92},"windSpeed":"5 mph","windDirection":"SSE","icon":"https://api.weather.gov/icons/land/night/tsra_hi,20?size=medium","shortForecast":"Slight Chance Showers And Thunderstorms","detailedForecast":"A slight chance of showers and thunderstorms before 1am. Partly cloudy, with a low around 74. South southeast wind around 5 mph. Chance of precipitation is 20%. New rainfall amounts between a tenth and quarter of an inch possible."},{"number":4,"name":"Tuesday","startTime":"2024-05-28T06:00:00-05:00","endTime":"2024-05-28T18:00:00-05:00","isDaytime":true,"temperature":94,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":30},"dewpoint":{"unitCode":"wmoUnit:degC","value":23.88888888888889},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":94},"windSpeed":"5 to 10 mph","windDirection":"SSE","icon":"https://api.weather.gov/icons/land/day/bkn/tsra_hi,30?size=medium","shortForecast":"Partly Sunny then Chance Showers And Thunderstorms","detailedForecast":"A chance of showers and thunderstorms after 1pm. Partly sunny, with a high near 94. Heat index values as high as 104. South southeast wind 5 to 10 mph. Chance of precipitation is 30%."},{"number":5,"name":"Tuesday Night","startTime":"2024-05-28T18:00:00-05:00","endTime":"2024-05-29T06:00:00-05:00","isDaytime":false,"temperature":71,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":40},"dewpoint":{"unitCode":"wmoUnit:degC","value":23.333333333333332},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":96},"windSpeed":"5 to 10 mph","windDirection":"SE","icon":"https://api.weather.gov/icons/land/night/tsra,40?size=medium","shortForecast":"Chance Showers And Thunderstorms","detailedForecast":"A chance of showers and thunderstorms. Mostly cloudy, with a low around 71. Southeast wind 5 to 10 mph, with gusts as high as 20 mph. Chance of precipitation is 40%."},{"number":6,"name":"Wednesday","startTime":"2024-05-29T06:00:00-05:00","endTime":"2024-05-29T18:00:00-05:00","isDaytime":true,"temperature":89,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":30},"dewpoint":{"unitCode":"wmoUnit:degC","value":23.333333333333332},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":99},"windSpeed":"5 mph","windDirection":"ESE","icon":"https://api.weather.gov/icons/land/day/tsra_sct,20/tsra_sct,30?size=medium","shortForecast":"Chance Showers And Thunderstorms","detailedForecast":"A chance of showers and thunderstorms. Partly sunny, with a high near 89. East southeast wind around 5 mph. Chance of precipitation is 30%."},{"number":7,"name":"Wednesday Night","startTime":"2024-05-29T18:00:00-05:00","endTime":"2024-05-30T06:00:00-05:00","isDaytime":false,"temperature":72,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":40},"dewpoint":{"unitCode":"wmoUnit:degC","value":22.22222222222222},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":97},"windSpeed":"5 to 10 mph","windDirection":"ESE","icon":"https://api.weather.gov/icons/land/night/tsra_sct,40?size=medium","shortForecast":"Chance Showers And Thunderstorms","detailedForecast":"A chance of showers and thunderstorms. Mostly cloudy, with a low around 72. East southeast wind 5 to 10 mph. Chance of precipitation is 40%."},{"number":8,"name":"Thursday","startTime":"2024-05-30T06:00:00-05:00","endTime":"2024-05-30T18:00:00-05:00","isDaytime":true,"temperature":89,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":20},"dewpoint":{"unitCode":"wmoUnit:degC","value":23.333333333333332},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":99},"windSpeed":"5 to 10 mph","windDirection":"SE","icon":"https://api.weather.gov/icons/land/day/tsra_sct,20?size=medium","shortForecast":"Slight Chance Showers And Thunderstorms","detailedForecast":"A slight chance of showers and thunderstorms. Partly sunny, with a high near 89. Southeast wind 5 to 10 mph, with gusts as high as 20 mph. Chance of precipitation is 20%."},{"number":9,"name":"Thursday Night","startTime":"2024-05-30T18:00:00-05:00","endTime":"2024-05-31T06:00:00-05:00","isDaytime":false,"temperature":74,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":20},"dewpoint":{"unitCode":"wmoUnit:degC","value":22.77777777777778},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":94},"windSpeed":"5 to 10 mph","windDirection":"SE","icon":"https://api.weather.gov/icons/land/night/tsra_sct,20?size=medium","shortForecast":"Slight Chance Showers And Thunderstorms","detailedForecast":"A slight chance of showers and thunderstorms before 1am. Mostly cloudy, with a low around 74. Southeast wind 5 to 10 mph, with gusts as high as 20 mph. Chance of precipitation is 20%."},{"number":10,"name":"Friday","startTime":"2024-05-31T06:00:00-05:00","endTime":"2024-05-31T18:00:00-05:00","isDaytime":true,"temperature":90,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":30},"dewpoint":{"unitCode":"wmoUnit:degC","value":23.88888888888889},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":96},"windSpeed":"5 to 10 mph","windDirection":"SSE","icon":"https://api.weather.gov/icons/land/day/bkn/tsra_sct,30?size=medium","shortForecast":"Partly Sunny then Chance Showers And Thunderstorms","detailedForecast":"A chance of showers and thunderstorms after 1pm. Partly sunny, with a high near 90. Chance of precipitation is 30%."},{"number":11,"name":"Friday Night","startTime":"2024-05-31T18:00:00-05:00","endTime":"2024-06-01T06:00:00-05:00","isDaytime":false,"temperature":74,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":30},"dewpoint":{"unitCode":"wmoUnit:degC","value":23.333333333333332},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":98},"windSpeed":"5 to 10 mph","windDirection":"SE","icon":"https://api.weather.gov/icons/land/night/tsra_hi,30?size=medium","shortForecast":"Chance Showers And Thunderstorms","detailedForecast":"A chance of showers and thunderstorms. Mostly cloudy, with a low around 74. Chance of precipitation is 30%."},{"number":12,"name":"Saturday","startTime":"2024-06-01T06:00:00-05:00","endTime":"2024-06-01T18:00:00-05:00","isDaytime":true,"temperature":91,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":30},"dewpoint":{"unitCode":"wmoUnit:degC","value":23.88888888888889},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":96},"windSpeed":"5 mph","windDirection":"SE","icon":"https://api.weather.gov/icons/land/day/tsra_hi,20/tsra_hi,30?size=medium","shortForecast":"Chance Showers And Thunderstorms","detailedForecast":"A chance of showers and thunderstorms. Partly sunny, with a high near 91. Chance of precipitation is 30%."},{"number":13,"name":"Saturday Night","startTime":"2024-06-01T18:00:00-05:00","endTime":"2024-06-02T06:00:00-05:00","isDaytime":false,"temperature":73,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":30},"dewpoint":{"unitCode":"wmoUnit:degC","value":22.77777777777778},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":99},"windSpeed":"5 mph","windDirection":"SE","icon":"https://api.weather.gov/icons/land/night/tsra_hi,30/tsra_hi,20?size=medium","shortForecast":"Chance Showers And Thunderstorms","detailedForecast":"A chance of showers and thunderstorms before 1am. Mostly cloudy, with a low around 73. Chance of precipitation is 30%."},{"number":14,"name":"Sunday","startTime":"2024-06-02T06:00:00-05:00","endTime":"2024-06-02T18:00:00-05:00","isDaytime":true,"temperature":90,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":20},"dewpoint":{"unitCode":"wmoUnit:degC","value":23.88888888888889},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":97},"windSpeed":"5 mph","windDirection":"SE","icon":"https://api.weather.gov/icons/land/day/bkn/tsra_hi,20?size=medium","shortForecast":"Partly Sunny then Slight Chance Showers And Thunderstorms","detailedForecast":"A slight chance of showers and thunderstorms after 1pm. Partly sunny, with a high near 90. Chance of precipitation is 20%."}]}
  var hourly_EWX_153_89 = false
  var crags_config = [
  {
    "name": "The Greenbelt",
    "note": "Porous limestone that can take a couple days to dry out.",
    "mountainProject": "https://www.mountainproject.com/area/105905087/barton-creek-greenbelt",
    "station": "KATT",
    "office": "EWX/153,89",
    "coordinates": [
      -97.801,
      30.244
    ]
  }
]</script>

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
  var weekly_BOU_46_92 = {"updated":"2022-07-28T07:19:50+00:00","units":"us","forecastGenerator":"BaselineForecastGenerator","generatedAt":"2022-07-28T08:40:24+00:00","updateTime":"2022-07-28T07:19:50+00:00","validTimes":"2022-07-28T01:00:00+00:00/P7DT5H","elevation":{"unitCode":"wmoUnit:m","value":2542.9464},"periods":[{"number":1,"name":"Overnight","startTime":"2022-07-28T02:00:00-06:00","endTime":"2022-07-28T06:00:00-06:00","isDaytime":false,"temperature":51,"temperatureUnit":"F","temperatureTrend":"rising","windSpeed":"5 mph","windDirection":"ENE","icon":"https://api.weather.gov/icons/land/night/tsra,30?size=medium","shortForecast":"Chance Showers And Thunderstorms","detailedForecast":"A chance of showers and thunderstorms. Mostly cloudy. Low around 51, with temperatures rising to around 53 overnight. East northeast wind around 5 mph. Chance of precipitation is 30%. New rainfall amounts less than a tenth of an inch possible."},{"number":2,"name":"Thursday","startTime":"2022-07-28T06:00:00-06:00","endTime":"2022-07-28T18:00:00-06:00","isDaytime":true,"temperature":67,"temperatureUnit":"F","temperatureTrend":"falling","windSpeed":"5 to 9 mph","windDirection":"S","icon":"https://api.weather.gov/icons/land/day/tsra,50/tsra,90?size=medium","shortForecast":"Chance Showers And Thunderstorms then Showers And Thunderstorms","detailedForecast":"A chance of showers and thunderstorms before 9am, then showers and thunderstorms. Mostly cloudy. High near 67, with temperatures falling to around 62 in the afternoon. South wind 5 to 9 mph, with gusts as high as 16 mph. Chance of precipitation is 90%. New rainfall amounts between a quarter and half of an inch possible."},{"number":3,"name":"Thursday Night","startTime":"2022-07-28T18:00:00-06:00","endTime":"2022-07-29T06:00:00-06:00","isDaytime":false,"temperature":49,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"3 to 8 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/night/tsra_sct,60/tsra_sct,20?size=medium","shortForecast":"Showers And Thunderstorms Likely","detailedForecast":"Showers and thunderstorms likely before 9pm, then showers and thunderstorms likely between 9pm and midnight, then a slight chance of showers and thunderstorms. Mostly cloudy, with a low around 49. West wind 3 to 8 mph. Chance of precipitation is 60%."},{"number":4,"name":"Friday","startTime":"2022-07-29T06:00:00-06:00","endTime":"2022-07-29T18:00:00-06:00","isDaytime":true,"temperature":68,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"3 to 10 mph","windDirection":"E","icon":"https://api.weather.gov/icons/land/day/tsra_hi,20/tsra_hi,70?size=medium","shortForecast":"Showers And Thunderstorms Likely","detailedForecast":"A slight chance of rain showers before 9am, then showers and thunderstorms likely. Partly sunny, with a high near 68. East wind 3 to 10 mph. Chance of precipitation is 70%."},{"number":5,"name":"Friday Night","startTime":"2022-07-29T18:00:00-06:00","endTime":"2022-07-30T06:00:00-06:00","isDaytime":false,"temperature":49,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"5 to 8 mph","windDirection":"SSW","icon":"https://api.weather.gov/icons/land/night/tsra_hi,30/sct?size=medium","shortForecast":"Chance Showers And Thunderstorms then Partly Cloudy","detailedForecast":"A chance of showers and thunderstorms before 9pm, then a chance of showers and thunderstorms between 9pm and midnight. Partly cloudy, with a low around 49. South southwest wind 5 to 8 mph. Chance of precipitation is 30%."},{"number":6,"name":"Saturday","startTime":"2022-07-30T06:00:00-06:00","endTime":"2022-07-30T18:00:00-06:00","isDaytime":true,"temperature":73,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"7 to 12 mph","windDirection":"NNE","icon":"https://api.weather.gov/icons/land/day/sct/tsra_hi,60?size=medium","shortForecast":"Mostly Sunny then Showers And Thunderstorms Likely","detailedForecast":"Showers and thunderstorms likely after noon. Mostly sunny, with a high near 73. Chance of precipitation is 60%."},{"number":7,"name":"Saturday Night","startTime":"2022-07-30T18:00:00-06:00","endTime":"2022-07-31T06:00:00-06:00","isDaytime":false,"temperature":52,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"9 mph","windDirection":"WSW","icon":"https://api.weather.gov/icons/land/night/tsra_hi,20/sct?size=medium","shortForecast":"Slight Chance Showers And Thunderstorms then Partly Cloudy","detailedForecast":"A slight chance of showers and thunderstorms before midnight. Partly cloudy, with a low around 52. Chance of precipitation is 20%."},{"number":8,"name":"Sunday","startTime":"2022-07-31T06:00:00-06:00","endTime":"2022-07-31T18:00:00-06:00","isDaytime":true,"temperature":75,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"13 mph","windDirection":"N","icon":"https://api.weather.gov/icons/land/day/sct/tsra_hi?size=medium","shortForecast":"Mostly Sunny then Chance Showers And Thunderstorms","detailedForecast":"A chance of showers and thunderstorms after noon. Mostly sunny, with a high near 75."},{"number":9,"name":"Sunday Night","startTime":"2022-07-31T18:00:00-06:00","endTime":"2022-08-01T06:00:00-06:00","isDaytime":false,"temperature":53,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"9 mph","windDirection":"WSW","icon":"https://api.weather.gov/icons/land/night/tsra_hi/few?size=medium","shortForecast":"Slight Chance Showers And Thunderstorms then Mostly Clear","detailedForecast":"A slight chance of showers and thunderstorms before midnight. Mostly clear, with a low around 53."},{"number":10,"name":"Monday","startTime":"2022-08-01T06:00:00-06:00","endTime":"2022-08-01T18:00:00-06:00","isDaytime":true,"temperature":79,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"13 mph","windDirection":"SSW","icon":"https://api.weather.gov/icons/land/day/sct/tsra_hi?size=medium","shortForecast":"Mostly Sunny then Slight Chance Showers And Thunderstorms","detailedForecast":"A slight chance of showers and thunderstorms after noon. Mostly sunny, with a high near 79."},{"number":11,"name":"Monday Night","startTime":"2022-08-01T18:00:00-06:00","endTime":"2022-08-02T06:00:00-06:00","isDaytime":false,"temperature":54,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"10 mph","windDirection":"SW","icon":"https://api.weather.gov/icons/land/night/tsra_hi/sct?size=medium","shortForecast":"Slight Chance Showers And Thunderstorms then Partly Cloudy","detailedForecast":"A slight chance of showers and thunderstorms before midnight. Partly cloudy, with a low around 54."},{"number":12,"name":"Tuesday","startTime":"2022-08-02T06:00:00-06:00","endTime":"2022-08-02T18:00:00-06:00","isDaytime":true,"temperature":79,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"13 mph","windDirection":"SSW","icon":"https://api.weather.gov/icons/land/day/sct/tsra_hi?size=medium","shortForecast":"Mostly Sunny then Chance Showers And Thunderstorms","detailedForecast":"A chance of showers and thunderstorms after noon. Mostly sunny, with a high near 79."},{"number":13,"name":"Tuesday Night","startTime":"2022-08-02T18:00:00-06:00","endTime":"2022-08-03T06:00:00-06:00","isDaytime":false,"temperature":54,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"10 mph","windDirection":"WSW","icon":"https://api.weather.gov/icons/land/night/tsra_hi/sct?size=medium","shortForecast":"Chance Showers And Thunderstorms then Partly Cloudy","detailedForecast":"A chance of showers and thunderstorms before midnight. Partly cloudy, with a low around 54."},{"number":14,"name":"Wednesday","startTime":"2022-08-03T06:00:00-06:00","endTime":"2022-08-03T18:00:00-06:00","isDaytime":true,"temperature":77,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"13 mph","windDirection":"S","icon":"https://api.weather.gov/icons/land/day/bkn/tsra_hi?size=medium","shortForecast":"Partly Sunny then Showers And Thunderstorms Likely","detailedForecast":"Showers and thunderstorms likely after noon. Partly sunny, with a high near 77."}]}
  var hourly_BOU_46_92 = {"correlationId":"21220346","title":"Unexpected Problem","type":"https://api.weather.gov/problems/UnexpectedProblem","status":500,"detail":"An unexpected problem has occurred.","instance":"https://api.weather.gov/requests/21220346"}
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

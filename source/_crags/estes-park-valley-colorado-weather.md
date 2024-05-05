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
  var weekly_BOU_46_92 = {"updated":"2024-05-05T02:01:03+00:00","units":"us","forecastGenerator":"BaselineForecastGenerator","generatedAt":"2024-05-05T08:32:02+00:00","updateTime":"2024-05-05T02:01:03+00:00","validTimes":"2024-05-04T19:00:00+00:00/P7DT11H","elevation":{"unitCode":"wmoUnit:m","value":2438.0952},"periods":[{"number":1,"name":"Overnight","startTime":"2024-05-05T02:00:00-06:00","endTime":"2024-05-05T06:00:00-06:00","isDaytime":false,"temperature":35,"temperatureUnit":"F","temperatureTrend":"rising","probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":-1.6666666666666667},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":62},"windSpeed":"7 mph","windDirection":"WSW","icon":"https://api.weather.gov/icons/land/night/few?size=medium","shortForecast":"Mostly Clear","detailedForecast":"Mostly clear. Low around 35, with temperatures rising to around 39 overnight. West southwest wind around 7 mph."},{"number":2,"name":"Sunday","startTime":"2024-05-05T06:00:00-06:00","endTime":"2024-05-05T18:00:00-06:00","isDaytime":true,"temperature":68,"temperatureUnit":"F","temperatureTrend":"falling","probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":20},"dewpoint":{"unitCode":"wmoUnit:degC","value":-0.5555555555555556},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":67},"windSpeed":"5 to 16 mph","windDirection":"SSW","icon":"https://api.weather.gov/icons/land/day/bkn/tsra_sct,20?size=medium","shortForecast":"Partly Sunny then Slight Chance Showers And Thunderstorms","detailedForecast":"A slight chance of showers and thunderstorms after noon. Partly sunny. High near 68, with temperatures falling to around 66 in the afternoon. South southwest wind 5 to 16 mph, with gusts as high as 25 mph. Chance of precipitation is 20%."},{"number":3,"name":"Sunday Night","startTime":"2024-05-05T18:00:00-06:00","endTime":"2024-05-06T06:00:00-06:00","isDaytime":false,"temperature":34,"temperatureUnit":"F","temperatureTrend":"rising","probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":50},"dewpoint":{"unitCode":"wmoUnit:degC","value":-1.1111111111111112},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":59},"windSpeed":"9 to 23 mph","windDirection":"WSW","icon":"https://api.weather.gov/icons/land/night/tsra_sct,30/snow,50?size=medium","shortForecast":"Chance Showers And Thunderstorms then Chance Rain And Snow Showers","detailedForecast":"A chance of showers and thunderstorms before 3am, then a chance of rain and snow showers. Mostly cloudy. Low around 34, with temperatures rising to around 37 overnight. West southwest wind 9 to 23 mph, with gusts as high as 38 mph. Chance of precipitation is 50%."},{"number":4,"name":"Monday","startTime":"2024-05-06T06:00:00-06:00","endTime":"2024-05-06T18:00:00-06:00","isDaytime":true,"temperature":47,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":60},"dewpoint":{"unitCode":"wmoUnit:degC","value":-7.222222222222222},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":50},"windSpeed":"33 to 47 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/day/blizzard,60/snow,50?size=medium","shortForecast":"Snow Showers Likely And Patchy Blowing Snow","detailedForecast":"Snow showers likely before 8am, then snow showers likely and patchy blowing snow between 8am and noon, then a chance of snow showers and a slight chance of thunderstorms. Mostly cloudy, with a high near 47. West wind 33 to 47 mph, with gusts as high as 70 mph. Chance of precipitation is 60%. New snow accumulation of less than half an inch possible."},{"number":5,"name":"Monday Night","startTime":"2024-05-06T18:00:00-06:00","endTime":"2024-05-07T06:00:00-06:00","isDaytime":false,"temperature":31,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":30},"dewpoint":{"unitCode":"wmoUnit:degC","value":-7.222222222222222},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":57},"windSpeed":"29 to 44 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/night/snow,30/snow,20?size=medium","shortForecast":"Chance Snow Showers","detailedForecast":"A chance of snow showers and a slight chance of thunderstorms. Mostly cloudy, with a low around 31. West wind 29 to 44 mph, with gusts as high as 66 mph. Chance of precipitation is 30%. New snow accumulation of less than half an inch possible."},{"number":6,"name":"Tuesday","startTime":"2024-05-07T06:00:00-06:00","endTime":"2024-05-07T18:00:00-06:00","isDaytime":true,"temperature":47,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":60},"dewpoint":{"unitCode":"wmoUnit:degC","value":-7.777777777777778},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":56},"windSpeed":"28 to 38 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/day/snow,40/snow,60?size=medium","shortForecast":"Snow Showers Likely","detailedForecast":"A chance of snow showers before noon, then snow showers likely and a chance of thunderstorms. Partly sunny, with a high near 47. Chance of precipitation is 60%. New snow accumulation of less than half an inch possible."},{"number":7,"name":"Tuesday Night","startTime":"2024-05-07T18:00:00-06:00","endTime":"2024-05-08T06:00:00-06:00","isDaytime":false,"temperature":26,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":30},"dewpoint":{"unitCode":"wmoUnit:degC","value":-8.333333333333334},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":52},"windSpeed":"23 to 29 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/night/snow,30/wind_bkn?size=medium","shortForecast":"Chance Snow Showers then Mostly Cloudy","detailedForecast":"A chance of snow showers before midnight. Mostly cloudy, with a low around 26. Chance of precipitation is 30%. New snow accumulation of less than half an inch possible."},{"number":8,"name":"Wednesday","startTime":"2024-05-08T06:00:00-06:00","endTime":"2024-05-08T18:00:00-06:00","isDaytime":true,"temperature":47,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":-9.444444444444445},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":52},"windSpeed":"22 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/day/wind_sct/snow?size=medium","shortForecast":"Mostly Sunny then Chance Snow Showers","detailedForecast":"A chance of snow showers and a slight chance of thunderstorms after noon. Mostly sunny, with a high near 47."},{"number":9,"name":"Wednesday Night","startTime":"2024-05-08T18:00:00-06:00","endTime":"2024-05-09T06:00:00-06:00","isDaytime":false,"temperature":28,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":-7.222222222222222},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":63},"windSpeed":"14 to 18 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/night/snow?size=medium","shortForecast":"Chance Snow Showers","detailedForecast":"A chance of snow showers. Mostly cloudy, with a low around 28."},{"number":10,"name":"Thursday","startTime":"2024-05-09T06:00:00-06:00","endTime":"2024-05-09T18:00:00-06:00","isDaytime":true,"temperature":49,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":-3.888888888888889},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":63},"windSpeed":"14 mph","windDirection":"NNW","icon":"https://api.weather.gov/icons/land/day/snow?size=medium","shortForecast":"Snow Showers Likely","detailedForecast":"A chance of snow showers before noon, then snow showers likely and a chance of thunderstorms between noon and 4pm, then showers and thunderstorms likely. Partly sunny, with a high near 49."},{"number":11,"name":"Thursday Night","startTime":"2024-05-09T18:00:00-06:00","endTime":"2024-05-10T06:00:00-06:00","isDaytime":false,"temperature":30,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":-2.2222222222222223},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":81},"windSpeed":"13 mph","windDirection":"NE","icon":"https://api.weather.gov/icons/land/night/snow?size=medium","shortForecast":"Chance Snow Showers","detailedForecast":"A chance of showers and thunderstorms before 7pm, then a chance of snow showers and a slight chance of thunderstorms. Mostly cloudy, with a low around 30. New snow accumulation of less than one inch possible."},{"number":12,"name":"Friday","startTime":"2024-05-10T06:00:00-06:00","endTime":"2024-05-10T18:00:00-06:00","isDaytime":true,"temperature":48,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":-2.2222222222222223},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":81},"windSpeed":"13 mph","windDirection":"ENE","icon":"https://api.weather.gov/icons/land/day/snow/tsra?size=medium","shortForecast":"Chance Snow Showers then Showers And Thunderstorms Likely","detailedForecast":"A chance of snow showers before noon, then showers and thunderstorms likely. Mostly cloudy, with a high near 48. New snow accumulation of less than half an inch possible."},{"number":13,"name":"Friday Night","startTime":"2024-05-10T18:00:00-06:00","endTime":"2024-05-11T06:00:00-06:00","isDaytime":false,"temperature":32,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":-1.6666666666666667},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":76},"windSpeed":"12 mph","windDirection":"N","icon":"https://api.weather.gov/icons/land/night/snow?size=medium","shortForecast":"Slight Chance T-storms","detailedForecast":"A chance of showers and thunderstorms before 8pm, then a slight chance of thunderstorms and a chance of rain and snow showers. Mostly cloudy, with a low around 32."},{"number":14,"name":"Saturday","startTime":"2024-05-11T06:00:00-06:00","endTime":"2024-05-11T18:00:00-06:00","isDaytime":true,"temperature":55,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":-1.6666666666666667},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":76},"windSpeed":"13 mph","windDirection":"NNE","icon":"https://api.weather.gov/icons/land/day/snow/tsra_hi?size=medium","shortForecast":"Slight Chance Snow Showers then Chance Showers And Thunderstorms","detailedForecast":"A slight chance of snow showers before 10am, then a slight chance of rain showers between 10am and noon, then a chance of showers and thunderstorms. Partly sunny, with a high near 55."}]}
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

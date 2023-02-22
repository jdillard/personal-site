---
### THIS FILE IS AUTO-GENERATED - DO NOT EDIT ###
layout: page
title: Vantage, Washington Climbing Weather - Current, Past, and Forecasted Report
title_override: Vantage<br /><small>Climbing Weather</small>
description: A lightweight weather report for Vantage, Washington. Optimized for slow internet connections.
js_includes:
  - weather.js
---

<section class="measure center lh-copy f5-ns f6 ph2 mv4" style="text-align: justify;">
<strong>"Is it dry?"</strong>, an oft-repeated, age-old question. Here are real-time,
precipitation-focused reports of current, past, and forecasted climbing weather for Vantage, Washington.
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
<section id="weather" data-crag="vantage-washington" class="mv4-ns mv3 ph2 center"></section>
<section id="nearby" class="tc lh-copy">
  <h3>Nearby Crags</h3>
<a class="nowrap no-underline fancy-link relative light-red mh3" href="/crags/icicle-creek-washington-weather.html">Icicle Creek</a>
<a class="nowrap no-underline fancy-link relative light-red mh3" href="/crags/tieton-river-rock-washington-weather.html">Tieton River Rock</a>
<a class="nowrap no-underline fancy-link relative light-red mh3" href="/crags/mount-erie-washington-weather.html">Mount Erie</a>
<a class="nowrap no-underline fancy-link relative light-red mh3" href="/crags/index-washington-weather.html">Index</a>
<a class="nowrap no-underline fancy-link relative light-red mh3" href="/crags/darrington-washington-weather.html">Darrington</a>
<a class="nowrap no-underline fancy-link relative light-red mh3" href="/crags/smith-rock-oregon-weather.html">Smith Rock</a>
<a class="nowrap no-underline fancy-link relative light-red mh3" href="/crags/trout-creek-oregon-weather.html">Trout Creek</a>
</section>
<section id="nearby" class="tc lh-copy">
  <h3>Other Metros</h3>
  <select class="ma1 bg-near-white pa2" id="stateSel">
    <option value="Texas">Texas</option>
    <option value="Washington" selected>Washington</option>
    <option value="Colorado">Colorado</option>
    <option value="Tennessee">Tennessee</option>
    <option value="Utah">Utah</option>
    <option value="California">California</option>
  </select>
  <select class="ma1 bg-near-white pa2" id="citySel">
    <option value="Seattle" selected>Seattle</option>
  </select>
  <a id="selectMetro" class="f6 link dim ph3 pv2 ma1 dib white bg-light-red" href="/crags/seattle-washington-weather.html">Select Metro</a>
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
  var weekly_OTX_54_74 = {"updated":"2023-02-22T07:35:20+00:00","units":"us","forecastGenerator":"BaselineForecastGenerator","generatedAt":"2023-02-22T08:34:55+00:00","updateTime":"2023-02-22T07:35:20+00:00","validTimes":"2023-02-22T01:00:00+00:00/P7D","elevation":{"unitCode":"wmoUnit:m","value":374.904},"periods":[{"number":1,"name":"Overnight","startTime":"2023-02-22T00:00:00-08:00","endTime":"2023-02-22T06:00:00-08:00","isDaytime":false,"temperature":22,"temperatureUnit":"F","temperatureTrend":"rising","probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":50},"dewpoint":{"unitCode":"wmoUnit:degC","value":-5.555555555555555},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":76},"windSpeed":"23 mph","windDirection":"NE","icon":"https://api.weather.gov/icons/land/night/blizzard,50?size=medium","shortForecast":"Chance Snow And Patchy Blowing Snow","detailedForecast":"A chance of snow before 1am, then a chance of snow and patchy blowing snow. Cloudy. Low around 22, with temperatures rising to around 24 overnight. Northeast wind around 23 mph, with gusts as high as 32 mph. Chance of precipitation is 50%. New snow accumulation of 1 to 3 inches possible."},{"number":2,"name":"Wednesday","startTime":"2023-02-22T06:00:00-08:00","endTime":"2023-02-22T18:00:00-08:00","isDaytime":true,"temperature":28,"temperatureUnit":"F","temperatureTrend":"falling","probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":30},"dewpoint":{"unitCode":"wmoUnit:degC","value":-10},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":70},"windSpeed":"18 to 22 mph","windDirection":"NE","icon":"https://api.weather.gov/icons/land/day/blizzard,30/blizzard?size=medium","shortForecast":"Chance Light Snow And Patchy Blowing Snow then Areas Of Blowing Snow","detailedForecast":"A chance of snow and patchy blowing snow before 7am, then areas of blowing snow and a slight chance of snow between 7am and 4pm. Mostly cloudy. High near 28, with temperatures falling to around 25 in the afternoon. Northeast wind 18 to 22 mph, with gusts as high as 31 mph. Chance of precipitation is 30%. New snow accumulation of less than half an inch possible."},{"number":3,"name":"Wednesday Night","startTime":"2023-02-22T18:00:00-08:00","endTime":"2023-02-23T06:00:00-08:00","isDaytime":false,"temperature":12,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":-14.444444444444445},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":47},"windSpeed":"18 to 24 mph","windDirection":"NE","icon":"https://api.weather.gov/icons/land/night/wind_bkn?size=medium","shortForecast":"Mostly Cloudy","detailedForecast":"Mostly cloudy, with a low around 12. Wind chill values as low as -7. Northeast wind 18 to 24 mph, with gusts as high as 35 mph."},{"number":4,"name":"Thursday","startTime":"2023-02-23T06:00:00-08:00","endTime":"2023-02-23T18:00:00-08:00","isDaytime":true,"temperature":22,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":-18.333333333333332},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":39},"windSpeed":"20 to 24 mph","windDirection":"NE","icon":"https://api.weather.gov/icons/land/day/wind_bkn?size=medium","shortForecast":"Partly Sunny","detailedForecast":"Partly sunny, with a high near 22. Wind chill values as low as -7. Northeast wind 20 to 24 mph, with gusts as high as 35 mph."},{"number":5,"name":"Thursday Night","startTime":"2023-02-23T18:00:00-08:00","endTime":"2023-02-24T06:00:00-08:00","isDaytime":false,"temperature":10,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":-17.77777777777778},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":55},"windSpeed":"9 to 20 mph","windDirection":"N","icon":"https://api.weather.gov/icons/land/night/cold?size=medium","shortForecast":"Partly Cloudy","detailedForecast":"Partly cloudy, with a low around 10. North wind 9 to 20 mph, with gusts as high as 29 mph."},{"number":6,"name":"Friday","startTime":"2023-02-24T06:00:00-08:00","endTime":"2023-02-24T18:00:00-08:00","isDaytime":true,"temperature":27,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":-15.555555555555555},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":55},"windSpeed":"6 to 9 mph","windDirection":"NE","icon":"https://api.weather.gov/icons/land/day/few?size=medium","shortForecast":"Sunny","detailedForecast":"Sunny, with a high near 27."},{"number":7,"name":"Friday Night","startTime":"2023-02-24T18:00:00-08:00","endTime":"2023-02-25T06:00:00-08:00","isDaytime":false,"temperature":15,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":-13.88888888888889},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":60},"windSpeed":"5 to 8 mph","windDirection":"SW","icon":"https://api.weather.gov/icons/land/night/sct?size=medium","shortForecast":"Partly Cloudy","detailedForecast":"Partly cloudy, with a low around 15."},{"number":8,"name":"Saturday","startTime":"2023-02-25T06:00:00-08:00","endTime":"2023-02-25T18:00:00-08:00","isDaytime":true,"temperature":32,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":-10},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":59},"windSpeed":"7 mph","windDirection":"SW","icon":"https://api.weather.gov/icons/land/day/sct?size=medium","shortForecast":"Mostly Sunny","detailedForecast":"Mostly sunny, with a high near 32."},{"number":9,"name":"Saturday Night","startTime":"2023-02-25T18:00:00-08:00","endTime":"2023-02-26T06:00:00-08:00","isDaytime":false,"temperature":23,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":20},"dewpoint":{"unitCode":"wmoUnit:degC","value":-6.111111111111111},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":67},"windSpeed":"5 to 9 mph","windDirection":"SW","icon":"https://api.weather.gov/icons/land/night/bkn/snow,20?size=medium","shortForecast":"Mostly Cloudy then Slight Chance Light Snow","detailedForecast":"A slight chance of snow after 4am. Mostly cloudy, with a low around 23. Chance of precipitation is 20%."},{"number":10,"name":"Sunday","startTime":"2023-02-26T06:00:00-08:00","endTime":"2023-02-26T18:00:00-08:00","isDaytime":true,"temperature":41,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":20},"dewpoint":{"unitCode":"wmoUnit:degC","value":-5},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":67},"windSpeed":"7 to 15 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/day/snow,20/bkn?size=medium","shortForecast":"Slight Chance Light Snow then Partly Sunny","detailedForecast":"A slight chance of snow before 10am. Partly sunny, with a high near 41. Chance of precipitation is 20%."},{"number":11,"name":"Sunday Night","startTime":"2023-02-26T18:00:00-08:00","endTime":"2023-02-27T06:00:00-08:00","isDaytime":false,"temperature":26,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":-4.444444444444445},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":76},"windSpeed":"7 to 12 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/night/bkn?size=medium","shortForecast":"Mostly Cloudy","detailedForecast":"Mostly cloudy, with a low around 26."},{"number":12,"name":"Monday","startTime":"2023-02-27T06:00:00-08:00","endTime":"2023-02-27T18:00:00-08:00","isDaytime":true,"temperature":41,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":20},"dewpoint":{"unitCode":"wmoUnit:degC","value":-2.2222222222222223},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":75},"windSpeed":"9 mph","windDirection":"N","icon":"https://api.weather.gov/icons/land/day/bkn/snow,20?size=medium","shortForecast":"Mostly Cloudy then Slight Chance Light Snow","detailedForecast":"A slight chance of snow after 4pm. Mostly cloudy, with a high near 41. Chance of precipitation is 20%. New snow accumulation of less than one inch possible."},{"number":13,"name":"Monday Night","startTime":"2023-02-27T18:00:00-08:00","endTime":"2023-02-28T06:00:00-08:00","isDaytime":false,"temperature":27,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":20},"dewpoint":{"unitCode":"wmoUnit:degC","value":-2.7777777777777777},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":75},"windSpeed":"9 mph","windDirection":"N","icon":"https://api.weather.gov/icons/land/night/snow,20?size=medium","shortForecast":"Slight Chance Light Snow","detailedForecast":"A slight chance of snow before 4am. Mostly cloudy, with a low around 27. Chance of precipitation is 20%. New snow accumulation of around one inch possible."},{"number":14,"name":"Tuesday","startTime":"2023-02-28T06:00:00-08:00","endTime":"2023-02-28T18:00:00-08:00","isDaytime":true,"temperature":43,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":-2.2222222222222223},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":71},"windSpeed":"7 mph","windDirection":"NW","icon":"https://api.weather.gov/icons/land/day/bkn?size=medium","shortForecast":"Partly Sunny","detailedForecast":"Partly sunny, with a high near 43."}]}
  var hourly_OTX_54_74 = false
  var crags_config = [
  {
    "name": "Vantage",
    "note": "The rocks are basalt.",
    "mountainProject": "https://www.mountainproject.com/map/105792231/vantage-frenchman-coulee",
    "station": "KEAT",
    "office": "OTX/54,74",
    "coordinates": [
      -119.969,
      47.025
    ]
  }
]</script>

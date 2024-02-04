---
### THIS FILE IS AUTO-GENERATED - DO NOT EDIT ###
layout: page
title: City of Rocks, Idaho Climbing Weather - Current, Past, and Forecasted
title_override: City of Rocks<br /><small>Climbing Weather</small>
description: A lightweight weather report for City of Rocks, Idaho. Optimized for slow internet connections.
js_includes:
  - weather.js
---

<section class="measure center lh-copy f5-ns f6 ph2 mv4" style="text-align: justify;">
<strong>"Is it dry?"</strong>, an oft-repeated, age-old question. Here are real-time,
precipitation-focused reports of current, past, and forecasted climbing weather for City of Rocks, Idaho.
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
<section id="weather" data-crag="city-of-rocks-idaho" class="mv4-ns mv3 ph2 center"></section>
<section id="nearby" class="tc lh-copy">
  <h3>Nearby Crags</h3>
<a class="nowrap no-underline fancy-link relative light-red mh3" href="/crags/moab-utah-weather.html">Moab</a>
<a class="nowrap no-underline fancy-link relative light-red mh3" href="/crags/little-cottonwood-canyon-utah-weather.html">Little Cottonwood Canyon</a>
</section>
<section id="nearby" class="tc lh-copy">
  <h3>Other Metros</h3>
  <select class="ma1 bg-near-white pa2" id="stateSel">
    <option value="Texas">Texas</option>
    <option value="Washington">Washington</option>
    <option value="Colorado">Colorado</option>
    <option value="Tennessee">Tennessee</option>
    <option value="Utah" selected>Utah</option>
    <option value="California">California</option>
  </select>
  <select class="ma1 bg-near-white pa2" id="citySel">
    <option value="Salt Lake City" selected>Salt Lake City</option>
  </select>
  <a id="selectMetro" class="f6 link dim ph3 pv2 ma1 dib white bg-light-red" href="/crags/salt-lake-city-utah-weather.html">Select Metro</a>
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
  var weekly_PIH_50_16 = {"updated":"2024-02-04T06:06:39+00:00","units":"us","forecastGenerator":"BaselineForecastGenerator","generatedAt":"2024-02-04T08:32:11+00:00","updateTime":"2024-02-04T06:06:39+00:00","validTimes":"2024-02-04T00:00:00+00:00/P7DT4H","elevation":{"unitCode":"wmoUnit:m","value":1546.86},"periods":[{"number":1,"name":"Overnight","startTime":"2024-02-04T01:00:00-07:00","endTime":"2024-02-04T06:00:00-07:00","isDaytime":false,"temperature":18,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":-6.666666666666667},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":92},"windSpeed":"5 mph","windDirection":"SSW","icon":"https://api.weather.gov/icons/land/night/sct?size=medium","shortForecast":"Partly Cloudy","detailedForecast":"Partly cloudy, with a low around 18. South southwest wind around 5 mph."},{"number":2,"name":"Sunday","startTime":"2024-02-04T06:00:00-07:00","endTime":"2024-02-04T18:00:00-07:00","isDaytime":true,"temperature":36,"temperatureUnit":"F","temperatureTrend":"falling","probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":40},"dewpoint":{"unitCode":"wmoUnit:degC","value":-5.555555555555555},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":92},"windSpeed":"3 to 22 mph","windDirection":"S","icon":"https://api.weather.gov/icons/land/day/wind_sct/snow,40?size=medium","shortForecast":"Mostly Sunny then Chance Snow Showers","detailedForecast":"A chance of snow showers after 5pm. Mostly sunny. High near 36, with temperatures falling to around 34 in the afternoon. South wind 3 to 22 mph, with gusts as high as 32 mph. Chance of precipitation is 40%."},{"number":3,"name":"Sunday Night","startTime":"2024-02-04T18:00:00-07:00","endTime":"2024-02-05T06:00:00-07:00","isDaytime":false,"temperature":29,"temperatureUnit":"F","temperatureTrend":"rising","probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":70},"dewpoint":{"unitCode":"wmoUnit:degC","value":-1.6666666666666667},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":87},"windSpeed":"18 to 22 mph","windDirection":"S","icon":"https://api.weather.gov/icons/land/night/snow,60/snow,70?size=medium","shortForecast":"Snow Showers Likely","detailedForecast":"Snow showers likely before 2am, then rain and snow showers likely between 2am and 5am, then rain and snow likely. Mostly cloudy. Low around 29, with temperatures rising to around 32 overnight. South wind 18 to 22 mph, with gusts as high as 35 mph. Chance of precipitation is 70%."},{"number":4,"name":"Monday","startTime":"2024-02-05T06:00:00-07:00","endTime":"2024-02-05T18:00:00-07:00","isDaytime":true,"temperature":43,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":80},"dewpoint":{"unitCode":"wmoUnit:degC","value":0.5555555555555556},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":88},"windSpeed":"10 to 18 mph","windDirection":"S","icon":"https://api.weather.gov/icons/land/day/snow,80?size=medium","shortForecast":"Rain And Snow","detailedForecast":"Rain and snow. Mostly cloudy, with a high near 43. South wind 10 to 18 mph, with gusts as high as 28 mph. Chance of precipitation is 80%."},{"number":5,"name":"Monday Night","startTime":"2024-02-05T18:00:00-07:00","endTime":"2024-02-06T06:00:00-07:00","isDaytime":false,"temperature":30,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":70},"dewpoint":{"unitCode":"wmoUnit:degC","value":0},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":95},"windSpeed":"6 to 10 mph","windDirection":"SSE","icon":"https://api.weather.gov/icons/land/night/snow,70?size=medium","shortForecast":"Rain And Snow Likely","detailedForecast":"Rain likely before 11pm, then rain and snow likely. Mostly cloudy, with a low around 30. South southeast wind 6 to 10 mph. Chance of precipitation is 70%. Little or no snow accumulation expected."},{"number":6,"name":"Tuesday","startTime":"2024-02-06T06:00:00-07:00","endTime":"2024-02-06T18:00:00-07:00","isDaytime":true,"temperature":41,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":70},"dewpoint":{"unitCode":"wmoUnit:degC","value":1.1111111111111112},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":98},"windSpeed":"5 to 8 mph","windDirection":"SSE","icon":"https://api.weather.gov/icons/land/day/snow,70?size=medium","shortForecast":"Rain And Snow Likely","detailedForecast":"Rain and snow likely. Mostly cloudy, with a high near 41. Chance of precipitation is 70%. New snow accumulation of less than half an inch possible."},{"number":7,"name":"Tuesday Night","startTime":"2024-02-06T18:00:00-07:00","endTime":"2024-02-07T06:00:00-07:00","isDaytime":false,"temperature":26,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":50},"dewpoint":{"unitCode":"wmoUnit:degC","value":1.1111111111111112},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":99},"windSpeed":"8 mph","windDirection":"NW","icon":"https://api.weather.gov/icons/land/night/snow,50/snow,40?size=medium","shortForecast":"Chance Rain And Snow","detailedForecast":"A chance of rain and snow. Mostly cloudy, with a low around 26. Chance of precipitation is 50%. New snow accumulation of less than one inch possible."},{"number":8,"name":"Wednesday","startTime":"2024-02-07T06:00:00-07:00","endTime":"2024-02-07T18:00:00-07:00","isDaytime":true,"temperature":37,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":40},"dewpoint":{"unitCode":"wmoUnit:degC","value":-1.6666666666666667},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":99},"windSpeed":"7 to 12 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/day/snow,40?size=medium","shortForecast":"Chance Light Snow","detailedForecast":"A chance of snow. Mostly cloudy, with a high near 37. Chance of precipitation is 40%. New snow accumulation of less than half an inch possible."},{"number":9,"name":"Wednesday Night","startTime":"2024-02-07T18:00:00-07:00","endTime":"2024-02-08T06:00:00-07:00","isDaytime":false,"temperature":19,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":20},"dewpoint":{"unitCode":"wmoUnit:degC","value":-2.7777777777777777},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":92},"windSpeed":"10 mph","windDirection":"WSW","icon":"https://api.weather.gov/icons/land/night/snow,20?size=medium","shortForecast":"Slight Chance Light Snow","detailedForecast":"A slight chance of snow. Mostly cloudy, with a low around 19. Chance of precipitation is 20%."},{"number":10,"name":"Thursday","startTime":"2024-02-08T06:00:00-07:00","endTime":"2024-02-08T18:00:00-07:00","isDaytime":true,"temperature":34,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":30},"dewpoint":{"unitCode":"wmoUnit:degC","value":-4.444444444444445},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":92},"windSpeed":"8 to 12 mph","windDirection":"WSW","icon":"https://api.weather.gov/icons/land/day/snow,30?size=medium","shortForecast":"Chance Light Snow","detailedForecast":"A chance of snow. Partly sunny, with a high near 34. Chance of precipitation is 30%."},{"number":11,"name":"Thursday Night","startTime":"2024-02-08T18:00:00-07:00","endTime":"2024-02-09T06:00:00-07:00","isDaytime":false,"temperature":20,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":40},"dewpoint":{"unitCode":"wmoUnit:degC","value":-4.444444444444445},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":94},"windSpeed":"10 mph","windDirection":"SSW","icon":"https://api.weather.gov/icons/land/night/snow,30/snow,40?size=medium","shortForecast":"Chance Light Snow","detailedForecast":"A chance of snow. Mostly cloudy, with a low around 20. Chance of precipitation is 40%. New snow accumulation of less than half an inch possible."},{"number":12,"name":"Friday","startTime":"2024-02-09T06:00:00-07:00","endTime":"2024-02-09T18:00:00-07:00","isDaytime":true,"temperature":35,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":40},"dewpoint":{"unitCode":"wmoUnit:degC","value":-3.3333333333333335},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":95},"windSpeed":"8 to 12 mph","windDirection":"WSW","icon":"https://api.weather.gov/icons/land/day/snow,40?size=medium","shortForecast":"Chance Light Snow","detailedForecast":"A chance of snow. Partly sunny, with a high near 35. Chance of precipitation is 40%. New snow accumulation of less than half an inch possible."},{"number":13,"name":"Friday Night","startTime":"2024-02-09T18:00:00-07:00","endTime":"2024-02-10T06:00:00-07:00","isDaytime":false,"temperature":19,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":30},"dewpoint":{"unitCode":"wmoUnit:degC","value":-3.888888888888889},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":89},"windSpeed":"8 to 12 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/night/snow,30?size=medium","shortForecast":"Chance Light Snow","detailedForecast":"A chance of snow. Mostly cloudy, with a low around 19. Chance of precipitation is 30%."},{"number":14,"name":"Saturday","startTime":"2024-02-10T06:00:00-07:00","endTime":"2024-02-10T18:00:00-07:00","isDaytime":true,"temperature":33,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":30},"dewpoint":{"unitCode":"wmoUnit:degC","value":-4.444444444444445},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":90},"windSpeed":"8 to 12 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/day/snow,30/snow,20?size=medium","shortForecast":"Chance Light Snow","detailedForecast":"A chance of snow. Partly sunny, with a high near 33. Chance of precipitation is 30%."}]}
  var hourly_PIH_50_16 = false
  var crags_config = [
  {
    "name": "City of Rocks",
    "note": "Varnished and pocketed granite",
    "mountainProject": "https://www.mountainproject.com/area/105739322/city-of-rocks",
    "station": "RCKI1",
    "office": "PIH/50,16",
    "coordinates": [
      -113.7215,
      42.0760
    ]
  }
]</script>

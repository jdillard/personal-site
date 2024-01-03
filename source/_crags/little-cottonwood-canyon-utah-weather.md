---
### THIS FILE IS AUTO-GENERATED - DO NOT EDIT ###
layout: page
title: Little Cottonwood Canyon, Utah Climbing Weather - Current, Past, and Forecasted
title_override: Little Cottonwood Canyon<br /><small>Climbing Weather</small>
description: A lightweight weather report for Little Cottonwood Canyon, Utah. Optimized for slow internet connections.
js_includes:
  - weather.js
---

<section class="measure center lh-copy f5-ns f6 ph2 mv4" style="text-align: justify;">
<strong>"Is it dry?"</strong>, an oft-repeated, age-old question. Here are real-time,
precipitation-focused reports of current, past, and forecasted climbing weather for Little Cottonwood Canyon, Utah.
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
<section id="weather" data-crag="little-cottonwood-canyon-utah" class="mv4-ns mv3 ph2 center"></section>
<section id="nearby" class="tc lh-copy">
  <h3>Nearby Crags</h3>
<a class="nowrap no-underline fancy-link relative light-red mh3" href="/crags/moab-utah-weather.html">Moab</a>
<a class="nowrap no-underline fancy-link relative light-red mh3" href="/crags/city-of-rocks-idaho-weather.html">City of Rocks</a>
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
  var weekly_SLC_102_165 = {"updated":"2024-01-02T21:54:46+00:00","units":"us","forecastGenerator":"BaselineForecastGenerator","generatedAt":"2024-01-03T08:32:48+00:00","updateTime":"2024-01-02T21:54:46+00:00","validTimes":"2024-01-02T15:00:00+00:00/P7DT13H","elevation":{"unitCode":"wmoUnit:m","value":1827.8856},"periods":[{"number":1,"name":"Overnight","startTime":"2024-01-03T01:00:00-07:00","endTime":"2024-01-03T06:00:00-07:00","isDaytime":false,"temperature":28,"temperatureUnit":"F","temperatureTrend":"rising","probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":-8.88888888888889},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":54},"windSpeed":"8 to 13 mph","windDirection":"S","icon":"https://api.weather.gov/icons/land/night/bkn?size=medium","shortForecast":"Mostly Cloudy","detailedForecast":"Mostly cloudy. Low around 28, with temperatures rising to around 31 overnight. South wind 8 to 13 mph."},{"number":2,"name":"Wednesday","startTime":"2024-01-03T06:00:00-07:00","endTime":"2024-01-03T18:00:00-07:00","isDaytime":true,"temperature":41,"temperatureUnit":"F","temperatureTrend":"falling","probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":70},"dewpoint":{"unitCode":"wmoUnit:degC","value":-4.444444444444445},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":58},"windSpeed":"6 to 13 mph","windDirection":"S","icon":"https://api.weather.gov/icons/land/day/snow,20/snow,70?size=medium","shortForecast":"Light Snow Likely","detailedForecast":"Snow likely after 11am. Mostly cloudy. High near 41, with temperatures falling to around 37 in the afternoon. South wind 6 to 13 mph. Chance of precipitation is 70%. New snow accumulation of less than half an inch possible."},{"number":3,"name":"Wednesday Night","startTime":"2024-01-03T18:00:00-07:00","endTime":"2024-01-04T06:00:00-07:00","isDaytime":false,"temperature":29,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":70},"dewpoint":{"unitCode":"wmoUnit:degC","value":-2.2222222222222223},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":84},"windSpeed":"3 to 7 mph","windDirection":"SW","icon":"https://api.weather.gov/icons/land/night/snow,70?size=medium","shortForecast":"Light Snow Likely","detailedForecast":"Snow likely. Cloudy, with a low around 29. Southwest wind 3 to 7 mph. Chance of precipitation is 70%. New snow accumulation of around one inch possible."},{"number":4,"name":"Thursday","startTime":"2024-01-04T06:00:00-07:00","endTime":"2024-01-04T18:00:00-07:00","isDaytime":true,"temperature":33,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":60},"dewpoint":{"unitCode":"wmoUnit:degC","value":-3.3333333333333335},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":84},"windSpeed":"7 to 10 mph","windDirection":"NNW","icon":"https://api.weather.gov/icons/land/day/snow,60?size=medium","shortForecast":"Light Snow Likely","detailedForecast":"Snow likely. Mostly cloudy, with a high near 33. North northwest wind 7 to 10 mph. Chance of precipitation is 60%. New snow accumulation of 1 to 2 inches possible."},{"number":5,"name":"Thursday Night","startTime":"2024-01-04T18:00:00-07:00","endTime":"2024-01-05T06:00:00-07:00","isDaytime":false,"temperature":27,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":50},"dewpoint":{"unitCode":"wmoUnit:degC","value":-3.3333333333333335},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":81},"windSpeed":"5 to 10 mph","windDirection":"NW","icon":"https://api.weather.gov/icons/land/night/snow,50/snow,30?size=medium","shortForecast":"Chance Light Snow","detailedForecast":"A chance of snow. Mostly cloudy, with a low around 27. Northwest wind 5 to 10 mph. Chance of precipitation is 50%. New snow accumulation of less than one inch possible."},{"number":6,"name":"Friday","startTime":"2024-01-05T06:00:00-07:00","endTime":"2024-01-05T18:00:00-07:00","isDaytime":true,"temperature":33,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":70},"dewpoint":{"unitCode":"wmoUnit:degC","value":-3.3333333333333335},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":79},"windSpeed":"7 mph","windDirection":"WNW","icon":"https://api.weather.gov/icons/land/day/snow,70?size=medium","shortForecast":"Light Snow Likely","detailedForecast":"Snow likely. Mostly cloudy, with a high near 33. Chance of precipitation is 70%. New snow accumulation of 1 to 3 inches possible."},{"number":7,"name":"Friday Night","startTime":"2024-01-05T18:00:00-07:00","endTime":"2024-01-06T06:00:00-07:00","isDaytime":false,"temperature":23,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":70},"dewpoint":{"unitCode":"wmoUnit:degC","value":-4.444444444444445},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":80},"windSpeed":"8 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/night/snow,70/snow,50?size=medium","shortForecast":"Light Snow Likely","detailedForecast":"Snow likely. Mostly cloudy, with a low around 23. Chance of precipitation is 70%. New snow accumulation of 1 to 3 inches possible."},{"number":8,"name":"Saturday","startTime":"2024-01-06T06:00:00-07:00","endTime":"2024-01-06T18:00:00-07:00","isDaytime":true,"temperature":30,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":-6.111111111111111},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":81},"windSpeed":"7 to 12 mph","windDirection":"SSW","icon":"https://api.weather.gov/icons/land/day/snow?size=medium","shortForecast":"Chance Light Snow","detailedForecast":"A chance of snow. Mostly cloudy, with a high near 30. New snow accumulation of 1 to 2 inches possible."},{"number":9,"name":"Saturday Night","startTime":"2024-01-06T18:00:00-07:00","endTime":"2024-01-07T06:00:00-07:00","isDaytime":false,"temperature":24,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":-6.111111111111111},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":76},"windSpeed":"8 to 12 mph","windDirection":"SSE","icon":"https://api.weather.gov/icons/land/night/snow?size=medium","shortForecast":"Snow","detailedForecast":"Snow. Mostly cloudy, with a low around 24. New snow accumulation of 3 to 5 inches possible."},{"number":10,"name":"Sunday","startTime":"2024-01-07T06:00:00-07:00","endTime":"2024-01-07T18:00:00-07:00","isDaytime":true,"temperature":28,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":-6.111111111111111},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":81},"windSpeed":"8 to 12 mph","windDirection":"NW","icon":"https://api.weather.gov/icons/land/day/snow?size=medium","shortForecast":"Snow","detailedForecast":"Snow. Cloudy, with a high near 28. New snow accumulation of 3 to 5 inches possible."},{"number":11,"name":"Sunday Night","startTime":"2024-01-07T18:00:00-07:00","endTime":"2024-01-08T06:00:00-07:00","isDaytime":false,"temperature":17,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":-7.777777777777778},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":77},"windSpeed":"12 mph","windDirection":"NNW","icon":"https://api.weather.gov/icons/land/night/snow?size=medium","shortForecast":"Light Snow Likely","detailedForecast":"Snow likely. Mostly cloudy, with a low around 17. New snow accumulation of less than one inch possible."},{"number":12,"name":"Monday","startTime":"2024-01-08T06:00:00-07:00","endTime":"2024-01-08T18:00:00-07:00","isDaytime":true,"temperature":24,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":-9.444444444444445},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":78},"windSpeed":"9 mph","windDirection":"NW","icon":"https://api.weather.gov/icons/land/day/snow?size=medium","shortForecast":"Chance Light Snow","detailedForecast":"A chance of snow. Partly sunny, with a high near 24."},{"number":13,"name":"Monday Night","startTime":"2024-01-08T18:00:00-07:00","endTime":"2024-01-09T06:00:00-07:00","isDaytime":false,"temperature":13,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":-10.555555555555555},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":73},"windSpeed":"8 mph","windDirection":"SSW","icon":"https://api.weather.gov/icons/land/night/snow?size=medium","shortForecast":"Slight Chance Light Snow","detailedForecast":"A slight chance of snow. Mostly cloudy, with a low around 13."},{"number":14,"name":"Tuesday","startTime":"2024-01-09T06:00:00-07:00","endTime":"2024-01-09T18:00:00-07:00","isDaytime":true,"temperature":27,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":-7.222222222222222},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":76},"windSpeed":"10 mph","windDirection":"SSE","icon":"https://api.weather.gov/icons/land/day/snow?size=medium","shortForecast":"Chance Light Snow","detailedForecast":"A chance of snow. Mostly cloudy, with a high near 27."}]}
  var hourly_SLC_102_165 = false
  var crags_config = [
  {
    "name": "Little Cottonwood Canyon",
    "note": "Primarily quartz monzonite (white granite, essentially)",
    "mountainProject": "https://www.mountainproject.com/area/105739277/little-cottonwood-canyon",
    "station": "KSLC",
    "office": "SLC/102,165",
    "coordinates": [
      -111.775,
      40.5727
    ]
  }
]</script>

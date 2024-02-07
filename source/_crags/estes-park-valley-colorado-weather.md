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
  var weekly_BOU_46_92 = {"updated":"2024-02-07T03:01:20+00:00","units":"us","forecastGenerator":"BaselineForecastGenerator","generatedAt":"2024-02-07T08:32:05+00:00","updateTime":"2024-02-07T03:01:20+00:00","validTimes":"2024-02-06T21:00:00+00:00/P7DT4H","elevation":{"unitCode":"wmoUnit:m","value":2438.0952},"periods":[{"number":1,"name":"Overnight","startTime":"2024-02-07T01:00:00-07:00","endTime":"2024-02-07T06:00:00-07:00","isDaytime":false,"temperature":28,"temperatureUnit":"F","temperatureTrend":"rising","probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":20},"dewpoint":{"unitCode":"wmoUnit:degC","value":-6.666666666666667},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":59},"windSpeed":"8 to 12 mph","windDirection":"WNW","icon":"https://api.weather.gov/icons/land/night/snow,20?size=medium","shortForecast":"Slight Chance Snow Showers","detailedForecast":"A slight chance of snow showers after 5am. Partly cloudy. Low around 28, with temperatures rising to around 33 overnight. West northwest wind 8 to 12 mph. Chance of precipitation is 20%."},{"number":2,"name":"Wednesday","startTime":"2024-02-07T06:00:00-07:00","endTime":"2024-02-07T18:00:00-07:00","isDaytime":true,"temperature":46,"temperatureUnit":"F","temperatureTrend":"falling","probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":60},"dewpoint":{"unitCode":"wmoUnit:degC","value":-6.666666666666667},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":63},"windSpeed":"10 to 16 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/day/snow,50/snow,60?size=medium","shortForecast":"Snow Showers Likely","detailedForecast":"Snow showers likely before 5pm, then a chance of snow. Partly sunny. High near 46, with temperatures falling to around 37 in the afternoon. West wind 10 to 16 mph, with gusts as high as 30 mph. Chance of precipitation is 60%. Little or no snow accumulation expected."},{"number":3,"name":"Wednesday Night","startTime":"2024-02-07T18:00:00-07:00","endTime":"2024-02-08T06:00:00-07:00","isDaytime":false,"temperature":24,"temperatureUnit":"F","temperatureTrend":"rising","probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":50},"dewpoint":{"unitCode":"wmoUnit:degC","value":-7.222222222222222},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":58},"windSpeed":"17 to 25 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/night/snow,50/snow,40?size=medium","shortForecast":"Chance Light Snow","detailedForecast":"A chance of snow. Mostly cloudy. Low around 24, with temperatures rising to around 29 overnight. West wind 17 to 25 mph, with gusts as high as 43 mph. Chance of precipitation is 50%. New snow accumulation of less than half an inch possible."},{"number":4,"name":"Thursday","startTime":"2024-02-08T06:00:00-07:00","endTime":"2024-02-08T18:00:00-07:00","isDaytime":true,"temperature":37,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":40},"dewpoint":{"unitCode":"wmoUnit:degC","value":-10},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":53},"windSpeed":"17 to 25 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/day/snow,40?size=medium","shortForecast":"Chance Light Snow","detailedForecast":"A chance of snow. Mostly cloudy, with a high near 37. West wind 17 to 25 mph, with gusts as high as 43 mph. Chance of precipitation is 40%. New snow accumulation of less than half an inch possible."},{"number":5,"name":"Thursday Night","startTime":"2024-02-08T18:00:00-07:00","endTime":"2024-02-09T06:00:00-07:00","isDaytime":false,"temperature":17,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":20},"dewpoint":{"unitCode":"wmoUnit:degC","value":-11.11111111111111},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":59},"windSpeed":"9 to 16 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/night/snow,20/bkn?size=medium","shortForecast":"Slight Chance Light Snow then Mostly Cloudy","detailedForecast":"A slight chance of snow before 11pm. Mostly cloudy, with a low around 17. West wind 9 to 16 mph, with gusts as high as 25 mph. Chance of precipitation is 20%. Little or no snow accumulation expected."},{"number":6,"name":"Friday","startTime":"2024-02-09T06:00:00-07:00","endTime":"2024-02-09T18:00:00-07:00","isDaytime":true,"temperature":35,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":60},"dewpoint":{"unitCode":"wmoUnit:degC","value":-11.11111111111111},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":59},"windSpeed":"13 mph","windDirection":"WSW","icon":"https://api.weather.gov/icons/land/day/snow,50/snow,60?size=medium","shortForecast":"Light Snow Likely","detailedForecast":"Snow likely after 11am. Partly sunny, with a high near 35. Chance of precipitation is 60%. New snow accumulation of less than one inch possible."},{"number":7,"name":"Friday Night","startTime":"2024-02-09T18:00:00-07:00","endTime":"2024-02-10T06:00:00-07:00","isDaytime":false,"temperature":15,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":60},"dewpoint":{"unitCode":"wmoUnit:degC","value":-11.11111111111111},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":71},"windSpeed":"10 mph","windDirection":"WNW","icon":"https://api.weather.gov/icons/land/night/snow,60/snow,50?size=medium","shortForecast":"Light Snow Likely","detailedForecast":"Snow likely. Mostly cloudy, with a low around 15. Chance of precipitation is 60%. New snow accumulation of 1 to 2 inches possible."},{"number":8,"name":"Saturday","startTime":"2024-02-10T06:00:00-07:00","endTime":"2024-02-10T18:00:00-07:00","isDaytime":true,"temperature":29,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":-10.555555555555555},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":67},"windSpeed":"12 mph","windDirection":"ENE","icon":"https://api.weather.gov/icons/land/day/snow?size=medium","shortForecast":"Light Snow Likely","detailedForecast":"Snow likely. Mostly cloudy, with a high near 29. New snow accumulation of around one inch possible."},{"number":9,"name":"Saturday Night","startTime":"2024-02-10T18:00:00-07:00","endTime":"2024-02-11T06:00:00-07:00","isDaytime":false,"temperature":9,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":-10.555555555555555},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":70},"windSpeed":"10 to 15 mph","windDirection":"SSW","icon":"https://api.weather.gov/icons/land/night/snow?size=medium","shortForecast":"Light Snow Likely","detailedForecast":"Snow likely. Mostly cloudy, with a low around 9. New snow accumulation of less than half an inch possible."},{"number":10,"name":"Sunday","startTime":"2024-02-11T06:00:00-07:00","endTime":"2024-02-11T18:00:00-07:00","isDaytime":true,"temperature":33,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":-13.333333333333334},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":58},"windSpeed":"16 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/day/snow?size=medium","shortForecast":"Chance Light Snow","detailedForecast":"A chance of snow. Mostly sunny, with a high near 33."},{"number":11,"name":"Sunday Night","startTime":"2024-02-11T18:00:00-07:00","endTime":"2024-02-12T06:00:00-07:00","isDaytime":false,"temperature":13,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":-13.333333333333334},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":59},"windSpeed":"14 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/night/snow?size=medium","shortForecast":"Chance Light Snow","detailedForecast":"A chance of snow before 5am. Partly cloudy, with a low around 13."},{"number":12,"name":"Monday","startTime":"2024-02-12T06:00:00-07:00","endTime":"2024-02-12T18:00:00-07:00","isDaytime":true,"temperature":37,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":-11.11111111111111},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":54},"windSpeed":"14 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/day/snow?size=medium","shortForecast":"Chance Light Snow","detailedForecast":"A chance of snow after 11am. Mostly sunny, with a high near 37."},{"number":13,"name":"Monday Night","startTime":"2024-02-12T18:00:00-07:00","endTime":"2024-02-13T06:00:00-07:00","isDaytime":false,"temperature":14,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":-11.11111111111111},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":61},"windSpeed":"13 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/night/snow/sct?size=medium","shortForecast":"Slight Chance Light Snow then Partly Cloudy","detailedForecast":"A slight chance of snow before 11pm. Partly cloudy, with a low around 14."},{"number":14,"name":"Tuesday","startTime":"2024-02-13T06:00:00-07:00","endTime":"2024-02-13T18:00:00-07:00","isDaytime":true,"temperature":38,"temperatureUnit":"F","temperatureTrend":null,"probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"dewpoint":{"unitCode":"wmoUnit:degC","value":-11.666666666666666},"relativeHumidity":{"unitCode":"wmoUnit:percent","value":54},"windSpeed":"14 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/day/snow?size=medium","shortForecast":"Slight Chance Light Snow","detailedForecast":"A slight chance of snow after 11am. Mostly sunny, with a high near 38."}]}
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

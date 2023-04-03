import u from 'umbrellajs';
import axios from 'axios';

const template_tide_predictions = require("./templates/taylor_tides.hbs");

function getIssues() {
    axios.get('https://api.github.com/repos/jdillard/personal-site/issues?labels=taylor&state=open')
      .then(function (response) {
        if(response.data.length) {
            for (let c in response.data) {
            let temp_html = '<div class="mv2"><a class="no-underline relative f6 black-70 hover-light-red" href="'+response.data[c].html_url+'">'+response.data[c].title+'</a></div>';
            document.getElementById("issues").insertAdjacentHTML("beforeend", temp_html);
            }
        } else {
            let temp_html = '<div class="pa4 tc silver ma3 ba b--light-gray">No Issues Found.</div>';
            document.getElementById("issues").insertAdjacentHTML("beforeend", temp_html);
        }
      })
      .catch(function (error) {
        console.log(error);
    });
  }

function convertTZ(date, tzString) {
    return new Date((typeof date === "string" ? new Date(date) : date).toLocaleString("en-US", {timeZone: tzString}));
}

// calculate start and end dates
// TODO using prototype
const today = new Date();
const lastday = new Date();
lastday.setDate(today.getDate() + 13);
var mm1 = today.getMonth() + 1; // getMonth() is zero-based
var dd1 = today.getDate();

var mm2 = lastday.getMonth() + 1; // getMonth() is zero-based
var dd2 = lastday.getDate();

const todaystring = [today.getFullYear(),
            (mm1>9 ? '' : '0') + mm1,
            (dd1>9 ? '' : '0') + dd1
            ].join('');

const lastdaystring = [lastday.getFullYear(),
            (mm2>9 ? '' : '0') + mm2,
            (dd2>9 ? '' : '0') + dd2
            ].join('');

axios.get('https://api.tidesandcurrents.noaa.gov/api/prod/datagetter?product=predictions&application=NOS.COOPS.TAC.WL&begin_date='+todaystring+'&end_date='+lastdaystring+'&datum=MLLW&station=9449424&time_zone=GMT&units=english&interval=h&format=json')
  .then(function (response) {
    const lowTide = []
    const days = []
    const predictions = response.data.predictions
    var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric' };

    //TODO change to filter?
    for (let c in predictions) {
        const RegExpNumberedCaptureGroups = /(\d{4})-(\d{2})-(\d{2}) (\d{2}):(\d{2})/
        const matchObj = RegExpNumberedCaptureGroups.exec(predictions[c].t)
        let gmtdate = new Date(Date.UTC(matchObj[1], matchObj[2]-1, matchObj[3], matchObj[4], matchObj[5]))

        let thisdate = convertTZ(gmtdate, "America/Los_Angeles")
        //TODO calculate sunset/sunrise
        if(predictions[c].v < 4 && thisdate.getHours() > 5 && thisdate.getHours() < 22) {
            lowTide.push({"t": thisdate, "v": predictions[c].v})
        }
    }

    // calculate low tide streaks
    let day = 1
    let current_streak = {}
    for (let c in lowTide) {
        let thisdate = new Date(lowTide[c].t)
        let nextdate = false
        if(parseInt(c) < lowTide.length - 1) {
            nextdate = new Date(lowTide[parseInt(c)+1].t)
        }
        if(nextdate && thisdate.getDate() == nextdate.getDate() && nextdate.getHours() - thisdate.getHours() == 1) {
            if(Object.keys(current_streak).length > 0) {
                current_streak.end = thisdate;
            } else {
                current_streak.start = thisdate;
            }
        } else {
            // fix edge cases
            if(Object.keys(current_streak).length == 0) {
                current_streak.start = thisdate;
                current_streak.end = thisdate;
            } else if(Object.keys(current_streak).length == 1) {
                current_streak.end = thisdate;
            }
            // append current streak
            if(days[thisdate.toLocaleDateString("en-US")]) {
                days[thisdate.toLocaleDateString("en-US")].push(current_streak)
            } else {
                days[thisdate.toLocaleDateString("en-US")] = [current_streak]
            }
            current_streak = {};
        }
    }

    //TODO filter streaks?
    // split days into two columns, one per week
    const dates = []
          dates["thisweek"] = []
          dates["nextweek"] = []
    let nextweek = new Date(Object.values(days)[0][0].start)
    nextweek.setHours(0)
    nextweek.setDate(nextweek.getDate() + 7);
    for (let day in days) {
            // loop through each day's streaks
            const lowtides = []
            for (let streak in days[day]) {
                let starttime = new Date(days[day][streak].start)
                let lowtide = "N/A"
                if(days[day][streak].start && days[day][streak].end) {
                    let endtime = new Date(days[day][streak].end)
                    lowtide = starttime.toLocaleString('en-US', { hour: 'numeric', hour12: true }) + ' - ' +  endtime.toLocaleString('en-US', { hour: 'numeric', hour12: true })
                    lowtides.push({"streak": lowtide})
                }
            }
            let currentday = new Date(days[day][0].start)
            if(currentday < nextweek) {
                dates['thisweek'].push({
                    "weekday": currentday.toLocaleString('en-US', { weekday: 'short' }).toUpperCase(),
                    "date": (currentday.getMonth()+1)+'/'+currentday.getDate(),
                    "lowtides": lowtides})
            } else {
                dates['nextweek'].push({
                    "weekday": currentday.toLocaleString('en-US', { weekday: 'short' }).toUpperCase(),
                    "date": (currentday.getMonth()+1)+'/'+currentday.getDate(),
                    "lowtides": lowtides})
            }
    }

    document.getElementById("dates").innerHTML = template_tide_predictions(dates);
  })
  .catch(function (error) {
    console.log(error);
});

u("#issues-toggle").on('click', function() {
    if(u("#issues").hasClass('open')) {
        u("#issues").removeClass('open');
        u("#issues-toggle").text('Show Known Issues');
        document.getElementById("issues").innerHTML = "";
    } else {
        u("#issues").addClass('open');
        u("#issues-toggle").text('Hide Known Issues');
        getIssues();
    }
    });

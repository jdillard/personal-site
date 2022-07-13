import u from 'umbrellajs';

const template_tide_predictions = require("./templates/taylor_tides.hbs");

function getIssues() {
    axios.get('https://api.github.com/repos/jdillard/personal-site/issues?labels=taylor&state=open')
      .then(function (response) {
        console.log(response.data)
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
    const streaks = []
    const predictions = response.data.predictions
    var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric' };

    //TODO change to filter?
    //TODO push gmtdate all the way through to the end (instead of the t value)
    for (let c in predictions) {
        const RegExpNumberedCaptureGroups = /(\d{4})-(\d{2})-(\d{2}) (\d{2}):(\d{2})/
        const matchObj = RegExpNumberedCaptureGroups.exec(predictions[c].t)
        let gmtdate = new Date(Date.UTC(matchObj[1], matchObj[2]-1, matchObj[3], matchObj[4], matchObj[5]))

        let thisdate = convertTZ(gmtdate, "America/Los_Angeles")
        if(predictions[c].v < 4 && thisdate.getHours() > 7 && thisdate.getHours() < 22) {
            lowTide.push(predictions[c])
        }
    }

    //TODO calculate streaks
    let day = 1
    for (let c in lowTide) {
        let thisdate = new Date(lowTide[c].t)
        let nextdate = false
        if(parseInt(c) < lowTide.length - 1) {
            nextdate = new Date(lowTide[parseInt(c)+1].t)
        }
        if(nextdate && thisdate.getDate() == nextdate.getDate() && nextdate.getHours() - thisdate.getHours() == 1) {
            if(streaks[thisdate.toLocaleDateString("en-US")]) {
                streaks[thisdate.toLocaleDateString("en-US")].end = thisdate;
            } else {
                streaks[thisdate.toLocaleDateString("en-US")] = {};
                streaks[thisdate.toLocaleDateString("en-US")].start = thisdate;
                streaks[thisdate.toLocaleDateString("en-US")].day = day++;
            }
        }
    }

    //TODO filter streaks?
    //TODO split in to two columns (handlebars?)
    const dates = []
          dates["thisweek"] = []
          dates["nextweek"] = []
    for (let s in streaks) {
        if(streaks[s].start && streaks[s].end) {
            let starttime = new Date(streaks[s].start)
            let endtime = new Date(streaks[s].end)
            if(streaks[s].day < 8) {
                dates['thisweek'].push({
                    "weekday": starttime.toLocaleString('en-US', { weekday: 'short' }).toUpperCase(),
                    "date": (starttime.getMonth()+1)+'/'+starttime.getDate(),
                    "start": starttime.toLocaleString('en-US', { hour: 'numeric', hour12: true }),
                    "end": endtime.toLocaleString('en-US', { hour: 'numeric', hour12: true })})
            } else {
                dates['nextweek'].push({
                    "weekday": starttime.toLocaleString('en-US', { weekday: 'short' }).toUpperCase(),
                    "date": (starttime.getMonth()+1)+'/'+starttime.getDate(),
                    "start": starttime.toLocaleString('en-US', { hour: 'numeric', hour12: true }),
                    "end": endtime.toLocaleString('en-US', { hour: 'numeric', hour12: true })})
            }
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
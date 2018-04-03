//import 'babel-polyfill';

const template_articles = require("./templates/latest_articles.hbs");
const template_github_activity = require("./templates/github_activity.hbs");
const template_github_projects = require("./templates/github_projects.hbs");

axios.get('/assets/json/articles.json')
    .then(function (response) {
      articles(response.data);
    })
    .catch(function (error) {
      console.log(error);
    });

axios.get('https://api.github.com/users/jdillard/repos')
  .then(function (response) {
    projects(response.data);
  })
  .catch(function (error) {
    // call local file on 403
    axios.get('/assets/json/projects.json')
      .then(function (response) {
        projects(response.data);
      })
      .catch(function (error) {
        projects();
        console.log(error);
      });
    console.log(error);
  });

axios.get('https://api.github.com/users/jdillard/events')
  .then(function (response) {
    activity(response.data);
  })
  .catch(function (error) {
    // call local file on 403
    axios.get('/assets/json/activity.json')
      .then(function (response) {
        activity(response.data);
      })
      .catch(function (error) {
        activity();
        console.log(error);
      });
    console.log(error);
  });

function timeSince(date, recentDate = new Date()) {
  var seconds = Math.floor((recentDate - date) / 1000);
  var interval = Math.floor(seconds / 31536000);

  if (interval > 1) {
    return interval + " years";
  }
  interval = Math.floor(seconds / 2592000);
  if (interval > 1) {
    return interval + " months";
  }
  interval = Math.floor(seconds / 86400);
  if (interval > 1) {
    return interval + " days";
  }
  interval = Math.floor(seconds / 3600);
  if (interval > 1) {
    return interval + " hours";
  }
  interval = Math.floor(seconds / 60);
  if (interval > 1) {
    return interval + " minutes";
  }
  return Math.floor(seconds) + " seconds";
}

function summarizeAction(type, words, count) {
  switch(type) {
    case "WatchEvent":
      return words + " watching";
    case "PushEvent":
      return (count > 1) ? "Made "+count+" "+words+"s on" : "Made a "+words+" on";
    case "IssueCommentEvent":
      return words + " a comment on";
    case "ForkEvent":
      return "Made a " + words + " of";
    case "PullRequestEvent":
      return words + " a pull request on";
    case "IssuesEvent":
      return (count > 1) ? words+" "+count+" issues on" : words+" an issue on";
    case "CreateEvent":
      return "Created a " + words + " at";
    case "PullRequestReviewCommentEvent":
      return "Reviewed a " + words + " on";
    case "DeleteEvent":
      return "Deleted a " + words + " on";
    case "CommitCommentEvent":
      return "Made a " + words + " on a commit in";
  }
}

function articles(articles) {
  var archive = document.getElementById("latest-articles");
  var articles_by_date = [];

  articles.data.sort(function(a, b) {
    return new Date(b.date_published) - new Date(a.date_published);
  })
  .reduce((a, b, i) => {
      b.date_published = moment(b.date_published).format('MMM DD, YYYY');
      a.push(b);
      return a;
  }, []);

  archive.innerHTML = template_articles(articles.data);
}

function projects(projects = []) {
  const projects_element = document.getElementById("github-projects");

  const projects_list = projects.sort(function(a, b) {
    return b.stargazers_count - a.stargazers_count;
  })
  .filter(project => !project.fork)
  .map(i => {
    let contributors = 0;
    const last_push = timeSince(new Date(i.pushed_at)) + " ago";

    /* TODO add contributor count
    axios.get('https://api.github.com/repos/' + i.full_name + '/contributors')
      .then(function (response) {
        contributors = response.data.length;
      })
      .catch(function (error) {
        console.log(error);
        contributors = 1;
      });*/

    return {
      'name': i.name,
      'full_name': i.full_name,
      'url': i.html_url,
      'desc': i.description,
      'stargazers': i.stargazers_count,
      'contributors': i.open_issues_count,
      'last_push': last_push
    };
  });

  projects_element.innerHTML = template_github_projects(projects_list);
}

function activity(activities = []) {
  const activity_element = document.getElementById("github-activity");
  let prev_date = "";

  const activity_list = activities.reduce((a, b, i) => {
      b.created_at = moment(b.created_at).format('MMM DD, YYYY');

      switch(b.type) {
        case "WatchEvent":
          b.words = b.payload.action.charAt(0).toUpperCase() + b.payload.action.slice(1);
          break;
        case "PushEvent":
          b.words = "push event";
          break;
        case "IssueCommentEvent":
          b.words = b.payload.action.charAt(0).toUpperCase() + b.payload.action.slice(1);
          break;
        case "ForkEvent":
          b.words = "clone";
          break;
        case "PullRequestEvent":
          b.words = b.payload.action.charAt(0).toUpperCase() + b.payload.action.slice(1);
          break;
        case "IssuesEvent":
          b.words = b.payload.action.charAt(0).toUpperCase() + b.payload.action.slice(1);
          break;
        case "CreateEvent":
          b.words = b.payload.ref_type;
          break;
        case "PullRequestReviewCommentEvent":
          b.words = "pull request";
          break;
        case "DeleteEvent":
          b.words = b.payload.ref_type;
          break;
        case "CommitCommentEvent":
          b.words = "comment";
          break;
      }
      if(b.created_at != prev_date) {
        let dates = [];
        dates.push(b);
        a.push({'date': b.created_at, 'data': dates});
      } else {
        a[a.length-1].data.push(b);
      }
      prev_date = b.created_at;

      return a;
    }, []);

    // reduce each day to collapse multiple of same type
    for (let d in activity_list) {
      let dupe_count = 1;

      if(activity_list[d].data.length > 1) {
        activity_list[d].data = activity_list[d].data.reduce((a, b, i) => {
          if(i === 1) {
            a.action = summarizeAction(a.type, a.words, dupe_count);
            a = [a];
          }

          //TODO make applicable to all types, not just PushEvent and IssuesEvent
          if(a[a.length-1].type === b.type && a[a.length-1].repo.name === b.repo.name && (a[a.length-1].type === "PushEvent" || a[a.length-1].type === "IssuesEvent")) {
            dupe_count++;
            a[a.length-1].action = summarizeAction(a[a.length-1].type, a[a.length-1].words, dupe_count);
            return a;
          } else {
            dupe_count = 1;
            b.action = summarizeAction(b.type, b.words, dupe_count);
            a.push(b);
            return a;
          }
        });
      } else {
        activity_list[d].data[0].action = summarizeAction(activity_list[d].data[0].type, activity_list[d].data[0].words, 1);
      }
    }

  activity_element.innerHTML = template_github_activity(activity_list);
}

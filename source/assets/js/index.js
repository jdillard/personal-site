//import 'babel-polyfill';
import axios from 'axios';

const template_articles = require("./templates/latest_articles.hbs");
const template_trips = require("./templates/latest_trips.hbs");
const template_github_activity = require("./templates/github_activity.hbs");
const template_github_projects = require("./templates/github_projects.hbs");

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

function summarizeAction(type, words) {
  switch(type) {
    case "WatchEvent":
      return words + " watching";
    case "PushEvent":
      return (words > 1) ? "Made "+words+" commits on" : "Made a commit on";
    case "IssueCommentEvent":
      return words + " on";
    case "ForkEvent":
      return "Made a " + words + " of";
    case "PullRequestEvent":
      return words + " on";
    case "IssuesEvent":
      return words + " on";
    case "CreateEvent":
      return "Created " + words + " on";
    case "PullRequestReviewCommentEvent":
      return (words > 1) ? "Left " + words + " pull request reviews on" : "Left a pull request review on";
    case "DeleteEvent":
      return "Deleted a " + words + " on";
    case "CommitCommentEvent":
      return "Made a " + words + " on a commit in";
    case "MemberEvent":
      return words + " a collaborator to";
    case "ReleaseEvent":
      return "Released " + words + " for";
  }
}

/* Display recent articles */
function recentArticles(articles = []) {
  var archive = document.getElementById("latest-articles");

  articles.data.sort(function(a, b) {
    return new Date(b.date_published) - new Date(a.date_published);
  })
  .reduce((a, b, i) => {
      b.date_published = moment(b.date_published).format('MMM DD, YYYY');
      b.summary = b.summary.split(" ").splice(0,40).join(" ");
      a.push(b);
      return a;
  }, []);

  archive.innerHTML = template_articles(articles.data.slice(0,3));
}

/* Display popular articles */
function popularArticles(articles = []) {
  var archive = document.getElementById("latest-articles");

  articles.data.sort(function(a, b) {
    return new Date(b.popularity) - new Date(a.popularity);
  })
  .reduce((a, b, i) => {
      b.date_published = moment(b.date_published).format('MMM DD, YYYY');
      b.summary = b.summary.split(" ").splice(0,40).join(" ");
      a.push(b);
      return a;
  }, []);

  archive.innerHTML = template_articles(articles.data.slice(0,3));
}

/* Handle article navigation */
function articles(articlesNav, type) {
  for (let i = 0; i < articlesNav.length; i++) {
    let name = articlesNav[i].getAttribute('data-name');
    if (name !== type && articlesNav[i].classList.contains("light-red")) {
      articlesNav[i].classList.remove("light-red");
    } else if (name === type && !articlesNav[i].classList.contains("light-red")) {
      articlesNav[i].classList.add("light-red");
    }
  }

  switch(type) {
    case "recent":
      axios.get('/assets/json/articles.json')
        .then(function (response) {
          recentArticles(response.data);
        })
        .catch(function (error) {
          console.log(error);
        });
      break;
    case "popular":
      axios.get('/assets/json/articles.json')
        .then(function (response) {
          popularArticles(response.data);
        })
        .catch(function (error) {
          console.log(error);
        });
      break;
  }
}

/* Display recent trips */
function recent_trips(trips = []) {
  var archive = document.getElementById("latest-trips");

  trips.data.sort(function(a, b) {
    return new Date(b.date_published) - new Date(a.date_published);
  })
  .reduce((a, b, i) => {
      b.date_published = moment(b.date_published).format('MMM DD, YYYY');
      a.push(b);
      return a;
  }, []);

  archive.innerHTML = template_trips(trips.data.slice(0,3));
}

/* Display popular trips */
function popular_trips(trips = []) {
  var archive = document.getElementById("latest-trips");

  trips.data.sort(function(a, b) {
    return new Date(b.popularity) - new Date(a.popularity);
  })
  .reduce((a, b, i) => {
      b.date_published = moment(b.date_published).format('MMM DD, YYYY');
      b.summary = b.summary.split(" ").splice(0,30).join(" ");
      a.push(b);
      return a;
  }, []);

  archive.innerHTML = template_trips(trips.data.slice(0,3));
}

/* Handle trips navigation */
function trips(tripsNav, type) {
  for (let i = 0; i < tripsNav.length; i++) {
    let name = tripsNav[i].getAttribute('data-name');
    if (name !== type && tripsNav[i].classList.contains("light-red")) {
      tripsNav[i].classList.remove("light-red");
    } else if (name === type && !tripsNav[i].classList.contains("light-red")) {
      tripsNav[i].classList.add("light-red");
    }
  }

  switch(type) {
    case "recent":
      axios.get('/assets/json/trips.json')
        .then(function (response) {
          recent_trips(response.data);
        })
        .catch(function (error) {
          console.log(error);
        });
      break;
    case "popular":
      axios.get('/assets/json/trips.json')
        .then(function (response) {
          popular_trips(response.data);
        })
        .catch(function (error) {
          console.log(error);
        });
      break;
  }
}

/* Display GitHub Projects */
function projects(projects = []) {
  const projects_element = document.getElementById("github");

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

/* Display GitHub Activity */
function activity(activities = []) {
  const activity_element = document.getElementById("github");
  let prev_date = "";

  const activity_list = activities.reduce((a, b, i) => {
      b.created_at = moment(b.created_at).format('MMM DD, YYYY');

      switch(b.type) {
        case "WatchEvent":
          b.words = b.payload.action.charAt(0).toUpperCase() + b.payload.action.slice(1);
          b.link = "https://github.com/" + b.repo.name;
          break;
        case "PushEvent":
          b.words = b.payload.commits?.length || 0;
          b.link = "https://github.com/" + b.repo.name + "/commits?author=" + b.actor.display_login;
          break;
        case "IssueCommentEvent":
          b.link = b.payload.comment.html_url;
          let issue_type = (b.link.includes("pull")) ? "pull request" : "issue";
          b.words = b.payload.action.charAt(0).toUpperCase() + b.payload.action.slice(1) + " a comment on <strong>" + issue_type + " #" + b.payload.issue.number + "</strong>";
          break;
        case "ForkEvent":
          b.words = "clone";
          b.link = "https://github.com/" + b.repo.name;
          break;
        case "PullRequestEvent":
          if(b.payload.action === "closed" && b.payload.merged_at != "") { b.payload.action = "merged"; }
          b.words = b.payload.action.charAt(0).toUpperCase() + b.payload.action.slice(1) + " <strong>pull request #" + b.payload.pull_request.number + "</strong>";
          b.link = b.payload.pull_request.html_url;
          break;
        case "IssuesEvent":
          b.words = b.payload.action.charAt(0).toUpperCase() + b.payload.action.slice(1) + " <strong>issue #" + b.payload.issue.number + "</strong>";
          b.link = b.payload.issue.html_url;
          break;
        case "CreateEvent":
          if(b.payload.ref_type === "repository") {
            b.words = 'a <strong>' + b.payload.ref_type + '</strong>';
            b.link = "https://github.com/" + b.repo.name;
          } else {
            b.words = '<strong>' + b.payload.ref_type + ' ' + b.payload.ref + '</strong>';
            b.link = "https://github.com/" + b.repo.name;
          }
          break;
        case "PullRequestReviewCommentEvent":
          b.words = 1;
          b.link = "https://github.com/" + b.repo.name + "/pulls";
          break;
        case "DeleteEvent":
          b.words = b.payload.ref_type;
          b.link = "https://github.com/" + b.repo.name;
          break;
        case "CommitCommentEvent":
          b.words = "comment";
          b.link = "https://github.com/" + b.repo.name;
          break;
        case "MemberEvent":
          b.words = b.payload.action.charAt(0).toUpperCase() + b.payload.action.slice(1);
          b.link = "https://github.com/" + b.repo.name;
          break;
        case "ReleaseEvent":
          b.words = '<strong>' + (b.payload.release?.name || 'a release') + '</strong>';
          b.link = b.payload.release?.html_url || "https://github.com/" + b.repo.name;
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
            if(a.type === "PushEvent") { dupe_count = a.words; }
            if(a.type === "PullRequestReviewCommentEvent") { dupe_count = a.words; }
            a.action = summarizeAction(a.type, a.words);
            a = [a];
          }

          if(a[a.length-1].type === b.type && a[a.length-1].repo.name === b.repo.name && b.type === "PushEvent") {
            dupe_count += b.words;
            a[a.length-1].action = summarizeAction(b.type, dupe_count);
            return a;
          }
          else if(a[a.length-1].type === b.type && a[a.length-1].repo.name === b.repo.name && b.type === "PullRequestReviewCommentEvent") {
            dupe_count += b.words;
            a[a.length-1].action = summarizeAction(b.type, dupe_count);
            return a;
          } else {
            dupe_count = 1;
            b.action = summarizeAction(b.type, b.words);
            a.push(b);
            return a;
          }
        });
      } else {
        activity_list[d].data[0].action = summarizeAction(activity_list[d].data[0].type, activity_list[d].data[0].words);
      }
    }
  activity_element.innerHTML = template_github_activity(activity_list);
}

/* Handle GitHub navigation */
function github(githubNav, type) {
  for (let i = 0; i < githubNav.length; i++) {
    let name = githubNav[i].getAttribute('data-name');
    if (name !== type && githubNav[i].classList.contains("light-red")) {
      githubNav[i].classList.remove("light-red");
    } else if (name === type && !githubNav[i].classList.contains("light-red")) {
      githubNav[i].classList.add("light-red");
    }
  }

  switch(type) {
    case "activity":
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
      break;
    case "projects":
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
      break;
  }
}

const articlesNav = document.getElementById("articles-nav").getElementsByClassName("nav-item");
const tripsNav = document.getElementById("trips-nav").getElementsByClassName("nav-item");
const githubNav = document.getElementById("github-nav").getElementsByClassName("nav-item");

articles(articlesNav, "recent");
trips(tripsNav, "recent");
github(githubNav, "activity");

for (let i = 0; i < articlesNav.length; i++) {
  articlesNav[i].onclick = function(){
    let type = articlesNav[i].getAttribute('data-name');
    articles(articlesNav, type);
  };
}

for (let i = 0; i < tripsNav.length; i++) {
  tripsNav[i].onclick = function(){
    let type = tripsNav[i].getAttribute('data-name');
    trips(tripsNav, type);
  };
}

for (let i = 0; i < githubNav.length; i++) {
  githubNav[i].onclick = function(){
    let type = githubNav[i].getAttribute('data-name');
    github(githubNav, type);
  };
}


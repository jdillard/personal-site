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

function timeSince(date) {

  var seconds = Math.floor((new Date() - date) / 1000);

  var interval = Math.floor(seconds / 31536000);

  if (interval > 1) {
    return interval + " years ago";
  }
  interval = Math.floor(seconds / 2592000);
  if (interval > 1) {
    return interval + " months ago";
  }
  interval = Math.floor(seconds / 86400);
  if (interval > 1) {
    return interval + " days ago";
  }
  interval = Math.floor(seconds / 3600);
  if (interval > 1) {
    return interval + " hours ago";
  }
  interval = Math.floor(seconds / 60);
  if (interval > 1) {
    return interval + " minutes ago";
  }
  return Math.floor(seconds) + " seconds ago";
}

function articles(articles) {
  var archive = document.getElementById("latest-articles");
  var articles_by_date = [];

  articles.data.sort(function(a, b) {
    return new Date(b.date_published) - new Date(a.date_published);
  })
  .reduce((new_arr, value) => {
      value.date_published = moment(value.date_published).format('MMM DD, YYYY');
      new_arr.push(value);
      return new_arr;
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
    const last_push = timeSince(new Date(i.pushed_at));

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
  console.log(projects_list);
}

function activity(activities = []) {
  const activity_element = document.getElementById("github-activity");
  let last_year = "";

  const activity_list = activities.map(i => ({
      'action': i.type,
      'created_at': i.created_at,
      'repo_name': i.repo.name,
      'repo_url': 'https://github.com/' + i.repo.name
    }))
  .reduce((new_arr, value, index) => {
      value.created_at = moment(value.created_at).format('MMM DD, YYYY');

      switch(value.action) {
        case "WatchEvent":
          value.action = "Started watching";
          break;
        case "PushEvent":
          value.action = "Made a push event on";
          break;
        case "IssueCommentEvent":
          value.action = "Made a comment on";
          break;
        case "ForkEvent":
          value.action = "Made a clone of";
          break;
        case "PullRequestEvent":
          value.action = "Made a pull request on";
          break;
      }
      if(value.created_at != last_year) {
        var temp_arr = [];
        temp_arr.push(value);
        new_arr.push({'year': value.created_at, 'data': temp_arr});
      } else {
        new_arr[new_arr.length-1].data.push(value);
      }
      last_year = value.created_at;

      return new_arr;
    }, []);

  activity_element.innerHTML = template_github_activity(activity_list);
}

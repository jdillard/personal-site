/**
 * GitHub section module
 */
import axios from 'axios';
import moment from 'moment';
import { toggleActiveNav, setupNavListeners } from './utils/nav.js';
import { timeSince } from './utils/time.js';

const templateActivity = require('../templates/github_activity.hbs');
const templateProjects = require('../templates/github_projects.hbs');

const GITHUB_EVENTS_URL = 'https://api.github.com/users/jdillard/events';
const GITHUB_REPOS_URL = 'https://api.github.com/users/jdillard/repos';
const LOCAL_ACTIVITY_URL = '/assets/json/activity.json';
const LOCAL_PROJECTS_URL = '/assets/json/projects.json';

/**
 * Convert GitHub event type to human-readable action
 */
function summarizeAction(type, words) {
  switch (type) {
    case "WatchEvent":
      return words + " watching";
    case "PushEvent":
      return (words > 1) ? "Made " + words + " commits on" : "Made a commit on";
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

/**
 * Display GitHub projects
 */
function displayProjects(projects = []) {
  const projectsElement = document.getElementById("github");

  const projectsList = projects
    .sort((a, b) => b.stargazers_count - a.stargazers_count)
    .filter(project => !project.fork)
    .map(i => {
      const last_push = timeSince(new Date(i.pushed_at)) + " ago";

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

  projectsElement.innerHTML = templateProjects(projectsList);
}

/**
 * Display GitHub activity
 */
function displayActivity(activities = []) {
  const activityElement = document.getElementById("github");
  let prev_date = "";

  const activityList = activities.reduce((a, b, i) => {
    b.created_at = moment(b.created_at).format('MMM DD, YYYY');

    switch (b.type) {
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
        if (b.payload.action === "closed" && b.payload.merged_at != "") { b.payload.action = "merged"; }
        b.words = b.payload.action.charAt(0).toUpperCase() + b.payload.action.slice(1) + " <strong>pull request #" + b.payload.pull_request.number + "</strong>";
        b.link = b.payload.pull_request.html_url;
        break;
      case "IssuesEvent":
        b.words = b.payload.action.charAt(0).toUpperCase() + b.payload.action.slice(1) + " <strong>issue #" + b.payload.issue.number + "</strong>";
        b.link = b.payload.issue.html_url;
        break;
      case "CreateEvent":
        if (b.payload.ref_type === "repository") {
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

    if (b.created_at != prev_date) {
      let dates = [];
      dates.push(b);
      a.push({ 'date': b.created_at, 'data': dates });
    } else {
      a[a.length - 1].data.push(b);
    }
    prev_date = b.created_at;

    return a;
  }, []);

  // Reduce each day to collapse multiple of same type
  for (let d in activityList) {
    let dupe_count = 1;

    if (activityList[d].data.length > 1) {
      activityList[d].data = activityList[d].data.reduce((a, b, i) => {
        if (i === 1) {
          if (a.type === "PushEvent") { dupe_count = a.words; }
          if (a.type === "PullRequestReviewCommentEvent") { dupe_count = a.words; }
          a.action = summarizeAction(a.type, a.words);
          a = [a];
        }

        if (a[a.length - 1].type === b.type && a[a.length - 1].repo.name === b.repo.name && b.type === "PushEvent") {
          dupe_count += b.words;
          a[a.length - 1].action = summarizeAction(b.type, dupe_count);
          return a;
        }
        else if (a[a.length - 1].type === b.type && a[a.length - 1].repo.name === b.repo.name && b.type === "PullRequestReviewCommentEvent") {
          dupe_count += b.words;
          a[a.length - 1].action = summarizeAction(b.type, dupe_count);
          return a;
        } else {
          dupe_count = 1;
          b.action = summarizeAction(b.type, b.words);
          a.push(b);
          return a;
        }
      });
    } else {
      activityList[d].data[0].action = summarizeAction(activityList[d].data[0].type, activityList[d].data[0].words);
    }
  }

  activityElement.innerHTML = templateActivity(activityList);
}

/**
 * Fetch with fallback to local JSON on API failure
 */
function fetchWithFallback(primaryUrl, fallbackUrl, displayFn) {
  axios.get(primaryUrl)
    .then(response => displayFn(response.data))
    .catch(error => {
      console.log(error);
      // Fallback to local file on 403 (rate limit)
      axios.get(fallbackUrl)
        .then(response => displayFn(response.data))
        .catch(fallbackError => {
          displayFn();
          console.log(fallbackError);
        });
    });
}

/**
 * Load GitHub data based on type
 */
function loadGithub(navItems, type) {
  toggleActiveNav(navItems, type);

  switch (type) {
    case "activity":
      fetchWithFallback(GITHUB_EVENTS_URL, LOCAL_ACTIVITY_URL, displayActivity);
      break;
    case "projects":
      fetchWithFallback(GITHUB_REPOS_URL, LOCAL_PROJECTS_URL, displayProjects);
      break;
  }
}

/**
 * Initialize the GitHub section
 */
export function init() {
  const navItems = document.getElementById('github-nav').getElementsByClassName('nav-item');

  loadGithub(navItems, 'activity');
  setupNavListeners(navItems, type => loadGithub(navItems, type));
}

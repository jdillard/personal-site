/**
 * Articles section module
 */
import axios from 'axios';
import moment from 'moment';
import { toggleActiveNav, setupNavListeners } from './utils/nav.js';

const template = require('../templates/latest_articles.hbs');

const ARTICLES_URL = '/assets/json/articles.json';
const DISPLAY_COUNT = 6;
const SUMMARY_WORD_LIMIT = 40;

/**
 * Display articles sorted by the specified criteria
 * @param {Object} articles - Articles data object
 * @param {string} sortBy - Sort type: 'recent' or 'popular'
 */
function displayArticles(articles, sortBy) {
  const archive = document.getElementById('latest-articles');

  const sorted = [...articles.data].sort((a, b) =>
    sortBy === 'recent'
      ? new Date(b.date_published) - new Date(a.date_published)
      : b.popularity - a.popularity
  );

  sorted.forEach(article => {
    article.date_published = moment(article.date_published).format('MMM DD, YYYY');
    article.summary = article.summary.split(' ').slice(0, SUMMARY_WORD_LIMIT).join(' ');
  });

  archive.innerHTML = template(sorted.slice(0, DISPLAY_COUNT));
}

/**
 * Load and display articles
 * @param {HTMLCollection} navItems - Navigation items for state updates
 * @param {string} type - 'recent' or 'popular'
 */
function loadArticles(navItems, type) {
  toggleActiveNav(navItems, type);

  axios.get(ARTICLES_URL)
    .then(response => displayArticles(response.data, type))
    .catch(error => console.log(error));
}

/**
 * Initialize the articles section
 */
export function init() {
  const navItems = document.getElementById('articles-nav').getElementsByClassName('nav-item');

  loadArticles(navItems, 'recent');
  setupNavListeners(navItems, type => loadArticles(navItems, type));
}

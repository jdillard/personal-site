/**
 * Articles section module
 */
import axios from 'axios';
import moment from 'moment';

const template = require('../templates/latest_articles.hbs');

const ARTICLES_URL = '/assets/json/articles.json';
const DISPLAY_COUNT = 5;
const SUMMARY_WORD_LIMIT = 40;

/**
 * Display articles sorted by most recent
 * @param {Object} articles - Articles data object
 */
function displayArticles(articles) {
  const archive = document.getElementById('latest-articles');

  const sorted = [...articles.data].sort((a, b) =>
    new Date(b.date_published) - new Date(a.date_published)
  );

  sorted.forEach(article => {
    article.date_published = moment(article.date_published).format('MMM DD, YYYY');
    article.summary = article.summary.split(' ').slice(0, SUMMARY_WORD_LIMIT).join(' ');
  });

  archive.innerHTML = template(sorted.slice(0, DISPLAY_COUNT));
}

/**
 * Initialize the articles section
 */
export function init() {
  axios.get(ARTICLES_URL)
    .then(response => displayArticles(response.data))
    .catch(error => console.log(error));
}

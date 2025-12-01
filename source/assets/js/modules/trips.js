/**
 * Trips section module
 */
import axios from 'axios';
import moment from 'moment';
import { toggleActiveNav, setupNavListeners } from './utils/nav.js';

const template = require('../templates/latest_trips.hbs');

const TRIPS_URL = '/assets/json/trips.json';
const DISPLAY_COUNT = 3;
const SUMMARY_WORD_LIMIT = 30;

/**
 * Display trips sorted by the specified criteria
 * @param {Object} trips - Trips data object
 * @param {string} sortBy - Sort type: 'recent' or 'popular'
 */
function displayTrips(trips, sortBy) {
  const archive = document.getElementById('latest-trips');

  const sorted = [...trips.data].sort((a, b) =>
    sortBy === 'recent'
      ? new Date(b.date_published) - new Date(a.date_published)
      : b.popularity - a.popularity
  );

  sorted.forEach(trip => {
    trip.date_published = moment(trip.date_published).format('MMM DD, YYYY');
    // Popular view truncates summaries
    if (sortBy === 'popular' && trip.summary) {
      trip.summary = trip.summary.split(' ').slice(0, SUMMARY_WORD_LIMIT).join(' ');
    }
  });

  archive.innerHTML = template(sorted.slice(0, DISPLAY_COUNT));
}

/**
 * Load and display trips
 * @param {HTMLCollection} navItems - Navigation items for state updates
 * @param {string} type - 'recent' or 'popular'
 */
function loadTrips(navItems, type) {
  toggleActiveNav(navItems, type);

  axios.get(TRIPS_URL)
    .then(response => displayTrips(response.data, type))
    .catch(error => console.log(error));
}

/**
 * Initialize the trips section
 */
export function init() {
  const navItems = document.getElementById('trips-nav').getElementsByClassName('nav-item');

  loadTrips(navItems, 'recent');
  setupNavListeners(navItems, type => loadTrips(navItems, type));
}

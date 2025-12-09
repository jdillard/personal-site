/**
 * Trips section module
 */
import axios from 'axios';

const template = require('../templates/latest_trips.hbs');

const TRIPS_URL = '/assets/json/trips.json';
const DISPLAY_COUNT = 9;

/**
 * Display trips sorted by most recent
 * @param {Object} trips - Trips data object
 */
function displayTrips(trips) {
  const archive = document.getElementById('latest-trips');

  const sorted = [...trips.data].sort((a, b) =>
    new Date(b.date_published) - new Date(a.date_published)
  );

  archive.innerHTML = template(sorted.slice(0, DISPLAY_COUNT));
}

/**
 * Initialize the trips section
 */
export function init() {
  axios.get(TRIPS_URL)
    .then(response => displayTrips(response.data))
    .catch(error => console.log(error));
}

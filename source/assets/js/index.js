/**
 * Homepage entry point
 * Initializes articles, trips, and GitHub sections
 */
import { init as initArticles } from './modules/articles.js';
import { init as initTrips } from './modules/trips.js';
import { init as initGithub } from './modules/github.js';

initArticles();
initTrips();
initGithub();

/**
 * @fileoverview Taylor's Tides application
 *
 * This module handles tide predictions for Taylor Dock, displaying low tide times
 * that occur during daylight hours. It also provides a way to view GitHub issues
 * related to the application.
 *
 */

import u from 'umbrellajs';
import axios from 'axios';
import template_tide_predictions from './templates/taylor_tides.hbs';

/**
 * Fetches GitHub issues with the 'taylor' label and displays them on the page
 * @async
 */
async function getIssues() {
    try {
        const response = await axios.get(
        'https://api.github.com/repos/jdillard/personal-site/issues',
        {
            params: {
                labels: 'taylor',
                state: 'open'
            }
        }
        );

        const issuesContainer = document.getElementById("issues");

        if(response.data.length) {
            const issuesHTML = response.data.map(issue =>
                `<div class="mv2">
                  <a class="no-underline relative f6 black-70 hover-light-red" href="${issue.html_url}">
                    ${issue.title}
                  </a>
                </div>`
            ).join('');

            issuesContainer.innerHTML = issuesHTML;
        } else {
            issuesContainer.innerHTML = '<div class="pa4 tc silver ma3 ba b--light-gray">No Issues Found.</div>';
        }
    } catch (error) {
        console.error('Error fetching GitHub issues:', error);

        document.getElementById("issues").innerHTML =
        '<div class="pa4 tc silver ma3 ba b--light-gray">Unable to load issues. Please try again later.</div>';
    }
}

/**
 * Formats a date as YYYYMMDD
 * @param {Date} date - The date to format
 * @returns {string} - Formatted date string
 */
function formatDateYYYYMMDD(date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}${month}${day}`;
}

/**
 * Converts a date to the specified timezone
 * @param {Date|string} date - The date to convert
 * @param {string} tzString - The timezone string (e.g., 'America/Los_Angeles')
 * @returns {Date} - The date in the specified timezone
 */
function convertTZ(date, tzString) {
    return new Date((typeof date === "string" ? new Date(date) : date).toLocaleString("en-US", {timeZone: tzString}));
}

/**
 * Fetches tide predictions from the NOAA API
 * @async
 */
async function fetchTidePredictions() {
    try {
      // Calculate date range
      const today = new Date();
      const lastday = new Date(today);
      lastday.setDate(today.getDate() + 13);

      const todayString = formatDateYYYYMMDD(today);
      const lastdayString = formatDateYYYYMMDD(lastday);

      const response = await axios.get(
        'https://api.tidesandcurrents.noaa.gov/api/prod/datagetter',
        {
            params: {
                product: 'predictions',
                application: 'NOS.COOPS.TAC.WL',
                begin_date: todayString,
                end_date: lastdayString,
                datum: 'MLLW',
                station: '9449424',
                time_zone: 'GMT',
                units: 'english',
                interval: 'h',
                format: 'json'
            }
        }
      );

      const predictions = response.data.predictions;
      if (!predictions || !Array.isArray(predictions)) {
        throw new Error('Invalid predictions data'); //TODO double check
      }

      const lowTides = filterLowTides(predictions);
      const dayGroups = calculateTideStreaks(lowTides);
      const formattedData = organizeTideData(dayGroups);

      document.getElementById("dates").innerHTML = template_tide_predictions(formattedData);
    } catch (error) {
      console.error('Error fetching tide predictions:', error);

      document.getElementById("dates").innerHTML =
        '<div class="pa4 tc silver ma3 ba b--light-gray">Error loading tide data.</div>';
    }
}

/**
 * Filters low tides during daylight hours
 * @param {Array} predictions - Raw tide predictions
 * @returns {Array} - Filtered low tides
 */
function filterLowTides(predictions) {
    return predictions
      .map(prediction => {
        const regexMatch = /(\d{4})-(\d{2})-(\d{2}) (\d{2}):(\d{2})/.exec(prediction.t);

        if (!regexMatch) return null;

        const [_, year, month, day, hour, minute] = regexMatch;

        const gmtDate = new Date(Date.UTC(
            parseInt(year),
            parseInt(month) - 1,
            parseInt(day),
            parseInt(hour),
            parseInt(minute)
        ));

        const localDate = convertTZ(gmtDate, "America/Los_Angeles");

        return {
            t: localDate,
            v: parseFloat(prediction.v)
        };
      })
      .filter(item =>
        item !== null &&
        item.v < 4 &&
        item.t.getHours() > 5 &&
        item.t.getHours() < 22
      );
}

/**
 * Calculates low tide streaks grouped by day
 * @param {Array} lowTides - Filtered low tides
 * @returns {Object} - Object with days as keys and arrays of tide streaks as values
 */
function calculateTideStreaks(lowTides) {
    const days = {};
    let currentStreak = {};

    lowTides.forEach((tide, index) => {
      const thisDate = new Date(tide.t);
      const nextTide = index < lowTides.length - 1 ? lowTides[index + 1] : null;
      const nextDate = nextTide ? new Date(nextTide.t) : null;

      // Check if consecutive on same day
      const isConsecutive = nextDate &&
        thisDate.getDate() === nextDate.getDate() &&
        nextDate.getHours() - thisDate.getHours() === 1;

      if (isConsecutive) {
        if (Object.keys(currentStreak).length > 0) {
          currentStreak.end = thisDate;
        } else {
          currentStreak.start = thisDate;
        }
      } else {
        // handle edge cases
        if (Object.keys(currentStreak).length === 0) {
          currentStreak.start = thisDate;
          currentStreak.end = thisDate;
        } else if (!currentStreak.end) {
          currentStreak.end = thisDate;
        }

        const dateKey = thisDate.toLocaleDateString("en-US");
        days[dateKey] = days[dateKey] || [];
        days[dateKey].push({...currentStreak});

        currentStreak = {};
      }
    });

    return days;
}

/**
 * Organizes tide data for display
 * @param {Object} dayGroups - Object with days as keys and arrays of tide streaks as values
 * @returns {Object} - Organized data for template rendering
 */
function organizeTideData(dayGroups) {
    const dates = {
      thisweek: [],
      nextweek: []
    };

    const firstDate = Object.values(dayGroups)[0]?.[0]?.start;
    if (!firstDate) return dates;

    const nextWeekStart = new Date(firstDate);
    nextWeekStart.setHours(0);
    nextWeekStart.setDate(nextWeekStart.getDate() + 7);

    Object.entries(dayGroups).forEach(([dayKey, streaks]) => {
      if (!streaks.length) return;

      const lowtides = streaks.map(streak => {
        if (!streak.start || !streak.end) return null;

        const startTime = new Date(streak.start);
        const endTime = new Date(streak.end);

        return {
          streak: `${startTime.toLocaleString('en-US', { hour: 'numeric', hour12: true })} - ${endTime.toLocaleString('en-US', { hour: 'numeric', hour12: true })}`
        };
      }).filter(Boolean);

      const currentDay = new Date(streaks[0].start);
      const weekGroup = currentDay < nextWeekStart ? 'thisweek' : 'nextweek';

      dates[weekGroup].push({
        weekday: currentDay.toLocaleString('en-US', { weekday: 'short' }).toUpperCase(),
        date: `${currentDay.getMonth() + 1}/${currentDay.getDate()}`,
        lowtides
      });
    });

    return dates;
}

// Initialize tide predictions on page load
document.addEventListener('DOMContentLoaded', fetchTidePredictions);

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

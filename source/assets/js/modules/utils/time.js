/**
 * Time utilities
 */

/**
 * Calculate human-readable time since a date
 * @param {Date} date - The past date to compare
 * @param {Date} recentDate - The reference date (default: now)
 * @returns {string} Human-readable time difference (e.g., "2 days")
 */
export function timeSince(date, recentDate = new Date()) {
  const seconds = Math.floor((recentDate - date) / 1000);

  let interval = Math.floor(seconds / 31536000);
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

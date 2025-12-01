/**
 * Shared navigation utilities
 */

/**
 * Toggle active state on navigation items
 * @param {HTMLCollection} navItems - Collection of nav items
 * @param {string} activeType - The data-name value to mark as active
 * @param {string} activeClass - CSS class to toggle (default: 'light-red')
 */
export function toggleActiveNav(navItems, activeType, activeClass = 'light-red') {
  for (const item of navItems) {
    const name = item.getAttribute('data-name');
    item.classList.toggle(activeClass, name === activeType);
  }
}

/**
 * Set up click listeners on nav items
 * @param {HTMLCollection} navItems - Collection of nav items
 * @param {Function} handler - Callback receiving the clicked item's data-name
 */
export function setupNavListeners(navItems, handler) {
  for (const item of navItems) {
    item.onclick = () => handler(item.getAttribute('data-name'));
  }
}

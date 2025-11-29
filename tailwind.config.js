/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './source/**/*.html',
    './source/**/*.md',
    './source/assets/js/**/*.js',
    './source/assets/js/**/*.hbs',
  ],
  // Prefix all Tailwind classes to avoid conflicts with Tachyons during migration
  prefix: 'tw-',
  corePlugins: {
    // Disable Preflight (CSS reset) to avoid conflicts with Tachyons' normalize
    preflight: false,
  },
  theme: {
    extend: {
      colors: {
        // Grayscale (from Tachyons)
        'near-black': '#111',
        'dark-gray': '#333',
        'mid-gray': '#555',
        'gray': '#777',
        'silver': '#999',
        'light-silver': '#aaa',
        'moon-gray': '#ccc',
        'light-gray': '#eee',
        'near-white': '#f4f4f4',

        // Brand colors
        'dark-red': '#e7040f',
        'red': '#ff4136',
        'light-red': '#ff725c',  // Primary brand color
        'orange': '#ff6300',
        'gold': '#ffb700',
        'yellow': '#ffd700',
        'light-yellow': '#fbf1a9',
        'purple': '#5e2ca5',
        'light-purple': '#a463f2',
        'dark-pink': '#d5008f',
        'hot-pink': '#ff41b4',
        'pink': '#ff80cc',
        'light-pink': '#ffa3d7',
        'dark-green': '#137752',
        'green': '#19a974',
        'light-green': '#9eebcf',
        'navy': '#001b44',
        'dark-blue': '#00449e',
        'blue': '#357edd',
        'light-blue': '#96ccff',
        'lightest-blue': '#cdecff',
        'washed-blue': '#f6fffe',
        'washed-green': '#e8fdf5',
        'washed-yellow': '#fffceb',
        'washed-red': '#ffdfdf',
      },
      screens: {
        // Match Tachyons breakpoints
        'ns': '30em',   // 480px - "not small"
        'l': '60em',    // 960px - "large"
      },
      fontFamily: {
        'athelas': ['Athelas', 'Georgia', 'serif'],
        'avenir': ['avenir next', 'avenir', 'sans-serif'],
        'baskerville': ['Baskerville', 'serif'],
      },
      maxWidth: {
        '6-5': '40rem',  // Custom mw6-5 from Tachyons customizations
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
}

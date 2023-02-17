/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{html,js,jsx}',
    './pages/**/*.{html,js,jsx}',
    './layout/**/*.{html,js,jsx}',
    './homepage/**/*.{html,js,jsx}',
    './sidebar/**/*.{html,js,jsx}',
    './cars/**/*.{html,js,jsx}',
  ],
  theme: {
    colors: {
      blue: '#5E17EB',
      'blue-light': '#BEDCF2',
      white: '#FFFFFF',
      purple: '#7e5bef',
      pink: '#FFD6C6',
      orange: '#ff7849',
      dark: {
        100: '#0A1017',
        200: '#828282',
        300: '#29292B',
        400: '#544F49',
      },
      'gray-dark': '#273444',
      'gray-light': '#EFF0F7;',
      yellow: '#FFEAB3',
      gray: '#8492a6',
      'chesky-gray': '#A279F8',
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Nirmala UI', 'serif'],
    },
    extend: {},
  },
  plugins: [],
};

/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        'dark-purple': '#24053E',
        'ghost-white': '#FCF8FF',
        'light-green': '#44FFA1',
        'davys-grey': '#584D62',
      },
      fontFamily: {
        'manrope': ['Manrope', 'sans-serif'],
        'fraunces': ['Fraunces', 'serif']
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

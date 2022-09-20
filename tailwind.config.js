/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        neuton: ['"Neuton"', ...defaultTheme.fontFamily.sans],
        cultive: ['"Cultive Mono"', ...defaultTheme.fontFamily.sans],
        alfa: ['"Alfa Slab One"', ...defaultTheme.fontFamily.sans],
      }
    },
  },
  plugins: [],
}
/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');
const { join } = require('path');

module.exports = {
  presets: [require('../tailwind.config.js')],
  content: [join(__dirname, '../libs/**/*.(js|jsx|ts|tsx)')],
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
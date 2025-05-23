const postcss = require('postcss');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  corePlugins: {
    preflight: true,
  },
  postcss: {
    plugins: [
      require('tailwindcss'),
      require('autoprefixer'),
    ],
  },
} 
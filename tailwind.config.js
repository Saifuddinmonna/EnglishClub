const postcss = require('postcss');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      transitionDuration: {
        '2000': '2000ms',
      },
    },
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
/** @type {import('tailwindcss').Config} */
module.exports = {
  // purge: ['../public/src/**/*.{js,jsx,ts,tsx}', '../public/index.html'],
  content: [
    './public/**/*.html',
    './public/*.html',

  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Open Sans', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

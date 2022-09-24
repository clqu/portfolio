/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#4F3DFE",
        secondary: "#0B0A1F"
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography')
  ],
}

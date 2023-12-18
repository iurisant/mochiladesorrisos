/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        'xm': '1024px',
        'ms': '426px'
      },
    },
  },
  plugins: [],
}
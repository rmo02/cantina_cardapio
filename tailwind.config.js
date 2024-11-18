/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#F9F9F9',
        card: '#FFFFFF',
        button: '#43C2D1',
      },
    },
  },
  plugins: [],
}

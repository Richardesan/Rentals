/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-light" : "#F7F8FAB2",
        "renatal-blue" : "#0C2D5B",
        "rental-yellow" : "#D4AF37E5",
        "rental-dark" : "#1C1C1E"
      },
      animation: {
        'spin-slow': 'spin 5s linear infinite',
      },
    },
  },
  plugins: [],
}
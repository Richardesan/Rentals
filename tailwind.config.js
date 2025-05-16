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
        
        "rental-dark" : "#1C1C1E",
         "lightText": "#757575",
                "borderCol": "#E2E2E2",
                "darkText": "#1A1A1A",
                "primaryCol": "#0C2D5B",
                "textRed": "#C8170D",
                "danger": "#f87171",
      },
      animation: {
        'spin-slow': 'spin 5s linear infinite',
      },
       boxShadow: {
                "custom-combined": `
          -2px 16px 35px 0px rgba(209, 209, 209, 0.1),
          -9px 63px 64px 0px rgba(209, 209, 209, 0.09),
          -21px 143px 87px 0px rgba(209, 209, 209, 0.05),
          -38px 254px 103px 0px rgba(209, 209, 209, 0.03),
          -59px 396px 112px 0px rgba(209, 209, 209, 0.00)
        `,
                "custom-light": "0px 28px 28px 0px #F1F5F9",
                "custom-shadow": "0px 6px 6px 0px #F1F5F9",
                "custom-shadow-hover": "0px 10px 10px 0px #F1F5F9"
            },
    },
  },
  plugins: [],
}
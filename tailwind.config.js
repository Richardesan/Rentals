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
        "rental-green" : "#1BD21BA3",
        
        "rental-dark" : "#1C1C1E",
         "lightText": "#D9D9D9A0",
         "rental-deep": "#A0A0A0A0",
                "borderCol": "#E2E2E2",
                "darkText": "#1A1A1A",
                "primaryCol": "#0C2D5B",
                "textRed": "#C8170D",
                "danger": "#f87171",
      },
      animation: {
        'spin-slow': 'spin 5s linear infinite',
      },
      
      backgroundImage: {
        'custom-gradient': 'linear-gradient(100.47deg, rgba(146, 147, 148, 0.21) -29.11%, rgba(247, 248, 250, 0.3) 48.41%)',
         'glossy-gradient': 'linear-gradient(180deg, rgba(247, 248, 250, 0.7) 34.14%, rgba(146, 147, 148, 0.49) 78.85%)',
        'gold-gradient': 'linear-gradient(173.3deg, #0C2D5B 10.23%, rgba(212, 175, 55, 0.7) 105.49%, rgba(212, 175, 55, 0.7) 138.1%)',
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
                "custom-shadow-hover": "0px 10px 10px 0px #F1F5F9",
                        "subtle": '0 0 4px 0 #00000040',

            },
    },
  },
  plugins: [],
}
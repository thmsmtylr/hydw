const { fontFamily } = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'flyer': ['flyer', 'sans-serif'],
        'ambit': ['ambit', 'sans-serif'],
      },
      fontSize: {
        // "6xl": ["3.75rem", 0.8],
        // "10xl": ["9rem", "1rem"],
        // "11xl": ["10rem", 0.8],
        // "12xl": ["11rem", "1rem"],
        "dt2xl": ["160px", "85%"],
        "dtxl": ["94px", "85%"],
        "dtlg": ["60px", "85%"],
        "dtmed": ["32px", "85%"],
        "dtbase": ["24px", "120%"],
        "dtsml": ["16px", "120%"],
        "dtsxml": ["14px", "120%"],
      },
      colors: {
        "hydw-blue": "#3b2dff",
        "hydw-vanilla": "#f9f5cc",
        "hydw-charcoal": "#282828",
        "hydw-natural": "#F5F5F5",
        "hydw-pink": "#FF6CF4",
        "hydw-orange": "#FF9650",
        "hydw-yellow": "#EFE145",
        "test-grey" : "#c1c1c1",
      },
      skew: {
        40: "-20deg",
      },
    },
  },
  plugins: [],
};

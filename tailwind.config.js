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
        ambit: ["var(--font-ambit)", ...fontFamily.sans],
        flyer: ["var(--font-flyer)", ...fontFamily.sans],
      },
      fontSize: {
        "6xl": ["3.75rem", 0.8],
        "10xl": ["9rem", "1rem"],
        "11xl": ["10rem", 0.8],
        "12xl": ["11rem", "1rem"],
      },
      colors: {
        "hydw-blue": "#3b2dff",
        "hydw-vanilla": "#f9f5cc",
        "hydw-charcoal": "#282828",
        "hydw-natural": "#F5F5F5",
        "hydw-pink": "#FF6CF4",
        "hydw-orange": "#FF9650",
        "hydw-yellow": "#EFE145",
      },
      skew: {
        40: "-40deg",
      },
    },
  },
  plugins: [],
};

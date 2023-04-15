const { fontFamily } = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        ambit: ["var(--font-ambit)", ...fontFamily.sans],
        flyer: ["var(--font-flyer)", ...fontFamily.sans],
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
    },
  },
  plugins: [],
};

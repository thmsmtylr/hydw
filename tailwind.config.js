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
        flyer: ["flyer", "sans-serif"],
        ambit: ["ambit", "sans-serif"],
      },
      fontSize: {
        dt2xl: ["150px", "85%"],
        dtxl: ["94px", "85%"],
        dtlg: ["60px", "95%"],
        dtmed: ["32px", "85%"],
        dtbase: ["24px", "120%"],
        dtsml: ["16px", "120%"],
        dtsxml: ["14px", "120%"],
        mb2xl: ["80px", "85%"],
        mbxl: ["60px", "85%"],
        mbsmxl: ["40px", "85%"],
        mblg: ["32px", "95%"],
        mbmed: ["24px", "85%"],
        mbbase: ["18px", "120%"],
      },
      screens: {
        shortsml: { raw: "(max-height: 400px)" },
        shortmd: { raw: "(max-height: 600px) and (min-width: 768px)" },
        shortlg: { raw: "(max-height: 800px) and (min-width: 1024px)" },
        tallsml: { raw: "(min-height: 1000px)" },
        talllg: { raw: "(min-height: 1000px) and (min-width: 1024px)" },
        tallxl: { raw: "(min-height: 1000px) and (min-width: 1280px)" },
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
        40: "-20deg",
      },
      cursor: {
        default: "url(../public/pud.cur), default",
        pointer: "url(../public/eatenpud.cur), pointer",
      },
      keyframes: {
        wiggle: {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" },
        },
      },
      animation: {
        wiggle: "wiggle 1s ease-in-out infinite",
      },
    },
  },
  plugins: [
    function ({ addComponents }) {
      const newComponents = {
        // Typography
        ".heading1": {
          fontFamily: "flyer",
        },
        ".heading2": {
          fontFamily: "flyer",
        },
        ".heading3": {
          fontFamily: "flyer",
        },
        ".heading4": {
          fontFamily: "flyer",
        },
        ".heading5": {
          fontFamily: "flyer",
        },
        ".largestspace": {
          marginTop: "7rem",
          "@screen lg": {
            marginTop: "24rem",
          },
        },
        ".largespace": {
          marginTop: "7rem",
          "@screen lg": {
            marginTop: "13rem",
          },
        },
        ".midspace": {
          marginTop: "3.5rem",
          "@screen lg": {
            marginTop: "7rem",
          },
        },
        ".smallspace": {
          marginTop: "1.75rem",
          "@screen lg": {
            marginTop: "3.5rem",
          },
        },
        ".largestpadding": {
          paddingBottom: "7rem",
          "@screen lg": {
            paddingBottom: "24rem",
          },
        },
        ".largepadding": {
          paddingBottom: "7rem",
          "@screen lg": {
            paddingBottom: "13rem",
          },
        },
        ".smallpadding": {
          paddingBottom: "1.75rem",
          "@screen lg": {
            paddingBottom: "3.5rem",
          },
        },
        ".smallerspace, .heading4 + .body, .heading5 + .body, .body p + p": {
          marginTop: "0.625rem", // equivalent to mt-2.5
          "@screen lg": {
            marginTop: "0.875rem", // equivalent to lg:mt-3.5
          },
        },
        ".largeheight": {
          height: "7rem", // 28 in Tailwind CSS is 7rem
          "@media (min-width: 1024px) and (min-height: 1000px)": {
            height: "13rem", // 52 in Tailwind CSS is 13rem
          },
        },
        ".extraheight": {
          "@media (min-height: 1000px)": {
            marginTop: "18rem", // 52 in Tailwind CSS is 13rem
          },
        },
        ".page-grid": {
          display: "grid",
          gridAutoRows: "min-content",
          gridTemplateColumns: "repeat(12, minmax(0, 1fr))",
          columnGap: "0.625rem", // 2.5 in Tailwind CSS
          "@screen md": {
            columnGap: "1.25rem", // 5 in Tailwind CSS
          },
        },
        ".grid-gap": {
          columnGap: "0.625rem", // 2.5 in Tailwind CSS
          "@screen md": {
            columnGap: "1.25rem", // 5 in Tailwind CSS
          },
        },
        ".wrapper": {
          padding: "0.625rem", // 2.5 in Tailwind CSS
          "@screen md": {
            padding: "2.5rem", // 10 in Tailwind CSS
          },
        },
      };

      addComponents(newComponents);
    },
  ],
};

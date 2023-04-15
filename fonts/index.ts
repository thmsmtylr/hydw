import localFont from "next/font/local";

export const ambitFont = localFont({
  variable: "--font-ambit",
  src: [
    {
      path: "./Ambit-Bold.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./Ambit-Light.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./Ambit-Regular.otf",
      weight: "400",
      style: "normal",
    },
  ],
});

export const flyerFont = localFont({
  variable: "--font-flyer",
  src: [
    { path: "./flyer.woff", weight: "900" },
    { path: "./flyer.woff2", weight: "900" },
  ],
});

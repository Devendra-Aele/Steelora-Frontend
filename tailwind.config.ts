import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        // "primary-text": "#FFC10E",
        "primary-gold": "#1C1C1B",
        "secondary-500": "#8D8D8D",
        "secondary-400": "#CACACA",
        "secondary-600": "#3E3E3E",
        "black-500": "#1C1C1B",
        "black-400": "#0E0E0E",
        "error-red": "#B5242C",
        "dark-grey": "#0C0C0C",
        // "dark-grey": "#F2F2F5",
        "sub-heading-white": "#f3f3f3",
        "para-text": "#101010",
        "white-400": "#F2F2F5",
        // "primary-text": "#1C1C1B",
        "primary-text": "#E26D38",
        "section-heading": "#FFF2ED",
      },
      fontFamily: {
        FrankRuhlLibre: ["Frank Ruhl Libre", "sans"],
        Poppins: ["Poppins", "var(--font-poppins)"],
        Montserrat: ["Montserrat", "var(--font-montserrat)"],

        RidleyGrotesk: ["RidleyGrotesk", "var(--font-ridleyGrotesk)"],
      },
    },
  },
  plugins: [],
};
export default config;

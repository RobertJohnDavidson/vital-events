const fontFamily = require("tailwindcss/defaultTheme").fontFamily;

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        primary: ["var(--oswald-font)", ...fontFamily.sans],
        body: ["var(--source-sans-3-font)", ...fontFamily.sans],
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        lato: ["Roboto Condensed", "sans-serif"],
      },
      colors: {
        "charleston-green": "#2D2D2D",
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      colors: {
        lightGrey: "#292A2C",
        main: "#292A2C",
        navBg: "#FEDC80",
      },
      spacing: {
        128: "38rem",
      },
      strokeWidth: {
        1.5: "1.5px",
      },
    },
  },
  plugins: [],
};

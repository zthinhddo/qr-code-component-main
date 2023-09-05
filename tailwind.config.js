/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  // darkMode: "class",
  content: ["./src/*.html"],
  theme: {
    extend: {
      colors: {
        lightgray: "hsl(212, 45%, 89%)",
        white: "hsl(0, 0%, 100%)",
        grayishblue: "hsl(220, 15%, 55%)",
        darkblue: "hsl(218, 44%, 22%)",
      },
    },
    fontWeight: {
      bold: 400,
      extrabold: 700
    },
  },
  plugins: [],
}


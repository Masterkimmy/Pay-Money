/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./kim/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        dark: "rgb(111 66 193)",
        light: "white",
      },
    },
  },
  plugins: [],
};


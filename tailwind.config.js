/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        accent: "#63A375",
        secondary: "#5d9a6e",
        spaceGray: {
          300: "#606060",
          400: "#555555",
        },
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./index.html"],
  theme: {
    extend: {
      colors: {
        white: "#e9ecef",
        whiteBlue: "#F5F6FB",
        blueOcean: "#1F7CFF",
        grey: "#575455",
        grey2: "#6c757d",
        red: "#F75C4E",
        background: "#212529",
      },
    },
    fontFamily: {
      Poppins: ["Poppins"],
    },
  },
  plugins: [],
};

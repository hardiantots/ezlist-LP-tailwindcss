/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.html"],
  theme: {
    extend: {},
    fontFamily: {
      Poppins : ["Poppins, sans-serif"],
    },
    colors:{
      "blue": "#0D4C92",
      "tosca": "#59C1BD",
      "green": "#A0E4CB",
      "maroon": "#440921",
      "white": "#F7F7F7",
    },
    container: {
      center: true,
      padding: "1rem",
      screens: {
        lg: "1124px",
        xl: "1124px",
        "2xl": "1124px",
      }
    }
  },
  plugins: [],
}

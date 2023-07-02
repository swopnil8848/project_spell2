/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens:{
        "xxsm":"320px",
        "xsm":"375px",
        "sm":"425px",
        "mid":"510px",
        "md":"768px",
        "lg":"1024px",
        "xlg":"1440px"
      }
    },
  },
  plugins: [],
}
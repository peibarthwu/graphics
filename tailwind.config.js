/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      xsm: "500px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
    extend: {
      colors: {
        newspaper: "#f0ebe6",
        cloudy: "#ffea4d",
      },
      fontFamily: {
        sans: ["Helvetica", "sans serif"],
      },
      spacing: {
        13: "3.25rem",
      },
      fontSize: {
        16: "1.6rem",
        24: "2.4rem",
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        textPrimary: ["textPrimary"],
        textSecondary: ["textSecondary"],
        titlePrimary: ["titlePrimary"],
        titleSecondary: ["titleSecondary"],
        raleway: ["Raleway", "sans-serif"],
      },
      colors: {
        primary: "#66B539",
        secondary: "#E8F7DD",
        text: "#374148",
        heading: "#151B1F",
      },
      container: {
        center: true,
        padding: "3rem",
      },
    },
  },
  plugins: [],
};

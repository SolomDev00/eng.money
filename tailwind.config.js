/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "3rem",
        xl: "4rem",
        "2xl": "6rem",
      },
    },
    extend: {
      colors: {
        background: "#2c2e30",
        primary: "#FF3F00",
        hover: "#e9663a",
        accent: "#FFC801",
        font: "#8fb635",
      },
    },
  },
  plugins: [],
  darkMode: "class",
};

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#10151f",
        "ink-soft": "#182232",
        gold: "#c6a15b",
        "gold-deep": "#8d6b32",
        paper: "#f7f4ee",
        sand: "#efe6d6",
        line: "#e6dfd2",
      },
    },
  },
  plugins: [],
};

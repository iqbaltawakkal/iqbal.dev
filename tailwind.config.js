/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      sm: "480px",
      md: "640px",
      lg: "768px",
      xl: "1024px",
    },
    extend: {
      colors: {
        "dark-primary-text": "#c9d1d9",
        "dark-secondary-text": "#8b949e",
        "dark-primary-bg": "#090c10",
        "dark-secondary-bg": "#0d1117",
        "dark-border": "#30363d",
        "light-primary-text": "#24292e",
        "light-secondary-text": "#586069",
        "light-primary-bg": "#f6f8fa",
        "light-secondary-bg": "#ffffff",
        "light-border": "#e1e4e8",
      },
      fontFamily: {
        sans: ["Nunito", "system-ui"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

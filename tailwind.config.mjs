/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        primary: "#C75B39",
        dark: "#2C1810",
        accent: "#8B6914",
        "bbq-text": "#3D2B1F",
        "bbq-light": "#8C7B6B",
        "bbq-bg": "#FAF6F1",
        "bbq-card": "#FFFFFF"
      },
      fontFamily: {
        sans: ["Noto Sans TC", "sans-serif"]
      }
    }
  },
  plugins: []
};

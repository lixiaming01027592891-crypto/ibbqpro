/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        "bbq-text": "#3D2B1F",
        "bbq-bg": "#FAF6F1"
      },
      fontFamily: {
        sans: ["Noto Sans TC", "sans-serif"]
      }
    }
  },
  plugins: []
};

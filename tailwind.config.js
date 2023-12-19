/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,vue}",
  ],
  theme: {
    extend: {
      colors: {
        main: '#004b75',
        yellow: '#ffc900'
      }
    },
  },
  plugins: [],
}


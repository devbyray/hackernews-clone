/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./.storybook/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'hn-orange': '#ff6600',
        'hn-bg': '#fafcff',
        'hn-text': '#54575a',
        'hn-dark': '#3f220f',
      },
      fontFamily: {
        'larsseit': ['Larsseit', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

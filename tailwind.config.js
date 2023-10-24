/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#1F2632',
        'secondary': '#323A49',
        'tertiary': '#48556A',
        'accent': '#52FFA8',
        'contrast': '#CEE3E9',
      },
      boxShadow: {
        'glow': '0 0 35px 0px #52FFA8',
      }
    }
  },
  plugins: [],
}


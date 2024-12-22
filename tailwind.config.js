/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },

      slideLeft: {
        "0%": { transform: "translateX(0)" },
        "100%": { transform: "translateX(-100%)" },
      },
    },
  },
  plugins: [],
}


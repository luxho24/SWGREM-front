/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    './pages/**/*.{html,js}',
    './components/**/*.{html,js}',
  ],
  theme: {
    extend: {
      colors: {

        primary:"#C6BDBB ",
        accent :"#F2D8D3 ",

      },
    },
  },
  plugins: [],
}


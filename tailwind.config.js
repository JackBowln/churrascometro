/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#DA5E5B",
        teste: "#f3f"
      },
      fontSize: {
        grande: "50px"
      }
    },
  },
  plugins: [],
}

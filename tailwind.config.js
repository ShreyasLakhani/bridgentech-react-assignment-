/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'lb': '-10px 10px 15px #B0C4DE',
      }
    },
  },
  plugins: [],
}
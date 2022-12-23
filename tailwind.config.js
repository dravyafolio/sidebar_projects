/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'primary': '#0F4C81',
        'secondary': '#F9F9F9',
        'tertiary': '#F2F2F2',
        "light-purple": "rgba(255,255,255,0.17)",
        "dark-purple":"#081A51",
      }
    },
    screens:{
      sm:'480px',
      md: '768px',
      lg: '924px',
      xl: '1480px',
    }
  },
  plugins: [],
}
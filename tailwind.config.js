/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        'primary': '#0F4C81',
        'secondary': '#F9F9F9',
        'tertiary': '#F2F2F2',
        "light-purple": "rgba(255,255,255,0.17)",
        "dark-purple":"#081A51",
      },
      boxShadow:{
        myShadow1:'4.1px -5px 0 0 rgb(17,24,29)',
        myShadow2:'-4.1px -5px 0 0 rgb(17,24,29)',

      },
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
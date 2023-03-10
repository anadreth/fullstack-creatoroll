/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",
],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#FFFFFF',
      'light': '#F6EFE9',
      'yogurt': '#e7d5c5',
      'red': '#B37A79',
      'dark-red': '#8C5958',
      'dark': '#403F3C',
      'orange': '#F69500',
    },
    extend: {
      fontFamily: {
        'seasons': ['Seasons', 'sans-serif'],
        'poppins': ['Poppins', 'sans-serif']
      },
      hueRotate: {
        '314': '314deg',
      },
      saturate: {
        25: '.25',
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
    function ({ addVariant }) {
      addVariant('child', '& > *');
      addVariant('child-hover', '& > *:hover');
      addVariant('child-checked', '& > *:checked');
  },
  ],
  variants: {
    scrollbar: ['rounded'],
}
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    colors: {
      'white': '#ffffff',
      'midnight-steel': '#1c3146',
      'eclipse-night': '#07080d',
      'primary-blue': '#ff49db',
    },
    fontFamily: {
      sans: ['Inter', 'sans-serif'],
      mono: ['Inconsolata', 'monospace'],
    },
    extend: {},
  },
  plugins: [],
}


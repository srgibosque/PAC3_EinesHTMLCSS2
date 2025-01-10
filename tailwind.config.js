/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    colors: {
      'white': '#ffffff',
      'midnight-steel': '#1c3146',
      'eclipse-night': '#07080d',
      'primary-blue': '#2e3cf4',
    },
    fontFamily: {
      sans: ['Inter', 'sans-serif'],
      mono: ['Inconsolata', 'monospace'],
    },
    extend: {
      boxShadow: {
        'focus': '0 0 0 0.25rem rgba(46, 60, 244, 0.4)',
      },
    },
  },
  plugins: [],
}


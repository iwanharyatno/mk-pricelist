/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      keyframes: {
        'slide-right-fade': {
          '0%': {
            transform: 'translateX(-2rem)',
            opacity: 0,
          },
          '100%': {
            transform: 'translateX(0)',
            opacity: 1,
          }
        }
      },
      animation: {
        'slide-right-fade': 'slide-right-fade 500ms ease-out',
      }
    },
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./**/*.{html,js}"],
    theme: {
      extend: {
        spacing: {
          '100': '30rem',
          '8xl': '96rem',
          '9xl': '128rem',
        }
      }
    }
  }
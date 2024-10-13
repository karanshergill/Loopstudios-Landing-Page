/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html"
  ],
  theme: {
    extend: {
      fontFamily: {
        'alata': ["'Alata', 'sans-serif'"],
        'josefin': ["'Josefin Sans Variable', 'sans-serif'"]
      },
      colors: {
        primary: {
          'white': 'hsl(0, 0%, 100%)',
          'black': 'hsl(0, 0%, 0%)',
          'dark-gray': 'hsl(0, 0%, 55%)',
          'very-dark-gray': 'hsl(0, 0%, 41%)'
        }
      },
      backgroundImage: {
        'hero_mobile': "url('/mobile/image-hero.jpg')"
      }
    },
  },
  plugins: [],
}


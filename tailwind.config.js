/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html"
  ],
  theme: {
    screens: {
      'xs': '375px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '1xl': '1440px',
      '2xl': '1536px',
    },
    extend: {
      fontFamily: {
        'alata': ["'Alata', 'sans-serif'"],
        'josefin': ["'Josefin Sans Variable', 'sans-serif'"]
      },
      colors: {
        'white': 'hsl(0, 0%, 100%)',
        'black': 'hsl(0, 0%, 0%)',
        'dark-gray': 'hsl(0, 0%, 55%)',
        'very-dark-gray': 'hsl(0, 0%, 41%)'
      },
      backgroundImage: {
        'hero_mobile': "url('/mobile/image-hero.jpg')",
        'hero-desktop': "url('/desktop/image-hero.jpg')"
      }
    },
  },
  plugins: [],
}


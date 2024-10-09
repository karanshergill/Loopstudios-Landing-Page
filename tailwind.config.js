/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html"
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero_mobile': "url('/mobile/image-hero.jpg')"
      }
    },
  },
  plugins: [],
}


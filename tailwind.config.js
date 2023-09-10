/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      fontFamily: {
        'Header': ['Space Grotesk','sans-serif']
      },
      colors: {
        'background': '#0E0E0E',
        'accent': {
          '50': '#787878',
          '100': '#696969',
          '200': '#595959',
          '300': '#4a4a4a',
          '400': '#3b3b3b',
          '500': '#2b2b2b',
          '600': '#1c1c1c',
          '700': '#0d0d0d',
          '800': '#0a0a0a',
          '900': '#0a0a0a',
          '950': '#0a0a0a',
        },
        'altwhite': {
          'primary': '#C5C3C6',
          'secondary': '#DCDCDD',

        }
      }
    }
  },
  plugins: []
};
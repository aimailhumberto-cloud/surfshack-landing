/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'ocean': {
          50: '#F0F6FA',
          100: '#D9E4EF',
          200: '#B3C9DF',
          300: '#809FC9',
          400: '#4A7CAA',
          500: '#2E6099',
          600: '#234D7C',
          700: '#1A3D5E',
          800: '#122C45',
          900: '#0A2540',
          950: '#051525',
        },
        'sand': {
          50: '#FEFDFB',
          100: '#F9F5F0',
          200: '#E8DCC8',
          300: '#D4C4A8',
          400: '#C0A888',
          500: '#A89070',
          600: '#8A7458',
          700: '#6B5940',
          800: '#4A3D2B',
          900: '#2A2318',
        },
      },
      fontFamily: {
        'serif': ['Playfair Display', 'Georgia', 'serif'],
        'sans': ['Inter', 'system-ui', 'sans-serif'],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '100': '25rem',
      },
    },
  },
  plugins: [],
}
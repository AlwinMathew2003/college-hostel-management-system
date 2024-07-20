/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: 
  {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      'blue': '#1fb6ff',
      'pink': '#ff49db',
      'orange': '#ff7849',
      'green': '#13ce66',
      'gray-dark': '#273444',
      'gray': '#8492a6',
      'indigo':{
        50:'#eef2ff',
        100:'#e0e7ff',
        200:'#c7d2fe',
        300:'#a5b4fc',
        400:'#818cf8',
        500:'#6366f1',
        600:'#4f46e5',
        700:'#4338ca',
        800:'#3730a3',
        900:'#312e81',
        950:'#1e1b4b'
      },
      'gray-light': '#d3dce6',
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    extend: {},
  },
  plugins: [],
}


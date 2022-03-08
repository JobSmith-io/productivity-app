const tailwindcss = require('tailwindcss');

module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      white: '#fff',
      black: '#000',
      'dark-blue': '#6aaae6',
      bc4: '#555',
      'main-text': '#4c4c4c',
      'header-blue': '#0f3181',
      bc3: '#6aaae6',
      green: '#13ce66',
      'gray-dark': '#273444',
      gray: '#8492a6',
      'gray-light': '#d3dce6',
      bc1: '#3da991',
      bc2: '#71dac4',
      salmon: '#fa8072',
      CsBlue: '#f0f5f9',
      toBlue: '#C3DBEE',
      'light-gray': '#F7F7F7',
      red: '#E02401',
      eggshell: '#F7F6F2',
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    // width: {
    //   'filter-btn': '1.0rem',
    // },
    extend: {
      spacing: {
        128: '32rem',
        144: '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
    },
  },
  plugins: [
    'postcss-preset-env',
    tailwindcss,
  ],
};

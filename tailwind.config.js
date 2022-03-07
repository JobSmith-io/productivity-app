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
      'main-text': '#4c4c4c',
      'header-blue': '#0f3181',
      green: '#13ce66',
      'gray-dark': '#273444',
      gray: '#8492a6',
      'gray-light': '#d3dce6',
      bc1: '#3da991',
      bc2: '#71dac4',
      salmon: '#fa8072',
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

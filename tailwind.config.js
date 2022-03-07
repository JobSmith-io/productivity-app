const tailwindcss = require('tailwindcss');

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    'postcss-preset-env',
    tailwindcss,
  ],
};

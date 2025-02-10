import colors from './src/styles/colors';

/** @type {import('tailwindcss').Config} */

const pxToRem = require('tailwindcss-preset-px-to-rem');

export default {
  presets: [pxToRem],
  content: ['./src/**/*.{html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Pretendard', 'sans-serif'],
      },
      colors: {
        ...colors,
      },
      fontSize: {
        '32-700': ['32px', { lineHeight: '48px', fontWeight: '700' }],
        '24-700': ['24px', { lineHeight: '32px', fontWeight: '700' }],
        '20-700': ['20px', { lineHeight: '30px', fontWeight: '700' }],
        '16-400': ['16px', { lineHeight: '24px', fontWeight: '400' }],

        '14-700': ['14px', { lineHeight: '20px', fontWeight: '700' }],
        '14-400': ['14px', { lineHeight: '20px', fontWeight: '400' }],
        '14-500': ['14px', { lineHeight: '20px', fontWeight: '500' }],
        '12-400': ['12px', { lineHeight: '16px', fontWeight: '400' }],
      },
    },
  },
  plugins: [],
};

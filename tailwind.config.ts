/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontSize: {
        '32-700': ['32px', { lineHeight: '48px', fontWeight: '700' }],
        '24-700': ['24px', { lineHeight: '32px', fontWeight: '700' }],
        '20-700': ['20px', { lineHeight: '30px', fontWeight: '700' }],
        '16-400': ['16px', { lineHeight: '24px', fontWeight: '400' }],

        '14-700': ['14px', { lineHeight: '20px', fontWeight: '700' }],
        '14-400': ['14px', { lineHeight: '20px', fontWeight: '400' }],
        '12-400': ['12px', { lineHeight: '16px', fontWeight: '400' }],
      },
    },
  },
  plugins: [],
};

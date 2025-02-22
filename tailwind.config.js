/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  safelist: [
    'animate-slide-in-left',
    'animate-slide-in-right',
    'animate-slide-in-up',
    'animate-slide-in-down',
    'animate-fade-in',
    'animate-scale-in',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};

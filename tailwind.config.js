/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        coal: '#101010',
        graphite: '#171717',
        paper: '#F1EEE8',
        jade: '#36B9A4',
        copper: '#B9854D',
        rust: '#C85F3C',
        rose: '#D9578D',
        violet: '#7861A9',
      },
      fontFamily: {
        sans: ['Microsoft YaHei', 'PingFang SC', 'Noto Sans SC', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 0 36px rgba(54,185,164,0.16)',
      },
    },
  },
  plugins: [],
};

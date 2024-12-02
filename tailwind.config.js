/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        black: '#121212',
        other: '#7c7c7c',
        main: '#1b1b1b',
        mainWopacity: '#1b1b1bbd',
        primary: '#956afa',
      },
    },
  },
  plugins: [],
};

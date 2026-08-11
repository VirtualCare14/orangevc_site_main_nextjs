/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brandOrange: '#FF6A00',
      },
      fontFamily: {
        sans: ['"Quattrocento Sans"', 'sans-serif'],
        head: ['"Lexend Exa"', 'sans-serif'],
        footer: ['"Handlee"', 'cursive'],
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
  plugins: [],
};

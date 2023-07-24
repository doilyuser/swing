/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'swing-black': '#000000',
        'swing-white': '#ffffff',
        'swing-grey': '#bdbdbd',
        'swing-red': '#ff6a6a',
        'swing-blue': '#5772a0',
      },
    },
  },
  plugins: [],
}

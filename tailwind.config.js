/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      width: {
         
      },
      colors: {
         'mainColor': '#FFFFFF',
         'redColor': '#D81F26',
         'nameColor': '#ECECEC',
         'darkColor': '#000000',
         'grayColor': '#949494'
      },
      maxWidth: {
         'container': '1185px',
      },
    },
    transitionDuration: {
      DEFAULT: '400ms'
    }
  },
  plugins: [],
}

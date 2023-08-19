/** @type {import('tailwindcss').Config} */
module.exports = {
   content: [
      "./src/pages/**/*.{js,ts,jsx,tsx,mdx,scss,css}",
      "./src/components/**/*.{js,ts,jsx,tsx,mdx,scss,css}",
      "./src/app/**/*.{js,ts,jsx,tsx,mdx,scss,css}",
   ],
   theme: {
      extend: {
         width: {},
         colors: {
            mainColor: "#FFFFFF",
            redColor: "#D81F26",
            nameColor: "#ECECEC",
            darkColor: "#000000",
            grayColor: "#949494",
            darkBtn: "#252525",
            pagination: "#787878",
            footerGrayColor: "#616161",
         },
         maxWidth: {
            container: "1440px",
         },
         fontFamily: {
            quick: ["var(--font-quicksand)"],
            poppins: ["var(--font-poppins)"],
         },
         /*          screens: {
            container: "1185px",
         }, */
      },
      transitionDuration: {
         DEFAULT: "400ms",
      },
   },
   plugins: [],
};

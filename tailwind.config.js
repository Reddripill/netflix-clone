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
            mainBg: "#141414",
            green: "#3DCD5E",
         },
         fontFamily: {
            quick: ["var(--font-quicksand)"],
            poppins: ["var(--font-poppins)"],
            openSans: ["var(--font-open-sans)"],
            roboto: ["var(--font-roboto)"],
         },
         gridTemplateColumns: {
            autoFill: "repeat(auto-fill, 275px)",
         },
         screens: {
            con: "1440px",
         },
         transitionProperty: {
            transform: "transform",
         },
         boxShadow: {
            card: "0px 8px 40px 0px rgba(0,0,0,0.5);",
         },
      },
      transitionDuration: {
         DEFAULT: "400ms",
      },
      backgroundImage: {
         overlay:
            "linear-gradient(180deg, rgba(20, 20, 20, 0) 0%, #141414 15%)",
         header:
            "linear-gradient(180deg, rgba(20, 20, 20, 0.50) 0%, rgba(20, 20, 20, 0.00) 100%)",
      },
   },
   plugins: [],
};

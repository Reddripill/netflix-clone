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
            graybtn: "rgba(255,255,255,0.5)",
         },
         fontFamily: {
            quick: ["var(--font-quicksand)"],
            poppins: ["var(--font-poppins)"],
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
      },
      transitionDuration: {
         DEFAULT: "400ms",
      },
      backgroundImage: {
         overlay:
            "linear-gradient(180deg, rgba(20, 20, 20, 0.00) 0%, #141414 100%)",
      },
   },
   plugins: [],
};

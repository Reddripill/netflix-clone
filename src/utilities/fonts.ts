import { Open_Sans, Roboto } from "next/font/google";

export const roboto = Roboto({
   subsets: ["latin"],
   display: "swap",
   weight: ["400", "700"],
   variable: "--font-roboto",
});

export const openSans = Open_Sans({
   subsets: ["latin"],
   display: "swap",
   weight: ["400", "700"],
   variable: "--font-open-sans",
});

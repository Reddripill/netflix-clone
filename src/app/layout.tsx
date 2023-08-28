import "./globals.scss";
import type { Metadata } from "next";
import styles from "./layout.module.scss";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import Main from "@/components/Main/Main";
import { openSans, roboto } from "@/utilities/fonts";

export const metadata: Metadata = {
   title: "Netflix Clone",
   description: "It's great clone of the Netflix",
   icons: {
      icon: "/favicon.ico",
   },
};

export default function RootLayout({
   children,
}: {
   children: React.ReactNode;
}) {
   return (
      <html lang="en" className={`${roboto.variable} ${openSans.variable}`}>
         <body>
            <div className={styles.wrapper}>
               <Header />
               <Main>{children}</Main>
               {/* <Footer/> */}
            </div>
         </body>
      </html>
   );
}

import React from "react";
import styles from "./Footer.module.scss";
import { FaGooglePlusG } from "react-icons/fa";
import { TiSocialTwitter } from "react-icons/ti";
import { TfiFacebook } from "react-icons/tfi";
import Image from "next/image";

const Footer = () => {
   return (
      <footer className={styles.footer}>
         <div className={`${styles["footer__container"]} container`}>
            <div className={styles["footer__socials"]}>
               <div className={styles["footer__social"]}>
                  <TfiFacebook />
               </div>
               <div className={styles["footer__social"]}>
                  <TiSocialTwitter />
               </div>
               <div className={styles["footer__social"]}>
                  <FaGooglePlusG />
               </div>
            </div>
            <div className={styles["footer__resources"]}>
               <div className={styles["footer__resource"]}>
                  <Image
                     src="/resources/android.png"
                     alt="Download For Android"
                     width={87}
                     height={28}
                  />
               </div>
               <div className={styles["footer__resource"]}>
                  <Image
                     src="/resources/apple.png"
                     alt="Download For Ios"
                     width={87}
                     height={28}
                  />
               </div>
            </div>
         </div>
      </footer>
   );
};

export default Footer;

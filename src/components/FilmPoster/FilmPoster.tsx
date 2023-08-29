"use client";
import React from "react";
import styles from "./FilmPoster.module.scss";
import Button from "../UI/Button/Button";
import Image from "next/image";
import { filmPoster } from "@/utilities/constants";
import { BiPlay, BiInfoCircle } from "react-icons/bi";

const FilmPoster = () => {
   return (
      <div className={styles["film-poster"]}>
         <div className={"container-block"}>
            <div className={styles["film-poster__wrapper"]}>
               <div className={styles["film-poster__content"]}>
                  <div className={styles["film-poster__contributor"]}>
                     <Image
                        src="/netflix.png"
                        alt="Netflix Logo"
                        width={18}
                        height={31}
                     />
                     <div className={styles["film-poster__text"]}>Show</div>
                  </div>
                  <img
                     src={filmPoster.label}
                     className={styles["film-poster__label"]}
                     alt="Label of the film"
                  />
               </div>
               <div className={styles["film-poster__actions"]}>
                  <Button theme="white">
                     <div className={styles["film-poster__action"]}>
                        <BiPlay />
                        <p>Play</p>
                     </div>
                  </Button>
                  <Button theme="gray">
                     <div className={styles["film-poster__action"]}>
                        <BiInfoCircle />
                        <p>More Info</p>
                     </div>
                  </Button>
               </div>
            </div>
            <div className={styles["film-poster-image"]}>
               <div className={styles["film-poster-image__wrapper"]}>
                  <Image
                     src={filmPoster.poster}
                     alt="Poster of the Film"
                     fill
                  />
               </div>
            </div>
         </div>
      </div>
   );
};

export default FilmPoster;

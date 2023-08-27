"use client";
import React from "react";
import styles from "./FilmPoster.module.scss";
import { IFilm } from "@/utilities/types";
import cn from "classnames";
import Button from "../UI/Button/Button";
import Image from "next/image";
import ImageFilter from "../UI/Overlay/Overlay";
import { filmPoster, testFilm } from "@/utilities/constants";
/* import { BsFillPlayFill } from "react-icons/bs";
import { BiPlusMedical } from "react-icons/bi";
import { TiTick } from "react-icons/ti"; */

const FilmPoster = () => {
   return (
      <div className={styles["film-poster"]}>
         <div className={"container"}>
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
                     src={testFilm.label}
                     className={styles["film-poster__label"]}
                     alt="Label of the film"
                  />
               </div>
               <div className={styles["film-poster__actions"]}>
                  <Button theme="white">Play</Button>
                  <Button theme="gray">More info</Button>
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

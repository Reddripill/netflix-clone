"use client";
import React, { useState } from "react";
import styles from "./FilmCard.module.scss";
import { IFilm } from "@/utilities/types";
import cn from "classnames";
import Image from "next/image";
import { MdPlayArrow } from "react-icons/md";
import { AiOutlinePlus } from "react-icons/ai";
import { BiLike } from "react-icons/bi";
import { IoIosArrowDown } from "react-icons/io";
import Link from "next/link";

const FilmCard = ({ film }: { film: IFilm }) => {
   const [isCollapsed, setIsCollapsed] = useState(false);
   const [isHovered, setIsHovered] = useState(false);
   return (
      <div
         className={cn(styles["film-card"])}
         onMouseOver={() => setIsHovered(true)}
         onMouseOut={() => setIsHovered(false)}
      >
         <Link
            href={`/${film.name}`}
            className={cn(styles["film-card__wrapper"])}
         >
            <div className={styles["film-card__image"]}>
               <Image src={film.image} alt="Film Card" fill />
            </div>
         </Link>
         <div
            className={cn(styles["film-card__more"], {
               [styles["film-card__more_active"]]: isHovered,
            })}
         >
            <div className={styles["film-card__actions"]}>
               <div className={styles["film-card__estimations"]}>
                  <div className={styles["film-card__action"]}>
                     <MdPlayArrow />
                  </div>
                  <div className={styles["film-card__action"]}>
                     <AiOutlinePlus />
                  </div>
                  <div className={styles["film-card__action"]}>
                     <BiLike />
                  </div>
                  <div
                     className={cn(
                        styles["film-card__action"],
                        styles["film-card__action_dislike"]
                     )}
                  >
                     <BiLike />
                  </div>
               </div>
               <div
                  className={cn(styles["film-card__action"], {
                     [styles["film-card__action_collapsed"]]: isCollapsed,
                  })}
                  onClick={() => setIsCollapsed(!isCollapsed)}
               >
                  <IoIosArrowDown />
               </div>
            </div>
            {!isCollapsed && (
               <>
                  <div className={styles["film-card__information"]}>
                     <div className={styles["film-card__match"]}>
                        {film.match} Match
                     </div>
                     <div className={styles["film-card__age-restriction"]}>
                        {film.ageRestriction}
                     </div>
                     <div className={styles["film-card__season"]}>
                        {film.season} Season
                     </div>
                     <div className={styles["film-card__quality"]}>hd</div>
                  </div>
                  <div className={styles["film-card__genres"]}>
                     <div className={styles["film-card__genre"]}>
                        {film.genre[0]}
                     </div>
                  </div>
               </>
            )}
         </div>
      </div>
   );
};

export default FilmCard;

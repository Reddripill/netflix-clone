"use client";
import {
   IFilmImage,
   suggestions,
} from "@/components/FilmsSuggestions/FilmsSuggestions";
import React from "react";
import styles from "./FilmsGrid.module.scss";
import Image from "next/image";

interface IProps {
   title: string;
   isMyList?: boolean;
}

const FilmsGrid = ({ title, isMyList }: IProps) => {
   let films: IFilmImage[] = [];
   if (!isMyList) {
      suggestions.forEach((item) => {
         films = films.concat(item.films);
      });
   } else {
      suggestions.forEach((item, index) => {
         films = films.concat(item.films[0]);
      });
   }
   return (
      <div className={styles["films-grid"]}>
         <div className={`${styles["films-grid__container"]} container`}>
            <div className={styles["films-grid__title"]}>{title}</div>
            <div className={styles["films-grid__content"]}>
               {films.length > 0 &&
                  films.map((film) => (
                     <div className={styles["films-grid__item"]} key={film.id}>
                        <Image src={film.image} alt="Film Image" fill />
                     </div>
                  ))}
            </div>
         </div>
      </div>
   );
};

export default FilmsGrid;

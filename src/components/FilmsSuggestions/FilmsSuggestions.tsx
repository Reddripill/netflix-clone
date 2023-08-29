"use client";
import React, { useState } from "react";
import styles from "./FilmsSuggestions.module.scss";
import Image from "next/image";
import FilmsSuggestionsSwiper from "./FilmsSuggestionsSwiper";
import { SwiperSlide } from "swiper/react";
import { suggestions } from "@/utilities/constants";
import { IoIosArrowForward } from "react-icons/io";
import cn from "classnames";
import FilmCard from "../UI/FilmCard/FilmCard";
import { ISuggestion } from "@/utilities/types";

export const FilmsSuggestionsRow = ({
   suggestion,
}: {
   suggestion: ISuggestion;
}) => {
   const [isHovered, setIsHovered] = useState<boolean>(false);
   return (
      <div
         className={cn(styles["films-suggestions__wrapper"], {
            [styles["films-suggestions__wrapper_hover"]]: isHovered,
         })}
         onMouseOver={() => setIsHovered(true)}
         onMouseOut={() => setIsHovered(false)}
      >
         <div className={styles["films-suggestions__title"]}>
            <div className={styles["films-suggestions__text"]}>
               {suggestion.title}
            </div>
            <div className={styles["films-suggestions__follow"]}>
               <div className={styles["films-suggestions__explore"]}>
                  Explore all
               </div>
               <div className={styles["films-suggestions__arrow"]}>
                  <IoIosArrowForward />
               </div>
            </div>
         </div>
         <FilmsSuggestionsSwiper type={suggestion.type}>
            {suggestion.films.map((item, index) => (
               <SwiperSlide key={item.id}>
                  {suggestion.type === "numbered" ? (
                     <div className={styles["films-suggestions-numbered"]}>
                        <div
                           className={
                              styles["films-suggestions-numbered__wrapper"]
                           }
                        >
                           <div
                              className={cn(
                                 styles["films-suggestions-numbered__integer"],
                                 styles[
                                    `films-suggestions-numbered__integer_${
                                       index + 1
                                    }`
                                 ]
                              )}
                           >
                              <img
                                 src={`/numbers/${index + 1}.svg`}
                                 alt="Place on top"
                              />
                           </div>
                           <div
                              className={
                                 styles["films-suggestions-numbered__image"]
                              }
                           >
                              <Image
                                 src={item.image}
                                 alt="Suggestioned Film"
                                 fill
                              />
                           </div>
                        </div>
                     </div>
                  ) : (
                     <FilmCard film={item} />
                  )}
               </SwiperSlide>
            ))}
         </FilmsSuggestionsSwiper>
      </div>
   );
};

export const FilmsSuggestions = () => {
   return (
      <div className={`${styles["films-suggestions"]} container-block`}>
         {suggestions.map((suggestion) => (
            <FilmsSuggestionsRow
               suggestion={suggestion}
               key={suggestion.title}
            />
         ))}
      </div>
   );
};

"use client";
import React, { useRef, useState } from "react";
import styles from "./FilmPosters.module.scss";
import { films } from "@/utilities/constants";
import { IFilm } from "@/utilities/types";
import cn from "classnames";
import Stars from "../UI/Stars/Stars";
import Button from "../UI/Button/Button";
import { BsFillPlayFill } from "react-icons/bs";
import { BiPlusMedical } from "react-icons/bi";
import Image from "next/image";
import ImageFilter from "../UI/ImageFilter/ImageFilter";
import SwiperSlider from "../UI/SwiperSlider/SwiperSlider";
import { SwiperSlide, useSwiperSlide } from "swiper/react";
import BackgroundVideo from "../UI/BackgroundVideo/BackgroundVideo";
import useIntersection from "@/utilities/hooks/useIntersection";

const FilmPoster = ({
   film,
   isVisible,
   isPlaying,
}: {
   film: IFilm;
   isVisible: boolean;
   isPlaying: boolean;
}) => {
   const createGenres = (genres: string[]): string => {
      const filteredArr = genres.map((genre) => {
         return genre[0].toUpperCase() + genre.slice(1);
      });
      return filteredArr.join("/");
   };
   const { isActive } = useSwiperSlide();
   return (
      <>
         <div className={styles["film-poster__item"]}>
            <div className={styles["film-poster__main"]}>
               <div className={styles["film-poster__name"]}>
                  {film.nameImage ? (
                     <img src={film.nameImage} alt="Name Image" />
                  ) : (
                     film.name
                  )}
               </div>
               <div className={styles["film-poster__content"]}>
                  <div className={styles["film-poster__overview"]}>
                     <div className={styles["film-poster__rating"]}>
                        <Stars amount={film.rating} />
                     </div>
                     <div className={styles["film-poster__about"]}>
                        <div className={`${styles["film-poster__year"]} texts`}>
                           {film.year}
                        </div>
                        <div
                           className={`${styles["film-poster__genres"]} texts`}
                        >
                           {createGenres(film.genre)}
                        </div>
                     </div>
                     <div
                        className={`${styles["film-poster__age-restriction"]} texts`}
                     >
                        {film.ageRestriction}
                     </div>
                  </div>
                  <div className={styles["film-poster__information"]}>
                     <div
                        className={`${styles["film-poster__fullname"]} texts`}
                     >
                        {film.name} <span>:</span> {film.subName}
                     </div>
                     <div
                        className={`${styles["film-poster__duration"]} texts`}
                     >{`Duration : ${film.duration}`}</div>
                  </div>
                  <div
                     className={`${styles["film-poster__description"]} texts`}
                  >
                     {film.description}
                  </div>
               </div>
            </div>
            <div className={styles["film-poster__actions"]}>
               <div className={styles["film-poster__action"]}>
                  <Button theme="red">
                     <div className={styles["film-poster__button"]}>
                        <BsFillPlayFill
                           style={{
                              fontSize: 20,
                           }}
                        />
                        Play
                     </div>
                  </Button>
               </div>
               <div className={styles["film-poster__action"]}>
                  <Button theme="dark">
                     <div className={styles["film-poster__button"]}>
                        <BiPlusMedical
                           style={{
                              fontSize: 16,
                           }}
                        />
                        My List
                     </div>
                  </Button>
               </div>
            </div>
         </div>
         <div className={styles["film-poster__image"]}>
            <div className={styles["film-poster__image__block"]}>
               <Image src={film.poster} fill alt="Film Poster" quality={100} />
            </div>
            <ImageFilter externalStyles={film.className} />
         </div>
         {film.trailer && isActive && isVisible && isPlaying && (
            <BackgroundVideo video={film.trailer} />
         )}
      </>
   );
};

const FilmPosters = () => {
   const swiperRef = useRef<HTMLDivElement>(null);
   const [isPlaying, setIsPlaying] = useState(false);
   const { isIntersection: isVisible } = useIntersection(swiperRef);
   return (
      <div className={styles["film-poster"]} ref={swiperRef}>
         <SwiperSlider isPlaying={isPlaying} setIsPlaying={setIsPlaying}>
            {films.map((film) => (
               <SwiperSlide key={film.id}>
                  <div
                     className={styles["film-poster__body"]}
                     // onMouseOut={() => swiper.autoplay.resume()}
                  >
                     <div
                        className={cn(
                           "container",
                           styles["film-poster__container"]
                        )}
                     >
                        <FilmPoster
                           film={film}
                           isVisible={isVisible}
                           isPlaying={isPlaying}
                        />
                     </div>
                  </div>
               </SwiperSlide>
            ))}
         </SwiperSlider>
      </div>
   );
};

export default FilmPosters;

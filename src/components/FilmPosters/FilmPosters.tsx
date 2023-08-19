"use client";
import React, { useRef, useState } from "react";
import styles from "./FilmPosters.module.scss";
import { films } from "@/utilities/constants";
import { IFilm } from "@/utilities/types";
import cn from "classnames";
import Stars from "../UI/Stars/Stars";
import Button from "../UI/Button/Button";
import Image from "next/image";
import ImageFilter from "../UI/ImageFilter/ImageFilter";
import SwiperSlider from "../UI/SwiperSlider/SwiperSlider";
import { SwiperSlide } from "swiper/react";
import { BsFillPlayFill } from "react-icons/bs";
import { BiPlusMedical } from "react-icons/bi";
import { TiTick } from "react-icons/ti";
// import { SwiperEvents, SwiperOptions } from "swiper/types";
/* import BackgroundVideo from "../UI/BackgroundVideo/BackgroundVideo";
import useIntersection from "@/utilities/hooks/useIntersection"; */
// import { Autoplay, Pagination } from "swiper/modules";

/* const FilmPostersSwiperOptions: SwiperOptions = {
   modules: [Pagination, Autoplay],
   pagination: {
      clickable: true,
      el: ".swiper-pagination",
      bulletActiveClass: "swiper-pagination-active-element",
      bulletClass: "swiper-pagination-element",
   },
   autoplay: {
      delay: 15000,
   },
   loop: true,
};

const FilmPostersSwiperEvents: SwiperEvents = {
   _swiper: (swiper) => console.log(swiper),
   slideChange: () => console.log("slide change"),
   init: playVideo
   onActiveIndexChange={playVideo}
}; */

const checkIsFilmAdded = (film: IFilm): boolean => {
   let storageData = localStorage.getItem("myList");
   let myList;
   if (storageData) {
      myList = JSON.parse(storageData) as IFilm[];
      return myList.find((item) => item.id === film.id) ? true : false;
   }
   return false;
};

const FilmPoster = ({ film }: { film: IFilm }) => {
   const [isAdded, setIsAdded] = useState(checkIsFilmAdded(film));
   const createGenres = (genres: string[]): string => {
      const filteredArr = genres.map((genre) => {
         return genre[0].toUpperCase() + genre.slice(1);
      });
      return filteredArr.join("/");
   };
   const myListManager = (film: IFilm) => {
      setIsAdded(!isAdded);
      let storageData = localStorage.getItem("myList");
      let myList;
      if (storageData) {
         myList = JSON.parse(storageData) as IFilm[];
         console.log(myList);
         if (!myList.find((item) => item.id === film.id)) {
            localStorage.setItem("myList", JSON.stringify([...myList, film]));
         } else {
            localStorage.setItem(
               "myList",
               JSON.stringify(myList.filter((item) => item.id !== film.id))
            );
         }
      } else {
         localStorage.setItem("myList", JSON.stringify([film]));
      }
   };
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
               <div
                  className={styles["film-poster__action"]}
                  onClick={() => myListManager(film)}
               >
                  <Button theme="dark">
                     <div className={styles["film-poster__button"]}>
                        {isAdded ? (
                           <TiTick
                              style={{
                                 fontSize: 24,
                              }}
                           />
                        ) : (
                           <BiPlusMedical
                              style={{
                                 fontSize: 16,
                              }}
                           />
                        )}
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
      </>
   );
};

const FilmPosters = () => {
   const swiperRef = useRef<HTMLDivElement>(null);
   return (
      <div className={styles["film-poster"]} ref={swiperRef}>
         <SwiperSlider>
            {films.map((film) => (
               <SwiperSlide key={film.id}>
                  <div className={styles["film-poster__body"]}>
                     <div
                        className={cn(
                           "container",
                           styles["film-poster__container"]
                        )}
                     >
                        <FilmPoster film={film} />
                     </div>
                  </div>
               </SwiperSlide>
            ))}
         </SwiperSlider>
      </div>
   );
};

export default FilmPosters;

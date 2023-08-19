"use client";
import React, { useState, useRef, useEffect } from "react";
import styles from "./BackgroundVideo.module.scss";
import { IoMdVolumeHigh, IoMdVolumeOff } from "react-icons/io";
import { IFilm } from "@/utilities/types";

const BackgroundVideo = ({ film }: { film: IFilm }) => {
   const [isMuted, setIsMuted] = useState<boolean>(true);
   const videoPlayer = useRef<HTMLVideoElement>(null);
   useEffect(() => {
      if (videoPlayer.current) {
         videoPlayer.current.play();
      }
   }, []);
   const soundClickHandler = () => {
      if (videoPlayer.current) {
         if (isMuted) {
            videoPlayer.current.muted = false;
         } else {
            videoPlayer.current.muted = true;
         }
         setIsMuted(!isMuted);
      }
   };
   return (
      <div className={styles["background-video"]}>
         <div className={styles["background-video__wrapper"]}>
            <div className={styles["background-video__player"]}>
               <video
                  src={film.trailer}
                  controls={false}
                  loop={true}
                  ref={videoPlayer}
                  muted
               />
            </div>
            <div className={styles["background-video__content"]}>
               {film.nameImage ? (
                  <div className={styles["background-video__image"]}>
                     <img src={film.nameImage} alt="Film Name" />
                  </div>
               ) : (
                  <>{film.name}</>
               )}
            </div>
            <div className={styles["background-video__actions"]}>
               <div
                  className={`${styles["background-video__action"]} ${styles["background-video__sound"]}`}
                  onClick={soundClickHandler}
               >
                  {isMuted ? <IoMdVolumeOff /> : <IoMdVolumeHigh />}
               </div>
            </div>
         </div>
      </div>
   );
};

export default BackgroundVideo;

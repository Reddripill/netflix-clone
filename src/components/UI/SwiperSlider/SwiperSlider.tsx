import React, { useRef } from "react";
import { Swiper } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/scss";
import "swiper/scss/pagination";
import PaginationElem from "./Pagination";
import { SetState } from "@/utilities/types";

const SwiperSlider = ({
   children,
   isPlaying,
   setIsPlaying,
}: {
   children: React.ReactNode;
   isPlaying: boolean;
   setIsPlaying: SetState<boolean>;
}) => {
   const paginationRef = useRef<HTMLDivElement>(null);
   const playVideo = () => {
      setIsPlaying(false);
      setTimeout(() => {
         setIsPlaying(true);
      }, 1500);
   };
   return (
      <>
         <Swiper
            modules={[Pagination, Autoplay]}
            pagination={{
               clickable: true,
               el: ".swiper-pagination",
               bulletActiveClass: "swiper-pagination-active-element",
               bulletClass: "swiper-pagination-element",
            }}
            autoplay={{
               delay: 15000,
            }}
            loop={true}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log("slide change")}
            onInit={playVideo}
            onActiveIndexChange={playVideo}
         >
            {children}
            {!isPlaying && <PaginationElem ref={paginationRef} />}
         </Swiper>
      </>
   );
};

export default SwiperSlider;

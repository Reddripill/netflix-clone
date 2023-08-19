import React from "react";
import { Swiper } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/scss";
import "swiper/scss/pagination";
import PaginationElem from "./Pagination";

const SwiperSlider = ({ children }: { children: React.ReactNode }) => {
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
            autoplay={false}
            loop={true}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log("slide change")}
         >
            {children}
            <PaginationElem />
         </Swiper>
      </>
   );
};

export default SwiperSlider;

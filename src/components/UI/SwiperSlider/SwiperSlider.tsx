import React, { useRef } from "react";
import { Swiper } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/scss";
import "swiper/scss/pagination";
import PaginationElem from "./Pagination";

const SwiperSlider = ({ children }: { children: React.ReactNode }) => {
  const paginationRef = useRef<HTMLDivElement>(null);
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
        /* autoplay={{
          delay: 5000,
        }} */
        loop={true}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
        className="overflow-visible"
      >
        {children}
        <PaginationElem ref={paginationRef} />
      </Swiper>
    </>
  );
};

export default SwiperSlider;

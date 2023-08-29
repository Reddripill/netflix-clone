import React from "react";
import { Navigation } from "swiper/modules";
import { Swiper } from "swiper/react";
import "swiper/scss";
import "swiper/scss/navigation";
import NavigationElem from "../UI/Navigation";

const FilmsSuggestionsSwiper = ({
   children,
   type,
}: {
   children: React.ReactNode;
   type?: string;
}) => {
   return (
      <>
         <Swiper
            modules={[Navigation]}
            autoplay={false}
            loop={false}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log("slide change")}
            initialSlide={0}
            slidesPerView={"auto"}
            spaceBetween={type === "numbered" ? 25 : 16}
            className={
               type === "numbered"
                  ? "films-suggestions-swiper-numbered"
                  : "films-suggestions-swiper"
            }
            navigation={{
               nextEl: ".films-suggestions-swiper__navigation_next",
               prevEl: ".films-suggestions-swiper__navigation_prev",
            }}
         >
            {children}
            <NavigationElem />
         </Swiper>
      </>
   );
};

export default FilmsSuggestionsSwiper;

import React from "react";
import { Navigation } from "swiper/modules";
import { Swiper } from "swiper/react";
import "swiper/scss";
import "swiper/scss/navigation";
import NavigationElem from "../UI/Navigation";

const FilmsSuggestionsSwiper = ({
   children,
}: {
   children: React.ReactNode;
}) => {
   return (
      <>
         <Swiper
            modules={[Navigation]}
            autoplay={false}
            loop={false}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log("slide change")}
            initialSlide={1}
            slidesPerView={"auto"}
            spaceBetween={4}
            className="films-suggestions-swiper"
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

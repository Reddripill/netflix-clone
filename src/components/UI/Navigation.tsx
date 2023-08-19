import React from "react";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { MdArrowBackIosNew } from "react-icons/md";

const NavigationElem = () => {
   return (
      <>
         <div className="films-suggestions-swiper__navigation films-suggestions-swiper__navigation_prev">
            <IoIosArrowBack />
         </div>
         <div className="films-suggestions-swiper__navigation films-suggestions-swiper__navigation_next">
            <IoIosArrowForward />
         </div>
      </>
   );
};

export default NavigationElem;

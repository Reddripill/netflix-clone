import { useState, useEffect } from "react";
import { RefType } from "../types";

export interface IIntersection {
   isIntersection: boolean;
}

const useIntersection = (targetRef: RefType<Element>): IIntersection => {
   const [isIntersection, setIsIntersection] = useState<boolean>(false);
   const callback = (entries: IntersectionObserverEntry[]) => {
      setIsIntersection(entries[0].isIntersecting);
   };
   useEffect(() => {
      const setup: IntersectionObserverInit = {
         root: null,
         rootMargin: "0px 0px 0px 0px",
         threshold: 0.5,
      };
      const intersectionObserve = new IntersectionObserver(callback, setup);
      if (targetRef.current) {
         intersectionObserve.observe(targetRef.current);
      }
      return () => {
         intersectionObserve.disconnect();
      };
   }, [targetRef]);
   return {
      isIntersection,
   };
};

export default useIntersection;

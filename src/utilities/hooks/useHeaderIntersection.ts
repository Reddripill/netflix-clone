import { useState, useEffect } from "react";
import { RefType } from "../types";

export const useHeaderIntersection = (
   header: RefType<HTMLElement>
): boolean => {
   const [isIntersected, setIsIntersected] = useState(true);
   useEffect(() => {
      if (header.current) {
         const observerOptions: IntersectionObserverInit = {
            root: null,
            rootMargin: "0px",
            threshold: 0,
         };
         const observer = new IntersectionObserver((entries) => {
            const entry = entries[0];
            setIsIntersected(entry.isIntersecting);
         }, observerOptions);
         observer.observe(header.current);
         return () => {
            observer.disconnect();
         };
      }
   }, [header]);
   return isIntersected;
};

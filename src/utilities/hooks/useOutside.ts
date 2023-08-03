'use client';

import {useState, useRef, useEffect} from 'react'
import { IUseOutsideHook } from '../types';

export const useOutside = (): IUseOutsideHook => {
   const [isActive, setIsActive] = useState<boolean>(false);
   const ref = useRef<HTMLDivElement>(null);
   useEffect(() => {
      const clickOutsideHandler = (e: MouseEvent) => {
         if (ref.current && !ref.current.contains(e.target as Node)) {
            setIsActive(false)
         }
      }
      document.addEventListener('click', clickOutsideHandler)
      return () => {
         document.removeEventListener('click', clickOutsideHandler)
      }
   }, [])
   return {
      isActive,
      setIsActive,
      ref
   }
}
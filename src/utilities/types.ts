import React from "react";

export type SetState<T> = React.Dispatch<React.SetStateAction<T>>;

export interface IUseOutsideHook {
   isActive: boolean;
   setIsActive: SetState<boolean>;
   ref: React.RefObject<HTMLDivElement>;
}

export interface IFilm {
   id: string;
   name: string;
   type: "serial" | "film";
   rating: number;
   year: number;
   ageRestriction: string;
   genre: string[];
   season?: number;
   subName: string;
   duration: string;
   description: string;
   poster: string;
   image: string;
   match: string;
   label?: string;
}

export type RefType<T> = React.RefObject<T>;

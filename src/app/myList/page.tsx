"use client";
import React, { useEffect, useState } from "react";
import { Metadata } from "next";
import FilmsGrid from "@/components/UI/FilmsGrid/FilmsGrid";
import { IFilm } from "@/utilities/types";
import { IFilmImage } from "@/components/FilmsSuggestions/FilmsSuggestions";

export const metadata: Metadata = {
   title: "My List",
};

const Page = () => {
   const [myList, setMyList] = useState<IFilmImage[]>();
   useEffect(() => {
      let storageData = localStorage.getItem("myList");
      if (storageData) {
         const myListData = (JSON.parse(storageData) as IFilm[]).map(
            (item) => ({
               id: item.id,
               image: item.poster,
            })
         );
         setMyList(myListData);
      }
   }, []);
   return (
      <>
         <FilmsGrid title="My List" isMyList={true} posterFilms={myList} />
      </>
   );
};

export default Page;

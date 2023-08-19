"use client";
import FilmsGrid from "@/components/UI/FilmsGrid/FilmsGrid";
import { IFilm } from "@/utilities/types";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
   title: "My List",
};

const page = () => {
   let storageData = localStorage.getItem("myList");
   let myFilms;
   if (storageData) {
      const myList = JSON.parse(storageData) as IFilm[];
      myFilms = myList.map((item) => ({
         id: item.id,
         image: item.poster,
      }));
   }
   return (
      <>
         <FilmsGrid title="My List" isMyList={true} posterFilms={myFilms} />
      </>
   );
};

export default page;

import { ISuggestion } from "@/components/FilmsSuggestions/FilmsSuggestions";
import { IFilm } from "./types";

export const testFilm: IFilm = {
   id: "test",
   name: "Test",
   type: "serial",
   rating: 4,
   year: 2010,
   ageRestriction: "+16",
   genre: ["horror"],
   season: 10,
   subName: "Lines we cross",
   duration: "50m",
   description:
      "We pick back up with the group in Oceanside continuing to train in case the Whisperers return. Tensions are high as our heroes struggle to hold onto their concept of civilization.",
   poster: "/images/posters/2.jpg",
   image: "/images/again/1.jpg",
   match: "89%",
   label: "/names/1.png",
};

export const suggestions: ISuggestion[] = [
   {
      title: "See again",
      films: [
         {
            id: "again1",
            image: "/images/again/1.jpg",
         },
         {
            id: "again2",
            image: "/images/again/2.jpg",
         },
         {
            id: "continue3",
            image: "/images/again/3.jpg",
         },
         {
            id: "again4",
            image: "/images/again/4.jpg",
         },
         {
            id: "again5",
            image: "/images/again/5.jpg",
         },
      ],
   },
   {
      title: "Top 10 in your country",
      type: "numbered",
      films: [
         {
            id: "top1",
            image: "/images/top/1.jpg",
         },
         {
            id: "top2",
            image: "/images/top/2.jpg",
         },
         {
            id: "top3",
            image: "/images/top/3.jpg",
         },
         {
            id: "top4",
            image: "/images/top/4.jpg",
         },
         {
            id: "top5",
            image: "/images/top/5.jpg",
         },
      ],
   },
   {
      title: "Trending Now",
      films: [
         {
            id: "trending1",
            image: "/images/trending/1.jpg",
         },
         {
            id: "trending2",
            image: "/images/trending/2.jpg",
         },
         {
            id: "trending3",
            image: "/images/trending/3.jpg",
         },
         {
            id: "trending4",
            image: "/images/trending/4.jpg",
         },
         {
            id: "trending5",
            image: "/images/trending/5.jpg",
         },
      ],
   },
   {
      title: "Sci-fi shows",
      films: [
         {
            id: "sciFi1",
            image: "/images/sciFi/1.jpg",
         },
         {
            id: "sciFi2",
            image: "/images/sciFi/2.jpg",
         },
         {
            id: "sciFi3",
            image: "/images/sciFi/3.jpg",
         },
         {
            id: "sciFi4",
            image: "/images/sciFi/4.jpg",
         },
         {
            id: "sciFi5",
            image: "/images/sciFi/5.jpg",
         },
      ],
   },
];

export const filmPoster: IFilm = {
   id: "currentPoster",
   name: "Maid",
   type: "serial",
   rating: 4,
   year: 2010,
   ageRestriction: "+16",
   genre: ["horror"],
   season: 1,
   subName: "Lines we cross",
   duration: "50m",
   description:
      "We pick back up with the group in Oceanside continuing to train in case the Whisperers return. Tensions are high as our heroes struggle to hold onto their concept of civilization.",
   poster: "/images/posters/1.jpg",
   image: "/images/posters/1.jpg",
   match: "89%",
};

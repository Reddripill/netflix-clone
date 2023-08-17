import React from "react";
import styles from "./FilmsSuggestions.module.scss";
import Image from "next/image";

interface ISuggestion {
   title: string;
   films: {
      id: string;
      image: string;
   }[];
}

const suggestions: ISuggestion[] = [
   {
      title: "Continue Watching",
      films: [
         {
            id: "continue1",
            image: "/images/continue/1.jpg",
         },
         {
            id: "continue2",
            image: "/images/continue/2.jpg",
         },
         {
            id: "continue3",
            image: "/images/continue/3.jpg",
         },
         {
            id: "continue4",
            image: "/images/continue/4.jpg",
         },
         {
            id: "continue5",
            image: "/images/continue/5.jpg",
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
      title: "Top Picks for you",
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
      title: "Popular on Netflix",
      films: [
         {
            id: "popular1",
            image: "/images/popular/1.jpg",
         },
         {
            id: "popular2",
            image: "/images/popular/2.jpg",
         },
         {
            id: "popular3",
            image: "/images/popular/3.jpg",
         },
         {
            id: "popular4",
            image: "/images/popular/4.jpg",
         },
         {
            id: "popular5",
            image: "/images/popular/5.jpg",
         },
      ],
   },
];

export const FilmsSuggestionsRow = ({
   suggestion,
}: {
   suggestion: ISuggestion;
}) => {
   return (
      <div className={styles["films-suggestions__item"]}>
         <div className={styles["films-suggestions__title"]}>
            {suggestion.title}
         </div>
         <ul className={styles["films-suggestions__list"]}>
            {suggestion.films.map((item) => (
               <li className={styles["films-suggestions__image"]} key={item.id}>
                  <Image
                     src={item.image}
                     alt="Suggestioned Film"
                     height={155}
                     width={275}
                  />
               </li>
            ))}
         </ul>
      </div>
   );
};

export const FilmsSuggestions = () => {
   return (
      <div className={`${styles["films-suggestions"]} container`}>
         {suggestions.map((suggestion) => (
            <FilmsSuggestionsRow
               key={suggestion.title}
               suggestion={suggestion}
            />
         ))}
      </div>
   );
};

import FilmPosters from "@/components/FilmPosters/FilmPosters";
import { FilmsSuggestions } from "@/components/FilmsSuggestions/FilmsSuggestions";
import { Metadata } from "next";

export const metadata: Metadata = {
   title: "Netflix Clone",
};

export default function Home() {
   return (
      <div>
         <FilmPosters />
         <FilmsSuggestions />
      </div>
   );
}

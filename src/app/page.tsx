import Image from "next/image";
import path from "path";
import fsPromises from "fs/promises";
import FilmPosters from "@/components/FilmPosters/FilmPosters";
import { FilmsSuggestions } from "@/components/FilmsSuggestions/FilmsSuggestions";

export default function Home() {
   return (
      <div>
         <FilmPosters />
         <FilmsSuggestions />
      </div>
   );
}

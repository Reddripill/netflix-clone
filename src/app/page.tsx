import FilmPosters from "@/components/FilmPoster/FilmPoster";
import { FilmsSuggestions } from "@/components/FilmsSuggestions/FilmsSuggestions";
import { Metadata } from "next";
import Overlay from "@/components/UI/Overlay/Overlay";

export const metadata: Metadata = {
   title: "Netflix Clone",
};

export default function Home() {
   return (
      <>
         <FilmPosters />
         <Overlay>
            <FilmsSuggestions />
         </Overlay>
      </>
   );
}

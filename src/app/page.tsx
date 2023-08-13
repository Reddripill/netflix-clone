import Image from "next/image";
import path from "path";
import fsPromises from "fs/promises";
import FilmPosters from "@/components/FilmPosters/FilmPosters";

export default function Home() {
  return (
    <div>
      <FilmPosters />
    </div>
  );
}

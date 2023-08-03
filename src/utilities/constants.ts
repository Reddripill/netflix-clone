import { IFilm } from "./types";

export const films: IFilm[] = [
   {
      id: "1",
      name: "The Walking Dead",
      nameImage: '/names/1.png',
      type: "serial",
      rating: 4,
      year: 2010,
      ageRestriction: "+16",
      genre: ["horror"],
      season: 10,
      subName: "Lines we cross",
      duration: "50m",
      description: "We pick back up with the group in Oceanside continuing to train in case the Whisperers return. Tensions are high as our heroes struggle to hold onto their concept of civilization.",
      poster: "/images/posters/2.jpg",
      height: 600,
   },
   {
      id: "2",
      name: "Spartens",
      type: "film",
      rating: 4,
      year: 2006,
      ageRestriction: "+16",
      genre: ["action", "war"],
      subName: "Prepare for Glory",
      duration: "2h 40m",
      description: "In the ancient battle of Thermopylae, King Leonidas and 300 Spartans fight against Xerxes and his massive Persian army. They face insurmountable odds when they are betrayed by a Spartan reject.",
      poster: "/images/posters/spartens.jpg",
      height: 600,
      className: {
         opacity: 75,
         gradient: 't',
         from: 'darkColor',
         to: '[rgb(106,82,46)]',
         shadow: '[0px_4px_4px_0px_rgba(0,0,0,0.25)]'
      }
   }
]
// 'bg-gradient-to-t from-darkColor to-[rgb(106,82,46)] opacity-75 z-[3] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]'
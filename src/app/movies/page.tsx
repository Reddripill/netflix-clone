import FilmsGrid from "@/components/UI/FilmsGrid/FilmsGrid";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
   title: "Movies",
};

const page = () => {
   return (
      <>
         <FilmsGrid title="Movies" />
      </>
   );
};

export default page;

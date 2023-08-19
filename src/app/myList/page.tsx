import FilmsGrid from "@/components/UI/FilmsGrid/FilmsGrid";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
   title: "My List",
};

const page = () => {
   return (
      <>
         <FilmsGrid title="My List" isMyList={true} />
      </>
   );
};

export default page;

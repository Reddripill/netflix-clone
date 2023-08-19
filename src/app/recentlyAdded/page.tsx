import FilmsGrid from "@/components/UI/FilmsGrid/FilmsGrid";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
   title: "Recently Added",
};

const page = () => {
   return (
      <>
         <FilmsGrid title="Recently Added" />
      </>
   );
};

export default page;

import FilmsGrid from "@/components/UI/FilmsGrid/FilmsGrid";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
   title: "TV Shows",
};

const page = () => {
   return (
      <>
         <FilmsGrid title="TV Shows" />
      </>
   );
};

export default page;

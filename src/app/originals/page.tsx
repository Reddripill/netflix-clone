import FilmsGrid from "@/components/UI/FilmsGrid/FilmsGrid";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
   title: "Netflix Originals",
};

const page = () => {
   return (
      <>
         <FilmsGrid title="Netflix Originals" />
      </>
   );
};

export default page;

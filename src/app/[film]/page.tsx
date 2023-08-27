import React from "react";

const Page = ({ params }: { params: { film: string } }) => {
   return <div>Film Name: {params.film}</div>;
};

export default Page;

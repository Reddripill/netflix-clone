import React from "react";

const Page = ({ params }: { params: { film: string } }) => {
   return (
      <div
         className="loading-wrapper"
         style={{
            position: "relative",
            zIndex: "10000",
            color: "#fff",
            marginTop: "150px",
         }}
      >
         Film Name: {params.film}
      </div>
   );
};

export default Page;

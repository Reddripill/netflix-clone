import React from "react";

export default function Loading() {
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
         loading...
      </div>
   );
}

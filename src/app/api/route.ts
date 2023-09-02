import { NextResponse } from "next/server";

export const GET = async () => {
   const res = await fetch("https://jsonplaceholder.typicode.com/todos");
   const data = await res.json();
   return NextResponse.json({ data });
};

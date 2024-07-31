"use client"
//import Order_Qr from "@/app/_components/orderqr";
import { useUser } from "@clerk/nextjs";
import { useEffect, useState } from "react";
export default function Page() {
  const [data, setdata] = useState(null);

  return (
    <div className="grid grid-cols-4 gap-2">
      {data ? (
        data?.map((item, idx) => (
         /* <Order_Qr item={item} />*/ <></>))) : (<div>Loading...</div>)}
    </div>
  )
}

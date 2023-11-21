"use client";
import InputSearch from "@/components/Items/InputSearch";
import Listing from "@/components/Items/Listing";
import Routing from "@/components/Items/Routing";
import Image from "next/image";
import styles from "./styleNews.module.scss";
import { useState } from "react";
import { useSearchParams } from "next/navigation";
export default function New() {
  const searchParams = useSearchParams();

  const search = searchParams.get("search");
  console.log(search, "search");

  const [routs, setRouts] = useState(["Tin tức", "Mazda"]);
  const [load, setLoad] = useState(false);
  const handleRount = (vl: string) => {
    if (routs[1]) {
      routs[1] = vl;
      setRouts(routs.filter((r, index) => index !== 2));
    } else {
      setRouts((pre) => [...pre, vl]);
    }
    setLoad(!load);
  };
  return (
    <div className=" pl-5 ">
      <div className="w-full my-3 mb-4">
        <Routing routs={routs} />
      </div>
      <div className="w-full flex mb-15 flex-wrap md:flex-nowrap">
        <div className="w-full md:w-[350px]  mb-5 md:border-r mr-2">
          <div className="w-full">
            <Listing onClick={handleRount} choice={routs[1]} default="news" />
          </div>
        </div>
        <h3 className="w-full md:hidden text-center border-b">Mazda news</h3>
      </div>
    </div>
  );
}

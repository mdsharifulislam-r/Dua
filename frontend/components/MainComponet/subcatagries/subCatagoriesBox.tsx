"use client";
import React, { useState } from "react";
import DuaContainer from "../duas/DuaContainer";
import { subcat } from "@/Types/type";

export default function SubCatagoriesBox({ subcat }: { subcat: subcat }) {
  const [state, setState] = useState(false);



  const scrollToTarget = () => {
    const targetElement = document.getElementById(`${subcat?.subcat_id}`);
    console.log(targetElement);

    const paraendtElement = document.getElementById(`dua-con`);
    const childTop = targetElement?.getBoundingClientRect().top || 0;
    const parentTop = paraendtElement?.getBoundingClientRect()?.top || 0;
    const scrollAmount = childTop - parentTop;
    if (targetElement && paraendtElement) {
      paraendtElement?.scrollBy({
        top: scrollAmount,
        behavior: "smooth",
      });
    }
  };

  
  return (
    <div>
      <div
        onClick={() => {
          setState(!state);
          scrollToTarget();
        }}
        className="w-full my-2 relative before:absolute before:-left-1.5 before:top-1.5 before:size-2 before:rounded-full before:bg-primary_color"
      >
        <h1 className="text-sm pl-3 cursor-pointer">
          {subcat?.subcat_name_en}
        </h1>
      </div>
      <div></div>
      {state ? <DuaContainer subcat_id={subcat?.subcat_id} /> : ""}
    </div>
  );
}

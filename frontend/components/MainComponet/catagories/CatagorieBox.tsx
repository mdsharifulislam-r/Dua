'use client'
import React, { useState } from "react";
import feverImage from "@/assets/images/fever.png";
import Image from "next/image";
import SubCatagories from "../subcatagries/SubCatagories";
import { cat } from "@/Types/type";
import { useRouter } from "next/navigation";
import Link from "next/link";



export default function CatagorieBox({cat}:{cat:cat}) {
  const router = useRouter()
  const [open,isOpen]=useState(false)
  return (
    <div className="overflow-hidden">
      <input type="checkbox" name="" hidden className="peer/input" id={cat?.cat_id.toString()} />
      <Link  href={`/?cat_id=${cat?.cat_id}`} onClick={()=>isOpen(!open)} className="flex place-items-start justify-between rounded-md p-4 cursor-pointer hover:bg-slate-100">
        <div  className="flex gap-3">
          <div className="image p-3 bg-slate-100 rounded-xl">
            <Image
              src={feverImage}
              alt="feverImage"
              width={100}
              className=" size-10 "
              height={100}
            />
          </div>
          <div className="text">
            <h1 className="tex-base font-semibold text-primary_color">
              {cat?.cat_name_en}
            </h1>
            <span className="text-xs text-slate-700">Sub catagories {cat?.no_of_subcat}</span>
          </div>
        </div>

        <div className="amount text-center">
          <h1 className="font-bold">{cat?.no_of_dua}</h1>
          <span className="text-slate-500">Duas</span>
        </div>
      </Link>
      <div className={`flex justify-end  transition-[height] duration-300 ${open?'h-full':'h-0'}`}>
      <SubCatagories cat_id={cat?.cat_id}/>
      </div>
      
    </div>
  );
}

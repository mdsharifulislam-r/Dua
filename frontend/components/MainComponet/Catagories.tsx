import React from "react";
import { IoIosSearch } from "react-icons/io";
import CatagorieContainer from "./catagories/CatagorieContainer";
export default function Catagories() {
  return (
    <div className="w-[30%] bg-white h-[90vh] rounded-xl shadow-lg overflow-hidden">
      <div>
        <div className="w-full h-14 bg-primary_color flex justify-center place-items-center">
          <span className="text-white">Catagories</span>
        </div>
        <div className="px-3 mt-2">
          <div className="flex place-items-center gap-2 px-2 border  rounded-md py-2 active:outline">
            <span className="text-xl text-slate-500 ">
              <IoIosSearch />
            </span>
            <input
              type="text"
              placeholder="Search by Catagories"
              className="focus:outline-none text-sm"
            />
          </div>
        </div>
      </div>
      <CatagorieContainer />
    </div>
  );
}

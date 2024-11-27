import React from "react";
import logo from "@/assets/images/logo.png";
import Image from "next/image";
import { AiOutlineHome } from "react-icons/ai";
import { PiWindowsLogoThin } from "react-icons/pi";
import { HiOutlineLightBulb } from "react-icons/hi2";
import { HiOutlineBookmark } from "react-icons/hi2";
import { RiMedicineBottleLine } from "react-icons/ri";
import { HiOutlineBookOpen } from "react-icons/hi2";
import { TbMessages } from "react-icons/tb";
import { BiSolidDonateHeart } from "react-icons/bi";
const menuIcons = [
  <AiOutlineHome />,
  <PiWindowsLogoThin />,
  <HiOutlineLightBulb />,
  <HiOutlineBookmark />,
  <RiMedicineBottleLine />,
  <TbMessages />,
  <HiOutlineBookOpen />,
];
export default function Sidebar() {
  const showLinks = menuIcons.map((item, index) => (
    <div
      key={index}
      className="p-2 hover:scale-110 transition-all duration-300 cursor-pointer rounded-full text-2xl text-slate-600 bg-gray-200"
    >
      <span>{item}</span>
    </div>
  ));
  return (
    <div className="w-[100%] h-[90vh] overflow-y-scroll scrollbar-thin bg-white rounded-3xl shadow-lg p-3">
      <div className="mb-16">
        <Image src={logo} alt="logo" width={100} height={100} />
      </div>
      <div className="flex flex-col gap-5 justify-center place-items-center">
        {showLinks}
      </div>
      <div className="w-full flex justify-center mt-16">
        <div className="size-14 text-2xl rounded-xl flex justify-center place-items-center bg-primary_color text-white">
          <BiSolidDonateHeart />
        </div>
      </div>
    </div>
  );
}

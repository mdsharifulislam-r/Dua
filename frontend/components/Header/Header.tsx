import React from 'react'
import avatar from "@/assets/images/avatar.webp"
import { IoIosSearch } from "react-icons/io";
import { IoIosSettings } from "react-icons/io";
import Image from 'next/image';
export default function Header() {
  return (
    <div className='flex justify-between place-items-center px-5 py-6'>
      <div className="logo w-1/2">
        <h1 className='text-2xl'>Duas Page</h1>
      </div>
      <div className='flex justify-between place-items-center w-1/2'>
        <div className="inputBox px-3 flex place-items-center relative">
            <input type="text" placeholder='Search By Duas Name' className='px-3 py-2.5 rounded-md focus:outline-none focus:border-primary_color border outline-[0.1px]' />
            <button className='absolute right-5 top-1.5 rounded-md text-xl text-slate-600 bg-gray-100 px-3 py-2'><IoIosSearch/></button>
        </div>
        <div className='flex place-items-center gap-8'>
        <div className="profile size-12 flex justify-center place-items-center rounded-full overflow-hidden bg-slate-800">
            <Image src={avatar} alt='profile pic' width={40} height={40} />
        </div>
        <div className="setting text-3xl text-primary_color">
            <IoIosSettings/>
        </div>
        </div>
       
      </div>
    </div>
  )
}

import Image from 'next/image'
import React from 'react'
import allahPic from '@/assets/images/allah.png'
import { BsCopy } from "react-icons/bs";
import { CiBookmark } from "react-icons/ci";
import { PiLightbulbFilamentLight } from "react-icons/pi";
import { IoShareSocialOutline } from "react-icons/io5";
import { PiWarningOctagon } from "react-icons/pi";
import AudioPlayer from './audioSection/AudioPlayer';
import { dua } from '@/Types/type';
const icons = [
  <BsCopy/>,
  <CiBookmark/>,
  <PiLightbulbFilamentLight/>,
  <IoShareSocialOutline/>,
  <PiWarningOctagon/>
]
export default function SubItem({dua}:{dua:dua}) {
  return (
    <div className='w-full p-5 bg-white' id={`dua${dua?.dua_id}`}>
      <div className="header flex place-items-center gap-3">
        <Image className='size-8' src={allahPic} alt='allah' width={50} height={50}/>
        <span className=' font-semibold text-primary_color'>{dua?.dua_id}. {dua?.dua_name_en}</span>
      </div>
      <div className='mt-6'>
        {dua?.top_en?<span>{dua?.top_en}</span>:""}

        {dua?.dua_arabic?<p className='text-2xl text-right font-thin leading-[2] my-7'>
          {dua?.dua_arabic}
        </p>:""}

        {dua?.translation_en?<p className='text-lg italic text-justify my-5'>
        <span className='font-medium '>Transliteration: </span>{dua?.translation_en}
        </p>:""}
        {dua?.translation_en?<p className='text-lg text-slate-700 text-justify'>
        <span className='font-medium '>Translation: </span> {dua?.translation_en}
        </p>:""}
        { dua?.bottom_en?<p className='text-lg my-5'>
          {dua?.bottom_en}
        </p>:""}
       <div>
        <h2 className='text-lg text-primary_color'>Reference:</h2>
        <h3>{dua?.refference_en}</h3>
       </div>

       <div className='flex justify-between py-8'>
        <AudioPlayer src={dua?.audio}/>
        <div className='flex gap-7 text-slate-700 text-2xl'>
          {
            icons.map((item,index)=>(
              <span key={index}>
                {item}
              </span>
            ))
          }
        </div>
       </div>
      </div>
    </div>
  )
}

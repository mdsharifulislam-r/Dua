
import { dua } from '@/Types/type';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import { PiArrowBendDownRightThin } from "react-icons/pi";
function DuaLink({dua}:{dua:dua}){
  const scrollToTarget = () => {
    const targetElement = document.getElementById(`dua${dua?.dua_id}`);
    console.log(targetElement);
    
    const paraendtElement = document.getElementById(`dua-con`);
    const childTop = targetElement?.getBoundingClientRect().top||0
    const parentTop = paraendtElement?.getBoundingClientRect()?.top||0
    const scrollAmount = childTop - parentTop;
    if (targetElement && paraendtElement) {
      paraendtElement?.scrollBy({
        top:scrollAmount,
        behavior:"smooth"
      })
    }
   
  };
  return (
    <div className='flex place-items-center'>
      <span className='text-2xl text-primary_color'>
        <PiArrowBendDownRightThin/>
      </span>
      <Link onClick={scrollToTarget} href={`?cat_id=${dua?.cat_id}&subcat_id=${dua?.subcat_id}&dua_id=${dua?.dua_id}`} className='text-xs'>
      {dua?.dua_name_en}
      </Link>
    </div>
  )
}

export default function DuaContainer({subcat_id}:{subcat_id:number}) {
  const [duas,setDuas]=useState<dua[]>([])
  useEffect(()=>{
    fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/duas/${subcat_id}`)
    .then(res=>res.json())
    .then(data=>setDuas(data))
  },[])
  console.log(duas);
  
  const dausData = duas?.map((item,idx)=>(
    <DuaLink dua={item} key={item?.dua_id+idx}/>
  ))
  return (
    <div className='flex justify-end'>
      <div className='w-[95%] py-2 flex flex-col gap-3'>
        {dausData}
      </div>
    </div>
  )
}

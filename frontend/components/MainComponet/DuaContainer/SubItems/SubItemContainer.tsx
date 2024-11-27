import React from 'react'
import SubItem from './SubItem'
import { dua, subcat } from '@/Types/type'

export default async function SubItemContainer({subcat}:{subcat:subcat}) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/duas/${subcat?.subcat_id}`)
  const duas:dua[] = await res?.json()
  const duaItems = duas?.map((item,idx)=>(
    <SubItem dua={item} key={idx}/>
  ))
  return (
    <div>
      <div className='w-full py-4 bg-white px-4 rounded-lg shadow-lg ' id={`${subcat?.subcat_id}`}>
        <h1 className='text-slate-600'><span className='text-primary_color'>Section: </span><span>{subcat?.subcat_name_en}</span></h1>
      </div>
      <div className='mt-4 flex flex-col gap-4'>
        {duaItems}
      </div>
    </div>
  )
}

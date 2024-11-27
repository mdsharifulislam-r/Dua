import React from 'react'
import SubItem from './SubItem'
import { dua, subcat } from '@/Types/type'
import { getDuas } from '@/lib/helper/getSubCat'

export default async function SubItemContainer({subcat}:{subcat:subcat}) {
  const duas = await getDuas(subcat?.subcat_id)
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

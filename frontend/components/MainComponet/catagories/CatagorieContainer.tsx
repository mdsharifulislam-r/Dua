import React from 'react'
import CatagorieBox from './CatagorieBox'
import { cat } from '@/Types/type'

export default async function CatagorieContainer() {
  const res = await fetch(`${process.env.BASE_URL}/cat`)
  const data:cat[] = await res.json()
  const cats = data?.map((item,index)=>(
    <CatagorieBox cat={item} key={item?.cat_id+index} />
  ))
  return (
    <div className='max-h-[80vh] overflow-y-scroll p-3 rounded-md'>
      {cats}      
    </div>
  )
}

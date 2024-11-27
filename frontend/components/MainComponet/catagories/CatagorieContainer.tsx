import React from 'react'
import CatagorieBox from './CatagorieBox'
import { cat } from '@/Types/type'
import { getCat } from '@/lib/helper/getSubCat'

export default async function CatagorieContainer() {
  const data = await getCat()
  const cats = data?.map((item,index)=>(
    <CatagorieBox cat={item} key={item?.cat_id+index} />
  ))
  return (
    <div className='max-h-[80vh] overflow-y-scroll p-3 rounded-md'>
      {cats}      
    </div>
  )
}

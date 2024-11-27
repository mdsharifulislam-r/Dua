import React from 'react'
import SubItemContainer from './SubItems/SubItemContainer'
import { subcat } from '@/Types/type'
import { Params } from '../MainContainer'
import { getSubCat } from '@/lib/helper/getSubCat'

export default async function DuasContainer({params}:{params:Params}) {
  const data = await getSubCat(params?.cat_id||1)
  const items = data?.map((item,index)=>(
<SubItemContainer subcat={item} key={index}/>
  ))
  return (
    <div className='w-[70%] h-[80vh] overflow-y-scroll scroll-smooth rounded-xl flex flex-col gap-5' id='dua-con'>
      {items}
    </div>
  )
}

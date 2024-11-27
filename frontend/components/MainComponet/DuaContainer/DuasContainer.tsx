import React from 'react'
import SubItemContainer from './SubItems/SubItemContainer'
import { subcat } from '@/Types/type'
import { Params } from '../MainContainer'

export default async function DuasContainer({params}:{params:Params}) {
 
  
  const res = await fetch(`${process.env.BASE_URL}/subcat/${params?.cat_id|| 1}`)
  const data:subcat[] = await res.json()
  const items = data?.map((item,index)=>(
<SubItemContainer subcat={item} key={index}/>
  ))
  return (
    <div className='w-[70%] h-[80vh] overflow-y-scroll scroll-smooth rounded-xl flex flex-col gap-5' id='dua-con'>
      {items}
    </div>
  )
}

import React from 'react'
import Catagories from './Catagories'
import DuasContainer from './DuaContainer/DuasContainer'
export interface Params{
  cat_id:number,
  subcat_id:number,
  dua_id:number
}
export default function MainContainer({params}:{params:Params}) {
 
  return (
    <div className='flex gap-4 pr-5'>
      <Catagories/>
      <DuasContainer params={ params}/>
    </div>
  )
}

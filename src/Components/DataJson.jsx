import React from 'react'
import mockdata from '../MOCK_data.json'
import { BsFillBarChartFill} from "react-icons/bs";

const DataJson = () => {
  return (
   <div className=''>{mockdata.map((record,id)=>{
    return(
        <div className='flex justify-around border-b-2' >
            <div className='py-6'>{record.name}</div>
            <div className='py-6'>{record.products}</div>
            <div className='py-6'>{record.views}</div>
            <div className='py-6'>{record.revenue}</div>
            <a  href={record.link} className='flex py-5 justify-center items-center hover:underline '>< BsFillBarChartFill className='text-orange-500 pr-1'/>{record.data}</a>
        </div>
    )

   })}</div>
  )
}

export default DataJson
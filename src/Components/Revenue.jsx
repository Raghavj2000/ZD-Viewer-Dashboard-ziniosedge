import React, { useMemo } from 'react'
import fakedata from '../MOCK_data.json'
import { useTable } from 'react-table'
import TableInfo from './TableInfo'
import DataJson from './DataJson'

const Revenue = () => {
    console.log(fakedata)
    
  return (
    <>
    
        <div className='mx-8 mt-5 bg-white mb-2  text-[#6B6B6B] rounded-xl shadow-md'>
            <div className='flex p-3  items-center justify-between '>
                <div className='flex'>
                <p className='text-2xl pr-4 text-[#2D2F53]'>Revenue</p>
                <ul className='flex justify-center items-end'>
                    <li className='text-xl'>Rs.1500 K</li>
                    <li className='text-xs ml-1 text-[#B6B6B6] '>Total</li>
                </ul>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg"  className='mr-2 cursor-pointer'  width="19" height="9.339" viewBox="0 0 19 9.339 ">
            <path id="Icon_awesome-long-arrow-alt-right" data-name="Icon awesome-long-arrow-alt-right" d="M13.314,13.231H.509A.509.509,0,0,0,0,13.74v2.375a.509.509,0,0,0,.509.509H13.314v1.953a1.018,1.018,0,0,0,1.738.72l3.65-3.65a1.018,1.018,0,0,0,0-1.439l-3.65-3.65a1.018,1.018,0,0,0-1.738.72Z" transform="translate(0 -10.258)" fill="#9a9898"/>
            </svg>
            </div>
            <TableInfo/>
            <DataJson/>
             

            
    
        </div>
        
        

    </>
   
  )
}

export default Revenue
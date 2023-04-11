import React from 'react'

const Views = () => {
  return (
    <div className='flex-col px-9  '>
        <div className='bg-white rounded-2xl flex relative pb-5 drop-shadow-md px-5'>
            <div className='pt-7 pl-5 pr-8 '>
            
                <p className='text-xl text-[#2D2F53] font-semibold'>50</p>
                <p className='text-[#9A9898] pt-5'>Daily Views</p>
                 
            </div>
            <span className='absolute bottom-2 right-3  hover:bg-slate-100 cursor-pointer rounded-full p-1 '><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 21 27">
                        <g id="Icon_feather-bar-chart-2"className='p' data-name="Icon feather-bar-chart-2" transform="translate(-7.5 -4.5)">
                            <path id="Path_26" data-name="Path 26" d="M27,30V15" fill="none" stroke="#ee4e14" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"/>
                            <path id="Path_27" data-name="Path 27" d="M18,30V6" fill="none" stroke="#ee4e14" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"/>
                            <path id="Path_28" data-name="Path 28" d="M9,30V21" fill="none" stroke="#ee4e14" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"/>
                        </g>
                        </svg>
                        
                </span>

        </div>
        <div className='bg-white rounded-2xl mt-10 flex drop-shadow-md relative pb-4  px-5'>
            <div className='pt-7 pl-5 pr-8 '>
            
                <p className='text-xl text-[#2D2F53] font-semibold'>50</p>
                <p className='text-[#9A9898] pt-5'>Total Views</p>
                 
            </div>
            <span className='absolute bottom-2 right-3 hover:bg-slate-100 cursor-pointer rounded-full p-1 '><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 21 27">
                        <g id="Icon_feather-bar-chart-2"className='p' data-name="Icon feather-bar-chart-2" transform="translate(-7.5 -4.5)">
                            <path id="Path_26" data-name="Path 26" d="M27,30V15" fill="none" stroke="#ee4e14" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"/>
                            <path id="Path_27" data-name="Path 27" d="M18,30V6" fill="none" stroke="#ee4e14" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"/>
                            <path id="Path_28" data-name="Path 28" d="M9,30V21" fill="none" stroke="#ee4e14" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"/>
                        </g>
                        </svg>
                        
                </span>

        </div>
        
    </div>
  )
}

export default Views
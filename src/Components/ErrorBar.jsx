import React from 'react'
import Zinios from '../Assests/Zinios.png'

const ErrorBar = () => {
  return (
    <div className='flex  items-center'>
        <div className='mx-8 justify-between bg-white flex rounded-lg items-center w-[86%]  '>
                <div className='flex p-1 items-center justify-center '>
                <svg id="Component_44_1" data-name="Component 44 - 1" className='ml-2' xmlns="http://www.w3.org/2000/svg" width="25" height="38" viewBox="0 0 44 38">
                 <g id="Polygon_1" data-name="Polygon 1" fill="#df3535">
                <path d="M 43.13277816772461 37.5 L 0.8672215938568115 37.5 L 22 0.9979282021522522 L 43.13277816772461 37.5 Z" stroke="none"/>
                <path d="M 22 1.995872497558594 L 1.734451293945312 37 L 42.26554870605469 37 L 22 1.995872497558594 M 22 0 L 44 38 L 0 38 L 22 0 Z" stroke="none" fill="#df3535"/>
                     </g>
                <path id="Icon_metro-cross" data-name="Icon metro-cross" d="M12.082,9.639h0L9.17,6.727l2.912-2.912h0a.3.3,0,0,0,0-.424L10.706,2.016a.3.3,0,0,0-.424,0h0L7.37,4.928,4.458,2.016h0a.3.3,0,0,0-.424,0L2.658,3.391a.3.3,0,0,0,0,.424h0L5.57,6.727,2.658,9.639h0a.3.3,0,0,0,0,.424l1.376,1.376a.3.3,0,0,0,.424,0h0L7.37,8.527l2.912,2.912h0a.3.3,0,0,0,.424,0l1.376-1.376a.3.3,0,0,0,0-.424Z" transform="translate(14.63 19.071)" fill="#fff"/>
                </svg>

            <p className='pl-5 text-xs font-semibold'>Tenant name</p>

            <p className='pl-5 text-xs font-light text-[#6B6B6B]'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum cumque assumenda, quidem magnam omnis, quae sequi ipsam</p>

            </div>
                <svg xmlns="http://www.w3.org/2000/svg" className='mr-2 cursor-pointer' width="19" height="9.339" viewBox="0 0 19 9.339">
                <path id="Icon_awesome-long-arrow-alt-right" data-name="Icon awesome-long-arrow-alt-right" d="M13.314,13.231H.509A.509.509,0,0,0,0,13.74v2.375a.509.509,0,0,0,.509.509H13.314v1.953a1.018,1.018,0,0,0,1.738.72l3.65-3.65a1.018,1.018,0,0,0,0-1.439l-3.65-3.65a1.018,1.018,0,0,0-1.738.72Z" transform="translate(0 -10.258)" fill="#9a9898"/>
                 </svg>

        
    </div>
    <img src={Zinios} className='w-1/12 '></img>

    </div>
  )
}

export default ErrorBar
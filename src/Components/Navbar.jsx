import React, { useState } from 'react'
import { BsFillBarChartFill} from "react-icons/bs";
import { AiFillSetting,AiFillStar,AiOutlineClose} from "react-icons/ai"
import {FaUserFriends} from "react-icons/fa"

 import {BiLogOut} from "react-icons/bi"



const Navbar = () => {
    const [color, setColor]=useState(true)


  return (
    <nav className='nav' >
    <div>
        <div className='flex pl-10 items-center  border-4 mt-4 border-[#F3F7FA] hover:border-l-black'>
        <BsFillBarChartFill className='text-[#9A9898]'/> 
        <a href='#' className='pl-4'> Dashboard</a>
        </div>
        <div className='flex pl-10 items-center border-4 mt-4 border-[#F3F7FA]  hover:border-l-black '>
        <AiFillSetting className='text-[#9A9898]'/> 
        <a href='#' className='pl-4'> Settings</a>
        </div>
        <div className='flex pl-10 items-center border-4 mt-4 border-[#F3F7FA]  hover:border-l-black '>
        <AiFillStar className='text-[#9A9898]'/> 
        <a href='#' className='pl-4'>ZD Assests</a>
        </div>
        <div className='flex pl-10 items-center border-4 mt-4 border-[#F3F7FA]  hover:border-l-black '>
        <FaUserFriends className='text-[#9A9898]'/> 
        <a href="#" className='pl-4'>Tenants</a>
        </div>
     </div>
     <div>
        <div className='flex pl-10 items-center border-4 mt-4 border-[#F3F7FA]  hover:border-l-black '>
        <svg xmlns="http://www.w3.org/2000/svg" className='w-4 h-4' viewBox="0 0 20 20">
        <path id="Icon_metro-cross" data-name="Icon metro-cross" d="M22.389,18h0l-6.067-6.067,6.067-6.067h0a.626.626,0,0,0,0-.884L19.522,2.111a.627.627,0,0,0-.884,0h0L12.571,8.178,6.5,2.111h0a.627.627,0,0,0-.884,0L2.753,4.977a.626.626,0,0,0,0,.884h0l6.067,6.067L2.753,18h0a.626.626,0,0,0,0,.884L5.62,21.746a.626.626,0,0,0,.884,0h0l6.067-6.067,6.067,6.067h0a.626.626,0,0,0,.884,0l2.866-2.866a.626.626,0,0,0,0-.884Z" transform="translate(-2.571 -1.928)" fill="#ee4e14"/>
        </svg>

        <a href='#' className='pl-4'>Error Logs</a>
        </div>
        <div className='flex pl-10 items-center border-4 mt-2 mb-4 border-[#F3F7FA]  hover:border-l-black '>
        <svg xmlns="http://www.w3.org/2000/svg" className='w-4 h-4' viewBox="0 0 21 18.375">
        <path id="Icon_open-account-logout" data-name="Icon open-account-logout" d="M7.875,0V2.625h10.5V15.75H7.875v2.625H21V0ZM5.25,5.25,0,9.188l5.25,3.938V10.5h10.5V7.875H5.25Z" fill="#ee4e14"/>
        </svg>

        <a href='#' className='pl-4'>logout</a>
        </div>
        
    </div>

      </nav>
  )
}

export default Navbar
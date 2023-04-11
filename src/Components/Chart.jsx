import React from 'react'
import { BsChevronCompactDown} from "react-icons/bs";
import {
    CartesianGrid,
    Legend,
    Line,
    LineChart,
    Tooltip,
    XAxis,
    YAxis,
  } from "recharts";

const data = [
    { name: "2017", react: 100},
    { name: "2018", react: 42 },
    { name: "2019", react: 51},
    { name: "2020", react: 60},
    { name: "2021", react: 51},
    { name: "2022", react: 95},
    { name: "2023", react: 82},
    { name: "2023", react: 77},
    { name: "2023", react: 65},
    { name: "2023", react: 68},
    { name: "2023", react: 54},
    { name: "2023", react: 12},
    { name: "2023", react: 8},
    

  ];

const Chart = () => {
  return (
    <div className=' ml-9  m-1 bg-white rounded-2xl drop-shadow-md'>
        <div className='flex  items-center '>
            <p className=' ml-4 mt-2 text-xl text-[#2D2F53] font-semibold'>Usage</p>
            <span><BsChevronCompactDown className='cursor-pointer mt-2 ml-4'/></span>
            </div>
            <div className=''>
            <LineChart width={400} height={200} data={data} className='mt-6 absolute right-3 '>
            <Line type="monotone" dataKey="react" stroke="#000000" strokeWidth={2} />
            <CartesianGrid stroke="#ccc" />
            <XAxis />
            <YAxis />
            </LineChart>
            </div>
    </div>
  )
}

export default Chart
import React from 'react'
import ErrorBar from '../Components/ErrorBar'
import Revenue from '../Components/Revenue'
import Usage from './Usage'


const HomePage = () => {
  return (
    <div className='w-full bg-[#F3F7FA] '>
        <Revenue/>
        <Usage/>
        <ErrorBar/>
        

    </div>

  )
}

export default HomePage
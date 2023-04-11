import React from 'react'
import Assests from '../Components/Assests'
import Views from '../Components/Views'
import MostViewed from '../Components/MostViewed'
import Chart from '../Components/Chart'

const Usage = () => {
  return (
    <div className='flex justify-around  mt-6 mx-8 w-auto mb-6 rounded-lg '>
        <Assests/>
        <Views/>
        <MostViewed/>
        <Chart/>
        
        
        
    </div>
  )
}

export default Usage
import React from 'react'
import SideNavBar from './SideNavBar'
import HomePage from './HomePage'


const MainPage = () => {
  return (
    <div className='flex flex-row'>
        <SideNavBar/>
        
        <HomePage/>
            
    </div>
  )
}

export default MainPage
import Select from 'react-select'

import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
} from '@chakra-ui/react'
import React from 'react'
import { BsChevronCompactDown} from "react-icons/bs";

const MostViewed = () => {

  const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
  ]
  return (
  
    <div className='bg-white rounded-xl px-10 pt-4 pr-10 drop-shadow-md '>
      <p className='text-xl font-medium text-[#2D2F53]'>Most viewed<br/>Product</p>
      <div className='flex pt-7 justify-center items-center'>
      <Select className='border-none' options={options} styles={{
    control: (baseStyles, state) => ({
      ...baseStyles,
      borderColor: state.isFocused ? 'grey' : 'red',
    }),
  }}/>
       
       
      </div>

      <p className='text-[#9A9898] pt-16'>TVS MOTORS</p>
      <p className='text-[#9A9898]'>-HELMET</p>
      

  
    </div>
  )
}

export default MostViewed
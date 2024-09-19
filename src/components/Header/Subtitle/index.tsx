import { HeaderType } from '@/Utils/Types'
import React from 'react'

const SubTitle = ({text}:HeaderType) => {
  return (
    <h3 className='text-1xl text-pink-400 pt-4 font-light'>{text}</h3>
  )
}

export default SubTitle
import React from 'react'
import Img1 from '../assets/images/Img1.png'
import Picture from './Picture'

const small = () => {
  return (
    <Picture>
        <img src={Img1} alt="" srcset="" className='w-[600px] rounded-b-[180px]' />
    </Picture>
  )
}

export default small
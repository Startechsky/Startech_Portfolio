import React from 'react'
import Img1 from '../assets/images/Img1.png'
import Picture from './Picture.jsx'

const Hero = () => {
  return (
    <div className='Intro sm:flex justify-between'>
        <div className='txt'>
            <div className="new text-blue-950 sm:text-8xl text-6xl text-center sm:text-start">
                Hey, I'm a <br/> <span className='text-blue-400 font-sans'>Frontend</span> Web <br />Developer
            </div>
            <div className='sm:text-2xl font-sans text-gray-600 sm:mt-10 mt-5 text-lg'>
                Nice meeting you, i am a frontend developer from Nigeria, Ibadan <br /> I help build and develop amazing aestetics into high quality products.
            </div>

            <div className="email mt-5 flex">
                <input type="email" name="" id="" placeholder='Input your mail' className='px-2 py-5 bg-blue-400 rounded-xl '/>
                <button type="button" className='bg-blue-950 p-5 rounded-3xl ml-2 text-white cursor-pointer hover:bg-blue-400 hover:text-blue-950 transition duration-500 shadow-black shadow-xl'>Send</button>
            </div>

        </div>

        <Picture>
            <img src={Img1} alt="" srcset="" className='w-[600px] rounded-b-[180px] hidden sm:flex' />
        </Picture>
    </div>
  )
}

export default Hero
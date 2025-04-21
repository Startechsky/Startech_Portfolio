import React from 'react'
import Collaboration from '../assets/images/Collaboration.avif'
import OIP from '../assets/images/OIP.jpg'
import Cover from './cover.jsx'
import Debugging from '../assets/images/Debugging.jpg'


const Services = () => {

  return (
    <div>
       
        <div className="head text-center text-2xl text-blue-950 text-shadow-black text-shadow-2xs mb-5 font-sans font-bold">
                My Services
        </div>
        <div className="card bg-white shadow-2xl shadow-black px-5 py-5 sm:flex gap-x-5 rounded-3xl ">
        
            <Cover>
                <div className="name text-center mb-2">
                    Project Collaborations
                </div>
                <img src={Collaboration} alt="" srcset="" className='mb-5 rounded-3xl'/>
                <hr className='text-blue-950 mb-2'/>
                <div className="servicetxt text-gray-600 font-serif">
                    I have great expertise in developing and grooming ideas into reality, I have worked on projects that are significantly thriving on and offline.
                </div>
            </Cover>
        
            <Cover>
                <div className="name text-center mb-2">
                    Web Development
                </div>
                <img src={OIP} alt="" srcset="" className='mb-5 rounded-3xl w-[900px]'/>
                <hr className='text-blue-950 mb-2'/>
                <div className="servicetxt text-gray-600 font-serif">
                    I have great expertise in developing and grooming ideas into reality, I have worked on projects that are significantly thriving on and offline.
                </div>
            </Cover>
        
            <Cover>
                <div className="name text-center mb-2">
                    Debugging
                </div>
                <img src={Debugging} alt="" srcset="" className='mb-5 rounded-3xl w-[400px]'/>
                <hr className='text-blue-950 mb-2'/>
                <div className="servicetxt text-gray-600 font-serif">
                    I have great expertise in developing and grooming ideas into reality, I have worked on projects that are significantly thriving on and offline.
                </div>
            </Cover>
        </div>
        
    </div>
  )
}

export default Services
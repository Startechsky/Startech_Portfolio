import React from 'react'
import techrise1 from '../assets/images/techrise1.jpg'
import Techlogo from '../assets/images/Techlogo.jpg'
import techrise2 from '../assets/images/techrise2.png'

const Projectlist = () => {
  return (
    <div className='sm:flex sm:justify-between gap-x-10'>
        <div className="card bg-white shadow-2xl shadow-black px-5 py-5 rounded-2xl mb-5 sm:mb-0 md:w-[700px]">
            <div className="men flex justify-center mb-2">
                <img src={Techlogo} alt="" srcset="" />
            </div>
            <div className="imgtext">
                <div className="techimg flex sm:flex-none justify-center sm:justify-none mb-2">
                    <img src={techrise1} alt="" srcset=""  className='h-40 w-72  rounded-2xl'/>
                </div>
                <div className="text font-sans sm:font-semibold text-sm mt-3 sm:text-lg sm:mt-0 overflow-scroll h-24 ">
                    TechRise is a Mentorship program which commenced on the <span className="date text-blue-950">1st of March, 2025. </span>Established solely for the purpose of bringing young talents to a level of expertise required by the real world. <br />
                    During the period of the program, we had hands on experience on the use of different toolkits and frontend frame works like react used in building this portfolio.
                </div>
            </div>
            <div className="click mt-5 font-sans text-blue-950">Click the button below to view
            </div>
            <div className="button mt-5 text-center">
                <button type="button" className='font-sans px-5 py-2 rounded-2xl bg-blue-950 text-white font-semibold ease-in-out transition duration-500 hover:bg-white hover:text-black cursor-pointer'>Click Me</button>
            </div>
        </div>

        <div className="card  bg-white shadow-2xl shadow-black px-5 py-5 rounded-2xl mb-5 sm:mb-0 md:w-[700px]">
            <div className="men flex justify-center mb-2">
                <img src={Techlogo} alt="" srcset="" />
            </div>
            <div className="imgtext ">
                <div className="techimg flex justify-center mb-2">
                    <img src={techrise2} alt="" srcset=""  className='h-40 w-72  rounded-2xl'/>
                </div>
                <div className="text font-sans sm:font-semibold text-sm mt-3 sm:text-lg sm:mt-0 overflow-scroll h-24">
                    TechRise is a Mentorship program which commenced on the <span className="date text-blue-950">1st of March, 2025. </span>Established solely for the purpose of bringing young talents to a level of expertise required by the real world. <br />
                    During the period of the program, we had hands on experience on the use of different toolkits and frontend frame works like react used in building this portfolio.
                </div>
            </div>
            <div className="click mt-5 font-sans text-blue-950">Click the button below to view
            </div>
            <div className="button mt-5 text-center">
                <button type="button" className='font-sans px-5 py-2 rounded-2xl bg-blue-950 text-white font-semibold ease-in-out transition duration-500 hover:bg-white hover:text-black cursor-pointer'>Click Me</button>
            </div>
        </div>
    </div>
  )
}

export default Projectlist
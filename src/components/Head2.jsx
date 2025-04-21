import { FaLinkedin, FaTwitter, FaWhatsapp } from 'react-icons/fa6';
import React, {useState} from 'react'

const Head2 = () => {
    const [isVisible, setIsVisible] = useState(false);

  return (
    <>
      <div className="logo text-blue-400 text-2xl sm:hidden">
        Startech
      </div>

    <div className='Navbar flex-col justify-start items-start flex-start sm:hidden gap-y-10 z-[999] shadow-xl shadow-black rounded-xl absolute top-7 right-2 p-2 mr-10 bg-blue-950 text-white'>

        <div className="close hover:cursor-pointer hover:text-blue "  onClick={() => setIsVisible(!isVisible)}> 
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M4 10.5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5s1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5m0-6c-.83 0-1.5.67-1.5 1.5S3.17 7.5 4 7.5S5.5 6.83 5.5 6S4.83 4.5 4 4.5m0 12c-.83 0-1.5.68-1.5 1.5s.68 1.5 1.5 1.5s1.5-.68 1.5-1.5s-.67-1.5-1.5-1.5M7 19h14v-2H7zm0-6h14v-2H7zm0-8v2h14V5z"/></svg>
        </div>

      <div className={`${isVisible ? 'block': "hidden"} p-5 relative`}>
      <div className="access">
        <ul className='flex-col font-sans font-medium pt-10'>
          <li className='about cursor-pointer hover:text-blue-400 transition duration-500 ease-in-out mb-3'>About</li>
          <li className='Projects cursor-pointer hover:text-blue-400 transition duration-500 ease-in-out mb-3'>Projects</li>
          <li className='services cursor-pointer hover:text-blue-400 transition duration-500 ease-in-out mb-3'>Services</li>
          <li className='contact cursor-pointer hover:text-blue-400 transition duration-500 ease-in-out mb-3'>Contact</li>
        </ul>
      </div>
      
      <div className="socials flex mt-10 justify-center gap-x-10 ">
        <FaLinkedin className='cursor-pointer'/>
        <FaTwitter className='cursor-pointer'/>
        <FaWhatsapp className='cursor-pointer'/>
      </div>
      </div>

    </div>
    </>
  )
}

export default Head2
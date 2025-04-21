import React from 'react'
import { FaLinkedin, FaTwitter, FaWhatsapp } from 'react-icons/fa6';

const Header = () => {
  return (
    <div className='Navbar sm:flex text-center justify-between hidden'>
      
      <div className="logo text-blue-400 text-2xl">
        Startech
      </div>

      <div className="access">
        <ul className='flex gap-x-10 text-blue-950 font-sans font-medium '>
          <li className='about cursor-pointer hover:text-blue-400 transition duration-500 ease-in-out'><a href="./Hero.jsx">About</a></li>
          <li className='Projects cursor-pointer hover:text-blue-400 transition duration-500 ease-in-out'><a href="./Projectlist.jsx">Projects</a></li>
          <li className='services cursor-pointer hover:text-blue-400 transition duration-500 ease-in-out'><a href="./Services.jsx">Services</a></li>
          <li className='contact cursor-pointer hover:text-blue-400 transition duration-500 ease-in-out'><a href="./Form.jsx">Contact</a></li>
        </ul>
      </div>
      
      <div className="socials flex items-center gap-x-10 text-blue-950">
        <FaLinkedin className='cursor-pointer'/>
        <FaTwitter className='cursor-pointer'/>
        <FaWhatsapp className='cursor-pointer'/>
      </div>

    </div>

  )
}

export default Header
import React from 'react'

const Cover = ({children}) => {
  return( 
    <div className='sm:w-xl shadow-black shadow px-5 py-5 rounded-3xl sm:mb-0 mb-10'>
        {children}
    </div>
  )
}

export default Cover
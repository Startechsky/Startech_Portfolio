import React from 'react'

const Projects = ({Title, subTitle}) => {
  return (
    <div className='text-center'>
        <div className="Pro text-5xl font-sans font-bold text-blue-950 ">
            {Title}
        </div>
        <div className="sub mt-5 text-gray-600 font-sans font-semibold">
            {subTitle}
        </div>
    </div>
  )
}

export default Projects
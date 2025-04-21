import React from 'react'


const Picture = ({children}) => {
  return (
    <div className="pics rounded-bl-[180px] rounded-br-[180px] rounded-tl-[200px] bg-blue-400 h-fit hover:bg-white cursor-zoom-in">
        {children}
    </div>
  )
}

export default Picture
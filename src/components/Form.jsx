import React from 'react'

const Form = ({Title}) => {
  return (
    <div>
        <div className="reach">
            <div className='flex justify-center font-bold text-3xl mb-10'>
                {Title}
            </div>
            <div>
                <fieldset className='text-xl font-extrabold border-2 border-blue-950 p-5 rounded-2xl'>
                    <label htmlFor="name">Name</label> <br /><br />
                    <input type="text" name='name' className='p-5 text-md border-blue-400 border-2 rounded-2xl mb-5 w-full font-light' placeholder='Input your name'/><br />
                    <label htmlFor="mail">E-mail</label><br /><br />
                    <input type="email" name="mail" id="" className='p-5 text-md border-blue-400 border-2 rounded-2xl mb-5 w-full font-light' placeholder='Input your email address'/><br />
                    <label htmlFor="note">Note</label><br /><br />
                    <input type="text" name='note' className='p-5 text-md border-blue-400 border-2 rounded-2xl mb-5 w-full h-48 font-light' placeholder='Input your message'/>
                </fieldset>
                <div className="but flex justify-center mt-10 text-xl text-white">
                    <button type="button" className='px-10 py-5 bg-blue-950 rounded-4xl cursor-pointer transition duration-500 hover:bg-blue-400 hover:text-blue-950 hover:font-bold'>
                        Send
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Form
import React from 'react'
import Adventure from '/Adventure.png'
import {MdOutlinePlayCircle} from 'react-icons/Md'

const Home5 = () => {
  return (
    <div className='md:mt-20 mt-16'>
        <div className='relative'>
            <div>
                <img src={Adventure} alt="" />
            </div>
            <div className='flex justify-center'>
            <div className='absolute  xlg:top-32 mid:top-16 md:top-28 top-10 text-white'>
                <div className='xlg:text-5xl mid:text-2xl md:text-3xl lg:text-4xl text-xl font-bold'><h1>Your adventure starts here.</h1></div>
                <div className='xlg:text-7xl mid:text-3xl md:text-4xl lg:text-6xl text-2xl lg:my-10 my-3  flex justify-center'><MdOutlinePlayCircle/></div>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Home5
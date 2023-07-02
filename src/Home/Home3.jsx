import React from 'react'
import Stars from '/Stars.png'
import imageA from '/imageA.png'
import imageB from '/imageB.png'
import image1A from '/image1A.png'
import image1B from '/image1B.png'
import image1C from '/image1C.png'

import {AiOutlineLeft,AiOutlineRight} from 'react-icons/Ai'

const Home3 = () => {
  return (
    <div className='mt-20 lg:mx-20 md:mx-10 mx-2'>


        <div className='md:flex items-center'>

            <div className='md:w-1/2'>
                <h1 className='text-[#154685] font-semibold my-2'>Everest Basecamp Trek</h1>
                <div className='my-5'><img src={Stars} alt="" /></div>
                <div className='text-2xl lg:text-3xl font-semibold text-gray-900 my-5 lg:mx-3 mr-5 '>Nepal is astonising and Everest is just heaven..Trek with Oldlink tour for best experience.</div>
                <div className='flex justify-between mx-2'>
                    <div className='text-lg text-gray-800'>
                        <div>Katherine Moss</div>
                        <div className='text-gray-500 font-thin text-sm'>UNITED STATES</div>
                    </div>
                    <div className='flex justify-between pr-4 my-auto mr-7'>
                        <div><button className='bg-gray-100 rounded-full p-3 mx-2 shadow-md shadow-gray-300 mid:text-xl text-lg'><AiOutlineLeft/></button></div>
                        <div><button className='bg-gray-100 rounded-full p-3 mx-2 shadow-md shadow-gray-300 mid:text-xl text-lg'><AiOutlineRight/></button></div>
                    </div>
                </div>
            </div>

            <div className='md:w-1/2'>

                <div className='flex my-2'>
                    <div className='rounded-lg px-2'><img src={imageA}  className="rounded-lg" alt="" /></div>
                    <div className='rounded-lg px-2'><img src={imageB}  className="rounded-lg" alt="" /></div>
                </div>

                <div className='flex my-2'>
                    <div className='rounded-lg px-2'><img src={image1A} className="rounded-lg"  alt="" /></div>
                    <div className='rounded-lg px-2'><img src={image1B} className="rounded-lg"  alt="" /></div>
                    <div className='rounded-lg px-2'><img src={image1C} className="rounded-lg"  alt="" /></div>
                </div>

            </div>

        </div>


    </div>
  )
}

export default Home3
import React from 'react'
import {AiOutlineArrowRight} from 'react-icons/Ai'
import image1 from '/image1.png'
import image2 from '/image2.png'
import image3 from '/image3.png'
import {BsArrowUpRight} from 'react-icons/Bs'

const Home9 = () => {
  return (
    <div>
        <div className=''>

            <div className='flex justify-center'>
            <div className=''>
                <div className='text-3xl text-[#154685] font-semibold my-5'>Recent posts</div>
                <div className='text-[#12A347] flex'><div className='px-3'>View all our posts</div><div className='my-auto'><AiOutlineArrowRight/></div></div>
            </div>
            </div>

        </div>

        <div className='md:flex justify-between xlg:mx-20 lg:mx-14'>

            <div className='m-5 mb-8 flex justify-center shadow-lg shadow-gray-600 p-2'>
            <div className='w-fit py-2'>
                <div><img src={image1} alt="" /></div>
                <div className='text-sm text-[#154685]'>Phoenix Baker • 19 Jan 2022</div>
                <div className='flex justify-between'>
                    <div className='text-gray-900 my-2 font-bold'>Trek guide 2021</div>
                    <div className='text-[#12A347] my-auto mr-10'><BsArrowUpRight/></div>
                </div>
            </div>
            </div>

            <div className='m-5 mb-8 flex justify-center shadow-lg shadow-gray-600 p-2'>
            <div className='w-fit py-2'>
                <div><img src={image2} alt="" /></div>
                <div className='text-sm text-[#154685]'>Phoenix Baker • 19 Jan 2022</div>
                <div className='flex justify-between'>
                    <div className='text-gray-900 my-2 font-bold'>Trek guide 2020</div>
                    <div className='text-[#12A347] my-auto mr-10'><BsArrowUpRight/></div>
                </div>
            </div>
            </div>

            <div className='m-5 mb-8 flex justify-center shadow-lg shadow-gray-600 p-2'>
            <div className='w-fit py-2'>
                <div><img src={image3} alt="" /></div>
                <div className='text-sm text-[#154685]'>Phoenix Baker • 19 Jan 2022</div>
                <div className='flex justify-between'>
                    <div className='text-gray-900 my-2 font-bold'>Trek guide 2022</div>
                    <div className='text-[#12A347] my-auto mr-10'><BsArrowUpRight/></div>
                </div>
            </div>
            </div>

        </div>
    </div>
  )
}

export default Home9
import React from 'react'
import Trek1 from '/Trek1.png'
import Trek2 from '/Trek2.png'
import Trek3 from '/Trek3.png'
import Trek4 from '/Trek4.png'
import { AiOutlineArrowRight } from 'react-icons/Ai'

const Home7 = () => {
  return (
    <div className='mt-24'>


        <div className='md:mx-10 mid:mx-5 mx-3'>

            <div className='text-[#154685] font-semibold text-3xl'>Trek this year</div>
            <div className='flex justify-between my-5'>

                <div>
                    <h1 className='text-gray-600 max-w-[427px] tracking-tight mid:tracking-normal'>Here are some of the glimpse of the trek we have taken this year. This is our gallery.</h1>
                </div>

                <div>
                    <button className='text-green-600 text-sm md:font-normal md:text-md font-thin md:flex rounded-lg border border-green-600 p-2 mx-2 hidden'>
                        <div className='my-auto flex'><div className='px-1'>View</div> <div>all</div></div>
                        <div className='my-auto px-2'><AiOutlineArrowRight/></div>
                    </button>
                </div>

            </div>

        </div>

        
        <div className='flex'>
            <div className='shadowow shadow-lg shadow-black mid:mx-3 mx-2 md:ml-24 ml-5'><img src={Trek1} alt="" /></div>
            <div className='shadowow shadow-lg shadow-black mid:mx-3 mx-2'><img src={Trek2} alt="" /></div>
            <div className='shadowow shadow-lg shadow-black mx-3 hidden md:block'><img src={Trek3} alt="" /></div>
            <div className='shadowow shadow-lg shadow-black mid:ml-3 '><img src={Trek4} alt="" /></div>
        </div>

        <div className='float-right m-4'>
            <button className='text-green-600 text-sm md:font-normal md:text-md font-thin flex rounded-lg border border-green-600 p-1 justify-end md:hidden'>
                <div className='my-auto flex'><div className='px-1'>View</div> <div>all</div></div>
                <div className='my-auto px-2'><AiOutlineArrowRight/></div>
            </button>
        </div>
    </div>
  )
}

export default Home7
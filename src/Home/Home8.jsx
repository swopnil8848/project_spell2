import React from 'react'
import Featured_icon1 from '/Featured_icon1.png'

const Home8 = () => {
  return (
    <div>
        <div className='bg-[#F9F9FF] xlg:mx-20 lg:mx-14 mid:mx-10 md:mx-5 mt-28'>


            <div className='text-center'>
                <div>
                <div className='text-[#154685] text-3xl font-semibold my-7'><h1>What makes us different</h1></div>
                <div className='text-gray-700 mb-10'>
                    <h1>Some of the factor that makes us</h1>
                    <h1>different from are below.</h1>
                </div>
                </div>
            </div>

            <div className='md:flex justify-evenly'>
                
                <div className='xlg:mx-10 md:mx-7 my-8'>
                <div className='text-center'>
                    <div className='flex justify-center'><img src={Featured_icon1} alt="" /></div>
                    <div><h1 className='text-gray-900 font-semibold text-2xl'>History of excellance</h1></div>
                    <div><h1 className='text-gray-500'>We have history of best hospitality and support with our trekkers.As a socially reputed company, we make sure of your overall wellbeing.</h1></div>
                </div>
                </div>

                <div className='xlg:mx-10 md:mx-7 my-8'>
                <div className='text-center'>
                    <div className='flex justify-center'><img src={Featured_icon1} alt="" /></div>
                    <div><h1 className='text-gray-900 font-semibold text-2xl'>Expert guide</h1></div>
                    <div><h1 className='text-gray-500'>We have history of best hospitality and support with our trekkers.As a socially reputed company, we make sure of your overall wellbeing.</h1></div>
                </div>
                </div>

                <div className='xlg:mx-10 md:mx-7 my-8'>
                <div className='text-center'>
                    <div className='flex justify-center'><img src={Featured_icon1} alt="" /></div>
                    <div><h1 className='text-gray-900 font-semibold text-2xl'>100% safe</h1></div>
                    <div><h1 className='text-gray-500'>We have history of best hospitality and support with our trekkers.As a socially reputed company, we make sure of your overall wellbeing.</h1></div>
                </div>
                </div>

            </div>
        </div>
    </div>
  )
}

export default Home8
import React from 'react'
import Discount from '/Discount.png'

const Home6 = () => {
  return (
    <div className='lg:m-24 md:m-16 mt-16 m-3'>
        <div className='md:flex '>
            <div className='md:w-1/2'>
                <img src={Discount} alt="" />
            </div>
            <div className='flex md:w-1/2 w-full'>
            <div className='text-white bg-blue-700 w-ful lg:pt-10 pt-5 px-8 lg:px-10 w-full py-5'>
                <div className='lg:text-lg text-md'>Enjoy Summer Deals</div>
                <div className='lg:text-4xl text-2xl font-semibold lg:my-5 mid:my-3 my-2'>Up to 10% Discount!</div>
                <div><button className='text-gray-500 lg:p-3 p-2 bg-gray-100 rounded-xl'>Learn more</button></div>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Home6
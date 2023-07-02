import React from 'react'
import Logo from '/Logo.png'

const Navbar = () => {
  return (
    <div className='flex justify-around shadow-b-black shadow-md'>


        <div className='py-2'>
            <div><img src={Logo} alt="" /></div>
        </div>


        <div className='md:flex hidden my-auto py-3'>
          <h1 className='text-gray-500 lg:p-2 p-1 my-auto mx-4'>Packages</h1>
          <h1 className='text-gray-500 lg:p-2 p-1 my-auto mx-4'>Destination</h1>
          <h1 className='text-gray-500 lg:p-2 p-1 my-auto mx-4'>Galley</h1>
          <h1 className='text-gray-500 lg:p-2 p-1 my-auto mx-4'>FAQs</h1>
          <h1 className='text-gray-500 lg:p-2 p-1 my-auto mx-4'>About us</h1>
          <button className='text-white bg-green-500 md:p-2 p-1 my-auto rounded-lg mx-2'>Contact Us</button>
        </div>


    </div>
  )
}

export default Navbar
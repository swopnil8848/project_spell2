import React from 'react'
import Association1 from '/Association1.png'
import Association2 from '/Association2.png'
import Association3 from '/Association3.png'
import Association4 from '/Association4.png'
import Association5 from '/Association5.png'
import Association6 from '/Association6.png'

const Home10 = () => {
  return (
    <div>
        <div className='mt-14'>

            <div className='text-gray-800 text-xl font-bold text-center my-5'><h1>We are associated with</h1></div>

            <div className='md:flex justify-center mx-5'>
                <div className='flex my-8'>
                    <div className='px-7 lg:px-7'><img src={Association1} alt="" /></div>
                    <div className='px-7 lg:px-7'><img src={Association2} alt="" /></div>
                    <div className='px-7 lg:px-7'><img src={Association3} alt="" /></div>
                    
                </div>
                <div className='flex my-8'>
                    <div className='px-7 lg:px-7'><img src={Association4} alt="" /></div>
                    <div className='px-7 lg:px-7'><img src={Association5} alt="" /></div>
                    <div className='px-7 lg:px-7'><img src={Association6} alt="" /></div>
                    
                </div>
            </div>

        </div>
    </div>
  )
}

export default Home10
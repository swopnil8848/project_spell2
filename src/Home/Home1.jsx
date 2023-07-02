import React from 'react'
import Home1bg from '/Home1bg.png'
import search_icon from '/search_icon.png'


const Home1 = () => {
  return (
    <div className='overflow-x-hidden'>
    <div className='w-screen h-full'>
      <div className='w-screen h-full md:h-[400px] mid:h-[300px] bg-cover bg-no-repeat' style={{ backgroundImage: "url(/Home1bg.png)" }}>


        {/* <div className='relative'>
          <img src={Home1bg} alt="" />
        </div> */}
        
        <div className='flex justify-center my-auto text-center h-full'>
          <div className='relative'>
            <h1 className='lg:text-4xl md:text-3xl mid:text-2xl  font-bold text-white xlg:mt-[30%] lg:mt-[30%] mid:mt-[32%] md:mt-[20%] mt-[10%] text-xl'>Trek more worry less </h1>
            <h1 className='text-white px-auto text-sm'>Your adventure starts here!!!</h1>
            <div className='relative'>
              <img src={search_icon} className='absolute md:h-10 lg:h-auto h-6 top-1 left-3 md:left-7 ' />
              <div className='md:m-5 m-2'>
                <input type="text" className='lg:w-[560px] lg:h-[56px] md:w-[500px] mid:h[40px] mid:w-[280px] md:h-[48px] p-1 rounded-full' />
              </div>
            </div>
          </div>
        </div>


      </div>
    </div>
    </div>
  )
}

export default Home1
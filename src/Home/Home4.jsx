import React from 'react'
import Reccomended1 from '/Reccomended1.png'
import Reccomended2 from '/Reccomended2.png'
import Reccomended3 from '/Reccomended3.png'
import Stars from '/Stars.png'
import {AiOutlineArrowRight,AiFillCalendar} from 'react-icons/Ai';
import {BsFillBarChartFill} from 'react-icons/Bs';

const Home4 = () => {
  return (
    <div className='md:mt-20 lg:mx-14 md:mx-8 mx-2 mt-10'>
        <div>

            <div>
                <h1 className='md:text-3xl mid:text-2xl text-xl font-semibold text-blue-700'>Recommended packages</h1>
            </div>


            <div className='flex justify-between my-2'>

                <div>
                    <h1 className='md:w-[332px] text-sm md:font-normal md:text-md font-thin text-[#596579] md:text-md p-2 mx-5'>These are some of the best trek that are recommended by oldlink’s experts. </h1>
                </div>

                <div>
                    <button className='text-green-600 text-sm md:font-normal md:text-md font-thin flex rounded-lg border border-green-600 p-2 mx-2'>
                        <div className='my-auto'>View all</div>
                        <div className='my-auto px-2'><AiOutlineArrowRight/></div>
                    </button>
                </div>

            </div>


        </div>


        <div className='md:flex justify-between mt-5'>


            <div className='xlg:px-1  md:mx-6 max-w-[367px] mb-9  shadow-gray-400 rounded-md p-1 shadow-sm mx-auto '>
                <div className='relative'>
                    <img src={Reccomended1} alt="" />
                    <div className='absolute bottom-2 left-3 flex'>
                        <div className='my-1'><img src={Stars} alt="" /></div>
                        <div className="text-gray-100 text-xsm px-2">(50 reviews)</div>
                    </div>
                </div>
                <div>

                    <h1 className='text-xl font-bold text-gray-900 h-[58px]'>Everest View Trek - 5 days </h1>

                    <div className='flex justify-between text-gray-600 my-2'>
                        <div className='flex text-gray-600'>
                            <div className='my-auto mx-2'><AiFillCalendar/></div>
                            <div className=''> 5 days</div>
                        </div>
                        <div>
                            <h1>from <span className='line-through'>Rs.5000</span></h1>
                        </div>
                    </div>

                    <div className='flex justify-between my-2'>
                        <div className='text-gray-600 flex'>
                            <div className='my-auto mx-2'><BsFillBarChartFill/></div>
                            <div>Easy</div>
                        </div>
                        <div>
                            <h1><span className='text-blue-800 font-bold text-lg'>Rs.4500</span><span className='text-gray-600'>/person</span></h1>
                        </div>
                    </div>

                </div>
            </div>


            <div className='xlg:px-1 md:mx-6 max-w-[367px] mb-9 shadow-gray-400 rounded-md p-1 shadow-sm mx-auto'>
                <div>
                <div className='relative'>
                    <img src={Reccomended2} alt="" />
                    <div className='absolute bottom-2 left-3 flex'>
                        <div className='my-1'><img src={Stars} alt="" /></div>
                        <div className="text-gray-100 text-xsm px-2">(20 reviews)</div>
                    </div>
                    <div className='text-white bg-yellow-600 absolute top-0 right-0'><h1>Best Seller</h1></div>
                </div>
                <div>

                    <h1 className='text-xl font-bold text-gray-900 h-[58px]'>Helambu Trek - 1 days </h1>

                    <div className='flex justify-between text-gray-600 my-2 mx-2'>
                        <div className='flex text-gray-600'>
                            <div className='my-auto mx-2'><AiFillCalendar/></div>
                            <div className=''> 1 days</div>
                        </div>
                        <div>
                            <h1>from <span className='line-through'></span></h1>
                        </div>
                    </div>

                    <div className='flex justify-between my-2 mx-2'>
                        <div className='text-gray-600 flex'>
                            <div className='my-auto mx-2'><BsFillBarChartFill/></div>
                            <div>Easy</div>
                        </div>
                        <div>
                            <h1><span className='text-blue-800 font-bold text-lg'>Rs.1000</span><span className='text-gray-600'>/person</span></h1>
                        </div>
                    </div>
                </div>
                </div>
            </div>


            <div className='xlg:mx-8 xlg:px-1 mid:hidden lg:block max-w-[367px] mb-9 shadow-gray-400 rounded-md p-1 shadow-sm mx-auto'>
                <div className='relative'>
                    <img src={Reccomended3} alt="" />
                    <div className='absolute bottom-2 left-3 flex'>
                        <div className='my-1'><img src={Stars} alt="" /></div>
                        <div className="text-gray-100 text-xsm px-2">(50 reviews)</div>
                    </div>
                </div>
                <div>
                    <h1 className='text-xl font-bold text-gray-900 h-[62px]'>Poon Hill Trek - 2 days </h1>
                    <div className='flex justify-between text-gray-600'>
                        <div className='flex text-gray-600'>
                            <div className='my-auto mx-2'><AiFillCalendar/></div>
                            <div className=''> 2 days</div>
                        </div>
                        <div>
                            <h1>from <span className='line-through'></span></h1>
                        </div>
                    </div>
                </div>
                
                <div className='flex justify-between'>
                        <div className='text-gray-600 flex'>
                            <div className='my-auto mx-2'><BsFillBarChartFill/></div>
                            <div>Easy</div>
                        </div>
                        <div>
                            <h1><span className='text-blue-800 font-bold text-lg'>Rs.2000</span><span className='text-gray-600'>/person</span></h1>
                        </div>
                    </div>
            </div>



        </div>
    </div>
  )
}

export default Home4
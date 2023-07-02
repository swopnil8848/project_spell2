import React from 'react'
import {BsTelephoneFill} from 'react-icons/Bs'
import {IoMdMail} from 'react-icons/Io'
import {ImFacebook} from 'react-icons/Im'
import {AiFillInstagram} from 'react-icons/AI'
import {AiOutlineTwitter} from 'react-icons/AI'
import {BsLinkedin} from 'react-icons/Bs'
import {BsYoutube} from 'react-icons/Bs'
import {FaTelegramPlane} from 'react-icons/Fa'

import Line from '/Line.png'

const Footer = () => {
  return (
    <div className='bg-[#154685]'>
        <div className='lg:flex justify-between py-10 sm:mx-10 mx-2'>

            <div className='mid:flex block lg:block justify-between'>
            
            <div className='mb-7'>
                <div><h1 className='font-bold text-lg text-[#E6E6E6] my-3'>Call Us</h1></div>
                <div className='flex text-[#E6E6E6]'>
                    <div className='my-auto mr-2'><BsTelephoneFill/></div>
                    <div>+977 9814017327</div>
                </div>
            </div>
            <div>
                <div><h1 className='font-bold text-lg text-[#E6E6E6] my-3'>Email</h1></div>
                <div className='flex text-[#E6E6E6]'>
                    <div className='my-auto mr-2'><IoMdMail/></div>
                    <div>hello1999@gmail.com</div>
                </div>
            </div>
            
            </div>
            

            <div className='flex justify-between lg:w-1/3 lg:mt-0 mt-10'>
                <div>
                    <div className='text-[#E6E6E6] '>
                        <h1 className='font-bold text-lg text-[#E6E6E6]'>About Us</h1>
                        <h1 className='my-3'>Our Story</h1>
                        <h1 className='my-3'>Travel Blog & Tips</h1>
                        <h1 className='my-3'>Write review </h1>
                        <h1 className='my-3'>FAQs</h1>
                    </div>
                </div>


                <div>
                    <div className='text-[#E6E6E6] '>
                        <h1 className='font-bold text-lg text-[#E6E6E6]'>QUick links</h1>
                        <h1 className='my-3'>Packages</h1>
                        <h1 className='my-3'>Destination</h1>
                        <h1 className='my-3'>Customer support</h1>
                        <h1 className='my-3'>Privacy & Policies</h1>
                    </div>
                </div>
            </div>

            <div className='lg:w-1/3 lg:ml-5 flex justify-center lg:mt-0 mt-10'>
                <div>
                    <div className='font-bold text-lg text-[#E6E6E6] my-5'><h1>Subscribe to our newsletter</h1></div>
                    <div className='text-[#E6E6E6]'>Get the latest news, offers and inspiring travel stories straight to your inbox.</div>
                    <div className='relative w-fit my-5'>
                        <input className='md:h-[48px] md:w-[367px] w-[250px] h-[40px]' type="text" placeholder='email adress here' />
                        <div className='bg-[#12A347] p-1 text-white rounded-sm absolute bottom-2 right-2 Z-50 my-auto text-2xl'><FaTelegramPlane/></div>
                    </div>
                </div>
            </div>
            
        </div>


        <div className='md:mx-20 mx-10'><img src={Line} alt="" /></div>


        <div className='mid:flex justify-between mid:mx-2 md:mx-5 lg:mx-9 mt-5  text-center'>
            <div className='text-[#E6E6E6] py-3'><h1>© 2019 OldlinkTour All Rights Reserved.</h1></div>
            <div className='text-white flex text-center justify-center py-3 my-auto '>
                <div className='px-2'><ImFacebook/></div>
                <div className='px-2'><AiFillInstagram/></div>
                <div className='px-2'><AiOutlineTwitter/></div>
                <div className='px-2'><BsLinkedin/></div>
                <div className='px-2'><BsYoutube/></div>
            </div>
        </div>
    </div>
  )
}

export default Footer
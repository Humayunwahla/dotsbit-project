'use client'
import React from 'react'
import Image from 'next/image'
import Navbar from "@/components/Navbar";
import pica from '@/assets/pic1.png'
import picb from '@/assets/pic2.png'
import picc from '@/assets/pic3.png'
import footer from '@/assets/footer.png'
import pic1 from '@/assets/social/pic1.png'
import pic2 from '@/assets/social/pic2.png'
import pic3 from '@/assets/social/pic3.png'
import pic4 from '@/assets/social/pic4.png'
import pic5 from '@/assets/social/pic5.png'
import pic6 from '@/assets/social/pic6.png'
import { Spotlight } from '@/components/ui/Spotlight';

function Touch() {
  return (
    <div>
        <div className=' md:p-10'><Navbar/></div>

       <div>
       <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="cyan"
      />
       <div className='lg:mx-[126px] mx-[50px]'>
     <div className='flex lg:flex-row flex-col text-center mt-20 gap-6'>
        <div className='w-1/6 text-left'><h1 className=' aboutH'><p className=' font-cocosharp'>Get in Touch</p></h1></div>
        <div className='lg:w-5/6 text-left'>
            <p className=' aboutfont'><p className=' font-poppins'>Call, email, meet or video call us -<br/> however you’d prefer to work we’d love to<br/> hear from you</p></p>
        </div>
     </div>
    </div>
        </div> 

        <div className='flex flex-col lg:flex-row  justify-between lg:mx-[126px] sm:mx-[50px] mx-[8px] '>
          {/** Form section*/}
          <div className="mt-10 flex flex-col lg:w-1/2   gap-y-8 ">
        <div className="col-span-1 md:col-span-3 ">
          <label htmlFor="first-name" className="block text-sm contact leading-6  text-gray-400  aboutH"><p className=' font-poppins'>Email</p></label>
          <div className="mt-2">
            <input type="email" name="" id="" className='form-input size-full border-b-2 border-b-black' />
       {/**     <input type="text" name="first-name" id="first-name" autocomplete="given-name" class="block md:w-full w-96 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/> */}
          </div>
        </div>

        <div className=" col-span-1 md:col-span-3">
          <label htmlFor="last-name" className="block text-sm contact leading-6 text-gray-400  aboutH"><p className=' font-poppins'>Phone no.</p></label>
          <div className="mt-2">
            <input type="number" className='form-input size-full border-b-2 border-b-black' />
        {/**  <input type="text" name="last-name" id="last-name" autocomplete="family-name" class="block md:w-full w-96 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/> */}  
          </div>
        </div>
        <div className='items-center  mt-8'>
                    <div className=''>
                       <label htmlFor=""  className='contact text-gray-400  aboutH'><p className=' font-poppins'>Message</p></label>
                  
                    </div>
                    <div className='mt-3  '>
                      <input type="textarea"  className='form-textarea size-full border-b-2 border-b-black '  />
             {/**   <textarea name="message" id="" cols="120" rows="5" placeholder='Write a message' className='bg-gray-200 rounded-md '></textarea>*/} 
           </div> 
           </div>
           <div className=''>
          <button className='touchBtn'><span>Schedule a Meeting</span></button>
        </div>
        </div>
        
          {/** Form section End */}
          <div className='flex flex-col mx-auto sm:flex-row items-center gap-16'>
            <div>
            <div className=' lg:flex   mt-8 '>
        <div className=''>
          <div>
          <Image src={pica} alt="" />
        </div>
        <div className='text-right'>
         <h1 className=' fontlogo'><p className=' font-gattewaySignature'>Usman D</p></h1>
         <p className='font-poppins'>Frontend Developer</p>
        </div>
        </div>
        
      </div>
            </div>
            <div className='flex flex-col items-center gap-8 sm:flex-row lg:flex-col '>
              <div>
              <div className="   mt-8">
          <div className=''>
          <Image src={picb} alt="" className='' />
          <div className='text-right'>
          <h1 className=' fontlogo'><p className=' font-gattewaySignature'>Usman D</p></h1>
          <p className='font-poppins'>Frontend Developer</p>
         </div>
        </div>
        </div>
              </div>
              <div>
              <div className='items-center lg:mt-12 mt-8'>
          <div className=' '>
          <Image src={picc} alt="" className='' />
          <div className='text-right'>
          <h1 className=' fontlogo'><p className=' font-gattewaySignature'>Usman D</p></h1>
          <p className='font-poppins'>Frontend Developer</p>
        </div>
        </div>
        </div>
              </div>
            </div>
          </div>
        </div>
        {/**Footer section */}
        <div>
        <div className=' bg-[#F5F6F8] mt-[169px] '>
    <div className=''>
        <div className='flex  flex-row  justify-between'>
        <div className='flex flex-col md:flex-row gap-[40px] mt-16'>
             <div>
                <Image src={footer} alt="" />
                </div> 
                <div className=''>
                <h1 className='footerH'>Enough about us,<br/> let’s talk about you</h1>
                <p className='footerP mt-[30px]'>Every new project starts with a<br/> conversation so let’s grab a coffee<br/> and chat</p>
                </div>
        </div>
        <div className='mt-16'>
         <button className='footerBtn hidden sm:block'><p className='NavBtnCont text-white '>Let’s Talk</p></button>
        </div>
        </div>

        <div className='mt-[114px] flex flex-col items-center xl:flex-row justify-between gap-10'>
            <div className=' footerF  flex flex-row sm:gap-[60px] gap-[15px]  xl:text-2xl lg:text-xl sm:text-sm text-[12px] text-center '>
             <div>
                <h1 className='font-poppins'>©BITDOT</h1>
                <p className='font-poppins'>Privacy policy</p>
             </div>
             <div>
                <h1 className='font-poppins'>Email</h1>
                <p className='font-poppins'>hello@bitdol.com</p>
             </div>
             <div>
                <h1 className='font-poppins'>Pakistan</h1>
                <p className='font-poppins'>05444685464</p>
             </div>
            </div>
            <div>
                <ul className='flex flex-row gap-[20px]'>
                    <li><Image src={pic1} alt="" /></li>
                    <li><Image src={pic2} alt="" /></li>
                    <li><Image src={pic3} alt="" /></li>
                    <li><Image src={pic4} alt="" /></li>
                    <li><Image src={pic5} alt="" /></li>
                    <li><Image src={pic6} alt="" /></li>
                </ul>
            </div>
            
        </div>
    </div>
        </div>
        </div>
        {/**Footer section end */}
    </div>
  )
}

export default Touch
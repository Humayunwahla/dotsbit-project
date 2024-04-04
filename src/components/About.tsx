import React from 'react'
import { WavyBackground } from './ui/wavy-background'

function About() {
  return (
    
    <div className='about   lg:mx-[126px] mx-[50px]'>
     <div className='flex lg:flex-row flex-col text-center mt-20'>
        <div className='w-1/6 text-left'><h1 className=' aboutH'><p className=' font-cocosharp'>About</p></h1></div>
        <div className='lg:w-5/6 text-left mt-6 lg:mt-0'>
            <p className=' sm:aboutfont text-xl'><p className='font-poppins '>At Dotsbit, we firmly believe in the power of turning dreams into reality.
               Our dedicated commitment revolves around helping you achieve your aspirations
               and reaching unprecedented heights of success. With our expertise, guidance,
               and unwavering support, your vision can transform into a flourishing actuality.</p></p>
        </div>
     </div>
    </div>
    
  )
}

export default About
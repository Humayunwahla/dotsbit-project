
import React from 'react'

function Rating() {
  return (
    <div className='rate flex sm:flex-row flex-col  md:gap-[180px] gap-[80px] justify-center mt-0 '>
        <div className='flex lg:flex-row flex-col md:gap-[180px] gap-[80px] md:my-[69px] my-[20px]'>
        <div className='font-popp text-center'>
<h2 className='rating'>20+</h2>
<p className='ratingSub'><p className=' font-poppins'>Experts</p></p>
        </div>
        <div className='font-popp '>
<h2 className='rating'>300+</h2>
<p className='ratingSub'><p className=' font-poppins'>Happy Clients</p></p>
        </div>
        </div>
        <div className='flex lg:flex-row flex-col md:gap-[180px] gap-[80px] md:my-[69px] my-[20px]'>
        <div className='font-popp '>
<h2 className='rating'>20</h2>
<p className='ratingSub'><p className=' font-poppins'>Years on the market</p></p>
        </div>
        <div className=' '>
<h2 className='rating'>500+</h2>
<p className='ratingSub'><p className=' font-poppins'>Products made</p></p>
        </div>
        </div>
         
    </div>
  )
}

export default Rating
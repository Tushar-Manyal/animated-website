import React from 'react'
import {motion} from 'framer-motion'

function Marque() {
  return (
    <div data-scroll data-scroll-section data-scroll-speed="0.1" className='w-full py-20 bg-[#004D43] rounded-tl-3xl rounded-tr-3xl'>
        <div className='text border-t-2 border-b-2 border-[#082e29] flex items-center  overflow-hidden whitespace-nowrap' >
            <motion.h1 initial={{x:"0"}} animate={{x:"-100%"}} transition={{ease:"linear",repeat:Infinity,duration:4}} className="text-[14vw] leading-none uppercase  font-semibold items-center pb-5 -mt-[-0.1vw]">we are ochi.</motion.h1>
            <motion.h1 initial={{x:"0"}} animate={{x:"-100%"}} transition={{ease:"linear",repeat:Infinity,duration:4}} className="text-[14vw] leading-none uppercase  font-semibold items-center pb-5 -mt-[-0.1vw]">we are ochi.</motion.h1>


        </div>
    </div>

  )
}

export default Marque;
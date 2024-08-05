import { motion } from 'framer-motion';
import React from 'react'
import { FaArrowUpLong } from "react-icons/fa6";

function Landing() {
  return (
    <div data-scroll data-scroll-section data-scroll-speed="-0.3"  className="w-full h-screen bg-zinc-900 pt-1">
        <div className="textstructure mt-32 py-10 px-20">
        {["we create","eye opening","presentation"].map((items,index)=>{
            return  (
            <div className="masker">
                <div className="w-fit flex items-center">
                    {index===1 && (<motion.div
                    initial={{width:0}}
                    animate={{width:"9vw"}} 
                    transition={{ease:[0.76,0,0.24,1] ,duration:1}}
                    
                    className="bg-[url('https://images.unsplash.com/photo-1643255083197-18721220670e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTU0fHxjYXJ0b29ufGVufDB8fDB8fHww')] bg-cover px-1 w-[9vw] h-[6vw] mt-4  mr-[1vw] relative rounded-md "></motion.div>)}
                    <h1 key={index} className="pt-[0vw] -mb-[0vw] text-9xl leading-[7.2vw] tracking-tighter font-semibold uppercase">{items}</h1>

                </div>
            </div>
            );
        })}

        </div>
        <div className="border-t-[1px] border-zinc-800 mt-20 flex justify-between item-center py-5 px-20">
            {["For public and private company","From the first pitch to IPO"].map((item,index)=>(
                <p className="text-md font-light tracking-tight leading-none">{item}</p>
            ))}
            <div className="start flex items-center gap-5">
                <div className="px-5 py-2 border-[2px] border-zinc-700 font-light text-md rounded-full uppercase mb-1">START THE PROJECT</div>
                <div className="w-10 h-10 border-[2px] flex items-center justify-center border-zinc-700 rounded-full">
                    <span className="rotate-[ 0deg 45deg] flex justify-center  items-center animate-spin">
                        <FaArrowUpLong />
                    </span>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Landing
import React from 'react'
import { useEffect,useState } from 'react'


function Eyes2() {
    const [rotate,setRotate]=useState(0)
    useEffect(()=>{
        window.addEventListener("mousemove",(e)=>{
            let mouseX=e.clientX;
            let mouseY=e.clientY;
            
            let deltaX=mouseX-window.innerWidth/2;
            let deltaY=mouseY-window.innerHeight/2;
    
            var angle=Math.atan2(deltaY,deltaX) * (180/Math.PI);
            setRotate(angle-180);
    
    
    
        })
    })

  return (
    <div className=" eyes w-full h-screen overflow-hidden border-b-[1px] border-#CDEA68 rounded-bl-3xl rounded-br-3xl ">
        <div className="relative w-full h-full bg-[#CDEA68] bg-cover bg-center">
            <div className="absolute top-1/2 left-1/2 flex gap-10 -translate-x-[50%] -translate-y-[50%] ">
                <div className="w-[20vw] h-[20vw] flex items-center justify-center rounded-full bg-white">
                <div className="w-[10vw] h-[10vw] relative  rounded-full bg-black text-white flex items-center justify-center"> PLAY
                    <div style={{transform:`translate(-50%,-50%) rotate(${rotate}deg)`}}  className="line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-[2.5vw] rotate-12 ">
                    <div className="w-[1.5vw] h-[1.5vw] rounded-full bg-white"></div>

                    </div>
                    </div>
                </div>
                <div className="w-[20vw] h-[20vw] flex items-center justify-center rounded-full bg-white">
                    <div className="w-[10vw] h-[10vw] relative  rounded-full bg-black  flex items-center justify-center"> PLAY
                    <div style={{transform:`translate(-50%,-50%) rotate(${rotate}deg)`}}  className="line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-[2.5vw] rotate-12 ">
                    <div className="w-[1.5vw] h-[1.5vw] rounded-full bg-white"></div>

                    </div>
                    </div>
                </div>


                

            </div>
        </div>


    </div>
  )
}

export default Eyes2
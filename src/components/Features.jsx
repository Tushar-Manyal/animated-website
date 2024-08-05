import React from 'react'

function Features() {
  return (
    <div className="w-full py-20 rounded-bl-3xl rounded-br-3xl">
        <div className="w-full px-20 border-b-[1px] border-zinc-700 pb-20 ">
            <h1 className=" text-6xl tracking-tight">Features Project</h1>
        </div>
        <div className="w-full h-20 flex items-center justify-around ">
        <div className="w-30 h-[10px] flex items-center gap-2 pt-10 ">
            <div className="w-[10px] h-[10px] bg-white rounded-full"></div>
            <div className="text-1xl">FADE</div>
        </div>
        <div className="w-30 h-[10px] flex items-center gap-2 pt-10 ">
            <div className="w-[10px] h-[10px] bg-white rounded-full"></div>
            <div className="text-3xl">VISE</div>
        </div>
        <div className="w-30 h-[10px] flex items-center gap-2 pt-10 ">
            <div className="w-[10px] h-[10px] bg-white rounded-full"></div>
            <div className="text-1xl">FADE</div>
        </div>
        <div className="w-30 h-[10px] flex items-center gap-2 pt-10 ">
            <div className="w-[10px] h-[10px] bg-white rounded-full"></div>
            <div className="text-3xl">VISE</div>
        </div>
        </div>
        <div className="px-20">
             <div className="cards w-full pt-10 flex gap-10">
                <div className="cardcontainer relative w-1/2 h-[80vh] rounded-3xl">
                    <h1 className="absolute bg-red-500 flex overflow-hidden right-full -translate-x-1/2 top-1/2 leading-none tracking-tight -translate-y-1/2 z-[9]-pb-20 text-8xl rounded-br-2xl">FADE</h1>
                    <div className="card w-full h-full rounded-3xl  overflow-hidden">
                        
                    <img className="w-full h-full bg-cover" src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png" alt=""/>
                    </div>
                </div>
                <div className="card w-1/2 h-[80vh] rounded-3xl">
                <div className="card w-full h-full rounded-3xl  overflow-hidden"> 
                <h1 className="absolute text-[#CDEA68] right-full -translate-x-1/2 -top-1/2 -translate-y-1/2 bg-red-500 leading-none text-8xl">FADE</h1>
                    <img className="w-full h-full bg-cover" src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg" alt=""/>
                    </div>
                </div>
             </div>
        </div>
    </div>
       
  )
}

export default Features
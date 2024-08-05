import React from 'react'

function Cards() {
  return (
    <div data-scroll data-scroll-section data-scroll-speed="0.3" className="w-full h-screen flex items-center px-20 gap-5 bg-zinc-100 rounded-bl-3xl rounded-br-3xl">
        <div className="cardcontainer h-[60vh] w-1/2">
            <div className="card relative rounded-xl w-full h-full flex items-center justify-center bg-[#004D43]">
                <img class="w-32" src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg"/>
                
                <button className=" rounded-3xl h-10 absolute px-5 py-1 border-2 left-10 bottom-10">&#169; 2023-2024</button>
                
            </div>
        </div>
        <div className="cardcontainer flex gap-5 h-[60vh] w-1/2">
            <div className="card relative rounded-xl w-1/2 h-full flex items-center justify-center bg-[#18322f]">
            <img class src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg"/>
            <button className=" rounded-3xl h-10 absolute px-5 py-1 border-2 left-10 bottom-10">&#174; Register</button>


            </div>
            <div className="card relative rounded-xl w-1/2 h-full flex items-center justify-center bg-[#1e2221]">
            <img class src="    https://ochi.design/wp-content/uploads/2022/04/logo003.png"/>
            <button className=" rounded-3xl h-10 absolute px-5 py-1 border-2 left-10 bottom-10">&#9829; The Future</button>


            </div>

        </div>
    </div>
    
  )
}

export default Cards
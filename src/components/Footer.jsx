import React from 'react'

function Footer() {
  return (
    <div className="w-full h-screen rounded flex  bg-zinc-900">
        <div className="w-1/2 h-full flex flex-col justify-between ">
            <div className="heading py-10">
                <h1 className="text-[8vw] font-semibold uppercase leading-none -mb-2 px-10 ">eye-</h1>
                <h1 className="text-[8vw] font-semibold uppercase leading-none -mb-2 px-10">opening</h1>
            </div>
            <h3>
            <img className=" mb-10 px-11 w-30 h-10" src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg"/>
            </h3>

        </div>

        <div className="w-1/2 h-full flex flex-col justify-evenly ">
            <div className="heading py-10">
                <h1 className="text-[5vw] font-semibold uppercase leading-none -mb-2 px-10 overflow-hidden ">presentation</h1>
            </div>
            <div>
                <div>
                    <div className=" w-full flex ">
                    <img className=" mb-10 px-11 w-30 h-10" src="https://cdn-icons-png.flaticon.com/128/408/408707.png"/>
                    <h3>Instagram</h3>

                    </div>
                    <div className=" w-full flex">
                    <img className=" mb-10 px-11 w-30 h-10" src="https://cdn-icons-png.flaticon.com/128/3536/3536424.png"/>
                    <h3>Twitter</h3>


                    </div>
                    <div className=" w-full flex">
                    <img className=" mb-10 px-11 w-30 h-10" src="https://cdn-icons-png.flaticon.com/128/174/174848.png"/>
                    <h3>Facebook</h3>


                    </div>
                    <div className=" w-full flex">
                    <img className=" mb-10 px-11 w-30 h-10" src="https://cdn-icons-png.flaticon.com/128/1384/1384060.png"/>
                    <h3>Youtube</h3>



                    </div>

                </div>
            


            </div>

        </div>
    </div>
  )
}

export default Footer
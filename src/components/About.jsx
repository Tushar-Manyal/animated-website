import React from 'react'

function About() {
  return (
    <div className="w-full p-20 bg-[#CDEA68] rounded-tl-3xl rounded-tr-3xl">
      <h1 className="text-[2vw] text-black">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam perspiciatis, eum ut dolorem eaque vero ab labore maiores recusandae suscipit velit. Aut quibusdam impedit consequatur doloremque sint autem, ducimus asperiores?
      Voluptas quae laudantium voluptatum quo ex, perferendis qui quis, blanditiis cumque officiis deserunt dicta autem incidunt perspiciatis laboriosam dolor quisquam, exercitationem mollitia! Earum minus velit tempore voluptatibus assumenda mollitia adipisci!
      </h1>
      <div className=" flex gap-5 w-full border-t-[1px] pt-10 mt-20 border-[#a1b562]">
        <div className="w-1/2">
        <h1 className="text-7xl text-black">Our Approach:</h1>
        <button className="flex uppercase gap-10 items-center px-10 py-6 bg-black mt-10 rounded-full text-white">Read More
        <div className="w-3 h-3 bg-zinc-100 rounded-full"></div>
        </button>
      </div>
      <div className="w-1/2 h-[70vh] bg-[url('https://images.unsplash.com/photo-1633113214207-1568ec4b3298?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODN8fGZyaWVuZHN8ZW58MHx8MHx8fDA%3D')] bg-cover drop-shadow-lg rounded-3xl"></div>
      </div>
    </div>
  )
}

export default About
import React from 'react'
import Navbar from "./components/Navbar"
import Landing from "./components/Landing"
import Marque from "./components/Marque"
import About from "./components/About"
import Eyes from "./components/Eyes"
import Features from "./components/Features"
import Eyes2 from "./components/Eyes2"
import Cards from "./components/Cards"
import Footer from "./components/Footer"
import LocomotiveScroll from 'locomotive-scroll';





function App() {

  

const locomotiveScroll = new LocomotiveScroll();


  return (
    <div className='w-full min-h-screen bg-zinc-900 text-white '>
      <Navbar/>
      <Landing/>
      <Marque/>
      <About/>
      <Eyes/>
      <Features/>
      <Cards/>
      <Footer/>
    </div>
  )
}

export default App
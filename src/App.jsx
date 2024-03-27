import React from 'react'
import Navi from './components/Navi'
import LandingPage from './components/LandingPage'
import Mark from './components/Mark'
import About from './components/About'
import Eye from './components/Eye'
import Feachured from './components/Feachured'
import Cards from './components/Cards'
import Footer from './components/Footer'
import LocomotiveScroll from 'locomotive-scroll';



const App = () => {
  const locomotiveScroll = new LocomotiveScroll();
  return (
    <div className=' w-full min-h-screen text-white bg-zinc-800'>
       <Navi />
      <LandingPage/>
      <Mark/>
      <About/>
      <Eye/>
      <Feachured/> 
    <Cards/>
    <Footer/>
    </div>
  )
}

export default App
import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'

function Wrapper(props) {
  return (
    <div className="app h-full min-h-screen bg-[#FBFBFB] text-black ">
      {props.isProtect && <Navbar />}
      {props.children}
      <Footer />
    </div>
  )
}

export default Wrapper

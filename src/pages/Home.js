import React from 'react'
import rumahgadang from '../assets/img/rumahgadang.jpg'

function Home() {
  return (
    <>
      <div className="relative flex">
        <div className="absolute top-0 left-0  flex w-full h-[350px] items-center justify-center overflow-hidden">
          <img src={rumahgadang} alt="" className="w-full" />
        </div>
        <div className="relative px-[45%] py-[5%]">
          <p className="text-[48px] font-[700] text-[#FFCE00] italic underline   uppercase">
            Ranah <br /> Bundo
          </p>
        </div>
      </div>
    </>
  )
}

export default Home

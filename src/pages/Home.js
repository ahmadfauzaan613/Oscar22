import React from 'react'
import rumahgadang from '../assets/img/rumahgadang.jpg'

import bumbu from '../assets/img/Bumbu.jpg'

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
      <div className="py-[25px] flex-col items-center justify-center mt-6 space-y-3 px-[10%]">
        <input type="search" placeholder="search" className="border  w-full rounded-lg px-3 py-1" />
        <div>
          <select name="" id="" className="border w-full px-3 py-1 rounded-lg">
            <option value="0">Kategori</option>
            <option value="Bumbu">Bumbu</option>
            <option value="Cabe">Cabe</option>
          </select>
        </div>
      </div>
      <div className="pl-[10%] grid grid-cols-3 mt-6 gap-y-[20px]">
        <div className="space-y-1 ">
          <img src={bumbu} alt="" className="w-[65%]" />
          <p className="font-[700] text-[18px]">Bumbu Cabe Asoy</p>
          <p className="font-[400] text-[16px] ">ASYOOOOOOOASYOOOOOOO</p>
          <div className="flex items-center space-x-2">
            <p className="font-[700] text-[18px]">Rp. 40.000</p>
            <button className="bg-[#FFCE00] rounded-lg font-[700] text-white p-2">Masukan Keranjang</button>
          </div>
        </div>
        <div className="space-y-1 ">
          <img src={bumbu} alt="" className="w-[65%]" />
          <p className="font-[700] text-[18px]">Bumbu Cabe Asoy</p>
          <p className="font-[400] text-[16px] ">ASYOOOOOOOASYOOOOOOO</p>
          <div className="flex items-center space-x-2">
            <p className="font-[700] text-[18px]">Rp. 40.000</p>
            <button className="bg-[#FFCE00] rounded-lg font-[700] text-white p-2">Masukan Keranjang</button>
          </div>
        </div>
        <div className="space-y-1 ">
          <img src={bumbu} alt="" className="w-[65%]" />
          <p className="font-[700] text-[18px]">Bumbu Cabe Asoy</p>
          <p className="font-[400] text-[16px] ">ASYOOOOOOOASYOOOOOOO</p>
          <div className="flex items-center space-x-2">
            <p className="font-[700] text-[18px]">Rp. 40.000</p>
            <button className="bg-[#FFCE00] rounded-lg font-[700] text-white p-2">Masukan Keranjang</button>
          </div>
        </div>
        <div className="space-y-1 ">
          <img src={bumbu} alt="" className="w-[65%]" />
          <p className="font-[700] text-[18px]">Bumbu Cabe Asoy</p>
          <p className="font-[400] text-[16px] ">ASYOOOOOOOASYOOOOOOO</p>
          <div className="flex items-center space-x-2">
            <p className="font-[700] text-[18px]">Rp. 40.000</p>
            <button className="bg-[#FFCE00] rounded-lg font-[700] text-white p-2">Masukan Keranjang</button>
          </div>
        </div>
        <div className="space-y-1 ">
          <img src={bumbu} alt="" className="w-[65%]" />
          <p className="font-[700] text-[18px]">Bumbu Cabe Asoy</p>
          <p className="font-[400] text-[16px] ">ASYOOOOOOOASYOOOOOOO</p>
          <div className="flex items-center space-x-2">
            <p className="font-[700] text-[18px]">Rp. 40.000</p>
            <button className="bg-[#FFCE00] rounded-lg font-[700] text-white p-2">Masukan Keranjang</button>
          </div>
        </div>
        <div className="space-y-1 ">
          <img src={bumbu} alt="" className="w-[65%]" />
          <p className="font-[700] text-[18px]">Bumbu Cabe Asoy</p>
          <p className="font-[400] text-[16px] ">ASYOOOOOOOASYOOOOOOO</p>
          <div className="flex items-center space-x-2">
            <p className="font-[700] text-[18px]">Rp. 40.000</p>
            <button className="bg-[#FFCE00] rounded-lg font-[700] text-white p-2">Masukan Keranjang</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home

import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import rumahgadang from '../assets/img/rumahgadang.jpg'

function Login() {
  const [show, isShow] = useState(false)
  const toggle = () => {
    isShow(!show)
  }

  const navigate = useNavigate()
  return (
    <>
      <div className="relative h-screen min-h-full bg-[#000] py-[20px] px-[30px]">
        <img className="absolute top-0 right-0 h-full" src={rumahgadang} alt="" />
        <div className="flex-col pt-[13%]">
          <p className="font-[700] text-[36px] pb-[30px] text-white">Login</p>
          <input
            className="mt-[20px] h-[40px] w-[25vw] appearance-none rounded-lg bg-white px-[24px]  focus:outline-none"
            type="text"
            name="username"
            id="username"
            spellCheck="false"
            autoComplete="off"
            placeholder="Username"
            style={{
              color: 'color: rgba(253, 255, 253, 0.5);',
            }}
          />

          <div className="relative mt-[32px]">
            <input className="h-[40px] w-[25vw] appearance-none rounded-lg bg-white px-[24px]  focus:outline-none" type={show ? 'text' : 'password'} name="password" id="password" spellCheck="false" autoComplete="off" placeholder="Kata Sandi" />
            <button onClick={toggle} className="absolute top-[50%] left-[22%] translate-y-[-50%] cursor-pointer uppercase text-black">
              Lihat
            </button>
          </div>
          <div className=" pt-[45px] space-x-8">
            <button className="bg-[#5CBE0E] w-[12%] h-[40px] rounded-lg text-white font-[700] ">Masuk</button>
            <button onClick={() => navigate('/')} className=" border border-[#5CBE0E] w-[12%] h-[40px] rounded-lg text-[#5CBE0E]  font-[700] ">
              Kembali
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login

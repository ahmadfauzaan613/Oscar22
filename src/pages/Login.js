import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { Slide, toast, ToastContainer } from 'react-toastify'
import rumahgadang from '../assets/img/rumahgadang.jpg'
import { postLogin } from '../Redux/user/action'

function Login() {
  const [show, isShow] = useState(false)
  const toggle = () => {
    isShow(!show)
  }
  const { register, handleSubmit, setValue } = useForm()
  const dispatch = useDispatch()
  const onSubmit = async ({ username, password }) => {
    try {
      await dispatch(postLogin(username, password))
      toast(
        <>
          <span>Berhasil login</span>
        </>,
        {
          onClose: () => {
            navigate('/')
          },
        }
      )
    } catch (error) {
      console.log(error)
    }
  }

  const navigate = useNavigate()

  return (
    <>
      <ToastContainer position="top-right" limit={1} closeButton={false} transition={Slide} autoClose={2500} hideProgressBar={false} newestOnTop={false} closeOnClick={false} rtl={false} pauseOnFocusLoss draggable={false} pauseOnHover />
      <div className="relative h-screen min-h-full bg-[#000] py-[20px] px-[30px]">
        <img className="absolute top-0 right-0 h-full" src={rumahgadang} alt="" />
        <div className="flex-col pt-[13%]">
          <p className="font-[700] text-[36px] pb-[30px] text-white">Login</p>
          <form action="" onSubmit={handleSubmit(onSubmit)}>
            <input
              className="mt-[20px] h-[40px] w-[25vw] appearance-none rounded-lg bg-white px-[24px]  focus:outline-none"
              type="text"
              name="username"
              {...register('username')}
              onChange={(e) => setValue('username', e.target.value)}
              id="username"
              spellCheck="false"
              autoComplete="off"
              placeholder="Username"
              style={{
                color: 'color: rgba(253, 255, 253, 0.5);',
              }}
            />

            <div className="relative mt-[32px]">
              <input
                {...register('password')}
                onChange={(e) => setValue('password', e.target.value)}
                className="h-[40px] w-[25vw] appearance-none rounded-lg bg-white px-[24px]  focus:outline-none"
                type={show ? 'text' : 'password'}
                name="password"
                id="password"
                spellCheck="false"
                autoComplete="off"
                placeholder="Kata Sandi"
              />
              <button onClick={toggle} className="absolute top-[50%] left-[22%] translate-y-[-50%] cursor-pointer uppercase text-black">
                Lihat
              </button>
            </div>
            <div className=" pt-[45px] space-x-8">
              <button type="submit" className="bg-[#5CBE0E] w-[12%] h-[40px] rounded-lg text-white font-[700] ">
                Masuk
              </button>
              <button onClick={() => navigate('/')} className=" border border-[#5CBE0E] w-[12%] h-[40px] rounded-lg text-[#5CBE0E]  font-[700] ">
                Kembali
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default Login

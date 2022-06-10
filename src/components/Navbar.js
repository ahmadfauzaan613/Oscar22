import React from 'react'
import Logo from '../assets/img/pngwing.com.png'
import Profile from '../assets/img/user.png'
import Keranjang from '../assets/img/trolley.png'

function Navbar() {
  return (
    <>
      <div className="flex items-center justify-between space-x-14 px-10 bg-black">
        <img src={Logo} alt="" className="w-[100px] h-full py-2" />
        <div className="flex items-center space-x-[60px]">
          <button>
            <img src={Keranjang} alt="" className="w-full h-full" />
          </button>
          <button>
            <img src={Profile} alt="" className="w-full h-full" />
          </button>
        </div>
      </div>
    </>
  )
}

export default Navbar

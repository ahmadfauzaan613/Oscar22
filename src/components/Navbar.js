import React, { useState } from 'react'
import Logo from '../assets/img/pngwing.com.png'
import Profile from '../assets/img/user.png'
import Keranjang from '../assets/img/trolley.png'

function Navbar() {
  const [isDropdown, setDropdown] = useState(true)
  const buttonDrop = () => {
    setDropdown(!isDropdown)
  }
  return (
    <>
      <div className="flex items-center sticky top-0 z-[98] justify-between space-x-14 px-10 bg-black">
        <img src={Logo} alt="" className="w-[100px] h-full py-2" />
        <div className="space-x-[60px]">
          <button>
            <img src={Keranjang} alt="" className="w-full h-full" />
          </button>
          <button onClick={buttonDrop}>
            <img src={Profile} alt="" className="w-full h-full" />
          </button>
          {!isDropdown && (
            <>
              <div className="bg-orange-500 w-[10%] ml-auto relative z-[98]">
                <p>HALO</p>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  )
}

export default Navbar

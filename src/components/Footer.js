import React from 'react'
import Logo from '../assets/img/pngwing.com.png'
function Footer() {
  return (
    <div className="mt-5 sticky top-0 z-[98] px-10 bg-black">
      <img src={Logo} alt="" className="w-[100px] h-full py-2" />
    </div>
  )
}

export default Footer

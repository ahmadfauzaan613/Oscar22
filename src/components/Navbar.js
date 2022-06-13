import React, { useState } from 'react'
import Logo from '../assets/img/pngwing.com.png'
import Profile from '../assets/img/user.png'
import Keranjang from '../assets/img/trolley.png'
import Modal from 'react-modal'
import { useNavigate } from 'react-router-dom'

const customStyles = {
  content: {
    top: '55%',
    left: '50%',
    right: '60%',
    bottom: '-25%',
    padding: '5px',
    marginRight: '-40%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: '#FFFF',
  },
}

function Navbar() {
  const [modalIsOpen, setIsOpen] = useState(false)
  function openModal() {
    setIsOpen(true)
  }
  function closeRestartModal() {
    setIsOpen(false)
  }

  const navigate = useNavigate()

  return (
    <>
      <Modal isOpen={modalIsOpen} style={customStyles} contentLabel="Example Modal" overlayClassName="Overlay">
        <>
          <div className="pt-[18px] px-[38px]">
            <div className="flex items-center justify-between">
              <p className="font-[700] text-[24px]">
                Cara Menulis Pesan yang Baik dan <br /> Benar Melalui Form Pengaduan
              </p>
              <p onClick={closeRestartModal} className="font-[700] text-[20px] cursor-pointer">
                X
              </p>
            </div>
            <div className="mt-5 mx-5 space-y-4">
              <div>
                <h1 className="font-bold text-lg text-[#5CBE0E]">
                  No. Pendaftaran <span className="font-normal text-black text-md">(untuk CAVET)</span>
                </h1>
                <p className="text-black">Diperlukan untuk identifikasi data diri CAVET</p>
              </div>
              <div>
                <h1 className="font-bold text-lg text-[#5CBE0E]">
                  NPV <span className="font-normal text-black text-md">(untuk VETERAN)</span>
                </h1>
                <p className="text-black">Diperlukan untuk identifikasi data diri VETERAN</p>
              </div>
              <div>
                <h1 className="font-bold text-lg text-[#5CBE0E]">NIK</h1>
                <p className="text-black">Diperlukan untuk identifikasi data diri</p>
              </div>
              <div>
                <h1 className="font-bold text-lg text-[#5CBE0E]">Tanggal Kelahiran</h1>
                <p className="text-black">Diperlukan untuk identifikasi data diri.</p>
              </div>
              <div>
                <h1 className="font-bold text-lg text-[#5CBE0E]">Kategori</h1>
                <p className="text-black">Kategori pesan pengaduan yang ingin dikeluhkan</p>
              </div>
              <div>
                <h1 className="font-bold text-lg text-[#5CBE0E]">Pesan</h1>
                <p className="text-black">Menceritakan pesan pengaduan yang ingin dikeluhkan.</p>
              </div>
              <div>
                <h1 className="font-bold text-lg text-[#5CBE0E]">Nomor HP</h1>
                <p className="text-black">Cara pembaruan status pesan pengaduan dikirim</p>
              </div>
              <div>
                <h1 className="font-bold text-lg text-[#5CBE0E]">Email</h1>
                <p className="text-black">Cara pembaruan status pesan pengaduan dikirim</p>
              </div>
            </div>
          </div>
        </>
      </Modal>

      <div className="bg-black sticky top-0 z-[99]">
        <div className="flex items-center justify-between px-[40px]">
          <img src={Logo} alt="" className="w-[5%]" />
          <div className="flex items-center space-x-10">
            <button>
              <img src={Keranjang} alt="" />
            </button>
            <button onClick={() => navigate('/login')}>
              <img src={Profile} alt="" />
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar

import React from 'react'
import { BsCaretDownFill as PiCaretDownBold } from "@react-icons/all-files/bs/BsCaretDownFill";

function Header() {
  return (
    <div className='p-3 shadow-xl'>
      <div className='max-w-[1200px] mx-auto flex items-center'>
        <div className='Logo'>
            <img className='h-[60px]' src="src/assets/logo.svg" alt="" />
        </div>
        <div className='Location p-[20px]'>
            <span className='border-b-[3px] font-bold border-black hover:text-[#fc8019] hover:border-[#fc8019]'>Ratanda</span> Jodhpur, Rajasthan, India < PiCaretDownBold className='inline text-[0.9rem] text-[#fc8019]'/>
        </div>
      </div>
    </div>
  )
}

export default Header

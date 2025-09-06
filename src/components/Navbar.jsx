import React from 'react'
import logo from '../assets/images/Logo.svg'
import { Link } from 'react-router'
const Navbar = () => {
  return (
    <>
      <nav className='bg-transparent py-[22px]'>
        <div className="container">
          <div id="Nav-Row" className='flex items-center justify-between'>
            {/* ---------------Nav Image----------- */}
            <div>
              <img src={logo} alt="Logo" />
            </div>
            {/* ---------------Nav Links----------- */}
            <div className='text-[#FBFBFB] font-dmSans text-lg flex items-center gap-[30px]'>
              <Link to={'/'} id='HoverLinks'>Home</Link>
              <Link to={'/'} id='HoverLinks'>About</Link>
              <Link to={'/'} id='HoverLinks'>Contact Us</Link>
            </div>
            {/* ---------------Nav Button----------- */}
            <div>
              <button className='bg-white text-primary font-dmSans text-lg py-[10px] px-[15px] rounded-full cursor-pointer ContactButton'>Get in Touch</button>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar
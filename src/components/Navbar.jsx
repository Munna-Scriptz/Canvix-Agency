import React from 'react'
import logo from '../assets/images/Logo.svg'
import { Link } from 'react-router'
const Navbar = () => {
  return (
    <>
      <nav className='bg-transparent py-[22px] lg:block hidden'>
        <div className="container">
          <div id="Nav-Row" className='flex items-center justify-between'>
            {/* ---------------Nav Image----------- */}
            <Link to={'/'}>
              <img src={logo} alt="Logo" data-aos="fade-down" data-aos-easing="ease-in-sine" data-aos-delay="800"/>
            </Link>
            {/* ---------------Nav Links----------- */}
            <div className='text-[#FBFBFB] font-dmSans text-lg flex items-center gap-[30px]'>
              <Link to={'/'} id='HoverLinks' data-aos="fade-down" data-aos-easing="ease-in-sine" data-aos-delay="1000">Home</Link>
              <Link to={'/about'} id='HoverLinks' data-aos="fade-down" data-aos-easing="ease-in-sine" data-aos-delay="1200">About</Link>
              <Link to={'/contact'} id='HoverLinks' data-aos="fade-down" data-aos-easing="ease-in-sine" data-aos-delay="1400">Contact Us</Link>
            </div>
            {/* ---------------Nav Button----------- */}
            <div data-aos="fade-down" data-aos-easing="ease-in-sine" data-aos-delay="1800">
              <button className='bg-white text-primary font-dmSans text-lg py-[10px] px-[15px] rounded-full cursor-pointer ContactButton'>Get in Touch</button>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar
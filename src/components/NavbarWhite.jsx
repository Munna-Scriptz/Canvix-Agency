import React from 'react'
import logo from '../assets/images/logoBlack.svg'
import { Link } from 'react-router'

const NavbarWhite = () => {
  return (
    <>
        <nav className='bg-transparent py-[22px]'>
            <div className="container">
            <div id="Nav-Row" className='flex items-center justify-between'>
                {/* ---------------Nav Image----------- */}
                <Link to={'/'}>
                  <img src={logo} alt="Logo" />
                </Link>
                {/* ---------------Nav Links----------- */}
                <div className='text-primary font-dmSans text-lg flex items-center gap-[30px]'>
                <Link to={'/'} id='HoverLinksBlack'>Home</Link>
                <Link to={'/about'} id='HoverLinksBlack'>About</Link>
                <Link to={'/contact'} id='HoverLinksBlack'>Contact Us</Link>
                </div>
                {/* ---------------Nav Button----------- */}
                <div>
                <button className='bg-second text-borderCol font-dmSans text-lg py-[10px] px-[15px] rounded-full cursor-pointer ContactButtonBlack'>Get in Touch</button>
                </div>
            </div>
            </div>
        </nav>
    </>
  )
}

export default NavbarWhite
import React from 'react'
import logo from '../assets/images/Logo.svg'
import { Link } from 'react-router'
import { SlSocialFacebook } from 'react-icons/sl'
import { PiInstagramLogoThin } from 'react-icons/pi'
import { AiOutlineInstagram } from 'react-icons/ai'
import { CiLinkedin } from 'react-icons/ci'
const Footer = () => {
  return (
    <>
        <footer className='mt-[112px] bg-primary pt-[100px]'>
            <div className="container">
                <div id="Footer-Row" className='flex items-start justify-between'>
                    {/* ---------------------First Row------------------------- */}
                    <div>
                        <Link to={'/'}><img className='w-[200px]' src={logo} alt="Logo" /></Link>
                        <p className='font-dmSans text-white text-lg mt-6 lg:w-[357px] w-full'>We’re a team of strategic creator and digital innovator, united focus in our pursuit of mastery and joyful.</p>
                    </div>
                    {/* ---------------------Second Row------------------------- */}
                    <div>
                        <h2 className='font-roboto font-semibold text-xl text-white'>Pages</h2>
                        <ul className='text-borderCol text-base flex flex-col gap-4 mt-6 opacity-[.8]'>
                            <li><Link to={'/'}>Home</Link></li>
                            <li><Link to={'/'}>Home 2</Link></li>
                            <li><Link to={'/about'}>About</Link></li>
                            <li><Link to={'/contact'}>Contact Us </Link></li>
                            <li><Link to={'/'}>Portfolio</Link></li>
                            <li><Link to={'/'}>Portfolio Single</Link></li>
                        </ul>
                    </div>
                    {/* ---------------------Third Row------------------------- */}
                    <div>
                        <h2 className='font-roboto font-semibold text-xl text-white'>Utility Pages </h2>
                        <ul className='text-borderCol text-base flex flex-col gap-4 mt-6 opacity-[.8]'>
                            <li><Link to={'/'}>Style Guide </Link></li>
                            <li><Link to={'/'}>Instruction</Link></li>
                            <li><Link to={'/'}>License </Link></li>
                            <li><Link to={'/'}>Changelog</Link></li>
                            <li><Link to={'/'}>Error 40</Link></li>
                            <li><Link to={'/'}>Password Protected  </Link></li>
                        </ul>
                    </div>
                    {/* ---------------------Fourth Row------------------------- */}
                    <div>
                        <h2 className='font-roboto font-semibold text-xl text-white'>Subscribe </h2>
                        <div className='relative bg-white rounded-full w-[323px] h-[52px] mt-6'>
                            <input className='py-[22px] pl-[24px] h-full w-full outline-none' type="text" placeholder='Enter your email here'/>
                            <button className='absolute top-1/2 right-2 -translate-y-1/2 bg-[#0C0C0CE5] text-white font-dmSans text-base py-[8px] px-[16px] rounded-full cursor-pointer'>Subscribe</button>
                        </div>
                    </div>
                </div>

                <div id='Footer-Second-row' className='border-t border-borderCol mt-[100px] pt-[30px] pb-[60px] flex items-center justify-between'>
                    <div>
                        <h2 className='font-roboto font-semibold text-xl text-borderCol'>Copyright by</h2>
                        <p className='font-dmSans text-xl text-borderCol mt-[16px]'>Designed by Munna-Scriptz</p>
                    </div>
                    <div>
                        <h2 className='font-roboto font-semibold text-xl text-borderCol'>Contact Us</h2>
                        <p className='font-dmSans text-xl text-borderCol mt-[16px]'>munnascriptz@gmail.com</p>
                    </div>
                    <div>
                        <h2 className='font-roboto font-semibold text-xl text-borderCol'>Address</h2>
                        <p className='font-dmSans text-xl text-borderCol mt-[16px]'>119 Tanglewood Lane Gulfport</p>
                    </div>

                    <div className='flex items-center gap-[15px]'>
                        <Link to={'/'} className='bg-borderCol text-primary w-[50px] h-[50px] rounded-full flex items-center justify-center text-2xl cursor-pointer hover:bg-primary hover:text-borderCol duration-[.3s] border-borderCol hover:border-1'>
                            <SlSocialFacebook />
                        </Link>
                        <Link to={'/'} className='bg-borderCol text-primary w-[50px] h-[50px] rounded-full flex items-center justify-center text-2xl cursor-pointer hover:bg-primary hover:text-borderCol duration-[.3s] border-borderCol hover:border-1'>
                            <AiOutlineInstagram />
                        </Link>
                        <Link to={'/'} className='bg-borderCol text-primary w-[50px] h-[50px] rounded-full flex items-center justify-center text-2xl cursor-pointer hover:bg-primary hover:text-borderCol duration-[.3s] border-borderCol hover:border-1'>
                            <CiLinkedin />
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    </>
  )
}

export default Footer
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
                <div id="Footer-Row" className='flex flex-wrap md:gap-0 gap-15  items-start justify-between'>
                    {/* ---------------------First Row------------------------- */}
                    <div>
                        <Link to={'/'}><img className='w-[160px]' src={logo} alt="Logo" data-aos="fade-up"/></Link>
                        <p className='font-dmSans text-white lg:text-lg mt-6 lg:w-[357px] w-full' data-aos="fade-up">We’re a team of strategic creator and digital innovator, united focus in our pursuit of mastery and joyful.</p>
                    </div>
                    {/* ---------------------Second Row------------------------- */}
                    <div>
                        <h2 className='font-roboto font-semibold text-xl text-white' data-aos="fade-up">Pages</h2>
                        <ul className='text-borderCol text-base flex flex-col gap-4 mt-6 opacity-[.8]' data-aos="fade-up">
                            <li><Link id='HoverLinks' to={'/'} data-aos="fade-up">Home</Link></li>
                            <li><Link id='HoverLinks' to={'/'} data-aos="fade-up">Home 2</Link></li>
                            <li><Link id='HoverLinks' to={'/about'} data-aos="fade-up">About</Link></li>
                            <li><Link id='HoverLinks' to={'/contact'} data-aos="fade-up">Contact Us </Link></li>
                            <li><Link id='HoverLinks' to={'/'} data-aos="fade-up">Portfolio</Link></li>
                            <li><Link id='HoverLinks' to={'/'} data-aos="fade-up">Portfolio Single</Link></li>
                        </ul>
                    </div>
                    {/* ---------------------Third Row------------------------- */}
                    <div>
                        <h2 className='font-roboto font-semibold text-xl text-white' data-aos="fade-up">Utility Pages </h2>
                        <ul className='text-borderCol text-base flex flex-col gap-4 mt-6 opacity-[.8]'>
                            <li data-aos="fade-up"><Link id='HoverLinks' to={'/'}>Style Guide </Link></li>
                            <li data-aos="fade-up"><Link id='HoverLinks' to={'/'}>Instruction</Link></li>
                            <li data-aos="fade-up"><Link id='HoverLinks' to={'/'}>License </Link></li>
                            <li data-aos="fade-up"><Link id='HoverLinks' to={'/'}>Changelog</Link></li>
                            <li data-aos="fade-up"><Link id='HoverLinks' to={'/'}>Error 40</Link></li>
                            <li data-aos="fade-up"><Link id='HoverLinks' to={'/'}>Password Protected  </Link></li>
                        </ul>
                    </div>
                    {/* ---------------------Fourth Row------------------------- */}
                    <div>
                        <h2 className='font-roboto font-semibold text-xl text-white' data-aos="fade-up">Subscribe </h2>
                        <div className='relative bg-white rounded-full w-[323px] h-[52px] mt-6' data-aos="fade-up">
                            <input className='py-[22px] pl-[24px] h-full w-full outline-none' type="text" placeholder='Enter your email here'/>
                            <button className='absolute top-1/2 right-2 -translate-y-1/2 bg-[#0C0C0CE5] text-white font-dmSans text-base py-[8px] px-[16px] rounded-full cursor-pointer hover:bg-brand duration-300 hover:text-primary'>Subscribe</button>
                        </div>
                    </div>
                </div>
                {/* --------------------------Bottom Header------------------------ */}
                <div id='Footer-Second-row' className='border-t border-borderCol mt-[100px] pt-[30px] pb-[60px] flex flex-wrap md:gap-0 gap-10 items-center justify-between'>
                    <div>
                        <h2 className='font-roboto font-semibold md:text-xl text-borderCol' data-aos="fade-up" data-aos-offset="0">Copyright by</h2>
                        <p className='font-dmSans md:text-xl text-borderCol md:mt-[16px] mt-3' data-aos="fade-up" data-aos-offset="0">Designed by Munna-Scriptz</p>
                    </div>
                    <div>
                        <h2 className='font-roboto font-semibold md:text-xl text-borderCol' data-aos="fade-up" data-aos-offset="0">Contact Us</h2>
                        <p className='font-dmSans md:text-xl text-borderCol md:mt-[16px] mt-3' data-aos="fade-up" data-aos-offset="0">munnascriptz@gmail.com</p>
                    </div>
                    <div>
                        <h2 className='font-roboto font-semibold md:text-xl text-borderCol' data-aos="fade-up" data-aos-offset="0">Address</h2>
                        <p className='font-dmSans md:text-xl text-borderCol md:mt-[16px] mt-3' data-aos="fade-up" data-aos-offset="0">119 Tanglewood Lane Gulfport</p>
                    </div>

                    <div className='flex items-center gap-[15px]'>
                        <Link to={'/'} className='bg-borderCol text-primary w-[50px] h-[50px] rounded-full flex items-center justify-center text-2xl cursor-pointer hover:bg-primary hover:text-borderCol duration-[.3s] border-borderCol hover:border-1' data-aos="fade-up" data-aos-offset="0">
                            <SlSocialFacebook />
                        </Link>
                        <Link to={'/'} className='bg-borderCol text-primary w-[50px] h-[50px] rounded-full flex items-center justify-center text-2xl cursor-pointer hover:bg-primary hover:text-borderCol duration-[.3s] border-borderCol hover:border-1' data-aos="fade-up" data-aos-offset="0">
                            <AiOutlineInstagram />
                        </Link>
                        <Link to={'/'} className='bg-borderCol text-primary w-[50px] h-[50px] rounded-full flex items-center justify-center text-2xl cursor-pointer hover:bg-primary hover:text-borderCol duration-[.3s] border-borderCol hover:border-1' data-aos="fade-up" data-aos-offset="0">
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
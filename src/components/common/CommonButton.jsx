import React from 'react'
import { IoIosArrowForward } from 'react-icons/io'

const CommonButton = () => {
  return (
    <>
    <button data-aos="fade-right" data-aos-easing="ease-in-sine" data-aos-delay="1800" className="relative bg-white text-white font-medium md:text-[17px] text-sm px-5 py-[12px] pl-5 lg:h-[48px] h-[40px] rounded-full flex items-center overflow-hidden cursor-pointer group">
        <div className="absolute left-[0.3em] bg-second h-[2.2em] w-[2.2em] rounded-full flex items-center justify-center duration-[.3s] group-hover:w-[calc(100%-0.6em)] active:scale-95">
            <IoIosArrowForward fill='#fff' />
        </div>
        <span className="ml-8 font-dmSans lg:text-xl text-base text-primary">Start your Free Trial</span>
    </button>
    </>
  )
}

export default CommonButton
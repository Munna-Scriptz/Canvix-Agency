import React from 'react'
import AboutImg from '../../assets/images/HomeAbtImg.png'
import CommonHead from '../common/CommonHead'
import CommonButton from '../common/CommonButton'
const HomeAbout = () => {
  return (
    <>
    <section id='HomeAbout' className='lg:mt-[223px] mt-[112px] bg-primary lg:py-[100px] py-[50px] overflow-hidden'>
        <div className="container">
            <div id="HomeAbout-Row" className='flex lg:flex-row flex-col items-center justify-between gap-[70px]'>
                {/* -----------------About Image----------------- */}
                <div data-aos="fade-right">
                    <img src={AboutImg} alt="Image" />
                </div>
                {/* -----------------About Text----------------- */}
                <div className='lg:w-[586px]'>
                    <div>
                        <p className='text-brand font-roboto font-semibold lg:text-[30px] text-2xl lg:mb-[24px] mb-3' data-aos="fade-left">About us </p>
                        <h2 className='text-borderCol font-roboto font-semibold lg:text-[54px] text-[32px] lg:mb-[24px] mb-[16px] mx-auto' data-aos="fade-left">The core mission behind all our work</h2>
                    </div>
                    <p className='text-[#F4F4F4] font-dmSans lg:text-lg text-sm' data-aos="fade-left">Lorem ipsum dolor sit amet, consectetur adipiscing elit metus ut tortor purus tincidunt sed lectus ut eros, turpis tincidunt id.</p>
                    <div className='mt-[25px] flex items-center gap-[59px]'>
                        <div data-aos="fade-left">
                            <p className='font-roboto text-brand lg:text-[45px] text-[28px] font-semibold'>330 +</p>
                            <p className='font-dmSans text-borderCol lg:text-base text-sm'>Companies helped</p>
                        </div>
                        <div data-aos="fade-left">
                            <p className='font-roboto text-brand lg:text-[45px] text-[28px] font-semibold'>230 +</p>
                            <p className='font-dmSans text-borderCol lg:text-base text-sm'>Revenue generated</p>
                        </div>
                    </div>
                    <div className='mt-[32px]'>
                        <CommonButton/>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default HomeAbout
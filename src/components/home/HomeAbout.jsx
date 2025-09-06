import React from 'react'
import AboutImg from '../../assets/images/HomeAbtImg.png'
import CommonHead from '../common/CommonHead'
import CommonButton from '../common/CommonButton'
const HomeAbout = () => {
  return (
    <>
    <section id='HomeAbout' className='mt-[223px] bg-primary py-[100px]'>
        <div className="container">
            <div id="HomeAbout-Row" className='flex items-center justify-between gap-[70px]'>
                {/* -----------------About Image----------------- */}
                <div>
                    <img src={AboutImg} alt="Image" />
                </div>
                {/* -----------------About Text----------------- */}
                <div className='w-[586px]'>
                    <div>
                        <p className='text-brand font-roboto font-semibold text-[30px] mb-[24px]'>About us </p>
                        <h2 className='text-borderCol font-roboto font-semibold text-[54px] mb-[24px] mx-auto'>The core mission behind all our work</h2>
                    </div>
                    <p className='text-[#F4F4F4] font-dmSans text-lg'>Lorem ipsum dolor sit amet, consectetur adipiscing elit metus ut tortor purus tincidunt sed lectus ut eros, turpis tincidunt id.</p>
                    <div className='mt-[25px] flex items-center gap-[59px]'>
                        <div>
                            <p className='font-roboto text-brand text-[45px] font-semibold'>330 +</p>
                            <p className='font-dmSans text-borderCol text-base'>Companies helped</p>
                        </div>
                        <div>
                            <p className='font-roboto text-brand text-[45px] font-semibold'>230 +</p>
                            <p className='font-dmSans text-borderCol text-base'>Revenue generated</p>
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
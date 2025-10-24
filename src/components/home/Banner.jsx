import React from 'react'
import { IoIosArrowForward } from 'react-icons/io'
import bannerImage from '../../assets/images/BannerImg.png'
import brand1 from '../../assets/images/brand1.png'
import brand2 from '../../assets/images/brand2.png'
import brand3 from '../../assets/images/brand3.png'
import brand4 from '../../assets/images/brand4.png'
import CommonButton from '../common/CommonButton'

const Banner = () => {
  return (
    <>
    <section id='Banner' className='overflow-hidden'>
        <div className="container">
            <div id="Banner-Row" className='flex lg:flex-row flex-col items-center justify-between lg:pt-0 pt-8'>
                {/* ---------------Banner Text----------------- */}
                <div className='lg:w-[609px]'>
                    <h1 className='font-roboto font-semibold lg:text-[54px] text-[32px] text-[#FBFBFB] lg:leading-[120%] leading-[130%]' data-aos="fade-right" data-aos-easing="ease-in-sine" data-aos-delay="1000">Ready to take your <span className='text-brand'>Business Growth</span> to the next level?</h1>
                    <p className='text-[#FBFBFB] font-dmSans lg:text-lg text-sm lg:w-[557px] mt-[24px] mb-[32px]' data-aos="fade-right" data-aos-easing="ease-in-sine" data-aos-delay="1800">Lorem ipsum dolor sit amet, consectetur adipiscing elit- et ut massa libero egestas malesuada viverra gravida libero cursus nulla leo pulvinar.</p>
                    {/* ----------Start Button----------- */}
                    <CommonButton/>
                </div>
                {/* ---------------Banner Text----------------- */}
                <div data-aos="fade-left" data-aos-easing="ease-in-sine" data-aos-delay="2000">
                    <img src={bannerImage} alt="Banner Image" />
                </div>
            </div>
            {/* ---------------Brands---------------- */}
            <div className='lg:mt-[46px] mt-[30px]'>
                <p className='font-roboto font-semibold text-xl text-brand ml-4 mb-2' data-aos="fade-right">Trusted by Leading Brands</p>
                <div className='flex items-center flex-wrap'>
                    <img className='lg:w-auto w-[160px]' src={brand1} alt="brands" data-aos="fade-up"/>
                    <img className='lg:w-auto w-[160px]' src={brand2} alt="brands" data-aos="fade-up"/>
                    <img className='lg:w-auto w-[160px]' src={brand3} alt="brands" data-aos="fade-up"/>
                    <img className='lg:w-auto w-[160px]' src={brand4} alt="brands" data-aos="fade-up"/>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default Banner
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
    <section id='Banner'>
        <div className="container">
            <div id="Banner-Row" className='flex items-center justify-between'>
                {/* ---------------Banner Text----------------- */}
                <div className='w-[609px]'>
                    <h1 className='font-roboto font-semibold text-[54px] text-[#FBFBFB] leading-[120%]'>Ready to take your <span className='text-brand'>Business Growth</span> to the next level?</h1>
                    <p className='text-[#FBFBFB] font-dmSans text-lg w-[557px] mt-[24px] mb-[32px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit- et ut massa libero egestas malesuada viverra gravida libero cursus nulla leo pulvinar.</p>
                    {/* ----------Start Button----------- */}
                    <CommonButton/>
                </div>
                {/* ---------------Banner Text----------------- */}
                <div>
                    <img src={bannerImage} alt="Banner Image" />
                </div>
            </div>
            {/* ---------------Brands---------------- */}
            <div className='mt-[46px]'>
                <p className='font-roboto font-semibold text-xl text-brand ml-4 mb-2'>Trusted by Leading Brands</p>
                <div className='flex'>
                    <img src={brand1} alt="brands" />
                    <img src={brand2} alt="brands" />
                    <img src={brand3} alt="brands" />
                    <img src={brand4} alt="brands" />
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default Banner
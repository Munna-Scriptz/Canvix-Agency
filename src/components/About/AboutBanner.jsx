import React from 'react'
import aboutPfp from '../../assets/images/aboutPfp.png'
import BannerImg from '../../assets/images/aboutBannerImage.png'
import { FaStar } from 'react-icons/fa'
const AboutBanner = () => {
  return (
    <>
        <section id='About-Banner' className='lg:mt-[67px] mt-[32px] overflow-hidden'>
            <div className="lg:mx-[50px]">
                <div id="About-Banner-Row" className='bg-primary lg:pt-[92px] pt-[62px] lg:pl-[72px] px-[22px] pb-[25px] rounded-[20px] flex flex-wrap items-center justify-between' data-aos="fade-up" data-aos-easing="ease-in-sine" data-aos-delay="1000">
                    {/* -----------------------Left Side---------------------- */}
                    <div className='lg:w-[541px]'>
                        <h2 className='text-white font-dmSans lg:text-lg mb-2' data-aos="fade-right" data-aos-easing="ease-in-sine" data-aos-delay="1200">Pleasure and so read the was hope.</h2>
                        <h1 className='text-white lg:text-[60px] text-[32px] font-semibold leading-[130%] font-roboto' data-aos="fade-right" data-aos-easing="ease-in-sine" data-aos-delay="1400">Ready to take <span className='text-brand'>your business</span> <br /> to the next level?</h1>
                        <p className='text-borderCol lg:text-lg font-dmSans mt-6 mb-10' data-aos="fade-right" data-aos-easing="ease-in-sine" data-aos-delay="1600">Lorem ipsum dolor sit amet, consectetur adipiscing elit- et ut massa libero egestas malesuada viverra gravida libero cursus nulla leo pulvinar.</p>
                        <div className='flex items-center gap-3 lg:mb-0 mb-10' data-aos="fade-right" data-aos-easing="ease-in-sine" data-aos-delay="1800">
                            <img src={aboutPfp} alt="Profile" />
                            <div>
                                <h2 className='text-white font-roboto font-semibold lg:text-xl mb-1'>Rated 4.9/5 stars</h2>
                                <div className='flex items-center gap-1 text-white lg:text-xl text-sm'>
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* -----------------------Right Side---------------------- */}
                    <div className='max-w-[600px]' data-aos="fade-left" data-aos-easing="ease-in-sine" data-aos-delay="1800">
                        <img src={BannerImg} alt="Banner Image" />
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default AboutBanner
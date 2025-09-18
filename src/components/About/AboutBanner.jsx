import React from 'react'
import aboutPfp from '../../assets/images/aboutPfp.png'
import BannerImg from '../../assets/images/aboutBannerImage.png'
import { FaStar } from 'react-icons/fa'
const AboutBanner = () => {
  return (
    <>
        <section id='About-Banner' className='mt-[67px]'>
            <div className="mx-[50px]">
                <div id="About-Banner-Row" className='bg-primary pt-[92px] pl-[72px] pb-[25px] rounded-[20px] flex items-center justify-between'>
                    {/* -----------------------Left Side---------------------- */}
                    <div className='w-[541px]'>
                        <h2 className='text-white font-dmSans text-lg mb-2'>Pleasure and so read the was hope.</h2>
                        <h1 className='text-white text-[60px] font-semibold leading-[130%] font-roboto'>Ready to take <span className='text-brand'>your business</span> <br /> to the next level?</h1>
                        <p className='text-borderCol text-lg font-dmSans mt-6 mb-10'>Lorem ipsum dolor sit amet, consectetur adipiscing elit- et ut massa libero egestas malesuada viverra gravida libero cursus nulla leo pulvinar.</p>
                        <div className='flex items-center gap-3'>
                            <img src={aboutPfp} alt="Profile" />
                            <div>
                                <h2 className='text-white font-roboto font-semibold text-xl mb-1'>Rated 4.9/5 stars</h2>
                                <div className='flex items-center gap-1 text-white text-xl'>
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
                    <div className='max-w-[600px]'>
                        <img src={BannerImg} alt="Banner Image" />
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default AboutBanner
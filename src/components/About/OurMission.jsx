import React from 'react'
import { FaCheck } from 'react-icons/fa'
import mission1 from '../../assets/images/missionImg1.png'
import mission2 from '../../assets/images/missionImg2.png'
import multiImg from '../../assets/images/missonMultiImg.svg'


const OurMission = () => {
    const CheckBoxes = [
        {
            text: 'Moonlight newspaper left its enjoyment',
        },
        {
            text: 'Rooms oh fully taken by worse.',
        },
        {
            text: 'She new course gets living.',
        },
        {
            text: 'Perceived end certainly day.',
        },
        {
            text: 'She new course gets living.',
        },
        {
            text: 'Preference any astonished unreserved.',
        }
    ]
    return (
        <>
            <section id='Our-Mission' className='bg-primary mt-[100px] md:pt-[100px] pt-[60px] pb-[133px] overflow-hidden'>
                <div className="lg:mx-[60px] mx-[16px]">
                    <div id="Our-Mission-Row" className='flex lg:flex-nowrap flex-wrap items-center justify-between'>
                        {/* ----------------------Left Side------------------------ */}
                        <div className='lg:w-[600px]'>
                            <p className='text-brand font-roboto font-bold lg:text-[25px] text-lg mb-6' data-aos="fade-right">Our Mission</p>
                            <h2 className='text-white font-semibold lg:text-[64px] text-[32px] font-roboto leading-[120%] md:mb-8 mb-6' data-aos="fade-right">Boost your with your business.</h2>
                            <p className='text-borderCol font-dmSans lg:text-lg mb-[48px]' data-aos="fade-right">He moonlights difficult engrossed it, sportsmen. Interested has all Devonshire difficulty gay assistance joy.</p>

                            <div className='flex items-center lg:gap-[18px] gap-[12px] flex-wrap'>
                                {
                                    CheckBoxes.map((item, i) => (
                                        <div key={i} className='flex items-center gap-2' data-aos="fade-right">
                                            <div className='w-[17px] h-[17px] bg-brand text-primary rounded-full text-[11px] flex items-center justify-center'>
                                                <FaCheck />
                                            </div>
                                            <p className='text-borderCol font-dmSans md:text-lg'>{item.text}</p>
                                        </div>
                                    ))
                                }
                            </div>

                        </div>
                        {/* ----------------------Right Side------------------------ */}
                        <div className='flex lg:flex-nowrap flex-wrap items-end lg:mt-0 mt-10'>
                            <div className='relative'>
                                <img src={mission1} alt="Image" data-aos="fade-left"/>
                                <div className='flex animate-wiggle items-center mt-[20px] lg:mb-0 mb-10'>
                                    <div className='lg:w-[167px] lg:ml-[35px]' data-aos="fade-left">
                                        <h2 className='text-white font-roboto lg:text-[42px] text-[24px] font-bold text-center'>10k</h2>
                                        <p className='text-borderCol font-dmSans lg:mt-[16px] mt-[12px] lg:text-base text-sm text-center'>Great conversations per month</p>
                                    </div>

                                    {/* ------Border----- */}
                                    <div className='h-[123px] bg-white w-[1px] lg:mx-[23px] mx-[10px]' data-aos="fade-left">

                                    </div>
                                    {/* ------Border----- */}

                                    <div className='lg:w-[167px] mt-[90px]' data-aos="fade-left">
                                        <h2 className='text-white font-roboto lg:text-[42px] text-[24px] font-bold text-center'>95+</h2>
                                        <p className='text-borderCol font-dmSans lg:mt-[16px] mt-[12px] lg:text-base text-sm text-center'>Project Complete </p>
                                    </div>
                                </div>
                                {/* ---------Floating Div-------- */}
                                <div className='absolute animate-bounce lg:top-[71px] lg:right-[-90px] bg-white rounded-[20px] p-[20px] w-[200px] h-[116px]'>
                                    <p className='text-center text-primary font-dmSans text-lg mb-2.5'>Team Members</p>
                                    <img src={multiImg} alt="Many Pfp" />
                                </div>
                            </div>
                            <div className='lg:block hidden' data-aos="fade-left">
                                <img src={mission2} alt="Image" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default OurMission
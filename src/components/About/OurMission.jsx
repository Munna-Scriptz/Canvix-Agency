import React from 'react'
import { FaCheck } from 'react-icons/fa'
import mission1 from '../../assets/images/missionImg1.png'
import mission2 from '../../assets/images/missionImg2.png'
import multiImg from '../../assets/images/missonMultiImg.svg'


const OurMission = () => {
    const CheckBoxes = [
        {
            text: 'Moonlight newspaper up its enjoyment',
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
            text: 'Preference any astonished unreserved Mrs.',
        }
    ]
  return (
    <>
        <section id='Our-Mission' className='bg-primary mt-[100px] pt-[100px] pb-[133px]'>
            <div className="mx-[60px]">
                <div id="Our-Mission-Row" className='flex items-center justify-between'>
                    {/* ----------------------Left Side------------------------ */}
                    <div className='w-[600px]'>
                        <p className='text-brand font-roboto font-bold text-[25px] mb-6'>Our Mission</p>
                        <h2 className='text-white font-semibold text-[64px] font-roboto leading-[120%] mb-8'>Boost your with your business.</h2>
                        <p className='text-borderCol font-dmSans text-lg mb-[48px]'>He moonlights difficult engrossed it, sportsmen. Interested has all Devonshire difficulty gay assistance joy.</p>
                        
                        <div className='flex items-center gap-[18px] flex-wrap'>
                            {
                                CheckBoxes.map((item , i)=>(
                                    <div key={i} className='flex items-center gap-2'>
                                        <div className='w-[17px] h-[17px] bg-brand text-primary rounded-full text-[11px] flex items-center justify-center'>
                                            <FaCheck />
                                        </div>
                                        <p className='text-borderCol font-dmSans text-lg'>{item.text}</p>
                                    </div>
                                ))
                            }
                        </div>

                    </div>
                    {/* ----------------------Right Side------------------------ */}
                    <div className='flex items-end'>
                        <div className='relative'>
                            <img src={mission1} alt="Image" />
                            <div className='flex animate-wiggle items-center mt-[20px]'>
                                <div className='w-[167px] ml-[35px]'>
                                    <h2 className='text-white font-roboto text-[42px] font-bold text-center'>10k</h2>
                                    <p className='text-borderCol font-dmSans mt-[16px] text-center'>Great conversations per month</p>
                                </div>

                                {/* ------Border----- */}
                                <div className='h-[123px] bg-white w-[1px] mx-[23px]'>

                                </div>
                                {/* ------Border----- */}

                                <div className='w-[167px] mt-[90px]'>
                                    <h2 className='text-white font-roboto text-[42px] font-bold text-center'>95+</h2>
                                    <p className='text-borderCol font-dmSans mt-[16px] text-center'>Project Complete </p>
                                </div>
                            </div>
                            {/* ---------Floating Div-------- */}
                            <div className='absolute animate-bounce top-[71px] right-[-90px] bg-white rounded-[20px] p-[20px] w-[200px] h-[116px]'>
                                <p className='text-center text-primary font-dmSans text-lg mb-2.5'>Team Members</p>
                                <img src={multiImg} alt="Many Pfp" />
                            </div>
                        </div>
                        <div>
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
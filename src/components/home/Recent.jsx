import React from 'react'
import ShowcaseSingle from '../common/ShowcaseSingle'
import showcase1 from '../../assets/images/showcase1.png'
import showcase2 from '../../assets/images/showcase2.png'
import showcase3 from '../../assets/images/showcase3.png'
import showcase4 from '../../assets/images/showcase4.png'
import CommonButton from '../common/CommonButton'
import { IoIosArrowForward } from 'react-icons/io'

const Recent = () => {
  return (
    <>
        <section id='Recent' className='mt-[112px]'>
            <div className="container">
                <div id="Recent-Row">
                    {/* -----------------Header----------------- */}
                    <h2 className='text-center font-roboto font-semibold lg:text-[54px] text-[36px] text-primary lg:mb-0 mb-10'>Recent Showcase</h2>
                    {/* -----------------ShowCase Images----------------- */}
                    <div className='flex lg:flex-row flex-col items-center justify-between'>
                        <div className='flex flex-col lg:gap-[58px] gap-[32px]'>
                            <ShowcaseSingle image={showcase1} topText={'Web UI design'} bottomText={'Creative  UI design'}/>
                            <ShowcaseSingle image={showcase2} topText={'UI design'} bottomText={'Creative Rebranding for logo'}/>
                        </div>
                        <div className='lg:mt-[172px] flex lg:flex-col flex-col-reverse lg:items-end'>
                            <button className="relative lg:mt-0 mt-10 bg-primary text-white font-medium text-[17px] px-5 py-[12px] pl-5 h-[48px] rounded-full flex items-center overflow-hidden cursor-pointer group">
                                <div className="absolute left-[0.3em] bg-borderCol text-primary h-[2.2em] w-[2.2em] rounded-full flex items-center justify-center duration-[.3s] group-hover:w-[calc(100%-0.6em)] active:scale-95">
                                    <IoIosArrowForward />
                                </div>
                                <span className="ml-8 font-dmSans text-lg text-borderCol">Start your Free Trial</span>
                            </button>
                            <div className='flex flex-col gap-[58px] mt-[51px]'>
                                <ShowcaseSingle image={showcase3} topText={'To design Digital Strategy'} bottomText={'UI Design'}/>
                                <ShowcaseSingle image={showcase4} topText={'Web UI design'} bottomText={'Creative Rebranding for logo'}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Recent
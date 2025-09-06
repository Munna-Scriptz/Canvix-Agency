import React from 'react'
import CommonHead from '../common/CommonHead'
import SingleServiceCard from '../common/SingleServiceCard'
import { BiPencil } from 'react-icons/bi'
import { LuPenTool } from 'react-icons/lu'
import { GrAnnounce } from 'react-icons/gr'
import { IoColorPaletteOutline } from 'react-icons/io5'
import { RiUserVoiceLine } from 'react-icons/ri'
import { TbDiamond } from 'react-icons/tb'

const Services = () => {
  return (
    <>
        <section id='Services' className='mt-[223px]'>
            <div className="container">
                <div id="Services-Row">
                    {/* ----------------Header-------------- */}
                    <CommonHead topText={'Our Services '} BottomText={'High-impact services for your business'}/>

                    {/* ---------------Service Cards------------- */}
                    <div className='mt-[80px] flex items-center flex-wrap justify-between gap-y-[80px]'>
                        <SingleServiceCard Icon={<BiPencil />} topText={'Content Marketing'} bottomText={'Our team creates engaging and shareable content that resonates with your audience, drives organic traffic'}/>
                        <SingleServiceCard Icon={<LuPenTool />} topText={'Graphic Design '} bottomText={'Unlock the power of visual storytelling with our expert graphic design services tailored to elevate your brand and captivate.'}/>
                        <SingleServiceCard Icon={<GrAnnounce />} topText={'Digital Marketing '} bottomText={`Elevate your brand's online presence with our data-driven digital marketing strategies. From SEO and content marketing`}/>
                        <SingleServiceCard Icon={<IoColorPaletteOutline />} topText={'Web Design'} bottomText={'We specialize in creating visually stunning, user-friendly websites that align with your brand identity and deliver an exceptional.'}/>
                        <SingleServiceCard Icon={<RiUserVoiceLine />} topText={'IT Consulting'} bottomText={'IT consulting, or information technology consulting, refers to the practice of providing advisory and implementation services'}/>
                        <SingleServiceCard Icon={<TbDiamond />} topText={'Brand Identity '} bottomText={'It involves creating a unique and recognizable identity that sets the brand apart from competitors and resonates with the target audience.'}/>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Services
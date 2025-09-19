import React from 'react'
import CommonHead from '../common/CommonHead'
import SingleProcessCard from '../common/SingleProcessCard'
import { PiLightbulb } from 'react-icons/pi'
import { GoMail } from 'react-icons/go'
import { VscSettings } from 'react-icons/vsc'
import { LuCheckCheck } from 'react-icons/lu'

const Process = () => {
  return (
    <>
       <section id='Process' className='mt-[112px]'>
            <div className="container">
                <div className="Process-Row">
                    {/* ----------------Header---------------- */}
                    <CommonHead topText={'Process'} BottomText={'Process that moves things forward'}/>
                    {/* ----------------process cards---------------- */}
                    <div className='flex lg:flex-row flex-col lg:gap-y-0 gap-y-4 items-center justify-between lg:mt-[90px] mt-[60px]'>
                        <SingleProcessCard Icon={<PiLightbulb />} TopText={'Ideate'} BottomText={'The ideation process is a crucial phase in the design process where creative thinking and brainstorming'}/>
                        <SingleProcessCard Icon={<GoMail />} TopText={'Research'} BottomText={'Research is a critical component of the design process, helping designers understand the problem'}/>
                        <SingleProcessCard Icon={<VscSettings />} TopText={'Create'} BottomText={'Designing a process involves several key steps to ensure clarity, efficiency, successful implementation'}/>
                        <SingleProcessCard Icon={<LuCheckCheck />} TopText={'Testing'} BottomText={'Testing is a crucial phase in the design process to ensure that the product or system meets the specified requirements'}/>

                    </div>
                </div>
            </div>
       </section>
    </>
  )
}

export default Process
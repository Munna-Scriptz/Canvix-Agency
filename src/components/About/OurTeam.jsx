import React from 'react'
import Team1 from '../../assets/images/TeamMember1.png'
import Team2 from '../../assets/images/TeamMember2.png'
import Team3 from '../../assets/images/TeamMember3.png'
import { Link } from 'react-router'
import { SlSocialFacebook } from 'react-icons/sl'
import { AiOutlineInstagram } from 'react-icons/ai'
import { CiLinkedin } from 'react-icons/ci'

const OurTeam = () => {
    const memberData = [
        {
            img : Team1,
            name: 'Esther Howards',
            role: 'Founder & CEO',
        },
        {
            img : Team2,
            name: 'Cameron Williamson',
            role: 'Marketing Head',
        },
        {
            img : Team3,
            name: 'Liam Cooper',
            role: 'Machine Learning',
        },
    ]
  return (
    <>
        <section id='Our-team' className='mt-[100px]'>
            <div className="container">
                <div id="Our-team-Row">
                    {/* -------------------------Header---------------------------- */}
                    <h2 className='text-center text-primary lg:text-[64px] text-[36px] font-semibold font-roboto mb-[60px]'>Our Team</h2>
                    {/* -------------------------Cards---------------------------- */}
                    <div className='flex lg:flex-nowrap flex-wrap items-center justify-between lg:gap-[74px] gap-[52px]'>
                        {
                            memberData.map((item , i)=>(
                                <div key={i} className='relative'>
                                    <img src={item.img} alt="Team Members" />
                                    <h2 className='text-primary font-roboto font-semibold text-xl mt-4'>{item.name}</h2>
                                    <p className='text-[#0C0C0CE5] text-base font-dmSans mt-[10px]'>{item.role}</p>
                                    {/* ------------Media  */}
                                    <div className='absolute top-[15px] right-[15px] flex items-center gap-[10px]'>
                                        <Link to={'/'} className='bg-borderCol text-primary w-[35px] h-[35px] rounded-full flex items-center justify-center text-xl cursor-pointer hover:bg-primary hover:text-borderCol duration-[.3s] border-borderCol hover:border-1'>
                                            <SlSocialFacebook />
                                        </Link>
                                        <Link to={'/'} className='bg-borderCol text-primary w-[35px] h-[35px] rounded-full flex items-center justify-center text-xl cursor-pointer hover:bg-primary hover:text-borderCol duration-[.3s] border-borderCol hover:border-1'>
                                            <AiOutlineInstagram />
                                        </Link>
                                        <Link to={'/'} className='bg-borderCol text-primary w-[35px] h-[35px] rounded-full flex items-center justify-center text-xl cursor-pointer hover:bg-primary hover:text-borderCol duration-[.3s] border-borderCol hover:border-1'>
                                            <CiLinkedin />
                                        </Link>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default OurTeam
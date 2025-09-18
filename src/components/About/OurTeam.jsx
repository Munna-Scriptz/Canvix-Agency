import React from 'react'
import Team1 from '../../assets/images/TeamMember1.png'
import Team2 from '../../assets/images/TeamMember2.png'
import Team3 from '../../assets/images/TeamMember3.png'

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
                    <h2 className='text-center text-primary text-[64px] font-semibold font-roboto mb-[60px]'>Our Team</h2>
                    {/* -------------------------Cards---------------------------- */}
                    <div className='flex items-center justify-between gap-[74px]'>
                        {
                            memberData.map((item , i)=>(
                                <div key={i}>
                                    <img src={item.img} alt="Team Members" />
                                    <h2 className='text-primary font-roboto font-semibold text-xl mt-4'>{item.name}</h2>
                                    <p className='text-[#0C0C0CE5] text-base font-dmSans mt-[10px]'>{item.role}</p>
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
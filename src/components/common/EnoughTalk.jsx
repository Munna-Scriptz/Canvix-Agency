import React from 'react'
import enoughBg from '../../assets/images/enoughBg.png'

const EnoughTalk = () => {
  return (
    <>
        <section id='Enough-Talk' className='mt-[100px]'>
            <div className="container">
                <div id="Enough-Talk-Row" className='pt-[45px] pb-[40px] flex flex-col items-center rounded-[20px] bg-no-repeat bg-center bg-cover' style={{background: `URL(${enoughBg})` , backgroundRepeat: 'no-repeat'}}>
                    <h2 className='text-borderCol lg:text-[45px] text-[22px] font-dmSans tracking-wider font-bold mb-6 text-center'>Enough talk, let’s get to work</h2>
                    <div>
                        <button className='bg-white text-primary font-dmSans text-lg py-[10px] px-[15px] rounded-full cursor-pointer ContactButton'>Get in Touch</button>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default EnoughTalk
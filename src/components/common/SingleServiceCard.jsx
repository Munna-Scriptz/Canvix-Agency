import React from 'react'
import { BiPencil } from 'react-icons/bi'

const SingleServiceCard = ({Icon , topText , bottomText}) => {
  return (
    <>
        <div className='bg-[#F4F4F4] p-[35px] md:w-[400px] rounded-[20px] hover:bg-primary group duration-[.3s]' data-aos="fade-up">
            <div className='w-[70px] h-[70px] rounded-full bg-primary text-[#F4F4F4] group-hover:bg-borderCol group-hover:text-primary duration-[.3s] flex items-center justify-center text-[30px]'>
              {Icon}
            </div>
            <h2 className='font-roboto font-medium md:text-[25px] text-2xl text-primary md:mt-[62px] mt-[32px] group-hover:text-borderCol'>{topText} </h2>
            <p className='font-dmSans text-lg text-primary mt-[15px] group-hover:text-borderCol'>{bottomText}</p>

        </div>
    </>
  )
}

export default SingleServiceCard
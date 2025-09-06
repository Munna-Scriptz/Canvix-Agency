import React from 'react'

const SingleProcessCard = ({Icon , TopText , BottomText}) => {
  return (
    <>
        <div className='bg-[#F4F4F4] p-[20px] w-[280px] rounded-[20px] hover:bg-primary group duration-[.3s]'>
            <div className='flex items-center gap-[19px]'>
                <div className='w-[60px] h-[60px] rounded-full bg-primary text-[#F4F4F4] group-hover:bg-borderCol group-hover:text-primary duration-[.3s] flex items-center justify-center text-[30px]'>
                    {Icon}
                </div>
                <h2 className='font-roboto font-medium text-[25px] text-primary group-hover:text-borderCol'>{TopText} </h2>

            </div>
            <p className='font-dmSans text-base text-primary mt-[30px] group-hover:text-borderCol'>{BottomText}</p>
        </div>
    </>
  )
}

export default SingleProcessCard
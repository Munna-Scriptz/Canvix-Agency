import React from 'react'

const CommonHead = ({topText , BottomText}) => {
  return (
    <>
        <div>
            <p className='text-brand font-roboto font-semibold lg:text-[30px] text-xl lg:mb-[24px] mb-3 text-center'>{topText} </p>
            <h2 className='text-primary font-roboto font-semibold lg:text-[44px] text-[26px] mb-[24px] text-center lg:w-[695px] mx-auto'>{BottomText}</h2>
        </div>
    </>
  )
}

export default CommonHead
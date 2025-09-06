import React from 'react'

const CommonHead = ({topText , BottomText}) => {
  return (
    <>
        <div>
            <p className='text-brand font-roboto font-semibold text-[30px] mb-[24px] text-center'>{topText} </p>
            <h2 className='text-primary font-roboto font-semibold text-[44px] mb-[24px] text-center w-[695px] mx-auto'>{BottomText}</h2>
        </div>
    </>
  )
}

export default CommonHead
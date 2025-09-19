import React from 'react'

const ShowcaseSingle = ({image , topText , bottomText}) => {
  return (
    <div className='lg:w-[580px] w-full'>
        <img src={image} alt="Showcase Image" />
        <h2 className='text-primary font-roboto font-semibold lg:text-[30px] text-xl mt-[16px]'>{topText}</h2>
        <p className='text-primary font-dmSans lg:text-lg text-sm mt-[5px]'>{bottomText}</p>
    </div>
  )
}

export default ShowcaseSingle
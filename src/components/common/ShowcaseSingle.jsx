import React from 'react'

const ShowcaseSingle = ({image , topText , bottomText}) => {
  return (
    <div className='w-[580px]'>
        <img src={image} alt="Showcase Image" />
        <h2 className='text-primary font-roboto font-semibold text-[30px] mt-[16px]'>{topText}</h2>
        <p className='text-primary font-dmSans text-lg mt-[5px]'>{bottomText}</p>
    </div>
  )
}

export default ShowcaseSingle
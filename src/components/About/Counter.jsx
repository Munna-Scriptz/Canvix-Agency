import React from 'react'

const Counter = () => {
    const CounterData = [
        {
            number: '200',
            name : 'We’re a family',
            details: 'Speedily say has suitable disposal add boy. On fourth doubt miles of child. Exercise joy man children rejoiced.'
        },
        {
            number: '99%',
            name : 'Graphic Design ',
            details: 'Speedily say has suitable disposal add boy. On fourth doubt miles of child. Exercise joy man children rejoiced.'
        },
        {
            number: '1.5M+',
            name : 'Digital Marketing ',
            details: 'Speedily say has suitable disposal add boy. On fourth doubt miles of child. Exercise joy man children rejoiced.'
        },
    ]
  return (
    <>
        <section id='Counter' className='mt-[101px]'>
            <div className="container">
                <div id="Counter-Row" className='flex items-center justify-center gap-[66px]'>
                    {
                        CounterData.map((item , idx)=>(
                            <div className='w-[422px] flex flex-col items-center'>
                                <h2 className='text-primary font-roboto font-semibold text-[45px]'>{item.number}</h2>
                                <p className='text-primary font-dmSans font-medium text-[25px] mt-4 mb-5'>{item.name}</p>
                                <p className='text-[#0C0C0CE5] font-dmSans tracking-[3%] font-normal text-[18px] text-center'>{item.details}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    </>
  )
}

export default Counter
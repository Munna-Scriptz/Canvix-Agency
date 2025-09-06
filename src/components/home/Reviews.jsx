import React from 'react'
import reviewImg1 from '../../assets/images/reviewImage1.png'
import reviewImg2 from '../../assets/images/reviewimg2.png'
import reviewImg3 from '../../assets/images/reviewImg3.jpg'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import { TfiAngleLeft, TfiAngleRight } from 'react-icons/tfi';

const Reviews = () => {
    function NextArrow(props) {
      const { onClick } = props;
      return (
        <div
          onClick={onClick}
          className="absolute right-[565px] bottom-[35px] cursor-pointer z-10 w-[45px] h-[45px] text-primary border-1 border-primary flex items-center justify-center rounded-full hover:bg-primary hover:text-borderCol duration-[.3s]"
        >
          <TfiAngleRight size={20} />
        </div>
      );
    }
    
    function PrevArrow(props) {
      const { onClick } = props;
      return (
        <div
          onClick={onClick}
          className="absolute left-[573px] bottom-[35px] cursor-pointer z-10 w-[45px] h-[45px] text-primary border-1 border-primary flex items-center justify-center rounded-full hover:bg-primary hover:text-borderCol duration-[.3s]"
        >
          <TfiAngleLeft size={20}/>
        </div>
      );
    }
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
    };

    const SliderReviews = [
        {
            image : reviewImg1,
            message : '“Be genuine in your assessment, and provide constructive feedback to benefit both potential customers and the company providing the product or service.”',
            name : 'Sarah Taylor',
            position : 'CEO, Webecy Digital'
        },
        {
            image : reviewImg2,
            message : '“Be genuine in your assessment, and provide constructive feedback to benefit both potential customers and the company providing the product or service.”',
            name : 'Eren Yeager',
            position : 'CEO, Webecy Digital'
        },
        {
            image : reviewImg3,
            message : '“Be genuine in your assessment, and provide constructive feedback to benefit both potential customers and the company providing the product or service.”',
            name : 'Sarah Taylor',
            position : 'CEO, Webecy Digital'
        },
    ]

  return (
    <>
        <section id='Reviews' className='my-[112px]'>
            <div className="container">
                <div id="Reviews-Row">
                    <div className="slider-container">
                        <Slider {...settings}>
                            {
                                SliderReviews.map((item , key)=>(
                                    <div>
                                        <div key={key} className='bg-borderCol rounded-[20px] p-[45px] pb-[100px] flex items-center flex-col'>
                                            <img className='w-[150px] h-[150px] rounded-full' src={item.image} alt="Reviewer Image" />
                                            <p className='font-roboto font-bold text-2xl text-center my-[35px] text-primary'>{item.message}</p>
                                            <div>
                                                <h2 className='font-roboto font-semibold text-xl text-primary text-center'>{item.name}</h2>
                                                <p className='font-dmSans text-center text-[#0C0C0CE5] mt-1 '>{item.position}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                        </Slider>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Reviews
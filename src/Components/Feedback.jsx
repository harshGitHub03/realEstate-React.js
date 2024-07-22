import React from 'react'
import { feedbackAssets } from '../assets/assets'

// slider imports
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", boxShadow: '10px', background: "blue", color: 'black' }}
            onClick={onClick}
        />
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", background: "green", padding: '10px', width: 'fit-content', height: 'fit-content' }}
            onClick={onClick}
        />
    );
}


function Feedback() {

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1000,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 700,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    };

    return (
        <div className='w-full bg-[#f7f9fc] px-8 pt-12 md:pb-4 h-fit flex flex-col justify-center items-center'>
            <div className='w-full text-center  flex items-center flex-col gap-3'>
                <h2 className='text-4xl w-full md:w-3/5 lg:w-2/5 md:text-[2.7rem] lg:text-5xl text-[#2d3954]  font-semibold'>Clients Feedbacks On Our Services</h2>
                <p className='w-full md:w-2/3 lg:w-[45%] text-lg text-[#72809d] leading-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus totam cum excepturi alias nemo eveniet delectus eligendi. </p>
            </div>

            <div className='w-[100%] lg:w-[90%] px-10 mb-16 mt-8 gap-4 '>
                <Slider {...settings}>
                    {feedbackAssets.map((element) => {

                        return <>
                            <div className='w-fit overflow-hidden  my-5 mx-5 shadow-lg flex flex-col '>
                                <div className='overflow-hidden w-full '><img src={element.image} className='hover:scale-110 duration-150 ' /></div>
                                <div className='flex flex-col m-3 gap-3'>
                                    <p className='text-sm'>{element.discription}</p>
                                    <hr className='border-gray-300' />
                                    <div className='flex items-center gap-2'>
                                        <img src={element.customerImg} className='rounded-full w-[14%]' />
                                        <p className='text-sm ml-1'>{element.customerName}</p>
                                    </div>
                                </div>
                            </div>
                        </>
                    })}
                </Slider>
            </div>
        </div>
    )
}

export default Feedback
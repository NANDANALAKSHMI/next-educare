'use client'

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

const TextSwiper = ({ interval = 3000, className = "" }) => {

    const slides = [
        {
            title: "Personalized One-to-One",
            subtitle: "Tutoring at Our Center"
        },
        {
            title: "Expert Guidance",
            subtitle: "Learning Experience"
        },
        {
            title: "Comprehensive",
            subtitle: "Academic Support"
        },
        {
            title: "Guaranteed",
            subtitle: "Student Success"
        }
    ];

    return (
        <div className={`text-swiper font-bricolage ${className}`}>
            <Swiper
                modules={[Autoplay, Pagination]}
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: interval,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                    bulletClass: 'swiper-pagination-bullet w-2 h-2 inline-block rounded-full mx-1',
                    bulletActiveClass: 'swiper-pagination-bullet-active',
                }}
                style={{
                    paddingBottom: "40px",
                    "--swiper-pagination-color": "#8A1538",
                    "--swiper-pagination-bullet-inactive-color": "#8A1538",
                    "--swiper-pagination-bullet-inactive-opacity": "0.4"
                }}
            >
                {slides.map((slide, index) => (
                    <SwiperSlide key={index} className="flex flex-col">
                        <h1 className="lg:text-[67px] md:text-[40px] text-[34px] font-bold text-[#8A1538] text-center lg:leading-[64px]">
                            {slide.title}
                        </h1>
                        <h2 className="lg:text-[67px] md:text-[40px] text-[34px] text-[#8A1538] text-center lg:leading-[64px]">
                            {slide.subtitle}
                        </h2>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default TextSwiper;
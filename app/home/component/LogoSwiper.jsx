'use client'
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules'; 
import Image from 'next/image';

import 'swiper/css';
import 'swiper/css/autoplay';


const LogoSwiper = () => {
  const curriculumLogos = [
    {
      src: "/pearson-logo 6.svg",
         alt: "logo"
    },
    {
      src: "/pearson-logo 10.svg",
          alt: "logo"
    },
    {
      src: "/pearson-logo 2.svg",
         alt: "logo"
    },
    {
      src: "/pearson-logo 6.svg",
         alt: "logo"
    },
    {
      src: "/pearson-logo 10.svg",
      alt: "logo"
    }
  ];
  
  return (
    <div className="w-full  max-w-md lg:block hidden   ">
      <h2 className="text-2xl md:text-3xl font-bold text-[#8A1538] text-center mb-8">
        Curriculums we offer:
      </h2>
      
      <div className="w-full">
        <Swiper
          modules={[Autoplay]} 
          spaceBetween={30}
          slidesPerView={3}
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 20
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 20
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 30
            }
          }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          
        >
          {curriculumLogos.map((logo, index) => (
            <SwiperSlide key={index} className="flex justify-center items-center">
              <Image
                src={logo.src}
                alt={logo.alt}
                width={180}
                height={100}
                className="object-contain"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default LogoSwiper;
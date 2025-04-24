'use client'
import Image from 'next/image';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { ArrowUpRight } from 'lucide-react';
import ViewAllButton from '@/app/shared/ViewAllButton';

const Program = () => {
  const missionData = [
    {
      title: 'English Grammar',
      description: (
        <>
         Master the building blocks of writing and communication.
        </>
      ),
      image: '/img23.svg',
    },
    {
      title: 'Craft Classes',
      description: (
        <>
         Unleash creativity with hands-on projects and artistic fun.
        </>
      ),
      image: '/img24.svg',
    },
    {
      title: 'Art and Painting',
      description: (
        <>
          Unleash creativity with hands-on projects and artistic fun.
        </>
      ),
      image: '/img25.svg',
    },
    {
      title: 'Craft Classes',
      description: (
        <>
         Unleash creativity with hands-on projects and artistic fun.
        </>
      ),
      image: '/img24.svg',
    },
  ];

  return (
    <div className="container mx-auto py-20 px-4">
      <div className="flex items-center text-center   py-10 justify-between">
        <h2 className="lg:text-[42px] text-[30px]  text-[#655945] font-medium text-center">
          Programs we offer <span className="font-bold">for Kids</span>
        </h2>
        <div className='flex justify-end'>

        <ViewAllButton />
        </div>

      </div>


      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={20}
        slidesPerView={3}
        pagination={{ clickable: true }}
        breakpoints={{
          0: {
            slidesPerView: 1, 
          },
          640: {
            slidesPerView: 1, 
          },
          1024: {
            slidesPerView: 3, 
          },}}
        style={{
          paddingBottom: "40px",
          "--swiper-pagination-color": "#8A1538",
          "--swiper-pagination-bullet-inactive-color": "#8A1538",
          "--swiper-pagination-bullet-inactive-opacity": "0.4"
        }}
      >
        {missionData.map((item, index) => (
          <SwiperSlide key={index} style={{ paddingBottom: "40px" }}>
            <div className="bg-amber-50 rounded-3xl relative border-2 border-gray-200 h-full w-full  ">
              <div className="p-6 w-[75%] ">
                <h2 className="text-red-800 text-2xl font-bold mb-3">
                  {item.title}
                </h2>
                <p className="text-red-900">{item.description}</p>
              </div>
              <div className="absolute right-0 top-[-25px] ">
                <div className=''>

                <Image
                  src={item.image}
                  alt={item.title}
                  width={130}
                  height={130}
                  className="object-contain w-full   h-full"
                />
                </div>
              </div>
              <div className='p-6'>

              <ViewAllButton/>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Program;
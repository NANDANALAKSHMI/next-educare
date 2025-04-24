'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { ChevronLeft, ChevronRight } from 'lucide-react';
import ViewAllButton from '@/app/shared/ViewAllButton';


const SubjectTech = () => {

    const subjects = [
        { name: 'Maths', icon: "./Group12.svg" },
        { name: 'Physics', icon: "./Group123.svg" },
        { name: 'Chemistry', icon: "./Group12.svg" },
        { name: 'Biology', icon: "./Group123.svg" },
        { name: 'Computer Science', icon: "./Group12.svg" },
        { name: 'English', icon: "./Group123.svg" },
        { name: 'English', icon: "./Group12.svg" },
    ];
    return (
        <div className='bg-[#F9F7F4]'>
            <div className=" mx-auto px-4 py-12  text-center container">
                <div className="flex items-center justify-between md:pb-20 pb-10 ">
                    <h2 className="md:text-[42px] text-[30px]  text-center text-[#655945] font-[400]">Subjects We <span className='font-[700]'>Teach</span></h2>
                    <div className="">
                        <ViewAllButton />
                    </div>
                </div>

                <div className="">

                    <Swiper
                        modules={[Navigation, Pagination, Autoplay]}
                        spaceBetween={20}
                        slidesPerView={1}
                        breakpoints={{
                            640: { slidesPerView: 2 },
                            768: { slidesPerView: 3 },
                            1024: { slidesPerView: 6 },
                        }}
                        autoplay={{
                            delay: 2500,
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
                       
                        className=""
                    >
                        {subjects.map((subject, index) => (
                            <SwiperSlide key={`${subject.name}-${index}`}>
                                <div className="bg-[#fff5e9] rounded-xl shadow  flex flex-col items-center justify-center">
                                    <img src={subject.icon} alt={subject.name} className="h-24 mb-4" />
                                    <h3 className="text-lg font-semibold text-[#951f3c]">{subject.name}</h3>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>

                </div>
            </div>
        </div>

    );
};

export default SubjectTech;

"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import ViewAllButton from "@/app/shared/ViewAllButton";


const MasterSection = () => {
    const courses = [
        {
            title: "IELTS Preparation",
            description:
                "Focus on all four sections: Listening, Reading, Writing, and Speaking.",
            image: '/image2.svg',
        },
        {
            title: "TOEFL Mastery",
            description:
                "Comprehensive coverage of Reading, Listening, Speaking and Writing sections.",
            image: '/image1.svg',
        },
        {
            title: "TOEFL Mastery",
            description:
                "Comprehensive coverage of Reading, Listening, Speaking and Writing sections.",
            image: '/image1.svg',
        },
        {
            title: "PTE Academic Course",
            description:
                "Time-saving strategies and practice tests with instant feedback.",
            image: '/image2.svg',
        },
        {
            title: "Cambridge English (CAE)",
            description:
                "Preparation for high-level English skills in Listening, Speaking, Reading, and Writing.",
            image: '/image1.svg',
        },
    ];
    return (
        <div className="py-12 px-4 container mx-auto">

            <div>
                <div className="flex justify-between items-center mb-6">
                    <h2 className="font-[400] text-center flex justify-center  text-[30px] w-full text-[#655945]">
                        Master in, <span className="font-bold">IELTS, TOEFL Exams</span> 
                    </h2>

                </div>
            </div>
            <Swiper
                spaceBetween={24}
                pagination={{ clickable: true }}
                modules={[Pagination]}
                breakpoints={{
                    640: { slidesPerView: 1 },
                    768: { slidesPerView: 2 },
                    1024: { slidesPerView: 3 },
                    1280: { slidesPerView: 4 },
                }}
                style={{
                    paddingBottom: "40px",
                    "--swiper-pagination-color": "#8A1538",
                    "--swiper-pagination-bullet-inactive-color": "#8A1538",
                    "--swiper-pagination-bullet-inactive-opacity": "0.4"
                }}
            >
                {courses.map((course, index) => (
                    <SwiperSlide key={index}    style={{paddingBottom:"40px"}}>

                        <div className="relative w-full  group transition-all duration-300">

                            <div className="absolute -bottom-2 -right-2 w-full h-full bg-[#8A1538] rounded-2xl z-0 rotate-2 group-hover:rotate-0 group-hover:bottom-0 group-hover:right-0 transition-all duration-300 ease-in-out"></div>


                            <div className="relative bg-[#fef7f7] rounded-2xl shadow-md overflow-hidden z-10 group-hover:shadow-xl group-hover:-translate-y-1 transition-all duration-300 ease-in-out">
                                <div className="w-full h-40 relative">
                                    <Image
                                        src={course.image}
                                        alt={course.title}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <div className="p-4">
                                    <h3 className="text-base font-semibold text-[#8A1538]  transition-colors duration-300">
                                        {course.title}
                                    </h3>
                                    <p className="text-sm text-gray-700 mt-1">
                                        {course.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}

            </Swiper>


        </div>
    );
};

export default MasterSection;

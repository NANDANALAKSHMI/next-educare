'use client'
import React from 'react';
import TextSwiper from './TextSwiper';
import Image from 'next/image';
import LogoSwiper from './LogoSwiper';
import { motion } from 'framer-motion';
import { imageFloatVariants } from '@/app/shared/motion';

const Hero = () => {


    return (
        <div
            className="h-[90vh] bg-cover bg-center flex items-center justify-center text-white"
            style={{ backgroundImage: "url('/grop12.jpg')" }}
        >


            <div className="container mx-auto px-4">

                <div className=" ">
                    <TextSwiper interval={3000} />
                </div>

                <div className="flex justify-between">
                    <motion.div
                        className=""
                        initial="initial"
                        animate="animate"
                        variants={imageFloatVariants}
                    >
                        <Image
                            src="/Component12.svg"
                            alt="Another description"
                            width={800}
                            height={300}
                            className="h-full w-full"
                        />
                    </motion.div>

                    <div className="flex flex-col justify-around">
                        <div className="hidden lg:flex justify-center">
                            <button className="bg-[#8A1538] hover:bg-[#701230] text-white font-bold py-3 px-6 rounded-md flex items-center">
                                Book a Free Demo Class
                                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                </svg>
                            </button>
                        </div>


                        <LogoSwiper />

                    </div>

                    <motion.div
                        initial="initial"
                        animate="animate"
                        variants={imageFloatVariants}
                    >
                        <Image
                            src="/Component1.svg"
                            alt="Another description"
                            width={800}
                            height={300}
                            className="h-full w-full"
                        />
                    </motion.div>



                </div>
                <div className="flex justify-center lg:hidden ">
                    <button className="bg-[#8A1538] hover:bg-[#701230] text-white font-[400] text-[12px] py-1 px-4 rounded-md flex items-center">
                        Book a Free Demo Class
                        <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Hero;
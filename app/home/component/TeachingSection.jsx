'use client'
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

const TeachingSection = () => {

    const images = [
        '/img1.svg',
        '/image1.svg',
        '/image2.svg',
        '/img1.svg',
    ];

    const listItems = [
        {
          id: 1,
          content: (
            <>
              <span className="font-medium">Every teacher at </span>
              <span className="font-semibold">Educare</span>
              <span>
                {' '}brings passion to their lessons, making learning enjoyable with engaging activities tailored to inspire and motivate each student.
              </span>
            </>
          ),
        },
        {
          id: 2,
          content: (
            <>
              We focus on creating a supportive environment where individual strengths are recognized, and personalized attention helps students excel.
            </>
          ),
        },
        {
          id: 3,
          content: (
            <>
              Our approach combines innovative teaching methods with real-world applications, ensuring students not only learn but also understand and apply their knowledge effectively.
            </>
          ),
        },
      ];
      

    const [currentImageIndex, setCurrentImageIndex] = useState(0);


    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) =>
                prevIndex === images.length - 1 ? 0 : prevIndex + 1
            );
        }, 5000);

        return () => clearInterval(interval);
    }, [images.length]);

    return (
        <div className="bg-[#F9F7F4] md:py-16 py-10 px-4 md:px-8 lg:px-12 overflow-hidden">
            <div className="container mx-auto">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-12">

                    <div className="w-full lg:w-[40%]">
                        <h2 className="md:text-[42px] text-[30px] font-medium text-[#655945] mb-10">
                            Our way of <span className="text-[#655945] font-semibold">Teaching</span>
                        </h2>

                        <ul className="space-y-8">
                            {listItems.map((item) => (
                                <li key={item.id} className="flex items-start">
                                    <div className="flex-shrink-0 mt-3">
                                        <div className="h-2 w-2 bg-[#655945] rounded-full"></div>
                                    </div>
                                    <div className="ml-4">
                                        <p className="text-[#655945]0 text-lg">{item.content}</p>
                                    </div>
                                </li>
                            ))}
                        </ul>

                    </div>


                    <div className="w-full lg:w-[60%] rounded-xl overflow-hidden ">
                        <div className="relative h-96 w-full">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={currentImageIndex}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 1 }}
                                    className="absolute inset-0"
                                >
                                    <Image
                                        src={images[currentImageIndex]}
                                        alt={`Teaching approach image ${currentImageIndex + 1}`}
                                        layout="fill"
                                        objectFit="cover"
                                        className="rounded-xl"
                                    />
                                </motion.div>
                            </AnimatePresence>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TeachingSection;
import Image from 'next/image';
import React from 'react';

const missionData = [
    {
        title: 'Mission',
        description: (
            <>
                To help students succeed with personalized,{' '}
                <span className="font-semibold">one-to-one</span> tutoring that builds
                confidence, skills, and a love for learning.
            </>
        ),
        image: '/img12.svg',
    },
    {
        title: 'Vission',
        description: (
            <>
                To be a trusted center where students reach their potential, build confidence, and prepare for a bright future.
            </>
        ),
        image: '/img13.svg',
    },
];

const MissionCard = () => {
    return (
        <div className="container mx-auto flex w-full items-center  pb-20 px-4">
            <div className="md:w-[70%] w-full flex gap-3">
                {missionData.map((item, index) => (
                    <div
                        key={index}
                        className="flex bg-amber-50 rounded-3xl relative bborder-2 border-gray-200 w-full"
                    >
                        <div className="sm:p-8 p-4 md:w-[90%] w-full">
                            <h2 className="text-red-800 text-2xl font-bold mb-3">
                                {item.title}
                            </h2>
                            <p className="text-red-900">{item.description}</p>
                        </div>

                        <div className="hidden lg:block absolute right-0 top-[-40%]">
                            <Image
                                src={item.image}
                                alt="img"
                                width={800}
                                height={300}
                                className="h-full w-full"
                            />
                        </div>
                    </div>
                ))}
            </div>
            <div className='w-[20%] hidden md:block '>
                <Image
                    src="/Group 8.svg"
                    alt="img"
                    width={800}
                    height={100}
                    className="h-[150px] w-full"
                />
            </div>
        </div>
    );
};

export default MissionCard;

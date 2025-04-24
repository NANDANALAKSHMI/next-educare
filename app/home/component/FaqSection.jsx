"use client";
import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const FaqSection = () => {

    const faqItems = [
        {
            question: "What subjects do you offer tutoring in?",
            answer:
                "We offer tutoring in a wide range of subjects including Math, Science, English, Reading, History, and many more. We also provide specialized test preparation for standardized tests such as the SAT and ACT.",
        },
        {
            question: "What ages or grade levels do you tutor?",
            answer:
                "We tutor students from elementary school through high school and college. Our tutors are experienced in working with students of all ages and abilities.",
        },
        {
            question: "Is tutoring one-on-one or in groups?",
            answer:
                "We offer both one-on-one tutoring and small group sessions. One-on-one tutoring provides personalized attention, while small group sessions offer a collaborative learning environment at a lower cost.",
        },
        {
            question: "Can sessions take place at our home?",
            answer:
                "Yes, we offer in-home tutoring services as well as sessions at our tutoring center. We also provide online tutoring options for maximum flexibility.",
        },
        {
            question: "What is the duration and frequency of each tutoring session?",
            answer:
                "Standard tutoring sessions are 60 minutes, but we also offer 30-minute and 90-minute options. The frequency depends on your needs - most students attend 1-2 sessions per week.",
        },
    ];
    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="bg-[#F9F7F4]">

        <div className="py-8 px-4 container mx-auto">
            <h2 className="md:text-[42px] text-[30px] font-[400] mb-8 text-cente text-[#655945CC]">Frequently Asked <span className="font-[700]">Questions</span></h2>

            <div className="space-y-4">
                {faqItems.map((item, index) => (
                    <div
                        key={index}
                        className="bg-white rounded-md shadow-sm overflow-hidden"
                    >
                        <button
                            onClick={() => toggleFAQ(index)}
                            className="w-full flex justify-between items-center text-left p-4 focus:outline-none"
                            aria-expanded={openIndex === index}
                        >
                            <span className="font-medium text-[#655945CC]">{item.question}</span>
                            {openIndex === index ? (
                                <ChevronUp className="h-5 w-5 text-gray-500" />
                            ) : (
                                <ChevronDown className="h-5 w-5 text-gray-500" />
                            )}
                        </button>

                        {openIndex === index && (
                            <div className="py-4 px-6 text-[#655945CC] border-t border-gray-100">
                                {item.answer}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
        </div>
    );
};

export default FaqSection;
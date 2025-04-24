import { Star } from 'lucide-react';
import React from 'react';
import FaqSection from './FaqSection';


const testimonials = [
    {
        name: 'Sarah H',
        role: 'Accountant',
        image: '/person.svg',
        text: `Best decision for English tutoring! Educare improved our daughter's skills and instilled confidence. Recent high scores speak volumes. Thank you, Educare!`,
        rating: 5,
    },
    {
        name: 'Ahmed K',
        role: 'Engineer',
        image: '/person.svg',
        text: `Educare’s commitment to 1–on–1 learning transformed our son's understanding of science. Recent top scores prove Educare delivers results. Grateful for the positive impact!`,
        rating: 5,
    },
    {
        name: 'Sarah H',
        role: 'Accountant',
        image: '/person.svg',
        text: `Best decision for English tutoring! Educare improved our daughter's skills and instilled confidence. Recent high scores speak volumes. Thank you, Educare!`,
        rating: 5,
    },
];

const Testimonials = () => {
    return (
        <>
        <div className="py-16 px-4 text-center bg-white">
            <h2 className="text-2xl md:text-[42px] font-[400] text-[#655945] mb-10">
                Hear from our <span className="font-bold text-[#5C4F36]">Valuable Parents</span>
            </h2>
            <div className="flex flex-col md:flex-row justify-center gap-6 container    mx-auto items-center">
                {testimonials.map((t, index) => (
                    <div
                        key={index}
                        className="bg-white rounded-lg border p-6 shadow-md flex-1 max-w-sm relative"
                    >
                        <div className="absolute -top-6 left-6 w-16 h-16 rounded-full overflow-hidden border-[2px] [border-color:#8A15381A] shadow-md">
                            <img src={t.image} alt={t.name} className="w-full h-full object-cover" />
                        </div>
                        <div className="mt-10 text-sm text-gray-700">{t.text}</div>
                        <div className='flex justify-between pt-4'>
                            <div className="flex text-yellow-500 mt-2">
                                {Array.from({ length: t.rating }).map((_, i) => (
                                    <Star key={i} size={16} fill="currentColor" />
                                ))}
                            </div>
                            <div>

                                <div className=" font-bold text-[#9B0D54]">{t.name}</div>
                                <div className="text-sm text-gray-500"> {t.role}</div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>

        <FaqSection/>
        </>
    );
};

export default Testimonials;

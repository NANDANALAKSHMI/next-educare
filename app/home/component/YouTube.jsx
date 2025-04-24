import { Play, PlayCircle } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const YouTube = () => {
    return (

            <div className="my-16 container mx-auto">
                <h3 className="text-xl md:text-[42px] font-[400] text-center text-[#655945] mb-6">Learn More About <span className='font-[600]'> Our Space</span> </h3>

                <div className="relative rounded-lg overflow-hidden">
                    <Image
                        src="/youtube.svg"
                        alt="Teacher working with student in classroom"
                        width={1000}
                        height={400}
                        className="w-full h-auto object-cover"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center cursor-pointer hover:bg-red-700 transition-colors">
                            <Play className="w-6 h-6 text-white ml-1" />
                        </div>
                    </div>
                </div>
            </div>
      
    )
}

export default YouTube
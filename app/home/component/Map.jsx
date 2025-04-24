import Image from 'next/image'
import React from 'react'
import MarqueText from './MarqueText'
import YouTube from './YouTube'

const Map = () => {
    return (
        <>
        <div className='container mx-auto px-4 py-10'>
            <h2 className="md;text-[42px] text-3xl text-center font-semibold text-[#655945] mb-8">
                Prepare Your Child for a World of Opportunities with Educare
            </h2>
            <div>
                {/* <Image
                    src="map1.png"
                    alt="map"
                    width={60}
                    height={60}
                    className="rounded-full w-full border-2 border-white"
                /> */}
            </div>
        </div>
        <MarqueText/>
        <YouTube/>
        </>
    )
}

export default Map
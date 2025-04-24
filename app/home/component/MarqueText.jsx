'use client'; 

import { useEffect, useRef } from 'react';
import Image from 'next/image';

export default function MarqueeText() {
  const marqueeRef = useRef(null);
  
  useEffect(() => {
    const marqueeAnimation = () => {
      if (marqueeRef.current) {
        if (marqueeRef.current.scrollLeft >= marqueeRef.current.scrollWidth / 2) {
          marqueeRef.current.scrollLeft = 0;
        } else {
          marqueeRef.current.scrollLeft += 1;
        }
      }
    };
    
    const animationInterval = setInterval(marqueeAnimation, 20);
    
    return () => {
      clearInterval(animationInterval);
    };
  }, []);

  const marqueeItems = [
    "Education is the foundation of greatness; let's build it together",
    "Learning today, leading tomorrow — the Educare way",
    "Turning dreams into achievements"
  ];
  
  return (
    <div className="w-full overflow-hidden bg-red-50 py-3 border-y border-red-200">
      <div 
        ref={marqueeRef}
        className="whitespace-nowrap overflow-hidden"
      >
        {[...Array(2)].map((_, repeatIndex) => (
          <div key={repeatIndex} className="inline-flex items-center">
            {marqueeItems.map((text, index) => (
              <div key={`${repeatIndex}-${index}`} className="inline-flex items-center">
                <span className="inline-block px-4 text-[#8A1538] font-medium text-[22px]">
                  {text}
                </span>
                <Image 
                  src="/mar.svg" 
                  width={24} 
                  height={24} 
                  alt="decorative icon" 
                  className="inline-block mx-4"
                />
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
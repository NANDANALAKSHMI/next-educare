import Image from 'next/image';
import React from 'react';

const ValuesSection = () => {
  const values = [
    {
      icon: "/image51.svg",
      text: "Personal Attention"
    },
    {
      icon: "/image52.svg",
      text: "Growth Mindset"
    },
    {
      icon: "/image53.svg",
      text: "Skill Development"
    },
    {
      icon: "/image54.svg",
      text: "Passionate Teaching"
    }
  ];

  return (
    <div className=" hidden lg:block w-full bg-[#FFF8E9] py-4 ">
      <div className="container mx-auto p-4">
        <div className="flex flex-wrap justify-between items-center">
          {values.map((value, index) => (
            <React.Fragment key={index}>
              <div className="flex items-center text-[#8A1538]">
              
                <Image
                  src={value.icon}
                  alt="image"
                  width={800}
                  height={300}
                  className="h-[45px] w-[45px]"
                />
                <span className="font-medium">{value.text}</span>
              </div>

              {index < values.length - 1 && (
                <div className="hidden md:block text-[#8A1538] text-2xl mx-2">|</div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ValuesSection;
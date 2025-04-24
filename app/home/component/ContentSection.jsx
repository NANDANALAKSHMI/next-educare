import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const ContentSection = () => {
  return (
    <div className="container mx-auto px-4 py-16 relative">
      <div className="flex flex-col lg:flex-row  justify-between w-full items-center">

        <div className="lg:w-[60%] ">
          <h2 className="text-[42px] mb-8">
            <span className="text-[#655945]">The Story of </span>
            <span className=" font-medium text-[#655945]">Educare</span>
          </h2>

          <div className="space-y-6">
            <p className="text-[#595959] leading-relaxed">
              At <span className="font-medium text-[#5A5A5A]">Educare</span> education center, we believe that every student deserves personalized, focused attention to reach their fullest potential. Our mission is to empower students through one-on-one tutoring, creating customized learning plans tailored to each individual's unique needs, strengths, and learning styles.
            </p>

            <p className="text-[#595959] leading-relaxed">
              Founded on a passion for education and a commitment to excellence, <span className="font-medium text-[#5A5A5A]">Educare</span> education center was established to offer students a supportive and engaging learning environment. Our team of experienced tutors is dedicated to helping students excel academically while also building confidence, independence, and a love for learning.
            </p>

            <p className="text-[#595959] leading-relaxed">
              We specialize in a wide range of subjects across all grade levels, including math, science, English, and test preparation. Whether your child needs help catching up, getting ahead, or preparing for a specific exam, we are here to support their journey.
            </p>
          </div>

          <div className="mt-10">
            <Link href="/about" className="inline-flex items-center bg-[#8A1538] hover:bg-[#701230] text-white font-medium py-2 px-6 rounded-md">
              Read more
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>
        </div>


        <div className="lg:[40%] ">

          <Image
            src="/strory.svg"
            alt="Teacher helping student"
            width={400}
            height={250}
            className="rounded-md object-cover w-full"
          />

        </div>
      </div>
    </div>
  );
};

export default ContentSection;
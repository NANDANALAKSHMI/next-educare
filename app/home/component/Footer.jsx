import React from 'react';
import { Instagram, Facebook, Linkedin, Youtube, MapPin } from 'lucide-react';
import Image from 'next/image';

const Footer = () => {
    return (
        <footer className="w-full bg-[#8A1538] text-white">
            <div className="container mx-auto px-4 py-8 flex flex-col md:flex-row justify-between">

                <div className="mb-6 md:mb-0">
                    <div className="flex items-center mb-4 gap-2">

                        <Image
                            src="/logo.svg"
                            alt="Another description"
                            width={800}
                            height={300}
                            className="h-[30px] w-[30px]"
                        />
                        <span className="text-xl font-semibold">Educare</span>
                    </div>
                </div>

                <div className="mb-6 md:mb-0">
                    <h3 className="font-semibold text-lg mb-4">Navigation</h3>
                    <ul>
                        <li className="mb-2"><a href="#" className="hover:underline">Home</a></li>
                        <li className="mb-2"><a href="#" className="hover:underline">About</a></li>
                        <li className="mb-2"><a href="#" className="hover:underline">Curriculum</a></li>
                        <li className="mb-2"><a href="#" className="hover:underline">Career</a></li>
                        <li className="mb-2"><a href="#" className="hover:underline">Blogs</a></li>
                        <li className="mb-2"><a href="#" className="hover:underline">Contact us</a></li>
                    </ul>
                </div>

                <div className="mb-6 md:mb-0">
                    <h3 className="font-semibold text-lg mb-4">Contact info</h3>
                    <ul>
                        <li className="mb-2"><a href="mailto:educare@gmail.com" className="hover:underline">educare@gmail.com</a></li>
                        <li className="mb-2"><a href="mailto:info@educare.com" className="hover:underline">info@educare.com</a></li>
                        <li className="mb-2"><a href="tel:+9744412345" className="hover:underline">+974 4412 3456</a></li>
                        <li className="mb-2"><a href="tel:+9745534789" className="hover:underline">+974 5534 7890</a></li>
                        <div className="flex mt-4 space-x-4">
                            <a href="#" className="hover:text-gray-200"><Instagram size={20} /></a>
                            <a href="#" className="hover:text-gray-200"><Facebook size={20} /></a>
                            <a href="#" className="hover:text-gray-200"><Linkedin size={20} /></a>
                            <a href="#" className="hover:text-gray-200"><Youtube size={20} /></a>
                        </div>
                    </ul>
                </div>

             
                <div>
                    <h3 className="font-semibold text-lg mb-4">Office Address</h3>
                    <div className="flex">
                        <div className="mr-4">
                            <p>EducareEducation Center</p>
                            <p>Building 45, Al Sadd Street,</p>
                            <p>Doha, Qatar</p>
                            <a href="#" className="flex items-center mt-2 hover:underline">
                                <span>View on Map</span>
                            </a>
                        </div>

                    </div>
                </div>
            </div>


            <div className="border-t border-[#DCC196]">
                <div className="container mx-auto px-4 py-4 flex flex-col md:flex-row justify-between items-center text-sm ">
                    <div>© 2024 <a href="#" className="hover:underline">educare</a></div>
                    <div>Designed By <a href="#" className="hover:underline text-[#DCC196]" >Novindus Technologies</a></div>
                    <div className="flex space-x-4">
                        <a href="#" className="hover:underline text-[#DCC196]">Terms & Conditions</a>
                        <a href="#" className="hover:underline text-[#DCC196]">Privacy Policy</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
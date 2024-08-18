import React from 'react';
import Navbar from "../components/Navbarhome";
import Footer from "../components/Footer";
import Contact from "../components/Contact";

export default function GetInTouch() {
    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />
            <div className="relative bg-gradient-radial to-pink-400 from-yellow-300 w-full flex-grow">
                <div className='bg-stars'>
                    <div className='pt-10'>
                        <div className="px-5 sm:px-10 md:px-20">
                            <h1 className="text-center text-4xl sm:text-6xl md:text-7xl lg:text-9xl drop-shadow-glow text-white font-Motley leading-tight">
                                GET IN TOUCH
                            </h1>
                        </div>
                    </div>
                    <div className='flex flex-col items-center justify-center p-5 sm:p-10 md:p-20'>
                        <Contact />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

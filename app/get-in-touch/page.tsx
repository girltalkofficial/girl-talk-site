import React from 'react'
import Navbar from "../components/Navbarhome";
import Footer from "../components/Footer";
import Contact from "../components/Contact";

export default function GetInTouch() {
    return(
        <div className = "min-h-screen flex flex-col relative pb-20">
        <Navbar/>
        <div className=" relative bg-gradient-radial to-pink-400 from-yellow-300 w-full size-auto">
        <div className='bg-stars'>
        <div className='pt-10'>
            <div className ="px-50">
                <h1 className = "text-center text-9xl drop-shadow-glow text-white font-Motley leading-[100px]">
                    GET IN TOUCH
                </h1>
            </div>
        </div>
        <div className='flex min-h-screen flex-colitems-center justify-center p-20 '>
           <Contact/>
        </div>
        </div>
        </div>
        <Footer/>
        </div>
    )
}

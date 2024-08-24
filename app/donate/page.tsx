'use client'
import React from 'react';
import Navbar from "../components/Navbarhome";
import Footer from "../components/Footer";
import Link from "next/link";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const donate = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    arrows: true,
    slidesToShow: 3, // Default to 3 slides for large screens
    slidesToScroll: 1,
    autoplay: true,
    cssEase: "linear",
    autoplaySpeed: 3500,
    responsive: [
      {
        breakpoint: 1280, // Screens smaller than 1280px (large screens)
        settings: {
          slidesToShow: 2, // Show 2 slides
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024, // Screens smaller than 1024px (small desktops and tablets)
        settings: {
          slidesToShow: 1, // Show 1 slide
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768, // Screens smaller than 768px (mobile and small tablets)
        settings: {
          slidesToShow: 1, // Show 1 slide
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <Navbar />
      <div className="text-center relative bg-gradient-radial to-pink-400 from-yellow-300 w-full">
        <div className='bg-stars'>
          <div className='pt-10'>
            <div className="px-5 md:px-20">
              <h1 className="text-center text-4xl sm:text-6xl md:text-7xl lg:text-9xl drop-shadow-glow text-white font-Motley leading-tight">
                DONATE
              </h1>
            </div>
          </div>

          <div className="w-full mt-10 bg-white pb-5 pt-5">
            <div className="font-Boruna text-center text-3xl sm:text-5xl md:text-6xl lg:text-7xl text-pink-400 font-medium">
              The PACKS, PERIOD. Program
            </div>
          </div>

          <div className="slider-container px-5 sm:px-10 md:px-20 pt-10 pb-12">
            <Slider {...settings}>
              <div>
                <img src="image/donate/donate1.png" className="w-full h-auto object-cover" alt="Donate Slide 1" />
              </div>
              <div>
                <img src="image/donate/donate2.png" className="w-full h-auto object-cover" alt="Donate Slide 2" />
              </div>
              <div>
                <img src="image/donate/donate3.png" className="w-full h-auto object-cover" alt="Donate Slide 3" />
              </div>
              <div>
                <img src="image/donate/donate4.png" className="w-full h-auto object-cover" alt="Donate Slide 4" />
              </div>
              <div>
                <img src="image/donate/donate5.png" className="w-full h-auto object-cover" alt="Donate Slide 5" />
              </div>
              <div>
                <img src="image/donate/donate6.png" className="w-full h-auto object-cover" alt="Donate Slide 6" />
              </div>
              <div>
                <img src="image/donate/donate7.png" className="w-full h-auto object-cover" alt="Donate Slide 7" />
              </div>
            </Slider>
          </div>

          <div className="bg-white mx-5 sm:mx-10 md:mx-20 rounded-lg font-Futura text-lg sm:text-xl md:text-2xl lg:text-3xl pb-10 p-8 text-gray-400">
            <p className="pb-4 font-Motley text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-pink-400 pt-4">Packs, Period.</p>
            <p className="pb-4 pt-4 text-gray-400 text-sm sm:text-base md:text-lg lg:text-xl font-Futura font-light">
              Though we wholeheartedly believe in the power of conversation, we also recognise our responsibility to
              bring about concrete change for those who need it most. The treatment of refugees and asylum seekers in
              Hong Kong has been a longstanding issue, and access to period care is one of the many challenges they face.
              Surviving on 40 HKD (or 5 USD) per day, the need for period products is often eclipsed by that for food
              and shelter – but that doesn’t stop the menstrual cycle. For those who can afford period care, monthly
              bleeding can pose difficulties in getting through our day; this is only exacerbated for the city’s
              non-refoulement claimants.
            </p>
            <p className="pb-4 text-gray-400 text-sm sm:text-base md:text-lg lg:text-xl font-Futura font-light">
              In September of 2023, we launched Packs, Period., a student-led extension of LUÜNA’s Empowered,
              Period. campaign, having gleaned the barriers preventing individuals from adequate period care.
            </p>
            <p className="pb-4 text-gray-400 text-sm sm:text-base md:text-lg lg:text-xl font-Futura font-light">
              Now, through various fundraising efforts, we supply refugees and asylum seekers with pads through
              community organisations around Hong Kong. In the beginning, we had hoped to sponsor 100 individuals
              with a year’s worth of period care, and, 9 months later, we succeeded. Packs, Period. also demonstrates our
              awareness of the environment, with LUÜNA’s low-waste, 100% cotton products. We look forward to
              expanding our reach to support as many people as we can.
            </p>
          </div>

          <div className='flex justify-center pb-10 items-center pt-10'>
            <Link target="_blank" href="https://docs.google.com/forms/d/1YOB4Ca-i4aYitJscnk_hmo4RNWvNhkYCPYi3YL0mOCY/viewform?edit_requested=true">
              <button className='bg-gradient-to-r p-10 hover:scale-110 hover:shadow-lg font-Futura text-2xl sm:text-3xl lg:text-4xl shadow-md from-purple-300 to-blue-200 rounded-lg'>
                Donate Now!
                <p className='text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light'>Donations only available in Hong Kong*</p>
              </button>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default donate;

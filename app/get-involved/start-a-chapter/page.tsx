'use client'
import React from 'react';
import Navbar from "../../components/Navbarhome";
import Footer from "../../components/Footer";
import FAQ from "../../components/FAQ";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from 'next/link';

const startachapter = () => {

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
      <main className="relative bg-gradient-radial to-pink-400 from-yellow-300 w-full">
        <div className='bg-stars'>
          <div className='pt-10'>
            <div className="px-5 md:px-20">
              <h1 className="font-Motley text-center drop-shadow-glow text-4xl sm:text-6xl md:text-7xl lg:text-9xl text-white leading-tight">
                GET INVOLVED
              </h1>
            </div>
          </div>

          <div className="w-full mt-10 bg-white pb-5 pt-5">
            <div className="text-center align-middle text-3xl md:text-6xl sm:text-5xl lg:text-7xl text-pink-400 font-Boruna">
              START A CHAPTER
            </div>
          </div>

          <div className="slider-container px-5 sm:px-10 md:px-20 pt-10 pb-12">
            <Slider {...settings}>
              <div>
                <img src="../image/sac/sac1.png" className="w-full h-auto object-cover" alt="Slide 1" />
              </div>
              <div>
                <img src="../image/sac/sac2.png" className="w-full h-auto object-cover" alt="Slide 2" />
              </div>
              <div>
                <img src="../image/sac/sac3.png" className="w-full h-auto object-cover" alt="Slide 3" />
              </div>
              <div>
                <img src="../image/sac/sac4.png" className="w-full h-auto object-cover" alt="Slide 4" />
              </div>
              <div>
                <img src="../image/sac/sac5.png" className="w-full h-auto object-cover" alt="Slide 5" />
              </div>
              <div>
                <img src="../image/sac/sac6.png" className="w-full h-auto object-cover" alt="Slide 6" />
              </div>
            </Slider>
          </div>

          <div className="px-5 sm:px-10 md:px-20 font-Futura">
            <div className="text-center bg-pink-400 rounded-xl p-5 mb-10">
              <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-Motley text-white">
                WHAT DO I GET IF I START A CHAPTER?
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <p className="text-white text-base sm:text-lg lg:text-xl font-medium">
                  Access to a Google folder with:
                </p>
                <ul className="list-disc list-inside text-white mt-3 text-sm sm:text-base lg:text-lg">
                  <li>Our entire core curriculum</li>
                  <li>Planning and organizing documents for your team</li>
                  <li>Girl Talk graphics, fonts, vectors, and color swatches</li>
                  <li>Merch (if applicable)</li>
                </ul>
              </div>

              <div>
                <p className="text-white text-base sm:text-lg lg:text-xl font-medium">
                  Support from the executive team, including:
                </p>
                <ul className="list-disc list-inside text-white mt-3 text-sm sm:text-base lg:text-lg">
                  <li>Meetings for advice upon request</li>
                  <li>Monthly/annual Zoom meetings with all global leads</li>
                  <li>Work and chapter leads featured on our website</li>
                  <li>Chapter awards and opportunities</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="px-5 sm:px-10 md:px-20 font-Futura mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <div className="bg-pink-400 rounded-xl p-5 mb-5">
                <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-Motley text-white">
                  WHAT DO I DO AS A CHAPTER LEAD?
                </p>
              </div>
              <ul className="list-disc list-inside text-white text-sm sm:text-base lg:text-lg">
                <li>Start a school club or arrange regular outside-of-school meetings</li>
                <li>Meet with 5 or more members for at least 35 hours a year (3 times a month, 1 hour each meeting)</li>
                <li>Alternate between our women&apos;s rights course, feminine hygiene guide, and conversation cards</li>
                <li>Organize interaction, education, and service events</li>
              </ul>
            </div>

            <div>
              <div className="bg-pink-400 rounded-xl p-5 mb-5">
                <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-Motley text-white">
                  HOW DO I START A CHAPTER?
                </p>
              </div>
              <ul className="list-decimal list-inside text-white text-sm sm:text-base lg:text-lg">
                <li>
                  Review chapter lead induction materials: Begin by watching our comprehensive chapter leader induction video to familiarize yourself with the responsibilities and expectations of the role.
                </li>
                <li>
                  Show us what you know: Pass a brief quiz to assess your understanding of the core information covered in the induction materials.
                </li>
                <li>
                  Tell us about you: Provide a 90-second video or 200-word written response outlining your motivation for starting a chapter and your ideas for furthering our organization&apos;s mission within your local community.
                </li>
                <li>
                  Supply basic information: Complete the chapter leader application form by providing the necessary personal and contact details.
                </li>
              </ul>
            </div>
          </div>

          <FAQ />

          <div className='flex justify-center pb-20 items-center pt-20'>
            <Link href="/home">
              <button className='bg-gradient-to-r p-10 hover:scale-110 hover:shadow-lg font-Futura text-2xl sm:text-3xl lg:text-4xl shadow-md from-purple-300 to-blue-200 rounded-lg'>
                Start a Chapter Now!
              </button>
            </Link>
          </div>
        </div>
      </main>
    
      <Footer />
    </>
  );
}

export default startachapter;

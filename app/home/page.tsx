'use client'
import React, { useState } from 'react';
import Image from "next/image";
import Navbar from "../components/Navbarhome";
import Footer from "../components/Footer";
import Modal from "../components/homemodal";
import Link from "next/link";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ReactPlayer from 'react-player'

export default function Home() {
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
      <main>
        <div className="text-center relative bg-gradient-radial to-pink-400 from-yellow-300 w-full">
          <div className="bg-stars">
            <div className="pt-7">
              <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-9xl font-Motley drop-shadow-glow text-white">Girl Talk Official</h1>

       <div className="p-10 place-items-center">    
        <div>
         <ReactPlayer url='https://youtu.be/W5Nr9gM-jGY' />
        </div>
       </div>
    
            </div>
                <p
                  className="font-Futura font-normal px-5 lg:px-40 text-sm sm:text-lg lg:text-2xl mb-5">
                  Empowering girls through conversation, tuition, and access to period care, following the principles of interaction, education, and service.
                </p>
           

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-5 p-5">
              <div className="col-span-1 rounded-3xl p-5 shadow-lg bg-gradient-to-r from-pink-400 to-orange-300 flex flex-col justify-center items-center">
                <div className="text-left w-full">
                  <span className="text-2xl sm:text-3xl md:text-5xl lg:text-7xl font-Motley">36K</span>
                  <span className="text-sm sm:text-xl lg:text-3xl font-Futura block">pads funded</span>
                </div>
                <div className="text-left w-full mt-4">
                  <span className="text-2xl sm:text-3xl md:text-5xl lg:text-7xl font-Motley">50K</span>
                  <span className="text-sm sm:text-xl lg:text-3xl font-Futura block">HKD raised</span>
                </div>
              </div>

              <div className="col-span-1 rounded-3xl p-5 shadow-lg bg-gradient-to-r from-orange-300 to-green-200 flex flex-col justify-center items-center">
                <div className="text-left w-full">
                  <span className="text-2xl sm:text-3xl md:text-5xl lg:text-7xl font-Motley">12</span>
                  <span className="text-sm sm:text-xl lg:text-3xl font-Futura block">cities across</span>
                </div>
                <div className="text-left w-full mt-4">
                  <span className="text-2xl sm:text-3xl md:text-5xl lg:text-7xl font-Motley">8</span>
                  <span className="text-sm sm:text-xl lg:text-3xl font-Futura block">countries</span>
                </div>
              </div>

              <div className="col-span-1 rounded-3xl p-5 shadow-lg bg-gradient-to-r from-green-200 to-blue-200 flex flex-col justify-center items-center">
                <div className="text-left w-full">
                  <span className="text-2xl sm:text-3xl md:text-5xl lg:text-7xl font-Motley">15</span>
                  <span className="text-sm sm:text-xl lg:text-3xl font-Futura block">global youth chapters</span>
                </div>
                <div className="text-left w-full mt-4">
                  <span className="text-2xl sm:text-3xl md:text-5xl lg:text-7xl font-Motley">300</span>
                  <span className="text-sm sm:text-xl lg:text-3xl font-Futura block">members</span>
                </div>
              </div>

              <div className="col-span-1 rounded-3xl p-5 shadow-lg bg-gradient-to-r from-blue-200 to-purple-300 flex flex-col justify-center items-center">
                <div className="text-left w-full">
                  <span className="text-2xl sm:text-3xl md:text-5xl lg:text-7xl font-Motley">30</span>
                  <span className="text-sm sm:text-xl lg:text-3xl font-Futura block">teaching hours</span>
                </div>
                <div className="text-left w-full">
                  <span className="text-sm sm:text-xl lg:text-3xl font-Futura block">using our curriculum</span>
                </div>
              </div>
            </div>

            <div className="font-Futura font-normal px-5 lg:px-20 py-5">
              <p className="text-sm sm:text-lg lg:text-2xl mb-5">
                Girl Talk is a Hong Kong based student-led organisation dedicated to empowering girls through the principles of interaction, education, and service. Founded in 2022, our mission is to empower teen girls through our Body, Mind, and Soul core curriculum, and build platforms allowing girls around the world to interact with each other and serve their communities. Our core belief? That “girl talk” is more than trivial conversation. That moments of connection and understanding between girls build the strength needed to fight back. We champion this belief by teaching our core curriculum, complete with a women&apos;s history course, beginner guides to feminine hygiene, and 100 conversation cards for teens, in chapters across the world. Here in Hong Kong, we provide period care to those in need, working with LUÜNA — a women-led, B Corp-certified period care company — to supply refugees with pads year-round. Because it&apos;s never just girl talk: it&apos;s creating a network of educated, like-minded, and community-service-oriented advocates determined to change the world — one conversation at a time.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-5 p-5">
              <Link href="/get-involved/start-a-chapter">
                <div className="col-span-1 rounded-3xl shadow-lg hover:scale-105 p-3 content-center bg-gradient-to-r from-purple-300 to-blue-200">
                  <div className="text-lg sm:text-3xl lg:text-5xl font-Motley">Start a Chapter</div>
                  <div className="text-sm sm:text-xl lg:text-3xl font-Futura">Learn More</div>
                </div>
              </Link>
              <Link href="/our-work/#corecurriculum">
                <div className="col-span-1 rounded-3xl p-3 hover:scale-105 shadow-lg content-center bg-gradient-to-r from-blue-200 to-green-200">
                  <div className="text-lg sm:text-3xl lg:text-5xl font-Motley">The Core Curriculum</div>
                  <div className="text-sm sm:text-xl lg:text-3xl font-Futura">Learn More</div>
                </div>
              </Link>
              <Link href="/get-in-touch">
                <div className="col-span-1 rounded-3xl hover:scale-105 content-center p-3 lg:py-9 sm:py-7 shadow-lg bg-gradient-to-r from-green-200 to-orange-300">
                  <div className="text-lg sm:text-3xl lg:text-5xl font-Motley">Get in Touch</div>
                  <div className="text-sm sm:text-xl lg:text-3xl font-Futura">Learn More</div>
                </div>
              </Link>
              <Link href="/donate">
                <div className="col-span-1 rounded-3xl hover:scale-105 content-center p-3 lg:py-9 sm:py-7 shadow-lg bg-gradient-to-r from-orange-300 to-pink-400">
                  <div className="text-lg sm:text-3xl lg:text-5xl font-Motley">Donate</div>
                  <div className="text-sm sm:text-xl lg:text-3xl font-Futura">Learn More</div>
                </div>
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 p-5">
              <Link href="/meet-the-team">
                <div className="col-span-1 rounded-3xl shadow-lg hover:scale-105 p-5 content-center bg-gradient-to-r from-purple-300 to-blue-200">
                  <div className="text-lg sm:text-3xl lg:text-5xl font-Motley">Meet the Team</div>
                  <div className="text-sm sm:text-xl lg:text-3xl font-Futura">Learn More</div>
                </div>
              </Link>
              <Link href="https://girltalkofficial.wordpress.com">
                <div className="col-span-1 rounded-3xl shadow-lg hover:scale-105 p-5 content-center bg-gradient-to-r from-blue-200 to-green-200">
                  <div className="text-lg sm:text-3xl lg:text-5xl font-Motley">Blog</div>
                  <div className="text-sm sm:text-xl lg:text-3xl font-Futura">Learn More</div>
                </div>
              </Link>
            </div>

            <div className="w-full mt-10 bg-white py-5">
              <div className="text-center text-2xl sm:text-3xl md:text-5xl lg:text-7xl text-pink-400 font-Boruna">  
                MORE ABOUT US
              </div>
            </div>

            <div className="grid gap-5 grid-cols-1 sm:grid-cols-1 px-5 sm:px-10 pt-10 pb-3 font-Futura font-normal">
             <div className="col-span-1">
                <p className="text-xl sm:text-3xl lg:text-5xl mb-5 font-Motley font-normal">Our Misson</p>
                <p className="text-sm sm:text-xl lg:text-2xl mb-5">
                Our mission is to empower teen girls through our Body, Mind, and Soul core curriculum, and build platforms allowing girls around the world to interact with each other and serve their communities.
                </p>
              </div>
            </div>

            <div className="grid gap-5 grid-cols-1 sm:grid-cols-2 px-5 sm:px-10 pt-10 pb-3 font-Futura font-normal">
              <div className="col-span-1">
                <p className="text-xl sm:text-3xl lg:text-5xl mb-5 font-Motley font-normal">Why Girl?</p>
                <p className="text-sm sm:text-xl lg:text-2xl mb-5">
                  In recent years, the parameters around gender and sexuality have become more fluid in the public consciousness – a change that has allowed individuals across the world to express themselves freely and authentically. Plus, intersectional studies have revealed a need to consider factors such as gender identity when addressing sexism, rejecting a monolithic narrative of feminism. Why then, do we stick to the label of “girl”?
                </p>
                <p className="text-sm sm:text-xl lg:text-2xl mb-10">
                  We recognise that gender is a social construct; so, our definition of “girl” is inclusive of any individual who identifies as a female, or aligns themselves with the aims and experiences of women, regardless of assigned sex at birth. To us, “girl” is unifying: it encapsulates our shared struggles and experiences, the basis upon which we can relate and empathise with each other. By instrumentalising girl talk as (actual) voices for change, we reclaim the label as a rallying point for female empowerment.
                </p>
              </div>
              <div className="col-span-1">
                <p className="text-xl sm:text-3xl lg:text-5xl mb-5 font-Motley font-normal">Our Story</p>
                <p className="text-sm sm:text-xl lg:text-2xl mb-5">
                  Girl Talk started as a small, student-led club at Chinese International School, Hong Kong, on November 17th, 2022. Our first club meeting? Yielded a total of 3 attendees. Over the years, we grew into a family of 15, aged 12-14, and an executive team of 6. Though our club has stayed small and tight-knit, our outreach doesn&apos;t end there; we frequently organise fundraisers and events for the wider school community to involve those without the chance to join our meetings. Fast forward 2 more years, and there are 300+ students in 15 chapters across 12 cities and states in 8 countries, including Jakarta, Beijing, Hangzhou, Shanghai, New Delhi, Brisbane, London, Florida, Arizona, Toronto, and Seoul. 
                </p>
              </div>
            </div>

           

            <Link href="/meet-the-team">
              <button className="relative rounded-lg border-4  hover:scale-110 border-white mb-20 bg-pink-400 font-Futura">
                <p className="p-10 text-sm sm:text-lg lg:text-3xl">A Message From Our Founder</p>
              </button>
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

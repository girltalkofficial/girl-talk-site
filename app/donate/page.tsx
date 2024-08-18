'use client'
import React from 'react'
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
        arrows:true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay:true,
        cssEase:"linear",
        autoplaySpeed:3500

      }

    return(
        <>
        <Navbar/>
        <div className=" text-center relative bg-gradient-radial to-pink-400 from-yellow-300 w-full size-auto">
        <div className='bg-stars'>
            <div className='pt-10'>
                <div className ="px-50">
                    <h1 className = "text-center text-9xl drop-shadow-glow text-white font-Motley leading-[100px]">
                        DONATE
                    </h1>
                </div>
            </div>

            <div className="w-full size-auto mt-10 bg-white pb-5 pt-5">
                <div className = "font-Boruna text-center align-middle text-7xl text-pink-400 font-medium ">  
                    The PACKS, PERIOD. Program
                </div>
            </div>
            <div className="slider-container pl-20 pr-20 pt-10 pb-12">
            <Slider {...settings}>
        <div>
          <img src="image/donate/donate1.png"></img>
        </div>
        <div>
          <img src="image/donate/donate2.png"></img>
        </div>
        <div>
          <img src="image/donate/donate3.png"></img>
        </div>
        <div>
          <img src="image/donate/donate4.png"></img>
        </div>
        <div>
          <img src="image/donate/donate5.png"></img>
        </div>
        <div>
          <img src="image/donate/donate6.png"></img>
        </div>
        <div>
          <img src="image/donate/donate7.png"></img>
        </div>
      </Slider>
      </div>




            <div  className='bg-white mr-20 ml-20 rounded-lg font-Futura text-2xl pb-10 p-8 text-gray-400 '>
            <p className='pb-4 font-Motley text-5xl text-pink-400 pt-4'>Packs, Period.</p>
            <p className='pb-4 pt-4'>Though we wholeheartedly believe in the power of conversation, we also recognise our responsibility to
bring about concrete change for those who need it most. The treatment of refugees and asylum seekers in
Hong Kong has been a longstanding issue, and access to period care is one of the many challenges they face.
Surviving on 40 HKD (or 5 USD) per day, the need for period products is often eclipsed by that for food
and shelter – but that doesn’t stop the menstrual cycle. For those who can afford period care, monthly
bleeding can pose difficulties in getting through our day; this is only exacerbated for the city’s
non-refoulement claimants.
</p>
<p className='pb-4'>In September of 2023, we launched Packs, Period., a student-led extension of LUÜNA (link)’s Empowered,
Period. campaign, having gleaned the barriers preventing individuals from adequate period care.

</p>
<p className='pb-4'>Now, through various fundraising efforts, we supply refugees and asylum seekers with pads through
community organisations around Hong Kong. In the beginning, we had hoped to sponsor 100 individuals
with a year’s worth of period care, and, 9 months later, we succeeded. Packs, Period. also demonstrates our
awareness of the environment, with LUÜNA’s low-waste, 100% cotton products. We look forward to
expanding our reach to support as many people as we can.
</p>


            </div>
            
        <Link target="_blank" href = "https://docs.google.com/forms/d/1YOB4Ca-i4aYitJscnk_hmo4RNWvNhkYCPYi3YL0mOCY/viewform?edit_requested=true">
            <button className='relative text-3xl  mt-16 border-4 border-white mb-36 bg-pink-400 font-Futura hover:scale-110 rounded-lg'>
              <p className='pl-5 pr-5 pt-5'>DONATE NOW!</p>
              <p className='pl-5 pr-5 pb-5 pt-2 font-light'>Donations only available in Hong Kong*</p>
            </button>
          </Link>
          </div>
        </div>
        <Footer/>
        </>
    )
    
}

export default donate
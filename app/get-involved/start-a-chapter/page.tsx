'use client'
import React from 'react'
import Navbar from "../../components/Navbarhome";
import Footer from "../../components/Footer";
import FAQ from "../../components/FAQ";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const startachapter = () => {

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
        <main className=" relative bg-gradient-radial to-pink-400 from-yellow-300 w-full size-auto">
            <div className='pt-10'>
                <div className ="px-50">
                    <h1 className = "font-Motley text-center text-9xl text-white leading-[100px]">
                        GET INVOLVED
                    </h1>
                </div>
            </div>

            <div className="w-full size-auto mt-10 bg-white pb-5 pt-5">
                <div className = "text-center align-middle text-7xl text-pink-400 font-Boruna ">  
                    START A CHAPTER
                </div>
            </div>

            <div className="slider-container pl-20 pr-20 pt-10 pb-12">
            <Slider {...settings}>
        <div>
          <img src="../image/sac/sac1.png"></img>
        </div>
        <div>
          <img src="../image/sac/sac2.png"></img>
        </div>
        <div>
          <img src="../image/sac/sac3.png"></img>
        </div>
        <div>
          <img src="../image/sac/sac4.png"></img>
        </div>
        <div>
          <img src="../image/sac/sac5.png"></img>
        </div>
        <div>
          <img src="../image/sac/sac6.png"></img>
        </div>
      </Slider>
      </div>

        
        <div className = "font-Futura grid grid-cols-3 mt-8 ml-3 mr-3 ">
            <div className = "col-span-1 items-center  mr-5">
                <div className= "flex text-left rounded-xl  bg-pink-400 w-auto items-center">
                    <p className = "font-normal pl-5 text-4xl font-Motley p-5 text-white">
                    WHAT DO I DO AS A CHAPTER LEAD?
                    </p>
                </div>
                <div className = " text-lg mt-5 text-left ">
                    <ul className = " pl-5 font-normal list-disc text-white">
                        <li>
                        Start a school club or arrange regular outside of school meetings
                        </li>
                        <li>
                        Meet with 5 or more members for at least 35 hours a year (3 times a month, 1 hour each meeting)
                        </li>
                        <li>
                        Alternate between our women’s rights course, feminine hygiene guide, and conversation cards
                        </li>
                        <li>
                        Organise interaction, education, and service events
                        </li>
                    </ul>
                </div>
            </div>
            
            <div className = "col-span-1 items-center mr-5 ">
               <div className= "flex  rounded-xl bg-pink-400 text-left w-auto items-center ">
                    <p className = "font-normal pl-5 text-4xl font-Motley p-5 text-white">
                    HOW DO I START A CHAPTER?
                    </p>
                </div>
                <div className = "mt-5 text-lg text-left ">
                    <p className = " pl-5 font-medium text-white ">
                    Follow a 4-step online process with no interview or waiting period
                    </p>
                    <ul className = " pl-5 pt-3 font-normal list-decimal text-white">
                        {/*numbered list*/}
                        <li>
                        Review chapter lead induction materials: Begin by watching our comprehensive chapter leader
induction video to familiarise yourself with the responsibilities and expectations of the role.

                        </li>
                        <li>
                        Show us what you know: Pass a brief quiz to assess your understanding of the core information
covered in the induction materials.
                        </li>
                        <li>
                        Tell us about you: Provide a 90-second video or 200-word written response outlining your
motivation for starting a chapter and your ideas for furthering our organisation's mission within
your local community.
                        </li>
                        <li>
                        Supply basic information: Complete the chapter leader application form by providing the necessary
personal and contact details.

                        </li>
                    </ul>
                </div>
            </div>
        
       
       
       
            <div className = "col-span-1 items-center  ">
                <div className= "flex  rounded-xl bg-pink-400 text-left w-auto items-center ">
                    <p className = "font-normal pl-5 text-4xl font-Motley p-5 text-white">
                    WHAT DO I GET IF I START A CHAPTER?
                    </p>
                </div>            
       
            <div className = "grid grid-cols-2">
                <div className = "col-span-1 items-center  mr-10">
                    <div className = " text-lg mt-5 text-left ">
                        <p className = " pl-5 text-white ">
                        Access to a Google folder with:
                        </p>
                        <ul className = " font-normal pl-5 pt-3 list-decimal text-white">
                            {/*numbered list*/}
                            <li>
                            Our entire core curriculum
                            </li>
                            <li>
                            Planning and organising documents for your team
                            </li>
                            <li>
                            Girl Talk graphics, fonts, vectors, and colour swatches
                            </li>
                            <li>
                            Merch (if applicable)
                            </li>
                        </ul>
                    </div>
                </div>
            
                <div className = "col-span-1 items-center  mr-10">
                    <div className = "mt-5 text-lg text-left ">
                        <p className = " pl-5 text-white ">
                        Support from the executive team, including:
                        </p>
                        <ul className = "font-normal pl-5 pt-3 list-decimal text-white">
                            {/*numbered list*/}
                            <li>
                            Meetings for advice upon request
                            </li>
                            <li>
                            Monthly/annual Zoom meetings with all global leads
                            </li>
                            <li>
                            Work and chapter leads featured on our website
                            </li>
                            <li>
                            Chapter awards and opportunities
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            </div>
        </div>
       
        

        <FAQ/>
        <div className='pb-20'></div>
     
        </main>
    
        //learn more about our curriculum...link to our work page
        <Footer/>
        </>
        //20 min video and form away
    )
}
export default startachapter
'use client'
import React, { Fragment, useState} from 'react'
import Slider from "react-slick";
import Navbar from "../components/Navbarhome";
import Footer from "../components/Footer";
import Modal from "../components/workmodal";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const ourwork = () => {
    const[showModal,setShowModal] = useState(false);
    const[showModal2,setShowModal2] = useState(false);
    const[showModal3,setShowModal3] = useState(false);
    const[showModalb1,setShowModalb1] = useState(false);
    const[showModalb2,setShowModalb2] = useState(false);
    const[showModalb3,setShowModalb3] = useState(false);
    const[showModalb4,setShowModalb4] = useState(false);
    const[showModalm1,setShowModalm1] = useState(false);
    const[showModalm2,setShowModalm2] = useState(false);
    const[showModalm3,setShowModalm3] = useState(false);
    const[showModalm4,setShowModalm4] = useState(false);
    const[showModals1,setShowModals1] = useState(false);
    const[showModals2,setShowModals2] = useState(false);
    const[showModals3,setShowModals3] = useState(false);
    const[showModals4,setShowModals4] = useState(false);
    const[showModals5,setShowModals5] = useState(false);

    const settings = {
      dots: true,
      infinite: true,
      speed: 1000,
      arrows:false,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay:true,
      cssEase:"linear",
      autoplaySpeed:4000
    }

    return(
        <>
        <Navbar/>
        <main>
        <div className=" relative bg-gradient-radial to-pink-400 from-yellow-300 w-full size-auto">
        <div className='pt-10'>
                <div className ="px-50">
                    <h1 className = "text-center text-9xl text-white font-Motley leading-[100px]">
                        OUR WORK
                    </h1>
                </div>
            </div>

            <div className="relative text-center" >
            <div className = "border-8 border-white mr-5 ml-5 mt-14">
              <img src ="/image/banner2.png"></img> 
            </div>

            <div className='grid grid-cols-4 text-left gap-5 p-5'>
            <div className='col-span-1 rounded-3xl p-6 shadow-lg bg-gradient-to-r from-pink-400 to-orange-300 '>
                <div>
                <span className='text-7xl font-Motley'>36K</span>
                <span className='text-3xl font-Futura'>pads distributed</span>
                </div>
                <div>
                <span className='text-7xl font-Motley'>50K</span>
                <span className='text-3xl font-Futura'>HKD donated</span>
                </div>
            </div>
            <div className='col-span-1 rounded-3xl p-6 shadow-lg bg-gradient-to-r from-orange-300  to-green-200 '>
                <div>
                <span className='text-7xl font-Motley'>8</span>
                <span className='text-3xl font-Futura'>countries across</span>
                </div>
                <div>
                <span className='text-7xl font-Motley'>4</span>
                <span className='text-3xl font-Futura'>continents</span>
                </div>
            </div>
            <div className='col-span-1 rounded-3xl p-6 shadow-lg bg-gradient-to-r from-green-200 to-blue-200 '>
                <div>
                <span className='text-7xl font-Motley'>12</span>
                <span className='text-3xl font-Futura'>global youth chapter</span>
                </div>
                <div>
                <span className='text-7xl font-Motley'>150</span>
                <span className='text-3xl font-Futura'>youth advocates</span>
                </div>
            </div>
            <div className='col-span-1 rounded-3xl p-6 shadow-lg bg-gradient-to-r from-blue-200 to-purple-300 '>
                <div>
                <span className='text-7xl font-Motley'>30</span>
                <span className='text-3xl font-Futura'>teaching hours</span>
                </div>
                <div>
                <span className='text-3xl font-Futura'>using our curriculum</span>
                </div>
            </div>
          </div>


            <div className="grid grid-cols-3 pt-6 p-2 pl-10 pr-10 gap-12 ">
                  <img src='image/EIS/interact.png' className="opacity-100 hover:scale-90 col-span-1  hover:opacity-100 scale-75 " onClick={()=>setShowModal(true)}>
                  </img>
                <img src='image/EIS/educate.png' className="opacity-100 hover:scale-90 col-span-1  hover:opacity-100 scale-75 " onClick={()=>setShowModal2(true)}>
                  </img>
                <img src='image/EIS/serve.png' className="opacity-100 hover:scale-90 col-span-1  hover:opacity-100 scale-75 " onClick={()=>setShowModal3(true)}>
                  </img>
            </div>
            </div>
            <div className="w-full size-auto mt-8 bg-white pb-5 pt-5">
                <div className = "text-center font-Boruna align-middle text-7xl text-pink-400  ">  
                    THE CORE CURRICULUM
                </div>
            </div>
            
            <div className="grid font-Futura grid-cols-3 p-2 -mt-16 gap-2 pb-40">
                <div className='col-span-1 '>
                  <img className='scale-50' src = "/image/BMS/Body.png"></img>
                  <div className='pt-40 bg-white rounded-lg pb-20 text-2xl text-gray-400 -mt-20'>
                  <div className="slider-container pb-40 p-10">
                  <Slider {...settings}>
        <div>
          <img src="image/body/reproduce.png"></img>
        </div>
        <div>
        <img src="image/body/hygiene.png"></img>
        </div>
        <div>
        <img src="image/body/period.png"></img>
        </div>
        <div>
        <img src="image/body/shaving.png"></img>
        </div>
      </Slider>
      </div>
                <h3 className=" text-5xl font-Motley font-normal  text-pink-400 pt-4 text-center">
                 BODY
                </h3>
                <div className='text-center  pt-4'>
                4 comprehensive guides on:
                </div>
                <div className="text-center pt-3 list-decimal ">
                <p className="pb-2" >
                        The Female Reproductive System

                        </p>
                        <p className="pb-2">
                        General Vaginal Hygiene
                        </p>
                        <p className=" pb-2">
                        Periods 101
                        </p>
                        <p className="" >
                        Shaving 101
                        </p>
                </div>

                </div>
                </div>

                <div className='col-span-1 '>
                <img className='scale-50' src = "/image/BMS/Mind.png"></img>
                <div className='pt-40 bg-white rounded-lg text-2xl text-gray-400 pb-12 -mt-20'>
                <div className="slider-container pb-40 p-10">
                  <Slider {...settings}>
        <div>
          <img src="image/mind/movement.png"></img>
        </div>
        <div>
        <img src="image/mind/feminism.png"></img>
        </div>
        <div>
        <img src="image/mind/standards.png"></img>
        </div>
        <div>
        <img src="image/mind/history.png"></img>
        </div>
      </Slider>
      </div>
                <h3 className=" text-5xl font-semibold  text-pink-400  pt-4 text-center">
                 Mind
                </h3>
                <div className='text-center pt-4 '>
                3 lessons on:
                </div>
                <div className="text-center pt-3 pr-4 pl-4">
                <p className="pb-2 ">
                The Feminist Movement
                        </p>
                        <p className="pb-2">
                        Feminism and the Antagonisation of Femininity in Modern Media
                        </p>
                        <p className="pb-2" >
                        Beauty Standards Through the Decades
                        </p>
                        <p className="" >
                        A History of Women's Reproductive Rights
                        </p>
                </div>
                </div>
                </div>

                <div className='col-span-1 pb-28'>
                <img className='scale-50' src = "/image/BMS/Soul.png"></img>
                <div className='bg-white rounded-lg text-2xl pb-10 text-gray-400 -mt-20'>
                <div className="slider-container p-10">
                  <Slider {...settings}>
        <div>
          <img src="image/soul/selflove.png"></img>
        </div>
        <div>
        <img src="image/soul/bodylove.png"></img>
        </div>
        <div>
        <img src="image/soul/goals.png"></img>
        </div>
        <div>
        <img src="image/soul/friendship.png"></img>
        </div>
        <div>
        <img src="image/soul/romantic.png"></img>
        </div>
      </Slider>
      </div>
                <h3 className=" text-5xl text-pink-400  font-semibold pt-4 text-center">
                 Soul
                </h3>
                <div className='text-center pt-4 '>
                100 conversation cards on:
                </div>
                <div className=" text-center pt-3 list-decimal">
                
                    <p className=" pb-2">
                    Self love and wellbeing                        </p>
                        <p className="pb-2" >
                        Body love
                        </p>
                        <p className="pb-2" >
                        Goals and motivations

                        </p>
                        <p className=" pb-2">
                        Friendships and peers

                        </p>
                        <p className="">
                        Relationships and family


                        </p>
                </div>
                </div>
                </div>


            </div>


            
          </div>
       
      </main>
     
      <Modal isvisible={showModal} onClose={()=>setShowModal(false)}>
        <div className='p-6'>
        <h3 className='text-xl font-semibold text-pink-400 mb-5'>Interact</h3>
        <p className='mb-5 text-black'>
        To communicate and connect with others.
        </p>
        <p className='mb-5 text-black'>
        Sparking meaningful conversations using our cards; hosting social events for our chapter leads, vision board
        and friendship bracelet making workshops, movie screenings.
        </p>
        </div> 
      </Modal>
      
      <Modal isvisible={showModal2} onClose={()=>setShowModal2(false)}>
        <div className='p-6'>
        <h3 className='text-xl font-semibold text-pink-400 mb-5'>Educate</h3>
        <p className='mb-5 text-black'>
        To impart knowledge and cultivate understanding.
        </p>
        <p className='mb-5 text-black'>
        Teaching lessons on the feminist movement, beauty standards, and representations of femininity in media,
        guides on shaving and period care; hosting workshops on time management and interview preparation;
        weekly tutoring room; installing Girl Talk bookshelves in school libraries; guest speeches.

        </p>
        </div> 
      </Modal>
      
      <Modal isvisible={showModal3} onClose={()=>setShowModal3(false)}>
        <div className='p-6'>
        <h3 className='text-xl font-semibold text-pink-400 mb-5'>Serve</h3>
        <p className='mb-5 text-black'>
        To help others.
        </p>
        <p className='mb-5 text-black'>
        Hosting drives and fundraisers for charity partners; spreading awareness for issues affecting women and girls;
        sponsoring refugees and asylum seekers with period care.
        </p>
        </div> 
      </Modal>
      
        <Footer/> 
        
        </>
    )
}
export default ourwork
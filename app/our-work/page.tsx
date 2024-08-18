'use client'
import React, { Fragment, useState} from 'react'
import Slider from "react-slick";
import Navbar from "../components/Navbarhome";
import Footer from "../components/Footer";
import Modal from "../components/workmodal";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const useOurwork = () => {
    const[showModal,setShowModal] = useState(false);
    const[showModal2,setShowModal2] = useState(false);
    const[showModal3,setShowModal3] = useState(false);


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
    const settings2 = {
      dots: true,
      infinite: true,
      speed: 1000,
      arrows:false,
      slidesToShow: 2,
      slidesToScroll: 1,
      autoplay:true,
      cssEase:"linear",
      autoplaySpeed:4000
    }

    return(
        <>
        <Navbar/>
        <main>
        <div className="text-center relative bg-gradient-radial to-pink-400 from-yellow-300 w-full ">
        <div className='bg-stars'>
        <div className='pt-7'>
                    <h1 className = " text-4xl sm:text-5xl md:text-7xl lg:text-9xl drop-shadow-glow text-white font-Motley ">
                        OUR WORK
                    </h1> 
            </div>  

            <div className="relative text-center" >
            <div className = "border-8 border-white mr-5 ml-5 mt-10">
              <img src ="/image/banner2.png"></img> 
            </div>

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
                  <span className="text-2xl sm:text-3xl md:text-5xl lg:text-7xl font-Motley">8</span>
                  <span className="text-sm sm:text-xl lg:text-3xl font-Futura block">countries across</span>
                </div>
                <div className="text-left w-full mt-4">
                  <span className="text-2xl sm:text-3xl md:text-5xl lg:text-7xl font-Motley">4</span>
                  <span className="text-sm sm:text-xl lg:text-3xl font-Futura block">continents</span>
                </div>
              </div>

              <div className="col-span-1 rounded-3xl p-5 shadow-lg bg-gradient-to-r from-green-200 to-blue-200 flex flex-col justify-center items-center">
                <div className="text-left w-full">
                  <span className="text-2xl sm:text-3xl md:text-5xl lg:text-7xl font-Motley">12</span>
                  <span className="text-sm sm:text-xl lg:text-3xl font-Futura block">global youth chapters</span>
                </div>
                <div className="text-left w-full mt-4">
                  <span className="text-2xl sm:text-3xl md:text-5xl lg:text-7xl font-Motley">150</span>
                  <span className="text-sm sm:text-xl lg:text-3xl font-Futura block">youth advocates</span>
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

            <div className="w-full size-auto mt-8 bg-white pb-5 pt-5">
                  <div className="text-center md:text-6xl sm:text-5xl lg:text-7xl font-Boruna align-middle text-3xl text-pink-400">
                    THE THREE PILLARS
                  </div>
                </div>

                <div className="grid grid-cols-3 pt-6 p-2 pl-10 pr-10 gap-12">
                  <img src='image/EIS/interact.png' className="opacity-100 hover:scale-90 col-span-1 hover:opacity-100 scale-75" onClick={() => setShowModal(true)} alt="Interact" />
                  <img src='image/EIS/educate.png' className="opacity-100 hover:scale-90 col-span-1 hover:opacity-100 scale-75" onClick={() => setShowModal2(true)} alt="Educate" />
                  <img src='image/EIS/serve.png' className="opacity-100 hover:scale-90 col-span-1 hover:opacity-100 scale-75" onClick={() => setShowModal3(true)} alt="Serve" />
                </div>

                <p className="mb-5 lg:text-2xl sm:text-lg">Click on the icons above to learn more!</p>

              </div>

              <div className="w-full size-auto mt-8 bg-white pb-5 pt-5">
                <div id="corecurriculum" className="text-center font-Boruna align-middle md:text-6xl sm:text-5xl lg:text-7xl text-3xl text-pink-400">
                  THE CORE CURRICULUM
                </div>
              </div>
              
              <div className="grid font-Futura grid-cols-3 p-2 -mt-10 gap-2 pb-40">
                <div className='col-span-1'>
                  <img className='scale-50' src="/image/BMS/Body.png" alt="Body" />
                  <h3 className="lg:text-7xl sm:text-3xl md:text-5xl text-white -mt-10 font-Motley font-semibold text-center">
                    BODY
                  </h3>
                  <div className='bg-white pt-9 rounded-lg pb-20 lg:text-2xl text-gray-400 mt-10'>
                    <div className="slider-container s p-10">
                      <Slider {...settings}>
                        <div>
                          <img src="image/body/reproduce.png" alt="Reproduce" />
                        </div>
                        <div>
                          <img src="image/body/hygiene.png" alt="Hygiene" />
                        </div>
                        <div>
                          <img src="image/body/period.png" alt="Period" />
                        </div>
                        <div>
                          <img src="image/body/shaving.png" alt="Shaving" />
                        </div>
                      </Slider>
                    </div>
                    <div className='text-center pt-4'>
                      4 comprehensive guides on:
                    </div>
                    <div className="text-center pt-3 list-decimal">
                      <p className="pb-2">The Female Reproductive System</p>
                      <p className="pb-2">General Vaginal Hygiene</p>
                      <p className="pb-2">Periods 101</p>
                      <p className="">Shaving 101</p>
                    </div>
                  </div>
                </div>

                <div className='col-span-1'>
                  <img className='scale-50' src="/image/BMS/Mind.png" alt="Mind" />
                  <h3 className="lg:text-7xl sm:text-3xl md:text-5xl text-white -mt-10 font-Motley font-semibold text-center">
                    MIND
                  </h3>
                  <div className='pt-9 bg-white rounded-lg lg:text-2xl text-gray-400 pb-12 mt-10'>
                    <div className="slider-container p-10">
                      <Slider {...settings}>
                        <div>
                          <img src="image/mind/movement.png" alt="Movement" />
                        </div>
                        <div>
                          <img src="image/mind/feminism.png" alt="Feminism" />
                        </div>
                        <div>
                          <img src="image/mind/standards.png" alt="Standards" />
                        </div>
                        <div>
                          <img src="image/mind/history.png" alt="History" />
                        </div>
                      </Slider>
                    </div>
                    <div className='text-center pt-4'>
                      3 lessons on:
                    </div>
                    <div className="text-center pt-3 pr-4 pl-4">
                      <p className="pb-2">The Feminist Movement</p>
                      <p className="pb-2">Feminism and the Antagonisation of Femininity in Modern Media</p>
                      <p className="pb-2">Beauty Standards Through the Decades</p>
                      <p className="">A History of Women&apos;s Reproductive Rights</p>
                    </div>
                  </div>
                </div>

                <div className='col-span-1 pb-28'>
                  <img className='scale-50' src="/image/BMS/Soul.png" alt="Soul" />
                  <h3 className="lg:text-7xl sm:text-3xl md:text-5xl text-white -mt-10 font-Motley font-semibold text-center">
                    SOUL
                  </h3>
                  <div className='bg-white rounded-lg lg:text-2xl pb-10 text-gray-400 mt-10'>
                    <div className="slider-container p-10">
                      <Slider {...settings2}>
                        <div>
                          <img src="image/soul/selflove.png" alt="Self Love" />
                        </div>
                        <div>
                          <img src="image/soul/bodylove.png" alt="Body Love" />
                        </div>
                        <div>
                          <img src="image/soul/goals.png" alt="Goals" />
                        </div>
                        <div>
                          <img src="image/soul/friendship.png" alt="Friendship" />
                        </div>
                        <div>
                          <img src="image/soul/romantic.png" alt="Romantic" />
                        </div>
                      </Slider>
                    </div>
                    <div className='text-center pt-4'>
                      100 conversation cards on:
                    </div>
                    <div className="text-center pt-3 list-decimal">
                      <p className="pb-2">Self love and wellbeing</p>
                      <p className="pb-2">Body love</p>
                      <p className="pb-2">Goals and motivations</p>
                      <p className="pb-2">Friendships and peers</p>
                      <p className="">Relationships and family</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
     
        <Modal isvisible={showModal} onClose={() => setShowModal(false)}>
          <div className='p-6'>
            <Slider {...settings}>
              <div>
                <img src="/image/Interact/interact1.JPG" alt="Interact 1" />
              </div>
              <div>
                <img src="/image/Interact/interact2.png" alt="Interact 2" />
              </div>
              <div>
                <img src="/image/Interact/interact3.png" alt="Interact 3" />
              </div>
              <div>
                <img src="/image/Interact/interact4.JPG" alt="Interact 4" />
              </div>
              <div>
                <img src="/image/Interact/interact5.png" alt="Interact 5" />
              </div>
              <div>
                <img src="/image/Interact/interact6.JPG" alt="Interact 6" />
              </div>
              <div>
                <img src="/image/Interact/interact7.JPG" alt="Interact 7" />
              </div>
            </Slider>
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
      
        <Modal isvisible={showModal2} onClose={() => setShowModal2(false)}>
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
      
        <Modal isvisible={showModal3} onClose={() => setShowModal3(false)}>
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
      
        <Footer /> 
      </>
    );
}

export default useOurwork;
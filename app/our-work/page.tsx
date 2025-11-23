'use client'
import React, { useState } from 'react';
import Slider from "react-slick";
import Navbar from "../components/Navbarhome";
import Footer from "../components/Footer";
import Modal from "../components/workmodal";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const useOurwork = () => {
    const [showModal, setShowModal] = useState(false);
    const [showModal2, setShowModal2] = useState(false);
    const [showModal3, setShowModal3] = useState(false);

    const settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        cssEase: "linear",
        autoplaySpeed: 4000,
        responsive: [
            {
                breakpoint: 768, // Mobile
                settings: {
                    slidesToShow: 1,
                }
            },
            {
                breakpoint: 1024, // Tablet
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 1200, // Desktop
                settings: {
                    slidesToShow: 3,
                }
            }
        ]
    }

    const settings2 = {
        dots: true,
        infinite: true,
        speed: 1000,
        arrows: false,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        cssEase: "linear",
        autoplaySpeed: 4000,
        responsive: [
            {
                breakpoint: 768, // Mobile
                settings: {
                    slidesToShow: 1,
                }
            },
            {
                breakpoint: 1024, // Tablet
                settings: {
                    slidesToShow: 2,
                }
            }
        ]
    }

    const settings3 = {
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
                    <div className='bg-stars'>
                        <div className='pt-7'>
                            <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-9xl drop-shadow-glow text-white font-Motley">
                                OUR WORK
                            </h1>
                        </div>

                         <div className="slider-container px-5 sm:px-10 md:px-20 pt-10 pb-12">
            <Slider {...settings3}>
            <div>
                <img src="image/our-work/no1.png" className="w-full h-auto object-cover" alt="work Slide 1" />
              </div>
              <div>
                <img src="image/our-work/no2.png" className="w-full h-auto object-cover" alt="work Slide 2" />
              </div>
              <div>
                <img src="image/our-work/no3.png" className="w-full h-auto object-cover" alt="work Slide 3" />
              </div>
              <div>
                <img src="image/our-work/no5.png" className="w-full h-auto object-cover" alt="work Slide 5" />
              </div>
              <div>
                <img src="image/our-work/no6.png" className="w-full h-auto object-cover" alt="work Slide 6" />
              </div>
              <div>
                <img src="image/our-work/no7.png" className="w-full h-auto object-cover" alt="work Slide 7" />
              </div>
              <div>
                <img src="image/our-work/no8.png" className="w-full h-auto object-cover" alt="work Slide 8" />
              </div>
              <div>
                <img src="image/our-work/no9.png" className="w-full h-auto object-cover" alt="work Slide 9" />
              </div>
              <div>
                <img src="image/our-work/no10.png" className="w-full h-auto object-cover" alt="work Slide 10" />
              </div>
              <div>
                <img src="image/our-work/work11.png" className="w-full h-auto object-cover" alt="work Slide 11" />
              </div>
              <div>
                <img src="image/our-work/work13.png" className="w-full h-auto object-cover" alt="work Slide 13" />
              </div>
              <div>
                <img src="image/our-work/work14.png" className="w-full h-auto object-cover" alt="work Slide 14" />
              </div>
              <div>
                <img src="image/our-work/work15.png" className="w-full h-auto object-cover" alt="work Slide 15" />
              </div>
            </Slider>
            </div>

                            <div className="grid grid-cols-2 sm:grid-cols-4 gap-5 p-5">
                                <div className="col-span-1 rounded-3xl p-5 shadow-lg bg-gradient-to-r from-pink-400 to-orange-300 flex flex-col justify-center items-center">
                                    <div className="text-left w-full">
                                        <span className="text-2xl sm:text-3xl md:text-5xl lg:text-7xl font-Motley">36K</span>
                                        <span className="text-sm sm:text-xl lg:text-3xl font-Futura block">pads funded</span>
                                    </div>
                                    <div className="text-left w-full mt-4">
                                        <span className="text-2xl sm:text-3xl md:text-5xl lg:text-7xl font-Motley">75K</span>
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

                

                            <div className="w-full size-auto mt-8 bg-white pb-5 pt-5">
                                <div className="text-center md:text-6xl sm:text-5xl lg:text-7xl font-Boruna align-middle text-3xl text-pink-400">
                                    THE THREE PILLARS
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 pt-6 p-2 pl-10 pr-10 gap-12">
                                <img src='image/EIS/interact.png' className="opacity-100 hover:scale-90 hover:opacity-100 scale-75 mx-auto cursor-pointer" onClick={() => setShowModal(true)} alt="Interact" />
                                <img src='image/EIS/educate.png' className="opacity-100 hover:scale-90 hover:opacity-100 scale-75 mx-auto cursor-pointer" onClick={() => setShowModal2(true)} alt="Educate" />
                                <img src='image/EIS/serve.png' className="opacity-100 hover:scale-90 hover:opacity-100 scale-75 mx-auto cursor-pointer" onClick={() => setShowModal3(true)} alt="Serve" />
                            </div>

                            <p className="mb-5 lg:text-2xl sm:text-lg">Click on the icons above to learn more!</p>



                        <div className="w-full size-auto mt-8 bg-white pb-5 pt-5">
                            <div id="corecurriculum" className="text-center font-Boruna align-middle md:text-6xl sm:text-5xl lg:text-7xl text-3xl text-pink-400">
                                THE CORE CURRICULUM
                            </div>
                        </div>

                        <div className="grid font-Futura grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-2 -mt-10 gap-2 pb-40">
                            <div className='col-span-1'>
                                <img className='scale-50 mx-auto' src="/image/BMS/Body.png" alt="Body" />
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
                                <img className='scale-50 mx-auto' src="/image/BMS/Mind.png" alt="Mind" />
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
                                        4 lessons on:
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
                                <img className='scale-50 mx-auto' src="/image/BMS/Soul.png" alt="Soul" />
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
    <div className='p-6 max-w-xs sm:max-w-md md:max-w-lg mx-auto'>
        <Slider {...settings}>
            <div>
                <img src="/image/interact/interact1.png" alt="Interact 1" className="w-full h-auto" />
            </div>
            <div>
                <img src="/image/interact/interact2.png" alt="Interact 2" className="w-full h-auto" />
            </div>
            <div>
                <img src="/image/interact/interact3.png" alt="Interact 3" className="w-full h-auto" />
            </div>
            <div>
                <img src="/image/interact/interact4.png" alt="Interact 4" className="w-full h-auto" />
            </div>
            <div>
                <img src="/image/interact/interact5.png" alt="Interact 5" className="w-full h-auto" />
            </div>
        </Slider>
        <h3 className='text-xl font-semibold text-pink-400 mt-8 mb-3 text-center'>Interact</h3>
        <p className='mb-3 text-black text-center'>
            To communicate and connect with others.
        </p>
        <p className='mb-5 text-black text-center'>
            Sparking meaningful conversations using our cards; hosting social events for our chapter leads, vision board
            and friendship bracelet making workshops, movie screenings.
        </p>
    </div>
</Modal>

            <Modal isvisible={showModal2} onClose={() => setShowModal2(false)}>
            <div className='p-6 max-w-xs sm:max-w-md md:max-w-lg mx-auto'>
        <Slider {...settings}>
            <div>
                <img src="/image/educate/educate1.png" alt="Educate 1" className="w-full h-auto" />
            </div>
            <div>
                <img src="/image/educate/educate2.png" alt="Educate 2" className="w-full h-auto" />
            </div>
            <div>
                <img src="/image/educate/educate3.png" alt="Educate 3" className="w-full h-auto" />
            </div>
            <div>
                <img src="/image/educate/educate4.png" alt="Educate 4" className="w-full h-auto" />
            </div>
            <div>
                <img src="/image/educate/educate5.png" alt="Educate 5" className="w-full h-auto" />
            </div>
            <div>
                <img src="/image/educate/educate6.png" alt="Educate 6" className="w-full h-auto" />
            </div>
            <div>
                <img src="/image/educate/educate7.png" alt="Educate 7" className="w-full h-auto" />
            </div>
            <div>
                <img src="/image/educate/educate8.png" alt="Educate 8" className="w-full h-auto" />
            </div>
            <div>
                <img src="/image/educate/educate9.png" alt="Educate 9" className="w-full h-auto" />
            </div>
        </Slider>
                    <h3 className='text-xl font-semibold text-pink-400 mt-8 mb-3 text-center'>Educate</h3>
                    <p className='mb-3 text-black text-center'>
                        To impart knowledge and cultivate understanding.
                    </p>
                    <p className='mb-3 text-black text-center'>
                        Teaching lessons on the feminist movement, beauty standards, and representations of femininity in media,
                        guides on shaving and period care; hosting workshops on time management and interview preparation;
                        weekly tutoring room; installing Girl Talk bookshelves in school libraries; guest speeches.
                    </p>
                </div>
            </Modal>

            <Modal isvisible={showModal3} onClose={() => setShowModal3(false)}>
            <div className='p-6 max-w-xs sm:max-w-md md:max-w-lg mx-auto'>
        <Slider {...settings}>
            <div>
                <img src="/image/serve/serve1.png" alt="Serve 1" className="w-full h-auto" />
            </div>
            <div>
                <img src="/image/serve/serve2.png" alt="Serve 2" className="w-full h-auto" />
            </div>
            <div>
                <img src="/image/serve/serve3.png" alt="Serve 3" className="w-full h-auto" />
            </div>
            <div>
                <img src="/image/serve/serve4.png" alt="Serve 4" className="w-full h-auto" />
            </div>

           
        </Slider>
                    <h3 className='text-xl font-semibold text-pink-400 mt-8 mb-3 text-center'>Serve</h3>
                    <p className='mb-3 text-black text-center'>
                        To help others.
                    </p>
                    <p className='mb-3 text-black text-center'>
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

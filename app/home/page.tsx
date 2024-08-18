'use client'
import React, {useState} from 'react'
import Image from "next/image";
import Navbar from "../components/Navbarhome";
import Footer from "../components/Footer";
import Modal from "../components/homemodal"
import Link from "next/link"



export default function Home() {
  const[showModaldesc,setShowModaldesc] = useState(false);
  
  return (
    <>
    <Navbar/>
      <main>
        <div className="text-center relative bg-gradient-radial to-pink-400 from-yellow-300 w-full size-auto " >
          <img src ="/image/stars.png" className='object-cover absolute mix-blend-normal'>
          </img>
          
          <div className= "pt-7">
            <h1 className="text-9xl font-Motley drop-shadow-glow text-white">Girl Talk Official</h1>
          </div>
           
          <div className="relative border-8 border-white mt-10 ml-5 mr-5">
              <img className ="object-cover" src ="/image/banner1.png"></img>
              <div className ="absolute inset-0 flex items-center justify-center ">

                <p className="text-black p-4 bg-white opacity-90 lg:text-3xl md:text-lg sm:text-sm font-Futura font-bold" onClick={()=>setShowModaldesc(true)}>
                Empowering girls through conversation, education, and access to period care
                </p>
              </div>

          </div>

          <div className='grid grid-cols-4 content-center text-left gap-5 p-5'>
            <div className='col-span-1 rounded-3xl p-5 shadow-lg bg-gradient-to-r from-pink-400 to-orange-300 '>
                <div>
                <span className='lg:text-7xl first-letter:flex  sm:text-5xl text-3xl font-Motley'>36K</span>
                <span className='lg:text-3xl flex sm:text-xl font-Futura'>pads distributed</span>
                </div>
                <div>
                <span className='lg:text-7xl flex sm:text-5xl text-3xl font-Motley'>50K</span>
                <span className='lg:text-3xl flex sm:text-xl font-Futura'>HKD donated</span>
                </div>
            </div>
            <div className='col-span-1 rounded-3xl p-5 shadow-lg bg-gradient-to-r from-orange-300  to-green-200 '>
                <div>
                <span className='lg:text-7xl flex sm:text-5xl text-3xl font-Motley'>8</span>
                <span className='lg:text-3xl flex sm:text-xl font-Futura'>countries across</span>
                </div>
                <div>
                <span className='lg:text-7xl flex sm:text-5xl text-3xl  font-Motley'>4</span>
                <span className='lg:text-3xl flex sm:text-xl font-Futura'>continents</span>
                </div>
            </div>
            <div className='col-span-1 rounded-3xl p-5 shadow-lg bg-gradient-to-r from-green-200 to-blue-200 '>
                <div>
                <span className='lg:text-7xl flex sm:text-5xl text-3xl  font-Motley'>12</span>
                <span className='lg:text-3xl flex sm:text-xl font-Futura'>global youth chapter</span>
                </div>
                <div>
                <span className='lg:text-7xl flex sm:text-5xl text-3xl  font-Motley'>150</span>
                <span className='lg:text-3xl flex sm:text-xl font-Futura'>youth advocates</span>
                </div>
            </div>
            <div className='col-span-1 rounded-3xl p-5 shadow-lg bg-gradient-to-r from-blue-200 to-purple-300 '>
                <div className=''>
                <span className='lg:text-7xl flex sm:text-5xl text-3xl font-Motley'>30</span>
                <span className='lg:text-3xl flex sm:text-xl font-Futura'>teaching hours</span>
                </div>
                <div>
                <span className='lg:text-3xl sm:text-xl font-Futura'>using our curriculum</span>
                </div>
            </div>
          </div>


          <div className='font-Futura font-normal pl-20 pr-20 p-10'>
          <p className="mb-5 lg:text-2xl sm:text-lg">Girl Talk is a Hong Kong based student-led organisation dedicated to empowering girls 
            through the principles of interaction, education, and service. 
            Our core belief? That “girl talk” is more than trivial conversation. 
            That moments of connection and understanding between girls build the strength needed to fight back. 
            We champion this belief by teaching our core curriculum, complete with a women&apos;s history course, 
            beginner guides to feminine hygiene, and 100 conversation cards for teens, in chapters across the world.
            Here in Hong Kong, we provide period care to those in need, working with LUÜNA — a women-led, 
            B Corp-certified period care company — to supply refugees with pads year-round. 
            Because it&apos;s never just girl talk: it&apos;s creating a network of educated, like-minded, and 
            community-service-oriented advocates determined to change the world - one conversation at a time. 

              </p>
          </div>

          <div className="w-full size-auto mt-10 bg-white pb-5 pt-5">
                <div className = "text-center text-3xl align-middle md:text-6xl sm:text-5xl lg:text-7xl text-pink-400 font-Boruna ">  
                    MORE ABOUT US
                </div>
            </div>

          <div className='grid font-Futura font-normal gap-5 grid-cols-2 pr-10 pl-10 pt-10'>
            <div className ="col-span-1">
              <p className="lg:text-5xl md:text-3xl mb-5 font-Motley font-normal">Why Girl?</p>
              <p className="mb-5t lg:text-2xl md:text-xl">In recent years, the parameters around gender and sexuality have become more fluid in the public
              consciousness – a change that has allowed individuals across the world to express themselves freely and
              authentically. Plus, intersectional studies have revealed a need to consider factors such as gender identity
              when addressing sexism, rejecting a monolithic narrative of feminism. Why then, do we stick to the label of “girl”?
              </p>
              <p className="mb-10 lg:text-2xl md:text-xl ">We recognise that gender is a social construct; so, our definition of “girl” is inclusive of any individual who
              identifies as a female, or aligns themselves with the aims and experiences of women, regardless of assigned sex
              at birth. To us, “girl” is unifying: it encapsulates our shared struggles and experiences, the basis upon which
              we can relate and empathise with each other. By instrumentalising girl talk as (literal) voices for change, we
              reclaim the label as a rallying point for female empowerment.
              </p>
            </div>
            <div className ="col-span-1">
              <p className="lg:text-5xl md:text-3xl  mb-5 font-Motley font-normal">Our Story</p>
              <p className="mb-5 lg:text-2xl md:text-xl">Girl Talk started as a small, student-led club at Chinese International School, Hong Kong, on November
17th, 2022. Our first club meeting? Yielded a total of 3 attendees. Over the years, we grew into a family of
15, aged 12-14, and an executive team of 6. Though our club has stayed small and tight-knit, our outreach
doesn&apos;t end there; we frequently organise fundraisers and events for the wider school community to involve
those without the chance to join our meetings.
              </p>
            </div>

          </div>

      

            <div className='grid grid-cols-4 gap-5 p-5'>
            <Link href = "/get-involved/start-a-chapter">
            <div className='col-span-1 rounded-3xl shadow-lg hover:scale-105 pr-3 pt-3 pb-3 pl-2  content-center bg-gradient-to-r from-purple-300 to-blue-200 '>
                <div className='lg:text-5xl  md:text-3xl font-Motley'>Start a Chapter</div>
                <div className='lg:text-3xl font-Futura'>Learn More</div>
            </div>
            </Link>
            <Link href = "/our-work/#corecurriculum">
            <div className='col-span-1 rounded-3xl pr-3 pt-3 pb-3 pl-2 hover:scale-105 shadow-lg content-center bg-gradient-to-r from-blue-200 to-green-200 '>
            <div className='lg:text-5xl  md:text-2xl font-Motley'>The Core Curriculum</div>
            <div className='lg:text-3xl  font-Futura'>Learn More</div>
            </div>
            </Link>
            <Link href = "/get-in-touch">
            <div className='col-span-1 rounded-3xl hover:scale-105 content-center pr-3 lg:pt-9 lg:pb-9 pt-3 pb-3 pl-2  shadow-lg bg-gradient-to-r from-green-200 to-orange-300 '>
            <div className='lg:text-5xl md:text-3xl font-Motley'>Get in Touch</div>
            <div className='lg:text-3xl font-Futura '>Learn More</div>
            </div>
            </Link>
            <Link href = "/donate">
            <div className='col-span-1 rounded-3xl hover:scale-105 content-center lg:pt-9 lg:pb-9 sm:pt-7 sm:pb-7 pr-3 pt-6 pb-6 pl-2  shadow-lg bg-gradient-to-r from-orange-300 to-pink-400 '>
            <div className='lg:text-5xl md:text-3xl font-Motley '>Donate</div>
            <div className='lg:text-3xl font-Futura '>Learn More</div>
            </div>
            </Link>
          </div>



          <Link href = "/meet-the-team">
            <button className='relative rounded-lg border-4 mt-20 hover:scale-110 border-white mb-20 bg-pink-400 font-Futura '>
              <p className='p-10 lg:text-3xl sm:lg' >A Message From Our Founder</p>
            </button>
          </Link>
        </div>
   
      </main>
    <Footer/>


    <Modal isvisible={showModaldesc} onClose={()=>setShowModaldesc(false)}>
    <div className=" bg-pink-400 p-10">
                <p className="">
                Girl Talk is a Hong Kong based student-led organisation dedicated to empowering girls through the
                principles of interaction, education, and service.
                </p>
                <p className="mt-10">
                Our core belief? That “girl talk” is more than trivial conversation. That moments of connection and
understanding between girls build the strength needed to fight back. We champion this belief by teaching
our core curriculum, complete with a women&apos;s history course, beginner guides to feminine hygiene, and 100
conversation cards for teens, in chapters across the world. Here in Hong Kong, we provide period care to
those in need, working with LUÜNA - a women-led, B Corp-certified period care company - to supply
refugees with pads year-round. Because it&apos;s never just girl talk: it&apos;s creating a network of educated,
like-minded, and community-service-oriented advocates determined to change the world - one conversation
at a time.
                </p>
              </div>

    </Modal>
    </>
  );
}

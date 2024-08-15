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
            <h1 className="text-9xl font-Motley text-white">Girl Talk Official</h1>
          </div>
           
          <div className="relative text-center" >
            <div className = "border-8 border-white mt-10 ml-5 mr-5">
              <img src ="/image/banner1.png"></img>
              <div className ="absolute translate-x-[-50%] translate-y-[-50%] left-1/2 top-28 text-center bg-white opacity-90">
                <p className="text-black p-4 font-Futura font-bold" onClick={()=>setShowModaldesc(true)}>
                Empowering girls through conversation, education, and access to period care
                </p>
              </div>
            </div>
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

          <div className="w-full size-auto mt-10 bg-white pb-5 pt-5">
                <div className = "text-center align-middle text-7xl text-pink-400 font-Boruna ">  
                    WHO WE ARE
                </div>
            </div>


            <div className='grid grid-cols-4 pt-10 gap-5 p-5'>
            <Link href = "/get-involved/start-a-chapter">
            <div className='col-span-1 rounded-3xl shadow-lg hover:scale-105 p-6 bg-gradient-to-r from-purple-300 to-blue-200 '>
                <div className='text-5xl font-Motley'>Start a Chapter</div>
                <div className='text-3xl font-Futura'>Learn More</div>
            </div>
            </Link>
            <Link href = "/meet-the-team">
            <div className='col-span-1 rounded-3xl p-6 hover:scale-105 shadow-lg bg-gradient-to-r from-blue-200 to-green-200 '>
            <div className='text-5xl font-Motley'>Meet the Team</div>
            <div className='text-3xl font-Futura'>Learn More</div>
            </div>
            </Link>
            <Link href = "/get-in-touch">
            <div className='col-span-1 rounded-3xl hover:scale-105 content-center p-6 shadow-lg bg-gradient-to-r from-green-200 to-orange-300 '>
            <div className='text-5xl font-Motley pt-6'>Get in Touch</div>
            <div className='text-3xl font-Futura pb-6'>Learn More</div>
            </div>
            </Link>
            <Link href = "/donate">
            <div className='col-span-1 rounded-3xl hover:scale-105 content-center p-6 shadow-lg bg-gradient-to-r from-orange-300 to-pink-400 '>
            <div className='text-5xl font-Motley pt-6'>Donate</div>
            <div className='text-3xl font-Futura pb-6'>Learn More</div>
            </div>
            </Link>
          </div>



          <div className='grid font-Futura font-normal gap-5 grid-cols-2 p-10'>
            <div className ="col-span-1">
              <p className="text-5xl mb-5 font-Motley font-normal">Why Girl?</p>
              <p className="mb-5t text-2xl ">In recent years, the parameters around gender and sexuality have become more fluid in the public
              consciousness – a change that has allowed individuals across the world to express themselves freely and
              authentically. Plus, intersectional studies have revealed a need to consider factors such as gender identity
              when addressing sexism, rejecting a monolithic narrative of feminism. Why then, do we stick to the label of “girl”?
              </p>
              <p className="mb-10 text-2xl ">We recognise that gender is a social construct; so, our definition of “girl” is inclusive of any individual who
              identifies as a female, or aligns themselves with the aims and experiences of women, regardless of assigned sex
              at birth. To us, “girl” is unifying: it encapsulates our shared struggles and experiences, the basis upon which
              we can relate and empathise with each other. By instrumentalising girl talk as (literal) voices for change, we
              reclaim the label as a rallying point for female empowerment.
              </p>
            </div>
            <div className ="col-span-1">
              <p className="text-5xl mb-5 font-Motley font-normal">Our Story</p>
              <p className="mb-5 text-2xl ">Girl Talk started as a small, student-led club at Chinese International School, Hong Kong, on November
17th, 2022. Our first club meeting? Yielded a total of 3 attendees. Over the years, we grew into a family of
15, aged 12-14, and an executive team of 6. Though our club has stayed small and tight-knit, our outreach
doesn&apos;t end there; we frequently organise fundraisers and events for the wider school community to involve
those without the chance to join our meetings.
              </p>
            </div>

          </div>

          <Link href = "/meet-the-team">
            <button className='relative border-4 border-white mb-36 bg-pink-400 font-Futura hover:font-bold'>
              <p className='p-5'>A Message From Our Founder</p>
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

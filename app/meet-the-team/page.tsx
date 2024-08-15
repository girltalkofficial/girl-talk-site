import React from 'react'
import Navbar from "../components/Navbarhome";
import Footer from "../components/Footer";
import Message from "../components/message";


const abouttheteam = () => {
    return(
        <>
        <Navbar/>
        <main className=" relative bg-gradient-radial to-pink-400 from-yellow-300 w-full size-auto">
            <div className='pt-10'>
                <div className ="px-50">
                    <h1 className = "text-center text-9xl text-white font-Motley leading-[100px]">
                        MEET THE TEAM
                    </h1>
                </div>
            </div>
            <div className="ml-48 mr-48 mt-20 p-8 text-center opacity-100 hover:scale-110 text-pink-400 bg-white rounded-lg">
            <Message>
                <p className=" font-Motley text-center text-5xl pb-5">A MESSAGE FROM OUR FOUNDER</p>
                <div className="text-gray-400">
                    <p className="pb-4 font-Futura text-lg font-light">If anyone were to ask me why I started Girl Talk, I&apos;d give them the simple answer: When my 11-year-old
                        god-sister started asking me for advice about her friendships and fallouts, I realised that everything she had
                        cried, stressed, or fumed about, I had done the same before. I started thinking about this universal
                        connection between girls, built on shared experiences, struggles, and feelings - and Girl Talk was born to
                        actualise and give platform to that connection.</p>
                    <p className="font-Futura pb-4 text-lg font-light">What I wouldn&apos;t answer — especially if we were short on time — is that much of it had to do with my
                        perceived “failure” at being a feminist. During that time, I became hyper aware of the issues plaguing
                        female-identifying individuals, my mind reeling when I stopped to think about the microaggressions,
                        legislative barriers, and systemic inequities faced on a daily basis. But the concept of sexism — which I now
                        understand as a complex, emotionally charged issue inexplicable in so few words — was too difficult for me
                        to grasp. I just didn&apos;t know how to be a “good” feminist: I didn&apos;t have the academic trappings of the experts;
                        didn&apos;t feel as though I had the intellectual or authoritative power to do anything about it.
                    </p>
                    <p className="font-Futura pb-4 text-lg font-light">It took conversations with my godsister for me to realise that I had missed the mark completely. I&apos;d
                        understood feminism as a battle between two parties — between women and the indomitable systems that
                        were against us, some invisible fight that divided half of the global population. I thought that to advocate for
                        women was to destroy those oppressors, to dismantle the patriarchy — something that I, a 15 year old (or
                        any one person, for that matter) couldn&apos;t do.
                    </p>
                    <p className="font-Futura pb-4 text-lg font-light">With Girl Talk, our goal has always been to strengthen the bonds between girls, because we believe that the
                        first step to fighting back is to build strength within ourselves and those around us. Throughout this
                        journey, I&apos;ve learned that it was never about being a “perfect” feminist, never about having everything
                        figured out. Now, in the quiet moments of connection, learning, and understanding, I feel, in each and every
                        girl, a growing courage to face the ills of the world, one conversation at a time.</p>
                        <p className="font-Futura pb-4 text-lg font-light">
                            - Adele Li 
                        </p>



            </div>
            </Message>
            </div>


            <div className="w-full size-auto mt-12 bg-white pb-5 pt-5">
                <div className = "text-center font-Boruna align-middle text-7xl text-pink-400  ">  
                    SENIOR EXECUTIVE
                </div>
            </div>
            
            <div className='p-10 pl-48 pr-48 justify-items-center content-center text-center grid gap-20 font-Futura grid-cols-3'>
                <div className='col-span-1'>
                <p className='pb-8 text-5xl pt-12 '>Adele Li, &apos;25</p>
                    <img className=''src ="/image/team/Adele.png"></img>    
                    <p className='pt-5 pb-5 text-2xl'>Adele is passionate about public speaking, feminist literature, and graphic design. In her free time, you
                        can find her reading a book, listening to musical soundtracks, or roaming around in thrift stores.
                    </p>
                </div>
                <div className='col-span-1'>
                 <p className='pb-8 text-5xl'>Jasmine Haynes, &apos;25</p>
                    <img className=''src ="/image/team/Jasmine.jpg"></img>    
                    <p className='pt-5 pb-5 text-2xl'>Jasmine is interested in the performing arts, literature, and mental health. When she&apos;s not singing or
                        dancing, she&apos;ll be enjoying her free time with family and friends.</p>
                </div>
                <div className='col-span-1'>
                 <p className='pb-8 text-5xl pt-12'>Gigi Xiao, &apos;25</p>
                 <img className=''src ="/image/team/Gigi.png"></img>        
                    <p className='pt-5 pb-5 text-2xl'>Gigi has two dogs and loves to go on walks and hikes during the weekends. She is a part of Girl Talk for the
                        second year now, and is excited to share what they&apos;ve been doing!
                    </p>
                </div>

            </div>
          
            <div className="w-full size-auto bg-white pb-5 pt-5">
                <div className = "text-center font-Boruna align-middle text-7xl text-pink-400  ">  
                    JUNIOR EXECUTIVE
                </div>
            </div>

            <div className='p-10 pl-48 pr-48 justify-items-center content-center text-center grid gap-8 font-Futura grid-cols-3'>
                <div className='col-span-1'>
                <p className='pb-8 text-5xl'>Bernice Chan, &apos;26</p>
                    <img className=''src ="/image/team/Bernice.png"></img>    
                    <p className='pt-5 pb-5 text-2xl'>When Bernice isn&apos;t in the art room experimenting with new mediums, you can find her sewing with a 
                        movie in the background, cozied up with her dogs, or exploring the city with friends.

                    </p>
                </div>
                <div className='col-span-1'>
                 <p className='pb-8 text-5xl pt-12'>Olivia Sun, &apos;26</p>
                 <img className=''src ="/image/team/Olivia.png"></img>   
                    <p className='pt-5 pb-5 text-2xl'>Olivia has a lot of passion for arts, Chinese literature, travelling, and big fluffy
                        dogs. She&apos;s trying out new things all the time.
                    </p>
                </div>
                <div className='col-span-1'>
                 <p className='pb-8 text-5xl'>Charlotte Poch, &apos;26</p>
                    <img className=''src ="/image/team/Charlotte.png"></img>    
                    <p className='pt-5 pb-5 text-2xl'>Charlotte is passionate about travel and exploration and has an affinity for socialising. 
                        When she isn&apos;t on the hunt for new fashion to experiment with, you can find her cuddling with her dog while doing some
                        self-care.
                    </p>
                </div>

            </div>

        </main>
        
        <Footer/>
        </>

    )
}
export default abouttheteam
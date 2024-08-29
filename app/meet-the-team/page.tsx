import React from 'react';
import Navbar from "../components/Navbarhome";
import Footer from "../components/Footer";
import Message from "../components/message";

const abouttheteam = () => {
  return (
    <>
      <Navbar />
      <main className="relative bg-gradient-radial to-pink-400 from-yellow-300 w-full">
        <div className='bg-stars'>
          <div className='pt-10'>
            <div className="px-5 md:px-20">
              <h1 className="text-center text-4xl sm:text-6xl md:text-7xl lg:text-9xl drop-shadow-glow text-white font-Motley leading-tight">
                MEET THE TEAM
              </h1>
            </div>
          </div>
          
          <div className="mx-5 sm:mx-10 md:mx-20 mt-10 p-8 text-center bg-white rounded-lg hover:scale-105 transition-transform">
            <Message>
              <p className="font-Motley text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl pb-5 text-pink-400">
                A MESSAGE FROM OUR FOUNDER
              </p>
              <div className="text-gray-400 text-sm sm:text-base md:text-lg lg:text-xl font-Futura font-light">
                <p className="pb-4">
                  If anyone were to ask me why I started Girl Talk, I&apos;d give them the simple answer: When my 11-year-old
                  god-sister started asking me for advice about her friendships and fallouts, I realised that everything she had
                  cried, stressed, or fumed about, I had done the same before. I started thinking about this universal
                  connection between girls, built on shared experiences, struggles, and feelings — and Girl Talk was born to
                  actualise and give platform to that connection.
                </p>
                <p className="pb-4">
                  What I wouldn&apos;t answer — especially if we were short on time — is that much of it had to do with my
                  perceived “failure” at being a feminist. During that time, I became hyper aware of the issues plaguing
                  female-identifying individuals, my mind reeling when I stopped to think about the microaggressions,
                  legislative barriers, and systemic inequities faced on a daily basis. But the concept of sexism — which I now
                  understand as a complex, emotionally charged issue inexplicable in so few words — was too difficult for me
                  to grasp. I just didn&apos;t know how to be a “good” feminist: I didn&apos;t have the academic trappings of the experts;
                  didn&apos;t feel as though I had the intellectual or authoritative power to do anything about it.
                </p>
                <p className="pb-4">
                  It took conversations with my godsister for me to realise that I had missed the mark completely. I&apos;d
                  understood feminism as a battle between two parties — between women and the indomitable systems that
                  were against us, some invisible fight that divided half of the global population. I thought that to advocate for
                  women was to destroy those oppressors, to dismantle the patriarchy — something that I, a 15-year-old (or
                  any one person, for that matter) couldn&apos;t do.
                </p>
                <p className="pb-4">
                  With Girl Talk, our goal has always been to strengthen the bonds between girls, because we believe that the
                  first step to fighting back is to build strength within ourselves and those around us. Throughout this
                  journey, I&apos;ve learned that it was never about being a “perfect” feminist, never about having everything
                  figured out. Now, in the quiet moments of connection, learning, and understanding, I feel, in each and every
                  girl, a growing courage to face the ills of the world, one conversation at a time.
                </p>
                <p className="pb-4">
                  - Adele Li 
                </p>
              </div>
            </Message>
          </div>

          <div className="w-full mt-12 bg-white pb-5 pt-5">
            <div className="text-center font-Boruna text-3xl sm:text-4xl md:text-5xl lg:text-7xl text-pink-400">
              SENIOR EXECUTIVE
            </div>
          </div>
          
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 px-5 sm:px-10 md:px-20 py-10 text-center font-Futura'>
            <div className='col-span-1'>
              <p className='pb-4 text-2xl sm:text-2xl md:text-2xl lg:text-2xl'>Adele L. &apos;25</p>
              <img className='drop-shadow-glow mx-auto h-2/3 w-full  object-cover rounded-lg' src="/image/team/Adele.png" alt="Adele Li" />
              <p className='pt-4 pb-5 text-sm sm:text-base md:text-lg lg:text-2xl'>
                Adele is passionate about public speaking, feminist literature, and graphic design. In her free time, you
                can find her reading a book, listening to musical soundtracks, or roaming around in thrift stores.
              </p>
            </div>
            <div className='col-span-1'>
              <p className='pb-4 text-2xl sm:text-2xl md:text-2xl lg:text-2xl'>Jasmine H. &apos;25</p>
              <img className='drop-shadow-glow mx-auto h-2/3 w-full object-cover rounded-lg' src="/image/team/Jasmine.jpg" alt="Jasmine Haynes" />
              <p className='pt-4 pb-5 text-sm sm:text-base md:text-lg lg:text-2xl'>
                Jasmine is interested in the performing arts, literature, and mental health. When she&apos;s not singing or
                dancing, she&apos;ll be enjoying her free time with family and friends.
              </p>
            </div>
            <div className='col-span-1'>
              <p className='pb-4 text-2xl sm:text-2xl md:text-2xl lg:text-2xl'>Gigi X. &apos;25</p>
              <img className='drop-shadow-glow mx-auto h-2/3 w-full object-cover rounded-lg' src="/image/team/Gigi.png" alt="Gigi Xiao" />
              <p className='pt-4 pb-5 text-sm sm:text-base md:text-lg lg:text-2xl'>
              Gigi Xiao has a keen interest in both economics and literature. 
              Outside of school, she loves exploring new restaurants around the city or taking her two dogs on hikes.
              </p>
            </div>
          </div>

          <div className="w-full mt-10 bg-white pb-5 pt-5">
            <div className="text-center font-Boruna text-3xl sm:text-4xl md:text-5xl lg:text-7xl text-pink-400">
              JUNIOR EXECUTIVE
            </div>
          </div>

          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 px-5 sm:px-10 md:px-20 py-10 text-center font-Futura'>
            <div className='col-span-1'>
              <p className='pb-4 text-2xl sm:text-2xl md:text-2xl lg:text-2xl'>Bernice C. &apos;26</p>
              <img className='drop-shadow-glow mx-auto h-2/3 w-full object-cover rounded-lg' src="/image/team/Bernice.png" alt="Bernice Chan" />
              <p className='pt-4 pb-5 text-sm sm:text-base md:text-lg lg:text-2xl'>
                When Bernice isn&apos;t in the art room experimenting with new mediums, you can find her sewing with a 
                movie in the background, cozied up with her dogs, or exploring the city with friends.
              </p>
            </div>
            <div className='col-span-1'>
              <p className='pb-4 text-2xl sm:text-2xl md:text-2xl lg:text-2xl'>Olivia S. &apos;26</p>
              <img className='drop-shadow-glow mx-auto h-2/3 w-full object-cover rounded-lg' src="/image/team/Olivia.png" alt="Olivia Sun" />
              <p className='pt-4 pb-5 text-sm sm:text-base md:text-lg lg:text-2xl'>
                Olivia has a lot of passion for arts, Chinese literature, travelling, and big fluffy
                dogs. She&apos;s trying out new things all the time.
              </p>
            </div>
            <div className='col-span-1'>
              <p className='pb-4 text-2xl sm:text-2xl md:text-2xl lg:text-2xl'>Charlotte P. &apos;26</p>
              <img className='drop-shadow-glow mx-auto w-full h-2/3 object-cover rounded-lg' src="/image/team/Charlotte.png" alt="Charlotte Poch" />
              <p className='pt-4 pb-5 text-sm sm:text-base md:text-lg lg:text-2xl'>
                Charlotte is passionate about travel and exploration and has an affinity for socialising. 
                When she isn&apos;t on the hunt for new fashion to experiment with, you can find her cuddling with her dog while doing some
                self-care.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}

export default abouttheteam;

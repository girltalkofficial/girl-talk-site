import React from 'react'
import Navbar from "../components/Navbarhome";
import Footer from "../components/Footer";

const ouradvocates = () => {
    return(
        <>
        <Navbar/>
        <div className=" relative bg-gradient-radial to-pink-400 from-yellow-300 w-full size-auto">
            <div className='pt-10'>
                <div className ="px-50">
                    <h1 className = "text-center text-9xl text-white font-Motley leading-[100px]">
                        CHAPTER PRESIDENTS
                    </h1>
                </div>
            </div>
            
            <div className="w-full size-auto mt-10 bg-white pb-5 pt-5 mb-20">
                <div className = "text-center align-middle text-7xl text-pink-400 font-Boruna ">  
                    Hong Kong
                </div>
            </div>
            
            <div className='grid grid-cols-3 gap-1 pl-5 pr-5  '>
                <div className='col-span-1 border border-black'>
                    <div className='flex p-5'>
                        <div>
                            <p className='pl-2'>KGV</p>
                            <img src = "/image/chapterpresidents/Amelie.jpg" className='size-60'></img>
                        </div>                      
                        <div className='pl-5'>
                            <p>Amelie So</p>
                            <p>Reason for joining GT:</p>
                        </div>
                
                    </div>

                </div>
                <div className='col-span-1 border border-black'>
                <div className='flex p-5'>
                        <div>
                            <p className='pl-2'>KGV</p>
                            <img src = "/image/chapterpresidents/Audrey.png" className='size-60'></img>
                        </div>                      
                        <div className='pl-5'>
                            <p>Audrey Lee</p>
                            <p>Reason for joining GT:</p>
                        </div>
                
                    </div>

                </div>
                <div className='col-span-1 border border-black'>
                <div className='flex p-5'>
                        <div>
                            <p className='pl-2'>City:</p>
                            <div className='border-black border bg-white size-40 mt-2'></div>
                        </div>                      
                        <div className='pl-5'>
                            <p>Name:</p>
                            <p>Reason for joining GT:</p>
                        </div>
                
                    </div>

                </div>

            </div>
    
            <div className="w-full size-auto mt-10 bg-white pb-5 pt-5 mb-20">
                <div className = "text-center align-middle text-7xl text-pink-400 font-Boruna ">  
                    Korea
                </div>
            </div>

            <div className="w-full size-auto mt-10 bg-white pb-5 pt-5 mb-20">
                <div className = "text-center align-middle text-7xl text-pink-400 font-Boruna ">  
                    Toronto
                </div>
            </div>



        </div>
        <Footer/>
        </>
    )
}
export default ouradvocates
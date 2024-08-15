import React from 'react'
import Link from "next/link"

const Footer = () =>
{
   return(
      

<footer className="bg-white pt-4">
    <div className="w-full mx-auto p-8 md:py-4">
        <div className="sm:flex sm:items-center sm:justify-between">
            <div className="flex items-center mb-4 sm:mb-0 rtl:space-x-reverse">
                <Link href ="/home">
                <img src="/image/logo.png" className="pr-3 h-8" alt="girltalklogo" />
                </Link>
                <span className="self-center text-2xl font-bold font-Futura whitespace-nowrap text-black">Recognised by:</span>
                <img src="/image/Princeton.png" className="h-12 pr-0" alt="girltalklogo" />
                <p className='text-black font-Futura font-bold w-36'>Princeton Club of Hong Kong</p>
                <img src="/image/kiwanis.png" className="pl-8 h-12" alt="girltalklogo" />
            </div>
      
            <ul className="flex flex-wrap items-center mb-6 text-sm font-Futura text-black sm:mb-0">
                <li>
                    <a href="mailto:girl-talk@cis.edu.hk" className="hover:underline me-4 md:me-6">Email Us</a>
                </li>
                <li>
                    <a href="https://www.instagram.com/g1rltalkofficial/" target="_blank" className="hover:underline me-4 md:me-6">Instagram</a>
                </li>
            </ul>
        </div>
        <hr className="my-6 border-black sm:mx-auto dark:border-black lg:my-8" />
        <span className="block text-sm font-Futura text-black sm:text-center">© 2024 <a href="/home" className="font-Futura hover:underline">Girl Talk™</a>. All Rights Reserved.</span>
    </div>
</footer>


   );
//The Princeton Club of Hong Kong
//kiwanis club of hong Kong
}

export default Footer

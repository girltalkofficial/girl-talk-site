import React from 'react';
import Link from "next/link";

const Footer = () => {
    return (
        <footer className="bg-white pt-4">
            <div className="w-full mx-auto p-4 md:p-8 md:py-4">
                <div className="flex flex-col items-center space-y-4 sm:space-y-0 sm:flex-row sm:justify-between">
                    <div className="flex flex-col items-center sm:flex-row sm:items-center space-y-4 sm:space-y-0">
                        <Link href="/home">
                            <img src="/image/logo.png" className="h-8" alt="Girl Talk Logo" />
                        </Link>
                        <span className="text-2xl font-bold font-Futura text-black sm:ml-4">
                            Recognised by:
                        </span>
                        <div className="flex flex-col items-center sm:flex-row sm:items-center sm:ml-2">
                            <img src="/image/Princeton.png" className="h-12" alt="Princeton logo" />
                            <p className="text-black font-Futura font-bold text-center sm:text-left sm:-ml-3">
                                Princeton Club of Hong Kong
                            </p>
                            <img src="/image/kiwanis.png" className="h-12 sm:ml-4 mt-4 sm:mt-0" alt="Kiwanis logo" />
                        </div>
                    </div>
                    
                    <ul className="flex justify-center space-x-4 sm:space-x-6">
                        <li>
                            <Link href="mailto:girl-talk@cis.edu.hk" target="blank">
                                <img src="/image/gmail.png" className="h-8 w-8" alt="Gmail" />
                            </Link>
                        </li>
                        <li>
                            <Link href="https://www.instagram.com/g1rltalkofficial/" target="_blank">
                                <img src="/image/Instagram_Glyph_Black.png" className="h-8 w-8" alt="Instagram" />
                            </Link>
                        </li>
                    </ul>
                </div>
                <hr className="my-6 border-black sm:mx-auto lg:my-8" />
                <span className="block text-sm font-Futura text-black text-center">
                    © 2024 <Link href="/home" className="font-Futura hover:underline">Girl Talk™</Link>. All Rights Reserved.
                </span>
            </div>
        </footer>
    );
}

export default Footer;

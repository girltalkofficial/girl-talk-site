"use client";
import React, { useState } from "react";
import Link from "next/link";

const Navbarhome: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItem = [
    {
      name: "Our Work",
      link: "/our-work",
    },
    {
      name: "Start a Chapter",
      link: "/get-involved/start-a-chapter",
    },
    {
      name: "Our Chapter Presidents",
      link: "/our-chapterpresidents",
    },
    
    {
      name: "Donate",
      link: "/donate",
    },
    
    {
      name: "Meet The Team",
      link: "/meet-the-team",
    },
    {
      name: "Blog",
      link: "https://girl-talk2.wixsite.com/girl-talk-blog",
    },
    {
      name: "Get In Touch",
      link: "/get-in-touch",
    },
    
  ];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="flex w-full h-20 items-center justify-between bg-white px-4 lg:px-8">
      {/* Logo and Desktop Menu */}
      <div className="flex items-center">
        <Link href="/home">
          <img src="/image/logo.png" alt="logo" className="h-10" />
        </Link>
        <div className="hidden lg:flex items-center ml-8 gap-x-[30px]">
          {menuItem.map((item, index) => (
            <Link href={item.link} key={index}>
              <button className="text-pink-400 py-2 hover:font-bold">
                {item.name}
              </button>
            </Link>
          ))}
        </div>
      </div>

      {/* Mobile Menu Button */}
      <div className="lg:hidden">
        <button
          onClick={toggleMenu}
          className="text-pink-400 focus:outline-none"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
            />
          </svg>
        </button>
      </div>

      {/* Mobile Side Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out lg:hidden z-50`}
      >
        <div className="flex justify-end p-4">
          <button
            onClick={toggleMenu}
            className="text-pink-400 focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <ul className="flex flex-col items-start p-4">
          {menuItem.map((item, index) => (
            <li key={index} className="w-full">
              <Link href={item.link}>
                <button
                  onClick={toggleMenu}
                  className="block w-full px-4 py-2 text-pink-400 font-Futura hover:font-bold text-left"
                >
                  {item.name}
                </button>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbarhome;

"use client";
import React from 'react'
import Link from "next/link"
import Image from 'next/image'
import {Dropdown, DropdownTrigger, DropdownMenu, DropdownItem} from "@nextui-org/dropdown"


const Navbarsides = () => 
{
    const menuItem = [
        {
          name:"Our Work",
          link:"/our-work"
        },
        {
          name:"Our Chapter Leads",
          link:"/our-chapterleads"
        },
        {
          name:"News",
          link:"/news"
        },
        {
          name:"Donate",
          link:"/donate"
        },
        {
          name:"About The Team",
          link:"/about-the-team"
        },
        {
          name:"Get In Touch",
          link:"/get-in-touch"
        }
      ]
    return(
    
    <nav className='flex w-full h-20 items-center justify-between bg-gray-200'>
      <div className = "flex items-center">
        <Link href = "/home" className = "size-14 ml-4">
          <img src= "/image/logo.png" alt='logo'/>
        </Link>

        <div className = "hidden lg:flex pl-[20px] gap-x-[30px]">
          {menuItem.map((item,index)=>(
            <Link href = {item.link} key = {index}>
              <button className = "bg-gray-400 rounded-md text-black hover:text-white px-3 py-[8px] hover:bg-black" key={index}>
                {item.name}
              </button>
            </Link>
          ))}
          <Dropdown
           classNames={{
            base: "before:bg-default-200", 
            content: "py-0 px-1 border border-gray ",
          }}>
      <DropdownTrigger>
        <button className = "bg-gray-400 rounded-md text-black hover:text-white px-3 py-[8px] hover:bg-black">
          Get Involved
        </button>
      </DropdownTrigger>
      <DropdownMenu className = "pt-3 text-black " aria-label="Static Actions">
        <DropdownItem className = " pl-8 hover:font-semibold" key="start" href = "/get-involved/start-a-chapter">Start a Chapter</DropdownItem>
        <DropdownItem className = " pr-0 hover:font-semibold" key="become" href = "/get-involved/become-an-ambassador">Become an Ambassador</DropdownItem>
      </DropdownMenu>
    </Dropdown>
        </div>
      </div>
    </nav>
    )

} 
export default Navbarsides
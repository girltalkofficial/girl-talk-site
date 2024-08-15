"use client";
import React, {useState} from 'react'
import Link from "next/link"
import Image from 'next/image'
import {Dropdown, DropdownTrigger, DropdownMenu, DropdownItem} from "@nextui-org/dropdown"


const Navbarhome = () => 
{
    const menuItem = [
        {
          name:"Our Work",
          link:"/our-work"
        },
        {
          name:"Our Chapter Presidents",
          link:"/our-chapterpresidents"
        },
      
        {
          name:"Donate",
          link:"/donate"
        },
  /*      
        {
          name:"News",
          link:"/news"
        },
*/
        {
          name:"Meet The Team",
          link:"/meet-the-team"
        },
        {
          name:"Get In Touch",
          link:"/get-in-touch"
        },
        {
          name:"Start a Chapter",
          link:"/get-involved/start-a-chapter"
        }
      ]
      const involved = [
        {
          name:"Start A Chapter",
          link:"/get-involved/start-a-chapter"
        },
   /*     {
          name:"Become An Ambassador",
          link:"/get-involved/become-an-ambassador"
        }
     */
      ]
      
    return(
    
    <nav className='flex w-full h-20  items-center justify-between bg-white'>
      <div className = "flex items-center">
        <Link href = "/home" className = "size-14 ml-4">
          <img src= "/image/logo.png" alt='logo'/>
        </Link>

        <div className = "hidden font-Futura lg:flex pl-[30px] gap-x-[30px]">
          {menuItem.map((item,index)=>(
            <Link href = {item.link} key = {index}>
              <button className = "bg-white rounded-none text-pink-400  py-[8px] hover:font-bold" key={index}>
                {item.name}
              </button>
            </Link>
          ))}

        </div>
      </div>
    </nav>
    )

} 
export default Navbarhome
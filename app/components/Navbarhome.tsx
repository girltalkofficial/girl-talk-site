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
           <Dropdown  
           classNames={{
            base: "before:bg-default-200", 
            content: "py-0 px--2 border border-size-3 ",
          }}>
      <DropdownTrigger >
        <button  className = "focus-visible:outline-none bg-white rounded-none text-pink-400  py-[8px] hover:font-bold">
          Get Involved
        </button>
      </DropdownTrigger>
      <DropdownMenu className = "bg-white text-pink-400" aria-label="Static Actions">
        <DropdownItem className ="pl-8 pr-8 font-Futura hover:font-bold" key="start" href = "/get-involved/start-a-chapter">Start a Chapter</DropdownItem>
{/*        <DropdownItem className ="pr-0 hover:font-semibold" key="become" href = "/get-involved/become-an-ambassador">Become an Ambassador</DropdownItem>*/}
      </DropdownMenu>
    </Dropdown>
        </div>
      </div>
    </nav>
    )

} 
export default Navbarhome
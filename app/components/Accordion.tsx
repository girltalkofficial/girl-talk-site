'use client'
import React,{useState} from "react";


const Accordion = (props: { children: React.ReactNode[]}) =>{
    const[accordionOpen, setAccordionOpen] = useState(false)

    return(
        <div className="py-4 ">
            <button onClick={()=> setAccordionOpen(!accordionOpen)} className="flex justify-between w-full">
                <span>{props.children[0]}</span>
                {accordionOpen ? <span>-</span> : <span>+</span>}
            </button>
            <div className={`grid overflow-hidden transition-all duration-300 ease-in-out text-xs ${
                accordionOpen 
                    ? 'grid-rows-[1fr] opacity-100' 
                    : 'grid-rows-[0fr] opacity-0'
                }`}
            >
                <div className="overflow-hidden ml-5">{props.children[1]}</div>
            </div>
        </div>
    )
}
export default Accordion;
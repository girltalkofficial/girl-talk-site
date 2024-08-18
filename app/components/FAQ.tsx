import React from "react";
import Accordion from "./Accordion"
import Link from "next/link"

const FAQ = () => {
    return(
        <div className="ml-28 mr-28 mt-20 p-8 text-white border-white border-2 bg-pink-400 rounded-lg">
            <p className="font-bold font-Futura text-5xl pb-5">Frequently Asked Questions</p>
           <Accordion>
            <p className="font-Futura text-xl hover:font-bold">Q) What are the age requirements for starting a chapter?</p>
            <p className="font-Futura text-lg font-light">You need to be in middle school, high school, or college.</p>
           </Accordion>
          
           <Accordion>
            <p className="font-Futura text-xl hover:font-bold">Q) Do all members need to be the same age?</p>
            <p className="font-Futura text-lg font-light">No. Members can be of all ages, though the dynamic between chapter leads and members may vary
                accordingly. For example, having younger members might mean that leads provide guidance, taking on
                instructor roles; whereas members the same age may create a more collaborative environment, with everyone
                contributing equally.</p>
           </Accordion>
          
           <Accordion>
            <p className="font-Futura text-xl hover:font-bold">Q) What do I do if I want to start a chapter, but can’t start a school club?</p>
            <p className="font-Futura text-lg font-light">Start a community based chapter and meet with members outside of school in your own time.</p>
           </Accordion>
           
           <Accordion>
            <p className="font-Futura text-xl hover:font-bold">Q) How long do I have to wait after filling in the form to start a chapter?</p>
            <p className="font-Futura text-lg font-light">As soon as you complete the online form you will be given a Google folder with all of the instructions and
                materials needed to get started right away. If you start a school club, you will be asked to upload proof of
                school approval during your first monthly check-in.</p>
           </Accordion>
          
           <Accordion>
            <p className="font-Futura text-xl hover:font-bold">Q) What else do I need to do after I start a chapter?</p>
            <p className="font-Futura text-lg font-light">We mandate monthly check-ins where you will provide numbers, events, and any photos you wish to
                present on our website or social media. One representative from each chapter will be asked to join monthly
                or annual Zoom meetings with all global chapter leads.</p>
           </Accordion>

           <Link href = "/get-in-touch">
            <div className="rounded-lg hover:scale-105 ml-48 mr-48 mt-5 bg-white">
           <div className='text-center text-pink-400 font-Futura pt-4 '>Any other questions?</div>
           <div className='text-center  pb-4 font-Futura text-pink-400 '>Click here to get in touch!</div>
           </div>
           </Link>
        </div>
    )
}
export default FAQ;
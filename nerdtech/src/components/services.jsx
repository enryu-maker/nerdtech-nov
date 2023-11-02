import React from 'react'
import web from "../assets/icons/responsive.gif"

const Services = () => {
  return (
    <div className='flex flex-col justify-center items-center w-[90%] border-2 border-red-600'>
        <div className="">OUR Services</div>
        <div className="flex">
            <div className="flex h-[200px] max-w-md rounded-md justify-between items-center overflow-hidden shadow-lg px-7 py-3 gap-7 cursor-pointer border-2 border-gray-200 hover:bg-gray-200">
                <img src={web} alt="" className='w-[fit] h-[100px] mix-blend-multiply'/>
                <div className="flex flex-col gap-2">
                        <h5 className='text-2xl font-bold' style={{ fontFamily:'nothing', letterSpacing:2}}>Web Design</h5>
                        <p className="text-sm " style={{ fontFamily:'nothing',letterSpacing:1.2}}>
                        In website development service we offers customized website design, development, and maintenance, catering to clients' specific needs, goals, and budget.
                        </p>
                </div>
            </div>
            <div className="">App Devlopment</div>
            <div className="">API Devlopment</div>
            
        </div>
        <div className="">
            <div className="">WordPress Website</div>
            <div className="">Digital Marketing</div>
            <div className="">Artifitial Intelligence</div>
        </div>
    </div>
  )
}

export default Services;
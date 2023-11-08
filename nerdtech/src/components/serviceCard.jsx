import React from 'react'
import wp from "../assets/icons/wplottie.json"
import Lottie from "lottie-react";


const ServiceCard = ({gif, title, desc, lottie }) => {
  return (
    <>
        <div className="flex h-[200px] w-[400px]  rounded-md justify-between items-center overflow-hidden shadow-lg px-7 py-3 gap-7 cursor-pointer border-2 border-gray-200 hover:bg-gray-100">
                {
                    lottie ? <Lottie animationData={wp} loop={true} className='w-fit h-[200px] mix-blend-multiply pr-10'/> : <img src={gif} alt="" className='w-[100px] h-[100px] mix-blend-multiply'/>
                    
                }
                
                <div className="flex flex-col gap-2">
                        <h5 className='text-2xl  font-bold' style={{ fontFamily:'nothing', letterSpacing:2}}>{title}</h5>
                        <p className="text-sm " style={{ fontFamily:'nothing',letterSpacing:1.2}}>
                            {desc}
                        </p>
                </div>
            </div>
    </>
  )
}

export default ServiceCard;
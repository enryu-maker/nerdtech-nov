import React from 'react'
import web from "../assets/icons/responsive.gif"
import ServiceCard from './serviceCard';
import { ServicesData } from '../assets/data';

const Services = () => {
  return (
    <div className='flex flex-col justify-center items-center w-[90%] '>
        <div className="text-4xl  px-24 py-10" style={{ fontFamily:'nothing', letterSpacing:2}}>OUR SERVICES</div>
        <div className="flex flex-wrap justify-center gap-10">
          {
            ServicesData.map((item, id)=>(

              <ServiceCard key={id} title={item.title} desc={item.desc} gif={item.gif} lottie={item.lottie}/>
            ))
          }
            
            
        </div>
        </div>
  )
}

export default Services;
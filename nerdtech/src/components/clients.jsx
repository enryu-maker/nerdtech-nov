import React from 'react'
// import am from "../assets/clients/Apnimandi.png"
// import as from "../assets/clients/asa.png"
// import et from "../assets/clients/East.png"
// import fb from "../assets/clients/fbbt.png"
// import gm from "../assets/clients/Gamma.png"
// import hh from "../assets/clients/HerdHelp.png"
// import sc from "../assets/clients/sdc.png"
// import he from "../assets/clients/he.png"
// import rs from "../assets/clients/rs.png"
// import og from "../assets/clients/og.png"
// import ps from "../assets/clients/ps.png"
import { ClientData } from '../assets/data'

const Clients = () => {
  return (
    <>
    <div id='clients' className='flex flex-col justify-center items-center w-[90%] py-24 '>
        <div className="text-4xl  px-24 py-10" style={{ fontFamily:'nothing', letterSpacing:2}}>OUR CLIENTS</div>
        <div className="flex flex-wrap justify-center gap-10"> 
        {
          ClientData.map((item,id)=>(

            <img src={item.img}  alt="" className='w-[135px] h-[135px] mix-blend-multiply rounded-full cursor-pointer grayscale transition ease delay-1500 hover:grayscale-0 ' />
          ))

        }
        
         </div>
    </div>
    </>
  )
}

export default Clients;
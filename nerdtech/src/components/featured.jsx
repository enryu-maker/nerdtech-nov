import React from 'react'
// import vector from '../assets/Background.png'
import vector from '../assets/vector.svg'

const Featured = () => {
  return (
    <div className='flex justify-between items-start w-screen   py-10 px-24 border-solid border-2 border-indigo-600 '>
        <div className=" flex flex-col items-start pl-32 pt-20 h-full w-[40%] gap-3 text-white border-solid border-2 border-red-500 ">
            <div className="text-2xl font-bold">We create ideas <br /> into  real Products</div>
            <div className="">We make your ideas come to life with the <br /> latest technology and assurred quality</div>
            <button className=' bg-blue-900 py-3 px-10 rounded-md'>ASK FOR QOUTE</button>
        </div>
        <div className="w-[40%] border-solid border-2 border-green-500 ">
            <img src={vector} alt="" className='w-[500px] h-[500px]' />
        </div>

    </div>
  )
}

export default Featured;
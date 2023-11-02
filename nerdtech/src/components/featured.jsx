import React from 'react'
// import vector from '../assets/Background.png'
import vector from '../assets/vector.svg'
import Count from './count';

const Featured = () => {
  return (<>
  
    <div className='flex justify-between items-start w-screen py-10 px-24 border-solid  ' style={{ fontFamily:'nothing'}}>
        <div className=" flex flex-col items-start pl-12 pt-14 h-full w-[50%] gap-5 text-white border-solid  ">
            <div className="text-4xl " style={{ fontSize: 55, letterSpacing:2, lineHeight:1 }}>We create ideas into <span className='text-yellow-400'>real Products</span> </div>
            <div className="text-lg" style={{ fontFamily:'nothing'}}>We make your ideas come to life with the latest technology and assurred quality</div>
            <button className=' bg-yellow-500 py-3 px-10 rounded-md text-white text-lg'>ASK FOR QOUTE</button>
            <div className="pt-8 pl-16">
          <Count/>
        </div>
        </div>
        <div className="w-[40%] border-solid  ">
            <img src={vector} alt="" className='w-[500px] h-[500px]' />
        </div>

        

    </div>
  </>
  )
}

export default Featured;
import React from 'react'
import bgdt from '../assets/DesktopDesign.png'
import dtbg from '../assets/desktopbg.jpeg'
import dtbgd from '../assets/DesktopDesign-3.png'
import dtbgt from '../assets/DesktopDesign-4.png'
import Featured from '../components/featured';
import Services from '../components/services'

const Home = () => {
  return (<>
  

  <div className="absolute inset-0 w-[100%] h-full bg-blue-500" style={{clipPath: "polygon(0 0, 100% 0, 100% 60%, 0 80%)", zIndex:-1}}/>
  {/* <img src={dtbgt} alt="" className='absolute inset-0 w-screen h-screen z-0' /> */}
    <div className='z-10'>
        <Featured/>
        {/* <Services/> */}
    </div>
  
    
  </>
  )
}

export default Home;
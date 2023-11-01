import React from 'react'
import bgdt from '../assets/DesktopDesign.png'
import dtbg from '../assets/desktopbg.jpeg'
import Featured from '../components/featured';

const Home = () => {
  return (<>
  <img src={dtbg} alt="" className='absolute inset-0 w-screen h-screen z-0' />
    <div className='z-10'>
        <Featured/>
    </div>
  </>
  )
}

export default Home;
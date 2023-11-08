import React from 'react'

const Footer = () => {
  return (
    <div className='flex max-md:flex-col bg-[#0f7abc] w-full h-[70px] py-10 px-24 max-md:px-7 justify-between max-md:justify-center  items-center text-white' style={{ fontFamily:'nothing', letterSpacing:2}}>
      <div className="">
        
      <span className='max-md:text-lg'>Made With Love ❤️ by Nerdtech</span>  
      </div>
      <div className="max-md:text-xs  ">
       &#169; 2023 NerdTech All Rights Reserved.
      </div>
       
    </div>
  )
}

export default Footer;
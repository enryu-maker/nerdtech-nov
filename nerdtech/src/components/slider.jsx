import React from 'react'
import a from '../assets/gp/DSC_2445.jpeg'
import b from '../assets/gp/DSC_2446.jpeg'
// import c from '../assets/gp/DSC_2450.jpeg'
import d from '../assets/gp/DSC_2451.jpeg'
import e from '../assets/gp/DSC_2453.jpeg'
import f from '../assets/gp/DSC_2454.jpeg'
// import g from '../assets/gp/DSC_2455.jpeg'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";


const Slider = () => {
  return (
    <div>
         <Carousel 
            autoPlay
            infiniteLoop
            swipeable={true}
            stopOnHover={false}
            showThumbs={false}
            // showIndicators={false}  
            showArrows={false}
            showStatus={false}
            interval={1500}
            transitionTime={1000}
            className=" overflow-hidden flex"
            >
                <div className='h-full w-full'>
                    <img src={a} className='' />
                     <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src={b} />
                    <p className="legend">Legend 2</p>
                </div>
                {/* <div>
                    <img src={c} />
                    <p className="legend">Legend 3</p>
                </div> */}
                <div>
                    <img src={d} />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src={e} />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src={f} />
                    <p className="legend">Legend 3</p>
                </div>
                {/* <div>
                    <img src={g} />
                    <p className="legend">Legend 1</p>
                </div> */}
                
            </Carousel>
    </div>
  )
}

export default Slider;
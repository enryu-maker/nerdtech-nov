import React from 'react'
import a from '../assets/gp/DSC_2445-min.jpeg'
import b from '../assets/gp/DSC_2446-min.jpeg'
// import c from '../assets/gp/DSC_2450.jpeg'
import d from '../assets/gp/DSC_2451-min.jpeg'
import e from '../assets/gp/DSC_2453-min.jpeg'
import f from '../assets/gp/DSC_2454-min.jpeg'
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
            stopOnHover={true}
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
                     <p className="legend"
                     style={{
                        fontFamily:'nothing',
                        fontSize:20,
                        color:'white',
                     }}
                     >VED : I'll complete this project with the finesse of a squirrel trying to organize its acorn collection during a hurricane.</p>
                </div>
                <div>
                    <img src={b} />
                    <p className="legend"
                    style={{
                        fontFamily:'nothing',
                        fontSize:20,
                        color:'white',
                     }}
                    >
                    Client: "We have a few more changes we'd like to make to the project."
                    </p>
                </div>
                {/* <div>
                    <img src={c} />
                    <p className="legend">Legend 3</p>
                </div> */}
                <div>
                    <img src={d} />
                    <p className="legend"
                    style={{
                        fontFamily:'nothing',
                        fontSize:20,
                        color:'white',
                     }}
                    >Client: "Thanks for all your hard work. The project turned out great!"</p>
                </div>
                <div>
                    <img src={e} />
                    <p className="legend"
                    style={{
                        fontFamily:'nothing',
                        fontSize:20,
                        color:'white',
                     }}
                    >
                        Client : "I've identified a bug in the system that needs attention. We should look into it and work on a solution."
                    </p>
                </div>
                <div>
                    <img src={f} />
                    <p className="legend"
                    style={{
                        fontFamily:'nothing',
                        fontSize:20,
                        color:'white',
                     }}
                    >
                    Client: "We're thrilled with the final delivery. Great job!"
                    </p>
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
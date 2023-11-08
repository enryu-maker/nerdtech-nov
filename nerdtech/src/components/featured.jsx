import React from "react";
// import vector from '../assets/Background.png'
import vector from "../assets/vector.svg";
import Count from "./count";

const Featured = () => {
  return (
    <>
      <div
        className="flex justify-between items-start w-full py-10  px-24 max-md:px-10 pt-28 max-md:pt-16 border-solid max-md:w-screen "
        style={{ fontFamily: "nothing" }}
      >
        <div className=" flex flex-col items-start pl-12  max-md:pl-0 pt-14 h-full w-[50%] max-md:w-full  gap-5 text-white  ">
          <div
            className="text-[55px] max-md:text-4xl    "
            style={{  letterSpacing: 2, lineHeight: 1 }}
          >
            We create ideas into{" "}
            <span className="text-[#f5e40b]">real Products</span>{" "}
          </div>
          <div className="text-lg " style={{ fontFamily: "nothing" }}>
            We make your ideas come to life with the latest technology and
            assurred quality
          </div>
          <button
            onClick={() => {
              window.scrollTo({
                top: document.getElementById("contact").offsetTop,
                behavior: "smooth",
              });
            }}
            className=" bg-[#f5e40b] py-3 px-10 rounded-md text-black text-lg max-md:text-sm"
          >
            ASK FOR QOUTE
          </button>
          <div className="pt-8 pl-16 max-md:pl-0 max-md:pt-10  ">
            <Count />
          </div>
        </div>
        <div className="w-[40%] border-solid max-md:hidden ">
          <img src={vector} alt="" className="w-[500px] h-[500px]" />
        </div>
      </div>
    </>
  );
};

export default Featured;

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/nlogo.png"

const Header = () => {
  const [active, setActive]=useState(false)

  const isActive =() => {
    window.scrollY >0 ? setActive(true) : setActive(false);
}

useEffect(()=>{
  window.addEventListener("scroll", isActive);
  return ()=>{
      window.addEventListener("scroll", isActive);
  }

},[])

  return (
    <div className="fixed flex  text-[#0f7abc]  justify-between items-center top-0 h-[75px]  z-50 w-screen px-24 py-5 bg-white/70 backdrop-blur-md " style={{ fontFamily:'nothing', letterSpacing:2}}>
      <div className="text-2xl font-bold flex items-center justify-center">
        <img src={logo} alt="" className="h-[100px] w-[100px]" />
        NerdTech</div>
      <div className="flex gap-10"> 
        <Link
        onClick={() => {
          window.scrollTo({
            top: document.getElementById("home").offsetTop,
            behavior: "smooth",
          });
        }}
        >HOME </Link>
        <Link
        onClick={() => {
          window.scrollTo({
            top: document.getElementById("service").offsetTop,
            behavior: "smooth",
          });
        }}
        >SERVICES</Link>
        <Link
        onClick={() => {
          window.scrollTo({
            top: document.getElementById("clients").offsetTop,
            behavior: "smooth",
          });
        }}>CLIENTS </Link>
        <Link
        onClick={() => {
          window.scrollTo({
            top: document.getElementById("about").offsetTop,
            behavior: "smooth",
          });
        }}
        >ABOUT US</Link>
        <Link
        onClick={() => {
          window.scrollTo({
            top: document.getElementById("contact").offsetTop,
            behavior: "smooth",
          });
        }}
        >CONTACT US</Link>
      </div>
    </div>
  );
};

export default Header;

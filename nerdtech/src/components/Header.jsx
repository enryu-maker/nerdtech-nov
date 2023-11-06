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
    <>
   
    <div className="max-sm:hidden fixed flex  text-[#0f7abc]  justify-between items-center top-0 h-[75px]  z-50 w-screen px-24 py-5 bg-white/70 backdrop-blur-md " style={{ fontFamily:'nothing', letterSpacing:2}}>
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
    
    
<div className="sm:hidden block">
NavBar
</div>

    </>


/* <nav    className="max-sm:hidden fixed flex  text-[#0f7abc]  justify-between items-center top-0 h-[75px]  z-50 w-screen px-24 py-5 bg-white/70 backdrop-blur-md " style={{ fontFamily:'nothing', letterSpacing:2}}>
  <div className=" flex w-full flex-wrap items-center justify-between mx-auto p-4">
    <a href="/" className="flex items-center">
         <img src={logo} alt="" className="h-[100px] w-[100px]" />
        <span className="self-center text-2xl font-bold whitespace-nowrap ">NerdTech</span>
    </a>
    <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none " aria-controls="navbar-default" aria-expanded="false">
        <span className="sr-only">Open main menu</span> 
        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
    </button> 
    <div className=" hidden w-full md:block md:w-auto" id="navbar-default">
      <ul className="font-medium flex flex-col p-4 md:p-0 mt-4  sm:flex-row md:space-x-8 md:mt-0 md:border-0">
        <li>
          <Link className="block py-2 pl-3 pr-4 text-black    md:bg-transparent md:text-blue-700 md:p-0 dark:text-white " >HOME</Link>
        </li>
       
        <li>
          <Link className="block py-2 pl-3 pr-4 text-black   md:hover:bg-transparent  md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">SERVICES</Link>
        </li>
        <li>
          <Link className="block py-2 pl-3 pr-4 text-black   md:hover:bg-transparent  md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">CLIENTS</Link>
        </li>
        <li>
          <Link className="block py-2 pl-3 pr-4 text-black   md:hover:bg-transparent  md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">ABOUT US</Link>
        </li>
        <li>
          <Link className="block py-2 pl-3 pr-4 text-black   md:hover:bg-transparent  md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">CONTACT US</Link>
        </li>
      </ul>
    </div>
  </div>
</nav> */

  );
};

export default Header;
